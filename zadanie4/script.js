(function($) {

	var form = $("#add-user"),
        input = form.find("input[name='user']"),
        list = $("<ul></ul>").insertBefore(form);

    form.on("submit", function(e) {

        e.preventDefault();

        var name = $.trim( input.val() );

        if(name === "") {
            input.addClass("invalid");
            return;
        }

        input.removeClass("invalid").val("");

        $("<li>").text(name).appendTo(list);

	});


})(jQuery);