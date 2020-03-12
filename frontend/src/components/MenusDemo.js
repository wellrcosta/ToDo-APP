import React, {Component} from 'react';
import {MegaMenu} from 'primereact/megamenu';

export class MenusDemo extends Component {

    constructor() {
        super();
        this.state = {
            taskMenuItems: [
                {
                    label: 'Settings', icon: 'pi pi-fw pi-cog',
                    items: [
                      [
                            {
                                items: [{label: 'Edit'}, {label: 'Remove'}]
                            }
                        ]
                    ]
              }
            ]
        };
    }

    render() {
        return (
          <div className="p-grid p-fluid">


                <div className="p-col-12 p-col-12">
                        <h1>MegaMenu - Horizontal</h1>
                        <MegaMenu model={this.state.taskMenuItems} />
            </div>

            </div>
        )
    }
}
