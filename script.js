document.getElementById("testBack").addEventListener("click", testBack);

function testBack() {
  console.log("Back");
  fetch("http://localhost:3000/", {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      console.log("res...", res);
      //   if (res.ok) return res.json();
    })
    .then((response) => {
      console.log("in main js", response);
      // window.location.reload(true);
    });
}
