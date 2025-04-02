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
    "5TZj1HbUs4ye2LPEJ5svuPZVfmKqYbWBGWiowGUhmcnhckaC9CvCExeTubabbG5153WUhyEkKwyY6qPYNouquSo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z95hVMkBVJfGb5YhQqtc8EtAvSgRkgEY3yaqvLGDNw6SMrta11pwgW9Jzh8ZFytEV1aTjAgggSNgXzDoePQZRje",
  "key1": "3iPM8nrmHGMiDYC4bsm9YXkinLLVfwJnPLjnwA58Y3zhRQCRRkJ21o1QFeNiuvSx5HSmTbaz4AfrGhGFVf3vZnsM",
  "key2": "2aetdegm6Q4vzPRCQBkXQ87uz6swVNz51ZceJBp4U5S8j7f6xJ8tYGeRJzr86ff5AWgUhN5CPDwrVD6zwuogCoZJ",
  "key3": "25QDyq6dDySZYE4n6f8pMaMJpUynF9BRgxYY5CjwdGSQWi4LBUGHkTpRhQsHquVXzCuUT3126bnXmJosk8F87ZK5",
  "key4": "2xXWEE2xmpxBiqiavmG7Pjf5zzP8HmD55o68FJxtpqHTsQnEq1vwZSiD8ZCKFnVKuV5K9161W8Rknq3pmxpGbQdf",
  "key5": "3LNwg1BGU4N4tkEAYuQLqDy1fRVWZXovJXcY2aShuy2GwGxFjtRiwz26J6g9UuzCgfLhQjVwzd4m2gGWFda42xdG",
  "key6": "4g5W7sMq8UUj3YsrY54WUuF59KzgjNCZ2bWrT7TSENqpjwS2P22prXmSWzsL1oNF8WfbM26QuF31dKREGKXG7M5G",
  "key7": "3iFqbrKfjQ65kkh21To3FRo1a7y82gsnG171Ho4Q765eQdKSkAHSt74S6oWxnMtUCqeaRC1rT6preXUyGqkUJW3L",
  "key8": "3acJBdKZuqYyQNQcBV56NhonG6shx9PyGbiKjLaL2coGnaEoTxfghuRqwE3u2JrBTK9bFNRVdRnqnY5S8Hosuqp7",
  "key9": "4Aywrq4dwvXcEvwLNsLa1oN71s3SRrtJUxe5BLBU5VL2sVuXvmLpdCPy4QJwiaBybxhtMbVRNSesbTFBW72nd4xZ",
  "key10": "CKKukFkNEDJU6DjP3do2KzKHRopygfzFCNvGujpxM1Dai21Uzx2s9SRdLMP7rA6DAeLFsMAYedFPRW6bSqjmbmN",
  "key11": "2Lc4YEeS8hJHXwgYZinSFfBAodvNfyUADYpqii95Q8SvB3g4sPRavFg6zU8xx269BgFZBNQjBBUVQVvM6gpScjDu",
  "key12": "2uVE62cWvTbtcdMm2LQJz1AZdWwou5ViTeUM1RSR7f6j5N4XuRk4JuMwrQ5pDjHjdVsrA8SrcqcXCSsbZDJZZViU",
  "key13": "56PC2u2wYfpyfAMEMdRyx22wJJ4kLCNozWuiEM3zKFqDs4qLToYzNA6VxT3Vhcqzert9cUNtX2phFBRpi5FY4qr9",
  "key14": "44TvLhPdEuWuS3gGd1vS2fTqFV74ktc3R7BPztctDrvpSJTekyDytq78zy25za96sLFATdWKPjCxAJ86ZrhvuiU1",
  "key15": "3wruPvK3GZHR6CVVrwGv2hc6cjnJwTEHqhzXG2FdujS1npoTkeq4gozmaZPP3FnBLY3AUzmaZn7Dxo8EPMvZH165",
  "key16": "45tw4zzhZXyBHDnqn4bhM2vzPK1pCkDrb3t17FL73yDVgjtthF8STxGKLCrKWNavLfyvHTJPpjRdXAqWD9etFDd9",
  "key17": "3rtUjmJbKj2ReXfDAB5dvMUFQNs4sYwPPEBf8ihBcpfX9BDYfCUSgN5cMzBFjCMLq1JLndFj85bspu4ciPEic4JS",
  "key18": "2AeNxeT2ZcBhBiu56iBHMPC6UpxesJGoQdtHD1zrjkCN3BSwuTcehFy3kLvwW5ccDUTuABAmQ2KU7eKHnfUQLRwn",
  "key19": "6dXSahbs7bVMHYkVNvndAvSh6dVdrU2PoN5MyBiH9jmN7gyBEbQDiT8bJeT2mAB78R6LnMHMPH3WfZ2253KyPUV",
  "key20": "3rG2RPqCefwdjnZFK4nNvXCFfSUFWfyvHXCFuRni6r48C4oNR7rv6A4p7YG12E5Ek5Rxqf1N2rqHt4r4kBDi7JzW",
  "key21": "JTUTwWhrZ3yYg4a1muHZNcSKeqjRt6ubvTbrvL3MaiEcrpkPE2W11zsAfKPctG3c5gr3nwtbACWXP2mzu3E1W38",
  "key22": "3kBPiZNo4iEaoAPM28uzB2TRsuFcggA5aBzqDzRJn6xKir4us1RU9gbFm4SJoiaRS8eLYVmeCx2eskCmBDnL9Wqd",
  "key23": "2JMQfM2GtAioX7QZztFWWLAswknYTkn6UbmTPQWKV3dVXnPXVE6sHCSgiH1uT9VQNQSqZmAHJx8nNF87T2HkPh7Z",
  "key24": "3wY9usDBfgkrP33PvVjK7rXA6NFDd6aD2GhetRdtSdke8dTWjBCrJSLRE2czmUrGgAEpb3izV5b4u4Z1wJF3GoZE",
  "key25": "5sduUCXdMNhV4TburZQxBbj6QAGrt5Di7TPy7S76S5b5fcDCK7qUk4366oKMXesusZ5sTRdkoJe4nJDCVZ3ZS38P",
  "key26": "4fyumCatULU3Dgu3wPyPC3L3dQXeE3f3onxgsjLQBJQLcTq8rAtb6gADDP3WNxj3nq4rUooyU2n833Cd9SnVt36i",
  "key27": "5M1VDrTPzytHCbyCmTPunFhqtuiHHc2b6PEr8vs5rS5WLpkkwy1n8CaHVZ4Vzgfstroz6E6SqFfn9QiuEnDtcCu2",
  "key28": "2hVNGPduaWY2mn4aLSwdHouL1A9gbzaBEWqqNnfTdptMBehbQja2xB4TJ2mchwXhrGXutZT9uVduEV9p7f1TjpHf",
  "key29": "4o5RJn2UzUAS4Jx7cXR9tjPn2xh4QJgWtVdWxPvmMMM8qv7d3UjdQj12TwfTz5ZvUu5NZm55Xph6b22fdDjEZDZw",
  "key30": "2DjygE1oJcnfhhxzszBSz7LGGMUYKz3nrCgf4uet8t383ef9tVUkVFzP1K7ChCbJenLEoRfpGn8v4mon9McjCPeD",
  "key31": "Lyt9LwK761K9KxB66GZk1hf8pvvfeisxhe9wfRLWe7t26NuwXJ7B7TWNnpUQ75299FXf91JMAoDXGQmHmCf9cwn",
  "key32": "91NCRJ7vhBnXcHh4V8Tn7FGwrc9QjCrjZ6fe6iepTNSquKsKT9nJgCvENf1wFDm8iHaeFbSicMXH3ZXU7wVegEy",
  "key33": "2M1WRQQ5RSYvU8Cezw8Bgq8XTAf54MEJ9b9FV4eksdzNqgLskibfDJNouhuaf2VNNz2u2ghtnmTk6HCxVRdixzEx"
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
