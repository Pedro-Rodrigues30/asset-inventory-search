import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  item: {
    padding: "20px",
  },
  kpis: {
    display: "flex",
  },
  timestamp: {
    paddingRight: "20px",
    borderRight: `solid 1px`,
    marginRight: "20px",
  },
  timestamp2: {
    padding: "20px",
  },
  columnSplitter: {
    background: "20px",
    width: "1px",
    height: "16px",
    marginRight: "20px",
  },
  icon: {
    margin: "20px",
  },
}));

export default useStyles;
