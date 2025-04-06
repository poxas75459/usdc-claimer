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
    "32hscmmjuMq5SNDyAhxeFvWVJnxYBtAssqLnBw7DqJqVpDogNwQs8iDNhRTtPW8QGXAx7boin5Rh2cH4Js8TC31e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ongrRUYaqETHpEDtrotSNT6zzcWhAq4TU5ncXPRZHoKLQ8gVoNP9MNasDA1g4XkJ3DZdKXncaAr5CD99XagQHa9",
  "key1": "4qCBFUDAfZByE7rVjReYF72W78ttd2TrRkw71JjQvGJLy2WfMqu8bsyxRCXi17nGiiGXzrPkFsxzKh4acxvbSLJ4",
  "key2": "4wdNQ56XNP843XHYBGo2MQJqn8ZyzG5HgEy9HWinstsFgp3weHQ1Km6H3V5rx1vKN3vpfGD7nK2BTLsmKw7w47z",
  "key3": "4sH1Dq5sufWk6i4n9J5pgozY9ZjRwyCrXcukQjgexxK9iR3KabHCUQA2tfGpVBF3owwVUMYuBbzvLhQ8UQdhn6z9",
  "key4": "3Yt4Y5TNmzy6k1Dhx7N3Kxb3o7rVjhamgKu5GDJE3AGN9Qv9tJU3Zte4Qxf48epo6saFVPq98GqnsiZVRUCpyyUr",
  "key5": "5wMBwZqETS8nn32XbPAeP8ATaLmcqe5GjmJFAogNYs2YwgVoZqpFHR2LhwTHXFgwKFeZYJhW5g2aXFcM349SbHwa",
  "key6": "3Joe5tfacMkT7tARe5rnrEwhmnp6xWPxKkJ9RhMRq5ATt7BVDvGVp3N1XxCJ7BysriYvGtjqHetzCrKWbKE5FJtz",
  "key7": "4hXj5zg5iPmRHM6DbACJbPSGVtRWXf3SapJYyFaJfNvDdubvYvFNTW96UGhzWNkd3V545jBfSvBciGGjxfVgFc9p",
  "key8": "2SU1oZ1Kh1vw58owaMGbeSUKAi1ittcHzXrWH14Vb78ByuxAYtVKNBHuMUSLnGKzXcUt9gBzKAKA2Ud3WWCPqmh1",
  "key9": "42s5BJ5DCWaoM53XRp9K3KnupuDm9ybRUJDsrGKH2hfMtehW4jNrDEqQbS2ZkPQAwwrVV78AbFWKHiz1y2FUtMHe",
  "key10": "63rUL1H2kPnREWn1HPvGXrv497PfkKsy5dFLdsKV8wgxVoakDRNkNsDqAy3V9y97fzTHwEB7zGiTpu8Jhp39o4Qk",
  "key11": "4uBeeMvrac2eLia51BHjdBXXkq2UFoQr1ewP3MUNEndZp5sGxJdNaUpc27UBefccvTn74Ne13LG5N2LU7zbTsHXo",
  "key12": "2SB74HTd7s4UADJRJSuaKxodtkUwh5u1ikNgqivBV9UZbhPMHx9f4jymUVRFqdKuqwcfnzRiRJLSzAqpdSu4jkgC",
  "key13": "2htnx9uXLDNHH39JdHjmftkejorjfEhsXjjW1TZy7y5YoSKRQ3a7DNCVT2SjhHimtTrTAVoMQtzVhuJY7v55oM8z",
  "key14": "4ysj8UbSG1vswQVjd1Jzp87viJoTPWwHqF43DJKy8GiwWeXN1AWKBcpPhhEXFvddFU2jZY83Tq6FsgyWn2QYpdgB",
  "key15": "2zXpKBkJeWf4DAgi9jtGwq7xx8PtaY5uGJeqCpSojEhWa3mf9N4k68pwqCYUvenGiHX76yHdUmBePJtiWtEQJgR4",
  "key16": "4P3qQGKCDbDH8yqgP9zKDfxudUgB2F2mbR2BNFRh75PkXk4wkT2xGiQnez5RADXEKe546RiMX6YBsQGQEy2RUnqd",
  "key17": "3EbNt8ckkGXqGcaTzE8NmQeGBJhU7GtnikvBizHdauKBXNmMzXw146VbmoiByzf7NTwiJWaoD6P4HWkmTvuvuQaM",
  "key18": "4zPiGQMxKG2Xw9Hw2n8AHaQmnH99NfCyX2MpkZJo1ByRpwAu1zXV9HTKVhDfQ77EqnTiHous6v9SzoX3PFLx2BS4",
  "key19": "5XAAu1FQbSp93TS2kdqUWBULR69YTSBTFLs9AEVWjDxPjsinGvNgpZ6Zmuzv3mJ2BrqMsZM3LTTHGFvoksDPB6Tu",
  "key20": "5C1onVv48QiMAvqPTVrufojfi6YEEVVmhXjhxLnqVQey94AEQzfiW8k9SyfCqGh3Gh4Y8mLsPrdjRNybGNJqaAoS",
  "key21": "NfjsZ4ShoaxcwnWK7fsKfmzxEaVwsz81NfiKxf4b6ArkJSj6wkEbyu36WKZLpMUorVskrhTpssUjpHfhJ2GemPA",
  "key22": "2BTs4bcvwEERsiZ2xar42bsPN1q4d2xZCdb8vRnQFhstLwN8maoKJXprVh2LrVggnWc8JYyRwzh2Nai1bp45dihx",
  "key23": "3GZXLgqKgA3HJracHWnBiCiqSFYq3UHNYwuunxP5YioTRKEVxbgxbnx4xEhXMZmwbxKmLwY7MRMws6nFKHQ4fzb5",
  "key24": "2tt6DWuHXyhBwur1Z3Pmdz6TFmKAVk7JbQFrnaFuTeuuaR6RYqmiBGkz9d5H7Fmi6Sof8t48Wo1vmhW3kDTnVxVT",
  "key25": "2ZgYyQJno5sRV2gAeznTbeprLnmU75ssiCBuz8ec5QNA2vYyr5X5wz6uYG8sWCF4P92g6G3uq5pmHJ9MFPE1382P"
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
