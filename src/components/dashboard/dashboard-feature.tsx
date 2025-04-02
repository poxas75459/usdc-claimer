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
    "5Q5EABqTSaZLPyFmQRaKk1k6bvUhNCPpAbx26YwYyPdn4mGWhH7hDXaCrho9jxfehJYDLgaoUTaxQj1LHNWmA2Ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZY449Hsyp7D1Mq1GeZaBwh1qv2QWE2JU1q7wrBU4vJ9jArdsbYdGdv2XdgTVvbq1LXaNCvgQYVxxkV5cDvrDp2",
  "key1": "2rT3m3T25R7JDRwNoqPYT8uwkuGh7Q858bZXNC92jomEwRwnhV4uvFbRWYjAXmKUG4WgYC4cSezLhLQyKtVUYLeu",
  "key2": "58hMt3wDujvdfepVuie4ixw4mELz8na25AuPfPNosQFu2AN2EcnPsUegRJaq3BqqJpVHy2RYLkZjYDwzo9kRyck",
  "key3": "2g3TvQB9UZjY6nWgSW49PnYPdF2Doi1HtzNeZmNyzDSZTSnjDcVSnU7u4R6xWBheYguGhuyATSsfc9qiqAW2WYUs",
  "key4": "MmMHcGoTArgJD3MQ3uxDgRvxkaefT9ESupcm7AUATgCT5aoaXXcUKzfNx5j3o9g3AvRJKnX1YJZ5USAWTkqW7rM",
  "key5": "2q1QRoRxMyYZEq8gopcSK51cYqciZ4PFqRXBEH1XzonN4disdKiRojsL7wumRh5NNRckyMcdc5jzm5hJkHyyxDGf",
  "key6": "2xAy5YTixKjcvzAgi4S756EzchGDnxNd9PTqVMtg8f9qmP7PgGyZF5AJVDgsuK3b18xvLTUwCkixskVYpnZTxWpJ",
  "key7": "55Q5d2GsejnZCoqGz7QWv8VUXkmLW5mWaeJEy3RAVnkJg2KN3QpyNPPoEvAUPGwdh1yovtif2sTFX6fsbByog1xa",
  "key8": "3GHM744ZxaeLkF6Bad8t4PzRxEP6JucwpM8fhCfdLBYBxoS8C85tTsjKZiDjmLr7jnz9Lu5rU2raERbsdV26ukEY",
  "key9": "4hevJoVgmURSVHnoeg3sL1fwxRFmg9xzv4tmutzKNQfpdaaUDhdGA3MhbwsFd6K5z384RUGcdc6THPBPAdwosWZ8",
  "key10": "48Y9ErWcYCqWUJNnR9yFFSKNi2yXoLJkgot9ie6a82Aqz5LNRbHBKiCE16jXFnCJLP7x214kGGVQqbyxfotue8uB",
  "key11": "GvgoMZZEFYzPdjiVmMRZR3KNSXHj9C3tueJXXHbcYrjoBaPoJcAYFucXwV5Va58knbaTQxaigTV9FQbFwJia2uS",
  "key12": "64EKXdoLvG3WWFAR6MJto73Ws1iNmRtvswzaSnmEoQmo1nGLJVu9Z4Ezi3xmh768ifGJJ1GfQX86QZbheyXN6J3d",
  "key13": "5ELZparTrCbSidBvRBHFj433mjQmKBM8pruvG73QtpZcJiQamRPt9mWFmka9TTJoRgmQPJQNLH6ZQLtC4cJEhHSr",
  "key14": "3uKmBHLt8pBhTEjCu3ehbuZYERniCqpQbzs1Tr1fB54VzEo1Y9XPggC4bN8ZmsNACKB1YvJuLWJDzyze3guM2y3i",
  "key15": "82Bp17t8PEC21nj6gKuCRCkMPNx5mGSVuXeFiTFWWt7HiC982EnqgMjAycnoCdPz9Q5ZCvfAZTXEEGV2FWrZBoG",
  "key16": "4DT1yUXHbSXaga3C8yviYisHVjegbipEa4nQ6ugAoCtmb3JQufNF7evxzRFVFxngGuSas65JasSUz7i4faf4B4Dx",
  "key17": "NhykDeEmnJqwgMbGhiQdHA4zLjXeJCdzTTNxVAgUsauyDpfn9wHZeT5oP9sJxXj2hAwtybQyAr6scVCnR3tbciU",
  "key18": "EqPF2z2xtLFKRR41ZnaAZU2NobMkFhxhTPWkvntgRcWgg5DNNF59uhmUwS3tUS9om8Gt8hkaoKZGWAkADZNhBDD",
  "key19": "2RF3kit6Pr1CYt2M9hLMqxtCUcXg74UzbZM2geGjrmEm9HHdwgRdmTK7Y8SXNoUMq8QhixTyfXtrPDryVseBqTXn",
  "key20": "2M9Vm24grgfyPQ9iiaBd2mk5GuckKXsZ4rLFA5eVUWGkcafVyVQs5btAS6AwtgibRwKMhv2cbeBSXTn3SqfHtV7r",
  "key21": "3rrVvBrM1fXzvDkk4PyBKSoMbzkk9oRgDrwah3LNGPQ6hkRkPHW4Do3FiWzVuZ7k7TLshrcgzE37NL3BH1ePHN2",
  "key22": "GWEW9em2rAfcUarYVRUusU19Q6hTUDPPykouecsUjt18M7DDeihWW57Xe2be7AH2piUxRjEubbyRACAviVaQyRz",
  "key23": "omLsNCJyJhDyXQmWr84QK8EgYVSTsaLSms7UeXAezM94SKaoNdmicCHEwTYPSoGW8iJDqHY9Rj5ipSHJZWYcyKs",
  "key24": "3BPZRXCpvKrntTjHu7mCGiJamGC8e6XLy2BWA6nvb3S9kKqnjVYgvMCft9qrX2ofDFdWbmqhfKrFKHWSTtET2Sji",
  "key25": "3DjmPca229JfiRm93sQrqKwAupPSmuGmjyxPcZ9ih1W5o68JLBYcspLgSsYqQEpdCdx7PuQVqKTsTgXF8D5hDcXR",
  "key26": "4wLpXAYyQQRDKMRrwBvgVnhBTka39LC7htSqGV3EMv5RGPdbnRfNJ2TcGp8hMXEx4ofmdJQhy159sn9YZbQY5LGr",
  "key27": "Vo6V6Fr5XYn8PtFRzFy1M1FwxdbwymUYF8LFasu8hEjbSCK86WKMMaXXP6P3Y9K4a24xcFuTYXeHkArdbm8s9ve"
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
