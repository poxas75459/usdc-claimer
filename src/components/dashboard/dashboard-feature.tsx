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
    "4rAKFGMy9LN62MEbCheuND72q78HK2c9hJuFTR1CXFstEzrGoV2H4VJjKY6QC2nM2v1gGH8SJgnh2UMSim3PSqot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f8MQ2u6crPJ7kXV6iL6Aye7Uj9bco9UBxzaEgrRoZntvqvfmD2xz1TH9WQmpm5eNqQUxkNDSJRbAUzqouHFjssw",
  "key1": "46CnSe7LRXpMDYDerQS7K4oazouKGvh9vXV6PYn5FqisPvFZRDnTbDK1ZWgDoWCzr4RHNrk5XcatFj5Gr8mGAkjf",
  "key2": "54yFseyEKHwoFFaUBjDNg17Vwx75FDQGx9rSgFaiEA1Rks5nD4c1ZE5DJL7GEbXmbBZPbPYPLwSVw7DHkq3v427H",
  "key3": "4CVHUz6JjTSjnfHBwAzQMVZs9C71kHjZzkSgwQ49PLSquCbBWcn8dsBGcozdEpnGMCDY7bioUhJLietgLAvCKozA",
  "key4": "61W6zmJ55Ysswix7Ns9fMxZRrJdz4DRRXXrsDLzaBapK5fcEjeQs9A9NbdaBNi5AEwgJvvPJ4EBKZ8M9SFkZh8MH",
  "key5": "26KKKSUNx26qbhDVVsF5qT5hgXE9SBgYNTQ1cBqDEjSt9LHoaE6jMJ8McsjZGGP7pybLScYFEjMEuHDaSfkAE5mR",
  "key6": "4QvaRjCDArfRuhU5s3fhoSNUWnUN2stp1gSZpQEXDbxuo5fimuwLGEcGbvrHztpSY5ZU4YWS8vs2JHZmtY1kjDVm",
  "key7": "2c8aDUpYBKHANGvnHmjmeq5DHYJY2rXUycka59B5EuPth1Wh9FybPjzZLkJjpp2pgN4Eu3usoUsXkExm83g3k9X7",
  "key8": "5daaizQYX3pcsMFYprVjJQN7gAZniBxEYmLSKq5JzBTq8tz4GkCjRTrF7gtCi2dHpWTaqLtzLQbWb5B58QGgTndA",
  "key9": "5Av1vdEmQvSBWRMN8WpLAKzEWV31g1LWYK7Ja8cXWAVUmtqZuAoTZ4wFS5aeySsavJVUxmys9gwncmYocu1ZCTi9",
  "key10": "46LSWrZY9kgrJeKM3PzwLr2cSxQcPw8MWwpcUQnV9KW5FjF68oB4VKSCfYgUgThfbCuJ6yHjpuBweCR8ao5QbWzm",
  "key11": "5R4dHa1uyv2GJEsUPjNNamGqLsWo8YYNxzYFDSomYVKF5qgSiP6zAgoqd68mHxAyeGMYMEXFs8ABdSS4uK3RsyfX",
  "key12": "51rYv2Cs57rTMXya8k9BrX5MAEzvirkBr1vq6v1oB5SBP2zeF6ERgdPdkWBACkXwTovb8nYtuiNtLjBkg68nRKJr",
  "key13": "4Eei4N5U446mZyFyD8dSW4o28B56WZPugfhHPNqjZ5T5Ju7XcYkTchskw4VDh75XBNrKbb4qWkdmp6kf2g2Ad4vS",
  "key14": "3xbZvbuEu17qboYUeHTAhJSMGocNVmSieghFDf3Ui2BkpxE1q5BJeQkvZSJTetVaPETkc2P9gwFV8TpaJ6Tu2x33",
  "key15": "ExUDiz6K5AmTCzjE5iXfQrw5diyYcdPf4pTsBzDTY2xyCfTjzCK5AcQCHywMDtqGu1xg6bK1n5pfZqeMNauNyxH",
  "key16": "2CpUqPiYtbpD4QG3MqrfZHTt4gjJYqt9Z1ormfdoHz2ZWd8HbP5DS7T8ui77LTsGpiaTAHTp2mqjjKsK1Lj1AGno",
  "key17": "2RiB7pEZ42ub7vJEfb5DxAxDUMhR22Q2hVhevqCr63xCV7yBiM2VVQUr3BpRzpV7gghbdqd87qec2ovqjbteETry",
  "key18": "5SojTWpcQeGNidjaLfTydu4SdzS9SsWzNY613PBXwQGsrWAtcDWgdrn2MxM1tCVmjYRWurFwLwLjrGaNQ9Y9d5Gj",
  "key19": "4mmwo4SrUVgYEm1WL9oJXEkxTEBBZePVfQRh4WA3Ao5YTDgPnXbFWPK3gJD17C6ZtZkACV2FA2t6xnZfUn4KNbLu",
  "key20": "ux9AurtooVTJEPS3cMe9FLtGiB7E6ND8zbyfVYPwZGvbDdGMLDoKNvVBUhRMt3g1Nz6Pk9VKZtZuMjd7SZZTq5o",
  "key21": "Z5TrGkBseHxMW55sZ5FRhXjfcgJfrzSVhbb5CA97a9adfUyVQN5tEhQC4zK7Jud3VqkuX3btCNqBPCFNoCPNxNL",
  "key22": "5CXTqSi57ReE4fuEX1hfX2TQfk6sJF7UBAQBZDpw4d1oHCU7fhwbWrfxHSYWLuyBCmjX5T5dfMPsN9vduA45uSeL",
  "key23": "3u4BNenVyxuexZs2sejbCsagYySJUcWJe7tt1MFiXRUSV9j8hNAxqRd41sxYPYjFMgg6azxPyKViYLvZDrM5bGfX",
  "key24": "5SxQGKAzRrQnfFMMrnqDfGAMhcRRyqMoHrsNPVuPbYPkSigGtTcyYd1UDENgyrKxrimtpFYwCrhspcHNhvJiRqRF",
  "key25": "5NKSuetWe7RZ4YUFDomA83dMAojR3v7srXdVGm3en2CpHp9bJV3i5qZ5CZzAeSZ9ZE4jQXdhmy5A4fLrnDeL16y6",
  "key26": "Bvk4UJsTFvX3ctMB49EBzyE8DbmLkcNmft6mfg2Yij8KgUhDGRY9DPjaa2x2gUDZ26RAQoUVGuA6cGMa7ik2cWc",
  "key27": "5UW4qAJ4h3YArSqVWBoEBn2HAyinC6MDBsaNaQdY5Y5EtjNcNGLUrVPRbwmSDPmnr7m8XFs6q4tvQukTvn9gdkn2",
  "key28": "t38EY2sg4ZAby8ANUxovyrGgMSVDo8W4fj6Kv5q9jLNDYb4cijZAyNtuHLZmFezyf2TNmtJnTPLcGLts5e85Nxh",
  "key29": "e1jRdFk82TCA6YHS8TTYe65hEha8Db1aJBxseU5sznRM2KfMPxBogiMXfMzMpuDKrF51T9gG8PrWArEGSJP88Fk",
  "key30": "35tzfex1TQd4VKQ7jv4DHUDXDwBHCwQtEXT98gc273XViYquEbQDBtpsh95vo4w34pXiZUcRssya53SvHe87J14q",
  "key31": "2cbP57dWHCFSnXXRHjqx3XR9VzwccigE6ByAYnxK4DusbwdTcdwfRexcMhWDVPYHmMYSJv87TkupnGXhLWyMrVjf",
  "key32": "2fp9eRVmbCdaEjpXoXUiEJKWnAJAdTTXdL3iUtX5kf3ngc2yUxPCcCmDquXFXaZQJRM9bULXWMof7ufCzmZaTtvd",
  "key33": "5MJnN2kXQ47uG8oJjXWqrGRBbhakbwH8kZQuWMbe7mtbn9wXGwzKsdXxyBJvFkj2FVaC6rt6aFUoUQnHDn7Kd5UZ"
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
