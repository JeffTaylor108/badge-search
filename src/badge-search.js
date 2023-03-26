import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class BadgeSearch extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
div {
  display: block;
}
.page-content {
  margin-top: 0px;
  padding: 0px;
}
.page-head .page-title {
  display: inline-block;
  float: left;
  padding: 5px 0 10px 0;
}
h1 {
  color: #333333;
}

h1 {
  font-size: 36px;
  margin-top: 0;
  margin-bottom: 20px;
}
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.row {
  margin-left: -15px;
  margin-right: -15px;
}
.col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
.portlet.light .portlet-body {
  padding-top: 8px;
}
.portlet .portlet-body {
  clear: both;
  -webkit-border-radius: 0 0 4px 4px;
  -moz-border-radius: 0 0 4px 4px;
  -ms-border-radius: 0 0 4px 4px;
  -o-border-radius: 0 0 4px 4px;
  border-radius: 0 0 4px 4px;
}
.search {
  margin-top: 30px;
  margin-right: 5px;
  margin-left: 5px;
  padding: 10px;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.3);
}
form {
  display: block;
  margin-top: 0em;
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
label {
  font-weight: 400;
  font-size: 14px;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}
.margin-top-10 {
  margin-top: 10px !important;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
.nav-tabs, .nav-pills {
  margin-bottom: 10px;
}

.nav-tabs {
  border-bottom: 1px solid #ddd;
}
.nav {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}

.nav > li {
  position: relative;
  display: block;
}

.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {
  color: #555555;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
  cursor: default;
}
.nav-tabs > li > a, .nav-pills > li > a {
  font-size: 14px;
  -webkit-border-radius: 4px 4px 0 0;
  -moz-border-radius: 4px 4px 0 0;
  -ms-border-radius: 4px 4px 0 0;
  -o-border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0 0;
}
.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.428571429;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}
.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}
a {
  text-shadow: none;
  color: #337ab7;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a {
  background-color: transparent;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}

.text-right {
  text-align: right;
}
element.style {
  margin-right: 5px;
}
.inline {
  display: inline;
}
.form-group {
  margin-bottom: 15px;
}
body[class^="explore_badges"] select[ng-model="searchData.topic"] {
  width: 198px;
}

input, button, select, textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button, select {
  text-transform: none;
}
button, input, optgroup, select, textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
.inline {
  display: inline;
}

.form-group {
  margin-bottom: 15px;
}
body[class^="explore_badges"] select[ng-model="sortBy"] {
  width: 71px;
}

input, button, select, textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button, select {
  text-transform: none;
}
button, input, optgroup, select, textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
.portlet.light .portlet-body {
  padding-top: 8px;
}

.portlet .portlet-body {
  clear: both;
  -webkit-border-radius: 0 0 4px 4px;
  -moz-border-radius: 0 0 4px 4px;
  -ms-border-radius: 0 0 4px 4px;
  -o-border-radius: 0 0 4px 4px;
  border-radius: 0 0 4px 4px;
}
.tiles {
  margin-right: -10px;
}
.tiles .tile.category-14 {
  background: transparent;
  border: 1px solid #fff;
  border-color: #3e98d3;
}

.tiles .badge-tile.tile, .tiles .group-tile.tile, .tiles .portfolio-tile.tile, .tiles .user-tile.tile, .tiles .mission-tile.tile {
  border-radius: 6px;
  background-color: #fff;
}
.tiles .tile.double {
  width: 280px !important;
}
.tiles .tile {
  display: block;
  letter-spacing: 0.02em;
  float: left;
  height: 135px;
  width: 135px !important;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  position: relative;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  overflow: hidden;
  border: 4px solid transparent;
  margin: 0 10px 10px 0;
}
.category-14, .category-14.a, .category-14.btn-default {
  border-color: #3e98d3;
  background-color: #cfe6f4;
}
a {
  text-shadow: none;
  color: #337ab7;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a {
  background-color: transparent;
}
.tiles .tile.category-14 .badge-top {
  background-color: #cfe6f4;
  border-left: 15px solid #3e98d3;
  color: #333333;
}

