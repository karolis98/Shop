import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-2">
      NotFoundPage in pages folder
      <Link to="/"> To home page</Link>
    </div>
  );
};

export default NotFoundPage;
