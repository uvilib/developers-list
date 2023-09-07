import { initialState } from "@/domain/core/store";
import { DevelopersListItem } from "@/types";
import type { ColumnsType } from "antd/es/table";

export const set = new Set(initialState.developers.map((el) => el.patronymic));

export const columnsData: ColumnsType<DevelopersListItem> = [
  {
    title: "Фамилия",
    dataIndex: "surname",
    filters: Array.from(
      new Set(initialState.developers.map((el) => el.surname))
    ).map((el) => ({ text: el, value: el })),
    filterSearch: true,
    onFilter: (value: string | number | boolean, record) =>
      record.surname.includes(value as string),
  },
  {
    title: "Имя",
    dataIndex: "name",
    filters: Array.from(
      new Set(initialState.developers.map((el) => el.name))
    ).map((el) => ({ text: el, value: el })),
    filterSearch: true,
    onFilter: (value: string | number | boolean, record) =>
      record.name.includes(value as string),
  },
  {
    title: "Отчество",
    dataIndex: "patronymic",
    filters: Array.from(
      new Set(initialState.developers.map((el) => el.patronymic))
    ).map((el) => ({ text: el, value: el })),
    filterSearch: true,
    onFilter: (value: string | number | boolean, record) =>
      record.patronymic.includes(value as string),
  },
  {
    title: "Уровень",
    dataIndex: "level",
    filters: Array.from(
      new Set(initialState.developers.map((el) => el.level))
    ).map((el) => ({ text: el, value: el })),
    onFilter: (value: string | number | boolean, record) =>
      record.level.includes(value as string),
  },
  {
    title: "Направление",
    dataIndex: "direction",
    filters: Array.from(
      new Set(initialState.developers.map((el) => el.direction))
    ).map((el) => ({ text: el, value: el })),
    onFilter: (value: string | number | boolean, record) =>
      record.direction.includes(value as string),
  },
];
