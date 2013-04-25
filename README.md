XVideos
=======

Access [xvideos](http://www.xvideos.com/) (WARNING: NSFW) on the command line.

Overview
--------

This application provides a command line interface for searching xvideos.com. It
uses the [xvideos](http://npm.im/xvideos) module to do the heavy lifting.

Installation
------------

Available via [npm](http://npmjs.org/):

> $ npm install xvideos-cli

Or via git:

> $ git clone git://github.com/deoxxa/xvideos-cli.git

Usage
-----

This package provides a single executable, `xvideos`. It is used to interact
with the search function of xvideos.com.

XVideos Usage
-------------

You must provide at least one keyword.

```
$ xvideos [--sort <sort>] [--datef <date filter>] [--durf <duration filter>] <keywords ...>
```

**sort**

The `--sort` option changes how the results from xvideos.com are sorted. The
available sorting options are `rating`, `relevance`, and `uploaddate`. The
default is `uploaddate`.

**datef**

The `--datef` option adds a "date filter" to the query. The available filters
are `all`, `today`, `week`, and `month`. The default is `all`.

**durf**

The `--durf` option adds a "duration filter" to the query. The available filters
are `allduration`, `1-3min`, `3-10min`, and `10min_more`. The default is
`allduration`.

License
-------

3-clause BSD. A copy is included with the source.

Contact
-------

* GitHub ([deoxxa](http://github.com/deoxxa))
* Twitter ([@deoxxa](http://twitter.com/deoxxa))
* ADN ([@deoxxa](https://alpha.app.net/deoxxa))
* Email ([deoxxa@fknsrs.biz](mailto:deoxxa@fknsrs.biz))
