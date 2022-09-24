import React, { useState } from 'react';
import Data from './Data';
import List from './List';
function App() {
  function ClearAll(){
    
  }
  const [people, setPeople] = useState(Data);
  return <main>
    <section className="container">
      <h3>{people.length} birthday's today</h3>
      <List people = {people}/>
      <button onClick={()=>{setPeople([])}}>Clear all</button>
    </section>
  </main>;
}

export default App;