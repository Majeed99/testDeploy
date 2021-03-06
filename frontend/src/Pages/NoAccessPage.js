import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function NoAccessPage() {
  const navigate = useNavigate();

  return (
    <div class="bg-gray-700">
      <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div class="border-t border-gray-200 text-center pt-8">
            <h1 class="text-9xl font-bold text-purple-400">403</h1>
            <h1 class="text-6xl font-medium py-8">ACCESS DENIED</h1>
            <p class="text-2xl pb-8 px-12 font-medium">
              Seems like you are not allowed to acces this page
            </p>
            <button
              onClick={() => navigate("/")}
              class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
            >
              HOME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoAccessPage;
