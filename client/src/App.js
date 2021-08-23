import './App.css';

function App() {
  return (
    <div className="App">
      <h1> CRUD Application</h1>
      <h3> Movie Reviews </h3>
      <div className='form'>
        <label> Movie Name </label>
      <input type="text" name = "movie"/> 
        <label> Review </label>
      <input type="text" name = "review "/>

      <button type='submit'>Submit </button>
      </div>
    </div>
  );
}

export default App;
