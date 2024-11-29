/*
// File name             : Coin.js
// Project name          : Amidar
// The course name       : GAM100
// The term              : fall/2020
// Author                : Dong-A choi
// Copyright information : “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
*/

class Coin {
  constructor(coinX,coinY){
  this.coinX = coinX;
  this.coinY = coinY;
  this.draw = true;

  }
  Draw(){
  this.Update()
  push()
  fill(255,255,0);
    if(this.draw == true){
      circle(this.coinX,this.coinY,7);
    }else if(this.draw == false){
      this.coinX = 10000;
      this.coinY = 10000;
    }
  pop();
  }
  
  Update(){
    if((c1.x - this.coinX-2 == abs(2) || c1.x - this.coinX+2 == abs(2))  && (c1.y - this.coinY-2 == abs(2) || c1.y - this.coinY+2 == abs(2))){
      get_contents.setVolume(1)
      get_contents.play()
      this.draw = false
      score = score + 10;
    }
  }
}
let row1X = 50;
let row1Y = 100;
let row6X = 150;
let row6Y = 200;
let row11X = 250;
let row11Y = 300;
let row16X = 350;
let row15Y = 380;
let row21X = 450;
let row19Y = 460;
let row26X = 550;
let row24Y = 560;
let row27Y = 620;
let row4Y = 160;
let row8Y = 240;
let row13Y = 340;
let row22Y = 520;
let row18Y = 440;
let row17Y = 420;

let coin0201 = new Coin(row1X,row1Y + 20 );
let coin0301 = new Coin(row1X,row1Y + 40 );
let coin0401 = new Coin(row1X,row1Y + 60 );
let coin0501 = new Coin(row1X,row1Y + 80 );
let coin0601 = new Coin(row1X,row1Y + 100);
let coin0701 = new Coin(row1X,row1Y + 120);
let coin0801 = new Coin(row1X,row1Y + 140);
let coin0901 = new Coin(row1X,row1Y + 160);
let coin1001 = new Coin(row1X,row1Y + 180);
let coin1101 = new Coin(row1X,row1Y + 200);
let coin1201 = new Coin(row1X,row1Y + 220);
let coin1301 = new Coin(row1X,row1Y + 240);
let coin1401 = new Coin(row1X,row1Y + 260);
let coin1501 = new Coin(row1X,row1Y + 280);
let coin1601 = new Coin(row1X,row1Y + 300);
let coin1701 = new Coin(row1X,row1Y + 320);
let coin1801 = new Coin(row1X,row1Y + 340);
let coin1901 = new Coin(row1X,row1Y + 360);
let coin2001 = new Coin(row1X,row1Y + 380);
let coin2101 = new Coin(row1X,row1Y + 400);
let coin2201 = new Coin(row1X,row1Y + 420);
let coin2301 = new Coin(row1X,row1Y + 440);
let coin2401 = new Coin(row1X,row1Y + 460);
let coin2501 = new Coin(row1X,row1Y + 480);
let coin2601 = new Coin(row1X,row1Y + 500);
 
let coin0206 = new Coin(row6X,row1Y + 20 );
let coin0306 = new Coin(row6X,row1Y + 40 );
let coin0406 = new Coin(row6X,row1Y + 60 );
let coin0506 = new Coin(row6X,row1Y + 80 );
let coin0606 = new Coin(row6X,row1Y + 100);
let coin0706 = new Coin(row6X,row1Y + 120);
let coin0806 = new Coin(row6X,row1Y + 140);
let coin0906 = new Coin(row6X,row1Y + 160);
let coin1006 = new Coin(row6X,row1Y + 180);
let coin1106 = new Coin(row6X,row1Y + 200);
let coin1206 = new Coin(row6X,row1Y + 220);
let coin1306 = new Coin(row6X,row1Y + 240);
let coin1406 = new Coin(row6X,row1Y + 260);
let coin1506 = new Coin(row6X,row1Y + 280);
let coin1606 = new Coin(row6X,row1Y + 300);
let coin1706 = new Coin(row6X,row1Y + 320);
let coin1806 = new Coin(row6X,row1Y + 340);
let coin1906 = new Coin(row6X,row1Y + 360);
let coin2006 = new Coin(row6X,row1Y + 380);
let coin2106 = new Coin(row6X,row1Y + 400);
let coin2206 = new Coin(row6X,row1Y + 420);
let coin2306 = new Coin(row6X,row1Y + 440);
let coin2406 = new Coin(row6X,row1Y + 460);
let coin2506 = new Coin(row6X,row1Y + 480);
let coin2606 = new Coin(row6X,row1Y + 500);

let coin0211 = new Coin(row11X,row1Y + 20 );
let coin0311 = new Coin(row11X,row1Y + 40 );
let coin0411 = new Coin(row11X,row1Y + 60 );
let coin0511 = new Coin(row11X,row1Y + 80 );
let coin0611 = new Coin(row11X,row1Y + 100);
let coin0711 = new Coin(row11X,row1Y + 120);
let coin0811 = new Coin(row11X,row1Y + 140);
let coin0911 = new Coin(row11X,row1Y + 160);
let coin1011 = new Coin(row11X,row1Y + 180);
let coin1111 = new Coin(row11X,row1Y + 200);
let coin1211 = new Coin(row11X,row1Y + 220);
let coin1311 = new Coin(row11X,row1Y + 240);
let coin1411 = new Coin(row11X,row1Y + 260);
let coin1511 = new Coin(row11X,row1Y + 280);
let coin1611 = new Coin(row11X,row1Y + 300);
let coin1711 = new Coin(row11X,row1Y + 320);
let coin1811 = new Coin(row11X,row1Y + 340);
let coin1911 = new Coin(row11X,row1Y + 360);
let coin2011 = new Coin(row11X,row1Y + 380);
let coin2111 = new Coin(row11X,row1Y + 400);
let coin2211 = new Coin(row11X,row1Y + 420);
let coin2311 = new Coin(row11X,row1Y + 440);
let coin2411 = new Coin(row11X,row1Y + 460);
let coin2511 = new Coin(row11X,row1Y + 480);
let coin2611 = new Coin(row11X,row1Y + 500);

let coin0216 = new Coin(row16X,row1Y + 20 );
let coin0316 = new Coin(row16X,row1Y + 40 );
let coin0416 = new Coin(row16X,row1Y + 60 );
let coin0516 = new Coin(row16X,row1Y + 80 );
let coin0616 = new Coin(row16X,row1Y + 100);
let coin0716 = new Coin(row16X,row1Y + 120);
let coin0816 = new Coin(row16X,row1Y + 140);
let coin0916 = new Coin(row16X,row1Y + 160);
let coin1016 = new Coin(row16X,row1Y + 180);
let coin1116 = new Coin(row16X,row1Y + 200);
let coin1216 = new Coin(row16X,row1Y + 220);
let coin1316 = new Coin(row16X,row1Y + 240);
let coin1416 = new Coin(row16X,row1Y + 260);
let coin1516 = new Coin(row16X,row1Y + 280);
let coin1616 = new Coin(row16X,row1Y + 300);
let coin1716 = new Coin(row16X,row1Y + 320);
let coin1816 = new Coin(row16X,row1Y + 340);
let coin1916 = new Coin(row16X,row1Y + 360);
let coin2016 = new Coin(row16X,row1Y + 380);
let coin2116 = new Coin(row16X,row1Y + 400);
let coin2216 = new Coin(row16X,row1Y + 420);
let coin2316 = new Coin(row16X,row1Y + 440);
let coin2416 = new Coin(row16X,row1Y + 460);
let coin2516 = new Coin(row16X,row1Y + 480);
let coin2616 = new Coin(row16X,row1Y + 500);

