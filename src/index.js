// Import vue components
import ProtoImage from '../packages/image'
import ProtoText from '../packages/text'
import ProtoButton from '../packages/button'
import ProtoBadge from '../packages/badge'

// Organize imported components into an array
const components = [
  ProtoImage,
  ProtoText,
  ProtoButton,
  ProtoBadge
]

// Declare install function executed by Vue.use()
export function install (Vue) {
  components.forEach(component => {
    if (install.installed) return
    install.installed = true
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
export default { ...components }