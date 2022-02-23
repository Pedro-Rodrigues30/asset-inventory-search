import React from "react";
import { useTranslation } from "react-i18next";
import { HvAssetInventory, HvCardView, HvEmptyState } from "@hitachivantara/uikit-react-core";
import { Cards, Fail, List } from "@hitachivantara/uikit-react-icons";
import { usePeople } from "./data";
import { actions, configuration } from "./utils";
import cardRenderer from "./Card";

const AssetInventory = () => {
  const { t } = useTranslation();

  const { data } = usePeople();

  const labels = {
    search: t("components.characters.assetInventory.searchLabel"),
    cardView: t("components.characters.assetInventory.cardViewLabel"),
    listView: t("components.characters.assetInventory.listViewLabel"),
    noMessage: t("components.characters.assetInventory.noMessageLabel"),
  };

  const people = data?.allPeople.edges.map(({ node }) => ({ ...node }));

  return data ? (
    <HvAssetInventory
      id="hv-assetinventory"
      values={people}
      configuration={configuration}
      actions={actions}
      actionsCallback={(e, id, action) =>
        // eslint-disable-next-line no-console
        console.log(`You have pressed action ${action.label}`)
      }
      hasPagination
      pageSize={8}
      pageSizeOptions={[2, 4, 6, 8]}
      multibuttonProps={[
        {
          id: "card-button",
          icon: <Cards />,
        },
        { id: "list-button", icon: <List /> },
      ]}
      emptyComponent={
        <HvEmptyState message={labels.noMessage} icon={<Fail iconSize="S" color="acce1" />} />
      }
    >
      <HvCardView id="card" renderer={cardRenderer} />
    </HvAssetInventory>
  ) : (
    <div>Loading</div>
  );
};

export default AssetInventory;
