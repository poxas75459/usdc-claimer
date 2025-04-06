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
    "45Xu4sQnmQpnVCg17HroCEGxfuynV5Nefwy8JcmAr4SFPxCdTQqrtqUDM8cZBjEYUY2UQqe5z3wwMKTDXtGhkGMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f7qMyKy63TJi1uznAu7sT97xowqvM4PDXFYu4fBqyCH2UndmHQ55PPxUUE4Pgw9rbcZ7Bbpj9SecsCXyUqNFcPU",
  "key1": "5jVQLUCjEuZhyNGXvpDqgJzmQTpURSks1HBEsoazCo1cjZyUTZi5c8uio7uDzYsry1VspjuvVHxHHeFMchbfrrxE",
  "key2": "QYJ5DidUZeb1Cq2m7PGLxdT226ARBofcYqCHqNzp5j8MdYpPB2HZtgiDMmCDB2zNtnUz89zXEDNzyWHWEus7Ngo",
  "key3": "45FnuD9bTNXqXXobcuNRah4htty2DND1igKH1wRnYj8X3pAbQCJ12p3msygVritPaLdRX8c3wX26AaUTqjZzDAE8",
  "key4": "rxcCnKhmdrzMsTxoRFEx4kshaUNd4grpqyfmN44FSZ4CALHbMnbfLRqjzQMeQkc2F7YiMNzpXh9X7sSv6sPXb78",
  "key5": "4qPRCLh5wCdGyE29TbiTFaXQfUcdM8cGYQxvAfn4stpqsWKT3t2iVoSrkZhesptUj3Etw8BJ8Nh2u4wHBqJp28ax",
  "key6": "4V3FAtUjoYYQvdaNeBB27eRvjM9hSsURuWQXvHFSHFGHtCNaxUe6SgzWgjX6T2KnrgFchrGVzP1icPzstKXfQtcQ",
  "key7": "3HGKWtvn4i5m8ZwoSiK6jrnyAMeonzDWq84ykveJbAsjSWeFrk1tuEosC75a1CzKq6CsrS4qXwLn2gi8rFS3zCVF",
  "key8": "3dcN7fuVTTnE3JpXGTvPcY5RPoJnzU3Lh7QWHT33NeoDtsZyH47t6C1nVjUz3hGNFyQNsE6v2LFdCJWiWUv5ZDyP",
  "key9": "4FZRAF26M6aVosKTxp64N8zGzJdFkYZN4pkzMYExjPAyPnye2z89uNKySXGP8Pkhj2kn5vKK2hSzMspxP4PYFo4U",
  "key10": "2kkRSJNwnY1zYNekhvA2HENgNjEiLt4XFFPWJYKxBjMoQNrbhftUvg9MSAsjpLYFKjE3ytaXw4XJENBQHK9NBeYJ",
  "key11": "327BT97oqPGUyc8zeKscssdRjCX1n3xffkoyXBDRv8x9PdrrWbi18uAEcN6FyWDLfsdYn3x61wb3PD3MKV1cemGd",
  "key12": "32kxyDdgZZphgiJwYyStMvRsz2VQstZUp89qgu6tk3Yi4jDkKb7MAyMAjfJF2T3vJiNearndi2SRFumyvdskpHJy",
  "key13": "3C6tZEtPFesXTvLww64Qwg9bTqfwPFY9RsEKgUEczEASyDrUR7GtLtnpzrLzcjgJ2bys4BufxZoKsLNAvTtWrAKM",
  "key14": "5c3L8EfWQm8biaPb7xPj4JLai1tjS5vNGWHT1xGjGAVFHDbXKpMJjPdnzCUdzNzyQ8qadTBDPtPmfQRhnYG52igH",
  "key15": "4nhMFGf4mCm9EYwFgvdamWfpiyJsZQQgeVKg5qRFT1VzGdZPXD2CYfYhaQkJHHq2bJnNWgSJdFyFC9E3DMMjieM2",
  "key16": "2ebCUuvGKzrY8s1fGtGEXYD23BQZzY4gwspg9nsy4BNVRBQVtx8Twpe3YYUmbi6MeBaXJ54wJe2jhzNE92nXF9gD",
  "key17": "5ugFUK2wDq3r8zFfm79jvDpQMPrLk6tboGbipAjCDanxnbRv19ttYR25QEyctSeQDreucM4TH5WXiLm5AkgddpSi",
  "key18": "5jQ96Nxs77vTcYjTyCJQ7spGNgQxBdAdRgENK7cYUapyruugnPoTjHZL7zFcWf2XPnAPkyeQ71FbAeGMpRSjVfi7",
  "key19": "5yGvmexCLpkRyQEjXXitvfxPLEknfYVBxsLmHG2UAuxgvb3DhHrEHeunWHUTqePf26EcumKqrpZ1Lhc6FBCxJQby",
  "key20": "6mW4MCkPXxWZidfXdmSAuDAL2Au3kA7PcntpHqDSdkLcC23eR7fhgmDwxe8qUTKA3b5qkA11eeGnR4WwkvdVL4k",
  "key21": "2QP42ZZ3Daovx7qSJtusQ5mL5HewMnZwMHDjP3bPZpXVMnBWCHspJnZobXzGFdoQU61RAEEdcxzujZExUZuVagST",
  "key22": "45bgWHAVfv4D4XNqCFneYT83R6K9fr6K2KUsvv8QmAKs7NjVAvDyogaqWuJNk8cY9YXwHY4vQvErmTYcU9aeYyvu",
  "key23": "2kfMEzhWDjAitwWBJQ5QP75enK2Z7wZEyFKr7QV6877uWakovq9oQFGLZ3LzdxZHDsk2gJdXDx7ixJzEbHiN2p7P",
  "key24": "3skBYCNEKdg6gcWnAcdiqpgztAz7FEb6LhbXfv9iGfj4TmUeVjf83QqPKn7f3nUBMbc6CmYHxCYyr2eUKEP5BYf9",
  "key25": "WJzmywNpQbKC8N3jcW7XB5vzPSDNXyZLHnNaAExTLY9YF5JfhSVNVRWFpE2hXwSzpUtEPfxjZqgM51bPHFzX7sh",
  "key26": "kDoqEuP6wixsYHcjRpRqUG4HUrf4MuFjrsSm8jsnWDQoe5h8cdzKF8rwri8xoaJ7y8H3tsAE7bSpN1iCD92p1J2",
  "key27": "2ha7ASA4EsxPhP5NSZbjXpZWiJPugHwH8kYBgeBFQxMuok88jYLmW8D7JTGUBAMomgeGdgbvxPG6muoSenPkC2BT",
  "key28": "41nRRTfmkgDWEdtHpdK3ti2FdcY79rb26j3EiSb8JxbxzqTVeB3HeaKepS45bXhujyaUwpnLWsreENeGYZCYftHX",
  "key29": "3EVfSAtiT98AJDWYjvuX8hnwGWyLpmcuxpb3JtjXiZyN4n7urRdsg6onrsoB7CVGvJUt8ZC4NfyMve5WYveVg4t8",
  "key30": "4WLCgiLZ93zzPZuTYvqFhu4iWN7aUUoPUthmdFdEc4ExQpndMRM9qXxJpygQ8SpKQC2fFKwGQoUBaoozX9SarJTW",
  "key31": "3y9QZCoUfRBh2qSFrMs4Y3UbFxUsAVB1Hjpj9esYdpHenH6cTG2ePEF5w5a3bBEVpM9FhYjQ3xc8rF2DHnNCa78z"
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
