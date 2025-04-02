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
    "3rFGtkqCs1eC3tm8RToGiuQ4WufCXWTH1YJiY9m3W7xSM4xwG7jfkQGet4nQeg2PWHULvpFtWJba7C3bm98aU2jX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aoihGJFNc7mcvBtBHr39dtovQfKYi1HZa8svPXyfZAAg8vKZkpFPir8iingGzExybXyzpBnNrsdbSiUF9JSSBU6",
  "key1": "4WEstAqeSRmMcyFAKdMrr5qwJNTwgMFzu3ssZHxi2yPbXUyvc8BpdTEZhMyKpBksvnFWPSoDJmech21YCePCKsZk",
  "key2": "22qRXE8QjaBs6BPAXrN7dHwTgYKAoL99ZttoaXYMDzgS5Q9761tTiUrC8LPPin1TZrLogF8WDzo7rapyoJggB7To",
  "key3": "2PLUcp2B2PgcTbjH12wk4fErPg3ng5R6JmX3Wp1gJroqhcZ1iGySudM2PusZ42RnVHnGuCXmLGfWL9wcdgLhMDQp",
  "key4": "67HjBMNqJhFgfxPnYvDkxUpkZHTQb78EgqeLe4WiAH3UbKtaytiSE8uEUJG6mnuiN8k6UkqQqcUkxjWxZNo313HM",
  "key5": "dy565FcsDJiADs3LypeYaFziEWmHqY7mKSoSwTwC8vQ5viy21RH3esasK5S2MFnW73qUweNEpRZ63bYcC8uhnH9",
  "key6": "3Viz62mBWpQqsP4ndksdDabKtMr4satDafzYn4crZdjrP7rzGGagb9YVD1FQ8rcXvRpMXmGNU5myJy8mgCNgjgQq",
  "key7": "38JCUPcqu2eGKv1BEtWwXiyZWo7UqVYSfn4PArLA2K6nsF3YbrcBu9ta83Rw31B46df6uwb5GQqDCZ2Mxbrp5BEV",
  "key8": "2XWhbXtgjKV6iFCiaLXtkZzKPauRKwbMmg7u3BiJo25ryxWSfZk6mJ6pkXMzsocdkNZf18gemuY75d8hddiehf6D",
  "key9": "4g5iWQqKyfhbaspXvHyCrhMTvu5rkKdgFfRWn73mJJ7bYYigzJDeAN4U7gpDXU9E1t6MEZpvLpApv3yW5NMvQZns",
  "key10": "MvPtdMu1mX4DbTmjCqCkpyfSaJwCFmVRtxkUqdYSWkA1im4H24NsNUMvBfZZrEef4pPkVWAp22h5vZ7pC57LkEF",
  "key11": "46oWe8ZAvDSuc3HM7EfrByJkfsjmHhDfr8J78j2ymzRhbbVsrhaMzvAuXdmx2VeQHW8JzGqXMz7N6yxQcqKZhHJh",
  "key12": "429NytQtTaHC25ziYgy1uwmCKbq7joitfYEsnzDjArWGejwKS3D2d6AdbL5h4YweJJGt4uiswzsDCiTFFKY66t8v",
  "key13": "4EvtWH9J5DWgTqY6S82k2GVzAmcuSULsfuabsGuXFDPhkSXZMzFbzFeBg45MASSs7xfR59mzaGVYJKTV1L9URTMk",
  "key14": "3NsrPQMX1fEDDKF6CjEjajT4zVLoMYLyKEjPJbwgpZvtgugfi5JfzwiWVz7qjU2poxbGVVzkvpcNzGpYMZfbQynt",
  "key15": "2nXwqUukzYu77jLzw3EqjjGczknh7v5NwXSjBoUsgEBXcqkpMQJiUXs8LdsdE1uWbG1YvfQWvwYGi2v6t4TXEHaM",
  "key16": "2D4ESZXP4XYe1hBdaXW5damdFUCidiC2J3VY6q37VtfeYqfszNLH44QWZa9fYKmYe9u1vAFZPykhkqQFitJ9rtaN",
  "key17": "5MBuLrXALeuDb7tYFTMTFr1twCsMsiZ9VKApJ1piYJd8DFBiRtMNXXnKnPoorrrvDNWHqiFBUVBaqjmFScP8revq",
  "key18": "4P9rYaxsKW8xAMpYhDEDWMD7CQR8aPrM9Yqn89HANLusaKmsUpK7JgYdDgwxHtctTffCLVGSsXWytN5Bw16eFFUr",
  "key19": "5WqLkKCzimtFSuGsnQNq788JZNnCFhYzFJY4V8Ek2AW3oT3Y3zWBirFqVGZeWie386U48m63Fd8t2nqEw9ZEbd3g",
  "key20": "YDgdjLUbfu1iBQZZcWRJxKUz4VLHmmQ81eEvJiQxWWRSCQcsvvTcskhaDxGQ46M7okPktzwfdJzBh1MRgKPcWBA",
  "key21": "2gg21X6GAgk2ZidfBgW5VdVPUaQVriJXTboW2bnRxJedDdfSAYeJw7u8kYPGfaqPAADNF5a6rktEop8QJGjcxqsr",
  "key22": "52y9vjPm7Xd8kqQJQg6uJm4gUQwYEsRLDficx8ht11XxnzpDMhk1AWLiU4rH5u2gEXorjjugBZavaYR2pdLTqvps",
  "key23": "5EE2uiDFFBVGneFEm6U6Xb2EA9iCT1RmsPS8HLvE2nW5xPUzbr4Q8CUN6hUeNzpPtuRg4xP1MrRzBNqQH6YYoiBy",
  "key24": "5fBEPxKgFFomj3kUQ2MaW6jdQ5vjQBjhEmuL5oDFAKKD71wwvfRUWN5WDE1fmUJUcbw3t4CX45jggGGY9B2KR8xx",
  "key25": "CJeZNo8VVHk7mDfb6qngwFp6dg9tmV7oSfitRu6AFrBnAm7kmtCTX9efUjtjJeZpQEiVYH96TSVDNkZAHw7nzcP",
  "key26": "3wT6giyiKRTURLpx5xdBwJSvEbGYNutbpukpT4zbAjCvRDSU1mXduD1YCLPBrcu9JFmtwq76pPrEG9S4k292XyKt",
  "key27": "3yRAZdjX1KyocjcXhcMUhQEjZYat9sLhigXkCSdKZDgK487ABjiRUXqxPWVNRmZucJcuV6vALFpjc9PEXXVTfpRv",
  "key28": "5bV2cfw5ZTf6mdusrbNL2mqXfReeBSwWN3Zjeb5VibcMs6WJeVVCQdRdivRpXo5mqTHQGZzUEVPoiJRw9PnNNgxw",
  "key29": "BGCT3kSN9FoQXeHnJicVs1ATKqdMyBGqZdbb5d2vhZZJVLqx8U6WCg7so2KrHrdWdyvgTNdp9pMnLcioEmsvUJ3",
  "key30": "4omEZzNY9jaDQtJyj2U3dhDxLyLMcB916SjiQndAHBVmRWRTn2cF28LazPZoidr3oYq3omYPMcdsAzh9DHsEFfEV",
  "key31": "4QkymD2hE1buvZUWVeZU7W2AoFUCtAGA5veJWNcoP71e95sDAVb2G4u2ptoyoY31N43MJCPLTRDT8QLQTfpFF6cS",
  "key32": "31viDE2PAjeSe684YQxfadGuxqUrngH6sSJdFj97PuLH2qXfKUkjWs2boKKJBDM1rviqRmAfKD8xKbwxPXmFnRfd",
  "key33": "3Nc2xH2bG8ZWduP9t2yBtFfhTNKcC3eoSz3LWEH5xaSXHs7jkJYSadjjGXZXVzczF6Rqu8s8oaNWXP81M2UGPLfm",
  "key34": "af84RkEYkgFZdujhnhvPvDHP74ZPFDp7KydRM5mmP85vQno25NVJKg2p3nRoZ8LagTV97u8dSPg1cBCzfEeprsE",
  "key35": "2HaYBetiqnV4962Qc2vikBVgK7Mnc3tMseH7ty8mt4pi2GntoSfLYfh23nS1wi6pSCq5ceet1Ph69zTwK3Lg36Ma",
  "key36": "4YkFA4ENMLYmZE8oVgwfeLJWzkaNsQR6ciYaKRPQmcwAgnEt5Zi6vFKBpAmXXbnukL9ZvtbJ8vTabNhrqWyA1nam",
  "key37": "2TPHJticgbvhJWogGb6oJ1UFi2DSuTmo9yGYj3R8AcCfkUmYyM5SYgxFbBLcZ3X8aEVmSC268y3fALWUTKwJjNgU",
  "key38": "3WL73GtTAfUc3s4YKsYHJWoSv5aAKejTtjQX7e3eMMarf5PuG8gLxS7swNwpeRLs3b9SkqAJGtof8uyqTHB2YPzV",
  "key39": "5y3is6bt9ZBvSHsEYFwECF9FfFvqtM9nXeAS7RTNo1cKXPZQHsFiVb1PXfhGwS3niGRf9KwnBDzLfuYjJDZXqj6k",
  "key40": "5d6g1ceKZHWppck6fKEp1zSqMa85ALnWUJjwfNLA7XvtkeZb2bLyybRhq6YJQtzVM9Jpi1kEwyuVTREAvUzNGWe8",
  "key41": "5VRpAgK9fUQM7MNR6Pdh2GHXn1Nic8F5DS6GZNQPXc4YVDhg3t9RT8Ai2izM1oqDaZMyejery6GBpuP4nCLEm7wV",
  "key42": "5SoMUcNt8n9e9cgMBGrUWzwuRQzEWyN4xMC3SdaQXKYz2mYcYX6rHPjuyxDePebYqp8oGYV9GqPwHDEvttA1aKEy",
  "key43": "TRbyES6cfa626ryL9wtSPYXeC4nuZFrBJETaUvMZzGch17sn8pKTVc1DiLz2AaCuiGDPtATkTmaCiQPhQwRRSHq",
  "key44": "5wpPwNNcbWSfDFze6jTyRHfThUKP2jRjCzRoyMUREvA8Jhwzd344u9FQ5Cn57utBPBo5U6vqZWbpxSHZtnwzmYhR",
  "key45": "4Wwwt5YgFTgHaWWh3A2VwBui4RQLSir8Y1K62g1fveuQehsBMJqBUxcLDxVa6zD4gG2sH8dfyvWN8gc5hUzcXjKC"
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
