import React, { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState({
    fullname: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.fullname.length > 5 && validEmail.test(inputValue.email)) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
      setShow(false);
    }
  };
  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="data-input"
          type="text"
          onChange={(e) =>
            setInputValue({ ...inputValue, fullname: e.target.value })
          }
          placeholder="Full name"
        />
        <input
          className="data-input"
          type="email"
          onChange={(e) =>
            setInputValue({ ...inputValue, email: e.target.value })
          }
          placeholder="Email"
        />
        <button type="submit">Send</button>
      </form>

      {show && (
        <div className="data">
          <h2>
            Gracias {inputValue.fullname}, te contactaremos cuanto antes vía
            mail
          </h2>
        </div>
      )}
      {err && <h2>Por favor verifique su información nuevamente</h2>}
    </div>
  );
};

export default Form;
