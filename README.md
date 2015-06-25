# Overview [![Build Status](https://travis-ci.org/rodrigouroz/steganography.svg?branch=master)](https://travis-ci.org/rodrigouroz/steganography)

Conceals any type of file into images.

It uses a LSB algorithm. The idea comes from [http://domnit.org/blog/2007/02/stepic-explanation.html](http://domnit.org/blog/2007/02/stepic-explanation.html)

# Instalation

This is aimed to be installed globally as a command line tool

`
npm install -g steganography
`

Or, clone this repository and run `npm install`

# Quickstart

It has two different actions

## Embed

Embeds a file into a host image. Outputs the host file with the concealed file embedded as a new file

`steganography embed <host_file> <guest_file> [<output_file>] [<password>]
`

By default <output_file> is 'output.png' in the same folder

If password is used the data is encrypted with AES256. You'll need the password to retrieve the embedded file

## Dig up

Retrieves a concealed file from an image.


`steganography dig-up <image_file> [<output_folder>] [<password>]
`

By default <output_folder> is the current folder.

# TODO

* Input file check
  * Must be in RGB format
  * It can be determined before starting whether the file fits or not