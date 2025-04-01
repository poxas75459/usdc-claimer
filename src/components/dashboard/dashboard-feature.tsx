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
    "626BCYDztykWnnNgjNN5mcenDruvMe2oYnmqsVXwmWBUHrMTtS5yfDD71UR2GzQT93aMVKcY5se6jub72a7HxuAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58YGQvUT1faSwKo65rJEzKstkKtKT14Kxz48fu6PnMTYXuKzgKRtyFcDYFnRTxC47rcJzSP7RP42pzzrfb6vwXQz",
  "key1": "5U1MB7PyopwXonBs5LoykkRXd3Nk7h9mRVdrBdsA6nrLbmKxfZML8iPMxT4vZ1dkvhW74H7EPsN3rERa29ybuX5t",
  "key2": "3hMQi4fdDsu4SHhm7bxZkot8ugLZAqqCFE3MJ1BXC8TfxJ6DnDw18r377WsJidhc1bbx2ack8ssZeygdDZ8K8JYB",
  "key3": "45jKy6u9VzryPqPJuVwFrwHkViEuUNbjAZQSGmF8VsEF1eF2D5QPLFokS9m5fcs3E7qkJhQvPPLMqbaeNGS4XwmD",
  "key4": "2D7BY8WNmMrSN5hKUSjRY2fhRMP3pZUDkVPQAtpKseeGaq8RRuZuS4RSwHXjeUuTmcyQ4a5sYmyc83gUeS9Qo5qk",
  "key5": "4cEZGJh3Zu712tG57SqirrmiWCrc3aBy7Am9RBdyMLvMVaUKJwioN1aUWxJ3BVet3QWDDQMHzgDdm7y6SvQFs6Mx",
  "key6": "2uzCvwdvE7xtwrp6FBTsLrxfJ7AVxM9JkiTzUacpcpFX491K4rkfpMoSYVbsHfKPppoJEFzZp6uDWQUMDFBqmPEg",
  "key7": "3uyYfdW3VCPwC1HD8isjgPsaoKT8b6bFakhH7Lrpqfb5MKEYB2DnHMaA4Ycu2WWHw4u2FgEQQRvfJZaDDXF4wxHZ",
  "key8": "4RGQVTb9F6DX3tYSEbTJnwCRM47BYgCpfLv8SgtrRpQJFA4iNV7qY7dgq7cwj2XhNzsHfeNJGMx98FEELMZMWYyq",
  "key9": "3BHZv1ioD8eekhiJ1eYmCKHoZtMUf2x5pNWKogsp5BkZtywPs3WtKu1ZD1GTDDpCK4p6rZhTHnf8SW9NBDjRzVJo",
  "key10": "2fy2oybKGAdC8CsWA9SvpeydZcYY6eAhg6WRR4ADeTZcz6vh7DZcR1LGKAZN7NKpVS5XcXjciGk5U8yteVc5yYVg",
  "key11": "5GC6H9Zb2bqKrWbBNonZ7HwQ9e5P28EGSQ3HF91qaREKQg9kumSVoVoVeb73kSPt2Ny1vqtet4SX4CaY4DengxqL",
  "key12": "2WGVooQShn3uu37rTXbTj6bGfrRgkxvqMFWEuCbWnBx6oPEkaHyZjqDA8LTGwiyHgk2xbe57eU7reNTnacgCgHyY",
  "key13": "T3qECWiJnW5d4ipd79fkjzo3vjGTUE5JnijABXi68hCRM6VxQP9eEDMFNJfcP7ed3jKg6qgfzSHTa3EVqDA3A3N",
  "key14": "Xo88CvEzyju1XkCB2kA86KdSouexF51s7f44PB2atmVYxM2kai5zJP5tFi43Xa1oK1AgQF4ewH3CbJ4RASaVJkx",
  "key15": "44E837BeSxKU5u94Ua76ZKP6vRZx58ELfnCSC8sJGVoYBJdY9kw7nipLF4sLzYZcB7TnWzPrNo1r42qFcPf6tqDu",
  "key16": "33JHEQDEDeKZWdvyuS782u64TeuiEEMe3m3fbyjJUwVM93dTtvXnXQ9nz8nYTqpM1opkCcS7NAqgPYdenPwQ4Rsv",
  "key17": "2NfN7GkoY6hWRt8XAKWe4o1TmcYe8Gqv5DFvmAVxJdniGeW4cfvi3hmV9QdEZoeDNMMNKt6nRmeXWcZV6i9JnBLm",
  "key18": "599eCSU1qq2WszA4dh6ZZ9g5x7PqpYa8n7gMJXgBvTBGjbQqrbCGu4iuFT4qRh6fnm6AQPJnaQdCV8vguWCbkwYL",
  "key19": "kg6Y1ZHMcYVWqSLp84bAqHifbp4XiMnW7VmVR2FugMwh6a5idbtWZvxsFQHBGPsyGNFxkSCmTzfhWLbij3P7Nhz",
  "key20": "4UspP9uByDFFNcjzLuj9KafcZZWAZMq55UjJCMKj4p3XksZ4Q3x3y4mRahNmNKzqtcHczaLcBXZDgbTTYRYVwNP2",
  "key21": "63zYMP2TQx9wUi4b31bGw5mbqxM8j6h5ymppUHwg3HcCM4LaKgqZ3XrCKVb6Ej15hZGdTdMD68GbLHQp5M9mo8iF",
  "key22": "Njqqk9bWbQtMGwQf8bWfB8naBuK9jEaW75eofGCCbLByuL6W11ZCS9gT8vDaFrZsaRpSDaxPnscyE8ugCL7kPr3",
  "key23": "5G4CzivA8zzMN8KdtDrjn5svnc7gP6NsVtbpLtERZZrXwdGZi4whTPFcRS46LQGfzK8DD4RWbbqgimkRTCQcooLP",
  "key24": "1gRFkCe85A7zViWNXQfvtrkEf6t9yNE5mZ4Hfkutk7YDb6ar3m5GQs3JSaP1XZqQ4A16n5BdXXKZorKMPQjjQuy",
  "key25": "3rEmEAPN2YxSkf74X46qby65BF9KnjoWRFdjrQZ4FztJHqFfFTSf3QtMaEA1rc7FspWnHPxmMNS7tvd3tK2v1zoh",
  "key26": "3gNEe2K4UvWgqa5TfvdALSRgMSptUNbeWcFcqatRnjChY4vaHhw3sFRizcmgDyFzSsPxUgD7kypeSLRztJDZuhqY",
  "key27": "62xYVmB8LyDYHfv9mZE5WuUs649G6jmAENWme81iHnqjL6nqtVAFdgG4WokoQ4AF8iDRmKfzFuWorzpAgz8M5HhL",
  "key28": "qSbmtPkSz4JkE3ZMjPqhSm5jixGmBVa9XqSWHMS45r2jGN5zQKxp31xgxkCSqxm9NS9kL66vhtxFcn2YgbV1kT4",
  "key29": "51kSGfcBkE6xeWQQYZVpR7DSmr7TfRTnzwweGNVPJbDmFKMnhqqnSshciAj9CG1d7rLrbgMGa2rhe4rxXhrvM9Ct",
  "key30": "21AWZZ14BnXrBcbEDzDTqbZDCE3NgwmJt1GjP8ASwPLC9KR7Ezu9fyYSNwpNn7JNzyLeRvBN9FUCY7N9HWKAzP7s",
  "key31": "22efnkb6wvrcS1VHbW9xXNuwG6fzmAWNY9Vs6PuKnqpENtc96bkNHfWW8LXkYsNWtgoMZKSK56Nx3gHV27QaRSUT",
  "key32": "3eTpMPJui5hmSLbkhX5HDZYDh4wDT5wWHm9audCHXMaAMteQVkKK37oX5Pe6aJpS467GMgvaSAbjC2sdyVx7oMU1",
  "key33": "5LA4jZnyEvXgXrpfr65uPf5XgsP3WxUUMvib5GrQyPdGt6ER7fNot9aLRyZPWnRxnGHcvxN2vuyf9pGkqa5Ggspu",
  "key34": "ixEZ8pDFTP7MEUN6Ygcz1iA3nb9vorPjCqAT5CYgHyK3iDi7jF8SboXtDzLgfYL9iy5SYAaAusmjevcmK8rXBKs",
  "key35": "32Hqu43j8bK8WFPYZ7VDjN9PruZbBpWCyuQFMJZxm4ebTSLDeAP2TceZyKwN2wz84mZEoo9goJTAzRxR9yyKRqTY",
  "key36": "4zGYGmUk2qXXkehPBeuT2yb6NqUVPDeGvhPWG1rvrSv1CbpLErTS6eWbSuh4euCVfHKBTcpnaJ6iv4nUbvnJUYxP",
  "key37": "uEuMYGu3v7cSUh5caCFAMNjEtp9fJXPEhz5SzE782XKCa1DNak1u8zHHZLLaR4v6wCNBB4rig8CwXwqRbcooWoM",
  "key38": "5ghQqntvVAmF4ELjQ1xUM7yqSkpALC62Ri74EjuqwBwBSGCfh4qyXH6tg7KujwepVXiNi14d1h3auNsrQFMJRrT5",
  "key39": "2B9dhgLnMEDTsgye4S69yZE8mgrZYMg6oiUsLjCarE7nXYGMSmGC4FPi6S3uS1AxYkpVhTb3ReTgdbe4zpd9h4p5"
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
