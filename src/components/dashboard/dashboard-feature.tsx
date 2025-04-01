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
    "65RqQParNQorm4ugqM2J9v5P25sT1ixf1Ht9umTVwkd1PcKdJCGLFPAkpDqtVUanPgUCKTK18XLvYig7s1ANGmDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "563NFTwojYTgmQALrNPtR2kJz5XMVncNT13N3AdqC1zuGmB4kDvTZ9LXxwPCQD9efagRMiZmqEs1Nb4WLMpa69jj",
  "key1": "31mJSygL7R4ErPUvVvRiX1Uf8YUMxxszEgSxmHYpT8nXGrKaCXBGFC89Q7JyfHYFZCsezbm3WZQUG3XZuXysAPSa",
  "key2": "3ZmQxQq8kMxrie9ABWupd57X8zzKChGmMToBW4HPKBcSwUcHfv7Q4Z55L5cheD86n8Lud2PAag97yYgBwc4qr1qy",
  "key3": "eD4VGUm3gN2f26KSjcXtCaf8LZafSkLyMMNi3mLxoPDsR3UiUmW3tn89HrmN27Xfj6ooVkyURFnt74kGv4CUeGS",
  "key4": "2pkX6BuQxbe8rv27FPCpK7bKF8E7sNscNwxhzXVm1TjkWLFJwpfXaBQMk9yer4vXd5KML2KodCP3h2NzmdB76kz5",
  "key5": "5BTb4gCpkRsyuRyi3G1f2oGrRTp57GaGkRa1x9W5TjAVMtUaYcsZdi8CZQQw29Eu2xPicWFEtYKGK32vRPu8bHxJ",
  "key6": "5D9mHMApTVTRwEpNYWER5Wfh2pxS2rBfJ69SWh5GkMADj2shVXzXQerVkVSzuVU31tuYKupoKTfpMeASGaveY3Yw",
  "key7": "RwHoiBYymgePi2i6kHP2g8nWYzFuSpXiEvi59LLpqMoc8PoLU3ht9uKEaS9AYg6hd3hPSPNgEprtt6AbkXRSrVd",
  "key8": "7SXBv3gG5jizppJ7Q2j66H42PzBUaj9CAxXt2Wie9qUM7Quh4j7XkTqraQzPgU8pWxvsiNZxKmqP8wgpSz6n87P",
  "key9": "3WQumsJFSXF68TtiZZTkHrkmRzZWyqzqTMNuHJr3hbcUzoJMnE76GubBZeTQYpkMxegAEAqWbWXAZE6TgpTqwiAK",
  "key10": "3LrSBdBYcbjADF2M2MVnhE8GuwMpgafJDWXGoWyWnF2h6h4nPPqaUkNweNcCMK8fm73XqQgmE2JwnCwv2j7s8dfr",
  "key11": "361tiYyfkMDzBr6GeoubY6FRzdiiEgpAQgP4Da3HaK3XwkADGuweNMaM1413KYtijQjkXoyr7yAVEtYeJu67YE1p",
  "key12": "3pBVVcvHo7AGd4LY9HUp3p9udh3cGcPxvRpCz6jYNpCcCmKCNeBuzy6g2JEq6Tz9w21Xc15yv8b4t3PmDtjSv2bn",
  "key13": "5SRs1QpNar9p1aT4RnGha12wfgFP5vjFG7znsx3srTFXjPaTRh4P98TWPLGGszosDwufEPUypwx9PA8pszjMryTu",
  "key14": "4e5RKwT2c6aT9RMTRLDm7R14V9qcssDLy2DtsQrAWV2URrebtXfDkobLR86MCFCtRHmQ2d9XopxamV7mJcCHqb5",
  "key15": "4DZU5pcGGNmh2mVhV7kyi2ypNKdK4XmCKihQddKhmbVzGAnDnoi22Kw9z9Z9uDWmrStyZ289aboWrmsu5cwmPfEb",
  "key16": "4SJyFSeW5eDKdThz9tWFrHgg7FbicdZNmP42y2TUCu7u1DDhM6sZ1keTN3KCyCXEU4CzPdGvDfkdRHM3iLq4qWnS",
  "key17": "3eQHjTPhDeEFrtDZ5bpzM7WxLD92KrqVCunvgLo5pX5Y8kou3LaGH9gde19C5JGkNJhhEcJzYTm3jqCEkviZNzJV",
  "key18": "3sEKZNufbca7SQuCjLQkpUdvShqiChm6nYcN9Aq4BmzGzBpviLQybWcMqDKtqmZJdvgKsMGbPJ4EKtqQCVW6a5LR",
  "key19": "4wRyoFhX2LgvbSf3fiHaRu44vN1WGFEwuf682b37ik3tTigDpefZ5uzzNP723EVUVKjZHGGTWwTfGPSbuDvo5Auj",
  "key20": "4btQzY6qHsRCJNU2KyCMpCBZnmPMVGqLzxNgkQJCXFP8mGJAhyiaGr4jiZ4MrbYquuagHoiky6LAraDHbPDUEeP",
  "key21": "2rDtzYKS5tobdM95KUGqo7JSNAt6H1kB3urWCd218iMN1JNiy75SWc28iY89Hj5UEEmKH8JLxaJ5ZtHVESJp95mq",
  "key22": "4NfzHQh28yyWL5fK2LTTt2qsmwmWgc3vcdWwEa9yW9ZWyAYhVnGd9npPNWbmeSXegi6LDyotmhHuwsNTtr9FAQbK",
  "key23": "3wKSUPj2yGJN46ESP5rgWVbK94FVhZmPG3msAeS2uSMxnRUYZKadV1tGFg7xCtY5DhzQVBwsgtdReaRLXoc6K7kW",
  "key24": "2uwiGjUaHAFTJfLtzyXup4pKoGeYDgEkS4n9fyQuE21MM7tNyXuYMWQE51pKnDbL5aDgjcu2raMexYpW1dADX3ud",
  "key25": "5VUVdcPCc64kDAYYud93YkDCWpysbwuNtv1LDRgaYks7e3BEgUJfSPs6iYsSCE2CyobG3spBFiaKnjkkGb7pGF6L",
  "key26": "2Q5Ki7sdPx11nZ5PPqvEpc3gSu1RfErn9oHnMfKGpXXcXKVQxkpTnKwmkteE6US6xP5VWSqZKNtkMFRuLo9kHzDh",
  "key27": "3GJKmH1HdD5LEEexsmTBJAADkxqBwvxG7ZxD6Xjbcv6juFEdLLmjfSWwR7xtKTqnnBZ991QHA36pBXr6WYK7Fzth",
  "key28": "4rnUpDpJfZnP1A6ZVRbh2Nnx9Lh4kMxJce3mEhyXrPR3iN45nqVs6gKYGDS8i2Qg7fRR5rZzaPWoQbDcD2zSVYqa",
  "key29": "gD6qJcbd162ehirFyqRHg6cw8iwfabLzTcza7hkFyBV2SYtQnut12DhpfAjZHfYaL6Xj4HkszeDpkjejf9mBcG1",
  "key30": "2BrTdtpu6emLVkfaM1ksNm6S9vZDh9eF7JahBNWEfp6bTpnjcXFwj2GbeFQhJ5MVqPyEMEA28SURgVizPKHccXbN",
  "key31": "Lcab9nWPhAjRqEPqdvyQEv21k6q3dQJdUoBg5KCaKhSCZpSyoVZFUsj2feWVSWP5fBpQp3BfpPHRcRBpSYUq9nG",
  "key32": "4oZz83mLBSUWhVFiXSCLjdKdfAb1KfFv3bv6Gy5MHZoZLE2uCdmGkXMo5QmiuLTXcK9rikSsZnL1DrotP8yfsCuj",
  "key33": "a7M5ZxeEcEW9nuLEW1jebxxoy7LjKtg8qp9efRubncPHoQw4KnGP3aE1KZHC1fsgP9izJzRkEzg4yXYDGX5SyBT",
  "key34": "4zdJ5GJZfGjvAiHaQSBm2d287cAsode3HkA7idybDTf1B7P7wWEakexMdDAuMDMbFZwZVJKmTvssdkY7W6cN554X",
  "key35": "4GTDFkKV9siYzDDXj3wjAtbG59qd75Tst3BmpG2dp1oGkh2qbRMyxpv3nNPEg8W33MjP75fXNfP2AQcdNdqjERK3",
  "key36": "GTUtQWj6nNoExT8DmDbphWHvWPREt7KK83oWRoyzTQPjPy4Uzq4RkkK9FvRUfYL6w5nqyYUTZ7AK5on5Ei9cfyK",
  "key37": "FkzUqdbAbuJ6rXqxU752QoFxiy2cBKmbzRfUtMH9j4XmpAoHtNnLwoeNMfW77QyoYYReNSzndJHmjzUu2Z947Hx",
  "key38": "4gRNQbYGonX7XssND3aPNRjBnZMDjnTZo3qGEEbirQEVLgLSeQ1PeinPw2kCrDC9gxyjN8wDRMoY4tw9Q1kr27cQ",
  "key39": "4ZnfaJCgiLt1QcvERaxFqww65d6qjJD1V7zdDHBSBU9MFotEx7FeTcFAEirg2MUqk9ND7ZL55UpvMEQH6SnyhJ4k",
  "key40": "4gwPG1EnAX3dYFWBCiX3rUNuMo5rfynCpX8rMf3hTKugC4YqjCTXNvRrpbVAL2GZ3zt6chJhdmgMzNUV9SvDoXbW",
  "key41": "3QyXSGQn4h2LYHYhodQKZDdXZFJ3M3tuUPE6y31k6FRHyh7hPg6goDQuH4duZTDQKeQHeLdqUATqXT2PVJSmmwoC",
  "key42": "4FuwwkgRCL5FxzKENknsLVBKo3EaEHf2xsBRg3k1dkaUVYRGuuTNEaYxWfh5wbW25vRjAoZED9ETDqJKaovLSGek",
  "key43": "5xUpWhhzeZfBUfcY9wnxer1pat7BMZgKUxuSoLDCDMgzwpYMXBd4QoXL5t19jJsBL6cyeegY84thWrWVZu8i8s18",
  "key44": "4jXiFC5X2LUPDjprt1xQfkhSHJc4FqSNWLU8JZ81AXvQB1Bsug4F1ZFE5osDXfitiH4ADK51rjd51CDWD7zFR2et",
  "key45": "pruwaqEJEPxrSvnpiDQZob9pdyXswXgHxENb9TfWwuANhVPYiJNCrikmCMAR1fVAmcFb8NhVBhViBjgxY6W9zaz",
  "key46": "2Jf9QBX9pUmDaUP9uA2a5XGpLbtSQGjnmWatTf3D9pXL3axYGp4pDDYTu2qx8n3xsTxLsfPL5wAxvK3YPfou2wLH",
  "key47": "2z5a3cgEMER1XS3ixqULFcwx8bMKAp8KTVBtxe9ZLFSzeSEHRcNtKJ7gEmyuKzfyhurWtawqdnr57wk6jGNNsVRy",
  "key48": "2LKVmhr7SHBCyjLdrfZDYr3iAYQSRFq1PSJnWYAR4kXdpiQ8A2QbVLQGEqV4NGCDAKQyjqfixkLVBwbMNXwjB7dm",
  "key49": "4Dr7qw9ZpguYfD12yNC96msAx6KzZbqj4mV8d6XTjJjKzmECrtv7Qf4RC1byGRozcF7ChB4vouhTtk4t1fQVeZ6B"
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
