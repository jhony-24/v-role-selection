import { Component, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

interface InitializeApplicationProps {
  app: Component;
  mount: string;
}

const initializeApplication = ({ app, mount }: InitializeApplicationProps) => {
  const pinia = createPinia()

  return createApp(app)
    .use(router)
    .use(pinia)
    .mount(mount)
}

initializeApplication({
  app: App,
  mount: '#app'
})
