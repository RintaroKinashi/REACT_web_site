import { useEffect } from "react"
import axios from 'axios';

export const Skills = () => {

  // useEffect : レンダリング時に引数の関数を呼び出し
  // axios : 非同期のhttp通信を簡単に行えるJSのライブラリ
  useEffect(() => { axios
    .get('https://api.github.com/users/RintaroKinashi/repos')
    .then((response) => console.log(response)) }, []); // responseに上記の結果を格納する

  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
        </div>
      </div>
    </div>
  );
};
