window.onscroll = () => { scrollFunction() }

scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("TitleHeading").style.fontSize = "10px"
    } else {
        document.getElementById("TitleHeading").style.fontSize = "40px"
    }
}