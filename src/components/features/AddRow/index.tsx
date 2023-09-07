import { useCallback, useState } from "react";
import { addRowList } from "@/domain/actions";

import cn from "./style.module.sass";

type RowProps = {
  title: string;
  id: string;
  callback: (id: string, value: string) => void;
};

const Row = ({ title, id, callback }: RowProps) => {
  return (
    <tr>
      <td>{title}</td>
      <td>
        <input
          type="text"
          name=""
          id={id}
          onChange={(e) => callback(id, e.currentTarget.value)}
        />
      </td>
    </tr>
  );
};

const initialTableData = [
  { title: "Фамилия", id: "surname", value: "" },
  { title: "Имя", id: "name", value: "" },
  { title: "Отчество", id: "patronymic", value: "" },
  { title: "Уровень", id: "level", value: "" },
  { title: "Направление", id: "direction", value: "" },
];

const AddRow = () => {
  const [tableData, setTableData] = useState(initialTableData);

  const changeRowCallback = useCallback((id: string, value: string) => {
    setTableData((prev) => {
      const array = [...prev];
      const index = prev.findIndex((el) => el.id === id);
      array[index].value = value;
      return array;
    });
  }, []);

  return (
    <section className={cn.section}>
      <table cellSpacing="0">
        <tbody className={cn.tbody}>
          {tableData.map((el) => (
            <Row
              key={`row-add-${el.id}`}
              title={el.title}
              id={el.id}
              callback={changeRowCallback}
            />
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className={cn.button}
        onClick={() =>
          addRowList(
            Object.assign({}, ...tableData.map((el) => ({ [el.id]: el.value })))
          )
        }
      >
        Добавить
      </button>
    </section>
  );
};

export default AddRow;
