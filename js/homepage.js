export const homepage = () => {
    document.querySelector("#content-wrapper").innerHTML = getHomepageContent();
}

export const getHomepageContent = () => {
    return '<!-- jumbotron -->' +
        '<div class="my-jumbotron jumbotron-fluid py-2 px-1">' +
        '    <div class="container">' +
        '        <!-- <h1 class="display-4">WELCOME</h1> -->' +
        '        <p class="lead">Covid-19 dashboard</p>' +
        '        <!-- <hr class="my-4"> -->' +
        '        <p>Talk to our bot to find out more about Covid-19 cases around the world or explore numbers and statistics at global, regional and national level with our interactive chart below.</p>' +
        '        <!-- <p class="lead">' +
        '        <a class="btn btn-primary btn-lg" href="#chart" role="button">See chart</a>' +
        '    </p> -->' +
        '    </div>' +
        '</div>' +
        '<!-- end of jumbotron -->' +
        '<!-- chart -->' +
        '<div class="m-1 h-100 d-block" id="#chart">' +
        '    <div class="chart-wrapper my-auto">' +
        '        <iframe src="https://spotfire-next.cloud.tibco.com/spotfire/wp/Embed?file=/Users/yfbrvvkkp23xm5fr6zl6wwl4e3ueflqp/Public/AI%20Hackathon&configurationBlock=SetPage%28pageIndex%3D1%29%3B&options=7-1,9-1,10-1,11-1,12-1,13-0,14-1,1-1,2-1,3-1,4-1,5-1,6-0,15-1,17-1"' +
        '            width="100%" height="100%"></iframe>' +
        '    </div>' +
        '</div>' +
        '<!-- end of chart -->'
}