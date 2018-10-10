import { Component, State } from '@stencil/core';

@Component({
    tag: 'ork-datepicker',
    styleUrl: 'ork-datepicker.scss'
})
export class OrkDatepicker {

    // @Element() private iconElement: HTMLElement;

    @State() dialog: Array<object> = [];
    @State() pickerWindow: Array<object> = [];

    private dialogVisible: boolean = false;
    private date: Date = new Date();

    private monthStrings: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    get selectedDate() {
        return `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`;
    }

    componentWillLoad() {
        this.renderDialog();
        this.renderPickerWindow();
    }

    componentDidLoad() {
        document.addEventListener('click', (event) => {
            let eventTarget = event.target as HTMLElement;
            console.log(eventTarget.closest('.ork-form-field-wrapper'));
            if(eventTarget.closest('.ork-form-field-wrapper')){
                console.log('do not close the window');
                return;
            }
            console.log('close the window');
            this.dialogVisible = false;
            this.renderPickerWindow();
        });
    }

    renderPickerWindow() {
        let pickerWindow = [];

        if (this.dialogVisible) {
            pickerWindow.push(this.loadDialog());
        }

        this.pickerWindow = pickerWindow;
    }

    openDialog() {
        this.dialogVisible = !this.dialogVisible;
        this.renderPickerWindow();
    }

    renderDialog() {

        let dialog = [];
        dialog.push(<input class="datepicker-input" type="text" value={this.selectedDate}></input>)

        this.dialog = dialog;
    }

    createTableHeader() {
        return (
            <tr class="ork-table-header">
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

    createTableHeaderDivider(): any {
        return (
            <tr>
                <th aria-hidden="true" class="ork-table-header-divider" colSpan={7}>
                </th>
            </tr>
        )
    }

    loadDialog() {
        return (
            <div class="date-dialog">
                <div class="month-navigation">
                    <h4 class="dialog-month">
                        <p onClick={() => this.nextMonth()} class="arrow-right">&gt;</p>
                        {this.getCurrentMonth()}
                        <p onClick={() => this.previousMonth()} class="arrow-left">&lt;</p>
                    </h4>
                </div>
                <table class="dialog-table">
                    {this.createTableHeader()}
                    {this.createTableHeaderDivider()}
                    <tbody>
                        {this.createTableBody()}
                    </tbody>
                </table>
            </div>
        )
    }

    previousMonth() {
        this.date.setMonth(this.date.getMonth() - 1);
        this.renderDialog();
        this.renderPickerWindow();
    }

    nextMonth() {
        this.date.setMonth(this.date.getMonth() + 1);
        this.renderDialog();
        this.renderPickerWindow();
    }

    getCurrentMonth() {
        return this.monthStrings[this.date.getMonth()];
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
            var day = map[i][j];
            tableLine.push(<td id={day} onClick={(event) => this.changeDateSelected(event)}><div class="ork-date-cell">{day}</div></td>)
        }

        return tableLine;
    }

    changeDateSelected(event: Event): any {
        var element: Element = event.srcElement.parentElement;
        if (element) {
            this.date.setDate(Number(element.id));
            this.dialogVisible = false;
            this.renderDialog();
            this.renderPickerWindow();
        }
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

    focusLost(): void {
        console.log('focuslost');
        this.dialogVisible = false;
        this.renderPickerWindow();
    }

    render() {
        return (
            <div class="ork-form-field-wrapper">
                <div class="ork-form-filed-input">
                    <div class="ork-form-field">
                        {this.dialog}
                    </div>
                    <div class="ork-form-field-icon" onClick={() => this.openDialog()}>
                         <i class="material-icons md-16"> {/* onClick={() => this.openDialog()} */}
                            calendar_today
                        </i>
                    </div>
                </div>
                <div class="ork-form-underline"></div>
                {this.pickerWindow}
            </div>
        );
    }
}