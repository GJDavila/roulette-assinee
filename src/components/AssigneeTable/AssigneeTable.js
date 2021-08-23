import React from "react";

import Table from "react-bootstrap/Table";

const AssigneeTable = ({ selectedOptions }) => {
  const rows =
    selectedOptions.length > 0
      ? selectedOptions.map((assignedStorie, index) => (
          <tr key={index}>
            <td style={{ maxWidth: "500px" }}> {index + 1}</td>
            <td style={{ maxWidth: "500px" }}>{assignedStorie.assigneeName}</td>
            <td style={{ maxWidth: "500px" }}>
              {assignedStorie.storyName && assignedStorie.storyName.length > 60
                ? assignedStorie.storyName.substring(0, 60) + "..."
                : assignedStorie.storyName}
            </td>
          </tr>
        ))
      : null;

  return (
    <Table
      striped
      bordered
      hover
      scrollable
      responsive="xl"
      // style={{ maxWidth: "500px" }}
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Assignee Name</th>
          <th>Story Name</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default AssigneeTable;
