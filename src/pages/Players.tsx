import React, { FC, useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import Layout from 'antd/es/layout/layout'
import { Card, Col, Row } from 'antd'
import { localhost } from '../store/serverAdress'
import PlayerCard from '../components/PlayerCard'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setPlayers } from '../store/players/players'
import Filter from '../components/Filter'
import { setGames } from '../store/games/games'
import { gamesActions } from '../store/games/games-actions'
import { playersActions } from '../store/players/players-actions'

const Players: FC = () => {
  const dispatch = useAppDispatch()
  // const { isAuth, user } = useAppSelector((state) => state.playersToolkit)
  const { players } = useAppSelector((state) => state.playersToolkit)
  const { games, selectedGames } = useAppSelector((state) => state.gamesToolkit)

  // const [players, setPlayers] = useState<IPlayer[]>([])
  // const [query, setQuery] = useState('')

  useEffect(() => {
    fetchPlayers()
  }, [selectedGames])

  const fetchPlayers = async () => {
    await Promise.all([dispatch(playersActions.getPlayers(selectedGames)), dispatch(gamesActions.getGames(''))])
  }

  // const playersFiltered = useMemo(() =>
  //   players.some(player => {
  //       const titles = player.searches.map((search) => search.title)
  //       return selectedGames.includes(titles[0])
  //     },
  //     [selectedGames, players]
  //   )
  // )

  return (
    <Layout>
      <Filter />
      <Row justify="center" className="h100">
        <div className="site-card-wrapper w75">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Col className="gutter-row" span={6}>
              {/* <Row gutter={[16, 24]}> */}
              {players.map((player, index) =>
                index % 4 === 0 && player.searches.length > 0 ? (
                  <PlayerCard key={player.username} player={player} />
                ) : null
              )}
              {/* </Row> */}
            </Col>
            <Col className="gutter-row" span={6}>
              {/* <Row gutter={[16, 24]}> */}
              {players.map((player, index) =>
                index % 4 === 1 && player.searches.length > 0 ? (
                  <PlayerCard key={player.username} player={player} />
                ) : null
              )}
              {/* </Row> */}
            </Col>
            <Col className="gutter-row" span={6}>
              {/* <Row gutter={[16, 24]}> */}
              {players.map((player, index) =>
                index % 4 === 2 && player.searches.length > 0 ? (
                  <PlayerCard key={player.username} player={player} />
                ) : null
              )}
              {/* </Row> */}
            </Col>
            <Col className="gutter-row" span={6}>
              {/* <Row gutter={[16, 24]}> */}
              {players.map((player, index) =>
                index % 4 === 3 && player.searches.length > 0 ? (
                  <PlayerCard key={player.username} player={player} />
                ) : null
              )}
              {/* </Row> */}
            </Col>
          </div>
        </div>
      </Row>
    </Layout>
  )
}

export default Players
