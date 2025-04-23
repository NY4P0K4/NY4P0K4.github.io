function menuEnable() {
  if(document.getElementById("menu").style.visibility == "hidden") {
    document.getElementById("menu").style.visibility = "visible"
    document.getElementById("menu").style.position = "static"
  } else {
    document.getElementById("menu").style.visibility = "hidden"
    document.getElementById("menu").style.position = "absolute"
  }
}