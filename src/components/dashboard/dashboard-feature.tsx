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
    "2Vrg1269xgZAxF2qLk3KJjCn6JXD7VW9zNaMmWcyx5FUQxaieqrz59VuVkwaEgZ6WQu6AzdNan6qMg1CRb8wmGH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uC1h9a7srMcriZ7DdWXvB2dK8RFJPPEmbB85cdcYJkC6fafzbYm7heZ3fMaEdFT7RTjxPNk4sYL7YHLFj2B8NWb",
  "key1": "668X4b7xH8ZS8zEuv93A4vVNUobxXu7ESG4pWEgfz4mPeKoBkj34MdzJjBfDrAXPTJsRGCqc8ZoT4mtJw2vxrAXG",
  "key2": "4xzmxDuohL5NcPx9gkt74qPdtZDZAgxrVrGrVz73CLzMsAeacnjihSqzWFVmGGMFD8Tp8JoLTAJHaDnxdLJHa4Qn",
  "key3": "u21e89ukzMdh1bJJgCjgUr6CwvFFrcrHW35ZYmsJ2s2P9PaTXV3tEMExWLhdJ2LmHCEZdSsqjyDydSTXopJZWrz",
  "key4": "4PcHTPuNz4kdnKVwNVANBth3fc5z2WFBHdRfFLVXNMBrGfwUr8TCJeGL3aaGXtaFFQULeUcE56W7W5Ze3VUUoNvk",
  "key5": "4hHgc1QhF71zxwBRmgbkB4wpeFyykLtBND9K3gSrYCcZZtubBt6ozSnkhLEW5zUe7kkCoDMCD7HsgTvEWWGDB2mV",
  "key6": "zyUFFJ2nK1HhFxoQVUiesCncBY9aL153t7gRsMgYNVpcmyDmKMAztiizYMStmpd9uDA2EsArDKW9U57sjcF9aZc",
  "key7": "4ivgDqYSgqifdPGb6GEBnEqE9NQgdKU1MqLMuANgiRA9piBNdfcF2SVHosFtJHUVmSJ8G7xoZwbR3GYcCHAkMgX7",
  "key8": "4Wh9D6ZyicYYvKNyZPuU5vWx9yqzCGF8pFsAA1mejsR4Lvsb6SzVtX1qZQgxDBGa38qCZkH6ex35fcUtjAFJZzVZ",
  "key9": "3EpeALFQy3bVMSAmEXLtudCjRGhm2M1SKnVWmVzXaeuVU9jYNEXqL79XvmS2S4HuD46CW732Rmw9o1tTbWGZLUaU",
  "key10": "5oL4d83G8G245qJdnQY4tdW6rG8HgDAFWuBBGQ1vSUXRgtzx8H6BPV6xzztCy2hmqQc4KzZz2YsZsvEy1nEjqCsf",
  "key11": "5HdUXaUGiNDiBHQVic6BKoMRUPjBTRrMmKuTSCGxGKMx3LrfPBcsSwYiwFZaVKhotHQyEXvbUmqHFKHGYzsNmtiG",
  "key12": "3zyMgtzi3voG67rLMxzrunzkq8zfWH3wKtxqDNNmQNgUSVdnYBQQHZskb96LkNNuR7zk8EZnW4ZHeAU2fv9aNpUW",
  "key13": "2kRu188q58q2BqTeXdDwxw1KdyqQZPkF68jPWRM8ULNucbSo69z6gqm3bDAZ4MvZmp9o12hvtM41RDipVsbTGHbH",
  "key14": "2yrNvXJuwnfJhUtd5qVCu7HfM7Kdt8K2qXeskDafzoEKRCQGq6998CeV1ocqBkNbKxGcj5K547KBp6vWecHQJ4G8",
  "key15": "52VgnecvPAKajg5C2VEfFMGsmSS1oc1PhoBbEQAYkLen2pK72paTEqWxrCqLPwquvMRtXGdZnGt1sguWX1ojFvPm",
  "key16": "23B3S87R4G88aQmY6Zvhf8GzAL2UzvgU6iCfqP6vF9z7wJ9iELReeeQgnmrafuyrxT1GpQpiidytXM5fCER8QPuf",
  "key17": "4UVDQ5rBTZSFH6wA7HXi6P2oTubaM6mbaaSJUiPov1BisSEpLJha45cQdzBdiF4i6FfPHgvGkdwtD9Bv4H23Y55G",
  "key18": "2sbfF1vtW1MreJ5qdUzAhjXSoRD8Aye1H4oRVuUyHAa5iNrDcqdWTuSaLkhQSx7nCVZVuDecEiqw8t3YsoXvdXGy",
  "key19": "3gntU2trocSXnPKjAYxAFdrbsVpeENp7EZY1pPwQmEkoiMQ9fVjtCcxLv5gCL8uiVbvBQUbpBzkR5LxcbBZEEqJd",
  "key20": "4bwiS89BiTHq1UobEjJtzqA9E6w9SseZ3jDwwp4aShERZSrvjXUWMf7NawBACGdLBzozKu6TvMeU8BueW4kNWncP",
  "key21": "uSZckwQhRQz1vDDLqSRAjxod3reFdFBrAYk59NrNHhw9BpfFy2MKokk4UDSXiFufYwvm2WLSJfyGtbUQMuK8a9C",
  "key22": "3SWc7TVGM1oRiLcxu4NzswoYmdMXBUWK5HXwC1GYZNMmakKabdAt3o4BTk9t6V8QpJHTMK4EspEXvnArrF4Pkjdk",
  "key23": "3pyew53oxTx9Sr7Kh7egSBFbraFVx8n7fDSFERtmj3CTqo2QFpvc1SQwdHicyY3XffKWzYiazZn7wYUffUyLrhtr",
  "key24": "C4gYYcmfxhJtSyfhjdwLc9Kpm3jj7HuevH5A6jWyU9k9fft6Dj6rysvWqqLiSBcHr9N6J65aeEcrcE3HxdquCDq",
  "key25": "SkYLaFjNZu1eenMvcZf59AaWdP5scW5agkhApCGtodATAMw9VyjJHZtfNoZrRgQewjHwzAh27pVA526j9FDwutp",
  "key26": "61PMKgvuWgRs9EU7XHYuNps82pzTvYtWS32cnXY4p8Xn4GTcP66CMsYm1qsNZKeGtJiUec3j21yg3pmttJVGpMjj",
  "key27": "8HozbZPjBH3jHy9Tf24dJRppHt21PUEJDKQdXceoACNPQLWymLVkv8T7t7bwxJYk1Xv7q4e5XWU3GhdMHFLXsdk",
  "key28": "3XWSC4MjtWEaGTj4u26i7yT8PEUEpTubYphbiFyyH371i1MfefR93oYcsdqVc2UdWvYFyJyuqDEnf6JN3UfQcWgG",
  "key29": "4uonJBqNKtgNDSff4Djbr7ZaqFZs1Y9GmVWmEheoJEmF3RD4e5dfppQ1cCCS3hbUH91VBpD31LvvomFizLB59BTz",
  "key30": "5M3rjBBSnxdaNPFrLp49GhVC9Sqpz4ejkp2ToB8P81f9asZL8B6pzFvHsGuCE8AyEQYrE7htuMLr7n8bXcm5d46A",
  "key31": "gsRdQxPWWjL83MLRHNQcbEfsG1MALyDJ9a9AT2sNH7ZaCP4hmvjPvRdxZLnv7pBwDsW3N4Q5FjDnxEhvusCkK2q",
  "key32": "2qGq2DiLew1z7FYRFA2Y9dX8qojVgPT4wShiyKaaZR9vCauCNDHgrvmEdSjpTF9GKefm4X1vc2XbRdXpefgyeJ2j",
  "key33": "538caGxAqhR9ein1L4cA2n8NDnMB5EJTCrghBK8wXd1opAPUnn9KbjLHSpSA1dSokvf2pTS7DqLYWpm4piBEGuFe",
  "key34": "2uqnJAH9L2Vi2N85UdJsv2C5hUxKjj3ELuoJ58ZSFkaiFF5pTRhhEVqP6d3tBuH3nqSrmzUEAUqqc2yJwwwhWNDp",
  "key35": "acaYmnKGbsLNzK3buUj72HPrUhEjn4ia7xP5ZjSwFwdFGSfUv5aEUpuWfXhAC3arCVBodvUXkdTdBtreTcEsikB",
  "key36": "VjaYwRSA3TjqrNFo56wXz5GxPuarvzaHR9vA8VUTQRtGsRJMZtqSDEFuakzQjQFNsWpvf67JmYhXxGw8g6VisRh",
  "key37": "5EGrQofwucGg7LhjF9afUUio4AGbFv55xXt5d6AUYCBGRCurASnzqH572pthV8V3sAaWtvysAo7ybRnTMjbQRWwk",
  "key38": "4252u7wtsngzfAPE7vxg7BsojecrmxTs3MN4ddyEbBLTPmsxFsf6xtWsyHC6LbDHwYDcWcanVKcYtFDSv4Ehdegy",
  "key39": "4j9FyWbswZMMLGDDJN6VgWHoufaUs31kwFRAW4ueaDtwbFxiHC4U7h6Wk98aDZzX7GokyHEeT9yjPeNbZEunswe2"
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
