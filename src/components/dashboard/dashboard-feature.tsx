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
    "5YGWtK8t5F8rsiEZEgHjTGPNBzM4pRu3wBRVtqGWxyaSjCLZVdAEewYDsMseQpVinQqSko6WoVk4jHaX3okdRmtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s1bFphxiumVNUd4ZLBXVSg9B9JFTLoYXBcTcv63gN2cqCHCSc9vgQcxhTxvSYnGc9EwdtLK7NAzH353ZQNR9ou2",
  "key1": "3g1gktoPrkE3AT9wXzVdaDPCdWdZvtVUYRZY1zy1xFtVVkbyXKyUerPcDziAizW88vE7R7qUKGEQfTL5T3H2MN9M",
  "key2": "DrmqggireiwnFXx6AKi31S75SHfb3J5XL74cLt7ABu3CYowFFJtJiNZemj6mSb8GcfGBJsXv1DcBoBqMruFD8ym",
  "key3": "2Z8w5QfcTDhpZWjDhy6rKUctWsAozqmm4ahteLi1hHFK6iXKHEt6HjfsH6XhZGjrWpFfJ4qKGtdZy8gaf1DeEGEf",
  "key4": "dFFC1ZcQe3BegLmiBKaFbwQ96fVdRc4fH834sSGog2tXNjCzFT1ByQ3UBv4Yq8BpU3Z5bNPzDxaTaMeeKcJkhbk",
  "key5": "35WqPQoK9pUADVH87bBu7XB2TDAuukqpdCRvmxvxWaFHqZWdKPr35x2NsQf39Pjf5GiH1feriPVjYynVeZ9oNVjc",
  "key6": "2uEkYzVCrBo9wRJEx4n38m8mhDJbnVL6kKja8hyimA8DbsQVTgaj5SyczxNNgowPhrQb8wLY8ynHxxamfj4Yqxzi",
  "key7": "pCQ1wxbbaVvW1AB3WeA4qSeRiioaVqE4aR5KyexDk647cWoeEwAvGx17SAYYunb5vQYd9mT8mJggRrivkskUcoZ",
  "key8": "4zcBH4sEUXpY5WoiQHYVsKMDaP6htvdvszmZYTPP9BJ4s2aYhdpKwuD6rCvBaQ5KKtq7BMYi6nMqvxNyRBdbzvPb",
  "key9": "5r83GHkTjBhmrip6pzBzkeTk1seatapfGEJWpngmnarRNJPMAJUDqkNuccK5YfQSirkDnJpGJCKfKdfnumuzHVoG",
  "key10": "3RaqpBNY5EeqqTQWqjh3XNDRzJMLz15BHVnic7pHMsMPsFHL8aQewe6ZZX4PPKUMQ3j76GBQtYMGUZKkXd7zDR5R",
  "key11": "47Rae2AbJBpyiRyisbty7nL13uMDmTE3wdYcpGhqo9cUxzQweyc9c6QG53Q2vUp5iDb4uTbERYYtoBpsdNpvrrWT",
  "key12": "2oQSq4GtUdrDBqBSWaQuCLjkTKj2bF6txdFK9wot5PyJ61HVTpQXFWFJNVMG9vnuHh8tZNUfoPpmWB3Y7jYJLP3K",
  "key13": "LUiPvqQH8rgbfGF8aK1XropbmwJTnH2XAgW4EAfXLsUmgxDiSdxDB7ERaw7SZEVv5mweWe29XE8GaB3p2XrPasV",
  "key14": "4PxZnkV6BwmtXSngkE4sxgw44H9z2g7eSzJmqcFKXSJXCQVSFXca9FgH85AfaRXQfA2ByLWfcj9F6DJMRrdFXkME",
  "key15": "2dfeW2dzhfpJ8H4H4dHaT3SjnFPXWh59bDbtdmxqZax8M1JNoGyhpgjaa1JrsSLzhjo5wp3e5AVuKTuSYuCgfc4N",
  "key16": "2go15tmpdRoiXkAQKRQb9cJtBy7n7VpTB4aJt8u1Se8vw2jBLSuFqNfTzNMczV78C5EqrxUTcAqMDdbG1mpDPuAJ",
  "key17": "32UFo3Go3gHPSE5cRd4TtJ9qgwUfkzi3KmshpN9ayTvNd8VseTVvTxda7j8jpbftuPSTRoyTMLHDxhAfDZiCsg36",
  "key18": "5xKHBMMM91SmYxeM7PYbUuKCjEQYKkpSxTbsJnsfp6EdW53fkhRjSobcG5RgKvqXx7AbKWdXQCCtU33xb5JDERD7",
  "key19": "4uinVX6wd5E42XQo49gotbkpxL7AP1nee8bTMWngpM38YZLVXy1R9dH2hh6X4oeLMxRvJm5CVFg7fj2EmgDYk1X7",
  "key20": "zHBLAeQotdtqfJtymSMvCZVvLZcGJjS5piehgNBz3BWKoqWZbwqBoNGimGCB2JUUqNe6EnnWubmFbYbgmPLxepM",
  "key21": "25oKjbCkQ7qHtE9H8JX7SyMHQW55ii2t32M78K4F98pggZyStvR52XCmcKVR5WUyuWUoaW4ok617YmHc9TAiMos4",
  "key22": "WS2ZvvbP3s3EmpLQL6qTZFUfYPYaLfyfFgH2jPrmLY8e6aHQarBXwdHPJvZMys7FQ9bNRaWi6J9cFcf1beqUZL8",
  "key23": "EXZD6ZkYnCP9aQToKw9yLHarqFXV4BwP7KDLHnTi8JnaTmomTK9UiQ86XVRiT7LAWx3ainxGhWxeeGoHwUPpF84",
  "key24": "5obZ5E6Yfzeu7gHspFwk19FNTdqaw7GPDgvtpNF6WGcTJMpU54XoDG5abui18mQJtekAAWpr9mXAALjgkZNSTPPP",
  "key25": "3EHodD9kj7NuXTUzegGuFdn4kUibzzCDgwi8hfzf32XdKH27nmRHvmhjdVkuLxcMLSSEsKmNRGnsSTyQg2rZzbAJ",
  "key26": "4NpF7tkTVvhraZBx1MDNZJgY6REiymHy1i5jR5V6H4cjDaidGyoA5D4HbXPfkMkJ4Ji2Uq8W2uYdA9EqKRKAfzoB",
  "key27": "5kRUtYQcpKRYFvHp9YGHmP7soQcBn11cUHEL8evf2nivyyYtjgAbHPqCRzxBS97GnxHhmbRV84eKzV3UTBeroKMX",
  "key28": "4oLkok5bu4qpD65hSeCch6njgjtUgDBLV7d3VYyqGEfr2e8Cuz2uEjdENeooTcSzBdL1ixSyxrF58bn23wyRgmej",
  "key29": "41U9qP4jsdUXYnvMxLnkactHArbiTMYHcmexDte73ekHpttz6QrPSd2XvuxXFd99xpgRcnbAGBNcX2eCTcprR5CD",
  "key30": "4jYnAJ3CByErnw3gm9zFTCsj4ztNLbYqSUHoDfbijXtHxpxLpeJzaLhKq11v4NiK5ZTUbvzdhSJ4KNFFLuMiuBUA",
  "key31": "4gdURuy7n57egYsaV87s7rDS8bUq59wwZ6uaKrirJbagiT1PJ119QVuRxe2oBFruXWYF8MCNcQwPr9eH1YPCoNM3",
  "key32": "4P5VR8afo6WagjPvuk1goh4rn29R1Up2vRqKYQccBmzdZ86rZ34htWJcGhyzufZ4HLs3Av7BBxCCzv3w6XB8dxoJ",
  "key33": "5gKG7YLqbAg7NHgzSb7c4xwrSMU66eTWGMokVdT7UEzCTT8vNDQpJm2VCafQefPJY4xUb3RcVwRTUaQty3QR3Sc4",
  "key34": "2UmP5DAun6Kd3visaLnpVAbZxCKhfskhw5wWnd1vLauzFFjbXs7MXXxuTvgeo675accWbXoGtwHt6EQb4e4i4rrJ",
  "key35": "3yux9p3qm8URe6uGpjCMYEmbCmRrUtJhjadUwiYmDRNpYhiYpQpqsgkANqgpozmBJrRXXAncZUz56thftvqzKqE1",
  "key36": "2rBHfi52FmToMmxW8vAK9L1t2MJ7W6z2QuFHT8hRem4CPhRNtGjLEaHz5ShpceLqMqUdyQYUaKkaygZQqRZqig51",
  "key37": "3d6FrafkjF2AhCypnk5UWWg1FQLy6HWcYTWdM61QNfWjaPDFKLKLQUooMwEjQBXwWQKprF3Qi8wf2XU3Gzz3JNzg",
  "key38": "3WopEtPGYkEn8KrYKh6xGUnJJ5Yw1EbquAsDcvGfnCmCRcvvXuPutyM5QcjNZ8ivJq7esrs2Yopd1qbx2zAWzJc8",
  "key39": "5qWBVG35oroprjHNGZfbignRT5WzrNWb8zotbQg2SCW767Evr67rcmszWAyjEAgPwPrzEcit3VuXMsy9ErwpYNYm",
  "key40": "2TiUZrcfKhXaEZha5AKaA5vU3Hd5xPvixTx29H1GFBeVLpvwBwzwS7fftNhsnr21ThT2svGk2vVRp2tct41vDANn"
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
