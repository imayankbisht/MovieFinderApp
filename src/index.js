import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import GlobalProvider from './context/globalContext';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  rootElement
);
