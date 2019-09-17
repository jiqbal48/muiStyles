import React from "react";
import clsx from "clsx";
import ToggleButton from "@material-ui/lab/ToggleButton";
import MyToggleGroup from "./overriddenTGroup";
import { makeStyles } from "@material-ui/styles";

const classDefinitions = {
  myTogun: {
    border: "2px solid cornflowerblue",
    borderRadius: 3,
    height: 48,
    padding: "0 30px",
    margin: "0 15px",
    color: "gold"
  }
};
const useStyles = makeStyles(classDefinitions);

// time slots
export default function MySuperCoolToggleButtons() {
  // use styles hook
  const classes = useStyles();
  // personal state/backyard using hooks
  const [timeSlot, chooseTimeSlot] = React.useState(1);
  const handleTimeSelection = (event, newAlignment) => {
    chooseTimeSlot(newAlignment);
    console.log("newly chosen timeslot: ", timeSlot);
  };

  // template
  return (
    <div
      style={{
        width: "700px",
        height: "300px",
        padding: "30px",
        border: "1px solid palevioletred",
        display: "flex"
      }}
    >
      <MyToggleGroup
        value={timeSlot}
        exclusive
        onChange={handleTimeSelection}
        aria-label="time slots"
        className={classes.myTogunGroup}
      >
        <ToggleButton className={classes.myTogun} value={1} aria-label="7:30am">
          <span>7:30am</span>
        </ToggleButton>
        <ToggleButton className={classes.myTogun} value={2} aria-label="8:30am">
          <span>8:30am</span>
        </ToggleButton>
        <ToggleButton className={classes.myTogun} value={3} aria-label="9:30am">
          <span>9:30am</span>
        </ToggleButton>
        <ToggleButton
          className={classes.myTogun}
          value={4}
          aria-label="10:30am"
        >
          <span>10:30am</span>
        </ToggleButton>
        <ToggleButton className={classes.myTogun} value={5} aria-label="7:30am">
          <span>7:30am</span>
        </ToggleButton>
        <ToggleButton className={classes.myTogun} value={6} aria-label="8:30am">
          <span>8:30am</span>
        </ToggleButton>
        <ToggleButton className={classes.myTogun} value={7} aria-label="9:30am">
          <span>9:30am</span>
        </ToggleButton>
        <ToggleButton
          className={classes.myTogun}
          value={8}
          aria-label="10:30am"
        >
          <span>10:30am</span>
        </ToggleButton>
        <ToggleButton className={classes.myTogun} value={9} aria-label="7:30am">
          <span>7:30am</span>
        </ToggleButton>
        <ToggleButton
          className={classes.myTogun}
          value={10}
          aria-label="8:30am"
        >
          <span>8:30am</span>
        </ToggleButton>
        <ToggleButton
          className={classes.myTogun}
          value={11}
          aria-label="9:30am"
        >
          <span>9:30am</span>
        </ToggleButton>
        <ToggleButton
          className={classes.myTogun}
          value={12}
          aria-label="10:30am"
        >
          <span>10:30am</span>
        </ToggleButton>
      </MyToggleGroup>
    </div>
  );
}
