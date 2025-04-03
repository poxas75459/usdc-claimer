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
    "2hLp5ZAH4d8NHzTVhduvoSm7A4iy5HWs7EtdS2KN7ATbJP2ty97WFigNYnNAph9j1tWFSz1kKpsNgtyQarVvAPC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cH3o1UGAWUdaxXKCTK337T2tMaNjwWpkJRPeoj3F5iEPdGuAJZJWZ3ACn6DEMJ3iBcLSjvpYMCx1Awm9gP2siXp",
  "key1": "eB485EB13bufHsWQ2k56ZNriphPhubmfCQ2UUqJqr1JbetLe3AoEBhdwP4ZnKFoDbzW1hD3aPWHCfhaFc3GuvyP",
  "key2": "BZeNk4dsuudb98KjigKHxFxpLDhr99sVbAcbKwgbmybWKEzxgzBUMUnmNjtyxnQzxp7MS6Gh1kBwgWW99erUH4x",
  "key3": "5hk33H1ZHUse3N9i4gHejSBFU5kgS5U8Mr1GmgpWSUZPBCyKEzwV934taaWhkpRL4wjPj9vYXv7yhYK7k5VzFBya",
  "key4": "5eqy4DcMHcFv9TWTLaYYtKteFnJ8nxkN6LXxvPvidXjM6d2wE219PbRm97ZJHVFNp8GZpSdiq6dCmkrUx44HMdds",
  "key5": "LctbpVKcfDxLNMwyEc6ZJ6X9ReWuus6UM3nKmk86QFznonPiXFBJsL5NY6WTHHzeW2LftdL6HKWJvYpgd1tgHnK",
  "key6": "53nozuXdxCWxkT3NbobkaxP8WHpvNZeCMgVm9o6J1vswrpkMECxR5YjWMcL178R2C5D2R5PtJY7n1HV8BB8rq3ZG",
  "key7": "3hqAFHH65b45zFuLRj4RfW3H8jUNkqLK5z8cCYKU5EHZRvfNTaaNUEYxcgCMbQuqCR61sWQaeRs2LUGCRVoTRg7B",
  "key8": "4Jq5qsC7A4kybRcjYsVsd39wdiRJt2tfgeg9fQM9MfYqCrNpcbxzV9TtMHHnUpAubmNzTKyBHdGK43KDx429y7gz",
  "key9": "5Ax8166q9JL4hbSSMvo5QTQoovTkhr61AszyqstwQSYZZph2uog4BCcVJYFJi9Ugdr6iid6qJtkXt8zqVXb6kEz7",
  "key10": "25QJUxuVtCfAPibwjNVaa7ok6XtYNr2KS5PDjLCfjrYAbp5qNqq8wyNnMAvXTS8mBMirAM6sBPy3hrFvNEMmwChs",
  "key11": "5UHWMfdtPJKHmzM7TLdsQ6t9SzNp3c6t7XzJjqVU586f7Z1oxfSKGWmHsnRTWRcHBofeotpNwsCpuToJBR46JYsZ",
  "key12": "66NJdL9JMRQfPbbpStoyZvVGm6jR5fN1XvdwnCZXJYW61cDXw1A9E9AgtJf9Vs7FPndNedAFdKGxi423Sg1Jfh3F",
  "key13": "3AtPtGvYVpCGHRovAXnrRNhwY31FdJUyVyNEAGeYS8HXTfvgD38iuA8zBbVpVkcnM4ZB7L7yzMC4x4fYEMjQqk4p",
  "key14": "3viJY5z852GJ2yWKm3WWzvfoV4kArLBoR5CMKQyJttiPvQo9hnGp77s9C4RRtZTpbcY1Cqa1zNLZGryKfGkaCGCV",
  "key15": "3FKGQMpGf7jMb9eunDWqpqNCzHMz9WmRr9vCvKfzFc1RPER2sknQV7eGU9Z48FBQ7EUutTRAK57Nu143efibsMRU",
  "key16": "EaJHMGLmo3c9zec6HRon4QsaGgiwrADJG7Vem14sv1959EmAY4SL6wvWyiGFpThfgrf94B5QSnkSymgumzkLsbj",
  "key17": "5YDiuJMXQZhySjFCd3nn7gocr2CqN23W58nFr4Zt5bLp5W3LXTMgPr6fU6d2g5H2GWSywXSbPW2UxJ2hxo5fzE5",
  "key18": "5HRiBFGAWw8PKpepyYTmAFe3ksXmtyXK8PrqRDEnvvX1UVCsNoAiFdbJtA1H5WwyvnqFEQdAaqDgs4jWzoPknKMn",
  "key19": "UGxh9hkaCVif7UvDGtMDAHiziZ9omr3mLHEcsHpgcx86XXakPex3yc3UXBeUs6DBomBwYnvpfq5nZ8q2dGEiaoQ",
  "key20": "551RpjHgdvbpQiALgUH9RBiHJe3sgeKCNykmVcYr5XAPmwuxskL4KUweyvJGWtXpJWstjoriLcshSRKyiJXHpfUa",
  "key21": "Rpds3hJpFpsdCKXoSRAQ1dgMqScDMRY8dMpNgUWLi2EVQw5CNAgZC1155dTWDmAmsANsPP89h4NU5xieKezb4LY",
  "key22": "3fKZKEVdT58cBjYip7KMAWLuVK7eX8K7Fxi7KCHm6Uogr3JtVXMPUaNUYLpP5qNbSUenNahknpjDuKqf7uJNyxJs",
  "key23": "5L7AqRj4HiAxAWbAxTecyBwo2gBtxFVWVRrcHeyHDJNMu8RYjxwX8Dcp5jNDamoYgwVQfUSNBa2fmme2ViGmUXv",
  "key24": "3J3GEg7xoH3UnGVVBek22xBNNCYodDNFq7EQQTJ7m94VXVvhBRb9vo8sL6GNnWfzMZ1zsTufrB2UWa2wckZgfYz5",
  "key25": "41mV2pzb1QGyi3eYQr3YUUYHCAqSWXSPyL4a8SmVN5iin6zEKNukFnufWiEmXmh5eLttGoUBRo7PVYAvyiQGMn9o",
  "key26": "5rS1YtZoGnx58ZcVSCX3L9yQhaB4z9N6X3wT4oVGWCGxbeR2Gs7f5vFr3tH8AsKo924dpy197ndWLtjQ4Xw4sDrg",
  "key27": "26JZsJhFudt1uKWKYKstT7u4MKg7iU8Qn1PosYZoRJLXB6bJQLLSRveH1b4XHbvdgZAZVMDf3ZaZVnTRChYNENRh",
  "key28": "HfQG367gq4KSQizjNXJwfREVyy3y4AvUxjpoDSaAUDpBrEntLNQLZVupU5MzQbKi8PR9evyLgR5fh6BUxrrmQzL",
  "key29": "2FkrvLVC8dzpXHApBMsH9Y8H2ZwH3gyMaSYpoR4LNpDXEk9owDhK237X8mpWt9GieX8ngksYWjywJg3m6cgWyQsM",
  "key30": "2yv9GeXaPxk6HjjYRNfcA74eX2vU2ff7yw1sefZrxrDrDk5DRfw4rB4Fx9XP2nvzuZUAD95xpWs1pL6eaJikfbZU",
  "key31": "YzrLC2QXJ5SiCapYhXQ4pYq3uvkq5ojszmhPuYc3Vr4abyLBX4wJjcKYmVxNXHtGXUvQ1cseRGAMbHiPEeys7v9",
  "key32": "46w6Xys5KUfLawZvVYW9WN4iy6D8HzbDmka6c6PCthzz7H4JNZ4Qrz4vGQQuakeHsDQ7H7pG3y5z2kj7kxDKeebW",
  "key33": "5DuHKasy44gNc13nJ8eWzyKNHDwxUpuzVf4kqKPCxwyv2rjWQ5hrDxkvEB75DHXN2THg9CpSbfEvDsxEBz2AgNkU",
  "key34": "3rEAfpL2bhbtaZo1uKp3EQpuQ4j7R7Dc7hHDqEqYYYns1m3oAG5jzKSjNgzjXBRABs2e1Fd3oa3BqgKeu5m2LcMP",
  "key35": "5WEqqRigUvoaKL4uvzcJAKzQMYchHDXwYGoro3J8fbPAQsPdhHG3ePYgQd3LiverahqRSdQrt49TZ4TVdRD71Jnh",
  "key36": "2rzhkCJ7MsvdeFXtKYv4FD3pUkzLGJNjrjXhaFXmCnYzxYRADs4K5zCDj8kfwfpKpGrFAm8skDPmtPgo6KDRdawT",
  "key37": "4yuTb1hpFbWkSv9rn2cteiHhtTC5ifsQ5bZxCDmMFgpKKSE4YRrEUEfTCYEMb6wr8eouFRDHK7rfeLm7dMzfM5mw",
  "key38": "3qzsfazxBYZom38Br6WU4PpX91c8ptffYf2vLB8vXNobwQKD3gZ8byHXx7a6e6ksbizsTsN1Z8G9BsfwrwnMWt3Y",
  "key39": "3a4mJJu2nn5WWrqpvRN5suPYXqaYHySteVAvb3SEjHXMqyJU94DwLJs4SuFFJ8G9SP4oVe8MDwXKwEbuRKfrzVyp",
  "key40": "3RQZyFXwrghZk7BZYDNdQBFVVLQMp7jyDitzBGKQroLYEhi6ZEGnM7J7sDHXZfyPfVCC4VSbCeb7QXvJrMPDxUFV",
  "key41": "4bu2ayPffPWGYSNeMKNnNt9TkrpwaVoeKGBQQ2QF3m2sSVfvLRJayB5DdmhsD8EM8PGudPZeCmY7f4yLnAMnFx1C",
  "key42": "4XzPeYwYbVaH2RcLecqXM3r1kcJBzsm8nu1dxXx9bLYJxKGNEhQDYdyRoWnGDSGdbGJEUQbnZPR21SpC1JegeirR",
  "key43": "WdAsLxe6oHQEpz8MdA559bGTWHzfr3TJVPTfaCVeToUenuPnPQkKbNLKZbfrfpmsTRwTWs5oigNdvr1nfzbZrUG",
  "key44": "64utnHaGg6UJCoKaayQkhW6Gw3yqbjFkz4weFzSWd2rhj53rMj8UaiBq8JeZ95tVDhtxBkNBDej2LMWdBgMshX7U"
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
