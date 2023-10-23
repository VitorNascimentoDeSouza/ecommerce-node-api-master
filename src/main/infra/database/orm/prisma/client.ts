import { PrismaClient } from "@prisma/client";

//Adicione o prisma aos tipos globais do NodeJS
declare global {
    var prisma: PrismaClient
}

//Evita multiplas instancias do cliente prisma
const prisma = global.prisma || new PrismaClient({
    log: ['query', 'info'],
    errorFormat: 'pretty'
})

//Em desenvolvimento é criado por hot-reloading (recarga automatica)
if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma
}

export { prisma };
