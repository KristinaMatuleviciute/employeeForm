import { React, useState } from "react";
import moment from "moment";

export default function Form({ dataJSON }) {
  let { view, data } = dataJSON;

  const form = Object.entries(view).map(([key, value]) => {
    let { title, children } = value;
    return Object.entries(children).map(([k, val]) => {
      let { component, label, name, path, text } = val;
      return Object.entries(data).map(([data_key, data_value]) => {
        let { date, employee__name } = data_value;
        let employeeName =
          key === data_key && path === "employee__name" ? employee__name : "";
        let birthday = key === data_key && path === "date" ? date : "";

        switch (component) {
          case "Text":
            return (
              <div className="mb-3" key={k}>
                <h4>{title}</h4>
                <input
                  type="text"
                  id={name}
                  name={name}
                  defaultValue={employeeName}
                  onChange={(e) => console.log(e.target.value)}
                  className="form-control"
                />
                <label htmlFor={name} className="form-label">
                  {label}
                </label>
              </div>
            );
          case "Date":
            return (
              <div className="mb-3" key={k}>
                <input
                  type="date"
                  id={name}
                  name={name}
                  defaultValue={moment(birthday).format("YYYY-MM-DD")}
                  onChange={(e) => console.log(e.target.value)}
                  className="form-control"
                />
                <label htmlFor={name} className="form-label">
                  {label}
                </label>
              </div>
            );
          case "Command":
            return (
              <div key={k}>
                <button type="submit" className="btn btn-primary">
                  {text}
                </button>
              </div>
            );
          default:
            return (
              <div key={0}>
                <span className="red-text">Invalid Field</span>
              </div>
            );
        }
      });
    });
  });

  return <form>{form}</form>;
}
