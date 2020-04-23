import pytest
from fibonacci import fib


@pytest.mark.parametrize('n, res', 
                            [(0, 0),
                            (1, 1),
                            (6, 8),
                            (10, 55),
                            (34, 5702887)
                        ])
def test_fib(n, res):
    assert fib(n) == res
