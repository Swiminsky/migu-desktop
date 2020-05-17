import { isFunction } from '../src/util/util';

class pubsub {
  private lastUid = 0;
  private PRE = 'uid_';
  private messages;
  publish(message) {
    const subscribers = this.messages[message];
    if (!subscribers) return;
    Object.getOwnPropertyNames(subscribers).forEach(subscriber => {
      subscriber(message);
    })
  }
  subscribe(message: string, fn: object) {
    if (isFunction(fn)) return;
    if ( !messages.hasOwnProperty(message)) {
      messages[message] = {};
    }
    let token = `${this.PRE}${++this.lastUid}`;
    messages[message][token] = fn;
    return token;
  }
}
