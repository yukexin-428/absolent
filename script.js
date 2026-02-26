document.addEventListener("DOMContentLoaded", function () {
    // 确保DOM加载完成后再初始化图表
    initChart();
});

// 计算并更新图表
function calculateCost() {
    const lifetime = parseFloat(document.getElementById('filter-lifetime').value);
    const powerConsumption = parseFloat(document.getElementById('power-consumption').value);
    const filterCost = parseFloat(document.getElementById('filter-cost').value);
    const electricityRate = parseFloat(document.getElementById('electricity-rate').value);

    if (isNaN(lifetime) || isNaN(powerConsumption) || isNaN(filterCost) || isNaN(electricityRate)) {
        alert('请填写所有的字段!');
        return;
    }

    // 计算年度成本
    const annualCost = (powerConsumption * electricityRate) + filterCost;

    // 计算节能率（假设节能率为20%）
    const energySavings = 20; // 固定节能率为20%

    // 更新计算结果显示
    document.getElementById('annual-cost').textContent = annualCost.toFixed(2);
    document.getElementById('energy-savings').textContent = energySavings.toFixed(2);

    // 更新图表数据
    energyChart.data.labels.push('更新');
    energyChart.data.datasets[0].data.push(annualCost); // 使用年度成本作为图表数据
    energyChart.update();
}