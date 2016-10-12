
function alert_icon(){
    if ($("#droplist").html() === "") {
        var circle = document.getElementById('circle');
        $(circle).addClass('hide');
    };

}  
//for removing dom element
    function remove(id) {
        $(id).remove();
        alert_icon();
    }
//delete icon generator
    function deleteicon(dismiss){
        var icon = '<svg class="deleteicon" ';
            icon += 'onclick="remove(';
            icon += dismiss;
            icon += ')"';
            icon += ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.4 490.4" enable-background="new 0 0 490.4 490.4"><path d="M245.2 490.4c135.2 0 245.2-110 245.2-245.2s-110-245.2-245.2-245.2-245.2 110-245.2 245.2 110 245.2 245.2 245.2zm0-465.9c121.7 0 220.7 99 220.7 220.7s-99 220.7-220.7 220.7-220.7-99-220.7-220.7 99-220.7 220.7-220.7zM180.3 310.1c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6l47.6-47.6 47.6 47.6c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6c4.8-4.8 4.8-12.5 0-17.3l-47.8-47.6 47.6-47.6c4.8-4.8 4.8-12.5 0-17.3s-12.5-4.8-17.3 0l-47.6 47.6-47.6-47.6c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l47.6 47.6-47.6 47.6c-4.8 4.8-4.8 12.5 0 17.3z"/></svg>';
            return icon;
        }


//variables and constans
    const deletesvg = '';
    var chart_color = 'rgba(115, 122, 191, 0.6)';
    var doughnut_color = ['rgba(115, 100, 191, 0.6)','rgba(75, 122, 191, 0.6)','rgba(115, 122, 90, 0.6)'];
    var traffic_chart_hourly = document.getElementById('traffic_chart_hourly');
    var traffic_chart_daily = document.getElementById('traffic_chart_daily');
    var traffic_chart_weekly = document.getElementById('traffic_chart_weekly');
    var traffic_chart_monthly = document.getElementById('traffic_chart_monthly');

    var traffic_chart_hourly_div = document.getElementById('traffic_chart_hourly_div');
    var traffic_chart_daily_div = document.getElementById('traffic_chart_daily_div');
    var traffic_chart_weekly_div = document.getElementById('traffic_chart_weekly_div');
    var traffic_chart_monthly_div = document.getElementById('traffic_chart_monthly_div');

    var profile_name = document.getElementById('profile_name');
    var profile_img = document.getElementById('profile_img');

    var hourly_button = document.getElementById('hourly_button');
    var daily_button = document.getElementById('daily_button');
    var weekly_button = document.getElementById('weekly_button');
    var monthly_button = document.getElementById('monthly_button');

    var daily_traffic_chart = document.getElementById('daily_traffic_chart');
    var mobile_user_char = document.getElementById('mobile_user_char');
    var twitter = document.getElementById('twitter_counter');
    var facebook = document.getElementById('facebook_counter');
    var googleplus = document.getElementById('gplus_counter');
    var dropdown_bell = document.getElementById("dropdown");
//dropdown function for open
    function dropdown() {
        dropdown_bell.classList.toggle("show_dropdown");
    }
