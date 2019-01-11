import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});
const Pagination = props => {
  const { classes } = props;

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        disabled={!props.previous ? true : null}
        className={classes.button}
        onClick={props.previousPage}
      >
        PREVIOUS
      </Button>
      <Button
        disabled={!props.next ? true : null}
        onClick={props.nextPage}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        NEXT
      </Button>
    </div>
  );
};

export default withStyles(styles)(Pagination);
