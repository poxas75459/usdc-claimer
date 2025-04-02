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
    "4zLZB7eJqkW63wU6kqj3iNp8VtsJ1a3LGxtdoYswXsa1WJQVipcR81MVwYFuKLTK3j2xfzBSjEsr7h9GCYcSSkAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pPbvMXzXhXwfhy4GKbHz2Uht7pHm6iYebgoekgS6z4z5NQFwCGVcJABqdxt4AgyVZ5PkEZRQjAjyq1eoexeorMr",
  "key1": "4wJRSLnHPN8Ew5cXviPkYd97VtW7zC4coQUF1iP47BtLeH4ToeYoY7RSCuBa8FTnEbRwrH1UBw2Swasy2sQd1NzB",
  "key2": "3d73zEtoWXwr1UetqEdTWGKRn1FnhCX6jnHzjDxK8duXWadLKeJ7fnHzERc4hVyeDtKC7Pv1s571k3nSke1Q3q6e",
  "key3": "5kTDV2B8PiN8f3BPpuxJ6pkhn7h5KeztKcMBdxaNoTSYnGErtbo51Ssq2SkqiGBfFkZMNZENxQMawGzCZEftmcx1",
  "key4": "2bf3mdDxMf9DH9kUjSh3Q77jX5dsjX8Dhg26e9kdKxAreDvnv5gyjbY2udZJbWYB6LtUfMbXqc9HJmHW1n34R823",
  "key5": "xhNtogFwwTDcKCKUDMWvHZegGFvmdkb4gJ2SrV6ewFbmWERPynpDZaNdqRdAtRjeD3Y7LvjzFvATfKQr2N6E8j1",
  "key6": "5Jkza62Ea76KQvSd5ekHMPicoeXYSW1Zx255Wt3MG2uXaVrJouafhNLMpJ5ERMG5WSAULR8vbx5fQTiU4G1f75a5",
  "key7": "333UQPYkLzBwjsvNTtyBXE7dHbotLA5BKppsTJ5Ynd5U3gNpv58nkRT8RwH3gLH7YPTvt3bGeiXgvmtZj6CTuFw3",
  "key8": "5VEHDMSqYo4MssoR99HpXJ6iz8TeKisnmRpSV1npfvbAHcWYgRCwja1xTbTunKmKcHpFCTM26pWdsXGq18kpGofs",
  "key9": "2DoxTn9BNTnmAk9XngNHAZ5kiYcswcGQmvtVScd6CBdTz1kBn229udq6UgKJQCHhKsfQaDJeCgPkkP2U1F8KDdy1",
  "key10": "PdamKwe7JqgKjJ1MwDFkwhzfEuVY5jK9HtvofhFCv5Wu8M4NY45GRH8tVjGA3WAg9fJYAdkyJbwbMRPexdqunLH",
  "key11": "34vrHwFG9QtJx6NSq34dL6XxHJ67DxZAP9jJLhARwHekNyxkYpeNWfiVPz5br3QpvP3WX51Fxg3KgGv54kJdXkGm",
  "key12": "4kNJWcf1NS9NDdUojjnwwzpyy21bmuHv74AgQEay1jMrtV8zd3UsSLtf6vfTFvTt3a4eUPqygLarNrxS679A3Hr2",
  "key13": "3h2d9X7a5t6FMhmoLZnrxo4CPKPT1PuPS4WiCfymhrFptW8xBHt3mp4o2nZ3PGS7VH9Ko1eTxHsEgJRWGZJVPbk",
  "key14": "36fG2GDGCFXaRBWoPUdUmHP2ZHrWXFRDNPcLTbJboDWXQVm1Z7aaE2HFxfGoegDSJHYLT6uhVnpD1E9C1VKJLueQ",
  "key15": "4wWNQ18z3DKvG6pgNMfo2RGwiM7KzNYz6xp38RDoP9J8Y8J7uRysxD9VpCYrSDpbRmVmK7FQs4bbR5uiQgryiWFZ",
  "key16": "y3pqvYxYSHnBBZboE2KSyZmxV4ekobYGQCJuHk5jSAbaiM8E2BKzE4ek1FJv6wj8K4pVZWXETZ7YMAT2YEzHLBb",
  "key17": "7pke9AZkUKm1Syh2eybrjyJXxB6hJwosdS6b5niPUpq6Au85okyKGjsqrodcM62cNbQ4PZoCEpqFhhT17pdSXJe",
  "key18": "2PXZcW1eS4d3aW5yqTFy5UVrN8394y6wZBfieVqsv6h4K66ZPv5ApagEhssNRKDT7kSC5cDWRxgyjN9EfaW4XDPc",
  "key19": "4GX9iR6Rd7G4SUWpd3cZVGUPzDHD13AUFxi6iQAhgVsy8BvzatnuVfM1Hsj1LDfhf2tC9oUCLJkci3J7SkRTDQfV",
  "key20": "5pUHBz4sXeNUJt1J6kZfQjsbe1fyFzte6NP7B6X8ud6X7RBUZjY8REAYN3K1TyPsfZfmKbx253h4fr8yMEFqt9V5",
  "key21": "5ziPEToPgp4U5HQ2GEiWH3L2C5ADGRmSkhfmtpTKhkeKECxhkoEDhWn14hQyh1jMWTNdGBu6s1KQ2tPAMtnPTpr5",
  "key22": "3dSsBDUtogZj9Pwf73Bs2sWVWZh9YBfiJNjrac7nVxstRnvNcrBjiCJVM1hZqaq9HPqSLmmu6WndrGBf4kBFoMcL",
  "key23": "3d5dZ4Cgg367ULrsnBuQzrsmvmjnCu7BuCjF6QCb1U8nh8evTK5D4SjbHfNBfuuUvJhqMiXT2PNZRm9sia2kMChG",
  "key24": "LWFF2qdLdqL1KqZ6WPPGxsx7q1LG9LHJ19m3Pj1wsa5U9G79ppF46Cb5f7rkw2PcGUk1YtrK4Trf7kGoR1HuScT",
  "key25": "26rA7fnev2PjB5qJohgGrptVQi991HRJSbPVchP9VDGbosKErhLChN4crzCNEavfGwVTahmhSSCHBHtvDhH6byex",
  "key26": "2MjgYMtyq5kqZDBrAMmJbzYwWoDreXvMcdPscSdeD3sh882wAq93nV47CxUoAJebDVt4ZpBhzEciaRPGEp7y8KMe",
  "key27": "46JxWDxutzFkH1WcVrH2ydnzZ2xEubCGG2T6vLu7PK4si5FhUb3aDxTBy5kDvNm4KBY6YHKkhefwe2bfZtR2tBKK",
  "key28": "2afj1WGrDLcrRPosgndKnD4piZtxS9pCb6zp5XErb9snV7acV41DgR2E71MkHF4t68UxT8TwHSWde6FJzuuhmt85",
  "key29": "5PhvzXx8QnK8wxao2Qz3rjJdyBHVdNqBRJg4ao49nUPqkqtY7iYjah1q83ifFKfJc5Z4ZHMwjLQiby8RERGwgN1U",
  "key30": "MC66cnt8YzMM98xKCm8EHbuTDwZ2RNhp3XuRTUtNdraRe2CjQrzmNKwGBn7H5vdoP7XRkFR8WccarXh7UFjEZaU",
  "key31": "3g2yUZSWorq5h1oh8GGFQVzdMzvqm2PzjDqGjfiewFsF5WKBiihAsKuuD51K9cLcZq63AVog33PHFdpf7XGqpa2h",
  "key32": "5ZKZSt7C5EVRDxBnTRxtiBZZCiGLe13KNbveHVQRJ4N8GkMxjkZ8cuLhvwQMYvVQupv6B6RnyogHS4stJSyVLbfn",
  "key33": "3Xm2YvrTH8rsdmWQfWBxKDDE4xwM22GwtPZk9JtRVRrCzpogot8BipijBAtFBV7vVMPM5VuK9f6CnDeZY8XLD8fL",
  "key34": "4dbzSvwBQJp1dvPoTfuNcxff28D5U35wYe6ieuKKHEmNKbu5YbJ42BZJyiygSwt5Yi2PVuhrEes4qFUs7BnZYE7x",
  "key35": "4nKJMWEG35UYk7mB2hNQfErVxMq7QPaupyfPCQwnQQLy8tQ7wLp2Mgxk62sDSunzfLKzbR1ZyuUgMUdVwpGw3ocv",
  "key36": "4jNmbkUyojpipiUemvxDGTLqnnufq3HSDfLfb6EGPCAtqpSgT96HRETpikCx2BBJCRRrgCg8aGwhvWcsknFrFtu8"
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
