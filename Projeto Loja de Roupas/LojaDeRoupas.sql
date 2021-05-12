drop table endereco;

create table usuario(
codigo_usuario int primary key,
nome varchar (50) ,
cpf int,
cellphone int,
passaword smallint,
valor varchar(50)
);
create sequence codigo_usuario
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1;
    
describe usuario;
    
create table pedido(
codigo_pedido int primary key,
quantia int,
data_compra int,
preco int
);
create sequence codigo_pedido
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1;
    
describe pedido;

create table produto(
codigo_produto int primary key,
estoque int,
descricao varchar(50)
);
create sequence codigo_produto
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1;
    
describe produto;

create table endereco(
codigo_endereco int primary key,
rua varchar (50) ,
cep int,
numero int,
observacao varchar(50)
);
create sequence codigo_endereco
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1;
    
describe endereco;

commit;

    