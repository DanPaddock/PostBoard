import { v4 as uuid } from "uuid";

export const addAssignment = ({
  course = "",
  type = "",
  title = "",
  dueDate = 0,
  dueTime = 0,
  pinned = false,
} = {}) => ({
  type: "ADD_ASSIGNMENT",
  assignment: {
    id: uuid(),
    course,
    type,
    title,
    dueDate,
    dueTime,
    pinned,
  },
});

export const removeAssignment = ({ id } = {}) => ({
  type: "REMOVE_ASSIGNMENT",
  id,
});

export const editAssignment = (id, updates, isPinned) => ({
  type: "EDIT_ASSIGNMENT",
  id,
  updates,
});

export const startEdit = (id, updates) => {
  return (dispatch, getState) => {
    dispatch(editAssignment(id, updates));
  };
};
