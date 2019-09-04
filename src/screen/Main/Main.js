import React from 'react';
import { messageSplitter, generateMsgChunkwithoutPartIndicator } from '../../services/messageService';
import { TIME_OUT_CONTANTS } from '../../contants'; 
import Message from '../../components/Message';
import './Main.scss';

class Main extends React.Component {

    state = {
        messageChunk: []
    }

    handleChangeMessageInput = (e) => {
        e.preventDefault();

        // the best practices is apply debounce which is practice for input
        // we do not set new state immediately when user add their text
        // we use setTimeOut for set new state when user stop typung after TIME_OUT_CONTANTS
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
            <div className="Main__container">
                <div className="Main__header">
                        <span>Twitter Splitter</span>
                </div>
                <div className="Main__content">
                    <div className="Main__content__message">
                        <div className="Main__content__message__add">
                            <div className="Main__message-input">
                                <input className="message-input" placeholder="Add message here" onChange={this.handleChangeMessageInput}></input>
                            </div>
                            <div className="Main__message-container">
                                <div className="Main__message">
                                    {
                                        messageChunk.map((message, index) => {
                                            return <Message key={index} partIndicator={`${index + 1} / ${totalChunk}`} message={message}/>
                                        })
                                    }
                                </div>
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
