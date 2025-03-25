import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class DisableUnredirect extends Extension {

    constructor(metadata) {
        super(metadata);
        this.enableUnredirect = undefined;
    }

    enable() {
        if (this.enableUnredirect === undefined) {
            this.enableUnredirect = global.compositor.enable_unredirect;
            global.compositor.enable_unredirect = function () {};
            global.compositor.disable_unredirect();
        }
    }

    disable() {
        if (this.enableUnredirect !== undefined) {
            global.compositor.enable_unredirect = this.enableUnredirect;
        }
    }
}
