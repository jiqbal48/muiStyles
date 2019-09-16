import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { styled } from "@material-ui/styles";

// custom components
const MyTogun = styled(ToggleButton)({
  border: "2px solid cornflowerblue",
  borderRadius: 3,
  height: 48,
  padding: "0 30px",
  margin: "0 15px"
});
const MyTogunGroup = styled(ToggleButtonGroup)({
  display: "flex",
  flexWrap: "wrap"
});

// time slots
export default function MySuperCoolToggleButtons() {
  // personal state/backyard using hooks
  const [timeSlot, chooseTimeSlot] = React.useState(1);
  const handleTimeSelection = (event, newAlignment) => {
    chooseTimeSlot(newAlignment);
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
      <MyTogunGroup
        value={timeSlot}
        exclusive
        onChange={handleTimeSelection}
        aria-label="time slots"
      >
        <MyTogun value={1} aria-label="7:30am">
          <span>7:30am</span>
        </MyTogun>
        <MyTogun value={2} aria-label="8:30am">
          <span>8:30am</span>
        </MyTogun>
        <MyTogun value={3} aria-label="9:30am">
          <span>9:30am</span>
        </MyTogun>
        <MyTogun value={4} aria-label="10:30am">
          <span>10:30am</span>
        </MyTogun>
        <MyTogun value={5} aria-label="7:30am">
          <span>7:30am</span>
        </MyTogun>
        <MyTogun value={6} aria-label="8:30am">
          <span>8:30am</span>
        </MyTogun>
        <MyTogun value={7} aria-label="9:30am">
          <span>9:30am</span>
        </MyTogun>
        <MyTogun value={8} aria-label="10:30am">
          <span>10:30am</span>
        </MyTogun>
        <MyTogun value={9} aria-label="7:30am">
          <span>7:30am</span>
        </MyTogun>
        <MyTogun value={10} aria-label="8:30am">
          <span>8:30am</span>
        </MyTogun>
        <MyTogun value={11} aria-label="9:30am">
          <span>9:30am</span>
        </MyTogun>
        <MyTogun value={12} aria-label="10:30am">
          <span>10:30am</span>
        </MyTogun>
      </MyTogunGroup>
    </div>
  );
}
