import React from 'react';
import { messageSplitter } from '../../services/MessageServices';

const a = messageSplitter("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.");
console.log(a);
class Main extends React.Component {
    render() {
        return <>COMPONENT</>
    }
}
export default Main;