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
    "vU5bERnFCMjZ8oAVzqUDs6jXjJkm7fP9tXYL67acDDKtDjgkqfymM1cLwj3KvnT9teD5igZ9rQxLEuTbxuCvqYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49BQPApCoiAfi9w98hFr4oAkpGaUQ4Q1v4xVMFrmGHMjWy8mUwNYy3o7BZi5kJVtDhVayY6YGQaeg3cx3eb2BZhG",
  "key1": "3YiSXHjU9wUZjuhi8kuXYPDiBTfedjg42xQ3Pg4Xis6HGUnDvmDHy5fWV3UBHpU7qhdHetr6R3m5YqUC7fFJRENg",
  "key2": "2H9j35WAFCSUoR8KePWXzcULfsZV2mgW2HcRE8BeCgt9XwNWq3uTz7TQf5LXb1sX5z6q473HgMmBc1itVoGr6j4A",
  "key3": "3VsdvkEJBNfoHsrR2arQeDt35iRjKw92Mfjvq5yKdpj5kiJ3wy5C4oM82v3855jCqB49mt55Bi6junjAR7pa5h2N",
  "key4": "4ZmSiftq2WXRjbvT9mBcCN3qaSjsD3TBQBjP3nV7KUYY58qYd4WkBaDGZJLRDgbmaQwGia26EoNV1yUuxToZs3WX",
  "key5": "3tT2qco5nxXmsVuWcZazMUeHunFbhPzQHm7LjaXaJmQqumC7GBAG366RsJ7Q5tx42maZDW4UAcM4NGjtQjCBZuHM",
  "key6": "3KeK2XZG4nUah4J75fdwajLT79wV6PR63zbGzBDjPZNNirBpjBcxnSx3JYnJcf8qcMwaGGGPS9pisEdc8sXLrv79",
  "key7": "35avQAx5ApFFgq3NL32gFwDhpRs6ia51hBRZqc7bz5VkQLS6WYzipj4Yo5gwTFxwW1SryAtrEn6k4pZLJB57HVeC",
  "key8": "5tK3x7JnndsNCKjNoXYDS68SwE9FUQFJ6XJZL8KNwjJDiCp1AcFMNje9hNAQgyzK3pdUNPamb3W3vJh6mwVA36mQ",
  "key9": "2QmPtdHD9vq8RTEYzyDCGSE3GLaJyUtt8E6nhHEaVXF34sra6CC1a2uMiJAhsgRfzxfP4cS8wEb3fW5HXkMZJcf1",
  "key10": "4mbjb4yBBnxwFnsENpuXpJyJmZoXXUoxqSwdKJZbvL1s4nn9Ut1KwnodkQx3vV1MhwQBV3Zo2EuYvroDczXGrQmC",
  "key11": "rsyb7EKkCeKTLewH4w8MEK3h5cgmNBKSovvk9fZWxtpcNnYWnj7kn9TxsShHiS6XQPw7X9mmjqpSZ4QN2LFvL1v",
  "key12": "5rJg92pg7Yh7wJVm6ppFUtZVxV623ac2U1rWhvoBRnaYEo6pC1diTDnjG7kgkZCjodaWw627bCrbTEEzQkEGrmNu",
  "key13": "4Jbx16bpmJ7Qqopq8QhxXvQHwpSY9BzZNJJo2YP46BDQbWsvUvQx1kR1Fm69F8APxZqKdWgkR8KevoC7LbwwbqkC",
  "key14": "34KYi8fMLCqnvshpoKZLeX2zkBsyMpSa95w9Lt23YcWZdHoSStwMnRBRnmSBRjy12DwsFvyAQu2wxEdGEq8tcTWc",
  "key15": "2gz8Zdthq9i5ZtiScyuC6Rf7XDeVxQFdh25qDpZVfrteSNxsMdguKwHMNYz2q7vaYFvCrtRo8TuUiZq5a7hCuQa1",
  "key16": "h7diWEEnQoFnE9gQ1qZbxBfqPDChummau6bw5YA5tLSqebn31wg7hyr99NggGZEMyo2CzYEqyEJU8RmLsZcwJZ2",
  "key17": "5Z1LjRGvKFUZmogqujLHdWFg6fy5F9B4FM2e1FqypfJgkRRqmwZvGNYYwsbFw4sN3imua4PW2io8GANkSEGQ7YL3",
  "key18": "2Pg1Y6cEVsQxqCvaoHn5qCTK5oqLJY2sHp7JrKekQP32SWngbrUad1ESqBmNVddyRBNVr44A5t2gXfjH64szRXNu",
  "key19": "4YYnBK4SLXDpLCxJYCBRo1fZab5wZpUV87pd1j8yZJfMPejbcBMwvDUE6eSdpZs3Xmc394JuPvCDk7m4JVhwB8Eg",
  "key20": "5VGmDWrV32ywRJFF74pTyfrFLvtuzeer1pVHKErhgGpWnNx7eFuiBrMGk8fQVtTo5h45hY1jNS2n5MGDubEic7ir",
  "key21": "GcxA7mPp7KCNN8DkArsT1Kvf1tYppTjeRWjsftbUTWR3Cp1S6TS1aNJqX3KHAJvt9SEJDA2reLj2JwHrJMYBV7q",
  "key22": "2eN5wYK8zZgr7LWx9UgfVVn8XouvccGvxFoLNpqTuBH39kFZvvF4fq2dVhDjY4C1YShn1hWehBXqd1ZutmhGYmy1",
  "key23": "5XbRWajR2toweCubKXSjUe4GtejuhYvVeLmmorqbDfV3RsdHHSrkqKoZeYpyKyMAWScM9HCSFqkUTj2DZrMcMToj",
  "key24": "4UqXKfJ6UfpiSHrcWnUHB1Zn3xeb5zPhZMk7mh2r2Xa3bV91mBiYpdkFQBzE9z5jnAKDSCmtbkRTfd3kdaq1cGrh",
  "key25": "5SHmn8XdRB4CWWhkXZtGSQEYUvxwzVjT6tcQaZMARwaHBjwygcNtq2vKEdor5Ay71md3PUQUZSDj6YXYH8rkAbAR",
  "key26": "3FAox2WdA9XzaNvFiBYt4U97VXj38a43uyR9hEb1s5Pb6kXAtZLspf6rkVWTxZYD3brNA9Az56G2XzDLWqjyzTRM",
  "key27": "4waCmNKg2E84exp84DkMrBnniAAvnNfGpUoiUiczfUPUVgriWNk4TwyBkBNqy5aLdWFxSZSCUKkkdG66KLwtqgzU",
  "key28": "2SzGPsQKQB4S8gYMUQaRd4QYqC68JPJLZpWVoTrViJwGY6qAPWfhKSK3Hsar5c2wMg9REV9NbuPNtPFpT9wJ22QD",
  "key29": "4fVo9jdX636pXAacRpK3XCuZdtYCUf7XaruDo6iMUDcjRPYC7yFjai7KxBJccxDF9TfmrZjYEAtsWo4SBQnpPmxP",
  "key30": "4wDy8JBdhrmqpvdRy5JdrGTLFzKTXPN4DNf4doQfRniJMbDxvNXhtqbSV84SXpYhi9iRcTZ4hts7t6LVEhDV8zxE",
  "key31": "gJ3KCbuTKg59qm6TdMAQXUnNPv9iQxffH6zSxreMTkDYV8A29yugMtSYVjR4gzyVXjHdHUGnv3fhPeEkweMBaFB"
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
