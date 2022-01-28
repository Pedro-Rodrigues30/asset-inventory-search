import {
  AssetInventoryConfiguration,
  AssetInventoryMetadata,
} from "@hitachivantara/uikit-react-core";

const metadata: AssetInventoryMetadata[] = [
  {
    id: "id1",
    accessor: "name",
    cellType: "alpha-numeric",
    searchable: true,
    sortable: true,
    sortableLabelAsc: "Name ascending",
    sortableLabelDesc: "Name descending",
  },
  {
    id: "id2",
    accessor: "birthYear",
    cellType: "alpha-numeric",
    sortable: true,
    sortableLabelAsc: "Birthday ascending",
    sortableLabelDesc: "Birthday descending",
  },
];

const viewConfiguration: AssetInventoryConfiguration = {
  breakpoints: { xs: 12, sm: 6, md: 4, lg: 3, xl: 3 },
  columnConfiguration: [
    { style: { width: 1, textAlign: "center" } },
    {
      title: "Event",
      style: { minWidth: "360px", textAlign: "start" },
    },
    {
      title: "Probability",
      style: { minWidth: "80px", textAlign: "end" },
    },
    {
      title: "Time horizon",
      style: { minWidth: "100px", textAlign: "end" },
    },
    {
      title: "Related Assets",
      style: {
        minWidth: "195px",
        paddingLeft: "30px",
        textAlign: "start",
      },
    },
  ],
};

const configuration = {
  metadata,
  viewConfiguration,
};

const actions = [{ id: "view", label: "View", disabled: false }];

export { configuration, actions };
