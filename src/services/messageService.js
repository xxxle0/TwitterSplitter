const MAX_LENGTH_CHUNK = 50;
const LENGTH_OF_BACK_SLASH = 1;
const LENGTH_OF_SPACE = 1;

// DO ONE THING AND DO IT WELL

// calculate mess length chunk from 2 Inequation
// the first inequation is: n <= 10^i - 1
// the second inequation is: 
// with i is length of indicator
export const maximumMsgLengthChunk = function (msg) {
    if (typeof msg === "string" && msg.trim().length > 0) {
        const MAX_LENGTH_DATA_CHUNK = MAX_LENGTH_CHUNK - LENGTH_OF_BACK_SLASH - LENGTH_OF_SPACE;
        for (let i = 1; ;i++) {
            const msgLengthForEachChunk = MAX_LENGTH_DATA_CHUNK - 2 * i;
            const maxNumberOfChunk = (10**i - 1);
            const pivot = maxNumberOfChunk * msgLengthForEachChunk - msg.length;
            if (pivot > 0) {
                return msgLengthForEachChunk;
            }
        }
    } else {
        return 0;
    }
}



// loop through list of chunk message without part indicator
// and attach part indicator to it
export const generateMsgChunkWithPartIndicator = function (msgChunkPartIndicator) {
    const msgWithPartIndicator = [];
    for (let i = 0; i < msgChunkPartIndicator.length; i++) {
        msgWithPartIndicator[i] = attachPartIndicator(msgChunkPartIndicator[i], i, msgChunkPartIndicator.length);
    }
    return msgWithPartIndicator;
}


// attach part indicator to message chunk
export const attachPartIndicator = function(msg, index, total) {
    if (msg.length > 50) {
        throw new Error('Your message too long');
    }
    return `${index+1}/${total} ${msg}`;
}

export const generateMsgChunkwithoutPartIndicator = function(msg) {
    let msgLengthForEachChunk = maximumMsgLengthChunk(msg);
    const msgWithoutPartIndicator = [];
    let i = 0;
    while (i < msg.length) {
        // get substring with length + 1;
        // if the last char is " " return subStr
        // if the last char is not " " find the lastIndexOf " " and slice that string
        const subStr = msg.substring(i, i + msgLengthForEachChunk + 1);
        let msgChunk;
        if (subStr.slice(-1) === ' ' || i + msgLengthForEachChunk > msg.length) {
            msgChunk = msg.substring(i, i + msgLengthForEachChunk);
            i += msgLengthForEachChunk;
        } else  {
            const indexOfSpace = subStr.lastIndexOf(' ');
            msgChunk = subStr.substring(0, indexOfSpace);
            if (indexOfSpace === -1) {
                return [];
            } else {
                i += indexOfSpace + 1;
            }
        }
        msgWithoutPartIndicator.push(msgChunk);
    }
    return msgWithoutPartIndicator;
}
export const messageSplitter = function (msg = '') {
    // check case msg undefined or " "
    if (msg === undefined || msg=== null || msg.trim().length === 0) {
        return [];
    }

    // if msg length is less than maximum chunk return [msg]
    if (msg.length <= MAX_LENGTH_CHUNK) {
        return [msg]; 
    }

    // calculate maximum length of each chunk
    const msgWithoutPartIndicator = generateMsgChunkwithoutPartIndicator(msg);

    const msgWithPartIndicator = generateMsgChunkWithPartIndicator(msgWithoutPartIndicator);

    return msgWithPartIndicator;
}

