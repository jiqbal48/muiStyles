import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  toggleContainer: {
    margin: theme.spacing(2, 0)
  }
}));

export default function MySuperCoolToggleButtons() {
  const [timeSlot, chooseTimeSlot] = React.useState(1);

  const handleTimeSelection = (event, newAlignment) => {
    chooseTimeSlot(newAlignment);
  };

  const classes = useStyles();

  console.log("hi");
  return (
    <div className={classes.toggleContainer}>
      <p>hi</p>
      <ToggleButtonGroup
        value={timeSlot}
        exclusive
        onChange={handleTimeSelection}
        aria-label="text alignment"
      >
        <ToggleButton value={1} aria-label="left aligned">
          <span>7:30am</span>
        </ToggleButton>
        <ToggleButton value={2} aria-label="centered">
          <span>8:30am</span>
        </ToggleButton>
        <ToggleButton value={3} aria-label="right aligned">
          <span>9:30am</span>
        </ToggleButton>
        <ToggleButton value={4} aria-label="justified" disabled>
          <span>10:30am</span>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
