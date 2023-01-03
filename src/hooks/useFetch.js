import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data;
}

//useEffect 처리 함수
// 인자인 url 이 바뀔 때 마다
// json 파일처리

//FIXME: done
