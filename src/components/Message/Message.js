import React from 'react';
import { Badge } from 'antd';

function Message(props) {
    const { message } = props;
    return <div><Badge count={25} />{message}</div>;
}

export default Message;
