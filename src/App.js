import React from 'react';

import Consonant from './components/Consonant';
import ConsonantRead from './components/ConsonantRead';
import Vowel from './components/Vowel';
import VowelRead from './components/VowelRead';
import All from './components/All';

function SwitchCase(props) {
  switch(props.value) {
    case 'consonant':
      return <Consonant />
    case 'consonant-read':
      return <ConsonantRead />
    case 'vowel':
      return <Vowel />
    case 'vowel-read':
      return <VowelRead />
    default:
      return <All />
  }
}

function App(props) {

  const parsedUrl = new URL(window.location.href);
  const search = parsedUrl.searchParams.get("id");

  return (
    <SwitchCase value={search} />
  );
}

export default App;
