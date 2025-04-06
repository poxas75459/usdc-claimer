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
    "2YXFNVF7oLtE9DXd7p5AC5c3npuBwcVKL8UW3r79KpvCqfXkjQB3Rix5yRBhus6rqqbcpG4JTNh21mKvJF8VDU5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BtuXzQ652N7CLgqGzKJkDMtRaFGLk4EV2zLNksfF9Bj7QBXH8TRi5G7YG46UwWPrCXFquMd4EiyAzUwk9M45d4g",
  "key1": "5TcRkZkhdtsgiSBLTK2N8Y67KM93sbmT7SMG9VAUAYYoDSrTjVTWd1AL49wSJ26s2fHgDgmXYsmLCGb7NAWKQZd1",
  "key2": "eZGhDoNKHRZwg1Mi7bTNda9JTaYZo3JrKwhPymzAvYETYDXKoNYVu1czp8SjzBqUEwuNmHk8MKZRu81VTAsF2ax",
  "key3": "jtNV9Nf9wyD83mhUeQ4VdhJMjkFMeu1kymmQxNJHLHLENmoxvYGCLNb4bNtsFzeegfYaTWcb4SFNjkQ7m19JSVw",
  "key4": "5FCsDx9jYtFBz1dLaonUUQrgJCgMbHerS3jQug5QFdtXthDhcWf4CKWcaTNYPSjU4eNVn3CL6VrkPYLZnrSFutuv",
  "key5": "mX6zGGhGXt8EAwxZxazuxy8cf9kfwnKAFQSJshNuak9jYgWHHo9PJDr5xwSDKxvgJfzdzok6JeTWGc49gXY2yTh",
  "key6": "57uv2uq2ZxEZG3eKc2s2qCQTJvJ1UNd4voMX91fHx6wLffWSBTtQ4NuwMrBgxPYi4E6RQVLRzhBLUeKnn1DRC3MW",
  "key7": "qmymURPwiAmGpqpkNHfn4kmida7KftSdnQ4BTjNbzxM7PfnJ9TfUWCz72euBiyjv5GRmQ2kJqqEBAHNaMo2VY3a",
  "key8": "2Myc4rSEWRaDdSSfWQYSHupG9zGB38EVwAp4fBjYLN2B6pZ9rc8Hv8gmr57HA5MR8u3TgbF9CG37N7WZq5x3H8oo",
  "key9": "3fyt8oBJuDX4fT8cnk8YHp2YyH8XPgNBjXk3iEMh7XYhHVZ5vMEw4zyrLnuLPDr6HDEK71D9EQzER3er6sh7akKm",
  "key10": "2roqiVFmguhGpPkmpxq2oPMaSm9WdCNaQA4CZP4wvgJkrvbaNhvEaDJ4XPytWvWAN9fUeyxeUKADzzBnmxvaXuke",
  "key11": "8W1Ligy7j4YR8Xm3mfQDdaWKcV7T4fBdPbJnnUMp5WA4JuabsDnykXZwWpfvQ9tkfKezrHtUnR4DNAcoHvUSSia",
  "key12": "4ea5imapTwmDkz2a5oDAJ9cddFvmjpDuQ3dq3iQRe8iCYcV6b38RyDG5VbT1Zx2Chbascc5GzfMGNBTqSVqQTJjo",
  "key13": "4qbjMSkGuDHGw3G5ApwJYNyoxGcJhtKMPhgu9CvJJbJhNJ1cbvQiG4hr5vCHhnVa2rcGsTF65SHFuTLV42FixHCQ",
  "key14": "61YPFmhxgoZx1SGc654L4ceAuz87eTavkUEvGAk4RX8fhofq9hADJP6DKeH6wdyajHWF2fyqz1VZHobdAc46odLj",
  "key15": "5mBg2magV5vsLKJZxfMEpT8kX2yLRFChyoJ5opGTGJGczeC8YjWHSWZBgaGNTLYsKEvd85kGP4qxJEBhv53NAUjC",
  "key16": "f7FHJimfUypb2U6tFqxYNrGiY3eJAUtXT2i275pCayEJQDEvNBW8mqjzSsR4d2fZzMFiWHhacKaFoJnXRSWgH4p",
  "key17": "67nF8Fm7s1CCj8dM3uuUb3vJ1oYzvfLFPyLGtFiD1ZWy27bgoUyV4M75inVYJRsvBzKoB1TXndE1HUAwv8LDE99w",
  "key18": "4oqEFEYtkksmqosehSMTq1T2tDv9H5aDiGCJnTNdt9CwfJxFe4nR1RpDDPBQWBEXWotsYhJDS4a5yWDj4dUi6WRM",
  "key19": "45WR8qCZWA5R8h4MacLpENnQphVPCixJ7PhA2rT3und4VMGsu1xkTDcSAXDVSuh2YxuErpL8KRme12otauzv63G2",
  "key20": "3c8p3Tjkntd4qZ2uWY6prniNdauRFaUUUoaxTZLzNrQT8pWssN52eqy1w446aDJsHZ6tXZfjA5E8nagSfQES5Wxf",
  "key21": "cK8bQdRrUhvjaUDYsJhm19yQu6ot7UyxVQLFKz62vSRj1bgW5HNDyABxumLrdcBWiPK18MoNDzKaEzWCTALJdpZ",
  "key22": "3PxtS88XeGoA1Qgfo2jdTaFaTqv483b3MJq63R9GQYDdCXQSjrwfAKJtXAyBSFHSxTBZPiwB3tjYm7h2cZUK1knn",
  "key23": "YgsFrJ2wEBZYLWwSCykjJwZbNEgh6xBgRehHJiKD6Fc53dF8zsFeisXqhVNJ8PwJ1eWcms95mhe6vU9o2Pb8PDr",
  "key24": "3sHdLLcG5xW327tMSeB7HDD9aUdhC9B2zCKoinaTbfu933q6hBdy2jvh9TKwo4SyNCzTYQAjYs9prwcHJJQ1PxRe",
  "key25": "2BsusTDdjYtCftVruNmUer7HG2gqZCWpH9qQVfLj9PJSmYDYyhwyQaVheGCmfJw2ncpv6vUpYb39SxkhjPzgExaU",
  "key26": "35ThSvKDsL1Xp1YKL1edFqD2bvzb5mLAMbUZ8iECKN8D5EMnV5PmRqRjK9X3CeLminv5HfsA12egfPE61coKCt5C",
  "key27": "3AAozJsS3qgAr71QjfE7HoYrdi7Mhec1bBoDV1Pfzca1piwzGotjEizovZW3vpr4yxtW34rWCSW4ryjHx6WBeCCy",
  "key28": "5sJ7ds92kjsJv7AALwSqDsfyGTq5PpBGgbL6KeH9eMPY39k5CxQQFQb99Rye4G5cnUCZZQ63uVPtPaHAVMjak2Yo",
  "key29": "4jMVsERycZztJpC3JU6uNDsfnkSwqKHixkiDjdHUemPdRKRsLHUQcV9JuLtLyDZyUJhMCoZhjA4fRYwvTa3sQiuG",
  "key30": "r2vvKzsr56mnyUhHfpsz5BZw3iRLCxeA2ocGB672PaXeh8woKQfn2hDXjRjxbdrDeLipXzdSsVJvzpy9EV4EAmy",
  "key31": "61n4RKJymLk3yU4AFGVc35Pw5j9uzyy9UQu4GNx42F8Dk6AXPYM3qGMkYsFGVTe6SWCxSJwaYfUmTuNZDtss5RZw"
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
