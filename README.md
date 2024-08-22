API da Feiciaq

Trabalho:

- título (string)
- autores (autor[])
- área (area)
- código (string - pk)

Autor:

- nome (string)
- genero (string)
- cpf (string - pk)

Área\*:

- nome (string)
- codigo (string - pk)
- descrição (string)

POST /trabalhos

GET /trabalhos/area

GET /trabalhos/area/:codArea
