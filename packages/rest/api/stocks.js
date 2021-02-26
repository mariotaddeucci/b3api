
import axios from 'axios';
import TableScrapper from 'table-scraper';

function parseData(k, vl) {
    if (vl == "") return null;
    else if (k == "ticker") return vl;
    else if (k == "tradetime") return new Date(vl);
    return parseFloat(vl);
}

export default async (req, res) => {

    // Requested tickers
    const { tickers } = req.query;

    if (tickers) {

        // Formated data
        const { data } = await axios.get(`${req.protocol}://${process.env.VERCEL_URL}/api/stocks`);
        // Get specified fields
        const filters = (Array.isArray(tickers) ? tickers : [tickers]).map(tk => tk.toUpperCase().trim());
        const filteredData = data.filter(tk => filters.includes(tk.ticker));

        res.setHeader('Cache-Control', 'max-age=0, s-maxage=30, stale-while-revalidate');

        // searched multiple values
        if (!req.url.split('?')[0].endsWith(tickers))
            return res.json(filteredData);

        // Specific ticker id
        if (filteredData.length == 1)
            return res.json(filteredData[0]);

        // Return null
        return res.status(404).json({
            status: 404,
            reason: "Not found"
        });

    }

    // Get all stocks data
    var [content] = await TableScrapper.get(process.env.B3_DATA_URL);
    // Headers from table
    const headers = content.shift();
    // Set keys on list
    const results = content.map(
        o => Object.fromEntries(Object.entries(o).map(([k, vl]) => [headers[k], parseData(headers[k], vl)]))
    );

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=180, stale-while-revalidate')
    res.send(results);

}
