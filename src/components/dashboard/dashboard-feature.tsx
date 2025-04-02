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
    "3YgqtxSC2xLfAGjPe4qdq913wYTXouoVw75tAdCv6ruCPp2m2jRKQ9H6sWCPgWVn9xrACWyzSr1ZCPqyjXYzffJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jT9NbsPoeDfk1xJYz7usiq8widDTEciStGYsrQsMnWsZEMBsw8fFthLDyWPitF6Enky2uZrB6SJf4sVpV4T6xnz",
  "key1": "4beXt7MVJGCTiRz84u73YVt1TTG9Hj8yUmjuzNwWuU27Kanu5SnQ7oVdCW4vHKUyY8Hc2z7sdnG24uHJ6YC5ipju",
  "key2": "3V19ZueaMCfsd9xuaDPP4hrggtPWq9LPtzxz9q6YDipgyWBCmTUzxWKZs8J1PxxGy5c19wN12NgJdvPL8PyCXWsR",
  "key3": "4U3PPzBt4k6njBJwRUaPvtgzbaQh8WyX49RbeamhP5Ni6JgBYNHD3UtSsLoYHY7eK2ySTmknvu9qdLbffthJy49e",
  "key4": "52krpASJwZJnGnXeuMGtP4wfNCXNdmCNt73xVDJfZiff7zA6gGe7KHdEtUrWRN9369P8yJUkB9eaX8micaqHN4ft",
  "key5": "5ji3HcQUMEPvV4BJob9KGqumhMk7XctUGdZkzmyST3pAR8PpqbjccRy1t3a6TLYzYicEvzK9LP6Bg8uWnvtG9jzh",
  "key6": "XHUo9GhH21yec6bECZkdrGTCZTC65cKRzk5tEhUgcUS5d8zfxjNs73tQ4zKHwBQ4wAYTqgknfHTW8ev2hRGJKGE",
  "key7": "2GH3qzGJ3AkvyywAfUDEQDUznBBauYcLU1JMdskrLzQ265Pcp6Zfy8FvfQM9bZ7HJKffU37scEze7U3z5kFQNBzg",
  "key8": "28T83jf9KyK7EhabbWNTvHnUuDB8f7QEF8AvHPs9VqPsHETSYE8rPUGJkBApxbr7TQN54mPXejt8XSvF8Bmja94G",
  "key9": "4aEJ9TQkqb4bUo8ZmntdnYmezjCXwyDJaKXf47pxbxipX9L3qCJSjAr2zUqT3ZqoGsFnwxBugujbeTBxzBxq2fzu",
  "key10": "4kWfd2UUzSfqDzLwC4GfeGJhMjCKTnLNixnRC6ffA7CJmaMTtoNt5Dkk7xq2dn6NuU6kwAgpEhdQot2kK5NEWoau",
  "key11": "2mqGp6Meb4Hd1yPHjqKZf62A7n3pEEZs8ndBcEM5VdeTBhHG6128JXkzG4JzJ91Ki4wtPANhTHhiMvRLmDJehkS",
  "key12": "5x928LngnGaJADKzXkmv7xEudh86PjzomeczErBmCo4zMsLxvTwoCHBxyg1jZRHoGmCxLMirGyZeRPWECHU1vDxA",
  "key13": "4yw4iBBuP6vLqjMugJadUUU9ydEJBTrTBmXKisPVT7An2HNvSzmYXv4qhB7hfHq89Gx2KvHc9wE5QaPnQnwucg9F",
  "key14": "4uxFio342zvw18qF1LzxF3cYDRedarKpst47aqTeocwVpnqUhtrpPgXtyEGn4fZxsGwxGd4NTrcCRxmqUjCQfV4h",
  "key15": "5oK15kqd3MqTb4tp3CQWoRqKR2que4tLx2jzENLoy7c1VkUZxJJGK7yuKGNuscd7uJyBuJddJsUzB9LYT41gzut8",
  "key16": "3yYwH6uEBXzg8LPpf32yJiw8pbRiHq86WnYUfeWqyWFtuV9qUTHNx9g1fpR1DFquJS6p2wGSVs61tRFSgPSj3Qaw",
  "key17": "2xajj2pPrVbNKWYeEiTo5Pjkyy1MCE3VLdsLGNqf9qSda7LrjoxzGf5EAYCFbWhty1EeuhQCHJSQRfcAaCMMkhE8",
  "key18": "48Q5qcFbqPjUuoepcNkXuo8s761o4gXrKpQ3TjeMefqBx2Hqo7AWaEmh1WPzWf8JFWAf8LQLUD9DiRFAFE44i2qA",
  "key19": "3pQGkELzxhE9yfkD8xBK3oapLUWdQKcxH7pdAmrjN4Qv7FNHHPHGgbtWry7wbd9WQybTwLx2KmBfwJREziQZaCby",
  "key20": "5WemoCyRShUoyVsNXSXUDa45gnydStPmdmpuTjPNTRwA7BCEzNGTSBVbahHmg7APtUiNZeyz4MX79SjwonoW4h3w",
  "key21": "3w6kMntwtpZe43fU5pYMwBc8spTy27toSZLarmNt3579J1UYCuurbAsMShrjmbfMoz5ohNB4rdxd9f8pfUmR2LiF",
  "key22": "3yNQm9kuXY1cJdY62xNY1QdUvDL3FKuAhJfTgjSYRF8uYMYguC7EfK5NRqvb4oVYwjNfARGjpnftdCBXbcfjsoZD",
  "key23": "3Gdq9AdBZ729sBz4TdaxsyRMh4AmqkZwtPApt9cmaAtP3YgrSsfcokpvuVsrpmXHdSfQQk35AVY5B3n3CxVYj6PQ",
  "key24": "TKYqCb9sBmJch8oDytHvNUuaJtYgcM1z3waMqj2LhEHoM4AjdmPkZSKu8KBdPEgVWXr3Pxx1yUbh32zBpMWRuPV",
  "key25": "2fojzFvHuVhT9PrXnaqc3xPXJhu15qQcrv7uK7tYCWU9gfBy2q2kYtFD1YYR3GJGrD76N7wx9ujktJqYTjwwatpJ",
  "key26": "5zQJ5dMcFmjJsQWd7tvm8YNYmXCC6zaK5zcL3iHtfN28VjTAMErrtwseEctFPx13Ko2au23Vg2gqDRonqMhsia8z",
  "key27": "5e7YCGic8JTMx6x9PNrnnYWyyFg3bVVyC11jsVAZHeHqCsvmfQqEUAgapmiQaA7DJEgXLEATahTec3EPLqkCixEN",
  "key28": "5Cda1w8Dfy3UbZiodQkFi8cMSiJFbCZvcV9NXBaSQuKfp5sQX8qi6QmoYaESQ5jXPdUr2mEXLjZ3ZrzZPc7TwefA",
  "key29": "ivGmMMEdK1EWoLPmnaqW5DGVvs2HhLB8NwzccuhESwKkFAftM8hWXSkA8GYBGJwHPCsAdfXsfWSWrEimPFeKLTs",
  "key30": "3iAU3uxq35sF8jXofJNyMqKdHpd7SnEvWj7vmD6suRfUz5qjZFkwXfBL73CVhAnhPpNPL37xZ3bp2quGfhWBHbwb",
  "key31": "GRZ9bkLkVV1R7xYNvBU7hgbvwjj4yggHh9MAt8vAP6u6xwa54YzkevRJGCgkYAyQVz4oU98b1uWLzET7J46Eyis",
  "key32": "5AxPkpcBdYYEYzmCpDTpVvDuS8NxqqozWMZRA8bxdT5gwDaAmbp2RerYYSpxNhNyfnjnuoZV4QDwXKp9e7gwLfb6",
  "key33": "2JfibhotQ8sqjnpaUx1U37t1Udr4wD3StJ5xqEqvV1rQrH4QoTAvbZ4LbVWAhDzdnMtnYJJFTLjeoPsX4nNoZJb6"
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
