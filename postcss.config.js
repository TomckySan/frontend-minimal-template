module.exports = {
  plugins: [
    require('postcss-simple-vars')(),
    require('postcss-nested')(),
    require('postcss-normalize')(),
    require('autoprefixer')(),
    require('postcss-normalize')(),
    require('cssnano')({
      autoprefixer: false
    })
  ]
}
