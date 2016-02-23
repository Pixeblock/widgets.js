var RicohThetaWidget = {
  _sameHost : function (url) {
    if (url.match(/https?.+theta360.com/)) {return true;}
  },
  isQueryTargetUrl : function(url) {
    return !url.match(/^https?:\/\/theta360.com/);
  },
  getQueryTargetUrl : function(url) {
    var parameters = url.split('?')[1].split('&');
    for( var i = 0; i < parameters.length; i++ )
    {
       var element = parameters[ i ].split( '=' );
       var paramValue = decodeURIComponent( element[ 1 ] );
       if (paramValue && this._sameHost(paramValue)) { return paramValue; }
    }
    return null;
  },

  getElementsByClassName : function (targetClass) {
    if (typeof document.getElementsByClassName == "function") {
      return document.getElementsByClassName(targetClass);
    }
    var foundElements = new Array();
    if (document.all){
        var allElements = document.all;
    }
    else {
       var allElements = document.getElementsByTagName("*");
    }
    for (var i=0,j=0;i<allElements.length;i++) {
        if (allElements[i].className == targetClass) {
            foundElements[j] = allElements[i];
            j++;
        }
    }
    return foundElements;
  },

  parseUnit : function (target) {
    if (!target || target == '') { return 'px'; }
    switch (target.replace(/([\d.]+)(px|pt|em|%)/,'$2')) {
      case '%': return '%'; break;
      case 'pt': return 'pt'; break;
      case 'em': return 'em'; break;
      default : return 'px'; break;
    }
  },

  getTargetUrl : function (target) {
    var target_anchors = target.getElementsByTagName('a');
    var target_len = target_anchors.length;
    var target_uri = '';
    for (var i=0; i<target_len; i++) {
      target_uri = target_anchors[i].getAttribute('href');
      if (this._sameHost(target_uri)) {break;}
    }
    return (i==target_len) ? null : target_uri;
  },

  onClickC2PArea : function(obj) {
    var removeWaitTarget = function() {
      var blockquotes = RicohThetaWidget.getElementsByClassName('ricoh-theta-click2play');
      var blockquotes_length = blockquotes.length;
      for (var i=0; i<blockquotes_length; i++) {
        var target = blockquotes[i];
        if (!target) {continue;}
        if (target.getElementsByTagName('iframe').length > 0) {
          var target_wait_html = target.getElementsByTagName('span')[0].innerHTML;
          target.outerHTML = target_wait_html;
        }
      }
    };
    var embed_size_style = 'width:' + obj.style.width +';height:' + obj.style.height + '; max-width: 100%;';
    var target_uri = RicohThetaWidget.getTargetUrl(obj);
    if (target_uri === null) {return;}
    var is_query_target_url = RicohThetaWidget.isQueryTargetUrl(target_uri);
    var is_target_width_percent = RicohThetaWidget.parseUnit(obj.style.width)=='%' ? true : false;
    var is_target_height_percent = RicohThetaWidget.parseUnit(obj.style.height)=='%' ? true : false;
    var iframe_style = 'width:' + (is_target_width_percent ? '100%' : obj.style.width) +';height:' + (is_target_height_percent ? '100%' : obj.style.height) +'; max-width: 100%;';
    var iframe_src = (is_query_target_url ? RicohThetaWidget.getQueryTargetUrl(target_uri) : target_uri) + '?view=embed&width='+encodeURI(is_target_width_percent ? '100%' : obj.style.width)+'&height='+encodeURI(is_target_height_percent ? '100%' : obj.style.height);
    var target_embed_html =
      '<div class="ricoh-theta-spherical-image ricoh-theta-click2play ricoh-theta-click2play-active" style="' + embed_size_style + '">' +
      '<span style="display: none">' + obj.outerHTML + '</span>' +
      '<iframe class="ricoh-theta-iframe" src="' + iframe_src + '" style="' + iframe_style + '" frameborder="0" scrolling="no"></iframe>' +
      '</div>';
    removeWaitTarget();
    obj.outerHTML = target_embed_html;
  }
};

