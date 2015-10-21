package main

type board struct {
	// TODO: What data structure do we use to model the board?
	Size  int
	Tiles []Tile
	// TODO: Figure out how to distribute resources for each tile.
}

type Tile struct {
	Resource Resource
	Value    uint8
	Vertices []Vertex
}

type Vertex struct {
	owner string
	Edges []Edge
}

type Edge struct {
	owner string
}

func MakeTile() Tile {
	// TODO: 1. Initialize all the Vertex
	// TODO: 2. Initialize all the edges for each vertex
	return Tile{}
}

func computeLongestRoad() string {
	// TODO: Return the longest road
	return ""
}
