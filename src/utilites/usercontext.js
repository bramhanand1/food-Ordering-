import { createContext} from "react";

const UserContext = createContext(
    {
        loggeduser:"default user",
    }
);

export default UserContext;