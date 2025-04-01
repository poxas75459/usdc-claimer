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
    "515TVNRZJdXWzT6HtM5AxixLjhEhVtmHaRRaP5K5BCn3i3QhLTMPRDpSyQbqkRRDHvhUjajVGeERPkRw5PUovdEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GavxB7BcVRoCXXuHWqCfexrrfdESF5uEv9tE57f92HAM1BjzCMZE1f9wTu83czjTFzb1uKL7w7hxfPKR2gZWCXo",
  "key1": "kCJYj9k9PSo1X74rEPDbyWhnE9QvZsy4EZ57jSWKZaz21R34Dtod2shg84MpNdhFfRXVWrYKHVaEhasyoin2SNo",
  "key2": "4TtJqRRJAEReM5woMShEEP8m4AZ6MJ5jF8SsmG8nDnXTqy1MXvr4R9wmNQHjQurFfKew7uMrFsi1Nm8NYFoJt7Xp",
  "key3": "36tpoweFabEJsJyhcjwbM8dqibRESLdMkSHx9A1tCCRnGDD1NAj7GzDmdPfhQSmHXQupGSKx1CANvn1Jsxxj3wQ3",
  "key4": "3bqtQJN5K9D6posoDpheLPwFSDNodT8ucxGKyxeH7zVdXmg4aJZJQcDnRsGJBekgxoW3H1BKVz8Gsjvd5BCvUKUy",
  "key5": "3rtpLyMVB2ttfdr4kbv3rajefCkSELtmWbpbVUzkrFngn6qqE4NEETup5sQNxaf54tUZgwQDx4yRJ9SMKtaxe4i8",
  "key6": "3kyeRU4sH74hSdy3hV5hXoQtErzubcsuSLNhCmPBVfJoTNRwzr7KcxyVTpy6XgeSQGiRz5wzrCmPTQNLxLoCtLDZ",
  "key7": "5pHoqCktoCdgF39MN8fE1F7iqTVGVEfZpc8Rfa4bY8jgYZwzW9dCr73ZRPe1izmkjuCENejq5B43eATaq6tPzXDB",
  "key8": "2wGty1StLcQUPA8p6CSvkuxoXfLixV7JzhpBXJjdFoaqpKtk7Afs41HnVof6HzbLuERQKaHhzwgZyLfhWZWtyUnt",
  "key9": "4FgfeL4rukN313GQ5dmf5zbDp8nQN3Fqx1VW9KyGXiGhPssPhEK1boRFEAaj4msK6xJzApFtGn8SS67aNvuKyM3g",
  "key10": "6Agx1n2rWX5AfGtjC4UErp2NQ9639e6rfp6RLqnHQdqr4vqKBmB7cFVR7rmqLKvGZfWbbWsjY3HTXJYKxcGvL1V",
  "key11": "3SCZicZruTQTqbpMhZxyho6PEUkpHvXRHHKYnncLwvD1cg3SbSmmUEWuMPfW5g3pZXedrLxGSDXKZvgBXcUu17R5",
  "key12": "53pLCHCLnWhj9D8UxU3gSzkKhGDAkDDVdGB9TgvoLP5gUeb5a3ohzrjNmNydQ2ZZNFnCMLwn2G5fHaW3Y3kwSAZa",
  "key13": "5AcwS4WuSeXkBKbMGXg889FkpdXKgb7dLfrHT1WsWQtHBH9sbX18MLiVDqDrWcoGap1JYTzWQL4pdht2F1UFcATZ",
  "key14": "4oUnxPggQ8UMaXJCwwzkW3kC2sqSkcZYrjm346zinkrFYQXK2CbLdCsuk2QdD4TWkSskEpbjqwTfC3hR2zLBWrSr",
  "key15": "2wUhxFhPe8usAjKWMDwsYnX2w1fkqL3HbDpypxuQKTi44MK4ZpFqr6Wi6F3vkagWd76UTAjUMyteHqAzmoy78Zq5",
  "key16": "u7AavEMfL1GtRMvmeWdTe7K8HUXy8GYEZNmM58FrGS3PfK4cUvZpgnLhaYC4hWtGiDRSf7trBtt73BRfUzW91nt",
  "key17": "w4B9CTStKrWVdDccYfQZmZjvkR2BpgYZu9W57acNFSddySb8KzU6dPwzQqgwW1sgcUaqnFTkebzoXcC9igvx7DV",
  "key18": "52Yq8io1856uadUXKKUu8mBY22XEkM9k5ckz3jyLNFwFRFYDa7iJQrDw9BUkYz6EBqnyr52sUNaqH2Ys4gcRNNQ6",
  "key19": "5iiEMUVm5MAdGPcAUL2muzXNgxxNcm7MGunSRs1Zq5g3Z9rVdjwvfTvLxPPwCPzxDsTHuCmrkiEXmcnosu6FKjTz",
  "key20": "4QVQ434GdDSFEgSXvqkLHE4Jun6WNbnkiHdCVTMLVKRHeTCu7ZkdmYRMJvWjCBEm5WerNGpqH6UZ4ttFY2SGWdZU",
  "key21": "FbQgyyt3i1zLLHXjBtBAvRwoVLvh5P9L5pcQcFNWRFUeogzLB5suS3jEYCLXF6tjczaWaL28rZCEMi6bovgzFJ8",
  "key22": "66M5KKGTYk9YGxgdUsGNAUpxuyPrh7AG7ZfZP3sGMcpgt5wJkyaLzaMC2kWdFJwhNVr4mKSLTiQaAu45nXegKgd",
  "key23": "4ANk8wwfKtcrDaspAiDtMTmg3XxTWBpJA6ahfNnLERMt5KVAcL7x1hLQkGvKo5mppftNXncQAVm7bKD6dbFniwB4",
  "key24": "26Lzc9Q9N2EBXTk68SqJhu7znzdrGaGKMskEgRxznwqFXJmviJ1hDwtVwupPMBvHGRoGdyGtvi7UFyek5ZoU687o",
  "key25": "kqa14JMutyvkLac8GvxqNbvPoecQJtqcL9FqCzbxS44ezfr8cSbkg4tr36KrSRDFJn2G4QowhhJ85DddfEDvDt3",
  "key26": "2VpeukTyCF1M9DDMPpStqkdqd9S2eeD6bhjVZkcybspWo9REaUu2uogegtQivsJBYG9yPZ4xzTzBrqyNpwtYRSQS",
  "key27": "44mv6PcGxM3pTmL2BQkoXSZJhs2d53tkHrmWeNVhoLGLQFM7JwqnbXtzajn349kEzAcXsC66xWq8Sgob3BVDAqGz",
  "key28": "4SW5xAtduvj6kmwVxf6xrqc95PHBnZH9g8ARhZ7C6PQywD8Wa6AuSNZ6b8rkn3MzZLYNH7ZjtEnZxuMN3PY8WryV",
  "key29": "2mzqHh99DbNw1fEEnk6ea9LbaaQPizGYaVQGxNqPRqzg3fChhPhCKrjX62ZcMeRWtcndxtZUHvhpVYv7XLtd8QTD",
  "key30": "4aE3L2tG8tr2GTpJPtjpJkuazVbtMNoP8RW8WNHaZJXFcggFuN12wd2y7TmVgPx7Ky8B5FQdTAWrimazRidm82xm",
  "key31": "suhAAYjuKkpJ2tZzWFpBkBMdUGTVcbN9GRbEg5dk6UZwn72VUkn5Ny8gxVeSq3d8SX2zgXNJGfUsj3dktA5qikR",
  "key32": "5BWtP9wDzqGJ2N9PUCTEzR8WhSKUKrgEQa3QjAkTDqh4epQDAAzPM9ufpuNEk9CvE4Gm7SsC9w3xtryTcMcgmF8G",
  "key33": "4RpJmszXSJ4xXbU5Zipx5XyD2ATVfK9N7ifnK7yhk7JbMrG9Ekgytq8dtVWC66Pd6Dvpy1rjPyV9PYVhfqmDBqBC",
  "key34": "5ffeW4jMPM1pUgDtjzsMcYNdQa73fYu1UscYLUHXR91wooD388MRyoibGgwV2d8Yy1DD6nFT8NyMTxhfZBPi3k6p",
  "key35": "2gVwJjgk2evQkGVmngqm8VtbAC3dSvbGi7JDa2JJPpPRyRWE3i7G2Jn941Z9gczSN6nZq8os6iEdKXDFsjs5vfKG",
  "key36": "46himyn1r68kc1DnmeJPxF2viNubH9hZSWxgs33uz7f26uk7A5W2H8zXHUjXJX4unGtt5GLiWbM9PEY2dxDgsAiX"
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
