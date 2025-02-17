import { type Todo as TodoType, TodoId, type ListofTodos } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListofTodos;
  onToggleCompletedTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  onRemoveTodo: ({ id }: TodoId) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompletedTodo,
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleCompletedTodo={onToggleCompletedTodo}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  );
};
