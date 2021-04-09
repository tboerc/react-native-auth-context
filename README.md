<h1 align="center">
  react-native-auth-context
  <br>
</h1>

<h4 align="center">A simple way to get and store authentication data to use the way you like</h4>

<p align="center">
  <img src="https://img.shields.io/badge/platforms-android%20%7C%20ios%20-lightgrey.svg?style=flat-square" alt="platforms">
  <a href="https://github.com/tboerc/react-native-auth-context/blob/development/LICENSE">
    <img src="https://img.shields.io/github/license/tboerc/react-native-auth-context?style=flat-square">
  </a>
</p>

## Features

- Provides a context to store auth status and user related data;
- Can store values with AsyncStorage;
- Do all that stuff with a simple hook.

## Installation

First, you need to install [react-native-async-storage](https://github.com/react-native-async-storage/async-storage#react-native-async-storage). Just follow it install instructions and then you're ready to the next steps.

```bash
yarn add react-native-auth-context
# or npm i react-native-auth-context
```

## Usage

This library just wrap React Context and Async Storage to save some boilerplate code. It was built to be dynamic as possible, so you can set whatever `status` or `data` you want.

It has those two values because with `status` you can, on [react-navigation](https://reactnavigation.org/) for example, control which screens are going to be avaliable based in it's value. And `data` is generally an `object` that store some user info, like email or token, but could hold some other values too.

## API

### \<AuthProvider />

You should add `AuthProvider` in your app root component. Note that providers should not be inside a View that is animated with Animated or inside a ScrollView since it can cause very frequent updates.

### useAuth()

Returns the auth related data provided by `AuthProvider`. You will have `{status, data, setAuth}`.
