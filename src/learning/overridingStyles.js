import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// object of styles
const styleObj = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "cornflowerblue",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
};
const useStyles = makeStyles(styleObj);

function OverridingButton(props) {
  const zeClasses = useStyles();
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(zeClasses.root, className)} {...other}>
      {children || "class names"}
    </Button>
  );
}

OverridingButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default OverridingButton;
