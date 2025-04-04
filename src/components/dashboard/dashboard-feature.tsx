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
    "2Jz2ZRY1hivXe9jZQL5v1Pv7GtnJgNQFMno4JwNaeLWsJuqUtgHbUkbZMFqq6nXmqaJ4D9kGLbkdmn1HQJuhisvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZgo3Vn7UMiJptQdfoBaJixHQJzcAGWcnyGxjtKkM6ZVGnvbQmsKCkBdgLUiaWDQ5EgWJTmCHG13koTXBJzyDjh",
  "key1": "b5mvRTJg7dXZ5mtEMzRzpt1KVmDUT8XWga2KLQxYWx7E7tE1U3bRvmWeRWTgch2pot9mYjWB3QyPGtW3JGbFapB",
  "key2": "34FxLtSu6z4VzVvZg2VVdN1xEnkJEY7Mk5HwWzUgtmS9zYSxecMXDR9Aw4cWgnPR2uepJ5CzzVsFFRtgKB9AZxjw",
  "key3": "5JYdskafKWHU957Vc6SQH5wB6G8ioHmJawRWp18zPHfmBdzQddtSb5TY9GoPmYVBqircH9NSQdnGkJzTDJv6VcS6",
  "key4": "2r1uoGCnxQGD1m96jTWnHCV4xQjVcbWUqSYNCiBYbnqhuYpu7wpPRp6Y65joeLG9qxxX5pUCkjM5koe87eWEwK3a",
  "key5": "h3en5qVPQsEQD9iNyEfibSoWRqFpb4xKuQhoiSHAuwS2YMvKMWxjrxzGQssuybRtsQTybmri95afxoc7wxERhMy",
  "key6": "3tZHkhEKtwxGbfLwLjLVNrRRX8ytK7PSfBq5mDumdFeCtwo3NZDvDGRk8QBxjdDPP91WTDLT7EEShSRJG9GQNqEL",
  "key7": "3WhnpXD3QWZtc8tYXHHYQ9DNYbc8MQBeGJZRNdNDz8h1nnvuv5Bs2BrLWX4cD9wARfCBDp2xJQeJDUaXBfrVXiQQ",
  "key8": "4U1QTzFvFVBTK8Kwj7mohK2MUxF2rPkVsijkFeMHBWUoXXgqm8MB9tR7q69ReahBPMdb6wRnx5DH5v2aDSQJ9iCV",
  "key9": "2u9rKkQitKjXyfNqYxBfBaASPXGG3SPi4wxFgvaf6WVS9LVfP7bgYSFwA8WqtiMZLF8od1F3vo1RBMwVxmfKSyLG",
  "key10": "3h2smNWbSidVheefEA9kvGWy4qnj6qm2xHhBWrgpQ9Q73fo46tGxqR5RjHGFdbBN96xtyhwpHH7QaLKkUyX1HML2",
  "key11": "ordyhtTydUmNPKBNjvR1mCwA3EBQssPkDaGwWf4y3nuAqyKXQSHWvy2NsZZQbWt7xHTsPGh2CfUmEpMSQNn2XVm",
  "key12": "2djS5E48uN2UQiEwSyCynPtFWTKLchMpmpBzXyNWHQn5qW73cfismcZRvXxrBZ5UEHj9ZZ5ExtmSbBa5ZMRZjxDp",
  "key13": "7D8DcidHpo8fiLo5aZatNvUpjYmbDAWJEt9opvC1fgyzJoTMBhVu2JWXZDygzvuSS51npSuKhZVCXtY3F8NP4Lo",
  "key14": "4LA1bzx7D8bDfov11Yb3s6XzEbi8RYUoUzAtJcTVBk8isLEy2JKrLAPH6GgDbpTByuLna4T4cGXauH4nUSa2AWme",
  "key15": "4UYEtqmrmpMgYmR6EPkWVtr2A4tgAtEFs4v3FwP4ipEouciDsgkSQeDXhzKD2iWscfjiq91cnzQQ9ozV9w6YZ5YY",
  "key16": "3PdG62Ex7t7uKLiRW4eftSBK7cPGwEufpwPmCFLWphGknP8w97gVCcqgY1bpDRXnfDs8zAvKwKSLjS2KYHQFc5kk",
  "key17": "63rYKuxZWuTE7CtjBRJRRKsAroa3ELbUF8KPxsiMLP8MaC3ZZCtbbbZR4H9umkWx6m3gvdKtF49d7nbDuAKBH9TR",
  "key18": "jZmAzCcVdsjtfjsq7Ad7hrPiBtdfq7nze4vRApgdnvJB9KnvmdybMwHminKrQfvC4SxXVFuopHkq3AfgWDsCFM8",
  "key19": "XRDvCMQDMQLj92QoYBoT6GfAP7DwVCL6qa4x5Fh1yRRunfTGqeoh5aChHAC43tpq7e8hkRigRPhvcuErm5B6Y6y",
  "key20": "22WPB1MB3ohA5nEd6e4TDGJfkz649wmc1Q4K8RKybTNzHZqwGL6meLHXPAUk8pnUqYxt8MpmNqRFqvfu68Jk28J1",
  "key21": "63FoSBJYBh4ELQDDtGv14NsvBJ1vUcnXC9cbVvJnbT7Dh3ZgZUL3uUMkDELjNsvnFfGmxx3XyCcZ14CmnLkGzXdd",
  "key22": "u2GiHgTnfBhn7WRZVQPzYykcuS4DbWBVgZcFPHbtK1uD2msHFaBTu31m4mZYZFhUHZrJhAcTsAXUdUx6jDkA4VZ",
  "key23": "4V144VMPCyYgBVKERpV6JsrC4SsBk1tE4P1EtcehFinsjxenjAxuNy422np1qeJPcHmgRwfpa5d33MZVzbfLUMwo",
  "key24": "X9SJszgQ2PW3T6ovy5mZqJr8JvxMqyCQUpBcey4ZX7akkBL8nqBbMeVhHnG6Y4E1FhApxxAinJJBdBsAsWNGcHU"
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
