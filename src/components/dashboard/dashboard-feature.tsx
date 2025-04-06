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
    "345a62M1ojEJwvcSZTcDq8bGJCZJggAYY2ymRrgjJNxTWL39Kw4aGjR2UPkxDLLHYY21do3hw7LZfLZrAJ84NFnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "667MhgzJaAk9KGZmpbVWTDBGeYy8sqbwBUqg676eQyXNzxqihNYc3VjSEA4aGKvq6nzqLpXC8KfQGuCeq6hzxkDK",
  "key1": "3pA5zFKD98GVLgTMfZdoqcfRkB9NqyFRmgXvYfkexEJWvGAGHBxf5UvtN8rhQ8q4RWkNSfqEgxPDVGm5pvkjMJpP",
  "key2": "FJ6vj2ZJYYh1Sgo67jh1vrHTNqb7FTm48QUCLRxGj4tNrtvUondJitcdV6m8VyzBRW4BucozTq5sdK6gHwovozc",
  "key3": "44Y6GEtn4zAwLEe5CKgFemGmqvexMQxnSU8n1u4cq3jr2HDow7gKcrkZkv6KvNCTV2X6E49TxtRQgKpREzzT3k8p",
  "key4": "HLu3JELeeS7yAhs4qFGNmmcFpVAW8dJPV8q25cYPUr9bFs9ixqFMUtxNVkHy5btnnQxdzb8SFKEuJC3Gc5wMtcK",
  "key5": "GvvWY262ZfvfWtX6T6xdE27dxu4Xbdb7qyjKf5CbsK1z79A66PVzTNUya8wn9ekZj7EtWscp1tFiPgmnhDr9o5n",
  "key6": "PG5SauihFfwg1PxsSxKv4WWDHtDDk9YH3P5UNjtsf4JAe3cp7WwZPZgYbtpYMVVpmdpmcXJcfxY76BkQ2wGvszz",
  "key7": "2CnXWnq9zk1ZmRyhjR7n5sUzromrTWfVhhcwbCMzUy2zp1oBWzsYi1gvz9NonMdatZA23jjyuzt3W79LTtvefoXT",
  "key8": "47wDGQT7WqFgBFiDtYqKt4v8WeTxWRQ8Pv2kikbbQwx5DvMD5BkHy9CJjFMuMaBD3RCWNCh6VW3iTWSyxA4jz7EH",
  "key9": "67jzk2FixVm5B8VwAmhLUsxMPnarJFdqnGMy7wdtsR3XJJe5iTBRcAACvgAP5BLx1yoASAPtVEF12toZj3izGrn5",
  "key10": "4uYRDT3U8pwWffrAULGokvNjqiiRubW5ftKnZRvgdvYtvY9NUFRkmUKAicgQvyU8Xom4MoBFqCvf2XWiTWM3jhGW",
  "key11": "64LrpVJkaJd5iyAikvobUw7iMAohmB53USbvb2voZj2NPCh1SupJyWHsVmUw6Q3BW5wGZNBUqpf4zRs2Kp98WnQK",
  "key12": "4ecgEUMHNNFYRUW6mEd4ZL39dAfBkZ8Fn6CEmQ7jnWaoFNzh4DgL9rhdAmogBA5oR2YFvYKZKBwGcZEKaTuqij6q",
  "key13": "4rchgJFMgidhhFAadifxwrY2ch4pmu8KE3gQqxmzMDEeotiL4tgh3hYhpasEiHjxjx7tS3JtYY6nnW9gZe3Jc9h6",
  "key14": "2uLx6MsRvxd8JygHLWcvq5RPpa78KidJ1fEae7sSXDfykgh4x7jVWUTMVRdku3hJj2hc9Y8BjSLsdKamCrhighRT",
  "key15": "AS51Pucv1Q82BZoePzSo19dLWq2hj3ntqLvjYRhpcFggscLGGjSjTHCizQvkCqRah6r6fWE4wdWYPsV8JqJtWnZ",
  "key16": "58U6REvcsptfwzrqKu5E8Qsyi6dyVmngFLZ83YMS1PSKTwurtUchxJFXZfJG81pWr9jhfM7SuS1FcpK7P87bHcne",
  "key17": "3N6DyydjRkv7j6BMYXv8hSvZbsseJnqdvnxSXHupQZpJm4D2srfC57QntjuFapmvPfSH8tVEsq1mzgsQuLDW35VS",
  "key18": "3PwHExcixuVd2jQXQu4p2ZUYxMuSjoVAedvsV91XyLfnUDvDPyFpeYL2Vmtzq8gD12bc7AKHHG6YsE1J1dr2XkwT",
  "key19": "57WbLPJj34DhvLhAm3yvARtcfnSEPrcBTY9cPaKbQMrfsmiSHhY3coh4Fbx5phdvAN3k4yTDm3ujTpPBkjFi7Agc",
  "key20": "2vhxJfAta4DUv8Qck749xxo4JVrhdtv6eicsNgY1gxWm1QjXTyRDcQxgxNPs6aEr1oUGyt7oRwWn36WqChwFqKag",
  "key21": "2XiWGeRnuxnSr2cTEiLYGEu7bA7YESEe6x8LZjPKrBAE5LYE94npGFGKH8BtivHAn51tfdZEWAMkQMModqXBnnkM",
  "key22": "4oxMaEYPd14nyVNVVNTRoVrrBzQKpFrLwP1wDrt9oRLfHPnxbK7aMEyqNBV48KMtS27vEUsGdLcww5Ato7egbLxP",
  "key23": "28Fd5LJ7CLzEqeJjKdYp5QLH3EDMkCCPUtr7mFnjQHLrqFZUCb4udSCFZkhpuUGXSPwGi6EkssUQTPZfqvpTQdTS",
  "key24": "4fetTUnMXNn7QFFW3EHNSoFGKvNC77Yn6gpjH9w6VkfedHE7ytbicnV6REucBpKu2JLncba26WDqF7tiHXxuu428",
  "key25": "4oD71phWX936g9pbRYWy8YoeZ3mV8q29fyoSbj7ywu5EGrVqWj4NTgFQ5e9EQXz9wvdDHTFcEsaCLmaDmvKcAM49",
  "key26": "62zdpYwLcWLUfhNzgqZ3KMVznnASpXHdp2eYboYMUTybbYrPrCxXkf9w3xFyPAAzZoXDnP9fbLKYuiB9XUcxj4iP"
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
