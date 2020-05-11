import React from "react";
import { rootStoreContext } from "../stores/RootStore";

export const useStores = () => React.useContext(rootStoreContext);
