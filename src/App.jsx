import * as React from "react";
import { Routes, Route, Link} from "react-router-dom";
import ListPage from "./Components/ListPage";
import NewForm from "./Components/NewForm";


function App() {

  return (
    <div className='general'>
      <h1>The use of free API and data inside </h1>

      <nav>
        <Link to="/newForm">
        <button>New Form</button></Link>
      </nav>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="newForm" element={<NewForm />} />
      </Routes>


    </div>
  );
}


export default App;