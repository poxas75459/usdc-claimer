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
    "3UxScR3T8xdiPWoxAknS77gME4AZNm9e1xwfB6Bj9DKvVgDn4i3ZaaBnHipdXNxMpqrRBwXazk4MeSD18Q1QCAYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qDVnX8dW7aGyia9TqLKCock93n8wDwZeCfBcfZHx46227YFdHKiXJTr3EDJbqioeU5q3PAtNxE8Zm6c38rMEVmw",
  "key1": "pZputj1Uij7ZNzdNCATzxuuSBz1GVJL9a7RLTJ5ABcF192juTfenRPMAfN3vaAnAqb2Y7fqKchD6NJfa2CKJUks",
  "key2": "3nw1AauuDVQGw28guG7voUXKPHKdpaWn8PmvR5cMKQFGN3SNTk6C15DnhLKPUyiB8RoWGRoudL2WQXDVE4izxedh",
  "key3": "44cP6BWBB7MvWBSR8ujpJUxSWcqsAD9qzgUscFVNW1njQV2eVN35XnjzAWzaQzUpWBBozVc5oxa5khZpiuZ6s3Ka",
  "key4": "8Bh7tDBjzuSx5oocWmrD5zpqbaxfQnTu3mdx9fNj2WFm8g6MjQaBLRhACJmw6bBt7XZR8SnE3mqrnFYfsYBiizX",
  "key5": "3s9E9qagQhJ3BMpz4SXd4iM69GTW13Qfk92Fp9RdxJtxTHexhHu1SYKGomvZLUtiRzARUp3hPvfPM7YA78Mzpfus",
  "key6": "jXVxVkZJPqjM9EcnL8ZEDC4T5px2jMQqab1HdJ1pZjQ6M98hFeqcet42a6443SA3z2zxNkxhxuB2RejJ2k82uVu",
  "key7": "2bL1iTftzbhdwcamxeJgsEp7Nz2Y4j59F2ihLDMqQHpgka3As6h6fJttnnxMzfdEU6CyLE2YrEYGfZBvgHTE2i8A",
  "key8": "3UVUQhhkPJDetjvoqKw3hVyApgHhFCVYNQMhAbi6br2apT1w8yZSbV4xLxtzJ3FZ48MM4eHRvPhjqTas6FS7aEAL",
  "key9": "36CRD2CDyVZP8htYvxiKAZvsS7m759qFsrn2cHvVBFM84pb7WBYwyQ7WkMjiLEkgD1KKjYLCpf6K72Tzj7yLHMru",
  "key10": "7ShxjouCK41JEJ6GH36zS3CKcNi54DACSp4Pu2E4ttTERAf8aFcrFjYernXPUdgsTeBxarzPuFHSH1K9DMBen7d",
  "key11": "FhketweWE3Ht5YmbiPR6xrRvxQbjpnr7z9XFQLtZmTxT3QpPuPsnJX1BwF41Q3vWhKx3VkqQb5FvUQy1dW4wx9z",
  "key12": "3mTadzMm7AiJdAV17oEkqXQDkqpYuicdBVxxFD169zRGak7Rhngpuoaa7KjfFVhgrfNdMinSY9Jsjr2ikN6WzEbt",
  "key13": "3D3GdVPH5RNAidD8UFExbRkwctyizSAZ1guxs2d3HpfPCXqcDo9GtNYnPdvW2mrnahYUizqifjJ7BvLAJX7YgNhH",
  "key14": "4JrJ2zjK4cRWBnE5GRbTJRxgnhZMFjJJYQkN6YUztAACQpc3tRf5qjgXvC4KkCgyaP57eDUKuYJ5KrXFTBhUB2ay",
  "key15": "zTH9J7ADq8BYKpCrPbHwZH8fbSHnkioiy3ArQvBWkskd6akYruSJDUvzfQRACmCe4xMEZ4yvKWGit7VscPoJqMS",
  "key16": "4smnC4jJA3ypLZdfhhEw2DdY26dFLJRoYXew4XLXE6455W6Lc5KTw97rzhoBJSJ7yRKmnPwKK4c43s7iAhrVq96f",
  "key17": "2VQ5HNQFVZL9tC2ib16F3y1JCmeoz3UCuegKcEEyJyV26AieevpZYd24YFyf1gvtxYrBFi8Z2Y89SKJ7Wv49uxdi",
  "key18": "4QxNaossZJtAjSa1NnEDETQTJvYzCRxVPGQ5oRR6xorDMbZUYbNHHcga9R1p8GfKmiLAu59Tsyr8jQ5kAywCzFqh",
  "key19": "46MmMsNcS2Prbqj9MWFPK4P2PqcNzCUWMeyvaEyksWrbdffeegCgUXjFF9E6rWjQBSoCp9nbq66PFiwVStQNteJk",
  "key20": "bfPZVY9x1qMkFJoNFhRVkkwegfN6C2HUftZfceo2ByzLQhoZpKGQwGkJTRVL2zTNMjHN6EwGBRgFP35mD8AoUvP",
  "key21": "3xsqwkp2rYpWHPjqu4kYfGLuMzNEmmTR41JKnkTtrR4jLwj2iajqedWM5XQMyUPXVmk5KotsEoUBEegCcGCSTxhk",
  "key22": "59HYy6c8BFueuV2apiNyNWHjaRzisVghZbtCLtB8kw4uuVC4HzeAtprZDyLgrSejV1gLAoKdZ4yNuZ1mqP4U5z3B",
  "key23": "3Ho9dss1bbi2fQmj4rwMJqoeNddi6gg27j9TevrPUiBT82e5xJXSRBUqoPsvzGGpRsxAXxbTatfw3Sv3tsg6EG65",
  "key24": "4Xke7qrPx5pUs25M1kxp1EfYn9dsaQcStaKKdHHvVCXgMnzKmaVGZWLtyUBoymcBdd1qwYTtXjznXmMLt7o6Sxc4",
  "key25": "3od1itRyygHKJywFG4LyubccyW25Q6ANGMHaHnAtW2J1JW7Gkmag6GfPZB4wXBu7pH5VMdzx9dEMycrBKL24waHf",
  "key26": "4jXwK8wJu6xeC2YDXnAKMHQQAXN9qpbDJYTwZENiKuPdgB6QxxYfRR5vES2BUXvEqw1zitZpaUZgPVkD9rmtYTt4",
  "key27": "3pSZLqxf5QttWsuTkeJq1vssTXKqj48BG3XxKdpurnn1KhY6obLtjbEJux7f1EmfGhTKsu4TFi62it6wNfPsCJL2",
  "key28": "3soAMSoVoA2R8P3RYVNPDc8MGhB6Pw5n77CyJFNuFh3wz7Sk5ftLbTrsvGKSCLxe1LQf9aZ1iarDfYTBDXLdejvL",
  "key29": "5pteysqyXsXGfRwCXE7TFYwot6Gk8QoWQJNU1b3aXj1fKH8UJpbDqBebC53uuCVkTjrEyyuoDSsDWRNzdrkX7x3o",
  "key30": "iVBkgXsyPmw6cijVKRJXaCKVrUYcxBYFDL5YnzT9SLCu4nw5gNsPbCJf9CStzrAsEbf8QLUHXpmbmsyJyad1o8j",
  "key31": "R9qSxgosh8KCVoqoGDWJkRuPKdTqMgseX7vW2htumte8inJD4be8j2XiscZhV24mAG3p3Lb2MWm3LQY5kbLkgfu",
  "key32": "53KVuRfu39weVvspNxxtm2PGjbueP5QtTxngZ9PHKDue38ZQwix5fg7uuLaWAkkZsoX7zoUqYKvvuy4SCEdEGti4",
  "key33": "3S5cegDxkDSYspiWyrczwjVEZ9KzksbJLoDEow6NF5tmuDLgYGC5yqYkd83KUpLYEUXPBSEKuxSWNH44SaiuLAvR"
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
