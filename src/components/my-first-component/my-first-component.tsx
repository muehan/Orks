import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-first-component',
  styleUrl: 'my-first-component.scss'
})
export class MyComponent {

  @State() componentHtml: Array<object> = [];

  // Indicate that name should be a public property on the component
  @Prop() name: string;
  @Prop() age: string;

  private counter: number = 0;

  componentDidLoad() {
   
    window.setInterval(() => {
      let html = [];
      this.counter++;
      html.push(<p>My name is {this.name}, I'm {this.age} years old, {this.counter} seconds since loading</p>);

      this.componentHtml = html;
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.componentHtml}
      </div>
    );
  }
}