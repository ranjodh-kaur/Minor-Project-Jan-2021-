import 'package:flutter/material.dart';

// ignore: use_key_in_widget_constructors
class StaffSelection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    void run() {
      Navigator.pop(context);
      Navigator.pushNamed(context, '/avtar');
    }

    return Scaffold(
        appBar: AppBar(
          title: const Text("Doctor Help"),
          backgroundColor: Colors.lightBlue.shade400,
        ),
        body: Center(
          child: Container(
              padding: const EdgeInsets.all(4.0),
              child: Column(
                children: [
                  Container(
                    width: 300,
                    height: 200,
                    margin: const EdgeInsets.fromLTRB(0, 20, 0, 30),
                    child: const Text(
                      "You\n Are  a...",
                      textScaleFactor: 5,
                    ),
                  ),
                  Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        ElevatedButton(
                            onPressed: () {
                              run();
                            },
                            child: const Text(
                              "Non-Staff",
                              textScaleFactor: 1.4,
                              style: TextStyle(
                                  color: Colors.white,
                                  backgroundColor: Colors.blue),
                            )),
                        ElevatedButton(
                          onPressed: () {
                            run();
                          },
                          child: const Text(
                            "Staff",
                            textScaleFactor: 1.4,
                            style: TextStyle(
                                color: Colors.white,
                                backgroundColor: Colors.blue),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              )),
        ));
  }
}
