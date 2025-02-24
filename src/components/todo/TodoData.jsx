const TodoData = (props) => {

  //props là một obejct chứa các thuộc tính truyền vào từ component cha.

   const {name, age, data} = props;
  // console.log(">>check props", props);
  return(
    <div className="todo-data">
      <div>My name is: {name} </div>
				<div>Leaning React</div>
				<div>Watching Youtube</div>
			</div>
  )
}
export default TodoData;
