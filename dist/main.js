/*! ncatossi - v0.0.0
 *  Release on: 2017-08-22
 *  Copyright (c) 2017 Igor Luiz
 *  Licensed GPLv3 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    factory();
  }
}(this, function () {

'use strict'

var CATOSSI_QUOTES = [
  'Qualidade catossi é nossa meta'
]

var CATOSSI_IMAGES_PATH = [
  'https://image.ibb.co/bzGrFv/IMG_20170520_WA0034.jpg',
  'https://image.ibb.co/jfvkav/IMG_20170519_WA0028.jpg',
  'https://image.ibb.co/gwLwha/IMG_20170519_WA0027.jpg',
  'https://image.ibb.co/gorf8F/IMG_20170519_WA0026.jpg',
  'https://image.ibb.co/gYN92a/IMG_20170519_WA0005.jpg',
  'https://image.ibb.co/fFRDTF/IMG_20170518_WA0086.jpg',
  'https://image.ibb.co/nv35av/IMG_20170518_WA0013.jpg',
  'https://image.ibb.co/fBV7oF/IMG_20170517_WA0049.jpg',
  'https://image.ibb.co/hxDhNa/IMG_20170517_WA0014.jpg',
  'https://image.ibb.co/mZD5av/IMG_20170516_WA0045.jpg',
  'https://image.ibb.co/meR2Na/IMG_20170516_WA0029.jpg',
  'https://image.ibb.co/fraU2a/IMG_20170516_WA0016.jpg',
  'https://image.ibb.co/csM2Na/IMG_20170516_WA0007.jpg',
  'https://image.ibb.co/mbGDTF/IMG_20170516_WA0003.jpg',
  'https://image.ibb.co/eYrf8F/IMG_20170514_WA0045.jpg',
  'https://image.ibb.co/gCcbha/IMG_20170513_WA0062.jpg',
  'https://image.ibb.co/cvRDTF/IMG_20170513_WA0061.jpg',
  'https://image.ibb.co/mADGha/IMG_20170513_WA0060.jpg',
  'https://image.ibb.co/f6xnoF/IMG_20170513_WA0050.jpg',
  'https://image.ibb.co/cFQJvv/IMG_20170513_WA0045.jpg',
  'https://image.ibb.co/ntawha/IMG_20170513_WA0031.jpg',
  'https://image.ibb.co/nFxWFv/IMG_20170513_WA0042.jpg',
  'https://image.ibb.co/nEBDTF/IMG_20170511_WA0035.jpg',
  'https://image.ibb.co/dTx92a/IMG_20170511_WA0032.jpg',
  'https://image.ibb.co/b0ZYTF/IMG_20170509_WA0069.jpg',
  'https://image.ibb.co/heKdvv/IMG_20170509_WA0049.jpg',
  'https://image.ibb.co/mdeYTF/IMG_20170509_WA0046.jpg',
  'https://image.ibb.co/ieQ7oF/IMG_20170508_WA0128.jpg',
  'https://image.ibb.co/cyN92a/IMG_20170508_WA0122.jpg',
  'https://image.ibb.co/jQ8hNa/IMG_20170508_WA0082.jpg',
  'https://image.ibb.co/c4XWFv/IMG_20170508_WA0119.jpg'
]

var handlerImages = function () {
  var imagesTags = document.querySelectorAll('img')

  for (var i = 0, l = imagesTags.length; i < l; i++) {
    var randomNumber = Math.floor(Math.random() * l)
    var imageSrc = imagesTags[i].getAttribute('src')

    if (!~CATOSSI_IMAGES_PATH.indexOf(imageSrc)) {
      imagesTags[i].setAttribute('src', CATOSSI_IMAGES_PATH[randomNumber])
    }
  }
}

var handlerParagraphersAndTitles = function () {
  var texts = document.querySelectorAll('p')
  var titles = document.querySelectorAll('h1')

  Array.prototype.concat.call(texts, titles)

  console.log(texts)
  for (var i = 0, l = texts.length; i < l; i++) {
    var randomNumber = Math.floor(Math.random() * l)
    var text = texts[i].textContent

    if (!~CATOSSI_QUOTES.indexOf(text)) {
      texts[i].textContent = CATOSSI_QUOTES[randomNumber]
    }
  }
}

var runApplication = function () {
  handlerImages()
  handlerParagraphersAndTitles()
  window.requestAnimationFrame(runApplication)
}

window.requestAnimationFrame(runApplication)


}));
