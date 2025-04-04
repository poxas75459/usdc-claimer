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
    "4hQFcxnuRg5MbuyMCtZuVLe3RBLKgy7JgWphX2HRCL1gB2fz1RCnf8si2Povq1u1Vy1KJHQJaKhEdNx87cdJFo5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VxNWpqf8iEH9Q2etx7SMQ2oKd8uYunotBkdZskd48z8Z1YeL2ZknygoxwfyMvsEJvMHqaW6rJp5gkBc8UY5pRTb",
  "key1": "4pS1ScdruGJfiAVrVMN8km1jSjf5EEK6NTMf94DeFWaHFDjvhogLHD5pHbNEZtgLgXFbyimjP78UNKBEad2hkXJy",
  "key2": "4ub4aA3wKD2RzPsFfEacVLfikGR3HiYphgTxsXgiQxyYGoGj97cCkaTqzVYfRLpBP9NUUX52nFHQ66XZQRYHwSiR",
  "key3": "5p1WfJT66jEcdHDgzxKKL6sDRtQQ9NNppmpyrBCmiUVYy7QCQv376H5ZKu9FC7Jjz2HuGDd8gRYuM7oj2nAbSGFy",
  "key4": "3yMskBQXetZhXpu3SM6B1gGiwG4ZYxZ7cv5cXzyouvFTtrM4ZsjM1DJuB8MLu4FNefxXje9d4162UfdsLWbjEVbk",
  "key5": "5Xxs7zksNzwtXHWHcMnkh6Daf2cqYhfHnaavxwRixJNu2Nx79jSNfFuizdWbH8WDBCMJZggxZf3fNhvoomvYhB4v",
  "key6": "3kpPtjLZEzCFTqcV5tNf6CFChBzHmpvL9YD1fVc6jTRvw5naymeVpD4RaUHDRnmrx5quZJwhepyqvLfiyapHiquJ",
  "key7": "4WMJaKbfbGp68Howd7HWQS5bJBj2Uyxx6djSqr7icNhp1uXbdSwueXeBB9U8X2CDbJD8bRkNYhJihAHr2N2oFA6n",
  "key8": "3E2D32yC4EUyHEVNDU55oeEy8Lp9zsaCNqqsbiyhUjNNXSUqyBLCMyQufqEiq3ZewWzoYqEBS9vWZuwKX1TAX1d",
  "key9": "3JrfaqkrJ7RoSb2ZfxgTQvQs2yerKZJ2SJVtJvPFQT6aU1oZpioSkk2bdWYKPMR3kW9UNMCtYicmh4zFhqzrrDkY",
  "key10": "65SShFEtFK58u6dHfV7LKLk85YXrcTcSkB4aZoCfgvnQzAAASvajttc1x7BBJTehb5Ge47HKCNm4zFDEWYg8T7mD",
  "key11": "33bCSv4vRgMYApCFxAksYZY462x9WHndFEFBeLQdg6ooe8H2YFPuTLJXjotSV3qNwoNMwP8e4KkcWhqgtqjGpDtd",
  "key12": "4zG44sYPC2aEWuMszduGzkJjzXhD4VsYogH7zMYRxkdThHhddWaEzh7UCfpXnyq6msPeoi2txXGLoi5TEpYK3vWS",
  "key13": "2FKtN9gSHMDZL7FqhSSUPQzXD9AkPGMmQijQLybFtGWShCYLAf3SCDnYHsHFniYhtjAWwwmsV8fURqUtByY9N3Ve",
  "key14": "dr7C2p2QHwvia5TcdADCQcQpA6rghMvusSLQRZMcLL35nS8txTmUrpybdLihvBrpBDKRgnJBVGhcKXJNm6DeXNH",
  "key15": "5Z7pmvT5oufAYjSrT8wPz6XmTKFE4Wsb2h1dPonibLo2LdxjaJxDLLZQuXJWAqvY1jugyV5TBVTE32fLvacAgfH6",
  "key16": "gyHkvATNUmwNj3vmorqeMvRattEW46xKFBpykNjeprPEELdbnqNyWSuw899G26LQVmqjLXHjbcYJ1DSqukNhvBp",
  "key17": "5XxEm58udEFadDmDgZLuyfD3hD23uhMPpqcDLBtgazurdU4ydq8WtCNaSq7NyZ28taeGiLwyuWHzXTRBmJZT17Pv",
  "key18": "kCXdzwgraSCC4aihNVjwQgQyCDhDXvC7Vkm37UCBtcmNGS7PhKdMR4EnmJXudurYuLT9UpWNq3ZniSxF9msKGMD",
  "key19": "5WXyhkM5Jp5afSHBppZjEt3UUvs5m1M1gzpcB45aHwrahsAXi36H8124jiR18L9vXdcjnFvR5ogfaNgV2jnWoRoM",
  "key20": "4W9gxp3QfqfAF22mqNp1SPu42e4QGZrMQLuXBsEAvRhDMSVcGSN4DesLhHKW8a7zXvjSHHbzFNYa4MZGJnaZwzVH",
  "key21": "3ST2Xg9KehrAKhsES5vperYSCE4qoG8NwmzCbPhqJhgAFxEXxFfgvYs43z8cEBp3u3hTrZ1pqBuFr4D99F3V45ym",
  "key22": "4BKJ5a4v7TK1RRJVAh9J5sJMmxZdrqqqZRGGUP9LXWE482QUC69CsYpVNKDdDZ9cYGL9D1YsNzxAcLbJUNSo1d6y",
  "key23": "fgzTD9ZC7VbULWApKYwwvaxoCsLsiPt7xt4a7pvrUV6A39Pszw4e9vuhsmTnpuxHExAhdRqEaGUAz2vgbb2J66e",
  "key24": "4pecESaefy5VkKqxSKZSpsRdkhVhoWikRhJG6peofRgcBhzc1H32yyb4g46g43WngTNtmK3ktCS549TxnaFjeUAP",
  "key25": "44vzQgKuNWNhr46Qg8pxBG6UYqTCRipSiMvHuiGfhLBAw6HoBTD2Y8VpkxrQG3LeChQsGFEoLRdzCH2EVdWGSDcc",
  "key26": "4LgtrL2T52Vc5fRf6W5RMbwpzyrKkktb7kmSf1bSwW4ngsF3Ng2HY7q2QW6UDFs6a1Jy7pig5uhspq61ci5mDPBy",
  "key27": "4b8f8q9Rt2xrdioR2oxjhkqR14PN9XqCbxCDbxLmtqkgKKT7bcq8mYVVejFivppx9V7iiqBcKg8ZGBZotfsjmrPj",
  "key28": "39JzVbo3wgMz39mgpRHzdtUTVujLJUBHcQr8BEnERucNY2JxM5HBUXh1HhbgWKapUAWtx3bqu5uNCFwUj1aZVi3h",
  "key29": "2PLTdJBhKzT1wEKBjNiiYdK7dWkiDAueJiWCCFLkLYcbW12uY28DJsEcGvdt5G9EVWzAcB5grgkWvNeLTikBFZib",
  "key30": "3TupKgKa7VGC7dedjRGLDUdkUicwT2TQazwWFV5qWJViX7wvaHLN369mCGU8uLNqxAmB79kbRgnjkAdiFwk9CHyz",
  "key31": "2CHHaQeJBmaLTbP6n6aU8s44naYXithriNz1JwYmXbpfSj2hAeLCBY1yLGTeCKvaA6CzFKUVWdYvZzWCwMogAhy3",
  "key32": "5rMoxHBmeAUZFwGiGrvZe9k3q6S2DUEEsq6RNHChVCRTuFoAK4ANhHdteRbcMuLqQgnDTtXhEs78UfEiYLtGKq3y",
  "key33": "3EfqnpMEDzRQJikfhk8T5xjY1sB9e7u4CRZPcorcj21rf6AifoLn6RyuXG72Kyat4QCohzYvJBfkkiJEXKMWxAaQ",
  "key34": "4RpFPk7ncpMvN7YxNguJzN955D3Qr9fBAwYYvfcwNMTDddXQEzRDH9xEXESBrbgwGBHHghvqJZ3WaoDNbwao7ED4",
  "key35": "245Vq63GxefdZAUhqgZX8ewfufbkBUJFQj3YgagL8JevEbDtVogAuHHudQfp5MLjqPwkZayGHndhYc1EXKeY4SMJ",
  "key36": "p1oQSm8aVWiPepbcC4HxCTqqhW8Y5NqQgDVyCwNYurVtkva7qDEE2PAGx8gYrTXQHQB9ipgJ7xfsgwsHejWTLxC",
  "key37": "39qgdgoZmFZxd5PJsmJZQsuYvqixAAZE1kRDYUuCGDsRVyXZhakhbGryFk7UejFxBV7zF1uDiahuAta29FDUmbuE",
  "key38": "2LJby8tz9P23ekmPev48ZUJSDSqzc5KCGXt8CXTtbHuP2fxwCVFKgPr8Mf5VNqy6SE6JubqR3u84JpuKwW23LukY",
  "key39": "4qEdpVQBLqrdrJFGKidZ2oTq83mNYNKYrdCDqBBNoEpUXkrkmfj76nGpD364NjXVEKDRRT3VvaqsY9FiuJyzJPRS",
  "key40": "66GZ6jxJdpFkPi5yxsKVBU52Y7ZxDLgbQLhRmfZAQQ1KpA9g438RQcwXH19KdEeHBkdKLcFJwga5KkSs1h8BkHrK",
  "key41": "4Ds3jipcfoBwtdhEwUfX3q4ctECxsag8cQ9N7TbofstJ7okka9L632YJGD4WfKm8DUDV7ipaP8FxnVGc9P36LHyz",
  "key42": "2WCnhrvacy6NQvAP7232B4AEUaCnjzmMRDZknfCCcPgZCWhWfJjxLQ9Nov13xNL3VvEGSbfmREsJd9zEMmJ9StMX"
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
