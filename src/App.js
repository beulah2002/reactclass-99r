import logo from './logo.svg';
import './App.css';
import Beulah, { ComponentB as Navya, ComponentC as Kavya } from './exportsandimports/export';
import Surya, { Componentd, Componentg } from './exportsandimports/defalutexport';









function App() {
  return (
    <div>
   <Beulah/>
   <Navya/>
   <Kavya/>
   <Surya/>
   <Componentd/>
   <Componentg/>
      
      
    </div>

  );
}

export default App;



