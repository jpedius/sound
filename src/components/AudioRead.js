import React from 'react';

class AudioRead extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
  };

  render() {

    const { letter, word } = this.props;
    const { showing } = this.state;

    return (
        <div>
          <div className="hide">
            <span> {letter} </span>
          </div>
          <div className="hide" onClick={() => this.setState({ showing: !showing })}>
            . <span style={{ display: (showing ? 'inline' : 'none') }}> {word} </span>
          </div>
        </div>
     );
  };
};

export default AudioRead;
