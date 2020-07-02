(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.banana1 = function() {
	this.initialize(img.banana1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,96);


(lib.banana2 = function() {
	this.initialize(img.banana2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,82);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,414);


(lib.blueberry = function() {
	this.initialize(img.blueberry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,122);


(lib.coconet = function() {
	this.initialize(img.coconet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,91);


(lib.fire1 = function() {
	this.initialize(img.fire1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,112);


(lib.fire2 = function() {
	this.initialize(img.fire2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,112);


(lib.fire3 = function() {
	this.initialize(img.fire3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,112);


(lib.fire4 = function() {
	this.initialize(img.fire4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,112);


(lib.fire5 = function() {
	this.initialize(img.fire5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,112);


(lib.fire6 = function() {
	this.initialize(img.fire6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,112);


(lib.flower = function() {
	this.initialize(img.flower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,98);


(lib.grapes = function() {
	this.initialize(img.grapes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,66);


(lib.leaf1 = function() {
	this.initialize(img.leaf1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,124);


(lib.leaf2 = function() {
	this.initialize(img.leaf2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,110);


(lib.leaf3 = function() {
	this.initialize(img.leaf3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,141);


(lib.leaf4 = function() {
	this.initialize(img.leaf4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,75);


(lib.leaf5 = function() {
	this.initialize(img.leaf5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,39);


(lib.leaf6 = function() {
	this.initialize(img.leaf6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,79);


(lib.leaf7 = function() {
	this.initialize(img.leaf7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,108);


(lib.leaf8 = function() {
	this.initialize(img.leaf8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,84);


(lib.leaf_l = function() {
	this.initialize(img.leaf_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,244);


(lib.leaf_r = function() {
	this.initialize(img.leaf_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,201);


(lib.lemur_blue = function() {
	this.initialize(img.lemur_blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,339);


(lib.lemur_stand = function() {
	this.initialize(img.lemur_stand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,342);


(lib.piles_fruit = function() {
	this.initialize(img.piles_fruit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,608,247);


(lib.pineapple = function() {
	this.initialize(img.pineapple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,123);


(lib.starfruit = function() {
	this.initialize(img.starfruit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,97);


(lib.temple = function() {
	this.initialize(img.temple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,385);


(lib.torch = function() {
	this.initialize(img.torch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,93);


(lib.VINES = function() {
	this.initialize(img.VINES);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,615,449);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.temple_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.temple();
	this.instance.parent = this;
	this.instance.setTransform(-146,-192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.temple_1, new cjs.Rectangle(-146,-192.5,292,385), null);


(lib.monkey3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lemur_blue();
	this.instance.parent = this;
	this.instance.setTransform(-71.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.monkey3, new cjs.Rectangle(-71.5,0,143,339), null);


(lib.monkey2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lemur_stand();
	this.instance.parent = this;
	this.instance.setTransform(-142,-171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.monkey2, new cjs.Rectangle(-142,-171,284,342), null);


(lib.left_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.leaf_r();
	this.instance.parent = this;
	this.instance.setTransform(-104,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.left_R, new cjs.Rectangle(-104,-100.5,208,201), null);


(lib.leaf_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.leaf_l();
	this.instance.parent = this;
	this.instance.setTransform(-95,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf_L, new cjs.Rectangle(-95,-122,190,244), null);


(lib.frontstarfruit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.starfruit();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontstarfruit, new cjs.Rectangle(-43.5,-48.5,87,97), null);


(lib.frontpineapple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pineapple();
	this.instance.parent = this;
	this.instance.setTransform(-50,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontpineapple, new cjs.Rectangle(-50,-61.5,100,123), null);


(lib.frontgrapes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.grapes();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontgrapes, new cjs.Rectangle(-33.5,-33,67,66), null);


(lib.frontcoconet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.coconet();
	this.instance.parent = this;
	this.instance.setTransform(-49,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontcoconet, new cjs.Rectangle(-49,-45.5,98,91), null);


(lib.frontblueberry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blueberry();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontblueberry, new cjs.Rectangle(-50.5,-61,101,122), null);


(lib.frontbanana2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.banana2();
	this.instance.parent = this;
	this.instance.setTransform(-46,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontbanana2, new cjs.Rectangle(-46,-41,92,82), null);


(lib.frontbanana1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.banana1();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontbanana1, new cjs.Rectangle(-61.5,-48,123,96), null);


(lib.backleaf8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.leaf8();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backleaf8, new cjs.Rectangle(-26.5,-42,53,84), null);


(lib.backleaf7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.leaf7();
	this.instance.parent = this;
	this.instance.setTransform(-68.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backleaf7, new cjs.Rectangle(-68.5,-54,137,108), null);


(lib.backleaf6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.leaf6();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backleaf6, new cjs.Rectangle(-46.5,-39.5,93,79), null);


(lib.backleaf5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.leaf5();
	this.instance.parent = this;
	this.instance.setTransform(-25,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backleaf5, new cjs.Rectangle(-25,-19.5,50,39), null);


(lib.backleaf4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.leaf4();
	this.instance.parent = this;
	this.instance.setTransform(-36.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backleaf4, new cjs.Rectangle(-36.5,-37.5,73,75), null);


(lib.backleaf3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.leaf3();
	this.instance.parent = this;
	this.instance.setTransform(-49.5,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backleaf3, new cjs.Rectangle(-49.5,-70.5,99,141), null);


(lib.backleaf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.leaf2();
	this.instance.parent = this;
	this.instance.setTransform(-67.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backleaf2, new cjs.Rectangle(-67.5,-55,135,110), null);


(lib.backleaf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.leaf1();
	this.instance.parent = this;
	this.instance.setTransform(-91.5,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backleaf1, new cjs.Rectangle(-91.5,-62,183,124), null);


(lib.backflower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.flower();
	this.instance.parent = this;
	this.instance.setTransform(-45.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backflower, new cjs.Rectangle(-45.5,-49,91,98), null);


(lib.backflame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fire1();
	this.instance.parent = this;

	this.instance_1 = new lib.fire2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.fire3();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fire4();
	this.instance_3.parent = this;

	this.instance_4 = new lib.fire5();
	this.instance_4.parent = this;

	this.instance_5 = new lib.fire6();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,112);


(lib.backBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BG();
	this.instance.parent = this;
	this.instance.setTransform(-276,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backBG, new cjs.Rectangle(-276,-207,552,414), null);


(lib.front = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// coconet_png
	this.instance = new lib.frontcoconet();
	this.instance.parent = this;
	this.instance.setTransform(-26,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// grapes_png
	this.instance_1 = new lib.frontgrapes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(255.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// blueberry_png
	this.instance_2 = new lib.frontblueberry();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-248.5,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// banana1_png
	this.instance_3 = new lib.frontbanana1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-190.5,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// banana2_png
	this.instance_4 = new lib.frontbanana2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(171,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// pineapple_png
	this.instance_5 = new lib.frontpineapple();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-113,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// starfruit_png
	this.instance_6 = new lib.frontstarfruit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(205.5,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// piles_fruit_png
	this.instance_7 = new lib.piles_fruit();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-304,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.front, new cjs.Rectangle(-304,-127,608,254), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg+UAk5MAAAhVSMB8pAAAMAAABVSg");
	var mask_graphics_34 = new cjs.Graphics().p("Eg+UAk5MAAAhVSMB8pAAAMAAABVSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.025,y:-309.825}).wait(34).to({graphics:mask_graphics_34,x:0.025,y:-309.825}).wait(1));

	// 圖層_1
	this.instance = new lib.monkey2();
	this.instance.parent = this;
	this.instance.setTransform(-22.9,88.65);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-22.95,y:-194.15},9).wait(15).to({x:22.1,y:94.25},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.9,-365.1,329,344);


(lib.backtorch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.backflame();
	this.instance.parent = this;
	this.instance.setTransform(0,-37.9,1,1,0,0,0,50,56);

	this.instance_1 = new lib.torch();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backtorch, new cjs.Rectangle(-50,-93.9,100,187.8), null);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
		this.parent.monkey2.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// Layer_14
	this.instance = new lib.VINES();
	this.instance.parent = this;
	this.instance.setTransform(-329,-222);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ALXf0QhbgIg7gjQhyhEg8hHQhchsiCgnQhugiiXAOQisAPjGA3QiLAnjaBQQgqAPhnApQhbAlg1ASQiqA5iLgKQifgNiChnQhuhXiUh9Ij/jYQgYgUg0gyQgwgtgcgXQh/hngXirQgbjVgMjCQgEhCgKguQgNg6gbgtQiDjcAbjqQADgbgDg5QgHiUAPh/QARiPAuh/QAVg8AQheQARhqAKg1QBAkvDjiyIBIg6IBIg5IDXifQCBhfBThDQCWh7CjgbQCigaC3BEQEpBuFoBwQEFBSDigYQDygaCNivQAeglBKg+QAggbAqgMQAigLAygDQB8gGBmARQBzATBkAzQBXAtBpAAQBUAABxgeQBdgZAtgHQBOgLBAAOQCVAfCNB3QCmCNBgDJIBLCeQArBZAkBDQAPAbAjAvQAmAxAOAYQAoBEAEAxQAFAwgBBGIgCB1IAKABIgZEgQgOCqgFB3QgHCEAWCgQAlEJg5EEQh4IklsIAQh8Cvj/AFQiYACjggmQhKgMgvACQhAACgxAcQhnA6h7AUQhAAKhIAAQgxAAg0gFg");
	mask.setTransform(-8.8236,7.4421);

	// 火炬右
	this.instance_1 = new lib.backtorch();
	this.instance_1.parent = this;
	this.instance_1.setTransform(366.65,55.45,1,1,0,0,180);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:233.4,y:34.45},11).wait(1));

	// 火炬左
	this.instance_2 = new lib.backtorch();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-402.05,3.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-235.5,y:33.1},11).wait(1));

	// 花
	this.instance_3 = new lib.backflower();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-336.5,211.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-221.5,y:127},11).wait(1));

	// 葉子8
	this.instance_4 = new lib.backleaf8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(443.15,-95.2);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:251.5,y:-48.5},11).wait(1));

	// 葉子7
	this.instance_5 = new lib.backleaf7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(442.7,-160.55);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:234.5,y:-124.5},11).wait(1));

	// 葉子6
	this.instance_6 = new lib.backleaf6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(395.5,-269.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:166.5,y:-157},11).wait(1));

	// 葉子5
	this.instance_7 = new lib.backleaf5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(341.65,-337);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:81,y:-186},11).wait(1));

	// 葉子2
	this.instance_8 = new lib.backleaf2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-348.5,-93.45);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-235.5,y:-42.5},11).wait(1));

	// 葉子1
	this.instance_9 = new lib.backleaf1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-371.5,-210.45);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-165.5,y:-149.5},11).wait(1));

	// 葉子3
	this.instance_10 = new lib.backleaf3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-386,141);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:-246.5,y:42},11).wait(1));

	// 葉子4
	this.instance_11 = new lib.backleaf4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-360.05,77.25);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:-243.5,y:56},11).wait(1));

	// 猴子3
	this.instance_12 = new lib.monkey3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-5.9,-266.2,0.9999,0.9999,0,-82.0425,97.9575);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12));

	// 藍色底
	this.instance_13 = new lib.backBG();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-5,4.5);

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329,-222,615,449);


// stage content:
(lib.animateTest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
		this.back.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// monkey2
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(401.1,307.5,1,1,0,0,0,0,-292.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// front
	this.instance_1 = new lib.front();
	this.instance_1.parent = this;
	this.instance_1.setTransform(414.15,469.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// temple
	this.instance_2 = new lib.temple_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(386.8,345.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

	// back
	this.back = new lib.back();
	this.back.name = "back";
	this.back.parent = this;
	this.back.setTransform(425.95,495.85,0.5767,0.3407,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.back).to({regX:0,scaleX:1,scaleY:1,x:397.8,y:281.4},23).wait(1));

	// leafR
	this.instance_3 = new lib.left_R();
	this.instance_3.parent = this;
	this.instance_3.setTransform(680.8,433.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24));

	// leafR
	this.instance_4 = new lib.leaf_L();
	this.instance_4.parent = this;
	this.instance_4.setTransform(111.8,468.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(334.8,224.9,574.2,634.8000000000001);
// library properties:
lib.properties = {
	id: '4938FA424ED544F0BF0F31DF7D936114',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banana1.png", id:"banana1"},
		{src:"images/banana2.png", id:"banana2"},
		{src:"images/BG.png", id:"BG"},
		{src:"images/blueberry.png", id:"blueberry"},
		{src:"images/coconet.png", id:"coconet"},
		{src:"images/fire1.png", id:"fire1"},
		{src:"images/fire2.png", id:"fire2"},
		{src:"images/fire3.png", id:"fire3"},
		{src:"images/fire4.png", id:"fire4"},
		{src:"images/fire5.png", id:"fire5"},
		{src:"images/fire6.png", id:"fire6"},
		{src:"images/flower.png", id:"flower"},
		{src:"images/grapes.png", id:"grapes"},
		{src:"images/leaf1.png", id:"leaf1"},
		{src:"images/leaf2.png", id:"leaf2"},
		{src:"images/leaf3.png", id:"leaf3"},
		{src:"images/leaf4.png", id:"leaf4"},
		{src:"images/leaf5.png", id:"leaf5"},
		{src:"images/leaf6.png", id:"leaf6"},
		{src:"images/leaf7.png", id:"leaf7"},
		{src:"images/leaf8.png", id:"leaf8"},
		{src:"images/leaf_l.png", id:"leaf_l"},
		{src:"images/leaf_r.png", id:"leaf_r"},
		{src:"images/lemur_blue.png", id:"lemur_blue"},
		{src:"images/lemur_stand.png", id:"lemur_stand"},
		{src:"images/piles_fruit.png", id:"piles_fruit"},
		{src:"images/pineapple.png", id:"pineapple"},
		{src:"images/starfruit.png", id:"starfruit"},
		{src:"images/temple.png", id:"temple"},
		{src:"images/torch.png", id:"torch"},
		{src:"images/VINES.png", id:"VINES"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4938FA424ED544F0BF0F31DF7D936114'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;