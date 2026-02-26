let energyChart; // 用于保存图表的引用

// 初始化图表
function initChart() {
    const ctx = document.getElementById('energyChart').getContext('2d');
    
    energyChart = new Chart(ctx, {
        type: 'line', // 折线图
        data: {
            labels: ['开始'], // 初始标签
            datasets: [{
                label: '年度成本与节能率',
                data: [0], // 初始数据为0
                borderColor: '#DB0812', // 品牌红色
                fill: false,
                tension: 0.2, // 设置曲线的平滑度
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            animations: {
                tension: {
                    duration: 1000, // 动画持续时间
                    easing: 'easeInOutQuad', // 动画效果
                    from: 1,  // 从这个值开始
                    to: 0,    // 动画结束时
                    loop: true // 循环动画
                }
            }
        }
    });
}

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

// 初始化图表
initChart();