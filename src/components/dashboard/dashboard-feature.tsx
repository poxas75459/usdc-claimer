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
    "3bawduiecjZ23oFpgiWGq78vnif9B6oc1DmAae4PwYUjwW9efx5mCGD8khe5nxxQ9U5qGXaAVA71utLofhXjSt9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ysgorQvKiES9u31vPiJc3rmF5tPJvpegh9DDDCpbjBVnxSLQ2fma9Ar7fsWSSkPCpL6BWVTa7UDEg7x2QeRMCC7",
  "key1": "3cSV8G891FyvZNadsUzUkNWoHpzY1zRmNiE6ESJhUsENWECFL2288YTYenwtVedjw14xGjzhSQtGfBcU7TgP3xY8",
  "key2": "zujok23fZQiLcYP4RAi3nb9p6WmbGDK1b9hoWvx7kmCtDaBPJEGsi1dQqpwUj5CaPbvdmRj6L7T6xmwM93oMzSb",
  "key3": "4mvJwtBYvfFCbMCx6m8YQtcro9yVJLDTrKEyNJRNAJyjtHnvL6376bSRp1JYFNqyfUR1Pzmku3swV63XRMJAoBr6",
  "key4": "2mXWcmkoCsbVSQhNqKeTng7aiU8pj1WgaPY52inRg21s1zXF6rSmdkpq27pzHRer9Y3pfNoPtQiwtuioAM7q1kT",
  "key5": "5UPvM2vpgRLgGR2piAX8334EXgwX8DrRFDnkB3UC2vw85sf8tmoxFhcCiDSoeVsDhtWQ91PCXRtbQPRs3nQShzcM",
  "key6": "2nsCQ3wWNsdm81M3Ph4vHkigRmmRAJTjoLoTZJiQ5NNW6mrvxMfrmYnFrbtrNjDxntA8cCvQeQ8kXCuFWGGMEPVR",
  "key7": "4E2fF9FKXU4uwHvHNvasfzzcaFGinKbWgSXGL8cMSfMX8bEbarLxw1xucG1iUar99EUyxePV77S91AV1rsJ1xQR5",
  "key8": "42skMpAaJjQgzVoezrNmYwnJWoKeho1ppwmfhbWKmUExMEovEfiKdJ4n59ADv385R46v8kwpSP46uEZNgrKgjCwD",
  "key9": "2q65mvzJ3hYPSY5UUNbKx4CTnngD4Z2gnjnzQYD4yzjKG9SJQAtAu8ZXMvTcMt81xDZSusGnbAZWQCqZjjKVvtAo",
  "key10": "3WBdyNciVfwFdadvzCVt6TeBbX4Xxso47pxmQopSFdDU1vGuWRyPq5iXqkQcPft173cCkBXF4BorYkUfHJqsCApR",
  "key11": "2wbrG3KC3YxWiw7hrW61wUxA4tPp4BJBiTF2k6RtAx7zy72viDHimUb5ckR8mHZrGEdGhDqKmKhnMpJEof93ndd9",
  "key12": "2p5pZSH3tFw5rx6yMd3wKAXGvzjNZp39gfw2ztVr8o49HzjrXVxYxofoCdqk7ZCxaJjx5WjrjCyBTSpbz6i6N7uY",
  "key13": "3n5e1q2QZYCB6SLP7Q4kksnqUBVAsz4jLQ3Jz5iWqvPBAYEr5ttwvrKb829W91XTab67fgshXPptpT6c2rYndm1E",
  "key14": "qHTtRb5ekvjzSqYAEBYKJsPyTK8pVMd7B9kCMCdhJgXUR6SJrkVMzgNwpbV19yqf7w4xvHMb32W4N3UDEmFt8ny",
  "key15": "4E68u3Ho9Xn3GNm3Qqzh7pKfZUtxowbLxEKt5o2YzXv5waipKotWjtAaaPyqmEgPAiXqGG1yyR1P2xjBHuV9pReG",
  "key16": "3SJb9UH36BvY3EjoK6TbUrUBYXKEu8dF8eShdTZUSo6crz6Awzf3u2CpCM3t55xrZU2Gc4YHS18R5227bpStkdiq",
  "key17": "2VtDZoaRntZ8w78V5F44NkS2EqQmyXfbMQ2ZRRrp5mLjGw5xuCRpceku2XppKmbiQq1cLQykMZdnWVsywEfUpSgF",
  "key18": "fsu43zxscgj1cSNBTzQDN957F7TUhpU3EVAoJiUdYK8qAsrkTBJJD9WsdprtRbBNhouYDKo5DvXPXgQAebSygqX",
  "key19": "EG6LXPgy9PPHPRZmrTz7WgJoKNawGkKWarFFHMCDwNv9PYmoD8k6ntPgvpLcgSnLbxW2DSHJTHwS5329ZD81eTs",
  "key20": "2BG2JW8jumpCaX4f1aiZyphDbf2pokFRj1rWfRRHxQUULrUBbVXtJTU6woYttegMKpn5gzj4Wp6kwFgtE538oEU9",
  "key21": "4AuLhUhagBaCsWD496Q59B9qqB7hyXW77iWkxuHEAVG7iQEQKDkf6mZ9y4ADAXUPLFw755FC43mvv4ssS99M2oGH",
  "key22": "5geb3i72vYPmzudQZH5DfQfkD8CZp7H71zeQ9QGcy7er9KJrahQtXdPJEvsrrhdGRnb8pGuooP7KojTHoJss9hQK",
  "key23": "C6svUXwtaMMqKRDgePmHy8Zxh8QR15SZH1Hzr6RHDXn1GHkmQS4hieNxizECZxCSQnvqmBJHqdd123xR1hGXdHC",
  "key24": "4RfXJnDpjiGgDrdBaJeVjwjFiCT5PXAajZVz8sxJFSddAtjtfSwCZv9amVJC9qrtsmKwxS3w3XFau1Mf6uDbhWhS",
  "key25": "4Tyno4wAGmms4VvPwbVzyb98szL8p4v3rPrpBxJJsmwRMMc47sj78ZFmM2BMD7UrzJTTH6sFGFWgqizYwQR9qFf9",
  "key26": "3HLobPFDmZAyhZEoviTxT4TqPiEyVvKmkRqrjKdgghxn6S1G9E3nfMNWHb9pr3MZMkZYMKwRSiNRYXUnqK4mfbUQ",
  "key27": "2YNQkWtcyQKXZpri27jKsXadxqp7bYz55osZTKmjNEvrj2SxGHwNbtR8gqrqsa2f6KRQw3EEsupThH1AmWXGxG9D",
  "key28": "3jwws3g2N5qFGEgMXqYYHvTCeYPJwJ5EHB9B27LS4cq8tT6Pg7Ew8awhBPq9MdPtCm92RB3M7ZU6YbwMvcWoZA3Y",
  "key29": "2Py8nbyN4Y2MGtC8YZdfea98hNrRwGG33D1YyzKFnXfyzAKxfzUU5CKfgzZfCPTdVAzUb7kX88TEeBpCizqSivoG",
  "key30": "3idXTc8YHwbhthCEL6n3hgxejaBdXVJKuv8C7hqGSoPwjovNnQjBWmg1uZ5fZdS3YtPfUWpA5AWX6LS3ybE9mhhn",
  "key31": "r3zYTTJ4XCw87k31T1ZXRb5dDvbVF1poXcUfYmiqWfscBs2x8BYq4DVJmjCXxszoX51KGunUfAQCyVEAx8EWSfG",
  "key32": "3TCkcy3pAVv49CtmZLGwrkdbAKY292WiNKSjkVisBD2LDqiM7J31DywWVroqeUVsZmPC7EwgLrmJZ3gBHPmp9fQn",
  "key33": "tcjsRvm1MKjRSUkdC6xKfr9KzYAfC1C5ieMsLbbtwFmhcwKK5WYHZYnXoRhVj4YtG3pjMEmmf2WbRbQG2qhP5Gd",
  "key34": "2h1hYnk3WFxCPKjy7LauK8FmHUZmeVCMKxzaFYgw5snftYZCGPXMggRBPJhAuj6ABxToCQ7YzJ83m3qkMtDpiMr3",
  "key35": "4HHcbLUMTJcxdxkcAhMdpfJbXwSQMJzRzBAp56W9v4RZaqmrgJGJtRRKY6rmPuFMaS1CSNW8UATNMPtBJLDdTeCD",
  "key36": "4RYiTyZyXrerEZmXcQa5Gb8yYV62ibKm7TmjoPrVemfuLfvW2KUoARK5db3cL3m7ewq7F2knbqKptzbSMzznULnZ",
  "key37": "452SsaGbXg7j9Spi33dKWNqyeSMBcJeZsFJ3bksjoC78UaG34tehB2Bcdub7xwPZDxWrqf5q6snir4FfrSwG7pmA",
  "key38": "4KaYuTBrpzRK3oa1wGawCDQy1v5H66ykfRbmXVL9jU8AddzB9y3hsrnWK1H1CiouNwuS6paMooX4wL85v8BEqASc",
  "key39": "D2sJSgFSgJgEeJ3SHEELmLXMAJujRLn1FsVfFQbrgRboKEJh8fHRMM8Epk2Lw7hJTHhXpahBMopKMaMEVJDwDov",
  "key40": "3x4fsg8RitY23LjJDjGZ2X1x6kPz3LLRMGc3SVXmE3G1SEyJpFpMR9nkXi82G1te4WgVWoTegiKBkGiuxccuz9GB",
  "key41": "5gDxZGEuD2BKCbYeqCA8ARhuSe1k9Hs2TJz6ZmFJZBDyRzLyRPNgcEm75dUajFu61UUuF5Aknhwf5fUhkdcQ3MSK",
  "key42": "2CMj9UW3tZqMNyijgj8hckn35DfzDG8mfyZTutUF9Z3zmaaQNnm584gArbwW7hJWV97JfuocNtgQr2jmVikw57UL"
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
