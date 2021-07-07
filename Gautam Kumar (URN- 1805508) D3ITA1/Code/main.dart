// ignore: unused_import
import 'package:dochelp/homescreen.dart';
import 'package:dochelp/choose_avtar.dart';
import 'package:dochelp/loginscreen.dart';
import 'package:dochelp/staffselection.dart';
import 'package:flutter/material.dart';

void main() {
  return runApp(MaterialApp(
    initialRoute: '/',
    routes: {
      '/': (context) => StaffSelection(),
      '/avtar': (context) => ChooseAvtar(),
      '/login': (context) => LoginScreen(),
      '/home': (context) => HomeScreen(),
    },
  ));
}
