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
    "4FSq68HqJ1JmtX4JPxD11UgvtRtZPrbuNAwg5jW6rv4zDeKc5SCU2wv26Pkx3WSYfa6mHhafjDkSJFmFyptj3w87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TcTCJYgsEGrk3kEgP1TggMvdSrfdpgHmJZFCFtNPKMsM68hZtqr6z2sZT5T5vdTVTqVkdcUFqPry2tDhvxDC7Mh",
  "key1": "64rDZfN9xhxUNqJQRkLQNWUKanxT9Vpbkrtrsoy741Ts2Z862A7h8Y6zxePHQqMczWTNazyX4vHR4LPRXbMdiq4R",
  "key2": "4iDKpyJHCwR2GfzgYtxLQc3giMW4go6DNAREU63s921syjzJSLSExn9kZYffpMFK4JXgU4J6D1A5Q2f5m92iZPy",
  "key3": "5iqNxgBc8j3LkS1MKF2QyUq6MaCJjWyXZ4R63DYE7QYNpsqFgofwGtMGdNAF8aetYtCpAjMgHJ9ShKwui422mhHR",
  "key4": "Cv2onzeCb9m9pKy8CobzPzofPfwnTx18vv9NTkKXQ5dz3bHvWi58nV7ER6dc31ECkXVcJzmZK4Hfd8JPeSLrGfs",
  "key5": "2ULa9XosioqmABxhNv73DV5Ed4BKmQ2HJwsZApnhpN13XqMiCedzg9wGppYykJJ4EdQ65YEm9yGiWm71i6To4t78",
  "key6": "57BHcxJ3mW6WRwiHFX314s5w3iNcCkJRMtAgXrdfaXgrqp1a1uCiEiTjUMVk5DgBTyPgyGXFE6b9JFAUf246sXPr",
  "key7": "48HJWKhws8Dyo29TXetg6NeSDTDSG1qHapfbFXPHJLQ8PauZY6LcGDVcgTdPp6Npsa6ahc8suEf443jUoGxkePSV",
  "key8": "3uhXKg2b8GEYJ2vsSrdYzUD8HuHXLLd7dtqB6piDg5chsxhgbCsWpXRzfsczYZQm3EW8zvqdLSLYmk8MdAqQDyK2",
  "key9": "2okA5ywEqHwVdD4yhruV66bgjo9dZaVvekoj5nUHe71dHw8VAqKa6xWPWQbGpq4AdZk1cSkSScnt2f6QZc2YP9zS",
  "key10": "4jyh9KMDiqMWyFAXgGZVMYopnKo39Wv8LrHFqDZUUxP6HbfimoFThaEsp8HZn2GdCpQKNw4iCsKpm84mhH5xJkqn",
  "key11": "4nCHrQxo7SjAFpabWvFiamq3s1NymRNwEpD8V9dzwadMpP62uU4hRFg8QWAhXrcfHfc75NGusuggqNKoPjdPD9gE",
  "key12": "4gND8Y4fB5UZ4imNF2XnKwvNGQm7poWGwL5XdZWQM7Vb19uR1ZH749miWbUdrcEnSftyLaUvjRC5WNq4MHV7fbg9",
  "key13": "3QmtQSGLvFh9P4yrmAsN7PFWGzUa7aX4rAPV1Exvxf4Xm1Px1xAN3z69VzNMCz6dLFA9wRZAHogJbFQo586aosg2",
  "key14": "KHW79vFvJt1S1CtG6PHbdefmMtQspJKRDmR9Ka4TniswvdJs7cptW9DamPkaG2xGn3QHon2rwoEsQ9nfrNbPbs7",
  "key15": "2hHik8zN6FnmZEHvrKdkYmyapYXbpTTqbQusSRpw6HpkXPCcYLwXk8WCD7yKihYrTV8xN9hEuZbqN3ufA6Ecs8Yw",
  "key16": "4A2zPrDbDjX5mdfBo39ws2eAReUqG3WaDLMgD4AhqcyEHhuxeWumc7xBRxJpfRCqLcq7KaJJxVeAUFQgpXe9sE8s",
  "key17": "yztE5Wc1cy2gRrS2y4qdmkoQ7vj8BeXF93weCrNYZzwzdQ4HMVmwHsFqKK1aEHbGMNdzNVjMGjUitgerAsChF4G",
  "key18": "4KyvAYFwymjK9VgehhdggmBqMMj7moo5eeX37BWY7YrrnBho7tYdcGcKWHPF3PAbVH7k3iTN3rxFUy93FrnYX72",
  "key19": "4sxR9UywtsdsnDr3AWGw6bfgjCgVzZKsXewmDG7rQopa6djzqTUAA7UWQmFD4STZE9jyNjyBJ5eJWYubjsjsdVhy",
  "key20": "4gkRWeYPtfPxaoSPoA2czpimgNCrFEjZDWkazZVjacaoxnR7JXPbxWi4LMy78mWL7SZTQoP2vCaJ6yVCJEET1svX",
  "key21": "3fcagMhhYv1jBnPPxZn1LXoJ117dGkyJhYvcLJceDz1nXaPL5UYEwDVEbkZ3xLQNxsi8bV38ZJ2v55a4sL8CwekR",
  "key22": "4ddGLiUe2LMhxEbAUnyN2XTFznoGhk7SXN2fAHhDMaT6CJQTyVaP7k5Hg2aertzVfWQFk7SWNoExdnAJdRDovsiQ",
  "key23": "2j63BcztpXZGnaQV7ZurZu5yZMTyj9aX7fKdutDuDEZDbLEDPDKPuSbpPqVFPF83BCfGP6PczqtjBdpATg3nuNdL",
  "key24": "2yto6p5dJYmVj7coKYdB97u4GNgGM4Uwi8YpRgE1CMxiUcdjJCbz5mFfPBifpGzKBZasvtm4brDa7tHVP5DPAFDb",
  "key25": "5SiKocBer6ac1NHwZ4NgnDaUBWy7uSfAa6w53JgVALFHJGK2YuS6dfQBPxuaDgwSNsB5v9dPk38AyzYycaD4sj8n",
  "key26": "5B4hmaTEjnHWuVVkyKztWrRoN9xzq6jUXfgqyz8gUG3ZDCT3DqFNwa3S2gVAQGcEH1bzSbEVha7zCE91M6PNBbHH",
  "key27": "YW8Jh4x1PqRAQa2CTrmoKCdwoX3Ea6s8EbChJ1NHstjTrMrQCymH57X2myDeb1PagZgx5JvMtJvdkfWwVpfdWQn",
  "key28": "39fDJ9L8ftbNCXwvvN6KRjFGKcGBcG6qL5FFA1gaR1M8hv7kkbiwKQ1vHZVcvrPSA7vbDAxvriuSjSC83LDgkRoG",
  "key29": "4bkNsQN1Z8ErYgxwqXw8zRWdvzZh2zYRgjsfay8Vs5zu9CbjHeX4MQm1QT7U9L8azjDHntVRCFKoq6x5Jvno8gYr",
  "key30": "3oQaXg3S3buwwCXHHJDEs8uM8XS9Gny2Sgojnpsu5ANkHNBAxYfDbB4eoeiSr5S6aTbgHhGhK5QPfDRzRCbx5cL4",
  "key31": "3R44YMuYEroEaWpPNDeX7h7UWMsYLoBVdhXsmwEQC8BG9iSZcPDkvwcqk8D2bKfoH3ZFqvzTQQaw58k7HPgQE8hw"
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
