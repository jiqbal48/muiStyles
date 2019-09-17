import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

// object of styles; and create the function useStyles via the hook. whatever that means..
const styleObj = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: "3px dashed green",
    padding: "30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    display: "flex",
    flexWrap: "wrap"
  },
  grouped: {
    padding: "10px 0px",
    "&:not(:first-child)": {
      border: "1px solid palevioletred"
    },
    "&:not(:last-child)": {
      border: "1px solid palevioletred"
    }
  }
};
const useStyles = makeStyles(styleObj);

// define the overriden component
function OverridingToggleGroup(props) {
  const zeClasses = useStyles();
  const { classes, children, ...other } = props;

  return (
    <ToggleButtonGroup
      classes={{ root: zeClasses.root, grouped: zeClasses.grouped }}
      {...other}
    >
      {children}
    </ToggleButtonGroup>
  );
}

OverridingToggleGroup.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default OverridingToggleGroup;
