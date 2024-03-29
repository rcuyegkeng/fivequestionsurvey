// $Id: surveysettings.js 9060 2010-08-12 12:42:14Z c_schmitz $

$(document).ready(function(){
    $("#template").change(templatechange);
    $("#template").keyup(templatechange);
    $("#copysurveyform").submit(copysurvey);
});

function templatechange()
{
    standardtemplates=['basic','bluengrey','business_grey','clear_logo','default','eirenicon','limespired','mint_idea','sherpa','vallendar'];
    if (in_array(this.value,standardtemplates))
    {
        $("#preview").attr('src',standardtemplaterooturl+'/'+this.value+'/preview.png');
    }
    else
    {
        $("#preview").attr('src',templaterooturl+'/'+this.value+'/preview.png');
    } 
}

function copysurvey()
{
    sMessage='';
    if ($('#copysurveylist').val()=='')
    {
        sMessage = sMessage+sSelectASurveyMessage;
    }
    if ($('#copysurveyname').val()=='')
    {
        sMessage = sMessage+'\n\r'+sSelectASurveyName;
    }
    if (sMessage!='')
    {
       alert(sMessage); 
       return false; 
    }
}

function in_array (needle, haystack, argStrict) {

    var key = '', strict = !!argStrict;

    if (strict) {
        for (key in haystack) {
            if (haystack[key] === needle) {
                return true;
            }
        }
    } else {
        for (key in haystack) {
            if (haystack[key] == needle) {
                return true;
            }
        }
    }

    return false;
}