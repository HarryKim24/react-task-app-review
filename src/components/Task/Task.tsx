import { container, description, title } from "./Task.css";

type TTAskProps = {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;
}

const Task = ({
  taskName,
  taskDescription
}: TTAskProps) => {
  return (
    <div className={container}>
      <div className={title}>{taskName}</div>
      <div className={description}>{taskDescription}</div>
    </div>
  )
}

export default Task
