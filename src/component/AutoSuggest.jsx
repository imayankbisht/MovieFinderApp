import '../styles.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/globalContext';

const AutoSuggest = () => {
  const Global = useContext(GlobalContext);
  const { show, handleDetails, movieResult } = Global;
  return (
    <div className={`dropdown ${show ? 'visible' : 'invisible'}`}>
      {movieResult &&
        movieResult.map((e) => {
          return (
            <ul key={e.imdbID}>
              <Link
                to={`/${e.imdbID}`}
                onClick={() => {
                  handleDetails(e.imdbID, e.Title);
                }}>
                <li className="dropdown-list">{e.Title}</li>
              </Link>
            </ul>
          );
        })}
    </div>
  );
};

export default AutoSuggest;
