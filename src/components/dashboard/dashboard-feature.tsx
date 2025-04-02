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
    "4UJirSzdAtYjLjJbSdBPUJtBF9U9JtK8ucKL2uXjYU2KaqowWaoDqfLTiJLpjdgcUqgmF69mXvH6J8ieqxRHeWUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AAMvSuNLwe6cnpPgpmf7c6BxVS5Ce3gGDcC73fe8sdn7FbL2UzQKsyc9kZm1C1fDYnmpVx3x3GwWiTw9cppVUwM",
  "key1": "4uGngH2PQiUcmKwX3wwWyFWFLn3wgjGRJK2phyuiK21MCekmHGUtxgDF9XEVbctN25xcFa8R8tgoLE6gAaYwhTKf",
  "key2": "3ovVmUSHHiE6oxGytaQjrwNi9VP23mYoCF3FRKMtYwNunyy24y3VAfv8FZTp5NEd9RHPWtj5UFvckTNVXsYo724m",
  "key3": "3dF6bPBVFszS6pD297w64fEBhKGndxgJhbDTCcQw7VrvLe1zC6P11e1ynfzLDQCEHBJ67b8tRBXomGEM6MUgayWC",
  "key4": "4ERa9Fx1aEbRCAqYixyp97QDvJCKMEdFRzd74jZv9aL1gPWtY1QzBtkndXPWhZJ5CzdjSdcbkg5jNH8FEk9wNYcK",
  "key5": "5qp5D9TWhEWSnygydirmJxEW2HqrE9GsK1QZZm2MVEQCwRXmZx6ZKVwDgTv9ASZejjxDstjDLMmwux2arpzJQhMC",
  "key6": "12924R1NPBkJE3ogjLaGeu61BN9PV9jEvHVPZy4QYYjJbcuG6syefn4CEpW3gL9nnZjbWE3F53iwdaxt6K2JEk7h",
  "key7": "4yuuvmbm5VakoRFChb9Y2e8FdytYr8zLkiYMxfN3m9GnGcr6mwgwxijJpdxUyQtdp17W9DfzfDrzNTiycn6Aq5Lw",
  "key8": "3cU9EBPdeGhzoWxP1qaVDZCZcG2JChfjdMYF7fXAAf3xXbGRmbqLGEJ6GYVsNVWAuErYPCWqcSYXByiEKdyc84Mi",
  "key9": "q4UKm2ovZ96uWqWAZ7GvNduSQHqftkcBtva5vz6UEZUyyXQRZhCtDzgA1J4ouySevGcX66DcviXSZvyrmbpAQ6E",
  "key10": "2d2wLf7D1JtRduk81QBub7bi3tTLSvtfyowowQTBXTX3pLKbz7XdMZ1bJQShf8qQ3iuFgsQ96VgkH32KQGUbZhMR",
  "key11": "3egJieSLxviEKgW57xrBewmGqA4rDwY5yy6fZ4uh7AzBdmkfj5wbP8vFPoLKKSPuozNzie1HzxnYPZQGMXy2Nvw4",
  "key12": "4J9Uwgp1mRcgd4W1VrAN4GPuMrGGCAmwZE2UkKb3bmpAgbDi7a5FuWQVQd1uof4TLVMnaGJYnRwaj44jKNjzhXh3",
  "key13": "4kKgPV2fAZ4GLcRTX3Hn6kxaumPEeLW2oDEJq4uFSqs53A7U88BSf2hGrw9uJRZLt5qptz3j4pb8ZW9VVt1JM7yk",
  "key14": "GRjyWU4fcdNWdMQvk4vEpYYtv5GUtRkNUJunfqrWsnopn32hAAe29Yy2DHdv15kMsGYn1g7e113MhPZsJcob7NH",
  "key15": "66gZa7iqZAaxcotvK9butVMEZfivnmnsyzRmGNC4HQiDyyNoKJWDdGarE67mhbCFiaWM6mb9Cp7EM2QVpqrYcvoY",
  "key16": "2mfghYuthoKgAdE9icbrsYB6dD6DvSNeRvU6fnbgoK7uYVVNa2WvAVQRz2WpLMCVjeB7cuFnf3HJRJR9NJrLKpp7",
  "key17": "5opA4X3AVnVYL2ELy2KPCzgbcBV7Co52rTVzQE6tPUti5UZiBi3Cq8kH4D9bRW4cESovPCTtkpbMvEesBB17bUm9",
  "key18": "PUSHPNSE8zpdw4eCwfjh2ifN29MtjYhxx9n51SvKauXLAFeoJXu2oXiP5Ptf1hf6RtAoZNn7RgzQMWpUXcofTFc",
  "key19": "2cQ4EKc1RrGV94ptRgf4u5SofQrg5xdrpoFb4FTH6F8qPvCjYn3Tc8ekx1WNDzwpJp17APF8ukyPFCCsKJyeKUog",
  "key20": "2qQGLxnvFtyoAHdnpRytgs2TtPftVgMjkfjjeK7koX1Mwb33z8i1zMpd8koxPZzNqWDZNvJGjoYoGErKBX7CLbu9",
  "key21": "5ursJyRcUvhK8YHXjPuyTDGbnVDnvkF7yrTXsK6da7ZNbn5VTmtEyEb55SxL6dTDD9RzF3DkEqE65xKidCZZSZG4",
  "key22": "2YvCdNkK9xjGzMU2SVA8JbdvtysbggVePQnXDKVA4CYKvQgV3pbZ5dX7emqZ5CtzrvRyhkgRoLvMj362zYkczb7f",
  "key23": "2TLSgTZg3z9gJVVfZDvcHRAxQMEq4QQjeQFZ5Em7Kdwh9DTdDeppUWxTJ4i81TwBAwstUJ3UdExFbUZk1Lbo5asL",
  "key24": "xRar7VZYD2LcQZdpdNVZofzXVGAyhbSCXs4EpKBSLbZ4TzjCh31bz6XuH4tXCJo8BLDtMszowYnLGSDTePegP67"
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
