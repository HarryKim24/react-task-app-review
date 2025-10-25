import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IBoard, IList, ITask } from "../../types";

type TBoardState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

type TBoardAction = { board: IBoard };
type TAddListAction = { boardId: string; list: IList };
type TDeleteListAction = { boardId: string; listId: string };
type TAddTaskAction = { boardId: string; listId: string; task: ITask };
type TUpdateTaskAction = { boardId: string; listId: string; taskId: string; task: Partial<ITask> };
type TDeleteTaskAction = { boardId: string; listId: string; taskId: string };

const initialState: TBoardState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "첫 번째 게시물",
      lists: [
        {
          listId: "lists-0",
          listName: "list-1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "Task 1",
              taskDescription: "Description",
              taskOwner: "Harry",
            },
            {
              taskId: "task-1",
              taskName: "Task 2",
              taskDescription: "Description",
              taskOwner: "Harry",
            },
          ],
        },
        {
          listId: "lists-1",
          listName: "list-2",
          tasks: [
            {
              taskId: "task-3",
              taskName: "Task 3",
              taskDescription: "Description",
              taskOwner: "Harry",
            },
          ],
        },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, { payload }: PayloadAction<TBoardAction>) => {
      state.boardArray.push(payload.board);
    },
    addList: (state, { payload }: PayloadAction<TAddListAction>) => {
      const board = state.boardArray.find((b) => b.boardId === payload.boardId);
      if (board) board.lists.push(payload.list);
    },
    addTask: (state, { payload }: PayloadAction<TAddTaskAction>) => {
      const board = state.boardArray.find((b) => b.boardId === payload.boardId);
      const list = board?.lists.find((l) => l.listId === payload.listId);
      if (list) list.tasks.push(payload.task);
    },
    deleteList: (state, { payload }: PayloadAction<TDeleteListAction>) => {
      const board = state.boardArray.find((b) => b.boardId === payload.boardId);
      if (board) board.lists = board.lists.filter((l) => l.listId !== payload.listId);
    },
    setModalActive: (state, { payload }: PayloadAction<boolean>) => {
      state.modalActive = payload;
    },
    updateTask: (state, { payload }: PayloadAction<TUpdateTaskAction>) => {
      const board = state.boardArray.find((b) => b.boardId === payload.boardId);
      const list = board?.lists.find((l) => l.listId === payload.listId);
      const task = list?.tasks.find((t) => t.taskId === payload.taskId);
      if (task) Object.assign(task, payload.task);
    },
    deleteTask: (state, { payload }: PayloadAction<TDeleteTaskAction>) => {
      const board = state.boardArray.find((b) => b.boardId === payload.boardId);
      const list = board?.lists.find((l) => l.listId === payload.listId);
      if (list) list.tasks = list.tasks.filter((t) => t.taskId !== payload.taskId);
    },
  },
});

export const {
  addBoard,
  addList,
  addTask,
  deleteList,
  setModalActive,
  updateTask,
  deleteTask,
} = boardSlice.actions;

export const boardReducer = boardSlice.reducer;