import { Event } from "../event/Event";

export type Customer = {
  comment: string | null;
  createdAt: Date;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
