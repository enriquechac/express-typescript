import express from 'express';


const app = express();
app.use(express.json());

const PORT = 3000;


app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!!' + new Date().toLocaleString());
    res.send('pong');
})

app.listen(PORT, () => {
    console.log(`Escuchado en el puerto ${PORT}`);
    
})