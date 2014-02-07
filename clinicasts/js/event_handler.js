/**
 * 
 *This javascript file contains functions to handle different events
 *@author Niraj Rajbhandari
 */
$(function() {
    $event_handler = {
        /**
         * runs different functions when the document is ready
         * @returns {bool} true
         */
        onPageLoad: function() {
            var defaultHospital = $("#hospital").val();
            var defaultCancer = $('#cancer').val();

            $global_variables.setGlobalVariable('hospital', defaultHospital);
            $global_variables.setGlobalVariable('cancer', defaultCancer);
            $global_variables.setGlobalVariable('activeTab', 'over-all-cost');

            $html_loader.loadHeadingHospitalAndCancer(defaultHospital, defaultCancer);
            $html_loader.loadSummaryReport(defaultHospital, defaultCancer);
            /**
             * changes tab to cost analysis page 
             */
            $(document).on('click', '#analysis-cost', function() {

                var hospital = $("#hospital").val();
                var cancer = $('#cancer').val();

                $html_loader.loadCostAnalysisOverAllCost(hospital, cancer);
                $html_loader.loadHeadingHospitalAndCancer(hospital, cancer);

                $(this).tab('show');
            });
            /**
             * changes tab to staff performance page
             */
            $(document).on('click', '#performance-staff', function() {

                var hospital = $("#hospital").val();
                var cancer = $('#cancer').val();

                $html_loader.loadStaffPerformance(hospital, cancer);
                $html_loader.loadHeadingHospitalAndCancer(hospital, cancer);

                $(this).tab('show');
            });
            /**
             * changes tab to summary report page
             */
            $(document).on('click', '#report-summary', function() {

                var hospital = $("#hospital").val();
                var cancer = $('#cancer').val();

                $html_loader.loadHeadingHospitalAndCancer(hospital, cancer);
                $html_loader.loadSummaryReport(hospital, cancer);

                $(this).tab('show');
            });

            /**
             * executes when type of cancer is changed
             */
            $(document).on('change', 'select#cancer', function() {
                var selectHospital = $('#hospital').val();
                var selectCancer = $('#cancer').val();

                $global_variables.setGlobalVariable('hospital', selectHospital);
                $global_variables.setGlobalVariable('cancer', selectCancer);
                var dataIndex = $global_variables.getDataIndex(selectHospital, selectCancer);
                $html_loader.setTotalCostIncome(dataIndex);
                $html_loader.loadHeadingHospitalAndCancer(selectHospital, selectCancer);
                $html_loader.loadSummaryReport(selectHospital, selectCancer);
                $html_loader.loadStaffPerformance(selectHospital, selectCancer);
                $html_loader.loadCostAnalysisOverAllCost();
            });

            /**
             * executes when the hospital is changed
             */
            $(document).on('change', 'select#hospital', function() {
                var selectHospital = $('#hospital').val();
                var selectCancer = $('#cancer').val();

                $global_variables.setGlobalVariable('hospital', selectHospital);
                $global_variables.setGlobalVariable('cancer', selectCancer);
                var dataIndex = $global_variables.getDataIndex(selectHospital, selectCancer);
                $html_loader.setTotalCostIncome(dataIndex);
                $html_loader.loadHeadingHospitalAndCancer(selectHospital, selectCancer);
                $html_loader.loadSummaryReport(selectHospital, selectCancer);
                $html_loader.loadStaffPerformance(selectHospital, selectCancer);
                $html_loader.loadCostAnalysisOverAllCost();

            });

            $(document).on('click', '#categories li', function() {
                $('#categories li').removeClass('active');
                $(this).addClass('active');
                var category = $(this).text();

//                var department = $('#department').val();
                var hospital = $('#hospital').val();
                var cancer = $('#cancer').val();
                var dataIndex = $global_variables.getDataIndex(hospital, cancer);
                var costDepartment = $global_variables.getCostDepartment(dataIndex);
                var incomeDepartment=$global_variables.getIncomeDepartment(dataIndex);
                var costDepartmentByCategory = costDepartment[category];
                var incomeDepartmentByCategory=incomeDepartment[category];
                
                var pieChartData = $global_variables.getPieChartData(costDepartmentByCategory);
                var barChartData = $global_variables.getBarChartDataForNetIncome(incomeDepartmentByCategory);
                
                console.log('pie');
                console.log(pieChartData);
                console.log('bar');
                console.log(barChartData);
                $html_loader.loadPieChart(pieChartData, category);
                $html_loader.loadBarChartForNetIncome(barChartData);

                $html_loader.loadDepartmentDropList(category);

                $html_loader.loadDepartmentCostTable(costDepartmentByCategory,category);
                $html_loader.loadTopCost(costDepartmentByCategory);
                
                $html_loader.loadDepartmentIncomeTable(incomeDepartmentByCategory,category);
                $html_loader.loadTopNetIncome(incomeDepartmentByCategory);
            });
            $(document).on('change', '.department', function() {
                var department = $(this).val();
                var hospital = $('#hospital').val();
                var cancer = $('#cancer').val();
                var category = $('#categories li.active').text();
                $html_loader.loadSubDepartmentTableForOverAllCost(hospital, cancer, department, category);
            });

            $(document).on('click', '.over-all-cost', function() {
                var category = $('#categories li.active').text();
                $('.overall-cost-tab').css('display', '');

                $global_variables.setGlobalVariable('activeTab', 'over-all-cost');
                $html_loader.loadCostAnalysisOverAllCost();

            });
            $(document).on('click', '.net-income', function() {
                $html_loader.loadCostAnalysisNetIncome();
            });


        }
    };
});


