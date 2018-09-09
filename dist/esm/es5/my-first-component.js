/*! Built with http://stenciljs.com */
import { h } from './mycomponent.core.js';
var MyComponent = /** @class */ (function () {
    function MyComponent() {
    }
    MyComponent.prototype.render = function () {
        return (h("p", null, "My name is ", this.name));
    };
    Object.defineProperty(MyComponent, "is", {
        get: function () { return "my-first-component"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "properties", {
        get: function () {
            return {
                "name": {
                    "type": String,
                    "attr": "name"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
export { MyComponent as MyFirstComponent };
