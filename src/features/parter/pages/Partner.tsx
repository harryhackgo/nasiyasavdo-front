import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import React, { useState } from "react";
import { usePartner } from "../service/usePartner";
import TableView from "../components/table-view/TableView";

const Partner = ({ role }: { role: string }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isPending } = usePartner({
    role,
    page: page.toString(),
    limit: pageSize.toString(),
  });
  console.log(data);

  const handlePageChange = (newPage: number) => setPage(newPage);
  const handlePageSizeChange = (_: number, newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  return (
    <Box>
      <Title className={"mb-4"}>
        {role === "customer" ? "Mijozlar" : "Sotuvchilar"} ro'yxati
      </Title>
      <TableView
        data={data?.data ?? []}
        loading={isPending}
        currentPage={data?.currentPage ?? 1}
        totalItems={data?.total ?? 0}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        onPageChange={handlePageChange}
      ></TableView>
    </Box>
  );
};

export default React.memo(Partner);
