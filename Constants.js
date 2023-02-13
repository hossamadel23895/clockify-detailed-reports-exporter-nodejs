export const Workspace_id = "5ee3d1d069855f3ad96367af";
export const Base_endpoint = "https://api.clockify.me/api/v1";
export const Reports_endpoint = "https://reports.api.clockify.me/v1";
export const Retry_time_in_mins = 0.1;
export const File_extension = "csv";
export const Detailed_report_template = {
  dateRangeStart: "",
  dateRangeEnd: "",
  sortOrder: "DESCENDING",
  description: "",
  rounding: false,
  withoutDescription: false,
  amounts: null,
  amountShown: "HIDE_AMOUNT",
  zoomLevel: "WEEK",
  userLocale: "en-US",
  customFields: null,
  userCustomFields: null,
  kioskIds: [],
  projects: {
    contains: "CONTAINS",
    ids: [],
    status: "ACTIVE",
  },
  detailedFilter: {
    sortColumn: "DATE",
    page: 1,
    pageSize: 50,
    auditFilter: null,
    quickbooksSelectType: "ALL",
    options: {
      totals: "CALCULATE",
    },
  },
  exportType: "CSV",
};
