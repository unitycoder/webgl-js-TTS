mergeInto(LibraryManager.library, 
{
  readTextAloud: function(textPtr, rate, pitch, langPtr) 
  {
    var text = UTF8ToString(textPtr);
    var lang = UTF8ToString(langPtr);

    var utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = lang;
    utterance.pitch = pitch;
    utterance.rate = rate;

    window.speechSynthesis.speak(utterance);
  },
  
  GetVoices: function() {
    var voices = window.speechSynthesis.getVoices();
    var voicesList = voices.map(voice => `${voice.name},${voice.lang}`).join(';');

    var bufferSize = lengthBytesUTF8(voicesList) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(voicesList, buffer, bufferSize);

    return buffer;
  }
  
});
