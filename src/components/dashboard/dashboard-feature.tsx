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
    "5HV95cdBJfYWN67CefmnA6pfecZ5mNd8FUT64W4WvRAAdwzkxRXYd9NWSshKsGFStkHATTR1NG5q5tAVNnokoPNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k3WsN5xuvNUYJAgeh9ymg7VpnwwMgnYVksSV52VyjAVcDWtDaqDwePC4eQDGbdyupV4oeWZXkjAkWqkMU2cWsS7",
  "key1": "8iV7GV54N6Z7fqpQWwABCreFisAtF8zQUATvCKt3px5bHr35fsUk6bhkJGV9YEDXSVqM8qAsAxu3ZoGHD8ePKif",
  "key2": "5J1s8S8VPC3fpo4MfKSXWdfDSM2NoYk6DUy45j7X5VrpByrwNRcXRoyu25xFyYGDCYH884B6t7Ezn662KxjqsJq1",
  "key3": "454hjLkBdTThh5CX3xWRTuCnZRiZjxrGDJQ3JZUFyX7Nef64UMx5JppmLRmt2VMkM3E5jd1hXZ9wFWNNaSXZyPbG",
  "key4": "4cLQq1N6MaBBVNtR8PYwfkV2JC8iMFpYhQhcSmdwLnHBBTJSGX4eL9ZvLKQp1MF1RptUqvXmv7LfC39i3GneShMP",
  "key5": "5a9gsqduZMYnUbBVGjuMr37MFfHCFBYe3azQcLyCaxmL1vfPsUdWzDsAiewnXTFf7fDw8AsPYikrojm1pWVVYBsJ",
  "key6": "1mufnqPJKm8pNUiYX98G9onhFZe16jV74qtDes3ad3oMk5QUqXaCfyZySnn9dWphWSg8gFsbbP2eTyqw5ofnhAK",
  "key7": "3dYtQYRHHrAKHrKFAufcoV5DAiP7gzsk9EYHoGpaXJiRct3htGgnMwncHCgBeR6XGHowoDkTa291CNzw22JWUy53",
  "key8": "5Eg7W2JaHekDUxv1pBh4B2NCaHn8iC7PQBt1iv8PKjqqkfJFiBn4HuWExDyVnHKUYRkd1Lbp7BpapJxBPzTm2ifw",
  "key9": "3NFyMCHGcc352oZUJdwMMRxhpQGgokWg5teCQPddNBYodcgvtL79RZY1MdTVSoXCHmaPXvGwgKgymXnyTv2ATz7n",
  "key10": "3YPzR6btHXjuhozNFXHGMr1aqeZ5oZLWyRipTUKkekes8qfJgmPSQNJcpX27RbhCA8qKVRhRWRQC4Et9nwpxX3Ap",
  "key11": "K9C42nVxqTaY6rP75zuDqq5YyfvEMwE1Eo8ynwZTKhzhV6h4a7aS8SZsbDC18ze4sNrDrF4QUiH2Qu1SDHcuhWj",
  "key12": "4QAeeUYUcdE2q4Y5aDg1JK4jRmoYnbDgJkAuSs8GnqhaxyGywdSL2oG8sPMNJnJeFgx7zpBssRMpTYHEty5sjLKV",
  "key13": "59dekfAJEtM22gJdfm5G3p1vb9tjF6w1BDbcNqCzVcctfF6TDnsEw92hWSUPC9r7rgTg5fAY2Hm4vvSmijMqdxyj",
  "key14": "4jX6e7kpohEM6fDV1BfdVFRAWeExDMbfRBiNdVe5dv83c7MDoDpjesGv31oqrszjW4iX5Bg9aFW8yhXGa1b9cC7h",
  "key15": "2raqbrU9nBMiNuCY8T3T861NRi7ocq2aiFrzHrhUCuv6CDXRWdFkEAK33bZ7DCK12j9M932tbq7rZo9kf3UizMGW",
  "key16": "22CfwoXpfNF7yNyE5NC47pSiYar3V3a1ckf1DHgDiW4hLMVkQGgXwZxkTx22dcBp4fHd7AALpXFRGnHiUWgYHXrF",
  "key17": "3zionKSRUqAZN4A91JxKqkG3yqygZXP1R912xsec7u7AHXg61comRVqXYS5fA9JcVV9acf8KEELBbiX3qvgWK77E",
  "key18": "2VvL1Py3EbBPbme4GHrmnaamXdYPW1xLuBU7S7rr9qLDYqQTDHNSpfaUYCfLguoBhMWQpXfkbb3HXMpZsrVXCz2Q",
  "key19": "2MsGkp8RpG4R3Y2jQYVvMbsJiY39jN5v9g3orV2QJovfZN1U312PLwNCNmwnYdAQYNFvLBknnbNCw5ZUHnUpJeDd",
  "key20": "5m473kvPWbgciQXevmN9s2QvDVGLFvw2yxsrvxF1MoszAXEdFNVYgaDPDrRLEBAeFP55yhVKgDksjjLt4DweYJxG",
  "key21": "4vgAkPVNADgBKtYP6j1XC1DRJHxcvp4BTJs1CUgtMnTM2QgUBbusG5CvnamDbUPtyBkz2wZEr4or7JqNUmEFQKdj",
  "key22": "2116jPY31qSRnGDVKv9VqRg3q18wYrnSUvSjAiubXzsh4Zj7aDAVQhqU7y93zrxGDseQndvEB7T4WWAxTJDEYBuG",
  "key23": "3YmvzZuMiY6N6JJjgPQPNZD8fY4qrmNyuUELfseAwbScHDVPLqUq4hJmTazoAb5jMUwTT7p8QEVHjHCSKsoqkAKZ",
  "key24": "Ky4Sr9Pod4BEqWwETa3wyXgCYZSkgfYbDYQwtgWuPB63QjvDanDcw4kA1T9xMPmZYUwvs95XTUykckG4f2mMbC3",
  "key25": "2eYfqwYo6Hka9JuAk3mTWmMPeKG9CUGaQKKXVrwSC5ja3gcAnH9SMABxbyJWDC2UvVzDaXwjrYzs8j56PMSTBmWD",
  "key26": "3W9yps3jp1iKBfzbbGdq4FsMbBc6De716GuZ6rqA6wxKUZuSDnR5Sbrxa6Sf5wVpc722rboEwKAmpGanKcr1UFFu",
  "key27": "5HtPYhEQVasU8XLqjMG4z5DmGKyNNLQf51ZLcVCx7PABFVCyES7ii4aqmPcYxKx72Q8XPjpZ4vW3kXi4f5JHipQb",
  "key28": "58JjfB5XwN9G5ksi2zxWBdetBRYsztSnAowSvqhmwdXpMoueT8JZd2YyE8nQn4wiZRUDwWphSkdpwySSZARTXgLj",
  "key29": "3Ujk1xbbVy38vXvsEBuReosQEQivUm3acMSn6PMZyy2h6fVmdhC4gmQKPMqy7sucWCwd43Sq7JhoqFnKGHNo6Mc7",
  "key30": "4NWmqHcAebCneToKp1vfsXA1yyvEbEskS1tBu174gc6rRn27x5Wh2iThFKUzjJxGLDNaW9PjEgjeUaiJ8SCsBQMH",
  "key31": "3iftTbbB7Ueebp4gqmv7pcL6vR4qugiBRYAP98VCt8HNxBZ3DAXKkLkmnpnDweskjxcrDJccuCYodSFATSy3jW2G",
  "key32": "5dwiyezGB6eRars9KQC62opKiApJmAhxsz7dnZcBfCm61pXP3tAKcH7hUf2rNUZ5E87qQkXowRH9ZUvEnmN8QSjB",
  "key33": "3YBhoSqNoT6cPaypqtvhSJnc58vbcNQW5c9Mm8daGMvJ8mreDBjemKZhbVKeWR99BE4Zog2DcHxyZFwV51m9TqYn",
  "key34": "4d4yQEPLrPVehy1kRMegZhMWxb2h9dn7Kj4HZMc8bbx6R9jVW7wXRunqap9YuBwLDDP11oz2vHssexLiC5F2ocLS",
  "key35": "ByFEh2ZsRx7zqbtkJSVJ8k4SWb5pJGcdkwxnrJ519aAGJ5Rnk4NVeKS2bHDhJzqBT4jSANNg6qHbnAyp4HF8Q9k",
  "key36": "26cGsQYz2zjxugztx5ha1Dfu4szvCG9uB2X5XtNqjrfQcRcPU3UhmNUavMh45HmcafKBpDq4L4zxmcruSsWuaq1j",
  "key37": "4KDj2GTUH9FeXbUCq1nP9MkN8VXw7mBdrzWb2g6Hh4VsWKftzFJ6nRf2bjEJk6kWs133TEJgb9yH97dh7E22bMN3",
  "key38": "5a3FiNrb1jGEQFyoTfhFk8mC3RVJfBVjzQWfWFjZgPmGGiVx5m1nHDxLJrWM2vB6H6ghacCSrnxBqEx7SuzbokDN",
  "key39": "3AS7pcvvCCGrUkhMCu8rWVbcT8X7yf125XXNHeUxbui9GeN15r8JsFD2PEwiQUhwt6VtcnFmoq5u8X8xMxMkv6Gk",
  "key40": "4wFuQLEh5QMs3kePL9ErpcM5RV6nPG22z99EbYJCefiVWDXFJbxvUdTwzYitJefC2GtNUsbmsbEHsUJNgXxSCopC",
  "key41": "2YfugvUL6HFTnW7B4eVaX7zgo5rDwwgHaaN7EVzhKT4up5m9jAnkqarK1hzpMDosNTCiVt67BBDSGXrYzPTGcnFx",
  "key42": "3SCmNnvFza7zdMQnccwTiudMWSXTqUDRsekrxeN9XDXM4DFpuqkoFC6BBdWoDXFuStcqk7bLtv3qjMA9txR51Zqw",
  "key43": "4F94dL91QKANgUEok7qayFoGvuoPt81tBaKyrzY2c83dWHUkU8LvfxBkk1DGdQfzoW5oeQSfYo4yArQz6kNkNi7g",
  "key44": "5u2QygkFr7MYFTFcWa4pPvcb1hRYqaAvCiNAPytvVMda5Tfu6D3Dy2CXY1kJ2knwAAhZ85RHDefmW7gAXsMtYa7z",
  "key45": "g7oRhB8Yw3iqECKQQjtaT43PF7CCnwR4NKLr8HM1K9QnwuStdL9BaSPLWHVnEDYQ8kGzUBfxbpLmbBDAQZ4K9ue",
  "key46": "4eMKpjGNS73ifBdSPDsUhPVPA4dmC8g3sqKbM29jYP7V6ghmoUheuSzFi5k1MnKjoJzF6WWJdw4hWbG9hMTSfWyy",
  "key47": "5rWkLtFcFfVyr4hAgxGKYoeXJwwfLYmnoNSQfJCsx68t9dvfSyZ7w8i5CRnrrtG4N49iQVWDCWRnv9dKK7bBbN2b"
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
