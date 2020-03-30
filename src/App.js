import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
      name = 'Bonnie Day'
      avatar = "https://randomuser.me/api/portraits/women/21.jpg"
      online = 'false'/>
      <Contact 
      name = 'Joan Burton'
      avatar = "https://randomuser.me/api/portraits/women/20.jpg"
      Online = 'false'/>
      <Contact 
      name = 'Lori Banks'
      avatar = "https://randomuser.me/api/portraits/women/3.jpg"
      online = 'false'/>
    </div>
  );
}

export default App;
