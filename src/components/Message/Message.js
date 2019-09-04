import React from 'react';
import { Badge } from 'antd';
import './Message.scss';
 
function Message(props) {
    const { message, partIndicator} = props;
    return <div className="Message__container">
        <Badge  count={partIndicator} /> { message}
        </div>;
}

export default Message;
