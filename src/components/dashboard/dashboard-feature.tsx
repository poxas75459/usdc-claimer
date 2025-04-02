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
    "4bDEBAFr5im298MjgQFyoQaJF7rb1sMpMvQqF4Jd3WWMmbmut7fbV4LdmZQimBxK2Qtd8sjkYVmYx9PtNYL9bxt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jVLDPCCcooGmSW2X2wZxUQxvg1jEu2VV4rGA4YHA7gtPEm1ds2VqBPRx1ozC9MXJz54FkL7ocvxdgsuTr8AuowT",
  "key1": "4TJw1Gi1DsK2gHWwpbMbkHbMbpqWNErQRwtvrePb2f1yBL259aTueSZt3J8DAjGwdhqTcY8j1dD52JK9ijxyiLDr",
  "key2": "42canq3jxrTW3vFwYp7nvBm2q4REi7WmXXRGjCMvaHyVkjcrF54e2nrAzpjTcyZjq5fKLzFYYcjCoTXnvHdYjjiQ",
  "key3": "2zXSrzid9UTTLgKowaJFjfrgLBCnapuzVWtVaoRCgaVtSz8snyKFfcd1PNttpBjxbrUXutZRVBZm8qR9oEKxE2e2",
  "key4": "NMqCcbgD7nKxif7ch9Ysm6Dr5mVABKu9BN5hvGj9QD5rm8Cf8TTLiQ9jYBcBCL4zoL2iTH1V2F4xcEMfJbCnYvn",
  "key5": "58HGSvhASdHRNnSSHSWPdDZTa8k8ViSWFE6yKf9S7KFojhLXYWzr6dkP7LUqVzcdC9RH5LA6HKK5jSAaaMnXJaNh",
  "key6": "44Kz4s1Ayo8Ky2kakfnGmK45GqKRRuyzyGvo9tufoxKUVJtkGxrqLQqSaoAh8w783ubFYER5kNLAY4fUbBwq9AUh",
  "key7": "2d2fuEkJcFjVwBDouhR7gtKPHE9KkkWeGsboaHYnMG9T6n5njB5PYMyBqExfM5jBpAqQZ24TFareSetYBPStZkED",
  "key8": "4ULjuT36KQhFJwsJUZQJXAQFP1zNZCLu8KpGVTN7wmCt699bZ5rPYNm8892AY5bbbdYUVFYHBvDnDvDKHoNiJZve",
  "key9": "542T45rH76o83Rk7ysPxQ7h6XcvQu9gkBLKkUEpAV99E7zhFjkW7kDw2FEZzmasHHsDtqhkKFk7nwoTh3sCjGKLA",
  "key10": "3MuM67175e9JiQPr2na4fKWgCqFviz16BrS7cKia483cGiRTVq5DZnaxdt9WdimVEdEoLmkLUygYYgrZFKR29Rpz",
  "key11": "Wf6bxAFFsJfpGF7oR3NLorxmtb267BPNpWqXtEwG6z8qR2s5jLJjzN7QbNSyvXoJz4GFczUASnSzgeqpN9wXq6U",
  "key12": "4u7ZdAvJy9sWCZ1W96nF9g4LecekFv8xhTbXZJSYwUBDB2Mqpcj7EZjkj72vBUC3xX5AZVB3dmF6HfmtMm5ovo8t",
  "key13": "3stLXTCKyZM5f8CbPua1SHntvJUUbPLL4Zh12eV7J52XDbYJkyKFBtYkchHnUFtfMNGk9MMWWCMQC7HzS6ZEXZzt",
  "key14": "3zbBD3PPiFXwrN8shWunCpg6Ddw7QCootGXMfsXUBDoWAhhA2BX3mRQMBzKyUGgo2Zv3BsYaa6qWybG8bTMvpkhU",
  "key15": "2VboDK3Kr4AJ7U33fNQKXf889hdTp17opE4RUat2tHMLhayyLaZxVW1K9ox64as4fBBk3XR1dKVxb69WBPNmKvYb",
  "key16": "3EXcruL7jizAFWSYREChbFyv7g2aQu5Eret7ubE8GhKM1P5jCGx7GEJRG2BjE9NPiWujUzkwe1PCvHodETz1wiD5",
  "key17": "QvCEgJ1qUrdrqt2aVM8wV5J9YvuA6w2VRfBs5Ve1LB6iPZuY9mfzCW1S5R1tU5pgUyGHjDctmqz6d9g8AfebPh9",
  "key18": "4QqZxnT1H1TWNMtjdYrNXqQTcG5mYNRV8M9Eob9rYmaafQR4EtSqDK2pHmzHZivFDfsbPoXobBHWGPveV2VVyshF",
  "key19": "4jdVtp9nuF9j3KZfde2uYstdVuuoVzvJREDmEn6QPsDyiAwTqzdvdKkXfZdZE9dxQxK29f86dU5Sqq7wADLGat3V",
  "key20": "5xV54Fb9VDtZxyN2mQDKT75gNZzYMgNKAsTEYRiLyJv5KNRM75Sct6D2CC1wnMMjkZCYZ8yGKuaN8BvveuuAxQ9P",
  "key21": "3GScmhfwSbyaw4Pn8Tj6g8nbyAWvNEoeghs6xFgFGabo4FutAJz6pxVy38SXzZ7QckWjF5SPNsXzNLHhzrywdQDn",
  "key22": "3xL7E1m62AW8ECKQgv8TTfcy2VYpuq3eGvVE4JiHknQ4u53NZiJGyBrP1mkhQfsuV2qNeYoGaCmsLnmRyZ3scz8N",
  "key23": "C2DZE3LioVp5JexQhFutRCUuZAPNSkSi199PSa7AMjE1GQoNAo3o4uTGJ3rq5MCnH8DBBBkiTGfkS9vwUrGaQBr",
  "key24": "FjQjMfySE7bU5tgkwvcYFeJqsppfWdU6BpQcWhQhCRWoEsWdEfgDsx2ustZcHHWfpTpw8k9vr7Mj5KN9RDPWGoJ",
  "key25": "4svPPpy9FC6zgW2FzXwyTWrgYenovTPyNfkEPnmpFEL9rJSK6QN89jZH4GtSGZ2NKvHYkNeT1QXu1aGUjUR3hSM6",
  "key26": "56F2Zw2fmZqvxyXmxtgryBCrtHcpmoCkPXsmQJ3vmCmo28qnM5oY6s9vFfpCqvbNR7ifzXShcmDz3AgrNtnMT1nf",
  "key27": "9dKqm2WfH4g8MqBWmErp29oSqo9bpUjNd571Q5fL2rAHGxcsVai52ZERVYRFLwuNeJRYcvPujY6oW3d6LEADBPW",
  "key28": "A4AEFSNS356ug7w1DCMM63XKWza87ucAsMya6ed26NAnooj6SyPkqrvJqcSaZbwCBkjLdom1FfewrVxbQq7PTZq",
  "key29": "4MQ62uzjRATXsuVR2VLud9f6vV9Pm1xKZc42X2xagRynYWjUC74aU5teK8p4djRfFSe6oxFuQTdVYN9cK4Tm1c7u",
  "key30": "5tRNKJioZtLXu5sJPH79hzbfXRVWc9R2XVrBUf1QD5JBc6Aecj815i4sV39JVjRzcaevAea9Uy2evBHZdvjySVrH",
  "key31": "5bKvBvENXD7BfbZtrDSSVEb2j77Z3PVJxPF3VmnsgJzF1RWvQtC1hFua25vVNwEgjcVJULHNWXi7aVQFWDoZjbZE",
  "key32": "48FtbBPxjeXcWYbX3JRpcokYBFWQnPkuT13kqAjtbyM8qbd9rz2fVuw9AknCihwUQkhTSJKb2JGrkfUDBwBGhbB",
  "key33": "2kys5yXjbgRELrh8ZMYJbbFgn5S2gxvtBVLbPm3Uz1vQiFLKLE1wfxSXjvf3JTMQL3yjQCGehiXj6wenXijcgNhU",
  "key34": "2B4XeYZP2GUeb94GT9Vy5AzvdoeQaaKAQ4caxdCNiVPyjaxJBxJ9Zf3SE4y3kb5Ksse8a3eSZHqQJvQdiVeLxDLJ",
  "key35": "5swnG5ND95bTTeFGuvDPpzutfbxyMH9QuCUeRc45wjjvW3viXhtDPtiH9WVsbro9ZEA4gQ73cmw25kpd1B8SuoDo"
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
