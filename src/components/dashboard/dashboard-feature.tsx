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
    "4mNKQjJsQgqPJubPhryQRPEZFch8EUbp4ignkxhkDWipSg3RGhtQBbcm94dS6Mf9vawt32JJ8SV5RN1CLViv5Rqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KosmvdCKDV7pxkhhw9dTxiJwiuRiKsAzGBhNjCVvsGkT4tM7PyuZ1hztx1EKRUUQQVtxS89JL6KRvb2zggfRUuU",
  "key1": "3cc4mdbVGZ9yrJq5k4Z9PjaWxhk7G6FGykzcDojUB3L3VB9BgxWrF3ntZ4mimhHPL8auHpAdEfGanyBTZPfC7SkG",
  "key2": "5956aYoL4unccpxEEKMpVsjYzrXohLhNWWJkKFLPsZLtKPHjjUK3gLQeVwr4z295dq5d5zUona8R4AFBoLbc4eWe",
  "key3": "43gtbcNtchWypRvv19QEFVkMUSRkwhs1YjbmR95e7Joupqbe7bKcz83Da412Mh49FkVEGLMWxs4g8icMcoKasCgt",
  "key4": "4nBhnZDLKRZaRGntfZnBgQYNXeEJa2e3wqZNZW5HZfGh96x8PFW4BaxaybXV1CqWacG6eJJDWv8yvzFLSCQxEp5m",
  "key5": "VSWveN8nj6uP9p5sdMuf5L8fWTU4F6sHyBvkUYDyLwCtw8wKRzXUEfcRC8TG7B5zx4Vmu1iuz6KFMfMysiYJED4",
  "key6": "4AonikPF94v6DowXMdF2vL4YWYiKZ6n6RDgPRcjaaKq7ydRe8PrZ4vEkDXi7qGfkTEG4kVeoTn4ZD35j6optJG94",
  "key7": "pEkYnDFDPiSa9mBGaZSs2zMRP5Qt7mDRzJdRLtFymyz9863qG346RjCr48vg92ydPm7BfUTqugXE6KFf5icHXKf",
  "key8": "64UUv29b5Mbb9Qkd845JyxEYysNh83CvmXpGU1idbDvDy56qDr74651roXx8gGwzU2aWj72ZssvSMGtZXKzSXFmN",
  "key9": "3N86bn63rp6My6xebxrF5Hbonepd7VW2oS41vr583E8YPHyspFFd1Fp5mJJUzwTed7zNcTgvvDiSBzHxdFMTTta9",
  "key10": "4QARfB4B9ZFnmsFLWuwtXMbvTuNtrsjvxAZ76mxGPJUF5zgDiCqwvKjkKJWHnN8DdJeANGu9UD3VuTktzdRhFZG1",
  "key11": "5amPirdcR5dGm9Ma6ok79cjqY5eA1JB8VVhD2ez4YNtJ1jxSBACC2uXcFxdZ8m81t4qsL2mFB9DX7xzYdbihPbTS",
  "key12": "2Pr8QMeCJvZzFZsdgpPMvdQzv9KvE5CL5NjhCcYiUkxn3pCu4rSoSjA1dTxUxzv1p71evuixqdyyMCD6da4Lam6w",
  "key13": "4FbumotxPZ3U79nwexbdbxkWvvcZ3KxFQCYoLDjFiAnR2EhNUJMS6nt5VGDiamiLYDN1dUU6BEanPzFL8jGwVxx",
  "key14": "5tsE6SKPYia7L6poxj24amexzseuwweoqHA9AhgGcpUrNBvgaBXk5Z5GGEdvjdTq7SDbu8k8TxHBfnXfh4q74RnA",
  "key15": "4utr8bHzgEVAaLLGoSZFXiXdWt7Q1e8eMB4WguRk2rrQ9yJNDF3rf2ja18T2hv1eJjoTnPtTsdZVGrXuMmNRu2Mf",
  "key16": "5sMwkpLQhayPSxFQjGutveymPrc8zmejXgiYFBB8bVaBDsHs8vwdD4oufbduZLjzWv7ihW2WoPCKgHXYnS3F3nbc",
  "key17": "5cHGwAcP9L95GEFLxiyHorsMJ6LSWZtcSTF8xDMiE7SSAud3Fw2sngg8jppZfY8SwEWS7e59mqVLRtQN2P24RmiR",
  "key18": "4o39BNm8JU4nwMjE3RGFeCr7QnM393eVNBC8SRoEhCoJcYw5yDpQzK1wdvjdzvcg6y2iN4ucGj3mvcojSX4Sy2Qc",
  "key19": "y1VVsSfz4shKvsP3vK8h5J5GXGEa3SjftuHEwgbjdyUKiXhb1hQ23RsULU5pV8pKnYLiyrtgdjdMCnJ9U3S4iPr",
  "key20": "2iycPYq6xGjkaV6LfCsUqy4pDSYG54pKuPXAcKDCKnVt8sS8r5FaVNhZ96BTn4hfkntcYFQz3Dk7jWwRM9g3gP8N",
  "key21": "3ZMzdDYx6nL9mvPYC5YrJR9dVbeXHCeScFiVSxLksXXWKs3muMzdyaYLhSVSJjW4fyjXmjfSAENdcVcNvmXVsGTW",
  "key22": "5EZakRxgmA6VQyoPLBMYgvBkJ3QnAjdNJyntkXyzLBHQirRmqCbqEaprDUCHJxkpxdL8mahRB9E1Z6bU4VsNMe7N",
  "key23": "5o13y2jkxh6J5RZbPYEWrmrMQRQ4HWgrGaBtVfYqvN6W8iKsrX2eirUe1UZTR7FcHqAQXaEezrrqB1XW9FRdQtTm",
  "key24": "vE5YjxMf57tyxdKWqTG4XbfAMuj42BZS8WXnj5RSMeDHhk65w6rxGjSFLBENzc4BTRQLKrXMsReX9RF4RzZgkB5",
  "key25": "3bsDRKNwoXkShS6Tv2gySNG42odZxHG6TCcWBqPVPTmSwepE8U2E73vxhDjr1MFtWeFraMyVHe4QckbBwXXX56Z2",
  "key26": "4jrL3szn1f7ZehkzbMT9jnfRc3iffzJamiTxYr7zJFc7oYs6TPS1nrQmmTRy85pg8qMi8uiDbjdu83DDCTHfzWjW",
  "key27": "5imny7w4rnj65GK2EhrhyoBqW3sHB6BJbVtSicXLdAw9jbz7VjxJedrbB3EZUgRJgoNTyrHA3r1X5sfzLx8gdiKS",
  "key28": "49TgMYze2ci35UmiHWJozydnSbXHo1u6pXACo1EzsUV1bEBADwrXKdCFDZNQZT93Xt2PmNTffLa9zrX5s2yWpXSC",
  "key29": "WoFetJdA1USyUCg9pT84ZR8T92DztHtTVmbkGHpfj3wuhzSHY1tHsGxk3y1csfMnPiYJxPxxHwXsuzgn5SGJKLR",
  "key30": "3rjSsN2YDji76CEASZCLvWBKMKcEvZkNxrcG1fEGXmFubjgWKeFD8Ep8Mfs8UWWhrm1EMHzQUHhRbRRkayn5Ja2f",
  "key31": "3FhUTaHdgwCD3o3xRDdLL5YyHPAyW9kEzYtTHfq48fxVCGc9kvyjgmNPzVg8wcY9TjAEN1jzhoTxGWoFeZrBMez5",
  "key32": "5FvKQXDzt21DMLxp1oS9m4wJNsE77DBLSDncRVvf6F5jvWeW8H7QYDdcWCLDumkJeKDkSyuC9Lt7jbxVDYbiCJ3q",
  "key33": "4STM6LyuvX6ZDVPa6CfNkk4yepsNjJxD2m5hWos3HP1fCBw54tMhu71HcuwAC921Qn1LCHkYdpAwQWFApcPSZd46",
  "key34": "r2Pg4CGjg7zBFF4W2gLBk1dKn6ZbNJYDNrLZRM1Qe26N8GLshvSg4aHbrnVR8ML8oMsYqg1og2UpMcWXbJUtBE7",
  "key35": "4XNGYjibpfFDK3pCmCxUtBXecNW3Md4AJQ4UZynNneYccRa1c1Ti9mqiqo4k64VBPJk6ATR6i4VGQdhFhx3kZuJi",
  "key36": "5i4BbBERULo6uXHdSfeLohrD3BbhhRFtwhoFANLNE96DAhXcDJTRtWseSBvohGWUV9tEwDPv6bJNSDDi2NzLSRsC",
  "key37": "4kw3oWUFiMvmLBntFuqnMZ1C2Yh3P4mUHbDLL7JxYHWYWpfXrDVbnm2md7ghNZpbfucyPTE6g5GmBZ3MSHTpVeXr",
  "key38": "3eaumYTZFFztux4fPet87MoKFTzxEispNqdV9HnmfkEEwaHAAg8eiPkwmfrdtdTcjNh1RGaeFsm2tBE4KMpm46Q9",
  "key39": "3YqTWZ59rKSyfSq3sGiXprUrUWKhnEEGFkDGA1rVvcSu2JPiaoLLneUjb5KAcD9np1aqGYUDaR6gj2z5KiA3Zns8",
  "key40": "2NByBGPqWZDYiArfomXrg18P2QG348wsS3TCRHQkc2ZyQCHcrDfYKjJLiMbFTdLubiNa74GAwvtfn4mpj86966dm"
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
