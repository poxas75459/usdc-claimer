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
    "5CXFP9eDbW7Ye7LEWhyvbRrSAhPxD5njz8g9d7Hg2N6JT6A1mJgNSDbDp68VGKZ9XtMBfGYhb3BU7XTk71gechPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MiyhbRjG2p5Wc2YpxTV7ZcTuTEZVzwQftnHJWF8zaK6vbGKPbjWtpeYpuGVeL6UK5a7msmxSYva7ky29xYhs7GD",
  "key1": "4t5qnvF4wuA1rsD2jthsg2iSvzb7bqeeRpauLZEsykrWNbEbSGrd6cx5KV23Ssz4ieeYqPNQNHCF7RQ4Pu8M65ib",
  "key2": "4MsRmndNcAMV6npTDzHjSkV6mcEQAWV51L3B9cmLmbkucLvyPrRYZtKmsG57xCXuaXVJFqdj7LyeBw563BAkybGZ",
  "key3": "5oeDa3JNxBJizXbxrHD9PMhPKM71wmZzeBCxk6zUFEmLEdaEBBVTi7RFZwaw1zetH3EHDtYDrBnFWdhYwoh5wZnR",
  "key4": "RasVDLBujhbAX7Vdc3LVAqyuYDC8w9kZBJS2ZUGa2nNMcv8HXaTN4RbQvo9Z9KxWqgT2dRMuv3tumShJeSGwCVf",
  "key5": "4bSkeGLFHssmAVekxRj3RoVMCyiycsNukqyk6ETCgS2wLqhLAcempkK3XacMxHxW2cyLGLhGC9N3UksnNa4wnB7e",
  "key6": "JznVNwjv2YsJwC51m3Zu2sg3iZhUGZGhYYHjFLz432mMCwuEiupyvJZNGWbNL6ukqvtaY9USHNEox4qeiooMiz9",
  "key7": "2x8ggnAJiv6wLyJSz8vCxKSXndNm1ngSb2xcDrCEaKHKKy7WVkaWaeRu8UZpDHkKbo9jg9bgu6JjSvy8GBwX2EWq",
  "key8": "3i3RX297SRbTUGHfyJ5HTpncrRrQMZdBtjrs9RmSsh4pQGJgf2CQuJa2UQYNoSdxUikeS3rdVkd4asLavGNaaUG9",
  "key9": "3GMfGeCWJuki2YWbi8kK1sKaXi4QyFinP4ciHSRFYgR8uu1uDh1t2rQmJvfzyDvwEQiKHmKtAyEBmkr7hXvHjZuN",
  "key10": "2nX9GNvRp5JFvCxDSo9ucQHMevDNuTzuf23FXTZR1azkNh9PZqJUw7ZN62yQwoRUfzKwAoz2qsRiGugvMhDojksp",
  "key11": "5hJWy5hEbbT3Sq8jMVpnxNVzMv3TJ686JdEFqGaneMgf2GfxU1DdrGa1R3xKXrAHRsKDBzJhs5s77vgwRJtR6pjh",
  "key12": "4budzmDrTJ8WcpCt6i3CtpsjwH5DsbF9mkarFe9Bdogqc4XAL3PVv4LRmxSUpxTh3EHtQzG86MqePhzGmjwvYEYx",
  "key13": "4y57Mtcjv5WedeRqN5pJVJvMdCcXvpAWnjDXyoCqhB7FpzqVyuXFBDpSHWPunzhmU2uQtG5832DiUqaRriKebk73",
  "key14": "3z7LSND6KDLTFaVgAmm2pbEpHbCrx1DHtMKnshiYoUuBvx7iXuk8rPjchv3SJn6sxNaUEaoVMkmdoGPFGo5mAU8e",
  "key15": "3TFGSywcqWfHBnYoqothBMjaG3YF32Z3mSh3qR1zEJ14e54V6biZoJaCGF2APiB6dmiUP8zdUXo7bPzArgk2YYKX",
  "key16": "5ZU12ZGA7WcgEkNxrrTZmBNPQPxdXwmwmjUAuhbH8irygy3DMHfu5ymt5U7To8WvwUjM7bzzCBZunUCxqPt2qCSk",
  "key17": "3rTZPWJTX7HtfgW1BPT8bfNVkCM5TT94MGkELmeN1y2yHrJg8TvAsPMhuVxAVSfuKfnbbfoop2zuyDLm22EbGosR",
  "key18": "29eAKiqVzKcPyseApRdHmdzBpJMMBJtKL2UyfbzLGS5FqpiF9PQ4sCdqjizbQMdcVvKTQaKvv7ZgqGbyYc2zK31j",
  "key19": "erdHD7fp56HqUHM3CL5176eSyMsF8qBttau7BRLrYPVuV4gawsEsBYmEXsMwXcu7WyBm8j66Fc4v7nzzTT99FQM",
  "key20": "4tt5zaert2cngbkyjzghcpLfJgecydvuvnn1Hy64e7zAacS8b5wvLUviXr3kaAWVDr2Ps64TxzXSthmYiaK7QmvM",
  "key21": "5rFuzBqwAWpBnNoPBSdJ12urq8R83TMep23FDM1Sgey25uFfSaB3yUENJXvmQszrLtAGzEiSd1KVuUJvHpLHpApu",
  "key22": "2XtGG11G9YL473rVzZrgz9bpxTreiSXuYub44tTEZRDUkQrv2JWXwTVehV4x9aixibXxAFZgYZULiDqqoVLwPMnF",
  "key23": "4vddZTY8NBmHgQZASzVey6U3k9LfCk7UbaE1nKHhXeCccwciZtVCsfLST4Z1uJBvbjQLRiND225DQMjgWnQmTeY6",
  "key24": "WfcXDB9e3xTiehi6dp2bvKLrvkxfuvDECChrNbDukYeT9fsegPvfU2qrFCPsf8GTLw9V3UfMydJ7PP39RbBaLAd",
  "key25": "4fCH1WK1hn1Q2QT4ZPd45oTFjHngy7bLRC6MB3B1NDARrvggdX3GA2rgxb3DbBfhFLcnDjMvn2d5tch1gYC1SZS4",
  "key26": "3anH8tHUSQujoyxiPf1v8bb7iMqzp87D9JEp5LTivSMC36Vh9VSrC7iVCiyj7VnkGzuuHrtbvKmMzLfaycyJaoXJ",
  "key27": "5vUSD9Dwd3DVPLQvynovLva6GcyR5YSZiGynYzmsYEaKTM6Fv3Ze3716pvkfFtog5pZz4hp1Ja8DZSs1Rie3NFfT",
  "key28": "4G91h5ixjm94fuyBe3rRPxeZprUWVR7uG449M2XJYrg5WXxX5cttSnfrXNjz4rLRRkJMfFfjVZji7TrSvYZ4NzRc",
  "key29": "4aEVf5Mw1Zr5vHQXZzHuydP5WWK41RadFUQQuHmyXKCcErne7zquxsxcNXaxTwNauzneiH1n48Yp6NyGZVRrm2nc",
  "key30": "cyT34woGMvJETocFAVEcoCh4s4k5wWfSXb3wM2vcACu364B4ci1x7YTsSoEvNy16AyRxJy1r3rNWAAaymgXbLr3",
  "key31": "pphfGisgRaCmnBszRZSGafJLAK6GJiBCcmR8Jshj1GGoDydMmdvsLayqhepTdq2jSPFXksbMfHPtTeqd3mZRCUS",
  "key32": "3G4pWyJdEBLP6Svp8pR2aiKGGECQLU311MyjVokP9HwW5xHgarRAL7bjrCh5NGRnrhA33q4EnC8kR9yxDWQm8JzV",
  "key33": "5cY7uXhL6iUyfxE4odAmrAwc6iznCfh4PEyCSDxnVb1tiyhNYh5LiUoSVf8yEPoaVdYY6we1fYdeweK1NCKMEpC6",
  "key34": "2XLhUx8zxE5miaT5qxvQb6VQbtt7kCtYxjXta94tp7TTZyHm87iNhC6vmLzr5i8iqxRq2fwUu4toiNiZA2W2hzoe",
  "key35": "TBUAKH8S7mWyLmjjbhqoZwhJrfoMQLjLvPqYZofSU4EtyTAxmE2pFAhzRgnMLNsM6NqyJUhkPvVL8LP5dnqYnBF",
  "key36": "3Qz1Gz8hLhwfrn3rvyKnZgXbw9VknuPw1zDHoHfkWVMWUcwcrXep69PAWNywWD8gPmDtSk2XH6cA3URuqZLhEhdS",
  "key37": "3ZSqwzATywdot7cuEuwuSQw3PSQzaTE1surGs19enSkw2eqh1RgRKhAuk3LtoFKXv2wEZw1Z9kg41P1sLnDYczup",
  "key38": "4x2CjjRHjtWbbq9cPX3A5ptt4qn9sT5zYWXX6Mwnu7LUnP3qye1d3vtcY7wvNL6LL2UJeRrKhu5ULU1LrR5gkoWx",
  "key39": "mQaZvjp6oSsn5ACEvFAsLZuTnsmCR1JUXvZoCsPaxLPnDRQ8LziL8i7hMyvMwQ87HtzC59agaCDvpuDwjNhVzfE",
  "key40": "2cbKvrCTLxDq7zYrkuz4zDQrGquoSXCNbQNe1iCREkMgmkSb2h4ur5ofir3fydniPTnLpXASKuerBu9XHoxzVfw1",
  "key41": "27D68jP1NmZBQoAJAq9vFsi3z9DEkEgEazHDmfc7PZeMpadW4sVjyahUj8bbJafnCEGyr2HbzrCBqMvsxeT1gkXe",
  "key42": "5oS8ju3M1HeJccSgvEitZ3SGVxFZZYrxtfTYit235tBwUH7wmaMiEcg3Urq2Yd9tRVuhG5fbeoXJLiRGttGiMchr",
  "key43": "5eAPyZWrG7efuWMqWobJud9HXX6PHnVQhHLdN28mQX6jCZxvQhuEembYVqdkaQMEn9i9Vr29HvrPyqo1vnGGroWU",
  "key44": "vzP8robvj8JALj9iMgq3Dy76u2L65D8tGkZ9RSBoRMsCVA5sTpfycb6cDibNzUwzp9kwuTbeZVNcFaYsTxZBZYK",
  "key45": "4sPom5zqCc5zt2DqpHAX9KXUw7vywdwPSz2LMf4FLrB51xyAP5kCxZ9qmbh8vUiiyYz5CHSjwtLC2ZZ3EC1tfeP7",
  "key46": "4fgd15MSNk3JXmK5mTXJsR3uWCfbi4K21behBU6Uzrw9Szc5Hs4BvWrfm9z2x9PjrX5JCX6TjFBSqEsiWPbfBBpe",
  "key47": "o653PjC19Xo18Pk1Zm9vSwiZ3pKohf6px3pSbZQSyuRDsPb89MJzuMbUMDC5aTET5U3Y7eo4rhQtCvtVW63CdFD"
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
