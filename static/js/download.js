document.writeln("<div class=\"modal fade\" id=\"text_download\" aria-hidden=\"true\" role=\"dialog\">")
document.writeln("<div class=\"modal-dialog\" style=\"max-width: 40%;margin-left: 30%;margin-top: 20%;\" role=\"document\" >")
document.writeln("<div class=\"modal-content\">")
document.writeln("<div class=\"modal-header\">")
document.writeln("<h5 class=\"modal-title\">数据导出</h5>")
document.writeln("<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">")
document.writeln("<span aria-hidden=\"true\">&times;</span>")
document.writeln("</button>")
document.writeln("</div>")
document.writeln("<div class=\"modal-body\">")
document.writeln("<form>")

document.writeln("<div class=\"form-group row\">")
document.writeln("<label class=\"col-form-label col-md-4\">近期数据打包</label>")
document.writeln("<div class=\"col-md-8\">")
document.writeln("<select class=\"form-control\">")
document.writeln("<option>-- Select --</option>")
document.writeln("<option>波导分析计算</option>")
document.writeln("<option>电磁损耗计算</option>")
document.writeln("<option>雷达有效距离</option>")
document.writeln("</select>")
document.writeln("</div>")
document.writeln("</div>")

document.writeln("<div class=\"form-group row\">")
document.writeln("<label  class=\"col-form-label col-md-4\" style=\"color:#569CD6 ;font-weight: bolder;\">精确下载选择👇</label>")
document.writeln("</div>")

document.writeln("<div class=\"form-group row\">")
document.writeln("<label class=\"col-form-label col-md-4\">地理位置-经度</label>")
document.writeln("<div class=\"col-md-8\">")
document.writeln("<input type=\"text\" class=\"form-control\" placeholder=\"122.27°E\">")
document.writeln("</div>")
document.writeln("</div>")

document.writeln("<div class=\"form-group row\">")
document.writeln("<label class=\"col-form-label col-md-4\">地理位置-纬度</label>")
document.writeln("<div class=\"col-md-8\">")
document.writeln("<input type=\"text\" class=\"form-control\" placeholder=\"31.65°N\">")
document.writeln("</div>")
document.writeln("</div>")

document.writeln("<div class=\"form-group row\">")
document.writeln("<label class=\"col-form-label col-md-4\">起始时间</label>")
document.writeln("<div class=\"col-md-8\">")
document.writeln("<input type=\"datetime-local\" style=\"width: 100%;\" value=\"2020-11-4T13:59:59\"/>")
document.writeln("</div>")
document.writeln("</div>")

document.writeln("<div class=\"form-group row\">")
document.writeln("<label class=\"col-form-label col-md-4\">结束时间</label>")
document.writeln("<div class=\"col-md-8\">")
document.writeln("<input type=\"datetime-local\" style=\"width: 100%;\" value=\"2020-11-4T13:59:59\"/>")
document.writeln("</div>")
document.writeln("</div>")

document.writeln("<a class=\"btn btn-primary btn-block\"  href=\"/images/1.png\" download=\"111\">确认选择并下载</a>")

document.writeln("</form>")
document.writeln("</div>")
document.writeln("</div>")
document.writeln("</div>")
document.writeln("</div>")