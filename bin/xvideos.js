#!/usr/bin/env node

var Jetty = require("jetty"),
    optimist = require("optimist"),
    xv = require("xvideos");

var argv = optimist.argv,
    keywords = argv._;

var tty = new Jetty(process.stdout);

var options = {
  k: keywords.join(" "),
  sort: argv.sort || "uploaddate",
  durf: argv.duration || "10min_more",
};

tty.text("Searching for ").bold().text(options.k).normal().text("... ");

xv.search(options, function(err, res) {
  if (err) {
    return console.warn(err);
  }

  tty.text("Got ").bold().text(res.videos.length.toString(10)).normal().text(" results. Getting details...\n\n");

  res.videos.forEach(function(video) {
    xv.details(video.url, function(err, details) {
      if (err) {
        return;
      }

      tty.colour(5).text(details.title).reset().text("\n");
      tty.bold().text(video.url + "\n").normal();
      tty.text("[ " + details.tags.join(", ") + " ]\n");
      tty.text("\n");
    });
  });
});
