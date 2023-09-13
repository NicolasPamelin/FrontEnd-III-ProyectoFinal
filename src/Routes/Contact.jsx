import React from "react";
import Form from "../Components/Form";
import { useDentistStates } from "../Components/utils/global.context";

const Contact = () => {
  const { themeState } = useDentistStates();

  return (
    <div className={themeState.theme ? "App contact" : "dark contact"}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