.tiles .badge-tile.tile .badge-top, .tiles .badge-tile.tile .tile-top, .tiles .badge-tile.tile .portfolio-top, .tiles .badge-tile.tile .user-top, .tiles .group-tile.tile .badge-top, .tiles .group-tile.tile .tile-top, .tiles .group-tile.tile .portfolio-top, .tiles .group-tile.tile .user-top, .tiles .portfolio-tile.tile .badge-top, .tiles .portfolio-tile.tile .tile-top, .tiles .portfolio-tile.tile .portfolio-top, .tiles .portfolio-tile.tile .user-top, .tiles .user-tile.tile .badge-top, .tiles .user-tile.tile .tile-top, .tiles .user-tile.tile .portfolio-top, .tiles .user-tile.tile .user-top, .tiles .mission-tile.tile .badge-top, .tiles .mission-tile.tile .tile-top, .tiles .mission-tile.tile .portfolio-top, .tiles .mission-tile.tile .user-top {
  font-weight: 400;
  height: 2.25em;
  line-height: 2.25em;
  padding: 0 0.75em;
}
.tiles .tile.category-14 .tile-body, .tiles .tile.category-14 .tile-object {
  border-left: 15px solid #3e98d3;
}

.tiles .badge-tile.tile .tile-body, .tiles .group-tile.tile .tile-body, .tiles .portfolio-tile.tile .tile-body, .tiles .user-tile.tile .tile-body, .tiles .mission-tile.tile .tile-body {
  height: auto;
}
.tiles .tile .tile-body {
  height: 100%;
  vertical-align: top;
  padding: 10px 10px;
  overflow: hidden;
  position: relative;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 10px;
}
.tiles .badge-tile.tile .tile-body h3, .tiles .badge-tile.tile .tile-body .h3, .tiles .group-tile.tile .tile-body h3, .tiles .group-tile.tile .tile-body .h3, .tiles .portfolio-tile.tile .tile-body h3, .tiles .portfolio-tile.tile .tile-body .h3, .tiles .user-tile.tile .tile-body h3, .tiles .user-tile.tile .tile-body .h3, .tiles .mission-tile.tile .tile-body h3, .tiles .mission-tile.tile .tile-body .h3 {
  word-break: break-word;
  color: #333333;
  line-height: 0.9em;
  margin-top: 0;
  margin-bottom: 5px;
}

.tiles .tile.category-14 .tile-body, .tiles .tile.category-14 .tile-object {
  border-left: 15px solid #3e98d3;
}
.tiles .tile .tile-object {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 30px;
  background-color: transparent;
  *zoom: 1;
}
.tiles .tile.category-14 .tile-object > .name {
  margin-bottom: 2px;
}
.tiles .badge-tile.tile .tile-object > .name, .tiles .group-tile.tile .tile-object > .name, .tiles .portfolio-tile.tile .tile-object > .name, .tiles .user-tile.tile .tile-object > .name, .tiles .mission-tile.tile .tile-object > .name {
  color: #333333;
}
.tiles .tile .tile-object > .name {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 15px;
  font-weight: 400;
  font-size: 13px;
  color: #ffffff;
}
.tiles .tile.category-5 {
  background: transparent;
  border: 1px solid #fff;
  border-color: #efc22d;
}

.tiles .badge-tile.tile, .tiles .group-tile.tile, .tiles .portfolio-tile.tile, .tiles .user-tile.tile, .tiles .mission-tile.tile {
  border-radius: 6px;
  background-color: #fff;
}
.tiles .tile.double {
  width: 280px !important;
}
.tiles .tile {
  display: block;
  letter-spacing: 0.02em;
  float: left;
  height: 135px;
  width: 135px !important;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  position: relative;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  overflow: hidden;
  border: 4px solid transparent;
  margin: 0 10px 10px 0;
}
.category-5, .category-5.a, .category-5.btn-default {
  border-color: #efc22d;
  background-color: #fcf2d3;
}
a {
  text-shadow: none;
  color: #337ab7;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a {
  background-color: transparent;
}
.tiles .tile.category-5 .badge-top {
  background-color: #fcf2d3;
  border-left: 15px solid #efc22d;
  color: #333333;
}

