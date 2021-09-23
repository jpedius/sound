import React from 'react';

import '../styles/Audio.css'
import '../styles/ColumnRow.css'
import { soundMapConsonant } from "../utils/SoundMap";

import AudioRead from './AudioRead';

class ConsonantRead extends React.Component {

  constructor() {
    super();
    this.state = {
      soundConsonant: soundMapConsonant,
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
    this.setState({ soundConsonant: array });
    return array;
  };

  render() {

    const { soundConsonant } = this.state;

    return (
      <div>
        <div>
          <button onClick={() => this.shuffle(soundMapConsonant)}>Shuffle</button>
        </div>
        <div className="row" >
          <div className="column">
            {soundConsonant && soundConsonant.map((audio, index) => {
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

export default ConsonantRead;
