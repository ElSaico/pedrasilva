const osmd = require('opensheetmusicdisplay');

const openSheetMusicDisplay = new osmd.OpenSheetMusicDisplay('osmd');
openSheetMusicDisplay.setOptions({
    backend: "svg",
});
openSheetMusicDisplay
    .load("media/The Decisive Battle.mxl")
    .then(() => openSheetMusicDisplay.render());