import { makeAutoObservable } from "mobx";
import developersJson from "@/data/mocks/mockDevelopersList.json";
import { DevelopersListItem } from "@/types";

export default class RootStore {
  developers = developersJson.developers;

  constructor() {
    makeAutoObservable(this);
  }

  deleteRow(keys: string[]) {
    const filteredArray = this.developers.filter(
      (el) => !keys.includes(el.key)
    );

    this.developers = filteredArray;
  }

  addRow(data: Omit<DevelopersListItem, "key">) {
    this.developers.push({
      key: String(
        this.developers.length
          ? Number(this.developers[this.developers.length - 1].key)
          : 0 + 1
      ),
      ...data,
    });
  }
}

export type { RootStore };
export const initialState = new RootStore();
