import { Customer } from "../customer/Customer";

export type Event = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  ddd: string | null;
  id: string;
  name: string | null;
  ss: string | null;
  sss: string | null;
  updatedAt: Date;
};
