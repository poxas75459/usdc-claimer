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
    "4v6wtgpztfRqbHCZnUYgyCghkvWUemFP5xUEuTuYwYkQCXjneYVyVHTd4HCXdF4faHDxA4ezRtBnF5y9VJhw4qpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K3oNrYfTC4M36Fs7vaZ4b9ajm49LUHgHUpevNd3k4VDi7kgXeS5TUgnvwmEBwHX4KtTARnJkZFfMPyztzSq4nbF",
  "key1": "41b6Fz4c3SqMqvrszgYiy8uPqtcaX6a25oTygACY2SzzhfPPAmW4iDo3EK54A4h9GSgBdoX9P8DyBEEENSdGv4qf",
  "key2": "4mtMDLvv5d3aRpDxkvi5WRL3GQygEu49YficHmPpXBw7VyBWWr7iUhAXJgZrXPRoLEWZV7aHZo59TNhm39HkHPiH",
  "key3": "291iBcGhm4Nr2q8nJPcfej6uN7wUcghakk3Vu5UfRqd8Rtot6NPtoNWMx4SisHQxodbaHbmtQmsptvU71ahqtvpZ",
  "key4": "2DzFncHZ6r2p2Heiz395vEixoSp1jdurP3sjjXKKBJ5NkxmnMbPG4mfSLF7pZVCvY9ef97dTGJ8T6eqcwEDRJYmp",
  "key5": "2pHbc7VvMTfbpLaamUJ5y1sCKNHo3ZDMnptbyz62sPJQn6KvyuVuWV1j3TVU2Z1SsLHN8dsNEUUdvQeDqPuE5ETc",
  "key6": "5DDLqArXywxan16aSAJfAm8Swjz5nV3xSrkoT9MoXmpEaDp3Nz3JWaT9puFxY7VM56LW6etxLjjkQptYD7QyHrH3",
  "key7": "G4EKcjYPSwyxdsxXDb9Jj2CVjQHhPmU1eNtJ2gMHmfyaYTz9CjCHuWRxSrQnxy6UChNCRZYr7u5PNGk2qRArJAA",
  "key8": "JAohGyYUWrcs2cK6CBE1k2Fn6g7jXQqrEERks8TatxDiD5Z12TmQRVn5wARFd2TYtWcwE59hUGUCpLfk3V9qBr8",
  "key9": "2kRsTspUn3eSzKPpReWFHYCBH9jxiE8QLQjiorDrqaErhHTEi9NC8oA4qemBVQ4w1ne4DDDCS8m6GBQBKZqxQ2cp",
  "key10": "4wZH4C5RZ9DEno2oxDqzhr9VBAoKp5y6HAA1EUmX7xufkDqeaNT4fkJu2mhoGMVJy7xzubHgFBHw7UgBhtVbUzUi",
  "key11": "YTYhpbms6748XqxiJXUBz5pjVBdweyD4G2kjs5VWH6BvmtpkvUyobKXgtkyuEhuf8UX9BCSBVP3Tpv8PzpaDNCL",
  "key12": "5M1He4iyZckPEJwmKWTww8G7k7cveV2CsyQqcH8YzDnUhmQThgCZnniVXxCeRgZJidMETNdCrG9n27CGcJ2o3EmK",
  "key13": "TorTB7Vcy6MPWdTB8siEdw4xMXM1g3jSTaeRJP4jDCFegeEeYq8vE9unp26HRspWmHAJJbFJQjrwfoQ3VbpqMex",
  "key14": "4GFETmkUgL6MaadPqYEF2i8uH2RKBwjrsGkU5UkT1THBrrbG9F8rrNnLPCd8KTrdyTUV6XxCLQfFeefBtfWR1CSj",
  "key15": "2rcQN2k3YhViJP3GZnszGXrGP78T2njSDqrARxRaYYKpjdCBBCSkemo1zZgAaCCxTi8nCcX3XgLY2HuoVRxsRgp",
  "key16": "N1WyYutFHnR1sQZucUWDhUWw7v1upc44GNbe48Mnoo13S7d2wsANxgnKZ1vVFb6qHTEvTfwH6seW2kgKryCK5SM",
  "key17": "5f3fvfB4JDS9vd5QdBXh3PrabzWPLkPQQcGYNtdXcfyg1HgYTFd3g4QzMSr2NdB8aoVyuvbynP2ns3StvyTGT4wf",
  "key18": "abxeTc8qe7cA8FnnB4ygAB8B3CsjMsgZJPQtduBiekVaBipj5ap2tBwNar4ppihADWTtQrRon49egLru3gXJpm4",
  "key19": "DB8zfjisLiQFXCAXokxxibb7cV2EraSKY7cwjaz91M8943mL9NYufuftdDT6wPKDy2nS5jn2HZhAmsnwbgbqJA8",
  "key20": "2oKPqohtRWtPJURgSw8V5uyVVXniL3zKWrY6cz3V9rEq8W7EwhJetxo5jLQTVNNY4nUFpcHFMgUvXZ5Yx3FeiyC3",
  "key21": "2yxd45WC2nfjpeBG2Qdw5vRodABkMHdh7VPrQHpW7CMrsEFM2wscvoNVD7RDbXwrsL2MAdUrFfE84A821UfPVswS",
  "key22": "3A4BruiewkP3SWwCAuV75gYa2MxzLbuH4nbc78VpvBtWJ33EJtMAUmF5AeLuU6mFGEZuAAU9PJzDb7ZyWRaejc6",
  "key23": "3KVvpNdELb7Jpm4NEpN72yqB4VF5t8PuWymrChbWCs2tPnHpvy46eJVpjpv4XwBA4L4wpsTtVxHoCQUAfMPe2VHE",
  "key24": "2GiEN9MVLRjNEt2G9F8TVtd7TY78yQg59cmnLC3guSn3fLJFAUyeQq8g8GVJMCGbC7bx4LYNnhd1sA5bxiW6MYkG",
  "key25": "2U2S3TAd7na9zpP6oZyy3TmDnVf4m4bRcreLnPK8afKJYb31we83wApwop2JB8MoyBzmcfJV2T8sg49ZgJ5ZqNkS",
  "key26": "3PLJwB7ofix43SAHyBF5HG28UDCQ3WStD7tPvYYCtsie1Q58v9ScQSmyq6kvtMf9i2aPVM9KpTQuWFtNVpssrLSF",
  "key27": "3ykvGyJ8NmHZG39eRLH5qYcfBqyGARyMWCtPQxUvui7dodb69o2SbJwmXTiZKHfCMQmeifHdmFzWjXJp2SbdbGAG",
  "key28": "5gXAUxNsQ4KFsY18hRHmMWVHeinL7288SjE53etNCPpWtkSTiUd5deHXTseE1Sqywh9JaTnwmrsYGHtV8QcH8rt5",
  "key29": "61GDBxgw44fgKhQN4u7ohMAEfbTgnNMXj3ufnQhyKM2ePTPPF4ZitDJ5tMZ7iUmJhTf4J4dXTFWC1QrXzPixjwnQ",
  "key30": "62orJEPwrhymYsLjGxRbxFyec9ajW1it816JUo3qJe6TdXPjPwknHGVLXQgHvKpJFEnTaqPbeSQTyXXtZ35aiZJT",
  "key31": "2Jxzm3SHYcdiiCwqFC7feGKZ95dB9J6S1k4mkB3pm4G4Rg1N8pg5Xct3g3dsYizi5NJ9g9U5YLdM2bbPAHXsZuTY",
  "key32": "59Qy3dWoTVZsp9EXmCZoLGwGhXsHnCByEP4rr6ciNbF7jbqL7nac81iT8oqVNQdoYPD2sfM3sPpNZQYJjh259eQY",
  "key33": "2iJjVFtLqJPJZRBLxgzTSB7Ar2uUrDbktYzdksM19QwJjE7hQsbJDVLhdBDBRaa4gHDqA1h6x6APp8i72udAMncS",
  "key34": "2fsm8tfHmwqp4yAPnuft5cZ8LonDrc7uF5AYdxeqQB3qSxnEgVwernXx447Pg6jb2oSkH1vvjQrujVXfgqrKvtLp",
  "key35": "2FHPUxBvL6iFVpUJBtRUTmjWRbztVt2AgPddC6bkQcJcqmBVtaxjAM7FizwoRes1WH5VuTZ2KM34MWrtvBqi8v6c",
  "key36": "4YhwQQYzsq5EETWEvSgfWDTDyzx62sD6EFPknCpiaocjWwgPwZfeVtAunZCTCux7isKqSoFxUMFYHwMDqr4GM84d",
  "key37": "2hsrPbeW2D4VQQHWCRicSFj6VBfLe5BWKJS9Srtbvn98jz7p5kEE2YWrWboAf39DHNAUWbUcGTKXecLCdxCMFqnR",
  "key38": "59TjBKMNGBGvHWDkPR41g3nMCgCEovx2gR9MVXMqdKCVpVTFUFFDBSyjWvj1nGLF9J3C7qZcdXHaHf9BA5oLvqMg",
  "key39": "248qcBMHdjx6ZVgC4YS3kK1mSpCzXNfXjsS9cWkRpqbE3Y6UtHNq49qrpvL6TN1Qs46N36DPjE24vRmPwou9Nn4f",
  "key40": "2hpnq1SsLyDaZK7YHDYRot44MNjeyNbnfXe76oxaq63tYtq6D8CJHwsv2RE9N5koMWKR3iUnQgeUVATX1Y2YjD6i",
  "key41": "557BPuwfetVepB4aST95aygo65TMYNYYE99666ShJhr5i88wTgKmsrPNdsRNL2t8bPcpTDSBeQfAT65kpdFhRFPv",
  "key42": "af4SDLeuDB9JDz5EYmRdzTSXMs4tUxb7RzywuJW9wD2zy5vz3uF1HBfkWxrCC1a7q1ZW5Wk1gSMp47iWPxxk4kK",
  "key43": "3b9dgALsvbKPfLoAzoYopuzMZYr8pgpNuXVL53nwkYmLMXMckgN8NWE71VEkbZHZrEzfmnBEw4qNXEge1SbAN8jv",
  "key44": "22n5LDAKis2QcgnhYFCkDYyyT99FgyNtjypL3WtcU9p3cQ8q9NjsZBRpuP8ykPuxkrckc4bA5Dm3VG4jrcSerC4g",
  "key45": "4Kd5yrwMvmyrjqJogeQDjgE7aETKc2tPBrcJaCpMwKxCXGkUxZ4A2p6j6P8SDc4Gs348Lse1ffSJYjdoSpmRoq2D",
  "key46": "3qeYbr7CvH4T9MTaSVvUcN2NJKkgZUQZrofHCoF4Qm9UfycR1cqbDkcCYW2K1j7xa7NnJdvz7JHHvo97VKqrvS25",
  "key47": "3QnB8zS7UTecd1gQEJjStSvq4fA7HhVifFoXASZSZRCbrrTh161UCayfYBLf23azd6jCjAs2HxBMTWBgcpt69zmV",
  "key48": "5RNLtGp4mratWt7XBg1wWHFpxu7nbtxCvbZuGGZL3J9E67CzJKcykAqNXhXnqYuygsMvDKGcmzzYzVczQhKwKrrz"
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
