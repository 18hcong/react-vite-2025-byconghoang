const TodoNew = (props) => {
  // console.log('>>check points', props);

  const {addNewTodo} = props;

  addNewTodo("Công Hoàng");
  return (
    <div className="todo-new">
				<input type="text" placeholder="Add new todo list" />
				<button>Add</button>
			</div>
  );
}
export default TodoNew; 