import { Link } from "react-router-dom";

//Link 태그 사용은 a태그에 class를 link 로 한 것과 같다
export default function Header() {
  return (
    <div className="header">
      <div className="head_title">
        <Link to="/">Voca Practice</Link>
      </div>
      <div className="menu">
        <Link to="/create_word" className="link">
          단어 추가
        </Link>
        <Link to="/create_day" className="link">
          Day 추가
        </Link>
      </div>
    </div>
  );
}

// 상단바 구현 ( 메인 제목 및 nav )
