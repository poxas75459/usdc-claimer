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
    "2jfzouB6HEyNHHjQDGp6hGcubu83dDptbdecvEj7Th34znDt2RKLiSEZ2nNyUzy8zpnXXKxZwykimir5ZJuRCdvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "575UDxe1bbHnJ8CHHdk3zFcbRkJ1LR6Bu2xZuihDU9YWvoVWmZ8VSvLVDaKU3HSdz7LvuH3JfBqN2gUNzfufFoEj",
  "key1": "2DmYUTCEgUMoHUBR2Xo7HsRdCA5FsVfsYPvywWaRfCYqoCvmpBSxchwkLraySsNnqYfk4FBTCXKGkWyaqRsq2e4R",
  "key2": "eiF7sF5TEjAovLeggKN1JTYtxVz3VLERns8AuCxVLxw8MsKPkahLCgRXyHJ9jwA57JXUxcfxfDFCorgKyzxHSDx",
  "key3": "5AbVbzpKpStofxTMht24peJCC5iNcVbTjwXwaMXAPDN8AW88zNW3vRGmUr3HBhCCZwYEi5cjVu6Vs9KQhXjekLXC",
  "key4": "551EC8oVbCwNiX8Qvy8fhYHJFGRbjq6ckWhWKhCV3qJGha962nAwmYSW6m9C2aWHT4Nv7tCg1FrTSwiHaherWJv7",
  "key5": "3t4TEPpBeQepf7CdB4XSNdGGGt6nFGykoUAMfLFJ2KCbjvdzUZbkEVUxYHDabCAm22iu7kphY9FBaE7uT2Py5coh",
  "key6": "56WUu8hqtcU8ZgW3FVKvJ6emeSeVeWJZyWNcJx6xdR4UCBVXARt4kUxiAWPamTpc1VzwWpuBjm7ww9R9Cvi8bzLy",
  "key7": "3vxYPDLs1rCMskXmmGfazEyKr68ZaEWLGaGAdyeiEjyeYt6NcWDWc43CZvSGT1KzxXsxB2Vp4DrfTncfBCsUwFy",
  "key8": "3WE8b8qcUR5DoQu4Fs3WwsFML8SbAM21z4fFdSEcAeXjjZ5msnER9E7b28joXUMW6L31UptNkFYLs4Z5S9VjJdHJ",
  "key9": "5N7CV4CRmjLwLKUSBHQLaczQ2PEiBoaGScZSCG8avBtH947cnJEbw2hAZRRd2y5qBHMxsPFKTAzAm96outs3sqo2",
  "key10": "2wNzbtjT1gu7RkLninrR9DirQsWDZiMvLP6sXiByKyGKcDg1rTmWM7YZ7m7G8YXwVVRk4FyphW499Wr5oQ42MahH",
  "key11": "45t62V3UHfsxAoVc8B8NqTTkxjvoxRQY1rsGktsBAJUDb28o4PVv233HNQM2q8GV3AFkAJ9rMUcjoa3p6ozAtFq5",
  "key12": "4vhQWTAQ49UtPx8YdKfSrf1sC7n5t7iZkFN57N7vpGLAzzR3bXPztEjwQT9auHjbQQ9t6eQAewNegr2WgGR2XwXW",
  "key13": "26qvxWt5EDTUkjt8ToN6zia9xUEb7qTQ5NWcP3gdE4fGHoNPx5EHKAmYrNJThjcQfspfduigKAGGBMzmSi5fVdMs",
  "key14": "WZtQM2nwtr1ne3PoEiNJuNpEnzUatdXMdV2itY3ouxnCNtdjSwgVPBYdqpcbYqHLuUMtD8RLJGMjwT5RdAVUduN",
  "key15": "44vuHMneD5atXpqnhTJgHvUwpLLtyPo9rwSHpeCypMTjybszGHA2upyg44d7doanZ8JjUA25G4Ne8qQREz8ppftJ",
  "key16": "2JbMwNJQ8YPQe6zi648DLaxacnLAEkYWCRjP4AxDu38k6dejANvD5buytpkyPzeKwv9XE6dCXBjGNRMWE8qMi3az",
  "key17": "V2mg6yhx5Bawzd9wnktT2rqWjfRGDfKGN56nWdTCVoRgFqeMpyWwdPRQRVCkDjdryFggXGi2HUnGk6Bm2bXBvmC",
  "key18": "58Tbw9krkTBqAwjbVVmdCaATszLMfVfV7xMgfwi59VQP3AhtnQLVksCnaoocRo1emjPiSGD5bwzn5KuwDhWmB1Vy",
  "key19": "2C6XsrV7tTWeQvnLJrose1TCbU4VhGKT3Gih5ntx6ttzEj6hX4ZYzHrkKTMz9r1pZGuMP95hCTALM4KyyTLJM2L3",
  "key20": "5bqWm5sBU8nhnzSr8vsCT669YZjcQWcdNsokfChZ5D4ys5o2L6934NtN71bV3ggBv8eP53yTJ8ci6UkAQzuLRx4v",
  "key21": "YhxU1bhnRkjtRGPEZi8VKn6m81DEDbgDeW8yqntresowf4TUwaWRjvMeG9X9Wwdv7SSLeMaMS1ZbkCBTedQEmtW",
  "key22": "2obJXdhAb3EVzYpu2KK6jFfmHZ4bqcEFgqvEsPSJ1TDJFyQcjNpmanvi5rZCdjjU2XUKAvLK8mED17ohik5JWvg6",
  "key23": "kwQnLr15sVJK18u8DVPEGKiXMnjxUovDEQ3AqThkWJ6GmCnx45qvQev4B9LTv9CvYMbEB1ZpxBPdGbsJNUjwtef",
  "key24": "4FWmTBjYCevmJX59ombugf1w4gNAkh4DDFr4eGvuVudJ7Ytee5Fe6m2xKUYipBDeWPjnxddxdM8e9TmFxi3Ar2Fg",
  "key25": "5gf1hXV1wBkeUPaTxmFHFqQyjbSTvo4791nf8jzDk8nbZNzYvXXPdEXFsd3h1LmKKCZyDJsy4tGqGdFcJVuSc26c",
  "key26": "2g17DQXWb53Hg247AMuy38P4oQthw2NjrJ4mXqwEvWM7wC5fw9JKccRkCJHkJ1FidcuBJctf8nHcSwqhq7Eeq771",
  "key27": "2pUD3ueh2RC4CJMJqNWNQ55PXRUV2913SPtKTbTVnJYJi6XbN4k5tiwvcQoqDjKTXbhqug94d2JaNFL6Cp2F4Pw4",
  "key28": "43HfrR7C1QTCM5dbJvXgroe5FKtB7Zu7E2d55wuYcKm1xzmAqWvXo8GkB9MtyQHWhFCqy6tao6E3vFNxp3p3EhFW",
  "key29": "3LJ59p35UpGMXwtSPrsZZoeH59xucNwW8WAvftTZu8UXz1BMhJXVxJo6eLi8AzCXpvY9ApvRfWvdirTJXjsGEM5i",
  "key30": "28LW27vgwjuWxzUA6eYTbZDAxaQvoZJyv9yr6sxQ2GAoBhr4etuxiwtQ4eLPDigKAB84JNAaUc2KSha5tCAFPYRK",
  "key31": "5ZUCWF37QdtJ1i8vVdNYsV4ZwVrMM3AoGm5VNh7xQgRb5nCBzDnq6ojmUzWndxxZjEDnxthmeP4Etc7cjzpdQSsH",
  "key32": "21uj1xubB3GRXxRUsDoSLX6p2jAQ9BfNrhjVSKjPLv1abJ6qWFaTrCnrGb1B9A47Ad2bYhUNh7fEq53T9hbHHR4M",
  "key33": "5NEmxMG58CGAj8gNM3LeZsfAVuPrw5cDsrQNUY5jHCNMaFbqnEqeXrNB14GEMJaR28tzimzG4YAGULm8FG2zv2t9",
  "key34": "35fFgRq6WmyJtXxQmif1mEH5ipPe6QStmMrUMcH36S83VQpBuVYjAuX4XhSX9UBhwbfa1StRsByKwzWAyktSYARp",
  "key35": "AAmehS3cdHifryvwGwVANtuBVmRm5B8gTYR21NaiVJHGquP5NwhN7JUEweEmeqWSMwPwfSPbBMdFLAn4HQGdf9n",
  "key36": "4PBrH7tcJGSude4kTU5ht6JiW35Lsg6ckDguNtRyZwrW2LLPxkVLzjfsEsK81acCdLaUtSFU6cZm7JmtjXmzyhgi"
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
