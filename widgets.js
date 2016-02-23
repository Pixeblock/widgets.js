<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1404.34">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 14.0px; font: 12.0px Courier; color: #000000; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 14.0px; font: 12.0px Courier; color: #000000; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">var RicohThetaWidget = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>_sameHost : function (url) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (url.match(/https?.+theta360.com/)) {return true;}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>isQueryTargetUrl : function(url) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return !url.match(/^https?:\/\/theta360.com/);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>getQueryTargetUrl : function(url) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var parameters = url.split('?')[1].split('&amp;');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for( var i = 0; i &lt; parameters.length; i++ )</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">       </span>var element = parameters[ i ].split( '=' );</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">       </span>var paramValue = decodeURIComponent( element[ 1 ] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">       </span>if (paramValue &amp;&amp; this._sameHost(paramValue)) { return paramValue; }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>getElementsByClassName : function (targetClass) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (typeof document.getElementsByClassName == "function") {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>return document.getElementsByClassName(targetClass);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var foundElements = new Array();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (document.all){</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>var allElements = document.all;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">       </span>var allElements = document.getElementsByTagName("*");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (var i=0,j=0;i&lt;allElements.length;i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (allElements[i].className == targetClass) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>foundElements[j] = allElements[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>j++;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return foundElements;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>parseUnit : function (target) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!target || target == '') { return 'px'; }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>switch (target.replace(/([\d.]+)(px|pt|em|%)/,'$2')) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>case '%': return '%'; break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>case 'pt': return 'pt'; break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>case 'em': return 'em'; break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>default : return 'px'; break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>getTargetUrl : function (target) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var target_anchors = target.getElementsByTagName('a');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var target_len = target_anchors.length;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var target_uri = '';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>for (var i=0; i&lt;target_len; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>target_uri = target_anchors[i].getAttribute('href');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>if (this._sameHost(target_uri)) {break;}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return (i==target_len) ? null : target_uri;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>onClickC2PArea : function(obj) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var removeWaitTarget = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var blockquotes = RicohThetaWidget.getElementsByClassName('ricoh-theta-click2play');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var blockquotes_length = blockquotes.length;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>for (var i=0; i&lt;blockquotes_length; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>var target = blockquotes[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (!target) {continue;}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (target.getElementsByTagName('iframe').length &gt; 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>var target_wait_html = target.getElementsByTagName('span')[0].innerHTML;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>target.outerHTML = target_wait_html;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var embed_size_style = 'width:' + obj.style.width +';height:' + obj.style.height + '; max-width: 100%;';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var target_uri = RicohThetaWidget.getTargetUrl(obj);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (target_uri === null) {return;}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var is_query_target_url = RicohThetaWidget.isQueryTargetUrl(target_uri);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var is_target_width_percent = RicohThetaWidget.parseUnit(obj.style.width)=='%' ? true : false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var is_target_height_percent = RicohThetaWidget.parseUnit(obj.style.height)=='%' ? true : false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var iframe_style = 'width:' + (is_target_width_percent ? '100%' : obj.style.width) +';height:' + (is_target_height_percent ? '100%' : obj.style.height) +'; max-width: 100%;';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var iframe_src = (is_query_target_url ? RicohThetaWidget.getQueryTargetUrl(target_uri) : target_uri) + '?view=embed&amp;width='+encodeURI(is_target_width_percent ? '100%' : obj.style.width)+'&amp;height='+encodeURI(is_target_height_percent ? '100%' : obj.style.height);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var target_embed_html =</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>'&lt;div class="ricoh-theta-spherical-image ricoh-theta-click2play ricoh-theta-click2play-active" style="' + embed_size_style + '"&gt;' +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>'&lt;span style="display: none"&gt;' + obj.outerHTML + '&lt;/span&gt;' +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>'&lt;iframe class="ricoh-theta-iframe" src="' + iframe_src + '" style="' + iframe_style + '" frameborder="0" scrolling="no"&gt;&lt;/iframe&gt;' +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>'&lt;/div&gt;';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>removeWaitTarget();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>obj.outerHTML = target_embed_html;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>var thumbnail_aspect_ratio = 600/315;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>var getThumbnailStyle = function (width, height, is_show_area_horizontal) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (is_show_area_horizontal) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>return 'width:auto;height:100%;left:'+(width-height*thumbnail_aspect_ratio)/2+'px;'</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>return 'width:100%;height:auto;top:'+(height-width/thumbnail_aspect_ratio)/2+'px;'</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>var unitSize2Pixel = function (size_with_unit, max_size, adjust_max_size) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!size_with_unit || size_with_unit == '') { return NaN; }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var size_str_value=parseFloat(size_with_unit);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var selected_size=0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>switch (size_with_unit.replace(/([\d.]+)(px|pt|em|%)/,'$2')) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>case '%': return max_size*size_str_value/100; break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>case 'pt':</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>selected_size = size_str_value*4/3;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>case 'em':</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>selected_size = size_str_value*16;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>default :</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>selected_size = size_str_value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return (adjust_max_size &amp;&amp; selected_size &gt; max_size) ? max_size : selected_size;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>var embed_max = 2;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>var normal_width_size = 500;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>var normal_height_size = 375;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>var small_size_value = 200;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>var blockquotes = RicohThetaWidget.getElementsByClassName('ricoh-theta-spherical-image');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>var blockquotes_length = blockquotes.length;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>var autoplay_cnt = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>for (var i=0; i&lt;blockquotes_length; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var target = blockquotes[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (target.className.match(/ricoh-theta-click2play/)) {continue;}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (target.getElementsByTagName('iframe').length &gt; 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>autoplay_cnt++;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>continue;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var target_blockquote_child_html = target.innerHTML;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var target_uri = RicohThetaWidget.getTargetUrl(target);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (target_uri === null) {continue;}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var w = target.getAttribute('data-width') || target.getAttribute('width');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var h = target.getAttribute('data-height') || target.getAttribute('height');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var data_mode = target.getAttribute('data-mode');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var target_width = parseFloat(w) || normal_width_size;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var target_width_with_unit = target_width + RicohThetaWidget.parseUnit(w);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var is_target_width_percent = RicohThetaWidget.parseUnit(w)=='%' ? true : false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var target_height = parseFloat(h) || normal_height_size;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var target_height_with_unit = target_height + RicohThetaWidget.parseUnit(h);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var is_target_height_percent = RicohThetaWidget.parseUnit(h)=='%' ? true : false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var embed_size_style = 'width:' + target_width_with_unit+';height:' + target_height_with_unit+'; max-width: 100%;';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>var is_query_target_url = RicohThetaWidget.isQueryTargetUrl(target_uri);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (data_mode&amp;&amp;data_mode=='click2play'||autoplay_cnt&gt;=embed_max) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var sphereImageAreaCSSStyleDeclaration = document.defaultView.getComputedStyle(target.parentNode,null);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var drawableWidth=sphereImageAreaCSSStyleDeclaration.getPropertyValue('width');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var drawableHeight=sphereImageAreaCSSStyleDeclaration.getPropertyValue('height');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var target_width_px = unitSize2Pixel(target_width_with_unit, parseInt(drawableWidth), true) || normal_width_size;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var target_height_px = unitSize2Pixel(target_height_with_unit, parseInt(drawableHeight), false) || normal_height_size;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var is_small_window = target_width_px&lt;small_size_value || target_height_px&lt;small_size_value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var show_area_height = is_small_window ? 70 : 140;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var is_show_area_horizontal = target_height_px*thumbnail_aspect_ratio/target_width_px&gt;=1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var c2p_logo_style = 'top:'+(target_height_px-show_area_height)/2+'px;';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var thumbnail = (is_query_target_url ? RicohThetaWidget.getQueryTargetUrl(target_uri) : target_uri)+'/thumbnail';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var cancel_img_style = 'max-width:none; border:none; background: transparent; box-shadow:none; -webkit-box-shadow:none; -moz-box-shadow:none;display:inline;';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var cancel_style = 'line-height:normal; padding:0; margin:0;';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var target_thumbnail_html =</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>'&lt;div class="ricoh-theta-spherical-image ricoh-theta-click2play ricoh-theta-click2play-wait" style="'+cancel_style+'overflow:hidden;cursor:pointer;position:relative;' + embed_size_style + '" onclick="RicohThetaWidget.onClickC2PArea(this);"&gt;' +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>'&lt;span style="display: none"&gt;' + target_blockquote_child_html + '&lt;/span&gt;' +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>'&lt;img alt="" src="'+thumbnail+'" style="'+cancel_img_style+cancel_style+'position:absolute; '+getThumbnailStyle(target_width_px,target_height_px,is_show_area_horizontal)+'"&gt;'+</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>'&lt;div style="'+cancel_style+'position:absolute; background-color:rgba(0,0,0,0.8); width:'+(is_target_width_percent ? '100%' : target_width_with_unit)+';height:'+(is_target_height_percent ? '100%' : target_height_with_unit)+';max-width:100%;'+'"&gt;' +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>'&lt;div style="position:relative; font-size:'+(is_small_window ? '15':'30')+'px; text-align:center;'+c2p_logo_style+cancel_style+'"&gt;' +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>'&lt;img alt="" src="'+'https://41.media.tumblr.com/6029b864f89813ad3f17a6d59df8e92b/tumblr_o30uicdXbN1v9qyqdo1_100.png" style="'+cancel_img_style+cancel_style+'margin-bottom:'+(is_small_window?'0':'16')+'px;'+(is_small_window ? 'width:45px;' : '')+'"&gt;' +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>'&lt;br /&gt;&lt;span class="click_to_play" style="color:white;"&gt;Click to play&lt;/span&gt;' +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>'&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>target.outerHTML = target_thumbnail_html;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var iframe_style = 'width:' + (is_target_width_percent ? '100%' : target_width_with_unit) +';height:' + (is_target_height_percent ? '100%' : target_height_with_unit) +'; max-width: 100%;';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var iframe_src = (is_query_target_url ? RicohThetaWidget.getQueryTargetUrl(target_uri) : target_uri) + '?view=embed&amp;width='+encodeURI(is_target_width_percent ? '100%' : target_width_with_unit)+'&amp;height='+encodeURI(is_target_height_percent ? '100%' : target_height_with_unit);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var target_embed_html =</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>'&lt;div class="ricoh-theta-spherical-image" style="' + embed_size_style + '"&gt;' +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>'&lt;span style="display: none"&gt;' + target_blockquote_child_html + '&lt;/span&gt;' +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>'&lt;iframe class="ricoh-theta-iframe" src="' + iframe_src + '" style="' + iframe_style + '" frameborder="0" scrolling="no"&gt;&lt;/iframe&gt;' +</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>'&lt;/div&gt;';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>target.outerHTML = target_embed_html;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>autoplay_cnt++;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">})();</span></p>
</body>
</html>
