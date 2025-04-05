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
    "2ehuaxAq14eo2WNaKXxjCE9MZnFbcBzcngoDgygPk8mppWFtMJveMovK7VFWU3DPV1NkJ2huLxBAGr6imJW7h9Tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfsq1CSkyUrrBFyUdZdgbWYyBXW6zKG1nerXjqkEcJ6789byvddjXS4dUKyUEc1o4SZQ84dYUQ5xxcgTnrxenhc",
  "key1": "3yzyVuPY7zLgDXbmCQfvQMTT8g1KziyQsDY6G8fSq7fM21rtjP8uHKb44XjrmgJFNCZFL92ZKS3eCi9dxonz2vJK",
  "key2": "oq5hwxg3R4Su5tXLfTyXJGryws3X9YxQmSYLFgV2Vs9mYwqao4Ja9iP1s1218JbDRVgtmsK7XmEa2v2NV9LvoBw",
  "key3": "gF92qedbqUQBwhv9GE9JFQCqEeecY6QR5YPJai7GjR2w7Qy6ScppcjmV3jxW9dRuzFM5snvwsD78AaSSEfKhyqe",
  "key4": "3GHSU8JB31f7A6FnF4hY7Lu7NDjSDeqd477Q9zKF7Ck6rV1Mc1yZdUvtBqUMH28g1edAcbcjGe7ESPDgeWkYqRVX",
  "key5": "4pLkwDHke4NMhNsgzai3c9Jbfrdrae4Dbek2YfizMUa3nQJAsJm1NKDvkNj4sUVmqUHUa954uww9Y664iWfWZALd",
  "key6": "2cgchJHtorzhUyYmHTnMubmokgK6qumHCdWtEHqpZNjYasXWNALZkDwmBopLHJzTgaTugWdovk36j4WdZxfMqHd4",
  "key7": "3GSZ1ixbgsF7WNKBapjSkP9ipTFfP2Uwey7yQJ71p3PNdVXKCDGmG21hARiHhp6QNFgMpmxEFVNmURmVHwA9Gz9f",
  "key8": "5ouN1UoNj7sShu1aFG5A9HFaTb9mJ1rt2KR4f7pe9wBZTciAW5VMTQucpppzfn1JkrwwV4DGhMKmjzgruwWtBgzH",
  "key9": "SZPwXoMVPV65oxTBTrRwQxcX669MzYa2V7kaLSFi5FDYBmrdoNQUfkJdsaKWg6VPibGmNw6vnZ43v8PZne4CPnQ",
  "key10": "3Wb65BB8JcQzMHb23Sd1BMQoH1A73W2v1oHsFDB2xkQC61fGqhG6EuPbsgErz21pe8oL7792mdRphNe36szWu3XP",
  "key11": "4kmLwzeKtz4tqvpX5HQaREirzcQP6RRtDwNjn61DqwCenj4mNMoA2pU6dztywXtjkehcZpHYwfU3YsJNFqLpXUYA",
  "key12": "NiXkSLRn3WC7d8daMefVx15PUGSJEGsJL7GjJFAK3yguxXmWxAwxDUd8hinPQATwUeeJq4jniHtqDFzTLzjnun3",
  "key13": "sAJk2So74Y1SPwMCftxABB42EAsbrvXvRuvYREBDonS5Vy4YXw3ksyXBCjaiBAyK8SWYvApZckHFPzAxXzbagid",
  "key14": "34atrVnzPbGwxJRHYKM1zCxa6U4gsWUJGGG7inHzp8UrdEMuSXxXVwbQLH2UT97v4ySkJMtiPm4y9f2uApB4WioP",
  "key15": "oRz42zARTLzfT796hXma2TsHFnQXbF5uJUZaBi42kgPrAACPNdSTFzcXBE6DBvn74Bs2BR8vVRKo8mqr8wasLdK",
  "key16": "2bJ1b4GqBJUBHrn6Br5tciKHUfsUx3Zk3dB4Fjapg5KBYkDQ5WVn1u9mjCaz5QcK3hEBHU5FRn9s78367S1qfcKD",
  "key17": "5mhd7bXmU76MY35hz71bHsKuX7PpJmKfX59uR5e6XtX9SPNywMgr65iM8Wm4bmzpHedW9S3XHF7TLbcxjidSfq4v",
  "key18": "2ZQF5hsMwpnMsbaPGyWfJohwfRUfPHKzL1LU1GvPKkVZ5ZMfy6t7SyhfgUGGDqywgbHMNHVS9CKrVz2tC1DftSNb",
  "key19": "25AuejaAfZEDpHQV88sSJJ98Jrcwsvwc6K6fBGsMSEKsb7oiSwDNfk6FnYgj8cPxcUCq2gdvSRBV7QHuE6ZxbxqZ",
  "key20": "3kN19Ug7c4bo4Fj5yCDcTePNLkfNnR9k9TkHyw4rgE5nzSiW8r8PqzbiYP6Tfn814LjVfcK4Z2uResf5CMreu14a",
  "key21": "49TNEteH4aG58CqA8Bag3G2LLYVRby7pjXRn7RYnRQkAfekqtt6PNjSpqSou8FXEFYynHgsnHzHtRSP5Len1XLHV",
  "key22": "27ZJpHZmeUJVADx6igkY3G8aSNDM7iproeD4ShpSBKRa8uYKUVwSBYNZGrBegJqDn5fP2QsanVnRDcuUVMdmhPkJ",
  "key23": "56heGtVQyNQLLRDEFoiJ16uem8mjLEy7ZefQvatktbukorky7oueeJRarQhorgJSvTY1wT4m6QB9ZtCnSCd8Peyx",
  "key24": "3Uy2Tea36aKHE6iaG32bsj32EF3mxU3vbSgDFzTjrJam847exPUFASppKwyTpq6rPvT5yxWDVjo9UjgUqTjeUT9e",
  "key25": "dA1cenrZ3czuef4etVojVgca1bKgAQRmfhgfT24VXDd4wT2Myocu8SivHgyU3NH4CwWgBgJ6Py7Aw5qCCRA7H1b",
  "key26": "eTVWXBAX4QKYCz3tygaMsbjwa7R5jUZv7S3izrZAHMWMJ5uGUDMJ1XSw2kDUHye6W36dfVaAgav57oh4QtYFAo9",
  "key27": "2Bu33rm55EK1WNeHb1ZUh3YZ1mBgyn71qvgngbkoQMYu7cN9ru5uBA8UJqbLSKHtwUkDQa47i9XacsdEAvJrdkDG"
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
