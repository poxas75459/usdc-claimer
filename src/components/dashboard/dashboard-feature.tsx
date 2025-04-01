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
    "32hGLfCj8VKW2PXWJyTrd4uW5c1AnmynLfmv35MEMrPn3mbdNtRVfKhXnmcarJ5bPJvq4zND9uNobYcgLD2vff2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JYT9agHXJjxiD6Z9MxrC3LFmKuhDa9ccPrTyHHQoXBaf9UjXfsVnHXgSHSg5jDJc55Eq3TihYS8zKxNGCKMQeXj",
  "key1": "3jdVA9JEq1MCVr6pghJNMKfqNqTUPNmr12N6QQnvX9sGFLEBq1BRgUdjHoAHmVZAHw4hB8DMjR47dYDSeRvdTtSs",
  "key2": "5QAW2ya2a2k6fDn9rgNgoidMsykPvwZKSjt2wN5zraMxgK5x5xdz4c5Ys4BA3X4jFx9brmrTWHNuRzwZLwKjvUoD",
  "key3": "3mnhGP7VQwEupHs8E3RpAADUhZyBpCk4njkiNeKCnMLdZZJBaGmAgFa8o9VgeZE2vD8yzo8PB3niLiCq8eeqbsoz",
  "key4": "5i2TV2fwd566dAeCLYYp6C6WMkpkz43mbYaTxBA2dB8ocYy2hzaaKuDaHrVbfW4njUR8mFG4x6C3UrgWoNy85H6i",
  "key5": "2dhu94uQWfUZRAyG159pNkVU4UawpMdpuikbxt7pv3z5ujzgj8ZjAfj6UBFkoVhESo8qoVU5pEPRFNazqpSKRfq4",
  "key6": "3hM3ke1G9MBFQ8dumc2WnwGS6rSE9kWVotKfTxWRvg1hkjBSmNpZaGNxRbTUjSHYPmJBvHALWiAW45s9TCEwTxFz",
  "key7": "4DPeLvRTHKFpN2H2UbvJ3BkTBj9Sis51fa9u46Bn9dmWw4b3kQbxJ9jqosuQkLx4Auoits8MThJBVNvj4o2dgtxA",
  "key8": "3P3UEQ4RBNsL153jLmcSUoUzQ13ySz5tcWGnvCm6SpoRwELnpKQup6nXu8cQhB9psyU2E2H82zPrzWkuDSnyHk8K",
  "key9": "2iW78xjYUzmMThTqMqhopeUk7qimB7zeU19NDzAgenrRHWaCHzPWjuURBcjCqVPkqGAFotKcAvH8mm19s2P4Mov2",
  "key10": "37Pjv391634xdMaZFUNDuJWAa2nzfmL9UQxKmJ3bey4d1Gyu3pdyCbw2nndvi24GmuqF4aEczjJXySUSpWUjzKYz",
  "key11": "2QCVVP8ZhUUFv2WQb4nr2zBrMnJWoHJQ1WWYQv6NBFPsbMw2GirzBmsJ42sQQzkVVbkUYJRG3L3wEC75zz55393Z",
  "key12": "5xU5TeaEiHGx5yTSCWzLdwEqYSkVaY8uwunKkZJj3v1vJnYtAXX3ZsQht7ExYLjLVDb6fRncRJx2T8EbGsExKuEz",
  "key13": "65WpSYJz6Zdyx4rtAaLVCchSdELkHpc5JbHuNXbJbJYpBygR4bhrkHFa6gsB7fGBWsa6XeJY2ayD999auZxsbTm2",
  "key14": "57UwMmVN2oC8aL8NzHdP2R8a7xZJpoLtGh44kw7ZFTSaUPGoN1xqJnLMQeskrmpW2m3m8ZrHv475qnFRydiq291Y",
  "key15": "2oLj1X58FcgvS6uXKaYUNZHSHaD8ouZv2DLNt3MjQjCx6tuqtWuGFcQ64AJAn3Pm9VPRWo6xgoCyYkEiGgHPwoCf",
  "key16": "53E2TzS2fNiBPri9ciY7pqC99LnCHzfE683s4Vbh8JqHTuxX9o8PsDV967LHSGLaYQL4FNmab945zwezy8XyiCy1",
  "key17": "3yLiKX78Dp39evvs27Bo1M3ahhDsnNc2SJCSdrvXQqmEj6kfLEhaMVZcFjRVz8U7FkHcwy7kf6ncAq2UbftrM5U7",
  "key18": "2Y8T87dfq2n2ZfnAsg45XpMFaFcVVZPSpBCQqW7zZkHsJrG2gQGLPHdQXmedDTf1XwcLXfXC27cx4QMskzv6nGEb",
  "key19": "4FP6YwBr6z2EvGtG4RtwLjYB9iAJHz7cD7uuDhDn2W4V3oMc61CUoRcZfXjy3JoXSzmBqcu155tdT3Eo6remHKxd",
  "key20": "SiM7ZBSpj5JMQ1jBJxY5gfeQon5cAvsirWrisGaZUMNzQvgeR9ETG9UVoUoNWr6KpnmKzLAtNRarcmDByoqKZrA",
  "key21": "3qLMW3QzEYEDYYYz6TYehLTgxK6xXYjRZN3sX2JK86v9k8qMXuGr6erAGkZJ1LvKiKChahtb52B7xoL2gZuEhDvG",
  "key22": "3FuEEW6RKHPs9fct6jP9UcaGFgvUWxgDE5GrBTDstP41Sx2Gfqq6JQsF5NNxy418GUUxc81pEGkgaSCf5hJKF9kn",
  "key23": "Zsx9xJVe37biNgsRFgZcR7FLPuNWiJ4LXnTccHbfPbt61AFGuUWe8UUfUnVtgnWM6moouvkyCh7qqFRqKoHYWAt",
  "key24": "5UZMjisgzWGSqZUPerdVst2od9Gx26uGRt18mghFKJTW97MQvkFY9yAJtAzet3mTsAEVKoPz6UorhPLJoRqLHBLr",
  "key25": "23GXyLzr3fXPC6gKafXRMWfwjzNQMVuTVyWbN2CRqDc1XbDRTuihZ5bGBLYwCPJhPmebgE7DDB1apPKsPD2R2ZiZ",
  "key26": "5Ds1Tv6MD2susMAaybkTyqoR9f8eSpWYvdQjcYchToKQthjZUieUEPKS29JTH1ydWrPc3EKJDzKTNdxdohSpPQ3D",
  "key27": "33sDDGtagKM94Q1pxf9kqjvkA1JG297ubGLCeg4rwcLCpUxZwgAYWGiuT3Px6RBADi72iPh99QeqV1hsQoqcsQaP",
  "key28": "2rqGn4bosqiBZUvjPGwAKq2grN2LF13aCXG9u6Yk5xA1qqrACfigMxwBXdu7xDSzogVxedjRZujCgUhkWUS9ZxtY",
  "key29": "66gbXB3zKmWyBKXqJGVMJegBRTHJzkEa9eYUGiCykYg6p1qt3kFwHUByvhXT7XsXXJuYQvn8xezu2g5qtXpGZdns",
  "key30": "2CSXuNNLkbbaf8AS8ajnqMLjqTBMezKKCqPzgCCRo3kaWxt1HCiTiewq9dKD3hPiXqfMEZL9yCT4SikdrvhBxBaf",
  "key31": "4N9vhXZpLX9LputAuKRZqidyckB7LGAmPxK1xGADUGFoRemp8m1iK4fZ1hPCVA6ofzRpssPtK2yac9fVs4zoRNzS",
  "key32": "4BJFyZamgfAWEYRMmnkk6y8rhVJuqb19qtNA9zKQfUJucphPZ8Px1TMx92e7DD1iakec7bQ1zKEYp1ZeiS8AwcKF",
  "key33": "3xm3ftFHrmgKpFyf7SZFJxEtYEozMtQPkMo45PjVkHMRHyUGGQuMaLCkQd49sgmMa15RkD4vKxAPve7jYSrXV17W",
  "key34": "4iDT7qEWSupGUC47eXab25N1fcYAhc3BPhGMVoNKPTMv2d3GZ1A2WaimNrKVTqo1acehtqpGWtS4rGX49xmUsWD3",
  "key35": "2TNzQKJ2ri9Udjc6ptvYzboCymZvjg9JKTTnDyntXMuk8vQwB1mDejSeyQ5AeH8XaP3ruW4xSD5jrV9VqXYEzyQn",
  "key36": "5otywS5PHtwFtSmiTZftYgDxd9DPNPLJVTxzDkVzgbmVkCvEKQDfAkBEwGHNZWXPmJv9QDzFJHk8q29attD2CFhs",
  "key37": "55UUZP7DQD2Xy9K5HfVxw5CE9N2ijLZ7ieRwJnZ2VDQj1FdA9bEJuDkNEkGLmPmJbU9sWEwYnpR4DgBcBpiZD8jR",
  "key38": "4zeoFQUNjssu2kRwUBVnzVLrkkVyjFx5EvyBuZ1JMwGQWCHzmDXtKeTqSP4DyJZTADXzCpiWEsdgNdyxuYXKqN14",
  "key39": "8azBhDUnU7qi538rzQMmRksMUw2Uzw2sAph9MXAJmhPR9DuehVD4TJiPK3bF1LECxLJhXbS1zRanCoJXLoRhZje",
  "key40": "2y4gmL1JJeEvNAvRBm6DWsiQsxFwsCH1SHHBnBEL74Uw68Lx46AwoTGzFK3mG4VjmCe6ee2ZGkgzyhPQiw8zkfH3"
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
