import { createContext } from "react";
import { UiStore } from "./UiStore";

export class RootStore {
  uiStore = new UiStore(this);
}

export const rootStoreContext = createContext(new RootStore());
