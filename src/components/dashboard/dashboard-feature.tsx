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
    "gHpE4Yv7Nq6SgFZCLxaNzoszVM2r5e9df75jiYPsocAAvMHdXFY5gwRow4yD8BRqoaefzeh8Pn8ChAj7WkbsbiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3umVYqPqb67HWW2sFoM7p5AEWPijXSFRFy7wxzKAb7ACfUhSzJ2t3Xt2zguZfaQYVtAr4QmPHfsBmC1ksJDaysox",
  "key1": "5c5MFDR8WqCU2ST1QWh7xWza2nPMXBew69xoyZ5rQtsmuSFeEmnzqozFkfRT5yNduvCkW6miG1XmraHdNCU52yAU",
  "key2": "5vSvNCqaUxa82jBvnDiFWiLHxtbDXmMvbRWnNaZamNW6t7q36wD6Jc5jHsESpxBU1hNPwb5beqCjoWUxFYUgdKmf",
  "key3": "MM9RFFUEqdi5w4MBaNMG9hGXMk9A58gUuzcEuqEsQmz9jrAzkVhZLKFwWpHpt3CzJoDqChqhwUZF14tytExz57F",
  "key4": "4kbwZN8iBjT1hnHNTqF8HcqBE2k3M82bjiCfEMyzH5MVBM1wgQ6kNyAmaYSAsc7zsnh68YNwyar9SSRc5Y4XrqaQ",
  "key5": "2Y1FgbkMVRPXZQVkpWdsp9JRMHPy2WVkjexHK8YSab2jhcvWNfJoaGZPSZsmiAuwh1TykCRbJxtTynBk1xQKJjeE",
  "key6": "4uoBrm9ytXTm1RqCAFAhgMauQEQfsuiwqZGUHEobg2UxLX5z4FimnC39f8uWPnWaAmiGgeE3nCfsjvZnTSjuTqvL",
  "key7": "63hkMNyUkLwfHwqX9qkWrZsovx43EC1JTDCBuEUsmANpBMdWY3nGFNsR65vyja5gPohZftF1GW7vsVPixG4pfwdJ",
  "key8": "4RSAbJUGPymxFFRBMArwrPzg7zkKGYFpTHZ1XegfXeU764xr4WjDCNoUduY5w4a2u4TNTdkc54sBjSukNQNuwuJA",
  "key9": "4mnbhGBi6sanJjd3pcCLHkExWPxAJcAHxVnvutetoE6NWTYEaNmDQ7vJWUuZZARJ5B41SUMbjGmSxuYJZWvoComJ",
  "key10": "2PUzShcha2anaRJYUZiKsDeegy4ABT7mbDDrkFmGhYC5RhpLBqLFZT7fC214DUtdH317RFYVy5ShxYjsQ3WmRM2j",
  "key11": "4Dk8W8paBc9KjhXSChoiNd8DBciQ6Poo1W6U4GRKBtwLaooCv5e2G7HcKLm4b252ZbgkfGgW28GnZ5EaNMghiXW4",
  "key12": "65MKUfVaP8VLV33Qb6YuHsJPfcFMgJoAKPKDqWcFtKjRwTQAdGW8LF5aYH2AoxCENprXA3Yzmzk9gLyXBxDPvi64",
  "key13": "35Kegiq8qncRyMNfFGuAt7G7uJ3uuxdrcpZcdGAUfGptzUmFZWgdMt3fhpgnUMb4ekj7J3c7gcc19Nnys8zEJoAE",
  "key14": "2LCwtqyHmCBMs7K3mxgPxx5F29aFBjPuy3yJzP2JsSuLgCxv8miWKtAuBEjhvrJspBUFJXYUf9hi9fYdULEeaXRC",
  "key15": "z8HdcFmD1dfDtPLUTADom6qND5abj5dVsN3ypSZ294GmyrsfGv3VA6pVbHMjF4uefivgcU25itEmKD9kVNpQBp6",
  "key16": "5iD5oZKVKVjRduw2PZFFSVEPjRiDnLDntyysqA3ZRn4EdinX7LuDQB7Ru6rPDVUBmwUs1JAbQXYr5ee747Q3uQuF",
  "key17": "2oVnteJwL2Ygd7kCPytyWA8rJA2bqsdgbpxV9weMupJuD5AjDbuQFFJUuXcRLg1SZcV6e18RgYdJGLkz4w7M318c",
  "key18": "2qh7fF7rto3oQykmcrP7We5KNh9e7BN59BBDchXeY1h9x4ym6tp7YHXG3jg6vgj5kdBhCzK3uaZf9yBpeT3CDBfU",
  "key19": "26AFLaLxhvHCGzRKwJjFczzPzaVp7iavhpyYZoN2fY2ogBbKndcF78Ztv3Ui2fdnRUJB44YcWBJkwiPyAow2xMxY",
  "key20": "QSb9u34WuXPEkwHGeWM3FZghm3DKNCvXafNx7WrngY3agM7b6AgC7dNhfAcDMkPScr2GbV1vuQN1E86syJ9rAur",
  "key21": "2ooEwxhr4gxgfDC6nzHwKsBUbrPeW4jFFh4EpRWyzFdyqbJbWUK2wpXuSn9p3SbiRKQgtqt55orP6Z7LPV8Hus3a",
  "key22": "287G6KXiN4sc2NFusTtsDyQoavWECSMRkPFHEEdD7NVXpLRid6amfyfoDc4oAGmY1vGEz47sHoV4Mh2zicraES3M",
  "key23": "34srFC2bDz8uxx8V2cu89wm1MFnvzRo7WdRmyo8onqXevvBE64TdYymmy99G4GiMjak8er5LiEFKB14afULM1pMG",
  "key24": "2hBchw9N6emX1TCjjgFk3BrCwMfFemBHLXiKSpRVqp1MLAqEsAnjeV7rnRQFntEs1ZCWyKb5zUE3bmMpVAvp9q2t",
  "key25": "5xVMbic8xV4SnWcgp7gpAvwtTTuqMhmEm37B7Y2xSXWmFJ4QB2UfxC1yGx168kWpsrwrLhV9jFunWYztY6aAbt5L",
  "key26": "5J7NKaeV5HLmXw3hM8MyeJKSDwTWhELADNmoiTKuQG8C9vNPxFXLLV7iTPQhmRMaesPy5Tn5BEXV4Y21XRwkF79o",
  "key27": "zF6S7MtzwM4y261PR2mbWoqo78JMPaqTSwuiui5U4ZPZtpS8wuCWkKnWRQGzKVbzb3qH41ctggFNcbXdcNhuL7Q",
  "key28": "4LDsj92WsuYR1G4iQY4CbANPcYJ6xD8jqExS1oek913PRZAjGmKDSCtFcisboHAKxTkQGvVHh4DdS7edt2y35PdU",
  "key29": "3acspqgM4Jpr45TNgQVyjpqbTKUoLEBSU6NhgaKru74joNQqDDwgbBKMSospGKJKF7YBzDDVbj3G3c5LGSxs7H9j",
  "key30": "5ja8J2iRxeNsk8SKpjMt5drQ7BM1iZqstLbYJ5MSp51fMrQqFW7JWpPmsWcUzhAa1vZC1qH6hukWPcViiphfdcN8",
  "key31": "4NqavzAFZSZmfmrDfGcvrUsUWCBVwziLNePJCsvV2qe1j2KHjTaKGCrLrSkenKGpZUxohKQhKJm1TCbCYoRQJrv3",
  "key32": "2HjbLci2qRSMzBzvfqWe8S2eXcdoMKkxo7zNR9Ez2rwsosurcpBrKFXvCZXxhDNTrQtqWEXvV3m8i97Cm7VbRdLC",
  "key33": "41bq7mweLuG7JVgvAScJfSLvmHZKrKPg38oZCqHEBmCEBQb2BAxq68QDoutRSYB1kXpmJZruaPHqHReftRKdspoD",
  "key34": "4niLQ1GsWruuLcdzNhnqz9XfcV6rgNVvC5YyzJBK6AX7WGQuLGDNMZqzxwXDUVi2dpG6M3A9vjhwn6iiuvFUGtJv"
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
