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
    "4jscqzmuWhHWL4BG1sarJiVmx5pJUKVEEhQg94qoYNhKvaDaUY6AtnsVUGgjb3a5sdzmQJKR4FpqwP1Vv38zTkdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NwfRKb4y6TcVRv3hXsBWvZy8YHyyyL8wG7TiJgNwf3KshqhccVfTcxv9ojso3inWZJRstNVAfLKxdzXcjsqyvbm",
  "key1": "35u55saCPL37wUDoYZPFeYioHPwGx9YqWbFajWY3T4FfKkbGAodZaHboJh2eBJpLv7peaMDYeJ7CKE7NwCPuNVfV",
  "key2": "5MTQ8SWsMQk6CBnY7J2y6ZhADgVfm5FeTPsoQp7otDnW5bG9Z1y42V9juLnL6eoyyrY9Eg2LeNXzAeNFuzAnNsGF",
  "key3": "dkhQr6UTzGp2B8Uuc1yGwzQatU5KzgELNFfQbA6zykMsSAm7TELqsFWto3W3m2oeTXsKvHtmrNfwa44zMGQvbWS",
  "key4": "61gFT97FWQ3ajwn7pARq6eLLvJt8UZWdpTbNmkPq1n3ndyTUEccTXwrsrqcNEVKWbrbyaYCv5kR4HDu98FfyZ3US",
  "key5": "5wu3BAtJQ1FzmFUnR7eaAa6wgXXjGoThCXj9VN1bpUZaqpkZ2yXSoUV8a1qfqKytJdJB8N1VoiSXn9SwBjWeiBAu",
  "key6": "2Wq9PDqeJpnMoQZxR4eph3NvFsWZQP1HCXSwuHuXqZB9eH1LShcSj4QdoKx78j7QiAHSq3cpUjoWrzmGYQJJNgXX",
  "key7": "2KNez4QCwiWjoXJfMFK3ThfbLvGb3LcDr6Lu7WocMhZcijM1HV69rs8GVeBECRxE3fHHVRxFfYK8XQ4nCY6cBE8c",
  "key8": "4JWSgo6YaSPPiJQKBfQpnsPCRBrL46M2uceLHoDa8VxsmSWe2hN2EqQYPchkYiYjN6PE1GA8UGUzcg18AU9HCSiJ",
  "key9": "3XXvjVqQebegPjfGHkVLuWTsDBAy87wX5eiyYqJkjqCmraZ2DzcediCTk8LGpSQtAZpUmKAsSMhJpVc5ekgstUST",
  "key10": "2Tzc4cXZyjX2jS1ipgT1oQi4bJH1kKPd4Qn8iqmr7jStYnFpgLmjXq4w1sYfo6LFd2roQV5HNZymMP8GrKScTs2Q",
  "key11": "2y7DqUK4HwdqBBrTr2KLFv8BG2UbdZ2TQxRxvpAK4qv9845t5RVkgweCTptKUGgrGrkPy7wiFPvVeh75kr39q2TH",
  "key12": "ZsKgcmzpozs1XZJdoZ8XvGHrTixQDQBeBV8gPa5BrYp6A4YpH9bGoW2KXWan1prpB58aLGoPHRD9WNJ8iL16nYu",
  "key13": "3KJvJ67bpL9Td1968gQ3mmWLVFa2p1fHPrgposnrf1MzkmoqFFhU8k96c8eg96KqW4EwdQYMxzCeNfuSiMxsV44t",
  "key14": "4ShTjkn4MDBh6tUgU5Pht7ig31gWrKVNP9mM8qNmbhZocv2kPR8KMruZWCkzZFgVykN5sD75Hv1L8jLzTSiy5QJK",
  "key15": "5z2phA6EWVteJTq782SHwDfRzvLagBmTkepcvJzSCRfjYbnv8aBAB8ud5sWdQnvUWkqk6aQGLTjhrfCAcdXc43Qh",
  "key16": "3gyrwz5jtwhktyemxnWm5aRGCq4vStyir49WEmNoWENhnDaTUQBHaGYbPnVcbLjE9sKXZKkA3xpgQb9e7Kec6Qjg",
  "key17": "3JbTqszhjAEzH3kYyQQtqqDM2D6DR5oVVenP43pd83cL9y4WXYnMFtkT4rhgsqekfcZEePs7fvHyG4zGjXj5wZSy",
  "key18": "yPgCtdZB3iXruTUQQdJWscBF7yrjWSLQfk5tKRJ6neseWWmA7a4wMSNq77j5buAzpXXX5PvHKBq3kqby8jSfuYR",
  "key19": "3XV9s1umKzQpS9Gc9kqCGMoivbNzepHCAgN7HKC3bPR4EArYhndC5hD8CEXoMiJCVZusyAhd4RF3aN9pzVA1TMsz",
  "key20": "2oHkCdWf54nDZLaPvfGimTM14DBn9gVPkWYy1v2n4dk6naHasV4N7s4uDY9mdKYJthLhbUFV55XvZRm9ZsPhbz89",
  "key21": "2R9pjZAR7nPJ7asmqoDHpCU8wykddTwHgSoGBdwEwPDLCX142VaVozvupTqd8Xv9jw8sv2z3Tx1asyec3EPJrCuV",
  "key22": "2mv18QCFqBLG19fe2hWnG3ss7hCHQF3vR4hy7MBPHD9kjPtvWKKD26k4UtG57sHs8Y98wSBXbxJjgdHtm5JSjNXh",
  "key23": "4tt92dsTPrMKUNqva8T25Uw8CT2abyTaSeuoiRCxvh4j1LrVBpNxkbBsY7qoLXEsrVFhaPYG8p2sEr7WKNBTtuNf",
  "key24": "2mfBWs8L7vNNLSfMh4aT2iY1LrknoJrSSz9ztosgKZQmjRrFxC98aSiwJaShiaey9Ni3zbhCtgemyEFhPQrEc9mz",
  "key25": "2J35BAiMjnoiTLTQwC7PMNahwek3H1F6B4upAbkaQjvaAu2pFLdXC3Gx1uv6JDeNsyCSCDShpG6BXyfDCNr4Xudu",
  "key26": "65eZW1Uy54248rN722zFrzDgmNRV1iKUtcQTLoqMq4LUiA9LvYxtqqCEZuK2xwS3fxjpEGA1pWg67ZEwYyJszWqk",
  "key27": "4dqKX3azky5PNr8W89RyEqQSWWeG1bq1Aq8tr17bEtNsqNkJcBWhhXHhdqNWLrgzXBS7LievgJdhf3ZfLNRwCDXW",
  "key28": "5yUU2YuQpEcosdiXVpvhg848iGSLono1HqAiKCcodaw7QG7PdvNEKk1tGdgPWXfz6wehbL47u5Xv8KCsEVEc3h5Z",
  "key29": "3XnRpsurq67QUFtMLaD2DGJxqog9hkidjGs8v19GeiBx58iyqBGwW8UXRj9msoKFV3MmHNouo1UnMSRdHb3hdrwt",
  "key30": "MQneVcPwYryhyERx2Tmg6gZJuhESqEVwRHvkbV58958K4aKoKAEPoHaB3TafWMvWWgwAVKWFuSq7KztZP5EYMtY",
  "key31": "HMjzBVoxppA4G7LUoK6EzXJa5vUrtNg5Ge9eSYCZNZ5hDcCdXQ5Z5jHFN3feCJMmiyu5s5Svkkxdt5waL1NjYFS",
  "key32": "5kGTbAkCcKHrMKXBk8mFW6A4jEGvu9ouFCzKxHRYFD45x6vytHPD6ZGQJYFvLPTUMQbvB5cmD6kAHY7G3jqGGPGA"
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
