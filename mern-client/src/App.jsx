
import { BrowserRouter as Router, Routes, Route, Outlet, useLoaderData } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop';
import About from './components/About';
import SingleBook from './components/SingleBook';
import Blog from './components/Blog';
import Main from './pages/Main';
import './App.css'
import DashboardLayout from './Dashboard/DashboardLayout';
import Dashboard from './Dashboard/Dashboard';
import UploadBook from './Dashboard/uploadBook';
import ManageBooks from './Dashboard/ManageBooks';
import EditBooks from './Dashboard/EditBooks';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* for frontend part */}
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />}/>
          <Route path='/about' element = {<About />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/book/:id' element={<SingleBook />}/>
        </Route>

         {/* admin dashboard */}
         <Route path='/admin/dashboard' element={<DashboardLayout/>}>
          <Route index element={<Dashboard />}/>
          <Route path='/admin/dashboard/upload' element={<UploadBook/>}/>
          <Route path='/admin/dashboard/manage' element={<ManageBooks/>}/>
          <Route path='/admin/dashboard/edit-books/:id' element={<EditBooks/>}/>
          </Route>

          {/* authentication */}
          <Route path='/sign-up' element={<Signup/>}/>
      </Routes>
    </Router>
    
  );
};

export default App;
