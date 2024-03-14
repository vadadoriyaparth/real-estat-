import React from 'react';
import Header from '../user/component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../user/container/Home/Home';
import About from '../user/container/About/About';
import Proparty from '../user/container/Proparty/Proparty';
import Blog from '../user/container/Blog/Blog';
import Contact from '../user/container/Contact/Contact';
import Propartysing from '../user/container/Page/Propartysing';
import Blogsin from '../user/container/Page/Blogsin';
import Agentgrid from '../user/container/Page/Agentgrid';
import Agentsing from '../user/container/Page/Agentsing';
import Footer from '../user/component/Footer/Footer';

function UserRoutes(props) {
    return (
        <div>
              <>
   <Header/>
   {/* <Home/> */}
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Proparty" element={<Proparty />}></Route>
      <Route path="/Blog" element={<Blog />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Propartysing" element={<Propartysing />}></Route>
      <Route path="/Blogsin" element={<Blogsin />}></Route>
      <Route path="/Agentgrid" element={<Agentgrid />}></Route>
      <Route path="/Agentsing" element={<Agentsing />}></Route>



    </Routes>
   <Footer/>
   </>
        </div>
    );
}

export default UserRoutes;