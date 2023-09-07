import { Modal, Select } from "antd";
import { DevelopersListItem } from "@/types";

import cn from "./style.module.sass";
import { useState } from "react";
import { addRowList } from "@/domain/actions";

const AddModal = ({
  isVisibleModal,
  setIsVisibleModal,
  developers,
}: {
  isVisibleModal: boolean;
  setIsVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
  developers: DevelopersListItem[];
}) => {
  const [data, setData] = useState<Omit<DevelopersListItem, "key">>({
    surname: "",
    name: "",
    patronymic: "",
    level: "",
    direction: "",
  });

  const handleChange = (selector: keyof DevelopersListItem, value: string) => {
    setData((prev) => ({ ...prev, [selector]: value }));
  };

  const isEmptyField = (object: typeof data) =>
    Object.values(object).some((el) => el.length === 0);

  return (
    <Modal
      title="Добавить строку"
      open={isVisibleModal}
      onOk={() => {
        if (isEmptyField(data)) {
          console.log("Ошибка");
        } else {
          addRowList(data);
          setIsVisibleModal(false);
        }
      }}
      onCancel={() => setIsVisibleModal(false)}
    >
      <div className={cn.modalContainer}>
        <label htmlFor="surname">Фамилия</label>
        <input
          type="text"
          name="surname"
          id="surname"
          onChange={(e) => handleChange("surname", e.currentTarget.value)}
        />
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => handleChange("name", e.currentTarget.value)}
        />
        <label htmlFor="patronymic">Отчество</label>
        <input
          type="text"
          name="patronymic"
          id="patronymic"
          onChange={(e) => handleChange("patronymic", e.currentTarget.value)}
        />
        <label htmlFor="level">Уровень</label>
        <Select
          options={
            developers.length
              ? Array.from(new Set(developers.map((el) => el.level))).map(
                  (el) => ({ label: el, value: el })
                )
              : [
                  { label: "senior", value: "senior" },
                  { label: "middle", value: "middle" },
                  { label: "junior", value: "junior" },
                ]
          }
          onChange={(value) => handleChange("level", value)}
        />
        <label htmlFor="direction">Направление</label>
        <Select
          options={
            developers.length
              ? Array.from(new Set(developers.map((el) => el.direction))).map(
                  (el) => ({ label: el, value: el })
                )
              : [
                  { label: "Frontend", value: "Frontend" },
                  { label: "Backend", value: "Backend" },
                ]
          }
          onChange={(value) => handleChange("direction", value)}
        />
      </div>
    </Modal>
  );
};

export default AddModal;
