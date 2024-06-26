import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import PrivateRoute from "./componets/PrivateRoute";
import OnlyAdminPrivateRoute from "./componets/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./componets/ScrollToTop";
import Search from "./pages/Search";
export default function App(){
  return(
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
      <Route element={<OnlyAdminPrivateRoute/>}>
      <Route path="/create-post" element={<CreatePost/>}/>
      <Route path="/update-post/:postId" element={<UpdatePost/>}/>
      </Route>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/post/:postSlug" element={<PostPage/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/search" element={<Search/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}