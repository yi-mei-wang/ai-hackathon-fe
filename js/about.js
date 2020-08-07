const aboutHtml =
    '<div class="parent">' +
    '<div class="col-md-5 d-flex align-items-center justify-content-center">' +
    '    <img src="/static/undraw_virtual_assistant_jjo2.svg" alt="Report" srcset="" class="w-50 ">' +
    '</div>' +
    '<div class="col-md-7 d-flex align-items-center justify-content-center sidebar">' +
    '    <div class="py-4 px-3 mx-2">' +
    '        <h2>We want to help</h2>' +
    '        <p>Things might be difficult right now, as the economic impacts of the pandemic are putting a ' + 'strain on businesses all around the world.' +
    '        </p>' +
    '        <p>We’ve put together these relief initiatives and remote working resources to help you weather this storm and stay connected with your colleagues and customers.' +
    '        </p>' +
    '        <p>Talk to our bot to find out more about Covid-19 cases around the world or explore numbers ' + 'and statistics at global, regional and national level with our interactive chart below.' +
    '        </p>' +
    '    </div>' +
    '</div>' +
    '</div>';


export const getAboutContent = () => {
    return aboutHtml;
}

export const about = () => {
    document.querySelector("#content-wrapper").innerHTML = getAboutContent();
}