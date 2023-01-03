import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
// TODO: 메인 페이지 : 만든 날짜 주제 목록
// TODO: 영어단어 목록 구현
// TODO: 페이지가 변경되는 라우터 구현 (상단 바)
// TODO: 데이터를 받아오고 추가하고 삭제할 대상인 데이터 서버 구현
// TODO: 단어 추가 페이지 (영어 한국어 추가대상 목록)
// TODO: 주제 추가 페이지 (날짜 주제 ) + 현재 목록 개수
// FIXME: 정보받아오기 실패 시 빈 페이지 구현
// FIXME: 체크 박스의 비율에 따라 퍼센트 게이지 구현
