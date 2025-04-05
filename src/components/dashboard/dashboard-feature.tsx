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
    "T9EKtciggfCbq7EnJA66bJqob5N9ePtUDUeL72peTjcKkFSJeJ5kiyPhB6Ajr9244yzhHeDtwPA2pfNnwUvXNvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2raofwHSU7GK38b3JT9nQbFuiG4uFAkjd432nPmF3uVUGHLoZUfeWVAsgBg4xq1oSuNkzD7tVvYZktAoLCb9uNEQ",
  "key1": "3bCxGabTvRXYhoq3iVLJVmqXBHvWSsZU63sgahM3SxjEADguYN2YccG5jZgKQhfXx8tzbPQvWhoHXZi7R2WbwuAh",
  "key2": "2geym6vFxuuF157W3WzqVjQKnPi5RP3jtL9WYMgNTP8KdZT2MLziLpzyviuQbUqVK58U7pEubnCtSEQmcy6cWfXu",
  "key3": "4NeF28S2TjHBd6zjJL9cNuW2RTF8TLLUfBMEg3hrMXry7BB1BLHXv8zX1P78Y614XBtZAADmW4UFNhU22v6V6Bkn",
  "key4": "2mtVjvefSAAXU2STvtAYy15AXT52TUFTRyJTEqiiVvn38VTNPgfLboNnKA2ZVfGNv83gMG5bSVH3bCef2zyTyKJa",
  "key5": "j8ajvgMiuSw6KT9SFwJi4reDYVTXV2ENnRyHkqJtPb9fGF5r4cRGV3cZgPcDCsNy57YLJCCmU3bVJmpDMXhbEM5",
  "key6": "3inqn8MJAd3uXc8a2N9CMAXY7Hmt9j6poX5yN73k55SBf2korSbhBDH7Zbd8ixFBoWqQANeiMhiAnaBu6SeFap9d",
  "key7": "3KQv8kEG3LeTN7ti25xrUQPrFYa8kHg8zWqM2aThnrf1QCbC3rMTmKrReq66iiS9B5MkhF47BLFcyhRFvdcCmAgH",
  "key8": "3wrtAh1eYPwEoaSDTeSYc6KLNmAtCWPsY9svmMyoc3Z7mPHkFCbGrbtn7WXejypzV6UFLw7K3dWrzmjhwrUL47SL",
  "key9": "2fBtL1q6duGycsypAgfaDiTF8UqxqSHP3w1vna1SGExcyAFuiMiNB19hZob1QSQPYp6wsWKaWq4qKagiV9c32JJB",
  "key10": "2kpLHnQnG2uVpyKAbHoHQDCrxWZaA2CUmCnwDgHuVHmUnfj5KDkf8isXZ9utE7Nj4WJE1c7UdeoAufW5akPfqCXb",
  "key11": "3MHD4KZhhDwTnxFyK59ggeYzfVyug5Q3CELGpiNcaYdygdHURHQSzuworMMxbVUNwWJ3BxuPFGkdao5CEkfLazHU",
  "key12": "3h1v4crGcFGJZX54amsKvoATSRYAH1AMHC68KekoTTPbDfJjpU3tFv8pUK3xzxt3HZv8ZkKRkKVYCC7UnVuTtZnb",
  "key13": "52uHAy1iwHSMKnkD7oDS5GzzZYM4rmvrD1EBfrr2oekAM8g261eMcTcysL74zXpMwxrjHn87gjbFdJfAtNefxVxA",
  "key14": "5w9CfezatMDKihBcDSXrKamvAATwTCCECuu6Lk7znHNCVzSU1TYoXpzC7kndv5vQCp3UhytznbQmQ9PKwLchUDan",
  "key15": "335HqeZL1fmyG9Ep4HTefrtmYzDkNjSFjq5BoqoARZYy9PsRUyP4uFmCtb2jBJaUxH6UTbqGxkbWikndeHQTvXEw",
  "key16": "2gD7SasB2DNpFaxQLfE97m6FDe5XUn8ExFeMx8HJ8QGtRnhvFYejAfQz7jJEdQ3h3PyK43QthZqAEbV452TMMdqS",
  "key17": "4dbDqds3oaCMM54MT1CCvqygXTBRqgoFPpEZo18nNGQLtx6HQWT9V9fq6spiARbDRpHC4vwRCj1XQqQjS4Fdp5Tp",
  "key18": "5BhW56NTp6xRDnC7ouVf4BffmWJSfFQZApjgK8MJRVVgi7wq9x27Gq42dcQW5ovugFEp26Y7tDnaJCnXu6MsmSDV",
  "key19": "4g4Pu72TExS1wRS4WTeGXcVycGnv55XFGdMY1oCrvPiULbrWdFDdWHh61qust9crQKQnq3vZyrrnizJHDnkApMjF",
  "key20": "4VL2LCcYTi9Yuxzgafe7jAJmy5GZPVnB8qNTRUijKjqL3orwWjmhV9mtN2gD6psSsyN5oyGmTFfZxXRXtsx3AQFm",
  "key21": "XsovhfM1NQGL7cTyDzZmHoXXtJqQur3zUYjNWcT2nx9fwqUT4Hi82KHTQhQe2DH4RtTE588EVxsrihfNCgrzYZh",
  "key22": "4dwCqSuvcb1xc5QJV7cb3mmov9U83oeFz7wPrcfPbFMjCHf5h2KCtGAjUSjJ1AHF4zwv66RYTRF6hwgoygkoPyZG",
  "key23": "2QiT2shtBwk9dAuMvagexxua7EQmqUfWr6dWFFAVdQRb4gUdzwze6CX2RPvUBbkEFaFBL7dwwwSZTCYPCzVc6QcT",
  "key24": "5DoAtQSxjrc8AUfendsDTqh3QiJbQSBcopYqwrNSgPSNx5mZ6LquFnMucDWhdv7mrABcx2nnw9QN2PvfK1Kwxkqi",
  "key25": "4mypvPxRqVesRAoAsqz1RHzRopoBDAW15SXHNSiV78QpEuQHEwccfvdPWrq2UvbLCLS1mvD3YCeZHGhzxYWQCWRr",
  "key26": "2YpTsMYRu3j5SebtuMnVAdPw1Y2PkuvMtVLRuxy2rKHfafzfWerBupT2KXMAoBuWMmrNwap2fsKVqEKqFHFMPEup",
  "key27": "2LZM9wqpUvWEyJr4gbXeGZYYAhyjUUgFTyUtgRcD3prhDopveJxbXZHBbVZp71XSGvmYPkCAwP3xHDSCrBVLPM1",
  "key28": "2Xsbb4m7Wo8zvZV4yyGVFt8Frbv7aTxW4X5atZ2BmuFMBWnK3fdzaCkmd5PJBVtLnfgjA5naHyfR8geCJFe2juUT",
  "key29": "REmpzvX9ViEuZyt1MnXQcxhMHuK9j2zp1EebChCsocRq1FUuo2KyDXng6FADcxVpWcZyFvMpXTJPazdmjGw7FyG",
  "key30": "bANX7cxM7okQKM1PjJqQUJ8RYwfV2BMM5HbEYbzpabGH1QGE3HfTMqwgmgkYa76Cj9cB9v4jy9veWRa9jW4JdGi",
  "key31": "23iaQfJL41htiBbTwTRfoNJx1N1bRo15bcECqLCRrsLDUdnH72CeahF6KfAvpdoEcPkrMoB1Jvnz12wYPJZzppaq",
  "key32": "2Z9wTbL8zgvkR5rFuQrHEBQm87FJfWEcrxLgadQvyB62rxq4qALgp2o4TnneNLvQgxp9UXWXZgeHA3eAwCRpciWf",
  "key33": "4hXDa8KLP9odY1z5GZXjjbhLgJhyiECqHhfSt49vFDzQmuyomaGKWqKEFzM3Afzj2pBUo2ofgaG8wKkzR32sXmab",
  "key34": "5ctsnLapnkbHZb7VMQzPU6TABDrw8zZV1btwKnGEP2UXiGXecK5o9xPQfYBeY3ubrxafH9o9o3kCF1Vd9hZL49g4",
  "key35": "45XAGgfNR7x6sZD9Qayuq67xigdWXjvFFTViEf5ENDo8S2UTNv73fo4jtHzSGKi79eGyEknMXKxoy93tqgpvb43p"
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
