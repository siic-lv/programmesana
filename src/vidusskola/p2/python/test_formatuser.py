import pytest
from formatuser import format_user


@pytest.fixture
def example_people():
    return [
        {"name": {"title": "Miss", "first": "Melike", "last": "Karaböcek"}, "nat": "TR"},
        {"name": {"title": "Mrs", "first": "Ingeborg", "last": "Halvorsrud"}, "nat": "NO"}, 
        {"name": {"title": "Dr", "first": "Maeva", "last": "Fabre"}, "nat": "CH"}, 
        {"name": {"title": "Mr", "first": "Louis", "last": "Leclerc"}, "nat": "FR"},
        {"name": {"title": "Mr", "first": "Necati", "last": "Ilıcalı"}, "nat": "TR"}
        ]


def test_format_table(example_people):
    result = format_user(example_people[3], "table")
    assert True