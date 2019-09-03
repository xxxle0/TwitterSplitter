import React from 'react';
import { messageSplitter } from '../../services/messageService';


class Main extends React.Component {

    state = {
        message: []
    }

    handleChangeMessageInput = (e) => {
        e.preventDefault();
        
        const messageChunk = messageSplitter(e.target.value);
        this.setState({ 
            message: messageChunk
        });
    }

    render() {
        const { message } = this.state;
        return (
        <div className="Main">
            <div className="Main__message-input">
                Test<input onChange={this.handleChangeMessageInput}></input>
            </div>
            <div className="Main__message-container">
                <div className="Main__message">
                    <ul>
                    {
                        message.map((el,index) => {
                            console.log(el)
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