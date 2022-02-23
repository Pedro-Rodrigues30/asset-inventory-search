import {
  HvButton,
  HvDialog,
  HvDialogActions,
  HvDialogContent,
  HvDialogTitle,
  HvGrid,
  HvProvider,
  ListValueProp,
} from "@hitachivantara/uikit-react-core";
import React, { useMemo } from "react";
import useStyles, { StyledDropdown } from "styles";

const App: React.FC = () => {
  const { dialog } = useStyles();

  const values = useMemo(() => {
    const values1: Array<ListValueProp> = [];
    for (let i = 0; i < 1500; i += 1) {
      values1.push({
        id: `${i}`,
        label: `value  ${i}`,
      });
    }
    return values1;
  }, []);
  return (
    <HvProvider>
      <HvDialog className={dialog} disableBackdropClick id="test" open={true} onClose={() => {}}>
        <HvDialogTitle variant="warning">Switch model view?</HvDialogTitle>
        <HvDialogContent indentContent>
          <HvGrid container>
            <HvGrid item xs={5} container>
              <HvGrid item xs={12}>
                <StyledDropdown
                  aria-label="More than 1000 items"
                  values={values}
                  virtualized
                  height={350}
                  hasTooltips
                  showSearch
                />
              </HvGrid>
            </HvGrid>
          </HvGrid>
        </HvDialogContent>
        <HvDialogActions>
          <HvButton id="apply" category="ghost">
            Apply
          </HvButton>
          <HvButton id="cancel" category="ghost" onClick={() => {}}>
            Cancel
          </HvButton>
        </HvDialogActions>
      </HvDialog>
    </HvProvider>
  );
};

export default App;
