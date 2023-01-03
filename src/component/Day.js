// import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";
// import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function Day() {
  // 주소창에있는 문자열이 들어온다.
  const { day } = useParams();
  // const wordList = dummy.words.filter((word) => word.day === Number(day));
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
