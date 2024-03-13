import logo from './logo.svg';
import './App.css';
import Buttoncomponent from './components/functions/button/buttoncomponent';
import Imagecomponent from './components/functions/image/imagecomponent';
import Orderlist from './components/functions/lists/order/orderlist';
import Unorderlist from './components/functions/lists/unorder/unorderlist';
import Cardcomponent from './components/functions/cards/card';
import Tablecomponent from './components/functions/table/table';

function App() {
  return (
    <div>
     <Buttoncomponent/>
     <Imagecomponent/>
     <Orderlist/>
     <Unorderlist/>
     <Tablecomponent/>
     <Cardcomponent/>
     
    </div>

  );
}

export default App;



