import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";

const PageNotFound = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center flex-col ">
      <Typography variant="h1" className="text-[200px] text-white">
        404
      </Typography>
      <Link to={ROUTES.login}>
        <Button color="light-green">Back home</Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
