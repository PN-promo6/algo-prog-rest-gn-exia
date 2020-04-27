<?php
$albums = file_get_contents('http://localhost:3000/albums');
$members = file_get_contents('http://localhost:3000/members');
$concertTours = file_get_contents('http://localhost:3000/concertTours');
$labels = file_get_contents('http://localhost:3000/labels');
echo $albums, $members, $concertTours, $labels;
