import React, { Component } from 'react';

import '../../App.css';

export default class FinalChecklist extends Component {
    state = {
        tasks: [
            
            {name:"Perform Cabin Checklist.", category:"todo"},
            {name:"Perform Deck Checklist.", category:"todo"},
            {name:"Perform Power Transition Checklist.", category:"todo"},
            {name:"Perform Comms Checklist.", category:"todo"},
            {name:"Perform Navigation And Routing Checklist.", category:"todo"},
            {name:"If trip will include night operations, perform Exterior Lighting Checklist.", category:"todo"},
            {name:"Perform Engine Room Checklist and Main Engine Start Procedure.", category:"todo"},
            {name:"Function test throttles by advancing each main engine momentarily.", category:"todo"},
            {name:"Function test gears by momentarily placing each transmission into forward and reverse.", category:"todo"},
            {name:"Function test bow thruster by momentarily commanding left and right.", category:"todo"},
            {name:"Verify immediate area and route are clear.", category:"todo"},
            {name:"Verify pressures and temps are in the green or at least showing a change.", category:"todo"},
            {name:"After departure, stow lines and bumpers.", category:"todo"},
            
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
           
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable">
                    <div className="items">{t.name}</div>
                </div>
             
            );
        });

        return (
            <>
            <h2 className="header">Every trip starts with a checklist.  Here's our final checklist before departure.</h2>
            <h4 className="header">Click and drag from red to green as the operations are completed.</h4>
            <div className="container-drag">
                <div className="todo"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "todo")}}>
                    <span className="task-header">To Do</span>
                   {tasks.todo}
                </div>
                
                <div className="complete" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">Completed</span>
                     {tasks.complete}
                </div>
                
            


            </div>
            </>
        );
    }
}