import { useState, useEffect, useRef } from 'react';
import '../Components/Css/OffcanvasExample.css'; // Make sure to import your CSS file
import logo from './Assets/logo.png'


function OffcanvasExample() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const offcanvasRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
        setShowOffcanvas(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='col-md-12 w-100'>
      <nav className="navbar  navbar-light bg-light">
          <a className="navbar-brand" href="#"><img src={logo} style={{ width: "10rem", borderRadius: "150px" }} alt=".." /></a>
          <button className="navbar-toggler" type="button" onClick={() => setShowOffcanvas(!showOffcanvas)}>
            <span className="navbar-toggler-icon"></span>
          </button>
      </nav>

      <div ref={offcanvasRef} className={`offcanvas ${showOffcanvas ? 'show' : ''}`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Offcanvas</h5>
          <button type="button" className="btn-close" onClick={() => setShowOffcanvas(false)}></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about-us">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OffcanvasExample;
