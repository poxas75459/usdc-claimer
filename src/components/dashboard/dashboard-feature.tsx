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
    "5cSXfhBaE6V9jHGELoAapAvGQGZqb63S4sEhQKGG8HAGC7RNPSnf7Ekbb2hnMFAzZvRexKffnGLazvJHeRGGdsZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TfYLDun2opErA4YKcJXWKftrXNAp9MtwNTyu1UX6vzyJim1Gt4Y3qpLpkTGXH1C9X859DmgtEe2eeu5K2yZzXDq",
  "key1": "2B36AiTNe1wDtsMQipeoGkbWYTpzeWBCn75UUZv5eacnwd9rBpmPcfaY5zfZ27tawk45RTKzKEmnZPGhqd76amAt",
  "key2": "5eTeoRB8o4Z2qaBxommJbQQFr2tu6q39G9fy5chGKW7eHJJM6m5wBXcJYRe3gg4CP4s2zbLbntGRKn9Fcq4upB9r",
  "key3": "5W72JHyMdEh6Yxa2W1C88NVUFgN7nQZBiyxDNntqWEAcMJnpUD2M2nXHbdQN3C8hSZEhbJnY3op1jZ77ZBEKztwH",
  "key4": "3BLzYZePPJBmJciewyrJ1qmNuiB2tKC4kDYWd5jo4Q5v9kSwgum5S5GUC5jZUD54hasjCKCtw2CyCXguQ8TMKvdU",
  "key5": "4Agq2p1C2QowtywVFvNnM88oxzMEpvDwY88nqqPRgsWYiahcr778jXj6rKcbpLSpwHv8XBoCGBCudFXLFSTPsEPC",
  "key6": "4NLXxSDHLChdTqcUsgRjaC7KJh9Fefk55X2KMaptutUYh5Wjk5sj6giMoxCPHauensu8AC38nWH1Xabj27MKoSbu",
  "key7": "3SGF4aL7YSXL9eivo55ZC2E2cX3js7E34SNrTMD54XXKSqQEsjkW8TRAb1AmSgTen3CG2pyFiFnvivVztwhfjzuG",
  "key8": "2vsuFq9sbSfQFQY9wEWQnyn1wKkLXCZtywJvAADEFVP9pYsrzSzXg4wJhoRcKySkxk3GPzVGf91QER6C27JqbQ8w",
  "key9": "5ibUpbT48MsaUMQg5pWsjjSzt6xz8hwSvV3RqJBitHhBxF4aoZMAkJqDbcLXEwqySnxn3yB995nqVVMfug2v6fek",
  "key10": "66TJDytRvfGru6uAD7XWVfR4EqtsAAy7rh7KbhmKh3eTDqDSui6pg7JhUua1HWBvPTkUfeMEMKyM4CLRaUZcKbYR",
  "key11": "57Rym6kuuo4h1wGQJ2tyig4rRiZH4uhBpJS9wV5FsQCppyEPYVKrLRwirXV3GbpdiEEnZt65uNARVnyrAHPYJFWg",
  "key12": "2eHyZu17xsZaWEHKLfK62BLDrZSzXKUGr6a5hATXqouSTzEWmgEL5PWDJQQjsE1uPTuPQNWybDLDiVSUuvFhJKVE",
  "key13": "2QxuV7GgGtVepbkqk5XfgGMX6XfJTdVjN1DwR49mhqZ9vy1BPoj4S9B7s5BW3R3e6vLTapzGtqTQpUHSzqqd3fLx",
  "key14": "51XubVopHtGWd5qhCQq7AoKF7CKxq43rckCiKrp74HgQoZo1DHxFD6AzSZSJjuqscY6naey9sb3mqq8Mxo7Wwnkx",
  "key15": "5Whrz9wJY8ivBfNUtnufCuKb86jHxbaJL89AqmaQDKRqF3TVABaHd6fx3JaK3GKrHhqPa1aeVLTgN1KjrPnYhxz6",
  "key16": "3KS2amHFhmtMa88LsF5ijXVYfs1zQh8iqTUWhAA2ZBHSi9MBpRp3Z9ZnPfQ4pCLYHGerq3B4sSrxbMdn7so4yJY8",
  "key17": "2ki5w1GjyeuVqow7pqhko2PvRPHNerdXc11R7JNNNLUB1q8LbxRkww4h4GKtEqxtqpHQV3K3dFPjonVwLEbW6hby",
  "key18": "2XLV7FXnZcb9nWGoFEfLoxSCm8unsu4fk1BQAv4QtrcN5NYY4gzc8v3wG9rQw5N6YssnSYBhQ2747hNhb71nPGah",
  "key19": "Mf5qa4UYvUnyCv2vHYYxhpxYQAr8AX1KS6HstcW1r2epXhwbN48XQThZuB7gnPC4aNiMwukdwoXQhRmfw7i4Ko9",
  "key20": "3TCLq5Z6Wrddo4vyK9r7J6rcDFPzEh8cJMBMrfH8aYyBHfC5fSbz7HG1q7hbgZZnyxWRykTS8FhRUQnWSHgTjZbh",
  "key21": "eYr9iuf3krrJFoDin4HTWeTyq5hnokWfJ5tdQo9pCHvgYqmZHbdCvS2SgZswds5iFAeXB3uic1ieL9aWPhBdiZp",
  "key22": "2AuFwU4jbNT3ViYhPiXUs2Nq2GyAQBaAYTo2veMRtuAW4wiqPwRMyzrWRD7eR6Cdns7Ffbfq6WKiCdoMafBz11Ln",
  "key23": "4XTyhEyWpR42KC15xfpJe6H2JhWBgbaG9uHT5uBVnWa1hbzJy9KPXrSX97NqQSbo43Xm4ca6oFRuG8E3ayoEx59e",
  "key24": "3CB8RqiKhRZqB7KtWHj9aMHNq9CXWczqMTC8UfxBLR6gk2v2E8ezwqUTz4rEPreYtJNwaFeiL6cWW6jSmRSEYH17",
  "key25": "2tUiikVdtaFUpzRfTgxGAQHFHBN14TNccrzLYpXbmVt5bE7mXY2M2fZwNv6eXARZStaQPMdJtc2zBzxWBXKnJtLm",
  "key26": "3uCQZNmTi979mEjbpoRqWNsHnF18gTq8tAq63JvNDNZvN9ZzGEqhXWWtshbgVDDASvjAEsXyyjD4nzhgGesQfnaY",
  "key27": "3agiXJcuNd2qUWevaEXSkckLNbPVG9t8hdGE2Wr3CZLumvNBeptwyMwdULaLaDoUYpbCn16Jy5jL6iPFbuPMHgVw",
  "key28": "2zcw94U9APkBs2aHPwSySGGvAEyc9GvausfZ26vfYzLTWpnKkjSMmMiNsEfXhGSvF3W5Ru12CMABSrYBf7J3Sas4",
  "key29": "3L5b9LkbVtxXSuA1CHAtvtJhV6vCx1uzvxPj9hw7pJ4XowKjJWpM96DAmeture5Y4mTDuQ5cJRbtncuGtNUwYg8t",
  "key30": "5xdQ36SwUfA9D4vqL9YUeRyWFzth1pJYYjkmS3iV2axfXq2k9uzQePy2t8tZWcxv8sEXhzNoinXeQ4wdD2fBGA1P",
  "key31": "3TdzeBsWVR1syEJAZ6oiQa627fUoaWZ2LzsMgfUQ7R7JafChB92Y37C4n4NsAKpRGSbjSqZZdgUoVPGVHiD1o81L",
  "key32": "4LNpU4SRN6WwDTxCMAGasP25Pukru5mazTf3nNedWtwNARrAPQujpYGFA4kfYhERbY7fdcyiEy7G2GnrQyL2CXxX",
  "key33": "5YfG8vYKNY2BzKq1YnuLQTBsJZ1HRev3uJZZBapezkeWSdRABiw8kj3CWQteMqZo3kX81hqd8hCNNTiTjZrmaEYJ"
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
