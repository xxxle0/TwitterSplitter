const MAX_LENGTH_CHUNK = 50;
const LENGTH_OF_BACK_SLASH = 1;
const LENGTH_OF_SPACE = 1;

const splitMessage = function (msg) {
    const msgArray = msg.trim().split(" ");
    return msgArray;
}

const msgLengthChunk = function (msg) {
    const MAX_LENGTH_DATA_CHUNK = MAX_LENGTH_CHUNK - LENGTH_OF_BACK_SLASH - LENGTH_OF_SPACE;
    for (let i = 1; ;i++) {
        const msgLengthForEachChunk = MAX_LENGTH_DATA_CHUNK - 2 * i;
        const maxNumberOfChunk = (10**i - 1);
        const pivot = maxNumberOfChunk * msgLengthForEachChunk - msg.length;
        if (pivot > 0) {
            return [msgLengthForEachChunk, i];
        }
        if (i> 100) {
            break;
        }
    }
}

export const splitMessageChunk = function (msg) {
    if (msg.length <= MAX_LENGTH_CHUNK) {
        return [msg]; 
    }
    const msgArray = splitMessage(msg);
    const [msgLengthForEachChunk, totalChunk] = msgLengthChunk(msg);
    console.log(msgLengthForEachChunk, totalChunk);
}
