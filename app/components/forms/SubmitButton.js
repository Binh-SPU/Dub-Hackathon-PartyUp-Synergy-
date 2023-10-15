import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, icon }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      icon={icon}
      marginVertical={40}
    />
  );
}

export default SubmitButton;
