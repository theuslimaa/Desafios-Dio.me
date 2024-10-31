#!/bin/bash

echo "Criando as pastas"

mkdir /publico
mkdir /adm
mkdir /ven
mkdir /sec

echo "Criando grupo dos usuários"

groupadd GRP_ADM
groupadd GRP_VEN
groupadd GRP_SEC

echo "Criando usuários"

useradd keven -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_ADM
useradd matheus -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_ADM
useradd nakamvra -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_ADM

useradd jonatas -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_VEN
useradd hatanda -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_VEN
useradd rooh -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_VEN

useradd natan -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_SEC
useradd joao ferreira -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_SEC
useradd sabiá -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_SEC

echo "Especificando permissões dos diretórios...."

chown root:GRP_ADM /adm
chown root:GRP_VEN /ven
chown root:GRP_SEC /sec

chmod 770 /adm
chmod 770 /ven
chmod 770 /sec
chmod 777 /publico

echo "Fim do script"
