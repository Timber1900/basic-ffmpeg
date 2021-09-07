module.exports = {
  ffmpeg: process.platform === "win32" ? `${__dirname}\\ffmpeg-win.exe` : process.platform === "darwin" ? `${__dirname}\\ffmpeg-osx` : `${__dirname}\\ffmpeg-linux`
}
