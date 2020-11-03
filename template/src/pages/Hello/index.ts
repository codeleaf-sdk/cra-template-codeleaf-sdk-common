import { CreatePageModule } from '@codeleaf-sdk/core';
import HelloStore from './store';
import HelloService from './service';
import HelloPage from './page';

export const HelloModule = CreatePageModule<HelloStore, HelloService>({
  path: '/',
  component: HelloPage,
  store: [HelloStore, null],
  service: [HelloService, null],
});
