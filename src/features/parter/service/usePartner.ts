import { api } from "@/shared/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface IParams {
  page?: string;
  limit?: string;
  search?: string;
  role: string;
  isActive?: string;
  sortBy?: string;
  sortOrder?: string;
  debtOnly?: string;
}

export const usePartner = (params: IParams) => {
  return useQuery({
    queryKey: ["partners", params],
    queryFn: () => api.get("partners", { params }).then((res) => res.data),
  });
};
