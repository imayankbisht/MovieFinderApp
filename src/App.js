import './styles.css';
import React, { useContext } from 'react';
import Navbar from './component/Navbar';
import MovieList from './component/MovieList';
import FrontUI from './component/sampleUI/FrontUI';
import MovieDetail from './component/MovieDetail';
import { GlobalContext } from './context/globalContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const Global = useContext(GlobalContext);
  const { searchTerm } = Global;
  return (
    <>
      <Router>
        <Navbar>
          {searchTerm === '' ? (
            <Route exact path="/" component={FrontUI} />
          ) : (
            <Route exact path="/" component={MovieList} />
          )}
          <Route exact path="/:id" component={MovieDetail} />
        </Navbar>
      </Router>
    </>
  );
}

export default App;