.tiles .badge-tile.tile .badge-top, .tiles .badge-tile.tile .tile-top, .tiles .badge-tile.tile .portfolio-top, .tiles .badge-tile.tile .user-top, .tiles .group-tile.tile .badge-top, .tiles .group-tile.tile .tile-top, .tiles .group-tile.tile .portfolio-top, .tiles .group-tile.tile .user-top, .tiles .portfolio-tile.tile .badge-top, .tiles .portfolio-tile.tile .tile-top, .tiles .portfolio-tile.tile .portfolio-top, .tiles .portfolio-tile.tile .user-top, .tiles .user-tile.tile .badge-top, .tiles .user-tile.tile .tile-top, .tiles .user-tile.tile .portfolio-top, .tiles .user-tile.tile .user-top, .tiles .mission-tile.tile .badge-top, .tiles .mission-tile.tile .tile-top, .tiles .mission-tile.tile .portfolio-top, .tiles .mission-tile.tile .user-top {
  font-weight: 400;
  height: 2.25em;
  line-height: 2.25em;
  padding: 0 0.75em;
}
.tiles .tile.category-5 .tile-body, .tiles .tile.category-5 .tile-object {
  border-left: 15px solid #efc22d;
}

.tiles .badge-tile.tile .tile-body, .tiles .group-tile.tile .tile-body, .tiles .portfolio-tile.tile .tile-body, .tiles .user-tile.tile .tile-body, .tiles .mission-tile.tile .tile-body {
  height: auto;
}
.tiles .tile .tile-body {
  height: 100%;
  vertical-align: top;
  padding: 10px 10px;
  overflow: hidden;
  position: relative;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 10px;
}
.tiles .badge-tile.tile .tile-body h3, .tiles .badge-tile.tile .tile-body .h3, .tiles .group-tile.tile .tile-body h3, .tiles .group-tile.tile .tile-body .h3, .tiles .portfolio-tile.tile .tile-body h3, .tiles .portfolio-tile.tile .tile-body .h3, .tiles .user-tile.tile .tile-body h3, .tiles .user-tile.tile .tile-body .h3, .tiles .mission-tile.tile .tile-body h3, .tiles .mission-tile.tile .tile-body .h3 {
  word-break: break-word;
  color: #333333;
  line-height: 0.9em;
  margin-top: 0;
  margin-bottom: 5px;
}

.tiles .tile .tile-body h3, .tiles .tile .tile-body h4 {
  margin-bottom: 5px;
}
.tiles .tile .tile-body h1, .tiles .tile .tile-body h2, .tiles .tile .tile-body h3, .tiles .tile .tile-body h4, .tiles .tile .tile-body h5, .tiles .tile .tile-body h6, .tiles .tile .tile-body p {
  padding: 0;
  margin: 0;
  line-height: 14px;
}
h3 {
  font-size: 24px;
}
h1, h2, h3, h4, h5, h6 {
  font-family: "effra", sans-serif;
  font-weight: 300;
}
h3, .h3 {
  font-size: 24px;
}
h1, .h1, h2, .h2, h3, .h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
element.style {
  width: 60px;
  height: 60px;
  display: block;
}
.pull-right {
  float: right;
}
.pull-right {
  float: right;
}
.pull-right {
  float: right !important;
}
.tiles .tile.category-13 {
  background: transparent;
  border: 1px solid #fff;
  border-color: #6884C1;
}

.tiles .badge-tile.tile, .tiles .group-tile.tile, .tiles .portfolio-tile.tile, .tiles .user-tile.tile, .tiles .mission-tile.tile {
  border-radius: 6px;
  background-color: #fff;
}
.tiles .tile.double {
  width: 280px !important;
}
.tiles .tile {
  display: block;
  letter-spacing: 0.02em;
  float: left;
  height: 135px;
  width: 135px !important;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  position: relative;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  overflow: hidden;
  border: 4px solid transparent;
  margin: 0 10px 10px 0;
}
.category-13, .category-13.a, .category-13.btn-default {
  border-color: #6884C1;
  background-color: #e7ebf5;
}
a {
  text-shadow: none;
  color: #337ab7;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a {
  background-color: transparent;
}
.tiles .tile.category-13 .badge-top {
  background-color: #e7ebf5;
  border-left: 15px solid #6884C1;
  color: #333333;
}

