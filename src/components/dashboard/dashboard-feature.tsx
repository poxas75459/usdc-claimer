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
    "durU2FyFLfaMerGDMy6KQJXpXLKFX3JrobZvhaxQdLX9cddoYf1gzqQXVFW6TPZ8wapQ5Hq9k7NCcB7iy5vrDRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r4HNK7Kue4tD9cwefHxwB8EPHBBD8HnfFccpxMpAJ4vb7WgrMhwuGewAUvDhqmeVuB4gmRqtFFRHzsBbdVDfCf1",
  "key1": "5iMdQZkgcGJt93tvQ8Ust6UrMP5mEr2CVFtGqKBSqFqNznPi1eibyot3xCGVDhmvafhDMa6x35qkcCN3zfPqRXcd",
  "key2": "4JA8SSJ78Mw6VjvzHRrnMztxndfefiRiEtLWJHYHNkJzgso9i9ox1hbDPbJNy5nYmbeP6iWxVkaAYgY9mHqyq5vJ",
  "key3": "3hTjyTgBNwKyFxNQeJCARoKWjDcfqzU3P7JpQTQKfzWrBnHHLtLi1ve52pzA8c1x2i3qp7nkM6QHgocDRrN3j2ZG",
  "key4": "23SsX3pd1uXJrmXrJCtGQhGN4ySuE36C593Ngo4SLbmBzxRwvDwpDX4W2qpsZWghMN61eX8eVW9yiTCFQbUL4rkg",
  "key5": "5KoHEg6U44VWnfMk6K5uydbR69GQwaQSRd5sbCbGr3zi8b53wRCsVmUTxpEaJv7yRWNTosVyQhkR1J2Qos8a5jYQ",
  "key6": "4biB4XzB6JwgvgLt4Dwjob8Pvkb9bqunxcK55hP5QgXVFLaeFxQv6tCiSWA5ygFw5H5axnfvcv9mHaSFVsKiJtRg",
  "key7": "3aTwxPMbinvYtLxTW1cWtYzyh7Vo9rz745bp2YjcUPjuSUcZthnisYEaQgxBvWUxa8KmxB9c7LucZsCt7e9GJiPd",
  "key8": "2Ssozz2aqtcp6rGJpFosZXnrvr2w1hYLkKXHvkoHcaBNdqgHuVyH8NeNgJzR2ko2ARvyruYiZv7DBS33RdJJpSRs",
  "key9": "4DdpMMGZCiGK72JRmDtWFKdTqfGCL8V5WT2bokDyh6m86PkFUdEEs8J9kvkuzZRkWEqbGXxCAtxr1f2H4GM6Wr1w",
  "key10": "33ujZwT5YeA1rnhtmjxhnxVVoEhS4QbfAJvRUUfuQZYV5nDyH1UYXr1zzXaF9GL1FQxtrCdUd4HbY1zc55G2sohk",
  "key11": "Qp6ZbXa1Pm3xyRBLGr8va8fawhHErzg9rGKgsceiuAZK9SjoNYPZmLQnZVVHah2HNSbgarbx2YvZnXK64EbqpFD",
  "key12": "2xxN1EPTsmxXcfsQCbYZuBd5fiJL3nThw7tt3xQnBsUgiHD4mozdJtBpSdmcMSub94aiyfgnzWfQM7AkQfJ1u3i7",
  "key13": "3mojaAXr6QrMpnWGschMTsQmy7m9KSdDdmcFqXhm7HVmgaaq7Fo3m6dB6j7iL7qbzBEeLQBzGJcvBdzygqee9NKV",
  "key14": "4qqMLqTj6xpce6DAGeBxUvMHNWQvu2kQpjphJopzdioQYUGXj1WDAn9gYjkMdY3QkzoAYpz4bNzRi7sjBrWDhvbJ",
  "key15": "3ePgS28iizJVuUNwrNE7KAQ9FySEZPeNqkNsndwhTQGcPyfWkEoVfhFCWAihWgbZKVBddZu9E5VAmosiTBTmHze4",
  "key16": "5Fo5EgoYRPdY97TdohoNzJJFmghoFpYvXk6eyyycYVCwXtEgbEtMFcfuauGjSYwkBNbdvdgjrLifVTh3dJLtDTw4",
  "key17": "TS26QFDPGeffMUJWKMQFZoKWFq8C9Uy36tn7qsXkrUh9phAGhXdjbgkgRUNqqQHKK6pnpuPNa9cfXxLmdZ95zmK",
  "key18": "2Z146e4myCkBaFe5Rdesxejyt5GKAKrNs8kJBbMkiMM8Jj48qHHyZa78eSybun9e1GXhQSQMS7JZKpNFnVV8tyaU",
  "key19": "2qrykt2z9BW2N1QhS6hYM7E8pN3kyA9VutE376vSgj2P7s6pF96RvDU4jGXULwYR5AnrNNKhr73t4cEvrqVYo97F",
  "key20": "3zdWjAegWYyVusuB1mvHvurDCMVfsjTHusGWNARtiT3LRmuoDfbNg5zpVHnLLMqE1yLoLeMFuxCAzg6QEMnPNdYD",
  "key21": "5yLT9zLo7BRbYfZRqW2PFbR5MsnJiV8kEfTHE99K6o82w8fckTfCNVQRpsi5pEQx2C6XR2A5TZ9iMhY2XJ7G6jff",
  "key22": "5CAR3iJuUx3i5Qzp8vd8n5JqMPw1gDhjgPFMHj3toxBcBNVzbs6v6jKRQDCzeRLjLBn7csJJXzd7WXc5V2r5uwEu",
  "key23": "foum6W4MzWN6sRwJGe2yFPhkppXujBwtDzjB4fEnwQFL1VPQUqS9nCabWvJuczW1gM4E6nznnruqTkcEzM3pFna",
  "key24": "fx3Jh9naywfmGksNqnUhMg4rfsDT9peNZsK7aGnCeWcinUBjFDtY2zH6Ko2qQKbcuMJjw9h6ud9W86zYFyS76N6",
  "key25": "3fAFiCZdBejX5aFrLHbD5Ng2kVYjV5h1FTjebxMrUyiWmzLyqGoJUkqmSvP77jQ1VZVeoJVKDqLxFw3P92wSnn31",
  "key26": "2RY2q5nHUxEMXigXM8CV2JKsHBymCS1VtUyaC63hcNXUn8kQXPoL1UH5yRzjf13adpg1ZBSLuftrj1fuXAuqbKAx",
  "key27": "46xF9DmKtvHpNbUvncBrcSLSLbSvCpPbVGzKNC6JAJb9SWTMnRxL8FaRxbeLhhU7wqrAaTm4ejNp8E3MdczHhBdT"
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
