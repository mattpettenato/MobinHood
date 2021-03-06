class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    @user.balance = params[:balance]

    if @user.balance >= 0
      @user.save!
      render :show
    else
      render json: ['Unable to process request']
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
