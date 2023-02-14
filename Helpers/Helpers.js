import { promises as promisesFs } from "fs";
import fs from "fs";
import path from "path";
import * as Conf from "../Configurations.js";
import * as Constants from "./Constants.js";

export const createReportFile = async (name, content) => {
  let normalizedPath = path.normalize(Conf.report_file_path);
  if (fs.existsSync(normalizedPath)) {
    await promisesFs.writeFile(
      `${normalizedPath}/${name}.${Constants.File_extension}`,
      content
    );
  } else {
    console.info(
      "The folder provided in configuration doesn't exist. please recheck and restart the app"
    );
  }
};

export const formatDateClockify = (obj) => {
  let year = obj.$y;
  let month = ("0" + (obj.$M + 1)).slice(-2);
  let day = ("0" + obj.$D).slice(-2);
  let hour = ("0" + obj.$H).slice(-2);
  let min = ("0" + obj.$m).slice(-2);
  let second = ("0" + obj.$s).slice(-2);
  let milliseconds = ("00" + obj.$ms).slice(-3);
  return `${year}-${month}-${day}T${hour}:${min}:${second}.${milliseconds}Z`;
};

export const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const createReportFileName = (dateObj) => {
  let year = dateObj.$y;
  let month = ("0" + (dateObj.$M + 1)).slice(-2);
  return `${year} ${month}`;
};
