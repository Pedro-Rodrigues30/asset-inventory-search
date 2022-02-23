import { HvDropdown } from "@hitachivantara/uikit-react-core";
import { makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  dialog: {
    "& .HvDialog-paper": {
      width: "100%",
    },
    "& .HvDialogContent-root": {
      height: "120px",
    },
  },
}));

export const StyledDropdown = withStyles({
  root: {
    width: "300px",
  },
})(HvDropdown);

export default useStyles;
