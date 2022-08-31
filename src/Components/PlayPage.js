import React, { useState, useEffect } from 'react';
import qMark from '../image/question-mark.png';

import paper from '../image/papper.png';
import scissors from '../image/scissors.png';
import rock from '../image/rock.png';

// [rock, paper, scissors]
//   0      1       2

const PlayPage = ({ setPlay }) => {
  const options = [
    { name: 'rock', img: rock },
    { name: 'paper', img: paper },
    { name: 'scissors', img: scissors },
  ];

  const [playerOpt, setPlayerOpt] = useState(null);
  // const [playerInfo, setPlayerInfo] = useState({ option: null, lives: 3 });
  const [pcOpt, setPcOpt] = useState(null);
  const [result, setResult] = useState({ msg: 'Good luck!', style: '' });

  const playerWin = { msg: 'You win 🥳', style: 'win' };
  const playerLose = { msg: 'You lose 🥲', style: 'lose' };
  const playerTie = { msg: 'Tie 😬', style: 'tie' };

  // 判斷誰輸誰贏
  const checkWinOrLose = (player, pc) => {
    //平手
    if (player === pc && player !== null) {
      setResult(playerTie);
    }
    // 玩家贏（數字大）例外情況：電腦出石頭、玩家出剪刀
    if (player > pc) {
      if (player === 2 && pc === 0) {
        setResult(playerLose);
      } else {
        setResult(playerWin);
      }
    }
    // 玩家輸（數字小）例外情況：電腦出布、玩家出石頭
    if (player < pc) {
      if (player === 0 && pc === 2) {
        setResult(playerWin);
      } else {
        setResult(playerLose);
      }
    }
  };

  const RandomPcOpt = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    setPcOpt(randomIndex);
  };

  const handleClick = (index) => {
    RandomPcOpt();
    setPlayerOpt(index);
  };

  useEffect(() => {
    checkWinOrLose(playerOpt, pcOpt);
  }, [playerOpt, pcOpt]);

  return (
    <section className="section-play">
      <h1>Rock, papper, scissors</h1>
      <button className="btn btn-restart" onClick={() => setPlay(false)}>
        <i className="fa-solid fa-arrow-rotate-left"></i>
      </button>
      <div className="showbox-container">
        <div className="showbox showbox-player">
          <p className="showbox-name">Player</p>
          <div className="box">
            <img
              src={playerOpt === null ? qMark : options[playerOpt].img}
              alt="question mark"
            />
          </div>
          <div className="btn-container">
            {options.map((option, i) => {
              return (
                <button
                  key={i}
                  className="btn btn-option"
                  onClick={() => handleClick(i)}
                >
                  <img
                    className="btn-option-img"
                    src={option.img}
                    alt={option.name}
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className="versus">VS.</div>
        <div className="showbox showbox-pc">
          <p className="showbox-name">PC</p>
          <div className="box">
            <img
              src={pcOpt === null ? qMark : options[pcOpt].img}
              alt="question mark"
            />
          </div>
        </div>
      </div>
      <div className={`result-message ${result.style}`}>
        <p>{result.msg}</p>
      </div>
    </section>
  );
};

export default PlayPage;
