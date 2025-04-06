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
    "42Haz7MJyi1tbWmDRhiKgQSZxTqdszPZtKBiWtVYUBfdvoUmTZVgKbWxSYkicAw2Rntrz3LZ2ts2Nz1BtF1iRpaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "387jd4gJAv3fW5gcXZtAKNpYKADydUEdJTY5CX29YmThrfK2tQRzdqtWw4jGKkXBEJCX554W7fPjPFKsni1yPuQJ",
  "key1": "3NNysjrkpj6R6uVw7Wige41bewQfGUaSJsaGvPqGJw7QHquLdYPGwmRdmzTmamvZ7Wheu6xLBYLuNquHVjjcMSzJ",
  "key2": "42so9TtXahL4w8ZCAWAfHrKbdUV49gFQKZYzhs3z5PjB5AvfZrVS44Fc3nNvjpQYiLiipRAKDBWhgsGmbNZQC7vg",
  "key3": "2H7PgVwzNoj1dKdMZaruYaCQN7WzayzfP12Z7mrDSVWor52NLrz9Ac4KycXEfrGJA21JU4n2NBDQfPdtkisv9FMa",
  "key4": "57wwbJQqgyWUXYS9LZSnChMHJUCkGqMfyNaysAVHi8Vm63RDZeNgA9yS7jCHepeceA4wTm5a7jsxosKQxAvBGbxz",
  "key5": "AWGZUgtCtxos9NHv9i1ZgAU76wE5bYqTqokvikG1PHEkBmMM3dYbCBuodiiFeZLg2yTiDYnAtZwEQ3nHk1JeumZ",
  "key6": "5cbrcjqUgGMpv6fZf2qzevDqYsy8RpasZBeaq7ZfK1zY2CrQKUMD6JZts4cZQo2qn9MuWPitGgnvbpEMcxz2JYLG",
  "key7": "2t47PbV28YnxRDMbipVvRbZzvz4Cz5ny9hKKGMhQcNpbHihyQKG1N2aZhEEt9zDdDDjchNBfPcD9noWtKfuVL9FA",
  "key8": "2d23svQgXWb2VQgKRqsLHjf3w46vP2mufph7c7BSTxVy5PMZ9mZd3aWihfEpFaAkYREtnEaWnMcRhQqWf5N8MHk2",
  "key9": "27SNedeHwRe5zdgrcSsPBFZGt5PYFLwRuuDk9rMT646sY5v14FUTEzCykMLDhhsaAfP5gyjza6RG86g3v8a9EiMu",
  "key10": "axAsFEHszG71QzSRB7dongzrvv8yGAm7EXGfkvndJUf7UHX1yM8GCMGfqcmcdzkZj7XUToQN1hBBhHWp37v1pU6",
  "key11": "59Jd54aBKMTJRTX3rtPwCAE71VNwMGHUriXbN42hSvHM5s7FZActc6jiM8VbeP7cW3ktRayRnW6rVkDdyqXNMWkd",
  "key12": "22vGehhRaNcPQUiQPQiWGtKo7vPeuh92NkkpizMJWB2pjwKuyUDQUaWW3mLACoc8prtbmopWGC5oKRu53TJpn8pe",
  "key13": "D31m4HQjVvY5g2Seb3BZJ5V39hKoAsKyfb1HqR1jafRdmozpqAgxh5iDjeTn9FPTmpuYAK3wSiJ3cgNXrb9UJn7",
  "key14": "3cHzBHBuFgpSLs9MTadKrcFA9EbcsoGwk3ztJk1Pcc2xnxGtpBJDn5azyb6MzkQRShvLoWAATQa3XjrHWtRE9H7G",
  "key15": "5JnJXqNHqi3JxQMGt7WNztAUtqsoBerkemPFKHX3au7Cw8CCZG8wtwqTbdPBidDByd7dXZpetJdET3tFk1khaGQV",
  "key16": "2HmEN6HSPwK6B4hwZyLuZjbJJQcVBkdxVF8zZ6hGhfUdTX9qAx6akrAjqDvKqa3HcMHYbD1frJRsbMmF8eFfyQoo",
  "key17": "fkLcgw2scLcbi7fqUEZoeE1eFboXMYy18jnwkCWypH5zAttd4X1JtQUQi4ifFSH6fJBCX7RNMw6uZoGMhN5Yx7G",
  "key18": "2N9PugiJ3kzGCVzGo29MFBa7CwoRJL3X6Gvbqm3Ko3xFuS9Xmf9hrG3nmLbutqmMY9nzxX7iEPe2iG9MYv5wWwMG",
  "key19": "3fWuv8v2Q5ZJ3MYrj4vxGbWsf5ZQ9gZR4drASc3aHqk9WFoihbCogkFj9zi3aiphLG4meLMEcWMLgSomvrmeMVp1",
  "key20": "p7EXQgMLL7nq1H5zo6fviTym7c9zXPUNz55Uvh9UcGnEmRgPKYxo6JibwFxqyNA2sF6pmVQgwPUGLCkGegtreTy",
  "key21": "5teuVM9BvYToaMarDtgz7kP9cPQtgpdrfAcn5i7THstgBc9AZW2DzwZD8Y8sjjFVwD877cZ7RubRyZNADCWq7F3j",
  "key22": "4pmrka2PG7QC3UqcvjA32Td3EZV6LYzDLQi9uHUaj3BSa26L8SxmXqpXBC1yDQAntaXmBGkw9qrBEFWe4xjBxzgK",
  "key23": "2jLgqL5YXpKP2yHUAvRKez62hNMDE3aU3DaQPxf5oMevVkds5JUqxYHxTbVtEqkW8V8SPFjM8ZAdfek22APa4wRd",
  "key24": "47rucmguByVwSdgZEdD9Cp4ch3ZwWLgS2Yqegqj7ohAgZp6smwBU9N54wpDVai717vbiwtstsS89t3W2XxooLz3Y",
  "key25": "5eQZuP6SuX1P58FNfrRNmAr9thGmyGU1E2B5oEBu87BSLuP1neW6BorEEceNMkySKTzHV8o396zZB2AeL1psfzEh",
  "key26": "4xm9m2xPveaW8btHthGApHUgiUUyqq8qZm9hu5vH1Z6xqYx69nUb4y6BBv7SENNBkuao8Y8zPkB7ErGwYdFcmA4j",
  "key27": "5gYAh4TwMbheuJmpnCQeUKyJ914tiphsFVMmdZxmZLBZYRTaVeW9CD2Fq2EGLQU7UahZ3pHk5FSsuV9mFtG68ebn",
  "key28": "33JUo32ddTMHTXe4Qyqdsk42PLLzzB8CQCE6dfE59TYQY3X5PXAKqdRyAjNmxUcGGqSpMUbBjp65V2RXv1aGmTtz",
  "key29": "22TtQ78QeDumiDvaTXBAMxn6mqaTmXrQ2zR7MsgtwwxkwgAKGE4DrpCAtGG18CDNdLvQunBnS25bRMenvv3uad3n",
  "key30": "3goXESfwG1bFWDr4bGrXEdqDzN42t85LmjmUv6dojLaDpouxR5D71wrXYi9iWHh9Mx2TDnzg96HbMszeJYr1D4AN",
  "key31": "3JA4uMF2EtW8ZMmotrkKiiYGiuXvCpLF15hqRYAisrJB8MzoB8qwGYs8kuHV4kPFEyusRh1H2MSsKJmwa7teRQaR",
  "key32": "5v6ht2q2mhKmQuTCCmBGjKZeX3UsyU1SHe2q5EgejtKVrc1HXX3rC7KYumGT8uJsv5ZW1XRuhjjgrEczxUYB5UsC",
  "key33": "5j9XXPL8ZAN1pvfDTVtQtFsqR8Lz1UTbqvFwwBcaNMZiyGRHKAhHBCpX3fhZqKfrafoMXp8UUkHMcpvqXjrHDaor",
  "key34": "cxq4p1wMYa2iitjmowraPieVm4cEUVgKjp8SXNfxmvgcvHYfMD3YhxA3tViMJy7EmnGBLMfHtHib2pDYHz1g5jd",
  "key35": "QJKvwXvu9XK4chZvDw6vU6wMSa8FccNFf6fr9uhxyXBTJ7iCZvAK4Syp2k4TMH4XikEHbkrxbcJrdd9qv2Gjzyk",
  "key36": "3PR3CFDPpxTxXQWm3FVpe2tUZWwzFLsBRajmZwkMMbN2kXSVW5G8axY7yjYqDGveqNPTi1gbH3rddhrWEebJ53kB",
  "key37": "3LakWbjHpMmVC5M4vcU7w8TJ7mZ62rKW3EcbHtj4m9Hwa15QpKAVYSqiSofTn55kcfQ5Aeb2L7f7f8Mu4mDAXSnq"
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
