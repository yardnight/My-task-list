import React from 'react'

import './Modal.css'
import '../index.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false,
        
    }
    render() {
        return (
            <React.Fragment>
                <button className='modal-botton' onClick ={() => this.setState({isOpen: true})}> Open help </button>

                {this.state.isOpen && <div className='modal'>
                    <div className='modal-window'>
                        <h1 className ='header-title'> Rules</h1>
                        <p>
                            <ul style={{paddingLeft: '1.3rem'}}>
                                <li> Put your task to the list by writting it into the empty field</li>
                                <li>If any of amount is done, then you can mark it with checkBox</li>
                                <li>Dare to remove task from the list then clickOn its orange botton</li>
                                                        
                            </ul> 
                        </p>
                        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '4rem' }}>
                            <button className='rm size-botton' onClick = {() => this.setState({isOpen: false})}>Close</button>   
                        </div>
                        
                    </div>
                    
                </div>}
            </React.Fragment>
        )
    }
}