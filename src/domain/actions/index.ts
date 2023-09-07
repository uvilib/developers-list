import { initialState } from "@/domain/core/store";
import { DevelopersListItem } from "@/types";

export const deleteRowList = (keys: string[]) => {
  initialState.deleteRow(keys);
};

export const addRowList = (data: Omit<DevelopersListItem, "key">) => {
  initialState.addRow(data);
};
