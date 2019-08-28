const MAX_LENGTH_CHUNK = 50;
const LENGTH_OF_BACK_SLASH = 1;
const LENGTH_OF_SPACE = 1;

const msgLengthChunk = function (msg) {
    const MAX_LENGTH_DATA_CHUNK = MAX_LENGTH_CHUNK - LENGTH_OF_BACK_SLASH - LENGTH_OF_SPACE;
    for (let i = 1; ;i++) {
        const msgLengthForEachChunk = MAX_LENGTH_DATA_CHUNK - 2 * i;
        const maxNumberOfChunk = (10**i - 1);
        const pivot = maxNumberOfChunk * msgLengthForEachChunk - msg.length;
        if (pivot > 0) {
            return [msgLengthForEachChunk, i];
        }
    }
}

export const splitMessageChunk = function (msg) {
    if (msg.length <= MAX_LENGTH_CHUNK) {
        return [msg]; 
    }
    let [msgLengthForEachChunk, totalChunk] = msgLengthChunk(msg);
    const msgWithoutPartIndicator = [];
    let currentString = '';
    for (let i = 0; i < msg.length; i++) {
        if (currentString.length === 0) {
            currentString += msg[i].trim();
        } else {
            currentString += msg[i];
        }
        if (i > msgLengthForEachChunk) {
            msgWithoutPartIndicator.push(currentString);
            currentString = '';
            msgLengthForEachChunk *= 2;
        }
        if (i === msg.length - 1 && currentString.length > 0) {
            msgWithoutPartIndicator.push(currentString);
        }
    }
    for (let i = 0; i < msgWithoutPartIndicator.length; i++) {
        msgWithoutPartIndicator[i] = `${i+1}/${msgWithoutPartIndicator.length} ${msgWithoutPartIndicator[i]}`;
    }
    return msgWithoutPartIndicator
}
