import React from 'react';

import '../styles/Audio.css'
import '../styles/ColumnRow.css'
import { soundMapConsonant, soundMapVowel } from "../utils/SoundMap";

import Audio from './Audio';

class All extends React.Component {

  constructor() {
    super();
    this.state = {
      soundConsonant: soundMapConsonant,
      soundVowel: soundMapVowel,
    };
  };

  render() {

    const { soundConsonant, soundVowel } = this.state;

    return (
      <div>
        <div className="row" >
          <div className="column">
            {soundConsonant && soundConsonant.map((audio, index) => {
              return (
                <Audio letter={audio.letter} word={audio.word} mp3={audio.mp3} key={index} />
              );
            })}
          </div>
          <div className="column">
            {soundVowel && soundVowel.map((audio, index) => {
              return (
                <Audio letter={audio.letter} word={audio.word} mp3={audio.mp3} key={index} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default All;