let coin0221 = new Coin(row21X,row1Y + 20 );
let coin0321 = new Coin(row21X,row1Y + 40 );
let coin0421 = new Coin(row21X,row1Y + 60 );
let coin0521 = new Coin(row21X,row1Y + 80 );
let coin0621 = new Coin(row21X,row1Y + 100);
let coin0721 = new Coin(row21X,row1Y + 120);
let coin0821 = new Coin(row21X,row1Y + 140);
let coin0921 = new Coin(row21X,row1Y + 160);
let coin1021 = new Coin(row21X,row1Y + 180);
let coin1121 = new Coin(row21X,row1Y + 200);
let coin1221 = new Coin(row21X,row1Y + 220);
let coin1321 = new Coin(row21X,row1Y + 240);
let coin1421 = new Coin(row21X,row1Y + 260);
let coin1521 = new Coin(row21X,row1Y + 280);
let coin1621 = new Coin(row21X,row1Y + 300);
let coin1721 = new Coin(row21X,row1Y + 320);
let coin1821 = new Coin(row21X,row1Y + 340);
let coin1921 = new Coin(row21X,row1Y + 360);
let coin2021 = new Coin(row21X,row1Y + 380);
let coin2121 = new Coin(row21X,row1Y + 400);
let coin2221 = new Coin(row21X,row1Y + 420);
let coin2321 = new Coin(row21X,row1Y + 440);
let coin2421 = new Coin(row21X,row1Y + 460);
let coin2521 = new Coin(row21X,row1Y + 480);
let coin2621 = new Coin(row21X,row1Y + 500);

let coin0226 = new Coin(row26X,row1Y + 20 );
let coin0326 = new Coin(row26X,row1Y + 40 );
let coin0426 = new Coin(row26X,row1Y + 60 );
let coin0526 = new Coin(row26X,row1Y + 80 );
let coin0626 = new Coin(row26X,row1Y + 100);
let coin0726 = new Coin(row26X,row1Y + 120);
let coin0826 = new Coin(row26X,row1Y + 140);
let coin0926 = new Coin(row26X,row1Y + 160);
let coin1026 = new Coin(row26X,row1Y + 180);
let coin1126 = new Coin(row26X,row1Y + 200);
let coin1226 = new Coin(row26X,row1Y + 220);
let coin1326 = new Coin(row26X,row1Y + 240);
let coin1426 = new Coin(row26X,row1Y + 260);
let coin1526 = new Coin(row26X,row1Y + 280);
let coin1626 = new Coin(row26X,row1Y + 300);
let coin1726 = new Coin(row26X,row1Y + 320);
let coin1826 = new Coin(row26X,row1Y + 340);
let coin1926 = new Coin(row26X,row1Y + 360);
let coin2026 = new Coin(row26X,row1Y + 380);
let coin2126 = new Coin(row26X,row1Y + 400);
let coin2226 = new Coin(row26X,row1Y + 420);
let coin2326 = new Coin(row26X,row1Y + 440);
let coin2426 = new Coin(row26X,row1Y + 460);
let coin2526 = new Coin(row26X,row1Y + 480);
let coin2626 = new Coin(row26X,row1Y + 500);


let coin0602 = new Coin(row1X + 20, row6Y);
let coin0603 = new Coin(row1X + 40, row6Y);
let coin0604 = new Coin(row1X + 60, row6Y);
let coin0605 = new Coin(row1X + 80, row6Y);

let coin1102 = new Coin(row1X + 20, row11Y);
let coin1103 = new Coin(row1X + 40, row11Y);
let coin1104 = new Coin(row1X + 60, row11Y);
let coin1105 = new Coin(row1X + 80, row11Y);

let coin1502 = new Coin(row1X + 20, row15Y);
let coin1503 = new Coin(row1X + 40, row15Y);
let coin1504 = new Coin(row1X + 60, row15Y);
let coin1505 = new Coin(row1X + 80, row15Y);

let coin1902 = new Coin(row1X + 20, row19Y);
let coin1903 = new Coin(row1X + 40, row19Y);
let coin1904 = new Coin(row1X + 60, row19Y);
let coin1905 = new Coin(row1X + 80, row19Y);

let coin2402 = new Coin(row1X + 20, row24Y);
let coin2403 = new Coin(row1X + 40, row24Y);
let coin2404 = new Coin(row1X + 60, row24Y);
let coin2405 = new Coin(row1X + 80, row24Y);


let coin0407 = new Coin(row6X + 20, row4Y);
let coin0408 = new Coin(row6X + 40, row4Y);
let coin0409 = new Coin(row6X + 60, row4Y);
let coin0410 = new Coin(row6X + 80, row4Y);

let coin0807 = new Coin(row6X + 20, row8Y);
let coin0808 = new Coin(row6X + 40, row8Y);
let coin0809 = new Coin(row6X + 60, row8Y);
let coin0810 = new Coin(row6X + 80, row8Y);

let coin1307 = new Coin(row6X + 20, row13Y);
let coin1308 = new Coin(row6X + 40, row13Y);
let coin1309 = new Coin(row6X + 60, row13Y);
let coin1310 = new Coin(row6X + 80, row13Y);

let coin2207 = new Coin(row6X + 20, row22Y);
let coin2208 = new Coin(row6X + 40, row22Y);
let coin2209 = new Coin(row6X + 60, row22Y);
let coin2210 = new Coin(row6X + 80, row22Y);


let coin0612 = new Coin(row11X + 20, row6Y);
let coin0613 = new Coin(row11X + 40, row6Y);
let coin0614 = new Coin(row11X + 60, row6Y);
let coin0615 = new Coin(row11X + 80, row6Y);

let coin1112 = new Coin(row11X + 20, row11Y);
let coin1113 = new Coin(row11X + 40, row11Y);
let coin1114 = new Coin(row11X + 60, row11Y);
let coin1115 = new Coin(row11X + 80, row11Y);

let coin1512 = new Coin(row11X + 20, row15Y);
let coin1513 = new Coin(row11X + 40, row15Y);
let coin1514 = new Coin(row11X + 60, row15Y);
let coin1515 = new Coin(row11X + 80, row15Y);

let coin1812 = new Coin(row11X + 20, row18Y);
let coin1813 = new Coin(row11X + 40, row18Y);
let coin1814 = new Coin(row11X + 60, row18Y);
let coin1815 = new Coin(row11X + 80, row18Y);

let coin2412 = new Coin(row11X + 20, row24Y);
let coin2413 = new Coin(row11X + 40, row24Y);
let coin2414 = new Coin(row11X + 60, row24Y);
let coin2415 = new Coin(row11X + 80, row24Y);


let coin0417 = new Coin(row16X + 20, row4Y);
let coin0418 = new Coin(row16X + 40, row4Y);
let coin0419 = new Coin(row16X + 60, row4Y);
let coin0420 = new Coin(row16X + 80, row4Y);

let coin0817 = new Coin(row16X + 20, row8Y);
let coin0818 = new Coin(row16X + 40, row8Y);
let coin0819 = new Coin(row16X + 60, row8Y);
let coin0820 = new Coin(row16X + 80, row8Y);

let coin1317 = new Coin(row16X + 20, row13Y);
let coin1318 = new Coin(row16X + 40, row13Y);
let coin1319 = new Coin(row16X + 60, row13Y);
let coin1320 = new Coin(row16X + 80, row13Y);

let coin1917 = new Coin(row16X + 20, row19Y);
let coin1918 = new Coin(row16X + 40, row19Y);
let coin1919 = new Coin(row16X + 60, row19Y);
let coin1920 = new Coin(row16X + 80, row19Y);

let coin2217 = new Coin(row16X + 20, row22Y);
let coin2218 = new Coin(row16X + 40, row22Y);
let coin2219 = new Coin(row16X + 60, row22Y);
let coin2220 = new Coin(row16X + 80, row22Y);


let coin0622 = new Coin(row21X + 20, row6Y);
let coin0623 = new Coin(row21X + 40, row6Y);
let coin0624 = new Coin(row21X + 60, row6Y);
let coin0625 = new Coin(row21X + 80, row6Y);

