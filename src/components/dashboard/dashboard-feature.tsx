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
    "2U5twpq7bKmqbfNYt1rWDXkXWevbGb4JdJPfSvHGpbM962GxWbw1miSejvGHNrXg2o8nUNTvuPQJ9sXYu4xGYPDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PcQDV7Vx4PerGjn1wK22FH516iZLSNrJcxgMtJtVfrt7uxChPHXVA4dRMV4paVBq9GAeSgHdzuYG3EXJz2j3A3U",
  "key1": "4KcQvjxyvz44dnzqrD9QEaXamPNWTXbXhiDVdk7YgzwqLqtV63Jb7EiSRE7p79jpvnPYgXRXBJ4JKFubZiwDNyn7",
  "key2": "3vKv9cwfQWwTfjDvbqzy2EWcKpFWdY2GksGpGTyw3Hu7G2FsFqNnths3GXA5Zes2WrTyJzCjkytuagm4Q78hrD1P",
  "key3": "2uUgtujTr7WQPgkLp2vo7SkD5m1SfCsPb1u8qVbnHfNkQJ2VX5M1uvMTrbTfx4AT1RqJMwwQRYvRXvwbCKgxeVsw",
  "key4": "4yLPhBjtcN7LF1x8bnLzFKjAGWuzhzFvmPGhdF99qWEJ1zXXvoUmvLEY8xMCE9zaU4tYLoUiUZgeC3apQjx3ruyF",
  "key5": "2bAL9xezMn4NoaKTb6Yuf4Y3wegL9yeAubAg5CeM4CXuMK8XhbhtFN2kKC2sevfWxW12vryJKfq3mQHFhpN6VeJU",
  "key6": "EJL1BZ5r2wvXupqPCpKx4RvvmbL5oZfXuqeATHaGsn99hFhmGKPVPdx4xWj4nQvs2cCzSmoh5SyQhR2eY5bCMdo",
  "key7": "4XvzV8xuu7ymPpWCt3HNJ3F5uynVY7xYJzNvW3jgzrFCyG72JiSFvc7aPzvbwWfF6seLSjSPTAzQAKu4ThfThaaP",
  "key8": "5UXvs6fJdE87VYo5cD4JYMfa9Z3FgJg1xFmqCWcE5rFQmPNUrNJLKpjYPrCkSq93w1AhYc37SYqS46TrR9tQK7Lo",
  "key9": "32oFRyvYYCKPxMsaZkmn6PMpnCmbDUzYfHkFEDtyxnW9C8LhJ5HtzsW5CY4XE9Z88uZGFsi6Gecjz9YGemSQzE2y",
  "key10": "2qTcWDFR5ZPRqT3oGYfbH11HpqRcWKbXPCge5TJJ3Njpy4zV9DwzMRNFdafKavTdLjUdrGGsBn9w7yivuRf1KpS6",
  "key11": "3XJKSEuqynNjL48UDBZsgKnjHvGX3SnfA9wwnpV46DYNTL9ryKBX3soV4wTWEWg1jwnSZUBXbZV8TsQtvyE7Pitd",
  "key12": "3ccVCkP3Vect6Vah2SuxkbvMqVChbGtm5xwZsBi1aURpxR3t5eEKcHnChWTT2MKxtf69NMC1m5diGxEUyugFezAL",
  "key13": "2SNs7dsiyrQS4TZC1ToLPZX7iPqZoC514eKDyLYExoXmXoSdXqXoi6P71nTtnEzJFYX4H4MB7jP5aHah5RLHpnvk",
  "key14": "62A5AGPLTh2WrZTGbLe8RSs7GbSWz9NgKaHac5WMPXD9P6mS3CzrQDU16teacnBCzXD2GZnwCaVjQjriYmWqTmFt",
  "key15": "63y8Frh8Hj8n4Hu584xNbg3FF5fw3BfNARVNE2xFTigowZ41vLrHYKSouUppzzvhiEj6fBZc5dGC7dii8GnExTf2",
  "key16": "29jiX3rzwe1ycZQM4wxBXLZK9r7trguHbhNRav6oFS6r7x7ZS49n72xRrc79A3GH6yyd5GT87gxt2RX5p47w5vJj",
  "key17": "2aKDD9AoWmxfQyPmm8K4Xy4SSUS3gikfiopiyCYEr3Sj82bZeovN8KRWtCNus8yHQKpH8b9DwGweYzTKLvqyipcH",
  "key18": "2EWSAYz3euoge9tGCJrWewLf9UFbRPNCUonqUcPGuEhUTVefuwLoeQzWszK3bPMjFCKLyo2CXCthktpj2VSvb11E",
  "key19": "3h8CNbQz3bGCeN6Q6mSWYwL1Scxj4RuwnyeMGpj252HQHWe6Yy2MzseTn1RzjGj3jBWP9XYz7XVBFaQK5XCBasti",
  "key20": "VwAGPqdyWsUoMHC81Ztz1Ybsckd9V85n9Nv2ourhzi9myjitczv71AoaQbfeXBoDjsSQVnDgm4SNA1YcNKRLMNi",
  "key21": "5jjmyFm8K7BSd7bLJL4XsiELbrAPzUsgDxqJnBb2fePjzYpUfbwUmDf7XYwJjMCQUzMF8Lum92Ec94MXbzUei2KM",
  "key22": "5yD3LRkufzi38hhs3vwLcQLapjS85aAKH1CAkJMj55NHxyc77qQ8Pg7wrCAGBMtBTxhCMGxVf9PzMEUve7mox8k4",
  "key23": "5BdsC1kJNoJ5dxpoTE7FYyDx9ZwmLRmSbttKZCCAdDshux5NTRTiM11uZ13byvTQBcdNSGUHJtJ18vgwEDvdS2FP",
  "key24": "25ikKru9G1kHEXkjVaYneasEqp7HhFtm67qindGE8dUY6E6gHmA8mXPccmoGR7jxabfdttDHDZRNFwtkTz3XawTp",
  "key25": "2b8zpuGpTgAv8PwXKYNB1WMiUKgudv8WUsi4oB6EhhBU5MSKjrKuBjLk7cGwBkqc1Zj9cBLg6ySiQCrb6zCGtf2Z",
  "key26": "45DLLVwCXGJTNjHgucmigJ6WaHK4VftDuF4RpkgAriL88HwgJUHfKz3hYQriHx3u5K5ADP2H3ywXjrMC1Jz8H6m1",
  "key27": "3M2xtMr3kd3sCHgxWjpV91aGJ8HpHbu1YJJh841wnHhSYbiySuyJYJeZXAK83heFv8eKBFGk4swfoPQ3Cht928t7",
  "key28": "4JA4ArVqpCss7yfSShLLTWi5dfgStmjhZ4nS2JVqshWC3YLda7QpFw55ei6hyuQ8dNk38yT61GBYtFhXawHMLE6T",
  "key29": "8WNDdGKZxeGnYKYAzimNiyPYyQEqEmZ2ATXMGQSjca4HKcs2DrLRQbBooKLy9TiA8zsDptCFn1EnzpaU7g9FBq1",
  "key30": "5jqWYxnWzHYLAC6t6K4JjDsGKCcgvkHiJSYi3GxP5gGNjAi2EPmWHeh2wDSVVUnDfS4dHKkRYsVPsLJyUPaUU53W",
  "key31": "tkep1KPwbv1rHQ5g72Eq2yduFL3oSgmkJqHQmFF2A3JiqV3xgYUk84p854EhbYxjRRuSmstfysEGRoG9rnp7LGb",
  "key32": "56RGS6tpFdiA2nw1isbaUWQimxCfrSdhSqZLFJuYmPMAXgWY3rXDSDmkRmBrKyQdSZEniwSaNcx8B2esHU3BHa2X",
  "key33": "1uAzFcigdzfeKsbMBWN3QbDr5ULfLro9n7qxkyP2TTewWjbE57Kif5SBwpQyKSCMhQRAM4t3YjsJbVApScdz68",
  "key34": "4anAMSnatwaz2Fi9zSjBwgFEEkQeV5HLTS4cfekbwoNgaWS9xrjdeSqxAhRMaKi6g2CjxjGDcSTjGEbw6e77uwk7",
  "key35": "2Wo2vVjAuB48aRs7Gkf9XFWRMUgDJJNqif6RNYEs7J8U7QHXmbG4UTZ7JCR83ApkBUEJEMbd4KFgxUqejVXwot1H",
  "key36": "3Zf5FjFiLuzzSn2iiYsmV7y5mJXiwLGmQEecWU3Xz9eAQTfBbnWZTrkGss3oKfA9ZijatYsj6mhxFqwRpmEisQRS",
  "key37": "4A7BEmpAovB6aCH5Q1Mxe5rGuCK4Z6mE9EwMUYkQ8akuDSNx73mcGcX8aoxjcaDXCjufU9ywo683d3rV1FyKZca6",
  "key38": "uwC5VJkZB9jNvHpoDdiYmDvdLchKEgxmkJFUeJzY9rScArZorB5ZmHfbS9KhEMxPpHpavN7t9gzsLqWzFRJKjJp",
  "key39": "4RHSXNqK9hAKnUaBzc8zedwEEUnEUW25weQqd84nva24kbQFrA5SqMKnrpa2DJp5jUt5BnQKBWFzWWwrvTvnfGUQ",
  "key40": "2U6tP2QitxRer3SbHebuzEjvSoXysTSmYchHY5efhW8wDuk1K7h72Nja7McSVADiHFimEweWtfuFGs1BDE4pRbYG",
  "key41": "2uFur6xQzcXzNQ8B3bB13c8sJ3C5CoEopdHeTXhrhQR6foV7JUA9DWG7wdzMhGJrAipi7y8bYQJHTqeoLinkUTo4",
  "key42": "5Z7sD5CLhXR8GAyTXQ6k5zTejUHH1MyFE4zvw34MWz7kizkVKK2A7uDQmw45b9MEH4fLZUfc8te8t7tsjtXku5ze",
  "key43": "2bqUxdgybH4YGQPFdjNiVhsCjMgojmuxTUzib1PrbbJH9H9YEn7ype7SJPW2S7HfuHktMGPXCLB3LToqv9Hog3UM",
  "key44": "62xrq8jq47AziycQ7DaM6qmzPExCK8KSk2x3agcLGnxB14eCaV2xpijjdeSnDn6vU79UMgMbX56BhWMKT2Dfp6Kf",
  "key45": "5z2qqeP8cYuwu1Q9vWY8sadAZBB2BU9AYEHqcNiJJgfF8R3cvmfFDojXs86i3xF3C7D9yyzmMjLti5oFaUF3jFt1",
  "key46": "5AbRu8o4breC5VMN2xcBj13wws7WoX8m5BFa3svRDFmGsHxxXumUi6ZoEiaqpquni2UKenB7SEos8w3wzS9TJaMY",
  "key47": "5uEopUgEWQAANizDMNR9LtZRQD5t9DqHyLFMRH3KHt1iPVN1d5CpZFsYPFXXqPJQrpVfVNYjCCo25rFtThSM4t9c",
  "key48": "2nkuQoGsooQGsGsjZF6VoRzikmcovAqCUQ3TgiDYywXv5J8VwDtdAs55BjP9uMYQkj4AMeAQ6NsqNjeAUGKtog9g"
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
