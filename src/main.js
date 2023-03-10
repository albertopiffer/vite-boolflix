import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'

/* Set up using Vue 3 */

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faStar, faStarRegular)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
