import React from 'react';
import { Badge } from 'antd';
import './Message.scss';

// if we not use any lifeCycle of react component
// we can change statefull component to statless component 
function Message(props) {
    const { message, partIndicator} = props;
    return <div className="Message__container">
        <Badge  count={partIndicator} /> { message}
        </div>;
}

export default Message;
