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
    "61mh48iYfqByC4TX2xQejW1E9mwRw8ivEtMdq5TpMcrZp95Nqn8DWveQ5kMYJgbr9BEbWtF9uUykQKH6EmBG9muv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TvVQRfvnkU2pBPjiHLV8V8zYzncNY3q54LcZzR21pVdNJ9x1YaJC1hwHZMSZgLnUc3fVijqoz4aZiQ4Vd4LE4So",
  "key1": "61fgoHgk9SLsKGJgJ968Vj2EWqZZAxyris7KcCtCLgiBzZ3PLkTx4a2tY26uqyDsXv5uiNnmz8i2jNLwbNkUWHuP",
  "key2": "MyditYj3yrsG6pmkbGDWSSkydTfm8fcmYKQE3Bb6FY31JipRxRhcHpYCGxgqCDCfSFmqnzxVD8s7FqnYfVdrXGP",
  "key3": "YHJLSdbRwRKAy37xmuFNhkmKvAWYDMgWYJGvzACXxMpDzRZ9ov7wtWMSRwdEEtyXpUgBWnwx7msJMHe49Y4duGo",
  "key4": "2HPpupCMbHdbKymnDFupLVQmT72zknfU1utXZ1qFFHybMUUxQRXvDUuf8RJeGdVd4XimRCDU4c4uqiwfXsMjzJNw",
  "key5": "2kNc8JULismABhNebpiuMEjbmsMVxKK2veqsemjhPyKQhC4qCjzFtCg7D4Pn1JbpqKdQgRYisWg63F6VU7KiCLcK",
  "key6": "P4DC1vSpZ69scEBUA35SVoAQ271qqHbdCjhSrJAuuN5sTDZYiFnQp3RQfLz9PtUQytLFWr2kAe8McPXbWp3Akzu",
  "key7": "5hrmXXke5GmrLEaWT3WiGnfH5J7VXDf5RdvWpfXiCB1z9WB7GTw51EqKCq7pPa9L5UYnbeoHnGQxWJ5nUAxXaUTh",
  "key8": "5HT1EC682XDUFc5Kui6evZsfkyBNuHm2cM6e3oHBynMyCTy9QjAZxpCh5nRzzGecasZvuMvt1eL1ELDUkDn8N1xh",
  "key9": "4KiC87gzpwyvgR3w9kxvArmoevMy458UFjY5gJaXJfRG8nQBgiWmjn1yWL3AM86Tm1ihLZ5T9C7Wp5kVbMWxcXEs",
  "key10": "X2dyRDMKFNJzMrYPWUeZG2TdojXroxprgpBu9BD7U2dzNYJW8hmzvXC9Rr62cvoY9EptrFm7377VAnEJNw5DpYL",
  "key11": "zd5DPFL3KQKtfXykgj3oYmWXwcNjQLgWboVCjBqUpp4mWdPZ65UprqtF1ysi6VsJzBQ6qtKi92yqjjdLbhBJ2sP",
  "key12": "T1vSwsc2cL1hEz5sMUEJph7mALR99Tj5VvN9rjG9GbVqs5bJQTtkkcw6581FmuYFw8gzqar8X3ECBiFaDoFwdb7",
  "key13": "2CCnRX9uey8zP4g6CNdxvqMMMaeFHEP9o91QAKZaueH8wvu1AzPvoVut7xV3CynZkjCMQ9UojkQKbeQraisXJ6u5",
  "key14": "2sS3tDnSEcfehEfdZ2qAWwpNPjXxD4YBq1WdvkKLouLyxXdzb4RwphMge51caXjr4smmWNMML99bJaVmNUm8FJWs",
  "key15": "2b6urUPHZvTFzk922gfYxsDY8QxcHAeCi7V5AaGVvtk2XU1QPRe1Bmm3prCpNHs38xPNzWgT6Z84ujKfPVhnW9pd",
  "key16": "4VeVhBJnUSXVRBQEjQDz3TwXoj7FxzFYovWtLTZBbq9Dm6NXsRsUYPoQdyTThBYvVvofeJzqyb5AeLbAFwBbW1Zr",
  "key17": "2JfJHYRxL5qtHjqRrJFet2j8b6PncJ4zNSzErShfHhRGWZ5VtzEj4wPJDpoCepymfuEFj7Z78WHhyQhjfhJZpvtP",
  "key18": "45L6FrcSrWfX7sUNbCAatRuXq3Rz6m1PGa3APU86x7hFq998qa4xWMcB367awz8WFvCYR6L6VK8VnkYPNLBgjacL",
  "key19": "35e9U7UmFGhfNhqT3qyqdCf9o4kFBPrmcJDFm7p7jw1ssjKAaYZNRiYhaYhnVGKo2KHB1i9qd9n6L7Rnmec4LdgW",
  "key20": "CcDb5tZ7vDF1vLgGXZDK9hKWqYLk6N233iJEqZxdn1zPtAj5NDbkdnUAeKJcojVSsL4BdeARVuvGRQmpRfWjURS",
  "key21": "3ubRs9iXHxGmCCmWCNJcHvrXCyg3juhpqfu6MVAhzxNfTrczwMDCtqwnTdmmjyjbCkBQNhpRtGywPGwQLUoWnP34",
  "key22": "2vkM12VdzekDfcccNP837E43gBcjnCRMDat9iDComwzfqBLJHd7mGWZqH7nHctHBLznbgiAr5FND8DyBmPPNEsRA",
  "key23": "4jQXxvavUjz686ZFxthUVgSuiiLtHV4n3zaQJdmLLmgpeQGWW72WPMxoAdsJSfkrEsduFKvXfiCJbVp31jv44C2y",
  "key24": "3758GiZxgPz3EnGYM2VmJ9ZPUgRJnqWWzXXnaqWSHKhAhv7AuP2BZUvSYkub9vEewQ7fMjeVC5oS9DMAwprbyRJJ",
  "key25": "3QyWnQVWumQbsQdrkxL4QYCmcRQA6tbCZN4kXA5DvGGjnZPorPpwMuCppTCvonNGvuLa76PvhAoT1xhdAKygPnea",
  "key26": "3WLf4kLHV649akd9QNbkHNXyYRyzuyejmxrCBPbXK8QkcY7LrwYY6mpgEZJi5asTtpDN3pCGHciwqjhQcCVp5zzU",
  "key27": "5CZPLoU1fNXQcMyoRf3vS6s8oNwdxfiDgp3vu1XtVmLMKB7nv515VNLBYgFecyLgospQ4JMCQ4G3Rku3uFoW8V4s",
  "key28": "47YEJ6zvJiy4SMzF8EuFqVdybda5UBtdSwwxwJwDLfBrUx1FFuVpd9Awb8JZn7TGvW8y5wcYXBYzxngUSkgU4qoL",
  "key29": "3FdJq4Q4SFpZnvn8zFRGVgopkkWZcbMNN8bhFHex2ixHZYCty6hcXRmHEBi5LSRW8CkQeGNYyjboNANRfCYezCiR",
  "key30": "2SFnfHJvWNp7F3Hk6JhRtu7yqo9QsQ4A4irM8YDqikpCkb6fwEn7a3uVLUXLCg41XwqeU8xXR7x7QAMe4vKMKirG",
  "key31": "3Ww9qTxp8a1jm9ovmunRTYSdqDRVJhRto6TsBVZRYJRSzByygntGiEycpvLTr6aCcFi25kLXUesmTWYxzPLgGauH",
  "key32": "4E8gDUA38NqipNqmPwHTLcgVvwqBTT51829qY2ypCswuYjcERuV6YFRC4yEW2EyP2ersPosQ3wTyu2wDEd7yeLso",
  "key33": "2vEugafeSvp1o9rUjaGYF6fF6aXAZgQ2CLfnM83AybFW5Fs5N6zHMmV1fZwaXeidRCjrgxgSPqZo5imt91YLhp8b",
  "key34": "3hBichksqtB7AMcNiM3PX96w4cn1SQ8FBti9K2rS5mQnyNxCYRn6x48F1GdGLT4xFNPjfyJmwxVyY5oP1DHhhSvK",
  "key35": "mD9PZbhxU4SjWkrFRbmSvxfV6x6DpXfbU6sXsaXCiv9Harx99iBoT5QAQw6QsURCT9aDsUYoquG9oMXpXQMmfeD"
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
