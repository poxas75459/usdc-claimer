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
    "3LeisY5XSw8rPz51kSYQQ8E6hSdzu2GsXeHW3kvzR3e6tDTurwfAYtiovapttcfK4w1vKCnN5QL3gbVWE93XxiNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R4G6xVR5UAvrDqrPh9ZmbaLdWjKJjjme5iaScRoJ4VJEJwyzb7gguN9j2Af4smeLSAiSW7iafLSEiMqGZXC4QQP",
  "key1": "2iyf4Mc1QGhFsB4XfARcLHSuenvXRicuKq4ydHEHYZ9DdkCmas3Zz3n7sc3pcaNeSpHyT6KCBngETQh51AcimiS8",
  "key2": "4b62MugAcSpym1M9JgWtMjpdyj4cBAuuFpqrnEYSdn5RzfCHgC9eYsPdnduTswpKLsPNqCFrJzSiGfC5E7JJyxwv",
  "key3": "4BgfpPPeN3drzXqPPTjpH93Gc1p9yhVauoXw1n5fb2XyHDoJo5MzPy3fGXNQmgPP3C8fik1W1m6E2VGfZE9nmqqh",
  "key4": "25B1Z2xra8FzY1mKxShBwRvL5nJ1P8okhnvETJHfqJt3oogEp49vSXM5SJKSSZWSYYdJVZQ6b69wEfA1aFd9WvUx",
  "key5": "PWYbxmyddTY2yp1TMmxU6tzLTChtoDBRAGEXudgczJP6B6bbBpkRiWp1cyvSaiUNi8tBsQEY428nXMGZE9wiyqB",
  "key6": "4HXWhVVLssbWyGCehMpaJ2LFia8pbJRCzLKVaLBx6o1HL9N4qB1ANnY4Rqj6CHW2PN6QAyWVz9qD6ES5SaM821SE",
  "key7": "4AZbcVsp4rNoXSSJeGdtnzjhpPyqA3YRboi3nVTxX2douR8dbRjHWkXAJkfHk9XK8Pd1TxdpP93PHrLpeL9z4ynE",
  "key8": "hDVksodtqwDVjeuxSZ6zN9jZV8RkdutDki2BEyZRv3JWqoWh8XjzPnZtVFd88ehAYhiNnhyEmpLat6XjcFQPpcX",
  "key9": "2DuZBzHpPPKX7o3CtoyLVZyfUbj42Ye5vPaesgH5P72EH9RZ483ZUAZRAZQSFMvzahxfjxcMLAX4iRLSco5Azo1Y",
  "key10": "YMBEqxs4htPDrZ4tg46MgyeQPXpwSHQmxzvcG8mNAaV5MwXqWoHLQEcs3AXuXa564c9D4FvP5e3RB5JnKwK7N3G",
  "key11": "4VgpMrJb94KpJ9MzcSc1aUgBvprb7yVM9DW3M6b3QBXC5ktPutaZ9iqY49dRZ73rorw9onVMAdRY87CbVdJJSpC3",
  "key12": "2qY4PiXQ2ZgnfTxbpA7KuDika3cQwzH7CyztJG33Nh9tc5qcGekh1CYwLPXTZYzX6tJyvtkCtNDF45dVaC9MUAMA",
  "key13": "5SV9Du4iV9HdSxHXKBETuJp2VhysxXEdjp35oaDtHDG6XfPSGCBja3uD3m4MrqpUUZwY9PwmHUU4q7gTXh1e2q2n",
  "key14": "3w2GhxTRFCxDSv18dRgNAjbnkCVkaLMgrged22EHKbGbLJDcgRTZwRHYcCSVAaWj6HYNoNQQrcL9wqvbNntrA8yw",
  "key15": "4fe4dTGv4KisvHE9zkEDjqiDoLQ9XNivfFUWvUbSFQkzEN8R4gTpP1LvFi4ujPJvpJHWSJWs3DPpe4u6bgG7t62L",
  "key16": "446CyzgKdc1P3yKwdGFLEzzTSRezNMAywCYnNY288VYVgKB5g8LxTuyJoWrBdFfi9qnCGnjEGWWPQ64jWvCrPRB9",
  "key17": "Z1HHda8HwD6QMSCXQGcEuQioXJEdQetyCHHSkYUouQi9hnsyKFWhFypPdoRbsEJng31zw6cB8qK1cKvobURoMFA",
  "key18": "9x4FmJvtXvZ8ePSYh3iAetBYUJXqjZbnZX4WLP6pZSu7FH8XQFF6uuQsZLSDtCJVdVdtYtuAS4zYJYj8FH1tNgj",
  "key19": "443Nssxuc54H9EJDT5ez6jsBpY3QRg7sjDpRLJ8nQt5Sbx1REUpSekphKSHEwVH4apY1pwEALrKvR7hH1AcLUSbP",
  "key20": "36R8QoFvvw5pWVpTKvSrBQZgQoASNjN6LD3vXm7ko7fpQY9GvoFcPgXRvfyUevtwt2Zpj3uR1q2u4bbzddWGuMjD",
  "key21": "2JnzjdcEddKLmX5MgeTZpuxtzbH5sGSFwpAiQvzK4GjsE9obHLnJ5oyNR9T9MAEirfk4NCAgvkA8L8GXhaxSzGhN",
  "key22": "2PKFRRZscisBNCBpC5H8GZVsLomQJo15wEPak6nAVNGnTvgLNnbUFTtoNAQX2tnAZGQhgdCBdfRoDwcwM8ux5P8N",
  "key23": "43i9J3mTqkKBJsVnTaZFyTu93DZN2ipvVfLvXZuyYeZCcrMLy8TPVc1QoBwnMJt2cfsxFeGKwqQxtVy3ndvh7MAu",
  "key24": "3WN5wwRLBYeDHnkB3WhfAt9Y6P3xmck1K3akogDnsF1V8EkzdjmSxQcFqHWJiscAq57y4mvFCKRowsFnzrGLQR1K",
  "key25": "5Y83kNyhZRs5oiSYkLzwXFSsfg9BU9SpTs1uHjUGDVXiMVVLxzzBoArFdN6D4aAqsLoBhtYREBcqf34g8h3ze13X",
  "key26": "5gLD6XXqhYFGZyEhJFQFn4aQST6WRkpR9xh4y7m9gsbpMzQpLG5rSmgDzY5veqKsBXu6gX8NDA9ZVQqatLudJs3J",
  "key27": "5wAf8hGrrwnJzaBvtTFVpDJLuLp6u2xDGysYGAjp9MoVdVFvg51f9unZn85qr1kMBGgHJyesZqoze3RAQ2iP7euF",
  "key28": "5z5tfYjqjGbseo7qM3Z8b9qaGrrMkFGZg9YEypjHo7NUEVj2KT21mqY7Sbx4zVGrPzn4SuN61fZcZ2TuLDogeTKc",
  "key29": "4g8dtur84XYu4Lv58xybxJE5xYFWR5zVjiUbt5z3dLWU6P4i7CRyAAaqQY8ALzZDpG8cq2WSDe2DHeoyyAt7hpNY",
  "key30": "2jwmdhm5ovEP6WnZbzZTyHX3LNQXJ2eFirD14T6tLx4HWJCUyJvYctRvNLXixaSTKQZqAhqGKGCTPaB2GwKKUrWL",
  "key31": "49Rw7X1Xa9o6jCxK27XC9CaKChuenGcoobKYVsrkMEiWh6uxTPmDXbRzSRnaY2xEJdaB3BX2W7fPmzVLGnwvr2HE",
  "key32": "2vUtMSvDeutK3vTo6wBZ2PzktzGd69YghfYqZDRsYHcR13htoEhra1EHMdmYdAU2epJ1TTQ7T7rFHeZ1VkqDY1YV",
  "key33": "XGJPQRtQ9Tmvxok5ysK1LKS5EBiMeyJKZg8FgRdKV3Um6WmhnLdbLnxLRdNfRhV3ffAvLWUVf2yASiGwC5B3K6G",
  "key34": "5fTzdSwVDpVbqrm2xjyMDvFCTTcE2gfQ1XSd2Zch1rWqiqyRqiAiQiRvaPATr4rmHbqkW3txNLrZ8BUo6uAdqQjB",
  "key35": "2MMkWf6BYQoDQjoyRTzWW8dvPnqKARQAqAG2RA5eadCqLC63MsHTu1ymNtFQjfVgKic9GutnhN6Vqj8r7NSPNE7m",
  "key36": "S3pu2q7rGNL6Z3xvgKmignk6Ks8kJUQuGimFSHL9zXju3UVNNWbZcUfQK9PkFVkyjsLXvoBidjDTnctajmRnCnB",
  "key37": "2fsyHJWD77xGRUKG18mBVGAXmLy2P72rxgZ8vuGKfHoH4CoEMLL9tRpGE9xgjWH5LgwUiRYnAvfJUgnwQRiT2di5",
  "key38": "4347k5xe7Hkh2xrc2GCQTPHXvQzSKRwxhmp7fRxzfPd89Qm3YRzsnaBsdxdtnuLEvkN5eFMfkv49e6eke5MyTjYv",
  "key39": "2nHyWY6SDt6jxpoYP7iPXubXuxv6g2i5x1G81iV3q51ZJspsHRVMerUqDcT3nHuvqb6gwYQKxq3M1Di8whESH7md",
  "key40": "swNZvTc93mHQy4nCh1dEFathkRJpz4dZa8UFmhFUjrjHXVYjr7tWmhfa8AkGYHHDKQNkXEYLTgRUG8KxWio7ZrX",
  "key41": "4cgW4thPsZDmwiviWaTRofZNH8ZG7W8AazN4yovPa9TAFB8fAaPJqt1qG1ynDBsEz6yX82bbyQhNdf4Bva5eRVZE",
  "key42": "37pVmP3hwJTNSNLDZrX5Uc1BGoKqTZ3Ewddp2TdTJ3UkHQuZ5L1qyXjeFKMFwjsyCHWWi3fcwPAD2PC1rmK1ukzH",
  "key43": "4Kc7FoEHppuqrW2ovHzRkf993vWPFhtC1FzASMFf8hpF2LTBDUsoWvdZv7JJynjcHUcXWQwVaF4NNjvJGRF6QYUH",
  "key44": "3bFY6Hf8GVLi7r4Etcnj7jN2jvdR8Mc3dtes6dE5QgA4hhUiSLtEifBZ5mi49WcPGABTJyvVmfXgfj468C2VYf7m"
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
