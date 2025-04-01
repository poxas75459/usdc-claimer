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
    "3qvZbdMpY9xni1gZ4Lp5cXWDja1JrWDhXqkoKCH3aaLh2RVivAdftDMH73ABcvKFQGXffMgnofervxP3bRwGch6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2beYhCXkkCUhpFsrw1FEMTmzCFkaVtHAVAqzpkEWex6w67fgV5Xi66XvRBz56aeFrho6GWL8qWQqfD13g6t2V9aP",
  "key1": "3riARQ55vM1b3Cv4SDw44EiNSwnEE5Te153VR2qtPF7Tj7UwhnVoucpQRWsjMTr8dgY55TN8NCLmbxzKNuvYWRuv",
  "key2": "5SRHjnkCDPPtWq91Fmn9kyQovGymHzeCjDySzsT8WwUmuX1oLaqY8EEVqJ7ghy8WkPGaSLD9S5mPH3rQpu2zygTh",
  "key3": "H7bFnhvBAWfvrDqddEKepjxcX6JXuBebPCewcgHuUG2haZ3oJA93P6Kej9NYctbxQqBSeTWKkrfYruHexWRZrHz",
  "key4": "4xXbnwyBHNbDzWa3q2k4bZawdKYafLSC3AwBSsF4Y256aYvU4TKiuYg21CKtvvFZ3kYVCMGk5s5ZNC327hhLNa8e",
  "key5": "2EYPdFLs3NNvbttEcydiyBzYBKe6ZEDLgrry834Rwe1hRBiwJ6eQYJtFX5Ufe8uNYt42NkYxJrcHPVXNg6KYZJH5",
  "key6": "5NuRCucgDpCQWdsjvt2S1K3ZvyM9ozxNiKpShN8DaF6KQZYpc1ohWat4ZigrcH5BiECpnSH1nZ6tk41WqnYzpxk7",
  "key7": "2L5RCSWp7w6QGaCVFusvEHfLvxAWhe3nLgzB3fXiWRARfVbXk6a4U2QrGgQZrqUg7ozdzwJURGyujsbPMJPsJDio",
  "key8": "2SjwUw2Cm4L54T37C4Ygd8RGUAsGsdbBWyoPmhUUDSCE3reqxW7hH1pZJDm1m2iMPVP6NKe6BpZV4kKRFYC7bxGk",
  "key9": "4ZgFsD6JpLEe9MZgtfvymNJYiWN1KYU2XfpzjQEDzbQDnv69wVuzcgd78mripEo93JYHMWejdykLoVa7ySH6o3gh",
  "key10": "5TjprtTjAvsthwhXqMpR2ei2nrZX1p3V82u9i3bdHtAVqCnthAsTs6X3nZquUXekP1T86EtpSu2EvpArJWYMV8Yk",
  "key11": "3gXWputJeDQeGUqnm4YHXDZcuY7aSVvY5VN69unYqvUoRej7zEShUFKBC7etWdvuA4avXAbeoxuAxzYg1DmAZGw8",
  "key12": "5RFPNEeowNaw6F6Sksz6S2yBe9b26XdWadMRaxrT4USe1ySgJyRuuyRAJRwiBvs7MhQTpr4qweoax56ZFivBiYZm",
  "key13": "5QpM3CTEgpqK8qbYWbmAST232qmfcWx52wJAZtSL5PhCBZSwXLV8Ff6iZPFBPWZX48MiqruWrNg91anCkV6rcQyX",
  "key14": "4Do3qtnywpRzTsEBsGAn99598c1tuKd4BhEUAfC7AvLxEtCE8FBH42axCBWwcqef9rs8o8U5p7nG7d8Cg5mVEp7i",
  "key15": "37tDy8vxmzVkBHFwiPUNZy8Q4CdcyRjnCwmnyFGLA3i1ccvpttsvdN2kyZEAKt48ShEUmwyu3si1qJqHE1vKYCLL",
  "key16": "5vuUZsW1qM2eXxraDWhaNPAcx4FiWVLirabK8hbb9tqAVEDYthB7XmEShyKzxam9oYb9TvGDU3HZPcArA8NfJXim",
  "key17": "23FaL7B16qQCHZU54gKkr8KYaGUr6ugToo2AqMN3cvMkofbXRPQVmZLdBdmU3sFMaCTNrkCxZXnA1CRvKoF6NaqX",
  "key18": "5bjCDw5wnyPm5WnkP1ZU7t7vL3nUHnRTgJELbuwGQohoZKAAkqvDYL7M99kFnY3uSKegDnwmYS3XSyz7jzPf7US4",
  "key19": "33L3CJc4anbQqWpkdQoCHaTyyGqM5m1jReknyxYfEs9ojPAEkRUAPm3DtEYb9wLH6khLWbMon9wtXjRvWfV4uxjh",
  "key20": "2QJCinQCa6GNJCoEL1a7B2vwP9fYQ4QfwRjsUuaY7xHASnHyNccQcCffriG55HpqR7hqcPjP8R4Lp7Vh8Zx3Yvjp",
  "key21": "2zemmMCBe7zwcoaRWPu9QCttcBjZEGnFNKcexurPJoC4yXT54KnMcjPAGeheRs5PUYosfTK3SYN7UqZMXqMsBPPm",
  "key22": "4TymCRBasvo83G9XDNvd6ECE39ELvecv4fz3qAyxqUmsutqkeH1w3464YqhPi47hfwFYJKRyABdHgrZ2iLTfaR7h",
  "key23": "4uLN1DfwYjStZh7VabMi91AkDWTDoyKs7QZe4n28W9cDmKgx6rf4Y4sbi6KFhAvqx2iuQXmjzv1y8spsA1rpNDxC",
  "key24": "2c5cKDzR1LBMHt3R9Y8speh8gsZogpDp87a7dQCazhiTFYTDt1z5fviNDA3zoohx1B4yYS2zygTvzAbnm8H96pyD",
  "key25": "3MzqDewRLLZ7cru2dNh4itnHxVh7BhW8JznA6s54VXGQoQLxyNvn4orZtrKS8kFuZa3VyaDEXzWYhdGMq45dzkfB",
  "key26": "5fDsCDptqmzsRpdPf6VaJniGFfgDP6puBx59QL6d6cbnc92kPvtYYtqLjKmmCoCXtSJtw2jD2vzAfDMDYMieHqMQ",
  "key27": "64ijRLtaHzrajEACbfrZA7HhZ6dEPZbVMeqS47THmvkMLGu73JkiEF6FQ4F9fFiAQqcYeeMdGJsEZA6HyKvY8BG3",
  "key28": "2B4Wr5R65M2Ys5QuZvHgTLQafN6E7Uayie7yAJBB5gk9t7U4ztcSjvXRsvtY6ie992nPW9nayVffgfo4CY669ycG",
  "key29": "6rWHdbiJ1unyVFHZVPBBACP5UJ6RhrNUdiNHpQxmUx6A8bGPTWxfKotFqVVf8tZunkr89rjdaY7F7ThU1f7RJZ2",
  "key30": "4pXCA3UZ345NGpL4QE3ZcnqhXHBP6JGUPDWKdW9WbGYHAb2jyX4PM8QdR6fvcf81RCwgW4pCGwzwZhbq1d5kBpcf",
  "key31": "5JvwSJPckEk6By3qw9gJxWmmxsy1UDcwMCeBwKQmvxRU8Kbi3uNRB4oGzRbZtXYtZ9Qf4p1yvGADiV43SQyevs2c",
  "key32": "643wiTXuoXiLq6zFW9HKnKq3yVFf8wXqBh2zx4PvZSHDPMnrgSBJwjD4HeEWJoEw9eLbVwXgAo6iddJvKKqbi5tn",
  "key33": "y658gRffMGz9Hz7dSvUFBXykWHpuBYr19VnWBAkyk6AbNZXQZGwMMA2SzCJDx4m7hGT7dzKkNhxfSmvdDaE7udY",
  "key34": "3YNyULwQSDQ2ycqJzdYUGnDNinYmiMf6iYHF7y3ZSegYNG6TfvpVhXmwJaeUsBASqHahAuaGvUw3hYhFVSCkMowx",
  "key35": "4dj8CToiihrstAq95xEex69W81TgXDJUR6kGGjoHYXXyPZhErgYxPcYmrr7SUzq9Jgq7cZ1NvWg4mpLZ28JG3oe9",
  "key36": "as3wmayNkSBCi3tHZQyGbewsfXyXfJgKqNkoiFR8djDqpjobSoUPB4by6mDM7ybN91nTft25qEbvqrh9VGe3eqv",
  "key37": "4MhXhFfqBXYM4xAxfWp7KfmjhJaQ5fT32zG57HueFBc9TZ3ebvWamXLpEhqxzXrWvaf5xSuTiMbdcC2RcMTKZ1zy",
  "key38": "5Yn3DSdFJc874x5SbLqt7REsFTmPHeECSpq5n3HkDkJ3ahphadyRQUJiqnaHnJqwmV6Mr8epB7ddTwPtofT9Ffox",
  "key39": "UsdVxN6BFwmtkhCPnZV8nFqtLJWahJ5hwGUYgSZMaYmnbxhJcn3SBgMY2PFeKQvfs5LVtdQ8BXDr9bja8mpEqfw",
  "key40": "5NXvjJZdjbd369nmkoHXBt85H9k4HhRGJQntmJFj4HJVMmuiqm5tfXmZVEvkSescKUuEqvqDQyyJtrwHhcAyy9PV",
  "key41": "3CW5Y4Gm6N6bvdAxve1fLNomEGTpFsbTYzg7rUJppPKtYP3mdKEE3MvaDh5tSvUKFKo4hymokmXoAxkZMkbWphPM",
  "key42": "5cs6NDgZ9xoCWC8tCEmWN8HyunfG2GiMhf3uMDMaYYFsTnG1J9LZJ5ePCQn3N4ZNASb2kquV4jumh7gwzuc4tnWm",
  "key43": "3vvj5YE5BrZGtj6EKBtD877PfEucEqk15gMLDhxoBeHWk975x7eZKZjPLwwuozeKg1L72berszVBJzYR5RPC54jA",
  "key44": "5KDFrKp7CEHsyBtPUZe2ineKJ2UBBBuF8rJwEvH68nCyi5W4XaxjjCNqM1R9DfCfeHpZb5YFbxfePYwfkcht8pNj",
  "key45": "2Hq2w4KmKkTNMGmTDd9w65VwTiYiE8HnTsTfFzyBQeRXZRnuNrVy8PXw7go6JJMGp29unjLLe9How4xhtsEjzG1d",
  "key46": "463TUoYyr6MBQGZNb9LWVuDTvi3GtwSz1dNP7Jtba5iVWDkKyMYjv2z1TjaamSnBfrw6mZmxsnXcYaeqeCo5QY65",
  "key47": "5dKJUz56Nn3T5S5Qfrc6Q1cQQqp2mtTTRZEbsUdcRiYCgNsHvZadEVJc1C69apDawajm7yG7eqWwB8ZxbUpuVndj"
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
