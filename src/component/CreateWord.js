import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  // page 이동 link to 와 비슷
  const history = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body 에 보낼 때 json 파일로 변경
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      //응답이 성공하게 될 때 (response.ok)
      if (res.ok) {
        alert("생성 완료");
        // 생성 후 페이지 이동
        history(`/day/${dayRef.current.value}`);
      }
    });
  }
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    //onSubmit 속성 ? => 양식 제출 이벤트가 발생할 때의 동작을 지정
    // onSubmit 이 받은 함수의 동작이 true 일 때 form

    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>영어</label>
        <input type="text" placeholder="영어를 입력해주세요" ref={engRef} />
      </div>
      <div className="input_area">
        <label>뜻</label>
        <input type="text" placeholder="뜻을 입력해주세요" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => {
            return (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            );
          })}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}

// Words 배열 안에 객체 키 day 가 같은 배열의 길이
// >> 필터로 day가 일치하는 객체만 배열로 리턴
// gauge 는 words 배열안의 객체 키 isDone이 true 인 객체의 개수
// Day가 같은 체크된단어길이/day가 같은 전체단어길이*100
