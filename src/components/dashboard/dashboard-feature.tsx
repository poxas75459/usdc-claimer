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
    "5ZR9XWBoPLbNrR36rr6qbubzFy1Rn3HcYUYbeSDt6YVU9jLoDWxbkBFpqWsCTMQ3DjYtAs7conhtqHzj1zuQttdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jFnaDFA68WhbioGcntdBLhPBrdU2S1XLgpVpgQMqoW9Q9mnEVMgZsvgGuoa2TGR4pRSNyuTZDfK1dNpXUyGiT3a",
  "key1": "kzYjVHJtjJGydaA9uBvH1iRHoLMu9y8hB1RBfdGpgFACsEeNyTbmjUfgPKb4tduQazy1ahwCnreY5shiLC8vQtH",
  "key2": "5pT3Y1efQFcTiPsjoke3sc9yMYHfmaCouyY44hNS2sYyC2Cpu8wcYmK7j7X5nNtVdatPRx9mL8vUjDFUY4sMGikD",
  "key3": "44wwifef69onZ2LLgceSR22FToDKzLZv5rvnyYU3UJbJV4BkpnjTdbmadsGMiiSaSQmbuKJKd6pnUVPqHVBXJo2F",
  "key4": "2xhWeZuTBfFKAMgefXanpmXrP6rEZyHm8s7KGzFeCH9xRHBVjm2aofSo7JFQGg8PrEkmnMJLuAJgF37v4GyDX4p",
  "key5": "5xfJLxdDyWRnHesaV6m3FWMySFkw3emHZ4YtC8ZiY5Z1rtaVpZ6eSTAJRbCQTtAzX73tbNMmiVSq3YoP7hGvrLTQ",
  "key6": "DZUQNZgPcVtM33RtXZp8PXGfgtAXiVzMJZAsD3o588DgE3R75JgZgcekCqRDxxwNyaTUU8dmKqgfaQKyiuTmqgn",
  "key7": "4guHh5CtMF5CN7ynSZWwoE72DCqMdbXGXVNEN4sHzJB5eR6uqtrwHSuh7HVJpEbEEb5c24FnkBGSsB2Z1P9XFQgH",
  "key8": "5CDAN6wWiYzXPdrLrC7qoGbw6GA4Ly9wxHiEHFB1ic4Awc2U3eCo6tGqyaVu9r9byohyd3ddVLtFY5VncLE8EX43",
  "key9": "5kyNjAYFw1iX3VhKtMUSM5DWv2jcBvyDM7LgRDUnnEU1Hs6TpbKoCdx8pn2kfr8XrTPVQyACotnrXKxAs9hyn3wd",
  "key10": "5taCQcEP2tgPZgbWeqcpCqfZs9tY1xZxdAKJJYBSxKSTRkH41P3hdJeRNBiaB5WNwBTg1xSytqCK3fgWEmFTw2Qr",
  "key11": "5Zh2vjdGk7TCYsatPH4a2gp3gMcWycvUhyHNeg2CzPy67pb4HQLh8PMYhzJqGApDPwPyRcKXyiECtyv5ohZn12xb",
  "key12": "3JZEtXpok2TtoSuZCxgz6dmFWqFb7SwvaZdYpQCzx5zmMSpUougGQq6Gt88baU6wgaGD5axmP74tvQLYcCiGsj68",
  "key13": "WTNyJKgwMhx4VCZx5X6BGgEETTTk2QJt1GGVi2A8mopaWNMAccchcd5vKuRMFY99RGxjebUAbrxSjxsoNBQeYvr",
  "key14": "4hoCiE84y9WboEAdqpUTdeDKhjQsNoA76Z9kxe2TmwGPFhkK3WhKueYc5jgmTNefysRWjjtSpDYVLXxFXsUxPWVj",
  "key15": "4UR7hzwcVJgnBKXYfc666ZZbbuRwDkQqnwVuj5xYjQbLgPXcknps4G8ZgLm1UadQFZrR5rY18KuNNT7nuTodbck6",
  "key16": "2SgJ3gHMhZcGCcp6Lrc5XFgCuB4FfzBxRpWU4qazt3TTN2U1niFaur8jrNnU2NLDNvD7TLEdae7jj6qHAufuExFv",
  "key17": "4fEhrPgphC3VXMXFxu7XYNoBd4LAPPQREk8xc5q5BamLgrSQTn31aKu7K1ghWHrHA3M6br9ysKSLTWTJWHcNma1u",
  "key18": "5jFE1G2HaPxG5hBLzYaFGLjcvFZkuoFkUEikY4tR6HoKiXFDgYfNtvVi5tYZvTpQZ7sRQsfyu9txMNZLeyyd4MuQ",
  "key19": "3P7V6Yr12k7chRDrt3Q9AxUd2VP1MMooVZWmgcYBXgnsGuSZHyG89nKo3R8X6bRyAof8MxqgG7xDtG8pRkh3TeLs",
  "key20": "2cYJ3cRQCQoBPyoTMSZxbCYkGmraD8k9d388o49kfhMccVDJe6BW14pxWBH5saJspFtr2WQkqibPfit2Q1GfXdSo",
  "key21": "4BoY4mtmvEEqbXMXgyv3prYtxcxK2CNwCPJfNr2G49wS1sLAoZU1ExXSUSxhFGRpJ8HcPF8VKmkLV8KRQcbQcF6f",
  "key22": "rHr1qjCsUNGVnUPdxJHc8pWsD5q7m3xMNgnVQF7o2VKfEg6ibbKx6cxXek87pYQEmMeEbGUkVi4L4Bj1A2P8PeG",
  "key23": "LdHuRvEsxXmdEDj2G4xCf9VDE1JdELmsg7QfpovguNe8rhRZtJYgJGGi8wjWdh1XSQcY9VRuU7PMHBJWGHoaWR7",
  "key24": "3LLiuAhw3ktT5YEFSNCgbX7TpEFbuARGXtZwLk4gkDB7a7NGZm5unTPTiN3gXqeQmFjxfvQxebP8zSLmDckxN61D",
  "key25": "33exRcmjqMwZvLcd55rYtCc2VEkFnPJTHVyeGo1HpxsFHTN4XyaUnn5Z3yW4jLVzvuxCd3qykUuMZtPSMit7YhUL",
  "key26": "65KvjkPgPmsjb42gJMgqNo9XsVE4okgXsxpNuRAGEuBjGVSNMMf6V5VaMuGrp2HusaMn8XnPa8T1GtXnNaFen7MB",
  "key27": "5Vh9DGxW3jt3MeuvvqCQa9hpEio7fRuz2cq9F5X6t3J7qtxJ3D3xz6a6hJ3fyg32j8BrA7dwzm2UUiTfCRAr9Y5Q",
  "key28": "Wj5gzx9kUUdAZRTjRb3ppmjje6g9UC29k9ybLi7MFGKf6b551S3WGwhcT3jrLmN3MXBXPU4MFu4932nsaTFTXVj",
  "key29": "4TWJZYKNv6AedjA4PbTFFUjrLcSRuP67F5JMo3kDJLk8JCAxtWZJxBGV8kDfRRgqe1QUsPpn2hBxajqbSH7FhL3A",
  "key30": "4q1ucXW3i9SDWsm6y9cmnmr5V6h1fCPoa9k3aLutj79vSJ4TBnXVeUfRNeHqP7u7a7iQcX7qgEECa9vAsdoXWyfJ",
  "key31": "4NCZhWgHQPMDbz8c8yMn4g8YDeqxW5hfG4nWNz2BT7X8FkSgcKHYqYMo2qct4WBHDUbQgEmnq3m1CUsCkR5r8HzB",
  "key32": "w93N2HKci5rmKFnDkxNjbPocHdBwGq4yYbUobvk3rXzZt4vPVD39sG43r4HfKdmi86koNGQPRdEjVy9JZDB3paR",
  "key33": "3FDGoa9yz5QFrfWExXCbCPmEeCk8dGemTpErMUutxUAYWFNEPETZEkvztJ2NXFAJs1zF19QAfpniKGKNYWrahkAh",
  "key34": "p26BWqfANj3nCtX9we9S8P1fawEUrBJVKQTnSNuYCe8aizZ2MgUaCtQdEjV58xDXAhZiJ9CWpyE38fjp5BGmdvc",
  "key35": "5FVNWciGFLSPEYHoSfD1eQUBgZ2H49ZbFqezuZXBVSTinvPjNLHHguPYfRhBxviab4nqBvWiCBamPTuxXie6WtZb",
  "key36": "2T7jchH4cxzcVznL6SotJYSgf3QijtiXfxuXnH1CpLvtRPMTyDXKgCqifJ4eJ9cuYP69DqpQHMjdsPwsEkhAnPzm",
  "key37": "4DG3cdAJoGseu4BkFYTKmbPchZhU6rV1iaLoEMcFTvgmza2k7okyo3Zy13E7UxFHBtkdCgcGDE9x1ESQxYvbKevk",
  "key38": "4dVhxrBLmzCBA9ukYF5fijNWE4THLPVSfiveuoepw153vGYn2PLoTiJy2s88bT4AUsWpqxrHnCUnMw4ceYsFc7LS",
  "key39": "3htsdNA6WUnzHHKYFYCsUK1k2XqTvM7KBU3MtAYTJRni1A8ZwkWcnNNU7s1br9tsV3E3isNLhpmsv6MY3aQH1x4i",
  "key40": "3wXP9zLhdfC814A4dSJXHmLgCazsBgwPkpiymUeLERww5U3qSPBe4KWGS7jCwjXGNxWwAv9LmYNTKMAMATst9m3H",
  "key41": "52Q4V6QKhSCq7xtevh9ayiuFGzurDyTvPqYhLQ6ZXcGxXwfoUBfv6Z2yLAb8NScrPJc4wRVZxFjkry93bZSd4GRt"
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
