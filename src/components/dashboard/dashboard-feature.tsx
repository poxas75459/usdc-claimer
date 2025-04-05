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
    "49efrDUaUSRnShio7bxhca6hvEerv5pa3MCsBSYdnnwnt8GEMiGvt4nsE7JokeyxGxWhrqm6VTJC5ptrQZkJoxPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VDgzXqeaXqFHeDjRV7R5h5gCXyS1yUbVPofw8vRqYzZoAyN6jXkMsfPadYnoZbZbHJr8ba1e6TuBvfaTZA76Evw",
  "key1": "veup5UyoWnn11fhwb6x2tKr4tdi6c3vRCbQhJ9m26T5UDETqgPwQbLkf5TcSFmHuPoKgn1qxxfCkWXzNAx2kEvr",
  "key2": "4t9PxeKSB3s3MhnYwxzesF3A7XAAKPV2eE3v7d1x9PuVZSWM83qkcb3heKsaPTEL81AbFucsupkRUKKCT7Fsxzgv",
  "key3": "5bxggXFUiUFk6HLDUsNvQvsA8gtYiMcHQHeUTsZVLUBcuPrnasEtyj1AgJoVABEZgm5oe7u7xBSEw55uJf9e4GYZ",
  "key4": "QsAJijTBdKtzbJtpctGpEfA4pSvdtw1sBE6nbTw9THvHFmLBd3AguWcN5yKtrfJaN8PsK1QtRywF2CVKWk9rrnW",
  "key5": "4Yng8m1bwzC7dL3wdZ3fEYbpaKeCXzGzQWGWTrqEd51Wjum8REnxJrGctrm1rwnoYPd1TfggPrvCMwqvgt3rpRp4",
  "key6": "35N5xhqLy1cn8vDug81284W1ExLe1HhxbDpa2VjMBSV6Q5J6nPEk9WrdYxhcTz4hyrHsCsB6zKBKvZ6uH5SB4qqG",
  "key7": "NartreabbQw3vo18fzaKgDAi3hvTYvhtLnHGGsYgvmuCrwCBWjLFSFD4VLWgXu1DTW4KQd3VAexE6LB1WwkGEjM",
  "key8": "4aSuSMbdNiGsgry6269EwcFggXjxTMKUXLjCvDBu46jwZ4cCPNCvukxFDFWxmjf5ZgyuqXKR8P3cPBS3PpAd42LB",
  "key9": "2mK2Vikj7PWPT3gYBbnxyvo1DVgMKfu42jZeJXUfhXq6diX7QuzgKBaUy9ECMpU795CfNxwajw3Ktkm6ebrsLiUa",
  "key10": "2ouiJ8XrGt4mt6zZ84R9e6EyfePjP181NmXdvYE5LjChB9jx2HP6wB39rGYtcdCH6vL3x2qoGBkv2PbxWZGsNQfK",
  "key11": "2A2NJ2B6ouP5q6mQemxUsXyVYicAt8sWraYGaru9TUoQq4fjaA3HMF9AaTvaUMn3QbtoHaJVXH9Bbkf8GZrMJCxk",
  "key12": "2ycxrVdHHGXpqXeKNAK4oEijdpCFxq51pJw8o9ZuqPzwCyZcj5PZvQxsAu44uvApYhARH7wLg7rzBDZUJZLujujd",
  "key13": "3idMapknMpS4RjJ2uF2nqGFsh39Bsx28iiruRihVAatc82jzxF3YUFBXw1BdJwZFBeQtaojLB1XcEzULSZBTLeQ8",
  "key14": "2iLXxdd44gnBAsQGqks789QfTTNZEDu319KURsrjDmWf4nZtdp9ckMN4A5USTDGk6m6Lvkka6upz9EDpHdDGTsdh",
  "key15": "kXFRgkZydkWWT1BBfoTPnZTJWnR2iZn4sMTwXupk3wuZZJcMmSGcJUBevZ35JQ7C9sKxXT9uqM7cKUjPwZYm8gR",
  "key16": "5fJKjEmNP4YggPru6x7NmZYjsHUAwAifDFSfHSe3wPiftC6bmfKTbPzZtjCNUebrrD4ouoty6p4FbF1FcQp1q1vS",
  "key17": "N5s8L2rjQqVBvrpqgV7pHSYcjJvg69v7XzrvspvkhPGU9ZuQZFPhNJD4kZuniNKQgEpu9epQ3cLAs6AnFeor6zL",
  "key18": "uzDLCm5WBrZ7KziTXB1nzJLczjbzoL35XsTw1JN3GmEF454uanoe1rjt5EbkDfmkN2yt927ipkPfUhVHbRsL7CV",
  "key19": "3HybDyCVEZTVBhcEKpCpkZLpJQgh5mEDRbS2X7xFH1VTT5UuSMTExkQURjGRvXqBpE5xP1ie9qCWk7X3GrWco6de",
  "key20": "3dWB2uEJzcTPRy18eeJrJCa5PQFKK3FYwroJEWCsKe6jm7pZPe8ETmNuQFCEsYSWyNCxbC3q8houaVWzuybVBgeB",
  "key21": "Qano13BbJGAndZeM5vLYMsjE35NKkBcjq2CQ4dPgvULhXTBDyzng92qL5JUvV3dLv8qiZuVVxKEPjHMye3jfbg6",
  "key22": "5cYAoY4yF4kHhL8FqBFgxwhroY6VrnHreVbAvXXAD48muzSeq51iGT3EkDnv2iWQu8sRJF6SyGdpK12X7zbVJ9SG",
  "key23": "4YAQwphk3G3mXvwpRFsrETZZyqTq9tBuEpQcjLiNK372UVSPNELQBz4urgXzYys9QE5hbDXg8hv6Wf5x23CLDf8r",
  "key24": "4BYenFEnfTEGPfRF6Yg6nvUh2XkvEVciRHZFpmHy3aQzpXRQP23WHg4vYABg4Tf2QvUBXvqvG29orYDq7YNFdRRm",
  "key25": "3cmtbuqgpXhSjth6554T8LyM1oQwppqByWEPqNeTtuuVE8SEb4fx7LstjEfD1cNnEUSsZrBdNDfTKTZvU2T9hgUL",
  "key26": "2qq6R7AwVM2bREgziiwbYpUECTXPAPyQr9vEP3vuiWsMXg2seWjHo29UQAxp6Lcb9bkhb5sT8WM691Xbokfm3Mu4",
  "key27": "SBgdeiG4rzifaYf9JT2gX3k7YFwXKMhpeeAcMdWiDB3FsaQRfSwjLi81ekNcHEMxMC1j3XuDdmF5DYNRLxp5ycK",
  "key28": "4JZUJ7gA9gdtErQM1y6AxkqyLPYQBdz2bA4gHf7fVvTF1ca4ctqLphK7jVsgUu7ZcxU9omkA9CM4MDpQvN2bvmbL",
  "key29": "3Zu8S7xwMN3kZmSMkDar2eTr3yC1fRo39SnecrEooszfDjtmhrE1PFDzji6MpKuwPhXnVsTyoU1KNLWs4rjS5WWc",
  "key30": "LaMMJchGeuKayDkLKPCqfTVxaWUmafKAfnVN6XNaQLDDq2GZG9o2yPj9qMa4gab7rSAgqAYMKicpmJ3NVx4q3GC",
  "key31": "2XrPm4gQrZRxHKjrjL7AucURhoHVG5TTcjpwCCjeisdPapZtXCNLVkuDMsnXvdKgsbcaKK7bkyuC8qsvgxwBjicU",
  "key32": "2RgqR1UHyUccbCamg3MENLbUJe7gWLHtBfZhxqLFQtsUBfFng1fumUWJpT4WuNoj64rN1jrGHoi9KoE3qCJeEqrh",
  "key33": "5gok8HwtR3EehSo9cwsyHF35uLyJeZjWMXURaWrNh87iBfpY1f2VBvm1kFXCfb7QbDftpG17c3YwCerbUJzRCzJT",
  "key34": "4gLG9uE5PTNQb6P5kpxQQQsarydM7qaMN8ydSiEoaFfFPdbmidnt64hyXXQvHnckpxv7LhyMBEZXeYQigoaNB9Mr",
  "key35": "3qxXM8tdQWiARa9fyytipbcEPpCiisLjPuWAxAfqjVuLB1SRLbQ1moqmApY4yZxf3xsZmz7rSoNP4a7QwUYVgB22",
  "key36": "2esWQRy5qbpE6CLhGNAoAKmpQmLQpFxdGBTVqx8YW8jWmbHJPwf2eUTo47vt9ecWXjbmbfDpSfzNE7ki2gjcxoMw",
  "key37": "3SS9eXxzUeyVZRgtB6G8WRxSvkwysjFiQu5ScnNzvZJKGFMwzdgzZnY7YeL2arFhNhSTtVyvN4VtJLveqV1qmdeG",
  "key38": "YVpHR99XdjyYWjNgYkpyihPg65Fi8xJcnJN7kYKnkgpmihC9AS89pUQzHcnxvbBXdkjVF84sQNNsixuMpkTwDJP"
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
