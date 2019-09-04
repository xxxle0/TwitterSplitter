import React from 'react';
import { messageSplitter, generateMsgChunkwithoutPartIndicator } from '../../services/messageService';
import { TIME_OUT_CONTANTS } from '../../contants'; 
import Message from '../../components/Message';
import Header from '../../components/Header';
class Main extends React.Component {

    state = {
        messageChunk: []
    }

    handleChangeMessageInput = (e) => {
        e.preventDefault();
        const messageChunk = generateMsgChunkwithoutPartIndicator(e.target.value);
        if (this.timeOut) {
            clearTimeout(this.timeOut);
        };
        this.timeOut = setTimeout(() => this.setState({ 
            messageChunk
        }), TIME_OUT_CONTANTS)
    }

    
    render() {
        const { messageChunk } = this.state;
        const totalChunk = messageChunk.length;
        return (
        <div className="Main">
            <Header />
            <div className="Main__content">
                <div classname="Main__content__time">
                    <div className="Main__content__time__day">Today</div>
                    <div className="Main__content__time__timestamp">{Date.now()}</div>
                </div>
                <div className="Main__content__message">
                    <div className="Main__content__message__add">
                        <div className="Main__message-input">
                            <input placeHolder="Add message here" onChange={this.handleChangeMessageInput}></input>
                        </div>
                        <div className="Main__message-container">
                            <div className="Main__message">
                                <ul>
                                {
                                    messageChunk.map((message, index) => {
                                        return <Message key={index} partIndicator={`${index + 1} / ${totalChunk}`} message={message}/>
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        )
    }
}
export default Main;
