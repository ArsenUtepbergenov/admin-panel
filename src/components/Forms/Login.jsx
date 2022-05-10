import { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Box, Button, TextField } from '@mui/material'
import { StoreContext } from 'index'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { store } = useContext(StoreContext)

  return (
    <Box
      component="form"
      autoComplete="off"
      noValidate
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 18px 26px 18px',
        border: '2px solid #e3e3e3',
        borderRadius: '4px',
        '& .MuiTextField-root': { width: '300px' },
      }}
    >
      <TextField
        required
        fullWidth
        margin="normal"
        id="email-input"
        label="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField
        required
        fullWidth
        margin="normal"
        id="password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <Button variant="contained" size="large" onClick={() => store.login(email, password)}>
        Login
      </Button>
      <br />
      <Button variant="text" onClick={() => store.registration(email, password)}>
        Don't have an account yet?
      </Button>
    </Box>
  )
}

export default observer(LoginForm)
