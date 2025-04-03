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
    "3KgjMh3k5NCm4d2Jqtkz4L1xCqiFxvX33CicoMWDFX6CLZtEnGMpDwDCJUmg4ws6K2aR2JmfapAXGR9XrvgknzKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iigjr3ujRbrkaqBjVzQpo2ekVyBkBtrZEKCu5iTqB1VpaxWhqPV6vAuRUbB3ifS1K3ccVH3XRgwVjkFpesc86MG",
  "key1": "5KE6fcG2hiGNAH8ct7p8kDZM6q3XGAj1ov2pzZdi34hRvs4hGQWy2Prb7QnZxcfxL2LooPEwDW4noRBZCUnpVwME",
  "key2": "3or9xqkTeetnRM62vpLNyWuVWg7FXcMXtNfyVKSUznY27F98ZJeTrTZsKRuNqRZzyuht4aZ1XguL6hLTo6CaaK3H",
  "key3": "4kSQBmwvn9koTqCfEHBcepNAi35eAnfhFyzD96T4KWvCpqSTrTMH8Ff8Bxq8hvFpzGscDPb4yo66FYterqYGMa74",
  "key4": "eNgTdJ1EWMJR4QWjDyMkr2G7dABgQMa7nfvhQXGwVQXK96wdyZ5DXrd65MJDYcTBU8BEHXC363vS4EybFi624VH",
  "key5": "2cLkDj6n1ERujN8A7j7dBjkdGGb32M1PhjpLQ5Rf4idnhRgsaJNMHqW65ecxUpe6kau99zuG4NFqRX5ZoGeh6ZSq",
  "key6": "4NzkpJhYwemLwVXH6VxcHJ8ci4e6Ki8iUdrMWqRZat5Rrc8vByHawNFnRvrbrYCpLT1saEGawPS2MSzCnYrQAJxm",
  "key7": "6J87eSN39bN315cjCccXGKVPc3YDaPRkFd1UQLk3GN4Fp6VpHpK6WGG1RUUwop9aba8CTCYpRnAckbV2o5uCZdS",
  "key8": "RWQ9Jv3ofWFy6qtR3yXzfUrj2E7Uiu8EVhjfRXwZzfeGkvvaKijmyFnqMV9ZebYPUExZkh5EY7zN1CZjPQVd4aP",
  "key9": "y7gt4mNAXniAqLUYiGYWCL5cKijLWDNWHaWj866875zRvF9apEKAKVLdrSZFY2j3dWwbR6zENCL8PqJRLXtUDBz",
  "key10": "2oMzVQBUvWy1J9AtvTMrMvxPoahZ9TNygqrTcQvDNp8ji5QFPzuHauJwHz33m42BAuWsGAjf7AXxrGAnKJQmi1vt",
  "key11": "4HwFiQ2zq6C9o8VsdA24iz5KE1VG4ZMNxV7dzJKixDSM7htM5AyC4cDq2nSr5eTeqWEroEvkPzKrAnZUXXkJDz8X",
  "key12": "TFsTDu5yhbntdyFndX2mwVkUXLAdaJYKkehKoLKzLixj6fe3kwnYVLAGm5YJND7f8MFQt75DF8se5JmBxhHanyV",
  "key13": "47zvgAjG5Z1tjJCbyRNZz55U5yUfvb7Y58GsRwa4UeBxXeBMtnsRjxBV6GWV8Zg2XbPxVK6tb3Jtgz6C5Ji2QWHd",
  "key14": "4izenVkvD4rxjCc9P2QDiuHM2de7nsGJAFJgp3F9NHYktpB2kg8ofx2EbAydNmw1Cw1XcZS3qQCvjmLb2iemKupn",
  "key15": "4fsmSwfD7RjYezcbkihzbKRRVom4qUXcbt2TaekwsgYd3g2xSotWnoZgGVXrt4ZhdYeeJ11eon4CKDqhPndT9jWm",
  "key16": "5amkn8KaMhE5tAfwkvvTHobKAEYPm7jLs1BT7h7cCvNkA85n8zgiwpru3mohe8NdjALtn79TYVSVo7NkFm9zwFiZ",
  "key17": "23oToKKaSvEZ3SEcQ4bimHs1rNyoofjMvyB7tcNVo2s6AEGD6K5aQg7GC64ifJswdqH8vHX31cYtWDfuq66gmGG6",
  "key18": "2Xgc8EB5Zkx6fx6X3zYLaD1NCLu45Uc5aVAYxe3Ni3yGNsMrUpD4QqW6PHP6EPPQcf35hDrPmNZm2Hc89gL9afc6",
  "key19": "tYKDiQ1nyBLtcvYSYNvzTwwADPZ5BTpBEGRcoVUo2Ez8jADfG6DfVqVj9DP3HnzUbb6pUrUzgTZthPykiEtU7sX",
  "key20": "5m1Gr6R9ZftUHnGkYfCC9C3WVUrpLZd3YLbWBpxmgmi9ZATxP9kTv7kErjHFAdMkKe7sewCUT5mmrK4S4ExbV6s9",
  "key21": "295qhYpuRsHDaDF39cF8bbNnVyVQGrx6P3D9sZYjBAFn1gyz6Gf8AzdzYGVKeVMz9tGoGU9QSZoWEz1PT78FPNck",
  "key22": "4tmufakCoDmVPyN4uDxhwuES2w5fwoYYQ3Jiu1bGUF9zDLgkprXRY4gpn6x3HhpMm1FqM79QJHwbUkGbBaWKCTn5",
  "key23": "29Up5LZVepbUZLJGDNDtHeh1CXp1wrBby1Y6JMF4K3ZWtPCzuMpiWusML3H74DRHPVquLbyNomwxfCTPVvCvCa8K",
  "key24": "m9yYXsko3QG3aoCxzfsy38zwXHuAx7vqxeeM1JbcDBBqTRxB4oB2fF7a3L4YXee438eTsPox3X8XNHrcfxzyXpc",
  "key25": "2fWmRMoNd3zFjRDnWGuC2GUMNswWja4AzsAtDoDMDBmvCGu56N2qDgqT3hhDEArmYGqPWsy6mDVuMbXgJD1Dj7sZ",
  "key26": "61AVaDqA9z6coWqUZkekg7RhZdDNs8rWPyjjnDEd4VjhCZjQp8nR1aNnKYjYqmmB8MoEXip5sqwcFYkTc8BDti9r",
  "key27": "5fSEDh7strCDtUechFjGM9y34wFhzmTbK3Sa3swo9j3iXbzA62JKAYs9YhfoRDw9c4BDsTvxyYw9tQA38UmwQdE1",
  "key28": "54JJ7Kf5E5Zho3c8sXjoTSWEjUxaz1KpcoqYnSHZDVsM6CrU1f9DgxYVsXVeQRZMYjGnGMfau1erJfgYcXv2xr7q",
  "key29": "2WbZAnXs8wDVLdzGZtNEDLBZyJPc5CtGyao59DWSB1JXPw2YDBRyzRTZDX1EaGQcxebBQLTPQzXVXeMTJAH7h1xS",
  "key30": "3viwH6zqGz9qK7avqVj7uDyr8TmzG1852Fg2gdMr597oh4QsM7jFhLpq1usKAjFLi2sMLkiFX6euGE4EPpsvHhgz",
  "key31": "CJXMPdsNjH9djjTiS1EDFAV4qRU2e6ybZ9NSBKJuyXJxr8vZya3fcFEJFyXvytWVCgauscf2PQPo4EShyjvskrq",
  "key32": "JDowDF5gXT5PuBu1DVPhXfAnLksXFbx34GtUtAWcRXGFM5m2mYsvSdWNoxW4Auk8ybRFKeCp4UxC38EJcx9rQ2H",
  "key33": "QCkMYBfwxQQnheTc8Q8N1qXvMvrRx7nhDw63WhDNPj9JGDz2SU1Psj1YdSWqSPe15WgwMbDQ581u3fAFQNxswgs",
  "key34": "2hP9KhZPe1wfwDXH2gCmBkYiLpNBgxYfks7dRLC8SPT8pn7bosLHeyCAsBnbPcLa6jWM3r1fRZ3HhLvX8WbyXgNp",
  "key35": "JcvnUJF1MmPtfabPeTccyjkU8qgrCNWMrmqmqJBQb8zJArszbH29mopPHFc4mbDXxmCGbT85NrADrfWgkxS5FBy",
  "key36": "4eK4DGmbWfHbguitJj7qmxYGdLeMxYP4KYdG2ZsyBm3XYenq8n2b4kMYpimNGTk7FBKP3B4agTAmekf2WkXPf5bz",
  "key37": "3HSp1KQk7kv5XwrS55i4CumrRw3xEScEkvuyUtRGpnsoXbnvxzZec3HEDSc6UuPUbNJc4kWUY5AGPkxX83rM3YZA",
  "key38": "S5FPY16xj8dcWwBJyP6NL8xBvDoL5ZYpwaZK1KfGZUppTigCXFSYo3FC8oLAjaR8Ftm5zLM8ytWn8TD1a5vyfQQ"
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
