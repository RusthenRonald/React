
import './App.css';

function App() {

  const name = "Rusthen"

  function sum(a,b){
    return a+b
  }

  const url ='https://placeholder.com/150'
  

  return (
    <div className="App">
     <h2>Alterando o jsx</h2>
     <p>Olá , {name.toUpperCase()}</p>
     <p>Soma: {sum(2,4)}</p>
     <img src={url}></img>
    </div>
  );
}

export default App;
