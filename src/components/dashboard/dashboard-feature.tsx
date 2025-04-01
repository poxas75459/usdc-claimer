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
    "4J3pLVSC6p8fMmKvkmwRD4iRHoa3aRixxkcSZpjFoPPRYPL75jbKkAT9hJmK4mUH1wFc9ZcXgjfhkVSprWxFL3mB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58b1ePn5wosUN4X4Qpfcfw6paSVC2RzYFDDB3bTuM1zgzzYyagedCrT9Dvt28v3EjHyZ5jCj163HwZMqAUV19Jj6",
  "key1": "jSNRZbeRiCMicuofdH5ZWSJkby3DWkXgTUaaE54nJzbxGv4Gr7BXodYkyPByRAny57TEYmS275GhPkAXPZrgUgC",
  "key2": "5PTP2wRWnjHEXXWAULjWc6uJnxVYMeeJGg4s4DS6xY4esVN9xDdPDm62nB3c6jRN6ZgidPaABt2wa9NCtpe5R72",
  "key3": "59so6BndjW8Q85wUvvB1JbzkroeTt27f523sZNMBFXXvCStWataZi9PAsRhDSiZ7Akgu4G3ye1voCbC2vmAxfRs",
  "key4": "61duESDk1BubSL7JadwAvQrFNCBUE4knLJJow8jnRxxwdimYMBeGTUKqCFzgU2ZMmHkxL3JSL13Pq8pywkXTH8wT",
  "key5": "2SdqoBm78PPE2bpAEhKLC2p9DHi5CNGkUMpJBRoTN5zMVmQzHHyZMP3yhJFPaiWzFuoYAXbfpX41tPU2z5WQHV51",
  "key6": "3ySfpr6DxLEHrgdUAX2s46F4vbgCYAbB6RkhNB1ba1dMqcwpuwNE97ki3VwSWc9D9PdF3tjKXNWr9ETnoc2SNj5v",
  "key7": "2bD4R8hysPJceEVhZ4ZHQoQ4bA3FAqP6B7gsNkNqXp26fQDLTr6ZRdANcSQJPUN9NtrLNF3uMzCUaVFLrfx8i7cW",
  "key8": "V6nVPFT3QqVKW9uxNrMB6GD9fu2gfFnLTStfsiPNWTGNNnbD2KzZidaMq5GxwLd1KyQhz5uWmjuHgLRH6CJGzBo",
  "key9": "5VrrQ1AVbSsmpLdkdxYHKKFdZjmXefu1RAVuddQFBoe93wfkKBmR9PD2P6B5f4qcKtWPWtWPpAVsGd2y1fSAofTP",
  "key10": "28UEbiubHUHfHwAxzSz3Rq39cwGr6mCN9FKFbmgV5EvX3vTYpFuDGt7Vft52oNow43Q3HRpPCHqARiVSizqje9oY",
  "key11": "2tqA1YtjW1Rj4Jy3zYce7Co8bSKVSToz1Xk5QYDU6445DvMAjWEbx7Pp83sV2qSTyRxF8UTpxStt2QPuPAPXLA7W",
  "key12": "43bJLXaLqTCraeXjPMoYiqatRL1PLmM5VNrErzmbcyHQyewuKg2DittmtxtWdic91Yu5JyEPC1EwJcQXryHq8Sak",
  "key13": "3nKWu6Bot9Wv73p3qFrmH3mn2tjG8JPWnB5n9nCrYwvPQUUF6UitRCL6baPpn2eKVkMdzTqmJCUB6B7XKZNBtn4h",
  "key14": "NbQxaxejKumFfAzfhuSkjR3x5Xm9yLy3gtW1FPu8uVyJjtJZVyiCZaKw9rLpfi3rGRmYmybpmvBoxCHoeFQWCSh",
  "key15": "4Cu5Quh6g2FRy5FQg2RNaoHGqE67XH8TzbtJiCNXpdNUWHrCbTmneo1Qwg7evs29NYrdP698nGD3AbGYByWeDVZT",
  "key16": "3aJtR7YnxdcC3r3ahJBxU5WnTNpSLrG8KHSGt8xZQou8Xz65yn3ymLWRyc3xpJ6hwkCspLwKxDroszDqC3fyC4yM",
  "key17": "2H1VpgnLcMnmNn6iFAK4s6mLZcTQXXHzHgetbDJjkUKu4wpGT4LXEJx1kDKbatnZz6Um9pm4NpAtEhby5hEF2Jga",
  "key18": "5exWyqaTzzjDgK6R7pjsidopooo2MkGHD3amy3njUZpNLJYVpRHPg7EdM9XDfx3DkKSpXuiGWuFMnNkM4DPwCEFN",
  "key19": "5HjEEw7CBMGr2111ns8VbuB7gamQ52Fj4kjVTBY2Qp6syaXyD81eBNrg2jZQWqeQUqg2LrNBVAcYTceMXfBfwZaT",
  "key20": "5CzzrEsP5Z8mEAVJawD5LRhCEj6bQFztGZYM6uGmKyMCRaT6Hj3Bvr3pNxs5vieWKWSHqS3Xkr3oUFB6syRKNB8q",
  "key21": "5S8PAj1oe1zScHWdMdgx62XX9SS7gMnwagnvepMNgnuVUEDb7wtnpNKRVDubbk7gMfhKM8yzVx1MdFKGWr6BHef3",
  "key22": "192YQnsJ2958NJ8WynwgKrFnNmuEzTMHbmRdX6yhxXftJPedAEAFdKKYjALZh34CdRHPgPweJRXiLMyXd9dLsML",
  "key23": "42GieSSm52HaRvzKXJ8SnZuvuscTdSz6xyNQrc9vRDcJJQSv9L2JdeP5SebZAyMLyV7gzM1iN4ATCn9vsiSNKdCX",
  "key24": "5km49m8ujnns7QfdTbdKKWa64nm1Y1rCc7iJtMsMHAJi5aKivf57A5ZHeY1uNFL8kCXuCpc91cyjQ2Ra8erQfJJh",
  "key25": "2F5YZwEZZz3nHKZpg9hsGXmK3mSsRSNfygiwSYTovKE2N2r1M8yZjPQ1mhNeUCPNx9KJPsFEQgAsXG1EbgDMM9j9",
  "key26": "5DUHdi93eg6a3f3q8haXqMVHwyqS88KSHtBEZnmaCHWYCn2TiwnZg8JbiakmUWA61o4uxJtJu123dwznukN6yqyU",
  "key27": "5dVkSFKcivftohYdtKjxvboNqCeTxWund1djdDeM6q6ST5QtE92HTg4v7dx2p8Sst4tK8jLx2yYDLkZ7Dbp5fh12",
  "key28": "3bg3P7rn7DAShtWgZRaSS2oP7Zq9p97mqmtH1bYcsYb1BW9Ws4qQo6aHi86H858LwDZE3w7zo18tkj7kNXhPTnJs",
  "key29": "5mDPvSjqPWvE3ifiKRwJGpCmjyJehNAX7LvNBL2nUgYBt5rdrXfeXZr5rkWqpbzqFVX7seXGzXzSeNoCz5Cgn1Qi",
  "key30": "3WEUUtv2r9qoEvm17wCij8zzNVHR7fZyjikTbCzyN25F13uZ1qGVWiVzJxCi2XuSa3YJWhYJXJ8TvHk2xDmPHbfV",
  "key31": "57P8KYhToncA5rDd6tF9R1E5Um345gEuMyZ7ng6yctfUHrNo9dKCb3aBbY1LNfCWHfXygi6h1YM3ZAAYNTQhaqEW",
  "key32": "52xYNjqV4ZiaU4XagsX9MoMWibj2grg4mvtD34J6HzE65mzKTsRwKRvqU7omknNwMge4jpB4Ka88w742Y5eriE5L",
  "key33": "3D6eGa29Rk4mEib34jQCFisabtbZHGaH1s4bzPMfo5noSLkyi9P83jUaG9f1MJKoWGxtUQUabUwGqAGcm8jLJ1WN",
  "key34": "5QoYQr1Y9zbeVxPtZJi2qFy8yV9ToGUyS8pJysGWM8RCSmpcdjLq34txGq9TAyj3YRPfuwukTSxL1Wsfbjj5KcAu",
  "key35": "CeF8GHfrFN2ggsR2fvihuGE47Xrkh9tzo2jsAPRpTn79wsVT7uE8fbAwADNsGdNJVMU8T3kDbWECWpuNhyLwJTR",
  "key36": "JTA5wZVfixh5QHje8t4iA2rnTE5XsM598r9B6zcYpj8GYiVPBgNRUMHy6krTDFm5NuS1Kfvd7CUQGDidZQN3Veb",
  "key37": "2wZFxENFfXsAw6GR5cN83Z6K9Ugm6ReqWvNLChTQNPtkmNwjAfpfqQnUNsmn3SyH9bvzQ1Rx9HxopoRn18mUvwWC",
  "key38": "24XFMofA1nSUqNhZfiCcXuupdtr6mJxUSdGJ3428Pw1GGAUEzcRrqhXdkWDqrgpPymLCgwoQrv3Y9EYq6rgDSkGq",
  "key39": "2PJrQgPG3kVG8HTyJxissEGW9HLmxsEyNCA4t1eYiEMRtovf8gGr1RtxzRNoc3VL8PbLkzmCbW2ywusHevre8cp7",
  "key40": "2SSPdWKYdahK62Q3zZJutxJbU3iFK3z1QEhpbm4sxuju5KQdGiAxmuAF6Eomi4Hex4HuWmSszZ3pNLor4Jvn5TC2"
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
