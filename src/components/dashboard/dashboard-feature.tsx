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
    "5t6n463Lk6k89iH4PnzugjbA1dyVK1zjdk5HiYkG7pkG7yr2QkfSbw9T5qTN3Kfw2mVg6cwdzVQvvSx4MAFSZx1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZkPXhxnRzTfBhCab6SLfd8n9MQaUrmB7BeXeKVp4TQsKE6jdLrUto6YX9azhZSYCnghDaMvPscoocjeZrpnPu3",
  "key1": "2iCFvBrKJzh9EpNXbNq3pM4TwgoAxieGSDrjczHNQNTsNwZwUWYUNBjcEwoGNsgTf1wJN4EJy3V4fniuRy3oguCt",
  "key2": "3xLeK1nksh4gHdLsGfkYKA33rESFWBfU2N3e4kj7HEAGzJSvGKqyVMB83RRysC9swMJeCVpH4obmKXCXcBrcGLqc",
  "key3": "45LmEMNr47NgncigfPmGmgcLWGRbnXw1s59GoStgdUfb36saWUfENcVa4NpiT59fCNQx8J1jR5xSPw8KYWaXBXzL",
  "key4": "7uAgmewDRXGJK8tmjQbQoU3KDwpJsV8Xx2JxqVhhRH4bXQ6jP3qVFsihhztLYK9oEjTSmKh3NNCHzjw7gxfmxrd",
  "key5": "5RCk6mmi7v1QcTRiqT1z36q3pDV5To4i9cZTEJSWnMowpMaCn6DS7Cokv47CC9x5SnmNRgdnDVZ8RnGrbKpgL7uG",
  "key6": "4PvzLRB2wNEoDrE7gaDoVVN8qceu9z8UMpGRXDyUwMcHqrvAsTArMeGmftDFV78iHdorbexn744y5SzSxHhqq7sT",
  "key7": "3eQjALDtykmf7WTok6nZ2XZf88HLYSAECYPjTdXnUVwkJSZWmBKt7XQFzyUowrTYNMssRaEiY7hwdQi1beBMCsJw",
  "key8": "2cjqZvkG2aGkvYffQxhzKd7fC419bLeiXT4Bwurbq7vTJutFvaHLQt1Zb4xx7XiAbJAXUVpP2xkFA7xFvFQd4rth",
  "key9": "5Em3QYwQSjVrjAYxS3NRuX8udP8sMWvSyobDWx4XPy45NL5hd1bEK9oCFjNHv4WL4LXLyjzawpVRCDYin6EpCfcQ",
  "key10": "3HZuyQ9k6NzcFATk2MaY6zRwYGZnLfUy4UcijwETLLpUVQhVtEXSkqXFkK4JeSVBr5esGrhTJdn7J98TwaU8jU1U",
  "key11": "3Q4PVpVWZQS9Mho9o1Q3WVX6vuSQ1xMJ2kvk2mMwpEMG5ZEwneFnDABMLSRBtfx6GxL7PLJgJSKTaBmCBufQxuBF",
  "key12": "5uqJySX48wYpxthGYEMFg6eAKsPwaYPY1MmSNwFhXLwEfa7jYMdmTnXSqd4VoHQrVkeRQGZUXJry2qDAtgdek6zq",
  "key13": "4VUJK6iGJ6kms2YmYCtHbGnjc3EzmhR7U6aDeSv2vQiC4pqVcTvMACdNifepmD7uaS2YefWT4hyjyZvoXmC2eN8h",
  "key14": "3GprYSvhTA8fDMa5eZcU1AEtt73McxmrZ2sVL5qPid3Ebk1esouU1rAHLjD5kwhnHoEDbrcrkTVUW8dArNpDBcN8",
  "key15": "642KFH7VaimxX56QtgEVRNWGNvbPXcAwUeT7A6HgeTNonVLdJ3kCAVAChxhuMnmnF3GWSmthdPbieJ6gZd6HLcz2",
  "key16": "5dxnqvGr7SLRYGekPLNNZbg22WdY3X93qGqK7aLuGwZT2yMZ268gYfDbJPkD9YEsNZasiCgBha5Xh9AZ4PbW2TcV",
  "key17": "2ibptqGnhabKouuYFXFav2dBepQo2dZTFD6tGtV4wDFjNN6gchoaJUrbS6eoKq3byBoxDhrTJTXhP9Z8er5hvtd6",
  "key18": "4QTMTYr9pA4ztNKmbuMEpjvvGugXAmudNH7BmW6Uyq7C2QVWKhU5D8vT3dymQoDJBggiRtwyUsTQpJY7NyVvDSmQ",
  "key19": "66K4baF9LUuLd1j66HWZWyuUcv6s56XQRjo4WjXNPdDMj5ogbN5shV4dnAiDFS5Cr8Et1on9XrVDewV2cDkEdNYC",
  "key20": "Z6un3pJdoKmRcABcS1buzY6BrCA56LG5Zum7H2tJapgvhX6eMrSg5LG3oWAC8wynpfoniLetKPz27bU7LFC46Cw",
  "key21": "3kafnC9XF5yNJZJVMPvgo8fiJtvWWps7fGQZSaYip9rzXVyRWQLz8hWumyc7WsYRZDwLxpZAQ8zys3L5KgZZe2hD",
  "key22": "hRZbCnKD7ZYw7Sw9D8GLXSeTo3Fqz7gveCvS1YkztnBAyRi1P5zfcit5XqDL9uc2vga8xy8n52dSAKrU5cqeHqn",
  "key23": "4JSAWyf46wP3HRKN6M2a1jmiESAsJFs4faG7kyYc9tBYEMw9wWAXGVYAf5DayFxKyeiw7pjNjk8YmrAG6xDiB5Je",
  "key24": "4kAfMBLjDGvBmQjwLJen2DdpCzwrUYtADi7F2qPCpwNAZ9CVkuuwrYXgv1A2bFUBAynyq7w8KVsM57sBGeQzSEGe",
  "key25": "2C2n9ZJjmPKPysFRaSaMP37d7qNF5zchUTiRmw8G8KbkfQZqc9DmPCqa1Y9CmzCKZwtqoyC9ZdGPQVVgL8cUsuXS",
  "key26": "RcSpxSmu6SwgEBog5Xk4duALRCQ8QsR9uwLK9Vnw6e7bLpFUm6Kpc5ocpgED5XuKxuG7h5Q614prevcr2qQ5TdY",
  "key27": "55z93PF8wXMwNW5m4eXT8YZUBxMWR9GMWWizViiEt8KvrJJkX75uLfcF1qkWjLTB3oKKbpP6cVYXs7inBiQqMyoH",
  "key28": "1eHtd8Cp9BgwJ7nen2pj3RypCPqoiLVNMDeTbfBQf9A1CtdF1dBX1A7NbrYdxBSQrEnMUZnnLk5LQiB9YoN5dLG",
  "key29": "4fHMNCLLVbYmEVCsFchyWtmXSSKAEhtijsCaLPfjQmKwUro5eknJtLKSXChbaNnK9zKC5gaKnmZ8xXWFVqre1DnT"
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
