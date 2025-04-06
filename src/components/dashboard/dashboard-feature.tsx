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
    "3jUp7fsKubdDFStnQkrdPB4gRCoyNKz8d9BgimeBFRGBy8RiaFVpQ3eiAQV8LqCoVrBfmwsjvLka5nCGzh1qu5Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WLtrsAhHWQkCtYKYJwxqSXL88F92vgxtgqs78LWLSaHeEE4D2p2nwj9nDyDZ8hFQjgbg1AnQzNj6vbVQiEAYBge",
  "key1": "yQbAmcRZPbUGpSwbLSb445tDG4ZVRGBdA5A9CA8BXBh1xFZcdBYxG9rfFmAyodt7rm87PqvZyJsLQwMvWXR5sqa",
  "key2": "22Rzqu3LwUQPWU7qLfsSqA1c5WjJj2BuyexxfHauTx4WgdkYA6CGWauvj8wVsa1u87A7QCMuUquykRZRXpBmBbuP",
  "key3": "3rHYSnZZCPDAReZKVU2FpesDUVBaByZx99THEMnPGPteCsN5Zr7powyxWdNB81FvkTAfH2U6UPa8MK1dL56pLEbZ",
  "key4": "8m59aueGpJ7Ami2NNUN1jkvPj4YDhtnXG8nx6cQ4pSDqE9KRAr2MPBXTL2X535GthJ6URQyhp5RrRH96wPDpKmG",
  "key5": "7LuwfYzgfCqGHNKdokCiKcNgJ6YNVXr8Q7M6mUjde2XFqzYqx4QvVtCTbgZ6UwjbDishb4pjZV2RxpajRhoA3z7",
  "key6": "2cmfWkB4eLVkH3B17FT4qcW1kSxmXC1ZYgbG1qy2NVACHt9X3NtVnScieE4ApVe5BGgN1hn9AdVgjsvLQYzfe4j4",
  "key7": "3PHhiH8FwdmmGwbpLYr1VEpuMFhaUs1QtfF2BydeYdxim8ekvX5gijWfUMPgr2yKv8iLxDyzZY2BJpNoQL1YpmEy",
  "key8": "3J1DJGrkxWmDR99T1BFdKGp1ncQRT9MGDYMdM8qh5PWdwJFMsq4GyUzrtoWPdeDE7uveWqSChgzUDAN18DimRjny",
  "key9": "4ec2i5FMRaYgAzApfanRU1whjjCJq3yHb49gkX4hu27HSewT9fhVujYYJZy1PNXKyJKJWYqi3pVwC5XNQ2PJ2VBD",
  "key10": "2c4AbaqQgLUrEaZvAWvfWVDqVkn1obYi58noNsbj1ZP4oCfgMXbvwZboqVobiacPFF18aWqJXo71jSVRDL1teUMm",
  "key11": "3nKb6n5KNuYsc4Duq2wDeiMudspcrx3saSME4Uh1LjCUvJcfqH1uyzfU6VJonhxgyuimkrE9ASdQp4JSzNmQahqX",
  "key12": "27FRBtentMByALEpoWGx2yssW8GjzjqkrFn1No2Xc7fZajaQrTLpYhyXr9j9g6G7qaddFwX4B5Nqr5kb3EHUhvuq",
  "key13": "4uBiHUDv7X4t6goEf6mrnyA8AocbegqUpoaMEQ7fc1rE1vDNco4aBpWEq8n1biGvkh4mW77FTmx8PHJ2cJLJNqNL",
  "key14": "QETKXB7GkoTBJL8yncEYvS2ce7NK2my9nnoCYmHdGW2ojfg5bLqvyHZdaW5Gs5W7utV3bw4PqNXdfrzG9A3JDDM",
  "key15": "2x4QaunG6L5YHmYK4qwDFLqYbnC236CwckP8USRM76gHAUznezcSL4Q6cKStLY6XhprmhH7CCPdHhGP11innkrDf",
  "key16": "Hrmvu8qV7bEcaR5LQ588TCLPMhUQmxxx1r8rWVwCqK79Ha9iMzCzajX6NQZ5Rbhcrn9Kb27HJY3srDeqCwisasy",
  "key17": "5FM8NdSAJSz1pWS4iJxyzpPDef1tXBFn8wsHobLqRpquovKaUXehtJ8cb7ba4EBRx2oREDFhh5797xgr41VbW81s",
  "key18": "5TwmRECdhWke6QTxu2KpQVxyZxkcxpDrtg2zhFAXWdKTig4rn2jv5v9aS7MZLSokAtNKQmdssGA1sNCdNneU6HCE",
  "key19": "3suS8BoQGJSGHaczjv1mb5trj8Fqg6dUWWrM6QGPV4cPmje8RSf9yoKgHczWsrPEfdC8eatgGq7rkhmv3AieSNix",
  "key20": "5DjDcCAJtQBhRARapNwna4oGiPqZSyGRB5WXmtGaMjwR4PCck6Qp1wnSYgbr5rUMGTm2XVj7bYJS4zHQp7PhRbUH",
  "key21": "3j932ANiDw5pcZru6La6FKaXAygWqdjn1XPzuDuHNUEXuQNF2Y1dYc4ft1qZhTRX4zJyGBMQUvNjiG8DGxs3aPgX",
  "key22": "65reFvMngsYgYj4HtzHQoy7qUycWkXYdebVFx2EF81GXtMJPZWPg6CSZSo4HUmQzFscCAMGNnw7tDfBjR4RnpS89",
  "key23": "Hn1JwtnmpGMrDHSUVHYFs3429kziCx7MQLux1xjxRXdVayFXfLGNq7Jd29abeupccJeECyjthGHMKpexEN5MRPd",
  "key24": "2fSbaXpzZAL2Bewtahy62ZqtoVVD4eeoo75sbXtf1NtKjbuaGx39Ss1bWy73WPjTaH7959ws9hRNjYhf2bUj7yC3",
  "key25": "45PJTXTg561Lvz371F36ofFsmy9peUiYa37Hndbt73RQDn9FSFocVX3F9wJvokHXzuBdERM3nFbnMK6fw3oaTqea",
  "key26": "2myzKeQeUHLGYnpAm7UMQN79waoGrZLzk2hY84JKm5ncDHDRtS48SZTTnRukZrYwtdvJScWjiaQ7aFzaPNEc4Arc",
  "key27": "2n5T9qzHFD7qAdkvTTzhCf9ZgYv1Q9g8tKLB5sP63VqCFBUPK69sFhcaTne58bYPB9qBvivRgq4KUPjM5uYaoH6G",
  "key28": "2ANVW5yvFGLjXpFd4B4NEZRWkhSD5P4duVvokW44taAhAXkHUJGzw11tYfxWkL1KGdL4asoCPQ1pggZ98d3tLVYF",
  "key29": "5p9PLUHhgyBh7Lwwu4cZeyjqD2ZkQx9Uix8xNcDGFPtcykfbGwydesERJ3m1wJ52Hfz5t5iM36qnePCMg9aLyARc",
  "key30": "4R6SH2P7ocaXXNrwmEF3oqJz1aFCdApcbofuPYEmmUULQN5ipc7akJvxLiV7jwSc7uWpUWypCrVGSRz5J3vcd3sH",
  "key31": "2AJBQxjbN8ru3Ko1izPmF93wjKAhRxWsCpxDDE8zE28Dg1f3q55FBkv2Q1zPv9YFiDaYnopDtqVJpFjVhTFrmsYD",
  "key32": "4pNPeHHENJiyxHFAd1fSRN8QrHf5kyhgNJHnDTqxkeagVqX2KWFxWj36usPE2bAt18EYq9X2SSvFG5B5mb8qMMWa",
  "key33": "2JzzrEAQJTnAXHtPuSTC1UUWcFF84Y8ojxJujVLZUjrPZ92owfoC6jyzu3pzJjJz74sV5T4fshGd4fS7aMerjPxc",
  "key34": "3HopG79PT4fU9unjvieMPdZg44QvhaUQnTndDLneoyt7ybjxPUfkSVTGPGDpUPnEJpD1zDfpg9Li7WmmgWKjfRUD",
  "key35": "2WxQWEW93xms3AL37Eroq6s6sWgMrY5qZCE5hhsHjPheGFvfJJGi1UtL6U2fGLgtA3CVwu5YgN7kM4HYz7zEtRgY",
  "key36": "2xNz1MP91FD8JeTiPMe58K1i7kFHfdHbGD7HT6Lyu6uCu3T549QYs89zVd99wfRC5Xsha1YAfys4nH3vwtt79HcD",
  "key37": "38NoqSypePc9JySKiocKbVR8hfNRphzekiiNR7rJdPwPJceQDbvUczwJhf7jxUiHb1vgNRxD2QZn9QwacPqfhH9A",
  "key38": "452SjCLiuHJjVb2RxSnhDFk8US7UaxjAafG6DojJKx5PXpZgF9vN6zKfwGDhre68j3QhB78ghyX6xjD8bCrQ6Sjs",
  "key39": "p53sg8rCxNMaWFqN6HYpbQ7539ex8fyiie1fQpBuH2z6xYS4xXZP22N6GzVkASzpirFboSyjoK2PX1bTXYjHPJm",
  "key40": "5xQ2Mx74XrfbNQy3UD4AfD1ZdtZZW21pevrDYj4zYXdjd4ijeXsSUGPBRdx3RvbNGxyhJcnuoa4Rs7CsCxTbYxTe"
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
