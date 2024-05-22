function mostrarAba(evt) {
  var abas = document.querySelectorAll(".grid-section");
  for (var i = 0; i < abas.length; i++) {
    if (abas[i].id === evt) {
      abas[i].style.display = "block";
    } else {
      abas[i].style.display = "none";
    }
  }
}

function iniciarFormulario() {
  mostrarAba();
}

const ctx = document.getElementById("grafico1");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2024", "2023", "2022", "2021", "2020", "2019"],
    datasets: [
      {
        label: "Maior Porcentagem",
        backgroundColor: [
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
        ],
        data: [60, 33, 25, 15, 5, 20],
        borderWidth: 1,
        borderColor: "#000",
      },
    ],
  },
  options: {
    scales: {
      x: {
        ticks: {
          color: "#fff",
          font: {
            size: 18,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#fff",
          font: {
            size: 18,
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Educação de Qualidade",
        color: "#fff",
        font: {
          size: 18,
        },
      },
    },
  },
});

const novo = document.getElementById("grafico2");

const data = {
  labels: ["Bahia", "Amazonas", "São Paulo"],
  datasets: [
    {
      label:
        "Cidades com maior índice de desempenho de educação com Construindo Sonhos",
      data: [250, 250, 250],
      backgroundColor: [
        "rgb(0, 200, 0)",
        "rgb(255, 20, 147)",
        "rgb(255, 255, 0)",
      ],
      hoverOffset: 4,
    },
  ],
};

const chart = new Chart(novo, {
  type: "doughnut",
  data: data,
  labels: ["Bahia", "Amazonas", "São Paulo"],
  datasets: [
    {
      label: "My First Dataset",
      data: [250, 250, 250],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
  options: {
    scales: {
      x: {
        ticks: {
          color: "#fff",
          font: {
            size: 18,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#fff",
          font: {
            size: 18,
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Estados com maior desempenho da Educação Digital",
        color: "#fff",
        font: {
          size: 18,
        },
      },
    },
  },
});

const dados = document.getElementById("grafico3");

new Chart(dados, {
  type: "bar",
  data: {
    labels: ["2030", "2029", "2028", "2027", "2026", "2025"],
    datasets: [
      {
        label: "100%",
        backgroundColor: [
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
        ],
        data: [100, 50, 50, 45, 40, 70],
        borderWidth: 1,
        borderColor: "#000",
      },
    ],
  },
  options: {
    scales: {
      x: {
        ticks: {
          color: "#fff",
          font: {
            size: 18,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#fff",
          font: {
            size: 18,
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Meta para 2030",
        color: "#fff",
        font: {
          size: 18,
        },
      },
    },
  },
});

document.getElementById("botaoHappyCode").onclick = function () {
  window.open("https://happy.com.br/", "_blank");
};

document.getElementById("botaoProgramaKids").onclick = function () {
  window.open(
    "https://mooc.cefor.ifes.edu.br/moodle/enrol/index.php?id=416",
    "_blank"
  );
};

document.getElementById("botaoDio").onclick = function () {
  window.open("https://dio.me/", "_blank");
};

document.getElementById("botaoAlura").onclick = function () {
  window.open("https://www.alura.com.br/", "_blank");
};

document.getElementById("botaoRochetseat").onclick = function () {
  window.open("https://www.rocketseat.com.br/", "_blank");
};

document.getElementById("botaoCodigoKid").onclick = function () {
  window.open("https://www.codigokid.com.br/", "_blank");
};

document.getElementById("botaoTicTrilhas").onclick = function () {
  window.open("https://ticemtrilhas.org.br/", "_blank");
};

document.getElementById("botaoProgramaria").onclick = function () {
  window.open("https://www.programaria.org/", "_blank");
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("enviarSugestao")
    .addEventListener("click", function (event) {
      var nome = document.getElementById("nomeSugestao").value;
      var email = document.getElementById("emailSugestao").value;
      var telefone = document.getElementById("telefoneSugestao").value;
      var sugestao = document.getElementById("sugestaoSugestao").value;

      if (nome === "" || email === "" || telefone === "" || sugestao === "") {
        event.preventDefault();
        alert("Preencha todos os campos.");
        return false;
      }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("enviarLogin")
    .addEventListener("click", function (event) {
      var email = document.getElementById("nomeLogin").value;
      var senha = document.getElementById("senhaLogin").value;

      if (email === "" || senha === "") {
        event.preventDefault();
        alert("Preencha todos os campos.");
        return false;
      }
    });
});
