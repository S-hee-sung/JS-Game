import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import todoSlice from "../../reducers/todo";



const Content = () => {
	const dispatch = useDispatch();
	const clearTodo = useCallback(() => {
		dispatch(todoSlice.actions.clearTodo());
	}, [dispatch]);

  const initialState = {
    isTodoGetting: false,
    data: {
      list: [
        { isCompleted: false, text: "hi1" },
        { isCompleted: false, text: "hi2" },
      ],
    },
    isOpenModal: false, // 모달창 오픈
  };

  

	return (
		<span className="clearAllBtn" onClick={clearTodo}>
			Clear All
		</span>
	);
};

export default Content;