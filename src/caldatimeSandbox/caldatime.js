import React from "react";
import { fromUnixTime } from "date-fns";
import TimeSelection from "./chooseTimeslot";
import { smallTimes } from "./mockData";

const timestamp1 = smallTimes.times[0];
console.log("hi!");
console.log(fromUnixTime(timestamp1));

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
