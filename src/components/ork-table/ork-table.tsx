import { Component, State, Prop } from '@stencil/core';
import { OrkTableColumn } from './orkTableColumn';

@Component({
    tag: 'ork-table',
    styleUrl: 'ork-table.scss'
})
export class OrkDatepicker {

    @State() tableState: Array<object> = [];
    
    @Prop() columns: Array<OrkTableColumn> = [];
    @Prop() dataSource: Array<any> = [];

    componentWillLoad() {
        this.renderTable();
    }

    renderTable() {
        let state = [];
        state.push(<table class="ork-table">{this.renderHeader()}{this.renderBody()}</table>)

        this.tableState = state;
    }

    renderHeader() {
        return (
            <thead>
                {this.renderHeaderRow()}
            </thead>
        )
    }

    renderHeaderRow() {
        return (
            <tr class="ork-table-row">
                {this.columns.map(item => <th class="ork-table-head-cell">{item.name}</th>)}
            </tr>
        )
    }

    renderBody() {
        return (
            this.dataSource.map(line => <tr class="ork-table-row">{this.renderColumn(line)}</tr>)
        )
    }

    renderColumn(line: any) {
        return (
            this.columns.map(col => <td class="ork-table-cell">{line[col.propertyName]}</td>)
        )
    }

    render() {
        return (
            <div class="ork-table-wrapper">
                {this.tableState}
            </div>
        );
    }
}