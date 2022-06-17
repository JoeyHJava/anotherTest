const update = document.querySelector("#update-button");
const deleteButton = document.querySelector("#delete-button");
const messageDiv = document.querySelector("#message");
let test = "one";
update.addEventListener("click", (_) => {
  fetch("http://localhost:3000/quotes", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Darth Vadar",
      quote: "............... your lack of faith disturbing.",
      size: "large",
      ingredients: [1,2,3]
    }),
  })
    .then((res) => {
      console.log("res...", res);
      if (res.ok) return res.json();
    })
    .then((response) => {
      console.log("in main js", response);
      // window.location.reload(true);
    });
});
