import { useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import { useTypedDispatch } from "../../../hooks/redux";
import { v4 } from "uuid";
import { addList, addTask } from "../../../store/slices/boardSlice";
import { addLog } from "../../../store/slices/loggerSlice";
import { button, buttons, close, input, listForm, taskForm } from "./DropDownForm.css";
import { FiX } from "react-icons/fi";

type TDropDownFormProps = {
  boardId: string;
  listId: string;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
  list?: boolean;
}

const DropDownForm = ({
  boardId,
  list,
  listId,
  setIsFormOpen,
}: TDropDownFormProps) => {

  const dispatch = useTypedDispatch();
  const [text, setText] = useState("");
  const formPlaceholder = list ?
    "리스트의 제목을 입력하세요" :
    "일의 제목을 입력하세요";

  const buttonTitle = list ?
    "리스트 추가하기" :
    "일 추가하기";

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  const handleButtonclick = () => {
    if (text) {
      if (list) {
        dispatch(
          addList({
            boardId,
            list: {listId: v4(), listName: text, tasks: []}
          })
        );

        dispatch(
          addLog({
            logId: v4(),
            logMessage: `리스트 생성하기: ${text}`,
            logAuthor: "User",
            logTimeStamp: String(Date.now())
          })
        )
      } else {
        dispatch(
          addTask({
            boardId,
            listId,
            task: {
              taskId: v4(),
              taskName: text,
              taskDescription: "",
              taskOwner: "User"
            }
          })
        )
        dispatch(
          addLog({
            logId: v4(),
            logMessage: `일 생성하기: ${text}`,
            logAuthor: "User",
            logTimeStamp: String(Date.now())
          })
        )
      }
    }
  }

  return (
    <div className={list ? listForm : taskForm}>
      <textarea
        className={input}
        value={text}
        onChange={handleTextChange}
        autoFocus
        placeholder={formPlaceholder}
        onBlur={() => setIsFormOpen(false)}
      />
      <div className={buttons}>
        <button
          className={button}
          onMouseDown={handleButtonclick}
        >
          {buttonTitle}
        </button>
        <FiX className={close} />
      </div>
    </div>
  )
}

export default DropDownForm
