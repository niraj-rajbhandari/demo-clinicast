/**
 * 
 * This page contains all the global variables used in the application and function to get the global variables
 * @author Niraj Rajbhandari
 */
$(function() {
    global_variables = {};
    $global_variables = {
        parameters: ['Cost', 'Outcome', 'Guideline Performance', 'Quality of Life', 'Patient Satisfaction'],
        categories: ["All Categories", "ICU & CCU", "Pharmacy & IV", "Lab & Path", "Blood", "OR/Recovery", "Imaging", "Respiratory Therapy", "Med/Surg", "Implants", "PT/OT/Speech/Audio", "Cardiology", "Supplies & DME", "Other"],
        costDepartmentNames: {
            "All Categories": ["All Department", "N/S FLOORO", "RADIOLOGY SUPPLIES - GENERAL", "PHARMACY COMBINED", "NUCLEAR MEDICINE CHS", "ECG", "ADULT NON-INVASIVE LAB", "RESPIRATORY THERAPY", "RADIOLOGY SUPPLIES - IR", "O.R. - PATIENT CHARGEABLES", "CL-MICRO - SEROLOGY", "CLIN LABS CHEMISTRY", "CL - SUPPORT SERVICES PHLEBOTOMY", "CL-HEM SPECIAL PROCEDURE", "RESPIRATORY THERAPY", "OR SATELLITE LAB", "CLIN LABS MICROBIOLOGY", "CL-CHEM - MOLECULAR PATHOLOGY", "PATHOLOGY HISTOLOGY", "CL- CYTOGENETICS", "PATHOLOGY - IMMUNOLOGY", "CL HEM ALTERNATE SITE TESTING", "CLIN LABS OUTSIDE CHEMISTRY", "PATHOLOGY SURGICAL PATHOLOGY", "CLIN LABS BLOOD BANK", "OPERATING ROOM", "PTU PATIENT PRE-TREATMENT UNIT", "PACU POST ANESTHESIA CARE UNIT", "RADIOLOGY - IR", "MEDICAL PROCEDURES UNIT MP", "NUCLEAR MEDICINE CHS", "N/S FLOORI", "N/S FLOORB", "N/S FLOORO", "OPERATING ROOM/ANESTH SUPPORT", "CLIN LABS BLOOD BANK", "RADIOLOGY SUPPLIES - IR", "PHARMACY COMBINED", "N/S ICUB", "N/S FLOORB", "N/S FLOORF", "N/S ICUD", "RESPIRATORY THERAPY", "SPEECH CLINIC", "PHY/OCC THERAPY - INPATIENT", "RADIOLOGY MRI", "RADIOLOGY DIAGNOSTIC", "RADIOLOGY CT", "RADIOLOGY - IR"],
            "Blood": ["All Department", "CLIN LABS BLOOD BANK"],
            "Cardiology": ["All Department", "ECG", "ADULT NON-INVASIVE LAB"],
            "ICU & CCU": ["All Department", "N/S ICUB", "N/S FLOORB", "N/S FLOORF", "N/S ICUD"],
            "Imaging": ["All Department", "RADIOLOGY MRI", "RADIOLOGY DIAGNOSTIC", "RADIOLOGY CT", "RADIOLOGY - IR"],
            "Implants": ["All Department", "RADIOLOGY SUPPLIES - IR", "O.R. - PATIENT CHARGEABLES"],
            "Lab & Path": ["All Department", "CL-MICRO - SEROLOGY", "CLIN LABS CHEMISTRY", "CL - SUPPORT SERVICES PHLEBOTOMY", "CL-HEM SPECIAL PROCEDURE", "RESPIRATORY THERAPY", "OR SATELLITE LAB", "CLIN LABS MICROBIOLOGY", "CL-CHEM - MOLECULAR PATHOLOGY", "PATHOLOGY HISTOLOGY", "CL- CYTOGENETICS", "PATHOLOGY - IMMUNOLOGY", "CL HEM ALTERNATE SITE TESTING", "CLIN LABS OUTSIDE CHEMISTRY", "PATHOLOGY SURGICAL PATHOLOGY", "CLIN LABS BLOOD BANK"],
            "Med/Surg": ["All Department", "N/S FLOORO"],
            "OR/Recovery": ["All Department", "OPERATING ROOM", "PTU PATIENT PRE-TREATMENT UNIT", "PACU POST ANESTHESIA CARE UNIT", "RADIOLOGY - IR"],
            "Other": ["All Department", "MEDICAL PROCEDURES UNIT MP", "NUCLEAR MEDICINE CHS", "N/S FLOORI", "N/S FLOORB", "N/S FLOORO", "OPERATING ROOM/ANESTH SUPPORT"],
            "PT/OT/Speech/Audio": ["All Department", "RESPIRATORY THERAPY", "SPEECH CLINIC", "PHY/OCC THERAPY - INPATIENT"],
            "Pharmacy & IV": ["All Department", "RADIOLOGY SUPPLIES - GENERAL", "PHARMACY COMBINED", "NUCLEAR MEDICINE CHS"],
            "Respiratory Therapy": ["All Department", "RESPIRATORY THERAPY"],
            "Supplies & DME": ["All Department", "RADIOLOGY SUPPLIES - IR", "PHARMACY COMBINED"]},
        /**
         * variable that contains summary report
         */
        summaryReport: [{"Overall_grade": [75, "60%", "B"], "Cost": [81, '58%', 'C+'], "Survival": [87, '72%', 'B-'], "Guideline Performance": [71, '38%', 'D+'], "Quality of Life": [88, '88%', 'A'], "Patient Satisfaction": [91, '82%', 'A-'], },
            {"Overall_grade": [65, "60%", "C"], "Cost": [86, '63%', 'B'], "Survival": [77, '56%', 'C'], "Guideline Performance": [79, '63%', 'B'], "Quality of Life": [81, '72%', 'B-'], "Patient Satisfaction": [56, '31%', 'D'], },
            {"Overall_grade": [65, "60%", "C"], "Cost": [79, '63%', 'B'], "Survival": [80, '59%', 'C+'], "Guideline Performance": [80, '65%', 'B'], "Quality of Life": [75, '52%', 'C'], "Patient Satisfaction": [68, '31%', 'D'], },
            {"Overall_grade": [75, "60%", "B", ], "Cost": [78, '55%', 'C'], "Survival": [88, '75%', 'B'], "Guideline Performance": [77, '57%', 'C'], "Quality of Life": [84, '73%', 'A-'], "Patient Satisfaction": [89, '76%', 'B'], },
            {"Overall_grade": [65, "60%", "C", ], "Cost": [81, '60%', 'B-'], "Survival": [79, '56%', 'C'], "Guideline Performance": [83, '73%', 'B'], "Quality of Life": [78, '59%', 'C+'], "Patient Satisfaction": [64, '29%', 'D'], },
            {"Overall_grade": [65, "60%", "C", ], "Cost": [80, '60%', 'B-'], "Survival": [80, '63%', 'B'], "Guideline Performance": [77, '57%', 'C'], "Quality of Life": [78, '59%', 'C'], "Patient Satisfaction": [65, '30%', 'D'], },
            {"Overall_grade": [78, "60%", "B+", ], "Cost": [81, '58%', 'C+'], "Survival": [87, '72%', 'B-'], "Guideline Performance": [71, '38%', 'D+'], "Quality of Life": [88, '88%', 'A'], "Patient Satisfaction": [91, '82%', 'A-'], },
            {"Overall_grade": [83, "60%", "A-", ], "Cost": [91, '94%', 'A'], "Survival": [90, '86%', 'A'], "Guideline Performance": [87, '83%', 'A'], "Quality of Life": [86, '80%', 'A-'], "Patient Satisfaction": [76, '55%', 'C'], },
            {"Overall_grade": [65, "60%", "C", ], "Cost": [79, '53%', 'C'], "Survival": [79, '59%', 'C+'], "Guideline Performance": [80, '64%', 'B'], "Quality of Life": [73, '41%', 'C-'], "Patient Satisfaction": [78, '60%', 'B-'], }],
        /**
         * variable that contains object of information for plotting performance over time line graph
         */
        performance: [{"Cost": [88.8725980342, 74.564449239, 81.9009976587, 73.5260164442, 79.7645643584], "Guideline Performance": [65.7234341306, 69.2758883215, 72.5694237102, 74.1804103942, 75.4288570416], "Outcome": [87.9036229846, 86.823997866, 82.0731445336, 79.7961937596, 99.818339232], "Patient Satisfaction": [88.6059850372, 86.4926973195, 90.654801628, 99.24476187, 85.4344076485], "Quality of Life": [91.2853607094, 89.6857732294, 83.4537298309, 87.0117925255, 85.7452983831], },
            {"Cost": [88.5541196255, 79.9942611219, 89.2870446007, 89.6824991993, 87.9688877988], "Guideline Performance": [76.5053990054, 81.1832137231, 88.4054342257, 79.3218753251, 82.3814213364], "Outcome": [67.7408076732, 73.3252557037, 67.1813469426, 70.8414080649, 78.8979124551], "Patient Satisfaction": [57.212088026, 58.4303578471, 57.9419687844, 63.1929589362, 54.826921243], "Quality of Life": [75.7309761, 80.1561447251, 76.9185553111, 85.788116083, 80.4796291095], },
            {"Cost": [71.2036209307, 79.004645648, 67.3128431351, 91.6982969119, 77.8675323931], "Guideline Performance": [75.2747834516, 79.9134022058, 79.1083778679, 73.4115228875, 82.3383841302], "Outcome": [75.1235216163, 67.581848239, 78.694107623, 70.9724036776, 79.96867716], "Patient Satisfaction": [67.5491566672, 69.59498968, 67.046823877, 70.5418691442, 64.5936840874], "Quality of Life": [68.5635201502, 80.5472701238, 72.4499772773, 82.6309654245, 82.3164207004], },
            {"Cost": [75.1251451276, 77.410887438, 77.0835179192, 77.6503262189, 71.1653764842], "Guideline Performance": [76.4757918282, 77.9134670091, 75.4272528347, 68.0725198307, 79.7602407541], "Outcome": [82.895836174, 88.4108715531, 86.7327035209, 80.0826917498, 93.1496044867], "Patient Satisfaction": [87.5575560538, 75.6413685122, 91.7685669136, 86.5382764001, 96.4629225119], "Quality of Life": [77.1364597853, 86.2330668178, 76.3616912276, 80.1947889817, 96.302550439], },
            {"Cost": [79.8464857573, 81.8635513981, 79.1707662807, 85.5585297988, 87.1196472109], "Guideline Performance": [83.7681751111, 96.5334871459, 89.3391194654, 80.3272274872, 86.9087893527], "Outcome": [72.3855040463, 70.1277649322, 68.9253011697, 76.0050528256, 75.303457701], "Patient Satisfaction": [57.6482839396, 68.7966230821, 66.3372554937, 59.5436135524, 60.805938304], "Quality of Life": [77.8102133739, 80.5526457055, 71.6299733601, 80.9593333889, 78.629108899], },
            {"Cost": [77.3117442608, 82.7117662932, 76.066683731, 80.5654749487, 79.367911131], "Guideline Performance": [76.1348139492, 77.0392538211, 79.7765075553, 81.409258414, 82.9182783191], "Outcome": [86.1779500434, 85.9848272723, 77.1145032682, 76.1361442565, 84.1393892506], "Patient Satisfaction": [63.4220132382, 68.4167857593, 66.0888774293, 65.2036458029, 70.4311933494], "Quality of Life": [81.862814702, 79.6884017183, 72.7032468046, 79.7896576486, 75.2720091558], },
            {"Cost": [82.313808811, 84.0149239786, 83.9307817414, 80.1185822378, 72.8533873237], "Guideline Performance": [73.5445371569, 61.5987948765, 63.9801404826, 63.9487955543, 68.7953613674], "Outcome": [91.5357540664, 88.7673337942, 84.2950331836, 89.5615643142, 87.4758665916], "Patient Satisfaction": [94.431612909, 87.1816693388, 96.2972144219, 95.4457434286, 99.667679852], "Quality of Life": [87.6193991296, 85.0826064289, 93.5702785983, 92.1723679056, 93.1607194195], },
            {"Cost": [91.9232220923, 91.3816795547, 93.3523312992, 92.4741926435, 91.7534174269], "Guideline Performance": [88.681924027, 89.9783285605, 87.9295580466, 88.3676200593, 87.9846315452], "Outcome": [90.0368470341, 91.8809870509, 92.4663395487, 90.6649071029, 91.1132711031], "Patient Satisfaction": [77.9757657688, 78.1259877246, 76.3433483432, 77.4878733968, 76.6221684941], "Quality of Life": [87.0847891322, 87.0457003382, 88.8640986774, 86.3696522049, 88.2560087302], },
            {"Cost": [98.1411263848, 95.1814421618, 94.5670461498, 90.8840728185, 93.6917867536], "Guideline Performance": [80.1357110772, 84.8623046682, 88.4515296541, 87.5110189279, 90.2696098229], "Outcome": [84.3145834833, 99.386692449, 96.8687669203, 89.1161927123, 86.5962022248], "Patient Satisfaction": [87.7653573606, 76.0892431601, 75.8760566416, 72.8759774698, 77.1503874632], "Quality of Life": [80.3073029692, 86.1403020248, 89.0829219476, 87.457624351, 82.7516583218], }],
        /**
         * variable that contains staff performance information to plot graph
         */
        staffPerformance: [{"Cost": [75, 97, 74, 89, 89], "Outcome": [95, 88, 100, 88, 90], "Quality of Life": [87, 95, 59, 87, 80], "Guideline Performance": [77, 74, 62, 61, 66], "Patient Satisfaction": [94, 93, 86, 89, 100], },
            {"Cost": [88, 99, 74, 97, 100], "Outcome": [71, 87, 77, 93, 82], "Quality of Life": [78, 95, 97, 84, 100], "Guideline Performance": [92, 81, 97, 84, 77], "Patient Satisfaction": [54, 78, 68, 38, 92], },
            {"Cost": [83, 90, 75, 92, 64], "Outcome": [70, 87, 96, 80, 93], "Quality of Life": [70, 80, 70, 65, 66], "Guideline Performance": [77, 87, 84, 76, 89], "Patient Satisfaction": [72, 63, 60, 80, 65], },
            {"Cost": [69, 73, 91, 73, 73], "Outcome": [93, 88, 100, 93, 94], "Quality of Life": [71, 89, 92, 100, 72], "Guideline Performance": [69, 85, 82, 72, 59], "Patient Satisfaction": [95, 88, 93, 79, 100], },
            {"Cost": [89, 79, 95, 96, 96], "Outcome": [68, 85, 90, 75, 77], "Quality of Life": [69, 64, 79, 82, 84], "Guideline Performance": [88, 93, 76, 94, 75], "Patient Satisfaction": [57, 59, 61, 73, 58], },
            {"Cost": [71, 79, 100, 93, 85], "Outcome": [78, 87, 87, 85, 83], "Quality of Life": [87, 84, 70, 91, 88], "Guideline Performance": [81, 63, 83, 79, 83], "Patient Satisfaction": [63, 62, 65, 57, 74], },
            {"Cost": [88, 84, 88, 72, 69], "Outcome": [74, 91, 98, 92, 81], "Quality of Life": [85, 89, 100, 91, 77], "Guideline Performance": [58, 91, 74, 60, 76], "Patient Satisfaction": [100, 93, 92, 91, 86], },
            {"Cost": [76, 88, 82, 93, 95], "Outcome": [88, 100, 84, 75, 97], "Quality of Life": [100, 100, 70, 83, 82], "Guideline Performance": [85, 90, 94, 89, 96], "Patient Satisfaction": [81, 74, 91, 59, 64], },
            {"Cost": [79, 88, 72, 68, 91], "Outcome": [64, 77, 98, 85, 69], "Quality of Life": [65, 75, 77, 58, 84], "Guideline Performance": [81, 66, 82, 91, 94], "Patient Satisfaction": [53, 56, 64, 70, 71], }],
        /**
         * array of staff
         */
        Colleague: ['You', 'Colleague 2', 'Colleague 3', 'Colleague 4', 'Colleague 5'],
        /**
         * percentage information for performance over time
         */
        percentageDataPerformance: [{"0-percent": {"from": 0, "to": 8}, "10-percent": {"from": 8, "to": 48}, "25-percent": {"from": 48, "to": 70}, "50-percent": {"from": 70, "to": 89}, "75-percent": {"from": 89, "to": 95}, "90-percent": {"from": 95, "to": 100}},
            {"0-percent": {"from": 0, "to": 13}, "10-percent": {"from": 13, "to": 50}, "25-percent": {"from": 50, "to": 76}, "50-percent": {"from": 76, "to": 88}, "75-percent": {"from": 88, "to": 95}, "90-percent": {"from": 95, "to": 100}},
            {"0-percent": {"from": 0, "to": 15}, "10-percent": {"from": 15, "to": 25}, "25-percent": {"from": 25, "to": 74}, "50-percent": {"from": 74, "to": 83}, "75-percent": {"from": 83, "to": 97}, "90-percent": {"from": 97, "to": 100}},
            {"0-percent": {"from": 0, "to": 8}, "10-percent": {"from": 8, "to": 48}, "25-percent": {"from": 48, "to": 72}, "50-percent": {"from": 72, "to": 89}, "75-percent": {"from": 89, "to": 95}, "90-percent": {"from": 95, "to": 100}},
            {"0-percent": {"from": 0, "to": 13}, "10-percent": {"from": 13, "to": 60}, "25-percent": {"from": 60, "to": 80}, "50-percent": {"from": 80, "to": 86}, "75-percent": {"from": 86, "to": 92}, "90-percent": {"from": 92, "to": 100}}],
        /**
         * percentage information for staff performance
         */
        percentageDataStaffPerformance: [{"0-percent": {"from": 0, "to": 8}, "10-percent": {"from": 8, "to": 48}, "25-percent": {"from": 48, "to": 70}, "50-percent": {"from": 70, "to": 89}, "75-percent": {"from": 89, "to": 95}, "90-percent": {"from": 95, "to": 100}},
            {"0-percent": {"from": 0, "to": 13}, "10-percent": {"from": 13, "to": 50}, "25-percent": {"from": 50, "to": 76}, "50-percent": {"from": 76, "to": 88}, "75-percent": {"from": 88, "to": 95}, "90-percent": {"from": 95, "to": 100}},
            {"0-percent": {"from": 0, "to": 15}, "10-percent": {"from": 15, "to": 25}, "25-percent": {"from": 25, "to": 74}, "50-percent": {"from": 74, "to": 83}, "75-percent": {"from": 83, "to": 97}, "90-percent": {"from": 97, "to": 100}},
            {"0-percent": {"from": 0, "to": 8}, "10-percent": {"from": 8, "to": 48}, "25-percent": {"from": 48, "to": 72}, "50-percent": {"from": 72, "to": 89}, "75-percent": {"from": 89, "to": 95}, "90-percent": {"from": 95, "to": 100}},
            {"0-percent": {"from": 0, "to": 13}, "10-percent": {"from": 13, "to": 60}, "25-percent": {"from": 60, "to": 80}, "50-percent": {"from": 80, "to": 86}, "75-percent": {"from": 86, "to": 92}, "90-percent": {"from": 92, "to": 100}}],
        /**
         * gets the index of the data to be retrieved
         * @param {string} hospital name of hospital
         * @param {string} cancer type of cancer
         * @returns {integer} index of the data to retrieve
         */
        getDataIndex: function(hospital, cancer) {
            if (hospital == "All" && cancer == "All") {
                return 0;
            } else if (hospital == "Hospital 1" && cancer == "All") {
                return 1;
            }
            else if (hospital == "Hospital 2" && cancer == "All") {
                return 2;
            }
            else if (hospital == "All" && cancer == "Breast Cancer") {
                return 3;
            }
            else if (hospital == "Hospital 1" && cancer == "Breast Cancer") {
                return 4;
            }
            else if (hospital == "Hospital 2" && cancer == "Breast Cancer") {
                return 5;
            }
            else if (hospital == "All" && cancer == "Lung Cancer") {
                return 6;
            }

            else if (hospital == "Hospital 1" && cancer == "Lung Cancer") {
                return 7;
            }
            else if (hospital == "Hospital 2" && cancer == "Lung Cancer") {
                return 8;
            }

        },
        /**
         * gets parameter name to be displayed in summary report
         * @param {string} parameter name of the parameter
         * @returns {string} name of the parameter to be displayed
         */
        getParameterName: function(parameter) {
            if (parameter == "Cost") {
                return "COST";
            } else if (parameter == "Survival") {
                return "OUTCOME";
            } else if (parameter == "Guideline Performance") {
                return "PROCESS";
            } else if (parameter == "Quality of Life") {
                return "QUALITY OF LIFE";
            } else if (parameter == "Patient Satisfaction") {
                return "PATIENT SATISFACTION";
            } else if (parameter == "Overall_grade") {
                return "Overall Grade";
            }
        },
        getGeneralParameterName: function(parameter) {
            if (parameter == "Cost") {
                return "Cost";
            } else if (parameter == "Outcome" || parameter == "Survival") {
                return "Outcome";
            } else if (parameter == "Guideline Performance" || parameter == "Process") {
                return "Process";
            } else if (parameter == "Quality of Life") {
                return "Quality of Life";
            } else if (parameter == "Patient Satisfaction") {
                return "Patient Satisfaction";
            } else if (parameter == "Overall_grade") {
                return "Overall Grade";
            }
        },
        getParameterNameWithoutSpace: function(parameter) {
            parameter = parameter.replace(/ /g, "-");
            return parameter;
        },
        getCostDepartment: function(index) {
            return $cost_department[index];
        },
        getIncomeDepartment: function(index) {
            return $income_department[index];
        },
                
        getSubDepartmentCost: function(index) {
            if (index >= 0 && index <= 8) {
                return $sub_department_cost.subDepartmentCosts_0;
            } else if (index == 1) {
                return $sub_department_cost.subDepartmentCosts_1;
            } else if (index == 2) {
                return $sub_department_cost.subDepartmentCosts_2;
            } else if (index == 3) {
                return $sub_department_cost.subDepartmentCosts_3;
            } else if (index == 4) {
                return $sub_department_cost.subDepartmentCosts_4;
            } else if (index == 5) {
                return $sub_department_cost.subDepartmentCosts_5;
            } else if (index == 6) {
                return $sub_department_cost.subDepartmentCosts_6;
            } else if (index == 7) {
                return $sub_department_cost.subDepartmentCosts_7;
            } else if (index == 8) {
                return $sub_department_cost.subDepartmentCosts_8;
            }
        },
        /**
         * gets the total cost for given hospital, cancer combination
         * @param {string} hospital
         * @param {string} cancer
         * @returns {String} total cost to be displayed on the tab
         */
        getOverAllCost: function(hospital, cancer) {
            department = "All Department";
            var dataIndex = $global_variables.getDataIndex(hospital, cancer);
            var subDepartmentCosts = $global_variables.getSubDepartmentCost(dataIndex);
            var totalCost = 0;
            $.each(subDepartmentCosts, function(k, v) {
                totalCost += v['cost'];
            });
            return '$' + totalCost;
        },
        getNetIncome: function(hospital, cancer) {
            department = "All Department";
        },
        /**
         * gets the data set to draw pie chart
         * @param {array} costDepartmentByCategory array of departments by category
         * @returns {array} data sets to draw a pie chart
         */
        getPieChartData: function(costDepartmentByCategory) {
            var pieChartData = [];
            var departmentCount = 0;
            $.each(costDepartmentByCategory, function(k, v) {
                var pieChartContent = [];
                pieChartContent = [v['department'], parseInt(v['cost'])];
                pieChartData[departmentCount] = pieChartContent;
                
                departmentCount++;
            });
            return pieChartData;

        },
        getBarChartDataForNetIncome: function(costDepartmentByCategory) {
            var barChartData = [];
            var barChartDepartment = [];
            var barChartIncome = [];
            var departmentCount = 0;
            $.each(costDepartmentByCategory, function(k, v) {
                barChartDepartment[departmentCount] = v['department'];
                var income = parseInt(v['income']);
                if (income < 0) {
                    barChartIncome[departmentCount] = {y: income, color: 'red'};
                } else {
                    barChartIncome[departmentCount] = income;
                }

                departmentCount++;
            });
            barChartData['department'] = barChartDepartment;
            barChartData['income'] = barChartIncome;

            return barChartData;
        },
        /**
         * sets the global variable
         * @param {string} index name of the index to be given to global variable
         * @param {number/string} value value to be stored in global variable
         * @returns {bool} true
         */
        setGlobalVariable: function(index, value) {
            global_variables[index] = value;
        },
        /**
         * get the global variable
         * @param {string} index index of global variable to be retrieved
         * @returns {string} global variable with given index
         */
        getGlobalVariable: function(index) {
            return global_variables[index];
        }
    };
});

