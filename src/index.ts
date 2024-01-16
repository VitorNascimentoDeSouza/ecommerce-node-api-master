import { Categoria } from '@modules/catalogo/domain/categoria/categoria.entity';
import { StatusProduto } from '@modules/catalogo/domain/produto/produto.types';
import { CategoriaPrismaRepository } from '@modules/catalogo/infra/database/categoria.prisma.repository';
import { ProdutoPrismaRepository } from '@modules/catalogo/infra/database/produto.prisma.repository';
import { DomainException } from '@shared/domain/domain.exception';
import { prisma } from '@main/infra/database/orm/prisma/client';
import { categoriaRepositorio } from '@modules/catalogo/infra/database';
import { produtoRepositorio } from '@modules/catalogo/infra/database';
import { Produto } from '@modules/catalogo/domain/produto/produto.entity';
import { atualizarCategoriaUseCase, deletarCategoriaUseCase, inserirCategoriaUseCase, recuperarCategoriaPorIdUseCase, recuperarTodasCategoriasUseCase } from '@modules/catalogo/application/use-case';
import { RecuperarTodasCategoriasUseCase } from '@modules/catalogo/application/use-case/recuperar-todas-categorias/recuperar-todas-categorias.use-case';
import { InserirCategoriaUseCase } from '@modules/catalogo/application/use-case/inserir-categoria/inserir-categoria.use-case';
import { RecuperarProdutoPorIdUseCase } from '@modules/catalogo/application/use-case/recuperar-produto-por-id/recuperar-produto-por-id.use-case';

async function main() {

    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );
    

    //////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////Categoria////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////


    
    ////////////////////////////////
    //Recuperar Categoria por UUID//
    ////////////////////////////////

    //console.log(await recuperarCategoriaPorIdUseCase.execute("31244dc7-7f49-43be-a89b-bb6081077fc1"))



    /////////////////////////////////
    //Recuperar Todas as Categorias//
    /////////////////////////////////

    //console.log(await recuperarTodasCategoriasUseCase.execute())



    ////////////////////////////////
    //Verifica se Existe Categoria//
    ////////////////////////////////

    //const existeCategoria: boolean = await categoriaRepositorio.existe("7061d559-ab25-4182-98ce-170afdf2acd2");

    //console.log(existeCategoria);



    /////////////////////
    //Inserir Categoria//
    /////////////////////

    //console.log(await inserirCategoriaUseCase.execute({nome: 'cama'}))



    ///////////////////////
    //Atualizar Categoria//
    ///////////////////////

    //console.log(await atualizarCategoriaUseCase.execute({
    //id:"57c710fe-e413-42c3-9a58-f5e29e0c7240",
    //nome: "banho"
    //}))



    /////////////////////
    //Deletar Categoria//
    /////////////////////

    //console.log(await deletarCategoriaUseCase.execute('db434425-5c4a-4e0d-b5fa-fc45445d1298'))


    //////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////Produto////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////
    //Recuperar Produto por UUID//
    ////////////////////////////////

    //console.log(await recuperarProdutoPorIdUseCase.execute(""));

   

    ///////////////////
    //Inserir Produto//
    ///////////////////

    //const categoria01: Categoria = Categoria.recuperar({
    //    id: "31244dc7-7f49-43be-a89b-bb6081077fc1",
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