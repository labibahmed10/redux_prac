import { deleteABlog } from "../action/blogActionFunc";

const DELETE_CONTENT_THUNK = (blog) => {
   return async (dispatch, getState) => {
      const res = await fetch(`http://localhost:8000/api/delete/${blog?._id}`, {
         method: "DELETE",
      });
      const result = await res.json();
      console.log(result);
      if (result.deletedCount > 0) {
         dispatch(deleteABlog(blog));
      } else {
         // common ekta error show korte hbe
      }
   };
};

export default DELETE_CONTENT_THUNK;