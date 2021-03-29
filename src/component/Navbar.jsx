import '../styles.css';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Switch, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/globalContext';
import AutoSuggest from './AutoSuggest';

const Navbar = ({ children }) => {
  const Global = useContext(GlobalContext);
  const {
    setShow,
    setSearchTerm,
    setSearchMovie,
    searchTerm,
    setLoading,
    setMode,
    mode
  } = Global;

  let Background = '';
  if (mode) {
    Background = 'black';
  } else {
    Background = 'silver';
  }
  return (
    <>
      <Row
        style={{ background: Background }}
        className="d-flex align-items-center m-0">
        <Col>
          <Link to="/" onClick={() => setSearchTerm('')}>
            <img
              className="img-fluid p-1"
              src="./images/sovaimg.png"
              width="45"
              height="45"
              alt=""
            />
          </Link>
        </Col>
        <Col xs={7} sm={8} lg={8}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setSearchMovie(true);
              setLoading(false);
              setShow(false);
            }}>
            <Input
              placeholder="Find my movie"
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSearchMovie(false);
                setShow(true);
              }}
              value={searchTerm}
            />
            <Button className="button" type="submit">
              <SearchOutlined className="search" />
            </Button>
          </Form>

          <AutoSuggest />
        </Col>
        <Col className="d-flex justify-content-center">
          <Switch
            checkedChildren="Dark"
            unCheckedChildren="Light"
            defaultChecked
            onClick={() => setMode(!mode)}
          />
        </Col>
      </Row>
      {children}
    </>
  );
};

export default Navbar;
