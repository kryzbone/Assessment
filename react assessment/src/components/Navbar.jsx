import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="transparent">
                <div className="nav-wrapper">
                    <div className="row">
                        <span className="col s4 offset-s8 profile ">
                            <div className="right valign-wrapper"> 
                                <span className="menu-ico black-text" data-feather="menu"></span>
                                <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png" alt="Profile" width="32" className="circle p-pic"/>
                                <span className="black-text">John Snow</span>
                            </div>
                        </span>
                    </div>
                </div>
            </nav>
        
        </div>
    )
}

export default Navbar
