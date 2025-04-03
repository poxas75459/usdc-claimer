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
    "2cPASth5ioTt12P4SBYGHxvKVpyKgxcFqWRBxpjwjWqgteLWekZeuDhohcWTseoWFk9AYNHgwvXP1TZcXPc3LDaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sr62YPq12KhzxY29awufuemijKvGx873RJHqz3imhJ6FvUGXpKdeZgx3zxgQV8BKzcQw4EbxQRdSJjDE1P4yAPA",
  "key1": "51yaTexqajgipgigzaoCsEs5weuuLS9wFutXCapcR9tvCnY9hFCNeb2ZqxRRdwVwzhZ1d6gaWQftvAsSNvcnf9eM",
  "key2": "4vUFWJ1ZUNo9883ePwxYcgvEWkoHNX4DADPHwgXp6mi9iBNWFCMLozAdeqdPpp3LctPcVxsBS1y76TPgJh7oeSPo",
  "key3": "4QpUj461hyjyPc7E9QkHaKRLqaBBc3MNRto79xccdk6pAzir5dQSpL3E6AV9bsDXUwJDqDhzubDwUJFBBesrAe9T",
  "key4": "EFbZxVD1ivusbQwxEsL9k67MQHz2VDV9Nw3xgZj7hhFEEP8kBn16dgjqsWbqmvEnd6sgQjrqWXtgFyTVXgn9F1W",
  "key5": "nfTJ4JkDU5cfxAyRQXneUMpFDxy12Sq9ucEVXHVWBbnscC6twEmmFHkjRGZZxk6CnHPuEow9Qc9cxVKQbqZc8zZ",
  "key6": "4f2dw1o85mGMXbLFfZjMFMwQjexYrvBape72yeadjMPM2PSHmActWcHFQk3qLRvbsBBytghqc4Kyha1iTarffb5f",
  "key7": "4yYcBaQ3bVnvpZS6RF8xZD4s1GNaXYc8APJgfELGcTV6Ztzm14UpeUKtAQzqh1fHAyzyChgD7XDYGPVyoVw9hZf6",
  "key8": "2QD77QtjFFGbwYTqhTier1EmnM3jnYrs81qAxYrFXj5zigdrhhFDNsq7X4TFfSbu7hiBSLTzVmiSMZJaF5QxqQhi",
  "key9": "5FpSs5mfMS7ejgxdVTznUzPXdwFr5RpLw1Ry2o87FAdppNRqTZ21CRpmTWz8mr2VSB64AJfyDy2eLivwPSjZ98gm",
  "key10": "4UaE8CX8UiPD91f9SWSChsC17J4cpohahv6PocEtFt84qdmXDx11fuqXycuBwrBzAo5X4gJT59K2Bie68pxH5PSV",
  "key11": "CciRTTsdAH4LpoU8LwGarpApCN13B1g5XWjEa9oB1tnwvNNzaysvm7AQcoTtDPtMEgCEdhhqQg24PMeRA9kqhZ3",
  "key12": "4hvDwBDP3bA1ahfu7GVXBUGM2wssZo5NSXXQPVGZUzgb5HTA8ay9PiQPsawB6GnaWndAdv4yTzxveCpXYznpndUc",
  "key13": "3YXPWsHxp3cBk4dc7ubnmBcR7tgKwvHJn87TN8EErnqEpX9gP6J8qJyJtuZwpSMZD8BpkLk72oz5v8KcuTfkdbWX",
  "key14": "3YbLnBEeoXzNdyN35RnmEKK8WzUoH2vV3zpoNAkHgwEZGnvya7MXM1vtCfWNRzMBa61ayecBz3uWKoDukdJHwKiC",
  "key15": "3Y3BiZxv6YsF57JEhEWHnqsmU4ikmNVyBLNfwYFDqh2YdZMcGJAUYntuo3rxQiyCsbRcPE2qtSFLvo2qk5famkRN",
  "key16": "42fW9dyNfutZ8UZq7bVJwgUQrpSkqoMLo7jysQRcy81xQRP8jbSwj6rR8NRKZCS249uv3aiMXdttvGh9fnQCGCxg",
  "key17": "3LGvScaEbMhGDD4oVnrv5vH6EJZG1zEFVAuCHUhBk3QMykGfZALRMvf6LEbq6b1VRKNmmqh3peMUu2LBX9R7x8Wj",
  "key18": "3JvKjZuEXYmgB6RcYdBMurCdbPkQZngXqxFMivctGzj3q6h7fgkrm3PBjdmPmrXrjiC18atyHtVxrQTYQxG7hSw7",
  "key19": "2qybN5WSLWyjGn8buqc7cH48r6MXWz8g1FtHuScfeQ76mXZHqjh8NWY2JYNLZinXWFMzGXpd9Ag7GgvfCnJJkQ4r",
  "key20": "3xNTgxmCLVeBoiB31nhVjzFLmH8UjvV5saYUz5Yb5NWmzUtfPJxxnzrAX1rnBeeyytM61pFCwnHMkxrnViQn11VU",
  "key21": "4pYueFmYJ4zcDUG5AsDppRCFBtfXXzZMBmhjZWwFvNKQWCq6B5enS4Nqs8ZGkqmAGgxzXazAb9UyzgwLg3hRUV7a",
  "key22": "5gtoe3kzHqzmpsCZT93cY6b9xJoP51AwRrudx7EKUUSmzFJuGsnhX7LE5VcYZpN14toSzebZzkaKrzdTvB7EbYf7",
  "key23": "4D7BrbgLmdP9s9bMsukcxUxMWzaV4g4AcpBKGUaZtrkhEEmXjJnwp4Uv4VFCyu9mYXpS9ue1XqkSnjCYnwq5gjJ8",
  "key24": "3xYtjBmwEnVf8mz1C97KMhRDv66Frb71LmgTWWM2oBmN9vEyYdq226prw71YZMZaEFcfxumyKJ7S4xf4ts3sYmna",
  "key25": "pqoxXdjs246cZveKVTRDhCKWzgMs7TAsAFYAf5fbgsSyGD3bqTyLFBNh61ycMPHQq9gj69k7NDiyDR1oXLGPU73",
  "key26": "4bAgZgXHwsxz26PeB92Rv8GXqqM8HAg9V6saF3dEuMeMSfZW7cJ7sc3V3vytCQtHGGfkCdU49hZqSzVgB6DhBdMC",
  "key27": "2RmhHyigFyhS2i1dyakRvCbLD3nyMjsLN5znf82Uhrg58H7wDggigupYGx8etZCe3iF8H76YqGcty4JYrMGam4k1",
  "key28": "FguUBcqidxDMyKPWJk8h6pwTgHBANHqkFBmUEUCrEttxHi12AFCPbN8ePAhers8iwXbfr1jF4nsDVFDwr18Kh6r",
  "key29": "24GF8zLs1e3cY94SwvkBhdqDL6fR7H2sEJSUpq2jccRzH9zusoxb6i52JiCHiQ7Z9Trm35ASnNfNReWaszPArnen",
  "key30": "5Qb4Hy4EZp77j9TRdNtT8EaMrF7QUPsefuDoMBJhsHwXPmjfTDrx64Lkw2jgnWSnLYVwk5LCrU6shPdUfrSjG2jQ",
  "key31": "etZk43XeYFJ2ogwjHYJUsHpDaLoV6rMiLUZcJbXkwgDdhixpLsHj2SHiTX9Kjks8JAhX1KVY46bCeFZhQXoKp2L",
  "key32": "4pc3Qan4XeDpqHuFhsZjWjxpDZM9BTVdLnjvhX3LXBgssi6UdkF7AE2qQ6Ps9mWjqjR2P5HVFRyz54tx3ZcmrCqJ",
  "key33": "2sN2CX4eHxe6vAeF5R1X9ABKNYEgXrdQ6R6qQSMm47gEKmTd1UWATDgDTwUgVd6z5sjMuPX6kxrctsRL81SstiCE",
  "key34": "3byUwsCrdBxPc5BEsLVTFn5t2dsR6h2PUtfmgJJkSM4RbKu2RGgpSwAAYMSunfscViFBjQgmrvQ3yQ3ySNFWk9s4",
  "key35": "4hxodzfQSYWKepArTkjQ4fSSdK4tP5YAqse6pQvHGKZ26hHuDCoBrj8zEo35KscL1bNzZTP1zXWvEAHH56DUXsFp",
  "key36": "4N5hH5aL1ZnczMGF88ozNc1TgjYD5aLzBeGaS5hfsGgZc4oTwxpGeei2vsUB1LVhfRNtUC33kcUbqwZyaHjHs2x4",
  "key37": "UraNQ6mWZucKTX3Yjpwf3u7GZn8qjgYsBNSH4Mnhw4R7XGqFf3wnrCrrFS23qzcbU71FENbuYi1UyyoheZ3m5T9",
  "key38": "4XUWePqQPFRXNYk1364uGVCn8CxzzmDVvtSmZMoCMqKpYiCjoKSDGQ9QBmD8qe4M56L26f6te2QjzN1aHLAFFAWW",
  "key39": "5MPFXryRyRmGYvBsEpxNr5G9HoTnHbZ7pjpE9skCxvRX5jRLbNg4Lobresqj8uTroERWLbVxKAgvxmHW81qPoB6X",
  "key40": "3KnBL68vByv63teznfCbQryugzf2Z1XtK5QAUBbNcosVk73cEqcz5gMvixCgodd2sEy5BGwEkkey1oJMEKoLqtpR",
  "key41": "2Sgb6UaMLg2xrfpatGkkKcm71vKZ6aVJi5irdoswVaCWe1fxynBcXc3ZXDHEvfqEixYU6w6EgvdrvjkyfUDoYTBC",
  "key42": "WxvFHL6fuXPyKfbcKDftk2xVe1Je5qgTxAEkp9bVdd1obVuwBFM9674XGJy9U3iPknogS8nHj2LunXynunPvX77",
  "key43": "kdpH7JSRD7QPxKZFF84fU1yLRaux4NZkZTKBQ6925ohnZEqv4rhrFVtqqRy2QTUPhF8nbsJnKUnXjdCea5nH3Lg",
  "key44": "4hMLCeMgRwR2Ug5sqL6Enf5daJYrF7zpTXSLPM8zVksWThJ2xrnoWqpM9w9RdKfj5KbV5WMeDkHynVj7ZfNAyrTY",
  "key45": "3AVAJWgaMy142LUWzprJRd39fgJc1FSbdHEJZJPJ5ST39KcMsXUng6wtoamFgEuAUZrQUznwdcKELFQJABaq49b5",
  "key46": "5AviXHM9ubmSK323i1SwQtCWk8x8bbtNPb6meknjynvbf2hdkTbsfYw8cjU3ByHpFixcbkJXRVs7nbLRbbtfoGig",
  "key47": "5R8oq1K8YWEPbwMBjkutn7RqWxqjd3BrmQ5zNv5GTv8sbKKdcKCJfR4rmkAWGtVD93zkrayroTejJniWXhiMWzoA"
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