.tiles .badge-tile.tile .badge-top, .tiles .badge-tile.tile .tile-top, .tiles .badge-tile.tile .portfolio-top, .tiles .badge-tile.tile .user-top, .tiles .group-tile.tile .badge-top, .tiles .group-tile.tile .tile-top, .tiles .group-tile.tile .portfolio-top, .tiles .group-tile.tile .user-top, .tiles .portfolio-tile.tile .badge-top, .tiles .portfolio-tile.tile .tile-top, .tiles .portfolio-tile.tile .portfolio-top, .tiles .portfolio-tile.tile .user-top, .tiles .user-tile.tile .badge-top, .tiles .user-tile.tile .tile-top, .tiles .user-tile.tile .portfolio-top, .tiles .user-tile.tile .user-top, .tiles .mission-tile.tile .badge-top, .tiles .mission-tile.tile .tile-top, .tiles .mission-tile.tile .portfolio-top, .tiles .mission-tile.tile .user-top {
  font-weight: 400;
  height: 2.25em;
  line-height: 2.25em;
  padding: 0 0.75em;
}
.tiles .tile.category-13 .tile-body, .tiles .tile.category-13 .tile-object {
  border-left: 15px solid #6884C1;
}

.tiles .badge-tile.tile .tile-body, .tiles .group-tile.tile .tile-body, .tiles .portfolio-tile.tile .tile-body, .tiles .user-tile.tile .tile-body, .tiles .mission-tile.tile .tile-body {
  height: auto;
}
.tiles .tile .tile-body {
  height: 100%;
  vertical-align: top;
  padding: 10px 10px;
  overflow: hidden;
  position: relative;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 10px;
}
element.style {
  width: 60px;
  height: 60px;
  display: block;
}
.pull-right {
  float: right;
}
.pull-right {
  float: right;
}
.pull-right {
  float: right !important;
}
.tiles .badge-tile.tile .tile-body h3, .tiles .badge-tile.tile .tile-body .h3, .tiles .group-tile.tile .tile-body h3, .tiles .group-tile.tile .tile-body .h3, .tiles .portfolio-tile.tile .tile-body h3, .tiles .portfolio-tile.tile .tile-body .h3, .tiles .user-tile.tile .tile-body h3, .tiles .user-tile.tile .tile-body .h3, .tiles .mission-tile.tile .tile-body h3, .tiles .mission-tile.tile .tile-body .h3 {
  word-break: break-word;
  color: #333333;
  line-height: 0.9em;
  margin-top: 0;
  margin-bottom: 5px;
}

.tiles .tile .tile-body h3, .tiles .tile .tile-body h4 {
  margin-bottom: 5px;
}
.tiles .tile .tile-body h1, .tiles .tile .tile-body h2, .tiles .tile .tile-body h3, .tiles .tile .tile-body h4, .tiles .tile .tile-body h5, .tiles .tile .tile-body h6, .tiles .tile .tile-body p {
  padding: 0;
  margin: 0;
  line-height: 14px;
}
h3 {
  font-size: 24px;
}
h1, h2, h3, h4, h5, h6 {
  font-family: "effra", sans-serif;
  font-weight: 300;
}
.tiles .tile.category-13 .tile-object > .name {
  margin-bottom: 2px;
}

.tiles .badge-tile.tile .tile-object > .name, .tiles .group-tile.tile .tile-object > .name, .tiles .portfolio-tile.tile .tile-object > .name, .tiles .user-tile.tile .tile-object > .name, .tiles .mission-tile.tile .tile-object > .name {
  color: #333333;
}
.tiles .tile .tile-object > .name {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 15px;
  font-weight: 400;
  font-size: 13px;
  color: #ffffff;
}
.tiles .tile.category-5 .tile-object > .name {
  margin-bottom: 2px;
}

