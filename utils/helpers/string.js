import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);
const timeAgoInstance = new TimeAgo('en-US');

String.prototype.timeAgo = function() {
    try {
        const date = new Date(this.toString());
        return timeAgoInstance.format(date);
    } catch(e) {
        console.error("ago err", e);
        return;
    }
}

String.prototype.dueOn = function() {
    try {
        const date = new Date(this.toString());
        return date.toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" });
    } catch(e) {
        console.error("due err", e);
        return;
    }
}

String.prototype.truncate = function(at = 100) {
    const _thisString = this.toString();
    return (_thisString.length > at && `${[..._thisString].slice(0, at).join("")}...` || _thisString);
}