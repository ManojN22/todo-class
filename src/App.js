import './App.css';
import {Component} from 'react';
import TodoList from './modules/Todo-list';
import {GetTodoData,AddTodoData,EditTodoData,deleteTodoData} from './API/getTodo';
class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      inpt: '',
      todoList: []
    }
    this.inptChange = this.inptChange.bind(this)
    this.refreshData = this.refreshData.bind(this)
    this.addTodoList = this.addTodoList.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onEdit= this.onEdit.bind(this)
  }
  async componentDidMount(){
    this.refreshData();
}
  async inptChange(e){
    this.setState({inpt:e.target.value});
  }
  async refreshData(){
    GetTodoData().then((data)=>{
      this.setState({todoList:data});
      });
  }
  async addTodoList(){
    if(this.inpt!==""){
      let data = {data:this.state.inpt};
      AddTodoData(data).then(()=>{
        this.refreshData();
      });
    }
  }
  async onDelete(id){
    deleteTodoData(id).then(()=>{
      this.refreshData();
    })
  }
  async onEdit(id,data){
    EditTodoData(id, data).then(()=>{
      console.log("sds");
      this.refreshData();
    })
  }
  render (){
   return(<div className="App">
    <header className="App-header">
   <div className='OutterBoX'>
    <div className='InnerBox'>
      <div className='spacing'>
      <input className='line w-75' value={this.inpt} onChange={this.inptChange}/>
     <button className='line w-20 btn-blue' onClick={this.addTodoList}>ADD</button>
      </div>
      <TodoList todoList={this.state.todoList} onDelete={this.onDelete} onEdit={this.onEdit}/>
    </div>
   </div>
    </header>
  </div>)
    }

};
export default App;


