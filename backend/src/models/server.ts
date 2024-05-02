import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routesChef from '../routes/chef';
import routesCategoria from '../routes/categorias';
import routesDetalleCompra from '../routes/detalleCompras';
import routesUsers from '../routes/users';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API SE ESTA EJECUTANDO'
            })
        })
        this.app.use('/api/chef', routesChef),
        this.app.use('/api/users', routesUsers),
        this.app.use('/api/categoria', routesCategoria),
        this.app.use('/api/detalleCompras', routesDetalleCompra)
    }

    midlewares() {

        // Parseamos el body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {

        try {
            await db.authenticate();
            console.log('Base de datos conectada')
        } catch (error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos')
        }

       
    }


}

export default Server;