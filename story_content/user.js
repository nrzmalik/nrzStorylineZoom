function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gCidZvtdk3":
        Script1();
        break;
      case "6IfglUyyJ04":
        Script2();
        break;
      case "5qFzfx9FJ6Z":
        Script3();
        break;
      case "6guZm4W8SQp":
        Script4();
        break;
      case "6jAB0rjvZlb":
        Script5();
        break;
      case "68gPggOi4lK":
        Script6();
        break;
      case "6RuG2robxeT":
        Script7();
        break;
      case "6pV5paKWL61":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function appendScripts() {
  const head = document.head;
  const scriptUrls = [
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/4.0.0-beta/jquery.js',
    'https://cdn.jsdelivr.net/gh/nrzmalik/noraiz/nrzZoom.js'
  ];

  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      head.appendChild(script);
    });
  };

  const loadAllScripts = async () => {
    for (const url of scriptUrls) {
      await loadScript(url);
    }
    console.log('All scripts are loaded');
    // Now you can execute your code dependent on these scripts here
  };

  loadAllScripts();
}

appendScripts();

}

window.Script2 = function()
{
  nrzZoom("7");
}

window.Script3 = function()
{
  nrzZoom("5");
}

window.Script4 = function()
{
  nrzZoom("1");
}

window.Script5 = function()
{
  nrzZoom("6");
}

window.Script6 = function()
{
  nrzZoom("3");
}

window.Script7 = function()
{
  nrzZoom("2");
}

window.Script8 = function()
{
  nrzZoom("4");
}

};
