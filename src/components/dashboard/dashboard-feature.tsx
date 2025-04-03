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
    "3x8VNC8VbpGt2mhfnaHtRvsWqArBCqU6iNCGL9tieET1xus6Tmg1rHuZc53TUcJpXEY3j9EQwmJMKfY6tSbvnG2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qWSQ28CFR3QkDyvcsa9uEsk91z2f2sNFS2Nk4nsYo8oVioERJrviwERUyiFgpNDi4LTnK7Fb4oRkWTCNUefkKuL",
  "key1": "5JWV7C9PjAAKTDgAe2p4dgcRJWLDq6oPvnbksng2LL5J9Dx8aQA26NpWS7RbQbyUpCVhyB4k75xh4JSQ5Zbb815R",
  "key2": "5E5mHWz82enmRKhUSk7ASj26i35Zn71jZ36mUm5DhtGnaeQ6wsYfkaF4ZvV1ZFD62SgFRWAg5DAShsHy5MeYQC4Y",
  "key3": "3a257oTN7vrDdNxh9zHkZN2fJg5uXrHuy9UYJnatXrTB8r96cnZooGQ7hgD81YqrH9XiSkA9VHD2M1vTwzngeaQt",
  "key4": "3UHufEGefiBGZmxPEvH1MUt7iHvhacaK36DwcgKXUP16ZtrtCA3nbBnVEq8Wk2McABEAPQrwtY2RrcWmwtm6n1Dj",
  "key5": "4cZTxdTPpgeYui1u6UzEDsoHoSgKK69dSWQTcQyEe9EK8hHd99GC7fCEyusecVrrMohfk8LFPCedq1ndsaMF1sQJ",
  "key6": "4NmEnLQTrBmUmcGkQZM6xzapYpDVu92bKfERY2ENw4ViWN4CQgtKLyc473mC7gtNCrn7iFeQQLkf1QCNSbBZ6Yc1",
  "key7": "3vYpGFUYUE3iAQzyjkrDXReqTuC3ADaRUZxB6v3HdjqLKCFFdtV2qQ4n1Za4MAtpaAbHQPf3C917DPTyDbgf9iuY",
  "key8": "5PAAuLspdqCspP1PG4DXdxTL9uoy4c5K7VYh5jqMwgE2PmWd8CEdz79ckZhfTmdxzJujm1ZmYeFTtViRoEerPPy5",
  "key9": "3xzq5cNaMoARddHauv6cgJXTcg8LwxfXFyQK84FA6QJpjWnUThPATQtSJwxTTGnxa126xTy6BtJUJHsPGtzQ62Ey",
  "key10": "33GSsfNT4vVfHgf7EoEe99CqrtaYWaVGuJQGMhZjnhLtwaaPCEBUVLRfhxDiufxh2h445LYZP2Q5LSJuGYv3BJjz",
  "key11": "4Hw81M23VhEG1dqfx8r76VQby3RUDP99W1CgR7o9TFkBhovm69SCRFmGggqUVgh9APXdrcvABDBfsa2K7gEYRkQE",
  "key12": "4MLyEuTPMvpof7HL7sRfbc9nGaB7QYzndQYYUz5xfiAuM21KNVs8nHY1ZpzaL4Gxc6u5rfxhFDK6H1VwJfechVhQ",
  "key13": "2R125XaqJ37wVBw4X2eUCCph6vHYu999Cmzq55sQhMNzsyRc7efYCssFNaWdFK1xfrnsnypi7Gcsxrq5ZQdwqedA",
  "key14": "2FsDQkoUcrmvdLNzx4Sfzah96UVfHSKZ3CVj6qMng73G7fUDggZYxuPxRmyZrkBnqUrYsDULvxKY7bx7Jqri3jqW",
  "key15": "32KbPA9ScFATiiQuwWjbGtAiXLVTZwwqG7RHWFHVVPrA5L5mi2AmknSBG2dHgJn7NP7fN8137pgS2t6tBD4gYzMh",
  "key16": "c2rhuqJiXkH5atMwAVZpWzjBakgm2ZUxhfQvgDTWXq7k7pGzYwBfq8mihQxTzASYYNwjjYfuKWCu3agXv1upUVx",
  "key17": "2DJVmnNKFarzMV4pEAXzt5KG7Ff3ix1xc9dgojR4yyqosjNMHBTMYR5MD5tp4wcN4BxvGEQF663fuaxsGVQU6dBR",
  "key18": "5ks8bXzmdxV3LBuuXbNQe1ignnyDtM8VJ85UMSY1LrFpjMroKbGzoxJ8S9yi5eHxxi7rthwXQ18XLicZqUcvJ9RC",
  "key19": "37BEX97P1oqrqtUQPuW9kNzm8Sdtmsz2dQtzRYv9MtHCULVxmVy4Ay3g3jm9jrSHyNMbZDoscYcwKagQxTn4JxB9",
  "key20": "3kJ7BbamTqyx8vdKZSFS2CCkxQs3hdmxxfFMkgTYtX1vZat68hHFCoTeniyZbgDHbWichY8r9wvruLLLPJFvoJci",
  "key21": "3AhEjo1kfwGe8Dci3oh44hrwYadkAiXmw8rFQ8DwbDt65pT512wDZtLREKrwsDkfKo17NuMXzeRnnTBx4EVF7yrz",
  "key22": "5bMEboAShjLTsbTGX7RDu4wozJDp5ttoDYxtmWamtyaAFShUBxqdhxfTNSfo9HuFknx5rk8s7jQ1eqTMdmPDUQNu",
  "key23": "4jZP8GYWsqKvp64i2QjBJFcWDVRXBV7u6tkzECGceAg6CjZtoDJMMgbfEgt3kuDAked3W8QJ9f7P9AY21BhruWQw",
  "key24": "3mMvbB2mV1b75rsPx5SkXkw7MHNSWZtknth2H969EiZHMgSeUeLzmA7ozfpoBRLTkrxXoGr3rHLjt2wyvCrDZ1iB",
  "key25": "5bKFAMPQPZuAUQnuVATtxE1RxCpAqveX7vwxiL6iLw6feUuJBi3YGGDderuFLQH5Wi4nUFf84M7Q1vpHiw67tNYi",
  "key26": "2H9EMAm7u8as8AZS8aJTx8qnEpCJJXKPLC6fnoJJ2yVEZEyZ6Rsx6qCBa9k4WfwMBNTuYUWSGrKBCwAynhiJF6N3",
  "key27": "5799QkkyA1JDgxBSM2TXeDqHcTtmBVcyLyP8jGmevQi4oAv4HJLixshQbwPzY6a3HNchYvMMpP4euUj6H37XCGmK",
  "key28": "4eLe7VrERGPACvReqQbTTMHA92DSD1qXyfg9CCAThjaVsC7iDzJTmwFHRBgnfNVWg3DZ4BTsHMGuXocCHXFVB9M1",
  "key29": "2HpSvgBE7JDp4iL16Cx2Jq9qLsEmMngGLZop2XKvxntdg6Bozapa89zCR11Wnp6FvDzLcgfemkEQZ4hXpcKV3AT8",
  "key30": "4ohQZRxMqtxDiR85c8oTXD2iZpzo9NLeHz5RbWjxuHuUUBSKT47fSgA82d5fi2buK8N8vG8JNN9cC611gs2KLtML",
  "key31": "3KsdA1gds7vHc5dHsgabvHP5LgDm378BPmbBtUSupABv11836cXFLs58rQXALZM9i8BLYj5bWLMX7hH5CYMmbuqh",
  "key32": "59vWa2wSgxbqxcTA3LxBH4kz2X29jT1egYPWyfiCxzceroXPcYhWpoHBAzBa3nRCfuLZiUcgrqR6kbM9YqVXaNGG",
  "key33": "5qEphT4XYn6hxnC3VAH8biJJyt1TQeGtxGU6VC5CTBBqqTMQnGvy5PmtrcnhH4bMZqepuYBS4DdMKhZrdJd58T9D",
  "key34": "3owDiNJwrGGV1aakEEf6ooWLALgY8YK12gfMWo9aMss3sMMS32xy1vD6iXcetqa2Ah9jkuvHnyt8Ewb6ULGEAuy7",
  "key35": "4QMH2ECyNWszSLAsTz3vakNGVntVTEZQcFEyQVg42G3L6ZNasHrPVaWnuW7HLx4DDnTw9L8vFxx2FEftVQw9KmTE",
  "key36": "4HZjJzJkh7tAwucCcCf2VF2fg8Wa7tHpgby22fHGjdW1UCnDjhRBtDLGphfgtKHM7vjcReXWBFzByY99xn2Ze8dF",
  "key37": "2Boh5uGnqBUX2hrnzgGanDoyyGfF7w8txwMKRPrKW3nX8ZSgxJpLiBPmAoem3a4gcmXx84sSyDekRoKZhD3GcqCk",
  "key38": "54MsbhMQwWzmoaixKxY4syUnAi1XThKBVCokaRuDRej23Pz8npmJ6McpSEtbufjuvQvsGpckDrLGhjpyjnnNnWE5",
  "key39": "3cHe9aKm9qGEAyXWrATQ5FKtsGCJyqBPi2SoRSAhpbXgjsW93KEYhersuPAj4bSBHjbFLgeUgi6AW19b7qLTsbAm",
  "key40": "32sJhQMg1z65dPTALsmyk3JJuzSGC3CJRhc2feVRHo2eVBNFcst52HZQBSxtW7TUHd9Wq7Lzt6hQP4MVpdwMTxPv",
  "key41": "2XB9s7dcz3RQtB5AWG5ZDCfEKeVDBpJyohnZCq1EFkLw741LBDfbeDry5Fh1WkS9rxNYHfAaecdx9HWH5oxkHEJB",
  "key42": "3eGNXXwjUTiZLzAvQarcFJkmu7HMjrjcK4cw14ZAWYfHaqFgGhF5ZkAfww3oNuEqLK6eemmWs8g8VF1dMNkMXtLP",
  "key43": "2ruEmkMViH9kT2ii6itKFMKCbLmfq6hzGEf5q3T2wqEeH6XGfWXrresWTXu1UEEqxU8LZRWACVqegqx9UGjDwZcb",
  "key44": "tpGrzcyXYjCrU96M1CZsRPJGd5KivvsEUh12BK2PjrBmH4iSLPqy4yGQaTtJZRUgPDXgDKBDpzgTTtBkrYUVNHN",
  "key45": "2PuVS4xZxi3E8WpCWRLpHmxk6S9wgiji4x11A1mQGXpNkrqtUXPng4e4wt19wLZT2rvjMb26tuiEHpSdECFwxpnn",
  "key46": "28ePXhboZDGjDBhc7DMjDetcCRvCw4i4yCGFXAYGft2bzrEK7v7ZCQfdcwqS2tfre7LSvG7jcvxtSNrRYhobUDVM",
  "key47": "HQVsmGwJ9iYK9xWa5tvaJxBUBQiecDBFTPVZgyqKG8N8NbWKfMDVUPLXcRJhBHM1gAJcKkDLEJpChnoRZLHxDsu",
  "key48": "4Mckek4bSJniAAgicMTv4iytABYroSbVWbZQRhPvxQp6cHNZMmL9yz8mYxE81k341d78kTjQFtGG8LR5gz2HnKZC"
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
