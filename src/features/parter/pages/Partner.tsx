import React from "react";
import { useSearchParams } from "react-router-dom";
import TableView from "../components/table-view/TableView";
import { usePartner } from "../service/usePartner";
import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";

const Partner = ({ role }: { role: string }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "10";

  const { data, isPending } = usePartner({
    role,
    page: page,
    limit: limit,
  });

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString(), limit: limit, role });
  };

  const handlePageSizeChange = (newLimit: number) => {
    setSearchParams({ page: "1", limit: newLimit.toString(), role });
  };

  return (
    <Box>
      <Title className="mb-4">
        {role === "customer" ? "Mijozlar" : "Sotuvchilar"} ro'yxati
      </Title>
      <TableView
        data={data?.data ?? []}
        loading={isPending}
        currentPage={parseInt(page)}
        totalItems={data?.total ?? 0}
        pageSize={parseInt(limit)}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </Box>
  );
};

export default React.memo(Partner);
