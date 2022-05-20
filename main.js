
var showtext = "/sdcard/xingyujie/toastlauncher/showtext.txt";
var file = open(showtext);
var get_text = file.read();
alert(get_text)
file.close();
//GET LAUNCHER package name
var launcherpack = "/sdcard/xingyujie/toastlauncher/launcher.conf";
var file = open(launcherpack);
var getpackagename = file.read();
print(getpackagename)
file.close();
var result = shell("am start -n " + getpackagename, true);
log(result);
//console.show();
if(result.code == 0){
toast("OK");
}else{
toast("Failed");
}
file.close();
