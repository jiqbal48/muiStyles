import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1)
  },
  radio: {
    display: "none"
  },
  formControlLabel: {
    color: "red"
  }
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio className={classes.radio} />}
            label="Female"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            value="male"
            control={<Radio className={classes.radio} />}
            label="Male"
            className={classes.formControlLabel}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
