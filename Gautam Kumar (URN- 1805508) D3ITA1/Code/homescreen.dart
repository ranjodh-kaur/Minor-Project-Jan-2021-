import 'package:flutter/material.dart';

// ignore: use_key_in_widget_constructors
class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
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
                  Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        ElevatedButton(
                            onPressed: () {},
                            child: const Text(
                              "Name : Gautam Kumar\nBlood group : AB+\nAdmit. Date : 05/04/2021",
                              textScaleFactor: 1.4,
                              style: TextStyle(
                                  color: Colors.white,
                                  backgroundColor: Colors.blue),
                            )),
                        const SizedBox(height: 30.0),
                        ElevatedButton(
                          onPressed: () {},
                          child: const Text(
                            "Name : Rahul Sharma\nBlood group : A+\nAdmit. Date : 01/05/2021",
                            textScaleFactor: 1.4,
                            style: TextStyle(
                                color: Colors.white,
                                backgroundColor: Colors.blue),
                          ),
                        ),
                        const SizedBox(height: 30.0),
                        ElevatedButton(
                          onPressed: () {},
                          child: const Text(
                            "Name : Abhishek Raj\nBlood group : AB-\nAdmit. Date : 07/05/2021",
                            textScaleFactor: 1.4,
                            style: TextStyle(
                                color: Colors.white,
                                backgroundColor: Colors.blue),
                          ),
                        ),
                        const SizedBox(height: 30.0),
                        ElevatedButton(
                          onPressed: () {},
                          child: const Text(
                            "Name : Raman singh\nBlood group : A-\nAdmit. Date : 09/04/2021",
                            textScaleFactor: 1.4,
                            style: TextStyle(
                                color: Colors.white,
                                backgroundColor: Colors.blue),
                          ),
                        ),
                        const SizedBox(height: 30.0),
                        ElevatedButton(
                          onPressed: () {},
                          child: const Text(
                            "Name : Rajnish Sharma\nBlood group : O-\nAdmit. Date : 12/02/2021",
                            textScaleFactor: 1.4,
                            style: TextStyle(
                                color: Colors.white,
                                backgroundColor: Colors.blue),
                          ),
                        ),
                        const SizedBox(height: 30.0),
                        ElevatedButton(
                          onPressed: () {},
                          child: const Text(
                            "Name : Akhilesh Chaurasiya\nBlood group : AB+\nAdmit. Date : 16/04/2021",
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
