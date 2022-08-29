import { Component, OnInit } from '@angular/core';

interface IRole {
  label: string;
  value: string;
}

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.scss']
})
export class EditableTableComponent implements OnInit {

  public users = [
    { id: '001', sell_value: 100, comision: 1, quant: 2, total: 0 },
    { id: '001', sell_value: 230, comision: 3, quant: 4, total: 0 },
    { id: '001', sell_value: 410, comision: 6, quant: 1, total: 0 },
  ]

  public checker: object[] = [
    { id: 1, country: 'Argentina', year: 2022, type: 'BUDGET', checked: true },
    { id: 2, country: 'Argentina', year: 2022, type: 'RF', checked: false },
    { id: 3, country: 'Argentina', year: 2022, type: 'BUDGET', checked: false },
  ]

  public actual_users: object[] = []

  constructor() {
    this.users = this.users.map(elem => {
      const total = (elem.sell_value * elem.quant) * elem.comision
      elem.total = total

      return elem;
    })

    this.actual_users = [...this.users]
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('CHECKING')
    this.users = this.users.map(elem => {
      const total = (elem.sell_value * elem.quant) * elem.comision
      elem.total = total

      return elem;
    })
  }

  dumpTable(): void {
    console.table(this.users)
  }
}
