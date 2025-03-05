const TodoData = ({ todoList, deleteTodo }) => {

	const handleClick = (id) => {
		deleteTodo(id)
		// const updatedList = todoList.filter((todo) => todo.id !== id);
		// setTodoList(updatedList);
	};

	return (
		<div className="todo-data">
			{todoList.map((item, index) => (
				<div className="todo-item" key={item.id}>
					<div>{item.name}</div>
					<button onClick={() => handleClick(item.id)}>Delete</button>
				</div>
			))}
			<div>{JSON.stringify()}</div>
		</div>
	);
};
export default TodoData;
