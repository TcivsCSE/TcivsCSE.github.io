jQuery(document).ready(function ($) {
    var staticx;
    var img = new Image();
    img.src = "./snow.png"

//定義櫻花
    function Sakura(x, y, s, r, fn) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.r = r;
        this.fn = fn;
    }

//繪製櫻花
    Sakura.prototype.draw = function(cxt) {
        cxt.save();
        var xc = 40 * this.s / 4;
        cxt.translate(this.x, this.y);
        cxt.rotate(this.r);
        cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
        cxt.restore();
    }

//修改櫻花位置，模擬飄落
    Sakura.prototype.update = function() {
        this.x = this.fn.x(this.x, this.y);
        this.y = this.fn.y(this.y, this.y);
this.r = this.fn.r(this.r);

//控制櫻花不會溢位螢幕
        if(this.x > window.innerWidth ||
            this.x < 0 ||
            this.y > window.innerHeight ||
            this.y < 0
        ) {
            this.r = getRandom('fnr');
            if(Math.random() > 0.4) {
                this.x = getRandom('x');
                this.y = 0;
                this.s = getRandom('s');
                this.r = getRandom('r');
            } else {
                this.x = window.innerWidth;
                this.y = getRandom('y');
                this.s = getRandom('s');
                this.r = getRandom('r');
            }
        }
    }

    SakuraList = function() {
        this.list = [];
    }
    SakuraList.prototype.push = function(sakura) {
        this.list.push(sakura);
}
//list update方法
    SakuraList.prototype.update = function() {
        for(var i = 0, len = this.list.length; i < len; i++) {
            this.list[i].update();
        }
}
//list draw方法
    SakuraList.prototype.draw = function(cxt) {
        for(var i = 0, len = this.list.length; i < len; i++) {
            this.list[i].draw(cxt);
        }
    }
    SakuraList.prototype.get = function(i) {
        return this.list[i];
    }
    SakuraList.prototype.size = function() {
        return this.list.length;
    }

//位置隨機
    function getRandom(option) {
        var ret, random;
        switch(option) {
            case 'x':
                ret = Math.random() * window.innerWidth;
                break;
            case 'y':
                ret = Math.random() * window.innerHeight;
                break;
            case 's':
                ret = Math.random();
                break;
            case 'r':
                ret = Math.random() * 6;
                break;
            case 'fnx':
                random = -0.5 + Math.random() * 1;
                ret = function(x, y) {
                    return x + 0.5 * random - 1.7;
                };
                break;
            case 'fny':
                random = 1.5 + Math.random() * 0.7
                ret = function(x, y) {
                    return y + random;
                };
                break;
            case 'fnr':
                random = Math.random() * 0.03;
                ret = function(r) {
                    return r + random;
                };
                break;
        }
        return ret;
    }

//櫻花入口
    function startSakura() {

        requestAnimationFrame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame;
        var canvas = document.createElement('canvas'),
            cxt;
        staticx = true;
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
        canvas.setAttribute('id', 'canvas_sakura');
        canvas.style.zIndex = -1
        document.getElementsByTagName('body')[0].appendChild(canvas);
        cxt = canvas.getContext('2d');
        cxt.globalAlpha = 0.5
        var sakuraList = new SakuraList();
        for(var i = 0; i < 50; i++) {
            var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
            randomX = getRandom('x');
            randomY = getRandom('y');
            randomR = getRandom('r');
            randomS = getRandom('s');
            randomFnx = getRandom('fnx');
            randomFny = getRandom('fny');
            randomFnR = getRandom('fnr');
            sakura = new Sakura(randomX, randomY, randomS, randomR, {
                x: randomFnx,
                y: randomFny,
                r: randomFnR
            });
            sakura.draw(cxt);
            sakuraList.push(sakura);
        }
        stop = requestAnimationFrame(function() {
  cxt.clearRect(0, 0, canvas.width, canvas.height);
  // 修改櫻花位置邏輯
  sakuraList.update();
  // 畫出修改後的櫻花
  sakuraList.draw(cxt);
  // 遞迴 修改位置, 畫出修改後的櫻花
            stop = requestAnimationFrame(arguments.callee);
        })
    }

//圖片資源載入完成則開啟特效
    img.onload = function() {
        startSakura();
    }
});
