import { fromUnixTime, lightFormat } from "date-fns";
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
export const responseAvailableTimes = {
  availableTimes: [
    1567782000,
    1567783200,
    1567784400,
    1567785600,
    1568041200,
    1568042400,
    1568043600,
    1568044800,
    1568046000,
    1568047200,
    1568048400,
    1568127600,
    1568128800,
    1568130000,
    1568131200,
    1568132400,
    1568133600,
    1568134800,
    1568214000,
    1568215200,
    1568216400,
    1568217600,
    1568218800,
    1568220000,
    1568221200,
    1568300400,
    1568301600,
    1568302800,
    1568304000,
    1568305200,
    1568306400,
    1568307600,
    1568386800,
    1568388000,
    1568389200,
    1568390400,
    1568646000,
    1568647200,
    1568648400,
    1568649600,
    1568650800,
    1568652000,
    1568653200,
    1568732400,
    1568733600,
    1568734800,
    1568736000,
    1568737200,
    1568738400,
    1568739600,
    1568818800,
    1568820000,
    1568821200,
    1568822400,
    1568823600,
    1568824800,
    1568826000,
    1568908800,
    1568910000,
    1568911200,
    1568912400,
    1568991600,
    1568998800,
    1569250800,
    1569252000,
    1569253200,
    1569254400,
    1569255600,
    1569256800,
    1569258000,
    1569337200,
    1569338400,
    1569339600,
    1569340800,
    1569342000,
    1569343200,
    1569344400,
    1569423600,
    1569424800,
    1569426000,
    1569427200,
    1569428400,
    1569429600,
    1569430800,
    1569510000,
    1569511200,
    1569512400,
    1569513600,
    1569514800,
    1569516000,
    1569517200,
    1569596400,
    1569597600,
    1569598800,
    1569600000,
    1569601200,
    1569602400,
    1569603600,
    1569855600,
    1569856800,
    1569858000,
    1569859200,
    1569860400,
    1569861600,
    1569862800,
    1569942000,
    1569943200,
    1569944400,
    1569945600,
    1569946800,
    1569948000,
    1569949200,
    1570028400,
    1570029600,
    1570030800,
    1570032000,
    1570033200,
    1570034400,
    1570035600,
    1570114800,
    1570116000,
    1570117200,
    1570118400,
    1570119600,
    1570120800,
    1570122000,
    1570201200,
    1570202400,
    1570203600,
    1570204800,
    1570206000,
    1570207200,
    1570208400,
    1570460400,
    1570461600,
    1570462800,
    1570464000,
    1570465200,
    1570466400,
    1570467600,
    1570546800,
    1570548000,
    1570549200,
    1570550400,
    1570551600,
    1570552800,
    1570554000,
    1570633200,
    1570634400,
    1570635600,
    1570636800,
    1570638000,
    1570639200,
    1570640400,
    1570719600,
    1570720800,
    1570722000,
    1570723200,
    1570724400,
    1570725600,
    1570726800,
    1570806000,
    1570807200,
    1570808400,
    1570809600,
    1570810800,
    1570812000,
    1570813200,
    1571065200,
    1571066400,
    1571067600,
    1571068800,
    1571070000,
    1571071200,
    1571072400,
    1571151600,
    1571152800,
    1571154000,
    1571155200,
    1571156400,
    1571157600,
    1571158800,
    1571238000,
    1571239200,
    1571240400,
    1571241600,
    1571242800,
    1571244000,
    1571245200,
    1571324400,
    1571325600,
    1571326800,
    1571328000,
    1571329200,
    1571330400,
    1571331600,
    1571410800,
    1571412000,
    1571413200,
    1571414400,
    1571415600,
    1571416800,
    1571418000,
    1571670000,
    1571671200,
    1571672400,
    1571673600,
    1571674800,
    1571676000,
    1571677200,
    1571756400,
    1571757600,
    1571758800,
    1571760000,
    1571761200,
    1571762400,
    1571763600,
    1571842800,
    1571844000,
    1571845200,
    1571846400,
    1571847600,
    1571848800,
    1571850000,
    1571929200,
    1571930400,
    1571931600,
    1571932800,
    1571934000,
    1571935200,
    1571936400,
    1572015600,
    1572016800,
    1572018000,
    1572019200,
    1572020400,
    1572021600,
    1572022800,
    1572274800,
    1572276000,
    1572277200,
    1572278400,
    1572279600,
    1572280800,
    1572282000,
    1572361200,
    1572362400,
    1572363600,
    1572364800,
    1572366000,
    1572367200,
    1572368400,
    1572447600,
    1572448800,
    1572450000,
    1572451200,
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
  ],
  timezone: "America/Phoenix"
};
export const helpers = {
  constants: {
    MORNING: 9,
    AFTERNOON: 12,
    EVENING: 17
  },
  getReadableDate: date => lightFormat(date, "yyyy-MM-dd"),
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
export const responseAvailableTimesSmall = {
  availableTimes: [1569944400, 1569945600, 1570118400, 1570119600, 1570120800],
  timezone: "America/Phoenix"
};

export const getDates = ({ availableTimes, timezone }) => {
  const dates = availableTimes.map(timestamp => {
    const dateInTimezone = utcToZonedTime(fromUnixTime(timestamp), timezone);
    return dateInTimezone;
  });
  // return an array of dates
  return dates;
};

// transform api respone to new format need for this app
export const transformedApiResponse = ({ availableTimes, timezone }) => {
  const reduceDate = (datesAndTimes, dateobj) => {
    const dateString = helpers.getReadableDate(dateobj);
    const time = helpers.getReadableTime(dateobj);
    const timeOfDay = helpers.getTimeOfDay(dateobj);

    const timeSlotsForThisDay = datesAndTimes[dateString];
    datesAndTimes = {
      ...datesAndTimes,
      [dateString]: {
        ...timeSlotsForThisDay
      }
    };
  };

  // map timestamps to dates and then reduce those dates to an obj.
  // obj of datestrings mapping to an object representing the available times in the day (seperated by morn, afternoon, evening)
  return availableTimes
    .map(timestamp => {
      const dateInTimezone = utcToZonedTime(fromUnixTime(timestamp), timezone);
      return dateInTimezone;
    })
    .reduce(reduceDate, {});
};

// 1568991600 timestamp -> sept 20, 2019. 11am in New York, but 8am in Phoenix.
// need to get phoenix.
const timestamp1 = 1568991600;
console.log("hi!");
const time = fromUnixTime(1568991600);
console.log("new york time: ", time);
const dateObjInPhoenix = utcToZonedTime(time, "America/Phoenix");
console.log("phoenix time: ", dateObjInPhoenix);
console.log("readable date", helpers.getReadableDate(dateObjInPhoenix));
console.log("readable time", helpers.getReadableTime(dateObjInPhoenix));
console.log("dates: ", getDates(responseAvailableTimesSmall));

console.log("Lenses ---------------");
const obj = {
  "2019-09-20": "bob"
};
const supercoolLens = R.lensPath("2019-09-20", "morning");
console.log(obj["2019-09-20"].morning[0]);
console.log(R.view(supercoolLens, obj));
