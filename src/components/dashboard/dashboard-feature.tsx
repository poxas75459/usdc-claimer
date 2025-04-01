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
    "2JjDZM3vf7g1tPcHQaW2sxtfZMQ5DZur8Jba2hQK5DBrYGCugVdZLo3tCxBYqFxpnx7NsevA5Ps37x7QqYyMYT7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i6LHfFywqAJZgHy3pi8qfSb6wVC7T8swCeTBBnfGqB2Fy1HMpGyW4rGjaYa3NX3cMJUN9pKJ1BT48dRmZz6G3oX",
  "key1": "jSzVbBiwpixZbfoFsQi3mcWssYW9WWdrMw58YgRzZNLFCwCXmcgpKU9Kzw4zkiGhifNPTZ9BLiYT2V7SkLWTP7y",
  "key2": "5T36XvyKLVm5QDWBSbXwvPomwzoJD4b31Wos6pX4zHj2A52VCZek2KsF7KbMi575mt29paY4Nf6gKJeM8Zo9p5NG",
  "key3": "L3WiHqJHPLqB4u5wpFnBxJzHuxd2fQ7zWJ9W7WiAP5ER1VZa1v2LLjNphMjGjcaD6W1mumb8a4MeqVam8bxmnby",
  "key4": "FS2FuYwXyWq3QFQ8Pn362EBMh7uqMwzDFzAxyqmjWnnoL8tWCDKxTygVJNJfTJgCjaFtz8gfvDTmBPUWSM5ihyg",
  "key5": "5dGc2XcBzwPjG9hpJPKg999mTvQD8jjMo7caufJ7cTTCBQcd9SqtNMZxnoEhzxTnw8wHwJ9n7jUhrvMJSP8W9hfb",
  "key6": "LXqsQpH91F3eSyKWRtgTpL7bPc2EBV3bq8K1ABgnBVc7ERYsqLRpxoraEcx2BUwyh5w4ykjFq48o4PufnD3qLSh",
  "key7": "bMeoeFH7VmHNiejSDdSC4GxC7nn6JtDy3Xec3pjhwyp5gwsgU4cAe6MkjPugcJQMGb2fnc3ZqC65ssaVqqFV1Gp",
  "key8": "4ARhbYLjGznH9Uc2RMG1rqWydR28BJ8CPhrqnxdFFHqtB8obvgR3ozR9FjhVoorHvWi6D2EPwmZoyKiQ2YEvxcS7",
  "key9": "3JLVi4umtAvNwY17i8UgDU7daCWs29HN9RKCyGNbnWnhSzjnroxYRwMLRW5Q7y6Bj6XtTchf2Zcgr2UTMboKNm2E",
  "key10": "5wuJ5yHGcnG4WZFmHW3zMxKm9mg3KaXp3tnecFD5KkL87yKM8a6a4JM9pwdztWSxcAkunbRLPMfM31uzGAz67cCH",
  "key11": "4kcEjA6MuEXtxi3jLycQHkcXxkjURqbgjRTiNMmKUtBkBB4N1mJZFnbzyy8rqFboWrH7xQJTCuzsyqMCbsMZaN9E",
  "key12": "27dyC3zwu5VSwKTZNjaGjU4wVkJiP6p5zGEBdga3n2iioM4f9S67ovrTwSrPHUBgYmfpfMB2JQyzDVWQz2ec4edA",
  "key13": "4yGKMWzJoWybN4waxGSSGVktBtzB2fZf3sRgMUCz7XpDkkVjMu95nBoqV4cjVmrJkkiUeHV179dPeWNNRpMhQFT8",
  "key14": "4SdQCV8iLY1uiNtJhhQeFutSJ6H8kkApuXzfceauzsRZvvXXamUNpEtRrZfD5h5xsUcBW8qPYwaxkT7Lot97N73G",
  "key15": "53cxQuj5zSh3Z6twyG9XuWbZneBJq6kQwQiJ4m7tCHNPAsrWNhWHZfBY2a583JuwbdW3CUGkwRRuuC9d1z7FwCyM",
  "key16": "A38vsJMg8cafKiA5CgicJiT2JRF5ATEhPz63kRaYTynzSdMV3uDsxbjXxqTj1CvQiFwswR9Ysho12kP6irzz1xn",
  "key17": "3okvNU4EV86ygCwzZAz4nYcWWD7KQzcTofSfCjoAM1W2SewgSJgo8rLEAJjU7XAh9HdpZgUFHfayXfidRzAaVLcK",
  "key18": "5x5adDQLSsZrHCqsk1oZ64YvSnVvyf3mJxsY4MfEvpN18KVk8G5WkZFbPcK5TJAMXPBCp2TzBSeexNexM4k77Mvm",
  "key19": "izzaLMqQmDKHNGRckXt4KVkyCGMseehp2ekTDK5eT6iKbrwxErABmeT9vPp6TV5WCyJgkvesEV3j1D8RXCN9o6C",
  "key20": "THUGZ4N6Exbko1ggYmJM2dn29aN9rW9CdsZG2C6khjpVqLUBSHpQKhCrqHg2oDXTyT8Eb7oUC8aYervLURn7aX6",
  "key21": "3CTjT2eqo5AisZ7c5arYHzYMSss8JN7LAc4aBX1YRq8TGP8FuipebMQAU4a9rEWmPaYvVJ7VQLje7FAU6pTV8yrf",
  "key22": "BBoBhGr3Cobujn63NgFS8EEzZpzsij8x7rmdtaQpujtVWHg74ceZY37idU6K1Z5EePtaKuxfidhq6x4wnS2NLBN",
  "key23": "4avdBGVDbpwugtmGyS89bLBFtx8HAXxmv155TCMA3T75SZS2rimeDvS93LNELF6thcjLYmMiVpidQS3tnUimwcDS",
  "key24": "5gMWuL6UaSbptopMZJ7Z9pM2TSxAihRqikBeN8aMCNQddiwMXRB28Z2E85ciD9VNwmGzAgt4nPmHZJM9M6AyCZZA",
  "key25": "5skn8SWZVj4VeCFnSi98egw9tg3PRCXwMbkLEt1wht78VDxYCJkrwFdPqvyBNYJrwF2Xme5dkRxohaZDDTRTXunD",
  "key26": "4qAnMYzvBCoW1hgBSujMjuSyP4uPZ95v69x4TLY7vg999yvhMKJ3uKHaF9CSaQAMqSkGbvouC8vFNizmVFCxPArR",
  "key27": "3Mxc8jw9YtH7jdd5ENEDbXJ8R9vLXEGoKaJo58N8HFinBsaP7nyNct1Ym8BvuMe2omnnCVBpVJVRLwEj9DKj3zcQ",
  "key28": "58toGpMtEiwweigC13cQpyVAiYfuHUf4kejri2VcFXrvDUc3wCuY72z2yvw1bpM2KPUMyEVpVRzUSB43hufUS5Ys",
  "key29": "332io296tdobReFuY12ucVwGTUFybm6PdXwnktUdefHHUtyCJWiQKnLRsZ3Vn4QKiNdCnieBDKyeCEyMrZ8dBkto",
  "key30": "2UfgNXhveGu1PNZFRBdfgEWerea7rLaa8jBuUSHcjhttLYtPv1BmQ6tN8UAyQNgWSddy8zCPHnaNb7z3w3GF74qe",
  "key31": "VMNvJbQ1XVK8Qq2Td2nEYSSvG1azbA9euDgHJpYE3EAMWXcozCDRiG7XyT2xRjy8Q27vFzztL8KbP8hpJYSo4w3",
  "key32": "57LyWtcyJCNmweUFyqirKRGpYg8Cf9vJmwCTjCCPyKUJZejue8wZ4s58XXSSALVts59Ntq3XoQYpcQiCZNcjQ3kE",
  "key33": "4qZHwf8ZetvVXjRj8m1N9HV1AFeS2aWYb9McXLpqNQgHZQLxtvX6QGEdTvWLHojsMfBaMFfRxJeWwn4GV4BWNHuc",
  "key34": "2kzQKsk1ahngAbcqdeGFfP3hUbD2LryyvvRSUM1pAdiBtfhvXnM7wgFnp9yxGsvg5BpND4NGK9EDpNUb2a8DJiop",
  "key35": "4Zenr7JLVeqHFpQYSL3nXkA65pzQ9EAjSBFbZGoZdJDFmdZoeNaJ6YDquBr77miCw3tZGa2uGuB6Ysc4Uk2jccV2",
  "key36": "3pYVPTiDqfsBzr3z6vBWhyVZsj4CbhBERSwLz5zbqm7vZDbPDj2Fhsb2CJ2jhB29Tr5FmUtL7etTu3tEffKDs2xj",
  "key37": "5A3DXNdQBBYjZ2vb64fiSbh7dmCCBvFPF6hLjkuk8nvJMGZ7ZrtoUXKEbMG7xRmnhym9iYUnrQkofaZUDcT2K8Hq",
  "key38": "4RSaJfgMfdcDimiWhSZmZxrb9HqNinDxwRrTNjZPMTXTYYD5xMWRrpTB94m6wZfVUj9Cr8qLoerRs2sxM86RGYbg",
  "key39": "4Uz79J6rRX5TH2zWHeXhrftpyU2iHKQJwF61Mp3S4hopWmMehaDxrG1jggX1jCmuPwfex2ggby5GfiRVNYJ3qEdB",
  "key40": "3DkcVwtkRu6131nHmgFKBgMee8aAV9NK5qWKduF21oBagfoizpifxkyKaQNCkqG9YG1s9tz1iXBtSACmhZGDFho7",
  "key41": "5zzGdVL6Lx84tPFq5gvwJk32PDG1AkVjsvsCVU6yr6KzHMG8Jjto2rj44nNtZD4JcDUkRPrBQcATH82rkH3uYDmr",
  "key42": "55LmPbNVJiyvgYTscquyxymoQzwJqgnUJ58WAfeUrYMqVzDW2r7zL7Qgy29KFtNpVrn115BDWrgAexZYKcutcjGP",
  "key43": "622hdk7sDdBTHBJgETiqeon9rJZSCgUP3vc1eqyNSycAENqCLEjvbPPA8h3mTqtq7YFftqHSvfPLtp9z8pE2KaZt",
  "key44": "3zofVSKc7nAsRFLPeuW9FPQFwB15s5ToX7T1M9EpHBtz4Hnyy6SKp29uv4JqnXmXSKYECBCHG7vzzafcENd9q3rN",
  "key45": "47ERPi65jnsLYtq5EyeEkgouXT26CqJL3ouqLkQsCHgM5bYME972mk4ehRKDxG24mQ5bkHHYuDqsdk8pnXuu615E"
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
