function covfefe(string) {
    if (string.includes("coverage")) {
        return string.replace(/coverage/g, "covfefe");
    } else {
        return string + " covfefe";
    }
}