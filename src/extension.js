import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class DisableUnredirect extends Extension {

    constructor(metadata) {
        super(metadata);
        this.enableUnredirect = null;
    }

    enable() {
        if (this.enableUnredirect == null) {
            this.enableUnredirect = global.compositor.enable_unredirect;
            global.compositor.enable_unredirect = function () {};
            global.compositor.disable_unredirect();
        }
    }

    disable() {
        if (this.enableUnredirect != null) {
            global.compositor.enable_unredirect = this.enableUnredirect;
        }
    }
}
