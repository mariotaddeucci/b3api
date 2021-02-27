import assets
import optparse
import json

if __name__ == "__main__":

    parser = optparse.OptionParser()

    parser.add_option(
        '-o', '--output',
        action="store", dest="filename",
        help="JSON file name.", 
        default="output.json"
    )

    options, tickers = parser.parse_args()

    data = assets.getAll(tickers)

    with open(options.filename, 'w') as f:
        json.dump(data, f)
