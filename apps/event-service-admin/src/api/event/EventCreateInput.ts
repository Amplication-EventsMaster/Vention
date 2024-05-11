import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type EventCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  ddd?: string | null;
  name?: string | null;
  ss?: string | null;
  sss?: string | null;
};
