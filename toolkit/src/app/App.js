import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addTodo, deleteTodo, fetchTodos} from "../store/slices/todoSlice/todoSlice";

const App = () => {

    const {todos, loading, error} = useSelector(state => state.todoSlice);
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({title: input, id: Math.random()}));
        setInput('');
    };

    const onDelete = (id) => {
        console.log(id);
        dispatch(deleteTodo(id));
    };


    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input required type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type={"submit"}>Add</button>
            </form>

            {loading ? <h1>Loading</h1> : null}
            {error ? <h1>{error}</h1> : null}
            <ul>
                {todos.map(({title, id}) =>
                    <li key={id}>
                        {title}
                        <button onClick={() => onDelete(id)}>X</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export {App};
