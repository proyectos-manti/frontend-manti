import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { trigger, state, style, transition, animate } from '@angular/animations';
//import {PanelMenuModule} from 'primeng-lts/panelmenu';
import { PanelMenuModule } from 'primeng/panelmenu';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(500)),
    ]),
  ],
})
export class SidebarComponent {
  items: MenuItem[];
  sid: MenuItem[];
  expanded: boolean = false;
  userName: string = 'Steveen Ordoñez';
  userImage: string = 'assets/user-image.png';

  constructor() {
this.sid = [
  {
    icon: 'pi pi-bars',
    command: () => {
      this.toggleMenu();
    },
    styleClass: 'user-menu-item user-image-menu-item',
  },
  {
    separator: true,
  },
  {
    label: this.userName,
    icon: 'pi pi-fw pi-user',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-user-plus'
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-user-minus'
      },
    ],
    //styleClass: 'user-menu-item user-image-menu-item'
  }

];
    this.items = [
            {
                label: 'File',
                icon: 'pi pi-pw pi-file',
                items: [{
                        label: 'New', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'User', icon: 'pi pi-fw pi-user-plus'},
                            {label: 'Filter', icon: 'pi pi-fw pi-filter'}
                        ]
                    },
                    {label: 'Open', icon: 'pi pi-fw pi-external-link'},
                    {separator: true},
                    {label: 'Quit', icon: 'pi pi-fw pi-times'}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search', 
                        icon: 'pi pi-pi pi-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'User',
                                icon: 'pi pi-fw pi-file',
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {label: 'Save', icon: 'pi pi-fw pi-save'},
                            {label: 'Update', icon: 'pi pi-fw pi-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                        ]
                    }
                ]
            }
        ];
  }

  toggleMenu(): void {
    this.expanded = !this.expanded;
  }
}
