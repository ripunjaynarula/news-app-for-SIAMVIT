$('body').on('keypress', 'input', function(args) {
    if (args.keyCode == 13) {
        $("#searchbtn").click();
        return false;
    }
});