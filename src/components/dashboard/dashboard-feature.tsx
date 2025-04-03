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
    "3RU5AVK4YXECMGtAiArhqKHnfBDTJDE4iR4DwuJZyGRxgWsREuC2t7hvoFUbsk5fqsGKNyFyx5ugmGtiFydiSrpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tYdy15oXF3WkLTwW1dLXnbkGrvCaKLYq7eLvhG8U3pA7P9hmN7qqRtqJifYJCqeWai46k6fzmyuzsxFfUV9x7Bn",
  "key1": "2UB7XWF1RBP7hEbEnVvCmAL17f6mCYpp7spcz1pREUFZza3Fg3fDVVgycbjukzuUpQHgrr2hY43se9aGcTDqGkjW",
  "key2": "5DapK5YEWQQ3v6PPtREaJSAYm1f9Sj7mZhEUw5dSq5BPLy2WG8UCbsvWjyy2dcEmrAmVhG9SpynieT4xRXyeTqNK",
  "key3": "3BWSK8pr4GUwWDWy1kfqcBA5dJyy7rFRUcLzWjPJmJWhGnojHZeyazfSnxUroFF85pcasJB95CZiK28wa3AyAXQU",
  "key4": "4BYhQWF7NvLo4ypZZpPS3X8j9WPSJJdFGqDxLDiNwXsBQjBST929uVkNaXxvrKivL45PHwmCbwp84irxrD3rZKQr",
  "key5": "ZekJiGzyFXeWYWsNw5o9twoR7tRgkdjrQibnNDomAi3EpkRgNgVq68oGdhrQwSBAzhSWsHCTEBQpYDFoH1HRBrJ",
  "key6": "j5ZFHGGAnSKgWaPXesQ8TPT2nk1RfdpbkSaz37p3EJ6gyStjzqYD3e4vV2yLjSpMefYCQGS4Xw7uX6raU9AztAR",
  "key7": "2bqTQJvo9erpXLfpevBuVDaoRS1VCTmZpySir2eSsRheasHm6cdcu1oPMH3ZKv8gow5REJnJTjur4kc2yvv5Lfpg",
  "key8": "5snv9kwqG6hF9YLJYVKknC5mMmyVpHeBvZsPsfnSNqGzXrhcyUpwpJa2AVXSVfApongsEatZjSqXxPSLAHV3AAgZ",
  "key9": "2cipqs6zPHTmU4djv9MN1qnjU2HBAyXT9wa4ehvJ9erBRDPdKJhzYziZdm7zsbAZZMtRZkZvn42cKcfp6zQKfLMJ",
  "key10": "2Lz9i4GwyZKiDyVzwCP2dzuBsro7NUWq5iRqqFYsGonPL9RJj8D1o94D7H3UucjKPZDVBSU1Lwt3qbyejjaTD5z2",
  "key11": "18iAMvgE4jkpkwXDB6GomUtbugXH59Nq5UnXQFpEGAdpCyhcGBRSy1Ze6RZd245xayJxtKpZpSX3JFx1xiHxtSx",
  "key12": "4LfK9ZEk8rxXVYLg3kknckopfm4QQG2gaRDvQskHqEK4pTUJ7SGnJYcxePaHJnBujm97kPNa98isuvnZzwnpLpiV",
  "key13": "41nHk1ubCVsK97VDkvpm1ggzYuqurpoVEWqfRz7brdpju9aSCwdemuRSdFXSEwgcANfMbyFThSudD1MwTXcUCzwL",
  "key14": "3f44wemdZZUZ61DqHJLV9pirYnLdmh4r5A58GxA9C1W1EZG88bfSsYz52Vc3y5P4iYZwb9rRiQPuDp34b7aemYXa",
  "key15": "NVcQJkycJDgdKdR2iPSJz1NYZD5vHcE6KVavmQPzFPMBqaeESJoiFyiHu4YDUoiXVsf7Du6uC4asXJ2vS3TidHN",
  "key16": "2BAdzEUhjFjRz5JK6JKtctHMrhPs4pw59jJw8d4Vrgd3R4KCn1cZj7Mj3HKj62JTDuqzVpzMEXcbwwvYjEeZJFE2",
  "key17": "UaR77tWmomSEJSKCRPBiGefm5fHRA98zm4Mwk3Q3dMmZuuD3ATZAqJYYS5Tfa6ik97ic1QG4yePgobWcnA5BXEW",
  "key18": "2EbgdpA83XRtraoHrr8MtMQAU4zDMfeTPYAep8DbTcknKV94EJp3aqaMgn2s1bvipbtosXPCMLqqCUMfa6B7DmwL",
  "key19": "4Gb3hfk4P15iyM3eSaCDBwJpMRTpJLe8RL4DXHvNWkER5D2NMfDjtShqwMj9djJ2YnFQqaW9T3krQPMhgvU6Q3Dn",
  "key20": "UQJQiXvzpVzKCVHdFEQ6KDCDpNzfxdtAxLgaPWmLCgxZ3J4C2xR6YbNUhTg4qDasbTyzLkmVd9s5S9PwyS4bLxQ",
  "key21": "5EgNyGkq3cXbJzng6PVmNhYBKnY6KvGnyyCH95Aw9AKbNf62mD5w5RVMP1457PALNkmru4Qcn4nvkR5nw8aUB1Rs",
  "key22": "4PMbSYDaDzCSr4oJM9qHR5yRCoH7rrw9sVmZN6tCfW9VsJyxokDQEzEknu6fusiC8yrFyVpJjHj3N6oapUBxQaA",
  "key23": "2ajTyAgsymSR6ZRyTzDXjmo6Sh6HZnEqJdqkqD41h6Yxsr3jnPq9HRgHt9UVQmW9o6bKpgzap4VFNkZSsC7es7GQ",
  "key24": "VjPtkWnKs9rkyk9o81gFZTVqM5bce4nit5f24e36XSzizjMdnLRJByk3KZ55fMedW9foGn3YUyiWT5p3DQStH5R",
  "key25": "3mSqEFmwyphcWrf4MPWCVL6LBCr5yWEhHwyySXbWBP7HtwTR4HK89Qhc5oZCUitWLLxiKT9AEsEHowhB3ueikUGv",
  "key26": "5YBEzpWYxASRoj7sMCP1bHb2CnAJsgyzhHi9JQbGNzA1Mzs3q9CuiLvEF7FQix2N8FjY7g9SiCv2ne5TDvUb3i5B",
  "key27": "4W7TJoNXRheZF4R6NFoDpWwDdyfuCyJKGn1ruA8nPWDHfawrUBww73c1vT6xknX2EZCtSYuQbnmPKHZjwcq1d5aK",
  "key28": "tpx6Q4ZnUaBKjZbeDXdmqK4K5nFtCrDbamfew6cK6erNF8spStmX7wSX9vjhMiNmVCmRadYjh3xjNLUEYcduQ8z"
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
