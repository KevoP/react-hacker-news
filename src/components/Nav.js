import React, {Component} from 'react';

class Nav extends Component
{

    render(){
        return (<header>
                    <nav className="main-nav container">
                        <ul>
                            <li>
                                <a href="#" className="home">Hacker News</a>
                            </li>
                            <li>
                                <a href="#">new</a>
                            </li>
                            <li>
                                <a href="#">past</a>
                            </li>
                            <li>
                                <a href="#">comments</a>
                            </li>
                            <li>
                                <a href="#">ask</a>
                            </li>
                            <li>
                                <a href="#">show</a>
                            </li>
                            <li>
                                <a href="#">jobs</a>
                            </li>
                            <li>
                                <a href="#">submit</a>
                            </li>
                        </ul>
                        <a href="#" className="login">login</a>
                    </nav>    
                </header>
            )
    }
}

export default Nav;