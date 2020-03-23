import { Router } from 'express';
import homecontroller from '../controller/homeController';
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
  } from "../controller/UserController";

class homeRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {



       /* this.router.get('/', function (req, res) {
            res.send('Hellow from this homes');
        });*/
        this.router.get('/',homecontroller.getAllhome);
        this.router.post('/',createUser);
         /*this.router.get('/:id',homecontroller.getProduct);
         this.router.post('/',homecontroller.createProduct);
         this.router.delete('/:id',homecontroller.deleteProduct);
         this.router.put('/:id',homecontroller.updateProduct);*/

    }

}

const homeroutes = new homeRoutes();

export default homeroutes.router;