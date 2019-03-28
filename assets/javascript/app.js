var quizHtml = `
    
    <h3>Time Remaining: <span id="countdown"></span></h3>

    <p><h2>Roses are red</h2></p>
    <p>
        <input type="radio" name="question1" value="correct"> True
        &nbsp;  &nbsp;
        <input type="radio" name="question1" value="incorrect"> False
    </p>

    <p><h2>Violets are orange</h2></p>
    <p>
        <input type="radio" name="question2" value="incorrect"> True
        &nbsp;  &nbsp;
        <input type="radio" name="question2" value="correct"> False
    </p>
<br>
    <button type="button" class="btn btn-secondary btn-lg center" id="submit-button">Submit</button>
`

var resultsHtml = `
    <h1>Results!</h1>
    <h2>Correct: <span id="correct-count"></span></h2>
    <h2>Incorrect: <span id="incorrect-count"></span></h2>
    <h2>Unanswered: <span id="unanswered-count"></span></h2>
`

var renderResults = function() {
    var correct = 0
    var incorrect = 0
    var unanswered = 0
    if ($("input[name=question1]:checked").val() === "correct") {
        correct += 1
    } else if ($("input[name=question1]:checked").val() === "incorrect") {
        incorrect += 1
    } else {
        unanswered += 1
    }
    if ($("input[name=question2]:checked").val() === "correct") {
        correct += 1
    } else if ($("input[name=question2]:checked").val() === "incorrect") {
        incorrect += 1
    } else {
        unanswered += 1
    }

    $("#main-content").html(resultsHtml)
    $("#correct-count").text(correct)
    $("#incorrect-count").text(incorrect)
    $("#unanswered-count").text(unanswered)
}

$(document).ready(function() {
    $("#start-button").click(function() {
        $("#main-content").html(quizHtml)

        $("#submit-button").click(function() {
            renderResults()
        })

        var countdown = 30
        $("#countdown").text(countdown)
        setInterval(function() {
            countdown -= 1
            $("#countdown").text(countdown)
            if (countdown === 0) {
                renderResults()
            }            
        }, 1000)
    })
});
