
export function formatDuration(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    var formattedDuration = "";

    if (hours > 0) {
        formattedDuration += hours + " hr ";
    }

    if (minutes > 0) {
        formattedDuration += minutes + " min ";
    }

    if (remainingSeconds > 0 || formattedDuration === "") {
        formattedDuration += remainingSeconds + " sec";
    }

    return formattedDuration;
}