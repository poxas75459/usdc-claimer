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
    "5Q4VpVCP7PA9Rr1HV2GmPicvQnxUgGwFDy56Fm7DTuKp9LQ6kqAEHLM2hP3o4q5bziRPvLpj35WprCwUREJDaACo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xhCDNRUixxYTdcHE9roH7s59SHvaHvtf28jtMPYqZdaRyDVP8eTAiiWMLunuMVJK1kQUZ8scGBhjdX6LFo9f87D",
  "key1": "4WWxUc1SscwXkazngMFBhbvbBLCVz3MAxtJpfbe928x12AZ5r1bgEqCLvWjqZbtGWJxSwEpJ5qyaRV424MsDjuLu",
  "key2": "3emqL7uMfgYHbkWtHbi6Bf3mW7uniY92n257yrL2rCQSh5JXcnEkaen3vhUD9j9g5LEVoT9GbuBLt9h8Vwi8adzZ",
  "key3": "4xETNmBgeYBy9mkVQ39x2abwFhjYUTWmoPhPshVG5dsPLz6d78in9UXWB4mdpUiK1CAMPvN1aMMbQGwB66KvvRBM",
  "key4": "2Z5JDgoxmEFHAwDDYCg6ALHcfK8hGY7bfJtAPp3nHNKLhwZuoLgRNUaDtAkZpogcW5p6sQu1gzqLLGQv1g9zz8cw",
  "key5": "2Ng2uRGDKBSoiiMvvt5Eo39o7EoBVTtPLgmCtnb1z6sAzXh3Dg21uTojSGGzUrNH2xBraFvao8GoimxbUNdaQHHX",
  "key6": "2ULhEjCzhTdKb3Wmfd1cxanCBitJaX9iCbJZuosn6eyVuUGBKDn8YdZSxg5dUWAdkxs5jsR4ZHgrNYzU6LwWnmBS",
  "key7": "3BAwy6W6wyDBqrVPvuTzbgDo3FP3xJazATjJWoSBXyC1MQx1q4eRc7YJSAgqoTZsz521EC3D6MRpiZWPZqgdjd2Z",
  "key8": "3e1um6nS6pC3KgYWaJnRXxyZB4pd9epqxdqTfHBstDiZjKeDFbFdq62jDmcjVB6E67oLBKJdeYZ26f9hANGvKXfB",
  "key9": "4M7mfo5YzNw7u1PMGfG3vzFobDHtjiteaHXCrMAjPQse7bavWnLuo77tonDrz7WLjZBmKzzubYaZjDoGom8SqX9d",
  "key10": "4Kzq6EFEqhGKyouK9c7zQRKcVqhveZbTvqa1fSQ1nngm8YFRdUdU8HM4i4dSzargKCUo62fvKwr4ujvDX8Tn7rpW",
  "key11": "4ELfjAQoCU8JuY3mcHb5ZuVHUTPHn5KKSQatecXPGZPjjx1PpTobmG4SToHijMxNQp4LhCgtohn1XCZuLFTBTLYw",
  "key12": "5eEeepQ9L3PtMpJzQtyEsnx5MCL6PJXoqnCgqmx9TtDvdaVZEyaxW2XKaeAz8f7fZ9ixs1pSt1nXGsPkk5y7pcai",
  "key13": "4i9tFmcYk8SppJ8qEKkgKiBtMHVtgrBQPMKtgRbFPUps8ad2APp6ftqnYJm2cUBExHTCUSVYkfTN2wU62po7iPRT",
  "key14": "4FWy4HRdKa8APnzZfvM2VjN6uonLJGABeycozCv12JSDi73xxwKaomYZNJEfhH9pHaSENaPrDxZm3dZUiM8ynuRw",
  "key15": "4Av36XfZx8eHaPGcQvxbuiCvGo9TE4hjvBNvzoYbgbogR4n7N8DZcGB32J7XTypJDMoaBKDCznmVzevJxXgjUXnd",
  "key16": "jycjV2sJpQhZfYEwhA6zva6cxYUDY968EtoX9jRgSnJthx48XfEEnfVwbzeR4GEE22KdWGfsBskkSCcXXnuJft7",
  "key17": "5pTpcznq9pGEKMteSkdCErY72tJdf6D5iTTVriXFXrfTMGnUye198QHeK6TkTVvxAGpfqVoaH5DtCGb1KCpY1LY8",
  "key18": "mKYiRq72m7YcDq8LquwhMSk1SBSmWCgf1T4vtb6i8NHb1bzPLKsPssoFsSi1b1DvK6PipjEgLUdVYfFhqo7krmf",
  "key19": "37R51wpjQ9BJvm9L7SfBNn87UUNCjDziyvk6DMVSRa2zXm1aVHVXwoF6NnNLJWTYtCjtYe7Fp48ubgxpeuasmPcg",
  "key20": "3mh9cN9ArsM9FgY33V4iPJ1nDW66J1LJ1HVUQCUs56Pxc9DYnj8mquggqU1LJFN25Q4JdtM1Gg88VCSPaU4QgW7a",
  "key21": "3C3W9Cf7QQ4dS9CcSTmr7jp7P7nWurJikVhcBGhDMdM5ffRgZ7siagRnqzH5ZPQrAtUzsFu5s6ibEa1paDob18yG",
  "key22": "2FdtG42LFisC7SReiVZHPKpfeZKbNWBipKqofXEQtSc2gxWapPdXiq9Xf1X3cxa1A7YZnbqwNuGXy6KBR6Gk6Q3H",
  "key23": "oFcKEQfSNc5Yps4FhYK7D3wcMgXg1PyKKqwwLrmLpHsnfGgGjRup81HijevKXxsJQfDa1WN9B6kUVbZ3TTnCg7M",
  "key24": "25H7ybgnGLRZXAsxrgnUJwifU1UUT7cRX7LnaCr8VvDxzXSm4sUfyREkR4FBF4NzTFPEQFzS5AWvTe3DyMcZMttf",
  "key25": "4oc5sJjuUJgaV8DZK8nhcQWgPYNVCaUB41nSJHkbuf6xBc8HCMZuXuRuwsxApBnyGNWJWHreVecD4WzSG9CHwtm7",
  "key26": "HzauY32dbvkdATnzWMMtwqizN5K8D6FBRJjN3wADPyjwKbCMNFUCN8G6Ctk4tgfmBNnBugtWnZu8VxucsdDZP14",
  "key27": "3oQqkce1ee2y2FC4o8tyf2dB6vp7Nm4D6XKEyPVAWCwr2DctS3nc3qmVytGjoEGaqzjfGrjsJdGVHM6npvFsqb2X",
  "key28": "4WB5G5y7RU3ExPViyVdbWHPpQQCJzAJ8HQjecsByUcgQjis2WcxSxLPbQc6jgnaDC49ib9FEv4Um95JZWE4BE4UC",
  "key29": "3jJ89BTqK14xcUDMo1FbqeF4CK7puojLLYJ4Qp496c4y4UCFnjeVnvnN6jbMERMJzJN1ndUumrXRpvmH7xtd2SEs",
  "key30": "tiiQAHUnwEwbSPc6GNWARMuaUXpUoEiVJqiXgZ5ChAX8zevSZcLUN1VvhGzhMYAqHMBfrqYDS3mkDf72Uyp7bBZ",
  "key31": "2L5kPwdTrW2uCM99xiUdndBmQwWLyDTfswprmMrSedH4azkbjU8Ktb4FVpMx8jtzcY1sHZnXmBgLqBEThr4e4F4W",
  "key32": "5DNDjSmq1WAq5Gx4J1YhjBra9nRH61fMY2LmZnTEMneUYoMDLDrj4mF6LsvoSBFTAwespLePDMonBqm6wYMJo5sQ",
  "key33": "fKzih4PojPhkXZoYVTKnj9Z3dUoevszoJ3FZWN9MmqWcp9ZvcL9Funh3nzPjNMoSR9vLQ3FHiacZkt4vLvN9K6a",
  "key34": "5G8xbox3RkWze4vh5Uzs5y4m7DQ16yjXCwjcrEwg4BaW5zV3e4upGFvX8JJYBUGEbHx7BtcSaXcs98nvPFugSeHR",
  "key35": "4mJACHiWWE2THXt4iJjdicYrhcYr1gWm9XjPqwYRJo9RqbqhcgYqjkQsvXTraoW6xY5BEBeoekqMU5MjNQeigwz8",
  "key36": "Ug7Am5J1B5qYGiGPxLhWBhZWKdeh31cK8wgK4rLJ845M1qJrG366BThzUP65n64pGARAngMuM2NnYue98pt27vq",
  "key37": "5Bjsh5a5JHqCVgp8ZaruPcaTkm8Xn6bfwvGnYMNyJfZb1VzauLf7f9FrDbzFGbMpFmLLEaakiNAkrDLLNypQa4os",
  "key38": "3VFW6inr5K3QQZPTfqpb5Bksmzpw1pzqMYrPwkwDhShfpd2zYx4mx2odUrM9ve46DHPRRRfMHhwgBJ7Wr6bsBtxS",
  "key39": "2n4365vTZiYziw7UdVoRtqJvAvT5buyy6fDDyaZFLxc9SE95P7cFL59ENGoJZ9PK7oEavdDTKPirPV97t5BxwYSo",
  "key40": "3GPEr4b4KaVRd4aXFA4QGEKEcbmJV5RVQhmxzwzGksaZfYhcsJgLwWGN7RHRUzvyGyGDrduhQ5eim5V65QAgk3gq"
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
