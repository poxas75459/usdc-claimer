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
    "jugiAmzmKPrig5Af37CSgG377srNjuJ1Vq7mBwAA3wyUW2DUhqY6SnSkWtHDh15LYakimTtW8HwuEGqdnajvnzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJzGd48SbxNzMtjcKt2tnKiWWdYvJcMRZ2xoRMntq6XDeBmfLrTXsTC6jGpRBdJgaPUeM4j82hf4rnnwDTcJzsb",
  "key1": "2wCWwCiZQBPn7YXEjYuVzJmmNyzd5KVhmtmX5PLvgEUhSuYAB71XhMyWpPtSiMWfS5coheYknfKLo5M7v14k7eVc",
  "key2": "3Jv7mSHPiDmYXB8tqEf5GHFvvqecvbe6qMVv5agtPxhTVtkF2YTmjcRQa2QsLVHsJH35FaBBRKgtTYbKuyX4eP1o",
  "key3": "3m5UqDm9tH7Sq8N363tFNuaoshWbqro2wfA9GUJbbou5PRRm5FRCWxGag1RCZaG7yEUwNaHjRYtu7kr8gJ4s6Y9D",
  "key4": "2FLP3LXFf3gUqxwpeJgdi4YSvMbpSGVzNSpRYU6WwP6wnjmXpGCsNAUjgk6Z4ac1hsKMNUQvxPH2kATpLqFaXQQv",
  "key5": "4PshBPSGqJqBbTuE5bnyeJgArx6xzL3zQ2xcQJcVmJfjtiaivbbpCC8xWMXCzGvbAPWSzVRZJjhXx24svtgeLSym",
  "key6": "QhVNhZQrs7Vwr7XGm5P76Y2ve1pDzVJW9rPKP5ZTkLP3ZSTi7oGJfvWamuiUxbfNb35DzA8qFKJGXmtG15iBgxn",
  "key7": "3ovSS8gGHFusBq39WT6ZtQdX82pbE9hUghZzpfkTQCC1gNM4zGMFmAe4bvouQgEn4VpnwA8yCc47YVNU4KqDi1NJ",
  "key8": "yuNt6FYKocgWjEqWXLy1P7GNT99R69UakqSNKRYSbmW3wq356nTBrw1gfBrxrFNzsaxzm9RDMuLUKsfyuj7GkkP",
  "key9": "5ZAa2JXinyqMHUowLomzC8JsWiXryvkQ4oUxYHPsB8T1AQ7hhjc8GADZBki1fQmoYSvQJa76ychXxxpx6oRnzvsB",
  "key10": "5Yh3dxw1m2nPsbbTXk8hcovT98xv6E5yQB9L1Wb3R83i5gNauBXwyPkJFYtPx94tax7mGMzYkMFH9YBpsyneUZUH",
  "key11": "4RLf5bqPEvdfx6SX1t9zUr1gSa3jHcfMRJ2CmwEqebMAYnzxsAjFGuhQKTp1vTrtAsFWoP2W1vsNiP9VE7xPDzPq",
  "key12": "4S6tA3s5WuQ6JfkX7vh4zgU3G75t2gWJZiiJ1rBAac6kcgqGLfSK9ouwuUPvWwqt1vecWj4HUKpftYTUXptvxir4",
  "key13": "5LpNnzBEWPYvM5BBCUWaoi9u33ciiv82C8vtYWd6Zv2B3tsiMMXQ2zU9wETEx9J7rCQR1Doev7R1XuFadw869PMy",
  "key14": "4aEKEQk7mFb5ULBJrZaE6xiPowvtkFmHeGCz7mmGm25NEHnFFrgATPAtQytSD2UaPRZJokrkzQiBbQTwSmH9C9VS",
  "key15": "4BudgfXTHqoyGSaAjntGMSJ4cCsezmT4cX7uobeW94hyTximvh63K9jxJGaszhj3QxWkGKrWFb6vbAFuXuZ7naWj",
  "key16": "2Qp3s7X8duQ6TVLU5BJoR9esvwiVdm9Hi9x4T8APSN1iVGJjzVDCXWXv1Eyh6CSDggpLVj3RqKa4GEisSyoGJbtj",
  "key17": "64Lw98hLDGm9TnSee4S4m8pmr7PWLnxCsjW5CxT7AgVyVooc2V2soRP29dYLd2JsREhnab1DEct1HedXyWv6D1wm",
  "key18": "5yMkPmBD4usitCNpSLV1mhL9nrwpux5P4pJFjZh4XYvQRKbYjHsvxbRTirLq4g41upMtMx1A6jRwYonDBqYxE3CS",
  "key19": "312VbBuuxgsgdAYRriNfwJvt8NNgRqqnwE7DFiUZeAeD6MWprFLZJar4LEWobMtnPp8rE8E82e359iiekhQrqhUn",
  "key20": "4MwUjxD6SvpjtKF5mqRSFStpzbsFfUbhLLUzu4iK6tXEdeKu3G2MMp3qcnuET84rJpHtcLDz6DjQxfSdsrxouyvA",
  "key21": "38sfd6vsYUJdY3qhWiuatvTwHCktNJ9xJFgrJHXsSe2z2gt2hppaP7QBuDkhFNC2N8Bn1y9imf5X4G6W7TaUkqNR",
  "key22": "2w2hpq63kAJw653hB11Pq1tuEsNz38FZwWT8gLUxWRhLQCGbRCnm14bNsxQjhb451SYWmx8idJmP6gSVATfDm8UY",
  "key23": "5vZq7f7zW4dsxjU6EvggL777My99nbjtsAtbQCt1h2rX8ZvRMXSPwstrZQ4NSsnEjB1hMbD4uCWd3sHexWA5rh9i",
  "key24": "5yMH11QmKWiCVaCgQSJbERZYuDeTzRv4WkoczD7Bp2mTrtbMi7C5fMGLsq4pkJyoAz6jFooARXR1sZuQpfY6bRNS",
  "key25": "5vX62Fqfqmqm3kAjxH3yhUu4imUq1WUf8BFLMs2JPCwWFJzJsk63VCYDE2SaDowNL84gwWitH9c1CASfG5FZb5VH",
  "key26": "3s98YBYGgd1FzPKScvArab1p578MVpurjDiMCMxsxy7Ja5RvVhFe5rJhsZ8oX5gmjxauEZ66U5AeKadUermnogvD",
  "key27": "41VUoxhpznbMiXiAdWApK5sQTZntD27XocPpkaXHkKM7q5KhkE9ZENK7zyHskTVj7TQBc2knvMrw6gUXw5nS6QZn",
  "key28": "49EKSpMqfN7QWbvLuvvCJ7kdbG9ZgCxEusqakuoQqxYCcZS7PZb6o6z335zEmQezVTz6GfD5Lp2DZLiLefinpBhw",
  "key29": "4Kj9HTSoqSDKS6i8mrP6djTeKyoDCTRsB8uuGzsSp6bFhVzptTg3wN3W4tp5zRhC1HMPsvqiNRmKtv1jLzoUVG4y",
  "key30": "65qa51AwYLepBtBawQXSvxPertbJpoqnPoj4rd4MUDDknUsLQCK64ZQ4BfnDDQrA37FVyNSZy2tFxQTM9kZVkaNg",
  "key31": "5tSTEfyNXvjjm6J8ShkueFvQVsuZ5hp7qdpop5bRaauu7cfWJmhm56BQxSbVhwTP7pPFzpKK9iPkwRoJWWyGHAZj",
  "key32": "53kx4A4z4HifPvmqtm1YoGdTWpsdFvdjDSgjRURpScyHJUtzfDmCh4YiH9JKaL8bakc1pL3qD9kyVTxS6KZDJrz8",
  "key33": "66Fy88kGMzkXr1f4j9cZ9q8D92sf8mmPoY7V4EkrDouBXky2wrNzhBSdCryJYf1uJDRn729KvPrxG12GFpTLxHZN",
  "key34": "4MvfpFU8jS6yW8EwqAtRrodr5ApDugKft2eAwCW9iZM6zDVcpA13trTgh7ZYwXKU9rdU4XxRZtpk1kpjHimLngaZ",
  "key35": "4pwFUTjvCv4vD1ntMkyNovCYsTdkdDvfiAp3mixYZERqVro8Vg8mrqH3Xuua1bLbUSHv6TkpFSe3m2fmnjEYbqRe"
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
