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
    "5CjzD6mTkaPi2wCFgcrLdT7PDd3Rqpw2paV7kYPfMdosZkHfTpxWCYYRhEFqdhuwhVgShVGKtPRHK7dMYK6g3ob4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NkknpsW2mMwecX6QF13xywCizWdo8FcSMT4RQAmy95wLnrSfRgR2hoDQEHKGRHC6cyvLts9fmCa2SE8mYXSkyD3",
  "key1": "2NDEhYswXjYkGFHXfMhcyo1u8gfRmVWGSLf18FHbubKT1ARjn5ds5kYzfsKo46T6scTyBLuHp5NCoWqzWrtZqykL",
  "key2": "5eVi9HBzzm9nX1Rkb8UVKe5Kb3QgVLjk9CdUq5Yu3V48kCj5kyyuSp1tYQ3LrT4Ut3sutanyvWWXiubhfbqdith1",
  "key3": "4UikZufMMUEYrPYArwEaAFueBrbgVqh9wcrjfaRfEVq2NhetAsLKFrfJ76EYWhTRSR4embo4WEUZBFQ5dCvx6toP",
  "key4": "jWYbN9y5sqbV1xr9fxv8zqD6VD7m3Gu8RYpPzYETkrDcGEji7x9Gp7DUwfVxJU3TxvBVgDVHtADJGNhkx8F8Dmp",
  "key5": "3zBw9u232CZcCy3LX1sebHnaoHqmAZcSmL5cYgPBsYsHeNirJ6BwumGJ69NwXyegy9boLWeRqBNS4iqVJkoBXUCe",
  "key6": "3h5TioHsrUPUXdpm1rc7KfgAeqsYMzX8snQJtKvrasXR6XyUCgSiRRWuRu7SPhaFAogkkPrpdGAtp4VL2woLggEe",
  "key7": "2cyBKZ3YnbVACRxn5idS9R68hAbLJAxe9ZQ38QuhXwwYjNL47hqzdZrdRCdA7FSuBrwUHWaTJypiUJZb3MYk4qbX",
  "key8": "4swppA2iqsBG4H35mLjxrTdJv9whDF5CgGrDTENg1HPoA8B4wrhLGHHWWdNWU76vyeKZ2HQYbBqRxXEsxd4fqxTq",
  "key9": "38DQG7BjxTiZpSDwwSFjVkwCYcBGYxUz2w1wyT7NKGmaS3Jif7NswJgoX81cAYRaeTbeoaPJsvZzyfdZS5shgCdZ",
  "key10": "2rm31FVkEQhPCxUN6D1jhuVaQ1TLVpHi9eAev87XFQqeLKg1JpYGnD1QCudNXhLf5eLb8D3L5g7V5zgP8ZXx8Kzf",
  "key11": "3STQYotN171jeR2VnxuR4KQdv6eLvEFatLnVxvUpySXN6G5Fb5LqVtJ4VDxgpyH1TSb46ZxZREcWnjLb8hHsEBCJ",
  "key12": "91f7gTqpdW9QZGgkKK1yMQHMomhJC4kbDKsKc9jz2pysv3CmWGYmvmk9VTXNkQRQS7LBvvD897J61k23oXuJVY5",
  "key13": "gy66Ztu4s8RWPh3WnVzAdSvjL2M7KJuGh4QUhF2isLt6uiZWPaZbUBhCRBVYuCrLnie5SPTeHZKgknQiXhEdHev",
  "key14": "4ipYN6H9wGwhZqgdRxPGJaAucGZXzsJxjkgbB4ytkvFgy3X91i67p7mYXF7L7HY5yMvHjCzh4jz9eiuQ2M4vH5rY",
  "key15": "2ftBSdZ3c3LDLE7jmGRsb9o59AoPVGxFVpH4eR2ipWAhpFbTfoNQ7YfU1bJ2N8YidXWXDvAFbGJ2zcUYdEqHeRaE",
  "key16": "3iza8fABUd993ctwUVHZx7ZLfynTv839xcZGUwjD3ZUm8aCcEQUc6sfZBKv39h6Eu1FyFFgz7tpTA8GDnhGYnD5u",
  "key17": "4mxXmwY2XVjGxDExq8DjBz6Up5QfpGTAJ6RvzKookyoL1ZgH3Ry4TFVwP2VugkD8XWvHZaNC6mUfUdkEgtZdtZyp",
  "key18": "4QWw5szReaq2qGFp3C7d3sF3hjNRStAK1vwHky8yyzrZgtFkvd47e3YJQjpybtNoRKCoFtDdUPqTsSrs6iESN137",
  "key19": "4tWV7fQog3mnHfxQtLwCjtCCzBa52ktCXkZCfoS78BWgvg2XTNMer2BdcfvfL91cpcaDU6AqDcDjvEzUc1KToqdD",
  "key20": "3vYgraYqNY2MZtuwSUDU7mQDmDAVCWJ8RvMrUNRREMLoRMjj6rX3Vch4E2EaPhxnLyfFZdE3dAt2FtrksBP13dKA",
  "key21": "CXdQ8ft62tbqkSc8LW4nE3ZxFYmPNGu38mDM3Qmf3WZaxAeSCpqkU4TnbYmfWJyv3pTe5Jrh8BHdfe4CpY14jQo",
  "key22": "bJnnTpwdTnrG9ghEPAbABwp7Ys1Wg8PKPn1Va4zs9Xzj9hWM5JRyU7S78Nav5SuBHd5bmr2CQyHQGZyihBy5MGB",
  "key23": "quwhm21S4bjVLuYRudXk6seB3CvfVQCqYEaiv1kAZcpnd8KNh4fxb1wgaC9QkHFHyxKr2TotcFzAcASSZxEpn19",
  "key24": "obLb58X6xD9C3z55Aqs8tAACzs6XJPf6vTDWqH76mKmHCQxX9VjDV29DX6Ge5hxt2bkiTrnAcVWumMZoAiWC9yq",
  "key25": "53m1D1ygZQiCnN377vULCcX1dTBw7iDnHtdatbKv4ACSn6JbyBgiHsLi352TSRVDLTaD1tFeKVeZVgihfznrpz2C",
  "key26": "hX2hSYc32eqzrso1LZtAJHyvAzogyiX9KQZSTJr3PHPCPppSaovjMxFptniK3eQqB3Q9hLe7YhKG58BydXd7MZe",
  "key27": "479wpAMNP7m4W9JaXBQqX7gKGEQr8pcgs56RefyKMFCHm6yKFYqyHvAzCAtb6QKR4oncVbennkKQRzartbk7R85D",
  "key28": "2nNPX1ZA7SDwBimvbzTFaiixwECi2Qdwwjb84sC43EuoQnvqKiAV1k47kbyz3meeCwNdXR3RvuMNi5567feHukkf",
  "key29": "3yeHLBQGPgphwHDJJewLXqdT6tYwoGE3Qnn6EuwJiaecSjbdiXv1vfiacXkn8Q4LWBQYSDQRprq1Hssmo712U5zb",
  "key30": "GiZxXPUaJnCVik1vixM3vQMZEKqUJJUh4KM8LmQdwEaGPDtFqyRH3eLSnCQSA4AUiypVgwRStUiAbqV5Amko7mV",
  "key31": "5UkbGF7m7v7sUqNhLa3WmEtgoGpcqxYsWWRBEMcfW1oXe5sdW5EDkpUVAKrc3nyDKKms8GVp9i4wHSc2vn2QkAni",
  "key32": "wucYvTkjipyMsWXRyEnW8wcx1KhxUZBm5BxU1dNqx8XXLY7aw99qNJbHy5ceqdWXczvzQXvPw9g7SpxubnkCGUj",
  "key33": "hZ3mhhT5399GdPAVdEiCnSc9U61E9nwvwgDoCC7rvSuJdFxza59ZFbCECouchx9T9DhNXBE6dqoc4cbH6CSNZNe",
  "key34": "3nokVWHTte45hDzZNu3zLZ1PwsFeL1Z2cchwkZQ1a3ssYnFekAYt3gebD6UKgnJ73fHrX824fcrSk75NUfbmtakP",
  "key35": "3pZUdCev42U3FduMeRPacEV5mK61bHXknhDfpstXiKRfRT5QBSnVp5RMdBxFgBTg23vPM7yPRfdXcYPjt8TTy8u",
  "key36": "5su2vJYzmQDwandW7M4RaJ7o6E1D8Zk5zfE1mfu6ygvG3RT2CjZ89JGCy1FEh5rFfHHoCRQn4GA9dDZNDUgrFjFX",
  "key37": "5CSrgCK8TVK4wGMxEQMKg2H27i6Wki5n5kjeY6Nx9wN9GbAQcDsjx9rFwp6MBmTtgzoqYLt4tsjJT7DpijhwuEct",
  "key38": "5mKPVTHSLSryPTEzBV8yNwUUNRbkEsmanKZ3QcWKpmXNopMyWU9JBnjZaeoshJeQtPuvoQzg1nFwK8MxUXAa9YBC",
  "key39": "25S8f1jPnHidm5Rb3e67iKowGPXd63h4m2SqLJVE5ZQodJHjxuFJ8A4nXSmDU7Aborz5vfsJvhfBatKEfwQWxTKD",
  "key40": "3tuuNjYLdZs5iauAqcKMTEFEgTAqNmYqXe8mhhbtK1pTHKNrBkZgwAV9jE85BLqMag71b3kPkA92bicrXgTmpaU4",
  "key41": "4vJecTyT9B1qobFBeHobvZG8VQ5xiXV3X8yWUSnVFUWisz8YC7hjA884uF6JgGqs1rUeZzucv4Nrtx6SCXYhcPoZ",
  "key42": "39CYhxeJFYJKktgJPRfLcLLAbeEGPafBoHdf6YvaY4Fr3Sjg6LPL96UKkDN4GddKEDHdHLUkNnPeAznhwjRvt4Ev",
  "key43": "s9uNr3MR37iYwm9HJ2q1hD6bJd3gq4pb57JFpcCtTR4htVVsFcp9gqCibPaQxakAjoVLnyhEQJwz8QsDwA3WEFn",
  "key44": "31DeX89vDRWp7guEMEEw2NcdUanXefFUkWnvKrFCRTHbCFBdTdCjixfUv2iKF6qMSeEfdTnhU3TDgzYvRWyy8oGu"
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
