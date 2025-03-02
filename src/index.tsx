import { ConfigProvider } from "antd";
import enUS from 'antd/lib/locale/en_US';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import "./mock";
import { store } from './store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( 
  <Provider store={store}>
    <ConfigProvider locale={enUS}>
      <App />
    </ConfigProvider>
    </Provider>
);

