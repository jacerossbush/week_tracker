import './App.css';


function App() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="App">
      {days.map(day => (<><p key={day}>{day}</p>
      <div>input here</div></>))}
    </div>
  );
}

export default App;
