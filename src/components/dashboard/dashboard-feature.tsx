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
    "2ug2Ne3CXT5s7PjWhyZaFEunHK448TotN99R9kYmFB74CgWRMVdxRFZSNADfg9HmU8Dg8cZz4G1gcjd7vyKjGDts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NeCVN2PVXtiGnbXxfU5WavyAMZEaRndy7oYnrrtRLt92oxDVp9wqL8sNYUytawePgngRAPjLnvGzEVnsnq8F4g3",
  "key1": "2WdSjWbpvript88zNpiYbrWEsUjZuYZHWPFdcorcUXQ24g6LfsTtN2DbUStvb4vxVrqHnzF3JfmVy4NcydXbaVMq",
  "key2": "5hMDoQ3nFNN7ZHjKDeu1w6p7VojZTu7YgLnqxZHfqRmrMKXPs9d6WhRLPjU3MXJzmhpBBGjxEtAyRBujeSSgfjND",
  "key3": "3FJXAWjG3yrYLh2W64L7LdbkeNvzqLNWVTyTsYzpq8FYQvZwmFwuxitCzKEaeBjcTh17cw711b8FerTMhSbSknZy",
  "key4": "3bHMhCLBYQyoawakMG7GxUUXWEaZBioWaHNyMqgodtDd4RC5iozY4hMMrFTWhS7QcwmoQibu8hHMe6YfzpFoxNL5",
  "key5": "C5J8FGjmSz6DESU9EqJAXvwwpiavuVFzwMumbmwefdap6e4f6SYdFd1kvpWmaLsCvt3o4HmNb5jXfuchjqxJ95A",
  "key6": "3F7u2auPe5HFA4kXEcdfNiVw5RL6HJHbHxmENLkN7WcndL4wvoU5zeVLkwD6RSAZNnukLoXyHFwVWLfkhaomQWb8",
  "key7": "3Wb8fKMk3Z3UDaZb2W75tKqDQ4YA7nHjJNthMqonz3mbCmWMseBxu3DFi47W3cSVPSHnBSndpSZ1yMFw6UBM7Xs6",
  "key8": "75ZV4USHWAFE2AFJzCDu3Tb12DJKrcHH4e874pVW29JSAeQ8qGh2T1uJ4of4QCHUqPdQcUxTrZxzjCxBaGP5xzW",
  "key9": "r4qh6RXvBLLroW2cbd3DHV5cTxit17Hv5q6d4zNqvSkemLctcEJYQWetY2GNrRG3kNDuoNX9SjhQ267PQsBD4Cf",
  "key10": "NGeS3R8rkxKpAJ9n2Uixz6o1WjeEwNwLMy2mq7dZCmVzhcrkbyWe2koJLEiKKiQytgQdQb7br79y6nPh45jGC3t",
  "key11": "5UCiNgJh17GPcQprakKN3P5EL8dGN1yaoWTf55jp5pdfeHiP8TZ9GHK3Ens6ChpFVHSbXb8JPHuvVkHfgdtKp9fd",
  "key12": "5Wjc38FGPv58bxz6SiRcdrR4a2kCS5F88U5xAWckSsmCjmWrJLSnqrySukKkAGTZxk4i78cAdDTjjmUmCFtkbDxo",
  "key13": "5NziM4aD4bcndXq6T9rR4VNMCuvs27ZSqdASpc79AVmKVTmp3mJeyoh58eLLPfAnL6YvFRVNAcK19kCirfFzzBHj",
  "key14": "2N7KU2mwL18Ha9UNfTLmBzi1PGwoE3qQsLD32c8toBsKinY6hWvE2CkimvdHtXFSnHnF6jUZtFTqprpRLR4Cst6K",
  "key15": "2QPPFgK2eZ6MyeX3spbAaqkGKrJstdmKPWFMHT5A3m72GvpsvyXayyDuRkBVJm38NQgjup3MzcFNmFJqrvneq8X",
  "key16": "3bQw1sNKkrD7ZxYeimtJizrFxSFTzvu6AyEbSUEhuPopgxi5xCewgDGmNjeynvRrEzTFPKkGWRoyJFHtxyNjxYNF",
  "key17": "Y9qS2SozaugRJqKQNjWFZ5jXxrz7sACmNy6tXzLeDEqA9uoTvKCfV27WcESnZR6ALEN5xagYVsnwhMuGDjgEFzw",
  "key18": "3YjphLtZx5CXCnHkf8su8NWmkJgxLknvTs9tbGQR91TZp9xciz7L1MnMi4XzYcVgRfDjJN6g9ZJCAYKu4PEJjDsY",
  "key19": "BJdTVLQTiwgxaLaeUYmmHZuPAVYqNP9oC3jyeNUf4BVdyhUFNamL2kCCbT6qwVQZ6r6L2veMMSv5TvcbkoBcA5j",
  "key20": "3kLycXHYFuemo8j5y1UTNMQXPpz1DTR6cmoCSuWYkcuxeoBcmFS97CLEHWpdSqpYCaQWm9PqjvDETbv5n9ChsdfC",
  "key21": "wFE7RAgDY93kTEa9PkYLJUQv6J6qTtNLFSwHdnuzKKrzwzC1zD3bS5d7B4THrv8MqMn2erwKp17544cH9zordrc",
  "key22": "5rVnphMKR8k8eBqTbK6utuoWVEQ6zfLXk2gzgKuUksAk5cprUtpqf538XZiiVTV7R82uDUsNaTY3fhZK8knuKrUp",
  "key23": "4h7rEJ7o2zhPzfG2iLYs9dDXT7pM66jFziMhwfzWnBe15qx2YwV2tFpE12SsuVU1RHnA5U56Gf43bzVeqjK3taJh",
  "key24": "2Eb3veYiAMRiaha4chZq7mnGqda9pzP2wW6x1Xk3iSwMcddPQ1rwgBwfyXqYABuca3eHi4FmFA4Nxy9Jx9jbJEH7",
  "key25": "4R4uRw4MnsydLEquJvfvUUqrSRbqtfoJji8LJBW7sdKr67x24EiQq5Y5m4XkByUEo7rpjovUTWjaP4zXDgFsbYxr",
  "key26": "2eCs3fWXba56Ppvzb1N8g4rzVHZySR441GVVJxAmPxUVJMHLz4P9xPtfvnpZBYiBzqEvjKX95DEYSsqvqyGTk8Bk",
  "key27": "2R4SE7hUG1NGohwTjnBsi5L4svmUi4keDX6TfmXe2SerttwTgvjnJQ5vhHjpvvdJ3t53zQDGwrj9c8MTPRyEacGK",
  "key28": "5Z2Gk2dveozUNEr2i9xQ2FMdjhEq81aLw7Vbxjci9CTTutNDjT58QpUXPXBx9DEUNHnAnGybU7mcxGn9ncJGhEzv",
  "key29": "2QPwqxD9iFeK6P7nmLnqSmSfikqCKzPTxtiDVMCioEERKF6MN96wzfGh7U5cZWZYLnPZ4HCTg9S7LWeHcC1nKBgX",
  "key30": "Hqn6ETvS3NnnFeFpVbsJh9C7a3U3YK2dUhqtx8ku5igghHfApwz1vHTKAskBPii2iLKoKbTRuDaNyDuLvW1zHij",
  "key31": "d7pg7FVsfomAQMSxmnBhrEhPFuSc5tBLMo3DjmkozC1NEv4XUAPgJ3cttHvgc1fZ9gBuHpzfzxLDFZzTaZt28j2",
  "key32": "x6hf4S5wTDhi6puqwZtPDVquPGEB1sGk7mm2gHKVdQqLSsWArUwKbGXGGENaoujdPBPh4t2SvRjL5Jh9cJtjEft",
  "key33": "3VctNVKk7Qb2ErF3YNZeEJkTHYu16ngTqH383g3tkpr6kex24upVwjphkXzA6hcvZnCfpieSN6gawqSruS4rGrDQ",
  "key34": "UcFFo3oajJ1ySM1rZ4n873ieyvgmyxyZDDW6M7cjMZxAMhms7NKhFBQzgYhYUmTq1HnQMmBsKPkquMcXrtT6ygX",
  "key35": "fctZ5c5KhRdiVh1rba4niR84Ka6syiv4pFvZPFTQ4jLynCcPLqZa5Muta2B71EPbiYzHbUkqhV3Jq34akehje9G",
  "key36": "MUYCdeG8fwRRaEeP7CFRADFoVFddxTEydYnVbmvFGzESd8Y6igdr1btbuscWSRqoMaDi5FufStASK7r7Sj174X6",
  "key37": "EKWBcvi9fYvhHCP2kDPC7SEesd36aGSnWCHHvPyw7RzcTDZeHPu12BbKUxENXHcC1wUNnYfNS7G4PQkZUDiDEkK",
  "key38": "5CUgruDRG8sQDGVbcG8YQLwrzewLRhakJt9MuLQjiGC75hmo9G7ArBW3EEwcV2SRaBVK4QUXq2QCmM1EG1udkfUe",
  "key39": "5jP8FexzxjiBebUbmZKVcA72QidGdiWDufBk2jj1QJLSQRcJpYjnqTscDDunofU8oLuDD1i6uB3TAF4wgMALJ9tz",
  "key40": "66VAfMuVXM9ziaW28paNTF4bwtt6jVoZG9x4LxftunjUdykuVAddS4tktMqetPSXqiHKbdqQBqzAWUi6nAJV9GA1",
  "key41": "3YLgamq4LDQquEwRkzdNn5w6zCzsNTcqPKzcX2YhNwSYcBn5DkmBYhrdwnjhjnfQuCZjoPmr2pQVmKXUQvt1S1HM",
  "key42": "1YZ7QnCAa34VGNhjqrpeudJR4mM7DA8TXjH4c3PZQuRGuNmggF1NtyhzHJepeBmitukLfyML7jFYdjbhiYLZCh5",
  "key43": "2xwiT9vXasy1XSNsC4uU9vZ7mb97qpT7u6fMscLnqbno4Cbi7HvMAyRKuv74YsVNXVcJeBwe7u6YVbpjBBxvZ485",
  "key44": "5PVVK17H77R5uPyfDSd5D5X6hZAE6ZQbiGJcXDpEhcdD86b7LfUudy791aqPkv4eHX29JZnTKo1VEPUC4WtKrUEY",
  "key45": "4SUGxvGswDGbXWEonqT8PKn6iV1D2usu5vsWLW3bXiKZdP38VVkT947wY19VxuDueBb6wdB9AATNLubKxRBwRwFM",
  "key46": "juqQuzM1cFWufKGUeW4pnamhH2uzzSQNeqxhd9xD1hKMN3ysWiMcQRQq2KGTYwWMgNAExiEGw7V2oRqGTeW9mQ6",
  "key47": "4HETvvF5p7gdzcXxpAL4xkyM7draKsEHzKEYPTQgYjFAhvy5zu7dRQ1sGXewDp2a6yZooq4o7f8VcY5irfdgUZqV",
  "key48": "4MdJrQa1XbUXWkRDfcc4Q4jrZdVfCKw547jgNVz5i3KSZ1m5pTVui3fwnvHbbqDVyvT1oWgWt8mvPPVg8CpSFWEZ"
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
