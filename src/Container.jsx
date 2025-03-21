import Stats from "./Stats";
import Textarea from "./Textarea";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numWords: text.split(/\s/).filter((word) => word !== "").length, // split text by spaces, filter out whitespace, count length of array
    numCharacters: text.length,
    instaCharsLeft: 280-text.length,
    facebookCharsLeft: 2200-text.length,
  };
  return (
    <main className="container">
        <Textarea text={text} setText={setText}/>
        <Stats stats={stats}/>
    </main>
  )
}
