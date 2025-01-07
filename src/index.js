const init = () => {

    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#searchByID");
      
        console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`)
       .then(res => res.json())
       .then(data => {
        

       const title = document.querySelector("#h4");
       const summary = document.querySelector("#p");

       title.innerHTML = data.title
       summary.innerHTML = data.summary}
      );
      input.value = ""

             });
    
};

document.addEventListener("DOMContentLoaded", init);