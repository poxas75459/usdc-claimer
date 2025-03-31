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
    "5nFDRWRYqsVwSFu3pFnxvs1bENQTqZcgvN5M9NKocPUJDwftzKFHu2HviJyTL1ZrggWBvrawZmUnT7UVyNLwZEj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Deed8ioyLnT2edHjuXEces8oUH7dRt1tz4bK569h2NGEsfJAmXfYdtxJPKFRs4aSCq8amGWKuRX95qkiJR2Jih",
  "key1": "2gaNzYV4URpQ6Up2Zb8S561qHCAdJ7JY4PGGjBAkpjVjY4on16mEVSSK2xWTZY2LMxkNwYNvRbKht5QkshKz5djp",
  "key2": "4iriFjzZZCSa3EkQ8V7eJfpoCYtUfU8uHEtfVC4nk2V2PkhAPqWF4Bf73GqLWn5DQh47sDVQmu4SQy5mdpFmUZh5",
  "key3": "JqPfaNLJcnPoz2GBWHMiorTaHde5VZQHvSyjinnSswJz9isRrwhQCAGPZi4Ct1piEJQFfidTizhpL5nsJ272ekQ",
  "key4": "FqXHD8L7q6NSDe2YJKCiVyHhG8mmofnYkPnhqCYsSGis4XxFgvXrCVY5qYPgaaAGvrHALc2t3iv59yor5cC517g",
  "key5": "kqPhsHafuxUjKjB9KmRFKpM4nQfXW2sv1BxAbTtDUB7xdm3F7hXzMkg86Hf5XsxGoT1TyzqtVwsuEAQLSwWLAnQ",
  "key6": "PGWqhU1qvGH3WUvUvBXpPH8JMSU69BYmUGycqEVjJ2gdnvVoySZYgMcSyJRXf64ys2xDU9NkHDUfCwrKdfcQTaC",
  "key7": "4zSx6wPQzsN62Gm7CPRocqvCf1mJVs2mAG86eK7Ks39nwDYBzGpzhQb99jVUP4d2xGRV3pLAH8hWxUV2HcX9gSCW",
  "key8": "367yuYfLkgYQtLSERKPs7gJLbzLL1bKBXDKR5h6Fh3nBfCQ38zaKqPtZ9v2MveQVjDLgQybKzNftoiDy3wWt4JXE",
  "key9": "5miXEMHd5pnC4i5sZ1oEu2S95VdKf894aj6479YmG4J8WUbvBQ8oEhj4Mf2GVTEPDqxody37XfqHiW8CWqfxjdjJ",
  "key10": "4rvFQ5VMAWnoosyiSazWrTWXuKuesy3btnpFVyBezM5hpBYipwmTSoebo5PF3qe3asPZuWh7WcP95HZ56EfB79Bq",
  "key11": "5KNBj3Zc7cGJKHXkH731WsHPue3H8JmWjQ63ojuNsX8ZwUYiCDdUK5iBSwQby3Li2teVHmympS9z9z2zDQDbNh9F",
  "key12": "388BCwTQFj6aWGNoJoviYHRfTFKha8a7TEHwpZCJ6tJbTaBZpFAvn4nN3WMmKsdKVcV8CeKsmVt3VbwqvyCR43zL",
  "key13": "4CWP78b8ZrLpEKr6VNjhAQvfU5ebsncA4vn1AhSCVaS3KW67dh2LGT3Dx7XuwMg2qUAkSNvqb79gzz6BozuzWMxp",
  "key14": "46fa2X4eJutCW4Hn8ro9XsG9UQmqf222KtvJQ7jpEQUK8XAbKCe6SyQtNRGbc7iFKpGhyCShKUZbUegaTKgdyE6h",
  "key15": "3hGShrqkQ3usWoYV7SkqpzsCwJosa1tKXs2MSAxsroYvJLjPeHf84CdrxFyHbB2XuNWYTRMtWRdfHaD636RTSkd6",
  "key16": "2BKdVyVY3wVQsvxonqFXFCoXLoxXBSZbGLcjX7QTk1nns7pcZs3kbUqJTLN45ZYYUpHhs1j1fvTc7fq985JmhGeF",
  "key17": "5q3yGD4z3QJVUnCzs6u5JpVTWmKX5CipAQFnqHMEPq8xtHgsn8PivYqRxzVvwdGxr8bmYfdJsfmkTMfJjVperAJA",
  "key18": "3qFD4aXuRAQB57Z5vu1fpCyLASjom5GcBSzqby5tjQ8X3eZuxjMSwB8pFhR2ZXLRdBtvu1sqoXukvKjrwwryeN1y",
  "key19": "2PeLASao3TX1c6XYpg8LnMWd6nBZmq2HiqVP2vSdGz7KF4GMdmbr7Hwqd7hLSLy1PhHQyYD53VG2jzFhCvBnSitG",
  "key20": "5GNUafCe7bEmai7E3dWFWGhe33xGvt4BdzLB94risHmJQ5iza4FbjWR5s9skBz3fmzWQvPyoiDCrdNQWFBLPS44u",
  "key21": "5FsFbQSeW3rrHxKJmuWUNBc6vQ7p3nwXqVsZmWLgjmyt2ALESnEw46HdtqRwryEyvpo7TFSjyATHyavWhnJDkZAB",
  "key22": "611XbPaWM2eYfp5N8zKrGZh4Tc5ohoehunRcgt7KN5QKAUTffuFPSypqnnLVyjJgedYAdnFZUVaJqeomHmw6Ffwn",
  "key23": "2c9gmJB4ENG62xPaqxKSu72QezmVuU2DyhBxJ1rzhengEicPbVk2X4rruYdEGymzvBZCKg7KUFF4DGv4B3Ymeuyt",
  "key24": "51L7SaU9FqzhFsxxNVJnNALKzw4P3e9FeaBP97N2yJchkMoSahApnJF2AvEErPFKz3voN5G478Fp7f3isUXwS1We",
  "key25": "4DiYBQ9nUsftn2C45STWLHz5TNq8sqfV2BmTXSKnsWhEm1qZpuVa9ecnxo3sAKkM8KgvZ144uMNJHqcPdFSo7316",
  "key26": "3evhLLfxmPSdWAQMzLGVEQ1DzZPMA3wWKqBT5Erqz3bDzA9At2ZzZJ6wiAaJvYt1G4q2rLyJgCCiiJCtEvtKLtxa",
  "key27": "3jjCpoyQjo6FyYSWyCjBHqonbz2Mirwd2Gs84SVRUtZSTf4zVme8PWgqaUkdEk5MfkyrXsWXBYK4B9oQuTu1gofp",
  "key28": "2QDAE5uqZaseCDPAhsPjN8UNipBd37xAPhY3KHcL3dsxRLmyV9UAcwq1fThn74Ec8Cgan4Ff6KTfaEsV8uvNxyVp",
  "key29": "4DD1kBcSfXpCZ83fvweydp5AaWGKuparg9tvQL7soK8cVYfeWCTcjtwFyh7iqug54zhnBUxtR22myYgHBn9V7qyQ",
  "key30": "5JsWZcJKPtYGCwtUQm6aacsQrsGqZTbJRbCzbWjFxz3hVPTccPNi7Yt55vHrc4fbfAn5dtYiKfJqMdNYz3Qcxh8u",
  "key31": "5XCXFm5svssdQpXRRyMvmvwcSwU8QqNDgLfXjmrhhFVUUfyRr28sS1FDbRFBg96TbRhK5DDJ2kDZ87rUCkzxfaKF"
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
