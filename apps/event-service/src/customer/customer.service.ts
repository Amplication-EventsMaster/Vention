import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerServiceBase } from "./base/customer.service.base";

@Injectable()
export class CustomerService extends CustomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async customers2<T extends Prisma.CustomerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerFindManyArgs>
  ): Promise<PrismaCustomer[]> {
    console.log("hello");
  }
}
