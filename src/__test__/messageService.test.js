import { maximumMsgLengthChunk, generateMsgChunkWithPartIndicator, attachPartIndicator, messageSplitter} from '../services/messageService';

it('calculate maximum message chunk', () => {
    expect(maximumMsgLengthChunk("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.")).toEqual(46);
    expect(maximumMsgLengthChunk("I can't believe Tweeter now supports chunking ")).toEqual(46);
    expect(maximumMsgLengthChunk(null)).toEqual(0);
    expect(maximumMsgLengthChunk('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toEqual(46);
})