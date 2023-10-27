import { Categoria } from '@modules/catalogo/domain/categoria/categoria.entity';
import { StatusProduto } from '@modules/catalogo/domain/produto/produto.types';
import { CategoriaPrismaRepository } from '@modules/catalogo/infra/database/categoria.prisma.repository';
import { ProdutoPrismaRepository } from '@modules/catalogo/infra/database/produto.prisma.repository';
import { DomainException } from '@shared/domain/domain.exception';
import { prisma } from '@main/infra/database/orm/prisma/client';
import { categoriaRepositorio } from '@modules/catalogo/infra/database';
import { produtoRepositorio } from '@modules/catalogo/infra/database';
import { Produto } from '@modules/catalogo/domain/produto/produto.entity';

async function main() {

    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );
    a



    ////////////////////////////////
    //Recuperar Categoria por UUID//
    ////////////////////////////////

    //const categoriaRecuperada: Categoria | null = await categoriaRepositorio.recuperarPorUuid('5ccdd6ab-d043-42f0-937b-1260fe47886a');

    //console.log(categoriaRecuperada);



    /////////////////////////////////
    //Recuperar Todas as Categorias//
    /////////////////////////////////

    //const todasCategorias: Array<Categoria> = await categoriaRepositorio.recuperarTodos();

    //console.log(todasCategorias);



    ////////////////////////////////
    //Verifica se Existe Categoria//
    ////////////////////////////////

    //const existeCategoria: boolean = await categoriaRepositorio.existe("7061d559-ab25-4182-98ce-170afdf2acd2");

    //console.log(existeCategoria);



    /////////////////////
    //Inserir Categoria//
    /////////////////////

    //const categoria: Categoria = Categoria.criar({
    //    nome:'Cozinha'
    //});     

    //const categoriaInserida = await categoriaRepositorio.inserir(categoria);

    //console.log(categoriaInserida);



    ///////////////////////
    //Atualizar Categoria//
    ///////////////////////

    //const categoria: Categoria = Categoria.recuperar({
    //    id: "5ccdd6ab-d043-42f0-937b-1260fe47886a",
    //    nome: "Cozinha Americana"
    //});     

    //const atualizouCategoria: boolean = await categoriaRepositorio.atualizar(categoria.id,categoria);

    //console.log(atualizouCategoria)



    /////////////////////
    //Deletar Categoria//
    /////////////////////

    //const categoriaDeletada: boolean = await categoriaRepositorio.deletar('5ccdd6ab-d043-42f0-937b-1260fe47886a');

    //console.log(categoriaDeletada);



    ////////////////////////////////
    //Recuperar Produto por UUID//
    ////////////////////////////////

    //const produtoRecuperado: Produto | null = await produtoRepositorio.recuperarPorUuid("7f35c7f4-ce26-4503-bfce-0afd937adfb8");

    //console.log(produtoRecuperado);

    //console.log(produtoRecuperado?.estaDeletado());



    ///////////////////
    //Inserir Produto//
    ///////////////////


    //const categoria01: Categoria = Categoria.recuperar({
    //    id: "03f890b0-684a-44ba-a887-170e26bb2cd2",
    //    nome: 'Cozinha'
    //});     

    //const categoria02: Categoria = Categoria.recuperar({
    //    id: "fc762da1-8d2c-4ffa-9559-901db94cb92e",
    //    nome: 'Banho'
    //})

    //const produto: Produto = Produto.criar({
    //    nome:'Pano de Pratro',
    //    descricao:'Algodão fio 60',
    //    valor:30,
    //    categorias:[categoria01]
    //});

    //const produtoInserido = await produtoRepositorio.inserir(produto);

    //console.log(produtoInserido);



    /////////////////////////////////////////////////
    //Recuperar Todos os Produtos e Suas Categorias//
    /////////////////////////////////////////////////

    //const todosProdutos: Array<Produto> = await produtoRepositorio.recuperarTodos();

    //console.log(todosProdutos);

    ///////////////////////////////////////////////
    //Atualizar Produto - Sem Atulizar Categorias//
    ///////////////////////////////////////////////


    //const produto = {
    //    id: "7d6a14d5-02f3-4b6d-8cb8-8601ff151f10",
    //    nome: "Toalha de Cozinha",
    //    descricao: "toalha de algodão",
    //    valor: 200
    //}; 

    //const atualizouProduto: boolean = await produtoRepositorio.atualizar(produto.id,produto);



    ///////////////////
    //Deletar Produto//
    ///////////////////

    //const produtoDeletado: boolean = await produtoRepositorio.deletar("7d6a14d5-02f3-4b6d-8cb8-8601ff151f10");

    //console.log(produtoDeletado);



    ////////////////////////////////////////////
    //Adicionar e Remover Categoria ao Produto//
    ////////////////////////////////////////////

    //const produtoRecuperado: Produto | null = await produtoRepositorio.recuperarPorUuid("737f111b-eba1-457f-9552-5b5f28511d5d");

    //const categoriaRecuperada: Categoria | null = await categoriaRepositorio.recuperarPorUuid("03f890b0-684a-44ba-a887-170e26bb2cd2");

    //if (produtoRecuperado && categoriaRecuperada){

    //if (produtoRecuperado.adicionarCategoria(categoriaRecuperada)) {
    //    await produtoRepositorio.adicionarCategoria(produtoRecuperado,categoriaRecuperada);
    //}

    //if (produtoRecuperado.removerCategoria(categoriaRecuperada)) {
    //    await produtoRepositorio.removerCategoria(produtoRecuperado,categoriaRecuperada);
    //}

    //}



    //////////////////////////
    //Alterar Status Produto//
    //////////////////////////

    //const produtoRecuperado: Produto | null = await produtoRepositorio.recuperarPorUuid("ace8780f-1aac-4219-9b36-e13b60159e4b");

    //if (produtoRecuperado) {
    //    const alterouStatusProduto: boolean = await produtoRepositorio.alterarStatus(produtoRecuperado,StatusProduto.ATIVO)
    //   console.log(alterouStatusProduto);
    //}



    ////////////////////////////////////
    //Recuperar Produtos por Categoria//
    ////////////////////////////////////

    //const todosProdutosPorCategoria: Array<Produto> = await produtoRepositorio.recuperarPorCategoria("03f890b0-684a-44ba-a887-170e26bb2cd2");

    //console.log(todosProdutosPorCategoria);


}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        if (error instanceof DomainException) {
            console.log('Execeção de Dóminio');
            console.log(error.message);
        }
        else {
            console.log('Outras Exceções');
            console.log(error.message);
        }
        await prisma.$disconnect()
        process.exit(1)
    })