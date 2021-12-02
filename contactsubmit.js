var submitted = false;

function onLoad() {
    $('form')[0].reset();
    if (submitted) {
        $('#success').show();
    } else {
        $('#success').hide();
    }
}
