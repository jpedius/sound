import React from 'react';

class Audio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      showing2: false,
    };
  };

  render() {

    const { letter, word, mp3 } = this.props;
    const { showing, showing2 } = this.state;

    return (
        <div>
          <audio src={mp3} controls />
          <div className="hide" onClick={() => this.setState({ showing: !showing })}>
            . <span style={{ display: (showing ? 'inline' : 'none') }}> {letter} </span>
          </div>
          <div className="hide" onClick={() => this.setState({ showing2: !showing2 })}>
            . <span style={{ display: (showing2 ? 'inline' : 'none') }}> {word} </span>
          </div>
        </div>
     );
  };
};

export default Audio;
