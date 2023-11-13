import logo from './img/logo.png';
import avatar from './img/avatar.png';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='wrapper-logo'>
                <img className='logo' alt='logo' src={logo} />
            </div>
            <div className='wrapper-info'>
                <div className='info'>
                    <span className='han'>Handicrafted by</span>
                    <span className='name'>Jim HLS</span>
                </div>
                <div>
                    <img className='avatar' alt='avatar' src={avatar} />
                </div>
            </div>
        </div>
    );
}

export default Header;