import React, { Component } from 'react';

export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
          tasks: []
        };

        this.onTaskChange = this.onTaskChange.bind(this);
    }

    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if(e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({tasks: selectedTasks});
    }

    render() {
        return (
            <div className="p-grid p-fluid dashboard">

                <div className="p-col-12 p-md-6 p-xl-4">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#007be5',color:'#00448f'}}><span>NI</span></div>
                        <div className="highlight-details ">
                            <span>Não iniciadas</span>
                            <span className="count">523</span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-4">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#20d077',color:'#038d4a'}}><span>FZ</span></div>
                        <div className="highlight-details ">
                            <span>Fazendo</span>
                            <span className="count">21</span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-4">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#f9c851',color:'#b58c2b'}}><span>PR</span></div>
                        <div className="highlight-details ">
                            <span>Pronto</span>
                            <span className="count">60</span>
                        </div>
              </div>
              </div>
            </div>
        );
    }
}
