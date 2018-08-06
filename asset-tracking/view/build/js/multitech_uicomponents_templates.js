var cachedTemplates = (["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('/UIComponents/dashboard/frontend/components/chart/chart.html',
    "<div class=\"text-center loading\" ng-hide=$ctrl.datas><i class=\"fa fa-spinner fa-spin fa-3x\"></i></div><div class=padder10><div ng-show=$ctrl.noResults class=\"alert alert-danger\">No data to display</div></div><div ng-if=$ctrl.datas><div ng-if=\"$ctrl.type == 'line'\" style=\"height: 85%; width: 100%\" line-data=$ctrl.datas line-xkey={{$ctrl.xkey}} line-ykeys=$ctrl.ykeys line-labels=$ctrl.labels line-colors=$ctrl.colors line-line-width=$ctrl.lineWidth line-point-size=$ctrl.pointSize line-point-fill-colors=$ctrl.pointFillColors line-point-stroke-colors=$ctrl.pointStrokeColors line-ymax=$ctrl.ymax line-ymin=$ctrl.ymin line-smooth=$ctrl.smooth line-hide-hover=$ctrl.hideHover line-hover-callback=\"$ctrl.hoverCallback(index, options, content, row)\" line-parse-time=$ctrl.parseTime line-units=$ctrl.units line-post-units=$ctrl.postUnits line-pre-units=$ctrl.preUnits line-line-date-format=$ctrl.dateFormat(x) line-x-labels=$ctrl.xlabels line-x-label-format=$ctrl.xlabelFormat(x) line-x-label-angle=$ctrl.xlabelAngle line-y-label-format=$ctrl.ylabelFormat(y) line-goals=$ctrl.goals line-goal-stroke-width=$ctrl.goalStrokeWidth line-goal-line-colors=$ctrl.goalLineColors line-events=$ctrl.events line-event-stroke-width=$ctrl.eventStrokeWidth line-event-line-colors=$ctrl.eventLineColors line-continuous-line=$ctrl.continuousLine line-axes=$ctrl.axes line-grid=$ctrl.grid line-grid-text-color=$ctrl.gridTextColor line-grid-text-size=$ctrl.gridTextSize , line-grid-text-family=$ctrl.gridTextFamily line-grid-text-weight=$ctrl.gridTextWeight line-fill-opacity=$ctrl.fillOpacity line-resize=$ctrl.resize line-chart></div><div ng-if=\"$ctrl.type == 'bar'\" style=\"height: 85%; width: 100%\" bar-data=$ctrl.datas bar-x={{$ctrl.xkey}} bar-y=$ctrl.ykeys bar-labels=$ctrl.labels bar-colors=$ctrl.colors bar-resize=$ctrl.resize bar-stacked=$ctrl.stacked bar-hide-hover=$ctrl.hideHover bar-hover-callback=\"$ctrl.hoverCallback(index, options, content, row)\" bar-grid=$ctrl.grid bar-grid-text-color=$ctrl.gridTextColor bar-grid-text-size=$ctrl.gridTextSize , bar-grid-text-family=$ctrl.gridTextFamily bar-grid-text-weight=$ctrl.gridTextWeight bar-axes=$ctrl.axes bar-ymax=$ctrl.ymax bar-ymin=$ctrl.ymin bar-goals=$ctrl.goals bar-goal-stroke-width=$ctrl.goalStrokeWidth bar-goal-line-colors=$ctrl.goalLineColors bar-x-label-angle=$ctrl.xlabelAngle bar-y-label-format=$ctrl.ylabelFormat(y) bar-parse-time=$ctrl.parseTime bar-events=$ctrl.events bar-event-stroke-width=$ctrl.eventStrokeWidth bar-event-line-colors=$ctrl.eventLineColors bar-post-units=$ctrl.postUnits bar-pre-units=$ctrl.preUnits bar-chart></div><div ng-if=\"$ctrl.type == 'area'\" style=\"height: 85%; width: 100%\" area-chart line-colors=$ctrl.colors area-data=$ctrl.datas area-xkey={{$ctrl.xkey}} area-ykeys=$ctrl.ykeys area-labels=$ctrl.labels area-line-width=$ctrl.lineWidth area-point-size=$ctrl.pointSize area-point-fill-colors=$ctrl.pointFillColors area-point-stroke-colors=$ctrl.pointStrokeColors area-ymax=$ctrl.ymax area-ymin=$ctrl.ymin area-smooth=$ctrl.smooth area-hide-hover=$ctrl.hideHover area-hover-callback=\"$ctrl.hoverCallback(index, options, content, row)\" area-parse-time=$ctrl.parseTime area-units=$ctrl.units area-post-units=$ctrl.postUnits area-pre-units=$ctrl.preUnits area-area-date-format=$ctrl.dateFormat(x) area-x-labels=$ctrl.xlabels area-x-label-format=$ctrl.xlabelFormat(x) area-x-label-angle=$ctrl.xlabelAngle area-y-label-format=$ctrl.ylabelFormat(y) area-goals=$ctrl.goals area-goal-stroke-width=$ctrl.goalStrokeWidth area-goal-line-colors=$ctrl.goalLineColors area-events=$ctrl.events area-event-stroke-width=$ctrl.eventStrokeWidth area-event-line-colors=$ctrl.eventLineColors area-continuous-line=$ctrl.continuousLine area-axes=$ctrl.axes area-grid=$ctrl.grid area-grid-text-color=$ctrl.gridTextColor area-grid-text-size=$ctrl.gridTextSize , area-grid-text-family=$ctrl.gridTextFamily area-grid-text-weight=$ctrl.gridTextWeight area-fill-opacity=$ctrl.fillOpacity area-resize=$ctrl.resize area-behave-like-line=$ctrl.behaveLikeLine></div><div ng-if=\"$ctrl.type == 'donut'\" style=\"height: 85%; width: 100%\" donut-data=$ctrl.datas donut-label-color=$ctrl.labelColor donut-background-color=$ctrl.backgroundColor donut-colors=$ctrl.colors donut-formatter=$ctrl.donutFormatter(y,data) donut-resize=$ctrl.resize donut-chart></div></div>"
  );


  $templateCache.put('/UIComponents/dashboard/frontend/components/gauge/gauge.html',
    "<div style=\"width: {{$ctrl.width}}%; height: {{$ctrl.height}}{{$ctrl.heightUnit}}\" class=gauge><div value={{$ctrl.gaugeValue}} value-font-color={{$ctrl.valueFontColor}} min={{$ctrl.min}} max={{$ctrl.max}} hide-min-max={{$ctrl.hideMinMax}} hide-value={{$ctrl.hideValue}} show-inner-shadow={{$ctrl.showInnerShadow}} gauge-color={{$ctrl.gaugeColor}} shadow-opacity={{$ctrl.shadowOpacity}} shadow-size={{$ctrl.shadowSize}} custom-sectors={{$ctrl.customSectors}} label={{$ctrl.label}} label-font-color={{$ctrl.labelFontColor}} start-animation-type={{$ctrl.startAnimationType}} refresh-animation-type={{$ctrl.refreshAnimationType}} counter={{$ctrl.counter}} value-font-family={{$ctrl.valueFontFamily}} relative-gauge-size={{$ctrl.relativeGaugeSize}} value-min-font-size={{$ctrl.valueMinFontSize}} label-min-font-size={{$ctrl.labelMinFontSize}} min-label-min-font-size={{$ctrl.minLabelMinFontSize}} max-label-min-font-size={{$ctrl.maxLabelMinFontSize}} gauge-width-scale={{$ctrl.gaugeWidthScale}} shadow-vertical-offset={{$ctrl.shadowVerticalOffset}} level-colors={{$ctrl.levelColors}} no-gradient={{$ctrl.noGradient}} start-animation-time={{$ctrl.startAnimationTime}} refresh-animation-time={{$ctrl.refreshAnimationTime}} donut={{$ctrl.donut}} donut-start-angle={{$ctrl.donutStartAngle}} reverse={{$ctrl.reverse}} decimals={{$ctrl.decimals}} symbol={{$ctrl.symbol}} format-number={{$ctrl.formatNumber}} human-friendly={{$ctrl.humanFriendly}} human-friendly-decimal={{$ctrl.humanFriendlyDecimal}} on-animation-end={{$ctrl.onAnimationEnd}} pointer={{$ctrl.pointer}} justgage></div></div>"
  );


  $templateCache.put('/UIComponents/dashboard/frontend/components/grid/grid.html',
    "<div class=filter-bar><div class={{$ctrl.class}}><form><div ng-show=\"$ctrl.enableClientSideFilter && $ctrl.mode == 'normal'\" class=\"form-group col-xs-12 col-sm-4 pdr0\"><div class=form-group><input class=form-control ng-change=$ctrl.onFilterChanged() ng-model=$ctrl.quickFilterValue placeholder=\"Client filter\"></div></div><div ng-show=\"$ctrl.enableServerSideFilter && $ctrl.mode == 'infinite'\" class=\"form-group col-xs-12 col-sm-4 pdr0\"><div class=form-group><input class=form-control ng-change=$ctrl.onServerFilterChanged() ng-model=$ctrl.serverFilterText placeholder=\"Server filter\"></div></div><div class=\"col-xs-12 col-sm-4 pull-right text-right\"><button ng-hide={{$ctrl.enableDeleteRow}} ng-click=$ctrl.openConfirmationPopUp() class=\"btn btn-default mt4\" tooltip-placement=left uib-tooltip=\"Delete selected row\"><i class=\"fa fa-close\" aria-hidden=true></i></button> <button ng-hide={{$ctrl.enableAddRow}} ng-click=$ctrl.onAddRow() class=\"btn btn-warning mt4\" tooltip-placement=bottom uib-tooltip=\"Insert row\"><i class=\"fa fa-plus\" aria-hidden=true></i></button></div></form></div></div><div class=col-xs-12 ng-show=$ctrl.showError><div class=alert ng-class=\"'alert-' + ( $ctrl.message.type || 'warning')\">{{$ctrl.message.content}}</div></div><div class=clearfix></div><div class=col-xs-12><div ag-grid=$ctrl.gridOptions class=ag-bootstrap ng-style=$ctrl.style></div></div>"
  );


  $templateCache.put('/UIComponents/dashboard/frontend/components/toggleSwitch/toggle_switch.html',
    "<div ng-click=$ctrl.publishData() ng-style=$ctrl.style><toggle-switch ng-model=$ctrl.switchStatus on-label={{$ctrl.onLabel}} off-label={{$ctrl.offLabel}} knob-label={{$ctrl.knobLabel}} is-disabled=$ctrl.isDisabled class={{$ctrl.class}}></toggle-switch></div>"
  );


  $templateCache.put('/UIComponents/dashboard/frontend/components/map/map.html',
    "<div style=\"height: 90%;\"> \r" +
    "\n" +
    "    <section class=\"map-wrap\" ng-if=\"$ctrl.clusteredView == true || $ctrl.showDetailedMap == false\">\r" +
    "\n" +
    "        <ng-map id=\"{{'clustered-'+$ctrl.$wdgid}}\" on-zoom_changed=\"$ctrl.onClusteredZoomChanged();\"\r" +
    "\n" +
    "                single-info-window=\"true\" zoom-to-inlude-markers=\"true\"\r" +
    "\n" +
    "                center=\"{{$ctrl.mapcenter || $ctrl.defaultCenter}}\"\r" +
    "\n" +
    "                zoom=\"{{$ctrl.clusterZoom}}\">\r" +
    "\n" +
    "            <heatmap-layer ng-if=\"$ctrl.heatmap\"></heatmap-layer>\r" +
    "\n" +
    "        </ng-map>\r" +
    "\n" +
    "          <div  class=\"heatmap\" ng-if=\"$ctrl.heatmap == true\">\r" +
    "\n" +
    "                <h5>Enable Heatmap</h5>\r" +
    "\n" +
    "                  <span>\r" +
    "\n" +
    "                    <scriptr-toggle-switch resize=\"false\" on-switch-change=\"$ctrl.activateHeatMap\" switch-status=\"$ctrl.switchStatus\"class=\"switch-success switch-small\"></scriptr-toggle-switch>\r" +
    "\n" +
    "                  </span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "	<section class=\"map-wrap\" ng-if=\"$ctrl.clusteredView == false || $ctrl.showDetailedMap == true\">\r" +
    "\n" +
    "		<ng-map id=\"{{'detailed-'+$ctrl.$wdgid}}\" on-zoom_changed=\"$ctrl.onDetailedZoomChanged();\"\r" +
    "\n" +
    "			single-info-window=\"true\" zoom-to-inlude-markers=\"true\"\r" +
    "\n" +
    "			center=\"{{$ctrl.mapcenter || $ctrl.defaultcenter}}\"\r" +
    "\n" +
    "			zoom=\"{{$ctrl.detailedmapzoom}}\">\r" +
    "\n" +
    "            <drawing-manager ng-if=\"$ctrl.geofenceManager == true\"\r" +
    "\n" +
    "                on-overlaycomplete=\"$ctrl.onMapOverlayCompleted()\"\r" +
    "\n" +
    "                drawing-control-options=\"{{$ctrl.drawingOptions}}\"\r" +
    "\n" +
    "                drawingControl=\"{{$ctrl.drawingControl}}\"\r" +
    "\n" +
    "                drawingMode=\"null\"\r" +
    "\n" +
    "                rectangleOptions=\"{{$ctrl.overlaySettings}}\"\r" +
    "\n" +
    "               >\r" +
    "\n" +
    "              </drawing-manager>\r" +
    "\n" +
    "		<div>\r" +
    "\n" +
    "			<div ng-repeat=\"(key, asset) in $ctrl.displayedAssets\">\r" +
    "\n" +
    "				<shape name=\"polyline\" path=\"{{asset.path}}\"\r" +
    "\n" +
    "					stroke-color=\"{{asset.pathColor}}\"\r" +
    "\n" +
    "					stroke-opacity=\"{{asset.strokeOpacity}}\"\r" +
    "\n" +
    "					stroke-width=\"{{asset.strokeWeight}}\" icons=\"{{asset.pathIcon}}\">\r" +
    "\n" +
    "				</shape>\r" +
    "\n" +
    "				<div ng-repeat=\"marker in asset.markers track by $index\">\r" +
    "\n" +
    "					<div ng-if=\"$ctrl.trackedAsset == null\">\r" +
    "\n" +
    "						<marker position=\"{{marker.position}}\" title=\"{{marker.display}}\" animation={{marker.animation}}\r" +
    "\n" +
    "							icon=\"{{marker.icon}}\"\r" +
    "\n" +
    "							on-click=\"$ctrl.showAssetInfo(event, marker, '{{marker.assetKey}}', '{{marker.tripKey}}', '{{marker.id}}')\">\r" +
    "\n" +
    "						</marker>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "					<div ng-if=\"$ctrl.trackedAsset !=null\">\r" +
    "\n" +
    "						<marker position=\"{{marker.position}}\" title=\"{{marker.title}}\" animation={{marker.animation}}\r" +
    "\n" +
    "							icon=\"{{marker.icon}}\" clickable=\"false\">\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<!-- end trip markers loop -->\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "        <div ng-if=\"$ctrl.selectedAsset != null && $ctrl.markerInfoWindow == true\"  >\r" +
    "\n" +
    "			<div ng-transclude></div>\r" +
    "\n" +
    "          	<info-window id=\"{{'infoWindowTemplate_default_'+$ctrl.$wdgid}}\">\r" +
    "\n" +
    "              	<div ng-non-bindable=\"\">\r" +
    "\n" +
    "                  <!-- begin table -->\r" +
    "\n" +
    "                  <table class=\"table table-bordered\">\r" +
    "\n" +
    "                    <thead>\r" +
    "\n" +
    "                      <tr>\r" +
    "\n" +
    "                        <th ng-repeat=\"(key, value) in marker.details\">{{key}}</th>\r" +
    "\n" +
    "                      </tr>\r" +
    "\n" +
    "                    </thead>\r" +
    "\n" +
    "                    <tbody>\r" +
    "\n" +
    "                      <tr>\r" +
    "\n" +
    "                        <td ng-repeat=\"(key, value) in marker.details\">{{value.value || \"N/A\"}}</td>\r" +
    "\n" +
    "                      </tr>\r" +
    "\n" +
    "                    </tbody>\r" +
    "\n" +
    "                  </table>\r" +
    "\n" +
    "               </div>\r" +
    "\n" +
    "          	</info-window>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "        <heatmap-layer ng-if=\"$ctrl.heatmap\"></heatmap-layer>     \r" +
    "\n" +
    "		</ng-map>\r" +
    "\n" +
    "          \r" +
    "\n" +
    "        <div  class=\"messages\" ng-show=\"$ctrl.drawingMessages != null\">\r" +
    "\n" +
    "            <div class=\"alert alert-warning\">\r" +
    "\n" +
    "              {{$ctrl.drawingMessages}}\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div  class=\"heatmap\" ng-if=\"$ctrl.heatmap == true\">\r" +
    "\n" +
    "                <h5>Enable Heatmap</h5>\r" +
    "\n" +
    "                  <span>\r" +
    "\n" +
    "                    <scriptr-toggle-switch resize=\"false\" on-switch-change=\"$ctrl.activateHeatMap\" switch-status=\"$ctrl.switchStatus\"class=\"switch-success switch-small\"></scriptr-toggle-switch>\r" +
    "\n" +
    "                  </span>\r" +
    "\n" +
    "        </div>         \r" +
    "\n" +
    "        <div ng-if=\"$ctrl.geofenceManager == true\" class=\"drawingmanager-buttons\">\r" +
    "\n" +
    "            <span>\r" +
    "\n" +
    "              <a ng-click=\"$ctrl.removeGeofence()\" data-toggle=\"tooltip\" title=\"Delete geofence\" data-placement=\"bottom\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\r" +
    "\n" +
    "              <a  ng-click=\"$ctrl.saveGeofence()\" data-toggle=\"tooltip\" title=\"Save geofence\" data-placement=\"bottom\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i></a>\r" +
    "\n" +
    "              <a type=\"button\" data-toggle=\"tooltip\" title=\"Locate geofence\" ng-click=\"$ctrl.focusGeofence()\" data-placement=\"bottom\"><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i></a>\r" +
    "\n" +
    "              <a type=\"button\" data-toggle=\"tooltip\" title=\"Locate vehicle\" ng-click=\"$ctrl.focusVehicle()\" data-placement=\"bottom\"><i class=\"fa fa-car aria-hidden=\"true\"></i> </a>\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "	</section>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/UIComponents/layout/frontend/components/header/header.html',
    "<header><div class={{$ctrl.class}}><div class=\"logo pull-left\"><img src={{$ctrl.logo}} class=img-responsive></div><div class=\"pull-left appname\">{{$ctrl.appname}}</div><div class=pull-right><div class=\"header-items pull-left\"><div ng-repeat=\"item in $ctrl.items track by $index\" class=pull-left><a ng-click=$ctrl.onItemClick(item) route={{item.route}} index=\"{{colIndex = $index}}\" ng-click=$ctrl.addSelectedClass(colIndex) href={{item.route}}><i class={{item.icon}} aria-hidden=true></i> {{item.label}}</a></div></div><div class=\"pull-left username\"><div class=btn-group uib-dropdown is-open=status.isopen><button id=username-button type=button class=\"btn btn-primary\" uib-dropdown-toggle ng-disabled=disabled><i ng-show=\"$ctrl.user != null\" class=\"fa fa-user-circle\"></i> {{$ctrl.user.login || $ctrl.caretlabel }} <span class=caret></span></button><ul class=\"dropdown-menu dropdown-menu-right\" uib-dropdown-menu role=menu aria-labelledby=single-button><li ng-if=\"$ctrl.inGroup(item.roles) || !item.roles\" role=menuitem ng-repeat=\"item in $ctrl.subitems track by $index\"><a href={{item.route}}><i class={{item.icon}} aria-hidden=true></i> {{item.label}}</a></li><li ng-show=\"$ctrl.logout && $ctrl.subitems.length > 0\" class=divider></li><li ng-show=$ctrl.logout role=menuitem><a href={{$ctrl.logout.route}}><i class={{$ctrl.logout.icon}} aria-hidden=true></i> {{$ctrl.logout.label || \"Logout\"}}</a></li></ul></div></div></div></div></header>"
  );


  $templateCache.put('/UIComponents/layout/frontend/components/menu/menu.html',
    "<div><div id=\"{{colIndex = $index}}\" ng-class=\"{'side-bar sm level-bg-{{$index}}' : col.class == 'sm', 'side-bar md level-bg-{{$index}}' : col.class == 'md'}\" ng-repeat=\"col in $ctrl.cols track by $index\"><ul class=\"nav nav-pills\" ng-if=$ctrl.currentRoute><li ng-if=\"col.class == 'sm' && ($ctrl.inGroup(item.roles) || !item.roles)\" tooltip-placement=right tooltip-append-to-body=true uib-tooltip={{item.label}} index=\"{{liIndex = $index}}\" ng-repeat=\"item in $ctrl.menuItems[col.key] track by $index\" ng-class=\"(item.route == $ctrl.currentRoute) ? 'active' : ''\"><a href={{item.route}}/{{$ctrl.lockId.value}} ng-click=\"$ctrl.route(item, $event, col.key, colIndex, liIndex)\"><i aria-hidden=true class={{item.iconClass}}></i><strong>{{item.label}}</strong> <i ng-show=item.sub aria-hidden=true class=\"fa fa-angle-right sub-menu-indicator\"></i></a></li><li ng-if=\"col.class == 'md' && ($ctrl.inGroup(item.roles) || !item.roles)\" index=\"{{liIndex = $index}}\" ng-repeat=\"item in $ctrl.menuItems[col.key] track by $index\" class=tool-tip ng-class=\"(item.route == $ctrl.currentRoute) ? 'active' : ''\"><a href={{item.route}}/{{$ctrl.lockId.value}} ng-click=\"$ctrl.route(item, $event, col.key, colIndex, liIndex)\" title={{item.label}}><i aria-hidden=true class={{item.iconClass}}></i><strong>{{item.label}}</strong> <i ng-show=item.sub aria-hidden=true class=\"fa fa-angle-right sub-menu-indicator\"></i></a></li></ul></div></div>"
  );
}])