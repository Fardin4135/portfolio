function opentab(data){
    if(data==='Skills'){
        document.querySelector(".E_tablinks").style.display="none";
    document.querySelector(".s_tablinks").style.display="block";
    }else if(data==='Certifications'){
        document.querySelector(".s_tablinks").style.display="none";
        document.querySelector(".c_tablinks").style.display="block";
        }else{
            document.querySelector(".c_tablinks").style.display="none";
            document.querySelector(".E_tablinks").style.display="block";
        }
}
document.getElementById('resume').addEventListener('click', function () {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'NEW_RESUME (3).pdf'; // Path to your resume file
    link.download = 'My_Resume.pdf'; // Specify the name for the downloaded file
    document.body.appendChild(link); // Append link to the body
    link.click(); // Simulate click on the link to trigger the download
    document.body.removeChild(link); // Remove the link from the document
});
