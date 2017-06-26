var TodoList = React.createClass({
    render: function(){
        return (
            <div className="todo-list">
                Todo list
            </div>
        );
    }
});

ReactDOM.render(
    <TodoList/>, document.getElementById('todo')
);
