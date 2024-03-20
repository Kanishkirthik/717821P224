import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Shopout</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catergory
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Computer</a></li>
            <li><a class="dropdown-item" href="#">Phone</a></li>
            <li><a class="dropdown-item" href="#">Earphone</a></li>
            <li><a class="dropdown-item" href="#">Tablets</a></li>
            <li><a class="dropdown-item" href="#">Charger</a></li>
            <li><a class="dropdown-item" href="#">Mouse</a></li>
            <li><a class="dropdown-item" href="#">KeyPad</a></li>
            <li><a class="dropdown-item" href="#">Laptop</a></li>
            <li><a class="dropdown-item" href="#">Speaker</a></li>
            <li><a class="dropdown-item" href="#">Headset</a></li>
            <li><a class="dropdown-item" href="#">Pendrive</a></li>
            <li><a class="dropdown-item" href="#">Remote</a></li>
            <li><a class="dropdown-item" href="#">TV</a></li>
            <li><a class="dropdown-item" href="#">PC</a></li>
          </ul>
        </li>
        <li>
        </li>
        </ul>
        <div className='col ml-4'>
        <form class="d-flex " role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      </div>
      <div className='col-xl-4'>
        <button className='btn'>Cart</button>
      </div>
      <div className='col'>
        <button className='btn'>Login/Sign</button>
      </div>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar