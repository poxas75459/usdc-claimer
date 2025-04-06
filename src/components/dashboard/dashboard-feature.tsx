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
    "4Chn3R53faRf2JsTcLAgYQhDybvNin2h1TZuZ6ZhwWPUEfe9WszPWk2UPujZZNqThW3Uq25PnPsNRA6XQsXt2Vth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LC3XnN6HPKW521v4WLAknzSFUt4fTZwEX3UUFRz3jwB9VLNUpooW7PohXgM63pYDaxN4Q5JfMe2QiQg83VRX3P3",
  "key1": "xeoDNEJ4j1bVQaPfAfGkqRQKcvvyhd5P5s5Hctv35xBrkjBj8D4PoLgiwsZCpYnkQCjkesqqEVoH6h2M18ETATJ",
  "key2": "43YNGJD4nEXdnYjW9Cw79joNGYHikycNMPjYJ3tVRtB6ZL55ZwkSn1o9w7NJPKs9Lp6697CV1tARjeU99rPEyvaK",
  "key3": "5dAz4b7pHW5ypi22EyfJPT5xLihdyfvmDoo2xpi5Yx1srW823VYXNhLcb54rLvFNxNJEYddMAoprnRFAaRPjruA9",
  "key4": "36cvyHgyYvWJmhWhm6iFmcb5bVXF9sukHEyyP8jHEHuCUPFeoSxBoaM8nQn1HBAKPfGZgCarW6VwkEtaML3fWydp",
  "key5": "49i6eMdqFgSearcbNaCiiEhLRmsLGpmtD7eyVRo1voeZff9NXVez6DjcKW7BP4BsQJevGu6CuRb6E7msrPeYbJnE",
  "key6": "4gK9WpYcLRVrXGa8BCiR29Ye5xiBQGSTxpEZQevVAgtjdFDM3iJgvRUvMnov5xYWZy7dqJHdwitYE6qjnjfXeFzK",
  "key7": "jfL3MXRFfnJ7w9eb4oHxk1cqGTJjEsAYrbb1ZiFtFBGWUgSdMfFy16S5VBnbP4kojmNGJ7SiTSQSP9g8yLEQBQT",
  "key8": "4qnxRCruAtNCEdRZW272EJ2g5DByvWZjoBiDnQHKLZSnf37cAq7F3K8xbxcXf5NdwXsKmTxL1xBnjuR8LA5TxtYh",
  "key9": "4pvsN3F13v38hFynbEZBj3PovQprP5t9BoEy7TEh6XSaQo8JXBsp3ZTKVDMAF1avmrtRzFC1YBviz2cEgY7tSZGi",
  "key10": "4PajdP1vkHAtvkpfLug5U2UzYm9rj9E8DAA34nNDL6rSfoHgLGYPwkHJAUHfiFappnBKg5dejufmTPLpkcLFjxPD",
  "key11": "5RRBKKtvgnPj6cXdRdw3QbvQDxaPfWUbz2GA8aavWR4wJFt17JLdvLMfmuoJfTdoboDxc2TLiYwE7JVrav946j9z",
  "key12": "3yhvC84rBPJ5jwTFznVYFmCwbAM4f48ioCpak4bruyoucR5DWGGZnqaHmtxxoRkhYRuq97WXABrS7qtFKCv6NMni",
  "key13": "2ANy61yfFvBfGuq8pNpWnk4wcjtLVzRSXUvP91oDnHsJPQPghZcW45scQfs5qz4awWsYvWQQGLUNVMH7ku1kKNup",
  "key14": "42jZ3L7ypA289Qbc6XgZnCYHW5kAXnmzCY1mqHtWuZdpw4aEE38UcRaXR91BD9Vuq2thj1KmqipVhBx6UAThJgfW",
  "key15": "4JAnHwtA8EdJFX6UzCFKdzYcAPxZBQyuVaQNFdxpVJo2kJJJjabzJyv3bR42VLSJyjFkNux781a8ju16RhebjKyH",
  "key16": "3YuVsmE9ZipsZsvkDB9Hx3qFgvFotUPdCi2Mc5FWPYQXPwxV6zLkFpzbgQqeqtxoM5SEm9Jf5GkBAWiJT98y3oVd",
  "key17": "4Xqjt9btPvmuRWiWPh2QFrLTKgjjPDGMMbQuU7SS28PW5VqpTtBQn5w83w5t9pAomcVCBPTQx5xqEiJvgZ5eY3ZT",
  "key18": "4QwE32eHr5aX5mRL7T3numiT5VSZYYhKueEzCa4FeLh9QUhQA5yHAwnKuq74mRchVXux1Cjwuvpojfeg8hYY8HCa",
  "key19": "4b2ZcorTRXEQMeAqV2fzS5uSM4YhjCNPQEwRqpFgyNfBTEbb18ocjXbJKLyYSpicS1jTxncbFr5SAX4bSit9C4M",
  "key20": "Cnrs1VTTdqfpkEma8JySS3i1T8e8rFaDJ3nt241W9uK68qqN219UcU8La4vXjXcbrTXxFko2N9eWDUmzDAVBbXS",
  "key21": "4t4SSM15mJwwfj4KFZtJgEXE9cKMEaVFAt6hYgtYzehPNHdViQtpKRVLAG5aE7Zsw3gWy1p6aa7HdRi6rPigVN47",
  "key22": "4djvWNNvB1poXF4wAWPLpK2xAmmMvKw5NWrye3rZ4DvhsUNpJZDnFemkPAPAmYEfYFARxuuJ6ErSyeg4M1bugqko",
  "key23": "3mgHefGsNJefKQof7rqCVfptwMxtNqA8pVMJe3YweMzkRttokNuMAJ9Wp4W36CDoZn7WjBvzbiUYbGtbPVHJs696",
  "key24": "4J5pMfCubbHesiKnM5xrsnbkMkyuRHjDCeRvfuanpNGnFBwGgGmeRDtsnMreeBZeekfBWkgbgEJyBxof8RWW4kMU",
  "key25": "5gBVsswPeDjvi4YNtAdREyyBjA4xAFbCfkAnLao2Gs1qc6W7ouRAoJX4Xzz9KBptpvz4BSSYMwDJACvqx4cSwNre",
  "key26": "5YZgeqZbKqjKhJMct2ZHETFYiN2toUmkbcXfLWLUKGvK4bua16HqkjVjVY8sZtZPMrB8QDvE7RScbq7nFRyjcCqV",
  "key27": "TnXag5bEF2s6xWPdPjrbLzirhvb5RbXBuyQJQ74qnL9M8zTAdwnWjxT6n92vXnSHS2ESb4RvgibTo32hnZ3Ciak",
  "key28": "5yscmcwgZiqnLgZ6o1NNrTGAqqTeCzjzjyz7hMThBDt9vY39ue6euDSPw736MH4rqudVJkPWeUPRGpeZPzDSgcwu",
  "key29": "4xjHALE636nv8WkNF7C1Jy8UZTAfxNLL8c5vaVvdLZBGCY7msWNFELFx6YWspg7EQc3h5P1HdhAHb1nxCTm9Ky3b",
  "key30": "utkmBhyvJRz76v8n9y4ceDLZ6nG6cYg3uACH5HFjdeQmJBGKTfRCj1m8hcCFUJocgBqftpYmmoEXaFHBBmBfxPw",
  "key31": "5JL95jg7T3RNp1maD4TEp2spupzEQ5TxEhUV5TdPhiWHwV8B3sXtXd1nQwLvVsEohXZhbM95z3XVYH3akmBA2HXo",
  "key32": "2mwa87X2jwLS9HD2nsFTQJdXkBbPPTKhpo6v5GWd4Cu2R5qxWuaBRuc4EfqKBK21HU6TprPJo3AbthhJc8y34L8v",
  "key33": "3mzE8xCZRnghX1b86vWQsYn7iY5PArHbpr5UbDF6naWXU4W2HRHRiWYZoGEhLuCEJT2LexZS7EudZusWEaszhowQ",
  "key34": "42BR9FbZ2LKsMBwGbrMqR2q5VKEzGc53FQx6RF4Hs5SG1ZFPeaxhgMT1FawH4EwNyL9tFxkCmT923mL1dhXz3irT",
  "key35": "WcgAR2CdmkjM4SM1sQkutzWQTYVbC4YvVFgGWWS9oQPPdAdo4Rsj9UZ3xxWv8rG5yWmdqxFJ9TTqfpbq3bYNGwm"
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
