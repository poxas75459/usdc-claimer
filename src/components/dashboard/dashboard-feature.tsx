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
    "5b4rAtj4UVNmeWwiJBYDwUd3EA6pauhLvbf2YJGZ3nts7b91ph3GwSPVsEhgpM5zTfJmFeNKoTvzoyb1gaxBVQiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9GEyLUjZPTzpvjVjvsWGrYtHfbdtv51h6YSuxSDfFQqv8gymnwXzPdah6KAWR488bqc6kWTL5uAw2nXw9QcC3Z",
  "key1": "5mUgP4uL6P57fTpADrba1P9CFgZT3C5Jqc2z98Ts1sWTm5ZVQbvS9UVsPSTZ8bLh9YU46zvDVwicbXV5XRnHBD3F",
  "key2": "5tnXavUdLzTNGRYA9BgacCwEPaLACEeDVqJZpX6m74LieCUjnjKQEydwPVffLq2jZsw4PWBEkwjFevMwkzQNeAce",
  "key3": "5Rg75vPrxVUJjjV9uN3ajPu57K9BoYaFXjVY3oALA2jq2ofpH2FVdEHEGhjEy9yKocQBcZV1UxfNqDtQB1NaC492",
  "key4": "2LNzS5os5wRWz1UC4mk7TdghoMfxTcoz1gHTdVL4V8PfXEq1TekewyVJJggRt4ojJboKefppnUmGvrGyQG1BgonK",
  "key5": "2daFHC49VDk1bqn5rCD1zFRpWUJrfZg7VYYSP6axppdDn6RaJQSzPxyy1nymwNftePk9fpVbA464JtcD6UvNjJLL",
  "key6": "43ENibKrC8nnAAXSHdFcMY2tPgH5xVWUu36iTGZgmabH5567jW1gxPmYHbkhN61n9J8nYGt9ovGffh36g9exK82J",
  "key7": "4wS2j8JCqECZBuj7FCcpDufQqNhufoMaC14tw41w4a6J8r2fMTMB5iU3Y8EpXufEfZDvAdvpGkZ8LTaRPzjqkUXn",
  "key8": "3LTYJFZtw48n7yiDP9c7pPJDsW7Um9n9Abb2HHFJmD8aShyR14jYgbbm4Fno341wNjZSVqPDQzubtEvHmd7nWo2X",
  "key9": "2Pq8CDQajLuSL1Af8X24K4iWjj7mtKTEXf6KxMchyyZgQ3aaQQ2sREvGvkCcKnPTXLQXMTVSSzyi1RvVX9PnH8DL",
  "key10": "4muG5T6EYmYskRHshKEBqd9bHyozm3VsYuGLp8zhifDu8g2qTfnQbEFcfYAW7QkUJL6Ra2tenpkJ67v7JR6WHDTc",
  "key11": "5vnWkqBTMmg9V5hcWg1Wvwv8N5z7ViLkJxKgRbn2BasBdoZFiFTRKHZnc4CcfS7qBtEMFxjsX3tadCpo1NsHhG5t",
  "key12": "ttHxahAkkfvPb4Rz7NYztM2z7i7bfnUdq6cMuNCcg2amYgwiQpu7ZQiDAwHCLunbpt5uzgjui6BtJg9TTHLdpJP",
  "key13": "3c31trMt4fTeQjrcWSvwRc13WEgSqH3twxa4wtHpw8zgRuqRkkv3GCgU8PpTPgt9rJiJcoxRf4S4tfceRwrKVtzM",
  "key14": "5Y2QUxFowkU3nHFGsX1qErGdLjqQqdabRYdC6Hu8ZTkmTVNxtYQbXiZzqhkz8is7mFLmymsqzfGgj2BLudJ6cW7E",
  "key15": "GLz1PFwpRDM4JDN2myRSyxN2GsMXAJ9rb7RGFQZE3fr53DxUUyWwhN2Vm9GuWcTytM5AnjNXLQ63fBhDK56SixU",
  "key16": "5K6fGDZdUqzvQHAQYryKnb7vubwVYFGmCyGopRMDnfRFN7fsvRMHdwY6QnRk6omkyYJypwaV6u7yCPHqFfuikM9f",
  "key17": "4Dem6aB8BiiKmBAmUTdggdvF3ucxoQTYFM1wyumwssoiVbBt4JYCDYj8iTwUr9BxoSHipCLgc8iEMb6q6ZJyrY9F",
  "key18": "5ikv8C7Ut2y6uLywwSijhXbzaDsxNn2xwJVsJofHjG2JreRh3RshHsysA85Pv5j33EPVeUiHWksUr8t7gNBSSgFH",
  "key19": "4JNkiQETD79gNG3TrtuKUchKW8uV93RGxTbG2boz8KWTYSx5icsqGSzjqL2LNN7iT21wwEuFDTpgGXRGLUj5Px3Q",
  "key20": "3iVc3ZtBtVcP9gDDVkPRYhiPWsndqXFNQAM6yEka7NNpRn6PfvKnEz34EkeGKxbqsw89kYBdUw1xAtBWHLHpmpzj",
  "key21": "5DwTcsBHah3KXvHxNk2UznsBADgUH3gJu87dAAxCM2mVUQ1T3VotgUw4FsBGL7rc2Ss2cNqZGRV28bw1gQxGA8G5",
  "key22": "4WxbiA6zuECqxaCkknBNUzUojg5fHYAMhCM4tLcY28Do6sKRiohycd3SpzomD2sCriqaVZ83tonjCsLgfXVz31i3",
  "key23": "5nuptxe11MwUy73Nm6mqjadbAvKqPSSZqRpmW7YLQu8zZdbQdNgD2RkFoApMepyA5F5uDd5T1QEv2SAknvtBdF6h",
  "key24": "3Uj6Cqg6Yz2Qt6rM9Utt39kpsQsXPqu6diirA7vjkQ9c638XQiGPMHoPHjebCEQNW6qcFikrhackQjmfmE6K3K1m",
  "key25": "4huaVjYPEuRK55Wdx67tdp4SUPDmVURKZnkFEy7n9LFmUhw8zDg435JEBMFWHqhm8xJ7c4r2fXoJMqcuqsPXfkqZ",
  "key26": "3RTBBjGjiSAk3Jd2YMgY8opdNqjwpJtJsjeqmezMZTQmr3xawS7uiF8hPsr9QUxLXLD53nyTxkdFT6XxT8zEkmrR",
  "key27": "4RnJ3p8HxH3XgBprDDhHuUPBMNdBJisiaUWkm1wbbLH1swJfwax5cV9uQTn9PJW55c7TX9LkhrVyhLAUWjAbr222",
  "key28": "5dqKu8LFVdHgR5ejPVV1ViWmss6b4r6xzsp8qRMHgkahwKg12HgHgpX26nrcEckXrM9DLJrPtEUz8yWHjWYBPWyt",
  "key29": "2heomVJK7LPCEa7eBP2aXxBKKfSzc73w9zAPZmeWFeyPAwvwzXpcsCvXaZSeQxyVkmbaaPL84R2FiUth5FUGK51G",
  "key30": "EqNBEimwrQQknnLLyJhDwiTUrkaoM5ucDxByHB9xsvVwL2f7N1pQuyu62dBxrwCMLgejC1pSArzsjw3tmNxY6VX",
  "key31": "2Vh3fBaPQkHAgVvJGrYfBxSjbXxQSamJHoxBWUoxL6W1QYYYuqmnMmTbPeDnu5Z7GXUXZUd1FSdvp3Fb7XTAyPXc",
  "key32": "5Kv1afKT3Vi9s9qfYSriQWJBH8ZV5WMYjkguiUav2qGXZAnXrWEMeqGf6P3Che3aj7Jvjz95HDpcJpCe1ZFKjrfa",
  "key33": "523Txb6Yk2DrnsByPTVQSULgMyUgU5C5LkVQyuSN9pXHPJYcvMc8Z4tW9mUmbAr4oWtZKLyA6J3vgeXRu7D3QA73",
  "key34": "3t6C1jad7b1S3AmhPJPD54xWJnfiMtgmwwnJK7E7kVMx2x5b4trW2z9NkpC1dpJvs9EH79LR2yFyu6s9oop3ojjf"
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
