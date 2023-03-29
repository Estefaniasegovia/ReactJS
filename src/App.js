import './App.css';
import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';
import Subtitle from './components/Subtitle/Subtitle';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Title greeting = "Deco"/>
      <Subtitle greeting = "Novedades"/>
    </div>
  );
}

export default App;
