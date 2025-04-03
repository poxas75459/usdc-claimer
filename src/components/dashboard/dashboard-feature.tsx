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
    "5FNao4SdxKJ8vbhwm8bBobYLTw69DkBqH7XHMQw6RyTE1kJcLpDJHVcBK57YT9wPoiGt2WygZxzod5enBeCE2ULN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58nzCbM3me9WFewi7gPHzNqecdCLWAwahmWxHYvtqxyLnbMPUep4w1e8sD4br66nssPqSdkb3hSz2xR89c2Usq9y",
  "key1": "2K6tGZ9cC3gS8rCSVeG68B2RjfN3QxK1azYMNPuNoeT7nJ4r4BGUmQXUCcSEjxNng7F3TF4rdvVgb5CbA83HozGW",
  "key2": "4bGfB5kHttDqRwfpsFnJPTUgfgJ2cuJH85pCtfvQxo6qynppnYAhDkXBbQpReZXWs9oWYkVEpqMiSveAJGQZhRuy",
  "key3": "3gXSXTH22KxSUVtdTtAEhcHmez9UnEKaZ4EUnvNLiofhXzvjGUG3aRGg3xF6SSxtRwk3ZhLVcZtPCm25sF3EsubP",
  "key4": "iNuvqw8TcrNNvvVq5VrdsMCRPRUiRyJsqMktwagseX3iPDappiFSH9vAa67ZXkqstWdALM13ABsp7HsFQSe2kDt",
  "key5": "5kXj2s1N3Rhi1pCzs8xYwncT1e7qu7HQ8CRFP4E51agvJAKmHYTxv3Z9tbVYAdWeXNGWUcrc2SVACh8MMF3J3NQv",
  "key6": "3uk88CgzE5x3iBaKYbzjH9cubRVvmb4Suh32hYV7thV5PXqWbqz4AvkBgaG6cUoA748S6oGuCRdd6LXyPw6BCbaY",
  "key7": "4dBVSmjavBSbHnUgraYwC4KFMv4okNGLxUfvx6qiQr2d6RFMPQYxQdCCmjcFTxRPJLWSRj9t1a47BUetSefwq1gz",
  "key8": "4irpuPCN7GSnVtQVpNrGx6hHgYSKGBrwn13C7ML6r3ScCEFPucovAh1s5c6zQgLCmDe1tjrhCiktsQtNpn8eQbSm",
  "key9": "3Ur1suAzenKGSyEkEnwbFu6emCTQXcChaDsLkA3Q3yceVrkF9Cq1T3pXQoN4NJvcrXC3iUA7P7kSgnRREZ1pYSP4",
  "key10": "3RBDAJhmvE2dnporAAMCDkuydCKfUCarkS72tTZQZtbb3YDGTSnsdLhqUyAMeaK7Jb7Hz92nq3VVwSBFUwTFXdE5",
  "key11": "49R5fjn8YV2T11GXb7ywSRhveLHJNt4LHB5gsBcjyAbokN6HPWoXA2zUVdFfPUk9qx1oB3bNQKghXiH4Thk2ma7j",
  "key12": "2ie2oRFhQANT5MH2ZLMG1AW8eKifJSVUMJcYNjTBRFW19ru8mrHMpFvTFGSYLVwCw7uN4RhYUGSAN7pbKrraTxY9",
  "key13": "2ECCzKdtYn1Kw784LbfsKeFQ6gweN2g1YwVHqTw5BgwKU71ttPLkgRXQzQbWZLsMiKgJvQamCSZ6PWD9Jg5bSkKJ",
  "key14": "28kd9VMHNKDss6xnuBdNjw44Ja7dEzb32ch8ymgbpZZ3hgo9KHMWTMwtayTBoZQWYU1UA4uAMbkow83UabxgJ26o",
  "key15": "3fX6TpErPXyv7DmK5h3FNHvqwVeGMBfBKyQGAdNTaRoerXSAwVrA5hpdGXrDxhJ6qW5nn77C4gABdWX4SnZ5gcUw",
  "key16": "5P2KCFrXxDL2PN532R1oUg2q6uTBKr4L12o7gcY7BQJ4E1fRSHw2Jrr4DD5S7aw663pgiztFs8BhxuHqcw9GnEju",
  "key17": "49CDNKjjY7YmHz5fb2ttg56ZHHARBHBfe1gjkcMHRovTdogRp8KpEvFugqY6t1th64ugq4frKfQdMvdyARBaMXmd",
  "key18": "5PTX5AtoPB7tSxNZxb8kRhdcvCvPvSx2Yu6fJAY4NGUBteH8yeGpscVMVxSYuQVTiLWAp5iP9i9RjnfYVdq7WXRk",
  "key19": "5E72iPaj17qmGwRjwqFu3Nppup2WSsM1D5TGuYakwdGGC17crK2WeeZGKchzvz9VGvLYEiRWavs38deeig5hodeJ",
  "key20": "2U8w3H4bmHjj28wRSEvjdTSQpPCJi7qAkdBwK8ya7mHCPSgqok59NvnXqnLKJdxPnkx8gLFnLkKZWBcwtEEhoj3P",
  "key21": "3F4fpRKQkaSXLuGCpEU9ttKgEzWomVKVn1dgfjnF1pGGhKF7mycn3KJhtYMYsgLFAafo3TbUASJmKj1xwYa28tga",
  "key22": "ZNyBcW9X2GGASPctVdreV4a3WsrYNtXUECm7J9WouUTh4chBt65mfJXjL91K25BPyYBVauhguwBe9HCKxAeTPGH",
  "key23": "65HDenhmL2YM4BVyx8k8JP17EACZPWkYNXrLhpaUf5moV4MKMFh8JBp1PJ5etcoydEoR7ehuG9kF1oHKJCnVyHs3",
  "key24": "4e9fQsUHXYYin2R7YXA9KY986p8Cig7AKntqq7BapDrGGkT7jnqSoB3g3XwPys88GyuB3kKrp46kvrWCGvA45mYG",
  "key25": "4ZhvqiHJM32XnNG2Ly8nj4UBTCAcmz4DvSrSfa6aAVT2VW68zUVRadYgTPMixxyEshy9EyDAdkfqFD5qNGj8gfzx",
  "key26": "2cdSuDP2VQby5j6WmrppQA2H8RUJESHf38GgvwcxEA9iNF3993CDqJcdHqEbyajQPpgztRFBUVrzQBp2N6Aevw6j",
  "key27": "dzFr35JxVFmjab35pnuDXgoYwzKzfEwvdbcrZXCqBV65paGHaTKqcWHGQSpZ9tK1hqSEPftbWENxWYgtNSATt3U",
  "key28": "4yjWV5qQz3nGdReDZCzz5S4cd23a573PWMxAa5qXtLpXLYLzzEnWjsbkejXrdDDHomAMu38hCYQXH2h3ybgR9cjY",
  "key29": "4cf7Wqg7KsdF5Mc2Pdg5khbvPaT2643WX3WoVJLbMizv1MjwpEmdxWQPQFKpefML57iiiFHz4oLF6KmEixm44h5D",
  "key30": "35wMdQTfSSBngjJDjMXrUfynfZkL2yPEH95fhtcXCdtP1Fx4LNv2rkQA5cERb7icUzxD8yK8h9UzbmZemanuBQAB",
  "key31": "iYzMCybSMojJDvwhoL3WFR2oxNRzbkcjpXfrUJ1FJvZugv14yAGQofZWKTtec8j1ETyNED8qPg1Y2fYrc5ifaUw",
  "key32": "56EzKzWsJRz7tFznJaAQpp4xRzWXeny5TDgCvXJ8ZFXTrm6wyMQhTTVZgZ7o369DnL28V7Tgdd6pSK7eKccx8xAQ",
  "key33": "4RuTEMvLDaLCxy3HFicbtLZwDrgef4Nzx4w1xRLL62ZKGDBnQqvH7so1ZMuwUyuKWG9Y3q6Boz4RUF6myA3HiKwR",
  "key34": "5i5f1pt7TrK6mq7WwBvDrtJ4VDnmpMGySXgCR5cyXM3yty1EaiLkmryTMuEjEg6jZBAy5SKCjXjryVBkR9hD81gt",
  "key35": "4DSLtJaav1TDdUa3WzM7MMBESaanThgfVNfXwWGaEUzZu8zM3hYQYn2843MMrCAdvikb8wuV4LUBKHLdngK2BBV",
  "key36": "663faT37pB3H1jSELE9qp4UpYFWNGj3Cg1aZvSEgeqrVfAup69mJ8ooqFmZjpn1fhzofuv4qFj7QputKVY2azdQS",
  "key37": "4hfvSdjBigMqpqZeNz9KrpcyipzKhT29SJQ8vJTCuiNsERgoRLt7dQndaug9aDDCGXo9sgM3q96kpXjuG3Hpocbg",
  "key38": "26TYUkmKB2ozZrKiaCpfsDtwFXB2uyms7kWzgDmBYhvSTpShJnUmifSxa8YdXtc9a4mLZbJnRjtZNypv1A8Dr9HD",
  "key39": "4Mkn9Exu5BWYBPqqeRyB1SnrNm8eLB7qkjKtGZoMtSJNNgpybzEGkfw7xX8f3JGcLAEPgCyU3F8y8crB5DFeyCyH",
  "key40": "3WyfXotXyVBzZa14tLt9WBSnVLbE3xg1aPDjUuFDyvVw77t3dtGEUWnDGZZG6medPNPHnXqDKRYp7cF223CpGNbP",
  "key41": "2UcMLB8iMf9b6fKbi3agbWFvYLTxgVNFCm2wwE2hrME1GqXX2rsv9Cako7WamnQrLWE7ym7yB8AvEHvfpyQAti6",
  "key42": "4tFgtH2uFahgKktFdxw96zytBnfLC8M7EBco6au9qMCeuzyQWr5wrabx4C4reNAJ8cspNQody2oJYNUkYcJ4rGWx",
  "key43": "iHqKdX2Hdq7ttYFiMYqHqNptFPR9GgygDEE8YtLE2Ysj7ahFdLibB5dd9hiJ5676bJ5FP6hLH2C49Vo4rPmakRn",
  "key44": "KAtWpGN9WNtmsYgpopWaLiHRt8hEyFeLvNcWZn7hY5qeuuCJzrfbiGJWABasaScGZevfAEmCBpTXVLyCNeFBBYe",
  "key45": "375MwD1xkYeKRuURWcwryo4NA7mKFbm4Umc1J1mpyAUtj8sxvki5s9LZwFkD216e33UxdbV2HL5sTst2VSvK2HHd",
  "key46": "uBxkeAJdwiNCggB7rsXAghRwLBoerdQSKvxVum9V5hoKuSxZVHBcBD5UwZbYmZ9ALoAVBfPUfxbfYSe152xzXhC",
  "key47": "2Sp9eHSpGT2DusqyQdAXN2LDS1LXUhfqpGBWsCZguVeKFtS9tuLGe5SwrWLP8YiN9y6ZeGQdp8tK3Ly3Ja9GKRtg",
  "key48": "2H2LyapbVws9EMknUbeKBPNQJyDVtDZ8f2zq9QvKvjFnfvJxkNbP69X3C2V3pBBKc97kckZvK9vjhK6qmUq9Cvsu"
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
