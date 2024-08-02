import { Component } from "react";
export default class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit:false,
            editTodoValue:this.props.todoItem.data
        };
        this.save = this.save.bind(this);
    }
    async save(){
        let data = {data:this.state.editTodoValue};
        if(this.state.edit){
            this.props.onEdit(this.props.todoItem.id,data);
            this.setState({edit:false});
        }
    }
    render(){
        let {todoItem,onDelete} = this.props
        return (<li className="spacing" key={todoItem.id}>
        {!this.state.edit?<div className="line">{todoItem.data}</div>:<input className="line" type='text' value={this.state.editTodoValue} onChange={(e)=>{this.setState({editTodoValue: e.target.value})}}/>}
        <div>
        {!this.state.edit?<button className="line btn-blue" onClick={()=>{this.setState({edit:!this.state.edit})}}> EDIT</button>:<button className="line btn-blue" onClick={()=>{this.save(!this.state.edit)}}> SAVE</button>}
        <button className="line btn-red" onClick={()=>{onDelete(todoItem.id)}}> DELETE</button>    
        </div>
        </li>);
        }
}
