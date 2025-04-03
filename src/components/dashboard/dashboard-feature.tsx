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
    "3fHdoPrBK78bH8B4Y83LRiL4HPUmXfxrhio47574CFwPZgfYvmCnvqbUDzcX7uTzHhm7kaQ4PsZXMc4bFNgDTSPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hFidEoo4y9wJh58713FGVTXvumhKWaazTWXhDXS4BrkSyncZU3TUU7XgVBxetpYT5p9CG1kYoqEqz56kMAqA4rG",
  "key1": "37UwTnv7fTNFQVcUJ3QNMeBeqPCgTQb8U6SaaqcUqSVwRjeNTn32t7XmbKupZkQsgbehvchM9ayyf1xg5e3pVjnK",
  "key2": "2CXXDjPVRTH1Grywz3NgnM8qTod61Tyqy7FitEeud6UHaMswcjpkBjY8CYVEbSJXCFHoMNg1dpYQBagi7B8SfAfF",
  "key3": "P5naZd7TQe4of9tfiDbXdCVyvDSEbrpd5177UANhQnGwGuYrYtzeyAposujVYMnLaxbmXV2XB8TnowxDW1EwRa9",
  "key4": "45pPVhKBAr6osMQLVUyLhVH16wS69aGTL5VwGSc67Zokp67LmacYQthJpMBKHWPDm8zMJmT5tJFmcm5LqdUZApKG",
  "key5": "3Vch2iTUvL3pnAuDbUPNSKXzpygUn7CZsMgYcuN2d7BDLgxspGNFZEj58goeWBKGRxrXVvDSDBzwgWnJU1reRCRZ",
  "key6": "3YybJVw3XLYcgG1yFe5kkWfhb8Y6wLUKSpU5MLZzKSvDJmCdHVQugQHncFhX2j6RrkG4ryR6qPr5yMYEo6XgkgF4",
  "key7": "6NFwVahQzCT3DEAoRmQV6Ywa2us2D3BdFncjV9EFRpn9kJ4GKQvDFpRtNp1VkL6jkKALyptZZJo8M76hTmWk35R",
  "key8": "4TwcgZ5WB99KKzpND3UzccNyjcoi3fE2XYHck4Y3fP4cnmWV64EExKnUFGaaMjHHRafhJJP7VogJd2sPcH7k8Cam",
  "key9": "2uY4Hga2qMN9sY5fQHKqfwrptZEAWnZNNWPFj8yZxcZJSoUrubLo8q7g1Txj8qpiar1FFq9e2vdeeVMPZRNCUX35",
  "key10": "5mfG77icrz2qoEMgR5p2PWAhZ4GLBKXhQ8JZUrCWHPta76faWJFo3hZgHQgdi433RGaeCRathrenxPsEtQ57bcoi",
  "key11": "4u5M1CJqMj3VEM5yerQ2EM4odzcKQJixqs2oxEFp3RiT16nMjQGUBucS7WW17rRSqRWPGqaBZT2oMyFmCjNAdc7V",
  "key12": "3dubCBy4JR2iXUQa8mdjGdrdbRbFsDmmd5rjDMYWDqTrCFcUGVXZP5iLds43fVhZButePazpEbT1mWj6XZhmTw1C",
  "key13": "5eLL2nnaHDbVuDGkRZATnyLi9Wyp5RCJ7WxjmDua4xVYBNAXbKfyLHtdqVCwhPRVBg4jUFBXNZQkepXcQW9g4d3j",
  "key14": "eEMgLg6aoTscK9m1NBnyqXMULcVXGan568wPV6f6XfUX9ro3WyZ9jA8miVfNKkZDKNJwUd9soodrmy71ZgmJuAr",
  "key15": "3cRRNzWgExDbuVnEqzzEZ5bainJS1KTy1ZQXZDESEzVr4ad8f2auiDfLojpDYDH8msgYwaNMQukqS32pAEPgoNxq",
  "key16": "5L4NTbJpXRQD9rvMtqMoyQ58eUfKuEk1aAJsRXJdbU8xb3JyZ1atc7BgM47jc2iQedL5y5eyWCY36Lc9DyZS1y4y",
  "key17": "4waKMHnZYULcQBCDBf9T126STdxnN2wrH7dAwrHrjSjfm2fQkypvJQ7Yo962pNikD5F35y71PMd9bjvByKG8McmN",
  "key18": "3WTiWANXJH6qBRxXetWFMkq6pAtBe8uSVAxNQm2ADEyZ92GJrkgt76wHRS3cbrDvnqbBwBcvo2ozicBy7p5ZQARZ",
  "key19": "2pmNtxttExJ751qRMfSAq1VSc7XSdPkpspUw9TNq4qMwrQqzmuJyFtXuRGsigTF1taPmDj3ao6poecURde7m7YEM",
  "key20": "2XMbyS6suDtH9fT7VW2YACQCkbZbndvNnWRyFMouj7VPBMwTKvmEz9b3mJSZmkpcwqAaKjTNE2BU6hLfCFDKZBgf",
  "key21": "3ZKMbUWUzevfFFL2a7vKijDtme31XzqTHCZWH4bvkD8U2LzrBBn21pVkPj8PKDmECU7hw2eqfdXuJvQjUGMKw7b6",
  "key22": "aBWwGU213rdjuuXw7J2eCw3TLZcEKJq97iukobpT9Vrbb4zhLpBmRnJUmqgRb2n3aYks44cCFGk5hqm7B8eNW4c",
  "key23": "ocf6yJGTT9QP7aTsAtpV4TLR64dBE7s5bTuyPFa29d9RHWg5EZzbcmBRmzRDjG2GqaHDgu8AvtqQQRWtY41zjoZ",
  "key24": "4E3VgojUY5ApU5gtGWHBM4r63qFGKzjvGWXbCNjsnA55NgTx71WBfcLKLd4g47Scx2AELUFiZiVvJzvTMLu1YLJP",
  "key25": "q2ZovoFcf6HbKtmRMVkQThQBFiDFFpEwMuDarhNg3WChpLCUhxXYoDq69cBFowghC6yWmsFTD5mBDV6SRqNGdug",
  "key26": "5eyuxnKR7tXzCaABg3EVYViCdv6EEckNWiZmLLKniLb7oezdprqeP4HeWSDZLZAHsZJe2nrxuDwvBPbR21VpAEZ4",
  "key27": "4oz6S6fPjmkCeFkRQxyu8VUJZZ5DwDarzW9gb5JXXQEp8fE7VEMiuSbVLH25UQnDRp6qhHiMLFif77PXzXdhTXXH",
  "key28": "4x76iewmwHeNxVjuY64YC8qfQiovp2JfPzvrfm8ek5jWj6cw8h8xNLvygj3rmDv45h2EKCQTAqT5SNwPwcZ6XNf5",
  "key29": "5JgZBsxMEf8Bes26FzEkaB4FKg8GPGZJKtUSPndhjFvPCXLhpCgstz3A91ng3SKJekgrFE4VP7UNbw1QaKW66VuW",
  "key30": "4z8xmXDnQYQZfXgZDwBxyJGqbzY8Btdt5XTi9BmMZNEAjh7Dk9gG3PFfaFCjizoeXZRndka7Epz5pYvZ7jz9DZmY",
  "key31": "CYRrQY31j1mXJvXzowBUBP2pGrXhaNdkG9PUAndMuZxLCEZHEMAtfz1BqcJArXkcizz3SU3ymxr5nHAwwTsAcid",
  "key32": "4k9UCGak3oD5vbnLzZLkX6ZscZ6265egiJrAjUTqREsGog5yBQintTox1w6tDhBT1PR2iHtQht2DL385R2SaPCCA",
  "key33": "2WKkKkqz3zsJDhwsYvVFZ7cjcrTgu5MFXmuaSBG2Vhpvv6rmdjBSzbBWno6VNFHunX7G2iW7re7v5xCayGgycYMV",
  "key34": "2C7rpfvGCbT5MG3BWWsVXpcPDWHYpwc88d59bqJDrq9ny8veKLnZoR9a2NVDjihjY8y4K8TDYv8Q7iDbQFL1AsFg",
  "key35": "67coPvmxzAkDEyTETQ4UCbC45xGnbc8WY7NM3jDL6FKVvgMLmZ8MnuqUDabz1bUN69cdrzvF8zikMPfPAYXFKoPb",
  "key36": "mLtLJFajW17kx1R9PBfpq67aET29Syc9bHAd7SSQiJWujjZTCm8MMhUe74S8MsNC5Ma5KNMbCtYGYWpk8Km85oJ",
  "key37": "gK7VGdni9cU6peSdToJGKHSimhEmsHBAALWaYc1VS68gZ32rBRVQUP9VyfB5Pm353C4tQswx1okKPkThunoRAAr"
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
