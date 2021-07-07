import 'package:flutter/material.dart';

// ignore: use_key_in_widget_constructors
class ChooseAvtar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    void run() {
      Navigator.pop(context);
      Navigator.pushNamed(context, '/login');
    }

    // ignore: avoid_unnecessary_containers
    return Scaffold(
        appBar: AppBar(
          title: const Text("Doctor Help"),
          backgroundColor: Colors.lightBlue.shade400,
        ),
        body: Center(
          // ignore: avoid_unnecessary_containers
          child: Container(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              // ignore: prefer_const_literals_to_create_immutables
              children: [
                const Text(
                  "A Doctor",
                  textScaleFactor: 2,
                ),
                const SizedBox(height: 30.0),
                GestureDetector(
                  onTap: () {
                    run();
                  },
                  child: const CircleAvatar(
                      radius: 100,
                      backgroundImage: NetworkImage(
                          'https://cdn4.iconfinder.com/data/icons/professions-1-2/151/3-512.png')),
                ),
                const SizedBox(height: 30.0),
                const Text(
                  "A Patient",
                  textScaleFactor: 2,
                ),
                const SizedBox(height: 30.0),
                GestureDetector(
                  onTap: () {
                    run();
                  },
                  child: const CircleAvatar(
                      radius: 100,
                      backgroundImage: NetworkImage(
                          'https://freeiconshop.com/wp-content/uploads/edd/person-flat.png')),
                )
              ],
            ),
          ),
        ));
  }
}