let coin1122 = new Coin(row21X + 20, row11Y);
let coin1123 = new Coin(row21X + 40, row11Y);
let coin1124 = new Coin(row21X + 60, row11Y);
let coin1125 = new Coin(row21X + 80, row11Y);

let coin1722 = new Coin(row21X + 20, row17Y);
let coin1723 = new Coin(row21X + 40, row17Y);
let coin1724 = new Coin(row21X + 60, row17Y);
let coin1725 = new Coin(row21X + 80, row17Y);

let coin2422 = new Coin(row21X + 20, row24Y);
let coin2423 = new Coin(row21X + 40, row24Y);
let coin2424 = new Coin(row21X + 60, row24Y);
let coin2425 = new Coin(row21X + 80, row24Y);


let coin0101 = new Coin(row1X,row1Y);
let coin0102 = new Coin(row1X + 20,row1Y);
let coin0103 = new Coin(row1X + 40,row1Y);
let coin0104 = new Coin(row1X + 60,row1Y);
let coin0105 = new Coin(row1X + 80,row1Y);
let coin0106 = new Coin(row1X + 100,row1Y);
let coin0107 = new Coin(row1X + 120,row1Y);
let coin0108 = new Coin(row1X + 140,row1Y);
let coin0109 = new Coin(row1X + 160,row1Y);
let coin0110 = new Coin(row1X + 180,row1Y);
let coin0111 = new Coin(row1X + 200,row1Y);
let coin0112 = new Coin(row1X + 220,row1Y);
let coin0113 = new Coin(row1X + 240,row1Y);
let coin0114 = new Coin(row1X + 260,row1Y);
let coin0115 = new Coin(row1X + 280,row1Y);
let coin0116 = new Coin(row1X + 300,row1Y);
let coin0117 = new Coin(row1X + 320,row1Y);
let coin0118 = new Coin(row1X + 340,row1Y);
let coin0119 = new Coin(row1X + 360,row1Y);
let coin0120 = new Coin(row1X + 380,row1Y);
let coin0121 = new Coin(row1X + 400,row1Y);
let coin0122 = new Coin(row1X + 420,row1Y);
let coin0123 = new Coin(row1X + 440,row1Y);
let coin0124 = new Coin(row1X + 460,row1Y);
let coin0125 = new Coin(row1X + 480,row1Y);
let coin0126 = new Coin(row1X + 500,row1Y);

let coin2701 = new Coin(row1X,row27Y);
let coin2702 = new Coin(row1X + 20,row27Y);
let coin2703 = new Coin(row1X + 40,row27Y);
let coin2704 = new Coin(row1X + 60,row27Y);
let coin2705 = new Coin(row1X + 80,row27Y);
let coin2706 = new Coin(row1X + 100,row27Y);
let coin2707 = new Coin(row1X + 120,row27Y);
let coin2708 = new Coin(row1X + 140,row27Y);
let coin2709 = new Coin(row1X + 160,row27Y);
let coin2710 = new Coin(row1X + 180,row27Y);
let coin2711 = new Coin(row1X + 200,row27Y);
let coin2712 = new Coin(row1X + 220,row27Y);
let coin2713 = new Coin(row1X + 240,row27Y);
let coin2714 = new Coin(row1X + 260,row27Y);
let coin2715 = new Coin(row1X + 280,row27Y);
let coin2716 = new Coin(row1X + 300,row27Y);
let coin2717 = new Coin(row1X + 320,row27Y);
let coin2718 = new Coin(row1X + 340,row27Y);
let coin2719 = new Coin(row1X + 360,row27Y);
let coin2720 = new Coin(row1X + 380,row27Y);
let coin2721 = new Coin(row1X + 400,row27Y);
let coin2722 = new Coin(row1X + 420,row27Y);
let coin2723 = new Coin(row1X + 440,row27Y);
let coin2724 = new Coin(row1X + 460,row27Y);
let coin2725 = new Coin(row1X + 480,row27Y);
let coin2726 = new Coin(row1X + 500,row27Y);

function coinDraw(){
coin0201.Draw();
coin0301.Draw();
coin0401.Draw();
coin0501.Draw();
coin0601.Draw();
coin0701.Draw();
coin0801.Draw();
coin0901.Draw();
coin1001.Draw();
coin1101.Draw();
coin1201.Draw();
coin1301.Draw();
coin1401.Draw();
coin1501.Draw();
coin1601.Draw();
coin1701.Draw();
coin1801.Draw();
coin1901.Draw();
coin2001.Draw();
coin2101.Draw();
coin2201.Draw();
coin2301.Draw();
coin2401.Draw();
coin2501.Draw();
coin2601.Draw();
coin0206.Draw();
coin0306.Draw();
coin0406.Draw();
coin0506.Draw();
coin0606.Draw();
coin0706.Draw();
coin0806.Draw();
coin0906.Draw();
coin1006.Draw();
coin1106.Draw();
coin1206.Draw();
coin1306.Draw();
coin1406.Draw();
coin1506.Draw();
coin1606.Draw();
coin1706.Draw();
coin1806.Draw();
coin1906.Draw();
coin2006.Draw();
coin2106.Draw();
coin2206.Draw();
coin2306.Draw();
coin2406.Draw();
coin2506.Draw();
coin2606.Draw();
coin0211.Draw();
coin0311.Draw();
coin0411.Draw();
coin0511.Draw();
coin0611.Draw();
coin0711.Draw();
coin0811.Draw();
coin0911.Draw();
coin1011.Draw();
coin1111.Draw();
coin1211.Draw();
coin1311.Draw();
coin1411.Draw();
coin1511.Draw();
coin1611.Draw();
coin1711.Draw();
coin1811.Draw();
coin1911.Draw();
coin2011.Draw();
coin2111.Draw();
coin2211.Draw();
coin2311.Draw();
coin2411.Draw();
coin2511.Draw();
coin2611.Draw();
coin0216.Draw();
coin0316.Draw();
coin0416.Draw();
coin0516.Draw();
coin0616.Draw();
coin0716.Draw();
coin0816.Draw();
coin0916.Draw();
coin1016.Draw();
coin1116.Draw();
coin1216.Draw();
coin1316.Draw();
coin1416.Draw();
coin1516.Draw();
coin1616.Draw();
coin1716.Draw();
coin1816.Draw();
coin1916.Draw();
coin2016.Draw();
coin2116.Draw();
coin2216.Draw();
coin2316.Draw();
coin2416.Draw();
coin2516.Draw();
coin2616.Draw();
coin0221.Draw();
coin0321.Draw();
coin0421.Draw();
coin0521.Draw();
coin0621.Draw();
coin0721.Draw();
coin0821.Draw();
coin0921.Draw();
coin1021.Draw();
coin1121.Draw();
coin1221.Draw();
coin1321.Draw();
coin1421.Draw();
coin1521.Draw();
coin1621.Draw();
coin1721.Draw();
coin1821.Draw();
coin1921.Draw();
coin2021.Draw();
coin2121.Draw();
coin2221.Draw();
coin2321.Draw();
coin2421.Draw();
coin2521.Draw();
coin2621.Draw();
coin0226.Draw();
coin0326.Draw();
coin0426.Draw();
coin0526.Draw();
coin0626.Draw();
coin0726.Draw();
coin0826.Draw();
coin0926.Draw();
coin1026.Draw();
coin1126.Draw();
coin1226.Draw();
coin1326.Draw();
coin1426.Draw();
coin1526.Draw();
coin1626.Draw();
coin1726.Draw();
coin1826.Draw();
coin1926.Draw();
coin2026.Draw();
coin2126.Draw();
coin2226.Draw();
coin2326.Draw();
coin2426.Draw();
coin2526.Draw();
coin2626.Draw();
coin0602.Draw();
coin0603.Draw();
coin0604.Draw();
coin0605.Draw();
coin1102.Draw();
coin1103.Draw();
coin1104.Draw();
coin1105.Draw();
coin1502.Draw();
coin1503.Draw();
coin1504.Draw();
coin1505.Draw();
coin1902.Draw();
coin1903.Draw();
coin1904.Draw();
coin1905.Draw();
coin2402.Draw();
coin2403.Draw();
coin2404.Draw();
coin2405.Draw();
coin0407.Draw();
coin0408.Draw();
coin0409.Draw();
coin0410.Draw();
coin0807.Draw();
coin0808.Draw();
coin0809.Draw();
coin0810.Draw();
coin1307.Draw();
coin1308.Draw();
coin1309.Draw();
coin1310.Draw();
coin2207.Draw();
coin2208.Draw();
coin2209.Draw();
coin2210.Draw();
coin0612.Draw();
coin0613.Draw();
coin0614.Draw();
coin0615.Draw();
coin1112.Draw();
coin1113.Draw();
coin1114.Draw();
coin1115.Draw();
coin1512.Draw();
coin1513.Draw();
coin1514.Draw();
coin1515.Draw();
coin1812.Draw();
coin1813.Draw();
coin1814.Draw();
coin1815.Draw();
coin2412.Draw();
coin2413.Draw();
coin2414.Draw();
coin2415.Draw();
coin0417.Draw();
coin0418.Draw();
coin0419.Draw();
coin0420.Draw();
coin0817.Draw();
coin0818.Draw();
coin0819.Draw();
coin0820.Draw();
coin1317.Draw();
coin1318.Draw();
coin1319.Draw();
coin1320.Draw();
coin1917.Draw();
coin1918.Draw();
coin1919.Draw();
coin1920.Draw();
coin2217.Draw();
coin2218.Draw();
coin2219.Draw();
coin2220.Draw();
coin0622.Draw();
coin0623.Draw();
coin0624.Draw();
coin0625.Draw();
coin1122.Draw();
coin1123.Draw();
coin1124.Draw();
coin1125.Draw();
coin1722.Draw();
coin1723.Draw();
coin1724.Draw();
coin1725.Draw();
coin2422.Draw();
coin2423.Draw();
coin2424.Draw();
coin2425.Draw();
coin0101.Draw();
coin0102.Draw();
coin0103.Draw();
coin0104.Draw();
coin0105.Draw();
coin0106.Draw();
coin0107.Draw();
coin0108.Draw();
coin0109.Draw();
coin0110.Draw();
coin0111.Draw();
coin0112.Draw();
coin0113.Draw();
coin0114.Draw();
coin0115.Draw();
coin0116.Draw();
coin0117.Draw();
coin0118.Draw();
coin0119.Draw();
coin0120.Draw();
coin0121.Draw();
coin0122.Draw();
coin0123.Draw();
coin0124.Draw();
coin0125.Draw();
coin0126.Draw();
coin2701.Draw();
coin2702.Draw();
coin2703.Draw();
coin2704.Draw();
coin2705.Draw();
coin2706.Draw();
coin2707.Draw();
coin2708.Draw();
coin2709.Draw();
coin2710.Draw();
coin2717.Draw();
coin2718.Draw();
coin2719.Draw();
coin2720.Draw();
coin2721.Draw();
coin2722.Draw();
coin2723.Draw();
coin2724.Draw();
coin2725.Draw();
coin2726.Draw();
}

