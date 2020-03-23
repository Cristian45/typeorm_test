import { Request, Response } from 'express';
//import sql from 'mssql'
//import pool from '../database';



class homeController {

    public async getAllhome(req: Request, res: Response): Promise<void> {
        try {
            //const home = await pool.request().query('SELECT codigo,descripcion,cantidad,precio,imagen FROM product')
            res.json({ message: 'here are the homes' })
        }
        catch (err) {
            res.json({ message: 'Error in the query table product' });
        }

    }  

}

const homecontroller = new homeController();
export default homecontroller;