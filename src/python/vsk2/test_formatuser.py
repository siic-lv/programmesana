import pytest


users = [
        {"name": {"title": "Miss", "first": "Melike", "last": "Karaböcek"}, "nat": "TR"},
        {"name": {"title": "Mrs", "first": "Ingeborg", "last": "Halvorsrud"}, "nat": "NO"}, 
        {"name": {"title": "Dr", "first": "Maeva", "last": "Fabre"}, "nat": "CH"}, 
        {"name": {"title": "Mr", "first": "Louis", "last": "Leclerc"}, "nat": "FR"},
        {"name": {"title": "Mr", "first": "Necati", "last": "Ilıcalı"}, "nat": "TR"}
        ]


def test_format_table():
    result = format_user(users[3], "table")
    assert true