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
    "425yVjNqm9oEBdPFVeaX7w6q2bSbxXhhGupEZNmRfpzwXKiL1PPG1BFB416idxq5BU1cZxg9KXccFvvAKQMyXyJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Bt9kDPXSPaJLtDD3x8txdRoe7ndZ7qFKcWGZseF14HzmQeodSDctVzxvx5EfjMQr9jy41DNPKrN5wjTVXss9wA",
  "key1": "3aXkEN5ggAmQaMRZqfZzTaABC1GrKvMvdzEMFnPUojNqawWj3cHskSpVBjqJ19VgNZWR9TguPX1Lj9MxpxPdmYbh",
  "key2": "dD6u129RYDgFy6yo62N34m16KSFv2atTwwF4X8B9p4dzLkt3ac6ZXiyz9yKFrRNYUzuGLg7eGwnSSzbXwqygvqT",
  "key3": "2UvBsEnNmDfZxzLuzAd9ecVfALLcVRS3W4JrT9B9MvfqtbUdtjcRknn8HsovmZLKCLVtoU24zdMWHFUBH1oaeQcZ",
  "key4": "5NHVubzozr4TVMCc7xnmMxgkD1DW9JPN1FLBUVqPWRdpLa4XcDgdJCuKLDi2gaLfPzgiHhuUrBGrh5eJHgXrp7K4",
  "key5": "3GnkfsEyuTaWRctAGULMDTfdqvwURqRjHo5SKRv8w7ZhmZhvRA2qnohK6q1KNzyAX9q28m7FDfrRLypDRqDKXRUu",
  "key6": "2d5zbuyN7zn7Pv9e15egqRnJS9LQWU6zGpbmuQumzqMkfj61LvLrUqNSLqJaCLk6cRH5uwpv4fb7ykuVyX1aFmfB",
  "key7": "4sfZPJTrmjhwAoo9t4K81xnuM6RffBokVPB5RyYSuQTDWQSCBM7KL5o2rSiWqHGCf6Mro5rL5hedudSGKdRvKAeR",
  "key8": "4enivcJFUBbb38dhAPd7qC77jKCxJKpUa7MgmwDVEBhbaM9sKWAQzx83SbGvwVSK4TD483SM8piniW1ys9fBSd9Y",
  "key9": "3eCRYKrSaKHdC8XssbfZrJzNXed8ozPaBuvkAB9xoMe5w1bNzZxhfTzVozaG955MwXxHk46FbZXXT8maZELi8tkk",
  "key10": "4QcoxVKkAznMaYCiQ7KEuGXqTKReXEA2q3JqL4obQ3uLR1ysUuauYs69G4BMGifmh8xiamGBETZ4daBQ4KyhNTW8",
  "key11": "MjtGUBxPcysE9PuCLbfxV6fjCdq32u356DxHfA5ZzVrTGXTXtyzJySsQ5CYiZm1dU7mW4Qvj9NotjtoiNZiqu2T",
  "key12": "4oHJgRLz3BmCSLDWT4o4KRJm5nSDsr8M1bTnUsqFCmkiBnraX7YbEker9N7KKXsirq6gW2bzcSXy6HcE5tbPgamU",
  "key13": "2pbDZm8Mup7URR4NsXWXPiTx5osWAvPb5XBd9WqJf4joVvLLydpgpHgfKmzRdPvNVZHqsfvH8UmS8PuTFP2TeCsj",
  "key14": "5hX6dcRiKW71Qr66hR5UEDGSEjg7rbBkxV7RvWoiw7BRYYvLQAiGkVA44Za2Yv7hGmJVvybszjrjx9u91iy5PoGE",
  "key15": "4xYQCujuH9dy6LtUo24viB4oTWohgkpgjRbRb9cHZVrNCUS8poyimtvu51gSH26ZcnwCoo1CyGYchRxR91BGpRXz",
  "key16": "5sbrTxczpNEAM5quDdwgQh7JGfLrYQtN7svYyxyhkcLuK9ZfvL8NVGD9EnvKT5d48HMtFcSYsPWsNnEpVpJQusy5",
  "key17": "3sFNyp51gHXTjX39Dm31AFDoZSUAgwBZ5vqHvqYgP4a7YQbUko3xDuVBCEs4smxuQxnpzXPhNTh4fB9b6TyuKSpL",
  "key18": "zHPcVRVhzpGAvoF5CabRTVEo5HduTutQUTh9otA5KXJwhdRxaXBZhVUNBfmVwHxRqv5Aw6nH1N2Xdq1wsytMijp",
  "key19": "36C7DDhCcJ1tAJAE31q29Cu8brHE7aBpdEYFBxSyEKw9Rc46rw8uDjK6k2f3JB7A4JW7ChofJ6VWvCMZrzJJw6sE",
  "key20": "2RkjWKDzrws9B7C6BKYpSg9hrAZZCJxGXHRF2UWQ6sEjseQ2S7RvTLh9cPr5w99hbKfZxG94RcVFvRPT3kBgMRTT",
  "key21": "5H2kCkpmtd5oaFuYURgQi5hWg1n7ZJTouwottSvHqbjw9PL8iYdfHpAAskBesYiLGnr7vNrVSrPMJWkTU5r9kA6K",
  "key22": "2eUatpvcjHLraLC3qT9npoWqrBbnbgrQ44JSrYTPNTXHmX6S3aW6Tcmjbx1uxCCEuGGdjcr1NW6KQGAtaJpUTcx",
  "key23": "EGppkWPYx3n6S56yM5FkFew8zWfxSoF9qmQyTJmE2ZP7ASZuLoCHN1z9c3XPXpFJ7vds7WowgTZnWQMo8kmGnCR",
  "key24": "5b4s8yiW1MnSgtnTYPGRwdrgN6QzqKcL61BNSdtmt8BJ7Y45k561C1Aj45BHBi9JML3kQwHHLR1TnYt1eTgGBoet",
  "key25": "2jEs1xeYXtGT576UQoJQciKBbvczUHgXPQFucp6K9ekzetsLBn3ac4ogdFaotRmkyUUxz3Fqj2oBA6QbYr6LiUxz",
  "key26": "2ebk1hSibmy3pbw2ycyWpViBrsR5zEqf6HQ64U2VsFhjmj4LXkz93rdnGjzTWxqjpyXZSYvNXj6ebQCeL3jrjqvd",
  "key27": "5jPogsqYd1U3JPQVJgFmo9EjzEjjVUtxi3m5tpVTruGGzqBD6B25wFhVEMTHC266ncjjz3vD6wi77zZUNpi8sYtf",
  "key28": "e16T7Ju6LeBp8dhJaKurAfA8pAvydfSknQ1XfEPb8WgKZJ8pjCxrU7Z32rs37CQSFjHbpLvoD3P25rQWXVa9ndA",
  "key29": "4m1XBtkFwwBcUiMfyLJDEP71usYb13eQFRMdRX3xCu71Q4fMGNypd5yyr6c3TjizdCNGxAz33mPBA2gakAKHrJt7",
  "key30": "3bR3gU1c3rbraSMRyVXTQtemM4aHYc7HXskV6WArWdQDQ73G5UMkmPooJ8Wer3WhQJWzY3V2G3BE5DLu7nP4rpmn",
  "key31": "N9w5LjojxXyBgqmL9K3GN7teAM8hYwkQMZXhSfL3p6V36N3b4svEAGihFcLU3J67E9wd3EPVcU54s8MyHXfXz1Y",
  "key32": "5mqTFTadxTT2NxA7v6PaRUGa8Nu2xNekxBNGCSgWr5yVrqo8m1bsJH1u9mBxKwCRDPYKJR6UU9Qw9Rwfnqto8wGT",
  "key33": "46nQf6zx2yHn2cbf248WArvEZSxLiPXy2krwd2gYRJ3gUB4n6iipUGB1sgqMCwX4EW5vfiN6vaC9tAm3hXexJgZM",
  "key34": "5iXsDi2vRKfXdS3W4pLhi4EfTVW2ihUH9q6TfVGib4BiYzksq5nZ9vbGXUiKkagvD6cbc9aFhR929XR531wSsgXV",
  "key35": "46gHqvBLT38KE1MKGZMV5fSmVhe53NkrPX1XsQVVHvu4Fts4aCa75VYz1bmANEU4AXNfxp5PhqbcTMN55CHmNoQ7",
  "key36": "mhgRwKYgQoxzrYsFf6TAD8cSLsTQqiZBe2HHXJjnwDYQYsNoquqy89yPzzzVeDD8C5MFy8ppKJwcy7JDJh746gR",
  "key37": "63hswGahxnavDi4Cmc7yMgFwuaiPfjRrnnf9bgCDdyowvLCuSwGPWh7hHxzoVBciEYFJhC3JTLK795Ky7uEkJWLr",
  "key38": "27Khj5WUpaaGzTeP1z97TyeGedJdXoo17xDXMFfWHvUaZwMtPM9ojThE86rjG9ZPALZ1BuK5M8rkzsxyZueuUVPV",
  "key39": "62YELmh4vFDpokkPnSL6TbexDcGFDJXrDgDNyhgo5DwDcNc7uGawxnHHTxwL6Qy53KQ3Ap5nitUdcZs3VLNLibAr",
  "key40": "2ghrdt1DtRw1T9iN919EksUEJ4VGqwWDYmq4NwExAbSbnfuCmCtKbjzf6RwnyMk4TYzktXzLgsrc9wkaz4opHr1i",
  "key41": "3moRaKFLk8UhQsMTiX6kKGbGtTN6qMu47c1UXrSCarkTJbkCf5h1unWycPQ4qv8HLpmh6tKMyDbVC5E9yomcNiVo",
  "key42": "36JBvC7eRhxkAKLLBVcQk6hxu5XWuumd2tKC91s39kifCMbicoTmuNpLk6i7H9G67Ywssx7TpZeVsHjbvg42bMSE",
  "key43": "4DYLc7Gi4ZAKiq2gssspH62gRhdyk5NEX7CxbFULTaJR4gTf37RGSssvm783AoDc8Vx3rbcHNy9bjRqBus5YpB5d",
  "key44": "4FJFDBhXio7G7sz4zAqYux3cUXzZp5GzEUd7bTyGvccPgndXjoSLM4JkbtMGqji3rK3wduZiRv66YTdhkRYfu9C6",
  "key45": "2fanDbFCEJ4gFgf52wY6Hf7ZqxCnRTxQtaX3g3ufWFyQT7AthJttLYkNUzjgVF5rPNXZEVfpLLj9jSe2E46UsG5s",
  "key46": "RB6w8Xf6X3jvA4ttTGPxUPZbUzFGDwxxd7b5DQYWfim5mR9k1GFv74xfmsji7LvQumngk7neyEzXHTaWDVBfoaa",
  "key47": "5JZqyQkNhcVvKKehW6Svubyw56XTJgdtVxFXJnRkctJuugWLaNhu8FYQqi62TgfyZvwwM3He2w26yD9oFhEDSzLc"
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
