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
    "47FexK3nbAPmNXKdDKMCLUdZkeDuAwDFaifYhLPnJqYgYvJmccFY34twurRVHXrPmRKbanw5ZCJ8zVdQGAVQaRj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RRnPK27DcwDRMgnbMkwE1YEDZEvhzcND3LhSuwgYz7isksGHK2ViTKedDpcJkdCF8xWJQFRbkjfx1j9Fej5RYhq",
  "key1": "423LqFuRoyUXEUunMzTmwA3KSCGZQzANVrQj32HWY666cSecPhUfEk89Ma2RyFUise49BKpBBgY7AKaK3XD4MGof",
  "key2": "2f6LXKzgATGqiGbrMr18NEwniHMGNpHYrZr83zUQhLnM9dxzjm7R9mNWkCv7YdioZyH3nUcEsq2EktDagNKAkjmH",
  "key3": "4UDeJsP1mdrxnyCN6nMWYQmjad3o7rb9868NJUBYweCLKG5k5m47t7cbHYGEQq5QbooEYT11Jj7MZ1mg9Phdr1Q4",
  "key4": "3rwxVYy4A943mpUkLUWPrHcVz9VwKHunTJ35CtaphKBcdVJRTJ2EoMC7J7kQZ8mP6yFFAPCBEAJUs6TVz7TBabCg",
  "key5": "5tMz5ykjp2fkSRZ7tLJ5xqvdVZnYDtu9TePzE7YqyXNC2C2Lz1GtFaj9AHPm3jpJS7D9PC39F4nF412s8uHauGMu",
  "key6": "2XyALfWKR48akDT1yeTpnNX6Uyzc7rsLMnDFLS2eda2LiW3p7PLmGnBFk8qV6noQ2SNF68QdGbq9vE2cDXiWr1w7",
  "key7": "23TJRPjbNYEP2ajJ7kmARryerqYvT4Q515MegueZ72rGXujDgHrWyBGsaw6yYP47Kx6KizMYanjadPBNdhNi8Jxt",
  "key8": "3UPQTV18VyEDwYJS2y1CCVKFQHB3fve3PPDQDv3EQuSubLrNdRV3UmVxcAMy5DTPFZAQm4UFHjYyQuwU4u3NkNcR",
  "key9": "2jJMJ3jhoRJbpWLvVjoyzRKCbVNaCa4PVLuKiHQ2xrfrkSDF4cib3rM9e31YDfytfAcghhX7QQk5Lh2vFKYv93we",
  "key10": "3zKCZbKGi9EhN1dh7D5M2GWdNCqRRHygsouosGEk36dKQhYn6XNJ29TZdVMTnHTZJEc1z5xxybTeq9qoTwWTPdgX",
  "key11": "67QBmqccoMDHqAbVzL8m8D3TWmMSoWuorEMyU14vhizZ2VwmpeZG9spLPneuWm87RnjGBzBzDmKkUoJ2C9HWB5sR",
  "key12": "2RnsbB9Rhh62XYuzh9bAPxT4BCmHQWxX1nDJmHG5uPBBs7Lw53npjLd9NExcdiBM3wBXmiJUAcDw2zbmB9wuBQnU",
  "key13": "R3iJQzYg8tb2deSE5ZJKsXmzeEFrqVT6apiWriAbL22TaWXD2MhHV3K4rs6YBLMkUFuSHx7nEq6a4SCuMHn7aUV",
  "key14": "22YhnV7X1ztBUqf9mZ2Lkw61eyVdeDGA1gsAAiHP5o5Q63QJPGi5Fw27468NxJ9Qke9NtTtAunbo44LruR2auWQv",
  "key15": "4U71SSnuwnw7VvfCHFPAinYCD7NToNd5xhoxob2ctUDKT2tY5ppNiwcQZH2awbo2aNspcjegwQ8wpxQNokwHGvT8",
  "key16": "42ru5zLxPRABpjorG26Y7W9GdM2nhQCSniEoFSDKVqKKC4fNWofJ6rATuovbc41XQ1KyP9eGupaC3GSzjZ1kwg6U",
  "key17": "46GDLRPbWPMKmos3gUFfaKpkz27cB6LAJMyvVD312ZizuN5zwE2rsRBFyouxwDiFPjCY2osVUzHtDqxs5YhgJTEk",
  "key18": "3cGjZK4zwAsojY6Wh4PFjB85qJ2H5SYs9auHgtPousAdVfYrxE16aw8YzQQRLQUK57Hv9X3qP649EQbcfkHeVEZH",
  "key19": "2zYSC1GQW69MkdV1RMTwdpvWp6PVmWpJgW2zGtAFCP2avPr7TkiyMpU4enGgnUQu8nDK6iq8ahNF2urvkfYbDtZA",
  "key20": "2vLoj1ngaMFbnqBYPzQ5PAWSsDdSDSSaMYq15Pj8vh1HkZTKH8ah8rRdRXQFQNzud8tNF77QVx2pdcAvFnTE4Pcq",
  "key21": "3iNugux4zVWf5XGfuTEfqyEJZpNdjV67oQ5cp8KyCsUsnf5no1y77SD9evai8j3qtqEz5QYgpoeaN46VfsMqsNqe",
  "key22": "5YGuYmLzuCGf48e9TXUbBsWbcj2d8DMRJbjdiRLqNrZmc1RAmjkR2BREWnk31taQbhYVAVj4AiqbVHhaicMkoe8S",
  "key23": "2Cx2SPN6uc3SbSkDsEW4yMdQDRJamWV7nRkpr1CFiJCCJho7mm58RU5D6smRZb1m9zL5xF8qRyi38A7VgeRvFjaW",
  "key24": "67GrKw5WYCtVRZUYKJStNCDVcc7BjdUfrMNE89u4HnVohGGmroSoYG2MfvRUHf1YDDcbff6m7yYLohYdq7BV7bfq",
  "key25": "2xp5bTtSEYY1Uvrd8H51RhiM8JAUFDwpLTgFh4j3jQAFU9seugKyijHYpm8C3dACjQpiawQuJzG6RF2DZ9muXHFq",
  "key26": "4RM5yMLVUwLkri8PmB8hDDTg78r8b7179bvxbrqhdd2FVaqnCxUZ6MUvPeGYgvVXxiDhqdQBzB5DxHQrFstp2DJg",
  "key27": "59xQ22ThqGwm4hxsszxE5znz6k7UjAsbtoZQa8Y6YfAqcN4nqNBLxDZjbrkEAd1zeeJ6iedN5nzA3ha7aHmmyRiW",
  "key28": "5wEKVZT1ZNDVPHyv3g7sUPdsbT7if4RvGBM9ubgkr1vXctLCD9JePqn4waYc8K9Ej8UkKXULvzL7cNToV1Es5cLW",
  "key29": "5YaZDWxcbFLkEpLC7jGXYXKULkvLM2gnJYTkTKJCyUQsbocEZhSrP7CV5yYZSSZymNrAnAyiyBAZVx8dcFz396Sr"
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
