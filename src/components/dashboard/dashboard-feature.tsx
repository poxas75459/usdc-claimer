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
    "5KnZ82evi39o6YiVMVrmxVDmg4yeasfUJRWEcb991zqi9Q4FbZ14wU6QZiGxi6wUeLympbhvTLzXcTv6F51cXwjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VMASXyLiz1ZxSx5HYaN4oz8VZGpAuTRTfkjp3MTQu9WNZnzX87qhP1smYXhr82UjPB7vUJiRP8wV8dR9reS8E8F",
  "key1": "3bjsaCcyCEkm8JTtdPRg2ALeEiCT1pdFWSbdJXxXEB4eBn7ipRwu7pRS8jnkRGhAgTe2v52k9mTe9cmpwQfzFxCE",
  "key2": "24RLiQNyaiSkxgn2TDMQQTACJxnXpdCQqVRTZBeA3hp1qp6vx1k6F8JWyfwRzJL51AsSGNd1nsqFNvo41EZ81M7H",
  "key3": "rasTc4aCj4mMAsgXhohCbvnSaLRdd9cqF334fFKz6z1TdtJcGouV2TZBWau3epKtXhKY1V1zc6jZNvMyWcvpozk",
  "key4": "5y2ZC9AYUJ4ZXA5uGh2XX78kR9vKaUX72hELtziN4birPvhHzmbA3TZDWDWQfNDSBDewgnZ6b9QkGqRMpj4L7CtL",
  "key5": "3Fmv6qJF7xJBxfUCrbZ9TN3wwDCTHRdUCfkxUWJvRdx8DmSe7kiQvuWpttEHhWyijLtb1hcmNqJQbUP6YDGXJ4bs",
  "key6": "m4UnHLz1ycnvDPxRLBGfCwrZZ3X36TBdsAi2QBhJZfh65YwYXw6YgVfp4TjCYDPPQcVNTWCkenQZDJjPspxWXFH",
  "key7": "247LYYh8tZWaPdo55ntYFEkLYEPh2w39y6DUBXNYi2wTx8D7iv7cP9eSrbWRAPPnD7DhjSH8gmXVxJCvWSuBdeP2",
  "key8": "2H9j813bJsFdA9JxKN1kVoBqfGkfJvFwuWdah4jJnodMwWHY6XthY7BeVACL6DmUM9jTLTTnTnheD2REr3YynRMc",
  "key9": "2qWz9QZR5MLTZ8fY1vCvmRqznPiFEGVA6wdo4ga6Q9wSkZg53eP3GahMAukSZh4ma7S4hdwFoBsoBZfVDBQU11CP",
  "key10": "46xPrnouA4oNxBxJ7ZtQWaPpjzsPqPQDTELeLQm5HtVjK1jKXF3ReiqdFzqN5s8HgqAP1yLStzTZ5Jj1CqzQ3pyh",
  "key11": "3HSNWMh4FzcEG8CPPrN23LhvvKqH1erLKYc8vqqcWCgf9TnUrfrDq39NVNr5nsniMBqykorxKxgU3Kg9uSBW5Kgf",
  "key12": "8cKrLv9vkQx3YhanXCQrdSecothGkH3S4RAvi4gJi4LuyEK1y5RfsmBRBVdVKoDovSJxL3HWTWZFBEhBRMSydp1",
  "key13": "3R2dd2o4j44iMED4aZt3M8DVqHkX24zBriUHUQ9zCyEt1Zw3vwMS1sYWZ7nWnLmmRRiaz2Z3eKjcyw7ibhUipAqn",
  "key14": "5EGf4hB45VGm9kNYZsQ88rXA7BrD646AZTq9tgGWDbkisa2HS2utuEfAYsGwR8YhvxdiMpoAMfEb4yKLNWHjmsZj",
  "key15": "2zaz2xrzLgSZLncNDHXcxfTScaZ9FYtPCvW929diCaYpsUxF6uBGveLdb9HSBogyQBDRgJg75PZvnkgKQYkNxvqE",
  "key16": "4yBsvaJ1rUqrsFcBdCRL76RL7UsYpuxb3tb8KcZixJwSQcr88E3tc3cAviR4B8CUQoqwoQFhkeATw86DeH6Qb9mS",
  "key17": "64E1y5fWxtBvgnj6HkB7njYMhgwrCQkoeg1YMfPdVhNETSVZFfEVKo4LRDwhsDkUiyACc6yfEZc5uwbwtij7paSF",
  "key18": "NFrhua2fW9csmVA7zWBsSYMbiJfcnFbTJYXaQkcbB6UrjJL4cPX9sEN8mz9uxQAuKhKMWPkrS84EAAAXo2U5U2w",
  "key19": "2MPzLmVEtjRGGscgoaQtTDZT1KnvWbekMtkzjVxye6JbScveYqF1gzyAVYoTzq4AvG9N8GbRnwSgQMickYPNCvk9",
  "key20": "4Kt7bk6xNGxfzWS7xD9FMvsk3pDDAx63GrVuBdkYMNK7dvo9jzY3KnESJ5zsREXDhGHyV9EX1ZCiVWdctsw9XjCb",
  "key21": "24bJFRGeteE1JN73dnTNTXKUoj8xP7VgA4cogXA5DKN5qPEEyhfo2QH7hGoM9VCo8HNLRYgwyDBUz2rAiot7Ho7q",
  "key22": "2gAV2yiU2dwPjdSUTwM7niVsNc1v2TquRjVKi4ZgPDNe5HsoG4YqVeMHFjU29jf9DfGrC6fJ8wHKW4ZnYzmedzCG",
  "key23": "2F5bLFzZ7z4DnxtdjooD7riAXPzVM4PD5JnKgeKzvTXv9UyH5NwHZJiSjjrqG6ZQ5ZqVFLyvsVtPo4hoFjPe1A3g",
  "key24": "4iAi2HvtMzAuHhEn6AAKD6xo81VZV6AUL4aVwcmq9HinVCQeBdHX21ACnQvyqyTjbXbgfAGU3tyiFU74ao7vw7dn",
  "key25": "vG5Bk8puuxVHr9uUHurqBJzuqmjAhJ6yPhkZgd3p1QftBVZVem9yNGcwVFPCCAS86Lq1GPqxkSkPTp4wXz86eAr"
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
