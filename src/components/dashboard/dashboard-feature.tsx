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
    "48gwpab5iat3sHcBd5hGaTqsVMbC95wWwt8zrgtbDpLSwuxjj2JKVinS2hRZhgCuabSPkmxrvjeENfGDCKor8bhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TWM649BUUs9a8sgkv446SDA1VTZcQeGraa2RY2BrA6xx9vxdDCE8rEfnJp1pgum5HMuSmCwco7g4xo2Gq79jzKz",
  "key1": "qNSAMRxBxD4ZgDnjbFdLm8pEsTEf1aCDpyqran5UUrV6RXaqE3rVFQnFxjwKuF5eKU2Am3qWewJdQj4R4CjwTtF",
  "key2": "4Y477EUTVDbBP79TcAG3bbTzwZnzgcgJMy4xwbEXXNHJRixaQ8HtDyfxGGXryqr3CD8WZobSG5Dbw5B6QQDW4bWu",
  "key3": "G1pvwkpcc6ge3RNj8UT3M4hKhh7kZGPywMWEmZpPoqAMHY7ks4vW2BEf2SE2L4wxKVqB2hvpKwg71J9m1gBeDi2",
  "key4": "4tUsZK4JHoT8drFL86NPKfkhfJ1qnSJjXKCZS2Nybj4LyqiPkG4LoR3kHBSoiS3hTvm7MV34xwCJJWkfHWR9M53c",
  "key5": "2PxXBdbmN8meuXYfZEqk7mL6dydNKfmTuAzQ2JykYtoYV7pabUB8vjDPMJHMDHBhSsvxV7w61aVsXuq1aeKz486W",
  "key6": "5eV45HA6EhmBWhjdyMpP1LU3gHyA7PTLSswSM4nE8uybMmyLQETfVid8CTD6AfPUBBNzhy7pz7MYXoHgGdAF4Sow",
  "key7": "akaSpJpfy64NM5NWk3CgU92G4PU4QVPaC4MnYjAqwr6cwdNz7F5kyeF5Y5Exyv3pkC4m46t736rnAqyqpCgq5Lv",
  "key8": "44QvJrEQ5rt2V6itrnZD5DnWiQD6SrGEHhb8eW24XeXvN6q7ehJMGiLbrksYnJxE57HDDD3ZfkEaj2vEHKWjWyYB",
  "key9": "5DXMs5oFoeYqiFueBiQTRrUWyifWEWH6xwQRxpYC5P2zftxBYTfsTspoYivZVRWeqN4idDaJHoWTu7khFUMkRy5n",
  "key10": "2esVUrRLpzoAhbBkRE3GPVgKt7mcEvZsm4wAyqfRii9frsUDqJbgYgdg7LbQUnuQ8e17E5wK9LFWnyUPKrtHY4Yj",
  "key11": "2E3XE7TKNiq7JcqZ6zx3sLKn7fRaYwWNHGKmk2zfMfLv26sAcK2GAZ5mz5GS3147tdifXidD4GTQ638BHkKifLNy",
  "key12": "2FyRKS26UJUB4QWGqn9hFrEWv47cTnSkxsjuFHkTCktXnuwwiGeZE9vGnSm4NLsEA7bc1sjWXYt5egSMn2UhZoup",
  "key13": "5MJ8A8Swqot6hVBkMGYCgppkxLbXkm9QWhvxpSh8G7SbSyJvprZfCFPjKcBe1YdRGkQTpd3MgXo4VHLZMyonB7tZ",
  "key14": "3M2tQzDW7moi84wC1CsxzZqaEST16L3Nf1csjrPkD4RWPeB6uwkTK8SHCNcb1M1bw4gMi3TMsSXpyq68AnL3y4fW",
  "key15": "5WDHNJXqtpAikvwPgfU1AdjKe9gp7R3cs3supTKxNNeku3xRFVUSn1TDxRmmS9GX6U1QtLsERQ39YEhmz88cbiB9",
  "key16": "3tux78RhFsLs7Knpda79zhAeREoXdm2wvnRZztcJHsdzsCV24aVvWKCM2M44VsavzSwiUF9nWPCfusxC6XpGNSct",
  "key17": "7uwJERr7C5YU6YQqSZ6Pdxyh7MpSqErzQjxnXTQ1yijPnjG8qy8VG15jc9Fccv2wD73uPY8KGUb6ap4UYXRWHRo",
  "key18": "2uG11bVqV2trU4X8RTcPqgoPkp7Cq5bTKGo85FmwC1Z8jZH4cJvizxxfoqQTLd1k1X2Bi2n1ws9WBCGDHZUtuLei",
  "key19": "3aieoKP4noLYVxYxfGXEZPsn8aKtsnLMzERrR2SxS1MDSUopq7tBqd5xk8YajfVsSdKezy8jQqBXJd8sqwKr6YJA",
  "key20": "3ZXvg5AtbPHTw248AH5SdtpqdzrXKiTYFL4iC3ztSJ72671SdTKX9t6r34tjSXC4x8eKXDMPcCoQSbdVRpX1TxmL",
  "key21": "C62G53zhjhacyWdGZbPz3KWTq4MTMT1ymZdgpQb3oouiWHBkoZc7koVdtgXAUovEtmiEdbkcsNNfUenoJTzw2gv",
  "key22": "4rpVKdTxYYP5neSkrXBau5PXMucjeTAvc91VVRDcUCvQGVCHgfuMRAiXJSE4eTek4BHZpvXa41U1JLmVBw7Yaed8",
  "key23": "4wZhFsrCUWvvHN7VNdjKRKCC5XLzzUgUeZSj4RHkT9qNkYQLyprboiwPtp2t1r46bTwFCTCRy29UeCZaKHVKvoWN",
  "key24": "3d5EKowvsBdUR2n6SZvdNk5MWQ3xUTdUteLUvwfsKQfMqz11HPqj1zxwT1pWknshW4eFDmZ5eeop94pQpVko1ywb",
  "key25": "2fM1xFtVdvC8zfuAZzqRxfgg1JuFBigDw5Ky6FvzGCPY5sJTuVBhhPfQiB1rxsTG6x8SFJnfd3kLWgdweXGdzW4w",
  "key26": "2GtwLdVNzbqv3fXBrErTivCkRLyCoRVBBKbJYA4czDJ9554o3aMz4DaRSkLakZqvCf5GiUtNMYT89xosQXaspkQ5",
  "key27": "55WwhGA6mysc57kWHTRAMsPv1JGwsqdEW9TD55H4cii7T4BX6UbuLqbNVgwLYhTBuCQmpbLR6Ehur2Up18vFBSKC",
  "key28": "5BcTnwPb2oFW5Vpf2yckyMyEXiB9YZDQm4YYR8qVnx59Ed7fBCrKBVUhv6JaELUM5ZT97uFLkMVuYekzhKwDPhTf",
  "key29": "3KomFtAXEq3Cz3UpWaJJwjM7CjTxQyzVD4LqtfWLG8Jf4LU7LSEdUncbBn5ooVJ7yGCfJXYGQ6Z2dw1xwkkZuDiz",
  "key30": "4hnAQwPKBKAcKRWEGtbaksFxVHApECsCtpEwnf3DCiqy7WNrT39b6uam5HjrE3TooRsNeAm4oYYdtRH6EiN9hAyr",
  "key31": "61jhr3ZLgHiBS7cztCTebRVq5BFHFhHh7EUtyWq3aiafTndVWAnp9ow5zYtoTC1snUxGxmQiVdL72UWN1L3ctDMi",
  "key32": "H2U8DSFKV7brgz4DajnkxwNybij2ub6Re5fKpZbcLKmHZtDq7B2CXeJos1i3yeVr39pH72sN7NyPhAnckKgwDZE",
  "key33": "3Budn8ri7xXFXgsQtJa7sNPJzcpVg7hfhnvPex5Cv33GjENyw1d5Qa33u3pXHRFcXsMSGcmWpBgBbvNjLuuWrk2T",
  "key34": "64bcn6nUfWWhCtnJRLy1e39PKNDHJsix9kLFFNZTJ45YqDCx89XUeCtvDTmuCXtc1c6mzhUSJtuvYNE8Ct9sdDHh",
  "key35": "3DMADqXMbXPYAjGJ3xSpdYzmUyrUhQDJHRMNRJATGUcELm3PCvcF12MaGxRAGPeo2G8z4HuGb4Ee7F19vzdN2H4T",
  "key36": "5KcPUncTWVsztTZtJU7S1EJp9kA9G33XXYG5qQzdLMwz1Npe6JrcraTgUcm6HQX5aYomy7MT57Etrt1HLYpSQc6y"
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
