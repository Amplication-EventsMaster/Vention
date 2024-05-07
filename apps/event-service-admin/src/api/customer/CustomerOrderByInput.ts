import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
