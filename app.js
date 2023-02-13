import * as Conf from "./Configurations.js";
import * as Helpers from "./Helpers.js";
import * as Requests from "./Requests.js";
import * as Constants from "./Constants.js";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
dayjs.extend(utc);

// App entry
(async () => {
  console.info("---------------------------------------------------------");
  console.info("Welcome to Clockify Detailed Reports Exporter Application");
  while (true) {
    try {
      console.info("---------------------------------------------------------");
      let monthFirstDay = dayjs().utc().startOf("month");
      let monthLastDay = dayjs().utc().endOf("month");
      let dateRangeStart = Helpers.formatDateClockify(monthFirstDay);
      let dateRangeEnd = Helpers.formatDateClockify(monthLastDay);
      let reportFileName = Helpers.createReportFileName(monthLastDay);

      let projects = await Requests.getProjectsIds();

      let filteredProjects = projects.filter((project) =>
        Conf.projects.includes(project.name)
      );

      let filteredProjectsIds = [];
      filteredProjects.forEach((project) => {
        filteredProjectsIds.push(project.id);
      });

      console.info(
        `Found ${filteredProjectsIds.length} Projects matching your configuration, Creating report ...`
      );

      let requestData = { ...Constants.Detailed_report_template };

      requestData.dateRangeStart = dateRangeStart;
      requestData.dateRangeEnd = dateRangeEnd;
      requestData.projects.ids = filteredProjectsIds;

      console.info("Downloading Report, This can take a few minutes ...");

      let reportContent = await Requests.getDetailedReport(requestData);

      await Helpers.createReportFile(reportFileName, reportContent);

      console.info(
        `Report file was created successfully, Updating after ${Conf.refresh_time_in_mins} mins ...`
      );

      await Helpers.sleep(Conf.refresh_time_in_mins * 60 * 1000);
    } catch (error) {
      if (error.message) {
        console.error("Error: ", error.message);
      } else {
        console.error("Error: ", error);
      }
      console.info(
        `Application encountered an error, retrying in ${Constants.Retry_time_in_mins} min ...`
      );
      await Helpers.sleep(Constants.Retry_time_in_mins * 60 * 1000);
    }
  }
})();
