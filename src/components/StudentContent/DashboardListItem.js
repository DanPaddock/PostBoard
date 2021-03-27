import React from "react";
import moment from "moment";
import numeral from "numeral";
import "../../styles/styles.scss";

const DashboardListItem = ({
  id,
  course,
  type,
  title,
  dueDate,
  dueTime,
  pinned,
}) => (
  <div className="list-item">
    <div>
      <h3 className="list-item__title">{type}</h3>
      <span className="list-item__sub-title">{course}</span>
    </div>
    <div>{title}</div>
    <h3 className="list-item__data">{moment(dueTime).format("hh:mm")}</h3>
  </div>
);

export default DashboardListItem;
