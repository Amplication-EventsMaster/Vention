/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Customer as PrismaCustomer,
  Event as PrismaEvent,
} from "@prisma/client";

export class CustomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CustomerCountArgs, "select">): Promise<number> {
    return this.prisma.customer.count(args);
  }

  async customers<T extends Prisma.CustomerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerFindManyArgs>
  ): Promise<PrismaCustomer[]> {
    return this.prisma.customer.findMany<Prisma.CustomerFindManyArgs>(args);
  }
  async customer<T extends Prisma.CustomerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerFindUniqueArgs>
  ): Promise<PrismaCustomer | null> {
    return this.prisma.customer.findUnique(args);
  }
  async createCustomer<T extends Prisma.CustomerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerCreateArgs>
  ): Promise<PrismaCustomer> {
    return this.prisma.customer.create<T>(args);
  }
  async updateCustomer<T extends Prisma.CustomerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerUpdateArgs>
  ): Promise<PrismaCustomer> {
    return this.prisma.customer.update<T>(args);
  }
  async deleteCustomer<T extends Prisma.CustomerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerDeleteArgs>
  ): Promise<PrismaCustomer> {
    return this.prisma.customer.delete(args);
  }

  async findEvents(
    parentId: string,
    args: Prisma.EventFindManyArgs
  ): Promise<PrismaEvent[]> {
    return this.prisma.customer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .events(args);
  }
 async customers3<T extends Prisma.CustomerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerFindManyArgs>
  ): Promise<PrismaCustomer[]> {
    console.log("hello from base");
  }
 
}
