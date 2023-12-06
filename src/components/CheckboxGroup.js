import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

function CheckboxGroup(props) {
  const { name, label, options,inputStyle,labelStyle,fieldStyle,groupCheckboxStyle, ...rest } = props;
  return (
    <div className={inputStyle}>
      <label className={labelStyle}>{label}</label>
      <div className={fieldStyle}>
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <div key={option.key} className={groupCheckboxStyle}>
                  <input
                    type="checkbox"
                    {...field}
                    value={option.value}
                    name={name}
                    id={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckboxGroup;
