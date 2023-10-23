import { faker } from "@faker-js/faker";
import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { PrismaClient } from "@prisma/client";
import { afterEach } from "node:test";
import { beforeAll, describe, expect, test, vi } from "vitest";
import { DeepMockProxy, mockDeep, mockReset } from 'vitest-mock-extended';
import { CategoriaMap } from "../mappers/categoria.map";
import { CategoriaPrismaRepository } from "./categoria.prisma.repository";

const prismaMock: DeepMockProxy<PrismaClient> = mockDeep<PrismaClient>()
let categoriaRepositorio: CategoriaPrismaRepository
let UUIDValido: string;
let nomeCategoriaValido: string
let dataCriacaoCategoria: Date
let dataAtualizacaoCategoria: Date

describe('Repositorio Prisma: Categoria', () => {

    beforeAll(async () => {
        categoriaRepositorio = new CategoriaPrismaRepository(prismaMock)

        //Preenchendo as variaveis com dados em conformidades com as restriçoes da regra de negocio
        UUIDValido = faker.string.uuid();//Retorne um UUID v4
        nomeCategoriaValido = faker.string.alpha({ length: { min: Categoria.TAMANHO_MINIMO_NOME, max: Categoria.TAMANHO_MAXIMO_NOME } })
        dataCriacaoCategoria = faker.date.anytime()
        dataAtualizacaoCategoria = faker.date.anytime()
    })

    afterEach(() => {
        vi.restoreAllMocks()
        mockReset(prismaMock)
    })

    describe('Recuperar por Categoria por ID', () => {

        test('Deve Recuperar uma Categoria por Uuid', async () => {

            const categoriaPrisma = {
                id: UUIDValido,
                nome: nomeCategoriaValido,
                dataCriacao: dataCriacaoCategoria,
                dataAtualizacao: dataAtualizacaoCategoria
            }

            prismaMock.categoria.findUnique.mockResolvedValue(categoriaPrisma)

            const categoria: Categoria = CategoriaMap.toDomain(categoriaPrisma)

            const categoriaRecuperada = await categoriaRepositorio.recuperarPorUuid(categoria.id)

            expect(categoriaRecuperada).toEqual(categoria)
            expect(prismaMock.categoria.findUnique).toHaveBeenCalledTimes(1)
            expect(prismaMock.categoria.findUnique).toBeCalledWith({
                where: {
                    id: categoria.id
                }
            })
        })

    })

    describe('Recuperar todas as Categorias', () => {

        test('Deve recuperar todas as categorias sem exceção', async () => {

            const listaCategoriasPrisma = [{
                id: UUIDValido,
                nome: nomeCategoriaValido,
                dataCriacao: dataCriacaoCategoria,
                dataAtualizacao: dataAtualizacaoCategoria
            }, {
                id: UUIDValido,
                nome: nomeCategoriaValido,
                dataCriacao: dataCriacaoCategoria,
                dataAtualizacao: dataAtualizacaoCategoria
            }]
            prismaMock.categoria.findMany.mockResolvedValue(listaCategoriasPrisma)

            const categoiras: Array<Categoria> = listaCategoriasPrisma.map(
                (categoria) => CategoriaMap.fromPrismaModelToDomain(categoria)
            )
            const todasCategoriasRecuperadas = await categoriaRepositorio.recuperarTodos()

            expect(todasCategoriasRecuperadas).toStrictEqual(categoiras)
            expect(prismaMock.categoria.findMany).toHaveBeenCalledTimes(1)
        })
    })

    describe('Existe Categoria', () => {

        test('Deve verificar se existe uma determinada categoria por UUID', async () => {

            const categoriaPrisma = {
                id: UUIDValido,
                nome: nomeCategoriaValido,
                dataCriacao: dataCriacaoCategoria,
                dataAtualizacao: dataAtualizacaoCategoria
            }
            prismaMock.categoria.findUnique.mockResolvedValue(categoriaPrisma)

            const extisteCategoria = await categoriaRepositorio.existe(categoriaPrisma.id)

            expect(extisteCategoria).toBeTruthy()
        })
    })

    describe('Inserir Categoria', () => {

        test('Deve Inserir Uma Categoria', async () => {

            const categoriaPrisma = {
                id: UUIDValido,
                nome: nomeCategoriaValido,
                dataCriacao: dataCriacaoCategoria,
                dataAtualizacao: dataAtualizacaoCategoria
            };

            prismaMock.categoria.create.mockResolvedValue(categoriaPrisma);

            const categoria: Categoria = CategoriaMap.toDomain(categoriaPrisma);

            const categoriaInserida = await categoriaRepositorio.inserir(categoria);

            expect(categoriaInserida).toStrictEqual(categoria)
            expect(prismaMock.categoria.create).toHaveBeenCalledTimes(1);
            expect(prismaMock.categoria.create).toBeCalledWith({
                data: {
                    id: categoria.id,
                    nome: categoria.nome
                }
            });

        });

    })

    describe('Alterar Categoria', () => {

        test('Deve Atualizar Uma Categoria', async () => {

            const categoriaPrisma = {
                id: UUIDValido,
                nome: nomeCategoriaValido,
                dataCriacao: dataCriacaoCategoria,
                dataAtualizacao: dataAtualizacaoCategoria
            };

            prismaMock.categoria.update.mockResolvedValue(categoriaPrisma);

            const categoria: Categoria = CategoriaMap.toDomain(categoriaPrisma);

            const categoriaAtualizada = await categoriaRepositorio.atualizar(categoria.id, categoria);

            expect(categoriaAtualizada).toBeTruthy()
            expect(prismaMock.categoria.update).toHaveBeenCalledTimes(1);
            expect(prismaMock.categoria.update).toBeCalledWith({
                where: { id: categoria.id },
                data: categoriaPrisma
            });


        });
    })

    describe('Deletar Categoria', () => {


        test('Deve Deletar Uma Categoria por UUID', async () => {

            const categoriaPrisma = {
                id: UUIDValido,
                nome: nomeCategoriaValido,
                dataCriacao: dataCriacaoCategoria,
                dataAtualizacao: dataAtualizacaoCategoria
            };

            prismaMock.categoria.delete.mockResolvedValue(categoriaPrisma);

            const categoria: Categoria = CategoriaMap.toDomain(categoriaPrisma);

            const categoriaDeletada = await categoriaRepositorio.deletar(categoria.id);

            expect(categoriaDeletada).toBeTruthy();
            expect(prismaMock.categoria.delete).toHaveBeenCalledTimes(1);
            expect(prismaMock.categoria.delete).toBeCalledWith({
                where: { id: categoria.id }
            });


        });

    });

});