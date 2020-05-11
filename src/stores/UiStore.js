import { observable, action, decorate } from "mobx";
import { RootStore } from "./RootStore";

export class UiStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  message = "" 

  onChange = (event) => {
    this.message = event.target.value
  }

}

decorate(UiStore, {
  message: observable,
  onChange: action
})
