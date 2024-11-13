function Check() {
  let char = document.getElementById("char").value;
  let para = document.getElementById("para");
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "a" ||
    char === "A" ||
    char === "E" ||
    char === "I" ||
    char === "O" ||
    char === "U"
  ) {
    para.innerHTML = `Giver character '${char}' is <b>vowel</b>`;
    para.style.color = "green";
  } else {
    para.innerHTML = `Giver character '${char}' is'nt <b>vowel</b>`;
    para.style.color = "red";
  }
}