(function() {
  var thumbnail_aspect_ratio = 600/315;
  var getThumbnailStyle = function (width, height, is_show_area_horizontal) {
    if (is_show_area_horizontal) {
      return 'width:auto;height:100%;left:'+(width-height*thumbnail_aspect_ratio)/2+'px;'
    } else {
      return 'width:100%;height:auto;top:'+(height-width/thumbnail_aspect_ratio)/2+'px;'
    }
  };

  var unitSize2Pixel = function (size_with_unit, max_size, adjust_max_size) {
    if (!size_with_unit || size_with_unit == '') { return NaN; }
    var size_str_value=parseFloat(size_with_unit);
    var selected_size=0;
    switch (size_with_unit.replace(/([\d.]+)(px|pt|em|%)/,'$2')) {
      case '%': return max_size*size_str_value/100; break;
      case 'pt':
        selected_size = size_str_value*4/3;
        break;
      case 'em':
        selected_size = size_str_value*16;
        break;
      default :
        selected_size = size_str_value;
        break;
    }
    return (adjust_max_size && selected_size > max_size) ? max_size : selected_size;
  };

  var embed_max = 2;
  var normal_width_size = 500;
  var normal_height_size = 375;
  var small_size_value = 200;
  var blockquotes = RicohThetaWidget.getElementsByClassName('ricoh-theta-spherical-image');
  var blockquotes_length = blockquotes.length;
  var autoplay_cnt = 0;
  for (var i=0; i<blockquotes_length; i++) {
    var target = blockquotes[i];
    if (target.className.match(/ricoh-theta-click2play/)) {continue;}
    if (target.getElementsByTagName('iframe').length > 0) {
      autoplay_cnt++;
      continue;
    }
    var target_blockquote_child_html = target.innerHTML;
    var target_uri = RicohThetaWidget.getTargetUrl(target);
    if (target_uri === null) {continue;}
    var w = target.getAttribute('data-width') || target.getAttribute('width');
    var h = target.getAttribute('data-height') || target.getAttribute('height');
    var data_mode = target.getAttribute('data-mode');
    var target_width = parseFloat(w) || normal_width_size;
    var target_width_with_unit = target_width + RicohThetaWidget.parseUnit(w);
    var is_target_width_percent = RicohThetaWidget.parseUnit(w)=='%' ? true : false;
    var target_height = parseFloat(h) || normal_height_size;
    var target_height_with_unit = target_height + RicohThetaWidget.parseUnit(h);
    var is_target_height_percent = RicohThetaWidget.parseUnit(h)=='%' ? true : false;
    var embed_size_style = 'width:' + target_width_with_unit+';height:' + target_height_with_unit+'; max-width: 100%;';
    var is_query_target_url = RicohThetaWidget.isQueryTargetUrl(target_uri);
    if (data_mode&&data_mode=='click2play'||autoplay_cnt>=embed_max) {
      var sphereImageAreaCSSStyleDeclaration = document.defaultView.getComputedStyle(target.parentNode,null);
      var drawableWidth=sphereImageAreaCSSStyleDeclaration.getPropertyValue('width');
      var drawableHeight=sphereImageAreaCSSStyleDeclaration.getPropertyValue('height');
      var target_width_px = unitSize2Pixel(target_width_with_unit, parseInt(drawableWidth), true) || normal_width_size;
      var target_height_px = unitSize2Pixel(target_height_with_unit, parseInt(drawableHeight), false) || normal_height_size;
      var is_small_window = target_width_px<small_size_value || target_height_px<small_size_value;
      var show_area_height = is_small_window ? 70 : 140;
      var is_show_area_horizontal = target_height_px*thumbnail_aspect_ratio/target_width_px>=1;
      var c2p_logo_style = 'top:'+(target_height_px-show_area_height)/2+'px;';
      var thumbnail = (is_query_target_url ? RicohThetaWidget.getQueryTargetUrl(target_uri) : target_uri)+'/thumbnail';
      var cancel_img_style = 'max-width:none; border:none; background: transparent; box-shadow:none; -webkit-box-shadow:none; -moz-box-shadow:none;display:inline;';
      var cancel_style = 'line-height:normal; padding:0; margin:0;';
      var target_thumbnail_html =
        '<div class="ricoh-theta-spherical-image ricoh-theta-click2play ricoh-theta-click2play-wait" style="'+cancel_style+'overflow:hidden;cursor:pointer;position:relative;' + embed_size_style + '" onclick="RicohThetaWidget.onClickC2PArea(this);">' +
          '<span style="display: none">' + target_blockquote_child_html + '</span>' +
          '<img alt="" src="'+thumbnail+'" style="'+cancel_img_style+cancel_style+'position:absolute; '+getThumbnailStyle(target_width_px,target_height_px,is_show_area_horizontal)+'">'+
          '<div style="'+cancel_style+'position:absolute; background-color:rgba(0,0,0,0.8); width:'+(is_target_width_percent ? '100%' : target_width_with_unit)+';height:'+(is_target_height_percent ? '100%' : target_height_with_unit)+';max-width:100%;'+'">' +
            '<div style="position:relative; font-size:'+(is_small_window ? '15':'30')+'px; text-align:center;'+c2p_logo_style+cancel_style+'">' +
            '<img alt="" src="'+'https://41.media.tumblr.com/6029b864f89813ad3f17a6d59df8e92b/tumblr_o30uicdXbN1v9qyqdo1_100.png" style="'+cancel_img_style+cancel_style+'margin-bottom:'+(is_small_window?'0':'16')+'px;'+(is_small_window ? 'width:45px;' : '')+'">' +
            '<br /><span class="click_to_play" style="color:white;">Click to play</span>' +
        '</div></div></div>';
      target.outerHTML = target_thumbnail_html;
    } else {
      var iframe_style = 'width:' + (is_target_width_percent ? '100%' : target_width_with_unit) +';height:' + (is_target_height_percent ? '100%' : target_height_with_unit) +'; max-width: 100%;';
      var iframe_src = (is_query_target_url ? RicohThetaWidget.getQueryTargetUrl(target_uri) : target_uri) + '?view=embed&width='+encodeURI(is_target_width_percent ? '100%' : target_width_with_unit)+'&height='+encodeURI(is_target_height_percent ? '100%' : target_height_with_unit);
      var target_embed_html =
        '<div class="ricoh-theta-spherical-image" style="' + embed_size_style + '">' +
        '<span style="display: none">' + target_blockquote_child_html + '</span>' +
        '<iframe class="ricoh-theta-iframe" src="' + iframe_src + '" style="' + iframe_style + '" frameborder="0" scrolling="no"></iframe>' +
        '</div>';
      target.outerHTML = target_embed_html;
      autoplay_cnt++;
    }
  }

})();