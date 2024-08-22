API da Feiciaq

Trabalho:

- título (string - não vazia)
- autores (autor[] , entre 2 e 7)
- área (area , obrigatória : CET , CHCSA , CBS , CAE , MDIS )
- código (string - pk, obrigatório seguido pelo código da área seguido por 2 dígitos)

Autor:

- nome (obrigatório , string, deve conter nome e sobrenome)
- genero (obrigatório , string , M ou F)
- cpf (obrigatório , string - pk , 11 digitos sem máscara)

Área\*:

- nome (string)
- codigo (string - pk)
- descrição (string)

POST /trabalhos

GET /trabalhos/area

GET /trabalhos/area/:codArea
