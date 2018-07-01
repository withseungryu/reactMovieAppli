# React Movie app


COMPONENT
무비 
무비리스트
이미지
jsx --> 리액트 컴포넌트를 만드때 쓰는 언어 

모든 컴포넌트는 render function을 갖고 있다.
render란 무언가를 보여주는, 출력하는 기능 --> 이 컴포넌트가 나에게 보여주는 것이 무엇인가? -->이러한 기능
모든 html파일이 모여있는 곳 -> public -> index.html -->필요없는 코멘트들을 지우자

react와 reactDOM의 차이 --> 리액트는 UI라이브러리 리액트DOM 웹사이트에 출력하는 것을 도와주는 모델 
따라서 웹사이트 -> reactDOM 모바일 -> reactNative

movies.map --> 기능
<div className="App">
       {movies.map(movie => {
       return <Movie title={movie.title} poster={movie.poster} />
       })}</div>
맵핑기술

index.js:2178 Warning: Each child in an array or iterator should have a unique "key" prop.
key값 에러
--> 엘리먼트가 많을 경우 key라는 것을 줘야한다.
key 속성을 새로 부여해야한다.

```
render->ComponentWillMount() -> render() -> componentDidMount()
```
이 사이클은 무조건 발생 
update -> componentWillReceiveProps() -> shouldComponentUpdate()  -> componentWillUpdate() -> render() -> componentDidUpdate()

```
componentWillMount(){
  setTimeout(() => {
    this.setState({
      greeting: "Again Hello"
    })
  }, 5000)
}
```
--> setState를 써줘야한다.!!!!@@@@@@@@@@@@@state를 바꿔주면 --> render는 무조건 다시 작동한다
infinite scroll

loding state
```
componentDidMount(){
  setTimeout(()=>{
    this.setState({
      movies: [{
        title: "Matrix",
        poster: "https://i.smalljoys.me/2018/03/33333.jpg?resize=648,365"
      },
      {
        title: "monster",
        poster: "http://image.cine21.com/cine21/poster/2006/0606/M0010003_poster_01.jpg"
      },
      {
        title: "league",
        poster: "https://www.pcgamesn.com/sites/default/files/Best%20LoL%20skins%20Cosmic%20Blade%20Master%20Yi.jpg"
      },
      {
        title: "hihihihi",
        poster: "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/2VOP/image/joUV8MN1rMxnV7ci80_MyOB2BCc"
      },
      {
        title: "antman",
        poster: "https://upload.wikimedia.org/wikipedia/en/7/75/Ant-Man_poster.jpg"
      }]
    })
  }, 2000)
}
_renderMovies = () =>{
  const movies = this.state.movies.map((movie,index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index} />
}) 
return movies
}

  render() {
    console.log("Render");
    return (
      <div className="App">
    
      {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
```
https://yts.am/api/v2/list_movies.json?sort_by=rating
sort_by -> ""에 대한 정렬법 

 fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
movie json 리액트로 불러오기
