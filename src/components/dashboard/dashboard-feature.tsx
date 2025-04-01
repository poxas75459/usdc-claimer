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
    "3dMMS6hmHrL62VBLjZ6FdfDAwc4dVUEms7V2658m1ZT2wM1BpMvTKfgaktDKkcqp72rQYPFSBhwyZ3tL4mZL2Mb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S5JESaUBAkYnQ9VsRDm4GVu1qJpg9HTb6urauDexMrau4ZVSoC5v4TEXnbLhcMYqWee5GxtfoovkXMnsWycnJtw",
  "key1": "3dWnnemwSFANqfvsTo84nGqrj8BcYZM5B9qYxEhUVb6vq6vxm4akGpUuqNBnCDk9bCSASd3iTH4W3rpxJiCPAtqM",
  "key2": "3sfTcKCGd9EzJ8T4zeL6mQWxtK6Zmh1fKdpkeZpmtUDvRGE3mwsMnybWzugikF4QaTLWcaeTu3u6dwqQp9pmGQfp",
  "key3": "5GC3VBuzjdvPP6P5Lf1ipKnqBJtLmzCYG64GyvriTtoV96572UTu6uqxwSB7JHLysdtQnzP24ogFb72A1R9ymhJm",
  "key4": "VMUDmvjnzHAo1E3eemNqFNwKGXqN8SfhK6vrL5D8a8D3QPF5h5RikqUGVjAZxuJzTiE8EyAo5uQHYphvaE1oVGJ",
  "key5": "51eChgHD4Y6yZZN8xKG6DfnsgLcrndWK1B6M1m6EoCXbsdUUvG9wRmsMtByxh15nHmitLPUfYKm3xEnzVsQnNjYR",
  "key6": "533zaT85Kx4qcioa7Givb7CS9NT1eFCDbCNXKAFsDSKsLbBpcxdLghdZBPSvkHCuGMgNcAn1mdWb6F6cU4n5B1s7",
  "key7": "2WkLnedeeFviudgaBGTGDY3gYjKRjaVuMw4ui9Qi8ebvKsz5QWJhLQdycvay5WSRnd5bcqhVERdSrcMMp9z6o3EY",
  "key8": "4YJ5LcC4kfcmU9EPzkZmyw6JDGaq1cSxqiga6A67iK3LTXrq3FaYewPBgXJtbtWnXgMCsYvm5pCUadkZRcDzk3VX",
  "key9": "5rXJgu3thxvePWzuVnDFEHEQDscmtFzFhSX1jAbzBvCbEekgp6NeawPk461MoCi13wSGgBm2H8dcj9JDhPN7Bcw3",
  "key10": "2SVzsyC53NtP7FS4L6XwinNiu9BBZN2Q9tbwKHyXHue5ENqAcFYMVjcNFhYHiMJhThMpk8WsKojSPmZ27mKgFdPg",
  "key11": "4r5M3ytg2JCpJLGDX5PKgmKa22WPspxyCugdaNWX8hDBxt8GnUBd7VocN151kkBMq7w2sJAr2UTaCVhETyjGL9RF",
  "key12": "5uk1MFBuaXaAvd78XbvBEQsNcagxrp6gR7PNtGpZNqasD6ujiMnhkofZhZpwkzpy26Lyfbc7vKje2q3i8SdfSP3w",
  "key13": "4SWiWeabR9eWE1DVDtLVam22FTeFS3p9SEXZLynhxovDKiAzYbRHCszxLsjqYr9FT1u1cQcCNu2SuinTmwFpNWfg",
  "key14": "HhTbm2C3XF2V22Bp3CAEqfzGkyCqCkeFD8JZcrxoqGftESdU154wvin6FxFeQehDXHULYCjt4VxLFUUHXoKs6b5",
  "key15": "48nY2zoKQEi6xQUjvMsDzP9F8bsLGxyBUqpuMsZAzgZYk1QPUqpTBoXEQ3yfWbz5KGQSXwr9tyQd38t4wyfHtooD",
  "key16": "4maUjBiyZC7u2voaVowG3vNKtJE4GgeWLDgNoa5Z8f3MJuG7gmKxLtz8xoFS2EfFE575PaW3Hs5beKw5ASPTM2fD",
  "key17": "1bj5bEfLjhKMstyKQfKuhztiR62i8W6zj1Qm9t3c53AopRbHcFv1TdVAmqjHiyL3KCa6Szcosb4Czq5erHvgwpa",
  "key18": "q6FQytNsCNxXP1jh96ZMP9vhG8bezsH6TPknxscZxU9Np4QP2zAp6vATsG9dquzW3415PkSxxdZtptggrtkJ6Ps",
  "key19": "5RE9fVAKpe1ABRCgq4BezzL76QRso6SctZxptgtq2JmMdFMwUrGHjdMZdN7ndsMUxxQVHPAxA6Cc41BqMPcRrGPj",
  "key20": "2t9ogCgrtYp7wfSuVYjGok9NeR6A2RJ96BHPi3WjfXKekSfaZX5QSZSgjDmRY8wgkqR9utiwjg71Kw3o3bYQS2jX",
  "key21": "3Nw8A1mnPhEgnENFnGRUaWtxn1Dc183ZQxmh5AW6HyxgnMzGa1fkSv1zd3jnSwJc5JmgJeWpCf4Nqc9tcSuG46Bv",
  "key22": "KcTGbbKL3zYEWFVVwEMvudkfBP7LKZGionifqHPdbve9b2yasrmAC983ztV2jtNYLPsLMfJqety7xrYM5eAveYT",
  "key23": "5jdjvy3mpVPTZrdo5cLq4A2zmnPJ8o2Eb9R7k4thDPnNUtFeVE8j99iimWdptSBRgzXTjZEZ6UL4WgDYHve5nTyL",
  "key24": "2hjYTQqZAuKU9oqKCht8qJ6cpjzmVYZg7hNnnhG5mCtJB8BeRSGUoyMVLxXjjEjgZtELuQwSqaKv51WtBzze6uM3",
  "key25": "3DYwSsUr5DPFnHudonChhA7oaXHbbn6FgTaWqZ9a7FAuNUBHXKG4k34AxUAiLVPaXNdGb9pcALb37HJiSSfnZyhH",
  "key26": "3tcodiUGXyHuRwZnm54iEbxHqkxFBtMGt1ntjiF3VNm1yiqCTwYe5hzwQGW3s9zGM2R64gh6aB7oEm6gEaweJN8t",
  "key27": "2tzCbpt4MsD2dr7LawQveMCbmobipYXwXzeYr8X8B29RPEtBy7aHFZXZ1nMT8zibkSmPq29LWcoeadXPbJEMtRZe",
  "key28": "2nVZyjQ3z2XmrULkpmZr7VsqusCMJ3CbbrPqi9osDhtERkjSEEboag4JG5qi3gdMAVTGSGC6Y5TuGxoPGAQ7ik8V",
  "key29": "5VAfru4e4VpNiZey3LyJjkB7QSiok5imEeNR1vfJ5ZcNYFtEzYvZvPz62HHApoSi7PbtF7jR4258imPyb9gJrp8D",
  "key30": "4q6CX2ieNHnjAKuLrMKD3aQuNDtGyzMyvSGoFgxVXe7rCLWeC9YuAtu59QDyUoUanPQ4uk4GoDphqgv1bmvQv5gv",
  "key31": "EeKxh9MLnDVAQCtFHSgjjshPjmsGDhtRVZiSVu2PBnaZ4JwU3ik7KzzMmoFyfx2yaDL5kRmSge1dHvdSdXSgFKs",
  "key32": "5uyBLhCKQ4Lfn4YGibzteSF6WVWQzWcmUnWVcoz9Mo3RVZce9uJVf5UUHduXDwgbtKutxaiu29REA951Kaw83FQu",
  "key33": "2j1EwP6B9yrrnhoagiY141JhFEbdpw7herwjwbHuYx5THBb5Jej73MoYkFWTi1SMsqkUmK6hkF4GEQhM8P2go8Bz",
  "key34": "3nWS68vTLZgoCRQGQaEnAk6VJR7TNAQ3iRJ37US7bK5ZTTdQLu3B14ArPvQNnFR8HXpiiQHyF538enwpMt4THM8v"
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
