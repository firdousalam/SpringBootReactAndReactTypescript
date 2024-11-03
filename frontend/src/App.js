import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useState } from 'react';

const [movies,setMovies] = useState();

function App() {
  return (
    <div className="App">
      Hello World !
    </div>
  );
}

export default App;
