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
    "4PRukEhNai8yFFkJ7RfULBTwGfd3VGbCZdQ1r67hGwZbFgbdaAbnJx1GJMd9Yiha6Rwd1K7hdMGRGnjP8Tbd5rmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56uzD6KUwSXVp2h3wPxhRA1XLAhmEJRYw5k6ijXKfqvqkXrCto6r3WhC1G1XJzA2sGKQVTuQZM11x9YDKJ5Z7AmG",
  "key1": "T5Kp2dTsG2m9SBcY1dCJbZ9AdL5vmYFn5VWivdzjY8ym5j2P6QYYQkAxw3XCamwdYyqeckaaPYAe77RNEhVNpRB",
  "key2": "5sJm9bKevb1jRWkm65dgkFi7rVgaPJFgmCV32YjnW3X3x76yUE8RqMGbkwemdpWVCVxfNWzXLmWaeQeEDkxA2nXA",
  "key3": "26rVed36GkRfsjoeDetoVCS1xd4ewCkMTvohb8Hvy9BieX7fkjKZmWRX5NZZuyVBuqsCSEGFsYLtN7JojASbE2rs",
  "key4": "5QjWyAoNCiTrsnnj37Cs3ZdCVWrDLrSgCfn4TmjtrG2p96cLRS5jG4Hz8y8mAogWXLiiQXMm1LwigjjyReYB6L1Q",
  "key5": "3BCinpXF4QCiaZyTbkpQbSZHZqE4xywM7RpaCGDwjX7sXzJoSNGLauxhq9P2u4nV61o5osJE47AuznefTR3F3Gpi",
  "key6": "2wGVmwFYGmpPohAaBr8LR8udLCgFmk16cUUxcV3DbzTXTMGdhw68MGViSYPo6uXzR19EVGr92xnsnUg7ALiEMDBP",
  "key7": "63jeounSbrCfckK5eFF93WCi4N85u94WebGB8nFVaUNL3c9ScCWrF7G8wb3ejg4z4SPYSKpCBu6Eio88T44SLwQs",
  "key8": "4NsY91cwm6xEog7qxX2EgNgKPntoZmu9FXcDUvHy4h37x4k96mekMTokt167kVofXWBTJKh2mHUNvQdGhF1itG8U",
  "key9": "4aX3HdqUk2eshGkPZmqj6fdo5e84kV1moUFqwwJfLcZpvoXTALKNbUwDt6dUgm4u4ENufq9yS8UzzDTcW68PBBhc",
  "key10": "5ysRc1KNTJj18q2TA6ux5yW26mPDHS3fjKgrphWJ2U2VzNBbZfDrP5kVLuGqCTYZpFSqmnfPmgSvkFKU3SXXd76h",
  "key11": "3jeVQKBb7tqUVizfqaTGEtDMnYXcubG9Z3pmXVJtZq5hS7G4ykhqRAkrqNMmVUgNppom7Ujb93yBmCx6J9pdW8mU",
  "key12": "3Xf5hFENcFsbRs8JMQ9APPFGgt2pbNtwfCJmMTcjpSvUG5zf6atGLx2d3STcz7BmrfCXMxHXia9cg37yzJbfqnvH",
  "key13": "XzFSapxBtFYjmB31ZfJTq8QZPbssUk9RdFcuyDjLW58MX9UjmWRsEAsSYrAgRhiWdaXcYr7TmaCSawNanScmk4j",
  "key14": "mjmGJV4WCryW7bgafZZGa4YoEYrFRNAY1YQs4M5VsTr8QRmZfLZAnrAjgZYheAC978o5WPm98UuuFWA5WDXjUbs",
  "key15": "4ppfAx8923UGMgVUb6hQ9nuvuMmTvQdBdFKeVzTPFXAqpJPEC6RQhJZSv2z3yWpdWFJ29T7n1AfhHHxnRpxETi2Y",
  "key16": "5mHG4Ycsemc6G4Us9Ra7wE8x8WfQX3RVFi6Gn5kX67p2p5tBUUmSXovRJmhteLJxfP1sYKioVZJ5siuzXRLiiBdM",
  "key17": "37yycB3TaodQ2MFduuCUtv52GTCC25MCvKWsbdGzwenAnH762Yr6GUx9SSrEjnpTELiS5Mw66qkkQYzEUDgCoDbW",
  "key18": "3QPsbE6UMB4a3L7zpW4vbGCQHz5PejfeaqB4S4AT59CYvUUGNpKDWeBaad1bQ1qcNyk16rgoZCWwXAzGoBbeqYBf",
  "key19": "G8FdCC2vZp5bqy2tor2VVJpRnm4LDTSoZTpQSpR2gCT1yQyE4Hp3CTNJZBg1wMXoh8mHpzWV7wr36ZoUD3NNMjQ",
  "key20": "4mAzhL1HNY4hrtBURmkpoCCGycPAvejb7EEu5bmY2xvTQPnBxULdMTsUfPXpHhRUFjmjvpVSXpFuDkMMhC8h8prt",
  "key21": "2tE1xBrtgTmai7AUFfqMUvANrg2iVNx5hRoWjkETHwzLStReWq767ea1WniQebNDQBKMUZF6aKRqNNa8pGZpvo47",
  "key22": "33toZuexKTfPVwjDsQGWknZcTdbGB5bJjq2yDLHZ6ySiQHZBNAUj6CrEdAHRk4ryqRMY6FRuLZkFCpwoWAJ2G1a9",
  "key23": "67LXwFMQLMHps3rmWWTjgajZWxtGAGGgCA9hXzbzcg4wQJCu6BtN98Dqt4LNLg5Ukz2oVtQZPMJbxNwGXQE4kQY4",
  "key24": "3Ub7Fr1JTPFutjAMgxHkGGrc5aYxabGtsVT6r5v6vpxgJkHy69P5HAhdzzjy6RHZPuQU5S5cnEtt5NnxyZ1kVzUy",
  "key25": "3rCXjS2hvXsBDCrJ84hTGgsSR55fEbaFnwLBnYR6PV1hASjnBHHzfeTSLiyfFUzQQniPMoqrZ2XFtZV1udtkXSZi",
  "key26": "2PEJrkTDtLSn2LyTasvvWF9FDwk4DnYduC6uf4JhSDKhRWj51H7ax3LoWjxWTfStzdTXV58jArGscvpwZTGQamZe",
  "key27": "PA5hsm5g2HWxZtKttJ3ho5SCKe9EQWvTHSizL7LffvAgQLLpjh3HUjASJbHLd7zmgkG2He8SgWSZnHrzcvcU73k",
  "key28": "4HzGfjp2ZvT4p4LZFdCuzG1VJYB7HbRrAdGuXWc6D8QMgUtRhy3fTZruGkDFY3Br8FMq4nEyfru2NbwXKemDuVdX",
  "key29": "4CLtuKKSXzNMdJdswsrqpUZzWhTqvfx6oX18CSDjUZGCubFjq2vs49QnYRZKETo7d22VfDffzqNd8kWdVodXcFhN",
  "key30": "2mwvssheo7q3bNWWEGH5xePWMegQuJDtkUstPT4CVPNHXABz69Y8sYnxtSCD1pFHWfW9QwBzVpLS2DjS2uB9rcbF",
  "key31": "4q3ecRAAZHXVCRMZUJ2nzwQuSzcZhPqww3MziyaRpmSb9iu5oRbZVcKWYpVcyzWetXrwAXjjrYHZmWGTHrW5EBip",
  "key32": "5uXMjgLy7dzbAj7f85u93hpeDf9WGe7a299grSQfPoFyDhF3t362c8dFj5yzFeF2tVfqM9FyJyCyKyEuhvQMmEcM",
  "key33": "6qMZg5N4tu7MYuGmSqaQCZuDixFo6RJJn78rjagd6TeQ6DUC6aoZFx3DYy6xajih2B8gaX7xMHDqMjrvqGRQNJS",
  "key34": "qHHnsm267DVn2H8n4gXmkkghvCgZYi2DyutCTaknsLSwrgQECj2ZX7nC4vethkw8pGQ8reKqLLbRqyhvfTfiXrp",
  "key35": "AoZDZM26s4josDsVJaWFaQKah2DSNfxbxEB7cehDJJZdmEayDosCh6eraBNNe67SrC3e1zTwYEZdEVGPwocwT6L",
  "key36": "4jG41z3pXDAtGyUhC9mYRRDRBbJVYrUHPTZia5vLQdcSCyE8ymfmrkq2vPgHwdiRBRtvjePHH4WmxZe5axWxQmPx",
  "key37": "3Aiuhfnu53rzGBHtMDxVNoRgVRUULEsPDYN3nfSz6dxQRMWaDgctucQJH6EqDhBPAp5tqSLv2LmDUQ55TgcFF8wW"
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
