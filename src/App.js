// import logo from './logo.svg';
// import './App.css';
import ClickCounter from './ClickCounter';
import HighOrder from './HighOrder';
import HoverComp from './HoverComp';
import PureComp from './PureComp';

function App() {
  return (
    <div className="App">
      <HighOrder/>
      <ClickCounter/>
      <HoverComp/>
      <PureComp/>
    </div>
  );
}

export default App;
