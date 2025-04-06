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
    "2bx8GvBNNYsktSUkNY5AizK2EZF8FFiiM1pJKAvBUyEvuN87Sp46GFnxjJBpxw5vLKUoK5qDqsGpKx64SCHukbmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qw7aUrLpZS8NSm7k3utbpb7XznMEeb6pSsXGXXE9KeetFfEZr6A2eFDUwEsjTgbCMiq6QReJSBMCVFcMC3uGpJ2",
  "key1": "4AXFJ2BL2E2M5KPpsXi1nhftUNCtQNpynJg55NZ7s5EeUk7kpQWWhjimNdijVoYGDFyLWZidiJaAmhoXKqiH3grC",
  "key2": "45RuihxoYsi8Y5RFbkgegr2Af1dihzWjzTM6JijyzgJ6UpiX2qQnAWRxq8jhoFzu7X2RJYELvcSfTzL1hTLYjDxu",
  "key3": "5tsuG1r6UsoNjs8r9mz8g9944pYpqbc9wY9e4ewKmcPurrNgefRFZwAmGFofP4tRawxZ7L33bNJfy8g8Dp78P3Nc",
  "key4": "2TAnboMvAfqxDR4GqBem231bEYJjAJhZVoFXJbisXfJcCuK8dyBZuEq4jkmXE9FWF4E8tLW3pAyLMg3oiQ4p3Qr6",
  "key5": "4MR5Wx52VcSHBE8E72pWvCUGydc1YzHD3r9EXnhBvEzLuH2BBcTBu661h3BpeRmv3cuxE1LPwwxLBi7No5vG57Rb",
  "key6": "bjosH8RPe6cDaJP3nrvjQysnHmbNLWkQwoaJoEcSLMMKb8raQUifnUCKJGnQVBGy1stDnScP835c6zUZ24uNvfX",
  "key7": "Qzkm4cc5pU5rLZjdNUPc6dYGbU6E2oUxFNeqroWw263fce5Ko7rWgbXpmsYognX5Pv9tfyfti9LpRaj49EAJxru",
  "key8": "42yJUiY7xeBp4m9yPqL2eBCGXXzhtKkVUKqeSve3UVd7hqdnnzJbrXuS4RzLk7e9r7ymWGUnzt7ceHaUhNzF7Smh",
  "key9": "5bpydDCFG9WpcgEkLTUvRS3ZmcQHM3vgZXJpGEkMvikTvF3WBquiGE5EZMuSQBM6rCv88aAf5rJyRDdbDq9JeyjJ",
  "key10": "ApucjekYkst8voSiEUtEK5LtMRagKFhJjzhtfjC4BX2NJPHek3muB4fZg8djjBiqo8vycUttScPwfc1EtN6fvBB",
  "key11": "22hnZFJjiFVTv3uHm36AK1aMxcBgV7u7Xv1xBt3TUAMT8JPsWt4CcpNxG3K55zuqLqnejtAsoBFqqMxQjaNdGDGh",
  "key12": "A3A6LC92amD6aDofXN4oZ3JeLt88VtdQ575yWzuFKr9gopjxFGdz1RvMr9GTSkzHWq7NRKkqUvj6MFeFN5HfCXH",
  "key13": "2yBTD4Aaozj3VhSy2GZwe6cGeZzP32nErEvCyLPsWVCCAHAx7JPQ54YTArP6GS6QYaWM4tTqFxHjsJ4aAJ8RpbYQ",
  "key14": "2SdEs8G7pXoMVPnRyCqDtEKTSmojyF5iUfFBVrbEFx2StqscUfuQS79NCoJfavsmtVxhDtrhozbZaXgLBQxRqjZ3",
  "key15": "5wnFTFSekxVZZT4mszD8CGsbkFHsa3b193PVxyAmHQjtNK7gohcim1N4TAzLbjr78AsWZXykUMcByAwUs2RyULxV",
  "key16": "4h1ZQJddZViM1zxqDzTy4zL3VnWDtS6R67SXrpUc6sVa5YNkL5CpYFk9fpZaU1WzgrqCx8p261XJczhxrp6mLMUQ",
  "key17": "52ckpRMjcefZ62cfizQqkL1wY2oZsnptLVhHn9zhiGRoyogTnK88EQpmR1cNHvGk4231VAPuBzR3VyZxAvy4vZWq",
  "key18": "VWLdZYZKrZW7cGRLEEZKBXDHPHnqr1dKeZu9JCssE3QGeW7qF4TfxhgSJSXqVjUyyifJiaVkGrsvqugdtpBdqqZ",
  "key19": "57YC6V3BwbN1vE4B3PUFMpPdnt12WiZMvZCzMaQ3sBXU6ZCJgV3dHsgYCyjXobbyNRec4GmYSaCKGiUv4zuVKB7v",
  "key20": "5DLtUCm4cmUgYPTxrtpS8UVTNETWaNU8pGA3sg6Dwq8LmFE7sr78EfN8BwUqBmc6ApRPS5QK7f2z5X1kGLS5VSxv",
  "key21": "4xKTV6fFhGatsoZA1Sj1CMmTzRZYUgK489eWpMuoc8FNLeqXqFiatxk1e6N4UNgWPnBWF7UWGUyaLMHvbQwSpDtq",
  "key22": "561HnP1yXfkTsm72W3U7e4mPXmcAQFnk5b3zmYQGpD8L6qC1Bjwj9hU722jVDPo74dhAKMf8tqWjsrzDSx14vD9f",
  "key23": "2eBSoxgsZ3mBdN4NP9DSNrSkZooTTx737RimC3YpcMq8kLHZau2kte6Pdo4i8EbjuVHhzw1WzCU8pynH9oj17YRY",
  "key24": "4ju68ddUG4nDhGjqb8VdmUVhQ5YPy2vD2woGh4CzJegyBDQqDZAZuAr9B22VyKPXbyVcMms6jubtkRpGkHhTqTtW",
  "key25": "fbNPeKBvpFm4ULzHDxdRvoX5vNa2BpbaqywDSfJLFHKf1kShjQanKacG1aFrs7qFVPnHSdHsELvSvS2RgqEJMNX",
  "key26": "5oVBSWB5NFJNkGdK5FkqyqEC3zbkiLnDdbsDijJkmDNNY5ZWJPHB2XGUvmpaqqhL7U6woFmWFkydsr1DGjKwN1eb",
  "key27": "3JD7oSbPXzneCpUFhFaZ2DaDvX5tCPxFKxr8G5ykJWMSbenWsNGt4vRQd22dAtqDHhiLHX7z8Z3EhaYfX46WSDYc",
  "key28": "dz57UXZay4NnGTxkBy6bTF3ZzXGnvgQKsJ8dCPEhMc7e8QUimsDMDRHorKteif6kP91owfpVQHVb3mUWjAkyiPG",
  "key29": "28c3zTqWDnBDJSz6jkgqPnQU87cuui64pmpULLEVbV8ctoCaKVqb4jQd6eRmGsRAWYkwdEWAXAYB6XD1ZktCbZ48",
  "key30": "5mhYhWt5pJM7FddmoxLSYK8BzCqB9XP2Udv2SV44fqKsYwzMaqueAttecNmTPBjGkvJgJvgrS13j77UJMKcUgqz8",
  "key31": "DwkNb5KWhc7FFjom3LcyqsgKDyg3FbSBea3wtftvc4GN65vSW39UrWeeupUWf3hbyLBtc1HXizSoQgRy2MXYmXi",
  "key32": "3LCRUvp1AQpkmvDpcN1jEmjwLcYLgixX3pb5FPkgWsssQkcxmvGCASpiag3D4cTSiK8ooxn9mf9FkiH7gdXSsciB",
  "key33": "5w4xi8g3shUzGM479jhchUzSz84nminucTWBmD2zgeCK5sKWYwNp6veisP94ekifeBfXpfJSmXetFahH9XKoRHti",
  "key34": "3teR2zbVgpwV3MirUH2Aasc2WD29JhL1YpigZoVQGfZGY4HvcnF8GUiQ1PGsRe5QjLTeuB8GU5PTuJfZqjwP8kVy",
  "key35": "okeCTwNnhj6y1GWikRruLpy7PEzWEwyh9XC5foMxzJ9iKbuogY8yRKBW2UqmK7vJUUB1YNHiQjivqZCat9Yvpcb",
  "key36": "2MFTS9tm82F9aGuntsckoj55kKPy2UJwmeaH1P9scqiBZAt2K2ZDghXZaRM7yN83T4meLoACqgtSDXmUDEA7F6nC",
  "key37": "3WhhrJs2c1LJLorYrALVKU5qbAyRnajYEjKE48pXmKWpv5P7du584pcxnTvs4CjJkacomqDNXZmDA79wUMce8V5n",
  "key38": "28pcmzcYozPioM8PCQevy57eCwxehB5z4CiqDHBwJmQn3q3YrsJM5kNuQpGpTTcSzKLVeC9S55FAeof3gXnNNVhp",
  "key39": "5DLDgSb36gnsLma5TAuLXVFsdAegZTvK1jSSrE3Yqw7tBg8cRKZFDQitou8RpLUEFJywoxwUzmDToBPxN1fxXM1T"
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
