import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';
import { LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const Global = useContext(GlobalContext);
  const { movieResult, searchMovie, loading, mode, handleDetails } = Global;
  return (
    <>
      {loading ? (
        <div
          className={`${mode ? 'bg-dark' : 'bg-light'} text-center`}
          style={{ height: '94vh' }}>
          <Container style={{ padding: '1rem' }}>
            <LoadingOutlined
              style={{ fontSize: '3rem', color: '#40a9ff' }}
              spin
            />
          </Container>
        </div>
      ) : (
        <div
          className={`${mode ? 'bg-dark' : 'bg-light'}`}
          style={{ height: '100vh' }}>
          <Container className="pt-3">
            <Row>
              {searchMovie &&
                movieResult &&
                movieResult.map((e) => {
                  return (
                    <Col key={e.imdbID} xs={4} className="mb-2">
                      <CardGroup>
                        <Link
                          to={`/${e.imdbID}`}
                          onClick={() => {
                            handleDetails(e.imdbID, e.Title);
                          }}>
                          <Card className="h-100">
                            <Card.Img src={e.Poster} />
                          </Card>
                        </Link>
                      </CardGroup>
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default MovieList;
