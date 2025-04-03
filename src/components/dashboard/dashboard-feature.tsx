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
    "2XrnLvdRhJNzAxd47SueJnvPHnRpQ83GMVJR8GJVpKcwRcwFBHPuTGiuhheqaCy8xCzyAXVFKDnKSfq51ruDtLDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WyWPknW4KfjavHKoYNYygHQgMCXX9jhDZj1RPiLR3GcBwvtTaP97jpAcs7PzY8MysczuDv2F6gyMUtsWYeHAvgk",
  "key1": "daxBQeyb44TQMhG2WNugRuS2uwVjyNB4AW1L4UkihfFtyfidK1zs5s2w5dGRLvz5EskErxYPrTgMtPFtmzGupFm",
  "key2": "5FyvVKTv4ueiqvnsork47Qkb7F9rkSoJCSSBEREwfNWeFrrDEnZLLDMFmj5RNnGRvVNVK5LfNZfLvqyjBzrxDGB1",
  "key3": "294FqJVzuXu2j3s2o6CjbjvECYfmtax4Eh1EhsgXm7hvoyDWmN2seUXYgrWCFhHXfKXedf3pGnrtzVHqAUDTA54J",
  "key4": "2CsoESmTz7cjzFwoZTEb7ggeWdVnRz3SkWovtQbpL5yjK3WCmnspfRgJUV5ajcLYqYvSdbmKYirrSvvBk58CzjP7",
  "key5": "F1LfLEBnYkCHb6ZoA4waM3KenBD9uKsW4b6GPE8Tmk7nGZZmbviARbpcidFVWKKwbbd44AYDXJMhPT8HrfURcx8",
  "key6": "3LrPeHvRV8xeGtWDi5FtgdYnwwqq4HVNQHC7t3e7VJvEau5ye9YDYbxmRCJipptjTGaFdzJaQax5R77PU5cTD8GA",
  "key7": "3zntutBvQAeG894hwFrAmdyYF7whQH1L1CHR5WtA6SDxBbWLPxbPCwdcs139LnfgXsx6sZ7Joqhfh9R5WAnvQRnk",
  "key8": "5cCdt6eXeo9xcuAgprpA5a9KDw67KY6JF79oBHbjSSfEriMU3pzW6gJLa7MK7fsWTrsWsevp4x6vTsT7xHKFKThF",
  "key9": "QeURnZdLsVnPr6jLyFhnrRgEzMJuvVu8NWnDj52UBidKbxwspSfrg8iu4eiy56B5kFGhdoxVWLgmRyWC4cbAFnU",
  "key10": "4PkWQPhs5xgvr8B9esb3RgLrk4xsmNi1SoYipxJqaaqNkcKjaDMReJ8VPzxDGRFgr1pPYNFyV1vmhzsRVresN5DG",
  "key11": "3mZX1HY7Sh9ZHHEqbChdxRZRPUXSJDumMv9GmohhGA4mjjbL11RznJM2DdR4ohib4kcZigkQRux6HfeqA6Qhbego",
  "key12": "5277oRTAePAmKH4TqJEBeR3S54FtxR3hSoHSQxiWhyjzwDibFfQKrm12t9wWff5ZDNzbgCNyjaVZYvfFCzHucgvx",
  "key13": "3oDVvmHyYCcS3oBW266yeetbRjE7Rg7QX3kL7neGjQjbnnuWcc8c6ZSTQtXcXyHvSkYG2z8FDitN2QnVYeiNn87x",
  "key14": "DpNyNu1YHNQvMCy7fN5z3qEvL3GRqpHTYN83uLhF35uZhmxC2SCMN4Mr7JvNK3PwjSPTx4Df16R7aBpcybB7uA5",
  "key15": "4Hnqmx6CWh3Z8aCNFd2Y3qKFePjQ2jWuJCiuvAdj4MuZWupjXuPfBvmRLKqXq6HTtTwpo8QrKc4MKRP4k1yEMhPn",
  "key16": "2A3i8nFshozpdRyRj2yZjXZEKDaQ5cQQLqzY8BLeSybcveszw42o9r8iJGmjwEqYZayyzv9GuTpuVNmeTxkh98rE",
  "key17": "3F79Xu8zDbfSLZEeZ3QFAzdfncWZdpmJagNrdPCnkjTqbMkQXqZnCqZBPMBmWve4HvFi4hPjGxvdfNTdZp1mnyi9",
  "key18": "45R6iwq1sx8EF4SccVSFGn5w55dLC2B3Sx4oHZjaoCswaZjqwgmaeNsarLMrpqXV633fzGoCs6oeR2ZXVtQmbv2e",
  "key19": "2JPxCBxPpRSmJZ6abSih3eMMoxgHYD76A69XjALMi2FtNYEK9R1dL8Fduu4ptuzVsuya2GsWKHF1YWQxpbpYACXy",
  "key20": "2WwRTs4urkPRhc2inKDPyTKg5r27Mrj5JsBATgU9sqZt8eQhPnMuhsKtRjMkhY6FCbpT5mtBZdbGKSNmZuN44Esq",
  "key21": "4nX3YSYcmpcvRyu3QMdX8cza7S5QxSjRmmmd4AzQrbs8BwAx4rnLrbXrsT92prQF5boUDYH98Mvr67eef94xFeqq",
  "key22": "AhXx7aGvDyxh8wwB5mzB4nMKDY3x1AGCfspoZ7D1PCpxoWruEoHkRPkNXQsyK5Fu8XQFvLkN8arv1oMfh1aLwCZ",
  "key23": "W1ef2Rpm6SdwLMB76hMUSEScuirhtGf8BLU6ZGsep86ZjB2iHPz56me6LjfDWPpACTjXWPPWNLRkNVucScDMEVY",
  "key24": "4AZY7tvkvSq8ci4dYQ78oQ9msaahRq4j655XqMBXRpTqENpZiXfhnxPNjrVXzED1sekvyFavEbs7gCrZZCXCrrCQ",
  "key25": "5XmHmgvp8CDBW2QMfxMFxAB1aDVC7qUV3o6VXDPaDZC9F1kdFM6tCbZUSTuApNEjMFZfY8AbH2hiEBUPkLraeuG2",
  "key26": "53DqreTXYqbAaVoY46r9dXU1BBZCo8TMQGKsd1WQhY67fWEXUNcJsTfF5KBpwVK4K72VVShxcM7eTWoXDSPLKSca",
  "key27": "2eWH4tJD6fFyugtPZjZbvzqRV1CGNsymXCu9NjUL9N9WTnL5DxLrWgB96CTtWs8RqTyPaLU16B7zCesSc3coRKYr",
  "key28": "3KNTLxDsjPgcGvotRaLFM1hPrEsug5xZe878k4vG5wXPpwBAMVPQ2tsZfL5FSPP5yatsDFKBNFXMPJFEH3Mdpgus",
  "key29": "4KLWm8GNWohJDTpZnLAd5WEWy6NaGo9LFMk5ZCEgsn8wumyF3JPybS3zt2gYW96urmgfEJ62fCiMuxbHLKPAVYwL",
  "key30": "41LZyjquvy3pFtK1g7TNLsEM5fmuavwAoDUfJWvgJiz36NFCHcWcmjr94eBwseuxCVnwDCW5BkdyAqq5JtGHsATg",
  "key31": "27Lj6Kdyf4dLV3MXSEDfE9WqM44BVQCzDB6FXUFjfgNga9Mmng64yWBtvj8YWmrp9hyrKmpvsyiSUVgV8oW6Bs2A",
  "key32": "ukZ42QMCKgZfLRtHYsU9VyXtcfnysmP7vLaYgT8qmEkZHJ9AqVjbJ5QHazpHPKzQGCqdQ3s1pkjW5YVCuWdMZT4",
  "key33": "3JbJcjBcgUfHk5ZCon3vPg1g9qPpvpBjLBSU4km2maCYjjHXfyt7jiWUYkbmXeKnBfDkt8NU7BSRcBZF2Lfr8NWM",
  "key34": "gNxcoivs2b48mBUsV87oYNZZG7X5AaGDyCiNveFpdnz5NtdMsfwxKyFWGi2Yf83KwnUQE22SJaCo3qvkyr9do89",
  "key35": "5Qp4Mi1afrTS99M28HAkykUFeGgn6fDy2NoSmnpi6ypCbspkdxTWnyYFNEZoq1qsgoSYjyS5Eu68Vban6gEP1AA2",
  "key36": "rwdACf3wnKPzWuA4gPwJB4hFY1fx5SBd2R9ga4mBHXVAQ4JGhqSTGGh249PY4RDb9EzNav2Gkk8Wr5RYABFkdTh",
  "key37": "3SsU1TEdbScur8TJpXNxx84Anyi6snRd4Azm4NvwNFJZQCFZfMGd92SbJpsgMYKzDY3uedY7b4842E8TMT4twn5S",
  "key38": "3fP2aENRXYEv8pyphShyY8iRJBTWT1Ldbf9CWuSZmHfE6zbGHy6cmB3dBBo2FSfb3iDsZPG7RW7GEuRrxHnVqruF",
  "key39": "4KnsxaVsqLzRQSgNWHmXyyoRvPhJMUa3iTXA1rcvCSxt1hFERKYjPVfNTrwQ1VJ6KnAv7sYq5Vqhj2u2F7LtDJKz",
  "key40": "aifTPopNgyr8Vn6XiVFXi1Kmnd4SyYUwPLRBSVBZcwqGg5ScJ4SFMskP8M3thVdkGoygrWHDZqttuj1asw27oeF",
  "key41": "38TGigfvfmqDRvTmRgf3ES9nvKoN9pPwXj58LU5429VMbiB6MG1yr3tC51uZSALMCv7ZhKu6fj7Tj4ruCmJeut8R"
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
