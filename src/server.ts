import app from "./app";
import homeRoutes from './routes/homeRoutes';
import {createConnection} from 'typeorm'
//import cors from 'cors'


const PORT = process.env.PORT || 3000; 

createConnection();
//app.use(cors());
app.use('/api/homes', homeRoutes);

app.use('/', function (req, res) {
    res.send('Hellow from this app');
});

app.listen(PORT, () => {
    console.log(`API REST corriendo en puerto ${PORT}`);
})