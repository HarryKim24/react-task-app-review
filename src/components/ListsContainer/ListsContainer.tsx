import type { IList } from "../../types";
import ActionButton from "../ActionButton/ActionButton";
import List from "../List/List";
import { listsContainer } from "./ListsContainer.css";

type TListsContainerProps = {
  boardId: string;
  lists: IList[];
}

const ListsContainer = ({
  lists,
  boardId
}: TListsContainerProps) => {
  return (
    <div className={listsContainer}>
      {
        lists.map(list => (
          <List
            key={list.listId}
            list={list}
            boardId={boardId}
          />
        ))
      }
      <ActionButton
        boardId={boardId}
        listId={""}
        list
      />
    </div>
  )
}

export default ListsContainer
