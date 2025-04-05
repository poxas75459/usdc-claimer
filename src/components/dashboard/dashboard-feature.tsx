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
    "Qmzw3KTtPji3zmsunq7P5Q4ZGKAhJVtZyPfkbgLJoGcYUiNPM427b4LbLxMuSEuEJToCuBNU37Rc5My6SSWcR5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J7qehFbCDd7tqdWfxrQZz9kgNc79MM6vtYG8WXcbYFNGfbcv1p7nTCSqDMbxL7FpNtaY8ydgzfZuH3F76t1ayQB",
  "key1": "5FWz3GTtu8QoX1vzfkdqbfYPYULHhAhCSKiPpfHfzKzFGCacSEEf89NU2b3EmycMpZ4JrhXLx87DYNuEBsqmp2u5",
  "key2": "5Dg7M4TEpRHBPQG817UnPHQiPz5KXhE13KogN4zwM5hmCKZp4nX2ZSy3TtzKp7QhwGMkUqruUgQ1rSPnLG89wkZb",
  "key3": "dQZmXcinakP1nXoJd5P5GncYAyuqfCYUhB4gPC1sCFNd71qBjmRyqjskDNNKSBPSYAriLZV3PdjGWttZTr6iBcJ",
  "key4": "5nKBQ8RGxhD3AW5ce72WXt8iExvrSEH82kvfqhgYQsn4XAqKNdMJBHmo858fo4oTaGUMz15sun2EQ8UF5uGZfcnX",
  "key5": "3vHZSs3U9FtpQ8HwUabptrDk9GNMNEH63NS3Neagz14dzsNtEK3AvnT5DNnxXcokKfncVT2nkVVhbhsNJDzP7UCV",
  "key6": "3B4VhsZguVZf2mbbUyJiM7bgmfDuuxYVr28nVn4Z7RbxYjrFzKL3WcVQaNfQEgcMmZNvLj5vhxM7fVixX7gsovFR",
  "key7": "t293CN2fi61T7Hk7Ay2BXWJsZbUCPo5aqQtg343rvCJVjkRSZxKBBCGdDBzqV3yVuhAye1a3EgN7MzmsMy4bRgC",
  "key8": "5Gfe2uVQdk8rr56Dxci7AaQjUSthPkpxtrtq2c18EakAerU6XecAsdFWjvQjMtox8DTrAYvExaScKg3HHzHw9RdL",
  "key9": "piwKnjpdc1y7JtR3T2WjftC3qB6WeQ52wCGk7jd8jCinJocK2EPBz6AkwTzE9Tsrxz8yKaWTFHJ6w1EvbFBZobb",
  "key10": "5wreppKM8XikFmN97mzoVM6wpKohMvF9TKi4RKtWDMXi1hJCCihRKwb4fVnVRrgYUP86UEfQqxULPT3SwLS7cnmc",
  "key11": "4aZzyyZFHyBZbCAsSHxhoQPbtbXPzSsfABT3WW7Cj3EkiaaZaZe6d1cq9r6w4MWPVz5xrH5e7nfw6Wf9hdzruuag",
  "key12": "5VJUTAxvaLzb7kA2dkfncsuuZGzMT1Nmp2kDxFfQfRZbiwiNiQV1xSmjRQ6LChigD865YLwPrVuted28uqp8Q25D",
  "key13": "4E2U24GoJy7vKVUaFpyC8jTWaQMqNHxLUaTHrpsRvMtuhWbSWWYasY17Ya89HHmgxPEHxfjR9EwHQvGs53qQt5Lh",
  "key14": "376WyFpaioyjCAGBQuZinoGTC5MaPwwD7SJjPmseNoEJcZreqYsAP5PiYdYQ46ZucFv5aNx62hL9qhDH3onH6jzt",
  "key15": "42F1Xp4y47QfeU42vYA8nw2Qcq5WZa3FYeFr2Qk1G35Bo18Svf8cUP1Hg9effk4HmBUs99jX8mxg9nbLr3zBxE86",
  "key16": "3RmZGnCy3cg1fJM9TXiUCXA2Ji9J5zxyiMcXziaUxfUgDVgsdrQnJys2k7zHDKtQFLcBAzaiz1eH23jCvyAREJ2m",
  "key17": "5UUTBo5QrzekN6T775qGW8pmdATh3XQmfSAdGCDq7CJ4DcqiXF3k24WeyvCcTNggwAb8ErRfSefuoSaWnBoiNKC8",
  "key18": "5xkGLuS5PNm5wtk3j7qSRXSif6PoKfGeh2o72Waqxx3PiFwuzWrruH2K3yvuLjW2aSCURk1zjAaXSviafWy5ZTBv",
  "key19": "2KiQMB95NsvbXFqE3ofcUuNmjmNw2RrgGqbmvtQybML38JFd1EqVT6cBu8c6sKSGiUqsXskdPQVpD52BThNyRqCt",
  "key20": "439aXnh7LMFu7DyF1MbkvgRd8AZmuYk1KaVB2Gs8UqADfKYrLtp4sytxfMc6JkXRiAge9UcHfgJawgk7qnqy3Dau",
  "key21": "3YpukLC9WhRetnfMt4fYkpREBXYidRadxnNzmbwmSeWuy8PFTJ39arfxdh2X4fbssvYpUKfdSJHzPyHMC2yGJi4t",
  "key22": "4dGMrnx5zopsjX7sYnWTGWXbVb9VnH325M3vTWkUZkadnDqfzgqeB6EjQcwSgcL9oKQkPLYV8Mf7MDVuNVE7UXJE",
  "key23": "2iNmPsYuSEkGrsnkABRY9TyjJRCBtM8KnHrtJFMBhme9rnAxSDgZigxxhbkQ166ZFvZmxQAU3J7UhucZJhqCetW3",
  "key24": "3UipmRKFzdhGbheSTyVsDZ7XUPjaTUNzDZnuPxHv1QRa3QRdBYGLufCoooPXjd5Nxh8Rv1FHcTJCHXASaJpsoAq1",
  "key25": "2u2VcugSb1TMGTgnwxYiU6mWSxcQyoZj4QU8rH9QoZbG2G8LrB4Ti9dhLfJikLVU6bv671HoKe4Dk96KWcSvEJWN",
  "key26": "3Y4VaepNVqtBQhX4y5uqksjzsFSi93UKyA8fmZYJdrDQjYC55WKNuSgo5maGgutaS9mwzqkdtbFD7gmgA39rb1C7",
  "key27": "2FDa9oNe5CnompKZuuPkADVi2cR15Hx9mpWZEa9QUun9pc6tHWQqR4QWKtGTFCvJNLJg1R7J2GoRHZnqP7nwTRKb",
  "key28": "2VFCSgyZaLeySay7NphRe8Yigf2w2mFp6GpYWV8YkL6KD3dV6pVv1P3ZJrYM4E6GKurBtJzFGHuiEAU4MxfgYXgV",
  "key29": "2CeiSBU8LW7QCM7zzxgrw59LUnCTQCj3iKRELfcGAt2t5qL4HPDPjJooHYPQYaKiFj2obXsWk4MLZtYbuRJWkW2S",
  "key30": "4gJ2CVFohNrnrMQUCAfbffEwz2sR9N8Jt5JCeT1uSCh4H2PAr51iGieTw8cLbEoTMECbZPDbuUyXyhsQGJzRuuNs",
  "key31": "54xxJKWgzK7aHL9RvGpw1fKM1aqhKURRap6bYkcsciCVqMm1m4mEcWcTQQPEUYp8UaQhskJn9gRdRx7NDwUtTbpf",
  "key32": "5ELg4KGBjZmRB6hdt3Wcsf4SQf6NZRqBGeo8PNu8dfUUsUmkQeDs46GSQ7yxgqfAcUiiftssfyyVbiANBy1aHaMq",
  "key33": "5sqcDchmUn6sCMjBuQGWPmDazCfpZH3DkghGLTZMhEZDyZUbU4MTezSjToCJYAMKQQPCTVf7197fje2HuAgzNung",
  "key34": "t4MpKkQ1nWsigmFvgXSCXxx6p31YyVRbX5U7RXTjdpm9EDBtAfJ196d4mViJjjrzj9xEtGvxUrYQ53agXoLuTkC",
  "key35": "26JyKABjJVXUK36mhf72coktqJ9Sx7dRUjZFjdkrjbCvKW1zfi5aaALnA1BhcnoU1LAHGko5cZVCk4UQDKXq5kSL",
  "key36": "5A8AEB8djTB2hoXA66srsKFss5xiA3E5d3xWzLpTnjbZLbREsS4yg6KDQX19dcKt1pEWXoA2BoYXuKP7xQfTNnR3",
  "key37": "5Zwm5hT2yQ86S3rkoRJ6Nj9SbhK7BArhiiZFU3Pb76ZBwKoqeEfYziRenJmLxW1UP57VwkAZARDCjutKJg2VpFER",
  "key38": "2W4TZGuQzgwS4oxr8UBJZeeDsCq17iXUFHjBC2vPK79DsuT8ZscVSbH5njyQq4Kq614m6F9jRHzjUVwvX2cccxNP",
  "key39": "5F1uTypx4CcevYinEEaeXBLqHzn9rwu3tDcWUkqHTr122ZJyCqovbsk4xVDwXagx4YJ4HD7bwnUNyX1Gmtr8yERL"
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
