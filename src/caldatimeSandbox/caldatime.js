import React from "react";
import { fromUnixTime } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import TimeSelection from "./chooseTimeslot";
import { smallTimes } from "./mockData";

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
