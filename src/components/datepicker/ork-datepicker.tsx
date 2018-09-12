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
        this.renderDialog();
    }

    renderDialog() {
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
            <div class="date-dialog">
                <div class="month-navigation">
                    <h4 class="dialog-month">
                        <p onClick={() => this.previousMonth()} class="arrow-left">&gt;</p>
                        {this.getCurrentMonth()}
                        <p onClick={() => this.nextMonth()} class="arrow-right">&lt;</p>
                    </h4>
                </div>
                <table class="dialog-table">
                    {this.createTableHeader()}
                    {this.createTableBody()}
                </table>
            </div>
        )
    }

    previousMonth() {
        this.date.setMonth(this.date.getMonth() - 1);
    }

    nextMonth() {
        this.date.setMonth(this.date.getMonth() + 1);
    }

    getCurrentMonth() {
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

        for (var i = 0; i < map.length; i++) {
            let line = map[i];
            table.push(<tr>{this.renderLine(line, map, i)}</tr>);
        }

        return table;
    }

    renderLine(line: string[], map: string[][], i: number): any {
        let tableLine = [];

        for (var j = 0; j < line.length; j++) {
            tableLine.push(<td>{map[i][j]}</td>)
        }

        return tableLine;
    }

    createMonthTable(): any {

        let map: string[][] = new Array<Array<string>>();
        let weekOfMonthIndex = 0;
        map.push([]);

        let emptyDays = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay() - 1;
        if (emptyDays == -1) emptyDays = 6;

        for (let i = 1; i <= emptyDays; i++) {
            map[weekOfMonthIndex].push('');
        }

        for (let i = 1; i <= this.getLastDayOfMonth(); i++) {
            var month = this.date.getMonth();
            var year = this.date.getFullYear();
            var day = new Date(year, month, i);

            map[weekOfMonthIndex].push('' + day.getDate());

            if (day.getDay() == 0) {
                weekOfMonthIndex++;
                map.push([]);
            }
        }

        return map;
    }

    getLastDayOfMonth(): any {

        var month = this.date.getMonth();
        var year = this.date.getFullYear();
        var day = new Date(year, month + 1, 0);

        return day.getDate();
    }

    render() {
        return (
            <div class="container">
                {this.dialog}
            </div>
        );
    }
}