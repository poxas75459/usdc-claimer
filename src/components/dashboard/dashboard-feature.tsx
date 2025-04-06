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
    "3ADS5tUgPZyNqv78s6fdWxYrLi33HbsjTuc2MDe8Cd7BhMcqoXSFzkcgraNM7ThU6VprbCuFF6q2BE73rhxrZ1Dk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38NqG9Gn2cB8UgcjFMGPErJPLjXah86cfCTE8yixhYV87CSDmBpYh8DPVga1Ue9B82gq99S9W4B1z9BFAWBaNvH6",
  "key1": "3ofSuCFUYVRXUxztCyMRfo2JvFfCYMEZzhRr3YorEhG1VujA6H4HtsZYJqXoizr3DhhR1HxvShCwSrUNbAAK3Tk3",
  "key2": "3bBjEn4YQQNM3DM5cQNwUvJuCALyEwA9boPV5ANpLcjUjtLFYdPJqQ7vQH92eCpYh1KvMNgVe3Q3sT9dMBLYRDya",
  "key3": "5hQD1U6DBVmFT7YfE2AMBEw7DRK3FwDuWymcYAHttLQkciRaugbiFUT1VzPPDvvcWhtb5rTg45u3qqY9kKTkc5R5",
  "key4": "4UxiMq3Wc2P1zjpSULayrm8toAf98n5FC6uQErdgf4QEQnzYjejrZaPwoGneuR62UVSjWkV7CaEh772rgRrzmDRq",
  "key5": "2qek5nzgytLpFoJxFRwczWwy1WqVWXudWcEbAtzPvdXv1kRhBYsx3vgsETxPAS3AE1T3j52v4AgkLnn7NvnmGYXv",
  "key6": "34aBTC5PS4pJ9h87zVpb9MTL5iWJ21aSXRidM8Lrfza8yY4btMHJpPdPyQTsoN6a8g6kG4a5x2Xs1nMCNXJwy5ZM",
  "key7": "4qMPms1koXEHnBjFx5Li2Km4KigFenVJFj4ejUqoUDrWMTmuHZNG7Ns38imUHhMZYccnyLxTL7K3QseCFUGHtUV4",
  "key8": "54qbsbm4nLkdhgphZL9FLMotsX91kFYvvbAGScNFM5h3PKhNd6rKrDSXMmZvbd7RxqWHcXz5W7RYbpLN4jnz38zd",
  "key9": "65g7Sok1tKFx7C8oxSSK6QWexYttdrr3GHwMrSS1ush6jGNCKG1eYzvaNWfqhFwcMCWUxjrVTcwLHBLK46Vc3FuN",
  "key10": "26tkXmRRcdto4cEfHmyZKYyd4ezqvnZJ2PuAthHjoJvVHCx2XDpuTyQRqSCbrbe9UVkFzR2vG47xAB5gexmb3A4p",
  "key11": "361Wm9841sK794CX8E6ro6Zw39RgYCFkFe5MWBBnDufWYL8DkLe7xcCvhdqbh6NprN4q46bF7Xu9A5vuKVGknhy8",
  "key12": "4p2fV3SvQ9xjYk9RQCm1JzCEany7iMB7kWJaXreKsDyAoxf5te47SDow6EyHo7kGnAUFNxrzEaZTj57KuPaFudVK",
  "key13": "4zEqtX3rXQxm33oHFM9gwaBJCL6TFcxUxBm6WTY49tQ4ooRJJbsaVi64kAemHbQGV9XmpbXJMzb8n28ZhG3BgeYp",
  "key14": "48aJJkrogvyrYB9ZkidJ8xynhHgzWZgX1jxxEps1LrmjbL3VHRNZ2Ac3C1FyZhyJkh4G4d4ASymrAfsewpo6kXt9",
  "key15": "Jw2o3159MY4xTvzLazKbPWdGJqp3NnNg5isZ4vYjZEjBXk7f1vwepX53Kbeb1gEm87ZwvCZvw6DY8Rv3evQBiRb",
  "key16": "22ZgfE46TtRWTw8usM8oEmKhJ8XrLTG337G8HhguyhvyxN9UFxik4QrTRiAXBCh5aeFcR3ixKe6nmrxM1FF4kGoH",
  "key17": "3LZcUdPJj5vHGAcsJd1fypfAMeAKuKphj33Zx51vGoKZnozQzbcDKXxjup1T4oKYtbdbRma2Vif9tuDiKoJjcDt4",
  "key18": "SC5KnztbBeHRdfiq71z4tPF4TGfruyjPdaB1CVHd6XSjVgjYq92MeHp773CRKZ1T5GZYzD2aLv3cxQWK28UzD2T",
  "key19": "2KKGiYovc15XXRo8KWgxhbSG3UcTW55GxfxVJib3dEvRoEf5w668xBp1kYigkh8aYrvMTiwjc2rr1VxuKw6aiLga",
  "key20": "5nibhaHt6miYBY3zHRyKqLGJ1xantSsf6Gd5TtYimkRJEu3jQxjw3znMVPypDWJy1GWfqpCwgMJSWrPTY93p3WcB",
  "key21": "4YSTUUsUykrUyUJoU42Zj3ZN3BGDmBB6aeqG1z3p79pxBspVufJUyw4NiBeJp2DZW1ZN4RXyTvkmpYPae1VhxJh5",
  "key22": "5u72gMCFkEUgJDX7MKiovDbEfA3PREvaMSSPqATXvX2iq3TRGNNRra6MA195EzXhisQsJY1PqVh6aQBxhzoP5qwz",
  "key23": "2e8psvoffdWz2XFt23yVX1PvP8cdQC95jGfipvJN7zuEtTPacP6odZ7bTp2vathnQFRB5BkcArwEruyUyjRaVbch",
  "key24": "5NhnUQPuddvKyBWerD4jPUjfipVCRn211LXZPWnc73bwFYkZ9TTXj7TfCFcM7x6bcT9HQtXPVfyA1LsTpYaUE6TN",
  "key25": "3EG1YTZUZmUquFVtEG1kkZ4REPPeEvEe64LPvebKU9NH14KnSNYznLfXYo7mvMx1yZCfbxasMMebVgPRTkMys7UC",
  "key26": "3dK3LNhY1zeh6RiciEcD5XTVWHfviNqDXvpDefSgRGT3tjZ1AF1pUAGUvaVvzxyWYNt6FdEqehXSULQgQy5F93id",
  "key27": "2uuu18TUZvuUQXvQin19LxGz5awmNQFf49aAdEKtTwgNjepeumGwcsp7AKFsJvYmNeAppGiD97AM1T9V1hjKG9i8",
  "key28": "wWPqo4bGFVDsMBhpPzj4pYrGBL7fLh9gepiANq7Zs8axkMZWgERWZUm34Y2YnxoJxiGF7ZB5w5Q266LbgBE1j4H",
  "key29": "4Lf6c3LuL79qBSpQtCGAKdUqahZTFQeSMm75U1im1oQWwmx6m8RwKg9Mv8iWHUMSEzyEqoSWQaLMWXHVwbKQC4cX",
  "key30": "5oHouCnKHxWsiy9sSJYPuvjBeNG8Gq8bh6ycKkPeibonYbazVsuoDABphgfCfP3D1fxUDUEAZhTbCX47HUdx1Zhz",
  "key31": "5s4hjkD2Ppbrhn19DiYEdi3JVjiBNSddTGU8uu3PNtph3rJc7PeQiY34yZrkbeqc4QcYXbqgt2BSEc8B34Dpicur",
  "key32": "2qVnvhALjtxJ9NXx3phmYwQji8VsqeveFfN3GXXSqbqvpESLZP9aw6iiBDSzE7jSrKe7y7Ytfi3vYhxkdnTSPue2",
  "key33": "N8evgi6s2i5gsPs2JSXfx2u2XHC8pNpSsHgN7KNfjrAiXykrQsNq84ejjuNK4Rqr8TtU8XgpkU1hKs2vAMxD3YK",
  "key34": "4hEXeEPMeNeUBeeBTaodHDGr7Un375pabAtY6DxyUdGnWTPQNq65d8QkDqQW4kDP7yxfETAuqAm7vHiahJaJ3xhB",
  "key35": "CV3jGneRTwEKB3tL5RMt5n5kptLwy8KStXufy18H3NfCttbTxBhgDdL9ENjQtQpQR3uiXBBvrkaht7LH9kQRG6G",
  "key36": "5DnB4neUe9UHvgbQhfe4dj2bbQFUpW9DTvKpmVgT6W6Bae2j1BS9uBPvTpUwr34MCEtoga1bDgRwRu9McJScBqJC",
  "key37": "4YJn41CUDFefiNYzZgtMtT1XaHubkT1Evwo5CBDCkfDCmgQAeYwCK1L7ufpRQG6xNZUZ13aSHtv5NXeGLiyLB4pL"
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
