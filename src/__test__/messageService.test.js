// should apply TDD for this project but i have no time.
import { maximumMsgLengthChunk, generateMsgChunkwithoutPartIndicator, generateMsgChunkWithPartIndicator, attachPartIndicator, messageSplitter, } from '../services/messageService';

it('messagecalculate maximum message chunk', () => {
    expect(maximumMsgLengthChunk("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.")).toEqual(46);
    expect(maximumMsgLengthChunk("I can't believe Tweeter now supports chunking ")).toEqual(46);
    expect(maximumMsgLengthChunk(null)).toEqual(0);
    expect(maximumMsgLengthChunk('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toEqual(46);
})



it('attach part indicator', () => {
    expect(attachPartIndicator("I can't believe Tweeter now supports chunking", 0, 2)).toEqual("1/2 I can't believe Tweeter now supports chunking");
    expect(attachPartIndicator("my messages, so I don't have to do it myself.", 1, 2)).toEqual("2/2 my messages, so I don't have to do it myself.");
    // expect(attachPartIndicator("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.", 1, 2)).toThrow(Error);
})


it('generate msg chunk with part indicator', () => {
    expect(generateMsgChunkWithPartIndicator(["I can't believe Tweeter now supports chunking", "my messages, so I don't have to do it myself."])).toEqual(["1/2 I can't believe Tweeter now supports chunking","2/2 my messages, so I don't have to do it myself."]);
    expect(generateMsgChunkWithPartIndicator(["I can't believe Tweeter now supports chunking", "my messages, so I don't have to do it myself.", "I can't believe Tweeter now supports chunking", "my messages, so I don't have to do it myself."])).toEqual(["1/4 I can't believe Tweeter now supports chunking","2/4 my messages, so I don't have to do it myself.", "3/4 I can't believe Tweeter now supports chunking","4/4 my messages, so I don't have to do it myself."]);
})


it('generate msg chunk without part indicator', () => {
    expect(generateMsgChunkwithoutPartIndicator("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.")).toEqual(["I can't believe Tweeter now supports chunking","my messages, so I don't have to do it myself."]);
    expect(generateMsgChunkwithoutPartIndicator("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself. I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.")).toEqual(["I can't believe Tweeter now supports chunking","my messages, so I don't have to do it myself.", "I can't believe Tweeter now supports chunking","my messages, so I don't have to do it myself."]);
    expect(generateMsgChunkwithoutPartIndicator("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).toEqual([]);
})

it('message spliter', () => {
    expect(messageSplitter("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.")).toEqual(["1/2 I can't believe Tweeter now supports chunking","2/2 my messages, so I don't have to do it myself."]);
    expect(messageSplitter("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself. I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.")).toEqual(["1/4 I can't believe Tweeter now supports chunking","2/4 my messages, so I don't have to do it myself.", "3/4 I can't believe Tweeter now supports chunking","4/4 my messages, so I don't have to do it myself."]);
    expect(messageSplitter("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).toEqual([]);
    expect(messageSplitter("     ")).toEqual([]);
    expect(messageSplitter("")).toEqual([]);
    expect(messageSplitter(undefined)).toEqual([]);
    expect(messageSplitter(null)).toEqual([]);
})