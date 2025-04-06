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
    "4nC2iJ65tg6wmkusjZv5WUrM1wCz79q5H1i872DcomAVji7YJXuPXLTiWXrFyyMTyTF2UiqqRhMMnBWtn7hXN8xg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PtqkNehymtWXThRnGhTebWGAbEpkn4fJoBsrkjXu64f9doBCR7iFeqYn19BAnT6iKpd8Bywi3tEaufAHsswfFR9",
  "key1": "2nJ1rpjH5JsHFMK5hw7SW8LMS5tbCTxGLnQ8A9RyxPGK7N17ZEaq2LhgcgjPb3hLndB8GfJpqVTt8d31VgKGeiAx",
  "key2": "3P6KvEFuuEoQBoWxeynoxVuLMYyrsCUiarvYk7P7AeL3reGYV2souLqnUrMN9czNaDyCQwnQZTBE81VJfSxfSQkr",
  "key3": "e3Pc7N17CE8xYiPEYzYJAZYhHoVt9T4WECMRUNdYXRv9yzcKJd8ef8P2TxayQih87hTpjprpE5EvXJ5LXxAaGsL",
  "key4": "3T37VqHWjxfLSVRgQ8qNSwr3utHr91TzdaASiY8FFbQuFzcn7Kzz1fpmkniQ8d69chX1kXttbBi9ywJQX2vRE5d",
  "key5": "Bf4funXD5bkTpJDfnexxe4DYcr9GSA4uJ141hvYa3MMZMZhNFL7cUqT6j2z8XswdkKLkdeFG9Mz4j5sSUrMVMoi",
  "key6": "5Z1dSpF15FJ47sp6ATAUjSqnnxQYjSLkS5y8n8DYCjUe1pqPyZwcidTxmWx8kVrMRowmjijwG5QxW4cX8CtsEx1n",
  "key7": "2m3p5CqZLGtpaNkLXtZXc7pDgBrBA6mz6s5LG5D3F1uN3YAiGZjNCbNzebELeuzbyhTZjuqBAHUki6nX3Za1Qmu1",
  "key8": "38qtU9GYZf3as96kV5EwquvjsLTwrVKnWuDgst6gf4g9ExPzd4cUGGU3npkGZRa8qMrxEGRxcbkXLhU2pgj1tVki",
  "key9": "sJj2psFNrQ99wZSgfgrQr6v7DpetjRrGbeoafYEAaCggVd5DXjk7tVUp5iBoU8zALvqZaeVs6mWXvwW372t1X1x",
  "key10": "4qa9k36WmTxdw4eost4jYJrSkbHZmgsQwFgPCQeBD3G44XyPMjs2eDoyk3QHL329663PpzhbU8mCps2EEsxThufA",
  "key11": "Mv72hAhv1mfULakEmzSfV3w1xCW7CHxRE6RjB7dmFvRzebhv2DeuP1CWm8QYwR9ETzbhPv2F13TDqCXERed7nFq",
  "key12": "2Api4mdnTAHhYCszo8MtkKbrmUmAXfuaCMNAJTbUw5LQ1PCFV1XQ2dvkdWvWYA7CJGHRn8BsWDVCUs3dVmGnm1L",
  "key13": "3we1wYfz2eyFjEPLK19czNZbhrfahNHi3Yu1dTrQHNBroqUZ1g49CEE61zdjhMJJdRvs5yRQFG9TEzHKhXQuZSeZ",
  "key14": "47T94EJTjTUnw3QyvBaSxeTg2TRzqzJEW91TFsn7qhK8AW9VxVDNto9nqjLYBigf8MpUqouS9xvtto24xHrKD4Yh",
  "key15": "5YoncKwLsLTs9BBd4XZgErfxrnBCSde2usgEjn8kCBeJJgsBRb1sucW2HP2kGtHB1LA5BDaEhBoVJM96f9nir17Z",
  "key16": "5SGLgknzvsoCygKTDU7qodPNN9hkdTJKbTY6XJYoizkDNMKfXkzixT7WarU5VYV7tzUUAoedzMshnyt1DosWEwmv",
  "key17": "3C2Z3DEUJS3RM1S1WaoVw6QRnZZJQYQGf4i5TTjC8vRhWTMwKgCqFxdAxM82kvwVES4imS2jvRfma11G3PxAJGWJ",
  "key18": "31HRTQkRAuteJk1Yx3N35vJ9AEjExhNd75akArwZoJcnWgAaow3fmvphtsJRysrr8w8tc2HN89h1Y9UstDTn1MRJ",
  "key19": "5DwwbwE5yLnPcQNssivGBNfS2zYJoPXSwGs4qgd8HHoTkzcuSs4bmosDvRYmxPuYF1PhS2KY1VbAyUTwQ2QoDAAP",
  "key20": "EC6v4VPBfJ9pvj7hGvByEWLXNGcD4yFjA8WCxafWw6b8cM9UWNXXknSxEfiDg7co3PDtSevZAnij3mBGHYuKZ6U",
  "key21": "QJcF3YfHW8WUahALfGP9nouQt31QN25GVe9u56UztfoVUksvrZ4XwMwT7qf1Y3zPDQ3jMPR9PUeBDNY3tLxY527",
  "key22": "4UB8SZmsfQDQgfUakA7h8R6L6qVtcp1XmoSaEMgkGTQivLkJbr6GCzhz566EmCYgd9WtWscJorjpAEPCeyyyvfwh",
  "key23": "59Kaxd38qkSrAdUeVFfUSBGATBQVkWpPv4gXvrAdoVVuFuejDFuEEfz4qCjToNgTZ7Ck5uYjLQRtUhsNTxwRNiNZ",
  "key24": "3cSrcnvkNkixLy9zWNdoutVG766ZtTTZvqTcAZpdHeEvtogSSNgWJ6JGWXDNMXQfB2QUe6BYsRjGwyjMMopyfrGK",
  "key25": "41HRUqEwCmip1pJGNpm6v65z3wy6KC1QcCQJTCjMYWpBvCgesdGN4mgLmAZBHT16ZxeAhLpghN4dFbpWccpxEq8t",
  "key26": "2GKaBuDSB5bJsYCwkanTgoy8k7wu17dtt9eXkLVcT4MWShFZqfYQVdMpjv9MMrQFuEKHkiA9fCsF9eks7keRtquG",
  "key27": "4kzWYfqQ7uoMn7f49UmjAgZPQdBWjo2B3BbMMYxsUktdFizXwQLyLHrXYdoVL1YatVP6WBQamJFKv8VB3KkNRi7S",
  "key28": "26S5uzJeLNyNHLMz8bYqGwQ6juHqVFm5w8yVdk5mbYF124eyD61yYH89Hc7b5Vd8tkTUxJvLo4PRbaPiX5Afq2Hm",
  "key29": "3dNkVw4SHgm8v14vdaUUcnaXy37PBcMaDphUXUxjdN2ky17N54c8WgQT8sMAKsBYknFVrhg9NfJ7VDEE7dbEkv5Y",
  "key30": "3KPPGRaoRnaYd7DwvzW9LWpF4Q3vznsitSSBMjJKGoK7KcyTjyHyrx7HxHHDwM12YX9T6bnEhhGpfD2RbXzhPsQ6",
  "key31": "LUKNaRkKNVG7cycnbLtC3JgmKKGgdFKS6ENxGsnzCthDGHAiUNZgEpWG7SqJERyb1UZXNDpsH2jQHuNG9JtDHGv",
  "key32": "2uGxv86u1Bc5KmQ4628sfmMRjPjPophuhhPoFo4JRJqG4UDzegNLkMHvpBNJ3FTh3Ve4G5rgNExGNoWkN8iK72sq",
  "key33": "4JRiJqrhv2L5HPdUviDSECmYrNazPdnv16ocKTf7r9rMhwYMnGuLvXrbsd9JmqevWM3QtzM2mugjmNK5qbqjVESJ",
  "key34": "AezdNCiKLMp2odahCybLBKsqiatCTjT2Cih3FSs2WryD9dgaDywMgESAw3nFqCCvY8yVhczJysmSSkbP5JNAX9W",
  "key35": "45WFNV9VsN7cxRBc5qJkNCCc6QRN4TV62oAaDePtdv4nCqJ8riyw4tGjoCFY2pr1j5RdEVVv2gKUf7bKmcucZwJk",
  "key36": "4BqE59uBcnyH9TacKL9pDxKP2Y9gXcTCMV2aZo1oBkTvsCfAD4NPUtPHS1X7tuUuuYgZNErhAWJcfpgkmLumj3CG",
  "key37": "4QnBzFXDwkUmXFtxcnz5iMTHNqjQnibqMEjj8WSrxasf1GRYr46cY6bMeeyySQxUgw8r1VSG22yr3ohWufCCVziE",
  "key38": "5zo3HRVaWR4G7LcQ8q5iLW1XAvdcV6N18nyZ1ZCCdW5ZRKmtW8M4LN78b9Qyc4r9XgNvDAoWto7VvUhjuuKkJfKJ",
  "key39": "4AAnAcAjZjgaNDX8yzR8wAuwie1dfUdB3Ytj2mVoZ6RH8MiXTCPENhHCk2RBchyRsqZUwtHeHyYuzzpf4HcsTgqi",
  "key40": "3x1sxmtZAAJZhVvk4BCfR9UMZ1CYpitQFwm77NEATEz8YYawPPSPVVFn18KJFki25oo42JQdmaUPG4NmbG2V8Vyi",
  "key41": "5L6i4beNmQ293p4TwrcvtSKHYP2Yv2NyijUC5dXHytytrT8cA84GqqnVX8Eam9Vrg6iPa1W3b3u42h7YFeM86h39",
  "key42": "22DppEGJjeN7UTVUfswJuvgZXMedhbJcmfHUK24VxeCZxcS3MZPSaZriM7cUotNMmpnZsqgFeV1Fs6wHRVsSsCh2",
  "key43": "3MrEYWhEqAb3DsPmszm3mG2yY7zLsBd9GcNEYEagmxFhrbZ7huBWigScxMGdAsk5VzKMpkd5eY3UgF1C2CUfJiR6",
  "key44": "4b93EkitFRqpBTipDhquSHXy5JtZwmw6MWAW8a2CwAVX7kMpwRaYAyw7F7mJsUd7CZuwz766TL384SuRhf4q4w5T",
  "key45": "27YXKQtDB4x3CDDEP4av5GbPhbvuvkUaN1inzsRS3xcTVYign3Zoxsjrg3SeP2pLqAi5P2jAvidRFF6PLv5y46MB"
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
