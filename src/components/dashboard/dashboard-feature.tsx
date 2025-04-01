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
    "34KYrNCRvC4jm5U9RrmpiEtHxcnLUkHroxnCKWWpgLVNQjFJLvFxyMJeErQJzWWsqr2vraienFY2vCvd4xc4wS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KN3jNLGQcwjTyeE6zB2hSyV531WzWLXAxbVntVfwNQCRQiMcXC2mvk2xkfCgUxo8kKsLS9Pwf4VvS4chHeSTjAz",
  "key1": "4EQ7XmAUpH3DuBJejdTjBpXPkPwyePMRiNrydsk96GjtFY5G939f1iJbZVDGx33BhCaDdH1GF4kX7FonfK85GE4Z",
  "key2": "2RfGudVz4jYSAXa72Gt9VKNMzUf1qgQKhnQv1Bzaukqv7FZoC5PstMZ9geeof3SUZ3EFr3eKUnYbzQS4uBuLJcGs",
  "key3": "5NeYFBHuoWiamRAwtA7EUU9bXevvu2iTTb8uJQVqGhSHqa2SdQjCcsp7Y4BdM9Ax3UAzSFwYuiYhmgsTfWeA8jNR",
  "key4": "EQxW9bDX9SrQrjPLuZpp4R6qhj4uMEGDUGWifb3fYWkD8E54uAkXeZdNQpwH5RryQqbv1fVsZcX53jt6vh4ExpE",
  "key5": "4moxt52A9z7jduW6kG7T13NQTRd5Ww3SiKVziP3fKUcfGH3u17VESoCC6WZmg6VhQuzaJ5yNuxjZYq4Cofwduv5y",
  "key6": "2ETTkUqVd2v6RWutdtHc6LpnwwpyGgU7N8AfhmeoiXZdgMC3Dik6PcUWFLBU4MeMYZY6uyWiGzLmhRfcNzMsFgBu",
  "key7": "4nVp9QkLswrUKqCZ6Yfkx5oJ8WmJTeG1J2cSp7czDC3gQAPL71nDhGSWYrL68TckbV1WvkBmHDjgtv1p6uRXGgaB",
  "key8": "59guQhLhgRuG6rmwTY8J91ztZa3bXWkhFrKaqwi8BJbUKnETa8sh3ooyNG2yUH7ZiPJYjuYTHmJFPdHLxWhRhAuY",
  "key9": "2g7Dzo2UGAjekfEjhVvmhTdAnwCFXV3oJ61nSkRAZ57msiuCYxv9T1Seq1jpSriZnXmMVZSYc2em7hCY7hAeJtWY",
  "key10": "2PzsGptsWrosQDQyauYmoDZTg4bTYM2sXJfJYsTpRjTEB8hcUz89vAhPmTLUj9DWV1zj2ygywgGZ143aehSbCARe",
  "key11": "oE82YJgWn3gk6V8CQ3NaaeYJ1mvrPhUFBueRUq8xGpmQHD5nZpaB7XW8mQGTVzWfaSAyfCfjQMDRShGkiCTs2nK",
  "key12": "8s5C6UCmM2G5s9gXz2GsfVgLCixMq7HkgzUrMxqyuMXEa8FYrdbd3Woh1tQap2nfKwV4rEHhEUR9j3txF1VGkJn",
  "key13": "5UhfJxc9D7xqH4cYmg9NRtDvmHYiVtMEfNF6jEV5TUCDKN17JBBZNtErLvE43d3XsWBMCBwp3E1EFc3Ks4KnsgDe",
  "key14": "2jJWiEwySZTVdHQU3hLqTu3nPV7v1yUERWUCHH49FmUrwv2J7SJNqhWJ8LiuzARdUMqDGByzz8vSZX3J5DNm1TN6",
  "key15": "24v4RxTzN3hUyCp9LpvKpiA94oBqrr38VkRjVCQqQPKqadsSx3NjBSF4ue48YYH9fUgRXF6hTzeExMqcaXXjjNfM",
  "key16": "1iTf868Ho8Xbr1TTvyGUJtQ2GCH9HbF21fAzBaKkquoMKpUj435GGy9f7BueAkE5PKQjSq45kFHeTVdnxPc4fSr",
  "key17": "5rSzyTGBQbKF2cy949Zzap7jv4ETz6hxUyaYiejQ4e7if3RtzSsdgfEZr3fChDzfvBVLpsjhPq8kFrVmKhiJY6Ye",
  "key18": "5AsQxPTwrEG77kwuCK15JPTCqxwDSN8T9bmQDDTeAHsQzmZeg8gyEseGAP6whv4SUxipTWqdmKeqFsUY373MJj66",
  "key19": "feyDF65syf3nPniMsax4x9JuMhw3zRGi1QseGWLgYnRBnVULRBobd3cgxPwVbnkUaEaYjakjdsL4EmjFYbadt9P",
  "key20": "5cUdg48PrWDvHEXmZR6dXc8scQLuopFe4M8U3gJuTkRayPD5jKqcuY3JVbuAtDBFwka1F6QYH9LwRzGdmpBZaV2H",
  "key21": "3otrXRbvFY77x9U3bNV8EugXCqtPn1YWVcVa1J256m5TjZdUxpNBjr5GjyBMkMLN4xH4iwBkzQmndFb2iU7eqGdf",
  "key22": "jiUshXfWezUX5ZWxnAZApWhhiEsWvk24o1rLAbW4RtuE69hMrUHBN1eYpBwz9u5acAWAaBWhL21K2juHqGT3ddV",
  "key23": "NsPgYrAQR2m6DV1E7y6y6MPWP4c84rEBewwbP36Q1YfZb2Fthd9GG5MNwnwoEPoyUQLcXSjEru1cBokYbVYbHRr",
  "key24": "YSqGThnf97WpSmyZxiNC1DfpQ4GUvbTXNu7sbBnBMuUZ5GUhPt2vBJdzCYtvpEK8rVjkmLpDWXT2GnEPJhkqAy2"
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
