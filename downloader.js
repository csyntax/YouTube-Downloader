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
	if(error){
		console.log(err);
	}
    var file = folder + video.title + ".mp4";

    console.log("Downloading Video: " + video.title);

    ytdl(argv.video).pipe(fs.createWriteStream(file));
});