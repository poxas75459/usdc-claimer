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
    "hWFuqPk7oMxJ8qLrww9YRLXmpV7cFYgWYsw5GdXNsuJsLmXk8juK5zXv4RZYivS74oFeAe7FoRwmQtHqhk4BJqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWBgjeKyq2ARrZmBCPa5gnR5Z3pY9g6LraGeunAFD7ZDz6aaZthTfCZQrxiuc6gzhvMhY5jGF8rFyghobFiuVwD",
  "key1": "3bdMCNxNtZxTnoYa8JcPkK28Zs3CQnsnA2s41NVENdKQykRWnBPoHbxD8rVGBfLaXy6anYeRpA9KEyxpox4VYH8o",
  "key2": "8WSMFLKuXxxD9EcbTqdAhvXVVhJa6822cNQB9RW7kopk2vUsnNck3sZ1BN4qTerjMnW77KLVJJHYMBTLh5CtnR8",
  "key3": "5RimSdPQnBrFc5Y3WZkzpjDps6LKTWHMJxj43B7bGzLSmVEMc1eU5Cq3GSAUmtMxetdtPYyTdUARGexYjBoYVeaT",
  "key4": "3x9pqCK76FQ98xky4fpBV2zXFjRzgtf9t1NvGMvQWRSCMKnydQ7wKXFQzfFeLpxPuHD1gNn5eP6RPuovYQ8kqSfg",
  "key5": "3Tg2C1a1moeu3MgSyNiyqoFhGJbFj7oEySuDGeNx7vFcrfTe29p97SbMfbak8h1AdQQUWD7TXFHY6RR4eYUPQzWf",
  "key6": "gWAY46UG5KaqgUKN8J77hcbmVZjDkaq9hSzt1tEJL8fr8S1azQ9i3B6vYX1wwE1p4bDWyXvJUM9XvkKZTyswG5P",
  "key7": "5S82ncqE7MbfKAXXKN887bjhajvMjfwMP2iuqx4hkhBp1H8YPH2Jg6c9pRgfvtLz6ef4kktC4nQQd9UtWm8yZm24",
  "key8": "2XyZCtoUWyUXGgtVGNyqJYkGd5W1JLJcJD9vPavwbyyVEYaUxcAFix3Dv9C7G7rQkV3bBCz4TUxaxWsRJTpdRQX9",
  "key9": "2hReHzZZRi7t6ycWGjkUMp3FZx7ZEmk82PXBzmhMKNrbfwYqb2Y91SVgQJd8JDwomQKQFDiy6gviKNMKNGGNYFYA",
  "key10": "24CCeZnheEioPrsxVX58XXQKWsvP6w9Lv26DswU3kdK3TYC4AYgYFj4nB38dkuvy8sRuxaF2jFRH3PqxsZB7GpJn",
  "key11": "Xgb2kJ4G6rdxCt2VyhGLG4QptLW6hb5RJsHY9mYiKyQwqey5FCU4MYp5AX6Vv8bmzXLUmcNszBi3FRAR7AduvtQ",
  "key12": "4oa6JcSADq2VagwhndMtbYNBMuxGo9xVCtgmRLdu81YBf5xFhtRigiEaski2wcdRT6ZqhJpB98ZinmVooDmgnQnk",
  "key13": "5FEvnTGs6X19j6skSX5gxzzS75HsiArdfAuRgenooRLTcxvCGBZ8Yqf96bXTh6wE3QNPjDFbXwtcupWiGhYV3goi",
  "key14": "4dwqDMBKktXQ78p5vJhtPkAy1yvUKuKhWnVpRouNAJvTNswo12ydFohxVSwsXEQhrVVFHXQNAQh13PxLsND8GT7o",
  "key15": "98RMao652jdS6VDuW6jEhgTnmVhGAxFHLBthVYGZNqHh6CXCFfDzDLuRaN1onnUdW1v21ERFRAkLZ1E3sxjhqbs",
  "key16": "3jT1P7VM8xZ7kJ5w2S39UkNRgydkMwVSji9NS3gTLQYaJXjLn6gRxuj3g6UnM6nWpLTwquwV5dB97nXLZ8TEAw8B",
  "key17": "63mjYtqeCLu2CUddkrTQB2dS1ytzZc8cKcQdkbpLDvmsEf4wvkvFM4tcUkx7Sb6UzdWM4SwJbiJeLhrAR86HsSar",
  "key18": "569bA4bAC5cWvcVEwabmepycqR4Lk9BaqNn5AhHTFUdGopv4ZdKg7A7dzyhzQY77aRSsJCSGwCM8FWSMrsbCJk1y",
  "key19": "27hX7M7uTQpyGN6Z1jj8y5mKMGhaJNs7CxKdveq1xoEg18xoDxWV3TWAG3zVC7iArGzdpsz8a55jDEpBD89M4xTg",
  "key20": "3igoRyxMo76N7m2ZeqMHVmf3bWqF7t7hgzghceS3BUeuhVK1uyJKzxgxWwmUM4bhhkHn1ianeZcXvteQgJoqKy8p",
  "key21": "B1P4iakfqP6kSFopvDpexo6iEd3JYi3oQMtk5aQoHDeVZPi6jkFTBoLjyw7w7Ki7gmRrsU2x3iyCFg6bA7PaSwP",
  "key22": "3rD2qVthzUhVoatnrECypybvorkFVportkpP9xxiF48GAzDzBJtTPGs6YHDMkuPGMXu9Gg5zfDcFUHykEFqNw3cX",
  "key23": "C2s58HJ7nCgmH5R9Qrjgoy6HdckDJEs88dr38sXjtvbCpimcAbxjyHr7JZrF6QzCZyWYvfvYKPcDHVhapxtXwDW",
  "key24": "57Z4wYo5pYLZTggT4XyCSpKxx93maB76Sm11KP5yoHy4oCU7RkWEjJB5XfxbZwrxJoZzZfaoSWiTapvrESgZ5RbD",
  "key25": "5jZ2pSiw3obaCn5xkfCrdG49BP2iwyCYsy13iErGHUXxnikefCQxgs2hCgNoyiSxjjtmemXdE2Y6RjmP6gyfVXFh",
  "key26": "5pBbdb5gKbndm43UxB5UFbZksXJyfy2kzerEw2ngxdaNs1wSGpVBfoJp2JWhGnWpaVmBmtHyJPJseAxeE9akkfKd",
  "key27": "41scfNet4wtrSbbduxcG5CSHppY88ZWqDgET9z48HUgBLxZ2WXzJGFFJKw4Bg1JXR8CA1kJ6ToN67obQe26WZ639",
  "key28": "3sptHGaUW2yrYL7DNZgVtgtjWdW2faprBenncnSSUkVhVhXYbrfgUzi7Ax9wh5ByXzSPBesGFnfNe4oTXFypsBgN",
  "key29": "4jr2t3F5RmVRA1b7n4ZdMGkFtsGiwXaMq2vQyKE277nbGdv1jww9qRGUh5yZ42isBe9Grm3aD4NsB7BriNuHFQhj",
  "key30": "5oRoUpJnJjwPxpXHmLncmDqTAK47CXoztcaHTDdcCrmDQU9ebJyjdLKEWeHmgKEKXVYLfwepjvrXUdrMVhi4Ab8b",
  "key31": "5hghVjkPu3LifJ4Vi27wXD8Ln3MPv87cngSHbcERP4AGvcM7JohR6Jxa8TnfDGXUpmPXA58ftMVWH1TLTqM2juod",
  "key32": "2M7DpmnhCJN1LEqoHpUigLCSsNxnRcyCcFT1np6i1zma82DjqtrQirJrog5bEyqfEhU9TNmaXSha6faBs2LAFpxL",
  "key33": "dMpHFRB5kSCbhjgoxjZP4LMGZY588ZS2NFZKqFxhGQ5Y7VV9Vm2RoHdqp8Jb51pudyUczFfnQeLCR2xJPpf17a3",
  "key34": "2Yg3QohEYGQU8ZXRYkvtGCPX7tHPRjhj7RsJ8pqm4ETdkwYcac7pofRv1RPKcn7BAgCCVxHK3cmSr1YekRF4Lr8o",
  "key35": "5LSV8DpqXhiCYzaALzGKJ7z41VbjtzngaCx2RVksTTXAFGn8oqvcfpBpnU2Nc8bUPfoWxYA7Fmx32PD9FAmTAFKb",
  "key36": "4tV3cjbZSSEWhCKwABxG1fnFb8hBkfcpjGTqZPFF2Tv3K1TQeq87KvSMNwXSb3FYnxmpC5371WGQ9zCdgvRJZ1ay",
  "key37": "ofXx7bvNny4UMMAJXrFR5xRgyTyQp3U3bS75x7MuaL8TkchYCDP7zEvobvJTC2JKLDeJWApT9HRKCwksG8DPYyw",
  "key38": "63LsUwZHtL2oKDa7kVJD7oSZ6FHq1o6fdVaxQtbJWMRLazUfs49SwN27wTutF9SQy4C7jvWZcS2gyMgP8hAKMwRo",
  "key39": "KKZmXMgYkEznv6gCjLn8vCE9Lnetcw4QV6rSKZRPQpWg9WNZMMCt1MUUTJk7WYPrBZ68cypu81Ldxa5rXUQDd34",
  "key40": "JtuNndpVtAKkRx9mPdHap6TGEzbVmLuCxPwhVpctVpMzE8GEPhVnKnqw3kMNbw1RZNyqtMKdFewBmLw8aP2e4UW",
  "key41": "43KwQXNk2X1s5xeJFdCJdBEizidpEqV73k1am8fm8fZ9ZViZqibNz65gPaTEBYejcq77BQzoFkgbjHY6X3auHj5s",
  "key42": "KCNWre5JQ36K85kGftgjXpJvyqbsaBMGLehF3UraVpDJ9mtaDRzRMCN4f12MpWz4zt6PgWtkiRLyHG7Na6aCFob",
  "key43": "3Jdf2PNkjEjMJHZiKQ2h7fisdqkUUrRqge6T9DVQsN1ioipskqFQvxMnZ7xwMXvjgRcepcgt6QxKRa6qb5tSKQjn",
  "key44": "2ofCkjwCq9RzKVAErBESsLeoxonxeBRJiRGrifTfHe2BZNGsijSbq7fhUbRto6yfu8RVYcZV7otsWH7L5QiLn3Eo",
  "key45": "47aCG78xg9J74P5qozAF4Q5kCCmEbfskhjoR97YW2TkbKsbud3VLMP1BfC14cWSD2sKGPWkCukpW5gJAfaXXLea9",
  "key46": "3GmXJubA1KZaZT8pU4AeEu7UEuxGvyvz2x1DNBxavi6zTR5kwrcNZWS3Vusvx6iKD27bkohuBJvVJb9EtnNDLLRV",
  "key47": "4BqWuaH5MvGqbnzZdbx3mgbRe2WZq7meozV5uMkE7wvNJuUCTZerWagGg4pTxyGkn8Ff9X8VmydAKEkEWQpDqwtJ",
  "key48": "5XPTX2m6GNweCnWQiRnoicgUKt7zhFMNgNeeXzUuT8KB9eKzfes9M6WcZEXGL6sUYJSFTAZdXizHJazVjw2NBZ8D"
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
