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
    "487pESDs3gAEXhyJ2Ftbo8XeHHx1wCLxHT7nSnpZpNSBVtBgHFDfgzyzH7B7sDnvPr279RtsquxG3LASbYF9R9vT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UqJh6Mxrez2SmguMsY7rBRLt23nYmZ9FJy8huU8wwPDJPR9JSe9q4cHMJYqGWn6txvFFUWqtfikxNyDTqUvSHBk",
  "key1": "5gJK2YjsaDBD7MbkuAr6A3w9vhNURwAXjwYDcPEYCYKpDNMt8EXC7JiDMbNog5SifzLnxGVV9CMoUS4Zy3VSmhNq",
  "key2": "rf88K3WyfkEC4pR6qt2Lkp14xaZ7EZpYAxeDhC83cksHUCqLeWRcxE9xeZJ224dqVCuosQhfabyBEy4GHhJJEdv",
  "key3": "5fJYBdiFN9KFhKd182Rapmrs7jSUiji3UhDgHQdsEdcyWEqnPWF4s7b55SiNoKRR27HH4qSnMSNdzPS1TP7CEhXw",
  "key4": "4kAzdRJ73nKenad4rypj4ZbS11NPbLikhY2UKSaJvCcuq9itQL2tnWT9o29G31yzWYMCc3AADHqSwQhrtxTDFA72",
  "key5": "56xux62EnwSEdz5T7gqR53mRwXjfKiDR3Ss5N7GRmXdX35rxfbUdnTa98Jor5ZRRmyTRBi3g1eTHwHZqwGfPkeCR",
  "key6": "6731dQp95e1mwKifraKpD9XrEJDWNgJz3VmtjrBdxDfgtW3nNz3xuGdh6qZ1SynZ4iWf1uf5RRb1BjMyDe2PRjYY",
  "key7": "4QJDtrjBcV2uXnB6PgZWLdr66BtogxQGNqki6wBQzjZANnNrNGnfWdmegC1okXUb231SjGokeTqGzbYjaEXqDyuL",
  "key8": "2TCFGHehFzG8u46FJDsEJjgr1V5SdNmUCW8DSKjrKFVJxnhxqLdDM86L9cQNmh1Tk6qBwtkbNqgFeTS8YfrRWfYh",
  "key9": "4WLZoZDMJsnikLNkHHmLHsieewXSJJe9Haj6cscBbzAAEygTjbVkh2hfrLDXFJN7tR1qpwJad7uA9LCK8FuKGUYP",
  "key10": "61HLHgAngcX8QLoJAfd9EcJ7iGfF2e5JPk2fiRA5LC836mptL1BPbZv4v3wZnnWBbmG8L8jT7hokrcoEKqDgkkMv",
  "key11": "gWG9GB5AEMAzYrnVkLKvqugSV26WctNFFSRWaqQcKM3Moj9XyNgChm3CWtdwLUKsEzYdrb37g4A8ux4e7t5exDq",
  "key12": "4u9RkXKV38rLtLK4jQwogZYgSJD3W8d4AHCP98FYDaQEAKf213kqE9o2v2QcDmFded8VcAtvqt9AxV8MqriMnqee",
  "key13": "3HJcqd5Bq97KeAk1Xv4PUsQQVBz4r4ordqsVGLQm8Apj1GsecVST5NHJopLKptArQaLakQytzQVXmpQnEGCwYqCC",
  "key14": "M8SE71UczBFprngS13yWkGcnm6kEd6tsJ35bQkqhvjgsDQqQPQmqbMQqKrQnAPyhVzPEVzmQSB94Yj1wBkShJba",
  "key15": "3N7DgCZy4ANeBosqpqPm8knzrgyk4xwNhbacZEH775Q4pU2jQWXx5zWem3itQxmPg3giH5kp2Xw59KYgnrbucnDi",
  "key16": "4TVP8xjMnbdVi6oA14e2BMTsaLXQW7MeoDeEsPX33vUZNkya6xn1DUVcG7Yk4FPeNoqqQi2ufJTZKbRwfu811Hr2",
  "key17": "2t9275CdfTV1XfiE3H6jGJMdzhkcNEnokgEHYbJN7E2fu4EqUCDb8TdcSpmKc8EayUcs5Zx2DSdRWFtKMqnkBCFc",
  "key18": "3GLvbYDxPMQyTZU11DAgkYF7eQmXsynM1JMcfGnGzgHyRVv1qpygRxqnprtRr7VaAPvXr8DoTF2U3QBvha5oakT1",
  "key19": "4pn27u5QnL8zg5qdXT9RaLrSJ3yuR3HTnkyDe39cCuivxHyt814b4Bhyh6mFgmTMRa6brfAGzT7KpoGKFonCHjEW",
  "key20": "KPmCX91zN6efsTsLnv3T5zZnU92SyqPtykDpJ7ZrzKmqE3EM45peF9aL7LAZHjk1VSYAMPyvMxKMSMDpme3YQox",
  "key21": "3ybx932AmkTJkF5x11f7CyzNdgpb5KPGbin7fyGpHTgEMYKB4pdXVHwEzWP1PaXt1yAPb5Qi5D4fYfhMMh73eNaW",
  "key22": "3WDYGrUFKBc5oBvGKjtPSDcctavYbiNictgRm7yEGS1rPLAvqD2cY3tLbkygyPh9bqrinMGBnFFePgTKekyPwMtY",
  "key23": "NB954waPSTwaqaq6jMWX2EhvAA9ZjUzrpDfRS8bJg1Brr8WrF5nXaVVP4JwTQ6SJ3FjWM6ZCHmtzhuQmEEXPpGE",
  "key24": "43apyqyi1ExqXweZLX8r3MASLK4zHPBT5JUeQwGSw6tH64kwc5YzPV2m9CEmMumehnskmSUn1xKMfrfvA2ANRvTT",
  "key25": "zYuNpmWRyZufZ6PDNq4tYcYEwcC57diWt1XLobkd8V9oZxyQPjh2oQfbCixsLzBcEPq9SgNiYCfDwseGVGVPLPG",
  "key26": "3QtxuGpAmbHgVVnS8NKobWMomD2PmExbMnCo4X2idHTSmXF7YVNgZeaxHudCmQiEC12QPQBd8gVFCYovXYL1HP1i",
  "key27": "8rCUde4e6h8x47gBCRjG8GPdv7b6PXNsGdDHyMJKhysof36ECox6wX8DfkA3QzyM4z9ZfHBn99dneTCLL986xot",
  "key28": "3MQjJfjNvc1cG639WbakZ7aSqggb5LrQy2H1Vf9BG5sRBqgcK85K4F6k9mVMnt3EemoXqWwFr3wbi2EYk2jMivUh"
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
