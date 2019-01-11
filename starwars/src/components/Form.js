import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const Form = ({ classes, searchText, handleChange, handleSubmit }) => {
  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={searchText}
        name="searchText"
        onChange={handleChange}
        margin="normal"
      />
    </form>
  );
};

export default withStyles(styles)(Form);
