let requestOptions: Partial<Cypress.RequestOptions> = {
  method: "POST",
  url: "/trabalhos",
  failOnStatusCode: false,
};

describe("Testes sobre o endpoint /trabalhos", () => {
  beforeEach(() => {
    cy.fixture("trabalho").as("trabalho");
    cy.fixture("trabalho_sem_titulo").as("trabalhoSemTitulo");
    cy.fixture("trabalho_com_um_autor").as("trabalhoComUmAutor");
    cy.fixture("trabalho_com_mais_de_sete_autores").as(
      "trabalhoComMaisDeSeteAutores",
    );
    cy.fixture("trabalho_com_codigo_invalido").as("trabalhoComCodigoInvalido");
    cy.fixture("trabalho_com_autor_com_nome_invalido").as(
      "trabalhoComAutorComNomeInvalido",
    );
    cy.fixture("trabalho_com_autor_com_genero_invalido").as(
      "trabalhoComAutorComGeneroInvalido",
    );
    cy.fixture("trabalho_com_autor_com_cpf_invalido").as(
      "trabalhoComAutorComCpfInvalido",
    );
    cy.fixture("trabalho_com_area_invalida").as("trabalhoComAreaInvalida");
  });

  test("Deve salvar um trabalho com dados válidos", () => {
    requestOptions.body = this.trabalho;

    cy.request(requestOptions).then((res) => {
      expect(res.status).to.eq(201);
      const { trabalho } = res.body;
      expect(trabalho.id).to.not.null;
    });
  });

  test("Não deve salvar trabalho com título vazio ou nulo", () => {
    requestOptions.body = this.trabalhoSemTitulo;
    cy.request(requestOptions).then((res) => {
      expect(res.status).to.equal(400);
      const { menssagensDeErro } = res.body;
      expect(menssagensDeErro[0]).to.equal("O Título não pode ser vazio.");
    });
  });
  test("Não deve saçvar trabalho com menos de dois autores", () => {
    requestOptions.body = this.trabalhoComUmAutor;
    cy.request(requestOptions).then((res) => {
      expect(res.status).to.equal(400);
      const { menssagensDeErro } = res.body;
      expect(menssagensDeErro[0]).to.equal(
        "Deve existir pelo menos dois autores e no máximo 7.",
      );
    });
  });
  test("Não deve salvar trabalho com mais de sete autores", () => {
    requestOptions.body = this.trabalhoComMaisDeSeteAutores;
    cy.request(requestOptions).then((res) => {
      expect(res.status).to.equal(400);
      const { menssagensDeErro } = res.body;
      expect(menssagensDeErro[0]).to.equal(
        "O número de autores não pode ser superior a sete e inferior a dois autores.",
      );
    });
  });
  test("Não deve salvar trabalho com código inválido", () => {
    requestOptions.body = this.trabalhoComCodigoInvalido;
    cy.request(requestOptions).then((res) => {
      expect(res.status).to.equal(400);
      const { menssagensDeErro } = res.body;
      expect(menssagensDeErro[0]).to.equal(
        "O Código do trabalho não é válido.",
      );
    });
  });
  test("Não deve salvar trabalho com autor com nome inválido", () => {
    requestOptions.body = this.trabalhoComAutorComNomeInvalido;
    cy.request(requestOptions).then((res) => {
      expect(res.status).to.equal(400);
      const { menssagensDeErro } = res.body;
      expect(menssagensDeErro[0]).to.equal(
        "O Nome do autor não pode estar vazio.",
      );
    });
  });
  test("Não deve salvar trabalho com autor com gênero inválido", () => {
    requestOptions.body = this.trabalhoComAutorComGeneroInvalido;
    cy.request(requestOptions).then((res) => {
      expect(res.status).to.equal(400);
      const { menssagensDeErro } = res.body;
      expect(menssagensDeErro[0]).to.equal("O Gênero do autor não é válido.");
    });
  });
  test("Não deve salvar trabalho com autor com CPF inválido", () => {
    requestOptions.body = this.trabalhoComAutorComCpfInvalido;
    cy.request(requestOptions).then((res) => {
      expect(res.status).to.equal(400);
      const { menssagensDeErro } = res.body;
      expect(menssagensDeErro[0]).to.equal("O CPF do autor não é válido.");
    });
  });
  test("Não deve salvar trabalho com área inválida", () => {
    requestOptions.body = this.trabalhoComAreaInvalida;
    cy.request(requestOptions).then((res) => {
      expect(res.status).to.equal(400);
      const { menssagensDeErro } = res.body;
      expect(menssagensDeErro[0]).to.equal("A Área do trabalho não é válida.");
    });
  });
});
