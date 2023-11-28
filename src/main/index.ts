import dotenv from 'dotenv'
import { createHTTPServe } from './presentation/http/server'

async function bootstrap() {
    
    //Carrega variaveis de ambiente do arquivo .env
    dotenv.config()

    //Atribuir as variaveis de ambiente a constantes locais
    const api_name = process.env.API_NAME
    const host_name = process.env.HOST_NAME
    const port = process.env.PORT

    console.log(`[${api_name}] inicializando a API......`)

    const httpServer = await createHTTPServe()

    httpServer.listen( {port: port} , async () => {
        console.log(`[${api_name}] Servidor HTTP pronto e ouvindo em http://${host_name}:${port}`)
    }

    )
}

bootstrap()
    .catch((error) => {
        console.error(error)
    })