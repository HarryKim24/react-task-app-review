import { useEffect, useState, type ChangeEvent } from "react";
import { FiX } from "react-icons/fi";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { setModalActive, updateTask, deleteTask } from "../../store/slices/boardSlice";
import { setModalData } from "../../store/slices/modalSlice";
import { buttons, closeButton, deleteButton, header, input, modalWindow, title, updateButton, wrapper } from "./Editmodal.css";

const EditModal = () => {
  const dispatch = useTypedDispatch();
  const modalActive = useTypedSelector((s) => s.boards.modalActive);
  const editingState = useTypedSelector((s) => s.modal);

  const [name, setName] = useState(editingState.task.taskName);
  const [description, setDescription] = useState(editingState.task.taskDescription);
  const [owner, setOwner] = useState(editingState.task.taskOwner);

  useEffect(() => {
    if (!modalActive) return;
    setName(editingState.task.taskName);
    setDescription(editingState.task.taskDescription);
    setOwner(editingState.task.taskOwner);
  }, [modalActive, editingState]);

  const handleCloseButton = () => {
    dispatch(setModalActive(false));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);
  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => setOwner(e.target.value);

  const handleUpdate = () => {
    const { boardId, listId, task } = editingState;
    dispatch(
      updateTask({
        boardId,
        listId,
        taskId: task.taskId,
        task: {
          taskName: name,
          taskDescription: description,
          taskOwner: owner,
        },
      })
    );
    dispatch(
      setModalData({
        boardId,
        listId,
        task: {
          ...task,
          taskName: name,
          taskDescription: description,
          taskOwner: owner,
        },
      })
    );
    dispatch(setModalActive(false));
  };

  const handleDelete = () => {
    const { boardId, listId, task } = editingState;
    dispatch(
      deleteTask({
        boardId,
        listId,
        taskId: task.taskId,
      })
    );
    dispatch(setModalActive(false));
  };

  if (!modalActive) return null;

  return (
    <div className={wrapper} role="dialog" aria-modal="true">
      <div className={modalWindow} onClick={(e) => e.stopPropagation()}>
        <div className={header}>
          <div className={title}>{editingState.task.taskName}</div>
          <FiX className={closeButton} onClick={handleCloseButton} aria-label="닫기" />
        </div>

        <div className={title}>제목</div>
        <input className={input} type="text" value={name} onChange={handleNameChange} />

        <div className={title}>설명</div>
        <input className={input} type="text" value={description} onChange={handleDescriptionChange} />

        <div className={title}>생성한 사람</div>
        <input className={input} type="text" value={owner} onChange={handleAuthorChange} />

        <div className={buttons}>
          <button onClick={handleUpdate} className={updateButton}>
            일 수정하기
          </button>
          <button onClick={handleDelete} className={deleteButton}>
            일 삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;