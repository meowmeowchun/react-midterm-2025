import { Link } from "react-router-dom";

function Cover() {
  return (
    <div className="h-[100vh] bg-neutral flex items-center justify-center">
      <Link to="/" className="flex items-center gap-4">
        <img src="./img/left head.png" className="h-[80vh]" alt="Left Head" />
        <img src="./img/main head.png" className="h-[80vh]" alt="Main Head" />
        <img src="./img/right head.png" className="h-[80vh]" alt="Right Head" />
      </Link>
    </div>
  );
}

export default Cover;