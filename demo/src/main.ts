import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const overlayObserver = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
        if (mutation.addedNodes && mutation.addedNodes.length) {
            Array.from(mutation.addedNodes).forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('v-overlay-container')) {
                    node.classList.add('vuetify');
                    console.log("Un elemento con la classe 'v-overlay-container' è stato aggiunto al body!");
                    overlayObserver.disconnect();
                }
            });
        }
    });
});

overlayObserver.observe(document.body, { childList: true, subtree: true });

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())

app.mount('#app')
