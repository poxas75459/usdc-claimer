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
    "2EGg4iqt6iKkCiD6BnxcnQgrxLjGNv5SpFciJ5AJ6ALRRB9Nw5pXTem9APmUz4c2Fuq67vxUvBpYiM27BQ3ioqpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DNfUReZNWwtJiM1XV2Hr1VziUCR68s6aNXT4xe5mRFCgKdHsGRir7pzTWTtr5bT6gyrx92ts43vZFQXJZrbPgKE",
  "key1": "5JHqsnQK8G7zRp6WVu8VCsew1NCKSmMdbyugiu2RrAFjq6v4mqZ1F7iiyN4pcVcmmTUTnUfnLEq2et3Ao9y3SjiL",
  "key2": "3Lvp4aXGDKDcfmbQ9sf8hex2AFE62p2Ez7d8uMfZSgFCvPcUEzDPGPSwrAm1SfBAiB518nedqg1jcFC78Gh54caW",
  "key3": "5YEM1qVDE7tWuXySBn8vA1r4BTvYZH1FoKKVuwdu8MtFvC1bRM5gF6nLbNhbQJ3Drdrtv5GDVB7AGa9ZEv8xQTij",
  "key4": "3idUS51CD9b3nLpf7x3LxeRNErx4u8ZC8YebqD96r8RpFcYU71ZBdyRTNWqfy4FKpTWcQQATxVeaqxKbyPw7HQgx",
  "key5": "8SdnyDnmTQxSusAecgu6dA1sDajdtYnVAoXEou5G57AuUE94iTgokZ8YWWgLUEeBh35kYVDRYN6sEHqeE9vTZdW",
  "key6": "3k9YdjB3P9aeG5uEDA4DEWukRaTAoq3ZSEmTnMRdWYFcwnYANmuqPQnePZX73bvQkvDQBDVuwhAf7swLYQcvcSN1",
  "key7": "2qiLfhUpiHmyaCPzEqAgk7DcmNXsEfFZD9sJrT7bwGbp8Ku7DJkE5Spxgz8Q7sTqSY8knJ1mXVT9WRLiVRS7jQjA",
  "key8": "35D2cM4LEHh4MqXi7UNCscsxskEBkCmiZwYJyzRZsQ226B7tuVYpwvNZHXXnE8LTAzePSvx8kFPC9uTQHX7SEDec",
  "key9": "3Sj2JfeJPACYxfMgrwmL4pm354ZbvXKUqcCQHWMHfpr3RwUgtmA7o8UDoJSrGmm8h3E7NkqiSoz3wipLrNXVgCNm",
  "key10": "M68iyEspcpfisEQvW49RJFLQqPpRDyMt61AzCDktrphsHU8dq7RbnCkiif3bUAKcE9mYaN5GeHE7MHRdsTD83EP",
  "key11": "4z8ERNi4pYGA5J64Y4j1vr9mH13SdRok3usbwoJ8udcDkjQ8myJHnHib7MjEgS4JMavAxqk3a56CWCvipEBbRGG5",
  "key12": "4ZJpL3k6Hd6N6XDCGrf4EXeLkSgnQH3Np37hEbBaqW5gWBQGARBvVoqsQ8ydERPWrR1CMsJjgBa2QsUQR7DgucQp",
  "key13": "v3x3vvofGrKE5PY144JPkD6rwdNw42R3TBSPPeAjDmpsRLVGawLF1ZCQ9kQpA2n9L3hharQo9upVJWVfzu7XXB2",
  "key14": "5ReMcSmvgVvNJgbWcP9J3WAnoXuEVmjDBYecJ5yPZLGhfEHG44tYFRraz22bD7kwpgmDkZRDFrdMhkboe74tPBcG",
  "key15": "YjiqSbxdNNoC3Ry3awo2ZbS16SxWgNJUVgHgSZijVudXCC57Ngd7SpP4sYuQaPQSUh6NDGQuKSZunj7LZyfhpb5",
  "key16": "4swPXtrxyXaYceTD8z3FQ9t1hMmVhkWEzNBobHaQiNtvhmv9BcafnjM5D9XCGu3Fz77ZNpokkxijHBsKrTuGC6Hk",
  "key17": "4Wc8Nfi38X9KtkYve1xAyzGot2xpUAPtmkgt13txeezzELGchjYpZGUvTrhBXdrpzio2ZFysnRKT1bj6LcFpPkB8",
  "key18": "5Wc1GA5VhTJJFfzSyfk9HpwZNuDEsVqREQ54FbbLTm81FfrBhKzdj7FKf7W5uKE4hCtUMqw2DJnZMpTND13Ly5vk",
  "key19": "2v7YV9zMsb5Ni6hHR4Xsb2vTATzi6WBp1p9SFvM8mXotsQnm1bbGjjn32T8ErjGZDVscWRPae6TiyY8u4hZfRquk",
  "key20": "49FZitkAXqer1mqgqYTmn4FKvUHaGtVeCH12vqpC3oByUwHPsvVbHn9NNqvFPRiSZMA75RUbQt2XwPJtu7jVqsMZ",
  "key21": "PxJNQ4P3FVenFYd275x7q5VsdPKawDdWr9xpcpWXPWzKf8GCNrUTbA4dCmTjVbuBijnWu6xHrmFRbsm6U8fQNWE",
  "key22": "38LnwCvaF1oKEJ9YfS6rRyZiaqNVErMnY33fVDu331G6wjwkcjKmCkyuew4PGJhW2N65NPSmSRckbzGtX88XdBWP",
  "key23": "58hmJEuGqrcUWfJxL1AiXjMWDJzutqjij8GDJqA2o3XFcQjHBbDjLK647e5cwE2gd5QbqdyxQk4gNyfMR4wziuYr",
  "key24": "4DS86RFMcsYv7qAgEdXFr9FGuU8vBrp58VsxUrPtHwLqhLRqGUptnHo2aYJCb5F64TCiJGMvyAiMrP2CUSc9a9Rk",
  "key25": "4Sr3wtq1UZHtpp6tpwFFN7N4vFLJ4cuXzSmj2dAm4uUwUrgPNRaSC1ujw6siq4mR3Y4bNav4ENBBp8TsuwpG4a8P",
  "key26": "ex8K6TKkA9xXFJoWhuU7AxTenGVbQV8G2AXoA2Wutuk9QZCDbyiaexJAbvdidZph14Wz7HoKrn2YoW5XGdSHWrb",
  "key27": "4gBXNHaU96Y6M7s26TfTEwDiMw6F39agzmUETgMd24B6Nm9H34sPrBAAE663eN3F8yqa7pWTb3w6kbt5rcA6rhsM",
  "key28": "FVTtPXAGBngiYZ7KAk74Mvtp1Cii32gyLiubDeKWwk8Kk8CsFUta5FyveUpcD99N4HDzwmpt896zfp2kYUfppic",
  "key29": "3e4NiEUuftoJFK3bWzDfHJnayGhe7X9MGWCvJEzCA1uWQ7SzePbSTQ2GzYWHj2ez2m2bzEjHUUt4rxhQSNUQB5zD",
  "key30": "4DBkegemCsZDyDTMh4Y71JMr8HaRsZCHGQ1V1MJKSKzGeswQNNjEoMXjmt4of6qS5KXYE1BwNXH7geyXZFgVTJJt"
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
