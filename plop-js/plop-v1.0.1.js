/*!
    =====================================================
    BETA | BETA | BETA | BETA | BETA | BETA | BETA | BETA
    =====================================================
    PLOP.js v1.0.1

    Bleeding edge developer version. Use at your own risk.

    COPYRIGHT (C) Chris Perez 2016

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

    @license

*/

(function(dotPlop){
  Array.prototype.plop = function(arr) {
    var plopped = [];
    while (this.length > arr.length) {
      arr.push(0);
    }
    while (arr.length > this.length) {
      this.push(0);
    }
    for (var i = 0; i < arr.length; i++){
      plopped.push(this[i] += arr[i]);
    }
    return plopped;
  };
  dotPlop.Array = Array;
}) (window);
