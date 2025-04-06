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
    "55T4BL1CHcrpYAZsnmVNDuc7SAsU3CaUojTfRNLLsSUQdAPHYeVRBMaLUbhsXiUbyST4RMpoVh2fqx6r46WvWdJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JX5bNcBHRum6kxiCjqZqq5gsS5eMvw7SEzjtZ85C1FirzSjVrxe2tgtWqEeffUFGzLJbfCASyTE3ajaVoCsSwga",
  "key1": "XT6ryX1X7N72XAGaMDhVcJHeMmGUDQx4fAzhgQh89F5UyaGt9DS4RL1xZ6byWCQUQz8N9HnNfh7EZRETDXpPDsd",
  "key2": "3DfskUgPDTqnpKwx3wyGL88R6CrgMnxn7xBo9VDSRyp9KQRgnyrqbH1MXuAxtnvqF9kiNLou4JFuYHfwzPR4KWGC",
  "key3": "4uQZ7f4GGNCkmhKTAjGxBPo6w6hioG1LpPUsBuY895RUpDBuFLRbEYQU5RbQfjZDaEb7kRaZoX9tDLq5FBrYDiD4",
  "key4": "4qtfDgN3ShbZsEcsKdWKacMHMQ5pxVtLTTXQLS4Db1JzbPzTYrnVcAxExSbbqdUgVdpKWu8qJmSQ48Z5UgS7t8Jd",
  "key5": "2FX72neGD8JPouHp8UV63Wnu7tBy1P17EVr13CY5aLwX9zXr3UeHnEiULgHpXn7D7yESYkc8QPJXD1VVqFYf4HcH",
  "key6": "4auXGTVDLP5qkmJMRLxQSTY2EiBZKjHNcBC2H1sGMiHriaHi62kK555hvwX8JUyizzMe9mAfHcCu58sFYFTKrDga",
  "key7": "5YFPS3gXY8bPFcp2YJD6EFu4WUCFrmo1muEajzusU8FQzEPW1SZWLU2NLdipSGTCcgmDAWEJD6SpKC3KRjV5v1jM",
  "key8": "2CVsrXJL4utB4qbjPZZ5ReDDUBvzt54dhRFPTZzRsACVgigbNM9mBBkYsHmRUzuEyWe3NzEDGqynay6NjWtT2YAS",
  "key9": "3jXAUbk1XDL1tDHuriHnic17xfJkLrfgc5Bauu5qUvQbkZ7VszRvUrzrLRyXzkLcHwbzsULKUngHKngoka4iwkLJ",
  "key10": "3eHCoENduFaMQw2kJchttxJtL3Ecz7UB17vxmnoqbKoEktaH642nPovcu68ZEagmRFK7anesY7LLHSU61hAQhABh",
  "key11": "4X5o28QXzpMyez3KpGZD4zams57z4d7fNCbp2Pt9yyggezJKXEFrm5TWLx4dkSdfJtMZFMKNrdiJX1DeCjKC3JnS",
  "key12": "2Ucw91JaDCuPoR2PqbeitXRy4DL91boNgaBFkQmJDGxVH8B1XALDdDwJ8wDa52eeo43eR5ndy7eevPtDdZE47gdg",
  "key13": "4nJBEGpNbqvdEyeMDe7d2rJFKNYfzBsMxXt4vpDdFzwMbEcHGZ5uxzYPHKs6kkX3bcpNkMkRWyjVY5UzoRtsezv9",
  "key14": "5ynfThL3u5syJ7x7mhdYZmBrn4vydtSuBUTJFuGuFdev7WoK7S7jCJoiiRooUyDpsBA8zWTJqKK56D6Nx8RZZHJN",
  "key15": "buqrWcn78Hx2kxA2AxhZ9cxHqDcjNi13GLykcy5aVDqNeS872b2CRETE4hu8Y9YTJxfQVbzTFrrMotwNKaeUHiy",
  "key16": "3VaDZ5HNLCpMNM7p99YRQuTtANotG8r5xMTRwyo4h9yBcxnV2CFT5RtBNZ3LhJLFFYn49GZnFkcsnESEt5hZpKko",
  "key17": "4wLbnTCQsh1A1dJXevBM5YdnvnhiQ7Ur3zm65ZvzDn7dxY8AaYhVDibK4sr7g57yjpxPpqAHfAhdEQ5kR1uhtLe5",
  "key18": "66Z5ejfb1mKywMYAkRqUjQQgCQvEy1ZPAUULzowVpxLiaJrCwmyhGWodudBMbgxuJhVBR6gHzDZuVXA51wC6o8jy",
  "key19": "3o4doWj86UFfyZdmdwV1dZa9jZLhg191E13ABYUie2xMeHqgdbjzv2HXzhhNsUi3GjcHg8EHSznj7SbxnHNQPfxR",
  "key20": "3MZaj5gQsd8GQedjQdjqZiJ1z8XZN3icJpAbSpxqYYvUuKyJx8F26uJSn1TV9egy4AtZ3KcCRDqASxLt8U6ZbJYb",
  "key21": "5YVqJ4pxmaPvJ3WWpC6mufSpeWte3dR2FMNQiN2GHyED6LV7yh1dPRHVE3KzW2GHmmns4wQrUJiByDAYVe9KnD6D",
  "key22": "4ZzymEF3hhHW7TDyNJdiRf4AWJSkcFtHnjnxrDErKnTirUXpfgRejd28hzHFq8dVo9vrkvP5vM11qrf8kixViytq",
  "key23": "3qDaqtw6PhRDhYkYtPwUaJhrn25bqfjA2owqBQ2t6MM5Lz5z55H96ATzKVgXhDyvN7nKdSsnfFtRe4UmY3Wu4oDL",
  "key24": "orcCKvswbE4rZR3owZeJQYD8v94Hm5ffUapJpDT7ma4vzMqLggaX6eTtiQgiMcdkMsuho2R8cGa3fKLtdP5LuFD",
  "key25": "4G33mfxT6z8hd8fSPokBnLts964T91SQtFyHEHsNeT5di7L9kf2JFfR3HQrJ2SBfmw9vmnc8KWi5uQSfsmuN223q",
  "key26": "63AyJaoEJopoULgvzN8hQuso5Zfk48D8pMRAphY9GYMztare1horYvpHuhdctAT3TDPjXKsYHmtH99nrXtLPdQJL",
  "key27": "Bsko44PYVJXf7Ti6P88LZrDz6Hvq1FbNjdG2LxQJi8Xbqivvypu3PqeLFHjZBTCAQZutiQez4BX14KkYB7H8pbP",
  "key28": "5NqQg53zmj3yvDLKji7XyS7FAqzjvME4EMtJdp4J27Hco9gUnHUvh5KpRoxf7HfqxLJ993trmQ3xwKGg95K5NZbg",
  "key29": "4ouqvQQXStj9gZvt4pTu5LECyAjNwkFX2Fm4NrMKw4Wpy63c5sieUkFim4ZgNxc4FVxjnRebKLTdUejqbWGDcphn",
  "key30": "28NfLFbQSvhw9gB1LwRrewtbF832BJi1NaMimPUevSiShEe2z4MLvfpUkCSwN9BtFYfB2jM1CWkxSeoPgewxe9gP",
  "key31": "5EsGnrHiNk7HVJyJiJ6Aqnb2DXEaKXYGWvGexzQBHBZLZ9VUGdco5DzYvCYMFQsjWfcoq2LFwrYmvXZbQD3VLGPx"
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
