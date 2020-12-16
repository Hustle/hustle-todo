import './App.css';

const TODOS = [
  'Render todo list',
  'Make todos checkable',
  'Enable adding new todos',
  'Enable deleting todos',
  'Add search todos feature',
  'Add priority to todos',
  'Persist todos between refresh',
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
