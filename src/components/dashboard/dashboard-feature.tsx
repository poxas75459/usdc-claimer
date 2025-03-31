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
    "4VKU19hFGr8fkVfLyG3BQKp4jd7dsrwC8FMmeU5Z6KBvw4jLwqcV1yPdDX4BEjcgrMD2WdmbTSeJBFFMtXxAGYM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pgNPgQ9s2woGSj63DfUgMcvCAV8wnkmc2CgcJwgPUEtSmPLqCuBHufVE4xGsZYEFf3Wp63Xnm4XdvWCxFUyAqxv",
  "key1": "oLvv2Bo91MQD7wkGwcXVXDJ2FPbpeFEhx7o2tpWke2N1iPvJv9WK4SVeKzTJS7gGxoRwVdrCV2RwgeVreBVYju2",
  "key2": "39k6kfgKvuVQBV6VZLpzLwxJJ41ozSC8iKDaW1CxmnhUnL3v9So3pHBzG4onsVTQv4wE5R8f5UWMSeHhtXrMrWYg",
  "key3": "4ZYyYDtc37thsqyED4Cb8MND9BWzejbo3wXRsykdyzkw2BVtADZYprcMxyaztLzEP3JMLETNwVjy7uitbYMbb61n",
  "key4": "YNs1bqwABf29sKyoKU6J8sfaTKJ5gwZVpieVo15wEup2NcGMfZog7drnegt9AN8PVpASFrrLZMSMT4xvC9ACurv",
  "key5": "5CPU4dSJZeDzRgxKkQ6cDcnsRT7FQ4d5VqSrX4THc8WVo5VGMLkoazQVZEhaRpqPcMSSLH6PAPgxWmaSakyArza4",
  "key6": "3RFRHRkkyza44GqjRmub3m159nbsFbXzzhmDKL4t83Gj1Tvf7ndyk9WC6S98dfigWkKehKt9Y428H71s8gWsND4p",
  "key7": "4KuT8MhDWgbR1HUB35uJJFFZUwuZk2R41JdvzDqonLtYv1iLrwZaLivHC5b6vH5x1jkGk8CXWmdTtpXDzYjKJbQK",
  "key8": "2JyA2sT8M8JSjGw562U3Ng6r33z44sA3jxtUQEPJkugPirbm2FmwCRpZFsBPQdWCHZuzsrgg3wacJSW4cRcUQ6m2",
  "key9": "2fek1rgWBqHyerPocCbM7cKBPFCXZTbMR2q8huYbHSk6RBwjNJZ2hZiz9aPVMNeT2dUMRFvNZzEgAaK67FUhwotM",
  "key10": "BynCJMxMmPtXZedG1vxFr2W7ATJGmFuD3PnWfTt1N57sj4WzGNKxx72UR8W61wkxDJ1ioxBSFy78z9JeboQQJXm",
  "key11": "2AMsBNsYq8DZTVLMRWQHAcEwofMK3bP9Swh2P93YpMH6msASzHJ7uLS6ikNFVDruDFBKN8kyQXiD22K5Vchd3b4B",
  "key12": "3D8F6bT6DTfWvZTXLTQzYBmwvoNJM3CarEU3f2q2NFxrFfPdyBS4pzVr5CHR7noabnAKmpwR8v5cL2zqU9j6TZBX",
  "key13": "2JdwmNtGzQk4sWkhCyxU71K5KK9NrbcBsyCBTxpWeQf3QkNuezTcnRzPSdcPj3JGYGrZr1aRtqHejvtFUPKFw3mU",
  "key14": "3R8KKdaWqHBi4wUXsAhtYN6yhawfw1LzCi9AbbUvxJgjocVC8yH5TKoWypKow9Syy3F5DrhHXV5dGUFNgmNTvtft",
  "key15": "4Lq77AABLpVoKG7Y92qgzpUnMxuxMbk4U6YWF248imYQDXQD3UD7YP7xhNKk3Fq3wRonXBTu36FB97T8wdyGR2Ar",
  "key16": "2RT9vDNcasopuvv36Y4LKMwgfxSNFYXm64KVWSPSCymNZkR7JhSq1Egdimuasq15ZmDqS5HvbtN1SLMj8ciAeZ2A",
  "key17": "9aHLQjZV2b1zudMi1Bx5TrG9FBzejaoznzLX13BArAE6BeKsQkTu2ypwMwXcaiXuK3F3dDzCWHU8cEarN8XEzme",
  "key18": "3BusDMq8a9XZrx6LGiGEfECYKcPsGdcybiNDwyZCWnFFy1KoB7CsNUX8gW2SbotgVMcYHJT5PtXDxfo7dNWeA4TK",
  "key19": "EwqV7NAJytunijTErwyiEk3E9gdpjMtLgGduut11P2Z6rspnu2x6MJn7CgcLjALNBJ5oXhiVkNkF4jV4WiLW84h",
  "key20": "2fNyvBuFzHLJV5zg9jxQLaqAySBB9L7BfAwPt79VWrx9Z41PRUDHUypyaHKtRKrgeprxWGUXz31Ju9D24EaMgCCB",
  "key21": "41dp8zzifaYQ9g2coyuzcUJraetZADNb2taBaKZ28vKQh96DpkukFxf8WQE6How2W6JMQCcRDNPSWa2Ew7nreJUE",
  "key22": "5vjHJwRURoJZLaMFPfVWZtRQp1ZqdQEd7vy1444wL9bwU9csDcavmvKKFoGwkVbuVsmQKzSvyRcejAkuLayhSTTX",
  "key23": "4Q5PenwkJR9HjELfMMpRv7FyT1aWRWKCFGrbk7fTQh7TckAJhBSwC1rsGtgYfL5bYwtfieMkeVn8qPbLsgo5iYaU",
  "key24": "3J8NFQWmHj3L2aRqkS3eTBXCa6juVpLZunZTG6h6Y5nm6ZTyHz2KTrqXCLFEbqRg9KDiyfoqf1YYirskfY56t9gc",
  "key25": "n71uq2EwmwCqD8HX7s2PTBLS1BZCRD4KVqXRGZfHusv9wppGwiMPmUGudcXedeekNffRbxv1TYXMdKhN8WyXHVS",
  "key26": "4jgEFKRZE7fwnr5pYcmq89yuQtaEtQgF5HtWgyYafhdJP2hXJTiXcbS3bnvbYvJNxvGhVfVWpAFGtY8d79jhJwWW",
  "key27": "2LQ3kwVFLo5dkFVT2CKLUiSDCVSGVuLjz746MZg2ksGLg3HmjgMRwnyA7XMarHoCCFLuWgDSn6Bv2GDumQYTGXqZ",
  "key28": "2b2xnJq6WBBigGJRzWQ3jgMWS52pu1PQVRFPtjt2oCT99SWYoz3UtvfLcKgfzKExNZiMDQiCqwb4v7GkbwBV1D9F",
  "key29": "4HazSvydgKPunXx7WzU7FbDRzqHAVQ1QbpTMBRDzaMmRyJLprjiM6MjWAnaWq4Ymfw5RoDfvJC8Sjv4HJsFu5Sj3",
  "key30": "35fDZXPUpkmEiLKaCQAHAQYB9iq89Ur8J6EDRdD5zZwCN94gjowg7Lyi4A8MHHnv5GUHHDiuPfhGomT3Ei2imWeH",
  "key31": "3if5hTNtBP5y73hj7tD3tFxw4CReKxKHT4iALb5JQ7wBXFpJchJC2foZkiSnHP7K8QkQrEXcUH3RP9endgpfUb7A",
  "key32": "4xWaWKujc7R3bnbjovwm39C5XTh7addxU7Jgw6T4tPCDrGV92pRzJqZhP7ybZSJeZYwrAa3Fzsd1vhy29M2wvKkK",
  "key33": "vA6JgzbA8zX1YfptLKW1FWhtW2DfB3ANt53pU8vLCHJRhAQehnkpULi1mvtcjptWsmpwU8R5rfFnBPvxDPgRi3T",
  "key34": "26QDkhvw5RLQYRxZbmNvnKu6PWiraYPQMVHfP5ELTtdbFT6zLG1hdeuQDDbQozTcmeixe5oUCqW9pQQVCCWVADae",
  "key35": "3xy5UtZfkRxU2aRVRogfdrai937vEFBrbaet4mgp24keqfFw1ceEVk8N1TG3pKYZyGqs5iixJCyrJhiDVK4AY3JE",
  "key36": "fbhTS2t9oFXA4rJjhF1EvnHQ6Pmdt6mEVSx3tZXrMgk9sEZPA8WvTt7KcAexQVCfPkaYvFcLQgLW3SZAFPfDFWf",
  "key37": "kq6B6XjKLYLGvX3b6TNqrByzrBrjpDf4owsSZT67wywGMVdr7KYWGkXnTBKFSFAob1dPaDbM5WV6cu6x7PKEXiU",
  "key38": "5ezB6UM2GZKP24W9W6maRSCt78rvpL8Q8ibqeWp5WED7KHswCtQt4W5STjkMsoqrCGs9MYY2ymfJunQ9U2P2prHJ",
  "key39": "5YAqS7TQKFnRDP8zgMuSpDCfD17WsmbefVkxNHxHcTr852zPiN5wMBGgFb4s6eg3U6ugc5XFfsifCFymQTPhyp4v",
  "key40": "65H313MbvtPdr4E3VyVZykU6nkaqDFdWqBJ2irxyxkCzYnSbE7p3Sz4PCuFNAY9aMHqidVFqHsBPZRWztuWXueHZ",
  "key41": "qNXj36Fh2Z7GrUQ7GgTko47jBZAGxhXvLuJsRjmfVCiSN3t2jgDoUqKhwmNHRdLsK1oQy3HLHMnL1k9qCZyBLQ9",
  "key42": "3c4o8aC112wJwMYBMuY2HxKxgMcU3vj77Sb19d6mxooQtiYo9r1XHdBgGGcd9iex3WNvyZbKHVdoQfhqmqVFx89d",
  "key43": "3w9Q8Bfo3ZDdK4y1CTzYMjqHfewD5h7Bph2WZxnXq86ATRWddG3AEC43Kvx4dTEKHhYJ8CCnNygP6dAvAWKRg6FZ",
  "key44": "3dBmue1okV7JBjtqWZxiiYD3MjrRRguygeawuJDKEBFkDFGKKSmetqQXzBcqnPYRYcF2xQwCa8yezsU6ywAbKoXn",
  "key45": "5Dep3hYNQmqX1z6KGLHf57XjFPrwp4EQGmcxxwiXmeymQEAqBHHLRxZhDH5QXT7HVzg3nZVxY4pxRj6PUfeEjiBS"
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
