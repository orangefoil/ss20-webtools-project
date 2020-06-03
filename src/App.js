import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import PCA from 'pca-js'
import AdjustedData from './components/AdjustedData'
import DataTable from './components/DataTable'
import ScatterPlot from './components/ScatterPlot'
import PrincipalComponentsChart from './components/PrincipalComponentChart'

function App () {
  const [data, setData] = useState([[0, 0]])
  const [principalComponents, setPrincipalComponents] = useState([])

  const generateRandomScatterPlot = () => {
    let newData = []
    for (let i = 0; i < 20; i++) {
      newData = newData.concat([[
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
      ]])
    }
    const centeredNewData = PCA.computeDeviationMatrix(newData)
    setData(centeredNewData)
  }

  useEffect(() => {
    if (data.length === 0) {
      setPrincipalComponents([])
      return
    }
    const vectors = PCA.getEigenVectors(data)
    setPrincipalComponents(vectors)
  }, [data])

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }))
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h1" component="h1" gutterBottom>
                Webtools für die Lehre
              </Typography>
              <Typography variant="h2" component="h1" gutterBottom>
                Principal Component Analysis (PCA)
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>
              <Typography variant="h3" component="h1" gutterBottom>Menu</Typography>
              <button onClick={generateRandomScatterPlot}>Generate random data</button>
              <br />
              <button onClick={() => setData([])}>Clear data</button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <ScatterPlot data={data} setData={setData} principalComponents={principalComponents} />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <PrincipalComponentsChart principalComponents={principalComponents} />
              <AdjustedData data={data} principalComponents={principalComponents} n="1" />
              <AdjustedData data={data} principalComponents={principalComponents} n="2" />
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>
              <DataTable data={data} setData={setData} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Footer</Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default App
