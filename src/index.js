import Handsontable from "handsontable";
import 'handsontable/dist/handsontable.full.css';
import "./styles.css";

const container = document.getElementById('example');

const hot = new Handsontable(container, {
  data: [],
  colHeaders: ["test very long"],
  columns: [
    {
      type: "numeric",
      readOnly: false,
    },
  ],
  rowHeaders: true,
  contextMenu: false,
  manualColumnFreeze: false,
  manualColumnMove: false,
  manualColumnResize: false,
  manualRowResize: false,
  manualRowMove: false,
  dropdownMenu: false,
  filters: false,
  columnSorting: false,
  comments: false,
  licenseKey: "non-commercial-and-evaluation",
});

console.log(`Handsontable: v${Handsontable.version} (${Handsontable.buildDate})`);
