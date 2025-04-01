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
    "2DabgkFWZw7e1CR6qbq4RkQ5s8YMgoKvApZj4GdwGkutYQBNTwYAnA61ZWU9P3aZk5SAXvnn9vp3eX8DatziRCip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2unnGpKzYQERqKmhDKDeJgyVRaLLctEVt1wSatErvG8W5vC1ojZwyQdMSt2jLCfq9WmBzr2zvPCor3YNgkxRbaJa",
  "key1": "3iRNRH7cpYbhAC7RYbokx9EUdJGmtKcTUQbPvZoN537hJoad1htAnuSdnHyRsPrigPjtwTFFR64UDso511idfqZt",
  "key2": "NV9LYr6qDxjALA97fJZqyXSNgqgmrW34kwvj25kmn69AHHe2V331ixf8hxXcxF4Tc61gEs3jhgdb4ayHgcWp6et",
  "key3": "4sCC48gpQ4rheL7GWCvN7ZbkUGE54qUFhph38zkyuVivQ2ZZr4NR8uHiBiXFT8xG8WzJ6nfREsG7hoKTCJiGeGAf",
  "key4": "3x8YKomSPFfkfCZ6GUM1eDY98WWv65Bt4x1iNyKTuZJpGU1bquhQeAsS3UTdtSoqruSxvbJBuuFpn9DyBXZTqQqq",
  "key5": "46VKmiBkpKgoGyaiQvrQssGUKEk8QbsNfABnQFPZVo729PRuYZmpMZ9afzu1mZHG2vPKMK5Zo2cDJuK2eRxKuVi9",
  "key6": "23LJVfm7CAkdKE35nLN3Yaup8HkXFbs4qjDZQHjAtixRaCg4wKRFxA77KjUeewh4GEY8Bfzz8FrF6jVCMFZrNCJN",
  "key7": "4hF4CYDT9NYBqBtqUBKzsD3jdo1WjRM42GAd3aSz8oTNM11CocFHbWHgyTj3Wj99fqBEfo788Y4JCYrackn2q6zf",
  "key8": "2eneYNit1397MQXjecorDAq9xzzxApFdpcLSMA32emosK9P5ehrH2KCMAxAZ5DievvuV62VcE52W376HkMwVuxLy",
  "key9": "5WkCodAV8E9paGK82Rdkor41ndi4rZzu78QN5kj9o8dv6mrJVQHfWfnC2CkPcDuTMuAbvF1KYkrd3CDQbPWm9Qe",
  "key10": "63vwHHXrXdxSuDLzCBWRJK2EYvCHFjuqsX7NuW92uLrQAkdYgKeSQCzcUdixZkFF6edwzfrJYMfqHiXyJVpbzTFj",
  "key11": "QUZcEWyL1Ujw83DsZquXbaMA9WWa9sbyDQHnW7h4c1A9onxFvhptSK86Q1dJpzr5FZQzQ9QemuydwVHb5bQ8ymL",
  "key12": "3oCHDikXRRoziFUXJTuUo9VFUQynfJ6A5Pj5ks5HgARJMAXfu8UHJisKf1Gm9toXLeMjK2RjQA8xvXrTBHJAqR8t",
  "key13": "4fnpTQbt35nX5o2LFj8NwJUfBmkv5YG14nJXtAmYaGznp4aawE1uyRPvnBBVnRjchEXcRi4tt8e2QHgDHL6kS3Zb",
  "key14": "bdMZnKFWS4PtqbcKRBViN51GjLroCjbU9yp9rUR7fzgJght8e2NgnctCLGL8JUiViSfogCB3WqAbKVwg6aL6PZX",
  "key15": "5jcKGhRoYTia1vMxvQ9Tt8Qpz9yt1jetjEz1qqGxfbADgxCLFFK7Vxp3Dhgp4yEFqgPXoC5W19nznKtkGJCbXQp8",
  "key16": "547zwpCHKpGJpE6ogBH5wTLLR6mVpn4SHWhbq7LcUwietcDKXUR4wn7Kw3yWgxdvz5418vQunU38p7QLiyuWWceg",
  "key17": "5q3mzPD6xmEZwaGzr95j53UNddYYYMJncH2TpFZc356UNycwVrQrdnmD8HKjTJuFbwVHpa58d3H8PiUK6TTWfb8Y",
  "key18": "2JBC5C1X3zYTQ4ecGGKe8r8nHreXp4xHBcxCFE34eXdzZNLNWDNcJSVTQbHM7UGAdia6Cd9poXVuHvvKpSEbzA5c",
  "key19": "5kfGm2vQ2CxH1G4f6HBP9jBy2vVDd1P679bTRv4BhWipWFVm9EhVDTkh6uFsCQxwt9BWYGxkFpnCDjMYtt3yWJSz",
  "key20": "XxCnp4VZaDEcknYWHTB2V4zw5MCXgoA74m6jKa54H6QyVorTQAqv8wrN6kN1o9S8peieZSHsLEbZe7LDrKTrckQ",
  "key21": "4kFRXmkF6tRyXVCYBQvoYfMswhgkr1JmpfTFKc6XRcp7XVpdBEU53jKfHRurtdUCoFLETRu3Go6ee3KkaoFvd7rE",
  "key22": "3fyepK1iefiGUZTwsGdcdPv3NquCzZuE8k6aUSBvcTiKi5DW6zLJgPgjf2SPM4tTnwwBxJKiuV9vkVegrxb2ta96",
  "key23": "3A2aYStJcAZgocWkvJpedX8C2RMVbaiNjnJFoiALSxyYAn1GDWRzY5uyWWVqccPbNfxK6e5k8SsB7SZdwu6tEyFf",
  "key24": "36ZRtSGfSrxcV35USLHgEZ9Qn7ohCzEh2K4LcKwFZY18Y6muxerAaKakRAzjW6swsvZfB9GMWeka8UV3Mg2MLgD7",
  "key25": "3tYHSdDNeTenFPwYcDvaE3AKEFovkvajoJzvaYX1c5HCzWVSJVcQ93vRUsrReNWcu7hSSYswWJiLgYcfqHiweh6Z",
  "key26": "N6RXAQuEmsHPHNzyWvF6UmhDZUG9bQQLbKVHQmnz2xWPgycGXmHKSpZKThzLHeBSAEHpdSFk6aQeSWGtFiDPEjr",
  "key27": "5aRsybZQR8zXPdoyHyAHbJKRVF3ibHnX4JXPak6rnF4rqFfECsBm5EN5wTMikY9A6ZMjFUtZcokudjDsdhfHGQrr",
  "key28": "ETwbH212Qo3pMbiPRo93MFohFv1ZifWJP32w3D53CSqHx2GjoL8kvBXnqfbiruXZY9yDUpd2zmC7rtXHJcEaQPU",
  "key29": "3h24kcfXmKGd2pgWfNPTgeW2pKXDguZWuE4ZcHrxdhRzipBJk939qENADX4hTJAyTDdCrRomMr13JmW9nozwwz9r",
  "key30": "5vGacbGEKTdtZXucgGJNmnnY6S3WwdUwwVDPrqrAg3Krf4oE8iEmZAmJKTcVWL6kJ8GRFycAG245mYU3WC9ovPBJ",
  "key31": "3YTQ74SiDGxyt3C6g8HyLnW5fjv3XLFC4JCiqcvfY99avxAKgQbUKFgKZczgohefxtnmcvYKuKtTnRGbigePCeda",
  "key32": "3GWC7JwQZFZ6re4RXMwcXJ5c2S1YtJcphHPjGYPwJuBTYCJoSEnDgQvPDDqv79XNThTiF2BkeNBA26ybAjAnymoB",
  "key33": "5SJwFjwVHet6YL947YtHGmPeCZjLKjjLBd8qvge69KVudHHYgHyPqjHivzmJYnojc9HJdefb6trJNCwVycGYtRqh",
  "key34": "nYU5jFgPv3ZFZ7sbYXZfJM1mxGEm4tADpMbYHRvpPamD2UuPLcA4YpHDwtrs6giHCmHa97HSGEuouiHK8b4csvL",
  "key35": "66KE99k4soRGgLMBSqHAqRqRX64jf3w7tUtavtoq7AogVJ2tRBkLeNx6tFcHGDGv5cBFys2MT6NqxjYKCdFgH6Nr",
  "key36": "2qrg1n7CftCMQiaDGq9Xmum2P29mskeBhMzghc8GA8kedY5EeC3vwohST1Y8Hb3EasErT9iYCvNEW3QjZ2XLQgLx",
  "key37": "5ZZiS9riBAvBNRgKTnt2t8ZHKhbwoiaA6KKfUjB4VvwhsDhxtxbvM3CS65wjXkZLYJpwm5CTa8RJcyKxninMSPFP",
  "key38": "4jgjpzL3pf6hNLkksYkxgc3RHxcfYCCw9uvRVMQB6WU7sBFg5Jy2oaWxBfXqEFZgXS9VXq1PEMbSbCExtoHmpmgU",
  "key39": "p57Gt7XspyqCjQuaso3mgyamgm2HRPr5CLPY8kpd4CjDQGsPKnbfyi32LCXPmphcL1tfHsPARX5xMyrcM9nvphR",
  "key40": "3jf7j5K8T35KXxEq79SYLUmAA4TFWH4ZAyghMfeH6FbWfsv8GxLzP3VvETdcXjYEGc7xevJp5vmdNtBcP69GJtUS",
  "key41": "2Bm44AiY4g68ujKGTEeF2KL3cxqcKLT1y9WzqjbvuKe5rcYm4wpFSFm47eLuD9hHc7A1j5FD49R1C9pBLmrQgwBm"
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
