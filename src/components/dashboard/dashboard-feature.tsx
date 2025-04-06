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
    "4YQUvKmdaYuFizUf2YV6MXuv4amHkVkVwVWVWEEeq62cijDnScczht6RX6m1Bpj2JPh5zVRuBYcKUcW37RQd4FJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ypaYkzzxxWk2hmaRJeycm4JL2PJezM62YAWnvkjNjQQPTXiu8AuaFJ7UdXxs8SK7dRc3tB3jXznJ4L5z5Lc8CoQ",
  "key1": "21H3QPPejDV4aEJXcG5C2dE3J7Jyh4JZiUdqnmqmbhedBXcYXyLVhyowdKnnLUDHxmTtYvGBdfyAtPpEacaDujtx",
  "key2": "5jmNx5BrnLmEbBipHcraZbDQerciqMeYUbroGgA6B8ux5emFpTHm4VCe3g9AeugodVE1CJY8haWwYuiUF3N33GKx",
  "key3": "3GX6UjpDwXBi3ZnX8YV78E2K5t5xwQa7pYjEwGjzDvLR6sHB8Zm7skMW3uzE9eYkXWfRJrsjXjezZugXZsAet9ux",
  "key4": "5cLaJNwn4ZKk2FiZNF6Hs1yzk1DLDKkQBAbwrNG2cHsPmoD65wTSe1HUHXLkPqmw1iJqijWt6cLra1d1hKP9yRES",
  "key5": "3s1ZaMPjKrvkQCiKpDJaxnd6Pt1zxNH6ZDzg2G1Se8Q8n6WJN7a9BYw1VuKZvcA4raW3cAX1UsDGzQFpvBBUQNbd",
  "key6": "52i8bn2xanUdFe85zymubCnzzPJFYcURWGXv96PJcX6zszy9sZYRh9R1eeVysoFT1obf5x8dKURMtoj4AmqaW5UX",
  "key7": "w4fzRqn2N2K1i729HAKazcCg8DKqBdTYkRUMJGeBdKSf5v32ahZNqX7W1nZ524cu346ZbKYXuFafcUDDjSaXB7S",
  "key8": "3FG9pGARGQW9DcURZsRjU3ccCwtNZaDTrPdDC3P5pk2bjWLXZPptMDysnj6j824p7BGrAKvVQVdKZaAh7TBNPqjX",
  "key9": "2ya1YrooN6ueAw4gBCzp1LpN7JUQ1Tx6nEbUPEc82SvT4nQWnA2WUPLsnaDipPSNaFaFNb2rtHzvpwrpfM8bTdNQ",
  "key10": "2bSALJNbadEh3zpZ6RXB873W1Uit65hFdoi7hNoajkj3KPCGq9r9Z2m53hf4DeVem3WXNBw99BsaycYtPzz4jtfg",
  "key11": "WfmHZLcuks2a1Bsx6rJLpH4TpzewbfG8FU4U2vXRddwPvDWwX2EcvhfjjLAcxALdu8TWyfxbiXt35vUUxxsyGYy",
  "key12": "4yHe5j4KtxjwHSNPsjcb6mZ7mKahrEA4JChPsZupXN5FYeeDwuUiKRQJ2AqLxEnhiBPATYHERv1vet8TNVe197KC",
  "key13": "2qwpWtGjbbgBap8VHfyDjHUKyeMzaBv8cMT8EryAiyBmzLqZpZxy522cqn1Z5b1rLyHhrnjJTo7iuLg9rjquAwSm",
  "key14": "4Jm6Z3Q45jTcLcFRvcwax5GWfjQqP2FcdbBW11XS51E6h8kFfj2eTH8736fQMQ3iikJ41qmPSS7p3AEky6GKt5cy",
  "key15": "42PZ6E3xjA6btC24AcGDAX2Z3fKEbe3UG8fcYFQqXEXc7aT8iJkpKzoKuBWUDLLaBNECU53VieKQcKw2SNPZzvmx",
  "key16": "4sJx7wc7PZB2fg36fzup3gC6wc4zimt4ZdVZXgzpHEi4WcvuDvW77e3jDqFgnwmxQNKGzGZoDdVANjaKWzq9jQJZ",
  "key17": "2LLF3bHQcXza7yUaTstv9Z6A1ho3dpjfgp9FTDy8PH9LD7grWhZQLAAfib52qpK1NiREVTDjJbSeczGtzH7uCR2A",
  "key18": "2rwhSW7rCGHncZHUB2z9wPYCWWaEpCwtetioXk5LA5iua3SgyVom3ditrjtVTyJKqxa2ykdiZvpfYJgsnMbpgYN5",
  "key19": "2hyhSk2yPy87a5MxahFGoQ62XeYcvem37ma7B7ebq3ME6nxM5LVWcv3EDk5xPEohducVftZR8HJY1KobRK3aoPU4",
  "key20": "2a2fXDon9dNf8QKCi2ezZ6xpqE79vuu1DREFNPnikqWnb8YbhoWDKkRedCFGVtJKV7dvoAGArC38DvNrBDwzEaGj",
  "key21": "jMYM7NneFPoaVeXQKu9MxHbpmiCKrLdyZbyP3bTpvfU9fB4wLTmu8hqz6vYM3WAN1Y4sKY9Xdj4NREiEYnWDJrX",
  "key22": "5xBePY9HcY4WG289Parv8SBh8UDFa9CQPjyR6AQDCGMuC3ztvUEXCR1aLnX96UxpUjABPv8Ca6NShFyQGq7Hedn8",
  "key23": "3BbtbZy4kjTyvw7mEzMPSkG1Mpi4xJ24mNgDP9btKmvejNtX1KdKUJF4j6osCQxAPGJmctKtMvsonmBYBxoeFQvk",
  "key24": "417cTaTAHn8wWXezhzVAWHUP8139aC8S3aCHBCL5k1FmfBwksM6cbKp9oMMe66X3vSKtaixfPWXntZuigK7LGP1Y",
  "key25": "2CK91EpTuEif5WKVUBrnLD9HJQnJToB9sL2FXsUiV1rgKCpn8AV9ErYUpg58wrgcPAPtYXvdyPV4cKCZsos9f12h",
  "key26": "46njEoDFXsC6FMrSbrb7bNfSJakHK68mJsZFU9j8V9ndsw6rdMXb32f8xxwNMCiDg6HXWnQyr8WnYZWrYqYHqYDA",
  "key27": "4HStSq9rVyNK1jZkRb9aUiFnJS3pk9DD7HxmqHn4gnirsN1UMMGQP1xSAqT31ppLFuBCwR8uPx6zS3AgSkE3Nw3i",
  "key28": "2BhuC3wjw3Cgo5V379DX6zoPzr5F7Z6tvEzSfTetN2tW3EFzv3ZgBP1dr1XAjqW8YzdmHJ67HLadgVfiXz1ke7zX",
  "key29": "449hh5FWCNQdPQFkLrytYCTfbAVU4SLotsSDJvjLaqSxDxzPK3wUnwUuGQjnisACRKpRwgGmCfLxQS67tzo4LQ7",
  "key30": "3MrabbPEvMf4Fm747KmPmALumCxVZBWogeWV9kNASEwvkN1WYgmcSXCzzys8SN9cFooDY6QLBDaFZzPvByT2xh5w",
  "key31": "DbWTY5otbTmnjmZzvP7ni8c4p5wjKyp8qhms8gRdzxb9PyLp9FYpdmKLyLqEhR2MKknaQTh98Gt3oEJM3WhmGfC",
  "key32": "4uA5nDdMSjkjx1vcZHozoa6cyZpVv5r1NsUfqBS4csJGZB2qgeBY43rVBRkmAec6zWEpctpVW7gRBFKJHRToJzNh",
  "key33": "54udBKd3S99M37FDGrLiBKDgoCooCmZKg5hVDriUQ4L4dnKUdSE7cCEYn7aL9dUecJS9mWyqBDVn8z9zXDcDKD39",
  "key34": "tFxLwVDzaCVjm3YLFQHhNhPdcAGRcuE3FsjuTLwmuPWeVfAWfj1YGuUXAWy4QdTz5sH1xVp54W5f5tESvUQoCfw",
  "key35": "7jQKRksUjEjuWsH8VYeUbh4f534n1NYBcy6ZEnFkk3WAY6eR11tbhEg5MWQ7MVqGAqMXiBg67pDUV5hohcYZeZa",
  "key36": "41hQMx7K6iYnCkv4H7SHn1bMjxMBhVabpDK5Bm7f8i1PKvkUAyfbE45KZFBTcMmT99dyK7rTnR1Er6WcaeC7tFia",
  "key37": "5RdnTpipPa46NoWuKmKkDcrCLaGG8qRJezDaGW6F3ectcjLTCrUxgiNp9oCW1aY8eWjXBTd9A6rEwECYRdQ7wAsk",
  "key38": "3F2zXNyaoLRY88MRa78JrfX3jATcTQS21HuRYMcrJ1tp9tVhrQ5MrGxVzqtLUCgBDaowdS8XWTKwF5DAXeU2Yp7n",
  "key39": "5SwZGbCoP1XALXjm8ZN1BMau542YMz1y7qHcbFRjPRgu9YyXZS4cY81pNcHBMjsE4EmW6EsDRSAY3QucF9h5reGb"
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
