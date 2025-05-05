var caminho_env = '.env';

require("dotenv").config({ path: caminho_env });

const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

const app = express();

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => cb(null, 'grafico.png')
  });
  const upload = multer({ storage });

const indexRouter = require("./src/routes/index");
const usuarioRouter = require("./src/routes/usuario");

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname + "/public")))
// app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
    res.send(`
      <html>
      <head>
        <title>Captura de CPU Percentual</title>
        <script>
          function atualizarImagem() {
            const img = document.getElementById('grafico');
            const timestamp = new Date().getTime();
            img.src = '/uploads/grafico.png?t=' + timestamp;
          }
          setInterval(atualizarImagem, 1000);
        </script>
      </head>
      <body>
        <img id="grafico" src="/uploads/grafico.png" width="600" />
      </body>
    </html>
    `);
  });

app.use("/usuarios", usuarioRouter);

app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).send('Nenhum arquivo enviado.');
    res.send('Imagem recebida com sucesso!');
});

app.listen(port, function () {
    console.log(`Inicializado em: http://${host}:${port}`);
});