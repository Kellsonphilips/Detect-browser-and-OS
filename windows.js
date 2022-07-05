

const browserDetails = document.getElementById("browserType")
const osDetails = document.getElementById("osType");

const browserList = [
    {name: "Chrome", value: "Chrome"},
    {name: "Edge", value: "Edge"},
    {name: "Firefox", value: "Firefox"},
    {name: "Opera", value: "Opera"},
    {name: "Safari", value: "Safari"},
    {name: "Brave", value: "Brave"},
    {name: "Vivaldi", Value: "Vivaldi"}
];


const osList = [
    { name: "Android", value: "Android" },
    { name: "iOS", value: "iOS" },
    { name: "Linux", value: "Linux" },
    { name: "ipad", value: "ipad" },
    { name: "Macintosh", value: "Mac" },
    { name: "Windows", value: "Win" },
];

const browserChecker = () => {
    let userDetails = navigator.userAgent;
    for (let i in browserList) {
        if (userDetails.includes(browserList[i].value)) {
            browserDetails.innerHTML = browserList[i].name || "Unknown Browser";
            break;
        }
    }

    for (let i in osList) {
        if (userDetails.includes(osList[i].value)) {
            osDetails.innerHTML = osList[i].name;
            break;
        }
    }
};

window.onload = browserChecker();