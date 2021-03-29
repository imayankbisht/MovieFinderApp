import '../styles.css';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieDetail = () => {
  const Global = useContext(GlobalContext);
  const {
    selectedMovie,
    setSearchTerm,
    setLoading,
    setSearchMovie,
    mode
  } = Global;
  return (
    <>
      <div
        className={`${mode ? 'bg-dark ' : 'bg-light '}'} p-0 `}
        style={{ height: '100vh' }}>
        <Container className="pt-5 pb-4 text-light">
          <Row style={{ background: 'black' }}>
            <Col xs={5} lg={4} style={{ maxWidth: 'inherit' }}>
              <img className="img-fluid" src={selectedMovie.Poster} alt="" />
            </Col>
            <Col xs={7} lg={{ span: 6, offset: 0 }}>
              <div className="p-1">
                <div className="h4">{selectedMovie.Title}</div>
                <div className="list">
                  <ul>
                    <li>IMDB Rating : {selectedMovie.imdbRating}</li>
                    <li>Runtime : {selectedMovie.Runtime}</li>
                    <li>Genre : {selectedMovie.Genre}</li>
                    <li>Director : {selectedMovie.Director}</li>
                    <li>Country : {selectedMovie.Country}</li>
                  </ul>
                </div>
                <div>
                  <p>
                    <small className="lead">{selectedMovie.Plot}</small>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center pt-3  " style={{ paddingBottom: '7.5em' }}>
          <Link to="/">
            <Button
              onClick={() => {
                setSearchTerm(selectedMovie.Title);
                setLoading(false);
                setSearchMovie(true);
              }}
              style={{ padding: '0.5em 4em 0.5em 4em', background: 'black' }}
              size="lg">
              View Similer
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
