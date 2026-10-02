/*importa adaptador do PostgreSQL*/ 
import { PrismaPg} from "@prisma/adapter-pg";

/*importa prisma Client*/ 
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

export const prisma = 
globalForPrisma.prisma ?? 
new PrismaClient({
    adapter,
});

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
