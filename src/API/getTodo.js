export const GetTodoData= async function(){
   const data = await fetch("http://localhost:5000/todo").then(response=>response.json());
   return data;
}
export const AddTodoData= async function(data){
    
        const response = await fetch("http://localhost:5000/todo", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        return response.json()
  
}
export const EditTodoData= async function(id,data){
    
    const response = await fetch(`http://localhost:5000/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()

}
export const deleteTodoData= async function(id){
    
    const response = await fetch(`http://localhost:5000/todo/${id}`, {
      method: 'DELETE'
    })
    return response.json()

}
