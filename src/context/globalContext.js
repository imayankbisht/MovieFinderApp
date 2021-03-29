import React, { createContext, useState, useEffect } from 'react';
import { searchApi, searchByID } from '../api/searchApi';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieID, setMovieID] = useState('');
  const [movieResult, setMovieResult] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [searchMovie, setSearchMovie] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState(true);

  React.useEffect(() => {
    window.localStorage.setItem('searchItem', JSON.stringify(searchTerm));
    window.localStorage.setItem('movieId', JSON.stringify(movieID));
  });

  React.useEffect(() => {
    const onreload = async () => {
      const search = JSON.parse(window.localStorage.getItem('searchItem'));
      const movie = JSON.parse(window.localStorage.getItem('movieId'));
      console.log(search, movie);
      setSearchTerm(search);
      setMovieID(movie);
      if (search || movie) {
        const [firstResponse, secondResponse] = await Promise.all([
          searchApi(search),
          searchByID(movie)
        ]);
        console.log(firstResponse, secondResponse);
        if (firstResponse.data.Search) {
          setLoading(false);
        }
        setSearchMovie(true);
        setMovieResult(firstResponse.data.Search);
        setSelectedMovie(secondResponse.data);
      }
    };
    onreload();
  }, []);

  useEffect(() => {
    const onchangeItem = () => {
      const result = searchApi(searchTerm);
      result
        .then((res) => {
          if (res.data.Search === undefined) {
            setLoading(true);
          }
          setMovieResult(res.data.Search);
        })
        .catch((e) => console.log(e));
    };
    onchangeItem();
  }, [searchTerm]);

  const handleDetails = async (movieID) => {
    setMovieID(movieID);
    setShow(false);
    const result = await searchByID(movieID);
    console.log(result.data);
    setSelectedMovie(result.data);
  };
  console.log(mode);

  return (
    <GlobalContext.Provider
      value={{
        setSearchTerm,
        movieResult,
        searchMovie,
        setSearchMovie,
        searchTerm,
        handleDetails,
        selectedMovie,
        setLoading,
        loading,
        show,
        setShow,
        setMode,
        mode
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
