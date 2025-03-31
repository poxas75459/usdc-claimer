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
    "5x14szSPu1qeXUUVsnSUSBem1VefQ4WvBx3gpVf969MTv9ouAxFdcA45Gzcu3EbSVqhu2cnPBsNodqHbP5MPuBUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M6unCvqVct8MnA2dRiBVUqUS3gWr2jYnwy3rdzWNjFdBQsbiDf344yMomYfZSqyS4C1itTqfdsHCxV2Lpnaw81J",
  "key1": "2wbMRXzQt8sjF7XBp3iW7RsPp5BXqx9H5FHywtcGnSzzcwUciWXug9kGVeHwyXtEwEHPP4krwUoR8SD2fCGvdF7C",
  "key2": "2dcUTa45bvMuxDGzBr6tcjijNqAe73P8VQVCxi2ob7WKmBPdZyD6926bmE9o7sMqczBbz3fpZP48MUpfdS4YTzjh",
  "key3": "5b4PfWaz9zXzGPJqUXeifGVzB9nYaseMNYauVy8ifSP2M4459fqETETDFeQ5R89U3i5herXfVA6EMPYSLYdvcU56",
  "key4": "2cpmi97hcQbuSjtEDzNCLU7zFmrSkHnHEs2KSv2kkjMv4w4rpNiHq1TydKX1KqwAYeVPzqoSFk3gwjG1wrQUkLx7",
  "key5": "2QXBuj8QxX5g7zTbmAWtzU2xunDALpa1nfYHdW7SmHU8xt6jReCsYan8XFahBjhq7iwdMWkMQ2nxi7PqL85DKyU1",
  "key6": "2nE46NVruQfk6ZTbyeWuPypMQ1bDJwvpkp2Ykd56teqUQLV5ZBPGFSDDVws4Z3dkwsYPoTLPyNqVWPdPqo91YJcx",
  "key7": "4f8idNDzkuov5hmRUySPbAxJp62A7NFRZHPP6LtWrwbfjtQSKYWmcZUkDNYJ4v8XwJysMxbmG5MUQ6L19VSNabPH",
  "key8": "2aaT4QXUYmx5hgmXYhS8EAiPLbBY6V5MjQb9tfaFLmNFXUykNoVZg6rv89NC3EthMAad7dcjgLg3kueM2gFjxDvx",
  "key9": "37HBFYde7EaLoGNyfSkBBfuskhg16gEoTcXJTcbBEgUBsM7kZQv5K8kBERidbxLTbT8iaaWnD5Z7oXk7pKqcQaXw",
  "key10": "2n1SWCbiyfXxY4jefhmpDf97R5Zv6WDe3RNKsGWoWvN7PF5GTHfQwfR8JrBqQ8Sp5YimVHkrKZmkeaAiE9qvWzTf",
  "key11": "5UrRhVZWfFJvP81HtJtL9fjFwvs2trMKqcKPSWW85Qmczj6wVXRc4j9CQn6q1coLvvgybauqTShqjCg2SwLXCQgf",
  "key12": "614V9Ca7CWx6KKLUJKR4YUHKrbivB2Jwaa7nAKUKFK3m8dDsgBD242DzSg46NDLgMGcS4CDNFdzwrFWGZEqJDUfd",
  "key13": "5MifbPiKF3DTSFzzu1HArsEQRtFnueKFVuetLzKQPUG7rbD1ctuCheEDrh6py41enZeWMZMkb7TkSbHSABfXrkt",
  "key14": "28YJ2YvbUKX2k9z9jGHAF2RcJ2duXmwji85ndh7LyJsqpUXAdEFXWLpdtpqjCERwHBZkm22k16McUd2hBfcCGGVX",
  "key15": "23ZukJheQYC1qqFRL3AzYuY9pY6qnMaREEwjLHkrkqktC3DsTskXy9kefUZmA39obVASnkHFUeTsvqttggB4QUEN",
  "key16": "BhPigcCfcJC7BZFnL1ZHrRtRxrLQhqJNoHBx38dwH34VxHHB2fsYeG9zP67bvDzxf6gCnLMmFUs39ngJkc1tsDP",
  "key17": "5vrL5FARdhiK8Fvzk2HbrsbXMqowLLSaaSUcrv9aeS7c46xZEAsnRvLtAeZ2wFjZYwUMJiL6y214UvGcuu2fLB9Q",
  "key18": "5D8baPtuqyBRsmUDkbcpHMQhqos4S9s4pWLHPZpGG32PDw1AQWwnLYgo2T4MfVdE3y7DdW8xLCreBL43ZmXT13Sb",
  "key19": "2bXuE17hjwDy5th6W1gzjdngGaaSqDkj2h65nBiwSe37PRTv6fKZ4KoRhcSRekX4BJBakCC4wD9k1zkBnLufW6YU",
  "key20": "2JJAZ5ZJ7Cw7PyqDLeBCoXtrXnCtwfGhWrpuR3bEhKuXDzFDKgDfRPevR8cVUSatXd9PfB9MgTkpTJrQwV8jcy1H",
  "key21": "3eTKprRonF2GUcX8EVNjpySiYT8nXHutVkUQUvXQLmAGQjXPTfZb2oCcvsy6SusxyJrwt4PHnSD2PdCacJZ1J8He",
  "key22": "LRfhUuUDe9n7wg4u76w2KuQfMqdxDSfA5VaS5HrpMmbtig3ZUCWMii8ERXMQj2q1xq8fGLCHokmsZGCe43L4SDK",
  "key23": "fvgQHsHcfJ2YVavYrK6t3Wwy8XHF8cyVVNBT8BFiEViCD77bHeoAxn71pSAAcMvWNxXDFefRr8DG3VWKJ1WCt6q",
  "key24": "48CH7MNYYE9Fb3uBjaihLio1VSpJmiJj9waea7BgjS8Ck6y3BoVUBMRoJTj9mNp5fnbDw4HWB9bwGeRGxwqrYH4h",
  "key25": "5GoJm4FwJ7wqDP6dTSL7q4rvNNz9P2YzAxgknUChxAjAZtEicuQBs72YrTmAbzrWzVFJBBjS3xGvFFhM2Pf5XvWV",
  "key26": "5SACYryAKkiPTW3WA2Cw7jGYCWH5LwFV9GtQd45e6jtBVUxMwuYzgDoMcxm8BUPfRVk6PLGoWH1WLN5Uq9b6DSqJ",
  "key27": "43CHVNJwi2BUAcEWJpfr1gRV91Z7BL6iAahyvMS6UgcsZaqLFUFi8ABhhZnWwWyYMewBZRT1SAwxX7Kyv6CCv8af",
  "key28": "2nBhS3jbrARLHVs8Tph4kQD6FVH7ckTKyTkU6zHX4A6KQJ3vea1PnVCmwgodxDiXWoQgUZhYi8J3TqfQk4ZStWqD",
  "key29": "2jVX37iQrK8rsRWZKQ5iUm3y1vcL3ppvVqc4v8w3GWNzXBagLykiKuQB2zjTkNLq1E5Lw716jc1m61xWXq8jUb5e",
  "key30": "5mAP2uuEKoTSNRJ44BN7n9typNE6MduSVCH8sJ39D6iZCiSPHowehwtxHg2Zxnj5iixu4j3rgacvUByt2aC1TMhE",
  "key31": "3k3W5iwYZq7a6yPdkdmz4V9DWMNcdShfPJVtu6krDf9PDaXzhgrfsDgK667XCD3TCyD8uJVGK8Xwaj9jdmiu6Pwq",
  "key32": "2gujYHVCtn6QVBAB3cSTLvsvr7Z36eatazjwH9sMA6drbGTMaEQ3dxZbJYJeWqrX3CBFF4T4qaSw9it8RQRL1EYT",
  "key33": "5VLdAiSBbTsjiTfDwyNd5TY88ChCnQ9WmS5fCnn6YXwyF6CdRbffEq3M5182SLcmGtN35cmhSXT6LVsJtkYeD7AU",
  "key34": "4QZuKrMUt9cAigwrAFvrT8s3ZZuyjw3PKwGRXgghBdDKdqG6csiZrh3jeAC9MxcBMaTxQwuThwr5LR9siQyCPNUs",
  "key35": "61gxr65TVhkvZq5xhjC4i9c57dWZ6QGPC3zpYyLFCXFoH49qMXQJDq3FvMNHkYZgjJFC9X1F5aoFkEP9meb9GHSL",
  "key36": "3xJYuxMVvxfneSPzK5xgJD5evBHXscYPtXkJz2LfiVXGCjPGgsbUKmmgFJanugjSCLRcZoEhYs3gtea18xUXP71s"
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
