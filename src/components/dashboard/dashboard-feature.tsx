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
    "2753xD3gZH5uEAEAaaT6i8Z3r2J58W7h5hXVqhRJNifKZ4e7RXvrhd1vPggQN8gbLTacCohrPKe2H8myBGrbsNPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PoRuMivgcqY88xtgQXPH1PKWGsrFe9zxpuL9EChmNpCgW8sUwYWdcFHrYtWWs51uAnnpagcMXPU8FdS362PnGWS",
  "key1": "4qRccy6CZJCgkVcWJaNmdpS69LSqjT9nkpfaC8s1pecg64ZKJUPFj2bzja8C7zxRi5atT1ng5ovj82vfjdWrABwk",
  "key2": "2uSr38AUQS9jKVpPujUgktFqmzxHcTKFVqCrDW27x3mjYwLLkUoyp32KHzqjN45nNKS2jQXSHWQmskHVLgV8RVU8",
  "key3": "RfkrW4KUjTutvUqoYvabJaxyUHuJFyfY6HuwVDAdqKQ8yRQP3GsUtByZTwwykSxW3xtVcs658AJHpqTkfuXHwx6",
  "key4": "5jEQ3BrBbSCBs99fbira7HMqCk5LkzZoNCnxWw9QMc9tReipULn8viRfA77SZp6jLVncGSbY3ugP6n9k3QicaLZ1",
  "key5": "3zuiNcSeHmvv6a1dU7661i3T2wqYgfXvzmCejRhgzxAGndLcFB1oxQoU797ctxsxxARCXBHxAbF6BrKwuR9SC9py",
  "key6": "2vHqYYrypXtrtyXaTJJVm6FWNDj7uXN17yaDybTSy8hF3HfcwMx9dq9tzur5pNPWW6arquVsGQA1v5UnAiQeoekg",
  "key7": "3tTWbAPBDh45YTbtcEEd9ohhzspLLPwLs24SXcrEFGgHp9GSQQvUAifFezygLHUnweuZXXW1zK7jeCyPbdmnXnnS",
  "key8": "3UuHTakAZjewh26w5YxgTFpfZViF2gec6w1bAyAvSmwgJWg1F8qz7Mb9R3ckLE1ai2a6XghMtgLnptt2ByXZ4rUj",
  "key9": "4MDhPavE81vNiQR1hPBugLzGpZfBj42sTRm2QRb1YyUfCgTqATTNTu4shGFsAWyAinKWZaoZCkyZtGUE5RddY3Jz",
  "key10": "4wfQCGFqKECZkT6rbmKrB7t5jbyX1qR73dXUpHynDLMcQaMwNXziz7HF71Wr87kQ96wsf84hcXV5zagzQBcnud7e",
  "key11": "4fgmmnxwc67hJUCuFfdF4XGmMpczL5oJkiEeBArvqNu9biCJPprjVk1DS1uFU5c2Pg3UoswXZJVWLT3YYLv5HRmR",
  "key12": "3cHQFZb313J9YU12qkCxV9vsZyXGHKfBeVCEgiQhS3YGqQCv5hVhGJEPPApwhkdb4bEyvWLs5TLd24rLTUAzeCKP",
  "key13": "AYf3yQHoY6vToSn7dU2zDAPSFsFXTHDUpZZqdRohoV9zUWQkoSetydcHDNBVFsgE3XZFnvixBFYqqvP1RTAzHxT",
  "key14": "628kM6CDKxZY1aXTuZS8oiqM21dSJ6KVrcSPi5oKyvyZfK6qt9omEJtACBVPGD5eR1yNFbktK32NnmgbabrrPACk",
  "key15": "44VLV7RzhXJfstpC7A5qRxAicMNLYREyk75BGkXH363YvBhnWwfnsdkEPa3expXmHd43Bd9vNsFMyBVkvNRYYfkB",
  "key16": "3pAPmjQizuv6WLUUSznZGiB3i5EWchA3Vx59N3T4CFrANCsZT11HjRQ37YiHEfhKhFw135QKVPgAd84dTSBqUvYf",
  "key17": "5bLo4bCJaG8eNtZh1QPvZNhz6X2WHRek98bGPMd9xj1DCff3AWYR33LRuBbshu6hRYGpENVTBieFpPivDNvzNmeB",
  "key18": "2RL2ThKWSJ8cde8RSqLbFksdhoq69zZtdt8QBMLGpXZvzUa7TGJnttxKySmGMqDVi84vHfiCGuktNBEHuVo2aaqb",
  "key19": "ijNZrfQEGRpYLMKR1kBM4iZJr9YJJexKVHUXqGM1NiAVmMNgAG4YPDifXofpij1ZuTWHvHqETU5r2b1MwpXMP1k",
  "key20": "4gQQmAPqTPD5cg7gjA1cyEMbVhNgX1ZjmMbymeNQxSrp3b2tEoQrJLQiKefAUvPCsYHUxuVYHWzu8jNSs4yrLxZG",
  "key21": "2xE2jDCxv2n1RnyUDjTWRuHS7h66RNZo8q2Uf2d668NMMqWS7mHLSRkJGdZULn9mgTEfL84EnuUd14TXnFG47iA6",
  "key22": "5aNvv1mQx9AJmk6ADX4WYEovTfHnXN9FG7keFoSdfCSv39wtYDhSd1MTiRHX5UwWeL5Ukks5iytFEDMggfSwPAqV",
  "key23": "5kajyov5QdccMKMqVEh3V6orrhxh6T9QoGtRrSXRjz4xiUEaV9wLkC1gmQ9Gr4uFEhgiS6gopYGj8DKWohVisbFX",
  "key24": "272yRd6NuhwTWpTJ41TmjRMKdhtFKQ1h8jEx13EqVi9hsj9WQ57pZTsH2hHrtukiTAajHangvidjSKbABYi8JnNY",
  "key25": "2nmWU7dvVBi5K7AWJj4aiwpPFGYKq4oJ68ktKcrnUAegBJB8Woe3RvJtL9Csp7rgz3ogY7iW9W5e7KgpCtXBiRjM",
  "key26": "5jUxBtJHQpWmNdS8fEPuPbZvgP8MEpj1rzpreywD9ve8VDErPPWhN64LonZxR43paaMaH5S2L475a6fMJvjTXyqA",
  "key27": "4tJ7hMQuY1owjgZD8AdKT6GkUEA17bEWm7p5Sxj85stWVYTWGyzz17UWhqbfKFcLyfkyY711D7RyFBpzFkPNF7k3",
  "key28": "3wodB2kw81EdcsawEbjjrJ6Co6VLYKGdzFE4rQx4yiJn8kg78FcNtbgGzn9bwb4Aqpy6oEfx11ME5ToCThMPxcgv",
  "key29": "XUU5zG8oskfhfs67zoHgeivajQRqfAFBqCJhLshiYey98VYnz41eEFh1vTU2sDBJv8gHMxheYC8qKrm4az8DeXN",
  "key30": "4NHCoGWwUBYSQXsUzHvffCBu54QKtKewRsFPuQH3CNu7hT6E4P2Uti98bf5JiqHEHTqt1jaz2NQMEb1rVA7Xsbqu",
  "key31": "qEfSL91wY2awmx4VvzJPLVfNJXdibQGwGtCCZWceetWMx5b2cKdnLeTRiA2iAsfJecP9RQH6sa4JKZJkKQFTeyw",
  "key32": "22vCibaYPMEykhwKgQYCy95TZTwJ8hP4KnZZ13SvMjTZSDSj4ZaPyYwmquC2GatvxbeXGovTS7NQqBPm79J45UXR",
  "key33": "55mwAQYVCHMDDAwJa6uVtw1Ya5Uaa1VhvCXu2r37H8iTMZiSHaaJXbq5SEMH9tAE6SQGkGwSyjCFEpFnsDXs1oUK",
  "key34": "5pbpRWQc64m4dLzAz81pTYsBtgY5Z3sAbMRn6deFDxqeJFM4G8v148erWyzBvMpPaowBn8ZpE9KSNDFGqTyVr2Ue",
  "key35": "6iq3xrv6WxMtuNKiTQNPt9NERnARtkkDZ5dJ6Y9e8EXQGpr17cPKk6BijAQ76CeJa696PZszv619ueuutvkvz1N",
  "key36": "4CdJ2SksyUKjTB6s66XLDRP4JWAmi7rSZhYDwP6i2XS9xC6xonNPnLhqotmjgHemY2nBSkMTKECoGCH9hPuTB26Y",
  "key37": "2EmbLqxmFjjwxoGfGCxjKnsbwXErkB2bnWJFAgg7rrBXhW15BsGReVhhKEdYKzfYjPuvyszSRkrwepAQ2qiwTTEu"
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
