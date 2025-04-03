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
    "2HP9m19HJdyqYwWG9JWSmyEBVc85GeWNNJnF4vD7NuqtzAf3bjpw7ecoybwRZ6vMZTHxwLmcRf7nndKWChk1aCjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pfMYyQJppckxK8kd8ayBtGd9MN9wYkyp9dzXRgYoNjWUyH1Fbv5gY1skPeSa17vkaHHQEEauPEkuQi965bAqx3B",
  "key1": "2qvwbVprL8uhBMFvnAA6usjvU9aW5dSjqGqD7eihxwJJQ8yoc1tZTVGLrriUbANHVCaQrcABr9cRCYEuho7nrW6M",
  "key2": "3DPkA1NpFzxxKTfqGXendhstf9s3kDwe3U8e2JUYXg9xstcJVWroRvRFFqLYucTaCZ7wLP66WiDSFDRcR6nwfiWK",
  "key3": "4DyNthDH3XGA6Dxna1uqRHFtHQdbr61o9qrTuznrnsyYhgNoVkdDvdfYbHEMVovaMJ9bBGEBi1RU2kczXoa9Hh85",
  "key4": "2sSpwMJLyEmj65nozrvrQrqd3Cws4fhuvUQbbav4gmnK6ZegK5ejEUvPmjpUnzQKNTS9T5uHaB9TvgzruqN4kHP",
  "key5": "53SpN3xsEfrWhfeQipHY32TRjV3V9PvQEf8StZWQwNrQcWAaJ672eiKxBd12fsMVWPpeK2b3UXLF5hTuC8d9sSrM",
  "key6": "4izAPsKRhDT6Hc5H8K1fGNX7cnE4LFMRrd4GXEWb8iK1SYVZpGJn3B5gwa9VLw75hP5Ygd6mJ65Ahj2CkmeMSRAB",
  "key7": "3drLcaBDTsSjPtUwYB4eNzXKzVzRtu2dTaG7PfeCs7zrppVJb271hAEBgyNwud1ERuPr7BaoV4ADPfkMzHz4ZdEP",
  "key8": "2UiTTZfmbmfbbw5AYtjxFZDGJzW5wG2eFhbmGdTbj5xfgE1WWXiyM6F9bCp4jRhBPiZpujJMbvFXfuzgdT49eVKP",
  "key9": "4fH6y3rnt6Uzdbf6Nd6ETK9v8UMgi9TkBezmpnHnJFVmWqzhrXQFawP15jBqPXwaxQgzEynNHEEq5W8oG4Gp3ePH",
  "key10": "3bgnMkFDhzbiB8GPCX3CsvofBdzNu9NvwSFbnnnocXntB6GXrqQEbfQkhvc9PBAa6z6p43pmMgiAUc5VC6qYJt5D",
  "key11": "5n1Vb2WKLwz2KUkjWFpxtehNEY8szNx6LjF4TDm94xdvahfnc5Y7BuV97cJ35gucau8TLSxzzUGs1VGWyLK5qgtw",
  "key12": "53LRXC8sJESuPRnLsxFuuKwWiybGy19v9cjufou2KcEZh6hma5nWshH4gDuc5Ex7zL4wTzYgd8k93HJA5Afhzidt",
  "key13": "HarGRh6UeY7Z3QsGDVuRTVxzzV999svkkvmjKjzuW3dgRx8KJfYBazdjAMwW5p2L2gcVA6FEq9rnK9rqr1CF1BC",
  "key14": "4WyZyKBy6zgcXFZiAYcvy4QDvBiaJCJReNn3uDpzcE9jVn3BW9mNPjf9iFcxqX4zQF8jNgn2TNdX4V9192C95nx8",
  "key15": "mjSW8Q7rWP6sLEqYmZ2C7Pck3nMXgtosd2bkVprRKg6vkCMT9VDmotVQCy8neXqHQzJD6CocT2eabrweKmVZmvd",
  "key16": "4AjhjCBtvv1HdtszfTH9URCkAp5gU4jFPFyEgRB5YZdVmXRar5PUDoZMv6hg6DdLYF3QMVqRyEkBMVXmvSNeaeXu",
  "key17": "rvLa599GWuc8ZyxszbQxTRxzL78ukCYnn8aSL5ESwFA44zmyzbgQWH8KoAVqCTG4HyNEdj9WLUdLFKcgMM3SPnP",
  "key18": "4S953tZK2QNcmY9XyPWYv4oMdef5V1MJAk5wkmvq7r4CwSP9YfGPfqbFu9ezgRiePHxvqPgp9yBDiMCXLAn4bjxw",
  "key19": "3CEfpdLQ6DHHTvvtyGiym2gfz76mowZTFnvML2hZPn7Qa6njt9oPzUkXaJDcfMUQu9ShUBvfphD93tYpFgJp1pmm",
  "key20": "VZQU2XAAhpALQKQpzigWnfSiCxABCniGGiUQT6q77xGf6fBz5iZGiUpp4s8CCjK2TtfBpjHyB4RH35b9LgP7BNM",
  "key21": "5PPoyxx5TS5XHtiK7m6Wdzp6GZrqbbXer41NQ9FPFEU217AHaxheJDxJqRy3x1NDGAQCzJftL6NJkLk4WrCALkh5",
  "key22": "48a1zCP6rjHSn7McupYaqghcDVZMsTmw1WWiUzpLuCPUc5q76Ekg9whe882gDQE4cnQ6ccw3A7qhTkq9FyCxj9yC",
  "key23": "KiNjSVqyzTKzwfJSsPuZTYfJo5agy74PqQTCFE5S86BsWBskyWCdUjr63nokg5dXqsePUUugG7MHKmb5N4U3tAA",
  "key24": "484qUdcjWV3kVaQedKDPEMj2pXbyD3ALfMQySu3QWyi1HJj4UZ1YgR29iSxmh7pvH4brMgDrBUdgKSybTfFbL6fs",
  "key25": "5CsySMXuN147nguvoPiN3Z2tmCd1dvUuuhL8mf9Ch13FJ9Zyt3zfjig7Ja5W4uYZ8TzH22cibQMgXG7wDKin81nx",
  "key26": "pd2XvLonrJZ75pz5mnA2KXoDN41uySn6m11y9NNjRXLG3Ki31utw98s6nhsJA7GXqB6KN2yxfEQuWPoQtwoXmKx",
  "key27": "3yzXwJoTdj3z42jyDQhAbhFdTL7vGZQfDAToVS9qQE2Joe2grkbr9rGkUa5hiQLsvTmhiw9bUUeL7XNMvAVmYVi7",
  "key28": "38szaPAR5JgVZi156ER41D5cd4nsvzCe9XAJPuCvGcKBigasK8oDjydzDtSEULNK9pkuqjm394JabiNtErSUqBjg",
  "key29": "4m1xorBeQYMC4d5KaXwx3Bq3k2m1bR3yVvBHcsdWe9YqaHSV8ePQ8P8Q5Zr9HvdipDN8wBakrVQaEn15RHb3fYEL"
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
