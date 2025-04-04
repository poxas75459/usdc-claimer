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
    "48b942JRbYbYLSVFL3zfSKXyzt1nFEVzHnjUrkRvG4LcmoxtXku9NN5UaSEnftPvNo3k1Wg2a2hRmiz78wC86qVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECdfqDT8dmpQmqn4UAicydXCvxJMnQ2HrX4aC4DeSM22mQoj8W2HxZadiGZEs6GNPqTX81L2wiaw1SC5gNm9tAR",
  "key1": "3gysHg62YBsabyDA1SJcJv6VYCRzuSZDGNBXaFXS4jf4xqJLCHEwpUVJwwdgoNugAS11WmaYxpiVG1NwDHmx2bk3",
  "key2": "jamjyqyAf55Xe5vTWXH2kTXLtLBd3PX1JxM62pRCKYgEu8CpZW72iQ4Cg5Ek1giLfH1TujyNCtBZPWe7Qdnb8x7",
  "key3": "2eMTmxtaXbtEo1PxQeNsr61TQBwjT1ehC4M8FdDJgvneix3wp9KJzx9gsm5gtPNcb1TVkdzcY4B4nqL9j6arJCBf",
  "key4": "WEb7pGhqs2Yg3LaDxyq5eKuHbfKUZG5HEnq7DqKxWjnwcsy8FsvvHzHUh3iepeYQYjr45tWaEyocB6QgHo1UBNB",
  "key5": "4DhaS9299UVrWRspntbWaBjQTJu131Y8P3j9hr7MRmNi9HHrhTmDDyDDRBLPsWjhdL7Dptx96mJ21mjbWBm6vQcd",
  "key6": "3GnKDM12NQPRCo6PjjvDsXS5MXTHxqvgKBvYQWz5r6vWo7eJ1peCyGLjR9yXzkqkvMUbjvREh4A1s3zja19ygtaJ",
  "key7": "qFVTh1Nn4bPunJTFWywza2cA8yRJmtHpP3wCJ5KQ9RWZwiVA8VYm4DxR1f4pTRRmEQJorkpQs5465SZLaTSaFgT",
  "key8": "4kN1DGzHoDzqFyC3Jeu7mmCesiWgqQs8SrXVrtpfWogGuYdpgUwmsfPkw82hopixGHezJH3ciuixSALbvxKKvegZ",
  "key9": "3nJLTepfaJa3gruvoN9JgmWXBwwh9xyGouPUUvsncCmPDNzWCk56aZxpB7AgYarv3dBTVWfdgVaqSLPCxKXDPcPq",
  "key10": "4fTRmwZpnrZP4ZbDNKJYWauPZdC5jHCXAei8tYV2NgHfFXeJTbXeQZKo5Sn7sm7ZpDRFfWDkDutJZ45KCyHsZzkM",
  "key11": "Qxt8Z36W49ZYADJjASoTXXjVaB3Hazfo9PrKC8mpejqw77aD1gjSKiLFjTjGT6V52nfwgNSTkRzReBmwBPP4taJ",
  "key12": "58mwNXkcCrhUSjG2semkxMPzxyVhCENbxbndrrVfBgGMPYWA8JKg9SqcvweWnJiHdGEEgxmZqoAWEJeS8KNs3iJX",
  "key13": "3tPcYaiFNVRbk62X8DwSgN1xC6wLjuUmP5WWxiay3Yj8q8mWoDWwqmSAnDSXuTqd9v3Dk8UvzbamrRWc6KH7iCF2",
  "key14": "61DvsvdfT9cxSahxstr6SUU2KVmutS9FwnHzH74HSB6wMWm1S46quKZ64KpJ77FzhCEsQiTSgf1LXsgNyyGCQEGD",
  "key15": "3eCxhUdNqpspvUgEcAFeYxRFPN4G9AXU2JRHjDqr1J22JigqfEqo778ro7QU4Fms8vzJn5RB5sPgRyLZu4kSRYN6",
  "key16": "5vKVbwjW9cJGv7m1DoyDeUzL1jFF27LqPbmzjqZP9jH9rNxyVJW4Sk27AsdPtWKmgAc2QWvBHzud5E3CmWJNWwjZ",
  "key17": "4bZNgMp77UTAHDWj274Fd3kt3GzbX24hW5v5kHYxd7aTskqCfrpqnKfZaJYi6Tb6rWG9xAHphZFFBKnFm49X2tTm",
  "key18": "3HjCsCGQo7YTXHZLAhFALmbEWz3bPxbhAGtE57XmUnh1PXbc9Go3hR2XpU9jzTguYdEv9gVZ9PzFGWnP6xxNVbfo",
  "key19": "4NzhWfN2RhNGpJ2LqXfda1cKdyaAQMwrzxDKKQa5N4czm7iniY92UmddtVKq4bGCDXfs5N5vjeXvJu8W8ZbyLB3Q",
  "key20": "57ad8CwMxHQuivAshRszowFpqgwcTRSMFP28UnoqBiFqxQsiv17L7h6hAKiGYFf9jJERrEMc2HFXxZGCab1V3Dwn",
  "key21": "8ByNCWft7VsUEhsyotrzUh5De1tE1MjsCfNgZnEwKjQaRRMWPpaXR8sRE7ANESEN7u24DyVb251dwpXthYJWhMb",
  "key22": "46sehu2M3n7NB3Y2mideBFUgdpCRuUVEvx8DvAwbkN9PjKzPGGTnkwH8yhLv7SeqoAiVWQmXjmtjRFMQMvxF99Pi",
  "key23": "3Gg9zSp7YR9ksN8cstrgJPBcJ2BAEQVTD6eyi4fwUJrX1HDtygSGroyCW6BWEG7UrZT59maD5wPRTjzwhSNmh3nK",
  "key24": "4pX1XR7dMundFGtVMdQX1ZiRZ8kNEjJrEyxd21axqHTAEo2Eu8FaN6Jy8rUM9ZmmtacrpiRmkaFYkMvxXBBr6L7o",
  "key25": "3Ek4hQhoLssdwwUKXMA75ZqG4LEanDhXMjUtzWtbRX7DWqVJ4tYh92215xxVRw8nSbU8aEPpLuAwJ6ADskCREbeX",
  "key26": "5nwrvU7sa9fuAu8i2tTfV9Wj9uqatDXs7osf13Fq5UBnzyL1wdiAjYHhdTNFDnrsqrLyRWvwmVFV63JKaBqFt4w9",
  "key27": "4ChJLjRndLCy1Wdgz9KeQXj1AmkJgC4ukTtX9Nmk1jG9n1VqY1YjPWZREhSdraYnweEHNGZ45Jr3FFejMrVrRyjg",
  "key28": "GKE6cwVvvNgsiysmybv2wZY39m9XNRxayCUjQbuqRgfhPzMHtTQjFSXc8QiKjVtCWSKqvjN6J79JrvRPmbtCcYw",
  "key29": "5QCTQRnqkYafsFvzyYRvEkYMHsTY1XGAhsAGiR6nNH8e7mxWxF1iCfWVsmXTV4K2vYGk2RhKrNJyLRDrDcytUwWV",
  "key30": "3HZbsBZVyhingkJ75ssNPhHaQWWU9oK82zcfu67WWGbJWjRFsJzcMK1357ajRNmShPfjgQn3nbLEsmXUZHKuwyxK",
  "key31": "22phJSHuu8wzLEzgxBYGtpCgFBnoeDHLLVY1k8zVjMpKaoTh5iBsLAobMMPujs8jMgZKCwjWWUebMwNMvvWTU3A4",
  "key32": "2rjj5Mx4UxWojJ4NTSFfuYseAAgB6rxGgWVPjcBkpM2F65d8z5JHcDZPwzH6ahhvvFAn71vHKLehVjeoEV9ECqHv",
  "key33": "3rPTx8y95zK33kHiXAZw33Es52mEkyr6ckTq2SbsKHUb7BY9jHV5KtoA4D87raxvAmHm85an6bfUvhcfaG5oCGnp",
  "key34": "2sntzTokqQfq2GkscKmXFmTwMSGpVsDjdPVmiPdrj7Xjd38SgHBzbfQo9EqDQY4S2xuaYGFAmdC52RhLbKM1Dnd6"
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
