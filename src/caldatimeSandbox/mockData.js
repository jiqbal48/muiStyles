import { getUnixTime, fromUnixTime, lightFormat } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import * as R from "ramda";

export const mockStringsResource = [
  {
    keyName: "scheduleAppt.action.backToDashboard",
    value: {
      en: "Dashboard",
      es: "Panel de control"
    },
    html: false
  },
  {
    keyName: "scheduleAppt.topBar.selectLocation",
    value: {
      en: "SELECT A LOCATION",
      es: "SELECCIONAR UNA UBICACIÓN"
    },
    html: false
  },
  {
    keyName: "scheduleAppt.topBar.preRegistrationQuestions",
    value: {
      en: "PRE-REGISTRATION QUESTIONS",
      es: "PREGUNTAS DE PREREGISTRO"
    },
    html: false
  },
  {
    keyName: "scheduleAppt.topBar.selectDateTime",
    value: {
      en: "SELECT DATE & TIME",
      es: "SELECCIONAR FECHA Y HORA"
    },
    html: false
  },
  {
    keyName: "scheduleAppt.action.chooseDifferentLocation",
    value: {
      en: "Choose different location",
      es: "Elija otra ubicación"
    },
    html: false
  },
  {
    keyName: "scheduleAppt.selectTimeSection.title",
    value: {
      en: "Select time",
      es: "Elija la hora"
    },
    html: false
  },
  {
    keyName: "scheduleAppt.selectTimeSection.timesInLocalTimezone",
    value: {
      en:
        "All times listed below are in the selected location’s local time zone",
      es:
        "Los siguientes horarios están en la hora local de la ubicación elegida."
    },
    html: false
  },
  {
    keyName: "scheduleAppt.action.scheduleAppt",
    value: {
      en: "Schedule",
      es: "Programar"
    },
    html: false
  },
  {
    keyName: "scheduleAppt.selectTimeSection.noTimesAvailable",
    value: {
      en:
        "We’re sorry but there are no appointment times available. Please choose a",
      es:
        "Lo sentimos, pero no hay horarios de citas disponibles. Por favor, elija una ubicación diferente"
    },
    html: false
  },
  {
    keyName: "scheduleAppt.action.noTimesDifferentLocation",
    value: {
      en: "different location.",
      es: "ubicación diferente. "
    },
    html: false
  },
  {
    keyName: "date.daytime.morning",
    value: {
      en: "Morning",
      es: "Mañana"
    },
    html: false
  },
  {
    keyName: "date.daytime.afternoon",
    value: {
      en: "Afternoon",
      es: "Tarde"
    },
    html: false
  },
  {
    keyName: "date.daytime.evening",
    value: {
      en: "Evening",
      es: "Noche"
    },
    html: false
  }
];
/*
    1572452400,
    1572453600,
    1572454800,
    1572534000,
    1572535200,
    1572536400,
    1572537600,
    1572538800,
    1572540000,
    1572541200,
    1572620400,
    1572621600,
    1572622800,
    1572624000,
    1572625200,
    1572626400,
    1572627600
 */
export const responseAvailableTimes = {
  availableTimes: [
    1572448800,
    1572450000,
    1572451200,
  ],
  timezone: "America/Phoenix"
};
export const helpers = {
  constants: {
    MORNING: 9,
    AFTERNOON: 12,
    EVENING: 17
  },
  getDateInTimezone: (timestamp, zone) => {
    return utcToZonedTime(fromUnixTime(timestamp), zone);
  },
  getReadableDate: (date) => {
    return lightFormat(date, "yyyy-MM-dd");
  },
  getReadableTime: date => lightFormat(date, "H:mm aa").toLowerCase(),
  getTimeOfDay: date => {
    const hours = date.getHours();
    if (hours < helpers.constants.AFTERNOON) {
      // displays morning for anything below 12
      return "morning";
    } else if (hours < helpers.constants.EVENING) {
      // displays morning for anything including 12 to 5. not including 5
      return "afternoon";
    } else {
      return "evening";
    }
  }
};

// transform api respone to new format need for this app
export const transformedApiResponse = ({ availableTimes, timezone:zone }) => {
  debugger;
  // reducer function
  const reduceDate = (datesAndTimes, timestamp) => {
    const dateObj = helpers.getDateInTimezone(timestamp, zone);
    const readableDate = helpers.getReadableDate(dateObj);
    const readableTime = helpers.getReadableTime(timestamp);
    const timeOfDay = helpers.getTimeOfDay(timestamp);

    /*
    example data struct
    {
    '2019-09-02': {
        morning: {
          '7:30 am': 123412341234,
          '7:30 am': 123412341234,
          '7:30 am': 123412341234,
        },
        afternoon: {
          '7:30 am': 123412341234,
          '7:30 am': 123412341234,
          '7:30 am': 123412341234,
        },
        evening: {
          '7:30 am': 123412341234,
          '7:30 am': 123412341234,
          '7:30 am': 123412341234,
        }
      },
          '2019-09-02': {
        morning: {
          '7:30 am': 123412341234,
          '7:30 am': 123412341234,
          '7:30 am': 123412341234,
        },
        afternoon: {
          '7:30 am': 123412341234,
          '7:30 am': 123412341234,
          '7:30 am': 123412341234,
        },
        evening: {
          '7:30 am': 123412341234,
          '7:30 am': 123412341234,
          '7:30 am': 123412341234,
        }
      }
    }
     */
    const timeSlotLens = R.lensPath([readableDate, timeOfDay, readableTime]);
    const newDatesAndTimes = R.set(timeSlotLens, timestamp, datesAndTimes);
    return newDatesAndTimes;
  };

  // map timestamps to dates and then reduce those dates to an obj.
  // obj of datestrings mapping to an object representing the available times in the day (seperated by morn, afternoon, evening)
  return availableTimes.reduce(reduceDate, {});
};

// 1568991600 timestamp -> sept 20, 2019. 11am in New York, but 8am in Phoenix.
// need to get phoenix.
const timestamp1 = 1568991600;
console.log("hi!");
const time = fromUnixTime(1568991600);
console.log("new york time: ", time);
const dateObjInPhoenix = utcToZonedTime(time, "America/Phoenix");
console.log("phoenix time: ", dateObjInPhoenix);
console.log("transformed Obj: ", transformedApiResponse(responseAvailableTimes));

console.log("Lenses ---------------");
const obj = {
  "2019-09-20": {
    morning: {
      "7:30 am": 1568991600
    }
  }
};
const supercoolLens = R.lensPath(["2019-09-20", "morning", "7:30 am"]);
console.log(obj["2019-09-20"].morning);
console.log(R.view(supercoolLens, obj));
console.log("Lenses --------------- END");
