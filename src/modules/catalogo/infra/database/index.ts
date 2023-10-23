import { prisma } from "@main/infra/database/orm/prisma/client";
import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { ICategoriaRepository } from "@modules/catalogo/domain/categoria/categoria.repository.interface";
import { Produto } from "@modules/catalogo/domain/produto/produto.entity";
import { IProdutoRepository } from "@modules/catalogo/domain/produto/produto.repository.interface";
import { CategoriaPrismaRepository } from "./categoria.prisma.repository";
import { ProdutoPrismaRepository } from "./produto.prisma.repository";

const categoriaRepositorio: ICategoriaRepository<Categoria> = new CategoriaPrismaRepository(prisma)
const produtoRepositorio: IProdutoRepository<Produto> = new ProdutoPrismaRepository(prisma)

export {
    categoriaRepositorio,
    produtoRepositorio
};
