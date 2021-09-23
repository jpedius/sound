import React from 'react';

import '../styles/Audio.css'
import '../styles/ColumnRow.css'
import { soundMapVowel } from "../utils/SoundMap";

import AudioRead from './AudioRead';

class VowelRead extends React.Component {

  constructor() {
    super();
    this.state = {
      soundVowel: soundMapVowel,
    };
  };

  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    };
    this.setState({ soundVowel: array });
    return array;
  };

  render() {

    const { soundVowel } = this.state;

    return (
      <div>
        <div>
          <button onClick={() => this.shuffle(soundMapVowel)}>Shuffle</button>
        </div>
        <div className="row" >
          <div className="column">
            {soundVowel && soundVowel.map((audio, index) => {
              return (
                <AudioRead letter={audio.letter} word={audio.word} mp3={audio.mp3} key={index} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default VowelRead;
