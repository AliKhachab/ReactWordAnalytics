import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (event) => {
    let newText = event.target.value;
    if (newText.includes("<script>")) {
      setWarningText("Warning: <script> not allowed");
      newText = newText.replace("<script>", "");
    } else {
      setWarningText("");
    }
    setText(newText);

  };

  return (
    <div className="textarea">
      <textarea
        onChange={handleChange}
        value={text}
        placeholder="Type something here..."
        spellCheck="false"
      />
      {warningText && <Warning warningText={warningText} /> /* If show warning is true, show the warning (short circuit notation)*/}  
    </div>
  );
}
