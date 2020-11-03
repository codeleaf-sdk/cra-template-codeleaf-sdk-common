import { BaseStore } from '@codeleaf-sdk/core';
import { computed } from 'mobx';

type HelloStoreState = {
  message: string;
  count: number;
};

export default class HelloStore extends BaseStore<HelloStoreState> {
  constructor() {
    super({ message: 'Hello, world!', count: 0 }, 'HelloStore');

    setInterval(() => {
      this.commit({ count: this.state.count + 1 });
    }, 250);
  }

  @computed
  get message(): string {
    return this.state.message;
  }

  @computed
  get subMessage(): string {
    return `Counter: ${this.state.count}`;
  }
}
