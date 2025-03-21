import Stats from "./Stats";
import Textarea from "./Textarea";
import { useState } from "react";
import { FACEBOOK_MAX_CHARS, INSTAGRAM_MAX_CHARS } from "../lib/constants";
export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numWords: text.split(/\s/).filter((word) => word !== "").length, // split text by spaces, filter out whitespace, count length of array
    numCharacters: text.length,
    instaCharsLeft: INSTAGRAM_MAX_CHARS - text.length,
    facebookCharsLeft: FACEBOOK_MAX_CHARS - text.length,
  };
  return (
    <main className="container">
        <Textarea text={text} setText={setText}/>
        <Stats stats={stats}/>
    </main>
  )
}
