
const data1 = [10, 40, 80, 50];
const data2 = [1, 20, 35];
const data3 = [10, 40, 80, 50, 100];
const datasets = [data1, data2, data3];
let datasetCounter = 0;

function render() {
    const data = datasets[datasetCounter % datasets.length];
    const updateSelection = d3
        .select("#container")
        .selectAll("div").data(data);

    const enterSelection = updateSelection.enter();
    const exitSelection = updateSelection.exit();


    enterSelection.append('div').style('width', d => d * 10 + "px").transition(d3.transition().duration(1500)).style('width', d => d * 10 + "px").text(d => d + " балів");
    console.log(enterSelection, exitSelection, updateSelection);
    exitSelection.remove();
    updateSelection.style('width', d => d * 10 + "px").text(d => d + " балів")
}


document.addEventListener("DOMContentLoaded", () => {
    render();
    document.getElementById('btn').addEventListener("click", () => {(datasetCounter++) ;
    render();}
)
});