import React from 'react';
import './Contact.css';

const name = 'Bonnie Day';
const avatar = "https://randomuser.me/api/portraits/women/21.jpg";
const Online= false;

function Contact() { 
    return (
        <div className="Contact">
            <img src={avatar} className='avatar'/>
            <div>
                <h4 className="name">{name}</h4>
                <div className='status'>
                    <img className={Online ? 'status-online' : 'status-offline'}
                    />
                    <p className='status-text'>{Online ? 'Online' : 'Offline'} </p>
                </div>
            </div>
        </div>
)
}
export default Contact;