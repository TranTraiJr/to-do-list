function TaskItem({ task, setTaskStatus, removeTask }) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
      <span className="label">{task.title}</span>
      <div className="actions">
        <input
          onChange={(e) => setTaskStatus(task.id, e.target.checked)}
          type="checkbox"
          className="btn-action btn-act"
          checked={Boolean(task.status)}
        />
        <button
          onClick={() => removeTask(task.id)}
          className="btn-action btn-action-delete"
        >
          X
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