function rectDraw(){
    //4각형
  noStroke()
  if(coin0101.coinX == 10000 && coin0102.coinX == 10000 && coin0103.coinX == 10000 && coin0104.coinX == 10000 && coin0105.coinX == 10000 && coin0106.coinX == 10000 && coin0206.coinX == 10000 && coin0306.coinX == 10000 && coin0406.coinX == 10000 && coin0506.coinX == 10000 && coin0606.coinX == 10000 && coin0201.coinX == 10000 && coin0301.coinX == 10000 && coin0401.coinX == 10000 && coin0501.coinX == 10000 && coin0601.coinX == 10000 && coin0602.coinX == 10000 && coin0603.coinX == 10000 && coin0604.coinX == 10000 && coin0605.coinX == 10000 && coin0121.coinX == 10000 && coin0122.coinX == 10000 && coin0123.coinX == 10000 && coin0124.coinX == 10000 && coin0125.coinX == 10000 && coin0126.coinX == 10000 && coin0226.coinX == 10000 && coin0326.coinX == 10000 && coin0426.coinX == 10000 && coin0526.coinX == 10000 && coin0626.coinX == 10000 && coin0621.coinX == 10000 && coin0622.coinX == 10000 && coin0623.coinX == 10000 && coin0624.coinX == 10000 && coin0625.coinX == 10000 && coin0221.coinX == 10000 && coin0321.coinX == 10000 && coin0421.coinX == 10000 && coin0521.coinX == 10000 && coin2401.coinX == 10000 && coin2402.coinX == 10000 && coin2403.coinX == 10000 && coin2404.coinX == 10000 && coin2405.coinX == 10000 && coin2406.coinX == 10000 && coin2506.coinX == 10000 && coin2606.coinX == 10000 && coin2706.coinX == 10000 && coin2701.coinX == 10000 && coin2702.coinX == 10000 && coin2703.coinX == 10000 && coin2704.coinX == 10000 && coin2705.coinX == 10000 && coin2501.coinX == 10000 && coin2601.coinX == 10000 && coin2421.coinX == 10000 && coin2422.coinX == 10000 && coin2423.coinX == 10000 && coin2424.coinX == 10000 && coin2425.coinX == 10000 && coin2426.coinX == 10000 && coin2526.coinX == 10000 && coin2626.coinX == 10000 && coin2726.coinX == 10000 && coin2721.coinX == 10000 && coin2722.coinX == 10000 && coin2723.coinX == 10000 && coin2724.coinX == 10000 && coin2725.coinX == 10000 && coin2521.coinX == 10000 && coin2621.coinX == 10000){
    squareDeath ++ ;
    if(squareDeath < 600) {
    power = true;
    }
  }
  
  push();
  fill('blue');
  if(coin0101.coinX == 10000 && coin0102.coinX == 10000 && coin0103.coinX == 10000 && coin0104.coinX == 10000 && coin0105.coinX == 10000 && coin0106.coinX == 10000 && coin0201.coinX == 10000 && coin0301.coinX == 10000 && coin0401.coinX == 10000 && coin0501.coinX == 10000 && coin0601.coinX == 10000 && coin0602.coinX == 10000 && coin0603.coinX == 10000 && coin0604.coinX == 10000 && coin0605.coinX == 10000 && coin0606.coinX == 10000 && coin0206.coinX == 10000 && coin0306.coinX == 10000 && coin0406.coinX == 10000 && coin0506.coinX == 10000) {
    quad(row1X,row1Y,row6X,row1Y,row6X,row6Y,row1X,row6Y);
  }
  if(coin0106.coinX == 10000 && coin0107.coinX == 10000 && coin0108.coinX == 10000 && coin0109.coinX == 10000 && coin0110.coinX == 10000 && coin0111.coinX == 10000 && coin0211.coinX == 10000 && coin0311.coinX == 10000 && coin0411.coinX == 10000 && coin0206.coinX == 10000 && coin0306.coinX == 10000 && coin0406.coinX == 10000 && coin0407.coinX == 10000 && coin0408.coinX == 10000 && coin0409.coinX == 10000 && coin0410.coinX == 10000) {
    quad(row6X,row1Y,row11X,row1Y,row11X,row4Y,row6X,row4Y);
  }
  if(coin0111.coinX == 10000 && coin0112.coinX == 10000 && coin0113.coinX == 10000 && coin0114.coinX == 10000 && coin0115.coinX == 10000 && coin0116.coinX == 10000 && coin0211.coinX == 10000 && coin0311.coinX == 10000 && coin0411.coinX == 10000 && coin0511.coinX == 10000 && coin0611.coinX == 10000 && coin0612.coinX == 10000 && coin0613.coinX == 10000 && coin0614.coinX == 10000 && coin0615.coinX == 10000 && coin0616.coinX == 10000 && coin0216.coinX == 10000 && coin0316.coinX == 10000 && coin0416.coinX == 10000 && coin0516.coinX == 10000) {
    quad(row11X,row1Y,row16X,row1Y,row16X,row6Y,row11X,row6Y);
  }
  if(coin0116.coinX == 10000 && coin0117.coinX == 10000 && coin0118.coinX == 10000 && coin0119.coinX == 10000 && coin0120.coinX == 10000 && coin0121.coinX == 10000 && coin0221.coinX == 10000 && coin0321.coinX == 10000 && coin0421.coinX == 10000 && coin0216.coinX == 10000 && coin0316.coinX == 10000 && coin0416.coinX == 10000 && coin0417.coinX == 10000 && coin0418.coinX == 10000 && coin0419.coinX == 10000 && coin0420.coinX == 10000) {
    quad(row16X,row1Y,row21X,row1Y,row21X,row4Y,row16X,row4Y);
  }
  if(coin0121.coinX == 10000 && coin0122.coinX == 10000 && coin0123.coinX == 10000 && coin0124.coinX == 10000 && coin0125.coinX == 10000 && coin0126.coinX == 10000 && coin0221.coinX == 10000 && coin0321.coinX == 10000 && coin0421.coinX == 10000 && coin0521.coinX == 10000 && coin0621.coinX == 10000 && coin0622.coinX == 10000 && coin0623.coinX == 10000 && coin0624.coinX == 10000 && coin0625.coinX == 10000 && coin0626.coinX == 10000 && coin0226.coinX == 10000 && coin0326.coinX == 10000 && coin0426.coinX == 10000 && coin0526.coinX == 10000) {
    quad(row21X,row1Y,row26X,row1Y,row26X,row6Y,row21X,row6Y);
  }
  if(coin0406.coinX == 10000 && coin0407.coinX == 10000 && coin0408.coinX == 10000 && coin0409.coinX == 10000 && coin0410.coinX == 10000 && coin0411.coinX == 10000 && coin0511.coinX == 10000 && coin0611.coinX == 10000 && coin0711.coinX == 10000 && coin0811.coinX == 10000 && coin0806.coinX == 10000 && coin0807.coinX == 10000 && coin0808.coinX == 10000 && coin0809.coinX == 10000 && coin0810.coinX == 10000 && coin0506.coinX == 10000 && coin0606.coinX == 10000 && coin0706.coinX == 10000) {
    quad(row6X,row4Y,row11X,row4Y,row11X,row8Y,row6X,row8Y);
  }
  if(coin0416.coinX == 10000 && coin0417.coinX == 10000 && coin0418.coinX == 10000 && coin0419.coinX == 10000 && coin0420.coinX == 10000 && coin0421.coinX == 10000 && coin0521.coinX == 10000 && coin0621.coinX == 10000 && coin0721.coinX == 10000 && coin0821.coinX == 10000 && coin0816.coinX == 10000 && coin0817.coinX == 10000 && coin0818.coinX == 10000 && coin0819.coinX == 10000 && coin0820.coinX == 10000 && coin0516.coinX == 10000 && coin0616.coinX == 10000 && coin0716.coinX == 10000) {
    quad(row16X,row4Y,row21X,row4Y,row21X,row8Y,row16X,row8Y);
  }
  if(coin0601.coinX == 10000 && coin0602.coinX == 10000 && coin0603.coinX == 10000 && coin0604.coinX == 10000 && coin0605.coinX == 10000 && coin0606.coinX == 10000 && coin0701.coinX == 10000 && coin0801.coinX == 10000 && coin0901.coinX == 10000 && coin1001.coinX == 10000 && coin1101.coinX == 10000 && coin1102.coinX == 10000 && coin1103.coinX == 10000 && coin1104.coinX == 10000 && coin1105.coinX == 10000 && coin1106.coinX == 10000 && coin0706.coinX == 10000 && coin0806.coinX == 10000 && coin0906.coinX == 10000 && coin1006.coinX == 10000) {
    quad(row1X,row6Y,row6X,row6Y,row6X,row11Y,row1X,row11Y);
  }
  if(coin0611.coinX == 10000 && coin0612.coinX == 10000 && coin0613.coinX == 10000 && coin0614.coinX == 10000 && coin0615.coinX == 10000 && coin0616.coinX == 10000 && coin0711.coinX == 10000 && coin0811.coinX == 10000 && coin0911.coinX == 10000 && coin1011.coinX == 10000 && coin1111.coinX == 10000 && coin1112.coinX == 10000 && coin1113.coinX == 10000 && coin1114.coinX == 10000 && coin1115.coinX == 10000 && coin1116.coinX == 10000 && coin0716.coinX == 10000 && coin0816.coinX == 10000 && coin0916.coinX == 10000 && coin1016.coinX == 10000) {
    quad(row11X,row6Y,row16X,row6Y,row16X,row11Y,row11X,row11Y);
  }
  if(coin0621.coinX == 10000 && coin0622.coinX == 10000 && coin0623.coinX == 10000 && coin0624.coinX == 10000 && coin0625.coinX == 10000 && coin0626.coinX == 10000 && coin0721.coinX == 10000 && coin0821.coinX == 10000 && coin0921.coinX == 10000 && coin1021.coinX == 10000 && coin1121.coinX == 10000 && coin1122.coinX == 10000 && coin1123.coinX == 10000 && coin1124.coinX == 10000 && coin1125.coinX == 10000 && coin1126.coinX == 10000 && coin0726.coinX == 10000 && coin0826.coinX == 10000 && coin0926.coinX == 10000 && coin1026.coinX == 10000) {
    quad(row21X,row6Y,row26X,row6Y,row26X,row11Y,row21X,row11Y);
  }
  if(coin0806.coinX == 10000 && coin0807.coinX == 10000 && coin0808.coinX == 10000 && coin0809.coinX == 10000 && coin0810.coinX == 10000 && coin0811.coinX == 10000 && coin0906.coinX == 10000 && coin1006.coinX == 10000 && coin1106.coinX == 10000 && coin1206.coinX == 10000 && coin1306.coinX == 10000 && coin1307.coinX == 10000 && coin1308.coinX == 10000 && coin1309.coinX == 10000 && coin1310.coinX == 10000 && coin0311.coinX == 10000 && coin0911.coinX == 10000 && coin1011.coinX == 10000 && coin1111.coinX == 10000 && coin1211.coinX == 10000) {
    quad(row6X,row8Y,row11X,row8Y,row11X,row13Y,row6X,row13Y);
  }
  if(coin0816.coinX == 10000 && coin0817.coinX == 10000 && coin0818.coinX == 10000 && coin0819.coinX == 10000 && coin0820.coinX == 10000 && coin0821.coinX == 10000 && coin0916.coinX == 10000 && coin1016.coinX == 10000 && coin1116.coinX == 10000 && coin1216.coinX == 10000 && coin1316.coinX == 10000 && coin1317.coinX == 10000 && coin1318.coinX == 10000 && coin1319.coinX == 10000 && coin1320.coinX == 10000 && coin0321.coinX == 10000 && coin0921.coinX == 10000 && coin1021.coinX == 10000 && coin1121.coinX == 10000 && coin1221.coinX == 10000) {
    quad(row16X,row8Y,row21X,row8Y,row21X,row13Y,row16X,row13Y);
  }
  if(coin1101.coinX == 10000 && coin1102.coinX == 10000 && coin1103.coinX == 10000 && coin1104.coinX == 10000 && coin1105.coinX == 10000 && coin1106.coinX == 10000 && coin1201.coinX == 10000 && coin1301.coinX == 10000 && coin1401.coinX == 10000 && coin1501.coinX == 10000 && coin1502.coinX == 10000 && coin1503.coinX == 10000 && coin1504.coinX == 10000 && coin1505.coinX == 10000 && coin1506.coinX == 10000 && coin1206.coinX == 10000 && coin1306.coinX == 10000 && coin1406.coinX == 10000) {
    quad(row1X,row11Y,row6X,row11Y,row6X,row15Y,row1X,row15Y);
  }
  if(coin1111.coinX == 10000 && coin1112.coinX == 10000 && coin1113.coinX == 10000 && coin1114.coinX == 10000 && coin1115.coinX == 10000 && coin1116.coinX == 10000 && coin1211.coinX == 10000 && coin1311.coinX == 10000 && coin1411.coinX == 10000 && coin1511.coinX == 10000 && coin1512.coinX == 10000 && coin1513.coinX == 10000 && coin1514.coinX == 10000 && coin1515.coinX == 10000 && coin1516.coinX == 10000 && coin1216.coinX == 10000 && coin1316.coinX == 10000 && coin1416.coinX == 10000) {
    quad(row11X,row11Y,row16X,row11Y,row16X,row15Y,row11X,row15Y);
  }
  if(coin1121.coinX == 10000 && coin1122.coinX == 10000 && coin1123.coinX == 10000 && coin1124.coinX == 10000 && coin1125.coinX == 10000 && coin1126.coinX == 10000 && coin1221.coinX == 10000 && coin1321.coinX == 10000 && coin1421.coinX == 10000 && coin1521.coinX == 10000 && coin1621.coinX == 10000 && coin1721.coinX == 10000 && coin1722.coinX == 10000 && coin1723.coinX == 10000 && coin1724.coinX == 10000 && coin1725.coinX == 10000 && coin1726.coinX == 10000 && coin1226.coinX == 10000 && coin1326.coinX == 10000 && coin1426.coinX == 10000 && coin1526.coinX == 10000 && coin1626.coinX == 10000) {
    quad(row21X,row11Y,row26X,row11Y,row26X,row17Y,row21X,row17Y);
  }
  if(coin1306.coinX == 10000 && coin1307.coinX == 10000 && coin1308.coinX == 10000 && coin1309.coinX == 10000 && coin1310.coinX == 10000 && coin1311.coinX == 10000 && coin1406.coinX == 10000 && coin1506.coinX == 10000 && coin1606.coinX == 10000 && coin1706.coinX == 10000 && coin1806.coinX == 10000 && coin1906.coinX == 10000 && coin2006.coinX == 10000 && coin2106.coinX == 10000 && coin2206.coinX == 10000 && coin2207.coinX == 10000 && coin2208.coinX == 10000 && coin2209.coinX == 10000 && coin2210.coinX == 10000 && coin2211.coinX == 10000 && coin1411.coinX == 10000 && coin1511.coinX == 10000 && coin1611.coinX == 10000 && coin1711.coinX == 10000 && coin1811.coinX == 10000 && coin1911.coinX == 10000 && coin2011.coinX == 10000 && coin2111.coinX == 10000) {
    quad(row6X,row13Y,row11X,row13Y,row11X,row22Y,row6X,row22Y);
  }
  if(coin1316.coinX == 10000 && coin1317.coinX == 10000 && coin1318.coinX == 10000 && coin1319.coinX == 10000 && coin1320.coinX == 10000 && coin1321.coinX == 10000 && coin1416.coinX == 10000 && coin1516.coinX == 10000 && coin1616.coinX == 10000 && coin1716.coinX == 10000 && coin1816.coinX == 10000 && coin1916.coinX == 10000 && coin1917.coinX == 10000 && coin1918.coinX == 10000 && coin1919.coinX == 10000 && coin1920.coinX == 10000 && coin1921.coinX == 10000 && coin1421.coinX == 10000 && coin1521.coinX == 10000 && coin1621.coinX == 10000 && coin1721.coinX == 10000 && coin1821.coinX == 10000) {
    quad(row16X,row13Y,row21X,row13Y,row21X,row19Y,row16X,row19Y);
  }
  if(coin1501.coinX == 10000 && coin1502.coinX == 10000 && coin1503.coinX == 10000 && coin1504.coinX == 10000 && coin1505.coinX == 10000 && coin1506.coinX == 10000 && coin1601.coinX == 10000 && coin1701.coinX == 10000 && coin1801.coinX == 10000 && coin1901.coinX == 10000 && coin1902.coinX == 10000 && coin1903.coinX == 10000 && coin1904.coinX == 10000 && coin1905.coinX == 10000 && coin1906.coinX == 10000 && coin1606.coinX == 10000 && coin1706.coinX == 10000 && coin1806.coinX == 10000) {
    quad(row1X,row15Y,row6X,row15Y,row6X,row19Y,row1X,row19Y);
  }
  if(coin1511.coinX == 10000 && coin1512.coinX == 10000 && coin1513.coinX == 10000 && coin1514.coinX == 10000 && coin1515.coinX == 10000 && coin1516.coinX == 10000 && coin1611.coinX == 10000 && coin1711.coinX == 10000 && coin1811.coinX == 10000 && coin1812.coinX == 10000 && coin1813.coinX == 10000 && coin1814.coinX == 10000 && coin1815.coinX == 10000 && coin1816.coinX == 10000 && coin1616.coinX == 10000 && coin1716.coinX == 10000) {
    quad(row11X,row15Y,row16X,row15Y,row16X,row18Y,row11X,row18Y);
  }
  if(coin1721.coinX == 10000 && coin1722.coinX == 10000 && coin1723.coinX == 10000 && coin1724.coinX == 10000 && coin1725.coinX == 10000 && coin1726.coinX == 10000 && coin1821.coinX == 10000 && coin1921.coinX == 10000 && coin2021.coinX == 10000 && coin2121.coinX == 10000 && coin2221.coinX == 10000 && coin2321.coinX == 10000 && coin2421.coinX == 10000 && coin2422.coinX == 10000 && coin2423.coinX == 10000 && coin2424.coinX == 10000 && coin2425.coinX == 10000 && coin2426.coinX == 10000 && coin1826.coinX == 10000 && coin1926.coinX == 10000 && coin2026.coinX == 10000 && coin2126.coinX == 10000 && coin2226.coinX == 10000 && coin2326.coinX == 10000) {
    quad(row21X,row17Y,row26X,row17Y,row26X,row24Y,row21X,row24Y);
  }
  if(coin1901.coinX == 10000 && coin1902.coinX == 10000 && coin1903.coinX == 10000 && coin1904.coinX == 10000 && coin1905.coinX == 10000 && coin1906.coinX == 10000 && coin2001.coinX == 10000 && coin2101.coinX == 10000 && coin2201.coinX == 10000 && coin2301.coinX == 10000 && coin2401.coinX == 10000 && coin2402.coinX == 10000 && coin2403.coinX == 10000 && coin2404.coinX == 10000 && coin2405.coinX == 10000 && coin2406.coinX == 10000 && coin2006.coinX == 10000 && coin2106.coinX == 10000 && coin2206.coinX == 10000 && coin2306.coinX == 10000) {
    quad(row1X,row19Y,row6X,row19Y,row6X,row24Y,row1X,row24Y);
  }
  if(coin1811.coinX == 10000 && coin1812.coinX == 10000 && coin1813.coinX == 10000 && coin1814.coinX == 10000 && coin1815.coinX == 10000 && coin1816.coinX == 10000 && coin1911.coinX == 10000 && coin2011.coinX == 10000 && coin2111.coinX == 10000 && coin2211.coinX == 10000 && coin2321.coinX == 10000 && coin2411.coinX == 10000 && coin2412.coinX == 10000 && coin2413.coinX == 10000 && coin2414.coinX == 10000 && coin2415.coinX == 10000 && coin2416.coinX == 10000 && coin1916.coinX == 10000 && coin2016.coinX == 10000 && coin2116.coinX == 10000 && coin2216.coinX == 10000 && coin2316.coinX == 10000) {
    quad(row11X,row18Y,row16X,row18Y,row16X,row24Y,row11X,row24Y);
  }
  if(coin1916.coinX == 10000 && coin1917.coinX == 10000 && coin1918.coinX == 10000 && coin1919.coinX == 10000 && coin1920.coinX == 10000 && coin1921.coinX == 10000 && coin2016.coinX == 10000 && coin2116.coinX == 10000 && coin2216.coinX == 10000 && coin2217.coinX == 10000 && coin2218.coinX == 10000 && coin2219.coinX == 10000 && coin2220.coinX == 10000 && coin2221.coinX == 10000 && coin2021.coinX == 10000 && coin2121.coinX == 10000) {
    quad(row16X,row19Y,row21X,row19Y,row21X,row22Y,row16X,row22Y);
  }
  if(coin2401.coinX == 10000 && coin2402.coinX == 10000 && coin2403.coinX == 10000 && coin2404.coinX == 10000 && coin2405.coinX == 10000 && coin2406.coinX == 10000 && coin2501.coinX == 10000 && coin2601.coinX == 10000 && coin2701.coinX == 10000 && coin2702.coinX == 10000 && coin2703.coinX == 10000 && coin2704.coinX == 10000 && coin2705.coinX == 10000 && coin2706.coinX == 10000 && coin2506.coinX == 10000 && coin2606.coinX == 10000) {
    quad(row1X,row24Y,row6X,row24Y,row6X,row27Y,row1X,row27Y);
  }
  if(coin2206.coinX == 10000 && coin2207.coinX == 10000 && coin2208.coinX == 10000 && coin2209.coinX == 10000 && coin2210.coinX == 10000 && coin2211.coinX == 10000 && coin2306.coinX == 10000 && coin2406.coinX == 10000 && coin2506.coinX == 10000 && coin2606.coinX == 10000 && coin2706.coinX == 10000 && coin2707.coinX == 10000 && coin2708.coinX == 10000 && coin2709.coinX == 10000 && coin2710.coinX == 10000 && coin2311.coinX == 10000 && coin2411.coinX == 10000 && coin2511.coinX == 10000 && coin2611.coinX == 10000) {
    quad(row6X,row22Y,row11X,row22Y,row11X,row27Y,row6X,row27Y);
  }
  if(coin2411.coinX == 10000 && coin2412.coinX == 10000 && coin2413.coinX == 10000 && coin2414.coinX == 10000 && coin2415.coinX == 10000 && coin2416.coinX == 10000 && coin2511.coinX == 10000 && coin2611.coinX == 10000 && coin2516.coinX == 10000 && coin2616.coinX == 10000) {
    quad(row11X,row24Y,row16X,row24Y,row16X,row27Y,row11X,row27Y);
  }
  if(coin2216.coinX == 10000 && coin2217.coinX == 10000 && coin2218.coinX == 10000 && coin2219.coinX == 10000 && coin2220.coinX == 10000 && coin2221.coinX == 10000 && coin2316.coinX == 10000 && coin2416.coinX == 10000 && coin2516.coinX == 10000 && coin2616.coinX == 10000 && coin2717.coinX == 10000 && coin2718.coinX == 10000 && coin2719.coinX == 10000 && coin2720.coinX == 10000 && coin2721.coinX == 10000 && coin2321.coinX == 10000 && coin2421.coinX == 10000 && coin2521.coinX == 10000 && coin2621.coinX == 10000) {
    quad(row16X,row22Y,row21X,row22Y,row21X,row27Y,row16X,row27Y);
  }
  if(coin2421.coinX == 10000 && coin2422.coinX == 10000 && coin2423.coinX == 10000 && coin2424.coinX == 10000 && coin2425.coinX == 10000 && coin2426.coinX == 10000 && coin2521.coinX == 10000 && coin2621.coinX == 10000 && coin2721.coinX == 10000 && coin2722.coinX == 10000 && coin2723.coinX == 10000 && coin2724.coinX == 10000 && coin2725.coinX == 10000 && coin2726.coinX == 10000 && coin2526.coinX == 10000 && coin2626.coinX == 10000) {
    quad(row21X,row24Y,row26X,row24Y,row26X,row27Y,row21X,row27Y);
  }
  pop();
  
  if(
coin0201.coinX == 10000 &&
coin0301.coinX == 10000 &&
coin0401.coinX == 10000 &&
coin0501.coinX == 10000 &&
coin0601.coinX == 10000 &&
coin0701.coinX == 10000 &&
coin0801.coinX == 10000 &&
coin0901.coinX == 10000 &&
coin1001.coinX == 10000 &&
coin1101.coinX == 10000 &&
coin1201.coinX == 10000 &&
coin1301.coinX == 10000 &&
coin1401.coinX == 10000 &&
coin1501.coinX == 10000 &&
coin1601.coinX == 10000 &&
coin1701.coinX == 10000 &&
coin1801.coinX == 10000 &&
coin1901.coinX == 10000 &&
coin2001.coinX == 10000 &&
coin2101.coinX == 10000 &&
coin2201.coinX == 10000 &&
coin2301.coinX == 10000 &&
coin2401.coinX == 10000 &&
coin2501.coinX == 10000 &&
coin2601.coinX == 10000 &&
coin0206.coinX == 10000 &&
coin0306.coinX == 10000 &&
coin0406.coinX == 10000 &&
coin0506.coinX == 10000 &&
coin0606.coinX == 10000 &&
coin0706.coinX == 10000 &&
coin0806.coinX == 10000 &&
coin0906.coinX == 10000 &&
coin1006.coinX == 10000 &&
coin1106.coinX == 10000 &&
coin1206.coinX == 10000 &&
coin1306.coinX == 10000 &&
coin1406.coinX == 10000 &&
coin1506.coinX == 10000 &&
coin1606.coinX == 10000 &&
coin1706.coinX == 10000 &&
coin1806.coinX == 10000 &&
coin1906.coinX == 10000 &&
coin2006.coinX == 10000 &&
coin2106.coinX == 10000 &&
coin2206.coinX == 10000 &&
coin2306.coinX == 10000 &&
coin2406.coinX == 10000 &&
coin2506.coinX == 10000 &&
coin2606.coinX == 10000 &&
coin0211.coinX == 10000 &&
coin0311.coinX == 10000 &&
coin0411.coinX == 10000 &&
coin0511.coinX == 10000 &&
coin0611.coinX == 10000 &&
coin0711.coinX == 10000 &&
coin0811.coinX == 10000 &&
coin0911.coinX == 10000 &&
coin1011.coinX == 10000 &&
coin1111.coinX == 10000 &&
coin1211.coinX == 10000 &&
coin1311.coinX == 10000 &&
coin1411.coinX == 10000 &&
coin1511.coinX == 10000 &&
coin1611.coinX == 10000 &&
coin1711.coinX == 10000 &&
coin1811.coinX == 10000 &&
coin1911.coinX == 10000 &&
coin2011.coinX == 10000 &&
coin2111.coinX == 10000 &&
coin2211.coinX == 10000 &&
coin2311.coinX == 10000 &&
coin2411.coinX == 10000 &&
coin2511.coinX == 10000 &&
coin2611.coinX == 10000 &&
coin0216.coinX == 10000 &&
coin0316.coinX == 10000 &&
coin0416.coinX == 10000 &&
coin0516.coinX == 10000 &&
coin0616.coinX == 10000 &&
coin0716.coinX == 10000 &&
coin0816.coinX == 10000 &&
coin0916.coinX == 10000 &&
coin1016.coinX == 10000 &&
coin1116.coinX == 10000 &&
coin1216.coinX == 10000 &&
coin1316.coinX == 10000 &&
coin1416.coinX == 10000 &&
coin1516.coinX == 10000 &&
coin1616.coinX == 10000 &&
coin1716.coinX == 10000 &&
coin1816.coinX == 10000 &&
coin1916.coinX == 10000 &&
coin2016.coinX == 10000 &&
coin2116.coinX == 10000 &&
coin2216.coinX == 10000 &&
coin2316.coinX == 10000 &&
coin2416.coinX == 10000 &&
coin2516.coinX == 10000 &&
coin2616.coinX == 10000 &&
coin0221.coinX == 10000 &&
coin0321.coinX == 10000 &&
coin0421.coinX == 10000 &&
coin0521.coinX == 10000 &&
coin0621.coinX == 10000 &&
coin0721.coinX == 10000 &&
coin0821.coinX == 10000 &&
coin0921.coinX == 10000 &&
coin1021.coinX == 10000 &&
coin1121.coinX == 10000 &&
coin1221.coinX == 10000 &&
coin1321.coinX == 10000 &&
coin1421.coinX == 10000 &&
coin1521.coinX == 10000 &&
coin1621.coinX == 10000 &&
coin1721.coinX == 10000 &&
coin1821.coinX == 10000 &&
coin1921.coinX == 10000 &&
coin2021.coinX == 10000 &&
coin2121.coinX == 10000 &&
coin2221.coinX == 10000 &&
coin2321.coinX == 10000 &&
coin2421.coinX == 10000 &&
coin2521.coinX == 10000 &&
coin2621.coinX == 10000 &&
coin0226.coinX == 10000 &&
coin0326.coinX == 10000 &&
coin0426.coinX == 10000 &&
coin0526.coinX == 10000 &&
coin0626.coinX == 10000 &&
coin0726.coinX == 10000 &&
coin0826.coinX == 10000 &&
coin0926.coinX == 10000 &&
coin1026.coinX == 10000 &&
coin1126.coinX == 10000 &&
coin1226.coinX == 10000 &&
coin1326.coinX == 10000 &&
coin1426.coinX == 10000 &&
coin1526.coinX == 10000 &&
coin1626.coinX == 10000 &&
coin1726.coinX == 10000 &&
coin1826.coinX == 10000 &&
coin1926.coinX == 10000 &&
coin2026.coinX == 10000 &&
coin2126.coinX == 10000 &&
coin2226.coinX == 10000 &&
coin2326.coinX == 10000 &&
coin2426.coinX == 10000 &&
coin2526.coinX == 10000 &&
coin2626.coinX == 10000 &&
coin0602.coinX == 10000 &&
coin0603.coinX == 10000 &&
coin0604.coinX == 10000 &&
coin0605.coinX == 10000 &&
coin1102.coinX == 10000 &&
coin1103.coinX == 10000 &&
coin1104.coinX == 10000 &&
coin1105.coinX == 10000 &&
coin1502.coinX == 10000 &&
coin1503.coinX == 10000 &&
coin1504.coinX == 10000 &&
coin1505.coinX == 10000 &&
coin1902.coinX == 10000 &&
coin1903.coinX == 10000 &&
coin1904.coinX == 10000 &&
coin1905.coinX == 10000 &&
coin2402.coinX == 10000 &&
coin2403.coinX == 10000 &&
coin2404.coinX == 10000 &&
coin2405.coinX == 10000 &&
coin0407.coinX == 10000 &&
coin0408.coinX == 10000 &&
coin0409.coinX == 10000 &&
coin0410.coinX == 10000 &&
coin0807.coinX == 10000 &&
coin0808.coinX == 10000 &&
coin0809.coinX == 10000 &&
coin0810.coinX == 10000 &&
coin1307.coinX == 10000 &&
coin1308.coinX == 10000 &&
coin1309.coinX == 10000 &&
coin1310.coinX == 10000 &&
coin2207.coinX == 10000 &&
coin2208.coinX == 10000 &&
coin2209.coinX == 10000 &&
coin2210.coinX == 10000 &&
coin0612.coinX == 10000 &&
coin0613.coinX == 10000 &&
coin0614.coinX == 10000 &&
coin0615.coinX == 10000 &&
coin1112.coinX == 10000 &&
coin1113.coinX == 10000 &&
coin1114.coinX == 10000 &&
coin1115.coinX == 10000 &&
coin1512.coinX == 10000 &&
coin1513.coinX == 10000 &&
coin1514.coinX == 10000 &&
coin1515.coinX == 10000 &&
coin1812.coinX == 10000 &&
coin1813.coinX == 10000 &&
coin1814.coinX == 10000 &&
coin1815.coinX == 10000 &&
coin2412.coinX == 10000 &&
coin2413.coinX == 10000 &&
coin2414.coinX == 10000 &&
coin2415.coinX == 10000 &&
coin0417.coinX == 10000 &&
coin0418.coinX == 10000 &&
coin0419.coinX == 10000 &&
coin0420.coinX == 10000 &&
coin0817.coinX == 10000 &&
coin0818.coinX == 10000 &&
coin0819.coinX == 10000 &&
coin0820.coinX == 10000 &&
coin1317.coinX == 10000 &&
coin1318.coinX == 10000 &&
coin1319.coinX == 10000 &&
coin1320.coinX == 10000 &&
coin1917.coinX == 10000 &&
coin1918.coinX == 10000 &&
coin1919.coinX == 10000 &&
coin1920.coinX == 10000 &&
coin2217.coinX == 10000 &&
coin2218.coinX == 10000 &&
coin2219.coinX == 10000 &&
coin2220.coinX == 10000 &&
coin0622.coinX == 10000 &&
coin0623.coinX == 10000 &&
coin0624.coinX == 10000 &&
coin0625.coinX == 10000 &&
coin1122.coinX == 10000 &&
coin1123.coinX == 10000 &&
coin1124.coinX == 10000 &&
coin1125.coinX == 10000 &&
coin1722.coinX == 10000 &&
coin1723.coinX == 10000 &&
coin1724.coinX == 10000 &&
coin1725.coinX == 10000 &&
coin2422.coinX == 10000 &&
coin2423.coinX == 10000 &&
coin2424.coinX == 10000 &&
coin2425.coinX == 10000 &&
coin0101.coinX == 10000 &&
coin0102.coinX == 10000 &&
coin0103.coinX == 10000 &&
coin0104.coinX == 10000 &&
coin0105.coinX == 10000 &&
coin0106.coinX == 10000 &&
coin0107.coinX == 10000 &&
coin0108.coinX == 10000 &&
coin0109.coinX == 10000 &&
coin0110.coinX == 10000 &&
coin0111.coinX == 10000 &&
coin0112.coinX == 10000 &&
coin0113.coinX == 10000 &&
coin0114.coinX == 10000 &&
coin0115.coinX == 10000 &&
coin0116.coinX == 10000 &&
coin0117.coinX == 10000 &&
coin0118.coinX == 10000 &&
coin0119.coinX == 10000 &&
coin0120.coinX == 10000 &&
coin0121.coinX == 10000 &&
coin0122.coinX == 10000 &&
coin0123.coinX == 10000 &&
coin0124.coinX == 10000 &&
coin0125.coinX == 10000 &&
coin0126.coinX == 10000 &&
coin2701.coinX == 10000 &&
coin2702.coinX == 10000 &&
coin2703.coinX == 10000 &&
coin2704.coinX == 10000 &&
coin2705.coinX == 10000 &&
coin2706.coinX == 10000 &&
coin2707.coinX == 10000 &&
coin2708.coinX == 10000 &&
coin2709.coinX == 10000 &&
coin2710.coinX == 10000 &&
coin2717.coinX == 10000 &&
coin2718.coinX == 10000 &&
coin2719.coinX == 10000 &&
coin2720.coinX == 10000 &&
coin2721.coinX == 10000 &&
coin2722.coinX == 10000 &&
coin2723.coinX == 10000 &&
coin2724.coinX == 10000 &&
coin2725.coinX == 10000 &&
coin2726.coinX == 10000  
)
    {
      if(currentScene == PLAY){
        stage_clear.setVolume(0.1)
        stage_clear.play()
      }
    currentScene = SCORE_BOARD;
    }
  
}  