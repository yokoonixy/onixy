ul.FeaturedPost *{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box }
ul.FeaturedPost{font-size:11px}
ul.FeaturedPost,ul.FeaturedPost li{margin:0;padding:0;list-style:none;position:relative }
ul.FeaturedPost{width:100%;height:500px }
ul.FeaturedPost li{height:24.5%;position:absolute;padding:0;width:49.5%;float:left;overflow:hidden;display:none }
ul.FeaturedPost li:nth-child(1),ul.FeaturedPost li:nth-child(2),ul.FeaturedPost li:nth-child(3),ul.FeaturedPost li:nth-child(4){display:block }
ul.FeaturedPost img{border:0;width:100%;height:auto}
ul.FeaturedPost li:nth-child(1){width:100%;height:49.5%;margin:0 0 2px;left:0;top:0 }
ul.FeaturedPost li:nth-child(2){left:0;top:50% }ul.rcentside li:nth-child(3){left:50.5%;top:50% }
ul.FeaturedPost li:nth-child(4){width:100%;left:0;top:75% }
ul.FeaturedPost .overlayx,ul.rcentside li{transition:all .4s ease-in-out }
ul.FeaturedPost .overlayx{width:100%;height:100%;position:absolute;z-index:2;left:0;top:0;opacity:.6;background-image:url(http://1.bp.blogspot.com/-FtnGJHMcWH8/UIV3IE-aaJI/AAAAAAAAGHs/WvLypnWxg5A/s1600/linebg-fade.png);background-position:50% 50%;background-repeat:repeat-x }
ul.FeaturedPost .overlayx,ul.FeaturedPost img{margin:3px}
ul.FeaturedPost li:nth-child(1).overlayx{background-position:50% 25% }
ul.FeaturedPost .overlayx:hover{opacity:.1 }
ul.FeaturedPost h4{position:absolute;bottom:10px;left:10px;right:10px;z-index:2;color:#fff;font-weight:700;margin:0;padding:10px;line-height:1.5em;font-weight:normal;overflow:hidden;transition:all .3s}
ul.FeaturedPost li:hover h4{bottom:30px}
                ul.FeaturedPost li:nth-child(1)h4,ul.rcentside li:nth-child(4)h4{font-size:150% }
                ul.FeaturedPost .label_text{position:absolute;bottom:0;left:20px;z-index:2;color:#fff;font-size:90%;opacity:0;transition:all .3s}ul.rcentside li:hover .label_text{bottom:20px;opacity:1}ul.rcentside li:nth-child(2).autname,ul.rcentside li:nth-child(3).autname{display:none }.buttons{margin:5px 0 0 }
                  .buttons a{display:inline-block;text-indent:-9999px;width:15px;height:25px;position:relative }.buttons a::before{content:"";width:0;height:0;border-width:8px 7px;border-style:solid;border-color:transparent #535353 transparent transparent;position:absolute;top:50%;margin-top:-8px;margin-left:-10px;left:50% }
                    .buttons a.nextx::before{border-color:transparent transparent transparent #535353;margin-left:-3px }