//dropdown function for close
    window.onclick = function(event) {
      if (!event.target.matches('.bell')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
//main chart display functions
    function showHourly()
        {
            $(traffic_chart_hourly_div).addClass('show');
            $(traffic_chart_hourly_div).removeClass('hide');
            $(hourly_button).addClass('active_button');
            $(daily_button).removeClass('active_button');
            $(weekly_button).removeClass('active_button');
            $(monthly_button).removeClass('active_button');
            $(traffic_chart_daily_div).removeClass('show');
            $(traffic_chart_daily_div).addClass('hide');

            $(traffic_chart_weekly_div).removeClass('show');
            $(traffic_chart_weekly_div).addClass('hide');

            $(traffic_chart_monthly_div).removeClass('show');
            $(traffic_chart_monthly_div).addClass('hide');
        }
    function showdaily()
        {   

            $(hourly_button).removeClass('active_button');
            $(daily_button).addClass('active_button');
            $(weekly_button).removeClass('active_button');
            $(monthly_button).removeClass('active_button');

            $(traffic_chart_hourly_div).removeClass('show');
            $(traffic_chart_hourly_div).addClass('hide');

            $(traffic_chart_daily_div).removeClass('hide');
            $(traffic_chart_daily_div).addClass('show');

            $(traffic_chart_weekly_div).removeClass('show');
            $(traffic_chart_weekly_div).addClass('hide');

            $(traffic_chart_monthly_div).removeClass('show');
            $(traffic_chart_monthly_div).addClass('hide');
        }
    function showweekly()
        {

            $(hourly_button).removeClass('active_button');
            $(daily_button).removeClass('active_button');
            $(weekly_button).addClass('active_button');
            $(monthly_button).removeClass('active_button');

            $(traffic_chart_hourly_div).removeClass('show');
            $(traffic_chart_hourly_div).addClass('hide');

            $(traffic_chart_daily_div).removeClass('show');
            $(traffic_chart_daily_div).addClass('hide');

            $(traffic_chart_weekly_div).removeClass('hide');
            $(traffic_chart_weekly_div).addClass('show');

            $(traffic_chart_monthly_div).removeClass('show');
            $(traffic_chart_monthly_div).addClass('hide');
        }
    function showmonthly()
        {

            $(hourly_button).removeClass('active_button');
            $(daily_button).removeClass('active_button');
            $(weekly_button).removeClass('active_button');
            $(monthly_button).addClass('active_button');
            
            $(traffic_chart_hourly_div).removeClass('show');
            $(traffic_chart_hourly_div).addClass('hide');

            $(traffic_chart_daily_div).removeClass('show');
            $(traffic_chart_daily_div).addClass('hide');

            $(traffic_chart_weekly_div).removeClass('show');
            $(traffic_chart_weekly_div).addClass('hide');

            $(traffic_chart_monthly_div).removeClass('hide');
            $(traffic_chart_monthly_div).addClass('show');
        }

//Charts creating code
    var chart = new XMLHttpRequest();
    chart.onreadystatechange = function(){
        if (chart.readyState === 4) {
            var charts = JSON.parse(chart.responseText);
            var hourly      =   charts['hourly'];
            var daily       =   charts['daily'];
            var weekly      =   charts['weekly'];
            var monthly     =   charts['monthly'];
            var dayofWeek   =   charts['dayofWeek'];
            var mobile      =   charts['mobile'];
            var facebook    =   charts['facebook'];
            var twitter     =   charts['twitter'];
            var gplus       =   charts['gplus'];


            var myChart = new Chart(traffic_chart_hourly, 
                {
                    type: 'line',
                    data: {
                        labels: ["00-01", "01-02", "02-03", "03-04", "04-05", "05-06", "06-07", "07-08","08-09", "09-10","10-11","11-12","12-13","13-14","14-15", "15-16", "16-17", "17-18", "18-19", "19-20","20-21","21-22","22-23","23-00"],
                        datasets: [{
                            label: 'hourly',
                            data: hourly,
                            lineTension: 0,
                            backgroundColor : chart_color,
                        }]},    
                    options: {
                                legend : {display:false },
                                scales: { yAxes: [{beginAtZero:true}],
                                    xAxes: [{ beginAtZero:true}]
                                    },
                                    responsive: true,
                                    maintainAspectRatio: false,
                            }
                });
            var myChart = new Chart(traffic_chart_daily, 
                {
                    type: 'line',
                    data: {
                        labels: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                        datasets: [{
                            label: 'daily',
                            data: daily,
                            lineTension: 0,
                            backgroundColor : chart_color,
                        }]},    
                    options: {
                        legend : {display:false },
                        scales: { yAxes: [{beginAtZero:true}],
                            xAxes: [{ beginAtZero:true}]
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                    }
                });
            var myChart = new Chart(traffic_chart_weekly, 
                {
                    type: 'line',
                    data: {
                        labels: ["16-22", "23-29", "30-05", "06-12", "13-19", "20-26","27-03","04-10","11-17","18-24","25-31"],
                        datasets: [{
                            label: 'weekly',
                            data: weekly,
                            lineTension: 0,
                            backgroundColor : chart_color,
                        }]},    
                    options: {
                        legend : {display:false },
                        scales: { yAxes: [{beginAtZero:true}],
                            xAxes: [{ beginAtZero:true}]
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                    }
                });
            var myChart = new Chart(traffic_chart_monhtly, 
                {
                    type: 'line',
                    data: {
                        labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
                        datasets: [{
                            label: 'monthly',
                            data: monthly,
                            lineTension: 0,
                            backgroundColor : chart_color,
                        }]},    
                    options: {
                        legend : {display:false },
                        scales: { yAxes: [{beginAtZero:true}],
                            xAxes: [{ beginAtZero:true}]
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                    }
                });
            var myChart = new Chart(daily_traffic_chart, 
                {
                    type: 'bar',
                    data: {
                        labels: ['s','m','t','w','t','f','s'],
                        datasets: [{
                            label: 'daily',
                            data: dayofWeek,
                            lineTension: 0,
                            backgroundColor : chart_color,
                        }]},    
                    options: {
                        legend : {display:false },
                        scales: { yAxes: [{beginAtZero:true}],
                            xAxes: [{ beginAtZero:true}]
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                    }
                });
            var myChart = new Chart(mobile_user_char, 
                {
                    type: 'doughnut',
                        data: {
                            labels: ['Desktop','Tablet','Phone'],
                            datasets: [{
                                label: 'daily',
                                data: mobile,
                                lineTension: 0,
                            backgroundColor : doughnut_color,
                            }]}, 
                        options: {
                            responsive: true,
                            legend: {
                                position: 'right',
                            },
                            title: {
                                display: true,
                                text: 'MOBILE USERS'
                            },
                            animation: {
                                animateScale: true,
                                animateRotate: true
                            }
                        }
                    });
                };
    }
    chart.open('GET', 'js/data.json');
    chart.send();
//User widget finished
    var user = new XMLHttpRequest();
    user.onreadystatechange = function(){
        if (user.readyState === 4)
            {
                 var users = JSON.parse(user.responseText);
                 var userList = '<ul class="users">';
                 for (var i = 0; i < users.length; i++) {
                            userList += '<li>';
                            userList += '<div class="user">';
                            userList += ' <img class="userimage" src="'+users[i].image+'">';
                            userList += '<div>';
                            userList += '<p>'+users[i].name+'</p>';
                            userList += '<a href="'+users[i].email+'">'+users[i].email+'</a>';
                            userList += '</div>';
                            userList += '<p>'+users[i].regdate+'</p></div>';
                            userList += '</li>';
                        };
                userList += '</ul>';
                 document.getElementById('newMember').innerHTML = userList;
            }
    }
    user.open('GET', 'js/user.json');
    user.send();
//User activity widget finished
    var userActivity = new XMLHttpRequest();
    userActivity.onreadystatechange = function(){
        if (userActivity.readyState === 4)
            {
                 var userActivitys = JSON.parse(userActivity.responseText);
                 var userActivityList = '<ul class="activity">';
                 for (var i = 0; i < userActivitys.length; i++) {
                     userActivityList += '<li>';
                     userActivityList += '<div class="activityitem">';
                     userActivityList += '<img class="userimage" src="'+userActivitys[i].image+'">';
                     userActivityList += '<div>';
                     userActivityList += '<p>'+userActivitys[i].action+'</p>';
                     userActivityList += '<p>'+userActivitys[i].time+'</p>';
                     userActivityList += '</div>';
                     userActivityList += '<a href="'+userActivitys[i].link+'"></a>';
                     userActivityList += '</div>';
                    
                    };
                userActivityList += '</ul>';
                document.getElementById('recent_activity').innerHTML = userActivityList;
            }
    }
    userActivity.open('GET', 'js/user_activity.json');
    userActivity.send();
//Alert widget finished
    var alert = new XMLHttpRequest();
    alert.onreadystatechange = function(){
        if (alert.readyState === 4)
            {
                 var alerts = JSON.parse(alert.responseText);
                var alertList = '<ul class="alert">';
                for (var i = 0; i < alerts.length; i++) {  
                    var dismiss = 'alert'+i;              
                    alertList += '<li class="danger" id="'+dismiss+'">';
                    alertList += '<p>';
                    alertList += alerts[i].subject;
                    alertList += '</p>';
                    alertList += deleteicon(dismiss);
                    alertList += '</li>';
                };
                alertList += '</ul>';
                document.getElementById('alertArea').innerHTML = alertList;
            }
    }
    alert.open('GET', 'js/alert.json');
    alert.send();
//Notification widget finished
    var notification = new XMLHttpRequest();
    notification.onreadystatechange = function(){
        if (notification.readyState === 4)
            {
                 var notifications = JSON.parse(notification.responseText);
                 var noti = '<ul id="droplist">'
                 for (var i = 0; i < notifications.length; i++) {
                        var dismiss = 'not'+i;
                        noti += '<li id="'+dismiss+'">';
                        noti += '<div class="notificationitem">';
                        noti += '<a href="'+ notifications[i].link+ '">';
                        noti += '<p>'+notifications[i].subject+'</p>';
                        noti += '</a>';
                        noti += '</div>';
                        noti += deleteicon(dismiss);
                        noti += '</li>';                
                 };
                noti += '</ul>';
                document.getElementById('dropdown').innerHTML = noti;
            }
    }
    notification.open('GET', 'js/notification.json');
    notification.send();

//social logo adder
    twitter_logo.innerHTML = '<svg height="67" viewBox="0 0 67 67" width="67" xmlns="http://www.w3.org/2000/svg"><path d="M38.167 22.283c-2.619.953-4.274 3.411-4.086 6.101l.063 1.038-1.048-.127c-3.813-.487-7.145-2.139-9.974-4.915l-1.383-1.377-.356 1.017c-.754 2.267-.272 4.661 1.299 6.271.838.89.649 1.017-.796.487-.503-.169-.943-.296-.985-.233-.146.149.356 2.076.754 2.839.545 1.06 1.655 2.097 2.871 2.712l1.027.487-1.215.021c-1.173 0-1.215.021-1.089.467.419 1.377 2.074 2.839 3.918 3.475l1.299.444-1.131.678c-1.676.976-3.646 1.526-5.616 1.567-.944.021-1.719.106-1.719.17 0 .211 2.557 1.397 4.044 1.864 4.463 1.377 9.765.783 13.746-1.568 2.829-1.674 5.657-5 6.978-8.221.713-1.715 1.425-4.851 1.425-6.354 0-.975.063-1.102 1.236-2.267.692-.678 1.341-1.419 1.467-1.631.21-.403.188-.403-.88-.043-1.781.636-2.033.551-1.152-.402.649-.678 1.425-1.907 1.425-2.267 0-.063-.314.042-.671.233-.377.212-1.215.53-1.844.72l-1.131.361-1.027-.7c-.566-.381-1.361-.805-1.781-.932-1.069-.296-2.704-.254-3.668.085zm-4.167 41.717c-16.568 0-30-13.432-30-30 0-16.569 13.432-30 30-30s30 13.431 30 30c0 16.568-13.432 30-30 30z" fill-rule="evenodd" clip-rule="evenodd" fill="#598DCA"/></svg>';
    facebook_logo.innerHTML = '<svg height="56.693" viewBox="0 0 56.693 56.693" width="56.693" xmlns="http://www.w3.org/2000/svg"><path d="M40.43 21.739h-7.645v-5.014c0-1.883 1.248-2.322 2.127-2.322h5.395v-8.278l-7.43-.029c-8.248 0-10.125 6.174-10.125 10.125v5.518h-4.77v8.53h4.77v24.137h10.033v-24.137h6.77l.875-8.53z"/></svg>';
    gplus_logo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32"><path d="M17.7 25.7c0-.3 0-.5-.1-.8l-.2-.7c-.1-.2-.2-.4-.3-.7-.2-.2-.3-.4-.4-.6l-.5-.6-.5-.5c-.1-.1-.3-.3-.6-.5s-.5-.4-.6-.4l-.6-.4c-.3-.2-.5-.4-.6-.4h-1c-.7 0-1.4 0-2 .1-.7.1-1.4.2-2.1.5-.7.2-1.3.5-1.9.9s-1 .8-1.3 1.4c-.3.6-.5 1.3-.5 2.1 0 .9.2 1.7.7 2.3.5.7 1.1 1.2 1.8 1.6s1.5.7 2.3.9 1.6.3 2.4.3c.8 0 1.5-.1 2.2-.2.7-.2 1.3-.4 1.9-.8.6-.3 1.1-.8 1.4-1.4.3-.6.5-1.3.5-2.1zm-2.3-16.6c0-.8-.1-1.6-.3-2.5-.2-.9-.5-1.7-.9-2.5s-.9-1.5-1.6-2c-.7-.5-1.5-.8-2.3-.8-1.2 0-2.1.4-2.8 1.3-.7.9-1 1.9-1 3.2 0 .6.1 1.2.2 1.9s.4 1.3.7 2c.3.7.7 1.3 1.1 1.8.4.5.9 1 1.5 1.3.6.3 1.2.5 1.9.5 1.2 0 2.1-.4 2.7-1.2.5-.7.8-1.7.8-3zm-2.5-9.1h8.4l-2.6 1.5h-2.6c.9.6 1.6 1.4 2.1 2.4s.8 2.1.8 3.2c0 .9-.1 1.8-.4 2.5-.3.7-.7 1.3-1.1 1.8-.4.4-.8.9-1.3 1.2-.4.4-.8.8-1.1 1.2-.3.4-.4.8-.4 1.3 0 .3.1.7.3 1 .2.3.5.6.8.9.3.3.7.6 1.1.9.4.3.8.7 1.2 1.1.4.4.8.8 1.1 1.3.3.5.6 1 .8 1.6.2.6.3 1.3.3 2 0 2.1-.9 3.9-2.7 5.4-1.9 1.7-4.6 2.5-8.1 2.5-.8 0-1.5-.1-2.3-.2-.8-.1-1.6-.3-2.3-.6-.8-.3-1.5-.7-2.1-1.1-.6-.4-1.1-1-1.5-1.7-.3-.6-.5-1.3-.5-2.2 0-.8.2-1.6.7-2.6.4-.8 1-1.5 1.8-2.1.8-.6 1.8-1.1 2.8-1.4 1-.3 2-.5 3-.7.9-.1 1.9-.2 2.9-.3-.8-1.1-1.2-2-1.2-2.9v-.5l.1-.4c0-.1.1-.2.2-.4s.1-.3.1-.4c-.5.1-1 .1-1.3.1-1.9 0-3.5-.6-4.9-1.9-1.4-1.3-2-2.8-2-4.7 0-1.8.6-3.4 1.8-4.8 1.2-1.3 2.7-2.2 4.5-2.6 1.2-.3 2.4-.4 3.6-.4zm19.9 4.9v2.5h-4.9v4.9h-2.5v-4.9h-4.9v-2.5h4.9v-4.9h2.5v4.9h4.9z"/></svg>';
//social media counter
    twitter_counter.innerHTML = 1500;
    facebook_counter.innerHTML = 1750;
    gplus_counter.innerHTML = 500;
// create message widget finished
    var form = $('#message');
    var formMessages = $('#form-messages');
    $(form).submit(function(e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text('Success');

            // Clear the form.
            $('#message_name').val('');
            $('#message_text').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text('Fail');
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });

    });


//create options widget
  var form = $('#settings');
    var settingsForm = $('#form-settings');
    $(form).submit(function(e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the settingsForm div has the 'success' class.
            $(settingsForm).removeClass('error');
            $(settingsForm).addClass('success');

            // Set the message text.
            $(settingsForm).text('Success');

            // Clear the form.
            $('#message_name').val('');
            $('#message_text').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(settingsForm).removeClass('success');
            $(settingsForm).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(settingsForm).text('Fail');
            } else {
                $(settingsForm).text('Oops! An error occured and your message could not be sent.');
            }
        });

    });



profile_name.innerHTML = 'Lorem Ipsum';
profile_img.innerHTML = '<img  class="avatar" src="img/profile_images/profile_image_med.jpg" height="48" width="48" alt="profile image picture of your self">';







