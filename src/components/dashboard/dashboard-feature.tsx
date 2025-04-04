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
    "5gUH2KJdgn3Wqt1zRBGbJEuMWbB139xZ3rSHH1rHWRdJDChdemKsEt2CEXegSf44QMjWZJjofuawYtXwZPWQq98X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sbFxf97SrzSpY4Nf5j3oYdpiEKVMGnbvvCQL1k2Pd7LYaBuEmqGxg1Xjmtds2VvcLo8cJqeNkAuaHtHcRneM9Wx",
  "key1": "2zFCXRq69arQAeMscnuUxNrXkNDJeChrYc1em2mJWZf61zF5c2MpjJPnrFtM8Ek4ciusunHXqU8V8HTn7Sya15fj",
  "key2": "41SMfp37HvorqAgRNSbfKtTRLqkjcPTSpFyYWUa8EVbHgauHpg5x93w7rAQEMezy1ybhAWNZtikC8XQZ8rumK7qA",
  "key3": "5HZ7SxwBWPrxFLDYLbyqoRmh7Cri4Erd7MjemSKPEMYwUP3SBuWbt3sHDg9DrGQxeXet2saVRSna57GWjYyU5FEZ",
  "key4": "3TyWEqMyUeixptfE6ch6obDia3e1dE9WeYBNWML1xAZWbvqkGKC7PqiV4PWwf2DAnsEgkvy6cfQMc6cj3T4VJ5Gu",
  "key5": "5c4EYkqQVic8hDGRY5Bj6v3XVSttd7UBG16hQVzj7eTTkTq7cVJwNHUJq9WKKZn82Jv1PZzBBN64SfLpMQVQw9ei",
  "key6": "28hQCmwfqJEVTbPGoX28f9rrukEWAJGHLbuTFufu9vJFz6rKSFo7tbTrSWe1UWLj4cLdNQtFGMwjHYCuQ52YtYLR",
  "key7": "5Aicxy1mZbq41qg3aRNG2B3c8wrDgYuatoxf7HfrTdQtmZznw1QwPeiPVrbVGqEofioxHgPUWKy9F4TF9aneUWP5",
  "key8": "27QS8Xsi1fqidKWKinptNjJVfumARPnRAxHu9f4pM3c5eRrjjuV9cnqu2hSTVMUdfrdYsFpMWUQzruC6REL5J9ao",
  "key9": "3Wa6VodgUhYErKKcNphzvVKihz1Rdh94pfXP95WYcyAmu1dsFQABB1Vc8xzZuTEJbBW2sZsxj1oB3Rjodp6iFfyV",
  "key10": "5c9GqedXQ7jVG11jNHYcfgdNQuS5Lmta357exkBCkq3iJARaxwT26y2tR8NwrX9grsFqdmukVTUGYhrFk2ETEgPz",
  "key11": "599c8RgzfEi52qkcW5E79B3yJNWMnR71vE8XZuF7UNEYdCK6mRTeWNjjcLX6DCFoPu2vxPNU1W1qCE9ZvS48ixAU",
  "key12": "3qJbbG4vojBzgzjHZ15Q1miK6Tc9DcsTxmtKpXMHsJGUv65a5yVqwSSoE7Mt6JWkgYpjt2ds3YfVaUFUuREgx7je",
  "key13": "4o9uYthojngRXUjJpFq1wpAuToDkcP57xKwc7J3jtz5EB5byWdj7TeP5szwvWcWFoqcoLjBMzRrJfvUWof8PEEfN",
  "key14": "3aD6bDwZvDCYM88G6n25mHSYBAyzBHseWhoyzznFfasJWJWrHUmBkZMuPQFHDiPNstYLmw1A7bDaj8CLcd6K9YRZ",
  "key15": "4xHSftGaLAubCQW7aiUNLsUHbJLUaZ6ShzspUKQVwuNQ7cnctktmiU9EP2TMDMj4cFExLCrbhbsazw9gibueqqgu",
  "key16": "4TmpUJ7PTAwBfwx4AqViVL9noC5dz3aWA7HQutCzBVf1YmzpcxMwC538MT54QRYZaRahakM4ag34fPFZrSV2TVen",
  "key17": "4crpJnUzCBxrq5tt8JU8m6HnDUiqT9haP1CCecqQpQNRx9ueHgrm3mqenZ2Djjm5LWDEnQaevB51TsoWedAucEZw",
  "key18": "QX6aJXesrg3p9bXiCvo2i88q2ZKUo8tKAdyQURV4Y2Ld53dtCcRPCcLvqu6s1LVrTV9GnoFw7Ntoggfp4PHDEj9",
  "key19": "3Ef4hyX4NEQvzWTyFiEFocQwymRyNJ8rR7HxM4iiwnjt1C1j1f4oKpjPRzmhn5eugkqLQAUPMDSwTn8KXtiy1niq",
  "key20": "39y6ew5qBKjUVJyKinmAzrrupJ9GG126BZNER8M2pmLUggXwapEWGk9PsKnQkkS9XaR6aLYocY4uKK7t2bk5RmcK",
  "key21": "5xroHQbgQH9HBxLWNCi7cTH3a2gYRjjsLiKuU6NkudgBB3SWWHf1K5779Xzwq3fmUNYGp8gJ39qftxdRo2y5ejaD",
  "key22": "2B5eAm3DVvbTeEptu7AHqpH8rppgxqD2F1qCcMabUMmjVUwgHUN7bw1nLT7uz9H6HUg7b7iDu17SMEamSZyPwmUB",
  "key23": "2kVzQztyHWXMFZJdZNHtddKZK4ZeuWW93ESxfuVtfVRfajEvqGSJbCbvEkYYQRPbB1E7786tbm4oFMmo7c3uvPnv",
  "key24": "9NmJgNVepa6ewik1vd8WCiqqok11GZCp6PP9QAoz93Ys6WWzwUU4EJ9sBC8fi24yztvYK1AZZBWpW6d3Rm45k3A",
  "key25": "5n2P43gMpYk1XsJs6p2gd93vosxbGLm6wobrnWRUgQS5tGx1T7JFHkxGhCz7CZtpm8t4YTeyhktmCE6vND3hRwFL",
  "key26": "3T3AjFLJZrtBaE49KboJiwK6dN8ox1vKPEuALkVuMdtAtXq9uwMWF7C8C22ztFGsWhDWLWrMvyZYedGrJty9Vxhy",
  "key27": "2uDP8tugfg2z6YsKVsbpe57nHof5dCwJFrCLfZSbE3BqQ4KstbPwSCSEUtF1oxC9xgU7PDvAywrB6a7za2Ceg8Ws",
  "key28": "3AnziYUn7cxYv2A1N6PkisA7VXyLPDDD3rSeWhfKFUH9HEYjhRX4GCwgivdsnkvM2G3q6WTv5cG9tRn8B21S92NQ",
  "key29": "4mp2U8WeRaHbzv32Yz334YMruLwrmZxy3ZKPHPrwwLEUpfy14TxX27JRHWCN2ChSKbTTm9zpsEww6aTJhqcmHKDD",
  "key30": "5392DgsM3Wj2jKnJVim7u6M156RgkFNjtt8HW7q8D7bBoDN1gM4NHuJRnfs4WPfmBj8CkvhsTY6ZsvEkzKQhTKCF",
  "key31": "39aijJ4aJ2fX45dw72Xn7eyysvPgSRAVTRPLSUJErkkoNXdK9gHSQKWRGgMFGwvvqyWLrsppGb6WFsnj7yuLFC7S",
  "key32": "4uED8xGNJGc5zywq5aJdR1Xt31ZztrNsHw1eUsKigjpc1w2TrmLyE7ZYpGv18LLAafW941hUysNZQSTRUpVBd8yU",
  "key33": "2LhhGxygeME1YYpT2bRK7DerYkHjDRM6RSafJqgct4vCSmesPHiTt7aRLhuAzKrv6H7RxpT6Meyhx1YbwcRtW2NS",
  "key34": "3MT8p6dZh2ZULQu8jWYUn8VoWFjK8uXgPKBEcYfAJS5hR8rLpLZFbPjrZwqAQ9KBjRoJbqcAEXVRsVmfSrpCWUP4",
  "key35": "3SwbM3y5AosXpjstCXX8GyLVVhdE71QvHs6ojPDqMv71yBBWrUGiCtTLxuybqL8GTqXsiRfbMAapeUP2EaKHqeSd",
  "key36": "21naKQEGqWGxkrZCWQ4ih4e7xsm456im4rZgGB4o57yKexZSfiJaNJe3pGvBNuPqWAZoL4Tk3ZKysXuQPVqVuj87",
  "key37": "5hWd9N6i4kU8C4o3PZKKytuAbcSXriKfG2DXpZqpnvBMnggecK1q8uukFBpwkxhdnbv3Qyrwp9XcNMDseizZ3nzf",
  "key38": "jTQ3z9odyTwXaP6VGoSFhyWZR5EWCZuUjmQjJMu6VmFJhhhRMhLQ475LHEA4nDzEKcHMoT4RenygYMpxZmtL2pA",
  "key39": "21VPRaGQoUVPrKL3bZ5goA8AvVnDjUh5GzrE2DaKe8V9cJJd3nwd8CiKX2DxANRt84wKkZGQFiYTGuEvMteFTuoG",
  "key40": "FE62end1uPLpBULu4vhBpNy9Lua9qUuZHVy3LzL6DmsjmpbYV9U6jMRmDq9JBbviGgJj13nhh2c9rjvLrbXiGQH",
  "key41": "2MdxDE1SESJQY56LGbiUKWdWY8PP6bENqLvPLkBihHxwRy2dHNowvjx19JbxLR9fa38EEkC1XEDAgwPg75R9p4Ye",
  "key42": "5k29pw8fHpiU1c6erX9h8T7aQi3bGN8EqxJRhxfqBPUUu3k2xoGnqesicKrYQdMvahLfSLJECvAW794rJTGA8aY7",
  "key43": "5BQCS3HsgGPHhQfDToQVCyJRGjYM52xrhU1iYmWHZKrP9Bd54tW1e9mtbAvAFijKGGL6gm1Vn3WnkcjaXfNjoWqQ",
  "key44": "2EW7DzixFG54ns8NSx72xwxhxassPNtg5CHu4f1rmf7BtmohCh4FGjh1DKhLss69JDkQJAti1eK1GA8GczFYPrhB"
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
