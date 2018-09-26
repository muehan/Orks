import { Component, State } from '@stencil/core';

@Component({
    tag: 'ork-table',
    styleUrl: 'ork-table.scss'
})
export class OrkDatepicker {

    @State() tableState: Array<object> = [];

    render() {
        return (
            <div class="ork-table">
                {this.tableState}
            </div>
        );
    }
}