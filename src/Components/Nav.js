import React from 'react'

export default function Nav(props) {
  return (
    <div>
        {/* ${props.Mode} bg-${props.Mode} */}
      <nav
        className={`navbar navbar-${props.Mode} bg-${props.Mode}`}
      >
        <div className="rit">
        <div
          className={`container-fluid text-${
            props.Mode === "light" ? "dark" : "light"
          }`}
        >
          <a className="navbar-brand">Text Converter</a>
          <a className="navbar-brand">Home</a>

          <a className="navbar-brand">About</a>
          
        </div>
        </div>
      
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggle}
          />
          {/* ${
                props.Mode==="light"?
                "dark":"light"
            } */}
          <label
            className={`form-check-label text-${
                props.Mode==="light"?
                "dark":"light"
            }`}
            htmlFor="flexSwitchCheckDefault"
            width="30px"
          >
            Enable Dark Mode
          </label>
        </div>
      </nav>
    </div>
  )
}
