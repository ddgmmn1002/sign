import express from 'express';
import bodyParser from 'body-parser';
import rootRouter from './router/rootRouter';
import "./db";

const app = express();
const port = 4000;

app.set("view engine", "ejs")
app.set("views", process.cwd()+"/view")
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use("/", rootRouter);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
