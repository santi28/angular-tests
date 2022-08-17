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
    { id: '001', name: 'Santiago de Nicolás', email: 'santidenicolas@gmail.com', role: 'admin' },
    { id: '002', name: 'Malpsi Kaseri', email: 'mkaseri@gmail.com', role: 'user' },
    { id: '003', name: 'Gonzalo Herrera', email: 'gherrera@gmail.com', role: 'admin' }
  ]

  public roles!: IRole[]
  public selectedRole!: IRole

  constructor() {
    this.roles = [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' }
    ]
  }

  ngOnInit(): void {
  }

}
