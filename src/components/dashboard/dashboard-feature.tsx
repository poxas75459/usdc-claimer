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
    "5BWAMj3cFWrMXYDXMDSHcKhiWqPThEXQjvji1cPeWsfGdPptmaEYSh6kKfbGJQd8G1MjrPXhmy7JRUV18yAv9ZbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ubQaJA94eZsEakbVRHUMCM2WKHkUtGy32b1kVh5X4H3DEcmSEUV5judQs9SgNCoE2jRLfybFfMtdpDGhfQEHnT6",
  "key1": "2CMwq68Rg9MgH4gvQ9gVsHWJZKHYfJBkymN5TVVHJLJUEMZHC37ipSHGZYvD5n6yF7bQfmobjwMHq5MyL3iBgFpX",
  "key2": "2HjFCD9Pu2T2hcSbk2JzXjBKk9vMPjm2mwXHtWqr8YyXrM64gUKMX89T9X8R8kuRsRtj7qNo3FmLSFuNa4AHFBNc",
  "key3": "589f87zYScazBM6A2dLYbF4GmHzMYeJUSN4MC2kXWfubkHneAst455gu2pcsTqhE1fJSmD3YpC9p1vFBtxyqh6dE",
  "key4": "4GhbSEWhBWxTMabgMhCYq9kDWurrgphQYWdohJCku8Nwdc1UKpGXaT57vv1cJuavNqedZou6cTtSkpQFanXY5wjt",
  "key5": "3CQbTpanoSgXwvMLLBuJjnQyuq8grLm2NpYRjaMHPMcJGtJAYJuPDQXCfEzgz4krRYHav5hhf8pBTTWPToKQ2eSk",
  "key6": "3TiyYkV8M3dcfWijgeKMTdLKeyzwHvZZvzFTZGBEKDZVQhmApLg77XzFaxN4Sb1ZPyJ8fKySt8iTwZvhCaKkFiuP",
  "key7": "W9DVBwiySM94SphE6HME5T86JZnXgzGU9SwFUNHcG64k2jSJ4vRBoqvNdKYjMeiRaXV6uUzJc8RzvSW9c2eYRcx",
  "key8": "2njgy4xhueoby28u9NekAw2N4vawn7oizES3qAPaTdSomdcx5nzYf1FMauSWLUZteARnmwknDNBePBSksHxZS9mH",
  "key9": "5dQhxizvvVmEXs5BAVceVQM8UaATno3on3xYLJibi8PsRyQbmNyGUkHXsssoNGa5MJY68Y6z8TPkxFj9EmFKQV4a",
  "key10": "52b27xhy48se64V8d8nMne8atcwpY2DX4t4CH1GPMvjCdwWua3XrkfFyuPymhmY3jQn93spNDR6WTPqNYQythBMh",
  "key11": "25anGCdEJ6F1q9wnGKrxuNTS1dbDKsRFSX46wFavJzN2pxsFVKyLw34nm9wKFgSWot5rqGq48jzPkfa2Qg5mdjL2",
  "key12": "57HPfSk4vPT4sk885MTSAgj1FiX1pFevF6C2Q443EWibrSjbd2tvTQeZMdAWRNLsPZEKpwct6ATtBkCBtcM9TMdg",
  "key13": "575GeRTp25QfhGHYHd4NqhCjpbvCRRMgUCKV3rkMhAm4ZnDUFvaBrhZBH7gDKGTzWd5mMA2AeA32zedx9x6MDnb7",
  "key14": "2bKdx53QChLpXWgipaW3dmHWt2ABLnGMXSVEmuqvLGjuw2JeMGKXGLS69wJav6fb8a7N6bE5WFXjW1jD5sqhhxQd",
  "key15": "2dnikPAJhfY1Sp5zGoLqk4mpvapWfwe94stE2CvposK6ZUwvjyGgjbVpS6zm2vneGKTdr6HekwUhCzJD8HGaQaXQ",
  "key16": "41df3utzPq3e2ks9YxaU1fBRNm56EpusQM2PNW3SdTZjdrfx4rBw3A81AkJfrjgWRt88rCMjrHwuaBTuGeU664XE",
  "key17": "2qJxW5HMAmtziDXK8QMe9uWcpdtekxRojthx6sdLyRNdXMZZ8pf44cvRt4XDbXu1Y8n3BzXoBNi1C4G5rnNdCsrj",
  "key18": "3Kf9JEPseS7vdowDvpgULnSTzWzdpsgXmr8UPNuunuZNi26V67JmR1evhGWpFHG1qRu4nusCWDzv53RpJbKTQYas",
  "key19": "38yBr25K9uZVk7XtwaKeeBEzuSEVfzuS7YxWX1t7FBqHpgpP32QqqwzgRXwiBGq1FUzd69tNXzPNgoDaodjYz8Ut",
  "key20": "53uohWLs1XLNH18MzypGSrEFSxyMSPtowNv16VzCMs4dygDjewwvsADFzoRiDEyiaM2UKMJKTzo38piNsrJTictq",
  "key21": "5QhYuhDpmujTYossYx9m4MkZ9PS9P16yt7hQsVXPve44HYEqHBuKWEqj3U29MBk15FMqCqgoVcAuLNbDBNymT71t",
  "key22": "2sqzDLeFguU3CTF5u2vNJk6gPXjUzk2EbCKPAHUUGNBeYiNnE4qhMoSxWpnZAMXbENncq2uMJiBXLjen6nn1WK74",
  "key23": "4CRuCz5ckUrKon2TNqwHs8c4B5GCKkCpqHJjqFuG5bt3aHWVreXwfJrT25MY4p2y8eZ7Z2ogZ7AoQ5AxWBJR91ms",
  "key24": "4jM2fD4uWEWyCjurToGY5SYQeTbVMUwSKsTkBaxvWCdcjxGaY21w8zw8k883y8Z5FPJTLCabh71ucRakztL8QNvP",
  "key25": "3nTdxysSxVqX62ew5vpAyxwaUDyouCKvsRHXTQzvSB9bXLaxYXYAwvgz39hDBKHp6vq1bEyurfakzmQCBU6rDd9v",
  "key26": "2xzSkWuwSWugvXmuwAGwChQMTvo7acVHtY4Siur8jjwF3gKAMaDJFm7quyEhaZ9NcsQBtePrApB4T8vv4CrYmL9F",
  "key27": "5fe9u61WchZapY81swAuJsvA3WdN4xu558aK3A7ELUL33NL1rszRUS9SuWyQD3TnfaCyfAJvGsHcGGmJ2ijzJwCi",
  "key28": "66b3d5dgnLoLEEL34My1GD3GQ8x5cm1kc2R2PYi4f5XJ6TC9XxHnn5J1jj83JspgbLQrMvkSTysZ9ksqabNMd8qS",
  "key29": "47cUmZUyEkejyjLAiUuURswBQev481kdNuGQczgrMwhur1C5ptER3YfkakQUFhsfcGg4bJyww84EZraKamYH24D2"
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
