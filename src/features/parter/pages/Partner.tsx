import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import React from "react";
import { usePartner } from "../service/usePartner";

const Partner = ({ role }: { role: string }) => {
  const { getPartners } = usePartner();
  const { data } = getPartners({ role });
  console.log(data);

  return (
    <Box>
      <Title className={"mb-4"}>
        {role === "customer" ? "Mijozlar" : "Sotuvchilar"} ro'yxati
      </Title>
      <p>Lorem ipsum dolor sit.</p>
    </Box>
  );
};

export default React.memo(Partner);
