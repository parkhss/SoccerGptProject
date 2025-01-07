import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"; 


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Spring Boot API 호출
    fetch("http://localhost:8080/api/v1/testApi/hello") // Spring Boot 서버 주소
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // 응답을 텍스트로 변환
      })
      .then((data) => setMessage(data)) // 상태에 저장
      .catch((error) => console.error("Fetch error:", error));
  }, []); // 빈 배열로 한 번만


  return (
    <div className="App">
      <header className="App-header">
        <h1>API 호출 결과 입니다 : {message}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
