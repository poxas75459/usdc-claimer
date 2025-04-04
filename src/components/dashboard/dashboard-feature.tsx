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
    "62i8vp1ZDeZqfAoT6ayGQbcBP9Wxp46Gwbzzz1QtZoecQ8zGBiP8chtfvXrwVe75vPExgv1XnyTKfF5TKAbAYkZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NVS3GzhfG6sDQFtTrp3BNDUVvPVDWyvmhAmuVjb42fUaqCYWi6XWPoUftbt6fTBcYqxALKJyTR9V9xusQThgGaq",
  "key1": "57K3quDPCJh2JsBcS16qMQUiz53Qt9YC55Y9QtBoTDs1rTPh1ZnqMm2riAxxAnSB5wB7rNrwdy83b8eRuFqUWM6c",
  "key2": "2i25f1tsMqJqjtzm6FBHpVLu42cwPB5HBKDFeSdPRopDQRGzZVMMdW6QCsiLRZw8SmnSq9vTvEPFbHgtYc9b6PMR",
  "key3": "22PaGQ8Cf3XwjM1kRwrhJ5fazcfVxtiG23A6LnKde83joN8S2fihwiDCHsUw12V7ZegJEqjpWdh2eN3rR2hWwkKK",
  "key4": "7Xo3KNbabiaAthYLDU921WiZonpqHZ9VmtZTfxKGikwbZGYX4roKksbwEDuATEvWb5dXsKf2vBM36zxXbjVpk3T",
  "key5": "2s7RiyAMRuoxg9jycnrMnfyjDf9NkZdqenZzmQwRpRYRyNL1pctMsEGCQf71CpEU8N9zoHhrfJSUbnBzrrMW8KGZ",
  "key6": "4wtrGJbJqBjnutkxRLkR5SvESVSBdpnTru9xdkrWecVu4WdMo5x88fSwvMi32uRtVu8WtBH9cBnzzv9yiYSpJh1c",
  "key7": "5vGJNndKiH75muWarEBk6JbkGRVbUQXdhaQpZYV3Wn28BhKAg9vX4psLXX3SMQ1VkNv9db4PLaoo4CFvCQGBncZV",
  "key8": "wjaAsEHggqwTQvvzzj6WVfXPq4Vb7iwwpLPb4PGpqgxHR6kg7gMimBioWi5u2pWiUXGPz8mgjSrZQSua2bfjtR6",
  "key9": "4mMYXdn2s81X1Kr6geYXgJJKgz1NeKmiPqKfX3r7JkYc28eGsEyGXDGRaM5ir2FNf2FfKbzMfJ3aiGyVrnbUcYV6",
  "key10": "3qnYBuqCq7DncCqkqrcqivEdPvrBcgnAxfabGuvbpB6evyHA8978KvdwGy96sfPF7jqDMET3LJ8k3D149ddY1CzD",
  "key11": "2cyxXQ9rq9W6k5VihEuuXmWcZU7esvuU7L3naECSm5dkoRhiFnFGDt3ecRBiVpUmvb7TXNVpvsWDCUAZBRXAhinC",
  "key12": "3A6yMPBhamacQWwa87z9wcSXd4xHSAhEuDEMzEuU27DaVfbtgreTWZKXLiS9uC3FjxWrdpMKGWpBoAux4E5fjJEw",
  "key13": "2CkALYDAzDGjErMr92XKG5t96YG2qTVX6ZecowZrELazxRABtcJtjDt8u3diVoV8MFKRgJkNjdnc7s5xwTDMuSWs",
  "key14": "4erbpHeX6n6kUt1oN8jMCoy4Ab5VrkJreW2QKJXcvrXM4bV5Mavgqjm68hD9nwY2q5ri6q6tnwyUdo7TcLVhU3Yq",
  "key15": "5LHcZzuRD36ZjGSVNswdsSq464hMHsbGqGx5ZmdnrCrdX2GuhBFw98WduNjiv2Wx4W1Bmh5pPLt83wvoedn3fsRW",
  "key16": "56aY29g34DwSyP2PHf3gMvxWmsLnDrQYWJE2cX6TWsZzFxnK87fDCvSVUS6jFkPY63DJDWqsPAncVFSKnH3crihq",
  "key17": "23bNtMTL7a8Qy8YojDiyHDZNoLiNdj8xXWJUmsWhEwj8zBGRLqZB2AcB88feECDSEshPBXKofkgzgnNjP7DSJqPH",
  "key18": "5s1UYMibxpL62he5rNKqxbB6uJtqhZj3T9SWcYJAGm6mTnwGLWsn3RjMgJs5BQTLnKX7tUMHMvNHPTwF1kdQzi32",
  "key19": "5WCN8Uj1tYw78bXSmcpewRRcbQwk5WLV27ynJpYbFs6NaNMwEyEqzLuTxp6EKfGmatVcSzuaPjct4hKar45eonhy",
  "key20": "3ENGJhJzD41V6xQTrK3soojsznasnWGBZbbofXwA9ZZEQwwbHuxMeQ8841XGM553kYDF6EPKVVcabf6kgFJ5NKZr",
  "key21": "6fk75GSSNUfCyCYdYxJbgj1ueCt5g4YToowWfefazQxxFqAmMKo1vet5RwCzQiWDbeExL5LRixuzYB3J49S4sCs",
  "key22": "3MRCshHxCJAhQrUXPGquYfu6iEpQ8jKsjSzVxGTkt5ocTG4SjRdySixZ6xuoypvXJe81tbTGao2Ea2a3U6V8VBqo",
  "key23": "5ThToKSsUhtYej8HRRFbTbcb1gWgxbZv6ijQKyM9RxDDpPKpCgvBD4qZ2P9wDs7iMYrHsnQV3Ci86g9GJAFL6p6e",
  "key24": "2MyiNExtjRM8tuioUwPS8YabmQedkgfwxkC6brsTLYmby4Fz4NK1XUYzexWa2Tz4bprM6dzdPieAsx9HtuXn5rbq",
  "key25": "69vsDw4f6tCQ2a5aDpU9LyRvNfp3AFzABvaVYc5GPZ1STUE4Cq8f5sXcuhXEQvVnfKFM8opfEtDq4ff9hmY22ob",
  "key26": "2C8pmqKQoCBivGWxPRuBqsWHWn6KwrpXEAbVSNMm1viVUVjbnBqhqUUea3zijgYe9kir2ZkPSE1REtnaiWwDkYRe",
  "key27": "62KGbFF5YPm4HX6cZr4qKbJGcGCYkv7ivGAH8u6TRaeM4UeJcQNhWH8c3vQg7R3kzWrxnUMXAwQvcQghgAjJ74a7",
  "key28": "4sWv5E6YeJowbSZ5CHCVqG55iQSypCgD31qJsHtFkDA1xeGi9LAgoBaw4mB576W66meq1xL66sJN5zJwFdUfFb7T",
  "key29": "2Ypm3sVNSVs2B1TiNGCxYtq4Fe6vfoRqehcga9gck4HkBcRqqnMqT3iqRMxWWjhq1d8K5xPeznqrbUcscnVUUYRN",
  "key30": "5fDUniU6o3ZzSCYYxacFVBGYLH8j1MSQjBuC4ZNricMATbd5PaXxkn7eR7ySWNAm1HfuxG9LTyzbCysa41SW74xA",
  "key31": "3JW7GZTZ3KH1xSDE7aGNEVmRs6bji9Pf6hbgv5ETxSbETeX5QKgxEjqjLBNDXRnsP1NPMmQerrYG3Y11wB4NShiD",
  "key32": "7ShgQ8ETA4KohQ6bB1cVH4p8N6hHtJm8i2K2i1g4yrsTRHjnj6aFXNDRcSs9ygiMMWj2cXfxfyWAdann6KneX3j",
  "key33": "3Ej4fqyTUktzfRqjvgK86dX1Ts2p9H3z6BprDgpcghY58J2tTSxMfbesmHD6eGPwQHE1hx5jCCUxXwT13HjMbSHd",
  "key34": "4pkLS3bRwWe6ZAMJUzbvBMq7DugdXys9togS5uvzymVrQxCBqapxUcBPyTeFUEDyQXDAndTrvNdvb7JxiB72Xy7u",
  "key35": "5mdZfXc2G4tDiLbNmdwEjhM8uTRvu22oYJiQwMiefmgrTURoZTwACX5AKDKrSFX5Ervfs41Ji1xs4sHRKR3Q9Fd9",
  "key36": "2Jp9J1uaBA37jSgkZ9at7JWAP8hxSydp75bS5WxubTvxL6jas46XmHGwXvH8mYD9TM7GZhdvaeyWks5tsREFTv7D",
  "key37": "5JTcK692FkCLoABV1uWsqjQWtvrqBtDAiztd8Ma2gLZZxiqAQf4CRdjwDEWdSNrjXqZk8Rjxa4gVU27v7rQosAf5",
  "key38": "623i8zTXzjCktu3WvJ9fTeJSqdbgqe3cVxUGUpAvG6Sqin8o3mo9VyMvCpDZ46wuk5ERTLhLEnAH8GPiDW83a2oD",
  "key39": "5z4Qu4ba66b4yWqAQi3URtFPRXsQu5jjKpwbD2cdpPwbnhEjk25rcKvs3CDnAnetYg15ApgicfBoj2CmDvMSjYYe",
  "key40": "2NE2G6K8TxUfwBzA9KCujfWfDRVB9ehPaiQ2mrU3aftgpXo1xm43hjcpothpw74L33uzvjwn2oRdwSDvmSdrtEs1",
  "key41": "BkWhYg2s2tZqH2pVcZb3owXkBNY4jCh1oPuqPf9ReoCzv1QaXNd7Kg7i6suE5YRtiKRL2NkaWrtS8DRsY4M8gMD",
  "key42": "4nb2c7cqbYCgQU2T4Ez4taNfw294rQdGyJMg49ebNgaCpAinqbv8RdjgsUkWdNxwSXUsQfcdSwY2GYe79CEvgSzy",
  "key43": "3tpRaBhrzGV9g1QbT99V6wpRu1AQKupBH1DBbiZ2V43d7iQmsXTAAinGpqxjqFZf9XYNd1WGr6CoW43pNZBrXKi9",
  "key44": "4yhXmcFXv4MSQ5peAkup6mBU7vTAjhbfm7ePsNCAcieKKwWQEKaToUuezuzE5v9FmsMetsCVvKeV7ADAxYGz4bUx",
  "key45": "3Q71EB2GnZhEY4nnLqEvHhzCsSCGyFKqx9DEdqCTLnX5a6Pt9H8nAiZwuipcDbdZsNCHcttWKqpx97ZKMN5JLDkJ",
  "key46": "5Zz7hjgYtUmNB5ceMgy8kFGoR6K6FfhRREpc1HmeknuSo2oR5PJMzFBAoswn8foXVmMe8j8vYPCa9pFxraxPw5QM"
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
