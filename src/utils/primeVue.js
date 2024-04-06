import BadgeDirective from "primevue/badgedirective";
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import Paginator from 'primevue/paginator';
import Ripple from 'primevue/ripple';
import Textarea from 'primevue/textarea';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';

const install = app => {
    app.use(ToastService)
    app.directive('tooltip', Tooltip);
    app.directive('badge', BadgeDirective);
    app.directive('ripple', Ripple);
    app.component('Button', Button);
    app.component('Checkbox', Checkbox);
    app.component('Column', Column);
    app.component('DataTable', DataTable);
    app.component('Dialog', Dialog);
    app.component('MultiSelect', MultiSelect);
    app.component('Paginator', Paginator);
    app.component('Textarea', Textarea);
}
export {install as default}