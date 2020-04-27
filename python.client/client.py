import requests

albums = requests.get("http://localhost:3000/albums")
members = requests.get("http://localhost:3000/members")
concertTours = requests.get("http://localhost:3000/concertTours")
labels = requests.get("http://localhost:3000/labels")
print(albums.text, members.text, concertTours.text, labels.text)
