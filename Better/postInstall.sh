#!/bin/sh

perl -pi -e  's/compileSdkVersion.*$/compileSdkVersion 28/g' node_modules/react-native-navigation/android/app/build.gradle
perl -pi -e "s/buildToolsVersion.*$/buildToolsVersion '28.0.3'/g" node_modules/react-native-navigation/android/app/build.gradle

