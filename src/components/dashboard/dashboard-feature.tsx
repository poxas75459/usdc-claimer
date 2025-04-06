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
    "2t11UNYwP71xeGtufRVX9TBGE94pMCp2gSNkKaTrHW5YgQFvZrWEPe6Jj9G3j7khuwGahbwpQnaMWE3taoGurpSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33z56s6GVWQaRBsm5DriPrcJvsLDrJWZCazKxeud28bCgGDXsSViSHLErB2ku1mX4D4mUaiifXYWpmJJUywj6PSh",
  "key1": "2BrHSo2qmqsS6Uscom1vE7A8Q2QqqMXWqtR6hisC6ycWMtqneizuTKkejrMmbKvBj2dYoJF8axLQ2R71FKuRWhyb",
  "key2": "5nrTcf4pj5r7C1KSTbRdEcetS5ftKCQRWvY8hVmdPiGKDtjiHdxQY5yHTiV2U5Zcvg7XvVR1SDhrZavdEsDjY18c",
  "key3": "2EJjUEziGnDxTtyM2WzSNQo5Way7N2xeQdtUWqqZwpNM5KAaY2fkzk7yRoG6zdud3zL791hbzrkGreNWvhS1HATW",
  "key4": "2SEXWN9AbiH8nADGPXuUR7LstEo2juwg8FxRJRgunHEJSySJ2gaXzdT4i2TS1r6ykb98vtmP9KgtEBBVFHFmE6ok",
  "key5": "fqVNA2bdtcSdKAtq8Tkr9Qzc9HLCQTEcwrSgqspLNPXkwL8eddM7LqJ9TtsEyrJnNQLNcXFxQ2oWWinWjLB9Qcv",
  "key6": "3uaoGVhfiqNyaKwjJnrjmAUVE3tcDCcnC7aVFpgWr3ghMbq7ZNP7uvNU5QtRhPDYASpyCe38rtJ616z499amJqu4",
  "key7": "5sF1mHq5DiAA4ju8dEVWyRh1XFgSKhktzMDwSgS6gqgxmKstNDWDSsyiL9vib3T7WE4RTu854LJ4gHiGpELei5kJ",
  "key8": "49g9WzaBbsbKUqut9cWYhkDajU9n4Rd9LRauhWSEGrVN3j81EHnvypRqccvifkouM4erJpDmdw5QQKtdvVh5Q7Bb",
  "key9": "3zqKU3EKHFBcjejoQv59RNzVr7CbTA8EwGNaJ3dDBqJUhaQdB91L54CHMthQ9GNSKpgMHESq3ASyUgN1MmRNT64m",
  "key10": "DWR3dKpMvTHJiNaUc2QrZGMXH9y7nvTSFAtUENpmsvXt55svPmb81EN9XbW2FtTBW77NwcENKuyVeWdDPUsKsYA",
  "key11": "5G5wUmK63hEUnh3RWoyQWyaHGyHpHAwXDijfHLB7da9LfCREAzGUXjBwmdpECVCQ7bF9tECWpEVYv2Z2tCjydeVy",
  "key12": "3jt4dFC1mbShV7poLgyKnk5q9DYpY5nKuG5m3LUqwkU3bAiZXKAhQKHfDfS8QQqwvWUk2rYE4BbitR9KTryV5qD8",
  "key13": "1sEnfrcVKAcWoGsiCWoiYwc4rkHDkuyU8tmQvwfEEq86TWghmYqZYUf5DPrttazAMvchXmLgbyGfxiNhnbZNPeV",
  "key14": "2vJ3tSN8YMHgKMd8i4DTdVykTdtQrHDFHrvs84V4ia1A7hjtGbgRZ8ui1zH8pY5878aNJ8gxmSbyd3QCwHfkigyG",
  "key15": "2QFneMjW2ipzYdEBs6XB1TC5Ea7PRE5ZTzHGfiVFZ3yjc8VGU2CW8JEoje2yrMnYY76oxW1KNnHewVg7zhiQocTG",
  "key16": "3gggTjrwizQjvf8Vnw8aWBd5ZHh6CqhSyuoxkRucKorVHr9e1nC3C7asQuVnc8qJ1jFaaJ9JRgg3iBkJ9Uq69Kpm",
  "key17": "5Xj8VkJKJayNVVzuevrj6LNWT1pfbViLuRyr58XeLuCJNhuMhf4FcZFH2FkGhVqkvj3kW5rSWZXWZ7BoYZNihtgF",
  "key18": "3fMB82AytmXoqk1v7HREPcp1Kvhy37N2d4uPZAuzJizPQhiYsCzjqW6Y8dcWVSWRHiqt9DG7dYnnyK7H63n5kwVE",
  "key19": "2asuZ9CawXv9JEW2dgTg7mSjFSpm2MD98M1oj3v9BG67hC32jhFBbe12Zgjx9o86i9UvhTByyPG3Q4vrAJZDwdjV",
  "key20": "5nS7JUdgyVctjyxN7rEyYNTGN5SA6H3fKej2qdkYNEEJy2B56FREz51Pzm6wreY59T9AEvfxHQqPAEwMS6BYTsDr",
  "key21": "q7nEg6XxFzwbtg9MmhwGfKCrh81QVbD8WfLC4t7Z4HA4aN9Smn27rhSEsLxS6j74U9277XsiPmuSKqAfiFts7aF",
  "key22": "2LmuDmUzr45W9cFxfoGEpgJeJzuaVjKBmjpE7MmUm1SYcDq5iBwvyVcpfSHWnhVwjFmQYPPqC3CsSmKnmvipk2ns",
  "key23": "3esZDdybrBws4A87qzrvQtWzpXEU6fYPgQjBi7qsTq8uGxKRMkCMuDVcot7EGrBMmaPFwyLuLnnN8ziGF2XqnJ4X",
  "key24": "4mZiJKAFvv1K63KKHgVhmLd1mnW2VieEqRr9GS5opSXgQzd7dCoGyBFUyxcMkiHcfJNirCHSVs6SWgeN4ajVoULE"
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
