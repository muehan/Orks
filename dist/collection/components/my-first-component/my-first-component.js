export class MyComponent {
    render() {
        return (h("p", null,
            "My name is ",
            this.name));
    }
    static get is() { return "my-first-component"; }
    static get properties() { return {
        "name": {
            "type": String,
            "attr": "name"
        }
    }; }
    static get style() { return "/**style-placeholder:my-first-component:**/"; }
}