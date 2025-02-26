const TodoData = ({ todoList, setTodoList }) => {

	const handleDelete = (id) => {
		const updatedList = todoList.filter(todo => todo.id !== id);
		setTodoList(updatedList);
	};

	return (
		<div className="todo-data">
			{todoList.map((item) => (
				<div className="todo-item" key={item.id}>
					<div>{item.name}</div>
					<button onClick={() => handleDelete(item.id)}>Delete</button>
				</div>
			))}
			<div>{JSON.stringify(todoList)}</div>
		</div>
	);
};
export default TodoData;