
import './App.css'
import Create from './Components/Create'
import { Rename } from './Components/Rename'
import { Update } from './Update'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <>
      <div className ="main">
        <h2>My todo</h2>
        <BrowserRouter>
           <Routes>
              <Route exact path ="/create" element={<Create />} />
              <Route exact path ="/rename" element={<Rename />} />
              <Route exact path ="/update" element={<Update />} />
           </Routes>
        </BrowserRouter>  

          
      </div>
        
    </>
  )
}

export default App
