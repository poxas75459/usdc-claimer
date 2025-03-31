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
    "5fmgvkuKEKRE3hCTRWxMJH8VeXSNG5NtB2ti1hpEXNQUH8So4WzbVXWp3VGZFmjeW4rrtD9saQcJpPZgDGjspvJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htPqhGCfRDmxKmAQXHH8pBdHWnaG7W7sAeZ12yJEpWePYxvJbvLZp3caTZQ8GkNFsp2fJKTAok5ZoQmcEziZ2PM",
  "key1": "3q8E7Hr5UydmyUy9HJf618f5K8ucsfhDzHPQGi4ZRrDjepvc3nMivQSjGmjjyMfW5b32TYggH8WBF9s9reV3dNDq",
  "key2": "3dsScTGhj8y7VaxB78Tg56MxUXEKrEtPT6YjP6dWALpQMGrQFRCu9qPwWsrUTXdsZ1FLXpAvgMyNdtcosURM7AYz",
  "key3": "4buK2BvZveXxFJHvQzYGLzoRBqhaYKKVKW1SQmnbcdhqQEW5SkiV58CFSCwbiaqtGGxBJ9Kev9roZ7MRqkKWzP76",
  "key4": "KUvN1uL9J5YygQqbupgGqtjwkMp6BaSLYtnbJKM2EpC7PjwEoTGa867od1VEgrkPDsx4Znwqz3rvNHfTfj8akjN",
  "key5": "41XvAZF6Jtt23519nWRWTQK73oKFDkTNS6NF2Nwyg5QcVzQ1uvoBG4iJTAtuqTunC3KWi9Euxb1MvZjiWPFBvpD",
  "key6": "2rsMpr3wg8Rm7XhULQdyde5g1kjHGtKwn15yuJJ8c5V4vJ8nAAqG3E6yz1zRAy6ydgjbMkHrdaRqjU8swPQxt6jE",
  "key7": "bumRiUE9gFYPJxSK77YeSaiJCRTigEqPRnqBgWaNAqW1bdMEqq2baRSv8JS8VN7tpVGCMARwoFzorjBpqspAi8p",
  "key8": "5k6wgoDCiSEM9PMJnYTusYJG134KTYd3mzrSxTmxTXZ661WenZDt8nRxcUfeL6awWErtB5zFQ2WLiXyEkRcwRhVA",
  "key9": "kuaGt4Mqej7a9AyqzGsS4egp6hnzFMrNx9dqUK6xeHCcHQFvv3sRPKdg5ckT3HDrgnCyHwPfxzA1xmV6RVkSDMj",
  "key10": "2MVfEGw4YU53xZtC5vYyn2U4qqKfgFFN9Q7GwWQqAbSE84JA2eNQ6t9fgdTzZyGmbSgapCCLcLivRivnw8m7ZZpm",
  "key11": "54k374p7BQtxgKR8EKkeyqaMfJ6PpZKM4HXgrqd9NCWrbGXzp1i1LXeiFnEKwjmAJ2TgJ7hz3xsabNJKabyXpuLj",
  "key12": "7SD2SsDpPD7iw1C9SgiFV677VEtVBUr7dt7DSJPXoetsKxfTTkc5kzdJyFVkoG9CCG9yKDqxcSi3XvL1bi66Rwt",
  "key13": "3uASdN1pMyJrKwCmhPdccMjZSNcXfrxsyDxy4BkTEjneXRDjQRPRJYv8B1TYd883rTZ4LmX5HdcMQkyXrXzJuVGP",
  "key14": "3jLADvJLsWx2kNqJpxq1BkT79GLYR74rqYi3KMwT5fR8jX4hY3V7d23jfddrbqjenFDzMxmyo3jLT1DZAmWB4dDf",
  "key15": "3bKqgbWes4EqzAMhwVvpXaWLuxGAVwWtk2t8zWFZuYU44dwngXqXG9M5WYkj9fSYXkGczwzBYexH5D2Cy3rthSCu",
  "key16": "4iSSMR4dMrYzAKdNkv8emqvqQ7nNHnpenVgEsDnQswQ6jaWnGazTk4WapnZn8PGQdovLJoJ5ck2xC5CTRc8pqWtv",
  "key17": "4oRbTzJaQGtMNWMkerRb9XEuzQ4bAquXHg3bYp58KvT2Q7BEcmrg7sw6SzyVrKXk6JgMe7bxgkWydk2j6ffG3v7k",
  "key18": "5BBVrcuky5JMmUPqw9UfwKD4knLGADhmNsHwAiDi5AbRaLiFhMAQG4kUok8SHoawRGF8ZoroGUfeCzw8unqRYHPt",
  "key19": "3U1rM5dUES6i1fPHjhrTNPhkvc8nTZmbQw18hUXLjdBJxQxVBvkVxKq4hKqdae2y1jgBaQX94eWF6ysXUWsd3bkj",
  "key20": "x3c1kdPXBobw6GVstCPLuKWU3jMtQLkWTavhadFDx2uqJ71dLwMun54jFY3gKmssCD2aYdv7hSxMFcYL3bCwbc5",
  "key21": "uk8LV88HX12yL2n9YYeDoe13CymAws3bgGtMWZEqF84C1cSqSzE9PFP2PhtbC4jQgD1d5GQD4K5pR4ZL2ftF56M",
  "key22": "5YMSrVMRN2Denp9KzYCJLHSTNjLunvxVZoDi5Dd8QfR3DqxekzgnfcoySmAzkKLeCcfWfyc4u8JJHXRJAWBU1d8g",
  "key23": "4vtmumcayg3WrUYDdH8CZRXq1Gsxr8eBZaS2HSCPxy1vtjC6Hf6fSApj8VxSFbDqWqTUSRQA8sYEbMWAqAukh3GG",
  "key24": "5TZ9eQMV9FF9jPE65YQH7rrMGMyGPfdtBmPwpqmrXh97CNo4SYPeu8ALSsYfbUGZ9U4qXejySrikZsMtGuEUuZTa",
  "key25": "3nPr86ujyaux8A73BBs3MKhoBjLxRAhYTZFfWp3Rwkm5jukYUGaTUWbojLhFFkhi9n5ZcMmjU3it5oWBRS8etnUv",
  "key26": "2ZXuX3x3G8WryqrkX8FsqnBMP8bApBHagRgAtmrogqFsk5H3vso7Wi8TKtySTmundXQJTLTiFyappbqc79bbKaVo",
  "key27": "KnSDay1Shxn9mj5cS9GZSJeS1oS9ac2PqX738smAbUGxW7Jk3CZQoMX9NRYpw95dVcbEG6Q9fmpQuAYXCnsSet1",
  "key28": "27Yb6vQzM34EXtyyDg1UwKVTeoge5fXdMYS7rfm8xbtJyFvRvepVGdxhCxsbkwTjM95C26RGbfEczEtHrZWM7ZWD",
  "key29": "2WvMisXHRhHwAoYd1W3dprW3fhJZzBpuZxcS8Wiz6wE1n8Nhq1Pv2MWFStr4AFbYvJmdYZXrgE2N1ViWRDify6zi",
  "key30": "yNW7GYb42A75ppbZV1aJXoX1xhT56omT3ZqgqVouPvvDKkjgVS1kudVFU4QKTkFGw4WG3mkr87NUv3r8A6gj4og",
  "key31": "U4B4TtgWSyBpcU5AunXZTmosxscqx2Hhzm9hMG3QsLJ8ibiMVFYL794GJzFtJ5DY3oDWDtcsUCBkbuk8kcrz3mQ",
  "key32": "o79STsXzLJKwJXCTBWj3LiDWzrEfWaeVeqV5UosF44CohiYVJrMhsPuNC8abYU7AbHhncHSp61UbU6HPzqH4SB9",
  "key33": "37ms8bJ6BzvQjtsutLLJRkNypS6h9qyc3EJzw3EKScK9aJSxkgkVR2Zvdxjmhm36VGy83qGBP1CxdLrn3GmiXQCa",
  "key34": "5RNcwALEx4RnwhLxYePcdXh41XV2cMVUrRUNtsXJQyjPSAxX23hGoEsmSJVG1y4J6XgA2bvKFiFffcDp478SSqrP",
  "key35": "4Nkts5qHLQ8AwwCVHt7ipd9eTqGURycS5ux3JRpcJtgaCJZRZo9pi7GYgQ2nQWbZjohvzhees9zKTjJvPBXotYx1",
  "key36": "4ma6NeAVPvZMt9Px2tkcmV22ZHEHsMJDGtZhdg4V8w6x7ewTAu2UQY1kZ6Ft4kHvn7tbQGdZdSBXcoDUGbkuZjSs",
  "key37": "26EYa4YTFpig8jbakLG48GPmMF9nfWrPJuaERQbX2SE7zCkB3ACDae4rMwYR9YVgh1LxZsk8MYmaXNDKSZds2C3t",
  "key38": "4M36QZnfDvqA1gNLpy4k9UH1PukXifBUB91L5KT7Yy1pLxcvSdYepWMQRWwmGk6S5K5aWtdAPfNrtS2HSUPiLRH",
  "key39": "35uYnSxUisRTykRTN9DA9aHwzwFZZaRUFTiuMoq1FHWuWkQmC5tNmASpn4c4DhtoFPnhWmuhFVaCWJqHLizumcZc",
  "key40": "4QjvZYg7E2YxyaVcj2Tfp2oTk1hQHSwaNPC9CkmiUBiMLdRr2HsHZVRGpaqxP5cqz6yaiNsVat7w5D4hKmkuAoFu",
  "key41": "5vto9dweTAuKGTiyUsQejfiu38toyk8canN4pfD8gTwbYD3m82MymhGDkJnu7SipSsjfq12Fv8xio5iMiH6dLiV1",
  "key42": "62KA2EgskMqNZb8pKquhPofjVpRso4eBBBCqBEhwgUGpxF9nStcNJikCeSUmNUJ9tTiiZVDmPRAVn5hPjVF2UuYw"
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
