import { useMemo, useState } from "react";
import { appContainer, board, buttons } from "./App.css";
import BoardList from "./components/BoardList/BoardList";
import ListsContainer from "./components/ListsContainer/ListsContainer";
import { useTypedSelector } from "./hooks/redux";
import EditModal from "./components/EditModal/EditModal";
import LoggerModal from "./components/LoggerModal/LoggerModal";

function App() {
  const [activeBoardId, setActiveBoardId] = useState("board-0");

  const boards = useTypedSelector((state) => state.boards.boardArray);
  const getActiveBoard = useMemo(
    () => boards.find((b) => b.boardId === activeBoardId),
    [boards, activeBoardId]
  );

  const lists = getActiveBoard?.lists ?? [];
  const boardId = getActiveBoard?.boardId ?? "";

  return (
    <div className={appContainer}>
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />
      <div className={board}>
        <ListsContainer lists={lists} boardId={boardId} />
      </div>

      <div>
        <button className={buttons}>이 게시판 삭제하기</button>
      </div>

      <EditModal />
      <LoggerModal />
    </div>
  );
}

export default App;