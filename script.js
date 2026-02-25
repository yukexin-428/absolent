function calculateCost() {
    // 获取用户输入的值
    const filterLifetime = parseFloat(document.getElementById('filter-lifetime').value);
    const powerConsumption = parseFloat(document.getElementById('power-consumption').value);
    const filterCost = parseFloat(document.getElementById('filter-cost').value);
    const electricityRate = parseFloat(document.getElementById('electricity-rate').value);

    // 验证输入是否有效
    if (isNaN(filterLifetime) || isNaN(powerConsumption) || isNaN(filterCost) || isNaN(electricityRate)) {
        alert("请输入有效的数字");
        return;
    }

    // 计算年成本
    const annualPowerCost = powerConsumption * electricityRate;
    const annualCost = (filterCost / filterLifetime) + annualPowerCost;

    // 假设有一个节能率的公式（此处为示例，具体公式可根据实际需求调整）
    const oldPowerConsumption = powerConsumption * 1.2; // 假设旧系统的耗电量比新系统多20%
    const energySavings = ((oldPowerConsumption - powerConsumption) / oldPowerConsumption) * 100;

    // 显示结果
    document.getElementById('annual-cost').textContent = annualCost.toFixed(2);
    document.getElementById('energy-savings').textContent = energySavings.toFixed(2);
}