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
    "3vD3zhkTz3dbiFETLyZSxMcvVHLH69qAJqSvbhjePjoBnaUWfbuDcDD6zVcn16zzMdgbStc1fx87zLJcoqU2qt9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dgY9qfxeShdMA8Vz7YLC1CnYAq9KdR6Ex7rqbboxh2kPHBCuc1Rh3FPBZ9iWU3VoD5JzaCPrqLnee1an4Db3hcx",
  "key1": "3gHGDGdwUB46dWrfe9QAnzd41Nwdv4btfsv2scDUSV1cTY5ehyUebVEn7fmCbgLdTZXYocBR9ncigDKqRDtKptzh",
  "key2": "26mfe9TavgvACs7WAPYJBTVBcLefdKUiaGXyYpxhctnYGUr9jVCUsYG3vhY6n1nPjLAHewtmbkHw8s5aoMPHDUUH",
  "key3": "d9Ro9hGH8BXoVU6J8UpWwS761DWb8BmQub8gPiujeAUdE9vthD6r6dySjr22qxnZaVLUUy738Num9osmAtiswmT",
  "key4": "2grryogdRbdicr9X9rVKYhW1SN5qUCf5FHXoY86WpnBGqAwQqwPvuoiHCgnjTcFR48KR6PcXV5fwGDoWKTaogkAf",
  "key5": "5315TGiZ2e1a3k4ipWisNJzE2uTUVSbfpokCqwqJkYdpiXxUxbBfR5RvqvUUxw5q2H93zuU5yidpNCWDspc9EEuy",
  "key6": "3jd8RN7hAE9sE2gM5Nugj1fsEcUudSraK6B5d5VWX5ffm2iXvgqnJMqPwXNRChzN1hF14dAv3X1qKGYaKS5ddWcr",
  "key7": "j8EkrSs6Mtfa7chcDqC8pLEW3Qo4qfVvr2nGBb4z5z39QK4iaRXHKwjEYfSSjuAp9uVUMFRjneKe4gYxmeqa7JZ",
  "key8": "5QxNY3L9v8th7S5aBrQDXqg7Un8U8JNPc7S94UbXW9CGa1tX59ziBDmJnDDuk7nF6sXAhioN2vdptGe714FNNoU8",
  "key9": "2P9BYboD97kfzuN7K1Z4kHma7x1ETT8YiBQUthRSRSKfB4oZmHsPe6HA6fkMB2LVTL1fPTTNFWT6vGn5YhTVrWs2",
  "key10": "664KJzf2QMCPmExJiKAYuVUHE14BnbpScHdqsFWKGb1ofR5ZqRszLhceCzhAP8tL47XgbJDHJLR6tReFuiRvmoBL",
  "key11": "2QNhNBuYSyuxdfF12m1jmSsmk3jMjL27M3zVXdvonkDnTgd5EJyb5hk7SLdpoDxo3GHpJm8qi7Tub4gfMTV4Eg6d",
  "key12": "5fLKfhrgXK4qZZygvRy3Hga2NUYsXEiMZy1TChR1AmTpVaH9HsnqPS9Er36VbyXQqa8iM2r7skxwZm4fKE5nFPDW",
  "key13": "yGjErb3gZip5PfE4capou2PVgQP1fhBpEdnW7bWNHVgC6Da1xj3Xt3CkucDCroSnNcFNmaPXNj1TSn6fhLFQxfq",
  "key14": "3ouRsptbFSZgjMio8jxV5s1CfHNmedFGbh6PKtzTCmdmkKgTPD7PUpRyQ8rZzrg6uAjFUkghdmdcmgSpba4U6jkM",
  "key15": "5wDXzqmiZDs9EbtndyVvydH7g1jZ2QrGvvEfTdGof5XU3rYc5dwqwoUYXK4J7CykbzvUWFeHGPiiq7RGpDowdkjG",
  "key16": "251Z5ZhUQKC8ZCfbKgAZSkSyGheU6nNFLAFtsY7hXF6S4D2k66SWVTSRx85LuuYkjXR6czzB81361exSQjqc2A5e",
  "key17": "3qTUMFDm8KVDkk648hvwWZ47wJgkmtcrDV22TqVwj2bVrYqQfFYQGVa3H9Jv3LXR1jkiF6VP7RDFSBebDtEYqtNV",
  "key18": "2JzFD7CXKoCySVkLdEkSWyus54BTkWEgnywT8RJCdfugzSF8UYpxxEALxedzFqdu79QFwKZzdXnxt2kNnexbyUBP",
  "key19": "2iYusXudgukn9ueeFevxZLPMwL567sbs7yd3QqYtfvwpGFjk8XUhacHEmwxGoDgwps1VKbLzrSLMGHVcwq1rCUa9",
  "key20": "4Lr1iTzqM3wz1s8swcNXkcnync57NHtEFrCCCNufF6dXszq8FFdmmMNnr9N9mYXQhFttAjzMLo2uen1ZjfEkHACm",
  "key21": "42XD3d2ANoFvoz48c5TTWyGWaXK3FAXUej2CXfKrtGBnQAEQxNF25StpK5p5zAE6PbAZf65p9oV6F5tJGMjHKEB3",
  "key22": "pYTmM3KfzkiXbt6YMKB8XMKUbkCxxhuP6Gr62SX8icUoLnUyewb9GpZJkXo7reFVUKt53TEwP4TMkvNxZjSfyo7",
  "key23": "oq5RpTRBEG4bbaPmDq8BmyW7pHhkY312snhigizY92dBs2vhRyAKnQ6McfyjeNnPyBYg7R9CqPSUKNNzY2ivJE7",
  "key24": "2YFtARMviDCiEGvgX2Wn3axoLK1iLY6nQpWBUhZZUTC9KTxEvJbCrmiqPiu3qber97p9PGxpF7JigxEvJHNNq5L9",
  "key25": "54HC827SzgXU9dWWMmkXHnKnqRhyTyWJ7f9sZPM8oNXFgsL3CkUSN2CBNzYMriWFuWUcDjzxDe51tcVcXu5s64ty",
  "key26": "5MLCicDdBGH5Na2xwr9pAr26WDRPy5xQcsPS8yz7soujpBwqSxRoC2rhwANtxmPyhRPCqSzYwwPmbhY6ejAgaTrH",
  "key27": "4qW9gSmevuKNkbzX7ZN8o6YyycSU8mojhgtKjbbbvGVQg82ho32CikEbnD4s5eBtG5P4FNVPULg8Vh7fYHrV38Uz",
  "key28": "3ymxokyLGSHyDC8BpySLZ4iVrAwJU7g8FAgqBMrDZCYCVarST7escEnrnAWqufBJ8mrCw4mWkNgUpifY2xqkrV8D",
  "key29": "515KdMfWLodEH7NrjD746CiaB8r8JDLLCYe2XjFC33H8MZAFy6NzFyfXvKuA142cdWswbGYXUVP6T8KJrKzEvN37",
  "key30": "34ocYc1z6Hn3tt3GqhxyA4ZZpnvXHAg9PKA1eaCiLCZ8Q3b9DtPbupEbZTWVRoQbphm84bfJULd9fYk8qM2AazqG",
  "key31": "3M8nbT9x8KKUJcLxyBstZZr6FzXibsEnQJqrfLCdEeLDnGkXPyBz1MwGpkAr4UF5UTkf7g9uPeEh2kHsgkWVueWp",
  "key32": "3DtgrD1toZbSNyFqY6qF8nymu5br1cg94xXygG72Y4KHDD8nQsyfn6aUjHb85CJHKTe6xxZgJZaxxkgisL7Pgoj6",
  "key33": "36ztMs9K77ksuQVuYCL68vVXgAn2A3SUmKoh4AiAewWnQGLeqNGk8nu59cMpX9E5X2EKyYsy7iCuchFJVFf2kUwa",
  "key34": "66LbwH6C6SyNyFgzMdqtTNKiX2JKjDWeuinwsUu6FY7nEGJnXCdN8HEh9cENXxxoYTNvAGmEUnYHU1CvsbhGhMZw",
  "key35": "nynZsQeVAfMsKcLoBApbaiJGHeaEyaU9pNvoh9E1Zwn7cC5zcZyMubYer69ZXg5jZYvcrso62ZggxLZyji25ToJ",
  "key36": "5ENGWnKxhNFkLpm9PbdVpfteqkxxvuw9LuxESuq95phoqN14rUEwjGhTwuFsi6wumHCpLmgaLAdY9X8vE1nRZWAV",
  "key37": "oSSmTpLH9PNKNmZXWqVGtg2qYFi9NyLPDmhWBAyDDhctCdxETAgxLU4CFGE1aJvrFCumd4xjDtSxZtNEBo9Uery",
  "key38": "228Gt6CPkorUExMbLbhzvdZSH5B2dKJ54oUvPcKPZbEW9F8QEtgyQXvFpFKbfo7kTA32Wa8MA4zb8EiVdbw5J67x",
  "key39": "3CYLKvHaUZVcaw3hCadvHWCQmq1xWzPrssNkHgoidRC4iGZWNhma1sUfpCEMm4SB2n9qXFpRjFdWnWZjwi4fVS1j",
  "key40": "3Jwj4gk7njSX4wS8uhPHHu2s7eWVsKo6CR46LnW8MetxNBvMej6UdUpqwftRYwyLb4JfMJdCeGhKHX1pLk6SB8dM",
  "key41": "4HNqjdLTMM6EhdQxqcRsGcwVVyzAxqND8Uw6xEm1taPysBMa8qiFMqbXXeds9EgZNCPz5VDgRjdSia8vp4RT6GQo",
  "key42": "33ZCjcfjFbMdjd5tu3bFRf3LsCqhLcbneGvKFHik35AVRmuwxw3koaHM3CG7QWJBVD4vFsA4nMJ7vTJA7PfRR13g",
  "key43": "dw1mwUA3KfJeFVkr7akpsonVv7BVHeGUnumVKqRrvXt6D2Lu3AG98kMUbYtrqHunRwHUoUkFR2z5VL6hwyLZRqo",
  "key44": "5TMxtv2n7hvXutSbZKCK6YoiqbxFSfBSZvsDqRgGfbbodNMEwdys3zXXFn3oWGkySruVcyNeyEYKGWi39v9dKh74",
  "key45": "xEAQWv3pmhjF6Y9TodTHRZ6d1bbkBwUKcT11R8YWcrMzpE41rJH9ydgzw5TSnDPhw7gsNfDVARV3B4wNsSqoSEQ"
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
