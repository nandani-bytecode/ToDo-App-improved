import Todoitem from "./Todoitem";
import styles from './TodoItems.module.css'
const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <Todoitem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
};

export default TodoItems;