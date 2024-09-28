document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("metaForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevenir o comportamento padrão do formulário

    // Capturar os valores dos campos do formulário
    const livro = document.getElementById("livro").value;
    const paginas = document.getElementById("paginas").value;
    const dias = document.getElementById("dias").value;

    // Construir o objeto meta para ser enviado
    const novaMeta = {
      livro: livro,
      paginas: parseInt(paginas),
      dias: parseInt(dias),
      progresso: 0 // Iniciar com progresso 0
    };

    try {
      // Enviar uma requisição POST para o json-server
      const res = await fetch("http://localhost:3000/metas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novaMeta)
      });

      if (res.ok) {
        alert("Meta criada com sucesso!");
        form.reset(); // Limpar o formulário após o envio
      } else {
        alert("Erro ao criar a meta.");
      }
    } catch (error) {
      console.error("Erro ao enviar a meta:", error);
    }
  });
});
