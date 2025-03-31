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
    "2sNM7yFd7e3Zv7KBETHxVjiV5rj4QZ5aa8MZZ8F9UCpUhGD195pFucEaKQMQZohVgh1rxQiAHBopfQnPEDetx4Ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WbGK2f1En4KwMumbuUTbbaXBur7LzHGBVYD19EhFyKw4KMBj7GddNXyekAyN5bgnbK6cWpYfscxjdsFaTypARoe",
  "key1": "24G8GcdwDGPRi2kAiQGW1N6BZqqNyUuhxWE3uHea3XQtNfSjcVKBjeTQtx5rRNNfPvjPzKjXz4qbZfo3BSMxSRwo",
  "key2": "3binksLejEh8k2ygEZ2yBaGLK37Qb7XQo6UKbaTfbL9tDygkmBE668PQiofwLzFPk9r9uqhJUCgX5wB6j4M9cD5S",
  "key3": "2oNzbgCxTPKYJ3S9myfRQ4dfcT4JnqwQznDZacTHQ6a8Qr77bq6AL7hKRLyqbCwHC2Kd8DBrkGfPn7DKJPn59TS7",
  "key4": "4xtBMh7eULiT2uoK3nt17heN3Wg2pVasyP1Cnt6GCHmLuzCSw7gE42yBhcVLm2F8nbwiKPWFsxs4NhG5RCsGhv1n",
  "key5": "KGUcE6WFZuV8SiybnC3wat7jkoT7M7ig8tP4ZvHJ6j7YkUAs2etx2Pop7SUHt12iMW59qV7mKvpm7JfvzrMtza5",
  "key6": "XF8p7sRypY9vyJS3vdWXy4n3ojHzPgrKs6tP1agTKbdWQdm9xojM2zxUhyHRmuZUMzeZyrL1BesHgk6rY49keRJ",
  "key7": "7CUkoELNF1P6D3TTfsrvcvxWaBBnWf2Fgx9EFKbb8WytxvXTNtobgBvapHarH83pL4w4bmtppkhdr1weevz5p12",
  "key8": "4ZqQVdQdU396A7oZa2zerVvED13d3P9CbNupbjA9bwZQkQe9Vzoa9wXXSRFfWH9aTeSXZWqqDTZbkwuBG1YzbcdR",
  "key9": "2zXx6CTes7HANcx2gksTHxmJhb5iiy5VVu5Mvj5Lweo5QoqYGLyKb4uGsQRiQAfiN86LM1KGvqChGnX2xmyXXYPz",
  "key10": "5b6DeHwDJhWKJq7f9PT7hFzw3Yjwzg5Wyo2LRDKQWPQbCXqY8g8bY2JKPjfN6vden3ztUg7R9wq3AjxxmfFAgy1i",
  "key11": "4QEMJ3pZAnnNJnsku8AZtSNJ6DMDuG2E93bmANaETXF4hd8jeihYtePu7Ln1sRC7KjEgcG6kNjBsWu36UxQwGohb",
  "key12": "5MT71nr7hLvzyZTMWsPsMAbX6phdwiF8GyjLM4xnijjeffpqLLFq5K51X3YKdEZCAzXkg3GWqtLKJuiMbdkHYqjo",
  "key13": "4qKTcWQkAKUzkDViye8XtR3R4XJyEvaKgXgoYpYB1LqdzAsV2evV23eSCm4kTj8v8eXcAUeEzWMrk6QAVNcfG5fG",
  "key14": "4R8dKmbefEKL7YJXwNnkUEtds3x7jpmLv8JcoVn3K51ryXKKSCF177v3yksmGZq5YWEcWYeBPicrqB6zPTmL5Wtw",
  "key15": "4dRWk599h5u17j3Co3CKkc6aR4mc26d91s83YS3Qytv2XLSqi4P3YtcfukZypRogwMaDnqhyS4sW6FArcnZyzcG3",
  "key16": "422emsY51AM2FBB76Nidc9P5fBfbCn3676KjnNoT1PhqqKkj2sXZTbWVZ5zZBjbQGhU1Mja1vC7afXFY4bwDaSap",
  "key17": "4SKWCqLsFrvXzeD8d4TByh5Nq21Czdc6GY9o31m4ttD8qSQZsEKsUCR9t5uXVWdAdc4H5rF5ETjK56S16H8DV11S",
  "key18": "4x1NyxxFrC8grkj8atNzWxk3cMici1R2yzXaW8EBG6cUqmAzV5GV2oqwjirfUaTkuzwLvzTPyShA2aKmJqMRBaBv",
  "key19": "3GUR8C5ujkPA6A165KJgKKfLKmv34pTSScSTZhCg8PrizbEfvDtVnUfb4AYYvQ2F1t9NodAF45A39hue7gcJdV5A",
  "key20": "4XNtJxvSQwVFrFWmb9DQP69Pwwv4vua8cTrxoQeTh89SKBGvMCbjMn1Msm7quDoPh6yTk3raheg4kSJRUmVgKwKt",
  "key21": "5Qv7MoJPCmU3ikrFKtCtjPwvnJ5AgwKuc84BYrXjmN4UYGkYYejUe49f4jUqM4xZZispr9KdDfkhQ72UvHTiC8QQ",
  "key22": "3eY6k3ubkctu9bAVg7QoJgUbPWG76yAhkzdB6Q4JP5CwKCjQPH3RjUYfxUURPrhkHub5pt6VdoHgBgiGDzSdMMPy",
  "key23": "3BdAX9msNqUqRcpjqhWZb3k3osD6kiJuJcsZMXvnmBx19FTyWSCEQX4ThBc1wT3GhmYCCFy6S49eKm95dsnL9Ynr",
  "key24": "2LtRLfcHXNYUV3JDR9VVnnvTrkhdjsudcawWYw4sXPoByLHu2rS5aJaT1mHLmuAqJkE3aasyjWsKff4dFnfuoebA",
  "key25": "3gYZXefLKcq8tQkwR583gKuKzrGK5XFXpCpdyhMFfT3tbcoLX2hwsqR9tu65PA9uReqBRc6zyRyBXZZEY2XCT4ra",
  "key26": "ezufQM2HYwmSKey976R1o9DG2D38o2e3ue2j2xqtz21CEw7EtZyGgJhqm1kYtRGDcxu3cTA7wDUYfTgGme8A6M4",
  "key27": "4Hwfyh54rwRbuoAM6AVtqJW7xPQPJKie7h8EeHZn6AzEjTRkwmqG1cA5famATd49BFJuzvWyi3qRqVuzzRrYkwMy",
  "key28": "47D3UqkBXtsuhZZ8m4UnUQTm9t1S4bWk25ZmTzGJiyy1RdMSwH8DEi6k59m3yCkKsbyfoZScyogWN8mVxneGLyM",
  "key29": "5kLGBM4XzM6JdPLb1pCPoaLmabDF2KYBwpStKqV7iKSCxT8QavQXh6ft6UcciP16EgQtmWpSn836tYncnqGXc93a",
  "key30": "qjnVyMQvCwG12c2cyWe3tvVZiV58uMD9NRto6AWUwCTUz8P4vEogvFow9Gyv6Q2YcaHCp7kH1LUF78fXSavK3h9",
  "key31": "3PyFUTvwaTQnf8cD5EBfCceNDCBQY9PoHNgBR8dquMTRzPiWjB2x6U41yRvDdwKCk5RKQqUTvnB1UQxRiD3QtswC",
  "key32": "PBoRzEq3kJMcdw4H7WuyJZAJDPg7aGKVyVj17CS5PKVWGGp2HtyVKuhDajDU3z8X6VQ5JJrtNB4UATkuuHB851V",
  "key33": "3cVNxszMcY44UZt38yvXRrfRnDNHVu3G9Fg8SgPtQXVsDNJ7N9AkZ1hxYdRWLEQsBhpuUHqM86YTxNUZtfGUVQnH",
  "key34": "vbXYzJEt6GLKwG5ZjgEeAsJepVtbfKypGV5CJUpRWpr7b6EFpQpAA1jUYX6srJHgg7XgGMJ8KXNC9Zc7cDcenvw",
  "key35": "4nd4BP4SpecL4J5GaUXLUoRYzfWqwiEMHZ6dXHWj2EZuf2fXacJCxCW8Dd7PLWWYZeJSqVaAm85PG13T4HE9jJKu",
  "key36": "34Eeo3uzNyDTiVK3u8wjM5F2azBkvMb68MYzc4ahK1LxKEVGeiGDaszL3a6i98vsTG3j5a2rHEcxiSbxYa3jxZAu",
  "key37": "5ziDbX7grPMPBBy3quJ7HEEjrbzUGMzMvhP34dvPzZi7ZrJhcVTC7cWwCKEAjWM59Q3eBCszehoJHQqs9aadgcEV",
  "key38": "GLw15fJgvpyE1eFHw34vbZyQA8rWBMZmfNqGB2591R6MtPPRjHQS9omBpUdumjtUjV1ZWr5XyZTcz8mxtUy9qzK",
  "key39": "5iC1v7vrFe3R2ThKRkXVWhCcM11FAjhXhCF6KV3XSnGzgDFq1gAwDms7yFSWRKFt1Nc6hLfLcmUcW9JcRj9t4teS",
  "key40": "4DrSxbGaayaNCzumdiWgvfNTJgwYqaRePgdnRYnT5UK5Aei2amMnUM6xwidJGXh2N8SksWPR18En3qiqMUpuAuQS",
  "key41": "5z9nmurJgWF3REHGM5Yp6nccfZWfQgXMJj7249WEu3ULpvy2i9Aj6EnGXPmi5jWeg6me88C8pk68s6Jqt8494cj",
  "key42": "3RW2qFyehWzPZj4YLLcgxYMPQHzVoVYm7ukGStxx4ipboZbYdvaTCies7T8kvaiJ3LN8sWfkdVFjvMAAPFWy62zh",
  "key43": "2Xt3Uoyfkp1DcJ3PzKZ52iSD343TRdkDNN7x4GdoJp1MxbxPQQQL3zcHSQzy6kp1MhwotBT742hj38xkUs7axxXG",
  "key44": "2SJgmeH7MRmRjog6FaiJMUBs8EPReETYE1k2A7mzrNQUcFiMMbvNHQqRYopw821YZRnStoen982EPzXXu5i8d6qG"
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
