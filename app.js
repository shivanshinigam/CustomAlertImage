let pointsAlertTimer = null;

function pointsAlert(message, imageUrl = null, duration = 4000) {

    // clear any previous auto-hide timer
    if (pointsAlertTimer) {
        clearTimeout(pointsAlertTimer);
    }

    // set message
    $("#pointsAlert .msg").text(message);

    // handle optional image
    if (imageUrl) {
        $("#pointsAlert .alertImage")
            .attr("src", imageUrl)
            .show();
    } else {
        $("#pointsAlert .alertImage").hide();
    }

    // show alert (stop ongoing animations to avoid flicker)
    $("#pointsAlert").stop(true, true).fadeIn(300);

    // auto-hide after duration
    pointsAlertTimer = setTimeout(function () {
        $("#pointsAlert").fadeOut(300);
    }, duration);
}

// Demo trigger
$("#earnBtn").click(function () {
    pointsAlert(
        "🎉 You earned 20 points!",
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        4000
    );
});

// Manual close
$("#pointsAlert .closeBtn").click(function () {
    $("#pointsAlert").fadeOut(300);
});
