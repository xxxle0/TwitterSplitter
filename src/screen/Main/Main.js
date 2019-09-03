import React from 'react';
import { messageSplitter } from '../../services/messageService';
import { TIME_OUT_CONTANTS } from '../../contants'; 

class Main extends React.Component {

    state = {
        messageChunk: []
    }

    handleChangeMessageInput = (e) => {
        e.preventDefault();
        const messageChunk = messageSplitter(e.target.value);
        if (this.timeOut) {
            clearTimeout(this.timeOut);
        };
        this.timeOut = setTimeout(() => this.setState({ 
            messageChunk
        }), TIME_OUT_CONTANTS)
    }

    
    render() {
        const { messageChunk } = this.state;
        return (
        <div className="Main">
            <div className="Main__message-input">
                Your message input<input onChange={this.handleChangeMessageInput}></input>
            </div>
            <div className="Main__message-container">
                
                <div className="Main__message">
                    <ul>
                    {
                        messageChunk.map((el,index) => {
                            return <li key={index}>{el}</li>
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
export default Main;