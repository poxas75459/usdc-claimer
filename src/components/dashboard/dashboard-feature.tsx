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
    "5gGteY4c3jGBmoYjScaWigfuPy3jYevePkmtMWc7Tqj3PvyAAbmskGnkDNEWChW6CzQjCKSyaFw5S2FdeSmEJLqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MiSci1WU2q5CyN4MqVzokdbgSwMCnE89Cs17Q97rLUgAKVpWAiKZU84TPgXKZsWAKSUZRB2CwmujDTd3qs1jTgx",
  "key1": "2AmsmkpcLrb9CVgXm2hCYdNfUM7a6YpqPrQ4NaJi127iTpbC17Xy7cnMcckSwpiNWBVhVjRhVxwNU6ZE2an8ZjiE",
  "key2": "51itwpTSwysC1Sk2Gq1uYcTx9gH8BgRZwRNp8G4RvcX8nrU3HJNTYj4zQau35gbDKcQHknmtHyMAuqmjxAAE46Zc",
  "key3": "3hD88QsQx2pqQ9WjB7kF3UconvsKRgURAUZNcAroMCtoqRMq46GD9WYidqDLLmEBx9UNai92soeaDqNggsM3JuFS",
  "key4": "2kPMYjdSnompn9SmcYNYvS1xQ3jj63zpEkyKSJYvwneupTsVAc4fL4XhhncE57kQJYW5dHg8NCkAkyYdN7DYgG3s",
  "key5": "3wKmPHMmyMPg33DdMTucFW1WniAi4KF1NyaUuQvm5ff4W22zeqfnLm6uJuqY2JJHZuGbnmq5czbpLVsTZ7s67pJm",
  "key6": "6726s3pHDmvrrnsuB2vStLxmKa75WLrehmkQoDBUF56QCwa2vnP877kcvKQZDZsD7tBpNfPdZ8xoe7JiSKHEbNDj",
  "key7": "2x3tWzttZd2efwYFKaSb8qSzh9WSgQUC3wpEfYyf6Z727kqVAscJhx47KDY9gWPSnPgcjqmGBYWudVYbYmsYjf9r",
  "key8": "2GmBfrSAtQX71Envxe7qkb77gLWQENFHx51kYHajB1Lpp8UGXPkntPpm6cEVhwsRQKuVniBSXuv684UZh3wQXQug",
  "key9": "sstYDrRB5TJkPqBQ43bBkznEF5JqDuifKgxBUSPGq9MafsTS25FeqTk2hZoJppxigbEzyGFAX5xEd4iFMAA2rSi",
  "key10": "3D9nj9idGEQC4HJeDKg7dUW8uepurNTFWi2eY7LPbXff5cJCNFyG2nAsBVVguhaFVEVjrurve1RRd4WgnnkDRYtU",
  "key11": "41wuHfqoRUQePZWufrnDwwgzBUsMYSjKhBQ7SEP3oPzqq8PTfH7Z117whd5Qfi2VYYXNjPLR6HBoKV8iTGsNHeWw",
  "key12": "3doscJgZHrLSEdHCaeNF3idrquXpE3jAp1mTL3RauNPAbDnFwcvG8C4amc1bfzc2WaJKEWgp4BaNsSXJkCyorXP5",
  "key13": "4sX2atKJoY9AN9jaKorCDarGTkxgEcvnhytm9aLnZpZBDcV1NVqccuSZw2WoUdwN9WJUiayxNyPXZ3MJ6NHwyzt5",
  "key14": "2eQkd7GXVtMHpxmE76A67FT5UW76sZfpP5AY9UpJi9BzamdqRzQUKaYwXFaP7G8LE9PX4gbts6MJfZpaYGQjZ2ws",
  "key15": "XPEQKkPsREx75jQsSNAd8itdPWFnwR2r3F7BUFUk9JFyHpFBZ98CiPMCLfNU1PyMLeEq18fki3kAVw2LZ1TQ9oo",
  "key16": "4AmsmCBcZNEsky7qgYV3fi1zVq4QMmjwYFogisnL8kHVuAYhbmb153jTGCGzVf21YFuqEmTmdJowZaAAc3FiXUPV",
  "key17": "4e9EvqgHmZurGeyj1jcjzL1f5dpXA8MohMSuRngfDcMC3htzXk86VF3JqtPo5U57qKQuSTvtFhaV77mBfSZbDVKB",
  "key18": "rwFRAiepzackMvK7rY3kB5cffUWVmqBhpXQohWQxVWV7T17EqjyRdhDcbb9TP4wQhvPAJfo6DmiqdFeDrzhAcyC",
  "key19": "QuAp9eRNwycE6iNN6QAeNnMpCWTZNVQENkXW1poMaGs7NWBYLSDYBrknvrCaSstMm82a2rXCJRtdFK6y3NWik7B",
  "key20": "3VwP2Y2f7gLcTxJiAgZsYjL2WxUg33U8wMCMQWs2VZW2nvVzLmq9ohY82BXmeYSDwwqbo8UX4i4WL858rgD8cmsb",
  "key21": "5sywuT6oeV4CArjjuWdf9eQQ8RR1zzSE9v8C7XCZoRBLknFyY9Wpvdu1msrxVYHS7JSpiEK9GgBobQRikzDpGTAP",
  "key22": "3Kz7Csd6Up4NLMA1HHVdd6q5wog7d1i74UTCFCz9TotUBN2q4vSUQBVFA9FpY7x9JzpL7PuyXKymhgxDU2v9w1xK",
  "key23": "ZhrWCCAhDcHYEfm5orFKCQ5DtUU8DzSEU1nNWBCBwwPyQbggzmGQSPzJYoVqPUDdxAobVmCEH2gTTDrjRbrzm2R",
  "key24": "3NrT2zhgvxV6oHnECKxnA3iX4kCqd5493s1vkidU2WszLD1xtyFCCZfC5wYrEVVnpN2EXwDG5j7EmaxtQivfW46d",
  "key25": "5kMDXH1R29zStrhGr1N3gFNiQ5qXtJuzuDnWtkos2Y1K9TbCZRzDzSeWckvSGey4VkFrLgBHtXsiyoUxLUY2j6k3",
  "key26": "48T2sj1JNWGQp33Vganhcvgq2zpqr57VD4jdh997rV1gK1xcMb1hdB56kBKqd4KvL7HH6zWXdLMusdd6RQcy3NMx",
  "key27": "49Nk1gDaFS8Nqdf3TRryr65bdM9qWCnwDs3c1ucoXu3JqZ8hRM9fS66x42GkfNYwR5zaEBNokRRNALCBAiBXavkf",
  "key28": "4VWrzoV2cWqyU8xPig59c5Mv16qmKSzWAgPXGtqGRc9nXCmTUiVFGsxnc3KWrp6RDULDnJ4yUsB71qPTgNKMqnUB",
  "key29": "4WLvNorU452ihto7rfKCuWej43QEKfYtkohM8wgHcydqu351v9pviLZYrfdRqxjpaW8f1mwc5ei1dMKYUWkBiHuN",
  "key30": "4PcUn6UHZAakFHoUGExw6isrXJZj4EneAZQsqR2oG1VFv8Ph52wrgUUAs1XcWCxmSKokbPL6skgYeuQsHR13zkRu",
  "key31": "aGoQXt9GuVcAyPKmqMA2b77EF6e3mfecHA81Wpo67cuu5C864g5mKsXXfUyLSBhvsoKYj68sHoucMQGtyzBfzZf",
  "key32": "jhPptEduRdwNLbthExY6Pzkb9tqU1iWdjLdYR3iMkbuaBrHcrEW49WnGaBwrRbj41ZuFH8LXU8nZWmqB5VVnmyr",
  "key33": "4b2M1p7kFbDjoSmVTxvSTexAEvYcJwXqvdcubnckwR72uKMt8eKcz4TvA5jAk6i6q2MBiiretpzNDbLZZK6EWCCL",
  "key34": "4ebRp7we9Q6zo4FqPPScmwq3hhusLdkyfkdMhNFHYoetCyZfUCCXvxdZCjz39SywyPx2HRYPhurA3eTRSPjgt2U4",
  "key35": "3C5j16KEZKA1q2Rt4dNiLvuLHJ8boEsmEakKgYg2Qg3SQ4JeYXwQNNdMAL2oKtarLd3u39GHnfEBcVdQSCQNkGEA",
  "key36": "5CRrGCKuStxBpXFEwLyRrLDiuuH7rFAkYa52sEcoqNFpYGsMnVNftRVLBGacJ1R229KGBYPZyKtNYnQ1HHtB6dXj"
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
