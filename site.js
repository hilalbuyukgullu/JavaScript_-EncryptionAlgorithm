function fncData() {
    let convertTextAscii="";
    const data = document.getElementById("data").value;
    const dataSplit = data.split(" ").reverse(); 

    dataSplit.forEach((item) => { 
        for (let i = 0; i < item.length; i++) {
            let element = item[i];
            let convert = String.fromCharCode(element.charCodeAt() + i + 1);
            const convertAsci = convert.charCodeAt(); 
            convertTextAscii += convertAsci+ "?";
        }
        convertTextAscii+= "_";
    });
    document.getElementById("show").innerHTML = btoa(convertTextAscii);
}

function fncAnalyze() {
    
    let analyzeText = "";
    const data = document.getElementById("data").value;
    let convertTextAscii=atob(data);
    const dataSplit = convertTextAscii.split("_").reverse();

    dataSplit.forEach((item) => {
        let ascii= item.split("?");
        for (let i = 0; i < ascii.length; i++) {
            let element = ascii[i];
            if( element != "" ){
                const convertChar = String.fromCharCode(element);
                let convert = String.fromCharCode(convertChar.charCodeAt() - (i + 1));
                analyzeText += convert;
            }
        }
        analyzeText += " ";
    });
    document.getElementById("show").innerHTML = analyzeText;
}
