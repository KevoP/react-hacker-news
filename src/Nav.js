import React, {Component} from 'react';

class Nav extends Component
{

    render(){
        return (<header>
                    <a href="#" className="home">Hacker News</a>
                    <ul>
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
                </header>
            )
    }
}

export default Nav;