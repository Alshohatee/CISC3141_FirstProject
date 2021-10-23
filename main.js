window.onscroll = () => { scrollFunction() }

scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("TitleHeading").style.fontSize = "10px"
    } else {
        document.getElementById("TitleHeading").style.fontSize = "40px"
    }
}
const userAction = async() => {
    const response = await fetch('https://michael-scott-api.herokuapp.com/v1/quotes');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log()
    document.getElementById("micheleQuotes").innerHTML = myJson[0]

}


userAction();