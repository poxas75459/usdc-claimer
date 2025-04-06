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
    "5V6SFCAi47mrQpx2XQKqL322zBb2teTXTDtPKTnSDWuhVVDQJR2TnJQfAgUzx14tHTjrbZtduJyA6saRqKPmQKLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LFeAx6y6fs3qfPxvDhJJfBEXXjnuyveYeA56D72BkHLqjU2dXQRM6bWoA85LxXYZYdisyMwHSeqDf7JnkSrPsG4",
  "key1": "2kVVDSg2vMFSJQ91HVQ6ct6XVvKZHGAiS2pMN8KwmqE82KDRN9WRBdFCTF5sbub5U8HYh9LXagsQx17yB2hApEGz",
  "key2": "3MFr3p5nPCtMSoGcy2bdRVsk6Ew75MRAfYeJM6AEubXwjRAVbFdQYPunGd7tG5qSFmgGVhbNJP9fk7ZSsQ5t6K8X",
  "key3": "5DBTQTE1d33BBt1efT4c4PeGCv3DNJvJJSojXnzhJpwAF9LnCie6mqMsyge4Fq1ea5L6VqB7n6kYYJyNMYbCoyPr",
  "key4": "21rR7ujtQC8xAyNMk9KAhMvGfbGzfkng1bJHDdUnXv9Qpx7yWM844T9Ps6dV1f7nsRWr9xQ6514ifYpxDx8YSnoQ",
  "key5": "4v2YFGR3tAjwAZagUCXiWuETTzWBDWttXFNRPXiPpFbvZ1RHpgtHuaP4i4qDZQLj9h29rMPN7eKZxbHDnCgw5Q6e",
  "key6": "2aqPMmVYYaRQNkFruemHvQhvWF4DYVXfheYetphhU5RXqW4v9Ub3qypZ1s3k8eACUZndohqc488AzaY7i8XDxgj5",
  "key7": "2j7BdehFnzUhRtcGzt1Wy1jkaUdYkSPcSVWZbULwc64MZQgb31FAQbCZ8abyL3N9dfUxyVqwW3cDxdbqrRwmPmcP",
  "key8": "57qHMdMMDtgErBn2z2rjtsDU5EKzLLWXLtfyAL6vXZpzevCgGqui9HapfFZfHCKYEkHiQJ8Nap7pVpTPp9VfWp44",
  "key9": "5Qh1j3DwEVpbnURhLRBjJTHEnaV3rpx32CJ9b1vmi3wJa7A5VdMMX7tQ1C8YqtHx4QFmn1YBeWSZo9Hs8x5WPX21",
  "key10": "5uHUCftZXqJ9yue7JGLyEC9RN1Ch5rSUrzeteLKEAbZSo9LqgvDByVWfRxRLEwXmNcD2yaM1uVe6LLqCv9jyfRB2",
  "key11": "3ch5DuTZo8ea2QAk2ervhYcmyqoDUAnrDyq8Th6ZKcdV2ufyhx9NMbvQo7sA8svrvU6ubyLT4sTy5igJwxGsmYpW",
  "key12": "2eXjwQmsW9bNUqVSBVQUD9wnBq1UmVVS3v77HheT5XxrMHf1sw7R7J69vgUzpcoVv3q7GrNThq63KaxU5y4ntHf9",
  "key13": "2GcxmfSFA6SBazWxzyvjxbWssB7nKxqbAivUmFAnA4TniD4jLKSprsHPgryU5X17Eriq2Bimo5H1JvjTvMcgR5Fb",
  "key14": "3pVWMNsRWQ623P6KXBb6Kn6AW1CsrcFcZcvRUPcsxNHNoWGffaUKwJ5BfHieShdJAKf2EzQC4nbg2NVN9kMZB7YX",
  "key15": "58ERqa3t7pA4Yoq7TRr4J82W1QCoRvXyMJTwiDJ4F5uRiyme4SRgNZNNamVfPxvyYoSbHNs4xwHycrJfx2sWjYXH",
  "key16": "44nZMz6WkRcz5HHkNDcoZBaszDxujTQ929bEV8akyRJEhjqqnkMUCbpL6oE4UKuXq4ZcuNpaWxJZpqDmfDXpk6CS",
  "key17": "5pMZKg6yB8gPGk7dKE7NbwZ5vWxcZAYoxhVK6XDaos8u7F8CScvg5d33G5rCKoCKuWXPj5xSK9U2dx41shJPcA1B",
  "key18": "6YUqXo5wCqgBJPkcEvHfqRw8VzfKSsMWiS5KXgCVXquNmsb6iiNNyPCTp6M2JxEd1mdgVcVZczX7YykUgm7iVMD",
  "key19": "5U4MngpL49x3VnV4g3ViN8KSRmWk7xXHjTnJJQNLaAMT7ZybpCmCwQMNSNSN76pFDnxcoDAdnKFMQ1RGkjgd2BuX",
  "key20": "32r9B5FYWZdCZ1BJyT9tJEtfBD9HvJzkjb6V1fRsNVWfoS5jCJfADrS6UaSsC4VQiuEfRyELyUFJ7Y9ZAKEf9R7N",
  "key21": "5Q8B8z16Cmk79vjgLXJyVKsr4ztUncvWW8xTmKipk5YnXbJkpKi8QeMrHzCsv8MmsmjZcypa56Ybu2dkn5SvjkhM",
  "key22": "4aPmKHjgBY7L8YpWnRYZtVvNnyzuQ1r9FtZck98G7SAXe8aHRHuw1yPePrWTPL5gBS4MiW2a9SgXmrpEaVt14Wgu",
  "key23": "434iewQ9XJ2cxzFLYVgLtKppWnEEp2DD7Zb1zG8ncS73BMkXc6G6F8nBT3BbZK5N51Ni4RWJrJpPQPVKLSRkWUc1",
  "key24": "5JjYRF9JZec4QvpzsdpCzaqSxa6CyqB45ZFrvgcUQ5cYrFt81xUesS7BWcF3ajYjMCyAfTJHFY6rhSruCSVt2iDt",
  "key25": "411dnD6c5v9e8oS8DBpzt4DxZUK3AE2aoBK8ovevMrBDYTTRzJTMe1LTpSRuofzJNSNwPmb2WxCstGkw1TNzqoJh",
  "key26": "zYcesw24y3ncKWdTU7Fdk3jsDtTdcv3ofCuxXssrsiF6dKxFC6EC2E1i3ZgCF7b6BvDwnhGLGTekaWhmtCq9xXZ",
  "key27": "4Vz9pmBE4Enrhhsu9xnV2tjCutiFZe9hWRq9R18Z6GPCG1kGf7PXdJHJSKhRHTq9DGC59cBrxx11vxZnJ2M8zwPo",
  "key28": "YQTrfziUbYQUHuWXxxBZ8pzpfG1gx3A1wCcGVyjAMq4f5kmvxtmu6765my1mywf13Rb4JmYopJNgfsjpTwYYssk",
  "key29": "42eH2RE435ZsWDGnhoa6v5Mk1JDWHCTp8MvZX7pLBp4Gd8NddKHwGHWppeuJ8P5PBS5BDw9GxCzyXzRnaUf8q6ay",
  "key30": "6G2kcrt2Bcve5cTTikwYU9YEj5bGHwd4soeSgCpSi9EWPYrX4wRPbySTVYVeNJmFBLJVXYgRE1m2hF6rwmLooKG",
  "key31": "wpKnZSduQGg4mszeUWKJQJfHEdtGLiyNtNXmdXysrbvVyRPASWtgeakCCFNPJEB3A61KMxhGoaqE6KdGpcuaLkB",
  "key32": "54nQAqpcWdKKFcgarSveqUQvbiCLY5d9pZ3ViXBAF2uafjyPP7ztRFB13L9L4WC7F3VADV4MzgC19L9uuDerwfaK",
  "key33": "2easSpWGzJCbZHkyhv7UMqvVnMCu8x7H2xkGsyFsDdREirnCsUjNbGULSyGoEQ4qnSY4bcmkRMvaDgo5DGPKfWtJ",
  "key34": "5LF7q4zauA7PVU2YUvtQAvJrJtGzqnsQvfF9n33TeWVo4oTyscR9uVUFTFXwnCk5BZLRpAHgAQ4VsyRnHupZ57Pm",
  "key35": "46BoAbuQKQuDxhJbpgxA9c1sqKUrNib14DJzmiXFtjPnDSyjZk8dzhtopzWFJVnWK3Nda5nHfrdV97CHu7BtZN7S",
  "key36": "kSTnVp6P9bPiS2CtxxAqGLZMYTGFASs9WbMLLTcx4tp8ivJhzPp396DqFZ6L7JpFBUpudX2NVRr3LGC5njFBHoN",
  "key37": "3Vou8QHkwH6BCRzmDuRHEAo6xNHxx62kYu1FNCWrFVH9r225Yv2gKZUu4MyKSVDnw85Xf7UcvM37u2fquGf19y8d",
  "key38": "8wa9QAJJZ6ZEmcYKdNSA8A9S3DQtryY24yn4rwEriQyF4UhPyNjM9g5PVq3ker6asDKuRkaD469P94Q1azLkb8s"
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
