import { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { history } from './history'

const HistoryContainer = () => {
  const [historyName, setHistoryName] = useState('inicio')
  const currentHistory =
    history.find((item) => item.name === historyName) ||
    history.find((item) => item.name === 'inicio')

  const handleOptionClick = (optionName: string) => {
    setHistoryName(optionName)
  }

  return (
    <Box
      className="container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        paddingBottom: 2,
        width: {
          xs: '100%',
          sm: '100%'
        },
        height: {
          xs: 'auto',
          sm: '100vh'
        }
      }}
      component="section"
    >
      <Typography variant="body1" sx={{ mb: 2 }}>
        {currentHistory?.text}
      </Typography>

      {currentHistory?.image && (
        <Box
          component="img"
          src={currentHistory.image}
          alt={currentHistory.name}
          sx={{ width: '100%', maxWidth: 400, mb: 2 }}
        />
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {currentHistory?.opcoes?.map((option) => (
          <Button
            key={option.name}
            variant="contained"
            color="secondary"
            onClick={() => handleOptionClick(option.name)}
          >
            {option.text}
          </Button>
        ))}
      </Box>
    </Box>
  )
}

export default HistoryContainer
