const contacts =
    '<section id="contact" class="d-flex parent">' +
    '    <div class="col-md-6 sidebar h-100 pl-5 d-flex align-items-center">' +
    '        <div><div class="w-100 py-4">' +
    '            <h2>We\'d love to hear from you! </h2>' +
    '        </div>' +
    '        <div class="">' +
    '            <h5 class="mt-4">' +
    '                COVID SECRETARIAT (Kuala Lumpur, Malaysia)' +
    '            </h5>' +
    '            <h6>Call us</h6>' +
    '            <p>' +
    '                +60 12345678' +
    '            </p>' +
    '            <h6>E-mail us</h6>' +
    '            <p>' +
    '                info@covid.org' +
    '            </p>' +
    '            <h6>Snail mail or visit (but not now)</h6>' +
    '            <p>' +
    '                Global COVID Campus<br/> 28 Jln Ambong Kanan 2 Kepong Baru<br/> 52100 Kuala Lumpur<br/> Malaysia' +
    '                <br/>' +
    '            </p>' +
    '        </div>' +
    '    </div></div>' +
    '    <div class="col-md-6 d-flex align-items-end justify-content-center">' +
    '        <img src="/static/undraw_contact_us_15o2.svg" alt="Report" srcset="" class="w-100 ">' +
    '    </div>' +
    '</section>';

export const contact = () => {
    document.querySelector("#content-wrapper").innerHTML = contacts;
}