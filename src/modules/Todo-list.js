import { Component } from "react";
import TodoItem from "./Todo";

export default class TodoList extends Component{
    constructor(props){
        super(props);
      }
    render(){
        const { todoList, onDelete, onEdit} = this.props;
        return (<ul className="list">
       {todoList.map((data)=><TodoItem todoItem={data} onDelete={onDelete} onEdit={onEdit}/>)}
    </ul>);}
}
