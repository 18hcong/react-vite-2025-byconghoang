const TodoNew = (props) => {
  // console.log('>>check points', props);

  const {addNewTodo} = props;

  // addNewTodo("Công Hoàng");
  const handleClick = () => {
    alert("click me");
  }; 
  const handleChange = (e) => {
    console.log('>>check points', e.target.value);
  }
  return (
    <div className="todo-new">
				<input 
        type="text" 
        placeholder="Add new todo list" 
        onChange={(event) => {handleChange(event.target.value)}}
        />
				<button 
        onClick={handleClick}
        >Add</button>
			</div>
  );
}
export default TodoNew; 