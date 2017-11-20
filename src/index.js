import DatePicker from './components/vue2-datepicker'
import DataTable from './components/vue-good-table/Table.vue';
import Treeselect from './components/tree-select/index.js';

// Install the components
export function install (Vue) {
  Vue.component('datePicker', DatePicker);
  Vue.component('dataTable', DataTable);
  Vue.component('treeselect', Treeselect);
  /* -- Add more components here -- */
}

// Expose the components
export {
  DatePicker,
  DataTable,
  Treeselect,
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
