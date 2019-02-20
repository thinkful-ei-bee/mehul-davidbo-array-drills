function turtle(arr) {

    const filtered_steps = arr.filter(steps => steps[0] >= 0 && steps[1] >= 0);
    const total_steps = filtered_steps.map(total => total[0] + total[1]);
    total_steps.forEach(function(step){

        console.log(step);
    });
}

turtle([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);