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
    "4kvtktmaGAoMJT6xGZ4m77yBuRenpeLb9Fikd1ZCddSncaW9aYh6GHpRBPkqVhK4sH3Lga6gmKJFHrVD88Gjx5EG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WievTX9fUCuHFEEhgwbfLikrutK65A2vkQfFzJxckYjqUtkp2X8umg7NMy3T27QNYZkzZJaHDqAP9i82eaAmmJJ",
  "key1": "58Fxzw5h4qUYCJ4iHpw1HNPb2n8FnwAznzLhCx9mFqxQAHwE1LJw3XAcJhZR7oRW4izMTG5Fp6iSwfL1TLRcEEDs",
  "key2": "5x3s6impbxQwuDpwk2cJx5Q2BpcSDkUJCRLJh6MuX3SPaTX4tbVKrrQjUFt2EWiqis7W17ZoHFHuo5ajnifrhxt6",
  "key3": "3KAaLtScYM5aryqfbQU1qxhpQTHYc6wvuwbpxLSeLDpS6ka9tyJscRtNKU2eEaxVZSvZZEcXucMAZdo9PgaHZaKd",
  "key4": "3GKgF2QFbZa6VAjifGBVwcNdsHmmCx6V9mxaSiWyC84XYZHirnRQc26GvSTFyCRDkrZGq4FpYMuasqGnfmwS1CnX",
  "key5": "5spPoK4c43yNEX7qXftvb51LXJ1vkL7th9NEMjNBtNjFNBKYBe6TW6CWfKZGAvPr7hibG8S6A71NjAas4D6LsE7H",
  "key6": "3BfcjgZvJXurNpjPZETaJGRA7BzxYv8N3adqbhggZ78juaEcDQNQhQAUEeDxtA4eP3QAMnCzCfEDyNG3kmF6PjaF",
  "key7": "4h58p8XgcBU6mvzmr9VBqTGh9FTNXNYgTufTjZpGQhdKb1Ho4MrBD1ZTipsy1E8Es35MAXxAND8dC2HYdnTuHGYa",
  "key8": "1UAc1KRccqQMqp27rpvQDMvBoMugBSm1rQQF2GXdjCYzJWZcPs8hYpBAUcunT8SjsMBqmpTmvgUwPZzZiFn49KC",
  "key9": "3uFYGMVQszXbkczgKEGuN3ZNe6RBtAPr74JrgfmqpDESfKh3brgR6H1VyuJyuwEeWsnhtMxJwKnsA7qH4EfTJMY1",
  "key10": "Mv483aFrTuDNZSufqdsd9Zbq6qmpT7NscTJCj6ycwwjxcExgLYAoCpgn6kTn3o48RWrwK9wqor8i4qNY3V2GQ7b",
  "key11": "3RErq7YDSpVHdwM1Pat7o2sLDfbEczsoVNaJdUMseSk58Rg8fCVgRdVjrrA9xSyQdY9GpmbSTQFVHvbPpC8naF3K",
  "key12": "3wztjRTxf2GRQiM4fHnMPQxfCuyZUTxDE3A6BLJ53VZd9dLErijyKDNpQs1JziV6fd4f2B4eJQMuhfbzyjuMFT2H",
  "key13": "655eKkMKh3JQr89x52ZZDyrCDKa7RRUxgwy2t6BUZUi9iEdWLiXJ9C3vUnCwcFSREPuHySfK989ybofhcq9dGGZM",
  "key14": "22xrzanXszvEqzAGyHWVf1rKhaQPxaPG481QXsWCuZ5Rw3C5ZQzitEUsbt18tjfLLaqxCMGUGKo7wuEJwQ2zCdFj",
  "key15": "4DoE191TeDa3nxP9YsRPDDAayDDZ7frTTyCuUdmMKijomhmaVmD5SyGKuWXNgW1sN4rmjz6epYzoraDWBgcmxmtQ",
  "key16": "EGqWMyCYWLriqLv7eM9zdpAPinP8YrkUsBtLM4gUGGbo276n1HEzLiAbE82pyk6Au6hcCiQAPnqk7BqtFQ7fneb",
  "key17": "3ud9eEVv12odphNZisovxzRWNsDBDpKB8yqgKLqVS4DdLUkHfVK54ZCoBkchU1MkKUhFhRoAWgEaoPkdgP1MP39X",
  "key18": "33qYdjvMLojpVFp5Rveqvau6beeRbgwBiHEjkbHTHUg4cimUD2U4QMZ5NpXS6Gg2EP2mwYMqBv6wq7icYkuf6B52",
  "key19": "3nevBAUH8CdnisGNdEiNiiMcopWHsxa61uW83CUvSkyhyCdJetdZ1xsfrDaR6etJADVzDt4CMatoaawQSyWaiRE1",
  "key20": "LqmecnYEQ1xDtf8UwYVYeGC5XJYQqpB4h5FAn3tjhFw4WvsHehfnsye8MZ1oZncDVGVqE3qbKMfzirbffZM3AU9",
  "key21": "pNqVcd9zqVXFcUaRSECdSPWdYFUvqb4a6jtfeKJAPRoYUZ3S6Gqnr6fLiG3NLsZyDh9BSJZNfXM1X9gnsd2mSpe",
  "key22": "4xAFjM1Qy52SSLTCdt9CXFhoQqjsgb2866Y7r2knmX3DCA5ghCagYUauumMgw1Nckwvge6r3KuDHZF8j966ZLvLR",
  "key23": "41HcN5onT2dcBvhe9MxgXSY8wZxpYLh4k91k51w4KnjZjwwqHYhHqdZEqxmrRL77VMAz7ozd5JjcE1fCLsvQK7b2",
  "key24": "56VEZ1DWAaF7LK7XMmVk1Pcnib9LZfJyey7HQtjDz7oApoprZDNVCXNfx7MtsHyujmRUvyGkvx1oN79v4cqgof6s",
  "key25": "3Ev5PBSjVCDWEaTyFi8RTL6Vx33z8ZuL2JRE9Xn96jqAQYv82baZns28FhQfrt2uwrdD532Sh723DPzXpLsZhtE7",
  "key26": "4pys3EQinQUVShxizPKDcdrCWSHK7SdtBmYAeAzh1KgHTHFMLmtkayRhnwn7dRR6W5Ax2yJsXJCQj1PUR62wmJ3L",
  "key27": "46KMjSxPQh7jiaS2FouKuwUFqv8t73QsV4sLkifQ9CTQRogjEqWFf8xYjHe6mkywzJjULBxV5gN8iqU4HLPyUMHE",
  "key28": "38cr7Hvs2hu3XADVbTVADu1ZyDDBE73DKfMPreVPxMmPNaQfPAnuStGdiBtxpwTFGLYSsPYM2siUcfULpiMcwZ1q",
  "key29": "2Lp8hJr7778WUqyR9FNRTiGfcWTw8qeuu6ym46tuBVyQTRFkP3SpjY9FRmoGEQVFwqim6d37ZabWz3vEhwMoem7x",
  "key30": "3aRpE9REAeMWLasu4dgXFMUFCoJC8e5F3pKhzDX3mTHVqC7DGCA9qmX89ZvwJanTX8cQycUu4kznDeqguzUVas4",
  "key31": "23Ha9Wu4kBksoeH4DLDYK5hRBsFhQ6NDnmhaYkcMBLJfeeGJtbe8HWSpc3qZd5WW73AjJBv7P48rmJKHMrU5uEmD",
  "key32": "2DiLHrQZJZRsW8LzhS4n7fZB9pKVmSocm1LEQzVnse7nBZfTNKRAoMQQRKRimxWDfeJqS4QoHpCkZ7fun21hRx6n",
  "key33": "5JEqfBbEBZbqJ2skbrVSL76eW5PFy9UNx5TMvAkdoEYuvkszSvzKjf5CtjGZBPKGveRy87JFPCY4qh2tdhnMUYum",
  "key34": "sa6GHzh29TrUiyfWUu1eb1pJNHnoXvVzexekQypWgqviLTCxNCTVzNmzfTTr8V4BFVYXuhXgbd5Mfkm1ndtaiuB",
  "key35": "2nMdYTihpGPkQs3rvqWCzkGuWn3DNyuQUkVaLjVqbxV2AS4Sb7B8WPXM7kRHYsoLscdfK3kaBVjVHpKXN696SxGT",
  "key36": "2CmrHQVjfdkX2hX26hEbcxLDUyztZ2cZYXFxt8xv4DfELeaEYkw8DVzHm53fKeonxVragU3tjKUDztMN1bhyedyi",
  "key37": "3gakxRhg3wYsFoWCih1LBMZ9PEi5NuCrJfpgjE5BEr2r6hY2Kpo6ZtRGC1XbTGxvh6M6zRW8Ph7PHgoqPLnGrZnE",
  "key38": "4R7jbBHBwhd5mom2hSfcaw8qfwtnE33aux1sPs1rnsCC3gmGVWqyXzGvADabyqfJsxba5BRr42FLu7bWYgyJZzuB",
  "key39": "31dEvwXeVi4MbkTzwdzHRKocAJmdf9647drRUJrKnLPaW9hpKvR1L7BCaqXHSMrBqrYcHm7bBVaMA7vbt6qMHfj8"
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
