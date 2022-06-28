import fetch from "node-fetch";
fetch('https://api.github.com/users/joaovitoroliv').then((res) => {
    console.log(res)
});