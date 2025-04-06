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
    "2Y5Vq5uQEnHGmx7UhY2eKxQWxqXgXdqVH9VcbZGCc1EWejTxTu691buZ9PhTQpydtcUzm3zbr7MTNYVKPnSRRweS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YH8g9BGzNKJ48cFiia39qfZxekw3r7vdKfDdvcfjDAiUNjtjZKYojJwhh9TtAKZX8gbnejaTxje4rMyofqzG6Hr",
  "key1": "3emYaNRajH4XHxmSYZRMhvcefaGarmQuvwH7WwFdnoDsv8dDAYuBk1KT3qS8K9r1uhdST8Gin8wgw6ZvK57k6NHj",
  "key2": "5V7qvdN3Q2Fjbag6ySTqJCt53xRFCmwnofHiZPXYw2Qt3GMT6vGLuP3YEzhJEyXN9uJq9K58w7pzSdnhuhPL1LuA",
  "key3": "316FrtYUyeFcDHQyRKtPjWjECXkjXviRKf5zUuYrNGv428ZkGgcMEQkTHaHvNpM5Wr3pRvMVquga6ffgyQqrGbuP",
  "key4": "5ebTLbgDEdHMrasVEawsj764SkJnhTTdYUG5s9pR8gJpz7xyYAm354mTwLc4qB3mXYh5bZB4GDwrEcteKM2CkQ8a",
  "key5": "2m15dZNPy9NJUX8PWrC7X5rvqEUCSWHGXYAbPBb8tgp1Z3mUjxHMWDtTZRotk6NLzvJPHWhUKzei5AyhcEbp1eKC",
  "key6": "3TgArz7wX3QHdpbXnPeiY3JYjoRvjQ9Ynsnu1pyu5BWriKotx6shSkqCehciSHgAfeREbbNdsEcKzZNuSe3jBbCN",
  "key7": "5VnLaga3Do62WgHAs9t8bt4Lq8X4yoZ5X91N2je2Jh6XapAfnS5QNoQJqEb4oBfE6YgzzinSdoGZp35Wn5LxX4CW",
  "key8": "4iWyR7dQxLw8XLv4zV62mpwv3RiHmDsbMihbr1j9eA2ZaYBErEKgkfgqdLSnDkwZHVcad8XEtbYqJAcY8v9NFhnx",
  "key9": "B8ECHXES9xGSYeGV4WRbskdfvy2Yn6xQADRDMJ1yK4EBhob7t7Zzjdw9XzXMUZ95maG7jq1o3m5fXUFgmA7Wx5F",
  "key10": "649JZWiwzYNkfLxZMnYXsZiqwgcX9sYrr5ZADK3np4EgTRSpFjJcjjUEhfNCYhEnKwKgfiVTo6a3Zote7uFVm9qL",
  "key11": "3RC9CopnJR8ekCpdLB6tVDZY1btbN8BQ3bbzmqKfkjfhkiwz2p8WtoLUyWSAAB6a4Fbif1YHxA58TMMEgDywb2Ny",
  "key12": "ofKZsdSishspKfj7Da259n8Fi5urqp2JrJR3WGZApDQHneyM4GczRRXHeM7DKFyRRjZ18QnxUtW3GWJedaxAHg7",
  "key13": "2kLjCmEN9iZyRbr2zkVspSi3AVJiYxSoV6iUwJQQffWyseUwQa5BsZRvC22sRVTXGk8UkH9RdS8hz5Qb2T6zSjHZ",
  "key14": "rAqg4D7tNRYLnhoDg5ZL7soP9odgxti9egbUA9q6rQNo2Rd1HiU2ETzyekTGrTrgbG9bfPp5Zhvq4jNe9qdw2AM",
  "key15": "2KuDsziGEmEasG1s72dYu1261SRSVcpG2bwofCw2NtaBbuV9vvwjchWgjQgyFFSoM8ykS67fnE3PmUbidicZzmM8",
  "key16": "V4fi76n7qgHwxNtfWYQKJGMzQMXhboZMnsVBVNQoncgBDdYEBBQstcJRHHJHMZwssvngSdpPcvQ3D6qwZg8Z4uM",
  "key17": "2WDc9Zut1KUCdRSF4UAKnuupeW3MTNME7QcWoXnTKs4e3hLY4Qct5UBwTevJkxVt4KGXSzqXQaTGpSg3QoKKCA1J",
  "key18": "QWuYmKU7Tebp8bE2pT4wuUoviEYkyJZRcrfCAhKYRqVbz2M3jUbD4SqxsdFm9Uuv1vVJbw7knbEKHg7MVfiykEV",
  "key19": "4Bs3bBAq9wTACk3ZKyRRwoy5FMsc2dVHXrYkjUqgpT4BiWUQLEwoRyyfW6nYkGocbooFtBp5Npm2aaheLpEnLLE9",
  "key20": "5enrRtDp8EeSJ5U661YQY8zB9GGKxhMWjm3gJpghYefTk9bu57sxbJVw1pCNwvk46gPRoSsk4CsNU2Vk6Luf7gVP",
  "key21": "5kvxw2DbPjetk8QDLKKk5F8MLPVUfuCXGYNhe9GKdgjw1fj62DcvmpxaGtCSkbwZ1TUf2vVoNvzRmWEhYcThN3Yj",
  "key22": "5dQZywVB1uxyn4qaEtoVx73NMsEnsAcmXtc52EwZ9BPjqi4TrRmXaTMajsbCJ6ME6d6kEnXkRx8tBJPMFyVFENh4",
  "key23": "56J5uHWkJRJzeBJwc9zpHJqavN2J28kvGRamKkaDcbCiK9mDVT5kcjsv2dERJSzB9N1YeKpjWVAXgp7rdSFJ4V1A",
  "key24": "2JrfQFuEkGc5Ts3vm12AETrMjKGKMG9VAxcRjFedALc3ytkzDPJu8gVcSTbConnWJrXAYrpxcspTGiFd5Sh8MF1M",
  "key25": "yt4dJ2iiwFoZRPQFkNoKxWbzweZrV44WxAB9AAKc7SoVyyjjoJv7rTRnN6M11xsB2GrTTwLsLxP1ti1GzcvPQor",
  "key26": "hE7wJBpnzFd3FmQ3yTEDvwyWa3M9af76VjSdPKZdvUQhKdx9JdkqQUiFJT4Wd5obbYw8cgTcUBPMrKeTTLNZHP4",
  "key27": "2yA85FrwVKQh9pUHnwzumejUFRtPSxwAPwNyree2vwuPeynbn9pYLZZFku7qtKx17QG1wz6sdKUe8VqD5fy6s7Cy"
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
