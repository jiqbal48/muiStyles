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

const MyTogun = styled(ToggleButton)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px"
});

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
        <MyTogun value={1} aria-label="left aligned">
          <span>7:30am</span>
        </MyTogun>
        <MyTogun value={2} aria-label="centered">
          <span>8:30am</span>
        </MyTogun>
        <MyTogun value={3} aria-label="right aligned">
          <span>9:30am</span>
        </MyTogun>
        <MyTogun value={4} aria-label="justified">
          <span>10:30am</span>
        </MyTogun>
      </ToggleButtonGroup>
    </div>
  );
}
