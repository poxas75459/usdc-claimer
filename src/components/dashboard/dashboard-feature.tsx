/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "22vRD2LGfrMCkBA4tZYUPzHE8CKCdXc7HJdSsPSFonDKLg2bUjfEFJpE9crMVreCPnfvhKoejWqU1PjUf9XGD1bZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oXDZigbKaox3eRDFe6hLKufPf6NyhzHpQ47PQM5PHdbDCwYXsr4D2aggGBtwEARrRi4znYzWra8qhzw5cCCrcHy",
  "key1": "4aVZsTUttKAb2zLRCG1KHxG8qRVRUcqEeKNfQxaMrAchRdcbrqh6j9RZEQteh5J3s7dHjMifw6phJf26qapufS6A",
  "key2": "3ziK6tqSNuAmApPQZVSnUN24oQY3peJKWK5UHEERLHSmvUhKFuU1NVzeXjxVS2imF8coNrp2dFjFTM4BuRUCBqjT",
  "key3": "5KnkFADQHuPhRJE7iUaWL3jUMK5qoiM8Dmj36Nr1Bmav2N8G75eLG4WXZQiMZRXrBwSzZpEa5hAS81rxN9Ma22g6",
  "key4": "3cHHf5M76ueWbWxRZEvNGeaee7hPvxMMpji9EvZYnFZXUUNFPdVWifcsu6U2LBUNeDcVAzoAL1FBaQJuEXNdH35Z",
  "key5": "538oh1phiumV1mShyUvi33JAovwz4oZHXXmZQkDfz1GtAnjV95BHDyt7Ux464nTsqtJDjmsQYSRnFfC3m7irjdGa",
  "key6": "2Jy48vcT3WwAYneG3mwiUt8AMwFbde6C7Bd7HRnt2frwTT7fMacK4RcCbEme8yipmdoFCd2hDLCPySGXURbFnjDx",
  "key7": "5zkEpzRr7rvX2EhdQvrHUDghxywzyfVaw2pCnJjrcUugjnxNnXdsB1zEwYX6Kvw4aaSY5atQQBSVoi3pD3gXjzz1",
  "key8": "2EaS57k5UDa1XB7bXmZkoaBsueU5ccUqz1Qwzk8gcA6FPkwdCyQmcHXkbCsGBRTSZjvZYGTKZtQrzeQM9VLmQQKv",
  "key9": "56hL6gH43CFWtPXtVFVqwcp3ka7ERUrsPRibaMtpctbh79GQ8AxGryxNFVR3sQx2eJMtGYxMXnyVbGuqMTRigVbs",
  "key10": "4xZVizdSFRDhKkuDkZM9ypBF5L5UArMfHBSnj5rNCpcT9wgiTHtspbMCtYPLBuwaRQQx7FcTzF2V2dy3gqKX3dq7",
  "key11": "3bDGRFbqCMFVa1dbGgiFGQhXLWokWYUuMV431XbB5jQKvDsushmn8dqbxLk5MPwNjwPcKBCJvmmxibXqKfzFyVsw",
  "key12": "525yvK2VoNfNBnaAjEwYGqK7ZaKJk4wM7oG2bNpiNtuevGePgLQenAmB1yjFrR7uKRJQzyUqE49Gyod7fTbWU32r",
  "key13": "2K19LNfhQyWAd8kJHpxS2qtqrfu7PaGurXSF65fa2qjZdabkTyuUdAVRhVGAhR8D2xXyHX61hxW3wLzCGhnQse9q",
  "key14": "4dZbUNG5JzQMNoYM3wRvtApL93a54WC1TqHZ4Lw9cYVnmv8XihwRX5gAdmQiFwh6uc3bfvB8XFGakdD4F6UMr2Bg",
  "key15": "XfhR4g1fMFBMhmSd1xxynSjHiaEK2x2FXDs6Auuuzqusorx42fnQfnn82eyinHaW2Ft7SoPg5psFmxcXTvfEJsG",
  "key16": "67UWCA6CAAnBTV9KpQ1xZJeEHPukCXQFDDdpCUbf9MX5zfmv3vijpfhp6wZB8vRnsdaYUuAyFStTtzofyFBduN4x",
  "key17": "5qb7iWKz6VvY6udPuD7Ec1nYzZysYpyE8zsi5e4yVQNrrb7xtukDSj5tu6L3s62DQk2AWpe6AF1E3WioHaeUWNa",
  "key18": "5AZ4oVkXHX72uehzNdHe3tdY867CoQ5NYu63qrWA6knkHZ5S7d6PqX3PMyhWpUcd5jd5oH6n6A9DzvU5n18VKGWQ",
  "key19": "5y39uJFAwzKULR83B6EJWXYphg9eCiig8aSbrsvrnVadQaqWUGwG53EnQNdBimCJShUyVQbjfR8zcGcHhbsT5kjf",
  "key20": "4fMRp9TB5QtBufW6CLqmC7w3t7X3ipFqEQxGiZe9iZ5CAYtWypPE1zkLf9Fe9ycUbeY9jnNuDqBQFgkF86Er4Qa8",
  "key21": "4qauM5eZtpgTS98ppygWr6orAMBodpAuEEHx37mxDPPyaiPb53rb4LTW9zXjt23gUa8Bd51zo61QQEGFMffUcdVZ",
  "key22": "26yDrCm1jfrDetzKkopstqoFVamH1CSVp3RY7pfpqiQ1Hr5ARsLvh4opwhzp2YdQiiDRAXGRZdPpQ7GmGeikEFwh",
  "key23": "MFrFWJi79ztn1hGBmPq3hMT3bFrDUhzdUUh2h7k8a32SWNZJtUhc6SFBot6ub3jtx39jyh6p4id6cHsfyd25tPi",
  "key24": "3mrGnkFLoTNv3SZomu27XEGLyyvojS9nkeH4QPRKnxLN8NtPGHYkwVLbff5YrSbnwNqayUwnkZP7JUQZ4Hkzvw3r",
  "key25": "2ZZcMbW46LoVxPVhmrmPJuqkJJbmh2BDW9FZ37JiCxBQt3WdFZqUYzzNNU73TYXw398nYkcnCEzcTr1RBLsBPHbY",
  "key26": "5k54kM98P5x3tfwZCYhyiG7Lt8e714k7acMbAwDGiw6JuRYtJ1CDEFd3ZEYat3rqSXSpTdC5Lu4nX1r92a5jZJwJ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
