"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../src/util/util");
class pubsub {
    constructor() {
        this.lastUid = 0;
        this.PRE = 'uid_';
    }
    publish(message) {
        const subscribers = this.messages[message];
        if (!subscribers)
            return;
        Object.getOwnPropertyNames(subscribers).forEach(subscriber => {
            subscriber(message);
        });
    }
    subscribe(message, fn) {
        if (util_1.isFunction(fn))
            return;
        if (!messages.hasOwnProperty(message)) {
            messages[message] = {};
        }
        let token = `${this.PRE}${++this.lastUid}`;
        messages[message][token] = fn;
        return token;
    }
}
