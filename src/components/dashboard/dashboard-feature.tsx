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
    "5HSKBmdYtPiv6ETpAAgbHU4BjENVwVGez7nMgZYHnqZKkHgxvnzeUTrEU8fTN27DUJjAvz5RfMtNbBmvWgcQ8wbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36EekdgLgpZWcSk5ezNvyT6aLy33Kqv5nKu5scUXBdqdoP8bWnX2Pt17hfZk4wKmvbvnRamwxXnAb8cCryWFHaeK",
  "key1": "5hZjeaiJwvGFpupWKxVdf2JuNawSV5VeYEC2fzQyuQXixF7TLfyowavrG1SFMQ4VJMy5euaiAEqPTxurp6CaTR8F",
  "key2": "4HcpJH3E82g8Pgy3QouSqPMVo7CJN3fE2G5DhKT5fMrAKfq3sWJpweG4SP8TDjNGefs8NqHySbvWMh99QGqduPcS",
  "key3": "65WGUHe3WrXFAW848KiswXHDbU3ty5SLFris27cbLVAdkx1Xzii55Rnjne1tojEHKr7EMq6EpcVAzXCfKgqqmNC3",
  "key4": "2qYgTyenwFUQsx8YLX52wd1TFrjxfBysDQyzwYkyePAtQF2vg9K5W9ww7Jo3c4q8hX7KdMY69zgDUhZi8bU2XKKm",
  "key5": "3DYBsbE1sHhcVeSsRZ49K33f4A8PbVmAH3PoDnpV7pLfJYxQxEXWiZLgUrPrD76aZGvJ9GJmibBkpVUHGC9ZsMz8",
  "key6": "3x2CL1HLB4yxbfE7puaHcitsJRMta3yvESLJwbZ764etKnzaadMYmVyvdg8cqvsXSLjuhCmtf8ZeWJ5XebD6n5bA",
  "key7": "URG1p9FjPDtUS9vzvj5roTZj3vHmq1uL4jB2EbSKVTUQGrNUXh95Qzf2b3UvGqdLVg5qCx5DgQFibxFoYK7gq4v",
  "key8": "5SuDhbynG2ZqAMfLmZzusbUDN3tx79VSE8CyZg81DLiTFiD16KxccpyQNjhx5Y2ijkbt5KyL3ZQnpJPu7YPYsRZQ",
  "key9": "4kjYgNUjLKEy8TC8g8v5de4oMbvUZRuyYfM6ErBGbRXfRmGT28MRFFK1Vh7Drq33ycBdNwRAqUR9QkQNAKmm6K1Y",
  "key10": "2uxbK3HERgrxidzoYrcQtamTGKtGCEMtDaQbNGv99ybwKdMm8bu5AB2Gr5ML88184iRCrTUCn9YX61EwYUZJuC59",
  "key11": "3grz47DXXdhHnXmCABJRnyShtmkZ42eqeWmNRMHpQBm9LcC3YtjFV1CKDcJwLyen4gSwAKfFat3Gs9tH9LDuyUf4",
  "key12": "3va4PBwz9jY7M1RHfZ7Q3VmPqzHWX77sodVwXacy6hLT9hMjjqaEZoM91TxZdp7bqVdEt5ozDU783o5UCLTQC44Z",
  "key13": "3Y9Wv5JXxuzv6vkrqe1pdprVjFVe9GVB5zNQZzaBvPW1FS2J3vCJr4bRLiJVJnQRuYQfbhsMNpGf3LVEQjoWHqJ3",
  "key14": "59ows7dupiScMFGfkWiYrVHaoYwhjjcdcFe6toM9p84mgXU2mgSo3wCc7TsDZZTXxtvj2VMCH35GmUwn9jhWWEnP",
  "key15": "2ghfU3Y37MmcVUw9q5xWeWDSVd5636ByvQYwvVNinx7uyWTyzKRooQoraVZBiDVE6kEFPPXk9EsD1LcGYsKJ7gu2",
  "key16": "4JYA2xzZNFLmzdnpE91bHrjeviztNNEUpteZX7bAaVk74zrM5Y5tJu5pU24ttDBihHNgatPpAnH4fPhc3f7oR135",
  "key17": "2y29k53qULgiZkdvkwWv5oSWt4NzpzRA5D1W6undRkuyHxS6eKZVHKAN9cJGgMfqvpE845a2Ne4R4rUqRrRE6nmb",
  "key18": "dXj9nS9HFKPiUPwbt84h9MYeFtCeH92ErDCUScTHe5XXHmV1t6sqN7nniSrFEoXPiEP9EFXN625uByKTPrTx8gY",
  "key19": "4ecFWyRXHVy5ErzbXHAUuCwnCgBt3Fut7kysHmqpdFLNUHWc2aGCFfPNhpY4DFfmrVG6N6TZ21PjGCKjg3MhNJcW",
  "key20": "8gDQW5KKbz167PRKVmZSrrCSfQiErGe4tMZnj334rXbh9UKw6dz2touJExnHBBKgbxH5Cscuenn5LqdH6373ZV1",
  "key21": "3TQg9Sh4ApFLpzC2mS3CczM7Sp1WJ66xngWGnN33i6c3PfuLdPz4xhnYge2wktVn4aYiCxcvk4BvhpQVDDyVa5EJ",
  "key22": "4iBmVYnUntbBqtcK3qdVQ6K5HVa9THkRhXNesHgWiVrjCBE9YS7tAfSRmVoQ3R4ULsFWazUtPHYq9DYNQVzCXD7N",
  "key23": "N3WjpNHMjMfPEippnyvfUHUsbksiSdvxxCeBkNDMtvNBXvpLyWq4upbGk1yyhRQZL7s5Dafthp85C3iXBwEXJxB",
  "key24": "UUZTcTmpGNSBtNaQSMaSeXBVJFWsMEg8VuduGtA4eXzJG3BKLets4vdB1NhonRN69RMX2M4skT9Rrku5jrPCcvo",
  "key25": "2z9AjMCTbB5Teimzs94tyxQePBoAsUPcfaFnD1uaLZkg1EUFqh5UXSuvCmThAgzSemXbtmoi6oPjRbpksNM4vkEE",
  "key26": "3WmzYefhsHF3u8zQXFP7NiGgHrPyBUrhb9DGM2wNMGu2cyii4RkeT8AopMzNsfLHDEzoU9sv8X72EkbVzs8M8yyG",
  "key27": "4spUK2khZ7GuN9Q2YSBazv5vbwDURqmFsgeAbS5KZdXZz17cDDaQqPbgAX3nDrQng67VyuXA9sRg2rzkgJF4igaK",
  "key28": "4xMYNf1VM5YkhpymrRxvHRKvXZA3YqxkeZbPbDJbBjryAh2HsmbQuUTxBsa9scwsS94g4HAjSQLSQBS9oP3gQgyw",
  "key29": "2twmBt5PCx9WDYZtj7S8c9yM7neEvhnjnkwPX7b39GTi5tRBNaeL5kSrceHMPQiZMqDSBf1tZfCxWi3JtkLBzE7E",
  "key30": "3LrWTg6jzestuT5StXFbLW1RJ2U13Lp7Y3YPsCpFXEGtqW5Rxy6a6959SmePHXiipQv5jvoMeLaU1XonDwiQF79t",
  "key31": "66Q1HKaRs5p3xxV74niz4KLyXZdpXuWUaDC2tn6ehL4bqpNeLDrn2Vs6HNY1vLTNNyDv5QT3qWrDfGjPzrRWM3nb",
  "key32": "4g8ZhNxS4E9CNsUVFUMJoVLLasuoK9B5sBEDpQ8UiwFP7DfJZiSyBgKSZ2NBYBRYrY6YGKD9yi1Nx3qJkt7vqFHY",
  "key33": "2niYerbwrLh7NWAKQchJi1z7YpY4e8CoXghqp7s5fbv5eWSwA6WiyPPsW8PVjcjfpyVZkcGK6hRngJZQVBT5dJVb",
  "key34": "3AMvRhS572W92GVVui589FCNaQEteDYRtBwK4dK3jYGuKvLsGLz3ZJS6puVMVwCmp9KhTojQ8twvQD33VqdnpiLx",
  "key35": "5MqF5AMd7HfNYKpysXQ7Qux4NfrA3G9VQpx16dBTYdAVUACKd98EG6ZU95u4JMDamHSxPA9sCfUdSznsKrm14mUz",
  "key36": "3qxbA3DVq3iaC6wWMFk4b3JxvFA1JDZiBYcqQRaEuXvcwVNtgDDgHFgUJTVCfX3zYpuchkPngJB3meX3BWkgy9xE",
  "key37": "4KmJkvrMLsHLWTEzyyRoU7BkoiWDNAMxWuP7WkJNtFEzRDeXVTQY7vTrkL8WBU19LFhzyhTDu7f4BDt8aKUC7iMX"
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
