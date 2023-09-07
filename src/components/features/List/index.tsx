import { observer } from "mobx-react-lite";
import { Table } from "antd";
import { useMemo, useState } from "react";
import clsx from "clsx";

import type { TableRowSelection } from "antd/es/table/interface";
import { useStore } from "@/hooks/useStore";
import { columnsData } from "@/data/mocks/dataColumns";
import { DevelopersListItem } from "@/types";
import { deleteRowList } from "@/domain/actions";

import cn from "./style.module.sass";
import AddModal from "../AddModal";

const List = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const { developers } = useStore();

  const dataSource = useMemo(() => developers.map((el) => el), [developers]);

  const rowSelection: TableRowSelection<DevelopersListItem> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columnsData}
        dataSource={dataSource}
      />
      <div className={cn.buttons}>
        <button
          type="button"
          onClick={() => {
            deleteRowList(selectedRowKeys as string[]);
            setSelectedRowKeys([]);
          }}
          className={clsx(cn.deleteButton, {
            [cn.deleteButtonVisible]: selectedRowKeys.length,
          })}
        >
          Удалить выбранные строки
        </button>
        <button
          type="button"
          onClick={() => setIsVisibleModal(true)}
          className={cn.addButton}
        >
          Добавить строку
        </button>
      </div>
      <AddModal
        developers={developers}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
      />
    </div>
  );
};

export default observer(List);
