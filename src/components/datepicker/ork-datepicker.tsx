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
    private date: Date = new Date();

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

    createTableHeader() {
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
                <h3>{this.getCurrentMonth()}</h3>
                <table class="dialog-table">
                    {this.createTableHeader()}
                    {this.createTableBody()}
                </table>
            </div>
        )
    }

    getCurrentMonth(): any {
        switch (this.date.getMonth()) {
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'Mai';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'Septembre';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'December'
        }

        throw new Error('Argument Exception');
    }

    createTableBody() {

        let map: string[][] = this.createMonthTable();

        let table = [];

        for(var i = 0; i < map.length; i++) {
            let line = map[i];
            table.push('<tr>');
            for(var j = 0; j < line.length; j++) {
                table.push(<td>{map[i][j]}</td>)
            }
            table.push('</tr>');
        }

        return table;
    }

    createMonthTable(): any {
        let map: string[][] = new Array<Array<string>>();

        return map;
    }

    getLastDayOfMonth(): any {
        var month = this.getCurrentMonth();
        var day = new Date(2008, month + 1, 0);

        return day
    }

    render() {
        return (
            <div>
                {this.dialog}
            </div>
        );
    }
}