.tiles .badge-tile.tile .tile-object > .name, .tiles .group-tile.tile .tile-object > .name, .tiles .portfolio-tile.tile .tile-object > .name, .tiles .user-tile.tile .tile-object > .name, .tiles .mission-tile.tile .tile-object > .name {
  color: #333333;
}
.tiles .tile .tile-object > .name {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 15px;
  font-weight: 400;
  font-size: 13px;
  color: #ffffff;
}
.tiles .tile.category-1 {
  background: transparent;
  border: 1px solid #fff;
  border-color: #4FA86E;
}

.tiles .badge-tile.tile, .tiles .group-tile.tile, .tiles .portfolio-tile.tile, .tiles .user-tile.tile, .tiles .mission-tile.tile {
  border-radius: 6px;
  background-color: #fff;
}
.tiles .tile.double {
  width: 280px !important;
}
.tiles .tile {
  display: block;
  letter-spacing: 0.02em;
  float: left;
  height: 135px;
  width: 135px !important;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  position: relative;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  overflow: hidden;
  border: 4px solid transparent;
  margin: 0 10px 10px 0;
}
.category-1, .category-1.a, .category-1.btn-default {
  border-color: #4FA86E;
  background-color: #cce7d6;
}
a {
  text-shadow: none;
  color: #337ab7;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a {
  background-color: transparent;
}
.tiles .tile.category-1 .badge-top {
  background-color: #cce7d6;
  border-left: 15px solid #4FA86E;
  color: #333333;
}

.tiles .badge-tile.tile .badge-top, .tiles .badge-tile.tile .tile-top, .tiles .badge-tile.tile .portfolio-top, .tiles .badge-tile.tile .user-top, .tiles .group-tile.tile .badge-top, .tiles .group-tile.tile .tile-top, .tiles .group-tile.tile .portfolio-top, .tiles .group-tile.tile .user-top, .tiles .portfolio-tile.tile .badge-top, .tiles .portfolio-tile.tile .tile-top, .tiles .portfolio-tile.tile .portfolio-top, .tiles .portfolio-tile.tile .user-top, .tiles .user-tile.tile .badge-top, .tiles .user-tile.tile .tile-top, .tiles .user-tile.tile .portfolio-top, .tiles .user-tile.tile .user-top, .tiles .mission-tile.tile .badge-top, .tiles .mission-tile.tile .tile-top, .tiles .mission-tile.tile .portfolio-top, .tiles .mission-tile.tile .user-top {
  font-weight: 400;
  height: 2.25em;
  line-height: 2.25em;
  padding: 0 0.75em;
}
.tiles .tile.category-1 .tile-body, .tiles .tile.category-1 .tile-object {
  border-left: 15px solid #4FA86E;
}

.tiles .badge-tile.tile .tile-body, .tiles .group-tile.tile .tile-body, .tiles .portfolio-tile.tile .tile-body, .tiles .user-tile.tile .tile-body, .tiles .mission-tile.tile .tile-body {
  height: auto;
}
.tiles .tile .tile-body {
  height: 100%;
  vertical-align: top;
  padding: 10px 10px;
  overflow: hidden;
  position: relative;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 10px;
}
.tiles .tile.category-1 .tile-object > .name {
  margin-bottom: 2px;
}

.tiles .badge-tile.tile .tile-object > .name, .tiles .group-tile.tile .tile-object > .name, .tiles .portfolio-tile.tile .tile-object > .name, .tiles .user-tile.tile .tile-object > .name, .tiles .mission-tile.tile .tile-object > .name {
  color: #333333;
}
.tiles .tile .tile-object > .name {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 15px;
  font-weight: 400;
  font-size: 13px;
  color: #ffffff;
}


  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <div class="page-content-wrapper">
    <div class="page-content">


      
<div class="page-head">
<div class="page-title"><h1>Explore</h1></div>
</div>

<div class="row ng-scope" ng-controller="ExploreCtrl">
<div class="col-lg-12">

