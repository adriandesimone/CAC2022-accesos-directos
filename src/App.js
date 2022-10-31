import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Config from "./Config";

function App() {
  console.log(Config);
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-3">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-9">
            <h1>Codo a Codo</h1>
            <h2>Comisión React #22809</h2>
          </div>
        </div>
        {Config.map((item, index) => (
          <Button
            Text={item.Text}
            Information={item.Information}
            Url={item.Url}
            Target={item.Target}
            IsEmail={item.IsEmail}
            key={index}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
