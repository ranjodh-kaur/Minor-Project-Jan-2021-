import 'package:flutter/material.dart';

// ignore: use_key_in_widget_constructors
class LoginScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("Doctor Help"),
          backgroundColor: Colors.lightBlue.shade400,
        ),
        body: Center(
          child: ListView(
            children: <Widget>[
              const SizedBox(height: 50),
              Container(
                  alignment: Alignment.center,
                  padding: const EdgeInsets.all(10),
                  child: const Text(
                    'DocHelp',
                    style: TextStyle(
                        color: Colors.blue,
                        fontWeight: FontWeight.w500,
                        fontSize: 30),
                  )),
              Container(
                  alignment: Alignment.center,
                  padding: const EdgeInsets.all(10),
                  child: const Text(
                    'Sign in',
                    style: TextStyle(fontSize: 20),
                  )),
              Container(
                padding: const EdgeInsets.all(10),
                child: const TextField(
                  controller: null,
                  decoration: InputDecoration(
                    icon: Icon(Icons.person),
                    border: OutlineInputBorder(),
                    labelText: 'User Name',
                  ),
                ),
              ),
              Container(
                padding: const EdgeInsets.fromLTRB(10, 10, 10, 0),
                child: const TextField(
                  obscureText: true,
                  controller: null,
                  decoration: InputDecoration(
                    icon: Icon(Icons.email),
                    border: OutlineInputBorder(),
                    labelText: 'Password',
                  ),
                ),
              ),
              // ignore: avoid_unnecessary_containers
              Container(
                height: 50,
                padding: const EdgeInsets.fromLTRB(10, 0, 10, 0),
                margin: const EdgeInsets.fromLTRB(40, 20, 0, 20),
                child: ElevatedButton(
                  onPressed: () {
                    //
                  },
                  child: const Text('Forgot Password'),
                ),
              ),
              Container(
                  height: 50,
                  padding: const EdgeInsets.fromLTRB(50, 0, 10, 0),
                  child: ElevatedButton(
                    child: const Text('Login'),
                    onPressed: () {
                      Navigator.pop(context);
                      Navigator.pushNamed(context, '/home');
                    },
                  )),
              const SizedBox(height: 20),
              // ignore: avoid_unnecessary_containers
              Container(
                child: Row(
                  children: <Widget>[
                    const Text('Does not have account?'),
                    const SizedBox(
                      width: 20,
                    ),
                    ElevatedButton(
                      child: const Text(
                        'Sign in',
                        style: TextStyle(fontSize: 20),
                      ),
                      onPressed: () {
                        //signup screen
                      },
                    )
                  ],
                  mainAxisAlignment: MainAxisAlignment.center,
                ),
              ),
            ],
          ),
        ));
  }
}
