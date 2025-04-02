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
    "24ogCySpzRVPVfCjDso3PrVGZbHM22MZqJj8me1E7VcCheZ4MtdHoMz9dPJmV8KkAiTfgRKSKhMaqvke3bNENxSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DFXGhJi7NMxyQSAQJQCrxR5RY6WCKwXEjVRNWddAvBH3UxYqF8HKVzM9EhTnoN5LM8RqXDiKKREdVvu7T3HfJnC",
  "key1": "oDbQNDtz1CD9fU3cSuK89xKdRYPUczGV8BqDe12T5kKcAqDx7AhVmRvtp4LHz7gMk7acpeXxX26EpQUkCfiDEDb",
  "key2": "3Qgn8o7GtXu21GAgywTYGD4cuv9drtemw2PHJ1mSSbKhQxYcJpRSYp24JZn9WAdEWdFXCQkCHPcBThGqv3LpkcUh",
  "key3": "2sMc3cyS9Y4rw6tTsLMWjQyi73m6oeSUnPNLND3LeRmnaAGswmu4tGr9GCr1KiogHgWicmVmwXvpy3W2Z7BFRFc",
  "key4": "4B6unC67qa7iNnTP4sTcSot2XpiKg2tTY4SJVvyn8QnoKugLnmPVVYU283Hhcu3CP1sPR4bjM5AFxMDfmV6GmCce",
  "key5": "5MXw24mnUJVggMUhHpA9zLXJyvLb6prHPK8mszWHMhaPGMauuzrAiXBLFZ23PZQe6NPKYCo7a68wqL1K1UZBb2mn",
  "key6": "4kUmuzVkrYBXkHxeaqr38wk9d3dj8bhuEzYVLJU2d2GDpFegpMTEPVDPkjPEmDsw4CX4QPPBDjWY8L6ts8yPieqA",
  "key7": "2PT7oi7t3Sp7ciq9ADUGETAFD6zrisDXhDxGJwermdHb47gop5xNpUiTXkAkD32SQS5USZhcyUkPzvnRyL6CAtP5",
  "key8": "LzgRkDX7jdguRGV5T9ck9wAmpLErLKjnSC7nC5c7ZhVQddRdatxBANzjSiMrs4CFRZb5dLqCCaru4hFUC7KXgs4",
  "key9": "xc4FDNdZgufNkA6dz4eZkgZxDbVba5aQ2XUmsvbxYtFmG1ir8aNoP8niCz2jYXD6FKEPSrW9cSaq3WyeUZKyxxP",
  "key10": "49hVm17vb69Et3DfrVY6dQQbAhvszQFRUGRzfjmEZmBA8vAWjz1gqmCjnHsgYxxT93Qz1HaMuRUimrrk1H3NFfHA",
  "key11": "5pjt8QLyjncFCpiq79a1cFKcnSMhCyXjC2KhUHYJ5bPy1hRj6TfucGT9GvqiSAwAscHhnwqx452q27FQb1hEZTXB",
  "key12": "5KWxQZJhi6zYDjFCmK8RzTvNzsWojjxVt468ubZhKsyRCRrL5tL21zFJ7zZrQgkYkeJzoNMKoFBcSP3cAte1dven",
  "key13": "4iECyqPHwH5cg2itMgWQ3DcuWdRhqGmMp7cvvcWi75R7u3BcpwuDSDpui3f5MH494JZcMQuqbVouBEAS4X19dWTV",
  "key14": "4eP3zHF2MpBvzwUiLkQ7LSXdUWjpZuenNsy5rZsaDoKY1DcpXgrbPehfiChBiXoLJrkWrkpY3xnh6so9ucjQMePC",
  "key15": "GELUgUZvS7Nk1en6XHkW34fAMqp9gW5H1DdN4Axhr2uH3XFwNp4sJupQFNQk3Mv4QNY43j2c7wkRLvW9a8GKgZ8",
  "key16": "5KTQQTz7kcRwAJe74AJV24JYMjJ5GKfMkJvegf7AcXmpaL6sjUrcseir3XGVvjCgzEYFMJm91LsppZFYDgZrBGPr",
  "key17": "3cq4sPzJ6RzwFiv1pLmxt2AN542kJuqwAxs3hgq67odQ5jvkBvnQjNCwdkoiArUK5AHnqJnNkZdrhTNJ6i1KQg1",
  "key18": "4JQhkYYaZZfMhr3ZfPYGiDoCqEkr2xxEKJ3PvEyMHxj5FcatbeGaw7mjLXM3wG1pX75nQn6TZZ6pHfvYwKioXnKT",
  "key19": "3WDFqwaT9oZfjxkV5KXxw5qvZgcXPQ3dyx2Apb7zNTiiRMrk2miT8e5pBuN2C2pZCPTMQDAbNDSTV8S8jxRRo17a",
  "key20": "4XmQFLQY78gCE4uQgisy4T3Ei5ibm6gBmqt91rAQDuHHHcuBdkbWWZn5rJJECTa4jhvD5Db2VTdzLxv533oqBc7P",
  "key21": "3GXmC73AyMscVRrjZx3TruYHAZgLKuKiDRF4w1UHwmTyuQ5fCuypxTubt9gudAEfaaVyyjL9YpU9dxYTJyRiUyBZ",
  "key22": "1sbCvnwjtxxkDAc2WLBHXzK4BoxVNkJtZjS3HVqS6Hq5hRnLM3pD2Q6iwn27UCvzXFdk567Np5i2ftojJKnTKJW",
  "key23": "4TXPxPvgbWBx1NTeK5nK31NikKZYRQo8ZcHfVmSQsu2yACRTAdbWCzmo7uCYjiakVTF3XiZAk4aj9kNifJDBEEtx",
  "key24": "5nGXYgFatohnVj1yyoK5usVYEKVZmWHgasnbhNjJEwHrP6r4CnjL8cN9vwxxGXf5SskGMjJRB2akZgKW2pgtpKHh",
  "key25": "4D9qdGuGVa5c1kpahaJWvquDy68dEuLbAe5s6MuC4Qceu7qQfgAnipcXbcDLw6p6DSPKGGoPupMmcXPQPRWWbUwf",
  "key26": "56Pqyt7XPG8wHpshR9vTDQCympGF4hBDd6Xtw91fGz7jycwDfZw8C5BBXGz754p6gMdbtXchB7N2YpEkhSvq7f2t",
  "key27": "2ksq4Ug5TFsRFCgyBiXWTAAFg1TnGV2FnGe3amw4t4tUV1DUGW3MohneyHZvMcdqGkZDVsGpcgM7ZxtfGeih1oK8",
  "key28": "5tEFEojSyjaffRqbYwkFjMYEMS7naAme7bLbS2oUpQAsKyiai378Qhugkq7BXg7ED6qwewjNVLXq51gZJ5Ja5FXV"
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
