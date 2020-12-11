import './App.css';

const TODOS = [
  'Render todo list',
  'Make todos checkable',
  'Enable adding new todos',
  'Filter todos',
  'Persist todos between refresh',
  'Add priority to todos',
];

function App() {
  return (
    <div>
      <ul className="todo-list">
        {TODOS.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
