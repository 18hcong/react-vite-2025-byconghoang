import reactLogo from "./assets/react.svg";
import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

const App = () => {
	const conghoang = "Công Hoàng Fan MU";
	const age = 24;
	const data = {
		address: "Ha Noi",
		phone: "0123456789",
		country: "Viet Nam",
	};

	const addNewTodo = (name) => {
		alert(`call me ${name}`);
	};
	//{key: value}
	return (
		<div className="todo-container">
			<div className="todo-title">Todo List</div>
			<TodoNew 
				addNewTodo={addNewTodo}
			/>
			<TodoData 
				name={conghoang} 
				age={age} 
				data={data} 
			/>
			<div className="'todo-image">
				<img src={reactLogo} className="logo" alt="React Logo" />
			</div>
		</div>
	);
};

export default App;
