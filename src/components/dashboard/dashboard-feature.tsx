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
    "2UzToPvuGPs1x29m43PLADZkDppxmF8biFWcHs97rhAPVaLF67aCPyzaT6XyiZWmqR3w152brBxUFjJrQAecQTfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qsejb2UiWoUNDvjzSpZNNgZFCaeHFsNQYQMhpmXYx7rRBuXRR8EjF99UTEt9dLdZ42ZWq8AxHJPT36mHPVNbNmW",
  "key1": "sRYF7Acgb1xSaNyp2yvbH2r1hnZAC21Lse4tiUcUnZiqzFhukhdimZjVshY1P1zY2ZSxqxE8MwXR29UzExNPaHh",
  "key2": "2dTGht4ftsMg1fpqULKT57P39D9N77yWcGyMPTHFNXfmsyJPKJ5fLypQM9G2qkvkNoFWEe766yu2Y7AYwRANMzm6",
  "key3": "3vw2fXTXX46qusFeLrMsQVwnvCDpBRiToGPdm6tgqLwJNLtRcfxyCB7MfScuHUSv4KWdBjafS7QmaEpfiXjVANCP",
  "key4": "42wXMYwE3hRMc5zMURs34f8KbjCq1Hz4HQYckVuxGBX6xoGyxttV6772EP75ji4rYw5iLR2cBBDwkWHzaTjyAbJY",
  "key5": "y4HN9UGSrxx1dAEXusukrfRYnDDFLGG1Dj8t2t6aUFNhBMgQBZGuny13e3ufdnSJBXtGwDfg4jUwUWyGz3AKra6",
  "key6": "2GNHPRbxaQSLJ3MNq8wrnePZcfQNpwAYwFj62CB276aR9Ev7BpkcKD95z5HuUvYyxY6Pakp77YMfQwCVLFxN7dZm",
  "key7": "55TDmQMKaQGvT6Zox24aSnNTNuqGoSqB1ASa8aM2i5rWMtgMWXGAzDsXDqWNSPB35j28kDTsxX1hJeosyH8NMoTV",
  "key8": "3krMCJEAWUV8sy2fzhze4oGddgtUmcpRnRxYKjm4M2X6wDXAVuhSATfPZHx65N22SWogbA33SP9yKmn7jSw9j6pG",
  "key9": "3pAoaWy65Y2DBF2wcE2xJuFz31iBybQYDGMepxLLSDdreSghNEGPbDhRdzrMP5T8SSQv3dADfVt8Lt7xtB18JWVA",
  "key10": "5tBjDmxWgMSdscwADuq6mMVBbhuuWbyUA7nydZjrXtsxNGfeUMCuhfoCybWWiYJimrsFZWVqJLMw5kzZFwPj6CXq",
  "key11": "5mFvpuWoyybE1Azi7g8bW6mL3Zrn4C1qNCNdRLt5snXo2PkaRFz4WDACyzuUqKDQzza238w1GBBNeBwDT3h6BCb9",
  "key12": "5vBNoN9CwurGXwz3swxLCFHHr1rrNamjudFtJAtFqaqYsJU6VvxtR7Q6mqcf5gFrDT2NNLRjDXab2B8vgQGZeS7k",
  "key13": "64RpTHtRhpAPUhL5iRW1DuxfwhbJKUF58xYVmGm9FeTjwhPsgji6nu9c6TDNg155SKr68VQ1uoFUdsTfMvfNsREJ",
  "key14": "2GjKCngaqNQhDAdAEdNxXtZyeKokYbt4PmWLdR4gD42sJs7nyGW9Z3DKMzTypVB2KkkR5yC1nwMqBHeVqEC4g5k4",
  "key15": "3ZzYoKLPnoRRU9n5uChYdzjneEQZpoQ2Py7pamMyoypCUM71G5xXsue91CnU9xT9tn4ezbMKZnvRcK2yNfDaoQpn",
  "key16": "AerUUqkb2fSMxqUrGQ9PFNWfxJEfXJGmhVAtDpenoRL47XDr5prG2ci9G6TXkJW3LHssZHVDdnKzQ8rVk3RwHDQ",
  "key17": "5WsvpggWCHfyzbGLWUQYWuYSxaCMzkTHEaMUK5QFUQWRUzV7Re3hfEWDegWVWpwsEjF2KXSKvtMwNWgqkKnwtLrm",
  "key18": "3S3C3vnb1NejsUeoSH1qNfqhmNzaUiYwxVKjwAc3ypRpEA7H6UVYPYjqY7MF3NoKqhZF2u12d1X5xsLKHXqMmm3L",
  "key19": "RCT6ady2dNU7dc4bUG9YCSFhiEoph8DAY7hKRMGHYzqFmH65P6R1qXtEyC5Jx8M6dxE8RJeu2RaaArJ8kVGRMSB",
  "key20": "4vZbt3yfWbW3ihhdwBojhy2PTsDcqmTcAM68PGiES5vVci8EKkwg47kAfM9CgELmYXmZwH9mbH9ngDnyoBJ1KvCS",
  "key21": "Hth4vVdKMxsivYMGBychfpTAXJPFqaeiScBG3pYCsc99mKneLG8i9A4Y8Z4MEf2yKYvUBamhi5p2xo8Dr6991Ny",
  "key22": "5un6HvWuxDcVrz95TapoS6dECuKKehPHF3hANUVUNYWVy1W4r7SE2wWReGzuoJwGUubEyXoaQzCMC9WyXFW21NvQ",
  "key23": "2ERQxhggUzmGRJNv35WnPgBXzjJVNTN54Tpx9iQWHDDC7GVHggnwd37oZ31QGsZWhJRFkjKhfg8oU1m21skNXPtv",
  "key24": "3KL7q8SjR6fPFnFe6dzkXrCCA8bf5UvK8fr9jeanBuBNUrkofsUeVCvoQTzwBJS4GfBEXJSKApYa2MtzwigcS4wZ",
  "key25": "3v2HPsZNJA3xXvLjSZwLvEFQjy3sVU2qxVMrCydHMWmihCdBXaC6L28SimaV7m1jyEFNmV9SYQDWqqdwwa3XSamw",
  "key26": "4FfjjafrQxgjZ3pKwZiDfuUjTPTgAHha9HgAyxjukv7vxjRLFtPGjc9Fdk2QgfRDoHPV5ZnNgbi5bLwYbN4uJFTr",
  "key27": "2SxM3Pizozjj17xFqmdVNEMRQnJUrNd2WKRTsivawChTSZA8Jd9B723y2grDtBfvYzNqYGfkEnCZFtV29pbUM6D3",
  "key28": "3GFTdhXwX3c4EMUegJiuqSG5GVvkcNz8uoHBtnkZEe2o8frSQYA9wcrSUnx6RXTEpajmTTrGBLAD14sGuYcLrCrd",
  "key29": "5jegThZzWBjguSUBoGPTsEo2YEwoHAXCStuWSczPZBczf7PZA9kpuBSEUE6NwXXpqJ9GwNLA5t4MTuxb9gHRX24J",
  "key30": "FuC2XZgTq9Htf7DLhaF5XP25g8MkH4osYAzw9ziigiPWmcwnHo8gCpJ32qZWqKqFM3iJ3pdHVRvvtvoq6Jwy12W",
  "key31": "4ncp3kDu58YdxzgKjbkG7HsRHQa5ybP59oUh7JyRSdnLBrXgEym7sAgMADDiToJuph4sfaCTxdbtko5X7dDK8H3T",
  "key32": "3dzHDWXDq1Z1gqi3AqCQ6WctwnzeMyQKfGpwWjjoWjwjLNCTBrcAnWSfnMVgptDPCeSeud8ybdxGnJjfmojwEkuB",
  "key33": "4x7L5PzwmQVt8qorf5qzP5FJdxWsJAaUWBtSHhbCf88Dzthm53gwphYktfCg82ZvDhyRUYJ7Jqv9RPqowTAhsrka",
  "key34": "5bYMcbcVRqr6ALvZVmN1WTXMjuG1Pfs74edBJP29B15PbhT1gPU8p6yATEyQgtXM7pYuvHwrbVdaWMmpNu3RUCuz",
  "key35": "hUcvNNdF2p5DMpneSttkEZf2ggdMmnVqKagQLY6vfY3u7wcAQsELByrg2dFWDkBP4Qfjsxf2WFf42kodTooyFRA",
  "key36": "Acd6n7i5qxrGvkKBTNwyEY4TqaQnN5VSDrE8cQHRuZcQM99916g6cYHD1h258MQ6FavKTzWdkfJrC6e6WuDJmoz",
  "key37": "5CBKRwXKLtC4B2cSx7xrw2weFUMfvR7BiZ7HuroW7aM7qkEMu25doFGNVFs2sb67eEgyVPunuXTxuHWfvWnUJwZN",
  "key38": "5wSYJdkNECZ9Cq8Bx1dG7g7BaNBxRAyN2tm7o5DfgokKKFNUbF3AL1q6LhPUTQckpnMEzucizvQG24uMNQu4h6Vn",
  "key39": "xZuU7M7m3ne4mtqnkSEPPAdyB6H6eV3zZSX2uCDkty2qE1ja8UHXS1rAkdrBn6aEcYCjPK6rqjEo731y7LRQr67",
  "key40": "5ZLhuAVorX1G9PduBNJhRseX18sS6TnVsQ3pkDGvdDXVLoCiVLdLjQq5rDLBEt7kHUZJX8JbtPkHFkUD9EbooGdd"
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
