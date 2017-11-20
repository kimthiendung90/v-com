import DatePicker from './components/vue2-datepicker'
import VueGoodTable from './components/vue-good-table/vue-good-table.min.js';

// Install the components
export function install (Vue) {
  Vue.component('datePicker', DatePicker);
  Vue.component('vueGoodTable', VueGoodTable);
  /* -- Add more components here -- */
}

// Expose the components
export {
  DatePicker,
  VueGoodTable,
  /* -- Add more components here -- */
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
