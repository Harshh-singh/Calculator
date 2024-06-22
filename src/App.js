import './App.css';
import {Provider} from 'react-redux'
import Calculator from './components/calculator/calculator';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
   <Calculator/>
   </Provider>
  );
}

export default App;
