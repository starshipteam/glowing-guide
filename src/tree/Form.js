import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onSubmit(name, props.parent);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={props.parent}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
}
