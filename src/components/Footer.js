import React, {Component} from 'react';

class Footer extends Component
{
    render(){
        return (<footer>
            <ul>
                <li><a href="Guidelines">Guidelines</a></li>
                <li><a href="FAQ">FAQ</a></li>
                <li><a href="Support">Support</a></li>
                <li><a href="API">API</a></li>
                <li><a href="Security">Security</a></li>
                <li><a href="Lists">Lists</a></li>
                <li><a href="Bookmarklet">Bookmarklet</a></li>
                <li><a href="Legal">Legal</a></li>
                <li><a href="Apply to YC">Apply to YC</a></li>
                <li><a href="contact">contact</a></li>
            </ul>
            
            <form action="">
                <label name=""> 
                    Search: <input type="text" />
                </label>
            </form>

        </footer>)
    }
}

export default Footer;