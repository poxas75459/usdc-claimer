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
    "3JnfQPWytdHVHWeNgCwK659LpAyuJuVvEVwpNrc65DoXTNQdraU85AeUfQjpYxL11EuyHDbQNBczvngTextdAExF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54N1BucDf6NVDhVAwnV9rrDSos55vG7vrSFjqux4WzwcEwRfBSE23T6NywxnYjgYYHbtJSMXS9uQ5Qy9cqcoe4vF",
  "key1": "D4zeHbCaUaf3VyvNKkJeWziMRBJubARojyk1uvyYYhLa1RniCohPGevGkr6ASUfzVKm9tLHTmnoa5KzQtHgwR3s",
  "key2": "5y1FDGhZEj1PwzQDAobmbivyQu8v9UuBkDk5CJY1b72i4XGmryjheXJzNJyRfkpEf2uJMPoUYS4DFikLCavdGRpU",
  "key3": "35RQiwzc17bqAznZQQZMVWM7hLP8Kb2coXXiBnj5fzXgfjVMp9gbp8EEDTiBoJt3NMHsu9zKaxhb5PhtfG2BqETn",
  "key4": "2fgGjyuRRXG3phNMueZvLL1q2TGdUNpyaJ4xeRizekL19jMmq6BDgo5mYkqoMyNSBZCzwBzCLFqZkeriYLNPudYB",
  "key5": "wFpJ4VSH2NjRHiihAGGY1wMmzs9x9vHHoDva5wiA1mQt2iW3iHngu1ARqLbNiwBDV1J1dB9Sbb5pHRz4KmnGUfh",
  "key6": "25jRLkPodbjTyhD2886472WdAsjcSb3Q5CBe4xaU4o5ufQ9GEuXiigXNMdGh33jusWKc9BTbKbNhptdZ1uFva3cH",
  "key7": "4dm3RVMBSPhLQEFfgBdrxEVRdG9TXhttgL11guFGHypEggcwQDcvHtnCTmH3gNUip2ZhpXVeq3SwFF6UHC7vL4QB",
  "key8": "3Fuitwmn7aDfmUFxH5yP3d1DvJsDJvsfwcpjCUjDQLvTeVpYohk2Xir6qiiSPaEN4wz4LpBXU7QtEWcd4VCRh7Uz",
  "key9": "2hRGCXHy1eE84GcMFgykfSisTD2LeZDQdnyvobLGXU1VTLSCT7LXue8pPtfaUePcgf5Tc4i9EVzFS1zJtAL1daBw",
  "key10": "6ebXwHSsuzaHzYxLAzgDHwtyTQDth7w8ZuKzuZduXFWoxk6J7NVL3L1ZjqvQWdSuL7kZcC1DGmubP94QHUMDSxN",
  "key11": "4nMy9KbGoyQCSX58RqxEQcNQxjLchnYsK7hRddze9jqogbpyvzq7E8iZfu1SDDHNU7vfjKFjT4dr1stceAgVQE8X",
  "key12": "rckG2rzqtyJWZMkPqyBfRk2WW8GpryxEZxrbqkqRbbVQYB12XhyXwKX1mu1WwBdVn7ctRSSw4o5szgNS36zDFbH",
  "key13": "2smPeKNACU6KmJbpzmSbPUGjbKpFurPbohvsBeGQuxG7ccEswHmCUeRJCRXo9KPjTq1DeWBK41YLztv3nJqoEJmx",
  "key14": "PoGQqPadp2bFFkUfjLfhHT8aWMEmwDVYCbSRP6N8XwgqFyXSfwKUBz1KCSVrKTTxQLiY7r532Q4Vn6aNpfTqz1w",
  "key15": "RAHnpSrigtLJRqwwF4Z5bXuHNDuRACYmDzNv4k5t52TkFfzqRvWYXKntYJkPvk43Wm4EQ1j8NUuSWBt6sjPRWwU",
  "key16": "mhdanquGes1twRrz1GzyURDE7tRTPEoD1mziQ3yLKqGpfWugJMgMkQnBnvWWcH3o88raErkjsY9ABFChvDH5sUe",
  "key17": "2hbZGFRMc932bGqaDhZjTPZvbh6TrLcL3fuRmXWQ4PSbPAjR4cQWF7LCS2s4xk7Uge65F956g5XqWEs92fzvFbuz",
  "key18": "fjonz7RS5wdR38ku4A3MJc15YSERU5HwNVcYXUTMwKMmqZYvqeRB4DChAmdnJ5RtZ12ZoNaFRDvTV4FLKX31k98",
  "key19": "34yy2BJvhGWA8drSVt2ZcRDx6MpE6VTveBuSxYtZxLmu2FndhdwutAGu6qNFZ741eh76chwJcVBX8ECr1wfS6Hhv",
  "key20": "5CHidmpQ7NFnuumCUnWohfUyZjZe3zLBeXoWfF7FTKpcMJF4GDFXRZ3mvuXGs6aGnn7AupwnUiSmHudE7pnE1Z2h",
  "key21": "3YQFbWMBemVNLy3H5fygAGk4b4776qWdfXMXidPYNZnpPLSqDQrpJ9oTcGzNaFuG7pZ6A34XR2P6FTya24sGYJCX",
  "key22": "2Whmwu7RhoWxNvnaetUzb34ZuLo8r5ci5xngSHVCrGyVYCmpuN48Lwa4ki8tv77mtQUoULkKz4MjqxZp6a66KvhK",
  "key23": "3SDVdN6vss5is2UwvzaLWiBwRZFaHe2F2GiN2yrYyjVYMVR1zxhKeYv7YTCRGguZihbc1dKYXDnp67uHLasEruzY",
  "key24": "5yjM9bm4Bf1VDRpDV9bWPeNa1hEE68ommFHHS4WkBq3dBMyuHwVgfiizBWjcoCbT81394a9BD2Coube8HuM2FgQs",
  "key25": "2qdZctUFYfG7PGqQsvc4gyWQYy13ffP93VJDCDmNamKbZ3axqNUxKaZoZvVXdFwWQzwZPXGE1hzTpsEqKaUgLp5M",
  "key26": "nH6bP8fZbdVctQ8zoi81ugGv1rT46soWFKzTQ5cSirZzdGJ5Q4KtxZqivvgbc7wbJKZETmDTXNfe5u6NPJPQPgg",
  "key27": "56dF4ffEmCHuwqmztM29J1NRfqZVKdjU2EdYYDUpB6QcPE7uNA6Ug9UdZfEHfpj3CcZg4UmtWsKEB8haVkCAc465",
  "key28": "2B5tvb2eoHgQhqmprR13vPhQgFchX5RbSrd7bWTi9hCBeBDen34aUxs6ChtsSGDzp6bhqCRANtmZ5PsqCgrzSPuZ",
  "key29": "3YZdTk9n5ZKdXNUET2WUEfy2o4vCSDnUJiP3fDYxspkLwrUrH7MLkRAuA3WDaiZRd5V2NUDQvtabfjjpd5DMPWrs"
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
