import React from "react";
import { fromUnixTime } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import TimeSelection from "./chooseTimeslot";
import { smallTimes } from "./mockData";

// 1568991600 timestamp -> sept 20, 2019. 11am in New York, but 8am in Phoenix.
// need to get phoenix.
const timestamp1 = 1568991600;
console.log("hi!");
const time = fromUnixTime(1568991600);
console.log("new york time: ", time);
const timeinzone = utcToZonedTime(time, "America/Phoenix");
console.log("phoenix time: ", timeinzone);

export default () => {
  const timeSelectionData = {
    strings: [
      {
        keyName: "",
        value: {
          en: "Continue",
          es: "Continuar"
        },
        html: false
      },
      {
        keyName: "",
        value: {
          en: "Validate",
          es: "Verificar"
        },
        html: false
      }
    ]
  };
  return <TimeSelection />;
};
