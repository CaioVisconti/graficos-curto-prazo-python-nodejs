# Criação de gráficos a partir do Python em uma página html de um servidor Node.JS

## Para a execução desse código foi preciso a utilização das seguintes bibliotecas: 

> ## Script Python: 

> Matplotlib: Criação de gráficos e armazenamento em buffer; 

> Requests: Envio de requisições para determinadas urls; 

> IO: Manipulação de arquivos de entrada e saída; 

> Time: Manipulação de horários; 

> Psutil: Captura de dados de máquina; 

>## Aplicação web: 

> Express: Gerenciamento de requisições http; 

> Path: Manipulação de redirecionamento; 

> Multer: Manipulação de arquivos; 

### A utilização dessas bibliotecas tem a temática de criar um arquivo de imagem com o gráfico, redirecionamento para a aplicação web e conversão em foto utilitária salva no disco do projeto. Para isso será seguido o seguinte caminho: 

> Captura dos dados de horário e captura de componente (nesse caso, porcentagem de CPU); 

> Criação do gráfico de linha com os dados obtidos; 

> Armazenamento do gráfico em formato png em buffer; 

> Envio de uma requisição com a foto salva em buffer; 

> Aplicação web receber a requisição de envio de arquivo; 

> Aplicação web armazena em disco a imagem; 

> Aplicação web disponibiliza. 

## Ademais será passado um exemplo acerca da criação de um gráfico que realiza uma autoatualização baseada na captura de dados obtida no script Python remoto para trazer uma maior dinamicidade para a visualização de dados recentes.

## Para ter acesso ao código, copie a url do repositório e clone em qualquer CLI (CMD, PowerShell, GitBash, etc) na seguinte estrutura:

> git clone https://github.com/CaioVisconti/graficos-curto-prazo-python-nodejs.git

## Ao preencher, dê enter para realizar a clonagem do repositório em sua máquina!

## Será necessária a instalação das seguintes ferramentas para que o código funcione:

>  Python (acima da versão v3.10);
> NodeJS (versão v22.15.01);
> Git (v2.49.0);
> Instalação das bibiotecas Python e módulos do node.

### Instalação de bibliotecas Python:
> pip install nome_biblioteca

### Instalação de módulos do node (tem que acessar o diretório clonado antes e executar o seguinte comando):
> npm i

## Para inicializar o servidor node, digite no CLI que está acessando o repositório clonado:
> npm start