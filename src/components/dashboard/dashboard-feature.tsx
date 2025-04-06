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
    "3zHWMvQtoYw2qFfnn3fME5ZjteQrMegSSmMVvBMhtSxXkxh2DtUypqESS1eXVwr2cuiH7c2KcnZ3Ha5HcX4uyxiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w3P4mRXtBbkm9esgRR5bWc44zJe6x7DDqygCAM5hD2Gz3yX2TmGrKgn3TjzVDWAwGpVDcoKU3wt8XnFXiSEwFex",
  "key1": "2A77S3NF5R85fny3fFEn9DkALbnvCCVLfdNomMMLrWbKq3GEbiFReBvzxrJ81JR8bXyh6J1ZJ3Wfacgni4FFt2nz",
  "key2": "56aGdRoAQRMKhHBcHGm2bAiFguptmQnw6RAibdhVs2V4Y4EbbQTPMDzZuBkEZHHSZptVbjgE1CmJv6SbeKt39a5J",
  "key3": "5BnAzLrh21xKFua67wVS8HqHGmcu44WpUw1MTkjgatB8bRoUMhDvN3TP8pwCW2BvSceWVA1pRwuqooUV3f6DZhXP",
  "key4": "4niAbNVG3fguL5YkdiXmmv7xK3UoC5C1vqq7fhM3ioWcTKBVerwEimcobdU35Ryevc61kEMLecdyWUkXpomdJGAs",
  "key5": "3ZePPHV7V2m4Gy5VBre9N93jC5o4mFBhpFmxT1KqLsa9yxAP2WvZqhoEXshMm8t453F3TVDh7n3kXfjf5zNjFiCY",
  "key6": "5gcz7umuW3YGMqNNBt8EGeWov7UmuGzE4x5PtaAkJPG4h9xDTDPgvimhcP65QEawm9Mvky7f99LEXML7AxukPX2G",
  "key7": "3VXocvCAhvTu9TsSv6bvh5WE6sXCGEEwgxdJXcWtcvyQ6VjGRRSARXESzzrU3BNZQ8FUk99PG1WcRXwmY2VgDhsK",
  "key8": "R3A7rTZazFottrTRczXjDk9jb89jaKQBF1UZ8N9EKzzUpDU1DzYnoBkyFKXCQtFFem9dVr1ubK2rfCE1n91WtYo",
  "key9": "4sH17ofAesYxHDoVHr7fCJCp92b5Pn8oxfQFXhurBkpr5XWUpjppu671npwkorSeXUbtiSZW8nBeZTuMCoPzN9Yz",
  "key10": "3ypo86biEHjNLnJw6vyFQ28DEQjg3cizu4DGQzyL8Fr9nqP2UHtEUQVCK5hSqRCaeDZ7wLMTvbkBkMd4wY8M5hR5",
  "key11": "7qf1SWYAgmbH4hbibmfZBdg4jvjT9vfM12ZH8Qcxmqs6L22XEQCFvW3HNZTj3uFYTmTHpHawFQLxSfvxSPh7DMr",
  "key12": "4WP5mf3dzybHsmNwhHeTpLnwgTL9L5nWgy9JR7dYfLvr5Kp579E7UifPfuHZjJ6TupefrNXk1a8PRwJyyYuonVUC",
  "key13": "5tM5d8PYA5Q4Z4uUYqaYdefZbQiRoVG3yLGg5fNsaXRayAM9tvXo7djQguSyj3qWgqnPdN2PhVcfQBCVWU5yyHp3",
  "key14": "5oqoT7dG17tpGqDsfzyupBUqxrLpn9yv15uAJ8kPS2zcoyHTQeVnvnHYbJNBLDJfpGiChP37zNJLG9STnoWFZhVA",
  "key15": "5gdqUHrwdqK75uKRaCJMTihgmT675jYQj6FHE9MREKyxo9bLmUR3J1KNsYnkQ64i4Qph8s3yHGQnLw2CFN9kmFKC",
  "key16": "6c8J83GyTLxMv7oGrgGRifwCz8Wci5fp7h6YoUm2mVgzA9vAVSkpVHb2mRU833DhjkD5ZPMtzyaYC9aYBPzuiyh",
  "key17": "qL54xNrqpo2fPScBi9GuCrYM5YNs23nD2JWPQfQYgLdsLAGzU8K8pRS5ZFAH6gn7zmDGToHLSxpUt1WTRxvgjoU",
  "key18": "3891gNEk6n3RZGoU5S7vsvaktrSfbitPmLqdvo7oPjfh8jgcykAm6oam5jop14ad5SbzuuEHg1aWu5joijBPph5N",
  "key19": "3YDHe8Gc3JMdjLtKnpZ3yBNUuYCBWHPd1eL8P3JxYFWXMVFT9cgb16fxN1rTky22BsJucdDaK4A1fEqZ6bM784fb",
  "key20": "j831y5K5QPJmM47BPhLjKSa4nUXmHNcV4qN9cP65DYWSiXi4d1N2cMEJsvWwdBvHYYnqw9yVYBNQfbjqryi3HaB",
  "key21": "5rYrH1ZdCAzYtu84A2Yb44mbKN4TirLFuFJ2fQtq57tqop9ybLLfKdHciqjLQXDA9nBcnGVsNXjZjmyRVz3C8der",
  "key22": "56B1Eoz8TcmetzThaB1g3ac8g7MdHdVLehDYVj3eoMsBuVueLXaU1ZWgurv36zjv9LyFHrVvQiBTWBagjXvF4LJT",
  "key23": "4R1q2juWFyAooV723e6zJPKGuAYmgTqFyrJjyZaB2cGSdGzs7UTtWmWFbq1ZA1duixX2iWnju4t966aQqBffWMRW",
  "key24": "3tvNNbYaDmteHppVkDT89BdLG7UFqNLAixdv9ddCzYgtpjoUDNmadzxnaVxX8dwyA2455uRAU9kKjVSbgogw1F4w",
  "key25": "2AnqtXvEXt9WGyXSbPgnqqaivv5ohS8Pfq1dTpyMysDRQyTvAnhtdTpNcJmAfE1VAgvfhCgDyvfMQhw7j83XFayZ",
  "key26": "5iMDNSx6WstamPyCSSFmmnQjxo4AdFQscu3RviVXrYWHxis5WpDciLTSPSQP1WVXFbQVYvD51v69hCnswtkszVYT",
  "key27": "5Aiw5RjiwUkYK5sw7aZCR7u9xtJQcwjZWmiCojK2bH5WNENYyhR4Yg2npzZ995sKeAckCDR1e5AaBQWemaoKKJRP",
  "key28": "572CFHAeomHsscuGHqFZJm6VkVvTegwjE5ygKawehcgG9tZVSajopnk44Pj4q2o3MtKx4hgS7qNFYjwsoFigBrEy",
  "key29": "2qARmsnr2Pd8xfG3WFpzD7uhsh3564tc9pdUDZCTnvD6oJcAQgauNioPg4LTbgxcmMe3gNA6frXbBWFomUe5pDF6",
  "key30": "2aQuZXhxg5LZaEVz2QvBZQdsTr4rfYgiM4p9mw9umhfm5h8KXhRhP8fAfagxMcJrXm12EHfrKFdnqLU2B91E9EzT",
  "key31": "3BHeHqQSFr3E7i9UPxmDHcZpJRek12rPNKRBRyHLTehY7jujR5tBrSMbaDApaaJjvrpqsQkXJT5d3rbnB8DLeHbf",
  "key32": "3bFWvgUERoCjv1DeKdPijYT83cHjn3cW5MMQdAkZV3YLaqrLZ9EuGAB94HCi7vaxEqLdsaEMq8a8of2d2fCLVXZX",
  "key33": "5t16FJSWpgPS6qzgGwSwNndZ62jBqygyH9ERBS7xeizneajs3tBmgCCySVoeATiFgdfDeBFFUMANqMA8DhQSbXz",
  "key34": "4pwNWGXH3Ykai2TiV9WK2yTAGRbeCr25XAxUrx66ZHcsf72u3iXVsXcGunssgYjTwqT86KMsVNXHVXNpXFccvCnE",
  "key35": "5VUtMq4aGtvMAYhcgyBSKR2jgjFwfdcuDbjaB8EtvSWMifQRXZE3eEdULpFxSu67WhCXDqEKzhgEozQqNiBpZYFU",
  "key36": "5FAwjrDR62GytEDyLL45xdCpvB5cZfZx16fZBj4MKLwEJZPPZamFecmXT8X38WKn9N55NDkRdzQ5wHn9347s9aC2",
  "key37": "4Jqxd8rTX6HDhosJhYs7AUPaPSPSDdvvWkgpvSVsL74kF4LwZq9byx9Z7EXQr3dzmf86hAGxYXgSfxf7W3RNckLX"
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
