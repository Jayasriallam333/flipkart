import './App.css';
import CompA from './Components/CompA';
import CompB from './Components/CompB';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App() {

  const details=[
  {
    name:"rupa Marisetti",
    roll:"0639"
  },

  {
    name:"bujji Marisetti",
    roll:"1234"
  }
]
return(
  <>
  <BrowserRouter>
  <ul>
  <li><Link to="/CompA">Click to compa</Link></li>
  <li><Link to="/CompB">Click to compb</Link></li>

  </ul>
    <Routes>
      <Route path='/CompA' element={<CompA data={details}/>}></Route>
      <Route path='/CompB' element={<CompB data={details}/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
