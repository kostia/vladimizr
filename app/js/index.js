var remote = require('remote');
var ipc = require('ipc');

var map = {
  "A"   : "А",
  "a"   : "а",
  "B"   : "Б",
  "b"   : "б",
  "V"   : "В",
  "v"   : "в",
  "G"   : "Г",
  "g"   : "г",
  "D"   : "Д",
  "d"   : "д",
  "E"   : "Е",
  "e"   : "е",
  "Jo"  : "Ё",
  "jo"  : "ё",
  "Zh"  : "Ж",
  "zh"  : "ж",
  "Z"   : "З",
  "z"   : "з",
  "I"   : "И",
  "i"   : "и",
  "J"   : "Й",
  "j"   : "й",
  "K"   : "К",
  "k"   : "к",
  "L"   : "Л",
  "l"   : "л",
  "M"   : "М",
  "m"   : "м",
  "N"   : "Н",
  "n"   : "н",
  "O"   : "О",
  "o"   : "о",
  "P"   : "П",
  "p"   : "п",
  "R"   : "Р",
  "r"   : "р",
  "S"   : "С",
  "s"   : "с",
  "T"   : "Т",
  "t"   : "т",
  "U"   : "У",
  "u"   : "у",
  "F"   : "Ф",
  "f"   : "ф",
  "Kh"  : "Х",
  "kh"  : "х",
  "Ts"  : "Ц",
  "ts"  : "ц",
  "Ch"  : "Ч",
  "ch"  : "ч",
  "Sh"  : "Ш",
  "sh"  : "ш",
  "Sch" : "Щ",
  "sch" : "щ",
  "#"   : "ъ",
  "Y"   : "Ы",
  "y"   : "ы",
  "'"   : "ь",
  "Je"  : "Э",
  "je"  : "э",
  "Yu"  : "Ю",
  "yu"  : "ю",
  "Ya"  : "Я",
  "ya"  : "я"
};

var translit = require('translit')(map);

var currentWindow = remote.getCurrentWindow();
currentWindow.setResizable(false);

var input = document.getElementById('input');
input.focus();

document.addEventListener('keyup', function(event) {
  if (event.keyCode === 13 && event.shiftKey) {
    var latinText = input.value;
    russianText = translit(latinText);
    input.value = russianText;
    return false;
  }

  if (event.keyCode === 27) {
    remote.getCurrentWindow().hide();
    return false;
  }
});

document.getElementById('quit').addEventListener('click', function() {
  ipc.send('close-main-window');
  return false;
});

document.getElementById('open-github').addEventListener('click', function() {
  require('shell').openExternal('https://github.com/kostia/vladimizr');
  return false;
});
