package main

type Player struct {
	Name             string
	VictoryPoints    int
	RoadPieces       int
	SettlementPieces int
	CityPieces       int
	BrickCards       int
	OreCards         int
	WoolCards        int
	GrainCards       int
	LumberCards      int
	DevelopmentCards int // TODO: Should not be an int since they have different attributes
}

func MakePlayer(name string) Player {
	return Player{Name: name}
}
