import { Button, Table } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import React, { type FC } from "react";
import "./style.css";
import type { IPartnerAttr } from "../../../../shared/types/partner-type";
// import { Link } from "react-router-dom";

const columns = [
  {
    title: "Ism",
    dataIndex: "fullname",
    key: "fullname",
    // render: (text: any) => {
    //   return (
    //     // <Link>{text}</Link>
    //   );
    // },
  },
  {
    title: "Manzil",
    dataIndex: "adress",
    key: "adress",
  },
  {
    title: "Telefon",
    dataIndex: "phone",
    key: "adress",
    render: (text: Array<string>) => {
      return text[0];
    },
  },
  {
    title: "Balans",
    dataIndex: "balance",
    key: "balance",
    render: (number: number) => {
      return number.fprice();
    },
  },
  {
    title: "Option",
    dataIndex: "option",
    key: "option",
    render: () => {
      return (
        <div className="flex gap-2 justify-end">
          <Button>To'lov</Button>
          <Button>
            <MoreOutlined />
          </Button>
        </div>
      );
    },
  },
];

interface Props {
  data: IPartnerAttr[];
  loading: boolean;
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

const TableView: FC<Props> = ({
  data,
  loading,
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  return (
    <Table
      loading={loading}
      dataSource={data}
      rowKey={"id"}
      columns={columns}
      pagination={{
        current: currentPage,
        total: totalItems,
        pageSize: pageSize,
        pageSizeOptions: ["10", "20", "50", "100"],
        showSizeChanger: true,
        onChange: (page, pageSize) => {
          onPageChange(page); // set page
          onPageSizeChange(pageSize); // set limit
        },
      }}
    />
  );
};

export default React.memo(TableView);
