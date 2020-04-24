def format_user(userdata, format):
    result = ""
    u = userdata["name"]
    if format == "greeting":
        result = "{}, {} {}".format(u["title"], u["first"], u["last"])
    elif format == "short":
        result = "{}{}".format(u["title"], u["last"])
    elif format == "country":
        result = userdata["nat"]
    elif format == "table":
        result = "{} | {} | {} | {}".format(u["first"], u["last"], u["title"], userdata["nat"])
    else:
        result = "{} {}".format(u["first"], u["last"])
    
    return result

