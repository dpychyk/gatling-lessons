var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1595",
        "ok": "737",
        "ko": "858"
    },
    "minResponseTime": {
        "total": "138",
        "ok": "138",
        "ko": "210"
    },
    "maxResponseTime": {
        "total": "1447",
        "ok": "1447",
        "ko": "1432"
    },
    "meanResponseTime": {
        "total": "342",
        "ok": "296",
        "ko": "381"
    },
    "standardDeviation": {
        "total": "151",
        "ok": "155",
        "ko": "136"
    },
    "percentiles1": {
        "total": "341",
        "ok": "291",
        "ko": "362"
    },
    "percentiles2": {
        "total": "374",
        "ok": "353",
        "ko": "383"
    },
    "percentiles3": {
        "total": "529",
        "ok": "536",
        "ko": "526"
    },
    "percentiles4": {
        "total": "1044",
        "ok": "926",
        "ko": "1296"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 720,
    "percentage": 45
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 13,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 858,
    "percentage": 54
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15.792",
        "ok": "7.297",
        "ko": "8.495"
    }
},
contents: {
"req_get-102230": {
        type: "REQUEST",
        name: "get",
path: "get",
pathFormatted: "req_get-102230",
stats: {
    "name": "get",
    "numberOfRequests": {
        "total": "1226",
        "ok": "369",
        "ko": "857"
    },
    "minResponseTime": {
        "total": "270",
        "ok": "270",
        "ko": "274"
    },
    "maxResponseTime": {
        "total": "1447",
        "ok": "1447",
        "ko": "1432"
    },
    "meanResponseTime": {
        "total": "381",
        "ok": "381",
        "ko": "381"
    },
    "standardDeviation": {
        "total": "141",
        "ok": "150",
        "ko": "136"
    },
    "percentiles1": {
        "total": "359",
        "ok": "348",
        "ko": "362"
    },
    "percentiles2": {
        "total": "382",
        "ok": "377",
        "ko": "383"
    },
    "percentiles3": {
        "total": "538",
        "ok": "575",
        "ko": "526"
    },
    "percentiles4": {
        "total": "1297",
        "ok": "1174",
        "ko": "1296"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 356,
    "percentage": 29
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 9,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 857,
    "percentage": 70
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.139",
        "ok": "3.653",
        "ko": "8.485"
    }
}
    },"req_get-redirect-1--533510121": {
        type: "REQUEST",
        name: "get Redirect 1",
path: "get Redirect 1",
pathFormatted: "req_get-redirect-1--533510121",
stats: {
    "name": "get Redirect 1",
    "numberOfRequests": {
        "total": "369",
        "ok": "368",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "138",
        "ok": "138",
        "ko": "210"
    },
    "maxResponseTime": {
        "total": "979",
        "ok": "979",
        "ko": "210"
    },
    "meanResponseTime": {
        "total": "212",
        "ok": "212",
        "ko": "210"
    },
    "standardDeviation": {
        "total": "106",
        "ok": "106",
        "ko": "0"
    },
    "percentiles1": {
        "total": "191",
        "ok": "191",
        "ko": "210"
    },
    "percentiles2": {
        "total": "224",
        "ok": "224",
        "ko": "210"
    },
    "percentiles3": {
        "total": "355",
        "ok": "355",
        "ko": "210"
    },
    "percentiles4": {
        "total": "822",
        "ok": "823",
        "ko": "210"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 364,
    "percentage": 99
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.653",
        "ok": "3.644",
        "ko": "0.01"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
