import React from "react";


function Links ({github, linkedin}) {
return (
    <div>
        <h3>Links</h3>
        <a href={linkedin}>{linkedin}</a>
        <a href={github}>{github}</a>
    </div>
)
}

export default Links