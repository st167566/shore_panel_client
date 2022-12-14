var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-toast`;
let Toast = class Toast extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class'];
        this.options = {
            multipleSlots: true,
        };
        this.hideTimer = null;
        this.removeTimer = null;
        this.data = {
            inserted: false,
            show: false,
            classPrefix: name,
            typeMapIcon: '',
        };
        this.properties = props;
        this.methods = {
            show(options) {
                if (this.hideTimer)
                    clearTimeout(this.hideTimer);
                if (this.removeTimer)
                    clearTimeout(this.removeTimer);
                const iconMap = {
                    loading: 'loading',
                    success: 'check-circle',
                    fail: 'error-circle',
                };
                const typeMapIcon = iconMap[options === null || options === void 0 ? void 0 : options.theme] || '';
                const defaultOptions = {
                    direction: props.direction.value,
                    duration: props.duration.value,
                    icon: props.icon.value,
                    message: props.message.value,
                    placement: props.placement.value,
                    preventScrollThrough: props.preventScrollThrough.value,
                    theme: props.theme.value,
                };
                const data = Object.assign(Object.assign(Object.assign({}, defaultOptions), options), { show: true, typeMapIcon, inserted: true });
                const { duration } = data;
                this.setData(data);
                if (duration > 0) {
                    this.hideTimer = setTimeout(() => {
                        this.clear();
                    }, duration);
                }
            },
            hide() {
                this.clear();
            },
            clear() {
                this.setData({ show: false });
                this.removeTimer = setTimeout(() => {
                    var _a, _b;
                    this.setData({
                        inserted: false,
                    });
                    (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.close) === null || _b === void 0 ? void 0 : _b.call(_a);
                    this.triggerEvent('close');
                }, 300);
            },
            destroyed() {
                if (this.removeTimer) {
                    clearTimeout(this.removeTimer);
                    this.removeTimer = null;
                }
                if (this.hideTimer) {
                    clearTimeout(this.hideTimer);
                    this.hideTimer = null;
                }
                this.triggerEvent('destory');
            },
        };
    }
    detached() {
        this.destroyed();
    }
};
Toast = __decorate([
    wxComponent()
], Toast);
export default Toast;
