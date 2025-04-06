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
    "4rBLqubqdBaMuNLRTbSCKhmLLmJczV6vf5rgVPWLHo98Hi6N2EACXzwKwCjkwnWNnbC8fYbGEQqBm1LNT96SnxGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JWFgppv11CnUFsY1e3NNqXSv2ZYfpTx3rMUVGJmgi2z13Vk1P3tBPTmFbLSSQAZdehXKtGxzwr5QiU8ZgPBByzM",
  "key1": "5nd861NaMsYQQEVhDLXPAzd9fj8zosy3NUw3k8HXMvxKXB8hZ71AqQLDKzxNkkkYyz7wJYKNuymuTnu3wcjwU6TD",
  "key2": "4BeHfthDyAsDLsTL3msnuS3wztLZEhyuxucPp5RaHh6bbjQfg93XgEjJMPGRJqSxTVGXaQfVPkSZBnKPstb2JPHx",
  "key3": "5EjBPWLKYm6VbY37VfYcSyKJuhkhJC73AhXUJFC6aDvmohJPowyKEHJ1KTntmaCJvNWXBDpsfatRn3TPcMPvcXZV",
  "key4": "4KWyYMd4YmPFiTakwgZjbGyX3TrFcZhQ6Y5JLzmBYcnnFFj64s9MWWBFztk3Px7NxFjCbPVv1mrHjStmz3iErwse",
  "key5": "28ZXaMSxqiTP7yoUBp1BVNRP7rCSSkHsVj57hEXkaWDuDTC3wNeJtKHNSoWSqcZBhF1xbgRWawgEByEuUPq2BMAX",
  "key6": "2KY3fDPm9tkXBsoyjLYzKbFyxzj8VC4vEakrvQcUg7uYy7vxPTiGZWzHTFh2ueqLzNbtQZDG8xDffUZyi5qhGdte",
  "key7": "3KczA5R18zkETH6zkjUhxZkiv4WL4MeZCnCPNCkNVhaFgPc2mwNuGoHQYwq4RxJzjQWav1ozCTH7vagprhXnRhgh",
  "key8": "5n3WyfjcVHyGXzSfiL75fjvBgfdewiZ4im9CUx7NjFHPGKv8UN8jmFoMYxuHs1AwVKk5oGig1oRgVQ7aRy2v6tkd",
  "key9": "3hiBXUV7X4Ro1AY2JA1VxGGngBMNCvqefMoRAVtdaWFySfuBwiqffbrJEnte25wSocJrwzHN41mJzhZbABsEJzae",
  "key10": "5pigo9ovj9Vf22Myjzcj2P1rBADSQtWDdtsb8gnuVaA1xX8Tu1QGPTAKodVeVfyrei5JVSyyMB8uF3qwNwZjWATc",
  "key11": "44vGVUkV7JJy5zrQ6JnT9TkkX27VJZeE6YwjEXT1Ctse3uxPMXdrvDZb4Rp9J7qa7wxYHqfFNuNQfsmrNe9d6YsH",
  "key12": "ipNW8zGe41TeAAZErJfGVKbpA5q747Gx6u5TXyQ7LwrEphvWPPbaxtMCNWbd2gy1LUxB56z5Ti8cTsgf6saUgwd",
  "key13": "gj97wjPBi3kfYp6ATgJ3wxbyd2VAfxd2kH8XeUuc8AbAGyjpcWBMZK8wP5xrRsuCgC4cKSRADQi66Q5QBQoZR75",
  "key14": "5DVR4DwyRxg2q6W4EqB1f5XQ62XfH8gTMM6CHLJo71BGVhzxF6fjdh1wyVXLuMDsmuoPL85c55N6FwpV65Nw8aHd",
  "key15": "6384DTVhfQPMkbBroGSaFbq99FjNYJXdkaCZkKA1f7cKdbDwrmjUfLJcqi8DdP6cQJFZhPHy8NmghMykMu4aZgzZ",
  "key16": "3ar9qUau3UagFypHnxspgyAYDxJzgvpsKjPWsR2eTWr4jvRWeEFqMKcypwtFpDBEHtJqwi4Bf1WNxbrLRCL9gaeR",
  "key17": "5Nd8YETNY78VfN1ictucxtGEz2cdW1ji3qeocubE1Wmifyvqgubrv1SymWcMVuJH9EHz8Bq2zqHGYmevAmjwGE8s",
  "key18": "2mmtg7GXdrTctBxZGjsPBojf7nkag1rVPor8a2EDtCZPc4V9AEt3PCm3mv5smShh2LAneNVqAi6afQXzTfrGkXgS",
  "key19": "4nAz729v12SxUM8WCx4RrhvvgaLYTJ8VHctcoqTZAsLhnaPbSmE21TkkQQYg9852FFXaKAfzJKeKftRjpW4NvdUW",
  "key20": "5F2bCVadU7ZCkdyQcdYnrJmxgMC2HQHQy3vxUFXwEq4k5GZnK4Dq2GoVci2fWw1eDFTHxGWHx47AidPDd6WPLu89",
  "key21": "31i3G7bm16Eij1ug2Vc6zwrVdMVHW5HUyATcjepiwfioNbjX9rNoHjFdxSvtEsJxDYqcLuhXqzvco1KR5iBnet4x",
  "key22": "61aESArnDvAa4c5s9LacbaybFwf2YWwc2RFLKbQwK8hFeNjEwM227Qgh6VwH16qYSySWUevhhsG4n3u6q8zEkfb2",
  "key23": "3kUVb5zb74KnfCmHaLcC8A63RHmrM28XgiwCiKhddqhLnRktKjEHUp2ge8APo6RoDVdUhYVBfrkKMPfNiMWwTcUC",
  "key24": "5eBgWu5DXK2Adhyg6URZUdJoUZiNbN5EWMgxApD49fdRi159zWqKZVRnZkBikN8AApohhqwe3YZAH94JALTjh2a7",
  "key25": "5ZgyBetGJuQ8NUmuagKK6th3v9XTBLHi6GkrfPo6rWNPPpd1DDuUoxRt6XrzUBNJAxNvWc4BqPoNtSzxNJ42QJK6",
  "key26": "26GGE4pNgwxvUfhqYCG134gJiUXd52krdYXQyprYUhCGhRe5hggKdLWSsL8yUJ1dBtGhbwbx4TuS43VSoqC65hBo",
  "key27": "5W5R7XmZGCa2443R71xLfTPmZvon1yrvpZGqVvrW8noNyguThPTKik6GUQ1niKFkwnZVnhdUHynGi2h2gB1HoFns",
  "key28": "uNNGQZffJ3c8gEPh8L32YWdmyEedqY6jKqwCCggxLQdztvYqgSjWkvtAgoEmRmqPmrTb5bpwY8vx24Q2SKUvaRV",
  "key29": "VHs4KJkRm6dDuJULcdVDKAA4PziPS71XXY3SHBt7TJuo9DPQ4qTesMun7jad6i5sAfKuXQe51Ccaro7UdoMDy4f",
  "key30": "5uzriYQb4Z4objT4Ci1PVs4hsHdyf9QpwBbsqNjF7AjikkqJ4r5gHTrU16DB9Xqrg45HRf2SEu3R7Fq476Xwhz61",
  "key31": "65CsqPjbQKeaNf1i1ecbo5kNe5AvCiUPQkBfsTLdw3r9q6mgrWDraFTYcAkUcEuco4TEV1wa1gQ7P8vjJ3N2RfLs",
  "key32": "2SXNpQK8zRqt2Mxn4Cu8mQt1xTM3U1jstdhrdzYrdq1x36zJ7EV5vuJi6wthJi4L1krydBr3bJf4sW9szNsM45NF",
  "key33": "5V9u1TcityL3GHvo3NsJ4NhRFWctKXgaYUDNNg5hJUFNsqAa1VH41Weg39UsewrA7VqSNmtS5FPih5fUBepRC1ze",
  "key34": "4TC7FK3aK32AFtjQCD9oVKTnNtQ5CgteFcATAE7WukvvkyvqLZ3irCedicNRSBmbRn1mVVMhPSpoC2CqGbEpTnEK",
  "key35": "2dNys5qbKdAtmWJssAzQQJJVrL8nhLixkAY5bZqakMKiuVe2RVznnxgvd5DKdbvEqHhvoRQDk4QmJLEeti488xLH",
  "key36": "2KJrBsmGAL2RL3ErmztZsCip7qiM8j6WTdop4j42TumBQTs4A4csgYiHEWvmhYyu6GQh9EczvTEZwMf1uGzYFnyj",
  "key37": "3qijbBijftpmZVyoVVonoQxTNX9pjMVjbQHW4PpW1hxnNmw44mNeThdCqLEQ9gXTxuHYwnmswC9gP1tagYnXNfZC",
  "key38": "2j4DWtKc2h89ox224aPWyfAgwLcsoRGPZoAcBtKLBkUZYYpgcyX5Thtq8w4zgqGkvuR78DKYUmLcubPR2ppmkmS3",
  "key39": "5bt7h9biZJzKXa4bx9QXpM8K9cSuiFx2SMKsWy4Up6J3K8g8fqaTi2mVx5EXBnjJgwfgGLTPqRdeu6BsA3oeNUjo",
  "key40": "5MZVavK8yuyyZovWWG6WmtJEc1h11K9nzt8fF9EsuLDoGf6DZjKh8aGjRZUFpYUKtfcwCMuKG63DeCpqEk9xFEuS",
  "key41": "1gE6avcUpXDNAQKesvGMfGBnTHWLcVkyN7YmW3Ri6CPm31bQGTfd1yFobRzooBQxSJ2od7jG8G44jSH8iMfBXRQ",
  "key42": "2YY1KGPr8zPMtjFBR9UWR99p7rJFYkyB3FfHSs6RT8nismQKneWR3z6PU6cku69wEivsLR4KM3ZpytaCrtFuD4SU",
  "key43": "2LHv13K441dhGQh2aGgKfDNx2jjFKo7CZxwSEJTqwTqmTwNe4iUMdLbATWmEKf9soocoNrHP26TYL2TXVnrgbKE2"
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
