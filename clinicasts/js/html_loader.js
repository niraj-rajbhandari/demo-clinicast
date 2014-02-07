/**
 * 
 * This javascript file contains different function to load html content onto a container
 * @author Niraj Rajbhandari
 */

$(function() {
//change number format
    $.fn.digits = function(value) {
        if (typeof value == "undefined") {
            return this.each(function() {
                $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            });
        } else {
            return this.each(function() {
                value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            });
        }

    };
    $html_loader = {
        /**
         * loads the summary report page
         * @param {string} hospital name of hospital
         * @param {string} cancer type of cancer
         * @returns {bool} true
         */
        loadSummaryReport: function(hospital, cancer) {
            var dataIndex = $global_variables.getDataIndex(hospital, cancer);
            var summaryReport = $global_variables.summaryReport[dataIndex];
            var performanceLineGraphPlots = $global_variables.performance[dataIndex];
            var html = "";
            var dialGraph = 0;
            var lineGraph = 1;
            var paramCount = 0;
            $.each(summaryReport, function(k, v) {
                if (paramCount == 0) {
                    html += '<li class="span4">' +
                            '<div class="thumbnail summary-container overall-grade">' +
                            '<div class="dial-graph overall-grade" id="dial-graph-' + $global_variables.getParameterNameWithoutSpace($global_variables.getGeneralParameterName(k)) + '" style="height:180px;width:294px;">' +
                            '</div>' +
                            '<div class="" style="height:100px;width:294px;">' +
                            '<div >' +
                            '<span class="summary-overall-grade offset2">Overall Grade:</span>' +
                            '</div>' +
                            '<div class="clearfix"></div>' +
                            '<div>';
                    if (v[0] < 60) {
                        html += '<span class="overall-grade-value summary-overall-grade-red ">' + v[2] + '</span>';
                    } else if (v[0] >= 60 && v[0] < 75) {
                        html += '<span class="overall-grade-value summary-overall-grade-yellow">' + v[2] + '</span>';
                    } else {
                        html += '<span class="overall-grade-value summary-overall-grade-green ">' + v[2] + '</span>';
                    }
                    html += '</div>' +
                            '</div>' +
                            '</div>' +
                            '</li>';
                } else {
                    html += '<li class="span4">' +
                            '<div class="thumbnail summary-container">' +
                            '<div class="dial-graph" id="dial-graph-' + $global_variables.getParameterNameWithoutSpace($global_variables.getGeneralParameterName(k)) + '" style="height:180px;width:294px;">' +
                            '</div>';
//                            '<span class="summary-report-value">' + v[0] + '%</span>';
                    if (paramCount >= 1) {
                        html += '<div class="line-graph" id="line-graph-' + $global_variables.getParameterNameWithoutSpace($global_variables.getGeneralParameterName(k)) + '" style="height:100px;width:294px;">' +
                                '</div>';
                    }
                    html += '</div></li>';
                }
                paramCount++;
            });
            $('ul.summary-thumbs-container').html('');
            $('ul.summary-thumbs-container').html(html);
            //get dial graph for each parameter
            $.each(summaryReport, function(k, v) {
                $html_loader.loadDialGraph($global_variables.getGeneralParameterName(k), v);
            });
            //get line graph for each parameter
            $.each(performanceLineGraphPlots, function(k, v) {
                if (lineGraph >= 1) {
                    $html_loader.loadLineGraph($global_variables.getGeneralParameterName(k), v);
                }
            });
        },
        /**
         * loads staff performance page
         * @param {string} hospital name of the hospital
         * @param {string} cancer type of cancer
         * @returns {bool} true
         */
        loadStaffPerformance: function(hospital, cancer) {
            var dataIndex = $global_variables.getDataIndex(hospital, cancer);
            var staffPerformance = $global_variables.staffPerformance[dataIndex];
            var staff = $global_variables.Colleague;
            var barChartData = [];
            var staffCount = 0;
            barChartData['Cost'] = [];
            barChartData['Outcome'] = [];
            barChartData['Guideline Performance'] = [];
            barChartData['Quality of Life'] = [];
            barChartData['Patient Satisfaction'] = [];
            $.each(staff, function(k, v) {
                barChartData['Cost'][staffCount] = staffPerformance['Cost'][k];
                barChartData['Outcome'][staffCount] = staffPerformance['Outcome'][k];
                barChartData['Guideline Performance'][staffCount] = staffPerformance['Guideline Performance'][k];
                barChartData['Quality of Life'][staffCount] = staffPerformance['Quality of Life'][k];
                barChartData['Patient Satisfaction'][staffCount] = staffPerformance['Patient Satisfaction'][k];
                staffCount++;
            });
            $html_loader.loadBarChart('Cost', barChartData['Cost'], '#9F4AE0', true);
            $html_loader.loadBarChart('Outcome', barChartData['Outcome'], '#2F7ED8');
            $html_loader.loadBarChart('Guideline Performance', barChartData['Guideline Performance'], '#0D233A');
            $html_loader.loadBarChart('Quality of Life', barChartData['Quality of Life'], '#8BBC21');
            $html_loader.loadBarChart('Patient Satisfaction', barChartData['Patient Satisfaction'], '#1AADCE');
        },
        /**
         * load cost analysis page
         * @param {string} hospital name of hospital
         * @param {string} cancer type of cancer
         * @returns {bool} true
         */
        loadCostAnalysisOverAllCost: function() {
            var hospital = $global_variables.getGlobalVariable('hospital');
            var cancer = $global_variables.getGlobalVariable('cancer');
            var dataIndex = $global_variables.getDataIndex(hospital, cancer);
            var categories = $categories.category[dataIndex];
            $html_loader.loadCategories(categories, active);
            var active = $('#categories li.active').text();
            var costDepartment = $global_variables.getCostDepartment(dataIndex);
            var costDepartmentByCategory = costDepartment[active];
            $html_loader.loadTopCost(costDepartmentByCategory);

            var pieChartData = $global_variables.getPieChartData(costDepartmentByCategory);
            $html_loader.loadDepartmentDropList(active);
            var department = $('#department').val();
//            $html_loader.loadSubDepartmentTableForOverAllCost(hospital, cancer, department, active);
            $html_loader.loadDepartmentCostTable(costDepartmentByCategory, active);
//            var overAllCost = $global_variables.getOverAllCost(hospital, cancer);
            $html_loader.setTotalCostIncome(dataIndex);
            $('.box').removeClass('box-active');
            $('.over-all-cost .box').addClass('box-active');
            $('.net-income-tab').css('display', 'none');
            $('.overall-cost-tab').css('display', '');
//            $html_loader.loadTotalCostPerCategory(active);
            $html_loader.loadPieChart(pieChartData, active);
        },
        loadCostAnalysisNetIncome: function() {
            var hospital = $global_variables.getGlobalVariable('hospital');
            var cancer = $global_variables.getGlobalVariable('cancer');
            var dataIndex = $global_variables.getDataIndex(hospital, cancer);
            var categories = $categories.category[dataIndex];
            $html_loader.loadCategories(categories, active);
            var active = $('#categories li.active').text();
            var incomeDepartment = $global_variables.getIncomeDepartment(dataIndex);
            var incomeDepartmentByCategory = incomeDepartment[active];
            $html_loader.loadTopNetIncome(incomeDepartmentByCategory);

            var barChartData = $global_variables.getBarChartDataForNetIncome(incomeDepartmentByCategory);
            $html_loader.loadDepartmentDropList(active);
//            $html_loader.loadSubDepartmentTableForNetIncome(hospital, cancer, department, active);
            $html_loader.loadDepartmentIncomeTable(incomeDepartmentByCategory, active);
            $('.box').removeClass('box-active');
            $('.net-income .box').addClass('box-active');
            $('.net-income-tab').css('display', '');
            $('.overall-cost-tab').css('display', 'none');
            $html_loader.loadBarChartForNetIncome(barChartData);
        },
        loadTopCost: function(data) {
            var topCost = {};
            topCost['value'] = parseInt(data[0]['cost']);
            topCost['department'] = data[0]['department'];
            $.each(data, function(k, v) {
                if (topCost['value'] < parseInt(v['cost'])) {
                    topCost['value'] = parseInt(v['cost']);
                    topCost['department'] = v['department'];
                }
            });
            $('#top-cost-department-value').text('$' + topCost['value']).digits();
            $('#top-cost-department-level').text(topCost['department']);
        },
        loadTopNetIncome: function(data) {
            var topIncome = {};
            topIncome['value'] = -10000000;
            $.each(data, function(k, v) {
                if (topIncome['value'] < parseInt(v['income'])) {
                    topIncome['value'] = parseInt(v['income'], 10);
                    topIncome['department'] = v['department'];
                }
            });
            console.log(topIncome);
            $('#top-income-department-value').text('$' + topIncome['value']).digits();
            $('#top-income-department-level').text(topIncome['department']);
        },
        loadDepartmentCostTable: function(data, category) {
            var tableRows = "";
            var totalCost = 0;
            $.each(data, function(k, v) {
                tableRows += "<tr><td>" + v['department'] + "</td><td class='department-cost-column' style='text-align:center;'>$" + v['cost'] + "</td></tr>";
                totalCost += parseInt(v['cost'], 10);
            });

            $('#total-cost-in-category-level').html(category);
            $('#total-cost-in-category-value').text('$' + totalCost).digits();
            $('#table0 tbody').html('');
            $('#table0 tbody').html(tableRows);
            $('.department-cost-column').digits();
        },
        loadDepartmentIncomeTable: function(data, category) {
            var tableRows = "";
            var totalIncome = 0;
            $.each(data, function(k, v) {
                tableRows += "<tr><td>" + v['department'] + "</td><td class='department-cost-column' style='text-align:center;'>$" + v['income'] + "</td></tr>";
                totalIncome += v['income'];
            });
            $('#table1 tbody').html('');
            $('#table1 tbody').html(tableRows);

            $('#total-income-in-category-level').html(category);
            $('#total-income-in-category-value').text('$' + totalIncome).digits();
            $('.department-cost-column').digits();
        },
        /**
         * loads the department list as dropdown list in cost analysis page
         * @param {string} category name of category
         * @returns {bool} true
         */
        loadDepartmentDropList: function(category) {
            var departments = $global_variables.costDepartmentNames[category];
            var departmentList = '';
            var departmentCount = 0;
            $.each(departments, function(k, v) {
                if (departmentCount == 0) {
                    departmentList += '<option value="' + v + '" selected>' + v + '</option>';
                } else {
                    departmentList += '<option value="' + v + '">' + v + '</option>';
                }
                departmentCount++;
            });
            $('.department').html('');
            $('.department').html(departmentList);
        },
        loadCategories: function(categories, activeCategory) {
            var categoryList = '';
            $.each(categories, function(k, v) {
                var id = $global_variables.getParameterNameWithoutSpace(v);
                if (k == 0) {
                    categoryList += '<li class="active" id="category-"' + id + '>' + v + '</li>';
                } else {
                    categoryList += '<li class="" id="category-"' + id + '>' + v + '</li>';
                }
            });
            $('#categories').html('');
            $('#categories').html(categoryList);
        },
        /**
         * loads the table of sub deparment for selected department
         * @param {string} hospital name of hospital
         * @param {string} cancer type of cancer
         * @param {string} department name of the department
         * @param {string} category name of the category
         * @returns {bool} true
         */
        loadSubDepartmentTableForOverAllCost: function(hospital, cancer, department, category) {
            if (typeof department == "undefined") {
                department = "All Department";
            }
            var dataIndex = $global_variables.getDataIndex(hospital, cancer);
            var subDepartmentCosts = $global_variables.getSubDepartmentCost(dataIndex);
            var subDepartmentTableRow = '';
            var totalCost = 0;
            if (category == "All Categories") {
                if (department == "All Department") {
                    $.each(subDepartmentCosts, function(k, v) {
                        subDepartmentTableRow += '<tr><td>' + v['subdepartment'] + '</td>' +
                                '<td>' + v['department'] + '</td>' +
                                '<td class="cost-column">$ ' + v['cost'] + '</td></tr>';
                        totalCost += v['cost'];
                    });
                    $global_variables.setGlobalVariable('totalCost', totalCost);
                } else {
                    $.each(subDepartmentCosts, function(k, v) {
                        if (department == v['department']) {
                            subDepartmentTableRow += '<tr><td>' + v['subdepartment'] + '</td>' +
                                    '<td>' + v['department'] + '</td>' +
                                    '<td class="cost-column">$ ' + v['cost'] + '</td></tr>';
                            totalCost += v['cost'];
                        }
                    });
                }
            } else {
                var departmentOfCategory = $global_variables.costDepartmentNames[category];
                if (department == "All Department") {
                    $.each(departmentOfCategory, function(key, value) {
                        $.each(subDepartmentCosts, function(k, v) {
                            if (value == v['department']) {
                                subDepartmentTableRow += '<tr><td>' + v['subdepartment'] + '</td>' +
                                        '<td>' + v['department'] + '</td>' +
                                        '<td class="cost-column">$ ' + v['cost'] + '</td></tr>';
                                totalCost += v['cost'];
                            }
                        });
                    });
                    $global_variables.setGlobalVariable('totalCost', totalCost);
                } else {
                    $.each(subDepartmentCosts, function(k, v) {
                        if (department == v['department']) {
                            subDepartmentTableRow += '<tr><td>' + v['subdepartment'] + '</td>' +
                                    '<td>' + v['department'] + '</td>' +
                                    '<td class="cost-column">$ ' + v['cost'] + '</td></tr>';
                            totalCost += v['cost'];
                        }
                    });
                }
            }

            subDepartmentTableRow += '<tr><td></td><td class="total-level" valign="bottom" style="text-align:center;">Total  </td><td class="cost-number number-large">$ ' + totalCost + '</td></tr>';
            $('.cost-table tbody').html('');
            $('.cost-table tbody').html(subDepartmentTableRow);
            $('.cost-column,.cost-number').digits();
        },
        setTotalCostIncome: function(index) {
            var cost = $over_all_cost_income[index]['cost'];
            var income = $over_all_cost_income[index]['income'];
            $('.overall-cost').text('$' + cost).digits();
            $('.total-net-income').text('$' + income).digits();
        },
        loadSubDepartmentTableForNetIncome: function(department, category) {
            if (typeof department == "undefined") {
                department = "All Department";
            }
            var dataIndex = $global_variables.getDataIndex(hospital, cancer);
            var subDepartmentCosts = $global_variables.getSubDepartmentIncome(dataIndex);
            var subDepartmentTableRow = '';
            var totalCost = 0;
            if (category == "All Categories") {
                if (department == "All Department") {
                    $.each(subDepartmentCosts, function(k, v) {
                        subDepartmentTableRow += '<tr><td>' + v['subdepartment'] + '</td>' +
                                '<td>' + v['department'] + '</td>' +
                                '<td class="cost-column">$ ' + v['income'] + '</td></tr>';
                        totalCost += v['income'];
                    });
                    $global_variables.setGlobalVariable('totalIncome', totalCost);
                } else {
                    $.each(subDepartmentCosts, function(k, v) {
                        if (department == v['department']) {
                            subDepartmentTableRow += '<tr><td>' + v['subdepartment'] + '</td>' +
                                    '<td>' + v['department'] + '</td>' +
                                    '<td class="cost-column">$ ' + v['cost'] + '</td></tr>';
                            totalCost += v['cost'];
                        }
                    });
                }
            } else {
                var departmentOfCategory = $global_variables.costDepartmentNames[category];
                if (department == "All Department") {
                    $.each(departmentOfCategory, function(key, value) {
                        $.each(subDepartmentCosts, function(k, v) {
                            if (value == v['department']) {
                                subDepartmentTableRow += '<tr><td>' + v['subdepartment'] + '</td>' +
                                        '<td>' + v['department'] + '</td>' +
                                        '<td class="cost-column">$ ' + v['cost'] + '</td></tr>';
                                totalCost += v['cost'];
                            }
                        });
                    });
                    $global_variables.setGlobalVariable('totalCost', totalCost);
                } else {
                    $.each(subDepartmentCosts, function(k, v) {
                        if (department == v['department']) {
                            subDepartmentTableRow += '<tr><td>' + v['subdepartment'] + '</td>' +
                                    '<td>' + v['department'] + '</td>' +
                                    '<td class="cost-column">$ ' + v['cost'] + '</td></tr>';
                            totalCost += v['cost'];
                        }
                    });
                }
            }

            subDepartmentTableRow += '<tr><td></td><td class="total-level" valign="bottom" style="text-align:center;">Total  </td><td class="cost-number number-large">$ ' + totalCost + '</td></tr>';
            $('.cost-table tbody').html('');
            $('.cost-table tbody').html(subDepartmentTableRow);
            $('.cost-column,.cost-number').digits();
        },
        /**
         * loads name of hospital and cancer on top left corner of the page
         * @param {string} hospital name of the hospital
         * @param {string} cancer type of cancer
         * @returns {bool} true
         */
        loadHeadingHospitalAndCancer: function(hospital, cancer) {
            $('#hospital-header-value').html('');
            $('#cancer-header-value').html('');
            $('#hospital-header-value').html(hospital);
            $('#cancer-header-value').html(cancer);
        },
        /**
         * loads the total cost for a category on bottom right corner of pie chart
         * @param {string} category name of the category
         * @returns {bool} true
         */
        loadTotalCostPerCategory: function(category) {
            $('#total-cost-in-category-level').html('');
            $('#total-cost-in-category-level').html(category);
            $('#total-cost-in-category-value').html('');
            $('#total-cost-in-category-value').html('$' + $global_variables.getGlobalVariable('totalCost'));
        },
        /**
         * plots a line graph using highcharts
         * @param {string} parameter name of the parameter
         * @param {array} data array of plot points
         * @returns {bool} true
         */
        loadLineGraph: function(parameter, data) {
            var idParameter = $global_variables.getParameterNameWithoutSpace(parameter);
            $('#line-graph-' + idParameter).highcharts({
                title: {
                    text: '',
                    x: -20 //center
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'April', 'May']
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    plotLines: [{
                            value: 0,
                            width: 0.5,
                            color: '#808080'
                        }],
                    plotBands: [{// 0 percentile
                            from: $global_variables.percentageDataPerformance[0]["0-percent"]["from"],
                            to: $global_variables.percentageDataPerformance[0]["90-percent"]["to"],
                            color: '#FAC8CA',
                        },
                        {// 10 percentile
                            from: $global_variables.percentageDataPerformance[0]["10-percent"]["from"],
                            to: $global_variables.percentageDataPerformance[0]["10-percent"]["to"],
                            color: '#FBECE1',
                        },
                        {// 25 percentile
                            from: $global_variables.percentageDataPerformance[0]["25-percent"]["from"],
                            to: $global_variables.percentageDataPerformance[0]["25-percent"]["to"],
                            color: '#B7DCF3',
                        },
                        {// 50 percentile
                            from: $global_variables.percentageDataPerformance[0]["50-percent"]["from"],
                            to: $global_variables.percentageDataPerformance[0]["50-percent"]["to"],
                            color: '#B5DBF5',
                        },
                        {// 75 percentile
                            from: $global_variables.percentageDataPerformance[3]["75-percent"]["from"],
                            to: $global_variables.percentageDataPerformance[3]["75-percent"]["to"],
                            color: '#B5ECF5',
                        },
                        {// 90 percentile
                            from: $global_variables.percentageDataPerformance[0]["90-percent"]["from"],
                            to: 120,
                            color: '#B5F5DB',
                        }]
                },
                tooltip: {
                    valueSuffix: '%'
                },
                legend: {
                    align: 'left',
                    verticalAlign: 'top',
                    y: 17,
                    x: 25,
                    floating: true,
                    borderWidth: 0
                },
                series: [{
                        showInLegend: false,
                        name: $global_variables.getGeneralParameterName(parameter),
                        color: '#2F7ED8',
                        data: data
                    }]
            });
        },
        /**
         * plots a dial guage using highcharts
         * @param {string} parameter name of the parameter
         * @param {array} value values to be plotted
         * @returns {bool} true
         */
        loadDialGraph: function(parameter, value) {
            var idParameter = $global_variables.getParameterNameWithoutSpace(parameter);
            var benchmarkValue = parseInt(value[1].replace('%', ''), 10);
            $('#dial-graph-' + idParameter).highcharts({
                chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                title: {
                    text: parameter
                },
                pane: {
                    startAngle: -110,
                    endAngle: 110,
                    background: [{
                            backgroundColor: {
                                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                                stops: [
                                    [0, '#FFF'],
                                    [1, '#333']
                                ]
                            },
                            borderWidth: 0,
                            outerRadius: '109%'
                        }, {
                            backgroundColor: {
                                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                                stops: [
                                    [0, '#333'],
                                    [1, '#FFF']
                                ]
                            },
                            borderWidth: 1,
                            outerRadius: '107%'
                        }, {
// default background
                        }, {
                            backgroundColor: '#DDD',
                            borderWidth: 0,
                            outerRadius: '105%',
                            innerRadius: '103%',
                        }]
                },
                // the value axis
                yAxis: {
                    min: 0,
                    max: 100,
                    minorTickInterval: 1,
                    minorTickWidth: 1,
                    minorTickLength: 5,
                    minorTickPosition: 'inside',
                    minorTickColor: '#666',
                    tickPixelInterval: 100,
                    tickWidth: 1,
                    tickPosition: 'inside',
                    tickLength: 8,
                    tickColor: '#666',
                    labels: {
                        step: 2,
                        rotation: 'auto'
                    },
                    plotBands: [{
                            from: 0,
                            to: benchmarkValue - 1,
                            color: '#DF5353' // red
                        }, {
                            from: benchmarkValue - 1,
                            to: benchmarkValue + 15,
                            color: '#DDDF0D' // yellow
                        }, {
                            from: benchmarkValue + 15,
                            to: 100,
                            color: '#55BF3B' // green
                        }]
                },
                series: [{
                        name: '',
                        data: [value[0]],
                        dataLabels: {
                            formatter: function() {
                                return '<span style="color:#339">' + value[0] + '</span>';
                            }
                        },
                        tooltip: {
                            valueSuffix: ' %'
                        }
                    }]

            });
        },
        /**
         * plots stacked graph chart for given data
         * @param {array} data array of objects with data to plot stacked bar chart
         * @param {array} categories array of categories to plot stacked bar chart
         * @param {string} title title to be displayed in stacked bar chart
         * @returns {bool} true
         */
        loadStackedChart: function(data, categories, title) {
            if (typeof title == "undefined") {
                title = '';
            }
            $('#staff-performance .stacked-chart').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: title + ' Stacked Bar Chart'
                },
                xAxis: {
                    categories: categories
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Score'
                    }
                },
                legend: {
                    backgroundColor: '#FFFFFF',
                    reversed: true
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                series: data
            });
        },
        /**
         * loads bar chart for given data
         * @param {string} parameter name of the parameter
         * @param {array} data array of data to plot the bar of the chart
         * @param {string} color color to be displayed in bar of the chart
         * @param {string} barLabel label to be displayed in bar chart
         * @returns {bool} true
         */
        loadBarChart: function(parameter, data, color, barLabel) {
            if (typeof color == "undefined") {
                color = '#2F7ED8';
            }
            if (typeof barLabel == "undefined") {
                barLabel = false;
            }
            var idParameter = $global_variables.getParameterNameWithoutSpace(parameter);
            $('#barchart-' + idParameter).highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: $global_variables.getGeneralParameterName(parameter),
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: $global_variables.Colleague,
                    title: {
                        text: null
                    },
                    labels: {enabled: barLabel}
                },
                yAxis: {
                    min: 50,
                    max: 100,
                    title: {
                        text: '',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    },
//                    plotBands: [{// 0 percentile
//                            from: $global_variables.percentageDataPerformance[2]["0-percent"]["from"],
//                            to: $global_variables.percentageDataPerformance[2]["0-percent"]["to"],
//                            color: '#FAC8CA',
//                        },
//                        {// 10 percentile
//                            from: $global_variables.percentageDataPerformance[2]["10-percent"]["from"],
//                            to: $global_variables.percentageDataPerformance[2]["10-percent"]["to"],
//                            color: '#FBECE1',
//                        },
//                        {// 25 percentile
//                            from: $global_variables.percentageDataPerformance[2]["25-percent"]["from"],
//                            to: $global_variables.percentageDataPerformance[2]["25-percent"]["to"],
////                            color: '#FEFDE9',
//                            color:'#B5DBF5'
//                        },
//                        {// 50 percentile
//                            from: $global_variables.percentageDataPerformance[2]["50-percent"]["from"],
//                            to: $global_variables.percentageDataPerformance[2]["50-percent"]["to"],
//                            color: '#B5DBF5',
//                        }, {// 75 percentile
//                            from: $global_variables.percentageDataPerformance[2]["75-percent"]["from"],
//                            to: $global_variables.percentageDataPerformance[2]["75-percent"]["to"],
//                            color: '#B5ECF5',
//                        }, {// 90 percentile
//                            from: $global_variables.percentageDataPerformance[2]["90-percent"]["from"],
//                            to: $global_variables.percentageDataPerformance[2]["90-percent"]["to"],
//                            color: '#B5F5DB',
//                        }]
                },
                tooltip: {
                    valueSuffix: ''
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 100,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF',
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                        showInLegend: false,
                        name: $global_variables.getGeneralParameterName(parameter),
                        color: color,
                        data: data
                    }]
            });
        },
        /**
         * loads a pie chart for given data set
         * @param {array} data array ofdata to draw a pie chart
         * @param {string} category name of the category
         * @returns {bool} true
         */
        loadPieChart: function(data, category) {
            $('.pie-chart').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Cost in ' + category + ' (by Cost Departments)'
                },
                tooltip: {
                    formatter: function() {
                        return  this.x + '<br/>' +
                                '<font color="blue">Net Income:</font> <b>$ ' + Highcharts.numberFormat(this.y, 0) + '</b>';
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            color: '#000000',
                            connectorColor: '#000000',
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                        type: 'pie',
                        name: 'Over All Cost',
                        data: data
                    }]
            });
        },
        loadBarChartForNetIncome: function(data) {
            $('.net-income-chart').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: data['department']
                },
                yAxis: {
                    title: {
                        text: 'Net Income'
                    },
                    labels: {
                        formatter: function() {
                            return '$' + Highcharts.numberFormat(this.value, 0);
                        }
                    }
                },
                tooltip: {
                    formatter: function() {
                        return  this.x + '<br/>' +
                                '<font color="blue">Net Income:</font> <b>$ ' + Highcharts.numberFormat(this.y, 0) + '</b>';
                    }
                },
                colors: [
                    '#41DB04'
                ],
                credits: {
                    enabled: false
                },
                series: [{
                        name: 'Net Income',
//                        data: [572, 306, {y: -62, color: 'red'}, {y: -1259, color: 'red'}]
                        data: data['income'],
                        showInLegend: false
                    }]
            });
        },
    };
});