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
    "3tRnbjtQmCoiQgyDXKWENRS9p85WdU28A6hmNjQbmHu3yrFaV7o2iDjGAEyRdW3LNuXRrfEFkB836mJaVCWbcXha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pZTdXreUmCt51izMeDcbyTChN5VtCPJeSP3UXFDdWXGWBfG2bPTxFnvTvLbc8jXbzyheFoFbkabqZafD5C8R6rE",
  "key1": "5Vze9eEfupctwNRSZBuTm1t2j6RVfLkkZYg9k5mJSCbuMUa1YRMLBwZJP3SejgyaSSXwD1aKwtHGizaShbXHKfxj",
  "key2": "2aUPtbLHuShKxt6oxNqpERvLod8DQDXKTUSgit1CHWzB3Z6PonsGeyajFwpuryvNUU2Wnggt4ec425ymaR82vJog",
  "key3": "3Bg8decZEE7FZfGoAGDmaF8ZmW69kSJi2oq7HEf2NoyYR6UL5jpJqpjqHJUEPbbPD92CHdNgXHmsC8XMNjbp7nt8",
  "key4": "qcSmh8isN3UehEoBfG1tx9m7yLGrv7xBF4MnTUxRhHdiPWqPRmchAurER75d1UyTmv8XLBmTXbCpkeaS5UdA7wL",
  "key5": "GvseDk3zr1KWp248BcM4N4funUqUVHaZTTzijGTyi5GYW3zu2g4f2qkjzbUxh4oqQZcw52uZm883F4txaspu2VR",
  "key6": "6Sgbs6uZZRXYip6PHSuy8Jye1NyrYWJTEr3vGsG81oLH4m83TP9G57mD81a4XaNZvD4obf6a7RfQPEYMNxZyqpe",
  "key7": "46hEUECQQPKMgqHMHTgfA6JDJ7f6964uvNuJvbGswR7kJMg8VAGKNmhv1LQd9ZepmiNw9c8pgXEXwTCvuduWS73k",
  "key8": "5aN78deifoZaEhavov6h5Pumt6RY22NDJSFDv3d8npJzhHHo7dDnTTyR8AkxzYaQg1HmcvCqfAJCZE1mQ7c6czSt",
  "key9": "4W2zNFub7fXUWBEjrTtdzhDWkDcHRgFszXmBop3z1MkMxREkKePs9gAajiDki7tHReGvDykPEe1VAFVLKAzqfXnc",
  "key10": "hCfjmCkm6AvtMvULhwCUC4khXkY4ZNUnPcWADDp764UV8rNcUzGhne2MKC1gMXtvS9kpSMQUXcPz4RZ2BaEdgcr",
  "key11": "NGBqvBfVGqjXDCsMokXE6JKmxTs9eMZ9NGVssYhgfTd9dpQjpp6ahPWkh3ir8s1paVuHsP8JhSg5pJ6K8xUqpmQ",
  "key12": "3zkhQ3ANZkMtNC2R7sHh3EmzAvgyZbUz2PkSkPfUTgobAc1L8K21GwwDapWzuee2dbRT1zXmu9ZuBci1bzQzMAP4",
  "key13": "47zgeGGnEKq8x9EZuA4UHqgGUsd4tqAtXbWZHAQyJ2G5v4EH51P9gwiUxX4JX83rRgCcB6XRQxKXJyMyv7bnkm71",
  "key14": "2FGBWdb3LCDKjhtkc4TxV6TLoCrTk4DdBy4j54CikQE4MVKceQWCMUDrv1vzx9c3hQMdUSC8JCX2ZWK9RjxSrhc1",
  "key15": "5uKkP6FZirkt2MPYS8cj7CSZUZJencPxXT3pMGN7oABHyLkQZYsomAZMMEfGR1aQYzoipEA66YugDYnABNex41wm",
  "key16": "mM9HUVJLns1BHpZXxfRdkykwvzz6YbhZyEnqw8ncjCPoMPhP7b2w4qLkzYqgLPawgVH5GwhYrVpcxogc25r6vWt",
  "key17": "Rw2zEwQiWxEWqiiS6JygdnFdDE9KVemZFrhb4egvSQhKUU7aAetTsQRaizvGRETWP4ZLFAuHxZeAFsv1gsS9Q1v",
  "key18": "2vdxnboRiQUrP1KwtPdtPGmFLiGms4eX33PSDVv9vBehKdtQ32mCaxGLAtBiCP6i6UBVyfgciqvPhbE92ZEfjxSx",
  "key19": "3hmr7YpMxk2VQbcvvj9YqBCtHgwJCm5idVEQMZpnWTTZRsuzyV25Hn9hA2wPvzUdnRUmUxhK5U1K5nfFepakN7CT",
  "key20": "5L1RH9HsKtv6qoAbzwmRG6JfQUxKCq1mJo6dGenScLuD8HFa9sXF92qWCesVJ7vwuHkSvB2M1pqpmHqFaSu9Q1mk",
  "key21": "PDnY29HWqJ6E5k92aLf2yZxdehwoer36j5JJWsuWrVbWSCmhNdp48iGXZrnpYKMbrpXCVsjNmM434YUtzaJzQDR",
  "key22": "5vxJRWpqvP93YvfTKjHdcNQ567U25ebG2Edfa3ZLcRGHMUwTpceP9TMFLdFayaf8azihF1rUwWo7Ua5iBD1yD2oC",
  "key23": "35Zzf4Qvqn72AeHkzGbkTwhrKjSVmUM8Z254P6Kp7LNUQyY4sF8tw4Jyx8pnbb7Lc9Pvq18YbpXNDyN87c3DtB1t",
  "key24": "4XH28yCK24gokhr5BqhbGW4RScEptxBviijxtmc8x9uKfWYgBnr9wGvpqrPstDRnQcnZQzmtCMeRqi7EydAqUWPa",
  "key25": "5685Q6aVhirDgbfvMngybyXvBTiSuK9VT4GatgZVgaeaEq27RegJE7bhi2EhgnMbt1kRv9rDwUhsUsfGmRfrZ2j"
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
