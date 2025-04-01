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
    "5Evv9Unu6Thb7Tg3Yez8fkBnU6ahz81GBMwzJgKYWbadK4zdFmAQA3GcVewd97pxW7tXNpBpbnAyCxMBUvsRj5TL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xts1PD3T9CQbnTKfF99Rg43ixAe254KVuETfKWjy2nwHTmGKpMtCsCobBJwuhSjLae79nrP1nMvzkzGAJjuMdV2",
  "key1": "VSBFxNBSr8P2mtRCugspQVcW7dT8wEXkUk6kLVkh5VGxBeooezbykojZDEwTJmvZYuN4NkF76o13M9RuFtY4Y7B",
  "key2": "31aQaC2TBSYiNCq2JrXZA1vwGYUuv5pih7gnpE95qszqxfxqTJEKuWEdYrDkhA3k3sTJEXTrSCLKqSwrbFZ2NoLc",
  "key3": "3NXTvkNgrfxQgjQ7GNVQyLWrTQTgjAnyP73pS2mvL1F3vP18FNFW66GS52fYwVayfUj1SgHuKW5PxzHLjFDaAWJj",
  "key4": "2kxb1sQryJYkAW8b974mAZHDkBWj7N1nUYKLdEvurAFWrJTxcPg7jTjUV8yrykzpzwCAU6irrWkkTUSQLx6HC3w",
  "key5": "3dRxtbJXPcy7ERPqBxTXS8LEBCYHkqczwHx2eYFwFCJHzZox3ZT4eMyf9EGdwXWStjzPqJhUJfMYtvLBnCWYp9c3",
  "key6": "57z1mUT24ZmBeeHr1PjQ9m3SxWTxr2TpYLfURUrosfxfdeKKAHLFELmAYr3LCrCg1ZB4jC2ez88jWtebHA7g98vs",
  "key7": "2s883k23JrWjL6qWgDuSmXqWDp1S2Dsq8jJCyRVpq3KqdTuGH1io679waVEae5vCTQBPECDGWx3Kfdpq9LWtF5bY",
  "key8": "4dtTp1MDzUNG1Hmb2bGiMvfNfdzwqkZS3Dkc2p57HGTsbSmN8jsNYBjXjsk6pUe9Zgws4HfRekXvJDb1w3CvBM2V",
  "key9": "2ctA4ZgKMFQxX7JeEdSJGHTxcf8zzVL4ywcuMSdBUUSDdEWjPQUWJ8Tinn82D849UiJ2MkBxNbRmYs6C3uUfPxM3",
  "key10": "UN7Uau9eHSVw5oEvCvPm9KTKeFzZ2tSz6zbUh1iARbA29Lqeip9ALqEMroHCQQUDSnRnHR26ERmWo6jZsySiYw1",
  "key11": "NwmMwUn9j4ZnFFfY3BKVKntJiioxpSJLXnC6SguMtvLDy1n2gymxF7SVwvFRodfKy2TPYsp2suJbPXRKxA8i3GS",
  "key12": "4bYq3Siidu2SidzZUYZ663Aah1U1rfj2LYKsPrqZbYqZosSjAoBH4iKtFvMz9SzH6uutV6Dpk9bm6NHCi8cjRucc",
  "key13": "5GiyNByeE1czkbgdCraGX45Zaw2ffp48iJs13yx9CxHvhQ8MYxYUQemgeCDTd5uE5L54sF2uqBCQrNdqQmxB2pyd",
  "key14": "54x42xzfuYMzBVCYcm8CLPQRYnG7s4UtJAcrPxFBmeyo3eCVcjafs9EhRjMELbruMAods65Nqit8AuThGqGMrJEd",
  "key15": "3u2nmgcCiF3UXtyWphKX1jeCHH5PRjTiFPN78HuKdUJEoSf1nvTSdR58byekLDMX8NTYLY5xU2kS8KiF5EGgqAru",
  "key16": "5hh5FRm5PDyk5hju2YiTuvM9ypG56UKa622WBrzsQDKbK9dcfuSJw9bc8sootXzK2dLRHyRNGXY6bRs6933KUev",
  "key17": "4hM628tEoHUrBLzrHakgbQHe8nrC1qeR8s7djGB5W4TqyUQE45spQv7gB13RMXWWZhEP4LznVS5GLKMpHep5McoS",
  "key18": "2Wc6i1DdZmsizaYZu1De1sggXa63VL15czby7UKReoPx1cHahwfxsjURzUSxz5AYJsmWEZecCYPcwGriMCWeE4pE",
  "key19": "378EDv6tEAcgN3GMyjgiTvfCGnwjrWNvdyujTU9QkfZLVZMhbwca5rDRRBWjzgAWnNtXbJzDQsqN6FkTPJkMzBeV",
  "key20": "2T7fo1FBsZfwpkETLE9xwPWWzz6U1rpjuspvDeVrwmpYYxbMaNF9QXtPJXSQwGx1c7c4zNaSTBAbfiS5F1S2kH7E",
  "key21": "4QZjxMg78z6E8HDGsCmf23FgzavHGri21YaMDLw4YeucWeYdmNpyZ16SmnY2ZyCBVUjARwXTfxeWB98oa4EDArAx",
  "key22": "4BYnMekuh9xVvQLFAhKdCqj5P2dU2NxTdqJ3b8yYtT9m7P4xjPeybgRYFzZLtVgNcDgbyGdKszKyveEHdFw7VTq1",
  "key23": "3nhgNVFk7se1Ka1DqYKWJwZTZrVqwJvPA7p9EQgdCxTY58a7f6odryVU4Pq32tbqNq2BQSVAyYPKKDMcbFQwEH6x",
  "key24": "44gvzCpF3Kxu1JiAY9gm1c7i4XGnGmpf4NRnCcBfasSGapoec2FPj1B2dc5udVTh88qpUC8pByzpv1WpE8V7h3c4",
  "key25": "jSqvhNFYxD8H4gTSMfmt8E1icKCrPJP2msFF1zmDqU3hUvxAKNKPMzuDNqrCmZPXnriJm7KvhVUsAcVQLCx6cff",
  "key26": "uNNNXuYdEtmVF3Yvhuty9298TTbhouv5SnBXFBYrrhybA3hh5FwiF2LVVYXsqy7mJC6Zp2vuiFErXXbDBqo3vqj",
  "key27": "5nsVVVuEpemHn3vtwcY4ssgqENyenRDg4EcbRTPz1zrdq1WdR8ZvZ1fiTo1JpLgt1dUv314H9ZuomyyVpKu5xLre",
  "key28": "4nNY4Gjj5ssetbWwAq16jPtcUom9Nw8v3vMLrqDyMBBEhmPAU9M4DDmyKT5P62YUG2F8scRLXZinc1CH59h4VQuR",
  "key29": "5dgSf1dkfdCFipGesUthx9jLtBUNq3hh2XGFQuoshcc2Jjbc7T1DXFaUmBJeHtFTUfM7U253XNkKuumGzJQeu3XX",
  "key30": "2SYftntaCNiwoLUkYTDc8S88g2iropwsNYn2kPeCDGPrrf14FSnJnuSEwYufHSscUYXamFRojbVnqqfBtBDAQTBh",
  "key31": "33t8AWZRYeLRDffiqr4361NKT8ULAXQewAedBCrLfSZgUFeQuBL1PyNXDDVTYmPQ11hd1cUWQYJGjP1F6mQoQUko",
  "key32": "2E4dZDyjg3YUqfyFcAVNCviFantbxS5BKzPobwpo9tT9rExWeLG6Ji1bjxawGfxwfsxmdZuMh6HRHRF1kAAu5nab",
  "key33": "2HkS96ssD4EHCGYvyFrk3maQBqtwVXffQY9BV9z5LFEDcXGsz3VqaaHXhmWwhSN1pse86XqqnoULc4tons4oQqyz",
  "key34": "piEnfiFnjqDRyxtde417QcL6RBkQ3akHV4ri1PcHk3s1NrSGLXAzAUopJTahgewFPYTWGR3KhJGBqqqig5V4yzf",
  "key35": "48CJfv4gCNyADAMwjVcFkBPFQhYGQT5t3rS3Du2J8jbKzxgxkPzZQxQs2wwLFFnHZAfTSBf7aSTgRjbbiWXoHDJ7",
  "key36": "2mZmLPnVfHeFgWkvYJyGSJjZ41VW1a5kiJ1NbzvHBUE6PC6pnZ5cA3yycuEgi5xSSjoxeHDpit1afhZBTQnnzKdG",
  "key37": "pzFdNKjJ7AYjcSkez8CDprTcFsqnM9wBQLZSXzoL2kZNViPbDiThgQ7ZMNYY8HTbd3P6AVRRcKJFHwxW8iuj2sH"
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