<div class="portlet light">
  <div class="portlet-body">

    <div class="h3">
      Explore our content in a self-guided manner. Want us to guide you through learning new skills?
      Try out <a href="/explore/missions">Missions</a>.
      Looking for other people with similar focus? Find them in <a href="/explore/groups">Groups</a>.
      Interested in viewing all the options within a certain subject area?
      You can do that with <a href="/explore/topics">Topics</a>.
    </div>

    <div class="search">
      <div class="search-container">
        <form class="search-form ng-pristine ng-valid" id="searchForm" ng-submit="search(true)">
          <div class="search-input input-group">
            <span class="input-group-addon" id="search-group-addon"><i class="fa fa-search"></i></span>
            <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-empty" id="q" name="q" placeholder="Search Content, Topics, and People" ng-model="searchData.q" fdprocessedid="4gau7f">
            <label for="search" class="sr-only">Search Content, Topics, and People</label>
          </div>
          <input type="submit" value="Submit Search" class="sr-only btn btn-default btn-xs" fdprocessedid="bnt9b">
        </form>
      </div>
    </div>
    <div class="row margin-top-10">
      <div class="col-md-6">
        <ul class="nav nav-tabs">
          <!-- ngRepeat: tab in tabs track by $index --><li ng-repeat="tab in tabs track by $index" ng-class="{active: tab.active}" class="ng-scope active">
            <a href="javascript:void(0);" ng-click="changeType(tab.type, $index)" class="ng-binding">All</a>
          </li><!-- end ngRepeat: tab in tabs track by $index --><li ng-repeat="tab in tabs track by $index" ng-class="{active: tab.active}" class="ng-scope">
            <a href="javascript:void(0);" ng-click="changeType(tab.type, $index)" class="ng-binding">Missions</a>
          </li><!-- end ngRepeat: tab in tabs track by $index --><li ng-repeat="tab in tabs track by $index" ng-class="{active: tab.active}" class="ng-scope">
            <a href="javascript:void(0);" ng-click="changeType(tab.type, $index)" class="ng-binding">Groups</a>
          </li><!-- end ngRepeat: tab in tabs track by $index --><li ng-repeat="tab in tabs track by $index" ng-class="{active: tab.active}" class="ng-scope">
            <a href="javascript:void(0);" ng-click="changeType(tab.type, $index)" class="ng-binding">Badges</a>
          </li><!-- end ngRepeat: tab in tabs track by $index --><li ng-repeat="tab in tabs track by $index" ng-class="{active: tab.active}" class="ng-scope">
            <a href="javascript:void(0);" ng-click="changeType(tab.type, $index)" class="ng-binding">People</a>
          </li><!-- end ngRepeat: tab in tabs track by $index -->
        </ul>
      </div>
      <div class="col-md-6 text-right">
        <div class="form-group inline" style="margin-right: 5px;">
          <label>Topic:
            <select ng-model="searchData.topic" ng-options="t.id as t.name for t in topics" ng-change="search(true)" class="ng-pristine ng-untouched ng-valid ng-not-empty" fdprocessedid="y3dr0u"><option label="All Topics" value="string:all" selected="selected">All Topics</option><option label="Agriculture &amp; Natural Resources" value="number:1">Agriculture &amp; Natural Resources</option><option label="Arts &amp; Architecture" value="number:11">Arts &amp; Architecture</option><option label="Business &amp; Finance" value="number:15">Business &amp; Finance</option><option label="Citizenship &amp; Ethics" value="number:2">Citizenship &amp; Ethics</option><option label="Clubs &amp; Events" value="number:3">Clubs &amp; Events</option><option label="Communications" value="number:10">Communications</option><option label="Education" value="number:5">Education</option><option label="Engineering" value="number:12">Engineering</option><option label="Health &amp; Medicine" value="number:9">Health &amp; Medicine</option><option label="Humanities &amp; Language" value="number:8">Humanities &amp; Language</option><option label="Just for Fun" value="number:6">Just for Fun</option><option label="Law &amp; Criminology" value="number:16">Law &amp; Criminology</option><option label="Professional Skills" value="number:13">Professional Skills</option><option label="Science &amp; Mathematics" value="number:4">Science &amp; Mathematics</option><option label="Social Sciences" value="number:7">Social Sciences</option><option label="Technology &amp; Information" value="number:14">Technology &amp; Information</option></select>
          </label>
        </div>
        <div class="form-group inline">
          <label>Sort by:
            <select ng-model="sortBy" ng-options="sort as sort.name for sort in sorts" ng-change="sort()" class="ng-pristine ng-untouched ng-valid ng-empty" fdprocessedid="3al4da"><option value="?" selected="selected"></option><option label="Newest" value="object:26">Newest</option><option label="Oldest" value="object:27">Oldest</option><option label="A - Z" value="object:28">A - Z</option><option label="Z - A" value="object:29">Z - A</option></select>
          </label>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ngIf: !hasSearched --><div id="results" ng-if="!hasSearched" class="ng-scope">
  <!-- TODO: CONVERT TO ANGULAR -->
    <div class="portlet light">
      <div class="portlet-title">
        <h2 class="caption bold">Looking for something brand spankin' new? Here are the most recently added badges!</h2>
      </div>
      <div class="portlet-body">
        <div id="badges" class="tiles">
            


