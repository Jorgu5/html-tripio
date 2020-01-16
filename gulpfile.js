var gulp = require("gulp");
var sass = require("gulp-sass");
var sassGlob = require("gulp-sass-glob");
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");
var runSequence = require("run-sequence");
var browserSync = require("browser-sync");
var plumberNotifier = require("gulp-plumber-notifier");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var lost = require("lost");
var bower = require("gulp-bower");

var path = {
	src_assets: "src/assets/",
	src_html: "src/html/",
	src_css: "src/css/",
	src_img: "src/assets/img/",
	src_fonts: "src/assets/fonts/",
	src_icons: "src/assets/icons/",
	src_sprite: "src/assets/img/sprite/*.png",

	dist: "./dist/",
	dist_html: "./dist/",
	dist_css: "./dist/css/",
	dist_img: "./dist/img/",
	dist_fonts: "./dist/fonts/",
	bower: "./dist/js/libs/"
};

gulp.task("css", function() {
	return gulp
		.src([
			path.src_css + "**/*.scss",
			"!" + path.src_css + "**/**/_**/*.scss",
			"!" + path.src_css + "_**/*.scss",
			"!" + path.src_css + "_**/**/*.scss",
			"!" + path.src_css + "**/_*.scss"
		])
		.pipe(plumberNotifier())
		.pipe(sassGlob())
		.pipe(
			sass({
				includePaths: [
					path.bower + "breakpoint-sass/stylesheets",
					path.bower + "breakpoint-slicer/stylesheets"
				],
				outputStyle: "compressed"
			})
		)
		.pipe(postcss([lost(), autoprefixer()]))
		.pipe(gulp.dest(path.dist_css));
});

gulp.task("html", function() {
	return gulp
		.src([path.src_html + "*.html", path.src_html + "**/*/*.html"])
		.pipe(gulp.dest(path.dist_html));
});

gulp.task("imagemin", function() {
	return gulp
		.src(path.src_img + "**.{gif,jpg,png,svg}")
		.pipe(
			imagemin({
				progressive: true,
				// svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			})
		)
		.pipe(gulp.dest(path.dist_img));
});

gulp.task("bower", function() {
	return bower();
});

gulp.task("browserSync", function() {
	return browserSync({
		notify: true,
		server: {
			baseDir: [path.dist_html]
		}
	});
});

gulp.task("watch", function() {
	gulp.start("browserSync");
	gulp.watch(
		[path.src_css + "**/*.scss", path.src_css + "**/**/*.scss"],
		["css", browserSync.reload]
	);
	gulp.watch(
		[path.src_html + "*.html", path.src_html + "**/*.html"],
		["html", browserSync.reload]
	);
});

gulp.task("default", function(cb) {
	runSequence("bower", "html", "css", "imagemin", cb);
});
