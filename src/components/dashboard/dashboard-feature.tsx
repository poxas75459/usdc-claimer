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
    "7W8U8jyL6go5mQNNhyRo5AwpfdUtLMTLQxfAQfFmB6aXrdHfTZWHzHTSziVUMHE4wA3TyhiQa3eoBiDm4nWHrma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qntiCAGGCK1cZxbW5B2SNRo4FUpbHPePf6sDJDaE7b47gMiC8DsfeFfRqCtWDw4oHESd7S4ZfRv3JesuobKqvKW",
  "key1": "22K9AxYTxzqkdG7YLad5yXG5NJ3BJQJRouUUjTwrFnftycnYrVMUogE2uubP2WKvhAzZ7Qd19QJfB6nuPEX4J8SM",
  "key2": "46okPhkV8UwcUfAmv7TqrARwJAYDRida5W1sin4HumVUftJ1aNZJnjw7j3BnzCCcYd97gRPg4yMW6a9WEgdDgf7i",
  "key3": "3gikVj5whmrvKtozASRRFnVwDuWyqvJoCKKPfzFyrche4XLZXiQMcHqdmKt4dogxzwxhoQQgwn87yzQBDo2ym3Nm",
  "key4": "3tQ9V9ZH3XPuMmDWtPAZvCWGMXtEPGHF4TBvQM7Lst7iJQS1AU5LJ4ichmrYARvipwAM4vEsydoHZmqTtXEyUJYY",
  "key5": "2Rcf5ZCDhL5vnUbJ7psmi6vGGHSKffWWA1MaC2br8CGgazriUBgdKGs8f6TeeuTzhQdsW7WaRbvurfD5wR7FF6zC",
  "key6": "3Fvx7g5A6CiDjdhhzuT8cTF9A7nxqhqCjWqi9mmrNqRPVoXmBDr36619VoLuwSH8bvdtw3DHzGZyme5AuK1MTswD",
  "key7": "3hFUBBiP4R7W3mPr78i6bitgcMaB89mQwoPpAwhgLTeXybPfpx7pcpLQmxCpK9Udud9pTf66mKrGiJAvpfi2hn33",
  "key8": "4onjPDZbq2AN3PFAuN8ZeUzd4ym9XPgouJQNN1LYtDL9hBkVDKm2jrKc8FynnWTHyJwejDJPng1i2BZ62SzhrEqQ",
  "key9": "4y5Fs8HfYKHkUbmn5tNotH86QsMznHvKSbgaB2vVCXuy5rkc3XBwyATsJDkwhnMbeeU2QB8UNm2AgXmXCRq2xDw8",
  "key10": "2yJnnecJQaybBWupAs2wVdwuFunMWSpwE6g7ZH8fZv5caxv9fJ2HrrY6iYuHoBG8wk5C3YnxfhGUd66fp2dMKBNa",
  "key11": "3TRFPK98qqRSjaSj3C1dS6jGoDmrw3yYPPFNiKaPqdtCHWfs4zqkXcJWw8TsZvmrGAgHhs3icQmzDhsygyP2baYC",
  "key12": "3BZ2PagAq5NYvsFVX7KBMoigXP53WCcnPxb9RGHVypyC1sErouYrT9hFvT7VpnLFRpEzPHDuoaKUxm8QnKGBFXcV",
  "key13": "3pNDYdSwh7Sjn4H5Yunkd45TMVT5ARRermfZ3rr8QbomaFpQ4PKiCK5MQgGc2QixgTchXLDev72XNCVxLpJiHgDr",
  "key14": "4BgnVnU5ovuReyZt9Dto8iLncZ6giQcRXgKf2dfUeFfuuQ4sEW5NPuAa6TNm7342ofeoxP78Pjsxu7v5WWpaUFTU",
  "key15": "3ih3mgugTao5KCtms8QRXHwDkWJ3LLbdpaSL1RxzJNfCftuqCeGa4EGAUmW88RbKZoGzWjSFoqTg36xUBxibDrqm",
  "key16": "5K6qSVduJKytcUqDU7feg5Hm5GMeERJJjMwptUcvBUYtrvmvp6rLfyAJvo9ekY5gfUz95PgVZNEbJagdTY7GgqB9",
  "key17": "3MY5jKPa1w2XHLowMN5U66GR97mf5nThFNRXmymaJTxcG4fRtcPu5RoasJZuUtXNih9h4z9Hu9dXswRGkZJgLLHU",
  "key18": "38DTQwaW2ktc6vDMmwoSoLFwke5rEgFJGdAVq7uMxt8vrhkuyQ2Ttqd1nZiESaDWNEMVVsezAzoh7euCP4HunF1Z",
  "key19": "nz1djChnbZxcBdxZSkSAyZJe7x2fRQFs9uDPH6v9H3UQ5Wjdq1thE48e1QXL1q3eobfuMBNEsvEP9wg5PpRhZtt",
  "key20": "4oFLwPtqHjE66JrHdjHvfzoWY58jWAAd9nZYL11AL5kS6AqQu9UKqQKBbFKg51uxnj8t2LUCbAN2BDmSPRivXJ3R",
  "key21": "4En5BQaJHNNYdSqHTGjTRnrMPX9yqhnCX4RWSKqy64whs5AkoooETvch1GQRSfv8SKjeAj4D6cbv343vPsFxdDnN",
  "key22": "5deigsHP4jvc9zneRE71vgfiLAVGXVikghRvmekt4dn3fVVgw9QxAh6ZXZe4vcmvgJa9LG4A3V3E7r4wWMSLmnsB",
  "key23": "2scgd2YVwzrvxdbnUGQZ9SBwxpedby93SgGSQabY672wTdusgiYoiXMZDSdrWgVrwwqP8Tkp3eSb7wqwtpuHnwWE",
  "key24": "2N1CGGDpWxgBRaJz5WfTjQriJsu9gXQ4jJji9S2sEUZxGNDzJ2vVh967ShB2hDnJjNcYN8wEBEVENSt2fq75aXLn",
  "key25": "2egEGHswDJBQFXsfzP8Gczot6FTsgCmrgW6XW7MvCsJg2y2u2AfstgVcbVfwca5v3FVtVbkviLSfUpckPDF6W6cg",
  "key26": "PsUPcAk415jDSxQgjBQsU26QX3EwLYeqfhrtsJQAnvCi3tqe6A4SCDVxs4PnevbsS3m3Jr3vpXVssUDEArXUH3W",
  "key27": "2anrB3F621sHDvqWBXAHu9DdXt8k3ukm7mkVQG5YqFRJ9FxvHDCjHUsGk6TKSxLZRithBGietB54naycMPGfaMH8",
  "key28": "4YeJEXRnyXzFCUacwVJWz4E3KnvHqR8WTTb7i37C41cYyhbeSwjeEiYQivvpc425McJRDMAUfD2iRrPCv5SH8gdA",
  "key29": "UkyG9pFrAWRE5QvZkJFRyA197Madyx8rWKTJ6uBSuSNxhLnL2KiAxHsvLweZHD8niX2FDs21jXEeGiy2fz6nGNu",
  "key30": "4V8hueXcL7CWEnf5KUmXs2UgSYeWGS7dCP5t5kYH4TmCs3oMN6gYiNSvCorsWiLCBmebXRV6FUEiqE7ZZDV2G1ht",
  "key31": "VePJGKvVDUQ1NjunCkuo4wiZLe2wUJVjYWZFJeC2FvnMoCJnyT7yPmHkduTcbpDPoETt3xkj7rt4yY81iZKuMwz",
  "key32": "4Qey8Kji9YPQLNMUy5n9K8ohVgU2AKpeHCUMqKCKCt25QhWiRaTgKc1RseQV6UnpegStpdXrjz1uPsb4emDvWd2k",
  "key33": "2YTDqdC5HHSyfiwB1sFzVmi2LN12AAYpFJsVGR2yybPn7dRkP6epPCNo87z1G6DuwoCwdWCcesuZtqyqzonevgC9",
  "key34": "3v7pAEYhvhRJwzQmxyvCF8EDvJDzY7Hp4atUTjQte2tUjQMWxwcDbAXhU1uazGX7kcXLS8w8cxDzaqYHrsMjeE8G",
  "key35": "5G1yz4tBGy59y8JrzTrUWJsKV4z7NvW4ZFc9JtK4H7MrjJLDygUfWuvFS9suDWzzJdVmUQ9PZS3ncgYxxhkcoUPi",
  "key36": "sBfNd8qhjQcjuyGhUmCD22Pw5DrBnvLVJaJL1Wqvhj8DjSdCKkBAJkWnnaRBPHMPgSXSvSs5v6T1opwBondNLkN",
  "key37": "5jXYqL2BUkBSDwydEsvHfqRTnwWychbhX23kX6VZpuCMbwwypUfd9fCKadbPyVE8WX1NvSUpa22GvDZdpKxRvyKj",
  "key38": "4cFEi5VDF1YctbvWKdR2WZssbmWF4t9kCA7QeaJ99LF8MUxm8ytJa1qDNsJ5zRDchabS8dAUmk5keMAyV6LJa2HY",
  "key39": "2uRiFQXm3DoFbCCT81BnLczcR1BjLpahWEkgMXZ7UTbs8cSpyeLUbR4HaY43P7D9mK5vfvcscw2ifkeK4T6sqaak",
  "key40": "2WQEou8dUaA7jXk1bRMrooeDzg7cRf2c2YX66WGFU47homqKScFtupiDVUd1G87J84ijxUCya1r96n8ndkxSebg5",
  "key41": "5mRwLDXV2QabeSCKiMjreD1JzgKjYbJ3z56UdPUwoaNnvoF8hQUAHRxJq7jhJ8EYvXo9dVkVdAHbj28dNcPbh2dV",
  "key42": "2A2pCh8KN3ZABLFBdaNmokAzyLpNjHB7Vjjy4SVGwBsHJLxB4Uji7JACPMgJLNRR41FV9N9xqrSXa81U5vvuTTTn",
  "key43": "5nraYbSagpqbCiCz7CLNMy5fto4gX1rtMad4amaPMuiFZEt6mD9DCqLVurc9a1cujpCg1qyvFdc1JnA3ccxpZqG7",
  "key44": "3huus6f4WvzMbYTrZ24zDA35vacfGHEaDcUcJ3zAG8TY3zHjn6z7ABvwRTtN8BBD4QWcr1opPJGyGYhkcAcAtNnn",
  "key45": "2ZRFux4MqxHmiTtJXsGhoBaF34mZKKzuiMdeN2tewuUtFzueQ1Pd2CZMfuVaUXHt9JzqmDCMFkguKQFCujF2Xhhi",
  "key46": "29LgoPBdbr9776S5f7GeDKKGUG2mAhviHwNNWPvCuB6ztcGW9nBpPy7UBZkQnbWzEujf9A7LFSAiXdbDgLd7HY4z",
  "key47": "5MJ9zgoJCx7EmRn1nwc4CHYc5doWwzYBzkk81SWK7HGor7fipmbfVE2Df57uWL9iTTVGYL8cxCCmjc5tGo21dEZS",
  "key48": "FnjPisQc8GeXYVx1J3TeCBD2RxevXtnapFUZNt6SppDF3hK1jQCuKRFTDsaVzNA4N1hvht7EpHfR3iRd9x6DG3B"
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
