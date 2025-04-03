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
    "QHtcmK9dZLitbjtM5xsh8DAGTcyya83VTZGhBczBWXHAdgBiqjwwgx8fyYCnKdoEDoLVNjtXYh5eGjYdSkVdMpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tuQ9mfSngbXLscayXQnGfBYscHr7aGvC8TXtFtgN42J5MmsENwPvE9iXh7tgwiRZcNm1D8jKmAY9mNDW6QTLPnK",
  "key1": "3jzi3uyCysQfL6NGGB2DPZdMTXBHcnGSvZ99bU8cjLRhgCzDEfK33sJ2m93g2SESEovn9FNWWgpqWKWm3w5FzKSv",
  "key2": "3apj7gkL7TuSpsU4yiWAAB837diktsESfhGoB3DnM8YXTKYcXaNV8V8opmLV9fLpjrABtGFzvLbnRPUVZb6j8L2u",
  "key3": "PX1N3oZeuja1N7pYkoFaUriBoS6DQ1gFspxxXwCQhLjyJa57YfGhQkZmZgfWkByuRjQdsPoTAxB4H7QR3AqtJZN",
  "key4": "2JY4UdEDEnkaK3F2cFsM7Ynqc657Bb44CZc1DpKYhtKmJ6snLXqu3hLR8zkGUETHmYbqA6JnBmwcjT5untsrXLWZ",
  "key5": "2Use1Tf3ePERmGprcWcdikU8cJMUkFyeGBWqXXf9UJK98hidrp1nHYQzEzEnsJmmKpVknGbr5E2eP2hECypyNVUY",
  "key6": "4qBgAqrU6f5BiB5kMtzXJ7CcyYPbdSsuiRXfM3eZzhAWuN6ebhKXVRmVxq3HTMk6sLzJeEjJCAh8E5gsiZTELq1g",
  "key7": "NhxFYTn9butJoXQ1opLo9YoHRs2io5C2QGhzgJJNRYG8VQ8xqcZSBrExNRcE7LG6ybvddv5Wm9UraJDzRzna5Yi",
  "key8": "4e1hfKeedFvkrHKjDdFSV8RAkTxFeAUenJdabJv4hPSXosQXn6UNBWhzsLnhPbcrVuV6cnXvkBdRwwGpk1wyJswJ",
  "key9": "3rLfq47oVqJEvMoJkYHy7Q72TaaWesoM55yGPEVqxUNWcFs87DgcSvxtskPyKzR4XjvhATY8VJ55YasjSLwra8gH",
  "key10": "4DGVbz62WJPP5duVtZrM7bPAkabcMrb417vvzyhGi2nBzFe6VfqFSqkFGQwA1xLXEkRnyS1Dzih77j8u8CosuSLJ",
  "key11": "2NdfXiLVnfahUZ8ggU1bVcvNGoQjMP6zfDwkDsuzqUDFfu1u4yGWKeBcDcp3muDdj8yADw2pNntQ2MLCP7syGChP",
  "key12": "3in6GmrXiXH9mw74jcADA8W2zjmpWEP8vS2AH2FgmmQdnJ3j78amo4Hme7H7pLDBfUGA95DqtVoaWj14NZj6PSvp",
  "key13": "4XcaCqHBmPNg7LgHyNvvEcHodyWMJZFqk7P7jBuq7wvoiNAkWRgZ8gAtMHVX7LNELbqP4qbwUBBD7hx5zmFTQEPF",
  "key14": "48oyt6GM3Jq5BQR4kzpGZsrFpZwWdMMPXv4RG5uTSQFYB6oke2RQQ4XKA7QQVquD3ctc2cDUsZJoo7SL4nHuhHkV",
  "key15": "5nkzMnNGTjs2e7mDqD7M6Y3SbredKRqGnsuLJUuexPdJD31YsG7nJsjG1agdHk2DWdo5DmvUH3Zqzmx4JEmyrbmm",
  "key16": "51UJPuLQdmyVjPeb82UbBwNT5H5vbAK9DsvC85NVxkKRvWQG9xMpG2QiiAp698tpjtrMFq9ckNrnRnBkB8jq2Am6",
  "key17": "gE8naHPdB1RFLvNmonwbZVAwh3TG7wDhfSwo1dsW2ZM39hZy4HxdsgnV5CVvWYiYCruckn81EDENa8e7xufqVdm",
  "key18": "2jJeK1QUF6MeJqGTESRB34hFc6ECAmMCD6AhMeh8RfdTcSgBf79ZLVWGyJccRu43n6b1QDFtwi2YKcXUYMgXDJ8d",
  "key19": "G72WyzdqFqGeP8xiU3SuYAYXUZ5UdeyLixfNpyd5wyKu11RT4eHeSfqW1LQJRWhz5QHvsKhfqmauFY6zBU6SJMY",
  "key20": "542nLJ1mYQHNdrvUfNAwAkqNqe4krUQEmWQjEYbPdwGzQpLXwCokZNKd2fHcoBEFZzf3itEMRStwZ1QYTTw4nncv",
  "key21": "4M1u1KPBry8T9H4HtFLW6xWn1HvRtimXKSocGkfc8zoU5uA8N7Dk8gV4Sc2N6F839kmHWhSeiQapSFAPTS78UWP7",
  "key22": "5UC6JRjBcTNzjDTBuqHypk1X6AACXL7fQ9Ptpm5WWqm1JuB7CQTKgHCeG9QXWRRDANxArDN8Pd7YzXkETkeoB8k6",
  "key23": "45XpWxZxMpCtW5T2Lk55k7hhCTSRg4mkpduUMW6yTCTN4VW2PyZBiXDa1bZ1raDCyNAVi7W7C8awLSqcA5QDmZz2",
  "key24": "2rFEKC5CNV1C93oWWy26FcLuQ5eE63eYgqPRLB9BcWAb1zorjdYftceWChWBX5z4CPajk3ACqYKSbxKF2HDCpfn1"
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
