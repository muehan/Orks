import { Component, Prop, State } from '@stencil/core';

@Component({
    tag: 'ork-datepicker',
    styleUrl: 'ork-datepicker.scss'
})
export class OrkDatepicker {

    // Indicate that name should be a public property on the component
    @Prop() name: string;

    @State() dialog: Array<object> = [];

    private dialogVisible: boolean = false;

    componentWillLoad() {
        this.renderDialog();
    }

    openDialog() {
        this.dialogVisible = !this.dialogVisible;
        console.log(this.dialogVisible);
        this.renderDialog();
    }

    renderDialog() {
        console.log('renderDialog');
        let dialog = [];
        dialog.push(<input type="text" onClick={() => this.openDialog()}></input>)

        if (this.dialogVisible) {
            dialog.push(this.loadDialog());
        }

        this.dialog = dialog;
    }

    createTableHeader(){
        return (
            <tr>
                <th>M</th>
                <th>D</th>
                <th>M</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
                <th>S</th>
            </tr>
        )
    }

    loadDialog() {
        return (
            <div>
                <table class="dialog-table">
                   {this.createTableHeader()}
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                </table>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.dialog}
            </div>
        );
    }
}