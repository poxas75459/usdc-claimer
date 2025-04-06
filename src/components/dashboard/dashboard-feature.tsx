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
    "UuSoQzZDxcdmDcke4fogXgKkAQd3FHSTHUm2xckU28jUaaTG6W22JeAHGozgEW6xDCHj7RqzaAwTP8GWjkAFfpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AZVDUQ9A9jiqFAaWx4inSZjzwdstJQKvob3HwA8sReQZpRBMf2Cm1WvRy8EKLgvZEazDpBhTwTjA4pq2722QfPx",
  "key1": "4HxqYEwdqBPU9MspVW3gqMnC42seoUE4KJ4yieZCw6MZXvwBMnV7SBfMdMTM25jUnMWC2nzZaHNzWbacUCKepEb8",
  "key2": "3RDPHwh425U874sVZbNVeuXMgwU27SxAibfpKuwUhwHrfRScnv5jUhxfKfSva3Cjg7Rj4Gvvs8SgfDAhAu2VJLwx",
  "key3": "4iUEUnkQhDZG9Wjb6XWrX4bZdrc3Z66pFpziPyeLL8RfXTz9cKgCPQMHNYkHb6YG1zWu6vVN3SYa6Scgt3ocF8Rm",
  "key4": "3amBusvWvmx5J94n97BrNZnzigtdvfuNw4jgY5PGZi1LWewXmHDxBFWHmXuk2MmVsaa8g1Jsdq5B2owFCMxW5ukG",
  "key5": "5FKDbd1TeTgexDZH6rY5BanpCUgGqHHZapJLEu85KdcKQ1omoX2WnFBwNnCexNGocr6Gdu9SohUkTq1PodsVYbQS",
  "key6": "5z7i4jAPMwoXgr5odhCuX1dShGKYnaFgEVMCN1se9EMp8oHeZyRcqsWrXdQf5T6ke5gUMwhoKhTvb4byAjavPFjm",
  "key7": "43cHbcvBL58kDV9L6mYgkPdBTt8Sw4JCeGegZjnwMYFBm349m4XAAcqQPzHnT3Ak1bTzXut5nb5pkFCZtzdZ87e6",
  "key8": "4S8e2S9DLNRQhFFa9ZhyCYcbjEQvQ9qxJGv2PyR4Xr7yTUh2L2wNHHQDoSre6ctTGzXngPupphdeLyXGxfJMSRVT",
  "key9": "2jTob6gZvfxBmCgQvX3dtwwKEDTvewHUndNy6fVXaYSohPsD2EPuQrPfpz2CaBaFTiPBzutjgFPm4ito56TcphpJ",
  "key10": "2LXjKc2Y5VkKqJhhcU589sZCLAenbRQkrpicnmtwCKipfGk9rNHYSsKdNaLQBXeEHHMMuprwijm1bPi45u4Aqfxo",
  "key11": "3JpKXtfSzgmuQpTfb2e562TqJdSjtRGoVr3Xb5pBZR4EvZqyL55tE8Ra11wKYzY1Wj6DoNCJf6v7Ue3K2vEAEQZE",
  "key12": "3SsaPB1BuuSQmeneCpVZVpC9ywkAB364RXJ2rbFZmGxKf8sHFFkLdCEUBCmXSPhBuFFL1TjFk2iaSgUyc9PdorDU",
  "key13": "4uEnkH7FdKzYFXFurXKQ4qg5gkcu7nwacYCzRez9yAFv4dbTCovLKgd2At6ehyPwgpteEQh7RuGvB3qnF9Sg6iT9",
  "key14": "4nfLdbAUBQKU6izqjkeFEKJewHeD6dkwrcHgLCxZnUurHprYJVQDqEMseLmuJVuKTcZJo9kzUhYAKssRf4PbgjuP",
  "key15": "4JCV2prJPswheJEMavZFjAtRdkye6n9csqmuJX1BmVSDgJGgFcLWpb4p5kaLxYuJGpRkzSmBK9BpNjjHSW3vtY6s",
  "key16": "3Ja9616QxZe18W1KCiJhe7BmVCRZMajM4F7RDuBWrGaxoTubYi83z8SUPaGg36Yj7p59oKGCFTbL4MwRpDAZJbmF",
  "key17": "28zXdKWFqZXipGm3pdTWBz2qdXtHnAdiy7epNsF3qYSDf3tRfr4PiLkV5Wx6fyFaxuZmR3Fyg5it492x5oHAs8wu",
  "key18": "5NBEb6Pr9Pxd7P1mvd4UBdNSnkD3WuZBecQ5oevw3gzDQWAV1Je1vWN4UqiR8XRZuzD4PpygwTxHub9JDQHnNfZQ",
  "key19": "4KR3F3vri3ez8TD9HRbq1WMVxbyKwjZGcPKCgMRFPbJHF5F49q9zU9VGjPfSXmmKwtMuPkpXJiVcQEhj44TYsDpj",
  "key20": "5BjQrCHYpWmXxTArCT8KeABiL8N4GuYWyhYHZU4Ybm4VEmK6r9LLvwZy7syq2Ax2NHJ4j8DnzSAphPwE559WL5hK",
  "key21": "3XhTtTUJbUvxcNFnPWCSMuj61skAZrtTmiyLZjoUWdX4BoytC6XaAAVBgS45kcyuC17871DZkgVS6QJfcMgDqFn9",
  "key22": "28ZCxEkBFxx1Bc83PojkorozfGdzXb5mSULNgsac6yaDadivczEct2xvaLYyZLgKiaCGPE9aUBMsxuJQxuy2tRbQ",
  "key23": "5fdYLAWa2kogFDNFPzZUSMeB5JicfRH4SL2HqfQTL1uj4ZLK7DN5jzZyCvpNaM3i3rjDmCkTEka33ABEBk5Rtwsf",
  "key24": "353VWY8TA1YiNT84DfcPVycUEpjeYPnQ2t7RdL8KZSgb8st4CsnxWz277VTFyRb3Gj43Lj8yL6KFjiNVWiuYN6Ku",
  "key25": "C1NbKgqU9uoUgoz2z5suFdgzwBXhd7nW72zqa2ucTbXPizkZPNLodGT6CXucs9L9Au6dhUBHg2vfGhVoiYCL2qk",
  "key26": "258dsdtcLARW6iHRxgEy5ptumSiQAQ946iY8e1DLr3jBCtqG6MMDV4eomM1QmZpYnU1MeffAxtJxJnQUrEs8Ak5g",
  "key27": "5j1ApJuypWxUbBSddxQghBP5XXLs5x7XGpH2mRpW4txrPp8QsAbhpkdLozkJNPMVhhweAnmxpQRtEa457yaH1wxV",
  "key28": "4AdVxkXkYgYYDC7WcLUiwbXKRMrvQtEkHHQwHksoqcg7457PLxn7p3j5ZaoWij4Gx4HoP5ZLJ9LnxK79XHESk99i",
  "key29": "2qNHAz185YzmvUYJGw3bDhzSUVcEA13Awc8Am94g4VFXt2FeL8XhoDR5GcJTpJQmqDEJypijEjykzW9shWp5S3Qc",
  "key30": "4goN7w8jHpNSvnPSSZb2jNmFVZYjn3wHAcniXRjGy4e9NCvdQJBnYA27dKEEQgrHLQx7N7CVALFTqikHt9pEyboJ",
  "key31": "38QyYQCnnSGBu2KXZaEwQ6TRsuw2yd9ZvwJEzpewihgEnSNzaHUvi9ohyPdHWgqs4qCqjr7d5k3BACsXdj7fixNR",
  "key32": "5JrUwTg51iN7h48HKsnJPbtppksLPMFMkpTs44QPJPWpBdXYrZL8zj1NVhQb94fNXTYZxZawbMM3qoCUeCQ4p4xc",
  "key33": "4MVB31fqU7rXkSL6ixKYEXffUzxauY4asWChddUfLqtWbx1oUUX4jyJud3LAkSzAjEEwYBDodoShGL4FMdmdPVTP",
  "key34": "VCbmrtFmYRL1pviGg5sCxaXmQdbNN2UDMyhgGJ4STgiFP8ZUAyfjWL8PJWp86Pnd2DgycXedX6hry2EjwYXXeQn",
  "key35": "h16VZz2xPikL4XNJLnU4CuGNdud3haeni4UGC4oukPot28uD8JXWi5kib7KuQ3Cb9CGahgNe6DeZzot9Z1n9GKF",
  "key36": "3eeL3spZCWtDNuL3o6jnUGeXaP3uYHNgehTu3mG4PJ55Z2zdqqxKxDo8oaqVZoLuvgqDp2jkPse131ispAkVGtJE",
  "key37": "35oJSNwJdv21RPxaui8NmZoYnW9W2oW6MsQSWwhQwwwaVA95Kb7xFZcvDpiwVGha3tze4TBAN6VbPkJ3qkR98R8G",
  "key38": "5ns1KDcZALkEXaiSujiC3WrVvxv7unjXaFfnhAkcs4m4oVcASM2eHwgdvY7Uj3D6Mk512HV7zexP1LMsx1pH5YuG",
  "key39": "qrBhADz4MrAMv8PdWSZ3n8sJfaUbJ4NEs4Tpdza42XnisLtimtpp9MRPs1uRq7qhuNGftSc5RvjQEVMXameHKUZ",
  "key40": "2JMtGH1GvozSWj4vRf4YsKy5ETbWTgnYbVTgRJ1LUXisKyBEy9wkTWCxNckkLhqGKAPd3hYbX1ALmypVbW33py4G",
  "key41": "4VnkjYodkXkkyfcJo9s9Fi2L2AZgbmHgxB36ahvTnwxTBojrbqd8X4a5cZNDLheAAY5bgGJrmQ6DcijxH9LSX2F4",
  "key42": "ziYgkeqBJNKymNsabBxK8oZiHHPmTPNEUunWxw2U42HVGNoZFHxPQTahNvynXzsi8Eg2GbX9X8dfrQ2rtYMmraV",
  "key43": "3APSzqP4cpZFg32Q5UBu7X1qYMpV5eZFT68deY3UuBjwpwwiLZqv9tgwwVoG4Z5AKKqAVV6CUVFwYYyRsUErWvXB",
  "key44": "fFPUkwNYRBRNM2AB6wtkqhUpQTFWeFsBUctTAwiE1s1zz7tbCXoXsXQJEB7QwwoX18XUARxuXNyGWVkGHBRET2d"
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
