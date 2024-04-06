import badgedirective from './badgedirective';
import button from './button';
import checkbox from './checkbox';
import chip from './chip';
import chips from './chips';
import dialog from './dialog';
import datatable from './datatable';
import global from './global';
import multiselect from './multiselect';
import paginator from './paginator';
import ripple from './ripple';
import textarea from './textarea';
import tooltip from './tooltip';

export default {
    global,
    directives: {
        badge: badgedirective,
        ripple,
        tooltip
    },

    //forms
    checkbox,
    chips,
    multiselect,
    textarea,

    //buttons
    button,

    //data
    paginator,
    datatable,

    //overlays
    dialog,

    //misc
    chip,
};
