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
    "5PZmtQQ1gfSNjLcj49WXFEeNX5FoPiGg4Zn4GsX3dS7RkXzbXWccEY7Vjgd5t3kFRVsGUytaycrCFbvkR5MDNJhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LtPL36tfb1i2GKxPXxxWrCg2qeAWX8FPZkXz9mSPNmBzgDpSjoxdD4GTwZctqf8q8jxwacyXZBirzUeQQqKGaX3",
  "key1": "4EQ73LiTUdh811ASZEVxVoDgjtL8ZQtaPqg8nsnxeEFGWf547wZ9pgr76M6mnDoeBPUBnSgsceMYM9TToJKgp1en",
  "key2": "HQfPU4qLNyHWVch6cXCMcaK6bWc7eVf6RZkQDA8z2FcczZdw3kaVZw6eYFfzho788c1njb8wbnNeiyDNNSt5DXR",
  "key3": "5SGt5MMrswQupaZqnLhQE5B2drag1aVoNJKY1PPWpsSY2fH7tuyLpHZwYXHEMXZXer1wxBsz2r1YUW56berfYYpi",
  "key4": "2qX2ZggiNLyCWxyY5GpGwumhWpGPdUrNCcD7TLCyZEdeEuE3qVeDwXA2G6gMza1TPkQ3TXQE1kXXQU92drzTZ7us",
  "key5": "BhEKUCXa6gfBEpqNVSYsnoM8hE6GiJyM8ne1kNgcAbGr5kMhnAc2sYuV3HQViiEhfLk5yu5csVfRt9YAraTHPpv",
  "key6": "2EpVfXfTMioDhfYAVxy1zDg4NGBmVuiB3W86CUThebjoYffwLReoNx1HWfwUaimBFXaXukgW2uu183UmFfqGwSci",
  "key7": "5ucC8b6U1SPZRqawYyQRNtRSGJLABs8gqgD97cRvAuxLrD5yphbb9WMu3q7joojViB5o3v61DkTDADUGNxptMuja",
  "key8": "QQSx63HpNPwo7pQr4VwWaW8u3b53Bhb6aX4WdztWjZpjLtaNyUFkdKf6Yp11Z2BnaGg8n5f6xSyKEJBMrL5SNAe",
  "key9": "CEcdkY3ogg1VZg1rtt26375xtoKSR2EShZdY5hrXW5jbu2wbsBXVKpqaDghsy7jR2zNzyGUDVgYXSkcQoZMwJNQ",
  "key10": "56A9AK6H4H7db4ny3r3mM3WzBGDPcCNpkL8daxTv6XjTAQrDuWq382XMMwtB71TzAi1W5qQMYAtBMZdi3TdCuwtp",
  "key11": "2pJZu459PJvZ1agFuBCQNNJuD7Vs1WhLWNxAGQ1iUoRQhK9LJShjHYkTzCBgKsKwD6RD5inLNsgLsGqbyVxR8HA6",
  "key12": "4CyykD4qk8bsCepey5895kajUaAAfvuLjtNGc4uBeuhxpc5Hw5N5xcYVNgP2Qckj6hLDvkL2FevVqgZiJPRsXfkp",
  "key13": "3o5u8u81geiHT3PkPMWV4Pv7SHQrv7zSGyBxUTkz5fvFzX1GCHreZHQ9pmYKXKKUEfUJ4EfziX5RWL6zTQRBXaxg",
  "key14": "31m1bTj5MPW7qCQ6A8mKdwCVXiahEvBzd8Zi5pK3QjX5h4Gmo9q4SqzGeJkGnQPwtZE5BQrwzNUiJGuAD2j1ikbq",
  "key15": "5WCT49Do7FJQzZEfLzzVgt79DxjDViJMNmsQCfMG49WGqp1mr9qXaAHRG2EHLyjz49SfPWn7gsY62VSkrzavJZiL",
  "key16": "wR4HABbJZwCYTKHWdeFbtBv5QeUBWWjDM3NHeFmebTq1g6mFZrMdN9XyRAcdPxkyMMHV7qbH5sZC14cY2Zpa48m",
  "key17": "65ws5fnnZKcTXDfVeFQymNbiBsrbjxT7jhbuHCMQT7VDL3qxHFudkhbH97F6p5QqhygD42tc9mPogdY3mD89sU7F",
  "key18": "2Gqw3Fmq8UjR1sc6Phxtp8PJ2iY4AwHrVF2zjcgXnGaTgYAmMjH7fcw54p3QafdxRRwdH5eYsa9qDeiZsziou3n6",
  "key19": "2arUKz2ZDaMHNYQDTircSEifmaEBWkFoLuxQzporZVm5jNyZrQDRnpmFziXSFfweAoSLa4BoSbMAzi6Y1fWnRX9a",
  "key20": "67KeMztLSpB2G7wFLWMYicsRwz7npUQJDG4ETqGMeXLjxW9EixQrvVjq1ApSdziuoFXnyosXhJtUEX2oyFCUN6eR",
  "key21": "2SjRUwYB5cg5BcVswXwtGrZ84udpQeUeLeUA3BRx9wTTguZCVpWKumHmoDiPXCF4cRNYea7pgpP8wMmMNTrtmqeG",
  "key22": "5Et45gq9YvRksdmS8Qo35t6RsGY6JnsAnPTxJSN4UqkJy23AfAAkiShP3VmqHxMPwkrEYFf34XyhnRYsBeGeYcdf",
  "key23": "C39vUq4tmaRyyN8cryqp7THJkHetG8AmsRBrPetRwcnvm2Gnd2C7H14F9wLZBGxVBjNM9VzqXPWNDi1EXhaSTbW",
  "key24": "2Re8BNuCr9zm1Rqox4tY3S5uuFZSgTfPLnRBmYPv7rcnEv6FDMJC2S8ez9GVqQ6HZaGHG7ujSfxnbzbWGPUa6cQT",
  "key25": "2PGMZNC5xjnegCZjMfJYhBMJVyH9rH9GeagGdbTVZ6PPuvZYCXFfQz3hbPZwMtt9BQFVN6SJMfPAALBa6Mc8x521",
  "key26": "2CTRiwEZamHMdDm2qEAGX9GMwQyJBv5WyWce3CMyHhpYUxsnU13Ycb7a68S1RKAus3AbVnnZfGpWYs3p7fNXrnBQ",
  "key27": "3mixBMVgGrxxddPtGSHkUuuVLf6tBR9Gt44TLoBteDJBLmNkz9Hrc8L7Xj5nBLyFSDsU2y8oRLrEKu8FpnYrVGgA",
  "key28": "5gbaKVCVPo4tLQBCZunFhV6LW9octUkDnKpWYQBU3uSF4xbrmTtmCKK8vfpaLMhu97nFydC9Q4YymvV9TPZL1ieC",
  "key29": "4ni3toB898AFNPAzvbaeSWuVEfittjy8Z5FCx8EkrZCg9WmN1TiPfs1bDyjvhpHwp2r4KpRaMumEkSn6uRUk7sYZ",
  "key30": "23QbZj5NrjHPBeKuEWqGizLCQzBdptRrrmuiZC391rwb4BRFKSD3A1C7R2AaKHaehy72nHZw7qJhNFFv6V2wJQPJ",
  "key31": "5T54HGq7TFpTCcPPrR9aP3fcg9GCUdHaHJF3vNt5n5ryQnP37H8e6qLkiAgnBEHJVJUhJfV6YxnoevoL81EjvGSZ",
  "key32": "39pj62M1GRGgF7kF1PTP9Ya6XdPWzKG5P1oLuMZsTn2BJPVFveSeSKjizB43zhTrGkkoL1HPbn4x6HmtxNrPfzLN",
  "key33": "5T6nRT7hMbQC76Lwp7t14jp1xAQtCBRbAzXAC4u9r1gMzHYdnpxs4vKdZWYQ4HapGnabErXi4CVowscUwKfx1bjD",
  "key34": "5BDMqrBKMbYXTdgqzg9ndiRTwKrkEYk5pNjAG5k2nXFY8PmMqF7u2dtogxipF51Wh2vrw1MZUGnYH919BhwFd4pb",
  "key35": "5UTbSKpKVmoBuNgr4FfGMKutVpniLr4DUWka9PxLVjfioBQWktiprmZbpdWWfo1uyCVZsp8m7xPaAVkZ8X4QSCgq",
  "key36": "mqUuRq4wF37cpoa9grLr7HYgpE7ShZaN4ygRXa8J5tRuZKjXKiZnVRHvV7Chud3CZUGsPPovfctmUJeW5XjNitF",
  "key37": "3xUux6aTb9Ltcr7d6z1CoHMJ9S4yXAPcMxxpmLJhbjvbJ7gF8m7CGb83b18kHVEomGjpsonB6M5XAopAwQisTNZW",
  "key38": "4AHA3jQ7TY9bRrDWnump7mVEDruXQSXJ2ZxSCt658CRqdmmpgAAJ2YbN4ajkn3qTd9zMha6UbbJp6FuhmWTEbiDt",
  "key39": "4EZqKm5gDTpXZUfUjkTBFmYWwCw8vper9i6rv4rNWF3nuKNSQXa99ZVRFgVydZGk94oDNDiUxFehnaxo8L1swpnA",
  "key40": "mJuVMFS2UK46Htw4zX7SWCWPri2QW5wdZUyxKRJ2Kk8K18sgduY6VQA5AyREHJ2iBaVfS3pvAK4Uaz8vRnsfzsn",
  "key41": "2UCgBo9V8tNCGSdJ4kv8ms2JUcjctrwyfD6dvWtzW9G4NWidQ8GbvgWMfDiiKMPyTXxz3Pydcf1uATBsXmYb7XCe",
  "key42": "VG2o8V2Gy4yhMarRVfPDur5WYf2agouccyTjNFaYWmFVppyhkXJuwhENmNEQT25CSR89G7ZwyWs7hTpm78o3kQ1",
  "key43": "2bibvLG3ajFfvqGPzFMCzdGtFFRhKUwgcshgiwE7qtgx75NUFzsFGzCmVZu2xDVECAEMV9C9gg6Y7T6Bs72EWY4N",
  "key44": "2ryQWvaUusP9TQWhSNUmLACUwQcJDKZxNDvWMYrtBq3WvxJ6B1zVMxXzxXxQd9Cxh46i1o8ivvLGRbSZx77JbBuW",
  "key45": "5s2JA98pmRHKvfhtLSdsLWNX9xGefjdKjzsGehs26gp29VW5sy9ohjqZAjjxZJjjB1a3Pq1BtdqPMTjAm14wgENc",
  "key46": "482vQzTmEdADGyZEMZebykd4wThs9bNSW11eNGf758iVTqBnTL2NEmxUWqJNaWbRBZqhHx8ki3DDgR6e56SesgmB",
  "key47": "2mgEsX5YkDQgKQLnFEAKrpxVJ93jSgVDqKPsLmXNyV7jHVh4EcaD2QNU7s3Tx6D8pkvgaK2H8iyGz2WrUn4p36Zk",
  "key48": "ZUkr3kLoxdfxptURU5LduP63miJTckb1jj5z7iHZS5tNSgcD6VWGJDjwrgMKTvarxqVcJ7wrVPV9Yd81t4ABLKu"
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
