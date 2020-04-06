import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      online: props.online
    };
  }

  render () {
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} alt= 'personal avatar'/>
        <div>
          <h4 className='name'>{this.props.name}</h4>
          <div><h4 className='name'>{this.props.name}</h4>
            <div className='status' 
              onClick={event => { const newState = !this.state.online; 
                this.setState({ online: newState }); }}>
              <img className={this.state.online ? 'status-online' : 'status-offline'} alt='' />
              <p className='status-text'>{this.state.online ? 'online' : 'offline'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
