import React from 'react';
import Contact from './components/Contact';

function App () {
  return (
    <div className='App'>
      <Contact name='Bonnie Day' avatar='https://randomuser.me/api/portraits/women/21.jpg' alt='avatar Bonnie Day' online={true} />
      <Contact name='Joan Burton' avatar='https://randomuser.me/api/portraits/women/20.jpg' alt='avatar Joan Burton' online={false} />
      <Contact name='Lori Banks' avatar='https://randomuser.me/api/portraits/women/3.jpg' alt='avatar Lori Banks' online={true} />
    </div>
  );
}

export default App;
