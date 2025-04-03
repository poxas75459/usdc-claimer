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
    "HFZ2TXvJHyX5SYApW2FKiVidTWwvjHPR1MScR2zVaEqUEqR5t858iCbgxkrLAfoFFa6fHvuppQxSrHZp9gkQSMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Wc3mRYcvTvk2u2u35PPKVCgb9ivapwy1WRNdF1BAGLWTUvaPQch5mg61UkDJgCX3k8jvG3GY69cwwawisWNYkA",
  "key1": "4fzEpnqFK3Dx879S2C3aoQWnDCqQekxEHN1QNHsW2zDsNrb6NGNDBx5bSQVjemqvDKqkg8N48DXMt7jXCBe1WikA",
  "key2": "637EJRSSFBAmtVuXotDAdNHQR7n73UfXUdhtmA6hR4GCZ6KE7nmuRzXyGzvHW8tVbevevywDqbkRwYkeeryxhVUU",
  "key3": "67CLVE56RxNm1Jr6NqoJFSj5iyq99anzPAzFrYr31d6Er9v8Bvio6MhMGDwVjfXwVyTSxD4h9V9r4Dy7RGuWMYog",
  "key4": "3a1jpqTYE5c5mE9zYSQRHwV18oqY3M735V694n5rVnPJAmWVuPBBdLnG6p2hNwm95nEA9eXaCQEAgSTDHReC2ARv",
  "key5": "2gTPrQkCauBZatUZSWK2mWvvvBQUWBs5uoZs2VGSgTKwBxAm3QkukoX56vJwaicrqnSWGwSgdanEdhBvypkiT9AD",
  "key6": "4WR9zCCgEz6ZxX7FKs2W4ikrXQEedskcoZqSboqNmR9rzZcbsH6yXmGVt3dfW9KZEVKZXKDfBSGSWM1xhWtvmMaD",
  "key7": "3idXz9er24HXf1qUjGfDibTFD2qpeLSRSB71m82XBM2rhVuyN8HDbfbnkv7beQFdS2axRUo8bFYJN7yKdeT4BvzS",
  "key8": "2Z72skSNWNCfWtPjYMZdcJUvYAA68tdCHzgPtNVquXLzstWmnQdatQHu8PfAahpcRYorpdBY1sMDkMfjWcoLerbM",
  "key9": "yTo1yF5xQrCpTXQKLXp8KNa1KMFS81cXfiocKdiTG23FVpzx45dh1RhMFMYrs8VxuU9aa9xx5UmJtKtmdyKRRmV",
  "key10": "5cYgVXtw1HkjUTdrFQQHgup3GbJ3eGs5m42w9pCYNnBWyzcCFXoejX7cPWfw3UzLRMkxwN5iPrTLMwY5q2gHitdv",
  "key11": "4erAfx6gJXSWVeoUEAsjR5dECsSJfwBvyXHvaZYbukFqZfsMjg354auDerPZvkqs43bdQYeKD6SM5za86y74Tafq",
  "key12": "58adWxd1PVN9EWYKDqumudr7fh9HzRFD2y11ojZu3R1XB5jnJYxcJT3n5M3JfqKQ9FLykseFXr8Y19gK4kKYqoh8",
  "key13": "fDo8SsxvHtRnFCts5QhiTR5CgtQZp1tW5UbotbG8zWqh7czBiYU5sm3dmjjYk68s7a9o2yCmhB3aHmwQfk9SRLi",
  "key14": "3GhMC3rP1WRSQnZ4xvq6LJ8u14C8jXgG2dk5L6YgvnYLudCHaTb7945CQQer5axxZrfy7748aQcqsEsUJma58Hvj",
  "key15": "D7B3YufHJaH7wbtU6nPoSKFB5SLsKtBnVxj2gE8SjRtxFFwcLSR5tVYgbn1SuKEYzpMWFt8Ngr3wxjTzowsFroX",
  "key16": "9tRpvoQjtoudPbTrgVJiyZiYhyBXV1cW37DWrC3D1zKJWr5NWoik91QWY6aMPFpztLrDv6LJMYN89ixNnVVKGoJ",
  "key17": "trf6ouJtYCt1m1QGFLLezrnmB6GnKMUkq2wbpzuKEQ4yJx74r5mq99qKGgdgJXtgaJseUB5eygNHDJngRRzzFH6",
  "key18": "4XXyuZQt84tUTSEmGiGitkdgkQyyc2VdmMymCRAnSd7UrNt3bznz71eYvvdtjdkEiVG7xgjZU8w5EhJeqiuDdPCu",
  "key19": "5ToepFuZkL6xHqBautYmtbgiuMG15KTSVhrjqg8fJu12uxRdtB3tFxR4WEVsmqqCGV5iQ3eJTJza5Td7fTELoe1K",
  "key20": "2p7RQoGU3FAT4dxUz9wGPfrvzLZERs1LAYTfH8twtFrdyDMQ7QESCFYYxxoqZfFRwTCErbFY8yuxFbhKbzfgfWmN",
  "key21": "5KB7hMQCbeCKBpnhAFDGsxogtcJD6pEoNRqHsQpwDoqtKuD27qGFfSZapKSD7zuoU4zfkyVXjEgio3YhnH8RqtJC",
  "key22": "27V9JSYGrhjwNKxesqCptkBZibPjjCBVGPee4ApjxkjwN7j2B6CXSKjwkzjdkS9LbD1YhvXQ8m47mzQvTnQgdG6C",
  "key23": "rLng2T4f8jaMeDgXzb95Qg5yBkB5pBNUwTADddJyktLLBfsV9H9YS6AzgDF4MQer242omHYKEAXYRen5oZnqcLC",
  "key24": "2UeJgNwfFsFbTNW1CUorDRde6rxCPth2U8nYaju3n8gUM9ByQkRvtuRynjTMHgw54sLciRVx59XW6HcZvYAgguVx",
  "key25": "4AQPcxNuD3TJEibGVug9nSAPZhpMpDruY6AhhVuhmCRp2U44vfQVwNvmVY5mMBXLpF826BktgoW5KSUvMEnVsNF3",
  "key26": "2NcDhthyMRE5K4SEbp8t9QYG9DdfkjbZH1HzfP2vuL7Y3jgtjKJR4R94jxX7uVNKEs2L4z1sBQ1pQA8ezoZxHxTs",
  "key27": "3c2L7MyRH657EXvgLs4zGyU758jAZFQ6KyG36aKm1cUJMwCrsWFkV9n2yHhbr7XTUn2dbC1GdkLh7rY1iQvZVhdA",
  "key28": "2iUtyviM1Hhj2pc4suprGCWZyoXE3bN2R3u2pRB2JsyJJmDWm2fdHGzfWpNRrG7ckNWb6AYgr9QyUxm1faZqcDzM",
  "key29": "2awbeFeVR7ErFfvbyg7EyrbiZ3vVsiEAwEAfGTnBMPqFPVxNgvbqqF6VBMJjGL8s3XnM5KtqkcTkWxJqfmnfyrSn",
  "key30": "xmCfWgigU78JZFSSpn8hEDfMnerhQ5ZKfefDvn5uxdJgSqEHYvkdqDF4Y3AyYzSj1sUgb9fNdRR55dRg5tmSYA1",
  "key31": "28oWEeh8qrdLkd2LMDXJkPon3o82XsWrBk1QhuW49W4VhjJrLSnNC4TqHMmN8PgaSiVJH5hC57PYF3XuSCfDNuT9",
  "key32": "52yNtY8Xv5mATNeWZhN5BhRtzDdqDDT9L9jy496R4cNKtGgNJRTewusQDETqEWEVr15MEwUCat7soH3fxrwLix9C",
  "key33": "5PGqFPrQogA43LKMtzWhzqi7Ef3ccoC1Wed6oATT5p2Pv6sdJewCS1TG9MVrEAaHoMCEe5NsdWh1LNNa3uJM1bwX",
  "key34": "2xH1Ja68utGV6XYQBFP5MBycTEdNH3VUHdDVsDZrvcLa6gtdbTQfYGeWjV74EhV3Zxk5ZTK5ha56ATvNi8VgExnY",
  "key35": "5LCQufbfjoizpRmoMw3eu33GF52e6LnzxzEVW3zytmpEL57UWABt5UtZaLTKfhSD7u2w38oDpmBfNoBaCwPfFQAc",
  "key36": "4Bg7avUjgif6z2zsmVF9YZpCXC7y6jVW1UCxCWrMuKX977vm2nL7KYUHXCZdLnsjaTB61fnFXbzsouLoNQRjCpbA",
  "key37": "4xei9iP3oMvFwcLjaPGuzrQ7WLZkGJ9qaCxvmpHCzdTwVPt64eSWAt8DhEpKpxyjTd2PvGKr7FUNws1SWCD4KqUt"
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
