import { Request, Response } from 'express';
import Chef from '../models/chef';


export const getChefs = async (req: Request, res: Response) => {
    const listChefs = await Chef.findAll()

    res.json(listChefs)
}

export const getChef = async (req: Request, res: Response) => {
    const { id } = req.params;
    const chef = await Chef.findByPk(id);

    if (chef) {
        res.json(chef)
    } else {
        res.status(404).json({
            msg: `No existe un registro con el id ${id}`
        })
    }
}

export const deleteChef = async (req: Request, res: Response) => {
    const { id } = req.params;
    const chef = await Chef.findByPk(id);

    if (!chef) {
        res.status(404).json({
            msg: `No existe un registro con el id ${id}`
        })
    } else {
        await chef.destroy();
        res.json({
            msg: 'El registro fue eliminado con exito!'
        })
    }

}

export const postChef = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Chef.create(body);

        res.json({
            msg: `El registro fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateChef = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const chef = await Chef.findByPk(id);

    if(chef) {
        await chef.update(body);
        res.json({
            msg: 'El registro fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un registro con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

    
}