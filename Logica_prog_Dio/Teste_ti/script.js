document.getElementById("submit-btn").addEventListener("click", evaluate);

function evaluate() {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;
  const q4 = document.getElementById("q4").value;
  const q5 = document.getElementById("q5").value;

  let result = "";

  if (q1 === "infra" && q5 === "sim") {
    result = "Cloud Solution Architect ou DevOps Engineer";
  } else if (q2 === "sim") {
    result = "Machine Learning Engineer";
  } else if (q3 === "dados") {
    result = "Data Engineer ou Data Analyst";
  } else if (q4 === "sim") {
    result = "Blockchain Developer";
  } else if (q1 === "dev") {
    result =
      "Front-end Developer, Back-end Developer, Fullstack Developer ou Mobile Developer";
  } else {
    result = "Quality Assurance Analyst";
  }

  document.getElementById(
    "result"
  ).innerText = `Você se identifica mais com a carreira de: ${result}`;
}
