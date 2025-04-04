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
    "2WMbuxWNT5tFaUMXQkJHJtdzothC4nr83bnAbiGAVU3eu7WBskBrgAu7ZtEpQEfHnNdhimnzYz46q6cGwVNgpAB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51D8KYNuL85QDjsqZbGtP8mrNZ4JwHg4uQdRH2sNWrcwWoW2hcfKyBxTMauwA4m8Zr5HVn1Y5f8G2QWmWVQg4DKJ",
  "key1": "twPHjuXNUDkKa5sosMPUEM187PRm36N6EJvbrYGJaU1orxfDXXYviyGkDzWoJJ4McqRiG8HU7FRhdVCm75aqy3a",
  "key2": "iQT73WaHb8smF1X2oBjkjBt4NSuMT57R1sKLDYSapsGRt7BXdR9svEtxtiKHJBJLVrHi7QQtjxiRM35h4bGKGGy",
  "key3": "2wCgVnVTEzaK1EaVyJxN8dsEz1E2UHZSiJ6WGAC3DdX39pwN8gdd27FGFUJaxtMXLR3SuM8viJXy6TB2ZH5wVcFc",
  "key4": "2agoaCdLJbYZ8PKgQHbi8TzQ1pmQxknD1xTZKNa7ERtZy5CFj6Dkm6CLifDTnMqMy9MR8MKjBeVk6K6ZJDA1BMmT",
  "key5": "kocWk7ccmJA357xSeq5bQtmFK8hUgN1mPDNmBqedcRRAaXAb2L3aAohWJSkhxKz9TbfwczB9DaRpwMXcpXLBoAD",
  "key6": "J4km1BzTUbetc9ZtCBE7dvmv7iY6p4S2hiCHCtKjiSPZb9Usf5ZLZBZe1GMswmrAyXCafdjZWEhRfMCZpWnsG9u",
  "key7": "2x43QN3qdBvRnHrrodPALyisAgUjTfv9qadNwah2jvZQAhhCiniEgRpHVz2doPoVqrvpWtnLWT8PEaQeE4GeQyj4",
  "key8": "3zeXdYSZezohwNq45FbJpVJ3pcZo3ubXoz9gTweh1d71HSnFP5Yf1S3bZTDoEJdUnR71i5y4ENwzvmiwu1cgYnsF",
  "key9": "2T4bot8CvLKi9Pp5PL4yD5qu4JuW3ZiPjyFYfhFSBWL9nfp3Hqmi2G81xrZVcUiuzEsnPHXMqt2J76RjgVwKa7Xo",
  "key10": "4aao2qSruQ3RVxk2Rq1M6LPo9ZX9EPyf2rici7Z3g6h4PUFTkyu4me8ELoaFfUbGojn8PFvC8GHL3X8HF4WxFUhw",
  "key11": "bEVCbDtxhma4SWV9mcXu42qzqvyExwKRwWznJVTcjJcLWmWWYzbRHUEncP1BPLnVuV6pfSMxXhFHZYJD3Y8dPZ8",
  "key12": "2aJEpfjB1DroLMeBza2aS2grfX6hN1tWVsbMapUEiruGCCtYkMczCKPUiPn5p2KMKdMvCFxqvbhRVCZRUsk6ioZJ",
  "key13": "Bv1p7TSocpsnwEd22EGXTJNZJiaJVDfiXR18JyePx5PSAF2b8m7gVJbZBqpBV9y3s17dukPmPV8jwbCZQ7FCvQ8",
  "key14": "55bV4UC334FVQwSCVKQarvtHJCKkoab6Ehv7db1GxFJWpKwheCdJLfngZXxakyCSJBMUpiDAAJJEJoJ1MPYUPmCg",
  "key15": "5feYbwFacDGLpJ9rToDtvukxFkvgzKUkzcZYtsNkwfdr9TQe4F7LVA1av5EweAt1z3gGSe7XQV2ptfj67JnxwUFZ",
  "key16": "2q7FUd73CczVApQdrQL8mr11fsNBWMBjdhYH8XhZEygEL2A68j5dcKRdyW37eCQUdvgeFvpjpcG6Chg1tCScdrm5",
  "key17": "JkpccfM9M5aNxHaqkNoBcn2rcrEHfgDgnBfrBkqvGAH9UcaDP8cbaLHTUDW8Rr2UsFAJ4aVm3qVvwKVXzMjBSkZ",
  "key18": "5CvMKSyfyVuQXEM13uALFvYcpgEJAJZiatoP9ULZx9rvyyzbBdDeTG86P6UXZm9C6u44RPNvUmoYMRGnJ93QQshK",
  "key19": "2M1mXA8nEKn8irLjbanBiPjf3G5FpJ3hQnGNH8CKAEucDwiQPGwK2Qj6QyFcAWSyLx5sN2yx2fHiBivYdk3gJ61c",
  "key20": "DAC1rhdwBjbzufVtG3KbantUgLXZ2Ldct4ndJHonKtDnhi1Yw7wy8XUc6ArsdtX5mYuq7xsm8q7SRcyjFh6h9EF",
  "key21": "5ttcpi5Vpq69nB95s9zUgcGQA8g8QHMirV5AJaDePyXU7hVBTQNcDMktk4rxfRdbFATLDuXzRnBy58mrEFW9s8W7",
  "key22": "4mCWiyy8YmTzvyvJHBgzJcoEY919hEz3o7GuKTNzXdyzhqedDpeje4iwwRi3aQ6BNUkTeWHi7mWEDpsej1yLEdZ7",
  "key23": "656UTWFgKoyNz9siR9wdfacK3VjZSGZjuVbbw5SRbdKfrK6dkw6FEmyqwyXRCpvGmRer7Fh3s3xSwjkgv1PEhb8Q",
  "key24": "4Lt7MS1SLnJpJPu1WPfY2tunCWph31AtLKZvi9t1aYckyKE97MB4YARUru9H1gGLBwgQzoyjj2HRW4xmudX85FTR",
  "key25": "2kWV3Hs8GmzSCE2VrkMBp5kHgg7JPLoGscX43pyyNYnkGANNBYtqBbktSx3S7aenGJq2WgCNCUS7hHBYSFKxopGL",
  "key26": "bdmT1afkFQsvW2KdmfsSQtayMF62s93FH671F87qazFHkt1i9SoBqkke4LSmgXYLbW4Xq7zjzEXXqLkaDHaSTCg",
  "key27": "aVVxsn8Z7eU8iTcCaEGNwsT1Dome7YjzvU5MiSfszzH4GzVFMFGKanXv13vLSRHYwsJmkHdeL3UwYtvyW9AbYGN",
  "key28": "3nHkGmTnscXFyCBnxZ8w6GnLbVb6d61HxAqmAJqxywGXf3VRu5d5jv87fNSb17Rb7CHuZwnJPdzwYJSr1UcBLtEd",
  "key29": "sunCWtedj7q7BRuo5dA68n8y2B6QmDLU2152sJunrZh7eGtpEzc5pH7GbqotYrpzA9GiFNCdHHjCUk8YmAhZeSQ",
  "key30": "56jQFWJJqCgudq4onmNep5tmkNELwebuimebuKm2FA5P1zdCsBKqNxijZs4vpncU1YiSefrCuSJNC9SNVKnktGCT",
  "key31": "5vxmGhzcWYHcf5x7Qi1XnkCM6cJshEzDQ1XpNZLeuqYVUaU8JqSWZmd1nagknis1eoBFuciY5F5mm4LFPwmGEgyu",
  "key32": "4Y6Jbg6PL4gFM42XguPWLJF3uQQTbtKrPkXq8gMwVVWXJarQ4HgYJk8XS96TMQz9fpioQSFb8YUECZbGyRfxBBi7",
  "key33": "52oLHBnpL2iKhoCsc6a4HeuLfCbSX5CCm129Y2gR8rgtjt757mXfH4miNToqtaFJ2FQQvDYrw6JpVf8an4DG2AGF",
  "key34": "3MJ3BvBfWza83Y7aiWsiNqJEb4VEdkPwMcZGz5WYdVheciA1Qk9fJa2A3LWDtWw9BhdqT7dgiiE6kKuXD1hPFHzJ",
  "key35": "59V7dTehpBUZxQqAsZcHfzkDpYRG9kcjuaSY8D35hgdJywo2Juj1qj3TtRZXhALqVgsfvz2iv37EJg1brUNdMmHh",
  "key36": "5iSZ5qQcXfbF1cwThNjsTx7HNLypnNyUxTjvyLRveCyfDGk7YS674xE2BMwMSMnRUNPvik3GdPMDXsvkqq4Wf8QU",
  "key37": "r3TFTZ2haPScPzEL61kzcDaLkrhCXCtd21imt3ZEyiKKpCUnWr94nNHBk6tdsEySNrqxuo3QTX67u9htzJbGbQK",
  "key38": "52NfGCMGyNVJM6gXqyUuAGn7PJ1AJfcZDZUZ2QRr57vseM3k7UeuB2P82MCaxCWQs7qCaTyM91drW18tQVr8WboK",
  "key39": "49EHdfkGfxBJA3R8Mv9LFqoUbo6imd6xHHPjGMVSSnwDyc2soH5HTQ4UMoSDBZWjVhXvyYJxFpJQfSpVvTbNF4fd",
  "key40": "51KD6RbKnaYXnenGZm6DztE7fkJfpg7YdYuHDXPDemso4TXXX3DKVgdknLk1PfkCh2EWr7NLa9QF1CcrUzXpMFbZ",
  "key41": "2v1LjZqUSMhUH7TJcKBqnxvVmCZs44TZ21xGKWN47zU3VjPF68B3BLtErUE7GHyhsDTrCJhmedEyob4Doe5pNoyi",
  "key42": "2DsyXdmUnq11kGjq6VsKb7bQJYXNnAVtHBxbNJr6XRZqmZCQhUGPXozUnQGcqTHdhFUP3eg4wrYfyTGdNQJMTAyv",
  "key43": "2VPjbu42Lz6WsaiQ9TMhs9izKvZdgbe6yrKQPxBgShBMnRjjirYgPHdHUD2yf4d13epYRwVgJM2ro1o1GZL2bHcW",
  "key44": "2TJMkXpuSbXSib5nbvhA9tQaBaeCoYw3AQxdmdWjahfYSCYUwmmi4kysAeUrt29PZs8NWfXyR7hr81gMikr7nBKR",
  "key45": "5JBaqbmGNJhQAomrNfbQf142bEaT3r8rQVLhJiKkLfQVzQuKXQM7PVvYFDG4aeWmJdPZb7s8KzcQLedg9qsscZfg",
  "key46": "5JQWeRmBy7jmzXzCx1rNkq1CJustBoKtxmF6KBpc1r7T9pN7mPXB1EcRVhDDya8CjZKDfWxmLxL3irKRYkbWXunR"
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
