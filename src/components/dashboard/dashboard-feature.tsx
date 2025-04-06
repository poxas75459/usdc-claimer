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
    "3k8LLtusePASfd6afFtfpHmcvFUSet8uXfHaWvNWDbjcYJ4YTa1HbwmPNAkA73jsqJ4BZPzUYhJ3fcv2zbTQv6TY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N92AkvkUr5rZj7RLhqoLPuLKYe4zb9RVQMVBBYCcn3Dds6EXzCGX1xrvUYtM4HVLCP5zdqVytJNjnvQFbr1o9UL",
  "key1": "54ovrvoteXjsJTXRXoBGQrKPZctMKGVPUGUc3ggukDhWFHGADVq3jvgEaRHiyHFYXi6FW36CZyY7G5sJRLFevAiK",
  "key2": "66W5hHT3YLaXBEuyXD7SjMXHghjS1aYsJCkm2wSmAUfGEo2yxNpgj3skwwLxTo9WrRrxBD5NN64AQWMpkCSJQ1HH",
  "key3": "2jXt7dueS1ibpwE6Cw93DJVagnex7j9uXtCWZvX8y1xjwWQnbR1eNoHrXeHfe4F5ynfV2LmLTtZFXZBkkNGTeoz9",
  "key4": "t4o59dcjxigxsapMT5cyWEMDtsa96iDss3AXyjAjJqkv2aY6Cj8k9JQXyd7MZoW3FmATtDztTxnb1SgDB5Y5w8a",
  "key5": "46mAgj6oh8S5k8J8KTxCiurPHGPkFKL6u9ihXGNDgjsxc4yRvUwyKxDGjDKgAJ3DmvHt2tF4D6rdczD42cgh7x6Q",
  "key6": "64dkqM4oY3TZXFhu1Tt2o78cQYod1zopAV4DAPdzSqKCiePbbSPUiq6JpqBxjmo2jJiRCpccBtadSyhf22i1kY4T",
  "key7": "osBhNa9W9QzGDo9wYEPa9Q31ac8NeRf4BVkKHy6KmugGza1TPirvihTvxpQqXmzZhjA7ozLtWqDcbwR5zrnRc4L",
  "key8": "5BKUzHwABhANy8Qhpgj1ayYmgBwB2WLRqPuy6FurufPvjPdGBfqAFbA1rVjzG6KzwT1YacXq6NGWq2WwXcsGnote",
  "key9": "4WKi5AhbjQiLSvBzdpp7QX5kXA95wWC3nDvpJ41nC8s1obXjaazZqTxCBCjmVqNGxHRx8XkPaazPi6yxScfEcNry",
  "key10": "3xE6uiaNiESPhjGhSYLHdkUaUnjpcRq1TiSUFYhcg4QT7PGJFfwVS5YkQ9LWxos9NNF2QmmCVZk8ukrFUpy6x4xe",
  "key11": "SuFSDaKs9tRpXTLUHvVawMC9VvGVwTgNu7ZiYYGLknqr4P1b7TifHeRcBiE3VeYJXJehndSwStMm9BHbcWi3SFn",
  "key12": "43LEq8ByLvXobUVWxtpMK1nVm9U3jG8peZTTHRcJDvQn28EYFtvF4m9kEGKJ4UTKbivYyuEonk883xBxLb2TeNqr",
  "key13": "aSjjDh1X8mfkxSXEWSoEyc4iWkryYgq3NauyoT3QAw4AS1S1ZsEyZexgLDiuNGoHeiEVDBWwuxYQ2aRGAjXBDMA",
  "key14": "JLfrB5vH5AZMrQEUjFNUTpf3ifAtPchFTZYuC9vkt1QFje4J73miPAhQah45UCwatxs7MUMpXjdG81YfuD4iUCF",
  "key15": "5fkJPBZVsJ1A5FcEgXDHzR8F3pqHnBCF1LqbaFdDjBW4nAp3k94JTQzbicoMxC9xrru4RAZms9nvx6hY1BkvU9y7",
  "key16": "4gYvcbAFnvsMGnkyoLhXjZnGzm4xZNP9SuxL2qPCtv8Kytcphzj9PttcWbG5sMjcGEq8wkfuerFEMPuWuLPKQ8E6",
  "key17": "PQwYCgLfikr6wiknNynwmvjwA7UWgBXyrJMpZsZdCPuEne6A4GaACBjk4ri52tg66NmFBdVjzixeMurhKq8gZwA",
  "key18": "5JVEcRYJR5jPAeQyHVRj8ZSHm8zexZNmC5Zac5nGcMptrqdL2RcbSzGJSehRkq1jsYFdkL3MLBbRCm9HA8hhE1Cc",
  "key19": "qgAzEkiggUFV4vrEeqSkPuL8ieyewf7vfRUNV99bmsTPD7cqCzeSDAiQJNDekFRWn5PFFkh8u7RFf2thpP7LwVH",
  "key20": "4Lj8kAbSyhGPiAMHABRMXrG2LdJN1SCXjjUZerfSnvZefsLo8xvHgmEf2XnrAXc3mQg9jJGiagNdoQseXomQ8K4E",
  "key21": "5yf37uucHV3HfCRqtyh7iUjsk5hyGiMAmkwSG22FwBGTSyejQRrW8oFqL8apMcCQ7n4puzXPuR15QAFWgjGwWVUG",
  "key22": "2JxM82J2ViJvSo6zeySq1S97TxFLipdQDkeVJWmykt1iwFJZNkqQM6dyGhTtp3hxB5Ekz2uV8mShjouLyygosWwy",
  "key23": "3uj5Num5NeJc8WoWRbK5A4ZmBx9UimTKctHEa6DzHD9nzJkbYXVbNSxFbWmq2bXQ7YsQh3vp7eadpWHpcCTYBw3u",
  "key24": "3RcgsjmUSzFF4SFxodJnrAppMJDMLyAWBSocRHYsF1oZSjLJDnkF5fvvnLnTv5u8wERCC4ep6fpPCH9nooB7NWCN",
  "key25": "3fdpM5TTiSRSmh8akHn6ZzruKm6KT5hkbThi8e87QdUWSDGtaDtcxig46rgRJkh82aKup219oig9rfA2ndJNAhNF",
  "key26": "bSBTrmzR3XewtR9hLcRULG6trNtRRnAiQEMZ5wAF8ys3JBHhvwKTfQKA41coskPrBopAbE46pX8QSu75LPG5AaF",
  "key27": "5YSH5TNbzi9kP2QoVnY6SMbH8N5g3EAJUDbSpSgK3W6gkNXYi6BXJqHvxeNphQKfcHaTFBfsgvZpQW7xKNbMgbat",
  "key28": "51XqTX1KorRhdw4EpxkkX1BnVCC9yMMJLcaPdhgXzbky2pjT2JUw9YJcEJoPLSbUNrVwy6ayH48tLfdPqsfWqre4",
  "key29": "668BCeXKntKeRDg9p6f8mNo6fJ5FFRcxtJc66BpngbUUbMZBriAmXX7oPjM47wwDJYZ7hAW3QMReYu2MGDCMFdzn",
  "key30": "62LPZuNtDFr6gV66j1DyhWFXXfbaEFZVXZVqkf8a5t4MRwhdUBNmqV3m6rMbBMpvPUgoRX5Nivhhhuf6fFav1Q3S",
  "key31": "Lg19gbXLDkgRPxoqKYA1fEMRjuExr2TEHPmtWdFSp6s3NjEhEMLyS9eryZy3THCMEPGnGt8EiwhiuyK35NXYJPd",
  "key32": "4uBV7kyEsQncsBJuPXjwiZnmfCYGZGZiZt5mreAVAT2wbDmzY2MCdB7j8vCP3mPwrZ8SugjDQJ57t6CrwaRf34H7",
  "key33": "4UvBG3Jt9X6AEFf89FYM8UchryuaWKYiV5H3V6kYa5o4jpo8VgGZMDjvyfxjxQPqu6fnHbBKa8hjKp3rNp8FS69P",
  "key34": "3TF2F4TmEnRLyeEZauaGCxYYBaGQ65pH1z1DM6Z8kKbvr2NmxdwRKLRzJv2egcX6A5UffEhSCv3ynEX8VieSRdEJ",
  "key35": "m1AUqNGo6GTjrCcoWVXyo275qghQ8yxv6uwqKyLLZaUebzR1Coq2aLoUFfnwQe9qKev3RjQA2htTJEjx96wW3My",
  "key36": "FpaTmg1dC5NyB2Laon2SJteqKRFCp9TM3W9Nx2bYg8JzJo1ri4XisoABnsxUffrUA6EahFUJBgYRbCRnRnsQEZ2",
  "key37": "35ydur37hoc7b97gW7EcixVXVPLErkN8rUVy4wQhbJy6k8Vg9d5hiysJ7n27T14AjBeUu7XxKCw4SQBQyqsGurXb",
  "key38": "wULGBcvFKErdBa9jzBBpn9pZV2qF8JXiNbGQ6aHAQVEmrfqgyjScw9Jmv2zGFD4Jok6akZAGShBXpbkvnFEpvrZ",
  "key39": "5veRjgey6tjXryCsgeLxkZX62adwT2DPGeM2J76vTk9eMUK5JRWAugptdovmENsvkPUeL19HPXstzv6EXsRGKhH7"
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
