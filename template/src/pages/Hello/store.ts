import { LeafStore } from '@codeleaf-sdk/core';
import { makeObservable, computed } from 'mobx';

type HelloStoreState = {
  message: string;
  count: number;
};

export default class HelloStore extends LeafStore<HelloStoreState> {
  constructor() {
    super({ message: 'Hello, world!', count: 0 }, 'HelloStore');

    makeObservable(this, {
      message: computed,
      subMessage: computed,
    });

    setInterval(() => {
      this.commit({ count: this.state.count + 1 });
    }, 250);
  }

  get message(): string {
    return this.state.message;
  }

  get subMessage(): string {
    return `Counter: ${this.state.count}`;
  }
}
