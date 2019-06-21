// Import vue components
import Image from '../packages/image/index.js'
import Text from '../packages/text/index.js'
import Button from '../packages/button/index.js'
import Badge from '../packages/badge/index.js'

// Organize imported components into an array
const components = [
  Image,
  Text,
  Button,
  Badge
]

// Declare install function executed by Vue.use()
export function install (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// To allow use as module (npm/webpack/etc.) export components
export default {
  Image,
  Text,
  Button,
  Badge
}
