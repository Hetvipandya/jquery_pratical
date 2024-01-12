$(document).ready(function () {
        
    $('#first').click(function () {
        alert('you click on html');
    });

$("#second").click(function(){
     alert('you click on css');
});

$(".odd").click(function(){
    alert('you click on javascript');
});

$(".even").dblclick(function(){
    alert('you double click on jquery');
});

$(".language").mouseenter(function(){
    alert('you entered in botstrap ',this);
});
 
// $("#content").hide(1000, function(){
//     alert('hidden');
// });

$("#btn").click(function(){
    $("#content").toggle(1000);
});

$("#but").click(function(){
    $("#para").fadeOut(1000);
});

$("#up").click(function(){
    $("#wiki").slideUp(1000);
    $("#wiki").slideDown(1000);
});

$("#animate").click(function(){
    $("#ani").animate({
        opacity:0.3,
        height:'150px',
        width:'350px'
  }, 2000);
});

});

$('#demo').datetimepicker({

    ownerDocument: document,
    contentWindow: window,
  
    value: '',
    rtl: false,
  
    format: 'Y/m/d H:i',
    formatTime: 'H:i',
    formatDate: 'Y/m/d',
  
    // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
    startDate:  false, 
  
    step: 60,
    monthChangeSpinner: true,
  
    closeOnDateSelect: false,
    closeOnTimeSelect: true,
    closeOnWithoutClick: true,
    closeOnInputClick: true,
    openOnFocus: true,
  
    timepicker: true,
    datepicker: true,
    weeks: false,
  
    // use formatTime format (ex. '10:00' for formatTime: 'H:i')
    defaultTime: false, 
  
    // use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')
    defaultDate: false, 
  
    minDate: false,
    maxDate: false,
    minTime: false,
    maxTime: false,
    minDateTime: false,
    maxDateTime: false,
  
    allowTimes: [],
    opened: false,
    initTime: true,
    inline: false,
    theme: '',
    touchMovedThreshold: 5,
  
    // callbacks
    onSelectDate: function () {},
    onSelectTime: function () {},
    onChangeMonth: function () {},
    onGetWeekOfYear: function () {},
    onChangeYear: function () {},
    onChangeDateTime: function () {},
    onShow: function () {},
    onClose: function () {},
    onGenerate: function () {},
  
    withoutCopyright: true,
    inverseButton: false,
    hours12: false,
    next: 'xdsoft_next',
    prev : 'xdsoft_prev',
    dayOfWeekStart: 0,
    parentID: 'body',
    timeHeightInTimePicker: 25,
    timepicker:<a href ="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll bar= true</a>,
    todayButton: true,
    prevButton: true,
    nextButton: true,
    defaultSelect: true,
  
    scrollMonth: true,
    scrollTime: true,
    scrollInput: true,
  
    lazyInit: false,
    mask: false,
    validateOnBlur: true,
    allowBlank: true,
    yearStart: 1950,
    yearEnd: 2050,
    monthStart: 0,
    monthEnd: 11,
    style: '',
    id: '',
    fixed: false,
    roundTime: 'round', // ceil, floor
    className: '',
    weekends: [],
    highlightedDates: [],
    highlightedPeriods: [],
    allowDates : [],
    allowDateRe : null,
    disabledDates : [],
    disabledWeekDays: [],
    yearOffset: 0,
    beforeShowDay: null,
  
    enterLikeTab: true,
    showApplyButton: false,
    insideParent: false,

});