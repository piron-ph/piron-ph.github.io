var blockLetters = new TimelineMax({paused:true}),
      albumLetters = new TimelineMax({paused:false}),
      titleTxt = $("#titleTxt"),
      splitHeadline = new SplitText(titleTxt, {type:"words,chars"}), 
      chars = splitHeadline.chars,
      bgController = $("#backgroundController"),
      letter = $(".letter"),
      letterTiming = 0.2,
      spaceTiming = 0.3,
      stringsArray = ["That's the spirit", "The brand new album"],
      currentString = 0;


  function revertSplit(targetSplit, newString){

    if(newString !== undefined){
      
      currentString++;

      albumLetters.pause(0).clear();

      targetSplit.revert();


      TweenLite.set(titleTxt, {autoAlpha:0, text:{value:newString}});


      splitHeadline = new SplitText(titleTxt, {type:"words,chars"});
      chars = splitHeadline.chars;


      TweenLite.set(titleTxt, {autoAlpha:1});

      albumLetters
        .staggerFrom(chars,0.6, {opacity:0, y: -20}, 0.1)
        .staggerTo(chars,0.6, {opacity:0, y: 20}, 0.05,'+=0', revertSplit, [splitHeadline,stringsArray[currentString]])
        .play();

    } else {
      currentString = 0;
      revertSplit(splitHeadline, stringsArray[currentString]);
    }

  }
  currentString++;

  albumLetters
    .staggerFrom(chars,0.6, {opacity:0, y: -20}, 0.1)
    .staggerTo(chars,0.6, {opacity:0, y: 20}, 0.05,'+=0', revertSplit, [splitHeadline,stringsArray[currentString]]);