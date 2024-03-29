import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
      <div>
  <div className="box-collapse">
    <div className="title-box-d">
      <h3 className="title-d">Search Property</h3>
    </div>
    <span className="close-box-collapse right-boxed ion-ios-close" />
    <div className="box-collapse-wrap form">
      <form className="form-a">
        <div className="row">
          <div className="col-md-12 mb-2">
            <div className="form-group">
              <label htmlFor="Type">Keyword</label>
              <input type="text" className="form-control form-control-lg form-control-a" placeholder="Keyword" />
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="Type">Type</label>
              <select className="form-control form-control-lg form-control-a" id="Type">
                <option>All Type</option>
                <option>For Rent</option>
                <option>For Sale</option>
                <option>Open House</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select className="form-control form-control-lg form-control-a" id="city">
                <option>All City</option>
                <option>Alabama</option>
                <option>Arizona</option>
                <option>California</option>
                <option>Colorado</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="bedrooms">Bedrooms</label>
              <select className="form-control form-control-lg form-control-a" id="bedrooms">
                <option>Any</option>
                <option>01</option>
                <option>02</option>xx
                <option>03</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="garages">Garages</label>
              <select className="form-control form-control-lg form-control-a" id="garages">
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="bathrooms">Bathrooms</label>
              <select className="form-control form-control-lg form-control-a" id="bathrooms">
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="price">Min Price</label>
              <select className="form-control form-control-lg form-control-a" id="price">
                <option>Unlimite</option>
                <option>$50,000</option>
                <option>$100,000</option>
                <option>$150,000</option>
                <option>$200,000</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-b">Search Property</button>
          </div>
        </div>
      </form>
    </div>
  </div>
 <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
  <div className="container">
    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span />
      <span />
      <span />
    </button>
    <a className="navbar-brand text-brand" href="index.html"> <b><i>Shree Ram</i></b><span className="color-b">Agency</span></a>
    <button type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
      <span className="fa fa-search" aria-hidden="true" />
    </button>
    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/About'}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/Proparty'}>Property</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/Blog'}>Blog</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Pages
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to={'/Propartysing'}>Property Single</NavLink>
            <NavLink className="dropdown-item" to={'/Blogsin'}>Blog Single</NavLink>
            <NavLink className="dropdown-item" to={'/Agentgrid'}>Agents Grid</NavLink>
            <NavLink className="dropdown-item" to={'/Agentsing'}>Agent Single</NavLink>
          </div>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/Contact"}>Contact</NavLink>
        </li>
      </ul>
    </div>
    <button type="button" className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
      <span className="fa fa-search" aria-hidden="true" />
    </button>
  </div>
</nav>

</div>

    );
}

export default Header;