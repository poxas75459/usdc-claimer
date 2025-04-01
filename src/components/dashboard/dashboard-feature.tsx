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
    "4bnZfL22mQJFsCaZQYvjFjTszLvwV2StUsHQxqUviCQhjETJoBgFKbb8YVvPWdh5PLA6P51Akj4zcwc6WQsHvS7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CKeFy5Pmi1zJ2Smwb3vnwWQhekcaigSrNoekt5xHEzJMsQWR5kVSsg5gjZc3tMGaquLEDRisHWkCCmX3Z82fyg1",
  "key1": "2P48We2XJ9X8LPnsuWxzQtPh8zcANzE26JtXu8QSKEppZctjMfKrgVvjiRrHnk6UMvvzfuEho8mn6e541LesqcDZ",
  "key2": "36PYULJJ5xL1oaFY4w3fT3jpvqB6bBKWsH1zCEjafcw37ZGPfitZz3fqLJpaZYoK2RF9Tj7xyPUMPvTJH33x5sYS",
  "key3": "4GmhDa4TocgC55voctdq3aSfHw86av1pTSjhyguPfiNCZEW6sFMHnDxuYtCjupMdhaW1BUEzeKutipiYzEyrYTZW",
  "key4": "5yk3fh6Faj1ubLmMJnpEyycNuHz2WqLwZfRKXHnTwXDx5GJKtg4SR455fvmfQELv6FVAfJYN3csUQQa3gdxtyPUG",
  "key5": "5qd9n2PK1o6ehLRsd5ob3xPAhaK6a3ipBCuLoN9y87mBQbGbVfrDKPdkf21mHWFXuk5c5RmKXQawr73UwLB3sr2N",
  "key6": "5v2yZYbkwWfYsnJwfvGeURFfh4SHVJG8AwjsDBwuyqMdzpLpuFn89hCZueXSYYdKBastmnEMDDT9JPtiurDupX6H",
  "key7": "5E277BD5uZJHRV3SQpVMqbieSExrebxj3VsMUJCUTy52X4yL7oeunQGrymwC8aEHUfkESDLjweoU1x2L2Vjoqpem",
  "key8": "PPWFbeaM7DCPskVbLAukE5wokSRwwsPoNUhiFXXL8UuAG3TYWauHjtvQNKsstee1gL6Z1JwtDEJLsq2xsrAqhtQ",
  "key9": "4srtU256m9Z5W9YfB5N4G3e2TmXNxzNVFK2ancVGBS6iz72pdjcaxGzya4fxbLp1oQXNuD93DZRsCVpVXPqm9Y4w",
  "key10": "5YbpkxY1qyopbqwXsy92T7oVTJxCjow3evirbeG4TLFJx5vLDiuP4HwVAcBs9yGBUqjkkc5nzRxdcnWtAFSQNc6J",
  "key11": "SfsTZ9VjDe8A1R2Py7oE2dWPsPhNiKHXL2AWwE9AUFr9q9c4LJbVTkgc59V1ynQJryJ8Ye8DPrYTw8Jnrp5UmgA",
  "key12": "PEcqQQziZyuEyTFXjXWvWH7QLNe2z9p5wRr2VwuEKU4ykAirDTpeiDUzRE7jyt9GGDFYsjVzp7wGqs15VTkXHJe",
  "key13": "5oq8fpJqEnWzzhTFVFQJ86RFQPuyw7kJ9Viw9suEksvuMv1zLwwkF9QkTHrRbmXWThfyCSjcXnoSQsavMv8WUGkA",
  "key14": "3nN6c8AaAM24G2zwja6DYhEpNWBWnSKtpo2e36rdddehcqF2VeDxM3gWkBN7G78QXWugixSRNL1rUcBFWQZBB6FK",
  "key15": "4A7RFdZjTmquekjsg7NbEXCKBAjpFA4ggC3W7HpS9trRTgP3CSxkXzVVKwjv9nPQuZ4yeQmDYQq5MLXTGXWXHWft",
  "key16": "2ChTxd2P8QcDpmVRtkB48UCo439Zfhkb4vd9s5fwMcqXJaKjNLomDgugwGMbSprFWrcxz88p9tqj4ix89NDDiq44",
  "key17": "4GVuHfgnrUauLMr8R34pDYMkVFgF4BB3xuHBEdT3KRPXFb28nNBB55uc6GkUwQG6zQjiMUSZCjTkswHpG1dkLxGj",
  "key18": "5xjXwfeABih1jMxuPoKUycGHrVqedxXpcETYXurb87yN9y6UNfmMX6WmY6xqj5mj6ht18zzBhnWJkBXwz41ZHgGS",
  "key19": "6hgrBgDHjWzhmYEYmpSv8LEjAmkL8S3sK2Jrc4bHiafnk1HBJ3X4FLboPyUGYvkFBQJtXyw8qoF7vEG92tc1qzW",
  "key20": "4NNfZjSj4FhUdZAn435qobPhhMMGRxSZGQ1Q8woFekxL6RxRnSG55uU4VkHb5NyLgM2nUKNDXTFyDbCn3wNP5DzC",
  "key21": "3cDyi7nzszvBL8XoZpu1DdYkZ3osF9f6p1znUoRkVctfAVZ5EYuUyAkoH1X5AMF1Wyso9mCp6DgurkkPPukUkMhi",
  "key22": "5L5iZPJaJ8HVXNm1hKjAA3FLCh3jkqRWySP4v4abhiKL57CYPGHX2YRtsz6SJuDaBKfEFsQhprWvcZ3EdnGbX6HT",
  "key23": "44NMnsrMhMfHBmXkEQnmnCJi44xHdg3WHzptUezezynJ5FhKC9f791m7PFahE7mV4U68GDemMeAAy9Nn6j91dXpV",
  "key24": "5s4vKsr2WFEFquETWjJzDBQdVZEz1FBVRjawo6ZUKaTor6Ysvw9WYPLVrzNimfoyfcADCKZ82owUuPgVRiSoq9Uc",
  "key25": "2FxZTo3Fox4h9EwZVD8bJ4TW19ezS2Ef1xur7GtM4dRrbMhW9WCQEzxmjGV4ZzLERAZ6X1iZ2qceJjeNEVTE6PBj",
  "key26": "4NV8qgaRbRBDWJQBALvmdJuss1V6PR2QGHAVn9ENXG4CJNtSWDxPv4kAFQ4KwBLEtWn1RWLqeYaHpVGQMFBRVHtj",
  "key27": "2yGLZJQuosjpBaxhiFvQQaqJe949U9tLNbzX2mWP4uDhVv7etf2sNtLxSEbqzNnPaig6sFeCAUy43awspmYk9V1L",
  "key28": "3w2jjzEB9VD6sS6aT1uvBBUGNQhmGzbnVLvzj1wHxsiudLH5XzLaGPaWDsKwdAXJjNFKCpSfvdqYa8Q6RWkcsp4T",
  "key29": "2ekEW2BzyvLRazjD4cM3LFhtHiWhZxQvA9cfasPpS5s2PDqEH8P4jWZqrATTkfRWnDNRCNDmhQqdZWT9z5mpKaob",
  "key30": "2fstkmVu5hCmCXEk2Qp8LoLBQ62KdCnGKMQSAstJcB4i5svT3dqz4zfj2LqzbYWRfaCVWK59DwcNgGWbzFd95WVm",
  "key31": "4hsBjmtmrpfDCUBDtpatURRNvXUcsFfxAjDvoNpgMtgWp6AQ2tT6pt4iZeLmfBREYhbdpvsqfCB1sEibbL7DwAqm",
  "key32": "2nNt8cTwKNua4ZyEsZqQhEXkLVrUVEjV8BrgVAQVcKtjZEZ5rGmEQFTSHm98UR8AgM9frJ8SS7cDX5GVkyjAJH3z",
  "key33": "4ooW7tFWnKWKXkQUAZ45b5ZJtu3SpiKTzFJ7obQmxNcz78L8UUunB3foCC28Hu4fjxz7PDicw7L5TUpXUx5LRUSx",
  "key34": "pktQYKiSACmY9HJQs9U8T89dbSoRWDG6tVEsFGyF3FauMLfU4sAm4dgr4qcnxxD1tAvxAvJsRiPZQqmNe8b8XTP",
  "key35": "4UgWtGcvh1kUTGxXi4zsb8bNopJK8K4jVa8XuJQUZvaeZs6ALGAd8gc6AyhnjWRjDFauYCQHC7SyCN66tNGArA7m",
  "key36": "41EnQjmwh6v8ma1jTD1TfiGqiejXu6SPt93x5DVMUCS9PX4h4kjHbzx8aV2QyFbPYNke2csLQX2Xi74wnU9G5d1Y",
  "key37": "3UhpdHGqQoo19eukQZ768XykqyWTMUxdWXG28pWaAFDtejtdVzYDiVZmFmw4JeRbNYh19kpyuUisUG1wYo5RQ4pw",
  "key38": "EZp2sphCiAPeuvK8ujkFJdiPLypaFFKfJAwGatXJcbYhFvvoqoBB1165WrFsAdVANfj6h2mCR49eWq7PEAwsb6Y",
  "key39": "aMh2MPsus9Yn6aztQ9E7rU5wukzz1scyxAxddKi87gQdghMpGsd2WxDgRLgWMRa1rAyskypUhve2gZZFHpRDbjk",
  "key40": "3naDKna7Ci3cry95TDzXZFYJfr9NDP7EN1iEvLB6RKXYwKCM4ERc71xn9U5bGrzjSRVcYM47SVsWTK1SfHnhEPHW",
  "key41": "ssG8sd4hkfdnQZcTgCFYhbWpd5De7b1gFmHeecS4ECqsgc5yDjuvUncvDxfuCygjgE6nZGUrLh7W9suHZpDewxA",
  "key42": "4f2nAF4YxQ5HSHje2g7EnWXkCgVwDy8NTxHvGkyfLK6EPippjFYi4P6BSottTzPgQh5WDDBiPAzf78j388go5vU3",
  "key43": "5dJMpNhZFWXaSvPxNp1cgZEdhoidVKkBSxDfVqLGk5bkxFjDoQdFsAxpLcBE3b265iqHFdQwBP4gBjd8jq5fyaD1",
  "key44": "58AS3odX8mxkUUJa2vwmpZtJ2TapSEzak6MFD1Gg7RjRHR6ud5mdRtwgD5MCrvbMUAetZGXH4ew32VMd4QmHLqCN",
  "key45": "6463Lz5vbQ8WpKeXzWLkEf8MpRHWqysSgTkrJYFBS2zKVBLVDq3VLer61cS4Xh6TR6rJFFnpoFo41sm34tKW9Sqt",
  "key46": "3TScCi96Fwry3hw62Nq9ERLRpp98RKuwAqJSUwWHzcv269LaGtb97n9C3qbnsQk3jesQY6i3owcspesNVNG7Ry9v"
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
