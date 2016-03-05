# ionic-cache-src-demo

Demo for https://github.com/BenBBear/ionic-cache-src/

![](./img/ionic-cache-src.gif)
![](https://github.com/BenBBear/ionic-cache-src/raw/master/img/demo.gif)

# How to Run


```
git clone https://github.com/BenBBear/ionic-cache-src-demo ./ionic-cache-src-demo
cd ./ionic-cache-src-demo
ionic platform add ios  ## ionic platform add android
ionic plugin add    ionic-plugin-keyboard \
                    cordova-plugin-console  \
                    cordova-plugin-device  \
                    cordova-plugin-file \
                    cordova-plugin-file-transfer \
                    cordova-plugin-splashscreen  \
                    cordova-plugin-whitelist
ionic run ios ## ionic run android
```


## iOS 9 NSAppTransportSecurity

Because iOS 9 forbids arbitrary http request, you may add

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key><true/>
</dict>
```

to you `.plist` file. Details in this gist: https://gist.github.com/mlynch/284699d676fe9ed0abfa
