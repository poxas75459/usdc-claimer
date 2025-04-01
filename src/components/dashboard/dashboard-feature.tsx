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
    "4fskSVdWCS3PaMhJr2zGcRHRuuTCr6UGUK2DpiiSqcv1Fvh2jcP97qDB8daLuLwrWF7acDDNQjGZXE9q2xhck9nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BPWguekBr2C2iTv8zmPBbmU6xsXSs4izzZwFa4SNefSnHbkC2d2ph22vFnsnUXdakRqKFjxEmNkje15yp5LBiV7",
  "key1": "3JyNv4KZpWsiFMpjz936oddhTUxkoAeDSyn578tatgA1dUpPAGnWjTcW7wLe9mzwo1eeDZ7UR8JFFDXj6qth9HxN",
  "key2": "wiTHMk9SLJTcKZR1fmbhbRD6SvsVLYzMLYKuJZq74aVqrRXT29jJGw7trQ28AhQGpG1iN6CMqqiTw67ppfBuXSy",
  "key3": "4u5sn9fJZY1LcyCH3w1aESkB7fgyv27V2ZEADkTvQRJokRTCAJgzTFzby2yXdNEY7iMxDb3k9M9gDfrn2kRtMmMw",
  "key4": "HDm9rkyrBkfnazb8EzmEqkAFB9VKwTVz73TYUw4fSLxwSbM4BGsbKT3yvCX1jbFVUZbKWqpZqy1dYoqsqpp2613",
  "key5": "3d4hz3w1bS7RvSD6EypSzstWZRSQCQfCQdqe47mGhGfCEFULutRqhPG4JRN8ANWKyT2W6ijQGohzZjdkMGUFmDZv",
  "key6": "2iJxT7LpsCyk2PETmdLqEjJQCV92C6FPHDNjj7BraccWMaKyPbLT7gQsF1E3AU7r7Y5CWnfMjAqBAehm6fvb6Su8",
  "key7": "5GWpeY6CWwVWeoBWKGjERSwJNHy68ieM7Bd6UQvzxkTokaDCjpziF4xJjQEVmFayM6mHo91egrdXpwjFSc6NWzXR",
  "key8": "2hpXUe8sNmNDyrkMdN4WLAVGc4tQ3ncffHFQJ9mpDFWYKLcu5YzzJDMnn5A98rhWkgUXKYcwR1xj4WQN3wFp2Na3",
  "key9": "3Yw2u5Hrx9Z43MYJMiya1XpVRrdhRNf8yVSi17eyXvxwA2XJsmgEh1qAQ9hCoPTu15qi6bW5DtYbhbeYWewDfu2a",
  "key10": "2uHU8aJ46jRNkHo2YaKeZUvBvRo8PSpuN8Rr83ZZpcoTc1VWGr96FFjkPhtMGsuD8hrf9p1qUmkCWKM2Zqp1GRs4",
  "key11": "4MqcEwFU7wnNQ4XHnVaumTGpY5tKCg9hQ245pHaR3Zzxm6F94hHLawZ9HRoxbRs9XSe21FKEBmS2rm3WxQFVT9Ki",
  "key12": "5JoBDyS62zjX9vEAKxwsEspKJnwLQFsfMomFKFKFDQjCoReAmAUhyXQHcUdscmoSq6ZzQsXq81GmBoBTSYH45czR",
  "key13": "3Yq7op5eUNsxZCMf5vY27Ue9xLpzCxwhnvG5NGih8ZGaoNKFqdoYPPwn4HCx36GPCGUERk871QFdtghruWC21XAM",
  "key14": "ZDajHP1uSaB2MVDYr1QNessQq2G6cv2Jaj1GrNfCUperF2jRiMdAY62MyH2DFMCe771AiC2Wd1cgCW9zM4RDLgv",
  "key15": "4M3snx9TJSmNNwDXDoaAm4wpchi7RDRHZsNFCWYyjwDNKTMUHzLrX7mCSJwkgmys7cUcFgrN9xwk9eiLrenah8BP",
  "key16": "3k4WvVApWd5gMxoUpBgzDNTyB6HnAGCqAnudkJqqjhfqnqjwfrFfEXvWjXGMXUTSzc3eb8PmRJEtui229zCS6Q2K",
  "key17": "3Q1bGdV6M6Y7gNfM48XZvsNgXtCF7SauxUfmu9wE21YkQQYQgjZkUu6xj3GmAFRXf6cLwSE5yx3FGoVZzZFHfBX",
  "key18": "3VcNcRgEreiQ4sdsdxjQUfPvo9ieVYEBf8gJHBdJNPfZ3MuQdcZdC4MyehFthKoE8CPW3FUBSVR9ryFvonYQg48m",
  "key19": "5ZC3K2reW6m3e15EzYbGjio2ZMS8w2s6ScHdihqhzi2pgLohznDYhBqVZXL2V1qEtTWr21DKtTRu5vFuddReRfqL",
  "key20": "7ncntYAp6VvkqgT9eiPzcSQBBHB49RaWo3EcLsajikXXjbx92bqEbR6QSigMLqbcbieZnBkKCygw5X342vFo8DD",
  "key21": "61HbwrVixwtVEjinHrcTCSjox794BChQuwf95zfodH7dhZch8emfwxpDVpBScVx8PBUuWm8MLMJmUhMsqrzH1JfT",
  "key22": "3zF8nYXg7hHcrga2nLDWcp4WKsdxuWyHHzpBDy1zGcbMbtDPFUjYxLZGbA3bjJw7vxqnboni7BWESuZ5k1iAC7wZ",
  "key23": "36D2QdXXBgYPsJ1DSs7wARuHqyJckhoNRtWzGUKRt5ytjPqpFayE8W2jM9rSCMX46jeLTmomXpjwF26aV49H8roQ",
  "key24": "5hbAmAo5ucLVMPxLsNf1GosoimyeSkKDS3LiEGq7JmqWCVRjga5vzEURYAShYxfD3Y71xbaJuHdmq4Aw1Jm6Z8Ko",
  "key25": "343zzUdsS9jS3zYxynQmEC2tDyff17KPZs3fNP2UDUBvKwKtsURok8G4avThD8ByNhB1RVRSSwqiB7EYTqj4aFaf",
  "key26": "dy7GyoCQxqQgPW7sQwdH9zgiXrYn2r5RMPMw19KQbivtmdAEB561LwCJewpEeyJWCexPKHshWDKg3HUdrubepDD",
  "key27": "3pToyiU8m8KY4o9jzRhPLYPdBtAP6WzPBeWGhWNEGvz5wmd7NGSdtxPn1WEMZienSeMS5rDuQj7VTS3xUVGF99N",
  "key28": "whXYXjcRWwzH6G9qLbvHavhSS867DdYj3Qo37xXufTbhseVsYFVKCJPGKnVBcPWdJFeW1sBSWqmzqZZMJyeYPpb",
  "key29": "57AAf7BAWC8H9hB95cShTbmyhDCHUZrapLByJRugr2AM7nvVqGQc1FfuUFA9fyJuhvTzhy9ESbtkfjbxopaAk22A",
  "key30": "64e5nJ3J2biubVbK9kpEGy3nYK3W9hEkJYo5cgT3ugpJBPhCnUdcvE4i2zvuseuE4MMXQYeTFdyyD76hHbfyKEfb",
  "key31": "26xzJGpxiqwRCxz64o2g5TJMDT8Cwc3LZx7ZceLvChBqHZkxqG5mHsB6AZmBe75pGnebHaakUvFh4RQxgVXKv4eQ",
  "key32": "23kafQA5DTeriXxSQEF9Hecsrq5YztJ8ekaVzEpHnEvJH163dkfLitFvLZ4fAL5yBqWpF67PPdwSApLBBsX9Ch6W",
  "key33": "yQmK16aK5ZvsHyb3myQqr5FxJJHgFYQC6VFXwfgXsdnUEGBA8g7deGp3NTP5BSE1fHHp2GS21otVpkyR3mKVyLB",
  "key34": "2Q1fw3SkX5g2siYcE5yZ8v2jGxrqiyvA1xj7QfdSf4uFpzYWxCQHdA7XodBEHeEFbq2wzQtZXVyApcBdPvk4dbt8",
  "key35": "2zEn2n7ZGkJieNNzgdoGTjQ2ACoBqKbjxiQMLbQT3pqVAtJn8rVN5kkRFueLh4SPckHmUJdrELrtGjJgiiURh4WH",
  "key36": "5UptWhNVAREfY4ix8iWq7nYWMx7sH3groLKzsqenXDcFNfP1iDD3hRJazAYmeWtL9gAP8ZiGaMF2jZTb9m6JdN5C",
  "key37": "K58Zzwu4R6PfS6BuJZVn3ZCQ52CBa6ZDP1xjCe7niqzqud8pBDybGPodKcFPGfXj4Y3knorQffZTUxrNrqX4kDR",
  "key38": "as5mXUeeqEvwMuTMGMDqNMsgQWykfzu8L8aux9q5GyJgSNw7RGK4w9qp4wtxEdoZ1iNSFwT5Syvez2rjfPyYBRB",
  "key39": "2ib5Pi24aDJdEQzGzqrVaQdJjMx647jwBFu5CBzYvbo4LEA4wMraM6mAdUkJoHZhGgfFBbGBLHKjsw6j2k2mchvT",
  "key40": "YsTKJRky28kSXaP1b7ZnqA9CTYt1xb6iQMkZNr2GsFYw96TveQ2E8Yr5JeFMESGxvrU86Z2WMT3cXH2bUtydBdG",
  "key41": "5fAHFvvBdi2qGYx2GZz7sKJ4rUuFUXqgsU1t58pD3N6DMjWy2qnr3bmQg1roiTHA1K4wTNqiru4qCLZ4WKnozRBf",
  "key42": "56aRjd3WQogasniEGtZVaioQVJdakvGNKzf1GpSE6JtmHqSm32npmrc1TNypoLqAXQtfCqbEsL8fk8c9c3Z9FAeE",
  "key43": "2f5joLyKiDAhhtAapTY8PjsfuJktRSNkhgte5aWnNB8AVR6pBDfdgcUniWikW9imcXDp1PWiHxwocZyVPgzssyL",
  "key44": "56cEtwviA23jWhSNzeQ4N9HCJathcosE1LLaazag5mi1arUhCbSxQRJ72qEMWS7zsfo1Az45SATXEcEeRsyBYmux"
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
