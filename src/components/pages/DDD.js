import React, { Component } from 'react';

import '../../App.css';

export default class DDD extends Component {
    state = {
        tasks: [
            {name:"It'd be done by now, but I'm waiting for the TO to download.", category:"wip"},
            {name:"No sense starting now; break's in 45 minutes.", category:"todo"},
            {name:"Well, I guess halfass is better than no ass, so stick a fork in this one and grab yourself a beer, champ.  You earned it.", category:"complete"},
            {name:"Screw this; swings can do it.", category:"fib"}
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
            complete: [],
            fib: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable">
                    <li>{t.name}</li>
                </div>
             
            );
        });

        return (
            <div className="container-drag">
                
                <h2 className="header">h2 tag line</h2>
                <div className="todo"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "todo")}}>
                    <span className="task-header">To Do</span>
                   {tasks.todo}
                </div>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">Work In Progress</span>
                    {tasks.wip}
                </div>
                <div className="complete" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">D-U-N DONE</span>
                     {tasks.complete}
                </div>
                <div className="fib" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "fib")}>
                     <span className="task-header">The Fuckit Bucket</span>
                     {tasks.fib}
                </div>
            


            </div>
        );
    }
}