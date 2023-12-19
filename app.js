const express = require('express')
var bodyParser = require('body-parser')
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 4000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://jlxhwjiubjrwsxrjtbii.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpseGh3aml1Ympyd3N4cmp0YmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4NTg0MzEsImV4cCI6MjAxODQzNDQzMX0.3KULl8QvMbVsvtSXDt-M9iTS60lgue_pFOgP01vc_1k"
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname })
})

app.get('/contact', async (req, res) => {

    const { data, error } = await supabase
        .from('Contact')
        .select()
    if (error) {
        console.log(error)
    } else if (data) {
        res.send(data)
    }
})

app.post('/contact', async (req, res) => {
    console.log('Adding Concern')
    var name = req.body.name;
    var date = req.body['curr-date'];
    var concern = req.body.request;
    console.log(name)
    console.log(date)
    console.log(concern
        )
    const {data, error} = await supabase
        .from('ContactQueue')
        .insert([
            {'name': name, 'date': date, 'concern': concern}
        ])
        .select();

    console.log(data)
    console.log(error)
    res.header('Content-type', 'application/json')
    res.send(data)
})

app.listen(port, () => {
    console.log('App is running!')
})
