import React, { useEffect, useRef } from 'react'
import { AuthProvider, useAuth, UserManager } from 'oidc-react'
import { Route, useHistory } from 'react-router-dom'
import Spotify from 'spotify-web-api-js'
import { useMutation, useQuery } from 'react-query'
import GithubCorner from 'react-github-corner'

const Dashboard: React.FC = () => {
  const accessToken = useAuth()?.userData?.access_token ?? null
  const spotify = useRef(new Spotify())
  const prevAlbum = useRef<string>()
  spotify.current.setAccessToken(accessToken)

  const { data: current, error } = useQuery(
    'current-playing',
    async () => {
      const current = await spotify.current.getMyCurrentPlaybackState()
      return {
        album: current.item?.album.id,
        song: current.item?.id,
        pos: current.item?.track_number,
      }
    },
    {
      refetchInterval: 10_000,
      enabled: spotify.current.getAccessToken(),
    }
  )
  const [mutationEnqueueAlbum, enqueueing] = useMutation(
    async (albumId: string) => {
      const tracks = await spotify.current.getAlbumTracks(albumId, {
        limit: 50,
        offset: 1,
      })
      for (const track of tracks.items) await spotify.current.queue(track.uri)
    }
  )

  useEffect(() => {
    ;(async () => {
      if (
        prevAlbum.current !== current?.album &&
        current?.album &&
        current?.pos === 1
      )
        mutationEnqueueAlbum(current?.album)
      prevAlbum.current = current?.album
    })()
  }, [mutationEnqueueAlbum, current])

  return (
    <div>
      <h1>Dashboard</h1>
      {enqueueing.isLoading && 'enqueueing songs'}
      {error
        ? 'ERROR: ' +
          JSON.parse((error as XMLHttpRequest).response).error.message
        : 'TODO put something status-y here'}
    </div>
  )
}

const About: React.FC = () => {
  const { signIn, userData } = useAuth()!
  const history = useHistory()
  return (
    <div>
      <GithubCorner
        href="https://github.com/Briaoeuidhtns/splat"
        bannerColor="#1DB954"
      />
      <h1>Splat</h1>
      <p>Quick description or smth, warning about login redirect</p>
      <h2>
        Known <i>FeAtUrEs</i>
      </h2>
      <ul>
        <li>
          If the first song is shorter than the poll time (10 seconds), the
          album may not get enqueued
        </li>
        <li>On page reload songs get enqueued another time</li>
        <li>
          Everything is done from the browser, so this site has to stay open.
        </li>
        <li>
          Token sometimes doesn't auto refresh, in case of errors close/open
          page
        </li>
      </ul>

      {userData?.access_token ? (
        <button onClick={() => history.push('/dashboard')}>Go to app</button>
      ) : (
        <button onClick={() => signIn()}>Log in to Spotify</button>
      )}
    </div>
  )
}

const RequireAuth: React.FC<{ loginPage: string }> = ({
  children,
  loginPage,
}) => {
  const { userData, loading } = useAuth()!
  const history = useHistory()
  if (!userData?.access_token && !loading) history.replace(loginPage)
  if (!loading) return <>{children}</>
  return null
}

const App: React.FC = () => {
  const history = useHistory()
  return (
    <div className="App">
      <AuthProvider
        userManager={
          new UserManager({
            authority: 'https://accounts.spotify.com/',
            metadata: {
              authorization_endpoint: 'https://accounts.spotify.com/authorize',
              token_endpoint: 'https://accounts.spotify.com/api/token',
            },
            response_type: 'code',
            client_id: '908eaf93b654400f95f7bb221967a65b',
            redirect_uri: 'http://localhost:3000/auth',
            scope: 'user-read-playback-state user-modify-playback-state',
          })
        }
        autoSignIn={false}
        automaticSilentRenew
        onSignIn={(user) => history.replace('/dashboard', user)}
      >
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/dashboard">
          <RequireAuth loginPage="/">
            <Dashboard />
          </RequireAuth>
        </Route>
      </AuthProvider>
    </div>
  )
}

export default App
