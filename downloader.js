var fs = require("fs");
var argv = require("commander");
var ytdl = require("ytdl-core");
var folder = "./videos/";

argv
    .version('1.0.0')
    .option('-v, --video <path>', 'YouTube Video URL')
    .parse(process.argv);

if(!(fs.existsSync(folder))) {
    fs.mkdirSync(folder);
}

ytdl.getInfo(argv.video, function(error, video) {
    var file = folder + video.title + ".mp4";

    ytdl(argv.video).pipe(fs.createWriteStream(file));

    console.log("Downloading Video: " + video.title);
});
