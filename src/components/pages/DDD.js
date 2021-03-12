import React, { Component } from 'react';

import '../../App.css';

export default class DDD extends Component {
    state = {
        tasks: [
            {name:"Something to do.",category:"wip", bgcolor: "yellow"},
            {name:"No sense starting now; break's in 45 minutes.", category:"wip", bgcolor:"yellow"},
            {name:"Well, I guess halfass is better than no ass, so stick a fork in this one and grab yourself a beer, champ.  You earned it.", category:"complete", bgcolor:"green"},
            {name:"Oh, you thought you were done?  Well, here's another task!", category:"todo", bgcolor:"red"}
          ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            todo: [],
            wip: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">h2 tag line</h2>
                <div className="todo"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "todo")}}>
                    <span className="task-header">To do</span>
                    {tasks.todo}
                </div>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">Work in progress</span>
                    {tasks.wip}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">D-U-N DONE</span>
                     {tasks.complete}
                </div>


            </div>
        );
    }
}