$(document).ready(function() {
    const password = 'melon';
    const imagesPath = 'C:/Users/User/Documents/Miscellaneous/Fantasy Pictures Album';

    $('#password').on('input', function() {
        if ($(this).val() === password) {
            $('#portal').fadeOut(function() {
                $('#designer').fadeIn();
            });
        }
    });

    $(document).on('click', '.image-wrapper img', function() {
        $(this).parent().toggleClass('selected');
    });

    $('#confirm').on('click', function() {
        // Add functionality to process the selected images and send an email
    });

    $('#cancel').on('click', function() {
        $('.image-wrapper.selected').removeClass('selected');
    });

    $('#upload').on('click', function() {
        $('#file-input').click();
    });

    $('#file-input').on('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageWrapper = $('<div>').addClass('image-wrapper');
                const img = $('<img>').attr('src', e.target.result);
                imageWrapper.append(img);
                $('#image-container').append(imageWrapper);
            };
            reader.readAsDataURL(file);
        }
    });
});
