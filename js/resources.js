const resourceContent =
    '<div class="parent flex-column p-5">' +
    '  <div class="m-2">' +
    '      <h2 class="text-center">Coming soon. Watch this space.</h2>' +
    '  </div>' +
    '  <div class="d-flex justify-content-center align-items-center w-100">' +
    '      <div class="d-flex col-md-7 justify-content-center align-items-center">' +
    '          <img src="/static/undraw_work_in_progress_uhmv.svg" alt="" srcset="" class="mt-3" style="height: 60vh">' +
    '      </div>' +
    '  </div>' +
    '</div>';

export const resources = () => {
    document.querySelector("#content-wrapper").innerHTML = resourceContent;
}