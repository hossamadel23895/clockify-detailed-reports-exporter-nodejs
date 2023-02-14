import * as Constants from "./Constants.js";
import * as Conf from "../Configurations.js";

import axios from "axios";

export const getProjectsIds = async () => {
  let response = await axios({
    url: `${Constants.Base_endpoint}/workspaces/${Constants.Workspace_id}/projects`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Api-Key": Conf.api_key,
    },
  });
  return response.data;
};

export const getDetailedReport = async (requestData) => {
  let response = await axios({
    url: `${Constants.Reports_endpoint}/workspaces/${Constants.Workspace_id}/reports/detailed`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Api-Key": Conf.api_key,
    },
    data: requestData,
  });
  return response.data;
};
