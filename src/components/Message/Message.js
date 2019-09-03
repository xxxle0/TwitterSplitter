import React from 'react';
import { Badge } from 'antd';

function Message(props) {
    const { message, partIndicator} = props;
    return <div><Badge count={partIndicator} />{message}</div>;
}

export default Message;
