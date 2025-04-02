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
    "2WJAQ33jzLWCAef33zhB2dHeM2HzuU2CTminZm7HeVARmtRfGgSchoMRV6y5z3vL8iyJD9k4Bhdncu3VQh7kycj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zxUjY7ueAH9nDbRMJi4Tb3TfzwB8pho4GBjEN9myiGWHNPX7CqDsF7KPNi7oq1w3fBjK39d1xZYYBRtHk5kaMdr",
  "key1": "RdBNysFy6rJijEmoPRtfw9gWegrtG1qKLCXDqT84B4McospDsvZBcK3gK7HFK6LhJLzPCGPjPP3vLuJjjziPKZW",
  "key2": "3oPe628dSReYJRXz7NviUwudwPZSNFWWEGy2i2epn4gxJKYkHh4KKgQQMLB1Z9FotUcHaPUW4uU1CR2N3KtRD2SY",
  "key3": "5r7F3SNLqnQkCJxDvvNsXNongyUZgdXdWQSG6M5JoNbm15FZsbPWZgYRBKJRZLNyrZ91jg8h2qbQ26iQPnURAaqy",
  "key4": "57UcsF17gn1DTLjmzprpjv7Wz8xDN3hU7i7BuXyVdLWWwsKkSmFhv7KZEZQ6CWUYKeC7UNaDiNjGseHnApxkpJdB",
  "key5": "2hNdpzR8E4QxPDfajZj4pn7LKjcCdmNUTuhrd1irQEGhitHNad47kPmX17GoSVuJCViPzrdF6s41gqdTmNUZLFF",
  "key6": "8ca9M6tMTuuRGScakLL4cNsb5dCimYV1w4cQjPmpXHCHpkycrKNxWobnvEHoPDGgdQgHsNdJ2vTvqe9yRJEUjtQ",
  "key7": "4EHQUj8GdpxnaWs1gz1BWjnWNizKQS2ybuCiwsDi8EJDWPn6mwKQEjpLdSjz7e68KJu5keAgG796gXmvCJMRgEaG",
  "key8": "Qrt3N9Ei5iXqxrfYj59ytjnaRjPmSoLtWnAGEyonMJbge2M66ShgDuuyw2X7mGSDsCsN5ExcLuJYCXa5hc5GYYZ",
  "key9": "4scprWuqucxDinmGkLATY6vVDUD8FfYpoSAD7gu12ijqNVQSMeuTHhW8TmM4baktqEHB5pjCrAAyCQtCjUD18W9a",
  "key10": "3MY4ETNSFk3DzWu369kddUHiWDBbtGQ6ECiASgJQtkCoqciWMkkxorc5qXbGGjPi91ybLWT43zoVdqfLT92dhEAL",
  "key11": "335o6QB8srxxaytPftBqi9v5NzoK9UekqjPLhdbes8QWG9WMoWEMKtz6vtN79S6PAqTpVheqRvE5eHULBWj3hWAS",
  "key12": "5deQmBMgSFXQN5hKQiuQ3cXjC4N6W9Y9niXc3pPSrKX1pnd3YWrjFV9mY3JrL9K9tQxd5YeAxJkh6kfUsvyPrEsa",
  "key13": "pJY9Hx3ztdsgZ4fbt11WKEivZqfWTRuWgexXw778rVYJSv48rFfykVeATkPypi8PiWy1S58kRicLcWgfzzhSFcW",
  "key14": "P2AaBrsBtatvxW4LjRGvZTjP8dp7kgCPdaaD3synKczYifRWNe9ywM9SxCi1RbRUr2yMnVRxuwZ9YjyydxCzMiC",
  "key15": "21dGeFWvG8zN2GzWCNXD86US3kA6Ru1wxcCpDexCzGQHWeqiG6hDB1Ehj9ti3Fe2Z6QbcYbSc8WP9dXLxSL5WXUn",
  "key16": "5empMMZj6k4jLR8uEV7uuQFPNGjS3XnYhdspLZouCpfjQaCud4FbCFyY1jyG1ouPWMyTDH9TYhjcm8u8LyuDYuqZ",
  "key17": "5K9jKZ6CmvzgwJQuAGVb4tSeGk7ECGHcXb3pC3JVpygfdnPp1TXpZZm9yvjKa9EGcZNttrfvjuHXqNKbyzngdWPV",
  "key18": "4U4QG7F8AkmGe9HcaHuD3jfWgWrVMj6KYnF3nV56PKQNL3QGzVEaLVDYQE2xyuDS761S1kuXnTN6vL4L3n6HXhgF",
  "key19": "5qBHZ1o3ZDS4TxJxLEFpRXuqQhB6YyHvtu99yaPtU7wg5CyyMAbechSt9wHGKJWES8Sbrvsz6qTg2NTNcS9EbCa",
  "key20": "3gxAEMNdFZCML6fY6RGsFNjNfQYG3AEUv6Z2z9LNfzz5Pgvg2cEeM85jJuUnWZEacLXzv6WiKDHFusCJfQDjNoyK",
  "key21": "3pWuMsykXnHaxu5fUNcMBKYPkUh6r9Jp6gtRosw8gyQY7mRUnc6eW5ooa44QPsHzCMhJQ5V47tDmP46APo8AxQm9",
  "key22": "5JqSNpqRPtvUh69Tc3fNEpfbgZ5fYZAqsytYKrGx6V5UbDqjdX2P4hDyRBSJLc48Yqe4wC117TF8RXMPGZrpVK7j",
  "key23": "26MKBF6gueSZ1nf9Qet5UpQkwDf1J38QjLpdPU7x5yyeemN17NVcpXT3dFdPb97AezHt6UQ66tke8hQiGve27uNQ",
  "key24": "2SNr1tG9jLGtEHEh9nTHEADCjVmkRGvyTeNkNuEfCcwcFHYSSRTQcbE9JzHdNKVz9vxNA5meTs3Q6pDab56XfZEn",
  "key25": "5PTQVDiSvyDkLiHQfQER19ZbfjEENjRQFPY224EYfR3J78DZuYFyT3juBkuGLwcxUvACvwyuP11JkdbDssW8kPyD",
  "key26": "E8qUA2uVuKx7Vr73P8qSeGfVE67VS3a4JnhZCHsxSjFfmeyhmVJppPmRDuCDxt8ZZXpU6JGqaVZgJagvBLGomqF",
  "key27": "4XakfazJ8if6BmUQgAMAvKNpXhhrT19wXqcXHkXj8PCuvkmLxL9SFpzo2ky4CYoFwrAdMRztqGYx93P5k8oTvgJ5",
  "key28": "qYotxkm6xWmWLfZuf6nemfKgbLVcPSPVRVToTaB2yFqK4JUkzUXwTpFCzQd4hrLJKzybywBBjJmqePc3MzkNxj3",
  "key29": "onQ5Sq3qsZa1MR3qKUU9rtMn1kZsqoTRfX2ZsoMPq1Dierg5CU4JHF1bPzPGxnwKExWqCkxc6EbXmEBFcoHMz9q",
  "key30": "xGYrmuCx1BuWaNYBEWm9cbGiJbEzDQd6N53un1jRsLHsr1DLBq5A5BiwKHGUciTxw62Y96z9R4ttRpk88DG6BJo",
  "key31": "4Zk9WuScEuFj4aoPiPmGqnRB6oXWbbLmm38AEkAUA17rNncmJAG2xCcnLu4UV6GduLfxZQFiBrzKiLafCN3TUq3E",
  "key32": "2hEC8dRNmzAoEGGMwEhaNoV5xXZrz7ZwMkAboefjL1eGtCwkD5XLZshUFsuTEAnG4nDU7jtUssaWqobUBL3daYbc",
  "key33": "2yNjbsomvnFhTJBXWr93FcfWgHcsC7P8imk5MD6E2sJmpUuz5ProoP1xK9w4AroG2Y3P5r2kDtJM4YKUZFrosjvQ",
  "key34": "2ADp96iVsUh6aMckiSdmHV9rXBJQzHmBkCTM2QxspPNyTGtfWckT9V7gJY87vRu3r1XLs1FfsgEmhEwj2Wvgieg4",
  "key35": "2vdExzGeKq2fsdDccWyJTuPSuQWyqoGxV1ZDtt8L7UMazEq5UewBY6Y18DZLbhmdrM38G6MsZpHea2EWmAP3LnYa",
  "key36": "2qRLLkvM4aacpTkfxXdMCHhPod5KQucrPXXhDS1si8KnqBZACQEKnYbTtTmKnNMhwmiwUjBWX8UHgtv5VGi55cV8",
  "key37": "5cYjznLM3KPHEuP9C8LYrcasRybX8xHnr1oXhKpqEiTXxZw2JkybUU3wNSFHtfrUDZNqX1YHzSNVN5ijYmf8VkWt",
  "key38": "4H3gtUT6gXWJkNN6Q7jcFHEYdy9qGgzkizjUmfJpZ9JLMp5ghKxzCejHbGtuer4Mbabo7UNKuCMUecGC9nkFKXfw",
  "key39": "4e4aXb6WQnxBZJQ9mZ8sxv1k4289HPtTgjbjTxVR3DzggWFMhqN1aZM9NaeWwzaTLm5Zq7exv4ob61jdQjs5pdag"
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
