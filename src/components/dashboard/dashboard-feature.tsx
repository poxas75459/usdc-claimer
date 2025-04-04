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
    "4aZMoUZtdTg8exW9VoZFWsWUieDDhXovguu5xJM6NFnt3aCmEGMwBg8jjAeDGUTkAEbv9BurnsEkERepDukuQEUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65WGZAP6iHxfhyMXFYwaBbh2yciMqGjS37PRoEiH7sqTTmMd1FygWS24JSy1paNUqFe58PVir4RLeWfGgdw1xLuA",
  "key1": "5htqaMvdfYaV632kuZaHDEGGXJBpqeFWErPpF9w19gWVz416yr6vG73FZP1YRg3PQhXZcm9ZvZaLRH5q6WGvo4vZ",
  "key2": "51ESa3nem6cot5TULZQr52piKxi5NWbyT3rooqfW4dLzMH4eAD8kD2fYJD3rLknTmHFJppQechjHceMmCkRJckYZ",
  "key3": "jSf41kZBn5nqQ5vj4JtfWoVpHY6MBEgnzTmXypgpLY4wBrMkmhJptnoep7x3NQXbPDmfMEjCRxJzzdkXggmvbRf",
  "key4": "3W7VxzwKpdqswVfwM7nPEjvtAufHfw5s7wZ2T7cEzg75yD1P1xnjbtya1AgC8AyoGpSpxaPJ646mNwJGeswSQ4rS",
  "key5": "65DaMtWA2gRBeVBsso5J7B3sceMBBLE4v3HBadhQcUMi7ApMtAMZzZEogRFgFZbKDGgQk1xgtRdtRvrqqAQjogEw",
  "key6": "27epw6bsY7XiT6TjwX1Qnion8TTCWqXUSA86BYaGJKkJvCFTBLxX5uR7a6MCPdaibUNtemW98uKig1gfd7zEnJmf",
  "key7": "3wXHa1FJHoTA97YqLiLnS2gaUynTJHGvH9utsPAC3ysmDTWvxxEAyszdwhVmD8P4WS3maDmFJRg6G7Qr82aqYmrq",
  "key8": "4jQBGPtyxZ7iVwKPWod6EV9RP8kYvHvrHL45JaJPds4TrAqdpRW9XYB5EuuGyKrWcEvEh2mGsKDeNuXyPax8o8Ky",
  "key9": "52X425obqR3DTAzMaDWGmgiK8wgvgxXUjRpZnbtpz2qTW6WS4RwJeoLjn6hBqZ1MsutHuVYr17YzJnucHuj6Xw1a",
  "key10": "27bMNs3xyYqzrjht2HsF1DrcH5AFhsY8qpurpbpxfuTxKTn5TYEZrAdveQVyNaqmkvaVpt5p4HLtVcapk7M5LMSU",
  "key11": "41Qe56MfGSskYVG5k3A9rSR9APbCz7zq8ZN5b6NUWpDEpvuftcjLM5YxnqGgqSXbJ7fL9F8NazNt6XPG8tJeZM3X",
  "key12": "67MYuFqQ23VowdT7buSR7sHgDXauMkZWvm1PweVATsoqutTnPPqzPei4gNSot39usZWZNiT62tWR3MWVTEuyxZqr",
  "key13": "5u8eLXC4v9gmbQ3pLr23HbgbDuSEs5FpeDJjuKBaXtWajaMzmumFazhdpHf36tMyr1zQtPsfacfSBT1tzCdyqJb2",
  "key14": "5vesJ1hzpuWiKNu2Vyz3NzKQL8aPr56FXXTEm87yxDsELT3fNz8a57zTfV2JTuBJoga3nFR76dVN3ju1VSmRo1nT",
  "key15": "5s4MY7NCLSBvXNMqTeWZeS6HxNxZMsN4wLmnjWXz8w14EsF32DBsUqqJphsmhdbVmZf4Gu3hRWjHWnL2vPBXz53o",
  "key16": "2CT94FvknyfPsAJb37kqbqCKW2tWBpXH5SXBM1fx1drKT2iKFu2dPvdtKeLWzD1KYnRVjqLoTXzxHJdnD4oAPSx2",
  "key17": "5ZD6iHmsqq1N7AEZkMrV4cqHah54WpTALq4UnJqSpDXd7oLzUBRmmxPNFGNQfHNUrWYWBGHTiroQZMjHjoqUo4A2",
  "key18": "5Q6pvnmJAFLm5bgmNrWxPgqXcCuQFpb69bronbHKV3h6aqs4iUm6kYTKoxe6tAPhZT1BhUw7wsiVQVC7cpqKnjhX",
  "key19": "3RSjGQq5yXftovY7aMs6SsKh9G3T7qw8AWdKKogx94n7fwpX48XofCrB3Gjkk2C3SQhEfPeAjMCHNDQCrcJj5cBw",
  "key20": "5CuLtGyJAPWK93HUTnbzqk9jPXEFcyuWJguFjBRzx4Qz4CJxRW49N8KuKcQStWicLhLAafr9geJrTNUmLprY64YM",
  "key21": "hFMLyjokNCmJgFpys95TmXb8NkiQDR53q3YmqDoV35EWh1ozAYppviJhEc3htCcrcpFSPz3352v69QU4SXJ6WtZ",
  "key22": "3TkKQ9czfLqvcL85WVPHRcQo3QWBz4ZYt2b9VfeUqBCg6SWyd99LuK8BAo7H4bxTmRxbkwBY9xuT87SevWRE2hhi",
  "key23": "EQb7BpvgVfB2xU7KayVK71ZdoZevavjp5d7izD8RKZmc74Swrn6oemi3cMEKvonTAs3LRecKFhSPfewBsobh1jm",
  "key24": "58LtDnGWG2RpMLQDH1bRD9RfySL742DDjQ6PqTbAS2q63uLsDtkqwdFwWfNyBo3peMtyccmusM1kv61wMgoKaXtM",
  "key25": "5ZDWMWEYnWyEoc8GhbFVBCXenr46h8YYJvZE5icWdDbTuhgoDReUeRMiuXjWaaVEupBgg6B1nk1o122PDoHVE1hZ",
  "key26": "FMEm6LeKFijUN4H96whAnuvxPzvsCGhNpQJLBGErJ1FBCgidJBL2JJ3HSrzzRxayfXsAdcRYDWA6pGNdm4TFWzU",
  "key27": "2Rw1nnAXWx6kAydH1WhZXjjfQxFM3M3Hqejut2118kuAWWV9ByGMxkae44gTTPXZDfwpB5uYE28PAcvbNmBYSM2H",
  "key28": "Mnk6GpH6V1NJvyydKq9jw8z5CCXLWY39DrAqXBn63vL5Gmpaoq9VMPNysdjCCt2tSKVKsD2WkpYFo6yRuAFiKwg",
  "key29": "3k73WjtAcGnsgTwhHVy612oGsXByMfuyAVUXuF3Wh7eyNXt6ikDoxbKWLLiwif7Ypu9aaHsFKwmBZZCA1Srs9gok",
  "key30": "3FAE8mGPoexbP3xwEEMckrnETTxv1qPDnXmZdT4Cn2pcqtMJ8KmNgRFzoyaR4qAjXggNhRWo34Tigt23em9qNcJW",
  "key31": "5GcbdvbAHjvNoAruFdLMPUeiPXqXYTHVTRUCJ7D3APF87rJYVMDbTRZgyBJEfTA9PtjiAAfsQeVaCzp8XQdP7aFp",
  "key32": "3QAMYFC5FM8j2ZB8ynLeVkUfX2yLdj75zJei6k6xbMBL2kgDEjpQrPVbFAzDrXYFVgtEcvYtjadRRLitkfJFYUeT",
  "key33": "3vUvKNFateXse2gR4CxygNGTszjU2d33jVYjMjP1QNmmbVoJrrpsji3XLXTjRV3u9wxiX8AyQtnLD1FfvrJ2MbpY",
  "key34": "5sGXNWJuUCX17idSAAfbDuFXmd86Ror2gXEk1vggtACdQcPVbrMg8K7bpHkJSWsm2rdLMYGMFHLV6GDKzy8uA7TY"
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
