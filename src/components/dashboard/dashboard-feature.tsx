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
    "4tSUyjPuRtiXnWuCKvGEfcnucQWiNfZsvkMpj5jVsrdy9FeMWBP178nC7qv7Py5Xg2bPYvxEddUKAcie7VqgbuiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Y47Y8Hn8VNcWznvHnRn93v3nJvuH67H1jWY8DQPNpWKwnxUwbz5SYxxHmaeAWoMUmsuoPrH4KytmeiU3eiM4Kn",
  "key1": "2Nx59tfj8cskrnzm4wALwicLfixHGEWKV23CA9UndZptBS4ZQu9UPweMvEWwgFHGgAphzUEiAWcWb5sGTsTLQ7Lg",
  "key2": "5F13R7PgeBb3FqMzcreyjzHvroSxAWYfchX24YtdJJLwciUuxrvQRknVTtvcnwR269sa66orMN4yYEPho2RQRmTv",
  "key3": "4FR94MGa2XsyR9ddkroPn12iWjxERRF7QiTkS6FGq6zN1Nwrtd7qVVuQxh7SunKV5Yx8Pz21zRBuR8dMP5Qf8Wiu",
  "key4": "4Z3mXfAFHhAB1npZzMPUJpYnA24rmok1nzcHbRNWv4i42RjatbCLCBBYKTomtYENxSVazSH6hzucjcB3aDUL5oB7",
  "key5": "3vjwPrHAkB6iFSHeSZ1TzqcycwaAdQ4dekfEz3Efen3hbZNAAvXr5FKwwAiAXYtyUiQKJduYyrA4vtfmErmtS4us",
  "key6": "2iwWPLCbocv4cUtzCiss5mqL45dAjHL85ZYxfBiegijMRGZiyh3twk6BsL947pkzpWGunhpm8niUWtuvKV2tmXr9",
  "key7": "4Vrag2Wex1vJYeepw4x1AUXcBBnZWPBWdh4sbHLtFiJCjn4FiTgEnq6YwYVqxw34xQLe2PyG8PzNh22WnG3aD9Lw",
  "key8": "62UoZk6PPjbnmBsgggt1RVK2wwiGnu8p4bMUGut8dAjRHwceK73pWndZ2FdM8sZ9z8c1DQX45Vgq94qNziJAF24N",
  "key9": "dJdeA7XSC2iWgFB6DCpe7mD2iFKJTRvoXrNhm53H5pG3HkmRXc1oaqYvJvP6N496nWZbCmJLG1GWK3YMFbwRbbV",
  "key10": "uLRtTrcwoy7xSd1MaJaTeQvcLNDn6uGS2rao2M8XCG2Z9MnAKt4oswLEgRe4czebnq1BgT87a5eTBQBNUeXr1ry",
  "key11": "5JZ2nLBaQAw84q2MFFETLRdZ4LmhyRC9Yv3jhSySxBmpAzwqy3ushC7e74wS9XdpV7tU9mAyYeh2k3Gp4EFJg3FX",
  "key12": "21hN6dAPZgmcCbMjx6n1SjPZ7m5y3MoGfD3cXC8stMt4r2XkwtQTFBRD2zYt2L73ajpS2g1NgXbLyU6dXFQKybhh",
  "key13": "5TvsmH6qgvzRMVVzkzphf86FH2WMuQQPEUh4ZESbJQ5gmNgQvdbhc4erWpQfdriFjiJK22dto89fX39zrXxF9fJ9",
  "key14": "3mSEsCZg73YTjZoie3DN8pNC74Xy2fTdYmoW1aF5dJEtHQkS6o5FcmLwX1zLeNQvrDhXJJC4Lc44Bun52MCBNg2m",
  "key15": "WQKGsmqhJYabLhx5PrvKovCuGJrY5kamS5F4BAzhHCJZTAYving6RDfGuiyPLPUXU7Ydtj23TirWnaxATf7hTom",
  "key16": "2fgihj8xEqJcRoCwHd9ygsGd4qZiJ1g1mQYuqpbKZhW8KXvmRVJbS1MQXvNZwzYsQLek6mM93Bh6LP3v1BjmwUgX",
  "key17": "65q7J3Bdc6KYrVgz4gs1pdbcA6CMcvcrehEeVzKukmPWV4a6uUDAQ4QSJbFUz8Bc435gJ1RunUXkYXL28W5uoVG5",
  "key18": "aJ1hqmdnVnaVtkVtH4vTLzfyhfhSzbpA7cJd8utRBFASG91gCypXeDE7e4kxJSvrLSTgLZhcEvq4NgZF7qc8T4E",
  "key19": "4AGtPBj7ndbBbdS8bdoSCmrc4nkKCHAKfCjESCQXPjSY359xTfpLENQKSvKY3pubVZuUgmdWFZJaMkeKS646RgfT",
  "key20": "5a99GMMpgx9WnjgE3TwLTutwHECAQzWnps3Pxr2L9wDxxRLbzbTtNsqng5tjeXDbLX2ws38qB73kDHkYoW5VyerR",
  "key21": "3qEEX7d81kDVqFYEjzXrhJZWFoo4zoU5PjwA37twxUPPMt6w5K1b5AZXDCNiiyGHKz1pYrgCKyifdFtzuHzkXVfg",
  "key22": "2f1CWdF698PsfmHzrzzHXRCSD4acMhKRMEVeUTcBqJCBFbyJmHv4Hc93vyDFGapHBqtsoQpwpyg6eW2DnjgB84QE",
  "key23": "HyY6mwQpDKFV9YrpCLnjXJGDhriKFiNiYmj4XuDaDGhhTmMF6A25iTSVQU7p5BWesmAQ3677GR8mkrcRADFv3oe",
  "key24": "5p1qpuQz5Dfk34oCH7XcXyUo3YmxGFsaZNc5n3TccovvyKBZmDAp4WeQCVoLBGPwBnbvMfMUJx7z2ZKg6UK9RtGi",
  "key25": "navgL3cn31bCdwf7Pnq8zHgGYHyVevuszC3ZBEy4N2SmaRYREF5m8u7ccb2f82PVCs23XmFHGwsxPKzguGuiEus",
  "key26": "3U4QQS5WZL7aLXPDkLQ7BkYE8seuZv4GyBz8Nj6abFNz6VSNtQJBxn7o5jufgvXkbT7jYxJXMHjqZjgRdUdB43bv",
  "key27": "4x96hr4sc6VUkQLcgs3MeTiCTGQUWP5KgQXhRFTSbqtAYwq63FEgWuKUp3TtPrbzz9odKtjQA8pDLXe35YUpFQH9"
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
