let windowObj = null;

document.getElementById("add-btn").addEventListener("click", () => {
    
    const inputText = document.getElementById("link-input").value;

    if((inputText.includes("https://") || inputText.includes("http://")) && inputText.includes(".")) {
        
        // Add link
        const newLink = `
        <div class="link-container">
            <div class="link">
                <div class = "web-link">${inputText}</div>
            </div>
        <button class="delete-link">delete</button>
        </div>
        `

        document.getElementById("links").innerHTML += newLink;

    } else {
        alert("Enter full website url, Example:\nhttps://youtube.com")
    }

})


document.getElementById("links").addEventListener("click", (e) => {
    const classType = e.target.classList[0];

    let features = "width=600,height=600";

    if(document.getElementById("fullscreenBtn").checked) {
        features = `fullscreen=yes,width=${screen.width},height=${screen.height}`;
    } else {
        features = "width=600,height=600";
    }

    if(classType === "web-link") {
        
        // if multi windows are checked create let more windows be created at once
        if(document.getElementById("multiWindowsBtn").checked) {
            windowObj = null;
            const tempPopup = window.open(e.target.innerText, "_blank", features);
            return;
        }

        if (windowObj && !windowObj.closed) {
            windowObj.close();
        }
        
        // Open the new window
        windowObj = window.open(e.target.innerText, "_blank",features);

    } else if(classType === "delete-link") {
        e.target.parentNode.remove();
    }
})
