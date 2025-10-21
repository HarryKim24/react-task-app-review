import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IBoard, IList, ITask } from "../../types";

type TBoardState = {
  modalActive: boolean;
  boardArray: IBoard[];
}

type TBoardAction = {
  board: IBoard;
}

type TAddListAction = {
  boardId: string;
  list: IList;
}

type TDeleteListAction = {
  boardId: string;
  listId: string;
}

type TAddTaskAction = {
  boardId: string;
  listId: string;
  task: ITask;
}

const initialState: TBoardState = {
  modalActive: false,
  boardArray: [
    {
      boardId: 'board-0',
      boardName: '첫 번째 게시물',
      lists: [
        {
          listId: 'lists-0',
          listName: 'list-1',
          tasks: [
            {
              taskId: 'task-0',
              taskName: 'Task 1',
              taskDescription: 'Description',
              taskOwner: 'Harry',
            },
            {
              taskId: 'task-1',
              taskName: 'Task 2',
              taskDescription: 'Description',
              taskOwner: 'Harry',
            }
          ]
        },
        {
          listId: 'lists-1',
          listName: 'list-2',
          tasks: [
            {
              taskId: 'task-3',
              taskName: 'Task 3',
              taskDescription: 'Description',
              taskOwner: 'Harry',
            }
          ]
        }
      ]
    }
  ]
}

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBoard: (state, { payload }: PayloadAction<TBoardAction>) => {
      state.boardArray.push(payload.board);
    },

    addList: (state, { payload }: PayloadAction<TAddListAction>) => {
      state.boardArray.map(board =>
        board.boardId === payload.boardId
        ? {...board, lists: board.lists.push(payload.list)}
        : board
      )
    },

    addTask: (state, { payload }: PayloadAction<TAddTaskAction>) => {
      state.boardArray.map(board =>
        board.boardId === payload.boardId
        ? {
          ...board, lists: board.lists.map(list =>
            list.listId === payload.listId
            ? {
              ...list, tasks: list.tasks.push(payload.task)
            }
            : list
          )
        }
        : board
      )
    },

    deleteList: (state, { payload }: PayloadAction<TDeleteListAction>) => {
      state.boardArray = state.boardArray.map(
        board => board.boardId === payload.boardId
        ? {
          ...board,
          lists: board.lists.filter(
            list => list.listId !== payload.listId
          )
        }
        : board
      )
    },

    setModalActive: (state, { payload }: PayloadAction<boolean>) => {
      state.modalActive = payload
    },
  }
})

export const { addBoard, addList, addTask, deleteList, setModalActive } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;