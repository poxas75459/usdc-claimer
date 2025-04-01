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
    "3xL7btxkTyuXEjQKxm5se1XF9xsY51HeUUz9QQXR1oWKVutzJxkMBbJ9x6qETSbfWxNM1i6k135Ra81nyxaFmdu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HGAuusEjrjfqUnbPHPnViiTK3N6gGv3rULAskwi6up72FU39vqbhA2X3eeojRBKPKbDi1okgaVSndyan14C3GPD",
  "key1": "59TztQkDw9bdXHCSP1ZPRtoQde3scT6kN84PddGG6LCxz7eeYaBXoS1Tq88TEZPreiwWT7YiWS4qkPehYCSq5UTj",
  "key2": "4Du2g1A2fZntjBnGeTAMAUh2R6AiwHqZY2zWcUpQeMEmP1Jixqc6HA5vKuPRdUynnJuEftdJtvCi7Top1vFF5Ap3",
  "key3": "9jRJBLqrP9p8uAnwMbMxeewLvQRh4AhBJrSE4B9zwiP7YHYhPBfCAmi1wsmUpcfEQNCnsZZakKsFQyFLFu14UWN",
  "key4": "5Fp8VY7DVnyQYmbQGdkjjZs5RFwoJUU8x9FCc48kVqrE5FPCTctEJfdJz5rkBkQGwFPpV2hgopprL66yHsTVzzPg",
  "key5": "44UgRopMhGAyRjsZXigqSYyCQ9DDawKkM4QECmPjqTcB8fPR4yZ8FFTM1p11g2gHYFL2HiWVkCyMwEyP9RPc1x6P",
  "key6": "QehGBJNxwbordUHRVt1x9g3Nm3wyuQKmQAXNvfjXcmHBPjU6RRLnznZN3JkPR6SQ5ABv45BxX7aZ2MTuRwZ4EkT",
  "key7": "2s3vfPLfwWytHN5fnS6A16gS8sEMPAze9pyto6ArLJwFZGTmvn23izXaUHK4BAwyBPy7WjjFGxZFpJA6TcPHk4Y4",
  "key8": "5H6B5K5mooTGU73GoohHB7gHR1XyFfcFBU8xFemecVF39J6K1vSMbTSZCt5nHwo3WDFVFPJpDPE8ASJcmaGfNfjt",
  "key9": "7mt9hpnjGdMgi2BYNs44j15JTyTAVSzeodFcCBWYfijojmhaqpDL1kRFu9w2Laame5FV9MXWRq3A15ozVNShij5",
  "key10": "3UvGLp7Vv6AGNuFUxHstR8JPu8jFVCYqj493MQEjCbFzq6hymGoacAd9VxvVedadwAn2uCkpjVN8XnYpiVYNN6ea",
  "key11": "4Zxy5s3yae96aMz22q54S6uAyqcDAJQ8teYFwA2or9PK7LdbATys5hR2wgNRRJF7knNMZvhDwNjew9KH8V5o659",
  "key12": "57nwqLX5T3yYLLKKYzrPBZ1qi55UyPgkf3VEpUHgLJEYxg6eMR8vA7DJZBctjozatrQ9c3Kq6xUECBYtVF1MWBwi",
  "key13": "5CQv1m4SNZNiiRFNmPmqCzitL46k4xvYyTjhPhcKa2vEqTdQqswwXJTUrLongvLsaBLMarghjXUp6QQtCkZsm9ye",
  "key14": "2xfApJWU92QqMso2WPrJBZvxS3KwJcqjxaejG38iL9fLU4hYuvDKPEgMwJPZ3nKcxUFRieRCkXgDKPoyjjM96z5T",
  "key15": "3wsS4wxuwCEHt86yANe8jTt3ETF8RhRWmmLakNVEpH7k7YfmuRjjyXN7ZEePU21cGc43c9GKrkBMQ8TsnCv1uYik",
  "key16": "3hAL5o4vANmFuSGrthshMyBfpDjUx7bo9hjQQFZsgVUtbcpF9GNiNishMNR5MXtyjgCcjELPNjtTMpXuVHUGNBv8",
  "key17": "5KH1WbyLfPdHQP8AhQyTADgeW8kPXvtMJFCVWCrtznW1FKLNLUGb85krimcaGicHsPPPFz3XwCqSxy58oeUhscVZ",
  "key18": "5t4Zy5StXDLYkWS29qFP9RUNdNSSFy9FLif9UTHji5B5Y1z3xtt1KSomqusuKpdxGFn32EY2onNHqxJH2sN4q9Uz",
  "key19": "Fm2TAgrzzjeCNEBhjGjXGbuKQtT9Gk79ipTK5Ue2iLH5CgxSTY3SrXzBXWHudL7C2WgQ7SjrL9nFujYYNgrK94n",
  "key20": "4j17i8973G5DkydKzFcxzCsAZT4UVnYwv56ptD2rrmvwY67d4ZiQXwaue4CkqbkDJQ4LoaSSUGscgrJme56ausWt",
  "key21": "5xz62TS5tKgUmTZZG9DE4jMWTtBc6vCMYEnwRQ7vem8QNh4mchR9FpncS5W7APxd7ZMXc1Q8ed5z9rK1RsTxZPdC",
  "key22": "4PSphJA1ATinEakF2mEC1559yoahAActNPHeHY7XQyq5ep1o7PtWNYGBLqfH67fVBVBmLLo12J82U7zYZJ8c7AzY",
  "key23": "4Kjrqmofxuz6Tkyn2zUFBEWKCwPyf6X5C91ZnaB6coroPkCwy1ig3gdrHUGLJUJ8wHPBxZfeTSJgxPcZkmwsyLnp",
  "key24": "cnyebENyBQ8WFBRtdK5riHg7XsGwQMnHqMD5pcVvoKd6XbPk1CwwxvdKPV9qX9B8hkbJhZY1jdteyLwiyxvgNLV",
  "key25": "58BwyDePYQJSKQzkSsY8LncR8ZTCa4E6Qg4EKbgL5cw8pEjBvaLa8P4iKy9eoip8dnPCaaEeyaos3nhntohFpcDW",
  "key26": "3TzAiaiLgNsRVGWB3ErJDgC7LEmShBojEeMFqzL2yFHETAxofPgYdSBsPuYNbNj7p4Snf8zVZExbPyDHsPUe2gpN",
  "key27": "4XYcyJTg5zghK7DroYaLco2tR2pUVb95Lt9Dkm8L7yjV1GGEwv1AnZifMdPY4syjrhaaw6vUB6wghH1knDx7F47w",
  "key28": "4nwk8EytunY2qfJQcJWDqt4w9ZPjzDrVK75FVnxuej4EH7oWrAYVjTipFMvGqHkVm7vQdSkYvv9C122YoSErEpzG",
  "key29": "4YP4rSX1ntJMtukNMWqAy4sRDuUyCtBDFDGcNMWBfiDkGk49U8vUuW8aJvT1cUdZuh5C1dxmDmWgXUUvLzkUKk7H",
  "key30": "5xsTCdnhNamfYzfE4zRvQLBtf7wF5S4b2foSFeFBD57RRRweC8LkWGFCtxHuG5jqVmNntkEy946s8cbLat4BhVo5",
  "key31": "3FxHXv79qgZk1twUDMFZdgtW1HMVmHms1J3qSTDYX1e4bZKasPF2RaDHHEXFS9mpLWfuQH3sxueL6k9SxMRMLVD1",
  "key32": "5QLUtv6edvWyxcetEGMnijcKyXE5kyr5di3ghciQgaZfYPUPr9RZ4qRLS3NQBn6D4DUdP4CGQLQZSt568n1mqXYM",
  "key33": "5sexFkqeryXySqebC7k1hcZ5REDdHkPxLtzDGiRCz4BTxG85CJywt362m3DAWLsa1sXtDhGYsZ6La9vhuGRGreKV",
  "key34": "3wTfE4wGfdv1FowftVP3mvhv3PSNKAtb1GxgYYMAiMc6NWFPJioymfjRYLWw9hVYMamU3SfStfqUk7okCMB7jVY1",
  "key35": "oLHPq7xe1Ekx4YR5cn4nqhkQDqonzrkHVJTRRFPD9hiVT6ZkjiFoV2vaB4oD2JS1PojbrSN1BA7V4ZRNo8nnCTA",
  "key36": "NAxanXZJqry3wARtFZuyUCNbbxv3tjdAPbSvu2hD38e8y3q7jLSPGYF3PQCxF5XwSzWTdK5gxJbRKne9kFkPVzU",
  "key37": "5q1Yoo3AiTKjSoqv4Zuqe532fE66uXNpquxJqJftpTbxSxNPKEXFyi9GEfWDV58KAohAbdtFrLSjmg58pAWnc5s4",
  "key38": "4f5qbhUGBqLtWgvxGV9AwQDfTSqs3aS6CAgcLbhFJywcNnDccMxVBdY7YKg3oqyy1P27tpNnrMpzTsRt5BiK4AKD",
  "key39": "5MJjCGDgk5S4S8c4RPR48tgCHYxLQfDkB4ZxwUFXHqs8qTiAcMNxrumjwtuGfu7SAA4C6K61C1wdXgxPop3dTzpU",
  "key40": "2V2ngJqxa9FXWp6DaFUv69z5RnhrZtqj7HycRCTeHY3PSeidgQv253A7KvTZwgrZ5cRtkBjMuFA14XsC6L9gWuWM",
  "key41": "65eET1kfG9aMffc7Rya7wmg8h3GDw7T6NJHRsytg5Xfpga7kHfgepxrgAgpfEih9Ape5AFaJCjTMdWXxr4cFKi45",
  "key42": "3TC1GaTt12JetuWnVk2m6PmMaA7GGKKeKndMPYLW9fkK8qfkhQn7teW3tGcYB75xt6K7nyQUAWU3tGBnfsmAhLeL",
  "key43": "53AWJoAYbFR7DaWgyhpu3D6VnuwCW7St4MHy6msLD24aeHj9jJe47utsbCpTnyJ6nDem6b1u4TLx9wqmPkkDCpu3",
  "key44": "3DZiY72Y4SvVF563iS5J7rach6njZZYdYZFr6iHfPwxw8EYEosdLJrt5UZjPeA5PVFqTBJXYYtRyhbemZGvPDJ6c"
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
