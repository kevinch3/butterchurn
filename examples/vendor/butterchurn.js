{
  const defineMath = (name, assignment) => {
    var configurable = typeof assignment === "function" ? true : false;
    var writable = typeof assignment === "function" ? true : false;
    var enumerable = typeof assignment === "function" ? true : false;

    Object.defineProperty(Math, name, {
      configurable: configurable,
      enumerable: enumerable,
      writable: writable,
      value: assignment
    });
  };

  defineMath("DEG_PER_RAD", Math.PI / 180);
  defineMath("RAD_PER_DEG", 180 / Math.PI);

  const f32A = new Float32Array(1);

  defineMath("scale", function scale(x, inLow, inHigh, outLow, outHigh) {
    if (arguments.length === 0) {
      return NaN;
    }

    if (Number.isNaN(x) ||
        Number.isNaN(inLow) ||
        Number.isNaN(inHigh) ||
        Number.isNaN(outLow) ||
        Number.isNaN(outHigh)) {
      return NaN;
    }

    if (x === Infinity ||
        x === -Infinity) {
      return x;
    }

    return (x - inLow) * (outHigh - outLow) /
      (inHigh - inLow) + outLow;
  });

  defineMath("fscale", function fscale(x, inLow, inHigh, outLow, outHigh) {
    f32A[0] = Math.scale(x, inLow, inHigh, outLow, outHigh);
    return f32A[0];
  });

  defineMath("clamp", function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  });

  defineMath("radians", function radians(degrees) {
    return degrees * Math.DEG_PER_RAD;
  });

  defineMath("degrees", function degrees(radians) {
    return radians * Math.RAD_PER_DEG;
  });
}

/* eslint-disable */
var EPSILON = 0.00001;

window.sqr = function sqr(x) {
  return x * x;
};

window.sqrt = function sqrt(x) {
  return Math.sqrt(Math.abs(x));
};

window.log10 = function log10(val) {
  return Math.log(val) * Math.LOG10E;
};

window.sign = function sign(x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
};

window.rand = function rand(x) {
  var xf = Math.floor(x);
  if (xf < 1) {
    return Math.random();
  }
  return Math.random() * xf;
};

window.randint = function randint(x) {
  return Math.floor(rand(x));
};

window.bnot = function bnot(x) {
  return Math.abs(x) < EPSILON ? 1 : 0;
};

function isFiniteNumber(num) {
  return isFinite(num) && !isNaN(num);
}

window.pow = function pow(x, y) {
  var z = Math.pow(x, y);
  if (!isFiniteNumber(z)) {
    // mostly from complex results
    return 0;
  }
  return z;
};

window.div = function div(x, y) {
  if (y === 0) {
    return 0;
  }
  return x / y;
};

window.mod = function mod(x, y) {
  if (y === 0) {
    return 0;
  }
  var z = Math.floor(x) % Math.floor(y);
  return z;
};

window.bitor = function bitor(x, y) {
  var z = Math.floor(x) | Math.floor(y);
  return z;
};

window.bitand = function bitand(x, y) {
  var z = Math.floor(x) & Math.floor(y);
  return z;
};

window.sigmoid = function sigmoid(x, y) {
  var t = 1 + Math.exp(-x * y);
  return Math.abs(t) > EPSILON ? 1.0 / t : 0;
};

window.bor = function bor(x, y) {
  return Math.abs(x) > EPSILON || Math.abs(y) > EPSILON ? 1 : 0;
};

window.band = function band(x, y) {
  return Math.abs(x) > EPSILON && Math.abs(y) > EPSILON ? 1 : 0;
};

window.equal = function equal(x, y) {
  return Math.abs(x - y) < EPSILON ? 1 : 0;
};

window.above = function above(x, y) {
  return x > y ? 1 : 0;
};

window.below = function below(x, y) {
  return x < y ? 1 : 0;
};

window.ifcond = function ifcond(x, y, z) {
  return Math.abs(x) > EPSILON ? y : z;
};

window.memcpy = function memcpy(megabuf, dst, src, len) {
  let destOffset = dst;
  let srcOffset = src;
  let copyLen = len;

  if (srcOffset < 0) {
    copyLen += srcOffset;
    destOffset -= srcOffset;
    srcOffset = 0;
  }

  if (destOffset < 0) {
    copyLen += destOffset;
    srcOffset -= destOffset;
    destOffset = 0;
  }

  if (copyLen > 0) {
    megabuf.copyWithin(destOffset, srcOffset, copyLen);
  }

  return dst;
};
/* eslint-enable */

function t(t,e){let n={destCol:1,srcCol:1,srcLine:1};t.forEach(t=>{t.destCol>e||(n=t);});const r=e-n.destCol;return {column:n.srcCol+r,line:n.srcLine}}var e=function(){var t=function(t,e,n,r){for(n=n||{},r=t.length;r--;n[t[r]]=e);return n},e=[1,18],n=[1,7],r=[1,19],s=[1,20],i=[1,14],o=[1,15],a=[1,16],c=[1,33],l=[1,31],h=[1,23],u=[1,22],y=[1,24],p=[1,25],f=[1,26],g=[1,27],m=[1,28],_=[1,29],E=[1,30],d=[5,8,15,18,20,28,29,32,33,34,35,36,37,38],b=[5,15,18],w=[5,12,15,17,18,24,25,28,29,30],S=[1,57],I=[5,8,12,15,17,18,24,25,28,29,30],k=[15,18],O=[5,8,15,18,28,29,38],N=[5,8,15,18,28,29,32,33,38],v=[5,8,15,18,28,29,32,33,34,37,38],R=[5,8,15,18,28,29,32,33,34,35,36,37,38],$=[5,8,15,18],A=[5,8,15,18,20,22,28,29,32,33,34,35,36,37,38],x={trace:function(){},yy:{},symbols_:{error:2,SCRIPT:3,expression:4,EOF:5,expressionsOptionalTrailingSemi:6,separator:7,";":8,expressions:9,EXPRESSION_BLOCK:10,IDENTIFIER:11,IDENTIFIER_TOKEN:12,argument:13,arguments:14,",":15,FUNCTION_CALL:16,"(":17,")":18,LOGICAL_EXPRESSION:19,LOGICAL_OPERATOR_TOKEN:20,ASSIGNMENT:21,ASSIGNMENT_OPERATOR_TOKEN:22,number:23,DIGITS_TOKEN:24,".":25,NUMBER_LITERAL:26,UNARY_EXPRESSION:27,"-":28,"+":29,"!":30,BINARY_EXPRESSION:31,"*":32,"/":33,"%":34,"&":35,"|":36,"^":37,COMPARISON_TOKEN:38,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",8:";",12:"IDENTIFIER_TOKEN",15:",",17:"(",18:")",20:"LOGICAL_OPERATOR_TOKEN",22:"ASSIGNMENT_OPERATOR_TOKEN",24:"DIGITS_TOKEN",25:".",28:"-",29:"+",30:"!",32:"*",33:"/",34:"%",35:"&",36:"|",37:"^",38:"COMPARISON_TOKEN"},productions_:[0,[3,2],[3,2],[3,1],[7,1],[7,2],[9,2],[9,3],[6,1],[6,2],[10,1],[11,1],[13,1],[13,1],[14,1],[14,3],[16,3],[16,4],[19,3],[21,3],[21,3],[23,1],[23,2],[23,3],[23,2],[23,1],[26,1],[27,2],[27,2],[27,2],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[4,1],[4,1],[4,3],[4,1],[4,1],[4,1],[4,1],[4,1],[4,3]],performAction:function(t,e,n,r,s,i,o){var a=i.length-1;switch(s){case 1:return {type:"SCRIPT",body:[i[a-1]],loc:this._$};case 2:return {type:"SCRIPT",body:i[a-1],loc:this._$};case 3:return {type:"SCRIPT",body:[],loc:this._$};case 6:this.$=[i[a-1]];break;case 7:this.$=i[a-2].concat([i[a-1]]);break;case 8:this.$=i[a];break;case 9:this.$=i[a-1].concat([i[a]]);break;case 10:this.$={type:"EXPRESSION_BLOCK",body:i[a],loc:this._$};break;case 11:this.$={type:"IDENTIFIER",value:i[a].toLowerCase(),loc:this._$};break;case 14:this.$=[i[a]];break;case 15:this.$=i[a-2].concat([i[a]]);break;case 16:this.$={type:"CALL_EXPRESSION",callee:i[a-2],arguments:[],loc:this._$};break;case 17:this.$={type:"CALL_EXPRESSION",callee:i[a-3],arguments:i[a-1],loc:this._$};break;case 18:this.$={type:"LOGICAL_EXPRESSION",left:i[a-2],right:i[a],operator:i[a-1],loc:this._$};break;case 19:case 20:this.$={type:"ASSIGNMENT_EXPRESSION",left:i[a-2],operator:i[a-1],right:i[a],loc:this._$};break;case 21:this.$=Number(i[a]);break;case 22:this.$=Number(i[a-1]);break;case 23:this.$=Number(i[a-2]+i[a-1]+i[a]);break;case 24:this.$=Number("0"+i[a-1]+i[a]);break;case 25:this.$=0;break;case 26:this.$={type:"NUMBER_LITERAL",value:i[a],loc:this._$};break;case 27:case 28:case 29:this.$={type:"UNARY_EXPRESSION",value:i[a],operator:i[a-1],loc:this._$};break;case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:this.$={type:"BINARY_EXPRESSION",left:i[a-2],right:i[a],operator:i[a-1],loc:this._$};break;case 41:case 47:this.$=i[a-1];}},table:[{3:1,4:2,5:[1,4],6:3,9:13,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{1:[3]},{5:[1,21],7:32,8:c,20:l,28:h,29:u,32:y,33:p,34:f,35:g,36:m,37:_,38:E},{5:[1,34]},{1:[2,3]},t(d,[2,39]),t(d,[2,40]),{4:35,6:37,9:13,10:36,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},t(d,[2,42]),t(d,[2,43]),t(d,[2,44],{22:[1,38]}),t(d,[2,45],{17:[1,40],22:[1,39]}),t(d,[2,46]),t(b,[2,8],{31:5,27:6,26:8,21:9,16:10,11:11,19:12,23:17,4:41,12:e,17:n,24:r,25:s,28:i,29:o,30:a}),{4:42,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:43,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:44,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},t(d,[2,26]),t([5,8,15,17,18,20,22,28,29,32,33,34,35,36,37,38],[2,11]),t(d,[2,21],{25:[1,45]}),t(d,[2,25],{24:[1,46]}),{1:[2,1]},{4:47,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:48,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:49,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:50,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:51,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:52,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:53,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:54,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:55,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:56,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},t(w,[2,6],{8:S}),t(I,[2,4]),{1:[2,2]},{7:32,8:c,18:[1,58],20:l,28:h,29:u,32:y,33:p,34:f,35:g,36:m,37:_,38:E},{18:[1,59]},t(k,[2,10]),{4:60,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:61,11:11,12:e,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},{4:65,6:37,9:13,10:66,11:11,12:e,13:64,14:63,16:10,17:n,18:[1,62],19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},t(b,[2,9],{7:67,8:c,20:l,28:h,29:u,32:y,33:p,34:f,35:g,36:m,37:_,38:E}),t(O,[2,27],{20:l,32:y,33:p,34:f,35:g,36:m,37:_}),t(O,[2,28],{20:l,32:y,33:p,34:f,35:g,36:m,37:_}),t(O,[2,29],{20:l,32:y,33:p,34:f,35:g,36:m,37:_}),t(d,[2,22],{24:[1,68]}),t(d,[2,24]),t(O,[2,30],{20:l,32:y,33:p,34:f,35:g,36:m,37:_}),t(O,[2,31],{20:l,32:y,33:p,34:f,35:g,36:m,37:_}),t(N,[2,32],{20:l,34:f,35:g,36:m,37:_}),t(N,[2,33],{20:l,34:f,35:g,36:m,37:_}),t(v,[2,34],{20:l,35:g,36:m}),t(R,[2,35],{20:l}),t(R,[2,36],{20:l}),t(v,[2,37],{20:l,35:g,36:m}),t($,[2,38],{20:l,28:h,29:u,32:y,33:p,34:f,35:g,36:m,37:_,38:E}),t(d,[2,18]),t(I,[2,5]),t(d,[2,41]),t(d,[2,47]),t($,[2,20],{20:l,28:h,29:u,32:y,33:p,34:f,35:g,36:m,37:_,38:E}),t($,[2,19],{20:l,28:h,29:u,32:y,33:p,34:f,35:g,36:m,37:_,38:E}),t(A,[2,16]),{15:[1,70],18:[1,69]},t(k,[2,14]),t(k,[2,12],{7:32,8:c,20:l,28:h,29:u,32:y,33:p,34:f,35:g,36:m,37:_,38:E}),t(k,[2,13]),t(w,[2,7],{8:S}),t(d,[2,23]),t(A,[2,17]),{4:65,6:37,9:13,10:66,11:11,12:e,13:71,16:10,17:n,19:12,21:9,23:17,24:r,25:s,26:8,27:6,28:i,29:o,30:a,31:5},t(k,[2,15])],defaultActions:{4:[2,3],21:[2,1],34:[2,2]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t);},parse:function(t){var e=this,n=[0],r=[null],s=[],i=this.table,o="",a=0,c=0,l=s.slice.call(arguments,1),h=Object.create(this.lexer),u={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(u.yy[y]=this.yy[y]);h.setInput(t,u.yy),u.yy.lexer=h,u.yy.parser=this,void 0===h.yylloc&&(h.yylloc={});var p=h.yylloc;s.push(p);var f=h.options&&h.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,m,_,E,d,b,w,S,I=function(){var t;return "number"!=typeof(t=h.lex()||1)&&(t=e.symbols_[t]||t),t},k={};;){if(m=n[n.length-1],this.defaultActions[m]?_=this.defaultActions[m]:(null==g&&(g=I()),_=i[m]&&i[m][g]),void 0===_||!_.length||!_[0]){var O="";for(d in S=[],i[m])this.terminals_[d]&&d>2&&S.push("'"+this.terminals_[d]+"'");O=h.showPosition?"Parse error on line "+(a+1)+":\n"+h.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(O,{text:h.match,token:this.terminals_[g]||g,line:h.yylineno,loc:p,expected:S});}if(_[0]instanceof Array&&_.length>1)throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+g);switch(_[0]){case 1:n.push(g),r.push(h.yytext),s.push(h.yylloc),n.push(_[1]),g=null,c=h.yyleng,o=h.yytext,a=h.yylineno,p=h.yylloc;break;case 2:if(b=this.productions_[_[1]][1],k.$=r[r.length-b],k._$={first_line:s[s.length-(b||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(b||1)].first_column,last_column:s[s.length-1].last_column},f&&(k._$.range=[s[s.length-(b||1)].range[0],s[s.length-1].range[1]]),void 0!==(E=this.performAction.apply(k,[o,c,a,u.yy,_[1],r,s].concat(l))))return E;b&&(n=n.slice(0,-1*b*2),r=r.slice(0,-1*b),s=s.slice(0,-1*b)),n.push(this.productions_[_[1]][0]),r.push(k.$),s.push(k._$),w=i[n[n.length-2]][n[n.length-1]],n.push(w);break;case 3:return  true}}return  true}},L={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e);},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=false,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=true,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=true,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t));},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return (t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,r,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=false,this._backtrack=false,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=false),n)return n;if(this._backtrack){for(var i in s)this[i]=s[i];return  false}return  false},next:function(){if(this.done)return this.EOF;var t,e,n,r;this._input||(this.done=true),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),i=0;i<s.length;i++)if((n=this._input.match(this.rules[s[i]]))&&(!e||n[0].length>e[0].length)){if(e=n,r=i,this.options.backtrack_lexer){if(false!==(t=this.test_match(n,s[i])))return t;if(this._backtrack){e=false;continue}return  false}if(!this.options.flex)break}return e?false!==(t=this.test_match(e,s[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t);},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return (t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t);},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(t,e,n,r){switch(n){case 0:break;case 1:return 24;case 2:return 38;case 3:return 22;case 4:return 20;case 5:return 12;case 6:return 5;case 7:return e.yytext[0]}},rules:[/^(?:\s+)/,/^(?:[0-9]+)/,/^(?:(==|!=|<=|>=|<|>))/,/^(?:[+\-*/%]?=)/,/^(?:(\&\&)|\|\|)/,/^(?:[a-zA-Z_][a-zA-Z0-9._]*)/,/^(?:$)/,/^(?:.)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:true}}};function T(){this.yy={};}return x.lexer=L,T.prototype=x,x.Parser=T,new T}();const n={ASSIGNMENT_EXPRESSION:[{type:"NODE",key:"right"}],SCRIPT:[{type:"ARRAY",key:"body"}],EXPRESSION_BLOCK:[{type:"ARRAY",key:"body"}],UNARY_EXPRESSION:[{type:"NODE",key:"value"}],NUMBER_LITERAL:[],IDENTIFIER:[],CALL_EXPRESSION:[{type:"ARRAY",key:"arguments"},{type:"NODE",key:"callee"}],BINARY_EXPRESSION:[{type:"NODE",key:"left"},{type:"NODE",key:"right"}],LOGICAL_EXPRESSION:[{type:"NODE",key:"left"},{type:"NODE",key:"right"}]};function r(t,e){const s=n[t.type];let i=t;if(null==s)throw new Error(`Unknown children definition for ${t.type}`);return s.forEach(n=>{if("NODE"===n.type){const s=t[n.key],o=r(s,e);o!==s&&(i={...i,[n.key]:o});}else if("ARRAY"===n.type){const s=t[n.key],o=s.map(t=>r(t,e)),a=s.some((t,e)=>t!==o[e]);a&&(i={...i,[n.key]:o});}}),e(i)}function s(t){return [].concat.apply([],t)}function i(t,e){return new Array(t).fill(e).join("")}class o{constructor(){this._map=new Map;}get(t,e){const n=null==t?e:`${t}::${e}`;return this._map.has(n)||this._map.set(n,this._map.size),this._map.get(n)}size(){return this._map.size}}class a extends Error{constructor(t,e,n){super(t),this.sourceContext=function(t,e,n=1){const r=Math.max(t.first_line-1-n,0),s=t.last_line+n,o=e.split("\n").slice(r,s).map((e,n)=>{const s=n+r+1;return `${s>=t.first_line&&s<=t.last_line?">":" "} ${s} | ${e}`});if(t.first_line===t.last_line){const e=i(t.first_column," "),n=i(t.last_column-t.first_column,"^"),s=t.first_line-r;o.splice(s,0,`    | ${e}${n}`);}return o.join("\n")}(e,n),this.loc=e;}}class c extends a{}function l(t,e,n){return new c(t,e,n)}function h(t,e,n){return new a(t,e,n)}function u(e,n){const r=t(n,e.first_column),s=t(n,e.last_column);return {first_column:r.column,last_column:s.column,first_line:r.line,last_line:s.line}}function y(t){const[n,s]=function(t){const e=[];let n=1,r="",s=0,i=false,o=false,a=false;for(let c=0;c<t.length;c++){const l=t[c];if(a){const t=r.length+1,i=c-s+1;e.push({destCol:t,srcCol:i,srcLine:n}),a=false;}"\n"===l?(i=false,n++,s=c+1,a=true):"\r"===l&&"\n"===t[c+1]?(c++,i=false,n++,s=c+1,a=true):o&&"*"===l&&"/"===t[c+1]?(o=false,c++,a=true):"\\"===l&&"\\"===t[c+1]||"/"===l&&"/"===t[c+1]?(i=true,c++):"/"===l&&"*"===t[c+1]?(o=true,c++):i||o||(r+=l);}return [r,e]}(t);try{const i=function(){return e.parse.apply(e,arguments)}(n);return r(i,e=>{if(1!==e.loc.first_line||1!=e.loc.last_line)throw h("Unexpected multiline",e.loc,t);return Object.assign(Object.assign({},e),{loc:u(e.loc,s)})})}catch(e){if(null==e.hash)throw e;throw l(`Parse Error: ${e.message.split("\n")[3]}`,u(e.hash.loc,s),t)}}const p=[0,97,115,109],f=[1,0,0,0],g=1e-5,m=1,_=2,E=3,d=5,b=6,w=7,S=10,I=0,k=t=>[2,t],O=t=>[3,t],N=t=>[4,t],v=5,R=11,$=t=>[13,...At(t)],A=t=>[16,...At(t)],x=26,L=27,T=t=>[32,...At(t)],P=t=>[33,...At(t)],C=t=>[34,...At(t)],M=t=>[35,...At(t)],F=t=>[36,...At(t)],X=(t,e)=>[43,...At(t),...At(e)],j=(t,e)=>[57,...At(t),...At(e)],U=t=>[65,...xt(t)],D=t=>[68,...Rt(t)],B=71,V=72,G=73,K=74,Y=76,z=98,q=99,W=100,Z=101,J=102,H=106,Q=107,tt=108,et=111,nt=113,rt=114,st=131,it=132,ot=153,at=154,ct=155,lt=156,ht=159,ut=160,yt=161,pt=162,ft=163,gt=164,mt=165,_t=170,Et=176,dt=185,bt=183,wt=127,St=124,It=1,kt=64,Ot=124,Nt=[ot,...D(g),q],vt=[ot,...D(g),W];function Rt(t){const e=new Uint8Array(8);return function(t,e){const n=new ArrayBuffer(8);new DataView(n).setFloat64(0,e);const r=new Uint8Array(n).reverse();t.set(r,0);}(e,t),e}const $t=t=>[t.length].concat(t.split("").map(t=>t.charCodeAt(0)));function At(t){const e=[];do{let n=127&t;0!==(t>>>=7)&&(n|=128),e.push(n);}while(0!==t);return e}function xt(t){let e=[],n=0,r=Math.ceil(Math.log2(Math.abs(t))),s=t<0,i=true;for(;i;)n=127&t,t>>=7,s&&(t|=-(1<<r-7)),(0!=t||64&n)&&(-1!=t||64&~n)?n|=128:i=false,e.push(n);return e}const Lt=t=>At(t.length).concat(t),Tt=t=>At(t.length).concat(s(t));function Pt(t,e){if(0===e.length)return [];const n=Lt(Tt(e));return n.unshift(t),n}const Ct={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,atan2:Math.atan2,rand:t=>Math.random()*t,pow:Math.pow,log:Math.log,log10:Math.log10,exp:Math.exp,sigmoid:function(t,e){const n=1+Math.exp(-t*e);return Math.abs(n)>1e-5?1/n:0}},Mt=1048576,Ft=Math.ceil(2048),Xt={sqr:{args:[St],returns:[St],binary:[...T(0),...T(0),pt]},bor:{args:[St,St],returns:[St],binary:[...T(0),...vt,...T(1),...vt,rt,...U(0),B,bt]},band:{args:[St,St],returns:[St],binary:[...T(0),...vt,...T(1),...vt,nt,...U(0),B,bt]},sign:{args:[St],returns:[St],binary:[...D(0),...T(0),q,...T(0),...D(0),q,Q,bt]},mod:{args:[St,St],returns:[St],localVariables:[wt],binary:[...T(1),_t,...C(2),...U(0),B,...N(Ot),...T(0),_t,...T(2),et,bt,v,...D(0),R]},bitwiseOr:{args:[St,St],returns:[St],binary:[...T(0),Et,...T(1),Et,it,dt]},bitwiseAnd:{args:[St,St],returns:[St],binary:[...T(0),Et,...T(1),Et,st,dt]},div:{args:[St,St],returns:[St],localVariables:[wt],binary:[...T(1),...D(0),z,...N(Ot),...T(0),...T(1),ft,v,...D(0),R]},_getBufferIndex:{args:[St],returns:[wt],localVariables:[St,wt],binary:[...D(g),...T(0),ut,...C(1),_t,...P(2),...U(-1),...T(2),...U(8),tt,...T(2),...U(0),V,...T(2),...U(8388607),K,rt,L]}};function jt(t,e){var n,r,i;switch(t.type){case "SCRIPT":return s(t.body.map((t,n)=>[...jt(t,e),x]));case "EXPRESSION_BLOCK":return Ut(t.body,e);case "BINARY_EXPRESSION":{const n=jt(t.left,e),r=jt(t.right,e),s={"+":[ut],"-":[yt],"*":[pt],"/":e.resolveFunc("div"),"%":e.resolveFunc("mod"),"|":e.resolveFunc("bitwiseOr"),"&":e.resolveFunc("bitwiseAnd"),"^":e.resolveFunc("pow"),"==":[yt,...Nt,bt],"!=":[yt,...vt,bt],"<":[q,bt],">":[W,bt],"<=":[Z,bt],">=":[J,bt]}[t.operator];if(null==s)throw h(`Unknown binary expression operator ${t.operator}`,t.loc,e.rawSource);return [...n,...r,...s]}case "CALL_EXPRESSION":{const r=t.callee.value,i=t.arguments,o=n=>{if(i.length<n)throw l(`Too few arguments passed to \`${r}()\`. Expected ${n} but only got ${i.length}.`,t.loc,e.rawSource);if(i.length>n)throw l(`Too many arguments passed to \`${r}()\`. Expected ${n} but got ${i.length}.`,i[n].loc,e.rawSource)};switch(r){case "exec2":return o(2),Ut(t.arguments,e);case "exec3":return o(3),Ut(t.arguments,e);case "if":o(3);const[s,i,a]=t.arguments;return function(t,e,n,r){return [...jt(t,r),...vt,...N(Ot),...jt(e,r),v,...jt(n,r),R]}(s,i,a,e);case "while":return o(1),function(t,e){const n=jt(t,e),r=e.resolveLocal(wt);return [...U(0),...P(r),...O(kt),...T(r),...U(1),H,...C(r),...U(Mt),G,...n,...vt,nt,...$(0),R,...D(0)]}(t.arguments[0],e);case "loop":return o(2),function(t,e,n){const r=jt(e,n),s=n.resolveLocal(wt);return [...k(kt),...jt(t,n),_t,...C(s),...U(0),Y,...$(1),...O(kt),...r,x,...T(s),...U(1),Q,...C(s),...U(0),B,...$(0),R,R,...D(0)]}(t.arguments[0],t.arguments[1],e);case "megabuf":case "gmegabuf":o(1);const c=e.resolveLocal(wt);return [...jt(t.arguments[0],e),...null!==(n=e.resolveFunc("_getBufferIndex"))&&void 0!==n?n:[],...C(c),...U(-1),B,...N(Ot),...T(c),...X(3,Dt(r)),v,...D(0),R];case "assign":o(2);const h=t.arguments[0];if("IDENTIFIER"!=h.type)throw l("Expected the first argument of `assign()` to be an identifier.",h.loc,e.rawSource);const u=e.resolveVar(h.value);return [...jt(t.arguments[1],e),...F(u),...M(u)]}const a=s(t.arguments.map(t=>jt(t,e)));switch(r){case "abs":return o(1),[...a,ot];case "sqrt":return o(1),[...a,ot,ht];case "int":case "floor":return o(1),[...a,lt];case "min":return o(2),[...a,gt];case "max":return o(2),[...a,mt];case "above":return o(2),[...a,W,bt];case "below":return o(2),[...a,q,bt];case "equal":return o(2),[...a,yt,...Nt,bt];case "bnot":return o(1),[...a,...Nt,bt];case "ceil":return o(1),[...a,ct]}const c=e.resolveFunc(r);if(null==c||r.startsWith("_"))throw l(`"${r}" is not defined.`,t.callee.loc,e.rawSource);if(null!=Ct[r])o(Ct[r].length);else {if(null==Xt[r])throw h(`Missing arity information for the function \`${r}()\``,t.callee.loc,e.rawSource);o(Xt[r].args.length);}return [...a,...c]}case "ASSIGNMENT_EXPRESSION":{const{left:n}=t,s=jt(t.right,e),o=function(t,e){const n={"+=":[ut],"-=":[yt],"*=":[pt],"/=":[ft],"%=":e.resolveFunc("mod"),"=":null},r=n[t.operator];if(void 0===r)throw h(`Unknown assignment operator "${t.operator}"`,t.loc,e.rawSource);return r}(t,e);if("IDENTIFIER"===n.type){const t=e.resolveVar(n.value),r=M(t),i=F(t);return null===o?[...s,...i,...r]:[...r,...s,...o,...i,...r]}if("CALL_EXPRESSION"!==n.type)throw h(`Unexpected left hand side type for assignment: ${n.type}`,t.loc,e.rawSource);const a=e.resolveLocal(wt);if(1!==n.arguments.length)throw l(`Expected 1 argument when assigning to a buffer but got ${n.arguments.length}.`,0===n.arguments.length?n.loc:n.arguments[1].loc,e.rawSource);const c=n.callee.value;if("gmegabuf"!==c&&"megabuf"!==c)throw l("The only function calls which may be assigned to are `gmegabuf()` and `megabuf()`.",n.callee.loc,e.rawSource);const u=Dt(c);if(null===o){const t=e.resolveLocal(wt),i=e.resolveLocal(St);return [...s,...P(i),...jt(n.arguments[0],e),...null!==(r=e.resolveFunc("_getBufferIndex"))&&void 0!==r?r:[],...C(t),...U(0),V,...N(Ot),...D(0),v,...T(t),...C(a),...T(i),...j(3,u),...T(i),R]}const y=e.resolveLocal(wt),p=e.resolveLocal(wt),f=e.resolveLocal(St),g=e.resolveLocal(St);return [...s,...P(f),...jt(n.arguments[0],e),...null!==(i=e.resolveFunc("_getBufferIndex"))&&void 0!==i?i:[],...C(y),...U(-1),B,...C(p),...N(Ot),...T(y),...X(3,u),v,...D(0),R,...T(f),...o,...C(g),...T(p),...N(kt),...T(y),...T(g),...j(3,u),R]}case "LOGICAL_EXPRESSION":{const n=jt(t.left,e),r=jt(t.right,e),s={"&&":{comparison:Nt,shortCircuitValue:0},"||":{comparison:vt,shortCircuitValue:1}}[t.operator];if(null==s)throw h(`Unknown logical expression operator ${t.operator}`,t.loc,e.rawSource);const{comparison:i,shortCircuitValue:o}=s;return [...n,...i,...N(Ot),...D(o),v,...r,...vt,bt,R]}case "UNARY_EXPRESSION":{const n=jt(t.value,e),r={"-":[at],"+":[],"!":[...Nt,bt]}[t.operator];if(null==r)throw h(`Unknown logical unary operator ${t.operator}`,t.loc,e.rawSource);return [...n,...r]}case "IDENTIFIER":const o=t.value;return M(e.resolveVar(o));case "NUMBER_LITERAL":return D(t.value);default:throw h(`Unknown AST node type ${t.type}`,t.loc,e.rawSource)}}function Ut(t,e){return s(function(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t[r]),r===t.length-1||n.push(e);return n}(t.map((t,n)=>jt(t,e)),[x]))}function Dt(t){switch(t){case "gmegabuf":return 67108864;case "megabuf":return 0}}function Bt({pools:t,functions:e,eelVersion:n=2,preParsed:r=false}){if(Object.keys(t).includes("shims"))throw new Error('You may not name a pool "shims". "shims" is reserved for injected JavaScript functions.');const s=[];Object.entries(t).forEach(([t,e])=>{e.forEach(e=>{s.push([t,e]);});});const i=new o;s.forEach(([t,e])=>{i.get(t,e);});const a=Object.entries(Ct).map(([t,e])=>({args:new Array(e.length).fill(null).map(t=>St),returns:[St],name:t})),c=[],l=[];Object.entries(e).forEach(([e,{pool:s,code:o}])=>{if(null==t[s]){const n=Object.keys(t);if(0===n.length)throw new Error(`The function "${e}" was declared as using a variable pool named "${s}" but no pools were defined.`);throw new Error(`The function "${e}" was declared as using a variable pool named "${s}" which is not among the variable pools defined. The defined variable pools are: ${function(t){if(0===t.length)throw new Error("Cannot format an empty list");if(1===t.length)return t[0];const e=t.map(t=>`"${t}"`),n=e.pop();return e.join(", ")+` and ${n}`}(n)}.`)}const h=r?o:y(o);if("string"==typeof h)throw new Error("Got passed unparsed code without setting the preParsed flag");if("SCRIPT"!==h.type)throw new Error("Invalid AST");if(0===h.body.length)return;const u=[],p={resolveVar:t=>/^reg\d\d$/.test(t)?i.get(null,t):i.get(s,t),resolveLocal:t=>(u.push(t),u.length-1),resolveFunc:t=>{const e=a.findIndex(e=>e.name===t);if(-1!==e){const r=A(e);return "rand"===t&&1===n?[...r,lt]:r}if(null==Xt[t])return null;let r=c.indexOf(t);return  -1===r&&(c.push(t),r=c.length-1),A(r+a.length)},rawSource:o},f=jt(h,p);l.push({binary:f,exportName:e,args:[],returns:[],localVariables:u});});const h=c.map(t=>{const e=Xt[t];if(null==e)throw new Error(`Undefined local function "${t}"`);return e}),u=t=>[...t.args,"|",...t.returns].join("-"),g=[],k=new Map;function O(t){const e=u(t),n=k.get(e);if(null==n)throw new Error(`Failed to get a type index for key ${e}`);return n}[...a,...h,...l].forEach(t=>{const e=u(t);k.has(e)||(g.push([96,...Lt(t.args),...Lt(t.returns)]),k.set(e,g.length-1));});const N=[...s.map(([t,e])=>[...$t(t),...$t(e),3,St,It]),...a.map((t,e)=>{const n=O(t);return [...$t("shims"),...$t(t.name),0,...At(n)]})],v=[...h,...l].map(t=>At(O(t))),$=[[1,...At(Ft),...At(Ft)]],x=i.size()-s.length,L=(T=()=>[St,It,...D(0),R],new Array(x).fill(null).map((t,e)=>T(e)));var T;const P=[...l].map((t,e)=>{const n=e+a.length+h.length;return [...$t(t.exportName),I,...At(n)]}),C=[...h,...l].map(t=>{var e;const n=(null!==(e=t.localVariables)&&void 0!==e?e:[]).map(t=>[...At(1),t]);return Lt([...Tt(n),...t.binary,R])});return new Uint8Array([...p,...f,...Pt(m,g),...Pt(_,N),...Pt(E,v),...Pt(d,$),...Pt(b,L),...Pt(w,P),...Pt(S,C)])}async function Vt({pools:t,functions:e,eelVersion:n=2}){let r={};Object.entries(t).forEach(([t,e])=>{r[t]=new Set(Object.keys(e));});const s=Bt({pools:r,functions:e,eelVersion:n}),i=await WebAssembly.compile(s);var o=Object.assign(Object.assign({},t),{shims:Ct});return await WebAssembly.instantiate(i,o)}

// Runtime header offsets
const ID_OFFSET = -8;
const SIZE_OFFSET = -4;

// Runtime ids
const ARRAYBUFFER_ID = 0;
const STRING_ID = 1;
// const ARRAYBUFFERVIEW_ID = 2;

// Runtime type information
const ARRAYBUFFERVIEW = 1 << 0;
const ARRAY = 1 << 1;
const STATICARRAY = 1 << 2;
// const SET = 1 << 3;
// const MAP = 1 << 4;
const VAL_ALIGN_OFFSET = 6;
// const VAL_ALIGN = 1 << VAL_ALIGN_OFFSET;
const VAL_SIGNED = 1 << 11;
const VAL_FLOAT = 1 << 12;
// const VAL_NULLABLE = 1 << 13;
const VAL_MANAGED = 1 << 14;
// const KEY_ALIGN_OFFSET = 15;
// const KEY_ALIGN = 1 << KEY_ALIGN_OFFSET;
// const KEY_SIGNED = 1 << 20;
// const KEY_FLOAT = 1 << 21;
// const KEY_NULLABLE = 1 << 22;
// const KEY_MANAGED = 1 << 23;

// Array(BufferView) layout
const ARRAYBUFFERVIEW_BUFFER_OFFSET = 0;
const ARRAYBUFFERVIEW_DATASTART_OFFSET = 4;
const ARRAYBUFFERVIEW_DATALENGTH_OFFSET = 8;
const ARRAYBUFFERVIEW_SIZE = 12;
const ARRAY_LENGTH_OFFSET = 12;
const ARRAY_SIZE = 16;

const BIGINT = typeof BigUint64Array !== "undefined";
const THIS = Symbol();

const STRING_DECODE_THRESHOLD = 32;
const decoder = new TextDecoder("utf-16le");

/** Gets a string from an U32 and an U16 view on a memory. */
function getStringImpl(buffer, ptr) {
  const len = new Uint32Array(buffer)[ptr + SIZE_OFFSET >>> 2] >>> 1;
  const arr = new Uint16Array(buffer, ptr, len);
  if (len <= STRING_DECODE_THRESHOLD) {
    return String.fromCharCode.apply(String, arr);
  }
  return decoder.decode(arr);
}

/** Prepares the base module prior to instantiation. */
function preInstantiate(imports) {
  const extendedExports = {};

  function getString(memory, ptr) {
    if (!memory) return "<yet unknown>";
    return getStringImpl(memory.buffer, ptr);
  }

  // add common imports used by stdlib for convenience
  const env = (imports.env = imports.env || {});
  env.abort = env.abort || function abort(msg, file, line, colm) {
    const memory = extendedExports.memory || env.memory; // prefer exported, otherwise try imported
    throw Error(`abort: ${getString(memory, msg)} at ${getString(memory, file)}:${line}:${colm}`);
  };
  env.trace = env.trace || function trace(msg, n, ...args) {
    const memory = extendedExports.memory || env.memory;
    console.log(`trace: ${getString(memory, msg)}${n ? " " : ""}${args.slice(0, n).join(", ")}`);
  };
  env.seed = env.seed || Date.now;
  imports.Math = imports.Math || Math;
  imports.Date = imports.Date || Date;

  return extendedExports;
}

/** Prepares the final module once instantiation is complete. */
function postInstantiate(extendedExports, instance) {
  const exports = instance.exports;
  const memory = exports.memory;
  const table = exports.table;
  const __new = exports["__new"];
  const __retain = exports["__retain"];
  const __rtti_base = exports["__rtti_base"] || -1; // oob if not present

  /** Gets the runtime type info for the given id. */
  function getInfo(id) {
    const U32 = new Uint32Array(memory.buffer);
    const count = U32[__rtti_base >>> 2];
    if ((id >>>= 0) >= count) throw Error(`invalid id: ${id}`);
    return U32[(__rtti_base + 4 >>> 2) + id * 2];
  }

  /** Gets and validate runtime type info for the given id for array like objects */
  function getArrayInfo(id) {
    const info = getInfo(id);
    if (!(info & (ARRAYBUFFERVIEW | ARRAY | STATICARRAY))) throw Error(`not an array: ${id}, flags=${info}`);
    return info;
  }

  /** Gets the runtime base id for the given id. */
  function getBase(id) {
    const U32 = new Uint32Array(memory.buffer);
    const count = U32[__rtti_base >>> 2];
    if ((id >>>= 0) >= count) throw Error(`invalid id: ${id}`);
    return U32[(__rtti_base + 4 >>> 2) + id * 2 + 1];
  }

  /** Gets the runtime alignment of a collection's values. */
  function getValueAlign(info) {
    return 31 - Math.clz32((info >>> VAL_ALIGN_OFFSET) & 31); // -1 if none
  }

  /** Gets the runtime alignment of a collection's keys. */
  // function getKeyAlign(info) {
  //   return 31 - Math.clz32((info >>> KEY_ALIGN_OFFSET) & 31); // -1 if none
  // }

  /** Allocates a new string in the module's memory and returns its retained pointer. */
  function __newString(str) {
    if (str == null) return 0;
    const length = str.length;
    const ptr = __new(length << 1, STRING_ID);
    const U16 = new Uint16Array(memory.buffer);
    for (var i = 0, p = ptr >>> 1; i < length; ++i) U16[p + i] = str.charCodeAt(i);
    return ptr;
  }

  extendedExports.__newString = __newString;

  /** Reads a string from the module's memory by its pointer. */
  function __getString(ptr) {
    if (!ptr) return null;
    const buffer = memory.buffer;
    const id = new Uint32Array(buffer)[ptr + ID_OFFSET >>> 2];
    if (id !== STRING_ID) throw Error(`not a string: ${ptr}`);
    return getStringImpl(buffer, ptr);
  }

  extendedExports.__getString = __getString;

  /** Gets the view matching the specified alignment, signedness and floatness. */
  function getView(alignLog2, signed, float) {
    const buffer = memory.buffer;
    if (float) {
      switch (alignLog2) {
        case 2: return new Float32Array(buffer);
        case 3: return new Float64Array(buffer);
      }
    } else {
      switch (alignLog2) {
        case 0: return new (signed ? Int8Array : Uint8Array)(buffer);
        case 1: return new (signed ? Int16Array : Uint16Array)(buffer);
        case 2: return new (signed ? Int32Array : Uint32Array)(buffer);
        case 3: return new (signed ? BigInt64Array : BigUint64Array)(buffer);
      }
    }
    throw Error(`unsupported align: ${alignLog2}`);
  }

  /** Allocates a new array in the module's memory and returns its retained pointer. */
  function __newArray(id, values) {
    const info = getArrayInfo(id);
    const align = getValueAlign(info);
    const length = values.length;
    const buf = __new(length << align, info & STATICARRAY ? id : ARRAYBUFFER_ID);
    let result;
    if (info & STATICARRAY) {
      result = buf;
    } else {
      const arr = __new(info & ARRAY ? ARRAY_SIZE : ARRAYBUFFERVIEW_SIZE, id);
      const U32 = new Uint32Array(memory.buffer);
      U32[arr + ARRAYBUFFERVIEW_BUFFER_OFFSET >>> 2] = __retain(buf);
      U32[arr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2] = buf;
      U32[arr + ARRAYBUFFERVIEW_DATALENGTH_OFFSET >>> 2] = length << align;
      if (info & ARRAY) U32[arr + ARRAY_LENGTH_OFFSET >>> 2] = length;
      result = arr;
    }
    const view = getView(align, info & VAL_SIGNED, info & VAL_FLOAT);
    if (info & VAL_MANAGED) {
      for (let i = 0; i < length; ++i) view[(buf >>> align) + i] = __retain(values[i]);
    } else {
      view.set(values, buf >>> align);
    }
    return result;
  }

  extendedExports.__newArray = __newArray;

  /** Gets a live view on an array's values in the module's memory. Infers the array type from RTTI. */
  function __getArrayView(arr) {
    const U32 = new Uint32Array(memory.buffer);
    const id = U32[arr + ID_OFFSET >>> 2];
    const info = getArrayInfo(id);
    const align = getValueAlign(info);
    let buf = info & STATICARRAY
      ? arr
      : U32[arr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];
    const length = info & ARRAY
      ? U32[arr + ARRAY_LENGTH_OFFSET >>> 2]
      : U32[buf + SIZE_OFFSET >>> 2] >>> align;
    return getView(align, info & VAL_SIGNED, info & VAL_FLOAT).subarray(buf >>>= align, buf + length);
  }

  extendedExports.__getArrayView = __getArrayView;

  /** Copies an array's values from the module's memory. Infers the array type from RTTI. */
  function __getArray(arr) {
    const input = __getArrayView(arr);
    const len = input.length;
    const out = new Array(len);
    for (let i = 0; i < len; i++) out[i] = input[i];
    return out;
  }

  extendedExports.__getArray = __getArray;

  /** Copies an ArrayBuffer's value from the module's memory. */
  function __getArrayBuffer(ptr) {
    const buffer = memory.buffer;
    const length = new Uint32Array(buffer)[ptr + SIZE_OFFSET >>> 2];
    return buffer.slice(ptr, ptr + length);
  }

  extendedExports.__getArrayBuffer = __getArrayBuffer;

  /** Copies a typed array's values from the module's memory. */
  function getTypedArray(Type, alignLog2, ptr) {
    return new Type(getTypedArrayView(Type, alignLog2, ptr));
  }

  /** Gets a live view on a typed array's values in the module's memory. */
  function getTypedArrayView(Type, alignLog2, ptr) {
    const buffer = memory.buffer;
    const U32 = new Uint32Array(buffer);
    const bufPtr = U32[ptr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];
    return new Type(buffer, bufPtr, U32[bufPtr + SIZE_OFFSET >>> 2] >>> alignLog2);
  }

  /** Attach a set of get TypedArray and View functions to the exports. */
  function attachTypedArrayFunctions(ctor, name, align) {
    extendedExports[`__get${name}`] = getTypedArray.bind(null, ctor, align);
    extendedExports[`__get${name}View`] = getTypedArrayView.bind(null, ctor, align);
  }

  [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
  ].forEach(ctor => {
    attachTypedArrayFunctions(ctor, ctor.name, 31 - Math.clz32(ctor.BYTES_PER_ELEMENT));
  });

  if (BIGINT) {
    [BigUint64Array, BigInt64Array].forEach(ctor => {
      attachTypedArrayFunctions(ctor, ctor.name.slice(3), 3);
    });
  }

  /** Tests whether an object is an instance of the class represented by the specified base id. */
  function __instanceof(ptr, baseId) {
    const U32 = new Uint32Array(memory.buffer);
    let id = U32[ptr + ID_OFFSET >>> 2];
    if (id <= U32[__rtti_base >>> 2]) {
      do {
        if (id == baseId) return true;
        id = getBase(id);
      } while (id);
    }
    return false;
  }

  extendedExports.__instanceof = __instanceof;

  // Pull basic exports to extendedExports so code in preInstantiate can use them
  extendedExports.memory = extendedExports.memory || memory;
  extendedExports.table  = extendedExports.table  || table;

  // Demangle exports and provide the usual utility on the prototype
  return demangle(exports, extendedExports);
}

function isResponse(src) {
  return typeof Response !== "undefined" && src instanceof Response;
}

function isModule(src) {
  return src instanceof WebAssembly.Module;
}

/** Asynchronously instantiates an AssemblyScript module from anything that can be instantiated. */
async function instantiate(source, imports = {}) {
  if (isResponse(source = await source)) return instantiateStreaming(source, imports);
  const module = isModule(source) ? source : await WebAssembly.compile(source);
  const extended = preInstantiate(imports);
  const instance = await WebAssembly.instantiate(module, imports);
  const exports = postInstantiate(extended, instance);
  return { module, instance, exports };
}

/** Synchronously instantiates an AssemblyScript module from a WebAssembly.Module or binary buffer. */
function instantiateSync(source, imports = {}) {
  const module = isModule(source) ? source : new WebAssembly.Module(source);
  const extended = preInstantiate(imports);
  const instance = new WebAssembly.Instance(module, imports);
  const exports = postInstantiate(extended, instance);
  return { module, instance, exports };
}

/** Asynchronously instantiates an AssemblyScript module from a response, i.e. as obtained by `fetch`. */
async function instantiateStreaming(source, imports = {}) {
  if (!WebAssembly.instantiateStreaming) {
    return instantiate(
      isResponse(source = await source)
        ? source.arrayBuffer()
        : source,
      imports
    );
  }
  const extended = preInstantiate(imports);
  const result = await WebAssembly.instantiateStreaming(source, imports);
  const exports = postInstantiate(extended, result.instance);
  return { ...result, exports };
}

/** Demangles an AssemblyScript module's exports to a friendly object structure. */
function demangle(exports, extendedExports = {}) {
  const setArgumentsLength = exports["__argumentsLength"]
    ? length => { exports["__argumentsLength"].value = length; }
    : exports["__setArgumentsLength"] || exports["__setargc"] || (() => { /* nop */ });
  for (let internalName in exports) {
    if (!Object.prototype.hasOwnProperty.call(exports, internalName)) continue;
    const elem = exports[internalName];
    let parts = internalName.split(".");
    let curr = extendedExports;
    while (parts.length > 1) {
      let part = parts.shift();
      if (!Object.prototype.hasOwnProperty.call(curr, part)) curr[part] = {};
      curr = curr[part];
    }
    let name = parts[0];
    let hash = name.indexOf("#");
    if (hash >= 0) {
      const className = name.substring(0, hash);
      const classElem = curr[className];
      if (typeof classElem === "undefined" || !classElem.prototype) {
        const ctor = function(...args) {
          return ctor.wrap(ctor.prototype.constructor(0, ...args));
        };
        ctor.prototype = {
          valueOf() { return this[THIS]; }
        };
        ctor.wrap = function(thisValue) {
          return Object.create(ctor.prototype, { [THIS]: { value: thisValue, writable: false } });
        };
        if (classElem) Object.getOwnPropertyNames(classElem).forEach(name =>
          Object.defineProperty(ctor, name, Object.getOwnPropertyDescriptor(classElem, name))
        );
        curr[className] = ctor;
      }
      name = name.substring(hash + 1);
      curr = curr[className].prototype;
      if (/^(get|set):/.test(name)) {
        if (!Object.prototype.hasOwnProperty.call(curr, name = name.substring(4))) {
          let getter = exports[internalName.replace("set:", "get:")];
          let setter = exports[internalName.replace("get:", "set:")];
          Object.defineProperty(curr, name, {
            get() { return getter(this[THIS]); },
            set(value) { setter(this[THIS], value); },
            enumerable: true
          });
        }
      } else {
        if (name === 'constructor') {
          (curr[name] = (...args) => {
            setArgumentsLength(args.length);
            return elem(...args);
          }).original = elem;
        } else { // instance method
          (curr[name] = function(...args) { // !
            setArgumentsLength(args.length);
            return elem(this[THIS], ...args);
          }).original = elem;
        }
      }
    } else {
      if (/^(get|set):/.test(name)) {
        if (!Object.prototype.hasOwnProperty.call(curr, name = name.substring(4))) {
          Object.defineProperty(curr, name, {
            get: exports[internalName.replace("set:", "get:")],
            set: exports[internalName.replace("get:", "set:")],
            enumerable: true
          });
        }
      } else if (typeof elem === "function" && elem !== setArgumentsLength) {
        (curr[name] = (...args) => {
          setArgumentsLength(args.length);
          return elem(...args);
        }).original = elem;
      } else {
        curr[name] = elem;
      }
    }
  }
  return extendedExports;
}

var ascLoader = {
  instantiate,
  instantiateSync,
  instantiateStreaming,
  demangle
};

class FFT {
  constructor(samplesIn, samplesOut, equalize = false) {
    this.samplesIn = samplesIn;
    this.samplesOut = samplesOut;
    this.equalize = equalize;
    this.NFREQ = samplesOut * 2;

    if (this.equalize) {
      this.initEqualizeTable();
    }
    this.initBitRevTable();
    this.initCosSinTable();
  }

  initEqualizeTable() {
    this.equalizeArr = new Float32Array(this.samplesOut);
    const invHalfNFREQ = 1.0 / this.samplesOut;
    for (let i = 0; i < this.samplesOut; i++) {
      this.equalizeArr[i] =
        -0.02 * Math.log((this.samplesOut - i) * invHalfNFREQ);
    }
  }

  /* eslint-disable no-bitwise */
  initBitRevTable() {
    this.bitrevtable = new Uint16Array(this.NFREQ);

    for (let i = 0; i < this.NFREQ; i++) {
      this.bitrevtable[i] = i;
    }

    let j = 0;
    for (let i = 0; i < this.NFREQ; i++) {
      if (j > i) {
        const temp = this.bitrevtable[i];
        this.bitrevtable[i] = this.bitrevtable[j];
        this.bitrevtable[j] = temp;
      }

      let m = this.NFREQ >> 1;

      while (m >= 1 && j >= m) {
        j -= m;
        m >>= 1;
      }

      j += m;
    }
  }

  initCosSinTable() {
    let dftsize = 2;
    let tabsize = 0;
    while (dftsize <= this.NFREQ) {
      tabsize += 1;
      dftsize <<= 1;
    }

    this.cossintable = [new Float32Array(tabsize), new Float32Array(tabsize)];

    dftsize = 2;
    let i = 0;
    while (dftsize <= this.NFREQ) {
      const theta = (-2 * Math.PI) / dftsize;
      this.cossintable[0][i] = Math.cos(theta);
      this.cossintable[1][i] = Math.sin(theta);
      i += 1;
      dftsize <<= 1;
    }
  }

  timeToFrequencyDomain(waveDataIn) {
    const real = new Float32Array(this.NFREQ);
    const imag = new Float32Array(this.NFREQ);

    for (let i = 0; i < this.NFREQ; i++) {
      const idx = this.bitrevtable[i];
      if (idx < this.samplesIn) {
        real[i] = waveDataIn[idx];
      } else {
        real[i] = 0;
      }
      imag[i] = 0;
    }

    let dftsize = 2;
    let t = 0;
    while (dftsize <= this.NFREQ) {
      const wpr = this.cossintable[0][t];
      const wpi = this.cossintable[1][t];
      let wr = 1.0;
      let wi = 0.0;
      const hdftsize = dftsize >> 1;

      for (let m = 0; m < hdftsize; m++) {
        for (let i = m; i < this.NFREQ; i += dftsize) {
          const j = i + hdftsize;
          const tempr = wr * real[j] - wi * imag[j];
          const tempi = wr * imag[j] + wi * real[j];
          real[j] = real[i] - tempr;
          imag[j] = imag[i] - tempi;
          real[i] += tempr;
          imag[i] += tempi;
        }

        const wtemp = wr;
        wr = wtemp * wpr - wi * wpi;
        wi = wi * wpr + wtemp * wpi;
      }

      dftsize <<= 1;
      t += 1;
    }

    const spectralDataOut = new Float32Array(this.samplesOut);
    if (this.equalize) {
      for (let i = 0; i < this.samplesOut; i++) {
        spectralDataOut[i] =
          this.equalizeArr[i] *
          Math.sqrt(real[i] * real[i] + imag[i] * imag[i]);
      }
    } else {
      for (let i = 0; i < this.samplesOut; i++) {
        spectralDataOut[i] = Math.sqrt(real[i] * real[i] + imag[i] * imag[i]);
      }
    }

    return spectralDataOut;
  }
  /* eslint-enable no-bitwise */
}

class AudioProcessor {
  constructor(context) {
    this.numSamps = 512;
    this.fftSize = this.numSamps * 2;

    this.fft = new FFT(this.fftSize, 512, true);

    if (context) {
      this.audioContext = context;
      this.audible = context.createDelay();

      this.analyser = context.createAnalyser();
      this.analyser.smoothingTimeConstant = 0.0;
      this.analyser.fftSize = this.fftSize;

      this.audible.connect(this.analyser);

      // Split channels
      this.analyserL = context.createAnalyser();
      this.analyserL.smoothingTimeConstant = 0.0;
      this.analyserL.fftSize = this.fftSize;

      this.analyserR = context.createAnalyser();
      this.analyserR.smoothingTimeConstant = 0.0;
      this.analyserR.fftSize = this.fftSize;

      this.splitter = context.createChannelSplitter(2);

      this.audible.connect(this.splitter);
      this.splitter.connect(this.analyserL, 0);
      this.splitter.connect(this.analyserR, 1);
    }

    // Initialised once as typed arrays
    // Used for webaudio API raw (time domain) samples. 0 -> 255
    this.timeByteArray = new Uint8Array(this.fftSize);
    this.timeByteArrayL = new Uint8Array(this.fftSize);
    this.timeByteArrayR = new Uint8Array(this.fftSize);

    // Signed raw samples shifted to -128 -> 127
    this.timeArray = new Int8Array(this.fftSize);
    this.timeByteArraySignedL = new Int8Array(this.fftSize);
    this.timeByteArraySignedR = new Int8Array(this.fftSize);

    // Temporary array for smoothing
    this.tempTimeArrayL = new Int8Array(this.fftSize);
    this.tempTimeArrayR = new Int8Array(this.fftSize);

    // Undersampled from this.fftSize to this.numSamps
    this.timeArrayL = new Int8Array(this.numSamps);
    this.timeArrayR = new Int8Array(this.numSamps);
  }

  sampleAudio() {
    this.analyser.getByteTimeDomainData(this.timeByteArray);
    this.analyserL.getByteTimeDomainData(this.timeByteArrayL);
    this.analyserR.getByteTimeDomainData(this.timeByteArrayR);
    this.processAudio();
  }
  updateAudio(timeByteArray, timeByteArrayL, timeByteArrayR) {
    this.timeByteArray.set(timeByteArray);
    this.timeByteArrayL.set(timeByteArrayL);
    this.timeByteArrayR.set(timeByteArrayR);
    this.processAudio();
  }
  /* eslint-disable no-bitwise */
  processAudio() {
    for (let i = 0, j = 0, lastIdx = 0; i < this.fftSize; i++) {
      // Shift Unsigned to Signed about 0
      this.timeArray[i] = this.timeByteArray[i] - 128;
      this.timeByteArraySignedL[i] = this.timeByteArrayL[i] - 128;
      this.timeByteArraySignedR[i] = this.timeByteArrayR[i] - 128;

      this.tempTimeArrayL[i] =
        0.5 *
        (this.timeByteArraySignedL[i] + this.timeByteArraySignedL[lastIdx]);
      this.tempTimeArrayR[i] =
        0.5 *
        (this.timeByteArraySignedR[i] + this.timeByteArraySignedR[lastIdx]);

      // Undersampled
      if (i % 2 === 0) {
        this.timeArrayL[j] = this.tempTimeArrayL[i];
        this.timeArrayR[j] = this.tempTimeArrayR[i];
        j += 1;
      }

      lastIdx = i;
    }

    // Use full width samples for the FFT
    this.freqArray = this.fft.timeToFrequencyDomain(this.timeArray);
    this.freqArrayL = this.fft.timeToFrequencyDomain(this.timeByteArraySignedL);
    this.freqArrayR = this.fft.timeToFrequencyDomain(this.timeByteArraySignedR);
  }

  connectAudio(audionode) {
    audionode.connect(this.audible);
  }

  disconnectAudio(audionode) {
    audionode.disconnect(this.audible);
  }
  /* eslint-enable no-bitwise */
}

class AudioLevels {
  constructor(audio) {
    this.audio = audio;

    let sampleRate;
    if (this.audio.audioContext) {
      sampleRate = this.audio.audioContext.sampleRate;
    } else {
      sampleRate = 44100;
    }

    const bucketHz = sampleRate / this.audio.fftSize;

    const bassLow = Math.clamp(
      Math.round(20 / bucketHz) - 1,
      0,
      this.audio.numSamps - 1
    );
    const bassHigh = Math.clamp(
      Math.round(320 / bucketHz) - 1,
      0,
      this.audio.numSamps - 1
    );
    const midHigh = Math.clamp(
      Math.round(2800 / bucketHz) - 1,
      0,
      this.audio.numSamps - 1
    );
    const trebHigh = Math.clamp(
      Math.round(11025 / bucketHz) - 1,
      0,
      this.audio.numSamps - 1
    );

    this.starts = [bassLow, bassHigh, midHigh];
    this.stops = [bassHigh, midHigh, trebHigh];

    this.val = new Float32Array(3);
    this.imm = new Float32Array(3);
    this.att = new Float32Array(3);
    this.avg = new Float32Array(3);
    this.longAvg = new Float32Array(3);

    this.att.fill(1);
    this.avg.fill(1);
    this.longAvg.fill(1);
  }

  /* eslint-disable camelcase */
  get bass() {
    return this.val[0];
  }

  get bass_att() {
    return this.att[0];
  }

  get mid() {
    return this.val[1];
  }

  get mid_att() {
    return this.att[1];
  }

  get treb() {
    return this.val[2];
  }

  get treb_att() {
    return this.att[2];
  }
  /* eslint-enable camelcase */

  static isFiniteNumber(num) {
    return Number.isFinite(num) && !Number.isNaN(num);
  }

  static adjustRateToFPS(rate, baseFPS, FPS) {
    return rate ** (baseFPS / FPS);
  }

  updateAudioLevels(fps, frame) {
    if (this.audio.freqArray.length > 0) {
      let effectiveFPS = fps;
      if (!AudioLevels.isFiniteNumber(effectiveFPS) || effectiveFPS < 15) {
        effectiveFPS = 15;
      } else if (effectiveFPS > 144) {
        effectiveFPS = 144;
      }

      // Clear for next loop
      this.imm.fill(0);
      for (let i = 0; i < 3; i++) {
        for (let j = this.starts[i]; j < this.stops[i]; j++) {
          this.imm[i] += this.audio.freqArray[j];
        }
      }

      for (let i = 0; i < 3; i++) {
        let rate;
        if (this.imm[i] > this.avg[i]) {
          rate = 0.2;
        } else {
          rate = 0.5;
        }
        rate = AudioLevels.adjustRateToFPS(rate, 30.0, effectiveFPS);
        this.avg[i] = this.avg[i] * rate + this.imm[i] * (1 - rate);

        if (frame < 50) {
          rate = 0.9;
        } else {
          rate = 0.992;
        }
        rate = AudioLevels.adjustRateToFPS(rate, 30.0, effectiveFPS);
        this.longAvg[i] = this.longAvg[i] * rate + this.imm[i] * (1 - rate);

        if (this.longAvg[i] < 0.001) {
          this.val[i] = 1.0;
          this.att[i] = 1.0;
        } else {
          this.val[i] = this.imm[i] / this.longAvg[i];
          this.att[i] = this.avg[i] / this.longAvg[i];
        }
      }
    }
  }
}

/* eslint-disable */
const pmap = {
    baseVals: {
      gammaadj: 1.25,
      wave_g: 0.5,
      mv_x: 12.0,
      warpscale: 1.0,
      brighten: 0.0,
      mv_y: 9.0,
      wave_scale: 1.0,
      echo_alpha: 0.0,
      additivewave: 0.0,
      sx: 1.0,
      sy: 1.0,
      warp: 0.01,
      red_blue: 0.0,
      wave_mode: 0.0,
      wave_brighten: 0.0,
      wrap: 0.0,
      zoomexp: 1.0,
      fshader: 0.0,
      wave_r: 0.5,
      echo_zoom: 1.0,
      wave_smoothing: 0.75,
      warpanimspeed: 1.0,
      wave_dots: 0.0,
      wave_x: 0.5,
      wave_y: 0.5,
      zoom: 1.0,
      solarize: 0.0,
      modwavealphabyvolume: 0.0,
      dx: 0.0,
      cx: 0.5,
      dy: 0.0,
      darken_center: 0.0,
      cy: 0.5,
      invert: 0.0,
      bmotionvectorson: 0.0,
      rot: 0.0,
      modwavealphaend: 0.95,
      wave_mystery: -0.2,
      decay: 0.9,
      wave_a: 1.0,
      wave_b: 0.5,
      rating: 5.0,
      modwavealphastart: 0.75,
      darken: 0.0,
      echo_orient: 0.0,
      ib_r: 0.5,
      ib_g: 0.5,
      ib_b: 0.5,
      ib_a: 0.0,
      ib_size: 0.0,
      ob_r: 0.5,
      ob_g: 0.5,
      ob_b: 0.5,
      ob_a: 0.0,
      ob_size: 0.0,
      mv_dx: 0.0,
      mv_dy: 0.0,
      mv_a: 0.0,
      mv_r: 0.5,
      mv_g: 0.5,
      mv_b: 0.5,
      mv_l: 0.0,
    },
    init_eqs: function () {
      var m = {};
      return m;
    },
    frame_eqs: function (m) {
      m.rkeys = ["warp"];
      m.zoom = 1.01 + 0.02 * m.treb_att;
      m.warp = 0.15 + 0.25 * m.bass_att;
      return m;
    },
    pixel_eqs: function (m) {
      m.warp = m.warp + m.rad * 0.15;
      return m;
    },
    waves: [
      {
        baseVals: {
          a: 1.0,
          enabled: 0.0,
          b: 1.0,
          g: 1.0,
          scaling: 1.0,
          samples: 512.0,
          additive: 0.0,
          usedots: 0.0,
          spectrum: 0.0,
          r: 1.0,
          smoothing: 0.5,
          thick: 0.0,
          sep: 0.0,
        },
        init_eqs: function (m) {
          m.rkeys = [];
          return m;
        },
        frame_eqs: function (m) {
          return m;
        },
        point_eqs: "",
      },
      {
        baseVals: {
          a: 1.0,
          enabled: 0.0,
          b: 1.0,
          g: 1.0,
          scaling: 1.0,
          samples: 512.0,
          additive: 0.0,
          usedots: 0.0,
          spectrum: 0.0,
          r: 1.0,
          smoothing: 0.5,
          thick: 0.0,
          sep: 0.0,
        },
        init_eqs: function (m) {
          m.rkeys = [];
          return m;
        },
        frame_eqs: function (m) {
          return m;
        },
        point_eqs: "",
      },
      {
        baseVals: {
          a: 1.0,
          enabled: 0.0,
          b: 1.0,
          g: 1.0,
          scaling: 1.0,
          samples: 512.0,
          additive: 0.0,
          usedots: 0.0,
          spectrum: 0.0,
          r: 1.0,
          smoothing: 0.5,
          thick: 0.0,
          sep: 0.0,
        },
        init_eqs: function (m) {
          m.rkeys = [];
          return m;
        },
        frame_eqs: function (m) {
          return m;
        },
        point_eqs: "",
      },
      {
        baseVals: {
          a: 1.0,
          enabled: 0.0,
          b: 1.0,
          g: 1.0,
          scaling: 1.0,
          samples: 512.0,
          additive: 0.0,
          usedots: 0.0,
          spectrum: 0.0,
          r: 1.0,
          smoothing: 0.5,
          thick: 0.0,
          sep: 0.0,
        },
        init_eqs: function (m) {
          m.rkeys = [];
          return m;
        },
        frame_eqs: function (m) {
          return m;
        },
        point_eqs: "",
      },
    ],
    shapes: [
      {
        baseVals: {
          r2: 0.0,
          a: 1.0,
          enabled: 0.0,
          b: 0.0,
          tex_ang: 0.0,
          thickoutline: 0.0,
          g: 0.0,
          textured: 0.0,
          g2: 1.0,
          tex_zoom: 1.0,
          additive: 0.0,
          border_a: 0.1,
          border_b: 1.0,
          b2: 0.0,
          a2: 0.0,
          r: 1.0,
          border_g: 1.0,
          rad: 0.1,
          x: 0.5,
          y: 0.5,
          ang: 0.0,
          sides: 4.0,
          border_r: 1.0,
        },
        init_eqs: function (m) {
          m.rkeys = [];
          return m;
        },
        frame_eqs: function (m) {
          return m;
        },
      },
      {
        baseVals: {
          r2: 0.0,
          a: 1.0,
          enabled: 0.0,
          b: 0.0,
          tex_ang: 0.0,
          thickoutline: 0.0,
          g: 0.0,
          textured: 0.0,
          g2: 1.0,
          tex_zoom: 1.0,
          additive: 0.0,
          border_a: 0.1,
          border_b: 1.0,
          b2: 0.0,
          a2: 0.0,
          r: 1.0,
          border_g: 1.0,
          rad: 0.1,
          x: 0.5,
          y: 0.5,
          ang: 0.0,
          sides: 4.0,
          border_r: 1.0,
        },
        init_eqs: function (m) {
          m.rkeys = [];
          return m;
        },
        frame_eqs: function (m) {
          return m;
        },
      },
      {
        baseVals: {
          r2: 0.0,
          a: 1.0,
          enabled: 0.0,
          b: 0.0,
          tex_ang: 0.0,
          thickoutline: 0.0,
          g: 0.0,
          textured: 0.0,
          g2: 1.0,
          tex_zoom: 1.0,
          additive: 0.0,
          border_a: 0.1,
          border_b: 1.0,
          b2: 0.0,
          a2: 0.0,
          r: 1.0,
          border_g: 1.0,
          rad: 0.1,
          x: 0.5,
          y: 0.5,
          ang: 0.0,
          sides: 4.0,
          border_r: 1.0,
        },
        init_eqs: function (m) {
          m.rkeys = [];
          return m;
        },
        frame_eqs: function (m) {
          return m;
        },
      },
      {
        baseVals: {
          r2: 0.0,
          a: 1.0,
          enabled: 0.0,
          b: 0.0,
          tex_ang: 0.0,
          thickoutline: 0.0,
          g: 0.0,
          textured: 0.0,
          g2: 1.0,
          tex_zoom: 1.0,
          additive: 0.0,
          border_a: 0.1,
          border_b: 1.0,
          b2: 0.0,
          a2: 0.0,
          r: 1.0,
          border_g: 1.0,
          rad: 0.1,
          x: 0.5,
          y: 0.5,
          ang: 0.0,
          sides: 4.0,
          border_r: 1.0,
        },
        init_eqs: function (m) {
          m.rkeys = [];
          return m;
        },
        frame_eqs: function (m) {
          return m;
        },
      },
    ],
    warp:
      "shader_body {\nret = texture2D(sampler_main, uv).rgb;\nret -= 0.004;\n}\n",
    comp:
      "shader_body {\nret = texture2D(sampler_main, uv).rgb;\nret *= hue_shader;\n}\n",
  };
/* eslint-enable */

class Utils {
  static atan2(x, y) {
    let a = Math.atan2(x, y);
    if (a < 0) {
      a += 2 * Math.PI;
    }
    return a;
  }

  static cloneVars(vars) {
    return Object.assign({}, vars);
  }

  static range(start, end) {
    if (end === undefined) {
      return [...Array(start).keys()];
    }

    return Array.from({ length: end - start }, (_, i) => i + start);
  }

  static pick(obj, keys) {
    const newObj = {};
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      newObj[key] = obj[key] || 0;
    }
    return newObj;
  }

  static omit(obj, keys) {
    const newObj = Object.assign({}, obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      delete newObj[key];
    }
    return newObj;
  }

  static setWasm(wasmGlobals, obj, keys) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      // eslint-disable-next-line no-param-reassign
      wasmGlobals[key].value = obj[key];
    }
  }

  static pickWasm(wasmGlobals, keys) {
    const newObj = {};
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      newObj[key] = wasmGlobals[key].value;
    }
    return newObj;
  }
}

/**
 * SeededRandom - Deterministic pseudo-random number generator
 * Using xorshift128+ algorithm
 */
class SeededRandom {
  constructor(seed = 1) {
    this.state = new Uint32Array(4);
    SeededRandom.initializeState(this.state, seed);
    this.warmUp();
  }

  static initializeState(state, seed) {
    state[0] = seed;
    state[1] = seed ^ 0x9e3779b9;
    state[2] = seed ^ 0x6a09e667;
    state[3] = seed ^ 0xbb67ae85;
  }

  warmUp() {
    for (let i = 0; i < 10; i++) {
      this.next();
    }
  }

  /**
   * Generate next random number in [0, 1)
   */
  next() {
    // xorshift128+ algorithm
    let t = this.state[3];
    let s = this.state[0];
    this.state[3] = this.state[2];
    this.state[2] = this.state[1];
    this.state[1] = s;

    t ^= t << 11;
    t ^= t >>> 8;
    this.state[0] = t ^ s ^ (s >>> 19);

    // Convert to [0, 1) range
    return (this.state[0] >>> 0) / 0x100000000;
  }

  /**
   * Generate random integer in [0, max)
   */
  nextInt(max) {
    return Math.floor(this.next() * max);
  }

  /**
   * Generate random number in [0, max)
   * Mimics butterchurn's rand() behavior
   */
  rand(max) {
    if (max < 1) {
      return this.next();
    }
    return Math.floor(this.next() * Math.floor(max));
  }

  /**
   * Reset generator to initial seed
   */
  reset(seed) {
    SeededRandom.initializeState(this.state, seed);
    this.warmUp();
  }
}

function createRNGContext(seed = 1) {
  const rng = new SeededRandom(seed);

  return {
    random: () => rng.next(),
    rand: (x) => rng.rand(x),
    randint: (x) => Math.floor(rng.rand(x) + 1),
    getRNG: () => rng,
    reset: (newSeed) => {
      if (newSeed !== undefined) {
        rng.reset(newSeed);
      } else {
        rng.reset(seed);
      }
    }
  };
}

function createDefaultRNGContext() {
  return {
    random: Math.random,
    rand: (x) => x < 1 ? Math.random() : Math.random() * Math.floor(x),
    randint: (x) => Math.floor((x < 1 ? Math.random() : Math.random() * Math.floor(x)) + 1),
    getRNG: () => null,
    reset: () => {}
  };
}

let globalRNG = null;

function initializeRNG(opts = {}) {
  if (opts.deterministic || opts.testMode) {
    globalRNG = createRNGContext(opts.seed || 12345);
  } else {
    globalRNG = createDefaultRNGContext();
  }

  if (opts.deterministic || opts.testMode) {

    // Override globals with our RNG
    window.rand = (x) => globalRNG.rand(x);
    window.randint = (x) => globalRNG.randint(x);
    Math.random = () => globalRNG.random();
  }

  return globalRNG;
}

function getRNG() {
  if (!globalRNG) {
    globalRNG = createDefaultRNGContext();
  }
  return globalRNG;
}

class PresetEquationRunner {
  constructor(preset, globalVars, opts) {
    this.rng = getRNG();
    this.preset = preset;

    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.qs = Utils.range(1, 33).map((x) => `q${x}`);
    this.ts = Utils.range(1, 9).map((x) => `t${x}`);
    this.regs = Utils.range(100).map((x) => {
      if (x < 10) {
        return `reg0${x}`;
      }
      return `reg${x}`;
    });

    this.initializeEquations(globalVars);
  }

  initializeEquations(globalVars) {
    this.runVertEQs = this.preset.pixel_eqs !== "";

    this.mdVSQInit = null;
    this.mdVSRegs = null;
    this.mdVSFrame = null;
    this.mdVSUserKeys = null;
    this.mdVSFrameMap = null;

    this.mdVSShapes = null;
    this.mdVSUserKeysShapes = null;
    this.mdVSFrameMapShapes = null;

    this.mdVSWaves = null;
    this.mdVSUserKeysWaves = null;
    this.mdVSFrameMapWaves = null;

    this.mdVSQAfterFrame = null;

    this.gmegabuf = new Array(1048576).fill(0);

    const mdVSBase = {
      frame: globalVars.frame,
      time: globalVars.time,
      fps: globalVars.fps,
      bass: globalVars.bass,
      bass_att: globalVars.bass_att,
      mid: globalVars.mid,
      mid_att: globalVars.mid_att,
      treb: globalVars.treb,
      treb_att: globalVars.treb_att,
      meshx: this.mesh_width,
      meshy: this.mesh_height,
      aspectx: this.invAspectx,
      aspecty: this.invAspecty,
      pixelsx: this.texsizeX,
      pixelsy: this.texsizeY,
      gmegabuf: this.gmegabuf,
    };

    this.mdVS = Object.assign({}, this.preset.baseVals, mdVSBase);

    this.mdVS.megabuf = new Array(1048576).fill(0);
    this.mdVS.rand_start = new Float32Array([
      this.rng.random(),
      this.rng.random(),
      this.rng.random(),
      this.rng.random(),
    ]);
    this.mdVS.rand_preset = new Float32Array([
      this.rng.random(),
      this.rng.random(),
      this.rng.random(),
      this.rng.random(),
    ]);

    const nonUserKeys = this.qs.concat(this.regs, Object.keys(this.mdVS));

    const mdVSAfterInit = this.preset.init_eqs(Utils.cloneVars(this.mdVS));

    // qs need to be initialized to there init values every frame
    this.mdVSQInit = Utils.pick(mdVSAfterInit, this.qs);
    this.mdVSRegs = Utils.pick(mdVSAfterInit, this.regs);
    const initUserVars = Utils.pick(
      mdVSAfterInit,
      Object.keys(Utils.omit(mdVSAfterInit, nonUserKeys))
    );
    initUserVars.megabuf = mdVSAfterInit.megabuf;
    initUserVars.gmegabuf = mdVSAfterInit.gmegabuf;

    this.mdVSFrame = this.preset.frame_eqs(
      Object.assign({}, this.mdVS, this.mdVSQInit, this.mdVSRegs, initUserVars)
    );

    // user vars need to be copied between frames
    this.mdVSUserKeys = Object.keys(Utils.omit(this.mdVSFrame, nonUserKeys));

    // Determine vars to carry over between frames
    this.mdVSFrameMap = Utils.pick(this.mdVSFrame, this.mdVSUserKeys);

    // qs for shapes
    this.mdVSQAfterFrame = Utils.pick(this.mdVSFrame, this.qs);
    this.mdVSRegs = Utils.pick(this.mdVSFrame, this.regs);

    this.mdVSWaves = [];
    this.mdVSTWaveInits = [];
    this.mdVSUserKeysWaves = [];
    this.mdVSFrameMapWaves = [];
    if (this.preset.waves && this.preset.waves.length > 0) {
      for (let i = 0; i < this.preset.waves.length; i++) {
        const wave = this.preset.waves[i];
        const baseVals = wave.baseVals;
        if (baseVals.enabled !== 0) {
          let mdVSWave = Object.assign({}, baseVals, mdVSBase);

          const nonUserWaveKeys = this.qs.concat(
            this.ts,
            this.regs,
            Object.keys(mdVSWave)
          );

          Object.assign(mdVSWave, this.mdVSQAfterFrame, this.mdVSRegs);
          mdVSWave.megabuf = new Array(1048576).fill(0);

          if (wave.init_eqs) {
            mdVSWave = wave.init_eqs(mdVSWave);

            this.mdVSRegs = Utils.pick(mdVSWave, this.regs);

            // base vals need to be reset
            Object.assign(mdVSWave, baseVals);
          }
          this.mdVSWaves.push(mdVSWave);
          this.mdVSTWaveInits.push(Utils.pick(mdVSWave, this.ts));

          this.mdVSUserKeysWaves.push(
            Object.keys(Utils.omit(mdVSWave, nonUserWaveKeys))
          );
          this.mdVSFrameMapWaves.push(
            Utils.pick(mdVSWave, this.mdVSUserKeysWaves[i])
          );
        } else {
          this.mdVSWaves.push({});
          this.mdVSTWaveInits.push({});

          this.mdVSUserKeysWaves.push([]);
          this.mdVSFrameMapWaves.push({});
        }
      }
    }

    this.mdVSShapes = [];
    this.mdVSTShapeInits = [];
    this.mdVSUserKeysShapes = [];
    this.mdVSFrameMapShapes = [];
    if (this.preset.shapes && this.preset.shapes.length > 0) {
      for (let i = 0; i < this.preset.shapes.length; i++) {
        const shape = this.preset.shapes[i];
        const baseVals = shape.baseVals;
        if (baseVals.enabled !== 0) {
          let mdVSShape = Object.assign({}, baseVals, mdVSBase);

          const nonUserShapeKeys = this.qs.concat(
            this.ts,
            this.regs,
            Object.keys(mdVSShape)
          );

          Object.assign(mdVSShape, this.mdVSQAfterFrame, this.mdVSRegs);
          mdVSShape.megabuf = new Array(1048576).fill(0);

          if (shape.init_eqs) {
            mdVSShape = shape.init_eqs(mdVSShape);

            this.mdVSRegs = Utils.pick(mdVSShape, this.regs);

            // base vals need to be reset
            Object.assign(mdVSShape, baseVals);
          }
          this.mdVSShapes.push(mdVSShape);
          this.mdVSTShapeInits.push(Utils.pick(mdVSShape, this.ts));

          this.mdVSUserKeysShapes.push(
            Object.keys(Utils.omit(mdVSShape, nonUserShapeKeys))
          );
          this.mdVSFrameMapShapes.push(
            Utils.pick(mdVSShape, this.mdVSUserKeysShapes[i])
          );
        } else {
          this.mdVSShapes.push({});
          this.mdVSTShapeInits.push({});

          this.mdVSUserKeysShapes.push([]);
          this.mdVSFrameMapShapes.push({});
        }
      }
    }
  }

  updatePreset(preset, globalVars) {
    this.preset = preset;
    this.initializeEquations(globalVars);
  }

  updateGlobals(opts) {
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;
  }

  runFrameEquations(globalVars) {
    this.mdVSFrame = Object.assign(
      {},
      this.mdVS,
      this.mdVSQInit,
      this.mdVSFrameMap,
      globalVars
    );

    this.mdVSFrame = this.preset.frame_eqs(this.mdVSFrame);

    this.mdVSFrameMap = Utils.pick(this.mdVSFrame, this.mdVSUserKeys);
    this.mdVSQAfterFrame = Utils.pick(this.mdVSFrame, this.qs);

    return this.mdVSFrame;
  }

  runPixelEquations(mdVSVertex) {
    return this.preset.pixel_eqs(mdVSVertex);
  }

  runShapeFrameEquations(shapeIdx, mdVSShape) {
    return this.preset.shapes[shapeIdx].frame_eqs(mdVSShape);
  }

  runWaveFrameEquations(waveIdx, mdVSWave) {
    return this.preset.waves[waveIdx].frame_eqs(mdVSWave);
  }

  runWavePointEquations(waveIdx, mdVSWaveFrame) {
    return this.preset.waves[waveIdx].point_eqs(mdVSWaveFrame);
  }
}

class PresetEquationRunnerWASM {
  constructor(preset, globalVars, opts) {
    this.rng = getRNG();
    this.preset = preset;

    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.qs = Utils.range(1, 33).map((x) => `q${x}`);
    this.ts = Utils.range(1, 9).map((x) => `t${x}`);
    this.regs = Utils.range(100).map((x) => {
      if (x < 10) {
        return `reg0${x}`;
      }
      return `reg${x}`;
    });

    this.globalKeys = [
      "frame",
      "time",
      "fps",
      "bass",
      "bass_att",
      "mid",
      "mid_att",
      "treb",
      "treb_att",
      "meshx",
      "meshy",
      "aspectx",
      "aspecty",
      "pixelsx",
      "pixelsy",
    ];

    this.frameKeys = [
      "decay",
      "wave_a",
      "wave_r",
      "wave_g",
      "wave_b",
      "wave_x",
      "wave_y",
      "wave_scale",
      "wave_smoothing",
      "wave_mode",
      "old_wave_mode",
      "wave_mystery",
      "ob_size",
      "ob_r",
      "ob_g",
      "ob_b",
      "ob_a",
      "ib_size",
      "ib_r",
      "ib_g",
      "ib_b",
      "ib_a",
      "mv_x",
      "mv_y",
      "mv_dx",
      "mv_dy",
      "mv_l",
      "mv_r",
      "mv_g",
      "mv_b",
      "mv_a",
      "echo_zoom",
      "echo_alpha",
      "echo_orient",
      "wave_dots",
      "wave_thick",
      "additivewave",
      "wave_brighten",
      "modwavealphabyvolume",
      "modwavealphastart",
      "modwavealphaend",
      "darken_center",
      "gammaadj",
      "warp",
      "warpanimspeed",
      "warpscale",
      "zoom",
      "zoomexp",
      "rot",
      "cx",
      "cy",
      "dx",
      "dy",
      "sx",
      "sy",
      "fshader",
      "wrap",
      "invert",
      "brighten",
      "darken",
      "solarize",
      "bmotionvectorson",
      "b1n",
      "b2n",
      "b3n",
      "b1x",
      "b2x",
      "b3x",
      "b1ed",
    ];

    this.waveFrameKeys = [
      "samples",
      "sep",
      "scaling",
      "spectrum",
      "smoothing",
      "r",
      "g",
      "b",
      "a",
    ];

    this.waveFrameInputKeys = ["samples", "r", "g", "b", "a"];

    this.initializeEquations(globalVars);
  }

  getQVars(pool) {
    return Utils.pickWasm(this.preset.globalPools[pool], this.qs);
  }

  getTVars(pool) {
    return Utils.pickWasm(this.preset.globalPools[pool], this.ts);
  }

  initializeEquations(globalVars) {
    this.runVertEQs = !!this.preset.pixel_eqs;

    this.mdVSQInit = null;
    this.mdVSQAfterFrame = null;

    const mdVSBase = {
      frame: globalVars.frame,
      time: globalVars.time,
      fps: globalVars.fps,
      bass: globalVars.bass,
      bass_att: globalVars.bass_att,
      mid: globalVars.mid,
      mid_att: globalVars.mid_att,
      treb: globalVars.treb,
      treb_att: globalVars.treb_att,
      meshx: this.mesh_width,
      meshy: this.mesh_height,
      aspectx: this.invAspectx,
      aspecty: this.invAspecty,
      pixelsx: this.texsizeX,
      pixelsy: this.texsizeY,
    };

    this.mdVS = Object.assign({}, this.preset.baseVals, mdVSBase);

    // eslint-disable-next-line max-len
    Utils.setWasm(
      this.preset.globalPools.perFrame,
      this.mdVS,
      Object.keys(this.mdVS)
    );

    this.rand_start = new Float32Array([
      this.rng.random(),
      this.rng.random(),
      this.rng.random(),
      this.rng.random(),
    ]);
    this.rand_preset = new Float32Array([
      this.rng.random(),
      this.rng.random(),
      this.rng.random(),
      this.rng.random(),
    ]);

    this.preset.init_eqs();

    // qs need to be initialized to there init values every frame
    this.mdVSQInit = this.getQVars("perFrame");

    this.preset.frame_eqs();

    this.mdVSQAfterFrame = this.getQVars("perFrame");

    this.mdVSTWaveInits = [];
    if (this.preset.waves && this.preset.waves.length > 0) {
      for (let i = 0; i < this.preset.waves.length; i++) {
        const wave = this.preset.waves[i];
        const baseVals = wave.baseVals;
        if (baseVals.enabled !== 0) {
          // eslint-disable-next-line max-len
          Utils.setWasm(
            this.preset.globalPools[`wavePerFrame${i}`],
            baseVals,
            Object.keys(baseVals)
          );
          if (wave.init_eqs) {
            wave.init_eqs();

            // base vals need to be reset
            // eslint-disable-next-line max-len
            Utils.setWasm(
              this.preset.globalPools[`wavePerFrame${i}`],
              baseVals,
              Object.keys(baseVals)
            );
          }
          this.mdVSTWaveInits.push(this.getTVars(`wavePerFrame${i}`));
        } else {
          this.mdVSTWaveInits.push({});
        }
      }
    }

    this.mdVSTShapeInits = [];
    if (this.preset.shapes && this.preset.shapes.length > 0) {
      for (let i = 0; i < this.preset.shapes.length; i++) {
        const shape = this.preset.shapes[i];
        const baseVals = shape.baseVals;
        if (baseVals.enabled !== 0) {
          // eslint-disable-next-line max-len
          Utils.setWasm(
            this.preset.globalPools[`shapePerFrame${i}`],
            baseVals,
            Object.keys(baseVals)
          );
          if (shape.init_eqs) {
            shape.init_eqs();

            // base vals need to be reset
            // eslint-disable-next-line max-len
            Utils.setWasm(
              this.preset.globalPools[`shapePerFrame${i}`],
              baseVals,
              Object.keys(baseVals)
            );
          }
          this.mdVSTShapeInits.push(this.getTVars(`shapePerFrame${i}`));
        } else {
          this.mdVSTShapeInits.push({});
        }
      }
    }
  }

  updatePreset(preset, globalVars) {
    this.preset = preset;
    this.initializeEquations(globalVars);
  }

  updateGlobals(opts) {
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;
  }

  runFrameEquations(globalVars) {
    Utils.setWasm(this.preset.globalPools.perFrame, this.mdVS, this.frameKeys);
    Utils.setWasm(this.preset.globalPools.perFrame, this.mdVSQInit, this.qs);
    Utils.setWasm(
      this.preset.globalPools.perFrame,
      globalVars,
      this.globalKeys
    );

    this.preset.frame_eqs();
    this.preset.save_qs();

    this.mdVSQAfterFrame = this.getQVars("perFrame");

    // eslint-disable-next-line max-len
    const mdVSFrame = Utils.pickWasm(this.preset.globalPools.perFrame, [
      ...this.frameKeys,
      ...this.globalKeys,
    ]);
    mdVSFrame.rand_preset = this.rand_preset;
    mdVSFrame.rand_start = this.rand_start;

    return mdVSFrame;
  }

  /* eslint-disable max-len */
  runWaveFrameEquations(waveIdx, globalVars) {
    const baseVals = this.preset.waves[waveIdx].baseVals;
    Utils.setWasm(
      this.preset.globalPools[`wavePerFrame${waveIdx}`],
      baseVals,
      this.waveFrameInputKeys
    );
    Utils.setWasm(
      this.preset.globalPools[`wavePerFrame${waveIdx}`],
      this.mdVSQAfterFrame,
      this.qs
    );
    Utils.setWasm(
      this.preset.globalPools[`wavePerFrame${waveIdx}`],
      this.mdVSTWaveInits[waveIdx],
      this.ts
    );
    Utils.setWasm(
      this.preset.globalPools[`wavePerFrame${waveIdx}`],
      globalVars,
      this.globalKeys
    );
    this.preset.waves[waveIdx].frame_eqs();
    return Utils.pickWasm(
      this.preset.globalPools[`wavePerFrame${waveIdx}`],
      this.waveFrameKeys
    );
  }
  /* eslint-enable max-len */
}

const lineMatcher = /uniform sampler2D sampler_(?:.+?);/g;
const samplerMatcher = /uniform sampler2D sampler_(.+?);/;

class ShaderUtils {
  static getShaderParts(t) {
    const sbIndex = t.indexOf("shader_body");
    if (t && sbIndex > -1) {
      const beforeShaderBody = t.substring(0, sbIndex);
      const afterShaderBody = t.substring(sbIndex);
      const firstCurly = afterShaderBody.indexOf("{");
      const lastCurly = afterShaderBody.lastIndexOf("}");
      const shaderBody = afterShaderBody.substring(firstCurly + 1, lastCurly);
      return [beforeShaderBody, shaderBody];
    }

    return ["", t];
  }

  static getFragmentFloatPrecision(gl) {
    if (
      gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision >
      0
    ) {
      return "highp";
    } else if (
      gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT)
        .precision > 0
    ) {
      return "mediump";
    }
    return "lowp";
  }

  static getUserSamplers(text) {
    const samplers = [];
    const lineMatches = text.match(lineMatcher);
    if (lineMatches && lineMatches.length > 0) {
      for (let i = 0; i < lineMatches.length; i++) {
        const samplerMatches = lineMatches[i].match(samplerMatcher);
        if (samplerMatches && samplerMatches.length > 0) {
          const sampler = samplerMatches[1];
          samplers.push({ sampler });
        }
      }
    }
    return samplers;
  }
}

class WaveUtils {
  /* eslint-disable no-param-reassign */
  static smoothWave(positions, positionsSmoothed, nVertsIn, zCoord = false) {
    const c1 = -0.15;
    const c2 = 1.15;
    const c3 = 1.15;
    const c4 = -0.15;
    const invSum = 1.0 / (c1 + c2 + c3 + c4);

    let j = 0;

    let iBelow = 0;
    let iAbove;
    let iAbove2 = 1;
    for (let i = 0; i < nVertsIn - 1; i++) {
      iAbove = iAbove2;
      iAbove2 = Math.min(nVertsIn - 1, i + 2);

      for (let k = 0; k < 3; k++) {
        positionsSmoothed[j * 3 + k] = positions[i * 3 + k];
      }

      if (zCoord) {
        for (let k = 0; k < 3; k++) {
          positionsSmoothed[(j + 1) * 3 + k] =
            (c1 * positions[iBelow * 3 + k] +
              c2 * positions[i * 3 + k] +
              c3 * positions[iAbove * 3 + k] +
              c4 * positions[iAbove2 * 3 + k]) *
            invSum;
        }
      } else {
        for (let k = 0; k < 2; k++) {
          positionsSmoothed[(j + 1) * 3 + k] =
            (c1 * positions[iBelow * 3 + k] +
              c2 * positions[i * 3 + k] +
              c3 * positions[iAbove * 3 + k] +
              c4 * positions[iAbove2 * 3 + k]) *
            invSum;
        }
        positionsSmoothed[(j + 1) * 3 + 2] = 0;
      }

      iBelow = i;
      j += 2;
    }

    for (let k = 0; k < 3; k++) {
      positionsSmoothed[j * 3 + k] = positions[(nVertsIn - 1) * 3 + k];
    }
  }

  static smoothWaveAndColor(
    positions,
    colors,
    positionsSmoothed,
    colorsSmoothed,
    nVertsIn,
    zCoord = false
  ) {
    const c1 = -0.15;
    const c2 = 1.15;
    const c3 = 1.15;
    const c4 = -0.15;
    const invSum = 1.0 / (c1 + c2 + c3 + c4);

    let j = 0;

    let iBelow = 0;
    let iAbove;
    let iAbove2 = 1;
    for (let i = 0; i < nVertsIn - 1; i++) {
      iAbove = iAbove2;
      iAbove2 = Math.min(nVertsIn - 1, i + 2);

      for (let k = 0; k < 3; k++) {
        positionsSmoothed[j * 3 + k] = positions[i * 3 + k];
      }

      if (zCoord) {
        for (let k = 0; k < 3; k++) {
          positionsSmoothed[(j + 1) * 3 + k] =
            (c1 * positions[iBelow * 3 + k] +
              c2 * positions[i * 3 + k] +
              c3 * positions[iAbove * 3 + k] +
              c4 * positions[iAbove2 * 3 + k]) *
            invSum;
        }
      } else {
        for (let k = 0; k < 2; k++) {
          positionsSmoothed[(j + 1) * 3 + k] =
            (c1 * positions[iBelow * 3 + k] +
              c2 * positions[i * 3 + k] +
              c3 * positions[iAbove * 3 + k] +
              c4 * positions[iAbove2 * 3 + k]) *
            invSum;
        }
        positionsSmoothed[(j + 1) * 3 + 2] = 0;
      }

      for (let k = 0; k < 4; k++) {
        colorsSmoothed[j * 4 + k] = colors[i * 4 + k];
        colorsSmoothed[(j + 1) * 4 + k] = colors[i * 4 + k];
      }

      iBelow = i;
      j += 2;
    }

    for (let k = 0; k < 3; k++) {
      positionsSmoothed[j * 3 + k] = positions[(nVertsIn - 1) * 3 + k];
    }

    for (let k = 0; k < 4; k++) {
      colorsSmoothed[j * 4 + k] = colors[(nVertsIn - 1) * 4 + k];
    }
  }

  /* eslint-enable no-param-reassign */
}

class BasicWaveform {
  constructor(gl, opts = {}) {
    this.gl = gl;

    const numAudioSamples = 512;
    this.positions = new Float32Array(numAudioSamples * 3);
    this.positions2 = new Float32Array(numAudioSamples * 3);
    this.oldPositions = new Float32Array(numAudioSamples * 3);
    this.oldPositions2 = new Float32Array(numAudioSamples * 3);
    this.smoothedPositions = new Float32Array((numAudioSamples * 2 - 1) * 3);
    this.smoothedPositions2 = new Float32Array((numAudioSamples * 2 - 1) * 3);
    this.color = [0, 0, 0, 1];

    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    this.createShader();

    this.vertexBuf = this.gl.createBuffer();
  }

  updateGlobals(opts) {
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;
  }

  createShader() {
    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `
      #version 300 es
      in vec3 aPos;
      uniform vec2 thickOffset;
      void main(void) {
        gl_Position = vec4(aPos + vec3(thickOffset, 0.0), 1.0);
      }
      `.trim()
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      out vec4 fragColor;
      uniform vec4 u_color;
      void main(void) {
        fragColor = u_color;
      }
      `.trim()
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.aPosLoc = this.gl.getAttribLocation(this.shaderProgram, "aPos");

    this.colorLoc = this.gl.getUniformLocation(this.shaderProgram, "u_color");
    this.thickOffsetLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "thickOffset"
    );
  }

  static processWaveform(timeArray, mdVSFrame) {
    const waveform = [];

    const scale = mdVSFrame.wave_scale / 128.0;
    const smooth = mdVSFrame.wave_smoothing;
    const smooth2 = scale * (1.0 - smooth);

    waveform.push(timeArray[0] * scale);
    for (let i = 1; i < timeArray.length; i++) {
      waveform.push(timeArray[i] * smooth2 + waveform[i - 1] * smooth);
    }

    return waveform;
  }

  generateWaveform(blending, blendProgress, timeArrayL, timeArrayR, mdVSFrame) {
    let alpha = mdVSFrame.wave_a;
    const vol = (mdVSFrame.bass + mdVSFrame.mid + mdVSFrame.treb) / 3.0;

    if (vol > -0.01 && alpha > 0.001 && timeArrayL.length > 0) {
      const waveL = BasicWaveform.processWaveform(timeArrayL, mdVSFrame);
      const waveR = BasicWaveform.processWaveform(timeArrayR, mdVSFrame);

      const newWaveMode = Math.floor(mdVSFrame.wave_mode) % 8;
      const oldWaveMode = Math.floor(mdVSFrame.old_wave_mode) % 8;

      const wavePosX = mdVSFrame.wave_x * 2.0 - 1.0;
      const wavePosY = mdVSFrame.wave_y * 2.0 - 1.0;

      this.numVert = 0;
      this.oldNumVert = 0;

      const its = blending && newWaveMode !== oldWaveMode ? 2 : 1;
      for (let it = 0; it < its; it++) {
        const waveMode = it === 0 ? newWaveMode : oldWaveMode;

        let fWaveParam2 = mdVSFrame.wave_mystery;
        if (
          (waveMode === 0 || waveMode === 1 || waveMode === 4) &&
          (fWaveParam2 < -1 || fWaveParam2 > 1)
        ) {
          fWaveParam2 = fWaveParam2 * 0.5 + 0.5;
          fWaveParam2 -= Math.floor(fWaveParam2);
          fWaveParam2 = Math.abs(fWaveParam2);
          fWaveParam2 = fWaveParam2 * 2 - 1;
        }

        let numVert;
        let positions;
        let positions2;
        if (it === 0) {
          positions = this.positions;
          positions2 = this.positions2;
        } else {
          positions = this.oldPositions;
          positions2 = this.oldPositions2;
        }

        alpha = mdVSFrame.wave_a;
        if (waveMode === 0) {
          if (mdVSFrame.modwavealphabyvolume > 0) {
            const alphaDiff =
              mdVSFrame.modwavealphaend - mdVSFrame.modwavealphastart;
            alpha *= (vol - mdVSFrame.modwavealphastart) / alphaDiff;
          }
          alpha = Math.clamp(alpha, 0, 1);

          numVert = Math.floor(waveL.length / 2) + 1;
          const numVertInv = 1.0 / (numVert - 1);
          const sampleOffset = Math.floor((waveL.length - numVert) / 2);
          for (let i = 0; i < numVert - 1; i++) {
            let rad = 0.5 + 0.4 * waveR[i + sampleOffset] + fWaveParam2;
            const ang = i * numVertInv * 2 * Math.PI + mdVSFrame.time * 0.2;

            if (i < numVert / 10) {
              let mix = i / (numVert * 0.1);
              mix = 0.5 - 0.5 * Math.cos(mix * Math.PI);
              const rad2 =
                0.5 + 0.4 * waveR[i + numVert + sampleOffset] + fWaveParam2;
              rad = (1.0 - mix) * rad2 + rad * mix;
            }

            positions[i * 3 + 0] =
              rad * Math.cos(ang) * this.aspecty + wavePosX;
            positions[i * 3 + 1] =
              rad * Math.sin(ang) * this.aspectx + wavePosY;
            positions[i * 3 + 2] = 0;
          }

          // connect the loop
          positions[(numVert - 1) * 3 + 0] = positions[0];
          positions[(numVert - 1) * 3 + 1] = positions[1];
          positions[(numVert - 1) * 3 + 2] = 0;
        } else if (waveMode === 1) {
          alpha *= 1.25;
          if (mdVSFrame.modwavealphabyvolume > 0) {
            const alphaDiff =
              mdVSFrame.modwavealphaend - mdVSFrame.modwavealphastart;
            alpha *= (vol - mdVSFrame.modwavealphastart) / alphaDiff;
          }
          alpha = Math.clamp(alpha, 0, 1);

          numVert = Math.floor(waveL.length / 2);
          for (let i = 0; i < numVert; i++) {
            const rad = 0.53 + 0.43 * waveR[i] + fWaveParam2;
            const ang = waveL[i + 32] * 0.5 * Math.PI + mdVSFrame.time * 2.3;

            positions[i * 3 + 0] =
              rad * Math.cos(ang) * this.aspecty + wavePosX;
            positions[i * 3 + 1] =
              rad * Math.sin(ang) * this.aspectx + wavePosY;
            positions[i * 3 + 2] = 0;
          }
        } else if (waveMode === 2) {
          if (this.texsizeX < 1024) {
            alpha *= 0.09;
          } else if (this.texsizeX >= 1024 && this.texsizeX < 2048) {
            alpha *= 0.11;
          } else {
            alpha *= 0.13;
          }

          if (mdVSFrame.modwavealphabyvolume > 0) {
            const alphaDiff =
              mdVSFrame.modwavealphaend - mdVSFrame.modwavealphastart;
            alpha *= (vol - mdVSFrame.modwavealphastart) / alphaDiff;
          }
          alpha = Math.clamp(alpha, 0, 1);

          numVert = waveL.length;
          for (let i = 0; i < waveL.length; i++) {
            positions[i * 3 + 0] = waveR[i] * this.aspecty + wavePosX;
            positions[i * 3 + 1] =
              waveL[(i + 32) % waveL.length] * this.aspectx + wavePosY;
            positions[i * 3 + 2] = 0;
          }
        } else if (waveMode === 3) {
          if (this.texsizeX < 1024) {
            alpha *= 0.15;
          } else if (this.texsizeX >= 1024 && this.texsizeX < 2048) {
            alpha *= 0.22;
          } else {
            alpha *= 0.33;
          }

          alpha *= 1.3;
          alpha *= mdVSFrame.treb * mdVSFrame.treb; // should be treb_imm

          if (mdVSFrame.modwavealphabyvolume > 0) {
            const alphaDiff =
              mdVSFrame.modwavealphaend - mdVSFrame.modwavealphastart;
            alpha *= (vol - mdVSFrame.modwavealphastart) / alphaDiff;
          }
          alpha = Math.clamp(alpha, 0, 1);

          numVert = waveL.length;
          for (let i = 0; i < waveL.length; i++) {
            positions[i * 3 + 0] = waveR[i] * this.aspecty + wavePosX;
            positions[i * 3 + 1] =
              waveL[(i + 32) % waveL.length] * this.aspectx + wavePosY;
            positions[i * 3 + 2] = 0;
          }
        } else if (waveMode === 4) {
          if (mdVSFrame.modwavealphabyvolume > 0) {
            const alphaDiff =
              mdVSFrame.modwavealphaend - mdVSFrame.modwavealphastart;
            alpha *= (vol - mdVSFrame.modwavealphastart) / alphaDiff;
          }
          alpha = Math.clamp(alpha, 0, 1);

          numVert = waveL.length;
          if (numVert > this.texsizeX / 3) {
            numVert = Math.floor(this.texsizeX / 3);
          }
          const numVertInv = 1.0 / numVert;
          const sampleOffset = Math.floor((waveL.length - numVert) / 2);

          const w1 = 0.45 + 0.5 * (fWaveParam2 * 0.5 + 0.5);
          const w2 = 1.0 - w1;
          for (let i = 0; i < numVert; i++) {
            let x =
              2.0 * i * numVertInv +
              (wavePosX - 1) +
              waveR[(i + 25 + sampleOffset) % waveL.length] * 0.44;
            let y = waveL[i + sampleOffset] * 0.47 + wavePosY;

            // momentum
            if (i > 1) {
              x =
                x * w2 +
                w1 *
                  (positions[(i - 1) * 3 + 0] * 2.0 -
                    positions[(i - 2) * 3 + 0]);
              y =
                y * w2 +
                w1 *
                  (positions[(i - 1) * 3 + 1] * 2.0 -
                    positions[(i - 2) * 3 + 1]);
            }

            positions[i * 3 + 0] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = 0;
          }
        } else if (waveMode === 5) {
          if (this.texsizeX < 1024) {
            alpha *= 0.09;
          } else if (this.texsizeX >= 1024 && this.texsizeX < 2048) {
            alpha *= 0.11;
          } else {
            alpha *= 0.13;
          }

          if (mdVSFrame.modwavealphabyvolume > 0) {
            const alphaDiff =
              mdVSFrame.modwavealphaend - mdVSFrame.modwavealphastart;
            alpha *= (vol - mdVSFrame.modwavealphastart) / alphaDiff;
          }
          alpha = Math.clamp(alpha, 0, 1);

          const cosRot = Math.cos(mdVSFrame.time * 0.3);
          const sinRot = Math.sin(mdVSFrame.time * 0.3);

          numVert = waveL.length;
          for (let i = 0; i < waveL.length; i++) {
            const ioff = (i + 32) % waveL.length;
            const x0 = waveR[i] * waveL[ioff] + waveL[i] * waveR[ioff];
            const y0 = waveR[i] * waveR[i] - waveL[ioff] * waveL[ioff];

            positions[i * 3 + 0] =
              (x0 * cosRot - y0 * sinRot) * (this.aspecty + wavePosX);
            positions[i * 3 + 1] =
              (x0 * sinRot + y0 * cosRot) * (this.aspectx + wavePosY);
            positions[i * 3 + 2] = 0;
          }
        } else if (waveMode === 6 || waveMode === 7) {
          if (mdVSFrame.modwavealphabyvolume > 0) {
            const alphaDiff =
              mdVSFrame.modwavealphaend - mdVSFrame.modwavealphastart;
            alpha *= (vol - mdVSFrame.modwavealphastart) / alphaDiff;
          }
          alpha = Math.clamp(alpha, 0, 1);

          numVert = Math.floor(waveL.length / 2);
          if (numVert > this.texsizeX / 3) {
            numVert = Math.floor(this.texsizeX / 3);
          }
          const sampleOffset = Math.floor((waveL.length - numVert) / 2);

          const ang = Math.PI * 0.5 * fWaveParam2;
          let dx = Math.cos(ang);
          let dy = Math.sin(ang);

          const edgex = [
            wavePosX * Math.cos(ang + Math.PI * 0.5) - dx * 3.0,
            wavePosX * Math.cos(ang + Math.PI * 0.5) + dx * 3.0,
          ];
          const edgey = [
            wavePosX * Math.sin(ang + Math.PI * 0.5) - dy * 3.0,
            wavePosX * Math.sin(ang + Math.PI * 0.5) + dy * 3.0,
          ];

          for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 4; j++) {
              let t;
              let bClip = false;

              switch (j) {
                case 0:
                  if (edgex[i] > 1.1) {
                    t = (1.1 - edgex[1 - i]) / (edgex[i] - edgex[1 - i]);
                    bClip = true;
                  }
                  break;
                case 1:
                  if (edgex[i] < -1.1) {
                    t = (-1.1 - edgex[1 - i]) / (edgex[i] - edgex[1 - i]);
                    bClip = true;
                  }
                  break;
                case 2:
                  if (edgey[i] > 1.1) {
                    t = (1.1 - edgey[1 - i]) / (edgey[i] - edgey[1 - i]);
                    bClip = true;
                  }
                  break;
                case 3:
                  if (edgey[i] < -1.1) {
                    t = (-1.1 - edgey[1 - i]) / (edgey[i] - edgey[1 - i]);
                    bClip = true;
                  }
                  break;
              }

              if (bClip) {
                const dxi = edgex[i] - edgex[1 - i];
                const dyi = edgey[i] - edgey[1 - i];
                edgex[i] = edgex[1 - i] + dxi * t;
                edgey[i] = edgey[1 - i] + dyi * t;
              }
            }
          }

          dx = (edgex[1] - edgex[0]) / numVert;
          dy = (edgey[1] - edgey[0]) / numVert;

          const ang2 = Math.atan2(dy, dx);
          const perpDx = Math.cos(ang2 + Math.PI * 0.5);
          const perpDy = Math.sin(ang2 + Math.PI * 0.5);

          if (waveMode === 6) {
            for (let i = 0; i < numVert; i++) {
              const sample = waveL[i + sampleOffset];
              positions[i * 3 + 0] = edgex[0] + dx * i + perpDx * 0.25 * sample;
              positions[i * 3 + 1] = edgey[0] + dy * i + perpDy * 0.25 * sample;
              positions[i * 3 + 2] = 0;
            }
          } else if (waveMode === 7) {
            const sep = (wavePosY * 0.5 + 0.5) ** 2;
            for (let i = 0; i < numVert; i++) {
              const sample = waveL[i + sampleOffset];
              positions[i * 3 + 0] =
                edgex[0] + dx * i + perpDx * (0.25 * sample + sep);
              positions[i * 3 + 1] =
                edgey[0] + dy * i + perpDy * (0.25 * sample + sep);
              positions[i * 3 + 2] = 0;
            }

            for (let i = 0; i < numVert; i++) {
              const sample = waveR[i + sampleOffset];
              positions2[i * 3 + 0] =
                edgex[0] + dx * i + perpDx * (0.25 * sample - sep);
              positions2[i * 3 + 1] =
                edgey[0] + dy * i + perpDy * (0.25 * sample - sep);
              positions2[i * 3 + 2] = 0;
            }
          }
        }

        if (it === 0) {
          this.positions = positions;
          this.positions2 = positions2;
          this.numVert = numVert;
          this.alpha = alpha;
        } else {
          this.oldPositions = positions;
          this.oldPositions2 = positions2;
          this.oldNumVert = numVert;
          this.oldAlpha = alpha;
        }
      }

      const mix = 0.5 - 0.5 * Math.cos(blendProgress * Math.PI);
      const mix2 = 1 - mix;

      if (this.oldNumVert > 0) {
        alpha = mix * this.alpha + mix2 * this.oldAlpha;
      }

      let r = Math.clamp(mdVSFrame.wave_r, 0, 1);
      let g = Math.clamp(mdVSFrame.wave_g, 0, 1);
      let b = Math.clamp(mdVSFrame.wave_b, 0, 1);

      if (mdVSFrame.wave_brighten !== 0) {
        const maxc = Math.max(r, g, b);
        if (maxc > 0.01) {
          r /= maxc;
          g /= maxc;
          b /= maxc;
        }
      }

      this.color = [r, g, b, alpha];

      if (this.oldNumVert > 0) {
        if (newWaveMode === 7) {
          const m = (this.oldNumVert - 1) / (this.numVert * 2);
          for (let i = 0; i < this.numVert; i++) {
            const fIdx = i * m;
            const nIdx = Math.floor(fIdx);
            const t = fIdx - nIdx;

            const x =
              this.oldPositions[nIdx * 3 + 0] * (1 - t) +
              this.oldPositions[(nIdx + 1) * 3 + 0] * t;
            const y =
              this.oldPositions[nIdx * 3 + 1] * (1 - t) +
              this.oldPositions[(nIdx + 1) * 3 + 1] * t;

            this.positions[i * 3 + 0] =
              this.positions[i * 3 + 0] * mix + x * mix2;
            this.positions[i * 3 + 1] =
              this.positions[i * 3 + 1] * mix + y * mix2;
            this.positions[i * 3 + 2] = 0;
          }

          for (let i = 0; i < this.numVert; i++) {
            const fIdx = (i + this.numVert) * m;
            const nIdx = Math.floor(fIdx);
            const t = fIdx - nIdx;

            const x =
              this.oldPositions[nIdx * 3 + 0] * (1 - t) +
              this.oldPositions[(nIdx + 1) * 3 + 0] * t;
            const y =
              this.oldPositions[nIdx * 3 + 1] * (1 - t) +
              this.oldPositions[(nIdx + 1) * 3 + 1] * t;

            this.positions2[i * 3 + 0] =
              this.positions2[i * 3 + 0] * mix + x * mix2;
            this.positions2[i * 3 + 1] =
              this.positions2[i * 3 + 1] * mix + y * mix2;
            this.positions2[i * 3 + 2] = 0;
          }
        } else if (oldWaveMode === 7) {
          const halfNumVert = this.numVert / 2;
          const m = (this.oldNumVert - 1) / halfNumVert;
          for (let i = 0; i < halfNumVert; i++) {
            const fIdx = i * m;
            const nIdx = Math.floor(fIdx);
            const t = fIdx - nIdx;

            const x =
              this.oldPositions[nIdx * 3 + 0] * (1 - t) +
              this.oldPositions[(nIdx + 1) * 3 + 0] * t;
            const y =
              this.oldPositions[nIdx * 3 + 1] * (1 - t) +
              this.oldPositions[(nIdx + 1) * 3 + 1] * t;

            this.positions[i * 3 + 0] =
              this.positions[i * 3 + 0] * mix + x * mix2;
            this.positions[i * 3 + 1] =
              this.positions[i * 3 + 1] * mix + y * mix2;
            this.positions[i * 3 + 2] = 0;
          }

          for (let i = 0; i < halfNumVert; i++) {
            const fIdx = i * m;
            const nIdx = Math.floor(fIdx);
            const t = fIdx - nIdx;

            const x =
              this.oldPositions2[nIdx * 3 + 0] * (1 - t) +
              this.oldPositions2[(nIdx + 1) * 3 + 0] * t;
            const y =
              this.oldPositions2[nIdx * 3 + 1] * (1 - t) +
              this.oldPositions2[(nIdx + 1) * 3 + 1] * t;

            this.positions2[i * 3 + 0] =
              this.positions[(i + halfNumVert) * 3 + 0] * mix + x * mix2;
            this.positions2[i * 3 + 1] =
              this.positions[(i + halfNumVert) * 3 + 1] * mix + y * mix2;
            this.positions2[i * 3 + 2] = 0;
          }
        } else {
          const m = (this.oldNumVert - 1) / this.numVert;
          for (let i = 0; i < this.numVert; i++) {
            const fIdx = i * m;
            const nIdx = Math.floor(fIdx);
            const t = fIdx - nIdx;

            const x =
              this.oldPositions[nIdx * 3 + 0] * (1 - t) +
              this.oldPositions[(nIdx + 1) * 3 + 0] * t;
            const y =
              this.oldPositions[nIdx * 3 + 1] * (1 - t) +
              this.oldPositions[(nIdx + 1) * 3 + 1] * t;

            this.positions[i * 3 + 0] =
              this.positions[i * 3 + 0] * mix + x * mix2;
            this.positions[i * 3 + 1] =
              this.positions[i * 3 + 1] * mix + y * mix2;
            this.positions[i * 3 + 2] = 0;
          }
        }
      }

      for (let i = 0; i < this.numVert; i++) {
        this.positions[i * 3 + 1] = -this.positions[i * 3 + 1];
      }

      this.smoothedNumVert = this.numVert * 2 - 1;
      WaveUtils.smoothWave(
        this.positions,
        this.smoothedPositions,
        this.numVert
      );

      if (newWaveMode === 7 || oldWaveMode === 7) {
        for (let i = 0; i < this.numVert; i++) {
          this.positions2[i * 3 + 1] = -this.positions2[i * 3 + 1];
        }

        WaveUtils.smoothWave(
          this.positions2,
          this.smoothedPositions2,
          this.numVert
        );
      }

      return true;
    }

    return false;
  }

  drawBasicWaveform(
    blending,
    blendProgress,
    timeArrayL,
    timeArrayR,
    mdVSFrame
  ) {
    if (
      this.generateWaveform(
        blending,
        blendProgress,
        timeArrayL,
        timeArrayR,
        mdVSFrame
      )
    ) {
      this.gl.useProgram(this.shaderProgram);

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf);
      this.gl.bufferData(
        this.gl.ARRAY_BUFFER,
        this.smoothedPositions,
        this.gl.STATIC_DRAW
      );

      this.gl.vertexAttribPointer(this.aPosLoc, 3, this.gl.FLOAT, false, 0, 0);
      this.gl.enableVertexAttribArray(this.aPosLoc);

      this.gl.uniform4fv(this.colorLoc, this.color);

      let instances = 1;
      if (mdVSFrame.wave_thick !== 0 || mdVSFrame.wave_dots !== 0) {
        instances = 4;
      }

      if (mdVSFrame.additivewave !== 0) {
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
      } else {
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
      }

      const drawMode =
        mdVSFrame.wave_dots !== 0 ? this.gl.POINTS : this.gl.LINE_STRIP;

      // TODO: use drawArraysInstanced
      for (let i = 0; i < instances; i++) {
        const offset = 2;
        if (i === 0) {
          this.gl.uniform2fv(this.thickOffsetLoc, [0, 0]);
        } else if (i === 1) {
          this.gl.uniform2fv(this.thickOffsetLoc, [offset / this.texsizeX, 0]);
        } else if (i === 2) {
          this.gl.uniform2fv(this.thickOffsetLoc, [0, offset / this.texsizeY]);
        } else if (i === 3) {
          this.gl.uniform2fv(this.thickOffsetLoc, [
            offset / this.texsizeX,
            offset / this.texsizeY,
          ]);
        }

        this.gl.drawArrays(drawMode, 0, this.smoothedNumVert);
      }

      const waveMode = Math.floor(mdVSFrame.wave_mode) % 8;
      if (waveMode === 7) {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf);
        this.gl.bufferData(
          this.gl.ARRAY_BUFFER,
          this.smoothedPositions2,
          this.gl.STATIC_DRAW
        );

        this.gl.vertexAttribPointer(
          this.aPosLoc,
          3,
          this.gl.FLOAT,
          false,
          0,
          0
        );
        this.gl.enableVertexAttribArray(this.aPosLoc);

        for (let i = 0; i < instances; i++) {
          const offset = 2;
          if (i === 0) {
            this.gl.uniform2fv(this.thickOffsetLoc, [0, 0]);
          } else if (i === 1) {
            this.gl.uniform2fv(this.thickOffsetLoc, [
              offset / this.texsizeX,
              0,
            ]);
          } else if (i === 2) {
            this.gl.uniform2fv(this.thickOffsetLoc, [
              0,
              offset / this.texsizeY,
            ]);
          } else if (i === 3) {
            this.gl.uniform2fv(this.thickOffsetLoc, [
              offset / this.texsizeX,
              offset / this.texsizeY,
            ]);
          }

          this.gl.drawArrays(drawMode, 0, this.smoothedNumVert);
        }
      }
    }
  }
}

class CustomWaveform {
  constructor(index, gl, opts) {
    this.index = index;
    this.gl = gl;

    const maxSamples = 512;
    this.pointsData = [
      new Float32Array(maxSamples),
      new Float32Array(maxSamples),
    ];
    this.positions = new Float32Array(maxSamples * 3);
    this.colors = new Float32Array(maxSamples * 4);
    this.smoothedPositions = new Float32Array((maxSamples * 2 - 1) * 3);
    this.smoothedColors = new Float32Array((maxSamples * 2 - 1) * 4);

    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.positionVertexBuf = this.gl.createBuffer();
    this.colorVertexBuf = this.gl.createBuffer();

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    this.createShader();
  }

  updateGlobals(opts) {
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;
  }

  createShader() {
    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `
      #version 300 es
      uniform float uSize;
      uniform vec2 thickOffset;
      in vec3 aPos;
      in vec4 aColor;
      out vec4 vColor;
      void main(void) {
        vColor = aColor;
        gl_PointSize = uSize;
        gl_Position = vec4(aPos + vec3(thickOffset, 0.0), 1.0);
      }
      `.trim()
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      in vec4 vColor;
      out vec4 fragColor;
      void main(void) {
        fragColor = vColor;
      }
      `.trim()
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.aPosLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos");
    this.aColorLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aColor"
    );

    this.sizeLoc = this.gl.getUniformLocation(this.shaderProgram, "uSize");
    this.thickOffsetLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "thickOffset"
    );
  }

  generateWaveform(
    timeArrayL,
    timeArrayR,
    freqArrayL,
    freqArrayR,
    globalVars,
    presetEquationRunner,
    waveEqs,
    alphaMult
  ) {
    if (waveEqs.baseVals.enabled !== 0 && timeArrayL.length > 0) {
      let mdVSWaveFrame;
      if (presetEquationRunner.preset.useWASM) {
        mdVSWaveFrame = presetEquationRunner.runWaveFrameEquations(
          this.index,
          globalVars
        );
      } else {
        const mdVSWave = Object.assign(
          {},
          presetEquationRunner.mdVSWaves[this.index],
          presetEquationRunner.mdVSFrameMapWaves[this.index],
          presetEquationRunner.mdVSQAfterFrame,
          presetEquationRunner.mdVSTWaveInits[this.index],
          globalVars
        );

        mdVSWaveFrame = presetEquationRunner.runWaveFrameEquations(
          this.index,
          mdVSWave
        );
      }

      const maxSamples = 512;
      if (Object.prototype.hasOwnProperty.call(mdVSWaveFrame, "samples")) {
        this.samples = mdVSWaveFrame.samples;
      } else {
        this.samples = maxSamples;
      }

      if (this.samples > maxSamples) {
        this.samples = maxSamples;
      }
      this.samples = Math.floor(this.samples);

      const baseVals = presetEquationRunner.preset.waves[this.index].baseVals;

      const sep = Math.floor(mdVSWaveFrame.sep);
      const scaling = mdVSWaveFrame.scaling;
      const spectrum = mdVSWaveFrame.spectrum;
      const smoothing = mdVSWaveFrame.smoothing;
      const usedots = baseVals.usedots;

      const frameR = mdVSWaveFrame.r;
      const frameG = mdVSWaveFrame.g;
      const frameB = mdVSWaveFrame.b;
      const frameA = mdVSWaveFrame.a;

      const waveScale = presetEquationRunner.preset.baseVals.wave_scale;

      this.samples -= sep;

      if (this.samples >= 2 || (usedots !== 0 && this.samples >= 1)) {
        const useSpectrum = spectrum !== 0;
        const scale = (useSpectrum ? 0.15 : 0.004) * scaling * waveScale;
        const pointsLeft = useSpectrum ? freqArrayL : timeArrayL;
        const pointsRight = useSpectrum ? freqArrayR : timeArrayR;

        const j0 = useSpectrum
          ? 0
          : Math.floor((maxSamples - this.samples) / 2 - sep / 2);
        const j1 = useSpectrum
          ? 0
          : Math.floor((maxSamples - this.samples) / 2 + sep / 2);
        const t = useSpectrum ? (maxSamples - sep) / this.samples : 1;
        const mix1 = (smoothing * 0.98) ** 0.5;
        const mix2 = 1 - mix1;

        // Milkdrop smooths waveform forward, backward and then scales
        this.pointsData[0][0] = pointsLeft[j0];
        this.pointsData[1][0] = pointsRight[j1];
        for (let j = 1; j < this.samples; j++) {
          const left = pointsLeft[Math.floor(j * t + j0)];
          const right = pointsRight[Math.floor(j * t + j1)];
          this.pointsData[0][j] =
            left * mix2 + this.pointsData[0][j - 1] * mix1;
          this.pointsData[1][j] =
            right * mix2 + this.pointsData[1][j - 1] * mix1;
        }
        for (let j = this.samples - 2; j >= 0; j--) {
          this.pointsData[0][j] =
            this.pointsData[0][j] * mix2 + this.pointsData[0][j + 1] * mix1;
          this.pointsData[1][j] =
            this.pointsData[1][j] * mix2 + this.pointsData[1][j + 1] * mix1;
        }
        for (let j = 0; j < this.samples; j++) {
          this.pointsData[0][j] *= scale;
          this.pointsData[1][j] *= scale;
        }

        if (!presetEquationRunner.preset.useWASM) {
          for (let j = 0; j < this.samples; j++) {
            const value1 = this.pointsData[0][j];
            const value2 = this.pointsData[1][j];

            mdVSWaveFrame.sample = j / (this.samples - 1);
            mdVSWaveFrame.value1 = value1;
            mdVSWaveFrame.value2 = value2;
            mdVSWaveFrame.x = 0.5 + value1;
            mdVSWaveFrame.y = 0.5 + value2;
            mdVSWaveFrame.r = frameR;
            mdVSWaveFrame.g = frameG;
            mdVSWaveFrame.b = frameB;
            mdVSWaveFrame.a = frameA;

            if (waveEqs.point_eqs !== "") {
              mdVSWaveFrame = presetEquationRunner.runWavePointEquations(
                this.index,
                mdVSWaveFrame
              );
            }

            const x = (mdVSWaveFrame.x * 2 - 1) * this.invAspectx;
            const y = (mdVSWaveFrame.y * -2 + 1) * this.invAspecty;
            const r = mdVSWaveFrame.r;
            const g = mdVSWaveFrame.g;
            const b = mdVSWaveFrame.b;
            const a = mdVSWaveFrame.a;

            this.positions[j * 3 + 0] = x;
            this.positions[j * 3 + 1] = y;
            this.positions[j * 3 + 2] = 0;

            this.colors[j * 4 + 0] = r;
            this.colors[j * 4 + 1] = g;
            this.colors[j * 4 + 2] = b;
            this.colors[j * 4 + 3] = a * alphaMult;
          }
        } else {
          const varPool =
            presetEquationRunner.preset.globalPools[
              `wavePerFrame${this.index}`
            ];
          for (let j = 0; j < this.samples; j++) {
            const value1 = this.pointsData[0][j];
            const value2 = this.pointsData[1][j];

            varPool.sample.value = j / (this.samples - 1);
            varPool.value1.value = value1;
            varPool.value2.value = value2;
            varPool.x.value = 0.5 + value1;
            varPool.y.value = 0.5 + value2;
            varPool.r.value = frameR;
            varPool.g.value = frameG;
            varPool.b.value = frameB;
            varPool.a.value = frameA;

            if (waveEqs.point_eqs) {
              presetEquationRunner.preset.waves[this.index].point_eqs();
            }

            const x = (varPool.x.value * 2 - 1) * this.invAspectx;
            const y = (varPool.y.value * -2 + 1) * this.invAspecty;
            const r = varPool.r.value;
            const g = varPool.g.value;
            const b = varPool.b.value;
            const a = varPool.a.value;

            this.positions[j * 3 + 0] = x;
            this.positions[j * 3 + 1] = y;
            this.positions[j * 3 + 2] = 0;

            this.colors[j * 4 + 0] = r;
            this.colors[j * 4 + 1] = g;
            this.colors[j * 4 + 2] = b;
            this.colors[j * 4 + 3] = a * alphaMult;
          }
        }

        // this needs to be after per point (check fishbrain - witchcraft)
        if (!presetEquationRunner.preset.useWASM) {
          const mdvsUserKeysWave =
            presetEquationRunner.mdVSUserKeysWaves[this.index];
          const mdVSNewFrameMapWave = Utils.pick(
            mdVSWaveFrame,
            mdvsUserKeysWave
          );

          // eslint-disable-next-line no-param-reassign
          presetEquationRunner.mdVSFrameMapWaves[
            this.index
          ] = mdVSNewFrameMapWave;
        } else {
          mdVSWaveFrame.usedots = usedots;
          mdVSWaveFrame.thick = baseVals.thick;
          mdVSWaveFrame.additive = baseVals.additive;
        }

        this.mdVSWaveFrame = mdVSWaveFrame;

        if (usedots === 0) {
          WaveUtils.smoothWaveAndColor(
            this.positions,
            this.colors,
            this.smoothedPositions,
            this.smoothedColors,
            this.samples
          );
        }

        return true;
      }
    }

    return false;
  }

  drawCustomWaveform(
    blendProgress,
    timeArrayL,
    timeArrayR,
    freqArrayL,
    freqArrayR,
    globalVars,
    presetEquationRunner,
    waveEqs
  ) {
    if (
      waveEqs &&
      this.generateWaveform(
        timeArrayL,
        timeArrayR,
        freqArrayL,
        freqArrayR,
        globalVars,
        presetEquationRunner,
        waveEqs,
        blendProgress
      )
    ) {
      this.gl.useProgram(this.shaderProgram);

      const waveUseDots = this.mdVSWaveFrame.usedots !== 0;
      const waveThick = this.mdVSWaveFrame.thick !== 0;
      const waveAdditive = this.mdVSWaveFrame.additive !== 0;

      let positions;
      let colors;
      let numVerts;
      if (!waveUseDots) {
        positions = this.smoothedPositions;
        colors = this.smoothedColors;
        numVerts = this.samples * 2 - 1;
      } else {
        positions = this.positions;
        colors = this.colors;
        numVerts = this.samples;
      }

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, positions, this.gl.STATIC_DRAW);

      this.gl.vertexAttribPointer(
        this.aPosLocation,
        3,
        this.gl.FLOAT,
        false,
        0,
        0
      );
      this.gl.enableVertexAttribArray(this.aPosLocation);

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorVertexBuf);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, colors, this.gl.STATIC_DRAW);

      this.gl.vertexAttribPointer(
        this.aColorLocation,
        4,
        this.gl.FLOAT,
        false,
        0,
        0
      );
      this.gl.enableVertexAttribArray(this.aColorLocation);

      let instances = 1;
      if (waveUseDots) {
        if (waveThick) {
          this.gl.uniform1f(this.sizeLoc, 2 + (this.texsizeX >= 1024 ? 1 : 0));
        } else {
          this.gl.uniform1f(this.sizeLoc, 1 + (this.texsizeX >= 1024 ? 1 : 0));
        }
      } else {
        this.gl.uniform1f(this.sizeLoc, 1);
        if (waveThick) {
          instances = 4;
        }
      }

      if (waveAdditive) {
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
      } else {
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
      }

      const drawMode = waveUseDots ? this.gl.POINTS : this.gl.LINE_STRIP;

      // TODO: use drawArraysInstanced
      for (let i = 0; i < instances; i++) {
        const offset = 2;
        if (i === 0) {
          this.gl.uniform2fv(this.thickOffsetLoc, [0, 0]);
        } else if (i === 1) {
          this.gl.uniform2fv(this.thickOffsetLoc, [offset / this.texsizeX, 0]);
        } else if (i === 2) {
          this.gl.uniform2fv(this.thickOffsetLoc, [0, offset / this.texsizeY]);
        } else if (i === 3) {
          this.gl.uniform2fv(this.thickOffsetLoc, [
            offset / this.texsizeX,
            offset / this.texsizeY,
          ]);
        }

        this.gl.drawArrays(drawMode, 0, numVerts);
      }
    }
  }
}

let CustomShape$1 = class CustomShape {
  constructor(index, gl, opts) {
    this.index = index;
    this.gl = gl;

    const maxSides = 101;
    this.positions = new Float32Array((maxSides + 2) * 3);
    this.colors = new Float32Array((maxSides + 2) * 4);
    this.uvs = new Float32Array((maxSides + 2) * 2);
    this.borderPositions = new Float32Array((maxSides + 1) * 3);

    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.positionVertexBuf = this.gl.createBuffer();
    this.colorVertexBuf = this.gl.createBuffer();
    this.uvVertexBuf = this.gl.createBuffer();
    this.borderPositionVertexBuf = this.gl.createBuffer();

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    this.createShader();
    this.createBorderShader();

    this.mainSampler = this.gl.createSampler();

    gl.samplerParameteri(
      this.mainSampler,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR
    );
    gl.samplerParameteri(this.mainSampler, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.samplerParameteri(this.mainSampler, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.samplerParameteri(this.mainSampler, gl.TEXTURE_WRAP_T, gl.REPEAT);
  }

  updateGlobals(opts) {
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;
  }

  createShader() {
    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `
      #version 300 es
      in vec3 aPos;
      in vec4 aColor;
      in vec2 aUv;
      out vec4 vColor;
      out vec2 vUv;
      void main(void) {
        vColor = aColor;
        vUv = aUv;
        gl_Position = vec4(aPos, 1.0);
      }
      `.trim()
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      uniform sampler2D uTexture;
      uniform float uTextured;
      in vec4 vColor;
      in vec2 vUv;
      out vec4 fragColor;
      void main(void) {
        if (uTextured != 0.0) {
          fragColor = texture(uTexture, vUv) * vColor;
        } else {
          fragColor = vColor;
        }
      }
      `.trim()
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.aPosLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos");
    this.aColorLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aColor"
    );
    this.aUvLocation = this.gl.getAttribLocation(this.shaderProgram, "aUv");

    this.texturedLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "uTextured"
    );
    this.textureLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "uTexture"
    );
  }

  createBorderShader() {
    this.borderShaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `
      #version 300 es
      in vec3 aBorderPos;
      uniform vec2 thickOffset;
      void main(void) {
        gl_Position = vec4(aBorderPos +
                            vec3(thickOffset, 0.0), 1.0);
      }
      `.trim()
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      out vec4 fragColor;
      uniform vec4 uBorderColor;
      void main(void) {
        fragColor = uBorderColor;
      }
      `.trim()
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.borderShaderProgram, vertShader);
    this.gl.attachShader(this.borderShaderProgram, fragShader);
    this.gl.linkProgram(this.borderShaderProgram);

    this.aBorderPosLoc = this.gl.getAttribLocation(
      this.borderShaderProgram,
      "aBorderPos"
    );

    this.uBorderColorLoc = this.gl.getUniformLocation(
      this.borderShaderProgram,
      "uBorderColor"
    );
    this.thickOffsetLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "thickOffset"
    );
  }

  drawCustomShape(
    blendProgress,
    globalVars,
    presetEquationRunner,
    shapeEqs,
    prevTexture
  ) {
    if (shapeEqs.baseVals.enabled !== 0) {
      if (!presetEquationRunner.preset.useWASM) {
        this.setupShapeBuffers(presetEquationRunner.mdVSFrame.wrap);

        let mdVSShape = Object.assign(
          {},
          presetEquationRunner.mdVSShapes[this.index],
          presetEquationRunner.mdVSFrameMapShapes[this.index],
          globalVars
        );

        // If we aren't setting these every instance, set them initially
        if (
          presetEquationRunner.preset.shapes[this.index].frame_eqs_str === ""
        ) {
          mdVSShape = Object.assign(
            mdVSShape,
            presetEquationRunner.mdVSQAfterFrame,
            presetEquationRunner.mdVSTShapeInits[this.index]
          );
        }

        const baseVals =
          presetEquationRunner.preset.shapes[this.index].baseVals;

        const numInst = Math.clamp(baseVals.num_inst, 1, 1024);
        for (let j = 0; j < numInst; j++) {
          mdVSShape.instance = j;
          mdVSShape.x = baseVals.x;
          mdVSShape.y = baseVals.y;
          mdVSShape.rad = baseVals.rad;
          mdVSShape.ang = baseVals.ang;
          mdVSShape.r = baseVals.r;
          mdVSShape.g = baseVals.g;
          mdVSShape.b = baseVals.b;
          mdVSShape.a = baseVals.a;
          mdVSShape.r2 = baseVals.r2;
          mdVSShape.g2 = baseVals.g2;
          mdVSShape.b2 = baseVals.b2;
          mdVSShape.a2 = baseVals.a2;
          mdVSShape.border_r = baseVals.border_r;
          mdVSShape.border_g = baseVals.border_g;
          mdVSShape.border_b = baseVals.border_b;
          mdVSShape.border_a = baseVals.border_a;
          mdVSShape.thickoutline = baseVals.thickoutline;
          mdVSShape.textured = baseVals.textured;
          mdVSShape.tex_zoom = baseVals.tex_zoom;
          mdVSShape.tex_ang = baseVals.tex_ang;
          mdVSShape.additive = baseVals.additive;

          let mdVSShapeFrame;
          if (
            presetEquationRunner.preset.shapes[this.index].frame_eqs_str !== ""
          ) {
            mdVSShape = Object.assign(
              mdVSShape,
              presetEquationRunner.mdVSQAfterFrame,
              presetEquationRunner.mdVSTShapeInits[this.index]
            );

            mdVSShapeFrame = presetEquationRunner.runShapeFrameEquations(
              this.index,
              mdVSShape
            );
          } else {
            mdVSShapeFrame = mdVSShape;
          }

          let sides = mdVSShapeFrame.sides;
          sides = Math.clamp(sides, 3, 100);
          sides = Math.floor(sides);

          const rad = mdVSShapeFrame.rad;
          const ang = mdVSShapeFrame.ang;

          const x = mdVSShapeFrame.x * 2 - 1;
          const y = mdVSShapeFrame.y * -2 + 1;

          const r = mdVSShapeFrame.r;
          const g = mdVSShapeFrame.g;
          const b = mdVSShapeFrame.b;
          const a = mdVSShapeFrame.a;
          const r2 = mdVSShapeFrame.r2;
          const g2 = mdVSShapeFrame.g2;
          const b2 = mdVSShapeFrame.b2;
          const a2 = mdVSShapeFrame.a2;

          const borderR = mdVSShapeFrame.border_r;
          const borderG = mdVSShapeFrame.border_g;
          const borderB = mdVSShapeFrame.border_b;
          const borderA = mdVSShapeFrame.border_a;
          this.borderColor = [
            borderR,
            borderG,
            borderB,
            borderA * blendProgress,
          ];

          const thickoutline = mdVSShapeFrame.thickoutline;

          const textured = mdVSShapeFrame.textured;
          const texZoom = mdVSShapeFrame.tex_zoom;
          const texAng = mdVSShapeFrame.tex_ang;

          const additive = mdVSShapeFrame.additive;

          const hasBorder = this.borderColor[3] > 0;
          const isTextured = Math.abs(textured) >= 1;
          const isBorderThick = Math.abs(thickoutline) >= 1;
          const isAdditive = Math.abs(additive) >= 1;

          this.positions[0] = x;
          this.positions[1] = y;
          this.positions[2] = 0;

          this.colors[0] = r;
          this.colors[1] = g;
          this.colors[2] = b;
          this.colors[3] = a * blendProgress;

          if (isTextured) {
            this.uvs[0] = 0.5;
            this.uvs[1] = 0.5;
          }

          const quarterPi = Math.PI * 0.25;
          for (let k = 1; k <= sides + 1; k++) {
            const p = (k - 1) / sides;
            const pTwoPi = p * 2 * Math.PI;

            const angSum = pTwoPi + ang + quarterPi;
            this.positions[k * 3 + 0] =
              x + rad * Math.cos(angSum) * this.aspecty;
            this.positions[k * 3 + 1] = y + rad * Math.sin(angSum);
            this.positions[k * 3 + 2] = 0;

            this.colors[k * 4 + 0] = r2;
            this.colors[k * 4 + 1] = g2;
            this.colors[k * 4 + 2] = b2;
            this.colors[k * 4 + 3] = a2 * blendProgress;

            if (isTextured) {
              const texAngSum = pTwoPi + texAng + quarterPi;
              this.uvs[k * 2 + 0] =
                0.5 + ((0.5 * Math.cos(texAngSum)) / texZoom) * this.aspecty;
              this.uvs[k * 2 + 1] = 0.5 + (0.5 * Math.sin(texAngSum)) / texZoom;
            }

            if (hasBorder) {
              this.borderPositions[(k - 1) * 3 + 0] = this.positions[k * 3 + 0];
              this.borderPositions[(k - 1) * 3 + 1] = this.positions[k * 3 + 1];
              this.borderPositions[(k - 1) * 3 + 2] = this.positions[k * 3 + 2];
            }
          }

          this.mdVSShapeFrame = mdVSShapeFrame;

          this.drawCustomShapeInstance(
            prevTexture,
            sides,
            isTextured,
            hasBorder,
            isBorderThick,
            isAdditive
          );
        }

        const mdVSUserKeysShape =
          presetEquationRunner.mdVSUserKeysShapes[this.index];
        const mdVSNewFrameMapShape = Utils.pick(
          this.mdVSShapeFrame,
          mdVSUserKeysShape
        );

        // eslint-disable-next-line no-param-reassign
        presetEquationRunner.mdVSFrameMapShapes[
          this.index
        ] = mdVSNewFrameMapShape;
      } else {
        // eslint-disable-next-line max-len
        this.setupShapeBuffers(
          presetEquationRunner.preset.globalPools.perFrame.wrap.value
        );

        const baseVals =
          presetEquationRunner.preset.shapes[this.index].baseVals;
        const varPool =
          presetEquationRunner.preset.globalPools[`shapePerFrame${this.index}`];
        Utils.setWasm(varPool, globalVars, presetEquationRunner.globalKeys);

        // If we aren't setting these every instance, set them initially
        if (!presetEquationRunner.preset.shapes[this.index].frame_eqs) {
          presetEquationRunner.preset.restore_qs();
        }

        Utils.setWasm(
          varPool,
          presetEquationRunner.mdVSTShapeInits[this.index],
          presetEquationRunner.ts
        );
        presetEquationRunner.preset.save_ts();

        varPool.x.value = baseVals.x;
        varPool.y.value = baseVals.y;
        varPool.rad.value = baseVals.rad;
        varPool.ang.value = baseVals.ang;
        varPool.r.value = baseVals.r;
        varPool.g.value = baseVals.g;
        varPool.b.value = baseVals.b;
        varPool.a.value = baseVals.a;
        varPool.r2.value = baseVals.r2;
        varPool.g2.value = baseVals.g2;
        varPool.b2.value = baseVals.b2;
        varPool.a2.value = baseVals.a2;
        varPool.border_r.value = baseVals.border_r;
        varPool.border_g.value = baseVals.border_g;
        varPool.border_b.value = baseVals.border_b;
        varPool.border_a.value = baseVals.border_a;
        varPool.thickoutline.value = baseVals.thickoutline;
        varPool.textured.value = baseVals.textured;
        varPool.tex_zoom.value = baseVals.tex_zoom;
        varPool.tex_ang.value = baseVals.tex_ang;
        varPool.additive.value = baseVals.additive;
        presetEquationRunner.preset.shapes[this.index].frame_eqs_save();

        const numInst = Math.clamp(baseVals.num_inst, 1, 1024);
        for (let j = 0; j < numInst; j++) {
          varPool.instance.value = j;

          // this condition should check the JS equations because of comments
          if (presetEquationRunner.preset.shapes[this.index].frame_eqs) {
            presetEquationRunner.preset.shapes[this.index].frame_eqs_restore();
            presetEquationRunner.preset.restore_qs();
            presetEquationRunner.preset.restore_ts();
            presetEquationRunner.preset.shapes[this.index].frame_eqs();
          }

          let sides = varPool.sides.value;
          sides = Math.clamp(sides, 3, 100);
          sides = Math.floor(sides);

          const rad = varPool.rad.value;
          const ang = varPool.ang.value;

          const x = varPool.x.value * 2 - 1;
          const y = varPool.y.value * -2 + 1;

          const r = varPool.r.value;
          const g = varPool.g.value;
          const b = varPool.b.value;
          const a = varPool.a.value;
          const r2 = varPool.r2.value;
          const g2 = varPool.g2.value;
          const b2 = varPool.b2.value;
          const a2 = varPool.a2.value;

          const borderR = varPool.border_r.value;
          const borderG = varPool.border_g.value;
          const borderB = varPool.border_b.value;
          const borderA = varPool.border_a.value;
          this.borderColor = [
            borderR,
            borderG,
            borderB,
            borderA * blendProgress,
          ];

          const thickoutline = varPool.thickoutline.value;

          const textured = varPool.textured.value;
          const texZoom = varPool.tex_zoom.value;
          const texAng = varPool.tex_ang.value;

          const additive = varPool.additive.value;

          const hasBorder = this.borderColor[3] > 0;
          const isTextured = Math.abs(textured) >= 1;
          const isBorderThick = Math.abs(thickoutline) >= 1;
          const isAdditive = Math.abs(additive) >= 1;

          this.positions[0] = x;
          this.positions[1] = y;
          this.positions[2] = 0;

          this.colors[0] = r;
          this.colors[1] = g;
          this.colors[2] = b;
          this.colors[3] = a * blendProgress;

          if (isTextured) {
            this.uvs[0] = 0.5;
            this.uvs[1] = 0.5;
          }

          const quarterPi = Math.PI * 0.25;
          for (let k = 1; k <= sides + 1; k++) {
            const p = (k - 1) / sides;
            const pTwoPi = p * 2 * Math.PI;

            const angSum = pTwoPi + ang + quarterPi;
            this.positions[k * 3 + 0] =
              x + rad * Math.cos(angSum) * this.aspecty;
            this.positions[k * 3 + 1] = y + rad * Math.sin(angSum);
            this.positions[k * 3 + 2] = 0;

            this.colors[k * 4 + 0] = r2;
            this.colors[k * 4 + 1] = g2;
            this.colors[k * 4 + 2] = b2;
            this.colors[k * 4 + 3] = a2 * blendProgress;

            if (isTextured) {
              const texAngSum = pTwoPi + texAng + quarterPi;
              this.uvs[k * 2 + 0] =
                0.5 + ((0.5 * Math.cos(texAngSum)) / texZoom) * this.aspecty;
              this.uvs[k * 2 + 1] = 0.5 + (0.5 * Math.sin(texAngSum)) / texZoom;
            }

            if (hasBorder) {
              this.borderPositions[(k - 1) * 3 + 0] = this.positions[k * 3 + 0];
              this.borderPositions[(k - 1) * 3 + 1] = this.positions[k * 3 + 1];
              this.borderPositions[(k - 1) * 3 + 2] = this.positions[k * 3 + 2];
            }
          }

          this.drawCustomShapeInstance(
            prevTexture,
            sides,
            isTextured,
            hasBorder,
            isBorderThick,
            isAdditive
          );
        }
      }
    }
  }

  setupShapeBuffers(wrap) {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      this.positions,
      this.gl.DYNAMIC_DRAW
    );

    this.gl.vertexAttribPointer(
      this.aPosLocation,
      3,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.aPosLocation);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorVertexBuf);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, this.colors, this.gl.DYNAMIC_DRAW);

    this.gl.vertexAttribPointer(
      this.aColorLocation,
      4,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.aColorLocation);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.uvVertexBuf);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, this.uvs, this.gl.DYNAMIC_DRAW);

    this.gl.vertexAttribPointer(
      this.aUvLocation,
      2,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.aUvLocation);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.borderPositionVertexBuf);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      this.borderPositions,
      this.gl.DYNAMIC_DRAW
    );

    this.gl.vertexAttribPointer(
      this.aBorderPosLoc,
      3,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.aBorderPosLoc);

    const wrapping = wrap !== 0 ? this.gl.REPEAT : this.gl.CLAMP_TO_EDGE;
    this.gl.samplerParameteri(
      this.mainSampler,
      this.gl.TEXTURE_WRAP_S,
      wrapping
    );
    this.gl.samplerParameteri(
      this.mainSampler,
      this.gl.TEXTURE_WRAP_T,
      wrapping
    );
  }

  drawCustomShapeInstance(
    prevTexture,
    sides,
    isTextured,
    hasBorder,
    isBorderThick,
    isAdditive
  ) {
    this.gl.useProgram(this.shaderProgram);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf);
    this.gl.bufferSubData(
      this.gl.ARRAY_BUFFER,
      0,
      this.positions,
      0,
      (sides + 2) * 3
    );

    this.gl.vertexAttribPointer(
      this.aPosLocation,
      3,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.aPosLocation);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorVertexBuf);
    this.gl.bufferSubData(
      this.gl.ARRAY_BUFFER,
      0,
      this.colors,
      0,
      (sides + 2) * 4
    );

    this.gl.vertexAttribPointer(
      this.aColorLocation,
      4,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.aColorLocation);

    if (isTextured) {
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.uvVertexBuf);
      this.gl.bufferSubData(
        this.gl.ARRAY_BUFFER,
        0,
        this.uvs,
        0,
        (sides + 2) * 2
      );

      this.gl.vertexAttribPointer(
        this.aUvLocation,
        2,
        this.gl.FLOAT,
        false,
        0,
        0
      );
      this.gl.enableVertexAttribArray(this.aUvLocation);
    }

    this.gl.uniform1f(this.texturedLoc, isTextured ? 1 : 0);

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, prevTexture);
    this.gl.bindSampler(0, this.mainSampler);
    this.gl.uniform1i(this.textureLoc, 0);

    if (isAdditive) {
      this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
    } else {
      this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    }

    this.gl.drawArrays(this.gl.TRIANGLE_FAN, 0, sides + 2);

    if (hasBorder) {
      this.gl.useProgram(this.borderShaderProgram);

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.borderPositionVertexBuf);
      this.gl.bufferSubData(
        this.gl.ARRAY_BUFFER,
        0,
        this.borderPositions,
        0,
        (sides + 1) * 3
      );

      this.gl.vertexAttribPointer(
        this.aBorderPosLoc,
        3,
        this.gl.FLOAT,
        false,
        0,
        0
      );
      this.gl.enableVertexAttribArray(this.aBorderPosLoc);

      this.gl.uniform4fv(this.uBorderColorLoc, this.borderColor);

      // TODO: use drawArraysInstanced
      const instances = isBorderThick ? 4 : 1;
      for (let i = 0; i < instances; i++) {
        const offset = 2;
        if (i === 0) {
          this.gl.uniform2fv(this.thickOffsetLoc, [0, 0]);
        } else if (i === 1) {
          this.gl.uniform2fv(this.thickOffsetLoc, [offset / this.texsizeX, 0]);
        } else if (i === 2) {
          this.gl.uniform2fv(this.thickOffsetLoc, [0, offset / this.texsizeY]);
        } else if (i === 3) {
          this.gl.uniform2fv(this.thickOffsetLoc, [
            offset / this.texsizeX,
            offset / this.texsizeY,
          ]);
        }

        this.gl.drawArrays(this.gl.LINE_STRIP, 0, sides + 1);
      }
    }
  }
};

class Border {
  constructor(gl, opts = {}) {
    this.gl = gl;

    this.positions = new Float32Array(72);

    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    this.createShader();

    this.vertexBuf = this.gl.createBuffer();
  }

  updateGlobals(opts) {
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;
  }

  createShader() {
    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `
      #version 300 es
      in vec3 aPos;
      void main(void) {
        gl_Position = vec4(aPos, 1.0);
      }
      `.trim()
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      out vec4 fragColor;
      uniform vec4 u_color;
      void main(void) {
        fragColor = u_color;
      }
      `.trim()
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.aPosLoc = this.gl.getAttribLocation(this.shaderProgram, "aPos");

    this.colorLoc = this.gl.getUniformLocation(this.shaderProgram, "u_color");
  }

  addTriangle(offset, point1, point2, point3) {
    this.positions[offset + 0] = point1[0];
    this.positions[offset + 1] = point1[1];
    this.positions[offset + 2] = point1[2];

    this.positions[offset + 3] = point2[0];
    this.positions[offset + 4] = point2[1];
    this.positions[offset + 5] = point2[2];

    this.positions[offset + 6] = point3[0];
    this.positions[offset + 7] = point3[1];
    this.positions[offset + 8] = point3[2];
  }

  // based on https://github.com/mrdoob/three.js/blob/master/src/geometries/PlaneGeometry.js
  generateBorder(borderColor, borderSize, prevBorderSize) {
    if (borderSize > 0 && borderColor[3] > 0) {
      const width = 2;
      const height = 2;

      const widthHalf = width / 2;
      const heightHalf = height / 2;

      const prevBorderWidth = prevBorderSize / 2;
      const borderWidth = borderSize / 2 + prevBorderWidth;

      const prevBorderWidthWidth = prevBorderWidth * width;
      const prevBorderWidthHeight = prevBorderWidth * height;
      const borderWidthWidth = borderWidth * width;
      const borderWidthHeight = borderWidth * height;

      // 1st side
      let point1 = [
        -widthHalf + prevBorderWidthWidth,
        -heightHalf + borderWidthHeight,
        0,
      ];
      let point2 = [
        -widthHalf + prevBorderWidthWidth,
        heightHalf - borderWidthHeight,
        0,
      ];
      let point3 = [
        -widthHalf + borderWidthWidth,
        heightHalf - borderWidthHeight,
        0,
      ];
      let point4 = [
        -widthHalf + borderWidthWidth,
        -heightHalf + borderWidthHeight,
        0,
      ];

      this.addTriangle(0, point4, point2, point1);
      this.addTriangle(9, point4, point3, point2);

      // 2nd side
      point1 = [
        widthHalf - prevBorderWidthWidth,
        -heightHalf + borderWidthHeight,
        0,
      ];
      point2 = [
        widthHalf - prevBorderWidthWidth,
        heightHalf - borderWidthHeight,
        0,
      ];
      point3 = [
        widthHalf - borderWidthWidth,
        heightHalf - borderWidthHeight,
        0,
      ];
      point4 = [
        widthHalf - borderWidthWidth,
        -heightHalf + borderWidthHeight,
        0,
      ];

      this.addTriangle(18, point1, point2, point4);
      this.addTriangle(27, point2, point3, point4);

      // Top
      point1 = [
        -widthHalf + prevBorderWidthWidth,
        -heightHalf + prevBorderWidthHeight,
        0,
      ];
      point2 = [
        -widthHalf + prevBorderWidthWidth,
        borderWidthHeight - heightHalf,
        0,
      ];
      point3 = [
        widthHalf - prevBorderWidthWidth,
        borderWidthHeight - heightHalf,
        0,
      ];
      point4 = [
        widthHalf - prevBorderWidthWidth,
        -heightHalf + prevBorderWidthHeight,
        0,
      ];

      this.addTriangle(36, point4, point2, point1);
      this.addTriangle(45, point4, point3, point2);

      // Bottom
      point1 = [
        -widthHalf + prevBorderWidthWidth,
        heightHalf - prevBorderWidthHeight,
        0,
      ];
      point2 = [
        -widthHalf + prevBorderWidthWidth,
        heightHalf - borderWidthHeight,
        0,
      ];
      point3 = [
        widthHalf - prevBorderWidthWidth,
        heightHalf - borderWidthHeight,
        0,
      ];
      point4 = [
        widthHalf - prevBorderWidthWidth,
        heightHalf - prevBorderWidthHeight,
        0,
      ];

      this.addTriangle(54, point1, point2, point4);
      this.addTriangle(63, point2, point3, point4);

      return true;
    }

    return false;
  }

  drawBorder(borderColor, borderSize, prevBorderSize) {
    if (this.generateBorder(borderColor, borderSize, prevBorderSize)) {
      this.gl.useProgram(this.shaderProgram);

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf);
      this.gl.bufferData(
        this.gl.ARRAY_BUFFER,
        this.positions,
        this.gl.STATIC_DRAW
      );

      this.gl.vertexAttribPointer(this.aPosLoc, 3, this.gl.FLOAT, false, 0, 0);
      this.gl.enableVertexAttribArray(this.aPosLoc);

      this.gl.uniform4fv(this.colorLoc, borderColor);

      this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

      this.gl.drawArrays(this.gl.TRIANGLES, 0, this.positions.length / 3);
    }
  }
}

class CustomShape {
  constructor(gl, opts) {
    this.gl = gl;

    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.generatePositions();

    this.colors = new Float32Array([
      0,
      0,
      0,
      3 / 32,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]);

    this.positionVertexBuf = this.gl.createBuffer();
    this.colorVertexBuf = this.gl.createBuffer();

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    this.createShader();
  }

  updateGlobals(opts) {
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.generatePositions();
  }

  generatePositions() {
    const halfSize = 0.05;
    this.positions = new Float32Array([
      0,
      0,
      0,
      -halfSize * this.aspecty,
      0,
      0,
      0,
      -halfSize,
      0,
      halfSize * this.aspecty,
      0,
      0,
      0,
      halfSize,
      0,
      -halfSize * this.aspecty,
      0,
      0,
    ]);
  }

  createShader() {
    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `
      #version 300 es
      in vec3 aPos;
      in vec4 aColor;
      out vec4 vColor;
      void main(void) {
        vColor = aColor;
        gl_Position = vec4(aPos, 1.0);
      }
      `.trim()
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      in vec4 vColor;
      out vec4 fragColor;
      void main(void) {
        fragColor = vColor;
      }
      `.trim()
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.aPosLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos");
    this.aColorLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aColor"
    );
  }

  drawDarkenCenter(mdVSFrame) {
    if (mdVSFrame.darken_center !== 0) {
      this.gl.useProgram(this.shaderProgram);

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf);
      this.gl.bufferData(
        this.gl.ARRAY_BUFFER,
        this.positions,
        this.gl.STATIC_DRAW
      );

      this.gl.vertexAttribPointer(
        this.aPosLocation,
        3,
        this.gl.FLOAT,
        false,
        0,
        0
      );
      this.gl.enableVertexAttribArray(this.aPosLocation);

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorVertexBuf);
      this.gl.bufferData(
        this.gl.ARRAY_BUFFER,
        this.colors,
        this.gl.STATIC_DRAW
      );

      this.gl.vertexAttribPointer(
        this.aColorLocation,
        4,
        this.gl.FLOAT,
        false,
        0,
        0
      );
      this.gl.enableVertexAttribArray(this.aColorLocation);

      this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

      this.gl.drawArrays(this.gl.TRIANGLE_FAN, 0, this.positions.length / 3);
    }
  }
}

class MotionVectors {
  constructor(gl, opts) {
    this.gl = gl;

    this.maxX = 64;
    this.maxY = 48;
    this.positions = new Float32Array(this.maxX * this.maxY * 2 * 3);

    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;

    this.positionVertexBuf = this.gl.createBuffer();

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    this.createShader();
  }

  updateGlobals(opts) {
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
  }

  createShader() {
    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `
      #version 300 es
      in vec3 aPos;
      void main(void) {
        gl_Position = vec4(aPos, 1.0);
      }
      `.trim()
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      out vec4 fragColor;
      uniform vec4 u_color;
      void main(void) {
        fragColor = u_color;
      }
      `.trim()
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.aPosLoc = this.gl.getAttribLocation(this.shaderProgram, "aPos");

    this.colorLoc = this.gl.getUniformLocation(this.shaderProgram, "u_color");
  }

  getMotionDir(warpUVs, fx, fy) {
    const y0 = Math.floor(fy * this.mesh_height);
    const dy = fy * this.mesh_height - y0;

    const x0 = Math.floor(fx * this.mesh_width);
    const dx = fx * this.mesh_width - x0;

    const x1 = x0 + 1;
    const y1 = y0 + 1;

    const gridX1 = this.mesh_width + 1;

    let fx2;
    let fy2;
    fx2 = warpUVs[(y0 * gridX1 + x0) * 2 + 0] * (1 - dx) * (1 - dy);
    fy2 = warpUVs[(y0 * gridX1 + x0) * 2 + 1] * (1 - dx) * (1 - dy);
    fx2 += warpUVs[(y0 * gridX1 + x1) * 2 + 0] * dx * (1 - dy);
    fy2 += warpUVs[(y0 * gridX1 + x1) * 2 + 1] * dx * (1 - dy);
    fx2 += warpUVs[(y1 * gridX1 + x0) * 2 + 0] * (1 - dx) * dy;
    fy2 += warpUVs[(y1 * gridX1 + x0) * 2 + 1] * (1 - dx) * dy;
    fx2 += warpUVs[(y1 * gridX1 + x1) * 2 + 0] * dx * dy;
    fy2 += warpUVs[(y1 * gridX1 + x1) * 2 + 1] * dx * dy;

    return [fx2, 1.0 - fy2];
  }

  generateMotionVectors(mdVSFrame, warpUVs) {
    const mvOn = mdVSFrame.bmotionvectorson;
    const mvA = mvOn === 0 ? 0 : mdVSFrame.mv_a;
    let nX = Math.floor(mdVSFrame.mv_x);
    let nY = Math.floor(mdVSFrame.mv_y);

    if (mvA > 0.001 && nX > 0 && nY > 0) {
      let dx = mdVSFrame.mv_x - nX;
      let dy = mdVSFrame.mv_y - nY;

      if (nX > this.maxX) {
        nX = this.maxX;
        dx = 0;
      }

      if (nY > this.maxY) {
        nY = this.maxY;
        dy = 0;
      }

      const dx2 = mdVSFrame.mv_dx;
      const dy2 = mdVSFrame.mv_dy;

      const lenMult = mdVSFrame.mv_l;
      const minLen = 1.0 / this.texsizeX;

      this.numVecVerts = 0;
      for (let j = 0; j < nY; j++) {
        let fy = (j + 0.25) / (nY + dy + 0.25 - 1.0);
        fy -= dy2;

        if (fy > 0.0001 && fy < 0.9999) {
          for (let i = 0; i < nX; i++) {
            let fx = (i + 0.25) / (nX + dx + 0.25 - 1.0);
            fx += dx2;

            if (fx > 0.0001 && fx < 0.9999) {
              const fx2arr = this.getMotionDir(warpUVs, fx, fy);
              let fx2 = fx2arr[0];
              let fy2 = fx2arr[1];

              let dxi = fx2 - fx;
              let dyi = fy2 - fy;
              dxi *= lenMult;
              dyi *= lenMult;

              let fdist = Math.sqrt(dxi * dxi + dyi * dyi);

              if (fdist < minLen && fdist > 0.00000001) {
                fdist = minLen / fdist;
                dxi *= fdist;
                dyi *= fdist;
              } else {
                dxi = minLen;
                dxi = minLen;
              }

              fx2 = fx + dxi;
              fy2 = fy + dyi;

              const vx1 = 2.0 * fx - 1.0;
              const vy1 = 2.0 * fy - 1.0;
              const vx2 = 2.0 * fx2 - 1.0;
              const vy2 = 2.0 * fy2 - 1.0;

              this.positions[this.numVecVerts * 3 + 0] = vx1;
              this.positions[this.numVecVerts * 3 + 1] = vy1;
              this.positions[this.numVecVerts * 3 + 2] = 0;

              this.positions[(this.numVecVerts + 1) * 3 + 0] = vx2;
              this.positions[(this.numVecVerts + 1) * 3 + 1] = vy2;
              this.positions[(this.numVecVerts + 1) * 3 + 2] = 0;

              this.numVecVerts += 2;
            }
          }
        }
      }

      if (this.numVecVerts > 0) {
        this.color = [mdVSFrame.mv_r, mdVSFrame.mv_g, mdVSFrame.mv_b, mvA];

        return true;
      }
    }

    return false;
  }

  drawMotionVectors(mdVSFrame, warpUVs) {
    if (this.generateMotionVectors(mdVSFrame, warpUVs)) {
      this.gl.useProgram(this.shaderProgram);

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf);
      this.gl.bufferData(
        this.gl.ARRAY_BUFFER,
        this.positions,
        this.gl.STATIC_DRAW
      );

      this.gl.vertexAttribPointer(this.aPosLoc, 3, this.gl.FLOAT, false, 0, 0);
      this.gl.enableVertexAttribArray(this.aPosLoc);

      this.gl.uniform4fv(this.colorLoc, this.color);

      this.gl.lineWidth(1);
      this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

      this.gl.drawArrays(this.gl.LINES, 0, this.numVecVerts);
    }
  }
}

class WarpShader {
  constructor(gl, noise, image, opts = {}) {
    this.gl = gl;
    this.noise = noise;
    this.image = image;
    this.rng = getRNG();

    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.buildPositions();

    this.indexBuf = gl.createBuffer();
    this.positionVertexBuf = this.gl.createBuffer();
    this.warpUvVertexBuf = this.gl.createBuffer();
    this.warpColorVertexBuf = this.gl.createBuffer();

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    this.createShader();

    this.mainSampler = this.gl.createSampler();
    this.mainSamplerFW = this.gl.createSampler();
    this.mainSamplerFC = this.gl.createSampler();
    this.mainSamplerPW = this.gl.createSampler();
    this.mainSamplerPC = this.gl.createSampler();

    gl.samplerParameteri(
      this.mainSampler,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR
    );
    gl.samplerParameteri(this.mainSampler, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.samplerParameteri(this.mainSampler, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.samplerParameteri(this.mainSampler, gl.TEXTURE_WRAP_T, gl.REPEAT);

    gl.samplerParameteri(
      this.mainSamplerFW,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR
    );
    gl.samplerParameteri(this.mainSamplerFW, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.samplerParameteri(this.mainSamplerFW, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.samplerParameteri(this.mainSamplerFW, gl.TEXTURE_WRAP_T, gl.REPEAT);

    gl.samplerParameteri(
      this.mainSamplerFC,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR
    );
    gl.samplerParameteri(this.mainSamplerFC, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.samplerParameteri(
      this.mainSamplerFC,
      gl.TEXTURE_WRAP_S,
      gl.CLAMP_TO_EDGE
    );
    gl.samplerParameteri(
      this.mainSamplerFC,
      gl.TEXTURE_WRAP_T,
      gl.CLAMP_TO_EDGE
    );

    gl.samplerParameteri(
      this.mainSamplerPW,
      gl.TEXTURE_MIN_FILTER,
      gl.NEAREST_MIPMAP_NEAREST
    );
    gl.samplerParameteri(this.mainSamplerPW, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.samplerParameteri(this.mainSamplerPW, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.samplerParameteri(this.mainSamplerPW, gl.TEXTURE_WRAP_T, gl.REPEAT);

    gl.samplerParameteri(
      this.mainSamplerPC,
      gl.TEXTURE_MIN_FILTER,
      gl.NEAREST_MIPMAP_NEAREST
    );
    gl.samplerParameteri(this.mainSamplerPC, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.samplerParameteri(
      this.mainSamplerPC,
      gl.TEXTURE_WRAP_S,
      gl.CLAMP_TO_EDGE
    );
    gl.samplerParameteri(
      this.mainSamplerPC,
      gl.TEXTURE_WRAP_T,
      gl.CLAMP_TO_EDGE
    );
  }

  // based on https://github.com/mrdoob/three.js/blob/master/src/geometries/PlaneGeometry.js
  buildPositions() {
    const width = 2;
    const height = 2;

    const widthHalf = width / 2;
    const heightHalf = height / 2;

    const gridX = this.mesh_width;
    const gridY = this.mesh_height;

    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;

    const segmentWidth = width / gridX;
    const segmentHeight = height / gridY;

    const vertices = [];
    for (let iy = 0; iy < gridY1; iy++) {
      const y = iy * segmentHeight - heightHalf;
      for (let ix = 0; ix < gridX1; ix++) {
        const x = ix * segmentWidth - widthHalf;
        vertices.push(x, -y, 0);
      }
    }

    const indices = [];
    for (let iy = 0; iy < gridY; iy++) {
      for (let ix = 0; ix < gridX; ix++) {
        const a = ix + gridX1 * iy;
        const b = ix + gridX1 * (iy + 1);
        const c = ix + 1 + gridX1 * (iy + 1);
        const d = ix + 1 + gridX1 * iy;

        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }

    this.vertices = new Float32Array(vertices);
    this.indices = new Uint16Array(indices);
  }

  updateGlobals(opts) {
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.buildPositions();
  }

  createShader(shaderText = "") {
    let fragShaderText;
    let fragShaderHeaderText;
    if (shaderText.length === 0) {
      fragShaderText = "ret = texture(sampler_main, uv).rgb * decay;";
      fragShaderHeaderText = "";
    } else {
      const shaderParts = ShaderUtils.getShaderParts(shaderText);
      fragShaderHeaderText = shaderParts[0];
      fragShaderText = shaderParts[1];
    }

    fragShaderText = fragShaderText.replace(/texture2D/g, "texture");
    fragShaderText = fragShaderText.replace(/texture3D/g, "texture");

    this.userTextures = ShaderUtils.getUserSamplers(fragShaderHeaderText);

    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `
      #version 300 es
      precision ${this.floatPrecision} float;
      const vec2 halfmad = vec2(0.5);
      in vec2 aPos;
      in vec2 aWarpUv;
      in vec4 aWarpColor;
      out vec2 uv;
      out vec2 uv_orig;
      out vec4 vColor;
      void main(void) {
        gl_Position = vec4(aPos, 0.0, 1.0);
        uv_orig = aPos * halfmad + halfmad;
        uv = aWarpUv;
        vColor = aWarpColor;
      }
      `.trim()
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      precision mediump sampler3D;

      in vec2 uv;
      in vec2 uv_orig;
      in vec4 vColor;
      out vec4 fragColor;
      uniform sampler2D sampler_main;
      uniform sampler2D sampler_fw_main;
      uniform sampler2D sampler_fc_main;
      uniform sampler2D sampler_pw_main;
      uniform sampler2D sampler_pc_main;
      uniform sampler2D sampler_blur1;
      uniform sampler2D sampler_blur2;
      uniform sampler2D sampler_blur3;
      uniform sampler2D sampler_noise_lq;
      uniform sampler2D sampler_noise_lq_lite;
      uniform sampler2D sampler_noise_mq;
      uniform sampler2D sampler_noise_hq;
      uniform sampler2D sampler_pw_noise_lq;
      uniform sampler3D sampler_noisevol_lq;
      uniform sampler3D sampler_noisevol_hq;
      uniform float time;
      uniform float decay;
      uniform vec2 resolution;
      uniform vec4 aspect;
      uniform vec4 texsize;
      uniform vec4 texsize_noise_lq;
      uniform vec4 texsize_noise_mq;
      uniform vec4 texsize_noise_hq;
      uniform vec4 texsize_noise_lq_lite;
      uniform vec4 texsize_noisevol_lq;
      uniform vec4 texsize_noisevol_hq;

      uniform float bass;
      uniform float mid;
      uniform float treb;
      uniform float vol;
      uniform float bass_att;
      uniform float mid_att;
      uniform float treb_att;
      uniform float vol_att;

      uniform float frame;
      uniform float fps;

      uniform vec4 _qa;
      uniform vec4 _qb;
      uniform vec4 _qc;
      uniform vec4 _qd;
      uniform vec4 _qe;
      uniform vec4 _qf;
      uniform vec4 _qg;
      uniform vec4 _qh;

      #define q1 _qa.x
      #define q2 _qa.y
      #define q3 _qa.z
      #define q4 _qa.w
      #define q5 _qb.x
      #define q6 _qb.y
      #define q7 _qb.z
      #define q8 _qb.w
      #define q9 _qc.x
      #define q10 _qc.y
      #define q11 _qc.z
      #define q12 _qc.w
      #define q13 _qd.x
      #define q14 _qd.y
      #define q15 _qd.z
      #define q16 _qd.w
      #define q17 _qe.x
      #define q18 _qe.y
      #define q19 _qe.z
      #define q20 _qe.w
      #define q21 _qf.x
      #define q22 _qf.y
      #define q23 _qf.z
      #define q24 _qf.w
      #define q25 _qg.x
      #define q26 _qg.y
      #define q27 _qg.z
      #define q28 _qg.w
      #define q29 _qh.x
      #define q30 _qh.y
      #define q31 _qh.z
      #define q32 _qh.w

      uniform vec4 slow_roam_cos;
      uniform vec4 roam_cos;
      uniform vec4 slow_roam_sin;
      uniform vec4 roam_sin;

      uniform float blur1_min;
      uniform float blur1_max;
      uniform float blur2_min;
      uniform float blur2_max;
      uniform float blur3_min;
      uniform float blur3_max;

      uniform float scale1;
      uniform float scale2;
      uniform float scale3;
      uniform float bias1;
      uniform float bias2;
      uniform float bias3;

      uniform vec4 rand_frame;
      uniform vec4 rand_preset;

      float PI = ${Math.PI};

      ${fragShaderHeaderText}

      void main(void) {
        vec3 ret;
        float rad = length(uv_orig - 0.5);
        float ang = atan(uv_orig.x - 0.5, uv_orig.y - 0.5);

        ${fragShaderText}

        fragColor = vec4(ret, 1.0) * vColor;
      }
      `.trim()
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.positionLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aPos"
    );
    this.warpUvLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aWarpUv"
    );
    this.warpColorLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aWarpColor"
    );
    this.textureLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_main"
    );
    this.textureFWLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_fw_main"
    );
    this.textureFCLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_fc_main"
    );
    this.texturePWLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_pw_main"
    );
    this.texturePCLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_pc_main"
    );
    this.blurTexture1Loc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_blur1"
    );
    this.blurTexture2Loc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_blur2"
    );
    this.blurTexture3Loc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_blur3"
    );
    this.noiseLQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_noise_lq"
    );
    this.noiseMQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_noise_mq"
    );
    this.noiseHQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_noise_hq"
    );
    this.noiseLQLiteLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_noise_lq_lite"
    );
    this.noisePointLQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_pw_noise_lq"
    );
    this.noiseVolLQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_noisevol_lq"
    );
    this.noiseVolHQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_noisevol_hq"
    );
    this.decayLoc = this.gl.getUniformLocation(this.shaderProgram, "decay");
    this.texsizeLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize");
    this.texsizeNoiseLQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize_noise_lq"
    );
    this.texsizeNoiseMQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize_noise_mq"
    );
    this.texsizeNoiseHQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize_noise_hq"
    );
    this.texsizeNoiseLQLiteLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize_noise_lq_lite"
    );
    this.texsizeNoiseVolLQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize_noisevol_lq"
    );
    this.texsizeNoiseVolHQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize_noisevol_hq"
    );
    this.resolutionLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "resolution"
    );
    this.aspectLoc = this.gl.getUniformLocation(this.shaderProgram, "aspect");
    this.bassLoc = this.gl.getUniformLocation(this.shaderProgram, "bass");
    this.midLoc = this.gl.getUniformLocation(this.shaderProgram, "mid");
    this.trebLoc = this.gl.getUniformLocation(this.shaderProgram, "treb");
    this.volLoc = this.gl.getUniformLocation(this.shaderProgram, "vol");
    this.bassAttLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "bass_att"
    );
    this.midAttLoc = this.gl.getUniformLocation(this.shaderProgram, "mid_att");
    this.trebAttLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "treb_att"
    );
    this.volAttLoc = this.gl.getUniformLocation(this.shaderProgram, "vol_att");
    this.timeLoc = this.gl.getUniformLocation(this.shaderProgram, "time");
    this.frameLoc = this.gl.getUniformLocation(this.shaderProgram, "frame");
    this.fpsLoc = this.gl.getUniformLocation(this.shaderProgram, "fps");
    this.blur1MinLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "blur1_min"
    );
    this.blur1MaxLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "blur1_max"
    );
    this.blur2MinLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "blur2_min"
    );
    this.blur2MaxLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "blur2_max"
    );
    this.blur3MinLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "blur3_min"
    );
    this.blur3MaxLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "blur3_max"
    );
    this.scale1Loc = this.gl.getUniformLocation(this.shaderProgram, "scale1");
    this.scale2Loc = this.gl.getUniformLocation(this.shaderProgram, "scale2");
    this.scale3Loc = this.gl.getUniformLocation(this.shaderProgram, "scale3");
    this.bias1Loc = this.gl.getUniformLocation(this.shaderProgram, "bias1");
    this.bias2Loc = this.gl.getUniformLocation(this.shaderProgram, "bias2");
    this.bias3Loc = this.gl.getUniformLocation(this.shaderProgram, "bias3");
    this.randPresetLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "rand_preset"
    );
    this.randFrameLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "rand_frame"
    );

    this.qaLoc = this.gl.getUniformLocation(this.shaderProgram, "_qa");
    this.qbLoc = this.gl.getUniformLocation(this.shaderProgram, "_qb");
    this.qcLoc = this.gl.getUniformLocation(this.shaderProgram, "_qc");
    this.qdLoc = this.gl.getUniformLocation(this.shaderProgram, "_qd");
    this.qeLoc = this.gl.getUniformLocation(this.shaderProgram, "_qe");
    this.qfLoc = this.gl.getUniformLocation(this.shaderProgram, "_qf");
    this.qgLoc = this.gl.getUniformLocation(this.shaderProgram, "_qg");
    this.qhLoc = this.gl.getUniformLocation(this.shaderProgram, "_qh");

    this.slowRoamCosLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "slow_roam_cos"
    );
    this.roamCosLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "roam_cos"
    );
    this.slowRoamSinLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "slow_roam_sin"
    );
    this.roamSinLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "roam_sin"
    );

    for (let i = 0; i < this.userTextures.length; i++) {
      const userTexture = this.userTextures[i];
      userTexture.textureLoc = this.gl.getUniformLocation(
        this.shaderProgram,
        `sampler_${userTexture.sampler}`
      );
    }
  }

  updateShader(shaderText) {
    this.createShader(shaderText);
  }

  bindBlurVals(blurMins, blurMaxs) {
    const blurMin1 = blurMins[0];
    const blurMin2 = blurMins[1];
    const blurMin3 = blurMins[2];
    const blurMax1 = blurMaxs[0];
    const blurMax2 = blurMaxs[1];
    const blurMax3 = blurMaxs[2];

    const scale1 = blurMax1 - blurMin1;
    const bias1 = blurMin1;

    const scale2 = blurMax2 - blurMin2;
    const bias2 = blurMin2;

    const scale3 = blurMax3 - blurMin3;
    const bias3 = blurMin3;

    this.gl.uniform1f(this.blur1MinLoc, blurMin1);
    this.gl.uniform1f(this.blur1MaxLoc, blurMax1);
    this.gl.uniform1f(this.blur2MinLoc, blurMin2);
    this.gl.uniform1f(this.blur2MaxLoc, blurMax2);
    this.gl.uniform1f(this.blur3MinLoc, blurMin3);
    this.gl.uniform1f(this.blur3MaxLoc, blurMax3);
    this.gl.uniform1f(this.scale1Loc, scale1);
    this.gl.uniform1f(this.scale2Loc, scale2);
    this.gl.uniform1f(this.scale3Loc, scale3);
    this.gl.uniform1f(this.bias1Loc, bias1);
    this.gl.uniform1f(this.bias2Loc, bias2);
    this.gl.uniform1f(this.bias3Loc, bias3);
  }

  renderQuadTexture(
    blending,
    texture,
    blurTexture1,
    blurTexture2,
    blurTexture3,
    blurMins,
    blurMaxs,
    mdVSFrame,
    mdVSQs,
    warpUVs,
    warpColor
  ) {
    this.gl.useProgram(this.shaderProgram);

    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
    this.gl.bufferData(
      this.gl.ELEMENT_ARRAY_BUFFER,
      this.indices,
      this.gl.STATIC_DRAW
    );

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      this.vertices,
      this.gl.STATIC_DRAW
    );

    this.gl.vertexAttribPointer(
      this.positionLocation,
      3,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.positionLocation);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.warpUvVertexBuf);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, warpUVs, this.gl.STATIC_DRAW);

    this.gl.vertexAttribPointer(
      this.warpUvLocation,
      2,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.warpUvLocation);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.warpColorVertexBuf);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, warpColor, this.gl.STATIC_DRAW);

    this.gl.vertexAttribPointer(
      this.warpColorLocation,
      4,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.warpColorLocation);

    const wrapping =
      mdVSFrame.wrap !== 0 ? this.gl.REPEAT : this.gl.CLAMP_TO_EDGE;
    this.gl.samplerParameteri(
      this.mainSampler,
      this.gl.TEXTURE_WRAP_S,
      wrapping
    );
    this.gl.samplerParameteri(
      this.mainSampler,
      this.gl.TEXTURE_WRAP_T,
      wrapping
    );

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.bindSampler(0, this.mainSampler);
    this.gl.uniform1i(this.textureLoc, 0);

    this.gl.activeTexture(this.gl.TEXTURE1);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.bindSampler(1, this.mainSamplerFW);
    this.gl.uniform1i(this.textureFWLoc, 1);

    this.gl.activeTexture(this.gl.TEXTURE2);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.bindSampler(2, this.mainSamplerFC);
    this.gl.uniform1i(this.textureFCLoc, 2);

    this.gl.activeTexture(this.gl.TEXTURE3);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.bindSampler(3, this.mainSamplerPW);
    this.gl.uniform1i(this.texturePWLoc, 3);

    this.gl.activeTexture(this.gl.TEXTURE4);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.bindSampler(4, this.mainSamplerPC);
    this.gl.uniform1i(this.texturePCLoc, 4);

    this.gl.activeTexture(this.gl.TEXTURE5);
    this.gl.bindTexture(this.gl.TEXTURE_2D, blurTexture1);
    this.gl.uniform1i(this.blurTexture1Loc, 5);

    this.gl.activeTexture(this.gl.TEXTURE6);
    this.gl.bindTexture(this.gl.TEXTURE_2D, blurTexture2);
    this.gl.uniform1i(this.blurTexture2Loc, 6);

    this.gl.activeTexture(this.gl.TEXTURE7);
    this.gl.bindTexture(this.gl.TEXTURE_2D, blurTexture3);
    this.gl.uniform1i(this.blurTexture3Loc, 7);

    this.gl.activeTexture(this.gl.TEXTURE8);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexLQ);
    this.gl.uniform1i(this.noiseLQLoc, 8);

    this.gl.activeTexture(this.gl.TEXTURE9);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexMQ);
    this.gl.uniform1i(this.noiseMQLoc, 9);

    this.gl.activeTexture(this.gl.TEXTURE10);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexHQ);
    this.gl.uniform1i(this.noiseHQLoc, 10);

    this.gl.activeTexture(this.gl.TEXTURE11);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexLQLite);
    this.gl.uniform1i(this.noiseLQLiteLoc, 11);

    this.gl.activeTexture(this.gl.TEXTURE12);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexLQ);
    this.gl.bindSampler(12, this.noise.noiseTexPointLQ);
    this.gl.uniform1i(this.noisePointLQLoc, 12);

    this.gl.activeTexture(this.gl.TEXTURE13);
    this.gl.bindTexture(this.gl.TEXTURE_3D, this.noise.noiseTexVolLQ);
    this.gl.uniform1i(this.noiseVolLQLoc, 13);

    this.gl.activeTexture(this.gl.TEXTURE14);
    this.gl.bindTexture(this.gl.TEXTURE_3D, this.noise.noiseTexVolHQ);
    this.gl.uniform1i(this.noiseVolHQLoc, 14);

    for (let i = 0; i < this.userTextures.length; i++) {
      const userTexture = this.userTextures[i];
      this.gl.activeTexture(this.gl.TEXTURE15 + i);
      this.gl.bindTexture(
        this.gl.TEXTURE_2D,
        this.image.getTexture(userTexture.sampler)
      );
      this.gl.uniform1i(userTexture.textureLoc, 15 + i);
    }

    this.gl.uniform1f(this.decayLoc, mdVSFrame.decay);
    this.gl.uniform2fv(this.resolutionLoc, [this.texsizeX, this.texsizeY]);
    this.gl.uniform4fv(this.aspectLoc, [
      this.aspectx,
      this.aspecty,
      this.invAspectx,
      this.invAspecty,
    ]);
    this.gl.uniform4fv(this.texsizeLoc, [
      this.texsizeX,
      this.texsizeY,
      1.0 / this.texsizeX,
      1.0 / this.texsizeY,
    ]);
    this.gl.uniform4fv(this.texsizeNoiseLQLoc, [256, 256, 1 / 256, 1 / 256]);
    this.gl.uniform4fv(this.texsizeNoiseMQLoc, [256, 256, 1 / 256, 1 / 256]);
    this.gl.uniform4fv(this.texsizeNoiseHQLoc, [256, 256, 1 / 256, 1 / 256]);
    this.gl.uniform4fv(this.texsizeNoiseLQLiteLoc, [32, 32, 1 / 32, 1 / 32]);
    this.gl.uniform4fv(this.texsizeNoiseVolLQLoc, [32, 32, 1 / 32, 1 / 32]);
    this.gl.uniform4fv(this.texsizeNoiseVolHQLoc, [32, 32, 1 / 32, 1 / 32]);

    this.gl.uniform1f(this.bassLoc, mdVSFrame.bass);
    this.gl.uniform1f(this.midLoc, mdVSFrame.mid);
    this.gl.uniform1f(this.trebLoc, mdVSFrame.treb);
    this.gl.uniform1f(
      this.volLoc,
      (mdVSFrame.bass + mdVSFrame.mid + mdVSFrame.treb) / 3
    );
    this.gl.uniform1f(this.bassAttLoc, mdVSFrame.bass_att);
    this.gl.uniform1f(this.midAttLoc, mdVSFrame.mid_att);
    this.gl.uniform1f(this.trebAttLoc, mdVSFrame.treb_att);
    this.gl.uniform1f(
      this.volAttLoc,
      (mdVSFrame.bass_att + mdVSFrame.mid_att + mdVSFrame.treb_att) / 3
    );
    this.gl.uniform1f(this.timeLoc, mdVSFrame.time);
    this.gl.uniform1f(this.frameLoc, mdVSFrame.frame);
    this.gl.uniform1f(this.fpsLoc, mdVSFrame.fps);
    this.gl.uniform4fv(this.randPresetLoc, mdVSFrame.rand_preset);
    this.gl.uniform4fv(
      this.randFrameLoc,
      new Float32Array([
        this.rng.random(),
        this.rng.random(),
        this.rng.random(),
        this.rng.random(),
      ])
    );

    this.gl.uniform4fv(
      this.qaLoc,
      new Float32Array([
        mdVSQs.q1 || 0,
        mdVSQs.q2 || 0,
        mdVSQs.q3 || 0,
        mdVSQs.q4 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qbLoc,
      new Float32Array([
        mdVSQs.q5 || 0,
        mdVSQs.q6 || 0,
        mdVSQs.q7 || 0,
        mdVSQs.q8 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qcLoc,
      new Float32Array([
        mdVSQs.q9 || 0,
        mdVSQs.q10 || 0,
        mdVSQs.q11 || 0,
        mdVSQs.q12 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qdLoc,
      new Float32Array([
        mdVSQs.q13 || 0,
        mdVSQs.q14 || 0,
        mdVSQs.q15 || 0,
        mdVSQs.q16 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qeLoc,
      new Float32Array([
        mdVSQs.q17 || 0,
        mdVSQs.q18 || 0,
        mdVSQs.q19 || 0,
        mdVSQs.q20 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qfLoc,
      new Float32Array([
        mdVSQs.q21 || 0,
        mdVSQs.q22 || 0,
        mdVSQs.q23 || 0,
        mdVSQs.q24 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qgLoc,
      new Float32Array([
        mdVSQs.q25 || 0,
        mdVSQs.q26 || 0,
        mdVSQs.q27 || 0,
        mdVSQs.q28 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qhLoc,
      new Float32Array([
        mdVSQs.q29 || 0,
        mdVSQs.q30 || 0,
        mdVSQs.q31 || 0,
        mdVSQs.q32 || 0,
      ])
    );
    this.gl.uniform4fv(this.slowRoamCosLoc, [
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 0.005),
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 0.008),
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 0.013),
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 0.022),
    ]);
    this.gl.uniform4fv(this.roamCosLoc, [
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 0.3),
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 1.3),
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 5.0),
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 20.0),
    ]);
    this.gl.uniform4fv(this.slowRoamSinLoc, [
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 0.005),
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 0.008),
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 0.013),
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 0.022),
    ]);
    this.gl.uniform4fv(this.roamSinLoc, [
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 0.3),
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 1.3),
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 5.0),
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 20.0),
    ]);

    this.bindBlurVals(blurMins, blurMaxs);

    if (blending) {
      this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    } else {
      this.gl.disable(this.gl.BLEND);
    }

    this.gl.drawElements(
      this.gl.TRIANGLES,
      this.indices.length,
      this.gl.UNSIGNED_SHORT,
      0
    );

    if (!blending) {
      this.gl.enable(this.gl.BLEND);
    }
  }
}

class CompShader {
  constructor(gl, noise, image, opts = {}) {
    this.gl = gl;
    this.noise = noise;
    this.image = image;
    this.rng = getRNG();

    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.compWidth = 32;
    this.compHeight = 24;

    this.buildPositions();

    this.indexBuf = gl.createBuffer();
    this.positionVertexBuf = this.gl.createBuffer();
    this.compColorVertexBuf = this.gl.createBuffer();

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    this.createShader();

    this.mainSampler = this.gl.createSampler();
    this.mainSamplerFW = this.gl.createSampler();
    this.mainSamplerFC = this.gl.createSampler();
    this.mainSamplerPW = this.gl.createSampler();
    this.mainSamplerPC = this.gl.createSampler();

    gl.samplerParameteri(
      this.mainSampler,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR
    );
    gl.samplerParameteri(this.mainSampler, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.samplerParameteri(this.mainSampler, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.samplerParameteri(this.mainSampler, gl.TEXTURE_WRAP_T, gl.REPEAT);

    gl.samplerParameteri(
      this.mainSamplerFW,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR
    );
    gl.samplerParameteri(this.mainSamplerFW, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.samplerParameteri(this.mainSamplerFW, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.samplerParameteri(this.mainSamplerFW, gl.TEXTURE_WRAP_T, gl.REPEAT);

    gl.samplerParameteri(
      this.mainSamplerFC,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR
    );
    gl.samplerParameteri(this.mainSamplerFC, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.samplerParameteri(
      this.mainSamplerFC,
      gl.TEXTURE_WRAP_S,
      gl.CLAMP_TO_EDGE
    );
    gl.samplerParameteri(
      this.mainSamplerFC,
      gl.TEXTURE_WRAP_T,
      gl.CLAMP_TO_EDGE
    );

    gl.samplerParameteri(
      this.mainSamplerPW,
      gl.TEXTURE_MIN_FILTER,
      gl.NEAREST_MIPMAP_NEAREST
    );
    gl.samplerParameteri(this.mainSamplerPW, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.samplerParameteri(this.mainSamplerPW, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.samplerParameteri(this.mainSamplerPW, gl.TEXTURE_WRAP_T, gl.REPEAT);

    gl.samplerParameteri(
      this.mainSamplerPC,
      gl.TEXTURE_MIN_FILTER,
      gl.NEAREST_MIPMAP_NEAREST
    );
    gl.samplerParameteri(this.mainSamplerPC, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.samplerParameteri(
      this.mainSamplerPC,
      gl.TEXTURE_WRAP_S,
      gl.CLAMP_TO_EDGE
    );
    gl.samplerParameteri(
      this.mainSamplerPC,
      gl.TEXTURE_WRAP_T,
      gl.CLAMP_TO_EDGE
    );
  }

  // based on https://github.com/mrdoob/three.js/blob/master/src/geometries/PlaneGeometry.js
  buildPositions() {
    const width = 2;
    const height = 2;

    const widthHalf = width / 2;
    const heightHalf = height / 2;

    const gridX = this.compWidth;
    const gridY = this.compHeight;

    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;

    const segmentWidth = width / gridX;
    const segmentHeight = height / gridY;

    const vertices = [];
    for (let iy = 0; iy < gridY1; iy++) {
      const y = iy * segmentHeight - heightHalf;
      for (let ix = 0; ix < gridX1; ix++) {
        const x = ix * segmentWidth - widthHalf;

        vertices.push(x, -y, 0);
      }
    }

    const indices = [];
    for (let iy = 0; iy < gridY; iy++) {
      for (let ix = 0; ix < gridX; ix++) {
        const a = ix + gridX1 * iy;
        const b = ix + gridX1 * (iy + 1);
        const c = ix + 1 + gridX1 * (iy + 1);
        const d = ix + 1 + gridX1 * iy;

        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }

    this.vertices = new Float32Array(vertices);
    this.indices = new Uint16Array(indices);
  }

  updateGlobals(opts) {
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.buildPositions();
  }

  createShader(shaderText = "") {
    let fragShaderText;
    let fragShaderHeaderText;
    if (shaderText.length === 0) {
      fragShaderText = `float orient_horiz = mod(echo_orientation, 2.0);
                        float orient_x = (orient_horiz != 0.0) ? -1.0 : 1.0;
                        float orient_y = (echo_orientation >= 2.0) ? -1.0 : 1.0;
                        vec2 uv_echo = ((uv - 0.5) *
                                        (1.0 / echo_zoom) *
                                        vec2(orient_x, orient_y)) + 0.5;

                        ret = mix(texture(sampler_main, uv).rgb,
                                  texture(sampler_main, uv_echo).rgb,
                                  echo_alpha);

                        ret *= gammaAdj;

                        if(fShader >= 1.0) {
                          ret *= hue_shader;
                        } else if(fShader > 0.001) {
                          ret *= (1.0 - fShader) + (fShader * hue_shader);
                        }

                        if(brighten != 0) ret = sqrt(ret);
                        if(darken != 0) ret = ret*ret;
                        if(solarize != 0) ret = ret * (1.0 - ret) * 4.0;
                        if(invert != 0) ret = 1.0 - ret;`;
      fragShaderHeaderText = "";
    } else {
      const shaderParts = ShaderUtils.getShaderParts(shaderText);
      fragShaderHeaderText = shaderParts[0];
      fragShaderText = shaderParts[1];
    }

    fragShaderText = fragShaderText.replace(/texture2D/g, "texture");
    fragShaderText = fragShaderText.replace(/texture3D/g, "texture");

    this.userTextures = ShaderUtils.getUserSamplers(fragShaderHeaderText);

    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `
      #version 300 es
      const vec2 halfmad = vec2(0.5);
      in vec2 aPos;
      in vec4 aCompColor;
      out vec2 vUv;
      out vec4 vColor;
      void main(void) {
        gl_Position = vec4(aPos, 0.0, 1.0);
        vUv = aPos * halfmad + halfmad;
        vColor = aCompColor;
      }
      `.trim()
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      precision mediump sampler3D;

      vec3 lum(vec3 v){
          return vec3(dot(v, vec3(0.32,0.49,0.29)));
      }

      in vec2 vUv;
      in vec4 vColor;
      out vec4 fragColor;
      uniform sampler2D sampler_main;
      uniform sampler2D sampler_fw_main;
      uniform sampler2D sampler_fc_main;
      uniform sampler2D sampler_pw_main;
      uniform sampler2D sampler_pc_main;
      uniform sampler2D sampler_blur1;
      uniform sampler2D sampler_blur2;
      uniform sampler2D sampler_blur3;
      uniform sampler2D sampler_noise_lq;
      uniform sampler2D sampler_noise_lq_lite;
      uniform sampler2D sampler_noise_mq;
      uniform sampler2D sampler_noise_hq;
      uniform sampler2D sampler_pw_noise_lq;
      uniform sampler3D sampler_noisevol_lq;
      uniform sampler3D sampler_noisevol_hq;

      uniform float time;
      uniform float gammaAdj;
      uniform float echo_zoom;
      uniform float echo_alpha;
      uniform float echo_orientation;
      uniform int invert;
      uniform int brighten;
      uniform int darken;
      uniform int solarize;
      uniform vec2 resolution;
      uniform vec4 aspect;
      uniform vec4 texsize;
      uniform vec4 texsize_noise_lq;
      uniform vec4 texsize_noise_mq;
      uniform vec4 texsize_noise_hq;
      uniform vec4 texsize_noise_lq_lite;
      uniform vec4 texsize_noisevol_lq;
      uniform vec4 texsize_noisevol_hq;

      uniform float bass;
      uniform float mid;
      uniform float treb;
      uniform float vol;
      uniform float bass_att;
      uniform float mid_att;
      uniform float treb_att;
      uniform float vol_att;

      uniform float frame;
      uniform float fps;

      uniform vec4 _qa;
      uniform vec4 _qb;
      uniform vec4 _qc;
      uniform vec4 _qd;
      uniform vec4 _qe;
      uniform vec4 _qf;
      uniform vec4 _qg;
      uniform vec4 _qh;

      #define q1 _qa.x
      #define q2 _qa.y
      #define q3 _qa.z
      #define q4 _qa.w
      #define q5 _qb.x
      #define q6 _qb.y
      #define q7 _qb.z
      #define q8 _qb.w
      #define q9 _qc.x
      #define q10 _qc.y
      #define q11 _qc.z
      #define q12 _qc.w
      #define q13 _qd.x
      #define q14 _qd.y
      #define q15 _qd.z
      #define q16 _qd.w
      #define q17 _qe.x
      #define q18 _qe.y
      #define q19 _qe.z
      #define q20 _qe.w
      #define q21 _qf.x
      #define q22 _qf.y
      #define q23 _qf.z
      #define q24 _qf.w
      #define q25 _qg.x
      #define q26 _qg.y
      #define q27 _qg.z
      #define q28 _qg.w
      #define q29 _qh.x
      #define q30 _qh.y
      #define q31 _qh.z
      #define q32 _qh.w

      uniform vec4 slow_roam_cos;
      uniform vec4 roam_cos;
      uniform vec4 slow_roam_sin;
      uniform vec4 roam_sin;

      uniform float blur1_min;
      uniform float blur1_max;
      uniform float blur2_min;
      uniform float blur2_max;
      uniform float blur3_min;
      uniform float blur3_max;

      uniform float scale1;
      uniform float scale2;
      uniform float scale3;
      uniform float bias1;
      uniform float bias2;
      uniform float bias3;

      uniform vec4 rand_frame;
      uniform vec4 rand_preset;

      uniform float fShader;

      float PI = ${Math.PI};

      ${fragShaderHeaderText}

      void main(void) {
        vec3 ret;
        vec2 uv = vUv;
        vec2 uv_orig = vUv;
        uv.y = 1.0 - uv.y;
        uv_orig.y = 1.0 - uv_orig.y;
        float rad = length(uv - 0.5);
        float ang = atan(uv.x - 0.5, uv.y - 0.5);
        vec3 hue_shader = vColor.rgb;

        ${fragShaderText}

        fragColor = vec4(ret, vColor.a);
      }
      `.trim()
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.positionLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aPos"
    );
    this.compColorLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aCompColor"
    );
    this.textureLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_main"
    );
    this.textureFWLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_fw_main"
    );
    this.textureFCLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_fc_main"
    );
    this.texturePWLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_pw_main"
    );
    this.texturePCLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_pc_main"
    );
    this.blurTexture1Loc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_blur1"
    );
    this.blurTexture2Loc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_blur2"
    );
    this.blurTexture3Loc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_blur3"
    );
    this.noiseLQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_noise_lq"
    );
    this.noiseMQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_noise_mq"
    );
    this.noiseHQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_noise_hq"
    );
    this.noiseLQLiteLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_noise_lq_lite"
    );
    this.noisePointLQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_pw_noise_lq"
    );
    this.noiseVolLQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_noisevol_lq"
    );
    this.noiseVolHQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "sampler_noisevol_hq"
    );
    this.timeLoc = this.gl.getUniformLocation(this.shaderProgram, "time");
    this.gammaAdjLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "gammaAdj"
    );
    this.echoZoomLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "echo_zoom"
    );
    this.echoAlphaLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "echo_alpha"
    );
    this.echoOrientationLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "echo_orientation"
    );
    this.invertLoc = this.gl.getUniformLocation(this.shaderProgram, "invert");
    this.brightenLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "brighten"
    );
    this.darkenLoc = this.gl.getUniformLocation(this.shaderProgram, "darken");
    this.solarizeLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "solarize"
    );
    this.texsizeLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize");
    this.texsizeNoiseLQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize_noise_lq"
    );
    this.texsizeNoiseMQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize_noise_mq"
    );
    this.texsizeNoiseHQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize_noise_hq"
    );
    this.texsizeNoiseLQLiteLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize_noise_lq_lite"
    );
    this.texsizeNoiseVolLQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize_noisevol_lq"
    );
    this.texsizeNoiseVolHQLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize_noisevol_hq"
    );
    this.resolutionLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "resolution"
    );
    this.aspectLoc = this.gl.getUniformLocation(this.shaderProgram, "aspect");
    this.bassLoc = this.gl.getUniformLocation(this.shaderProgram, "bass");
    this.midLoc = this.gl.getUniformLocation(this.shaderProgram, "mid");
    this.trebLoc = this.gl.getUniformLocation(this.shaderProgram, "treb");
    this.volLoc = this.gl.getUniformLocation(this.shaderProgram, "vol");
    this.bassAttLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "bass_att"
    );
    this.midAttLoc = this.gl.getUniformLocation(this.shaderProgram, "mid_att");
    this.trebAttLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "treb_att"
    );
    this.volAttLoc = this.gl.getUniformLocation(this.shaderProgram, "vol_att");
    this.frameLoc = this.gl.getUniformLocation(this.shaderProgram, "frame");
    this.fpsLoc = this.gl.getUniformLocation(this.shaderProgram, "fps");
    this.blur1MinLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "blur1_min"
    );
    this.blur1MaxLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "blur1_max"
    );
    this.blur2MinLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "blur2_min"
    );
    this.blur2MaxLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "blur2_max"
    );
    this.blur3MinLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "blur3_min"
    );
    this.blur3MaxLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "blur3_max"
    );
    this.scale1Loc = this.gl.getUniformLocation(this.shaderProgram, "scale1");
    this.scale2Loc = this.gl.getUniformLocation(this.shaderProgram, "scale2");
    this.scale3Loc = this.gl.getUniformLocation(this.shaderProgram, "scale3");
    this.bias1Loc = this.gl.getUniformLocation(this.shaderProgram, "bias1");
    this.bias2Loc = this.gl.getUniformLocation(this.shaderProgram, "bias2");
    this.bias3Loc = this.gl.getUniformLocation(this.shaderProgram, "bias3");
    this.randPresetLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "rand_preset"
    );
    this.randFrameLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "rand_frame"
    );
    this.fShaderLoc = this.gl.getUniformLocation(this.shaderProgram, "fShader");

    this.qaLoc = this.gl.getUniformLocation(this.shaderProgram, "_qa");
    this.qbLoc = this.gl.getUniformLocation(this.shaderProgram, "_qb");
    this.qcLoc = this.gl.getUniformLocation(this.shaderProgram, "_qc");
    this.qdLoc = this.gl.getUniformLocation(this.shaderProgram, "_qd");
    this.qeLoc = this.gl.getUniformLocation(this.shaderProgram, "_qe");
    this.qfLoc = this.gl.getUniformLocation(this.shaderProgram, "_qf");
    this.qgLoc = this.gl.getUniformLocation(this.shaderProgram, "_qg");
    this.qhLoc = this.gl.getUniformLocation(this.shaderProgram, "_qh");

    this.slowRoamCosLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "slow_roam_cos"
    );
    this.roamCosLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "roam_cos"
    );
    this.slowRoamSinLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "slow_roam_sin"
    );
    this.roamSinLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "roam_sin"
    );

    for (let i = 0; i < this.userTextures.length; i++) {
      const userTexture = this.userTextures[i];
      userTexture.textureLoc = this.gl.getUniformLocation(
        this.shaderProgram,
        `sampler_${userTexture.sampler}`
      );
    }
  }

  updateShader(shaderText) {
    this.createShader(shaderText);
  }

  bindBlurVals(blurMins, blurMaxs) {
    const blurMin1 = blurMins[0];
    const blurMin2 = blurMins[1];
    const blurMin3 = blurMins[2];
    const blurMax1 = blurMaxs[0];
    const blurMax2 = blurMaxs[1];
    const blurMax3 = blurMaxs[2];

    const scale1 = blurMax1 - blurMin1;
    const bias1 = blurMin1;

    const scale2 = blurMax2 - blurMin2;
    const bias2 = blurMin2;

    const scale3 = blurMax3 - blurMin3;
    const bias3 = blurMin3;

    this.gl.uniform1f(this.blur1MinLoc, blurMin1);
    this.gl.uniform1f(this.blur1MaxLoc, blurMax1);
    this.gl.uniform1f(this.blur2MinLoc, blurMin2);
    this.gl.uniform1f(this.blur2MaxLoc, blurMax2);
    this.gl.uniform1f(this.blur3MinLoc, blurMin3);
    this.gl.uniform1f(this.blur3MaxLoc, blurMax3);
    this.gl.uniform1f(this.scale1Loc, scale1);
    this.gl.uniform1f(this.scale2Loc, scale2);
    this.gl.uniform1f(this.scale3Loc, scale3);
    this.gl.uniform1f(this.bias1Loc, bias1);
    this.gl.uniform1f(this.bias2Loc, bias2);
    this.gl.uniform1f(this.bias3Loc, bias3);
  }

  static generateHueBase(mdVSFrame) {
    const hueBase = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

    /* eslint-disable max-len */
    for (let i = 0; i < 4; i++) {
      hueBase[i * 3 + 0] =
        0.6 +
        0.3 *
          Math.sin(
            mdVSFrame.time * 30.0 * 0.0143 +
              3 +
              i * 21 +
              mdVSFrame.rand_start[3]
          );
      hueBase[i * 3 + 1] =
        0.6 +
        0.3 *
          Math.sin(
            mdVSFrame.time * 30.0 * 0.0107 +
              1 +
              i * 13 +
              mdVSFrame.rand_start[1]
          );
      hueBase[i * 3 + 2] =
        0.6 +
        0.3 *
          Math.sin(
            mdVSFrame.time * 30.0 * 0.0129 + 6 + i * 9 + mdVSFrame.rand_start[2]
          );
      const maxshade = Math.max(
        hueBase[i * 3],
        hueBase[i * 3 + 1],
        hueBase[i * 3 + 2]
      );
      for (let k = 0; k < 3; k++) {
        hueBase[i * 3 + k] = hueBase[i * 3 + k] / maxshade;
        hueBase[i * 3 + k] = 0.5 + 0.5 * hueBase[i * 3 + k];
      }
    }
    /* eslint-enable max-len */

    return hueBase;
  }

  generateCompColors(blending, mdVSFrame, warpColor) {
    const hueBase = CompShader.generateHueBase(mdVSFrame);
    const gridX1 = this.compWidth + 1;
    const gridY1 = this.compHeight + 1;
    const compColor = new Float32Array(gridX1 * gridY1 * 4);

    let offsetColor = 0;
    for (let j = 0; j < gridY1; j++) {
      for (let i = 0; i < gridX1; i++) {
        let x = i / this.compWidth;
        let y = j / this.compHeight;

        const col = [1, 1, 1];
        for (let c = 0; c < 3; c++) {
          col[c] =
            hueBase[0 + c] * x * y +
            hueBase[3 + c] * (1 - x) * y +
            hueBase[6 + c] * x * (1 - y) +
            hueBase[9 + c] * (1 - x) * (1 - y);
        }

        let alpha = 1;
        if (blending) {
          x *= this.mesh_width + 1;
          y *= this.mesh_height + 1;
          x = Math.clamp(x, 0, this.mesh_width - 1);
          y = Math.clamp(y, 0, this.mesh_height - 1);
          const nx = Math.floor(x);
          const ny = Math.floor(y);
          const dx = x - nx;
          const dy = y - ny;
          const alpha00 = warpColor[(ny * (this.mesh_width + 1) + nx) * 4 + 3];
          const alpha01 =
            warpColor[(ny * (this.mesh_width + 1) + (nx + 1)) * 4 + 3];
          const alpha10 =
            warpColor[((ny + 1) * (this.mesh_width + 1) + nx) * 4 + 3];
          const alpha11 =
            warpColor[((ny + 1) * (this.mesh_width + 1) + (nx + 1)) * 4 + 3];
          alpha =
            alpha00 * (1 - dx) * (1 - dy) +
            alpha01 * dx * (1 - dy) +
            alpha10 * (1 - dx) * dy +
            alpha11 * dx * dy;
        }

        compColor[offsetColor + 0] = col[0];
        compColor[offsetColor + 1] = col[1];
        compColor[offsetColor + 2] = col[2];
        compColor[offsetColor + 3] = alpha;

        offsetColor += 4;
      }
    }

    return compColor;
  }

  renderQuadTexture(
    blending,
    texture,
    blurTexture1,
    blurTexture2,
    blurTexture3,
    blurMins,
    blurMaxs,
    mdVSFrame,
    mdVSQs,
    warpColor
  ) {
    const compColors = this.generateCompColors(blending, mdVSFrame, warpColor);

    this.gl.useProgram(this.shaderProgram);

    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
    this.gl.bufferData(
      this.gl.ELEMENT_ARRAY_BUFFER,
      this.indices,
      this.gl.STATIC_DRAW
    );

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      this.vertices,
      this.gl.STATIC_DRAW
    );

    this.gl.vertexAttribPointer(
      this.positionLocation,
      3,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.positionLocation);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.compColorVertexBuf);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, compColors, this.gl.STATIC_DRAW);

    this.gl.vertexAttribPointer(
      this.compColorLocation,
      4,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.compColorLocation);

    const wrapping =
      mdVSFrame.wrap !== 0 ? this.gl.REPEAT : this.gl.CLAMP_TO_EDGE;
    this.gl.samplerParameteri(
      this.mainSampler,
      this.gl.TEXTURE_WRAP_S,
      wrapping
    );
    this.gl.samplerParameteri(
      this.mainSampler,
      this.gl.TEXTURE_WRAP_T,
      wrapping
    );

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.bindSampler(0, this.mainSampler);
    this.gl.uniform1i(this.textureLoc, 0);

    this.gl.activeTexture(this.gl.TEXTURE1);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.bindSampler(1, this.mainSamplerFW);
    this.gl.uniform1i(this.textureFWLoc, 1);

    this.gl.activeTexture(this.gl.TEXTURE2);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.bindSampler(2, this.mainSamplerFC);
    this.gl.uniform1i(this.textureFCLoc, 2);

    this.gl.activeTexture(this.gl.TEXTURE3);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.bindSampler(3, this.mainSamplerPW);
    this.gl.uniform1i(this.texturePWLoc, 3);

    this.gl.activeTexture(this.gl.TEXTURE4);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.bindSampler(4, this.mainSamplerPC);
    this.gl.uniform1i(this.texturePCLoc, 4);

    this.gl.activeTexture(this.gl.TEXTURE5);
    this.gl.bindTexture(this.gl.TEXTURE_2D, blurTexture1);
    this.gl.uniform1i(this.blurTexture1Loc, 5);

    this.gl.activeTexture(this.gl.TEXTURE6);
    this.gl.bindTexture(this.gl.TEXTURE_2D, blurTexture2);
    this.gl.uniform1i(this.blurTexture2Loc, 6);

    this.gl.activeTexture(this.gl.TEXTURE7);
    this.gl.bindTexture(this.gl.TEXTURE_2D, blurTexture3);
    this.gl.uniform1i(this.blurTexture3Loc, 7);

    this.gl.activeTexture(this.gl.TEXTURE8);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexLQ);
    this.gl.uniform1i(this.noiseLQLoc, 8);

    this.gl.activeTexture(this.gl.TEXTURE9);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexMQ);
    this.gl.uniform1i(this.noiseMQLoc, 9);

    this.gl.activeTexture(this.gl.TEXTURE10);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexHQ);
    this.gl.uniform1i(this.noiseHQLoc, 10);

    this.gl.activeTexture(this.gl.TEXTURE11);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexLQLite);
    this.gl.uniform1i(this.noiseLQLiteLoc, 11);

    this.gl.activeTexture(this.gl.TEXTURE12);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexLQ);
    this.gl.bindSampler(12, this.noise.noiseTexPointLQ);
    this.gl.uniform1i(this.noisePointLQLoc, 12);

    this.gl.activeTexture(this.gl.TEXTURE13);
    this.gl.bindTexture(this.gl.TEXTURE_3D, this.noise.noiseTexVolLQ);
    this.gl.uniform1i(this.noiseVolLQLoc, 13);

    this.gl.activeTexture(this.gl.TEXTURE14);
    this.gl.bindTexture(this.gl.TEXTURE_3D, this.noise.noiseTexVolHQ);
    this.gl.uniform1i(this.noiseVolHQLoc, 14);

    for (let i = 0; i < this.userTextures.length; i++) {
      const userTexture = this.userTextures[i];
      this.gl.activeTexture(this.gl.TEXTURE15 + i);
      this.gl.bindTexture(
        this.gl.TEXTURE_2D,
        this.image.getTexture(userTexture.sampler)
      );
      this.gl.uniform1i(userTexture.textureLoc, 15 + i);
    }

    this.gl.uniform1f(this.timeLoc, mdVSFrame.time);
    this.gl.uniform1f(this.gammaAdjLoc, mdVSFrame.gammaadj);
    this.gl.uniform1f(this.echoZoomLoc, mdVSFrame.echo_zoom);
    this.gl.uniform1f(this.echoAlphaLoc, mdVSFrame.echo_alpha);
    this.gl.uniform1f(this.echoOrientationLoc, mdVSFrame.echo_orient);
    this.gl.uniform1i(this.invertLoc, mdVSFrame.invert);
    this.gl.uniform1i(this.brightenLoc, mdVSFrame.brighten);
    this.gl.uniform1i(this.darkenLoc, mdVSFrame.darken);
    this.gl.uniform1i(this.solarizeLoc, mdVSFrame.solarize);
    this.gl.uniform2fv(this.resolutionLoc, [this.texsizeX, this.texsizeY]);
    this.gl.uniform4fv(this.aspectLoc, [
      this.aspectx,
      this.aspecty,
      this.invAspectx,
      this.invAspecty,
    ]);
    this.gl.uniform4fv(
      this.texsizeLoc,
      new Float32Array([
        this.texsizeX,
        this.texsizeY,
        1.0 / this.texsizeX,
        1.0 / this.texsizeY,
      ])
    );
    this.gl.uniform4fv(this.texsizeNoiseLQLoc, [256, 256, 1 / 256, 1 / 256]);
    this.gl.uniform4fv(this.texsizeNoiseMQLoc, [256, 256, 1 / 256, 1 / 256]);
    this.gl.uniform4fv(this.texsizeNoiseHQLoc, [256, 256, 1 / 256, 1 / 256]);
    this.gl.uniform4fv(this.texsizeNoiseLQLiteLoc, [32, 32, 1 / 32, 1 / 32]);
    this.gl.uniform4fv(this.texsizeNoiseVolLQLoc, [32, 32, 1 / 32, 1 / 32]);
    this.gl.uniform4fv(this.texsizeNoiseVolHQLoc, [32, 32, 1 / 32, 1 / 32]);
    this.gl.uniform1f(this.bassLoc, mdVSFrame.bass);
    this.gl.uniform1f(this.midLoc, mdVSFrame.mid);
    this.gl.uniform1f(this.trebLoc, mdVSFrame.treb);
    this.gl.uniform1f(
      this.volLoc,
      (mdVSFrame.bass + mdVSFrame.mid + mdVSFrame.treb) / 3
    );
    this.gl.uniform1f(this.bassAttLoc, mdVSFrame.bass_att);
    this.gl.uniform1f(this.midAttLoc, mdVSFrame.mid_att);
    this.gl.uniform1f(this.trebAttLoc, mdVSFrame.treb_att);
    this.gl.uniform1f(
      this.volAttLoc,
      (mdVSFrame.bass_att + mdVSFrame.mid_att + mdVSFrame.treb_att) / 3
    );
    this.gl.uniform1f(this.frameLoc, mdVSFrame.frame);
    this.gl.uniform1f(this.fpsLoc, mdVSFrame.fps);
    this.gl.uniform4fv(this.randPresetLoc, mdVSFrame.rand_preset);
    this.gl.uniform4fv(
      this.randFrameLoc,
      new Float32Array([
        this.rng.random(),
        this.rng.random(),
        this.rng.random(),
        this.rng.random(),
      ])
    );
    this.gl.uniform1f(this.fShaderLoc, mdVSFrame.fshader);

    this.gl.uniform4fv(
      this.qaLoc,
      new Float32Array([
        mdVSQs.q1 || 0,
        mdVSQs.q2 || 0,
        mdVSQs.q3 || 0,
        mdVSQs.q4 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qbLoc,
      new Float32Array([
        mdVSQs.q5 || 0,
        mdVSQs.q6 || 0,
        mdVSQs.q7 || 0,
        mdVSQs.q8 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qcLoc,
      new Float32Array([
        mdVSQs.q9 || 0,
        mdVSQs.q10 || 0,
        mdVSQs.q11 || 0,
        mdVSQs.q12 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qdLoc,
      new Float32Array([
        mdVSQs.q13 || 0,
        mdVSQs.q14 || 0,
        mdVSQs.q15 || 0,
        mdVSQs.q16 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qeLoc,
      new Float32Array([
        mdVSQs.q17 || 0,
        mdVSQs.q18 || 0,
        mdVSQs.q19 || 0,
        mdVSQs.q20 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qfLoc,
      new Float32Array([
        mdVSQs.q21 || 0,
        mdVSQs.q22 || 0,
        mdVSQs.q23 || 0,
        mdVSQs.q24 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qgLoc,
      new Float32Array([
        mdVSQs.q25 || 0,
        mdVSQs.q26 || 0,
        mdVSQs.q27 || 0,
        mdVSQs.q28 || 0,
      ])
    );
    this.gl.uniform4fv(
      this.qhLoc,
      new Float32Array([
        mdVSQs.q29 || 0,
        mdVSQs.q30 || 0,
        mdVSQs.q31 || 0,
        mdVSQs.q32 || 0,
      ])
    );
    this.gl.uniform4fv(this.slowRoamCosLoc, [
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 0.005),
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 0.008),
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 0.013),
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 0.022),
    ]);
    this.gl.uniform4fv(this.roamCosLoc, [
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 0.3),
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 1.3),
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 5.0),
      0.5 + 0.5 * Math.cos(mdVSFrame.time * 20.0),
    ]);
    this.gl.uniform4fv(this.slowRoamSinLoc, [
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 0.005),
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 0.008),
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 0.013),
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 0.022),
    ]);
    this.gl.uniform4fv(this.roamSinLoc, [
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 0.3),
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 1.3),
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 5.0),
      0.5 + 0.5 * Math.sin(mdVSFrame.time * 20.0),
    ]);

    this.bindBlurVals(blurMins, blurMaxs);

    if (blending) {
      this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    } else {
      this.gl.disable(this.gl.BLEND);
    }

    this.gl.drawElements(
      this.gl.TRIANGLES,
      this.indices.length,
      this.gl.UNSIGNED_SHORT,
      0
    );

    if (!blending) {
      this.gl.enable(this.gl.BLEND);
    }
  }
}

class OutputShader {
  constructor(gl, opts) {
    this.gl = gl;

    this.textureRatio = opts.textureRatio;
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;

    this.positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

    this.vertexBuf = this.gl.createBuffer();

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    if (this.useFXAA()) {
      this.createFXAAShader();
    } else {
      this.createShader();
    }
  }

  useFXAA() {
    return this.textureRatio <= 1;
  }

  updateGlobals(opts) {
    this.textureRatio = opts.textureRatio;
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;

    this.gl.deleteProgram(this.shaderProgram);

    if (this.useFXAA()) {
      this.createFXAAShader();
    } else {
      this.createShader();
    }
  }

  // based on https://github.com/mattdesl/glsl-fxaa
  createFXAAShader() {
    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `#version 300 es
       const vec2 halfmad = vec2(0.5);
       in vec2 aPos;
       out vec2 v_rgbM;
       out vec2 v_rgbNW;
       out vec2 v_rgbNE;
       out vec2 v_rgbSW;
       out vec2 v_rgbSE;
       uniform vec4 texsize;
       void main(void) {
         gl_Position = vec4(aPos, 0.0, 1.0);

         v_rgbM = aPos * halfmad + halfmad;
         v_rgbNW = v_rgbM + (vec2(-1.0, -1.0) * texsize.zx);
         v_rgbNE = v_rgbM + (vec2(1.0, -1.0) * texsize.zx);
         v_rgbSW = v_rgbM + (vec2(-1.0, 1.0) * texsize.zx);
         v_rgbSE = v_rgbM + (vec2(1.0, 1.0) * texsize.zx);
       }`
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `#version 300 es
       precision ${this.floatPrecision} float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 v_rgbM;
       in vec2 v_rgbNW;
       in vec2 v_rgbNE;
       in vec2 v_rgbSW;
       in vec2 v_rgbSE;
       out vec4 fragColor;
       uniform vec4 texsize;
       uniform sampler2D uTexture;

       #ifndef FXAA_REDUCE_MIN
         #define FXAA_REDUCE_MIN   (1.0/ 128.0)
       #endif
       #ifndef FXAA_REDUCE_MUL
         #define FXAA_REDUCE_MUL   (1.0 / 8.0)
       #endif
       #ifndef FXAA_SPAN_MAX
         #define FXAA_SPAN_MAX     8.0
       #endif

       void main(void) {
         vec4 color;
         vec3 rgbNW = textureLod(uTexture, v_rgbNW, 0.0).xyz;
         vec3 rgbNE = textureLod(uTexture, v_rgbNE, 0.0).xyz;
         vec3 rgbSW = textureLod(uTexture, v_rgbSW, 0.0).xyz;
         vec3 rgbSE = textureLod(uTexture, v_rgbSE, 0.0).xyz;
         vec3 rgbM  = textureLod(uTexture, v_rgbM, 0.0).xyz;
         vec3 luma = vec3(0.299, 0.587, 0.114);
         float lumaNW = dot(rgbNW, luma);
         float lumaNE = dot(rgbNE, luma);
         float lumaSW = dot(rgbSW, luma);
         float lumaSE = dot(rgbSE, luma);
         float lumaM  = dot(rgbM,  luma);
         float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
         float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

         mediump vec2 dir;
         dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
         dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

         float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                               (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

         float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
         dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
                   max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                   dir * rcpDirMin)) * texsize.zw;

         vec3 rgbA = 0.5 * (
             textureLod(uTexture, v_rgbM + dir * (1.0 / 3.0 - 0.5), 0.0).xyz +
             textureLod(uTexture, v_rgbM + dir * (2.0 / 3.0 - 0.5), 0.0).xyz);
         vec3 rgbB = rgbA * 0.5 + 0.25 * (
             textureLod(uTexture, v_rgbM + dir * -0.5, 0.0).xyz +
             textureLod(uTexture, v_rgbM + dir * 0.5, 0.0).xyz);

         float lumaB = dot(rgbB, luma);
         if ((lumaB < lumaMin) || (lumaB > lumaMax))
           color = vec4(rgbA, 1.0);
         else
           color = vec4(rgbB, 1.0);

         fragColor = color;
       }`
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.positionLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aPos"
    );
    this.textureLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "uTexture"
    );
    this.texsizeLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize");
  }

  createShader() {
    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `#version 300 es
       const vec2 halfmad = vec2(0.5);
       in vec2 aPos;
       out vec2 uv;
       void main(void) {
         gl_Position = vec4(aPos, 0.0, 1.0);
         uv = aPos * halfmad + halfmad;
       }`
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `#version 300 es
       precision ${this.floatPrecision} float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;

       void main(void) {
         fragColor = vec4(texture(uTexture, uv).rgb, 1.0);
       }`
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.positionLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aPos"
    );
    this.textureLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "uTexture"
    );
  }

  renderQuadTexture(texture) {
    this.gl.useProgram(this.shaderProgram);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      this.positions,
      this.gl.STATIC_DRAW
    );

    this.gl.vertexAttribPointer(
      this.positionLocation,
      2,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.positionLocation);

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

    this.gl.uniform1i(this.textureLoc, 0);

    if (this.useFXAA()) {
      this.gl.uniform4fv(
        this.texsizeLoc,
        new Float32Array([
          this.texsizeX,
          this.texsizeY,
          1.0 / this.texsizeX,
          1.0 / this.texsizeY,
        ])
      );
    }

    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }
}

class ResampleShader {
  constructor(gl) {
    this.gl = gl;

    this.positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

    this.vertexBuf = this.gl.createBuffer();

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    this.createShader();
  }

  createShader() {
    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `#version 300 es
       const vec2 halfmad = vec2(0.5);
       in vec2 aPos;
       out vec2 uv;
       void main(void) {
         gl_Position = vec4(aPos, 0.0, 1.0);
         uv = aPos * halfmad + halfmad;
       }`
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `#version 300 es
       precision ${this.floatPrecision} float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;

       void main(void) {
         fragColor = vec4(texture(uTexture, uv).rgb, 1.0);
       }`
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.positionLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aPos"
    );
    this.textureLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "uTexture"
    );
  }

  renderQuadTexture(texture) {
    this.gl.useProgram(this.shaderProgram);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      this.positions,
      this.gl.STATIC_DRAW
    );

    this.gl.vertexAttribPointer(
      this.positionLocation,
      2,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.positionLocation);

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.generateMipmap(this.gl.TEXTURE_2D);

    this.gl.uniform1i(this.textureLoc, 0);

    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }
}

class BlurVertical {
  constructor(gl, blurLevel) {
    this.gl = gl;
    this.blurLevel = blurLevel;

    const w = [4.0, 3.8, 3.5, 2.9, 1.9, 1.2, 0.7, 0.3];
    const w1V = w[0] + w[1] + w[2] + w[3];
    const w2V = w[4] + w[5] + w[6] + w[7];
    const d1V = 0 + 2 * ((w[2] + w[3]) / w1V);
    const d2V = 2 + 2 * ((w[6] + w[7]) / w2V);

    this.wds = new Float32Array([w1V, w2V, d1V, d2V]);
    this.wDiv = 1.0 / ((w1V + w2V) * 2);

    this.positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

    this.vertexBuf = this.gl.createBuffer();

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    this.createShader();
  }

  createShader() {
    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `
      #version 300 es
      const vec2 halfmad = vec2(0.5);
      in vec2 aPos;
      out vec2 uv;
      void main(void) {
        gl_Position = vec4(aPos, 0.0, 1.0);
        uv = aPos * halfmad + halfmad;
      }
      `.trim()
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `#version 300 es
       precision ${this.floatPrecision} float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;
       uniform vec4 texsize;
       uniform float ed1;
       uniform float ed2;
       uniform float ed3;
       uniform vec4 wds;
       uniform float wdiv;

       void main(void) {
         float w1 = wds[0];
         float w2 = wds[1];
         float d1 = wds[2];
         float d2 = wds[3];

         vec2 uv2 = uv.xy;

         vec3 blur =
           ( texture(uTexture, uv2 + vec2(0.0, d1 * texsize.w) ).xyz
           + texture(uTexture, uv2 + vec2(0.0,-d1 * texsize.w) ).xyz) * w1 +
           ( texture(uTexture, uv2 + vec2(0.0, d2 * texsize.w) ).xyz
           + texture(uTexture, uv2 + vec2(0.0,-d2 * texsize.w) ).xyz) * w2;

         blur.xyz *= wdiv;

         float t = min(min(uv.x, uv.y), 1.0 - max(uv.x, uv.y));
         t = sqrt(t);
         t = ed1 + ed2 * clamp(t * ed3, 0.0, 1.0);
         blur.xyz *= t;

         fragColor = vec4(blur, 1.0);
       }`
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.positionLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aPos"
    );
    this.textureLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "uTexture"
    );
    this.texsizeLocation = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize"
    );
    this.ed1Loc = this.gl.getUniformLocation(this.shaderProgram, "ed1");
    this.ed2Loc = this.gl.getUniformLocation(this.shaderProgram, "ed2");
    this.ed3Loc = this.gl.getUniformLocation(this.shaderProgram, "ed3");
    this.wdsLocation = this.gl.getUniformLocation(this.shaderProgram, "wds");
    this.wdivLoc = this.gl.getUniformLocation(this.shaderProgram, "wdiv");
  }

  renderQuadTexture(texture, mdVSFrame, srcTexsize) {
    this.gl.useProgram(this.shaderProgram);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      this.positions,
      this.gl.STATIC_DRAW
    );

    this.gl.vertexAttribPointer(
      this.positionLocation,
      2,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.positionLocation);

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

    this.gl.uniform1i(this.textureLoc, 0);

    const b1ed = this.blurLevel === 0 ? mdVSFrame.b1ed : 0.0;

    this.gl.uniform4fv(this.texsizeLocation, [
      srcTexsize[0],
      srcTexsize[1],
      1.0 / srcTexsize[0],
      1.0 / srcTexsize[1],
    ]);
    this.gl.uniform1f(this.ed1Loc, 1.0 - b1ed);
    this.gl.uniform1f(this.ed2Loc, b1ed);
    this.gl.uniform1f(this.ed3Loc, 5.0);
    this.gl.uniform4fv(this.wdsLocation, this.wds);
    this.gl.uniform1f(this.wdivLoc, this.wDiv);

    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }
}

class BlurHorizontal {
  constructor(gl, blurLevel) {
    this.gl = gl;
    this.blurLevel = blurLevel;

    const w = [4.0, 3.8, 3.5, 2.9, 1.9, 1.2, 0.7, 0.3];
    const w1H = w[0] + w[1];
    const w2H = w[2] + w[3];
    const w3H = w[4] + w[5];
    const w4H = w[6] + w[7];
    const d1H = 0 + (2 * w[1]) / w1H;
    const d2H = 2 + (2 * w[3]) / w2H;
    const d3H = 4 + (2 * w[5]) / w3H;
    const d4H = 6 + (2 * w[7]) / w4H;

    this.ws = new Float32Array([w1H, w2H, w3H, w4H]);
    this.ds = new Float32Array([d1H, d2H, d3H, d4H]);
    this.wDiv = 0.5 / (w1H + w2H + w3H + w4H);

    this.positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

    this.vertexBuf = this.gl.createBuffer();

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    this.createShader();
  }

  createShader() {
    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `
      #version 300 es
      const vec2 halfmad = vec2(0.5);
      in vec2 aPos;
      out vec2 uv;
      void main(void) {
        gl_Position = vec4(aPos, 0.0, 1.0);
        uv = aPos * halfmad + halfmad;
      }
      `.trim()
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `#version 300 es
       precision ${this.floatPrecision} float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;
       uniform vec4 texsize;
       uniform float scale;
       uniform float bias;
       uniform vec4 ws;
       uniform vec4 ds;
       uniform float wdiv;

       void main(void) {
         float w1 = ws[0];
         float w2 = ws[1];
         float w3 = ws[2];
         float w4 = ws[3];
         float d1 = ds[0];
         float d2 = ds[1];
         float d3 = ds[2];
         float d4 = ds[3];

         vec2 uv2 = uv.xy;

         vec3 blur =
           ( texture(uTexture, uv2 + vec2( d1 * texsize.z,0.0) ).xyz
           + texture(uTexture, uv2 + vec2(-d1 * texsize.z,0.0) ).xyz) * w1 +
           ( texture(uTexture, uv2 + vec2( d2 * texsize.z,0.0) ).xyz
           + texture(uTexture, uv2 + vec2(-d2 * texsize.z,0.0) ).xyz) * w2 +
           ( texture(uTexture, uv2 + vec2( d3 * texsize.z,0.0) ).xyz
           + texture(uTexture, uv2 + vec2(-d3 * texsize.z,0.0) ).xyz) * w3 +
           ( texture(uTexture, uv2 + vec2( d4 * texsize.z,0.0) ).xyz
           + texture(uTexture, uv2 + vec2(-d4 * texsize.z,0.0) ).xyz) * w4;

         blur.xyz *= wdiv;
         blur.xyz = blur.xyz * scale + bias;

         fragColor = vec4(blur, 1.0);
       }`
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.positionLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aPos"
    );
    this.textureLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "uTexture"
    );
    this.texsizeLocation = this.gl.getUniformLocation(
      this.shaderProgram,
      "texsize"
    );
    this.scaleLoc = this.gl.getUniformLocation(this.shaderProgram, "scale");
    this.biasLoc = this.gl.getUniformLocation(this.shaderProgram, "bias");
    this.wsLoc = this.gl.getUniformLocation(this.shaderProgram, "ws");
    this.dsLocation = this.gl.getUniformLocation(this.shaderProgram, "ds");
    this.wdivLoc = this.gl.getUniformLocation(this.shaderProgram, "wdiv");
  }

  getScaleAndBias(blurMins, blurMaxs) {
    const scale = [1, 1, 1];
    const bias = [0, 0, 0];

    let tempMin;
    let tempMax;
    scale[0] = 1.0 / (blurMaxs[0] - blurMins[0]);
    bias[0] = -blurMins[0] * scale[0];
    tempMin = (blurMins[1] - blurMins[0]) / (blurMaxs[0] - blurMins[0]);
    tempMax = (blurMaxs[1] - blurMins[0]) / (blurMaxs[0] - blurMins[0]);
    scale[1] = 1.0 / (tempMax - tempMin);
    bias[1] = -tempMin * scale[1];
    tempMin = (blurMins[2] - blurMins[1]) / (blurMaxs[1] - blurMins[1]);
    tempMax = (blurMaxs[2] - blurMins[1]) / (blurMaxs[1] - blurMins[1]);
    scale[2] = 1.0 / (tempMax - tempMin);
    bias[2] = -tempMin * scale[2];

    return {
      scale: scale[this.blurLevel],
      bias: bias[this.blurLevel],
    };
  }

  renderQuadTexture(texture, mdVSFrame, blurMins, blurMaxs, srcTexsize) {
    this.gl.useProgram(this.shaderProgram);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      this.positions,
      this.gl.STATIC_DRAW
    );

    this.gl.vertexAttribPointer(
      this.positionLocation,
      2,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.positionLocation);

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

    this.gl.uniform1i(this.textureLoc, 0);

    const { scale, bias } = this.getScaleAndBias(blurMins, blurMaxs);

    this.gl.uniform4fv(this.texsizeLocation, [
      srcTexsize[0],
      srcTexsize[1],
      1.0 / srcTexsize[0],
      1.0 / srcTexsize[1],
    ]);
    this.gl.uniform1f(this.scaleLoc, scale);
    this.gl.uniform1f(this.biasLoc, bias);
    this.gl.uniform4fv(this.wsLoc, this.ws);
    this.gl.uniform4fv(this.dsLocation, this.ds);
    this.gl.uniform1f(this.wdivLoc, this.wDiv);

    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }
}

class BlurShader {
  constructor(blurLevel, blurRatios, gl, opts = {}) {
    this.blurLevel = blurLevel;
    this.blurRatios = blurRatios;
    this.gl = gl;

    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;

    this.anisoExt =
      this.gl.getExtension("EXT_texture_filter_anisotropic") ||
      this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
      this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");

    this.blurHorizontalFrameBuffer = this.gl.createFramebuffer();
    this.blurVerticalFrameBuffer = this.gl.createFramebuffer();

    this.blurHorizontalTexture = this.gl.createTexture();
    this.blurVerticalTexture = this.gl.createTexture();

    this.setupFrameBufferTextures();

    this.blurHorizontal = new BlurHorizontal(gl, this.blurLevel, opts);
    this.blurVertical = new BlurVertical(gl, this.blurLevel, opts);
  }

  updateGlobals(opts) {
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;

    this.setupFrameBufferTextures();
  }

  getTextureSize(sizeRatio) {
    let sizeX = Math.max(this.texsizeX * sizeRatio, 16);
    sizeX = Math.floor((sizeX + 3) / 16) * 16;
    let sizeY = Math.max(this.texsizeY * sizeRatio, 16);
    sizeY = Math.floor((sizeY + 3) / 4) * 4;
    return [sizeX, sizeY];
  }

  setupFrameBufferTextures() {
    const srcBlurRatios =
      this.blurLevel > 0 ? this.blurRatios[this.blurLevel - 1] : [1, 1];
    const dstBlurRatios = this.blurRatios[this.blurLevel];
    const srcTexsizeHorizontal = this.getTextureSize(srcBlurRatios[1]);
    const dstTexsizeHorizontal = this.getTextureSize(dstBlurRatios[0]);
    this.bindFrameBufferTexture(
      this.blurHorizontalFrameBuffer,
      this.blurHorizontalTexture,
      dstTexsizeHorizontal
    );

    const srcTexsizeVertical = dstTexsizeHorizontal;
    const dstTexsizeVertical = this.getTextureSize(dstBlurRatios[1]);
    this.bindFrameBufferTexture(
      this.blurVerticalFrameBuffer,
      this.blurVerticalTexture,
      dstTexsizeVertical
    );

    this.horizontalTexsizes = [srcTexsizeHorizontal, dstTexsizeHorizontal];
    this.verticalTexsizes = [srcTexsizeVertical, dstTexsizeVertical];
  }

  bindFrambufferAndSetViewport(fb, texsize) {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, fb);
    this.gl.viewport(0, 0, texsize[0], texsize[1]);
  }

  bindFrameBufferTexture(targetFrameBuffer, targetTexture, texsize) {
    this.gl.bindTexture(this.gl.TEXTURE_2D, targetTexture);

    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      texsize[0],
      texsize[1],
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      new Uint8Array(texsize[0] * texsize[1] * 4)
    );

    this.gl.generateMipmap(this.gl.TEXTURE_2D);

    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.CLAMP_TO_EDGE
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.CLAMP_TO_EDGE
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR_MIPMAP_LINEAR
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.LINEAR
    );
    if (this.anisoExt) {
      const max = this.gl.getParameter(
        this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT
      );
      this.gl.texParameterf(
        this.gl.TEXTURE_2D,
        this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,
        max
      );
    }

    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, targetFrameBuffer);
    this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.COLOR_ATTACHMENT0,
      this.gl.TEXTURE_2D,
      targetTexture,
      0
    );
  }

  renderBlurTexture(prevTexture, mdVSFrame, blurMins, blurMaxs) {
    this.bindFrambufferAndSetViewport(
      this.blurHorizontalFrameBuffer,
      this.horizontalTexsizes[1]
    );
    this.blurHorizontal.renderQuadTexture(
      prevTexture,
      mdVSFrame,
      blurMins,
      blurMaxs,
      this.horizontalTexsizes[0]
    );

    this.gl.bindTexture(this.gl.TEXTURE_2D, this.blurHorizontalTexture);
    this.gl.generateMipmap(this.gl.TEXTURE_2D);

    this.bindFrambufferAndSetViewport(
      this.blurVerticalFrameBuffer,
      this.verticalTexsizes[1]
    );
    this.blurVertical.renderQuadTexture(
      this.blurHorizontalTexture,
      mdVSFrame,
      this.verticalTexsizes[0]
    );

    this.gl.bindTexture(this.gl.TEXTURE_2D, this.blurVerticalTexture);
    this.gl.generateMipmap(this.gl.TEXTURE_2D);
  }
}

class Noise {
  constructor(gl) {
    this.gl = gl;
    this.randomFn = getRNG().random;

    this.anisoExt =
      this.gl.getExtension("EXT_texture_filter_anisotropic") ||
      this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
      this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");

    this.noiseTexLQ = this.gl.createTexture();
    this.noiseTexLQLite = this.gl.createTexture();
    this.noiseTexMQ = this.gl.createTexture();
    this.noiseTexHQ = this.gl.createTexture();

    this.noiseTexVolLQ = this.gl.createTexture();
    this.noiseTexVolHQ = this.gl.createTexture();

    this.nTexArrLQ = Noise.createNoiseTex(256, 1, this.randomFn);
    this.nTexArrLQLite = Noise.createNoiseTex(32, 1, this.randomFn);
    this.nTexArrMQ = Noise.createNoiseTex(256, 4, this.randomFn);
    this.nTexArrHQ = Noise.createNoiseTex(256, 8, this.randomFn);

    this.nTexArrVolLQ = Noise.createNoiseVolTex(32, 1, this.randomFn);
    this.nTexArrVolHQ = Noise.createNoiseVolTex(32, 4, this.randomFn);

    this.bindTexture(this.noiseTexLQ, this.nTexArrLQ, 256, 256);
    this.bindTexture(this.noiseTexLQLite, this.nTexArrLQLite, 32, 32);
    this.bindTexture(this.noiseTexMQ, this.nTexArrMQ, 256, 256);
    this.bindTexture(this.noiseTexHQ, this.nTexArrHQ, 256, 256);

    this.bindTexture3D(this.noiseTexVolLQ, this.nTexArrVolLQ, 32, 32, 32);
    this.bindTexture3D(this.noiseTexVolHQ, this.nTexArrVolHQ, 32, 32, 32);

    this.noiseTexPointLQ = this.gl.createSampler();
    gl.samplerParameteri(
      this.noiseTexPointLQ,
      gl.TEXTURE_MIN_FILTER,
      gl.NEAREST_MIPMAP_NEAREST
    );
    gl.samplerParameteri(
      this.noiseTexPointLQ,
      gl.TEXTURE_MAG_FILTER,
      gl.NEAREST
    );
    gl.samplerParameteri(this.noiseTexPointLQ, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.samplerParameteri(this.noiseTexPointLQ, gl.TEXTURE_WRAP_T, gl.REPEAT);
  }

  bindTexture(texture, data, width, height) {
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      width,
      height,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      data
    );

    this.gl.generateMipmap(this.gl.TEXTURE_2D);

    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.REPEAT
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.REPEAT
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR_MIPMAP_LINEAR
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.LINEAR
    );
    if (this.anisoExt) {
      const max = this.gl.getParameter(
        this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT
      );
      this.gl.texParameterf(
        this.gl.TEXTURE_2D,
        this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,
        max
      );
    }
  }

  bindTexture3D(texture, data, width, height, depth) {
    this.gl.bindTexture(this.gl.TEXTURE_3D, texture);

    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1);
    this.gl.texImage3D(
      this.gl.TEXTURE_3D,
      0,
      this.gl.RGBA,
      width,
      height,
      depth,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      data
    );

    this.gl.generateMipmap(this.gl.TEXTURE_3D);

    this.gl.texParameteri(
      this.gl.TEXTURE_3D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.REPEAT
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_3D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.REPEAT
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_3D,
      this.gl.TEXTURE_WRAP_R,
      this.gl.REPEAT
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_3D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR_MIPMAP_LINEAR
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_3D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.LINEAR
    );
    if (this.anisoExt) {
      const max = this.gl.getParameter(
        this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT
      );
      this.gl.texParameterf(
        this.gl.TEXTURE_3D,
        this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,
        max
      );
    }
  }

  static fCubicInterpolate(y0, y1, y2, y3, t) {
    const t2 = t * t;
    const t3 = t * t2;
    const a0 = y3 - y2 - y0 + y1;
    const a1 = y0 - y1 - a0;
    const a2 = y2 - y0;
    const a3 = y1;

    return a0 * t3 + a1 * t2 + a2 * t + a3;
  }

  static dwCubicInterpolate(y0, y1, y2, y3, t) {
    const ret = [];
    for (let i = 0; i < 4; i++) {
      let f = Noise.fCubicInterpolate(
        y0[i] / 255.0,
        y1[i] / 255.0,
        y2[i] / 255.0,
        y3[i] / 255.0,
        t
      );
      f = Math.clamp(f, 0, 1);
      ret[i] = f * 255;
    }

    return ret;
  }

  static createNoiseVolTex(noiseSize, zoom, randomFn) {
    const nsize = noiseSize * noiseSize * noiseSize;
    const texArr = new Uint8Array(nsize * 4);
    const texRange = zoom > 1 ? 216 : 256;
    const halfTexRange = texRange * 0.5;
    for (let i = 0; i < nsize; i++) {
      texArr[i * 4 + 0] = Math.floor(randomFn() * texRange + halfTexRange);
      texArr[i * 4 + 1] = Math.floor(randomFn() * texRange + halfTexRange);
      texArr[i * 4 + 2] = Math.floor(randomFn() * texRange + halfTexRange);
      texArr[i * 4 + 3] = Math.floor(randomFn() * texRange + halfTexRange);
    }

    const wordsPerSlice = noiseSize * noiseSize;
    const wordsPerLine = noiseSize;
    if (zoom > 1) {
      for (let z = 0; z < noiseSize; z += zoom) {
        for (let y = 0; y < noiseSize; y += zoom) {
          for (let x = 0; x < noiseSize; x++) {
            if (x % zoom !== 0) {
              const baseX = Math.floor(x / zoom) * zoom + noiseSize;
              const baseY = z * wordsPerSlice + y * wordsPerLine;

              const y0 = [];
              const y1 = [];
              const y2 = [];
              const y3 = [];
              for (let i = 0; i < 4; i++) {
                y0[i] =
                  texArr[baseY * 4 + ((baseX - zoom) % noiseSize) * 4 + i];
                y1[i] = texArr[baseY * 4 + (baseX % noiseSize) * 4 + i];
                y2[i] =
                  texArr[baseY * 4 + ((baseX + zoom) % noiseSize) * 4 + i];
                y3[i] =
                  texArr[baseY * 4 + ((baseX + zoom * 2) % noiseSize) * 4 + i];
              }

              const t = (x % zoom) / zoom;
              const result = Noise.dwCubicInterpolate(y0, y1, y2, y3, t);

              for (let i = 0; i < 4; i++) {
                const offset = x * 4 + i;
                texArr[z * wordsPerSlice * 4 + y * wordsPerLine * 4 + offset] =
                  result[i];
              }
            }
          }
        }
      }

      for (let z = 0; z < noiseSize; z += zoom) {
        for (let x = 0; x < noiseSize; x++) {
          for (let y = 0; y < noiseSize; y++) {
            if (y % zoom !== 0) {
              const baseY = Math.floor(y / zoom) * zoom + noiseSize;
              const baseZ = z * wordsPerSlice;

              const y0 = [];
              const y1 = [];
              const y2 = [];
              const y3 = [];
              for (let i = 0; i < 4; i++) {
                const offset = x * 4 + baseZ * 4 + i;
                y0[i] =
                  texArr[
                    ((baseY - zoom) % noiseSize) * wordsPerLine * 4 + offset
                  ];
                y1[i] = texArr[(baseY % noiseSize) * wordsPerLine * 4 + offset];
                y2[i] =
                  texArr[
                    ((baseY + zoom) % noiseSize) * wordsPerLine * 4 + offset
                  ];
                y3[i] =
                  texArr[
                    ((baseY + zoom * 2) % noiseSize) * wordsPerLine * 4 + offset
                  ];
              }

              const t = (y % zoom) / zoom;
              const result = Noise.dwCubicInterpolate(y0, y1, y2, y3, t);

              for (let i = 0; i < 4; i++) {
                const offset = x * 4 + baseZ * 4 + i;
                texArr[y * wordsPerLine * 4 + offset] = result[i];
              }
            }
          }
        }
      }

      for (let x = 0; x < noiseSize; x++) {
        for (let y = 0; y < noiseSize; y++) {
          for (let z = 0; z < noiseSize; z++) {
            if (z % zoom !== 0) {
              const baseY = y * wordsPerLine;
              const baseZ = Math.floor(z / zoom) * zoom + noiseSize;

              const y0 = [];
              const y1 = [];
              const y2 = [];
              const y3 = [];
              for (let i = 0; i < 4; i++) {
                const offset = x * 4 + baseY * 4 + i;
                y0[i] =
                  texArr[
                    ((baseZ - zoom) % noiseSize) * wordsPerSlice * 4 + offset
                  ];
                y1[i] =
                  texArr[(baseZ % noiseSize) * wordsPerSlice * 4 + offset];
                y2[i] =
                  texArr[
                    ((baseZ + zoom) % noiseSize) * wordsPerSlice * 4 + offset
                  ];
                y3[i] =
                  texArr[
                    ((baseZ + zoom * 2) % noiseSize) * wordsPerSlice * 4 +
                      offset
                  ];
              }

              const t = (y % zoom) / zoom;
              const result = Noise.dwCubicInterpolate(y0, y1, y2, y3, t);

              for (let i = 0; i < 4; i++) {
                const offset = x * 4 + baseY * 4 + i;
                texArr[z * wordsPerSlice * 4 + offset] = result[i];
              }
            }
          }
        }
      }
    }

    return texArr;
  }

  static createNoiseTex(noiseSize, zoom, randomFn) {
    const nsize = noiseSize * noiseSize;
    const texArr = new Uint8Array(nsize * 4);
    const texRange = zoom > 1 ? 216 : 256;
    const halfTexRange = texRange * 0.5;
    for (let i = 0; i < nsize; i++) {
      texArr[i * 4 + 0] = Math.floor(randomFn() * texRange + halfTexRange);
      texArr[i * 4 + 1] = Math.floor(randomFn() * texRange + halfTexRange);
      texArr[i * 4 + 2] = Math.floor(randomFn() * texRange + halfTexRange);
      texArr[i * 4 + 3] = Math.floor(randomFn() * texRange + halfTexRange);
    }

    if (zoom > 1) {
      for (let y = 0; y < noiseSize; y += zoom) {
        for (let x = 0; x < noiseSize; x++) {
          if (x % zoom !== 0) {
            const baseX = Math.floor(x / zoom) * zoom + noiseSize;
            const baseY = y * noiseSize;

            const y0 = [];
            const y1 = [];
            const y2 = [];
            const y3 = [];
            for (let z = 0; z < 4; z++) {
              y0[z] = texArr[baseY * 4 + ((baseX - zoom) % noiseSize) * 4 + z];
              y1[z] = texArr[baseY * 4 + (baseX % noiseSize) * 4 + z];
              y2[z] = texArr[baseY * 4 + ((baseX + zoom) % noiseSize) * 4 + z];
              y3[z] =
                texArr[baseY * 4 + ((baseX + zoom * 2) % noiseSize) * 4 + z];
            }

            const t = (x % zoom) / zoom;
            const result = Noise.dwCubicInterpolate(y0, y1, y2, y3, t);

            for (let z = 0; z < 4; z++) {
              texArr[y * noiseSize * 4 + x * 4 + z] = result[z];
            }
          }
        }
      }

      for (let x = 0; x < noiseSize; x++) {
        for (let y = 0; y < noiseSize; y++) {
          if (y % zoom !== 0) {
            const baseY = Math.floor(y / zoom) * zoom + noiseSize;

            const y0 = [];
            const y1 = [];
            const y2 = [];
            const y3 = [];
            for (let z = 0; z < 4; z++) {
              y0[z] =
                texArr[
                  ((baseY - zoom) % noiseSize) * noiseSize * 4 + x * 4 + z
                ];
              y1[z] = texArr[(baseY % noiseSize) * noiseSize * 4 + x * 4 + z];
              y2[z] =
                texArr[
                  ((baseY + zoom) % noiseSize) * noiseSize * 4 + x * 4 + z
                ];
              y3[z] =
                texArr[
                  ((baseY + zoom * 2) % noiseSize) * noiseSize * 4 + x * 4 + z
                ];
            }

            const t = (y % zoom) / zoom;
            const result = Noise.dwCubicInterpolate(y0, y1, y2, y3, t);

            for (let z = 0; z < 4; z++) {
              texArr[y * noiseSize * 4 + x * 4 + z] = result[z];
            }
          }
        }
      }
    }

    return texArr;
  }
}

class ImageTextures {
  constructor(gl) {
    this.gl = gl;

    this.anisoExt =
      this.gl.getExtension("EXT_texture_filter_anisotropic") ||
      this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
      this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");

    this.samplers = {};

    /* eslint-disable max-len */
    this.clouds2Image = new Image();
    this.clouds2Image.onload = () => {
      this.samplers.clouds2 = this.gl.createTexture();
      this.bindTexture(this.samplers.clouds2, this.clouds2Image, 128, 128);
    };
    this.clouds2Image.src =
      "data:image/jpeg;base64,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";

    this.emptyImage = new Image();
    this.emptyImage.onload = () => {
      this.samplers.empty = this.gl.createTexture();
      this.bindTexture(this.samplers.empty, this.emptyImage, 1, 1);
    };
    this.emptyImage.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    /* eslint-enable max-len */
  }

  bindTexture(texture, data, width, height) {
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      width,
      height,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      data
    );

    this.gl.generateMipmap(this.gl.TEXTURE_2D);

    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.REPEAT
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.REPEAT
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR_MIPMAP_LINEAR
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.LINEAR
    );
    if (this.anisoExt) {
      const max = this.gl.getParameter(
        this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT
      );
      this.gl.texParameterf(
        this.gl.TEXTURE_2D,
        this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,
        max
      );
    }
  }

  loadExtraImages(imageData) {
    Object.keys(imageData).forEach((imageName) => {
      const { data, width, height } = imageData[imageName];
      if (!this.samplers[imageName]) {
        const image = new Image();
        image.onload = () => {
          this.samplers[imageName] = this.gl.createTexture();
          this.bindTexture(this.samplers[imageName], image, width, height);
        };
        image.src = data;
      }
    });
  }

  getTexture(sampler) {
    const tex = this.samplers[sampler];
    if (tex) {
      return tex;
    }

    return this.samplers.clouds2;
  }
}

class TitleText {
  constructor(gl, opts = {}) {
    this.gl = gl;

    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.buildPositions();

    this.textTexture = this.gl.createTexture();
    this.indexBuf = gl.createBuffer();
    this.positionVertexBuf = this.gl.createBuffer();
    this.vertexBuf = this.gl.createBuffer();

    this.canvas = document.createElement("canvas");
    this.canvas.width = this.texsizeX;
    this.canvas.height = this.texsizeY;
    this.context2D = this.canvas.getContext("2d", { willReadFrequently: false });

    this.floatPrecision = ShaderUtils.getFragmentFloatPrecision(this.gl);
    this.createShader();
  }

  generateTitleTexture(text) {
    this.context2D.clearRect(0, 0, this.texsizeX, this.texsizeY);

    this.fontSize = Math.floor(16 * (this.texsizeX / 256));
    this.fontSize = Math.max(this.fontSize, 6);
    this.context2D.font = `italic ${this.fontSize}px Times New Roman`;

    let titleText = text;
    let textLength = this.context2D.measureText(titleText).width;
    if (textLength > this.texsizeX) {
      const percentToKeep = 0.91 * (this.texsizeX / textLength);
      titleText = `${titleText.substring(
        0,
        Math.floor(titleText.length * percentToKeep)
      )}...`;
      textLength = this.context2D.measureText(titleText).width;
    }

    this.context2D.fillStyle = "#FFFFFF";
    this.context2D.fillText(
      titleText,
      (this.texsizeX - textLength) / 2,
      this.texsizeY / 2
    );

    const imageData = new Uint8Array(
      this.context2D.getImageData(
        0,
        0,
        this.texsizeX,
        this.texsizeY
      ).data.buffer
    );

    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);

    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textTexture);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      this.texsizeX,
      this.texsizeY,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      imageData
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.LINEAR
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR_MIPMAP_LINEAR
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.CLAMP_TO_EDGE
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.CLAMP_TO_EDGE
    );
    this.gl.generateMipmap(this.gl.TEXTURE_2D);

    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
  }

  updateGlobals(opts) {
    this.texsizeX = opts.texsizeX;
    this.texsizeY = opts.texsizeY;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.canvas.width = this.texsizeX;
    this.canvas.height = this.texsizeY;
  }

  // based on https://github.com/mrdoob/three.js/blob/master/src/geometries/PlaneGeometry.js
  buildPositions() {
    const width = 2;
    const height = 2;

    const widthHalf = width / 2;
    const heightHalf = height / 2;

    const gridX = 15;
    const gridY = 7;

    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;

    const segmentWidth = width / gridX;
    const segmentHeight = height / gridY;

    const vertices = [];
    for (let iy = 0; iy < gridY1; iy++) {
      const y = iy * segmentHeight - heightHalf;
      for (let ix = 0; ix < gridX1; ix++) {
        const x = ix * segmentWidth - widthHalf;
        vertices.push(x, -y, 0);
      }
    }

    const indices = [];
    for (let iy = 0; iy < gridY; iy++) {
      for (let ix = 0; ix < gridX; ix++) {
        const a = ix + gridX1 * iy;
        const b = ix + gridX1 * (iy + 1);
        const c = ix + 1 + gridX1 * (iy + 1);
        const d = ix + 1 + gridX1 * iy;

        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }

    this.vertices = new Float32Array(vertices);
    this.indices = new Uint16Array(indices);
  }

  createShader() {
    this.shaderProgram = this.gl.createProgram();

    const vertShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    this.gl.shaderSource(
      vertShader,
      `#version 300 es
       const vec2 halfmad = vec2(0.5);
       in vec2 aPos;
       in vec2 aUv;
       out vec2 uv_orig;
       out vec2 uv;
       void main(void) {
         gl_Position = vec4(aPos, 0.0, 1.0);
         uv_orig = aPos * halfmad + halfmad;
         uv = aUv;
       }`
    );
    this.gl.compileShader(vertShader);

    const fragShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.shaderSource(
      fragShader,
      `#version 300 es
       precision ${this.floatPrecision} float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv_orig;
       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;
       uniform float textColor;

       void main(void) {
         fragColor = texture(uTexture, uv) * vec4(textColor);
       }`
    );
    this.gl.compileShader(fragShader);

    this.gl.attachShader(this.shaderProgram, vertShader);
    this.gl.attachShader(this.shaderProgram, fragShader);
    this.gl.linkProgram(this.shaderProgram);

    this.positionLocation = this.gl.getAttribLocation(
      this.shaderProgram,
      "aPos"
    );
    this.uvLocation = this.gl.getAttribLocation(this.shaderProgram, "aUv");
    this.textureLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "uTexture"
    );
    this.textColorLoc = this.gl.getUniformLocation(
      this.shaderProgram,
      "textColor"
    );
  }

  generateUvs(progress, flip, globalVars) {
    const gridX = 15;
    const gridY = 7;

    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;

    const uvs = [];
    const vertClip = 0.75;
    for (let j = 0; j < gridY1; j++) {
      for (let i = 0; i < gridX1; i++) {
        const u = i / gridX;
        const v = (j / gridY - 0.5) * vertClip + 0.5;
        const x = u * 2.0 - 1.0;
        let y = v * 2.0 - 1.0;
        if (progress >= 1) {
          y += 1.0 / this.texsizeY;
        }

        uvs.push(x, flip ? y : -y);
      }
    }

    const rampedProgress = Math.max(0, 1 - progress * 1.5);
    const t2 = rampedProgress ** 1.8 * 1.3;
    for (let j = 0; j < gridY1; j++) {
      for (let i = 0; i < gridX1; i++) {
        const idx = j * gridX1 + i;
        uvs[idx] +=
          t2 *
          0.07 *
          Math.sin(
            globalVars.time * 0.31 + uvs[idx] * 0.39 - uvs[idx + 1] * 1.94
          );
        uvs[idx] +=
          t2 *
          0.044 *
          Math.sin(
            globalVars.time * 0.81 - uvs[idx] * 1.91 + uvs[idx + 1] * 0.27
          );
        uvs[idx] +=
          t2 *
          0.061 *
          Math.sin(
            globalVars.time * 1.31 + uvs[idx] * 0.61 + uvs[idx + 1] * 0.74
          );

        uvs[idx + 1] +=
          t2 *
          0.061 *
          Math.sin(
            globalVars.time * 0.37 + uvs[idx] * 1.83 + uvs[idx + 1] * 0.69
          );
        uvs[idx + 1] +=
          t2 *
          0.07 *
          Math.sin(
            globalVars.time * 0.67 + uvs[idx] * 0.42 - uvs[idx + 1] * 1.39
          );
        uvs[idx + 1] +=
          t2 *
          0.087 *
          Math.sin(
            globalVars.time * 1.07 + uvs[idx] * 3.55 + uvs[idx + 1] * 0.89
          );
      }
    }

    const scale = 1.01 / (progress ** 0.21 + 0.01);
    for (let i = 0; i < uvs.length / 2; i++) {
      uvs[i * 2] *= scale;
      uvs[i * 2 + 1] *= scale * this.invAspecty;

      // get back UVs
      uvs[i * 2] = (uvs[i * 2] + 1) / 2.0;
      uvs[i * 2 + 1] = (uvs[i * 2 + 1] + 1) / 2.0;
    }

    return new Float32Array(uvs);
  }

  renderTitle(progress, flip, globalVars) {
    this.gl.useProgram(this.shaderProgram);

    const progressUvs = this.generateUvs(progress, flip, globalVars);

    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
    this.gl.bufferData(
      this.gl.ELEMENT_ARRAY_BUFFER,
      this.indices,
      this.gl.STATIC_DRAW
    );

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      this.vertices,
      this.gl.STATIC_DRAW
    );

    this.gl.vertexAttribPointer(
      this.positionLocation,
      3,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.positionLocation);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, progressUvs, this.gl.STATIC_DRAW);

    this.gl.vertexAttribPointer(this.uvLocation, 2, this.gl.FLOAT, false, 0, 0);
    this.gl.enableVertexAttribArray(this.uvLocation);

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textTexture);

    this.gl.uniform1i(this.textureLoc, 0);

    this.gl.uniform1f(this.textColorLoc, progress ** 0.3);

    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    this.gl.drawElements(
      this.gl.TRIANGLES,
      this.indices.length,
      this.gl.UNSIGNED_SHORT,
      0
    );
  }
}

class BlendPattern {
  constructor(opts) {
    this.rng = getRNG();
    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;

    this.vertInfoA = new Float32Array(
      (this.mesh_width + 1) * (this.mesh_height + 1)
    );
    this.vertInfoC = new Float32Array(
      (this.mesh_width + 1) * (this.mesh_height + 1)
    );

    this.createBlendPattern();
  }

  static resizeMatrixValues(oldMat, oldWidth, oldHeight, newWidth, newHeight) {
    const newMat = new Float32Array((newWidth + 1) * (newHeight + 1));
    let nVert = 0;
    for (let j = 0; j < newHeight + 1; j++) {
      for (let i = 0; i < newWidth + 1; i++) {
        let x = i / newHeight;
        let y = j / newWidth;

        x *= oldWidth + 1;
        y *= oldHeight + 1;
        x = Math.clamp(x, 0, oldWidth - 1);
        y = Math.clamp(y, 0, oldHeight - 1);
        const nx = Math.floor(x);
        const ny = Math.floor(y);
        const dx = x - nx;
        const dy = y - ny;
        const val00 = oldMat[ny * (oldWidth + 1) + nx];
        const val01 = oldMat[ny * (oldWidth + 1) + (nx + 1)];
        const val10 = oldMat[(ny + 1) * (oldWidth + 1) + nx];
        const val11 = oldMat[(ny + 1) * (oldWidth + 1) + (nx + 1)];
        newMat[nVert] =
          val00 * (1 - dx) * (1 - dy) +
          val01 * dx * (1 - dy) +
          val10 * (1 - dx) * dy +
          val11 * dx * dy;

        nVert += 1;
      }
    }

    return newMat;
  }

  updateGlobals(opts) {
    const oldMeshWidth = this.mesh_width;
    const oldMeshHeight = this.mesh_height;

    this.mesh_width = opts.mesh_width;
    this.mesh_height = opts.mesh_height;
    this.aspectx = opts.aspectx;
    this.aspecty = opts.aspecty;

    if (
      this.mesh_width !== oldMeshWidth ||
      this.mesh_height !== oldMeshHeight
    ) {
      this.vertInfoA = BlendPattern.resizeMatrixValues(
        this.vertInfoA,
        oldMeshWidth,
        oldMeshHeight,
        this.mesh_width,
        this.mesh_height
      );
      this.vertInfoC = BlendPattern.resizeMatrixValues(
        this.vertInfoC,
        oldMeshWidth,
        oldMeshHeight,
        this.mesh_width,
        this.mesh_height
      );
    }
  }

  genPlasma(x0, x1, y0, y1, dt) {
    const midx = Math.floor((x0 + x1) / 2);
    const midy = Math.floor((y0 + y1) / 2);
    let t00 = this.vertInfoC[y0 * (this.mesh_width + 1) + x0];
    let t01 = this.vertInfoC[y0 * (this.mesh_width + 1) + x1];
    let t10 = this.vertInfoC[y1 * (this.mesh_width + 1) + x0];
    let t11 = this.vertInfoC[y1 * (this.mesh_width + 1) + x1];

    if (y1 - y0 >= 2) {
      if (x0 === 0) {
        this.vertInfoC[midy * (this.mesh_width + 1) + x0] =
          0.5 * (t00 + t10) + (this.rng.random() * 2 - 1) * dt * this.aspecty;
      }
      this.vertInfoC[midy * (this.mesh_width + 1) + x1] =
        0.5 * (t01 + t11) + (this.rng.random() * 2 - 1) * dt * this.aspecty;
    }
    if (x1 - x0 >= 2) {
      if (y0 === 0) {
        this.vertInfoC[y0 * (this.mesh_width + 1) + midx] =
          0.5 * (t00 + t01) + (this.rng.random() * 2 - 1) * dt * this.aspectx;
      }
      this.vertInfoC[y1 * (this.mesh_width + 1) + midx] =
        0.5 * (t10 + t11) + (this.rng.random() * 2 - 1) * dt * this.aspectx;
    }

    if (y1 - y0 >= 2 && x1 - x0 >= 2) {
      t00 = this.vertInfoC[midy * (this.mesh_width + 1) + x0];
      t01 = this.vertInfoC[midy * (this.mesh_width + 1) + x1];
      t10 = this.vertInfoC[y0 * (this.mesh_width + 1) + midx];
      t11 = this.vertInfoC[y1 * (this.mesh_width + 1) + midx];
      this.vertInfoC[midy * (this.mesh_width + 1) + midx] =
        0.25 * (t10 + t11 + t00 + t01) + (this.rng.random() * 2 - 1) * dt;

      this.genPlasma(x0, midx, y0, midy, dt * 0.5);
      this.genPlasma(midx, x1, y0, midy, dt * 0.5);
      this.genPlasma(x0, midx, midy, y1, dt * 0.5);
      this.genPlasma(midx, x1, midy, y1, dt * 0.5);
    }
  }

  createBlendPattern() {
    const mixType = 1 + Math.floor(this.rng.random() * 3);
    if (mixType === 0) {
      // not currently used
      let nVert = 0;
      for (let y = 0; y <= this.mesh_height; y++) {
        for (let x = 0; x <= this.mesh_width; x++) {
          this.vertInfoA[nVert] = 1;
          this.vertInfoC[nVert] = 0;
          nVert += 1;
        }
      }
    } else if (mixType === 1) {
      const ang = this.rng.random() * 6.28;
      const vx = Math.cos(ang);
      const vy = Math.sin(ang);
      const band = 0.1 + 0.2 * this.rng.random();
      const invBand = 1.0 / band;

      let nVert = 0;
      for (let y = 0; y <= this.mesh_height; y++) {
        const fy = (y / this.mesh_height) * this.aspecty;
        for (let x = 0; x <= this.mesh_width; x++) {
          const fx = (x / this.mesh_width) * this.aspectx;

          let t = (fx - 0.5) * vx + (fy - 0.5) * vy + 0.5;
          t = (t - 0.5) / Math.sqrt(2) + 0.5;

          this.vertInfoA[nVert] = invBand * (1 + band);
          this.vertInfoC[nVert] = -invBand + invBand * t;
          nVert += 1;
        }
      }
    } else if (mixType === 2) {
      const band = 0.12 + 0.13 * this.rng.random();
      const invBand = 1.0 / band;

      this.vertInfoC[0] = this.rng.random();
      this.vertInfoC[this.mesh_width] = this.rng.random();
      this.vertInfoC[this.mesh_height * (this.mesh_width + 1)] = this.rng.random();
      this.vertInfoC[
        this.mesh_height * (this.mesh_width + 1) + this.mesh_width
      ] = this.rng.random();
      this.genPlasma(0, this.mesh_width, 0, this.mesh_height, 0.25);

      let minc = this.vertInfoC[0];
      let maxc = this.vertInfoC[0];

      let nVert = 0;
      for (let y = 0; y <= this.mesh_height; y++) {
        for (let x = 0; x <= this.mesh_width; x++) {
          if (minc > this.vertInfoC[nVert]) {
            minc = this.vertInfoC[nVert];
          }
          if (maxc < this.vertInfoC[nVert]) {
            maxc = this.vertInfoC[nVert];
          }
          nVert += 1;
        }
      }

      const mult = 1.0 / (maxc - minc);
      nVert = 0;
      for (let y = 0; y <= this.mesh_height; y++) {
        for (let x = 0; x <= this.mesh_width; x++) {
          const t = (this.vertInfoC[nVert] - minc) * mult;
          this.vertInfoA[nVert] = invBand * (1 + band);
          this.vertInfoC[nVert] = -invBand + invBand * t;
          nVert += 1;
        }
      }
    } else if (mixType === 3) {
      const band = 0.02 + 0.14 * this.rng.random() + 0.34 * this.rng.random();
      const invBand = 1.0 / band;
      const dir = Math.floor(this.rng.random() * 2) * 2 - 1;

      let nVert = 0;
      for (let y = 0; y <= this.mesh_height; y++) {
        const dy = (y / this.mesh_height - 0.5) * this.aspecty;
        for (let x = 0; x <= this.mesh_width; x++) {
          const dx = (x / this.mesh_width - 0.5) * this.aspectx;
          let t = Math.sqrt(dx * dx + dy * dy) * 1.41421;
          if (dir === -1) {
            t = 1 - t;
          }

          this.vertInfoA[nVert] = invBand * (1 + band);
          this.vertInfoC[nVert] = -invBand + invBand * t;
          nVert += 1;
        }
      }
    }
  }
}

class Renderer {
  constructor(gl, audio, opts) {
    this.gl = gl;
    this.audio = audio;

    this.frameNum = 0;
    this.fps = 30;
    this.time = 0;
    this.presetTime = 0;
    this.lastTime = performance.now();
    this.timeHist = [0];
    this.timeHistMax = 120;
    this.blending = false;
    this.blendStartTime = 0;
    this.blendProgress = 0;
    this.blendDuration = 0;

    this.width = opts.width || 1200;
    this.height = opts.height || 900;
    this.mesh_width = opts.meshWidth || 48;
    this.mesh_height = opts.meshHeight || 36;
    this.pixelRatio = opts.pixelRatio || window.devicePixelRatio || 1;
    this.textureRatio = opts.textureRatio || 1;
    this.outputFXAA = opts.outputFXAA || false;
    this.texsizeX = this.width * this.pixelRatio * this.textureRatio;
    this.texsizeY = this.height * this.pixelRatio * this.textureRatio;
    this.aspectx =
      this.texsizeY > this.texsizeX ? this.texsizeX / this.texsizeY : 1;
    this.aspecty =
      this.texsizeX > this.texsizeY ? this.texsizeY / this.texsizeX : 1;
    this.invAspectx = 1.0 / this.aspectx;
    this.invAspecty = 1.0 / this.aspecty;

    this.qs = Utils.range(1, 33).map((x) => `q${x}`);
    this.ts = Utils.range(1, 9).map((x) => `t${x}`);
    this.regs = Utils.range(0, 100).map((x) => {
      if (x < 10) {
        return `reg0${x}`;
      }
      return `reg${x}`;
    });

    this.blurRatios = [
      [0.5, 0.25],
      [0.125, 0.125],
      [0.0625, 0.0625],
    ];

    this.audioLevels = new AudioLevels(this.audio);

    this.prevFrameBuffer = this.gl.createFramebuffer();
    this.targetFrameBuffer = this.gl.createFramebuffer();
    this.prevTexture = this.gl.createTexture();
    this.targetTexture = this.gl.createTexture();

    this.compFrameBuffer = this.gl.createFramebuffer();
    this.compTexture = this.gl.createTexture();

    this.anisoExt =
      this.gl.getExtension("EXT_texture_filter_anisotropic") ||
      this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
      this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");

    this.bindFrameBufferTexture(this.prevFrameBuffer, this.prevTexture);
    this.bindFrameBufferTexture(this.targetFrameBuffer, this.targetTexture);
    this.bindFrameBufferTexture(this.compFrameBuffer, this.compTexture);

    const params = {
      pixelRatio: this.pixelRatio,
      textureRatio: this.textureRatio,
      texsizeX: this.texsizeX,
      texsizeY: this.texsizeY,
      mesh_width: this.mesh_width,
      mesh_height: this.mesh_height,
      aspectx: this.aspectx,
      aspecty: this.aspecty,
    };
    this.noise = new Noise(gl);
    this.image = new ImageTextures(gl);
    this.warpShader = new WarpShader(gl, this.noise, this.image, params);
    this.compShader = new CompShader(gl, this.noise, this.image, params);
    this.outputShader = new OutputShader(gl, params);
    this.prevWarpShader = new WarpShader(gl, this.noise, this.image, params);
    this.prevCompShader = new CompShader(gl, this.noise, this.image, params);
    this.numBlurPasses = 0;
    this.blurShader1 = new BlurShader(0, this.blurRatios, gl, params);
    this.blurShader2 = new BlurShader(1, this.blurRatios, gl, params);
    this.blurShader3 = new BlurShader(2, this.blurRatios, gl, params);
    this.blurTexture1 = this.blurShader1.blurVerticalTexture;
    this.blurTexture2 = this.blurShader2.blurVerticalTexture;
    this.blurTexture3 = this.blurShader3.blurVerticalTexture;
    this.basicWaveform = new BasicWaveform(gl, params);
    this.customWaveforms = Utils.range(4).map(
      (i) => new CustomWaveform(i, gl, params)
    );
    this.customShapes = Utils.range(4).map(
      (i) => new CustomShape$1(i, gl, params)
    );
    this.prevCustomWaveforms = Utils.range(4).map(
      (i) => new CustomWaveform(i, gl, params)
    );
    this.prevCustomShapes = Utils.range(4).map(
      (i) => new CustomShape$1(i, gl, params)
    );
    this.darkenCenter = new CustomShape(gl, params);
    this.innerBorder = new Border(gl, params);
    this.outerBorder = new Border(gl, params);
    this.motionVectors = new MotionVectors(gl, params);
    this.titleText = new TitleText(gl, params);
    this.blendPattern = new BlendPattern(params);
    this.resampleShader = new ResampleShader(gl);

    this.supertext = {
      startTime: -1,
    };

    this.warpUVs = new Float32Array(
      (this.mesh_width + 1) * (this.mesh_height + 1) * 2
    );
    this.warpColor = new Float32Array(
      (this.mesh_width + 1) * (this.mesh_height + 1) * 4
    );

    this.gl.clearColor(0, 0, 0, 1);

    this.blankPreset = pmap;

    const globalVars = {
      frame: 0,
      time: 0,
      fps: 45,
      bass: 1,
      bass_att: 1,
      mid: 1,
      mid_att: 1,
      treb: 1,
      treb_att: 1,
    };

    this.preset = pmap;
    this.prevPreset = this.preset;
    this.presetEquationRunner = new PresetEquationRunner(
      this.preset,
      globalVars,
      params
    );
    this.prevPresetEquationRunner = new PresetEquationRunner(
      this.prevPreset,
      globalVars,
      params
    );

    if (!this.preset.useWASM) {
      this.regVars = this.presetEquationRunner.mdVSRegs;
    }
  }

  static getHighestBlur(t) {
    if (/sampler_blur3/.test(t)) {
      return 3;
    } else if (/sampler_blur2/.test(t)) {
      return 2;
    } else if (/sampler_blur1/.test(t)) {
      return 1;
    }

    return 0;
  }

  loadPreset(preset, blendTime) {
    this.blendPattern.createBlendPattern();
    this.blending = true;
    this.blendStartTime = this.time;
    this.blendDuration = blendTime;
    this.blendProgress = 0;

    this.prevPresetEquationRunner = this.presetEquationRunner;

    this.prevPreset = this.preset;
    this.preset = preset;

    this.presetTime = this.time;

    const globalVars = {
      frame: this.frameNum,
      time: this.time,
      fps: this.fps,
      bass: this.audioLevels.bass,
      bass_att: this.audioLevels.bass_att,
      mid: this.audioLevels.mid,
      mid_att: this.audioLevels.mid_att,
      treb: this.audioLevels.treb,
      treb_att: this.audioLevels.treb_att,
    };
    const params = {
      pixelRatio: this.pixelRatio,
      textureRatio: this.textureRatio,
      texsizeX: this.texsizeX,
      texsizeY: this.texsizeY,
      mesh_width: this.mesh_width,
      mesh_height: this.mesh_height,
      aspectx: this.aspectx,
      aspecty: this.aspecty,
    };

    if (preset.useWASM) {
      this.preset.globalPools.perFrame.old_wave_mode.value = this.prevPreset.baseVals.wave_mode;
      this.preset.baseVals.old_wave_mode = this.prevPreset.baseVals.wave_mode;
      this.presetEquationRunner = new PresetEquationRunnerWASM(
        this.preset,
        globalVars,
        params
      );
      if (this.preset.pixel_eqs_initialize_array) {
        this.preset.pixel_eqs_initialize_array(
          this.mesh_width,
          this.mesh_height
        );
      }
    } else {
      this.preset.baseVals.old_wave_mode = this.prevPreset.baseVals.wave_mode;
      this.presetEquationRunner = new PresetEquationRunner(
        this.preset,
        globalVars,
        params
      );
      this.regVars = this.presetEquationRunner.mdVSRegs;
    }

    const tmpWarpShader = this.prevWarpShader;
    this.prevWarpShader = this.warpShader;
    this.warpShader = tmpWarpShader;

    const tmpCompShader = this.prevCompShader;
    this.prevCompShader = this.compShader;
    this.compShader = tmpCompShader;

    const warpText = this.preset.warp.trim();
    const compText = this.preset.comp.trim();

    this.warpShader.updateShader(warpText);
    this.compShader.updateShader(compText);

    if (warpText.length === 0) {
      this.numBlurPasses = 0;
    } else {
      this.numBlurPasses = Renderer.getHighestBlur(warpText);
    }

    if (compText.length !== 0) {
      this.numBlurPasses = Math.max(
        this.numBlurPasses,
        Renderer.getHighestBlur(compText)
      );
    }
  }

  loadExtraImages(imageData) {
    this.image.loadExtraImages(imageData);
  }

  setRendererSize(width, height, opts) {
    const oldTexsizeX = this.texsizeX;
    const oldTexsizeY = this.texsizeY;

    this.width = width;
    this.height = height;
    this.mesh_width = opts.meshWidth || this.mesh_width;
    this.mesh_height = opts.meshHeight || this.mesh_height;
    this.pixelRatio = opts.pixelRatio || this.pixelRatio;
    this.textureRatio = opts.textureRatio || this.textureRatio;
    this.texsizeX = width * this.pixelRatio * this.textureRatio;
    this.texsizeY = height * this.pixelRatio * this.textureRatio;
    this.aspectx =
      this.texsizeY > this.texsizeX ? this.texsizeX / this.texsizeY : 1;
    this.aspecty =
      this.texsizeX > this.texsizeY ? this.texsizeY / this.texsizeX : 1;

    if (this.texsizeX !== oldTexsizeX || this.texsizeY !== oldTexsizeY) {
      // copy target texture, because we flip prev/target at start of render
      const targetTextureNew = this.gl.createTexture();
      this.bindFrameBufferTexture(this.targetFrameBuffer, targetTextureNew);
      this.bindFrambufferAndSetViewport(
        this.targetFrameBuffer,
        this.texsizeX,
        this.texsizeY
      );

      this.resampleShader.renderQuadTexture(this.targetTexture);

      this.targetTexture = targetTextureNew;

      this.bindFrameBufferTexture(this.prevFrameBuffer, this.prevTexture);
      this.bindFrameBufferTexture(this.compFrameBuffer, this.compTexture);
    }

    this.updateGlobals();

    // rerender current frame at new size
    if (this.frameNum > 0) {
      this.renderToScreen();
    }
  }

  setInternalMeshSize(width, height) {
    this.mesh_width = width;
    this.mesh_height = height;

    this.updateGlobals();
  }

  setOutputAA(useAA) {
    this.outputFXAA = useAA;
  }

  updateGlobals() {
    const params = {
      pixelRatio: this.pixelRatio,
      textureRatio: this.textureRatio,
      texsizeX: this.texsizeX,
      texsizeY: this.texsizeY,
      mesh_width: this.mesh_width,
      mesh_height: this.mesh_height,
      aspectx: this.aspectx,
      aspecty: this.aspecty,
    };
    this.presetEquationRunner.updateGlobals(params);
    this.prevPresetEquationRunner.updateGlobals(params);
    this.warpShader.updateGlobals(params);
    this.prevWarpShader.updateGlobals(params);
    this.compShader.updateGlobals(params);
    this.prevCompShader.updateGlobals(params);
    this.outputShader.updateGlobals(params);
    this.blurShader1.updateGlobals(params);
    this.blurShader2.updateGlobals(params);
    this.blurShader3.updateGlobals(params);
    this.basicWaveform.updateGlobals(params);
    this.customWaveforms.forEach((wave) => wave.updateGlobals(params));
    this.customShapes.forEach((shape) => shape.updateGlobals(params));
    this.prevCustomWaveforms.forEach((wave) => wave.updateGlobals(params));
    this.prevCustomShapes.forEach((shape) => shape.updateGlobals(params));
    this.darkenCenter.updateGlobals(params);
    this.innerBorder.updateGlobals(params);
    this.outerBorder.updateGlobals(params);
    this.motionVectors.updateGlobals(params);
    this.titleText.updateGlobals(params);
    this.blendPattern.updateGlobals(params);

    this.warpUVs = new Float32Array(
      (this.mesh_width + 1) * (this.mesh_height + 1) * 2
    );
    this.warpColor = new Float32Array(
      (this.mesh_width + 1) * (this.mesh_height + 1) * 4
    );

    if (this.preset.pixel_eqs_initialize_array) {
      this.preset.pixel_eqs_initialize_array(this.mesh_width, this.mesh_height);
    }
  }

  calcTimeAndFPS(elapsedTime) {
    let elapsed;
    if (elapsedTime) {
      elapsed = elapsedTime;
    } else {
      const newTime = performance.now();
      elapsed = (newTime - this.lastTime) / 1000.0;
      if (elapsed > 1.0 || elapsed < 0.0 || this.frame < 2) {
        elapsed = 1.0 / 30.0;
      }
      this.lastTime = newTime;
    }

    this.time += 1.0 / this.fps;

    if (this.blending) {
      this.blendProgress =
        (this.time - this.blendStartTime) / this.blendDuration;
      if (this.blendProgress > 1.0) {
        this.blending = false;
      }
    }

    const newHistTime = this.timeHist[this.timeHist.length - 1] + elapsed;
    this.timeHist.push(newHistTime);
    if (this.timeHist.length > this.timeHistMax) {
      this.timeHist.shift();
    }

    const newFPS = this.timeHist.length / (newHistTime - this.timeHist[0]);
    if (Math.abs(newFPS - this.fps) > 3.0 && this.frame > this.timeHistMax) {
      this.fps = newFPS;
    } else {
      const damping = 0.93;
      this.fps = damping * this.fps + (1.0 - damping) * newFPS;
    }
  }

  runPixelEquations(presetEquationRunner, mdVSFrame, globalVars, blending) {
    const gridX = this.mesh_width;
    const gridZ = this.mesh_height;

    const gridX1 = gridX + 1;
    const gridZ1 = gridZ + 1;

    const warpTimeV = this.time * mdVSFrame.warpanimspeed;
    const warpScaleInv = 1.0 / mdVSFrame.warpscale;

    const warpf0 = 11.68 + 4.0 * Math.cos(warpTimeV * 1.413 + 10);
    const warpf1 = 8.77 + 3.0 * Math.cos(warpTimeV * 1.113 + 7);
    const warpf2 = 10.54 + 3.0 * Math.cos(warpTimeV * 1.233 + 3);
    const warpf3 = 11.49 + 4.0 * Math.cos(warpTimeV * 0.933 + 5);

    const texelOffsetX = 0.0 / this.texsizeX;
    const texelOffsetY = 0.0 / this.texsizeY;

    const aspectx = this.aspectx;
    const aspecty = this.aspecty;

    let offset = 0;
    let offsetColor = 0;
    if (!presetEquationRunner.preset.useWASM) {
      let mdVSVertex = Utils.cloneVars(mdVSFrame);

      let warp = mdVSVertex.warp;
      let zoom = mdVSVertex.zoom;
      let zoomExp = mdVSVertex.zoomexp;
      let cx = mdVSVertex.cx;
      let cy = mdVSVertex.cy;
      let sx = mdVSVertex.sx;
      let sy = mdVSVertex.sy;
      let dx = mdVSVertex.dx;
      let dy = mdVSVertex.dy;
      let rot = mdVSVertex.rot;

      for (let iz = 0; iz < gridZ1; iz++) {
        for (let ix = 0; ix < gridX1; ix++) {
          const x = (ix / gridX) * 2.0 - 1.0;
          const y = (iz / gridZ) * 2.0 - 1.0;
          const rad = Math.sqrt(
            x * x * aspectx * aspectx + y * y * aspecty * aspecty
          );

          if (presetEquationRunner.runVertEQs) {
            let ang;
            if (iz === gridZ / 2 && ix === gridX / 2) {
              ang = 0;
            } else {
              ang = Utils.atan2(y * aspecty, x * aspectx);
            }

            mdVSVertex.x = x * 0.5 * aspectx + 0.5;
            mdVSVertex.y = y * -0.5 * aspecty + 0.5;
            mdVSVertex.rad = rad;
            mdVSVertex.ang = ang;

            mdVSVertex.zoom = mdVSFrame.zoom;
            mdVSVertex.zoomexp = mdVSFrame.zoomexp;
            mdVSVertex.rot = mdVSFrame.rot;
            mdVSVertex.warp = mdVSFrame.warp;
            mdVSVertex.cx = mdVSFrame.cx;
            mdVSVertex.cy = mdVSFrame.cy;
            mdVSVertex.dx = mdVSFrame.dx;
            mdVSVertex.dy = mdVSFrame.dy;
            mdVSVertex.sx = mdVSFrame.sx;
            mdVSVertex.sy = mdVSFrame.sy;

            mdVSVertex = presetEquationRunner.runPixelEquations(mdVSVertex);

            warp = mdVSVertex.warp;
            zoom = mdVSVertex.zoom;
            zoomExp = mdVSVertex.zoomexp;
            cx = mdVSVertex.cx;
            cy = mdVSVertex.cy;
            sx = mdVSVertex.sx;
            sy = mdVSVertex.sy;
            dx = mdVSVertex.dx;
            dy = mdVSVertex.dy;
            rot = mdVSVertex.rot;
          }

          const zoom2V = zoom ** (zoomExp ** (rad * 2.0 - 1.0));
          const zoom2Inv = 1.0 / zoom2V;

          let u = x * 0.5 * aspectx * zoom2Inv + 0.5;
          let v = -y * 0.5 * aspecty * zoom2Inv + 0.5;

          u = (u - cx) / sx + cx;
          v = (v - cy) / sy + cy;

          if (warp !== 0) {
            u +=
              warp *
              0.0035 *
              Math.sin(
                warpTimeV * 0.333 + warpScaleInv * (x * warpf0 - y * warpf3)
              );
            v +=
              warp *
              0.0035 *
              Math.cos(
                warpTimeV * 0.375 - warpScaleInv * (x * warpf2 + y * warpf1)
              );
            u +=
              warp *
              0.0035 *
              Math.cos(
                warpTimeV * 0.753 - warpScaleInv * (x * warpf1 - y * warpf2)
              );
            v +=
              warp *
              0.0035 *
              Math.sin(
                warpTimeV * 0.825 + warpScaleInv * (x * warpf0 + y * warpf3)
              );
          }

          const u2 = u - cx;
          const v2 = v - cy;

          const cosRot = Math.cos(rot);
          const sinRot = Math.sin(rot);
          u = u2 * cosRot - v2 * sinRot + cx;
          v = u2 * sinRot + v2 * cosRot + cy;

          u -= dx;
          v -= dy;

          u = (u - 0.5) / aspectx + 0.5;
          v = (v - 0.5) / aspecty + 0.5;

          u += texelOffsetX;
          v += texelOffsetY;

          if (!blending) {
            this.warpUVs[offset] = u;
            this.warpUVs[offset + 1] = v;

            this.warpColor[offsetColor + 0] = 1;
            this.warpColor[offsetColor + 1] = 1;
            this.warpColor[offsetColor + 2] = 1;
            this.warpColor[offsetColor + 3] = 1;
          } else {
            let mix2 =
              this.blendPattern.vertInfoA[offset / 2] * this.blendProgress +
              this.blendPattern.vertInfoC[offset / 2];
            mix2 = Math.clamp(mix2, 0, 1);

            this.warpUVs[offset] = this.warpUVs[offset] * mix2 + u * (1 - mix2);
            this.warpUVs[offset + 1] =
              this.warpUVs[offset + 1] * mix2 + v * (1 - mix2);

            this.warpColor[offsetColor + 0] = 1;
            this.warpColor[offsetColor + 1] = 1;
            this.warpColor[offsetColor + 2] = 1;
            this.warpColor[offsetColor + 3] = mix2;
          }

          offset += 2;
          offsetColor += 4;
        }
      }

      this.mdVSVertex = mdVSVertex;
    } else {
      const varPool = presetEquationRunner.preset.globalPools.perVertex;

      Utils.setWasm(varPool, globalVars, presetEquationRunner.globalKeys);
      Utils.setWasm(
        varPool,
        presetEquationRunner.mdVSQAfterFrame,
        presetEquationRunner.qs
      );

      varPool.zoom.value = mdVSFrame.zoom;
      varPool.zoomexp.value = mdVSFrame.zoomexp;
      varPool.rot.value = mdVSFrame.rot;
      varPool.warp.value = mdVSFrame.warp;
      varPool.cx.value = mdVSFrame.cx;
      varPool.cy.value = mdVSFrame.cy;
      varPool.dx.value = mdVSFrame.dx;
      varPool.dy.value = mdVSFrame.dy;
      varPool.sx.value = mdVSFrame.sx;
      varPool.sy.value = mdVSFrame.sy;

      presetEquationRunner.preset.pixel_eqs_wasm(
        presetEquationRunner.runVertEQs,
        this.mesh_width,
        this.mesh_height,
        this.time,
        mdVSFrame.warpanimspeed,
        mdVSFrame.warpscale,
        this.aspectx,
        this.aspecty
      );

      if (!blending) {
        this.warpUVs = presetEquationRunner.preset.pixel_eqs_get_array();
        this.warpColor.fill(1);
      } else {
        const newWarpUVs = presetEquationRunner.preset.pixel_eqs_get_array();

        let offset = 0;
        let offsetColor = 0;
        for (let iz = 0; iz < gridZ1; iz++) {
          for (let ix = 0; ix < gridX1; ix++) {
            const u = newWarpUVs[offset];
            const v = newWarpUVs[offset + 1];

            let mix2 =
              this.blendPattern.vertInfoA[offset / 2] * this.blendProgress +
              this.blendPattern.vertInfoC[offset / 2];
            mix2 = Math.clamp(mix2, 0, 1);

            this.warpUVs[offset] = this.warpUVs[offset] * mix2 + u * (1 - mix2);
            this.warpUVs[offset + 1] =
              this.warpUVs[offset + 1] * mix2 + v * (1 - mix2);

            this.warpColor[offsetColor + 0] = 1;
            this.warpColor[offsetColor + 1] = 1;
            this.warpColor[offsetColor + 2] = 1;
            this.warpColor[offsetColor + 3] = mix2;

            offset += 2;
            offsetColor += 4;
          }
        }
      }
    }
  }

  static mixFrameEquations(blendProgress, mdVSFrame, mdVSFramePrev) {
    const mix = 0.5 - 0.5 * Math.cos(blendProgress * Math.PI);
    const mix2 = 1 - mix;
    const snapPoint = 0.5;

    const mixedFrame = Utils.cloneVars(mdVSFrame);

    mixedFrame.decay = mix * mdVSFrame.decay + mix2 * mdVSFramePrev.decay;
    mixedFrame.wave_a = mix * mdVSFrame.wave_a + mix2 * mdVSFramePrev.wave_a;
    mixedFrame.wave_r = mix * mdVSFrame.wave_r + mix2 * mdVSFramePrev.wave_r;
    mixedFrame.wave_g = mix * mdVSFrame.wave_g + mix2 * mdVSFramePrev.wave_g;
    mixedFrame.wave_b = mix * mdVSFrame.wave_b + mix2 * mdVSFramePrev.wave_b;
    mixedFrame.wave_x = mix * mdVSFrame.wave_x + mix2 * mdVSFramePrev.wave_x;
    mixedFrame.wave_y = mix * mdVSFrame.wave_y + mix2 * mdVSFramePrev.wave_y;
    mixedFrame.wave_mystery =
      mix * mdVSFrame.wave_mystery + mix2 * mdVSFramePrev.wave_mystery;
    mixedFrame.ob_size = mix * mdVSFrame.ob_size + mix2 * mdVSFramePrev.ob_size;
    mixedFrame.ob_r = mix * mdVSFrame.ob_r + mix2 * mdVSFramePrev.ob_r;
    mixedFrame.ob_g = mix * mdVSFrame.ob_g + mix2 * mdVSFramePrev.ob_g;
    mixedFrame.ob_b = mix * mdVSFrame.ob_b + mix2 * mdVSFramePrev.ob_b;
    mixedFrame.ob_a = mix * mdVSFrame.ob_a + mix2 * mdVSFramePrev.ob_a;
    mixedFrame.ib_size = mix * mdVSFrame.ib_size + mix2 * mdVSFramePrev.ib_size;
    mixedFrame.ib_r = mix * mdVSFrame.ib_r + mix2 * mdVSFramePrev.ib_r;
    mixedFrame.ib_g = mix * mdVSFrame.ib_g + mix2 * mdVSFramePrev.ib_g;
    mixedFrame.ib_b = mix * mdVSFrame.ib_b + mix2 * mdVSFramePrev.ib_b;
    mixedFrame.ib_a = mix * mdVSFrame.ib_a + mix2 * mdVSFramePrev.ib_a;
    mixedFrame.mv_x = mix * mdVSFrame.mv_x + mix2 * mdVSFramePrev.mv_x;
    mixedFrame.mv_y = mix * mdVSFrame.mv_y + mix2 * mdVSFramePrev.mv_y;
    mixedFrame.mv_dx = mix * mdVSFrame.mv_dx + mix2 * mdVSFramePrev.mv_dx;
    mixedFrame.mv_dy = mix * mdVSFrame.mv_dy + mix2 * mdVSFramePrev.mv_dy;
    mixedFrame.mv_l = mix * mdVSFrame.mv_l + mix2 * mdVSFramePrev.mv_l;
    mixedFrame.mv_r = mix * mdVSFrame.mv_r + mix2 * mdVSFramePrev.mv_r;
    mixedFrame.mv_g = mix * mdVSFrame.mv_g + mix2 * mdVSFramePrev.mv_g;
    mixedFrame.mv_b = mix * mdVSFrame.mv_b + mix2 * mdVSFramePrev.mv_b;
    mixedFrame.mv_a = mix * mdVSFrame.mv_a + mix2 * mdVSFramePrev.mv_a;
    mixedFrame.echo_zoom =
      mix * mdVSFrame.echo_zoom + mix2 * mdVSFramePrev.echo_zoom;
    mixedFrame.echo_alpha =
      mix * mdVSFrame.echo_alpha + mix2 * mdVSFramePrev.echo_alpha;
    mixedFrame.echo_orient =
      mix * mdVSFrame.echo_orient + mix2 * mdVSFramePrev.echo_orient;
    mixedFrame.wave_dots =
      mix < snapPoint ? mdVSFramePrev.wave_dots : mdVSFrame.wave_dots;
    mixedFrame.wave_thick =
      mix < snapPoint ? mdVSFramePrev.wave_thick : mdVSFrame.wave_thick;
    mixedFrame.additivewave =
      mix < snapPoint ? mdVSFramePrev.additivewave : mdVSFrame.additivewave;
    mixedFrame.wave_brighten =
      mix < snapPoint ? mdVSFramePrev.wave_brighten : mdVSFrame.wave_brighten;
    mixedFrame.darken_center =
      mix < snapPoint ? mdVSFramePrev.darken_center : mdVSFrame.darken_center;
    mixedFrame.gammaadj =
      mix < snapPoint ? mdVSFramePrev.gammaadj : mdVSFrame.gammaadj;
    mixedFrame.wrap = mix < snapPoint ? mdVSFramePrev.wrap : mdVSFrame.wrap;
    mixedFrame.invert =
      mix < snapPoint ? mdVSFramePrev.invert : mdVSFrame.invert;
    mixedFrame.brighten =
      mix < snapPoint ? mdVSFramePrev.brighten : mdVSFrame.brighten;
    mixedFrame.darken =
      mix < snapPoint ? mdVSFramePrev.darken : mdVSFrame.darken;
    mixedFrame.solarize =
      mix < snapPoint ? mdVSFramePrev.brighten : mdVSFrame.solarize;
    mixedFrame.b1n = mix * mdVSFrame.b1n + mix2 * mdVSFramePrev.b1n;
    mixedFrame.b2n = mix * mdVSFrame.b2n + mix2 * mdVSFramePrev.b2n;
    mixedFrame.b3n = mix * mdVSFrame.b3n + mix2 * mdVSFramePrev.b3n;
    mixedFrame.b1x = mix * mdVSFrame.b1x + mix2 * mdVSFramePrev.b1x;
    mixedFrame.b2x = mix * mdVSFrame.b2x + mix2 * mdVSFramePrev.b2x;
    mixedFrame.b3x = mix * mdVSFrame.b3x + mix2 * mdVSFramePrev.b3x;
    mixedFrame.b1ed = mix * mdVSFrame.b1ed + mix2 * mdVSFramePrev.b1ed;

    return mixedFrame;
  }

  static getBlurValues(mdVSFrame) {
    let blurMin1 = mdVSFrame.b1n;
    let blurMin2 = mdVSFrame.b2n;
    let blurMin3 = mdVSFrame.b3n;
    let blurMax1 = mdVSFrame.b1x;
    let blurMax2 = mdVSFrame.b2x;
    let blurMax3 = mdVSFrame.b3x;

    const fMinDist = 0.1;
    if (blurMax1 - blurMin1 < fMinDist) {
      const avg = (blurMin1 + blurMax1) * 0.5;
      blurMin1 = avg - fMinDist * 0.5;
      blurMax1 = avg - fMinDist * 0.5;
    }
    blurMax2 = Math.min(blurMax1, blurMax2);
    blurMin2 = Math.max(blurMin1, blurMin2);
    if (blurMax2 - blurMin2 < fMinDist) {
      const avg = (blurMin2 + blurMax2) * 0.5;
      blurMin2 = avg - fMinDist * 0.5;
      blurMax2 = avg - fMinDist * 0.5;
    }
    blurMax3 = Math.min(blurMax2, blurMax3);
    blurMin3 = Math.max(blurMin2, blurMin3);
    if (blurMax3 - blurMin3 < fMinDist) {
      const avg = (blurMin3 + blurMax3) * 0.5;
      blurMin3 = avg - fMinDist * 0.5;
      blurMax3 = avg - fMinDist * 0.5;
    }

    return {
      blurMins: [blurMin1, blurMin2, blurMin3],
      blurMaxs: [blurMax1, blurMax2, blurMax3],
    };
  }

  bindFrambufferAndSetViewport(fb, width, height) {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, fb);
    this.gl.viewport(0, 0, width, height);
  }

  bindFrameBufferTexture(targetFrameBuffer, targetTexture) {
    this.gl.bindTexture(this.gl.TEXTURE_2D, targetTexture);

    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      this.texsizeX,
      this.texsizeY,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      new Uint8Array(this.texsizeX * this.texsizeY * 4)
    );

    this.gl.generateMipmap(this.gl.TEXTURE_2D);

    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.CLAMP_TO_EDGE
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.CLAMP_TO_EDGE
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR_MIPMAP_LINEAR
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.LINEAR
    );
    if (this.anisoExt) {
      const max = this.gl.getParameter(
        this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT
      );
      this.gl.texParameterf(
        this.gl.TEXTURE_2D,
        this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,
        max
      );
    }

    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, targetFrameBuffer);
    this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.COLOR_ATTACHMENT0,
      this.gl.TEXTURE_2D,
      targetTexture,
      0
    );
  }

  render({ audioLevels, sensorLevels, elapsedTime } = {}) {
    this.calcTimeAndFPS(elapsedTime);
    this.frameNum += 1;

    if (audioLevels) {
      this.audio.updateAudio(
        audioLevels.timeByteArray,
        audioLevels.timeByteArrayL,
        audioLevels.timeByteArrayR
      );
    } else {
      this.audio.sampleAudio();
    }
    this.audioLevels.updateAudioLevels(this.fps, this.frameNum);

    if (sensorLevels) {
      this.applySensorLevelOverrides(sensorLevels);
    }

    const globalVars = {
      frame: this.frameNum,
      time: this.time,
      fps: this.fps,
      bass: this.audioLevels.bass,
      bass_att: this.audioLevels.bass_att,
      mid: this.audioLevels.mid,
      mid_att: this.audioLevels.mid_att,
      treb: this.audioLevels.treb,
      treb_att: this.audioLevels.treb_att,
      meshx: this.mesh_width,
      meshy: this.mesh_height,
      aspectx: this.invAspectx,
      aspecty: this.invAspecty,
      pixelsx: this.texsizeX,
      pixelsy: this.texsizeY,
    };

    const prevGlobalVars = Object.assign({}, globalVars);
    if (!this.prevPreset.useWASM) {
      prevGlobalVars.gmegabuf = this.prevPresetEquationRunner.gmegabuf;
    }

    if (!this.preset.useWASM) {
      globalVars.gmegabuf = this.presetEquationRunner.gmegabuf;
      Object.assign(globalVars, this.regVars);
    }

    const mdVSFrame = this.presetEquationRunner.runFrameEquations(globalVars);

    this.runPixelEquations(
      this.presetEquationRunner,
      mdVSFrame,
      globalVars,
      false
    );

    if (!this.preset.useWASM) {
      Object.assign(this.regVars, Utils.pick(this.mdVSVertex, this.regs));
      Object.assign(globalVars, this.regVars);
    }

    let mdVSFrameMixed;
    if (this.blending) {
      this.prevMDVSFrame = this.prevPresetEquationRunner.runFrameEquations(
        prevGlobalVars
      );
      this.runPixelEquations(
        this.prevPresetEquationRunner,
        this.prevMDVSFrame,
        prevGlobalVars,
        true
      );

      mdVSFrameMixed = Renderer.mixFrameEquations(
        this.blendProgress,
        mdVSFrame,
        this.prevMDVSFrame
      );
    } else {
      mdVSFrameMixed = mdVSFrame;
    }

    const swapTexture = this.targetTexture;
    this.targetTexture = this.prevTexture;
    this.prevTexture = swapTexture;

    const swapFrameBuffer = this.targetFrameBuffer;
    this.targetFrameBuffer = this.prevFrameBuffer;
    this.prevFrameBuffer = swapFrameBuffer;

    this.gl.bindTexture(this.gl.TEXTURE_2D, this.prevTexture);
    this.gl.generateMipmap(this.gl.TEXTURE_2D);

    this.bindFrambufferAndSetViewport(
      this.targetFrameBuffer,
      this.texsizeX,
      this.texsizeY
    );

    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.enable(this.gl.BLEND);
    this.gl.blendEquation(this.gl.FUNC_ADD);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    const { blurMins, blurMaxs } = Renderer.getBlurValues(mdVSFrameMixed);

    if (!this.blending) {
      this.warpShader.renderQuadTexture(
        false,
        this.prevTexture,
        this.blurTexture1,
        this.blurTexture2,
        this.blurTexture3,
        blurMins,
        blurMaxs,
        mdVSFrame,
        this.presetEquationRunner.mdVSQAfterFrame,
        this.warpUVs,
        this.warpColor
      );
    } else {
      this.prevWarpShader.renderQuadTexture(
        false,
        this.prevTexture,
        this.blurTexture1,
        this.blurTexture2,
        this.blurTexture3,
        blurMins,
        blurMaxs,
        this.prevMDVSFrame,
        this.prevPresetEquationRunner.mdVSQAfterFrame,
        this.warpUVs,
        this.warpColor
      );

      this.warpShader.renderQuadTexture(
        true,
        this.prevTexture,
        this.blurTexture1,
        this.blurTexture2,
        this.blurTexture3,
        blurMins,
        blurMaxs,
        mdVSFrameMixed,
        this.presetEquationRunner.mdVSQAfterFrame,
        this.warpUVs,
        this.warpColor
      );
    }

    if (this.numBlurPasses > 0) {
      this.blurShader1.renderBlurTexture(
        this.targetTexture,
        mdVSFrame,
        blurMins,
        blurMaxs
      );

      if (this.numBlurPasses > 1) {
        this.blurShader2.renderBlurTexture(
          this.blurTexture1,
          mdVSFrame,
          blurMins,
          blurMaxs
        );

        if (this.numBlurPasses > 2) {
          this.blurShader3.renderBlurTexture(
            this.blurTexture2,
            mdVSFrame,
            blurMins,
            blurMaxs
          );
        }
      }

      // rebind target texture framebuffer
      this.bindFrambufferAndSetViewport(
        this.targetFrameBuffer,
        this.texsizeX,
        this.texsizeY
      );
    }

    this.motionVectors.drawMotionVectors(mdVSFrameMixed, this.warpUVs);

    if (this.preset.shapes && this.preset.shapes.length > 0) {
      this.customShapes.forEach((shape, i) => {
        shape.drawCustomShape(
          this.blending ? this.blendProgress : 1,
          globalVars,
          this.presetEquationRunner,
          this.preset.shapes[i],
          this.prevTexture
        );
      });
    }

    if (this.preset.waves && this.preset.waves.length > 0) {
      this.customWaveforms.forEach((waveform, i) => {
        waveform.drawCustomWaveform(
          this.blending ? this.blendProgress : 1,
          this.audio.timeArrayL,
          this.audio.timeArrayR,
          this.audio.freqArrayL,
          this.audio.freqArrayR,
          globalVars,
          this.presetEquationRunner,
          this.preset.waves[i]
        );
      });
    }

    if (this.blending) {
      if (this.prevPreset.shapes && this.prevPreset.shapes.length > 0) {
        this.prevCustomShapes.forEach((shape, i) => {
          shape.drawCustomShape(
            1.0 - this.blendProgress,
            prevGlobalVars,
            this.prevPresetEquationRunner,
            this.prevPreset.shapes[i],
            this.prevTexture
          );
        });
      }

      if (this.prevPreset.waves && this.prevPreset.waves.length > 0) {
        this.prevCustomWaveforms.forEach((waveform, i) => {
          waveform.drawCustomWaveform(
            1.0 - this.blendProgress,
            this.audio.timeArrayL,
            this.audio.timeArrayR,
            this.audio.freqArrayL,
            this.audio.freqArrayR,
            prevGlobalVars,
            this.prevPresetEquationRunner,
            this.prevPreset.waves[i]
          );
        });
      }
    }

    this.basicWaveform.drawBasicWaveform(
      this.blending,
      this.blendProgress,
      this.audio.timeArrayL,
      this.audio.timeArrayR,
      mdVSFrameMixed
    );

    this.darkenCenter.drawDarkenCenter(mdVSFrameMixed);

    const outerColor = [
      mdVSFrameMixed.ob_r,
      mdVSFrameMixed.ob_g,
      mdVSFrameMixed.ob_b,
      mdVSFrameMixed.ob_a,
    ];
    this.outerBorder.drawBorder(outerColor, mdVSFrameMixed.ob_size, 0);

    const innerColor = [
      mdVSFrameMixed.ib_r,
      mdVSFrameMixed.ib_g,
      mdVSFrameMixed.ib_b,
      mdVSFrameMixed.ib_a,
    ];
    this.innerBorder.drawBorder(
      innerColor,
      mdVSFrameMixed.ib_size,
      mdVSFrameMixed.ob_size
    );

    if (this.supertext.startTime >= 0) {
      const progress =
        (this.time - this.supertext.startTime) / this.supertext.duration;
      if (progress >= 1) {
        this.titleText.renderTitle(progress, true, globalVars);
      }
    }

    // Store variables in case we need to rerender
    this.globalVars = globalVars;
    this.mdVSFrame = mdVSFrame;
    this.mdVSFrameMixed = mdVSFrameMixed;

    this.renderToScreen();
  }

  applySensorLevelOverrides(sensorLevels) {
    const { bass, bass_att, mid, mid_att, treb, treb_att } = sensorLevels;
    const { val, att } = this.audioLevels;

    if (Number.isFinite(bass)) {
      val[0] = bass;
    }
    if (Number.isFinite(bass_att)) {
      att[0] = bass_att;
    }
    if (Number.isFinite(mid)) {
      val[1] = mid;
    }
    if (Number.isFinite(mid_att)) {
      att[1] = mid_att;
    }
    if (Number.isFinite(treb)) {
      val[2] = treb;
    }
    if (Number.isFinite(treb_att)) {
      att[2] = treb_att;
    }
  }

  renderToScreen() {
    if (this.outputFXAA) {
      this.bindFrambufferAndSetViewport(
        this.compFrameBuffer,
        this.texsizeX,
        this.texsizeY
      );
    } else {
      this.bindFrambufferAndSetViewport(null, this.width, this.height);
    }

    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.enable(this.gl.BLEND);
    this.gl.blendEquation(this.gl.FUNC_ADD);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    const { blurMins, blurMaxs } = Renderer.getBlurValues(this.mdVSFrameMixed);

    if (!this.blending) {
      this.compShader.renderQuadTexture(
        false,
        this.targetTexture,
        this.blurTexture1,
        this.blurTexture2,
        this.blurTexture3,
        blurMins,
        blurMaxs,
        this.mdVSFrame,
        this.presetEquationRunner.mdVSQAfterFrame,
        this.warpColor
      );
    } else {
      this.prevCompShader.renderQuadTexture(
        false,
        this.targetTexture,
        this.blurTexture1,
        this.blurTexture2,
        this.blurTexture3,
        blurMins,
        blurMaxs,
        this.prevMDVSFrame,
        this.prevPresetEquationRunner.mdVSQAfterFrame,
        this.warpColor
      );

      this.compShader.renderQuadTexture(
        true,
        this.targetTexture,
        this.blurTexture1,
        this.blurTexture2,
        this.blurTexture3,
        blurMins,
        blurMaxs,
        this.mdVSFrameMixed,
        this.presetEquationRunner.mdVSQAfterFrame,
        this.warpColor
      );
    }

    if (this.supertext.startTime >= 0) {
      const progress =
        (this.time - this.supertext.startTime) / this.supertext.duration;
      this.titleText.renderTitle(progress, false, this.globalVars);

      if (progress >= 1) {
        this.supertext.startTime = -1;
      }
    }

    if (this.outputFXAA) {
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.compTexture);
      this.gl.generateMipmap(this.gl.TEXTURE_2D);

      this.bindFrambufferAndSetViewport(null, this.width, this.height);
      this.outputShader.renderQuadTexture(this.compTexture);
    }
  }

  launchSongTitleAnim(text) {
    this.supertext = {
      startTime: this.time,
      duration: 1.7,
    };
    this.titleText.generateTitleTexture(text);
  }

  toDataURL() {
    const data = new Uint8Array(this.texsizeX * this.texsizeY * 4);

    const compFrameBuffer = this.gl.createFramebuffer();
    const compTexture = this.gl.createTexture();

    this.bindFrameBufferTexture(compFrameBuffer, compTexture);

    const { blurMins, blurMaxs } = Renderer.getBlurValues(this.mdVSFrameMixed);
    this.compShader.renderQuadTexture(
      false,
      this.targetTexture,
      this.blurTexture1,
      this.blurTexture2,
      this.blurTexture3,
      blurMins,
      blurMaxs,
      this.mdVSFrame,
      this.presetEquationRunner.mdVSQAfterFrame,
      this.warpColor
    );

    this.gl.readPixels(
      0,
      0,
      this.texsizeX,
      this.texsizeY,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      data
    );

    // flip data
    Array.from({ length: this.texsizeY }, (val, i) =>
      data.slice(i * this.texsizeX * 4, (i + 1) * this.texsizeX * 4)
    ).forEach((val, i) =>
      data.set(val, (this.texsizeY - i - 1) * this.texsizeX * 4)
    );

    const canvas = document.createElement("canvas");
    canvas.width = this.texsizeX;
    canvas.height = this.texsizeY;

    const context = canvas.getContext("2d", { willReadFrequently: false });
    const imageData = context.createImageData(this.texsizeX, this.texsizeY);
    imageData.data.set(data);
    context.putImageData(imageData, 0, 0);

    this.gl.deleteTexture(compTexture);
    this.gl.deleteFramebuffer(compFrameBuffer);

    return canvas.toDataURL();
  }

  warpBufferToDataURL() {
    const data = new Uint8Array(this.texsizeX * this.texsizeY * 4);

    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.targetFrameBuffer);
    this.gl.readPixels(
      0,
      0,
      this.texsizeX,
      this.texsizeY,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      data
    );

    const canvas = document.createElement("canvas");
    canvas.width = this.texsizeX;
    canvas.height = this.texsizeY;

    const context = canvas.getContext("2d", { willReadFrequently: false });
    const imageData = context.createImageData(this.texsizeX, this.texsizeY);
    imageData.data.set(data);
    context.putImageData(imageData, 0, 0);

    return canvas.toDataURL();
  }
}

var data = "AGFzbQEAAAABPQpgAABgAXwBfGACfHwBfGACf38AYAR/f39/AGAJf39/f3x8fHx8AGADf399AGABfwF/YAJ/fwF/YAF+AX8CuBWMAQNlbnYFYWJvcnQABAhwaXhlbEVxcwtwZXJQaXhlbEVxcwAADHBpeGVsVmFyUG9vbAR3YXJwA3wBDHBpeGVsVmFyUG9vbAR6b29tA3wBDHBpeGVsVmFyUG9vbAd6b29tZXhwA3wBDHBpeGVsVmFyUG9vbAJjeAN8AQxwaXhlbFZhclBvb2wCY3kDfAEMcGl4ZWxWYXJQb29sAnN4A3wBDHBpeGVsVmFyUG9vbAJzeQN8AQxwaXhlbFZhclBvb2wCZHgDfAEMcGl4ZWxWYXJQb29sAmR5A3wBDHBpeGVsVmFyUG9vbANyb3QDfAEMcGl4ZWxWYXJQb29sA3JhZAN8AQxwaXhlbFZhclBvb2wDYW5nA3wBDHBpeGVsVmFyUG9vbAF4A3wBDHBpeGVsVmFyUG9vbAF5A3wBCHFWYXJQb29sAnExA3wBCHFWYXJQb29sAnEyA3wBCHFWYXJQb29sAnEzA3wBCHFWYXJQb29sAnE0A3wBCHFWYXJQb29sAnE1A3wBCHFWYXJQb29sAnE2A3wBCHFWYXJQb29sAnE3A3wBCHFWYXJQb29sAnE4A3wBCHFWYXJQb29sAnE5A3wBCHFWYXJQb29sA3ExMAN8AQhxVmFyUG9vbANxMTEDfAEIcVZhclBvb2wDcTEyA3wBCHFWYXJQb29sA3ExMwN8AQhxVmFyUG9vbANxMTQDfAEIcVZhclBvb2wDcTE1A3wBCHFWYXJQb29sA3ExNgN8AQhxVmFyUG9vbANxMTcDfAEIcVZhclBvb2wDcTE4A3wBCHFWYXJQb29sA3ExOQN8AQhxVmFyUG9vbANxMjADfAEIcVZhclBvb2wDcTIxA3wBCHFWYXJQb29sA3EyMgN8AQhxVmFyUG9vbANxMjMDfAEIcVZhclBvb2wDcTI0A3wBCHFWYXJQb29sA3EyNQN8AQhxVmFyUG9vbANxMjYDfAEIcVZhclBvb2wDcTI3A3wBCHFWYXJQb29sA3EyOAN8AQhxVmFyUG9vbANxMjkDfAEIcVZhclBvb2wDcTMwA3wBCHFWYXJQb29sA3EzMQN8AQhxVmFyUG9vbANxMzIDfAEIdFZhclBvb2wCdDEDfAEIdFZhclBvb2wCdDIDfAEIdFZhclBvb2wCdDMDfAEIdFZhclBvb2wCdDQDfAEIdFZhclBvb2wCdDUDfAEIdFZhclBvb2wCdDYDfAEIdFZhclBvb2wCdDcDfAEIdFZhclBvb2wCdDgDfAEKc2hhcGVQb29sMAN4XzADfAEKc2hhcGVQb29sMAN5XzADfAEKc2hhcGVQb29sMAVyYWRfMAN8AQpzaGFwZVBvb2wwBWFuZ18wA3wBCnNoYXBlUG9vbDADcl8wA3wBCnNoYXBlUG9vbDADZ18wA3wBCnNoYXBlUG9vbDADYl8wA3wBCnNoYXBlUG9vbDADYV8wA3wBCnNoYXBlUG9vbDAEcjJfMAN8AQpzaGFwZVBvb2wwBGcyXzADfAEKc2hhcGVQb29sMARiMl8wA3wBCnNoYXBlUG9vbDAEYTJfMAN8AQpzaGFwZVBvb2wwCmJvcmRlcl9yXzADfAEKc2hhcGVQb29sMApib3JkZXJfZ18wA3wBCnNoYXBlUG9vbDAKYm9yZGVyX2JfMAN8AQpzaGFwZVBvb2wwCmJvcmRlcl9hXzADfAEKc2hhcGVQb29sMA50aGlja291dGxpbmVfMAN8AQpzaGFwZVBvb2wwCnRleHR1cmVkXzADfAEKc2hhcGVQb29sMAp0ZXhfem9vbV8wA3wBCnNoYXBlUG9vbDAJdGV4X2FuZ18wA3wBCnNoYXBlUG9vbDAKYWRkaXRpdmVfMAN8AQpzaGFwZVBvb2wxA3hfMQN8AQpzaGFwZVBvb2wxA3lfMQN8AQpzaGFwZVBvb2wxBXJhZF8xA3wBCnNoYXBlUG9vbDEFYW5nXzEDfAEKc2hhcGVQb29sMQNyXzEDfAEKc2hhcGVQb29sMQNnXzEDfAEKc2hhcGVQb29sMQNiXzEDfAEKc2hhcGVQb29sMQNhXzEDfAEKc2hhcGVQb29sMQRyMl8xA3wBCnNoYXBlUG9vbDEEZzJfMQN8AQpzaGFwZVBvb2wxBGIyXzEDfAEKc2hhcGVQb29sMQRhMl8xA3wBCnNoYXBlUG9vbDEKYm9yZGVyX3JfMQN8AQpzaGFwZVBvb2wxCmJvcmRlcl9nXzEDfAEKc2hhcGVQb29sMQpib3JkZXJfYl8xA3wBCnNoYXBlUG9vbDEKYm9yZGVyX2FfMQN8AQpzaGFwZVBvb2wxDnRoaWNrb3V0bGluZV8xA3wBCnNoYXBlUG9vbDEKdGV4dHVyZWRfMQN8AQpzaGFwZVBvb2wxCnRleF96b29tXzEDfAEKc2hhcGVQb29sMQl0ZXhfYW5nXzEDfAEKc2hhcGVQb29sMQphZGRpdGl2ZV8xA3wBCnNoYXBlUG9vbDIDeF8yA3wBCnNoYXBlUG9vbDIDeV8yA3wBCnNoYXBlUG9vbDIFcmFkXzIDfAEKc2hhcGVQb29sMgVhbmdfMgN8AQpzaGFwZVBvb2wyA3JfMgN8AQpzaGFwZVBvb2wyA2dfMgN8AQpzaGFwZVBvb2wyA2JfMgN8AQpzaGFwZVBvb2wyA2FfMgN8AQpzaGFwZVBvb2wyBHIyXzIDfAEKc2hhcGVQb29sMgRnMl8yA3wBCnNoYXBlUG9vbDIEYjJfMgN8AQpzaGFwZVBvb2wyBGEyXzIDfAEKc2hhcGVQb29sMgpib3JkZXJfcl8yA3wBCnNoYXBlUG9vbDIKYm9yZGVyX2dfMgN8AQpzaGFwZVBvb2wyCmJvcmRlcl9iXzIDfAEKc2hhcGVQb29sMgpib3JkZXJfYV8yA3wBCnNoYXBlUG9vbDIOdGhpY2tvdXRsaW5lXzIDfAEKc2hhcGVQb29sMgp0ZXh0dXJlZF8yA3wBCnNoYXBlUG9vbDIKdGV4X3pvb21fMgN8AQpzaGFwZVBvb2wyCXRleF9hbmdfMgN8AQpzaGFwZVBvb2wyCmFkZGl0aXZlXzIDfAEKc2hhcGVQb29sMwN4XzMDfAEKc2hhcGVQb29sMwN5XzMDfAEKc2hhcGVQb29sMwVyYWRfMwN8AQpzaGFwZVBvb2wzBWFuZ18zA3wBCnNoYXBlUG9vbDMDcl8zA3wBCnNoYXBlUG9vbDMDZ18zA3wBCnNoYXBlUG9vbDMDYl8zA3wBCnNoYXBlUG9vbDMDYV8zA3wBCnNoYXBlUG9vbDMEcjJfMwN8AQpzaGFwZVBvb2wzBGcyXzMDfAEKc2hhcGVQb29sMwRiMl8zA3wBCnNoYXBlUG9vbDMEYTJfMwN8AQpzaGFwZVBvb2wzCmJvcmRlcl9yXzMDfAEKc2hhcGVQb29sMwpib3JkZXJfZ18zA3wBCnNoYXBlUG9vbDMKYm9yZGVyX2JfMwN8AQpzaGFwZVBvb2wzCmJvcmRlcl9hXzMDfAEKc2hhcGVQb29sMw50aGlja291dGxpbmVfMwN8AQpzaGFwZVBvb2wzCnRleHR1cmVkXzMDfAEKc2hhcGVQb29sMwp0ZXhfem9vbV8zA3wBCnNoYXBlUG9vbDMJdGV4X2FuZ18zA3wBCnNoYXBlUG9vbDMKYWRkaXRpdmVfMwN8AQMZGAgDBwkBAQICAQYFAAAAAAAAAAAAAAAAAAUDAQABBuwMigF8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt/AUEAC3wBRAAAAAAAAAAAC3wBRAAAAAAAAAAAC34BQgALB9kB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";
var loadPresetFunctionsBuffer = () => data;

class Visualizer {
  constructor(audioContext, canvas, opts) {
    this.opts = opts;

    // Initialize RNG context
    this.rng = initializeRNG(opts);
    this.deterministicMode = opts.deterministic || opts.testMode;
    this.audio = new AudioProcessor(audioContext);

    const vizWidth = opts.width || 1200;
    const vizHeight = opts.height || 900;
    if (window.OffscreenCanvas) {
      this.internalCanvas = new OffscreenCanvas(vizWidth, vizHeight);
    } else {
      this.internalCanvas = document.createElement("canvas");
      this.internalCanvas.width = vizWidth;
      this.internalCanvas.height = vizHeight;
    }

    this.gl = this.internalCanvas.getContext("webgl2", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
    });

    this.outputGl = canvas.getContext('2d', { willReadFrequently: false });

    this.baseValsDefaults = {
      decay: 0.98,
      gammaadj: 2,
      echo_zoom: 2,
      echo_alpha: 0,
      echo_orient: 0,
      red_blue: 0,
      brighten: 0,
      darken: 0,
      wrap: 1,
      darken_center: 0,
      solarize: 0,
      invert: 0,
      bmotionvectorson: 1,
      fshader: 0,
      b1n: 0,
      b2n: 0,
      b3n: 0,
      b1x: 1,
      b2x: 1,
      b3x: 1,
      b1ed: 0.25,
      wave_mode: 0,
      additivewave: 0,
      wave_dots: 0,
      wave_thick: 0,
      wave_a: 0.8,
      wave_scale: 1,
      wave_smoothing: 0.75,
      wave_mystery: 0,
      modwavealphabyvolume: 0,
      modwavealphastart: 0.75,
      modwavealphaend: 0.95,
      wave_r: 1,
      wave_g: 1,
      wave_b: 1,
      wave_x: 0.5,
      wave_y: 0.5,
      wave_brighten: 1,
      mv_x: 12,
      mv_y: 9,
      mv_dx: 0,
      mv_dy: 0,
      mv_l: 0.9,
      mv_r: 1,
      mv_g: 1,
      mv_b: 1,
      mv_a: 1,
      warpanimspeed: 1,
      warpscale: 1,
      zoomexp: 1,
      zoom: 1,
      rot: 0,
      cx: 0.5,
      cy: 0.5,
      dx: 0,
      dy: 0,
      warp: 1,
      sx: 1,
      sy: 1,
      ob_size: 0.01,
      ob_r: 0,
      ob_g: 0,
      ob_b: 0,
      ob_a: 0,
      ib_size: 0.01,
      ib_r: 0.25,
      ib_g: 0.25,
      ib_b: 0.25,
      ib_a: 0,
    };

    this.shapeBaseValsDefaults = {
      enabled: 0,
      sides: 4,
      additive: 0,
      thickoutline: 0,
      textured: 0,
      num_inst: 1,
      tex_zoom: 1,
      tex_ang: 0,
      x: 0.5,
      y: 0.5,
      rad: 0.1,
      ang: 0,
      r: 1,
      g: 0,
      b: 0,
      a: 1,
      r2: 0,
      g2: 1,
      b2: 0,
      a2: 0,
      border_r: 1,
      border_g: 1,
      border_b: 1,
      border_a: 0.1,
    };

    this.waveBaseValsDefaults = {
      enabled: 0,
      samples: 512,
      sep: 0,
      scaling: 1,
      smoothing: 0.5,
      r: 1,
      g: 1,
      b: 1,
      a: 1,
      spectrum: 0,
      usedots: 0,
      thick: 0,
      additive: 0,
    };

    this.qs = Utils.range(1, 33).map((x) => `q${x}`);
    this.ts = Utils.range(1, 9).map((x) => `t${x}`);

    this.globalPerFrameVars = [
      "old_wave_mode",
      // globals
      "frame",
      "time",
      "fps",
      "bass",
      "bass_att",
      "mid",
      "mid_att",
      "treb",
      "treb_att",
      "meshx",
      "meshy",
      "aspectx",
      "aspecty",
      "pixelsx",
      "pixelsy",
      "rand_start",
      "rand_preset",
    ];

    this.globalPerPixelVars = [
      // globals
      "frame",
      "time",
      "fps",
      "bass",
      "bass_att",
      "mid",
      "mid_att",
      "treb",
      "treb_att",
      "meshx",
      "meshy",
      "aspectx",
      "aspecty",
      "pixelsx",
      "pixelsy",
      "rand_start",
      "rand_preset",
      // for pixel eqs
      "x",
      "y",
      "rad",
      "ang",
    ];

    this.globalShapeVars = [
      // globals
      "frame",
      "time",
      "fps",
      "bass",
      "bass_att",
      "mid",
      "mid_att",
      "treb",
      "treb_att",
      "meshx",
      "meshy",
      "aspectx",
      "aspecty",
      "pixelsx",
      "pixelsy",
      "rand_start",
      "rand_preset",
      // for shape eqs
      "instance",
    ];

    this.shapeBaseVars = [
      "x",
      "y",
      "rad",
      "ang",
      "r",
      "g",
      "b",
      "a",
      "r2",
      "g2",
      "b2",
      "a2",
      "border_r",
      "border_g",
      "border_b",
      "border_a",
      "thickoutline",
      "textured",
      "tex_zoom",
      "tex_ang",
      "additive",
    ];

    this.globalWaveVars = [
      // globals
      "frame",
      "time",
      "fps",
      "bass",
      "bass_att",
      "mid",
      "mid_att",
      "treb",
      "treb_att",
      "meshx",
      "meshy",
      "aspectx",
      "aspecty",
      "pixelsx",
      "pixelsy",
      "rand_start",
      "rand_preset",
      // for wave eqs
      "x",
      "y",
      "sample",
      "value1",
      "value2",
    ];

    this.renderer = new Renderer(this.gl, this.audio, opts);
  }

  loseGLContext() {
    this.gl.getExtension("WEBGL_lose_context").loseContext();
    this.outputGl = null;
  }

  connectAudio(audioNode) {
    this.audioNode = audioNode;
    this.audio.connectAudio(audioNode);
  }

  disconnectAudio(audioNode) {
    this.audio.disconnectAudio(audioNode);
  }

  // Override defaults, but only include variables in default map
  static overrideDefaultVars(baseValsDefaults, baseVals) {
    const combinedVals = {};

    Object.keys(baseValsDefaults).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(baseVals, key)) {
        combinedVals[key] = baseVals[key];
      } else {
        combinedVals[key] = baseValsDefaults[key];
      }
    });

    return combinedVals;
  }

  createQVars() {
    const wasmVars = {};

    this.qs.forEach((key) => {
      wasmVars[key] = new WebAssembly.Global(
        { value: "f64", mutable: true },
        0
      );
    });

    return wasmVars;
  }

  createTVars() {
    const wasmVars = {};

    this.ts.forEach((key) => {
      wasmVars[key] = new WebAssembly.Global(
        { value: "f64", mutable: true },
        0
      );
    });

    return wasmVars;
  }

  createPerFramePool(baseVals) {
    const wasmVars = {};

    Object.keys(this.baseValsDefaults).forEach((key) => {
      wasmVars[key] = new WebAssembly.Global(
        { value: "f64", mutable: true },
        baseVals[key]
      );
    });

    this.globalPerFrameVars.forEach((key) => {
      wasmVars[key] = new WebAssembly.Global(
        { value: "f64", mutable: true },
        0
      );
    });

    return wasmVars;
  }

  createPerPixelPool(baseVals) {
    const wasmVars = {};

    Object.keys(this.baseValsDefaults).forEach((key) => {
      wasmVars[key] = new WebAssembly.Global(
        { value: "f64", mutable: true },
        baseVals[key]
      );
    });

    this.globalPerPixelVars.forEach((key) => {
      wasmVars[key] = new WebAssembly.Global(
        { value: "f64", mutable: true },
        0
      );
    });

    return wasmVars;
  }

  createCustomShapePerFramePool(baseVals) {
    const wasmVars = {};

    Object.keys(this.shapeBaseValsDefaults).forEach((key) => {
      wasmVars[key] = new WebAssembly.Global(
        { value: "f64", mutable: true },
        baseVals[key]
      );
    });

    this.globalShapeVars.forEach((key) => {
      wasmVars[key] = new WebAssembly.Global(
        { value: "f64", mutable: true },
        0
      );
    });

    return wasmVars;
  }

  createCustomWavePerFramePool(baseVals) {
    const wasmVars = {};

    Object.keys(this.waveBaseValsDefaults).forEach((key) => {
      wasmVars[key] = new WebAssembly.Global(
        { value: "f64", mutable: true },
        baseVals[key]
      );
    });

    this.globalWaveVars.forEach((key) => {
      wasmVars[key] = new WebAssembly.Global(
        { value: "f64", mutable: true },
        0
      );
    });

    return wasmVars;
  }

  static makeShapeResetPool(pool, variables, idx) {
    return variables.reduce((acc, variable) => {
      return { ...acc, [`${variable}_${idx}`]: pool[variable] };
    }, {});
  }

  static base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var len = binaryString.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  async loadPreset(presetMap, blendTime = 0) {
    const preset = JSON.parse(JSON.stringify(presetMap));
    preset.baseVals = Visualizer.overrideDefaultVars(
      this.baseValsDefaults,
      preset.baseVals
    );
    for (let i = 0; i < preset.shapes.length; i++) {
      preset.shapes[i].baseVals = Visualizer.overrideDefaultVars(
        this.shapeBaseValsDefaults,
        preset.shapes[i].baseVals
      );
    }

    for (let i = 0; i < preset.waves.length; i++) {
      preset.waves[i].baseVals = Visualizer.overrideDefaultVars(
        this.waveBaseValsDefaults,
        preset.waves[i].baseVals
      );
    }

    const forceJS = preset.useJS && !this.opts.onlyUseWASM;

    if (
      Object.prototype.hasOwnProperty.call(preset, "init_eqs_eel") &&
      !forceJS
    ) {
      preset.useWASM = true;
      await this.loadWASMPreset(preset, blendTime);
    } else if (!this.opts.onlyUseWASM) {
      if (Object.prototype.hasOwnProperty.call(preset, "init_eqs_str")) {
        this.loadJSPreset(preset, blendTime);
      } else {
        console.warn(
          "Tried to load a JS preset that doesn't have converted strings"
        );
      }
    } else {
      console.warn(
        "Tried to load a preset that doesn't support WASM with onlyUseWASM on"
      );
    }
  }

  async loadWASMPreset(preset, blendTime) {
    const qWasmVars = this.createQVars();
    const tWasmVars = this.createTVars();

    const wasmVarPools = {
      perFrame: { ...qWasmVars, ...this.createPerFramePool(preset.baseVals) },
      perVertex: {
        ...qWasmVars,
        ...this.createPerPixelPool(preset.baseVals),
      },
    };

    const wasmFunctions = {
      presetInit: { pool: "perFrame", code: preset.init_eqs_eel },
      perFrame: { pool: "perFrame", code: preset.frame_eqs_eel },
    };

    if (preset.pixel_eqs_eel !== "") {
      wasmFunctions.perPixel = {
        pool: "perVertex",
        code: preset.pixel_eqs_eel,
      };
    }

    for (let i = 0; i < preset.shapes.length; i++) {
      wasmVarPools[`shapePerFrame${i}`] = {
        ...qWasmVars,
        ...tWasmVars,
        ...this.createCustomShapePerFramePool(preset.shapes[i].baseVals),
      };

      if (preset.shapes[i].baseVals.enabled !== 0) {
        wasmFunctions[`shapes_${i}_init_eqs`] = {
          pool: `shapePerFrame${i}`,
          code: preset.shapes[i].init_eqs_eel,
        };
        wasmFunctions[`shapes_${i}_frame_eqs`] = {
          pool: `shapePerFrame${i}`,
          code: preset.shapes[i].frame_eqs_eel,
        };
      }
    }

    for (let i = 0; i < preset.waves.length; i++) {
      if (preset.waves[i].baseVals.enabled !== 0) {
        wasmVarPools[`wavePerFrame${i}`] = {
          ...qWasmVars,
          ...tWasmVars,
          ...this.createCustomWavePerFramePool(preset.waves[i].baseVals),
        };
        wasmFunctions[`waves_${i}_init_eqs`] = {
          pool: `wavePerFrame${i}`,
          code: preset.waves[i].init_eqs_eel,
        };
        wasmFunctions[`waves_${i}_frame_eqs`] = {
          pool: `wavePerFrame${i}`,
          code: preset.waves[i].frame_eqs_eel,
        };

        if (
          preset.waves[i].point_eqs_eel &&
          preset.waves[i].point_eqs_eel !== ""
        ) {
          wasmFunctions[`waves_${i}_point_eqs`] = {
            pool: `wavePerFrame${i}`,
            code: preset.waves[i].point_eqs_eel,
          };
        }
      }
    }

    const mod = await Vt({
      pools: wasmVarPools,
      functions: wasmFunctions,
      eelVersion: preset.version || 2,
    });

    // eel-wasm returns null if the function was empty
    const handleEmptyFunction = (f) => {
      return f ? f : () => {};
    };

    const presetFunctionsMod = await ascLoader.instantiate(
      Visualizer.base64ToArrayBuffer(loadPresetFunctionsBuffer()),
      {
        pixelEqs: {
          perPixelEqs: handleEmptyFunction(mod.exports.perPixel),
        },
        // For resetting pixel eq vars
        pixelVarPool: {
          warp: wasmVarPools.perVertex.warp,
          zoom: wasmVarPools.perVertex.zoom,
          zoomexp: wasmVarPools.perVertex.zoomexp,
          cx: wasmVarPools.perVertex.cx,
          cy: wasmVarPools.perVertex.cy,
          sx: wasmVarPools.perVertex.sx,
          sy: wasmVarPools.perVertex.sy,
          dx: wasmVarPools.perVertex.dx,
          dy: wasmVarPools.perVertex.dy,
          rot: wasmVarPools.perVertex.rot,
          x: wasmVarPools.perVertex.x,
          y: wasmVarPools.perVertex.y,
          ang: wasmVarPools.perVertex.ang,
          rad: wasmVarPools.perVertex.rad,
        },
        // For resetting qs/ts
        qVarPool: qWasmVars,
        tVarPool: tWasmVars,
        // For resetting shape vars
        shapePool0: Visualizer.makeShapeResetPool(
          wasmVarPools["shapePerFrame0"],
          this.shapeBaseVars,
          0
        ),
        shapePool1: Visualizer.makeShapeResetPool(
          wasmVarPools["shapePerFrame1"],
          this.shapeBaseVars,
          1
        ),
        shapePool2: Visualizer.makeShapeResetPool(
          wasmVarPools["shapePerFrame2"],
          this.shapeBaseVars,
          2
        ),
        shapePool3: Visualizer.makeShapeResetPool(
          wasmVarPools["shapePerFrame3"],
          this.shapeBaseVars,
          3
        ),
        console: {
          logi: (value) => {
            // eslint-disable-next-line no-console
            console.log("logi: " + value);
          },
          logf: (value) => {
            // eslint-disable-next-line no-console
            console.log("logf: " + value);
          },
        },
        env: {
          abort: () => {
            // No idea why we need this.
          },
        },
      }
    );

    preset.globalPools = wasmVarPools;
    preset.init_eqs = handleEmptyFunction(mod.exports.presetInit);
    preset.frame_eqs = handleEmptyFunction(mod.exports.perFrame);
    preset.save_qs = presetFunctionsMod.exports.saveQs;
    preset.restore_qs = presetFunctionsMod.exports.restoreQs;
    preset.save_ts = presetFunctionsMod.exports.saveTs;
    preset.restore_ts = presetFunctionsMod.exports.restoreTs;
    if (mod.exports.perPixel) {
      preset.pixel_eqs = mod.exports.perPixel;
    }
    preset.pixel_eqs_initialize_array = (meshWidth, meshHeight) => {
      const arrPtr = presetFunctionsMod.exports.createFloat32Array(
        (meshWidth + 1) * (meshHeight + 1) * 2
      );
      preset.pixel_eqs_array = arrPtr;
    };
    preset.pixel_eqs_get_array = () => {
      return presetFunctionsMod.exports.__getFloat32ArrayView(
        preset.pixel_eqs_array
      );
    };
    preset.pixel_eqs_wasm = (...args) =>
      presetFunctionsMod.exports.runPixelEquations(
        preset.pixel_eqs_array,
        ...args
      );

    for (let i = 0; i < preset.shapes.length; i++) {
      if (preset.shapes[i].baseVals.enabled !== 0) {
        preset.shapes[i].init_eqs = handleEmptyFunction(
          mod.exports[`shapes_${i}_init_eqs`]
        );
        // Not wrapped because we check if null in customShapes
        preset.shapes[i].frame_eqs = mod.exports[`shapes_${i}_frame_eqs`];

        preset.shapes[i].frame_eqs_save = () =>
          presetFunctionsMod.exports[`shape${i}_save`]();
        preset.shapes[i].frame_eqs_restore = () =>
          presetFunctionsMod.exports[`shape${i}_restore`]();
      }
    }

    for (let i = 0; i < preset.waves.length; i++) {
      if (preset.waves[i].baseVals.enabled !== 0) {
        const wave = {
          init_eqs: handleEmptyFunction(mod.exports[`waves_${i}_init_eqs`]),
          frame_eqs: handleEmptyFunction(mod.exports[`waves_${i}_frame_eqs`]),
        };

        if (
          preset.waves[i].point_eqs_eel &&
          preset.waves[i].point_eqs_eel !== ""
        ) {
          // Not wrapped because we check if null in customWaves
          wave.point_eqs = mod.exports[`waves_${i}_point_eqs`];
        } else {
          wave.point_eqs = "";
        }

        preset.waves[i] = Object.assign({}, preset.waves[i], wave);
      }
    }

    this.renderer.loadPreset(preset, blendTime);
  }

  loadJSPreset(preset, blendTime) {
    // If init_eqs is already a function, it means we've already prepared the preset to run
    if (typeof preset.init_eqs !== "function") {
      /* eslint-disable no-param-reassign, no-new-func */
      preset.init_eqs = new Function("a", `${preset.init_eqs_str} return a;`);
      preset.frame_eqs = new Function("a", `${preset.frame_eqs_str} return a;`);
      if (preset.pixel_eqs_str && preset.pixel_eqs_str !== "") {
        preset.pixel_eqs = new Function(
          "a",
          `${preset.pixel_eqs_str} return a;`
        );
      } else {
        preset.pixel_eqs = "";
      }

      for (let i = 0; i < preset.shapes.length; i++) {
        if (preset.shapes[i].baseVals.enabled !== 0) {
          preset.shapes[i] = Object.assign({}, preset.shapes[i], {
            init_eqs: new Function(
              "a",
              `${preset.shapes[i].init_eqs_str} return a;`
            ),
            frame_eqs: new Function(
              "a",
              `${preset.shapes[i].frame_eqs_str} return a;`
            ),
          });
        }
      }

      for (let i = 0; i < preset.waves.length; i++) {
        if (preset.waves[i].baseVals.enabled !== 0) {
          const wave = {
            init_eqs: new Function(
              "a",
              `${preset.waves[i].init_eqs_str} return a;`
            ),
            frame_eqs: new Function(
              "a",
              `${preset.waves[i].frame_eqs_str} return a;`
            ),
          };

          if (
            preset.waves[i].point_eqs_str &&
            preset.waves[i].point_eqs_str !== ""
          ) {
            wave.point_eqs = new Function(
              "a",
              `${preset.waves[i].point_eqs_str} return a;`
            );
          } else {
            wave.point_eqs = "";
          }

          preset.waves[i] = Object.assign({}, preset.waves[i], wave);
        }
      }
      /* eslint-enable no-param-reassign, no-new-func */
    }
    this.renderer.loadPreset(preset, blendTime);
  }

  loadExtraImages(imageData) {
    this.renderer.loadExtraImages(imageData);
  }

  setRendererSize(width, height, opts = {}) {
    this.internalCanvas.width = width;
    this.internalCanvas.height = height;
    this.renderer.setRendererSize(width, height, opts);
  }

  setInternalMeshSize(width, height) {
    this.renderer.setInternalMeshSize(width, height);
  }

  setOutputAA(useAA) {
    this.renderer.setOutputAA(useAA);
  }

  setCanvas(canvas) {
    this.outputGl = canvas.getContext('2d', { willReadFrequently: false });
  }

  render(opts) {
    const renderOutput = this.renderer.render(opts);

    if (this.outputGl) {
      this.outputGl.drawImage(this.internalCanvas, 0, 0);
    }

    return renderOutput;
  }

  launchSongTitleAnim(text) {
    this.renderer.launchSongTitleAnim(text);
  }

  toDataURL() {
    return this.renderer.toDataURL();
  }

  warpBufferToDataURL() {
    return this.renderer.warpBufferToDataURL();
  }
}

class Butterchurn {
  static createVisualizer(context, canvas, opts) {
    return new Visualizer(context, canvas, opts);
  }
}

export { Butterchurn as default };
//# sourceMappingURL=butterchurn.js.map