<a class="tile badge-tile double category-14" id="badge_337" data-badge-id="337" data-model="badge" href="/badges/337/earn">

<div class="badge-top">
  <span class="pull-left">Technology &amp; Information</span>
</div>

<div class="tile-body">

  <div class="badge-image pull-right" style="width: 60px; height: 60px; display: block;">
    <div style="width: 60px; height: 60px; display: block; background-size: contain; background-repeat: no-repeat; background-image: url(/uploads/badge/image/337/APA_Style.png)"></div>
  </div>

  <h3> APA Style Citations: Introduction</h3>
</div>

<div class="tile-object">
  <div class="name">
    Creator: Victoria Raish 
    
    
    
  </div>
</div>
</a>

            


<a class="tile badge-tile double category-5" id="badge_692" data-badge-id="692" data-model="badge" href="/badges/692/earn">

<div class="badge-top">
  <span class="pull-left">Education</span>
</div>

<div class="tile-body">

  <div class="badge-image pull-right" style="width: 60px; height: 60px; display: block;">
    <div style="width: 60px; height: 60px; display: block; background-size: contain; background-repeat: no-repeat; background-image: url(/uploads/badge/image/692/icon125-color15.png)"></div>
  </div>

  <h3> IST Career Resources</h3>
</div>

<div class="tile-object">
  <div class="name">
    Creator: Cassie Rosas-Carson 
    
    
    
  </div>
</div>
</a>

            


<a class="tile badge-tile double category-13" id="badge_687" data-badge-id="687" data-model="badge" href="/badges/687/earn">

<div class="badge-top">
  <span class="pull-left">Professional Skills</span>
</div>

<div class="tile-body">

  <div class="badge-image pull-right" style="width: 60px; height: 60px; display: block;">
    <div style="width: 60px; height: 60px; display: block; background-size: contain; background-repeat: no-repeat; background-image: url(/uploads/badge/image/687/icon108-color16.png)"></div>
  </div>

  <h3> IST Careers - Meet a Coach - level 2</h3>
</div>

<div class="tile-object">
  <div class="name">
    Creator: Rita Griffith 
    
    
    
  </div>
</div>
</a>

            


<a class="tile badge-tile double category-1" id="badge_676" data-badge-id="676" data-model="badge" href="/badges/676/earn">

<div class="badge-top">
  <span class="pull-left">Agriculture &amp; Natural Resources</span>
</div>

<div class="tile-body">

  <div class="badge-image pull-right" style="width: 60px; height: 60px; display: block;">
    <div style="width: 60px; height: 60px; display: block; background-size: contain; background-repeat: no-repeat; background-image: url(/uploads/badge/image/676/icon77-color14.png)"></div>
  </div>

  <h3> [test] Treat Yourself</h3>
</div>

<div class="tile-object">
  <div class="name">
    Creator: Allain Daigle 
    
    
    
  </div>
</div>
</a>

          <div class="clearfix"></div>
        </div>
      </div>
    </div>

</div><!-- end ngIf: !hasSearched -->
<!-- ngIf: hasSearched -->
</div>
</div>

    </div>
  </div>
    `;
  }
}

customElements.define('badge-search', BadgeSearch);