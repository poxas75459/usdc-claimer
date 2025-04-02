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
    "4ukhS1TZNKMS8ciTpW3FJtRuzFmfELWb7VvX8gBhL5mzWgwYXnxq3nZtFMYrz6T8QMkB4kKG6qvGHoxSLbwwXktb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1bequYwhnPEQqKCS1c4wDaEVf8zQpqq1KgEGHrDg5yBLmDP7j6fTRqP3tgtVVsQeNDVRZNmdofKB6nTckjWdT5W",
  "key1": "4ZUB3di2pTzTwii9mtM2YuPR1P7vwcAZRpBEujprbucsimyNWfx7nK6Y2cgDvNR3YDCYVhrqoyVYJd36ewd9WDtA",
  "key2": "2eL9jet2vFDCgEoinSeGVKdo9Xzf7b9rxUphWtjMcDybFKFyQUqwEECxYyFGSE6JKCaXxWCF1rM7oXuLZgn144bY",
  "key3": "17KshVWdugLVK4gAgJhUw5mKbkxzUf3qwj9t8zo1t3LsxPJBY9McJePYoAGYLG4ZS7oqZFWgCBmPn7o6jiACkPN",
  "key4": "ifji15vwYVcHuw118J6pKLDV3tgNbruheQS16MgmxLFg8GXtBqoYuukyxXBNBhUNZpZhMjYQ9basoXCo9sihxm8",
  "key5": "GhWyb1pePJ8RSJJ9qtyqr69iKLb4mSTzm7uzizQ9j3WLP5HpRYcdgSJdqfDFrXg1KRAqu2Wt13P1tYhiGV444HS",
  "key6": "26v9mHXZghJwcubKHo79ER81UpxnPJXKM1eeptDf9qaUjuyAurvfB9PFhau3eyTY9KxG21bQ5Hfkye8bxes1g19Q",
  "key7": "mpwpbTUHu44BgFBNB3GsNQUdzFzJVsniMXHDCfD39tXAMc5sgkRNhJxksjJCHxk1vcZUu6wECCUhPBGaCfqpaZo",
  "key8": "5i6azAFwi5LpR7sEsKJ8XptYRuHSuna8RikmzKJwm5FmqZkvUu2JQT9xmmHkmBYxiDW7rBa79FrCmWBguBNSCaZw",
  "key9": "4KGZ1PdtyFf41fxaL1h8skfjQR3Gd9UoLdtD5Lfsj3dYWiVLyTMLwPVFuCfWM9b1rdeGcZ77c6EkvrZqVsg6nZSH",
  "key10": "Jx6Xcdcqi9pDugzhNL545CsXN5qKPpqT1mJN8fJqLEtc8eXjzaoQcbrJPmrkS5dFFjymrNTDjGmu1dL5kumaDjY",
  "key11": "yEsRfPtHPwQUnGF1YJUvyUjTAynEvQkztPdgk6xXNeq8uED2eqNUrLgUAA58s8GbmWvcYNXAxtsKHzRkDP9nSU7",
  "key12": "YMtBgfFxiv2CFPW8FRyvdR2RcjC4gaxEdJwFMRSJ5dWeZMh3HYpqznvokfiKytdRHRtLQ8SMxaJ954BvnXSX9Xm",
  "key13": "3bWT92bmdFLMo3JjLJrf7q2JagYRCbRPBvK6zzzZTTRtW4A6JfjAUBFU5vvMofn5pAK6szgLmftvXdwriN2XWdDn",
  "key14": "5ERY7XdteB4HspV4FCwuGS5EzCYZDmuJ4VUrcb5qr2nw2JWMpCkSf4TK6zS63rZoRPvgTGnMNM7py2bvvcYEa3ZG",
  "key15": "4G1hyaHT2FcA59eVHLsFAGwG9xPAN5dhtxeok4KfM2gee9YssRNXftmxFkLCmD69Ti8dY2doz2ZG99KS5wLQM4en",
  "key16": "z49trWFUcEv6Bmyw1keMvVpifM8TKgXxnATXz4AhYh7DUZR9gT4eVXEmxQUW56kcx6R9rr2YxffuEN9ACkTZPUR",
  "key17": "4Row4Zr3Mms2T4caZXHuy8shPUkfYS5yz7jLiRSWGXVWP3Tj9MypqDPpAo36mbYWhA5BMAVtxmwc1TgbE2sMHUnW",
  "key18": "3quNqA18enSF3qnEputjveSaduHZcoLe8KPyRT7cYbeM2JYXUfYucHVqYwsGy2jHgu2RzEGrSCgUMTtzRVAsc4La",
  "key19": "mn2tuQm94437wBU7zy3f67r3PPYW1LHJPatVscH1DzrzQ3LWaN8pSra3LVNz8YhmTdDBCsdEBTMwX1Tqx2qwHZm",
  "key20": "29GVn4g152iCHGPe3ES7c3PdC69YJgG1auzzSUVxS9kYVhMWzzEHiDkZXiwEWC8oSxkeMDCjg95ELpSvEHc1YKFR",
  "key21": "5MyUcgK8hgFU9baZv7YrXbQDZFXDWrpvrKWMf7RgVffA4WSnqoM1BwaNi9LcZREwra2FVXcsNMzFyRypDPecBgrR",
  "key22": "3k78vHUdDeKxka2cW3RNftPE6nRzEzJMJHX69DHvuxbZVcd8siVkhYhGaFeVyvnDrtt2VFSTzA5RnZeE7wxnuKeW",
  "key23": "4VMJXNXxGocJbcmEGr7mxXP9XBnbfTeoQG8xaadBsWijuuzXZfUgEHZDbSTDfj7NC5kg8d5N57fe9uCgaDaYL5xi",
  "key24": "64QmFTa97cK7NG5wRmmm6cnqHHZLL8hCkPKJ36PPfX4uH4pgeeZXRBg9h9X9ENybHNaChCNB9dzqyyiRJeLRzZKB",
  "key25": "4HtsxdBGDAausCqAjEm1uP4yr4sspd2y7M1vY12e7dCwMrvDwjiSGVfMLJo9bJkR1carvPYyH4XGMMk2cpX12qzj",
  "key26": "SdKFXn4agRLBWmYubUnHYHNgMbxBpr4F2uVXyZ7uvMxdzhnHkC7LuWxqMTWqZFVUaZPpwddkwBSEe13E2dUhb7n",
  "key27": "453A99ycVsRNnKrWxeSwZpUbpA2dY46kQJhTcxGKBqvFheh8VPMsMakUHRwkUXqm9tUf5sNXwbtPADnqFj9WeNNp",
  "key28": "5Xb1uqq7FZd49pWNyqPMA5nhsmafDZJ4CfKFHyrnpersGzYxKShBnkEWCW3LGMU8VdXYuM9JvhY7bfCt8RLBQFa6",
  "key29": "625mSDNuxQmiJ32dea8akJJ1YrDX6aF9DCG7VJP64SFVHDHKV7UxhARPsYSP9ddyg4zy76z8LGFARWNYKdfjg9AB",
  "key30": "4fDHTuAzdqoRFw2TVoESrJW4YZSToMYJxUH83cWB4KZjK15bdZb43xrLmQSZxxs6PWRkymauvxfXbFP3gocSWdba",
  "key31": "4oJLouJie4xNVbQVgEUkfTKGuTPw196WH5qxJ9BHKLBbJsbnV8BZdCgNUiUMGvwHmp8m7cyRdNbZzrtCFuwRxkgr",
  "key32": "4Kb6PRT4Dc5Kwitsd1kTxnMf3gDyprXuexUqyaxy1rXC3YtaLF7oYAABXgdsiBnsWVkmi9RyUHFMQMwbyQTgwWyw",
  "key33": "2HVebWrZsvdanCJDeodciz4jKzHs3xGKMPSV1Rw94Mb2vLgbELPW8oqbu8MRSyf2S18auy1JhoziHE15WJXk6rvY",
  "key34": "FzNRtRdg1iK5fMeRGXFrVgeSNup3RrZBXMs1jB8BAMts3PiC3qwWvc1cFpEWgRZRcdZ5HbaFDGfPZbHVt3iivcP",
  "key35": "hZZJKceFWkamU2UEJssMYsxu72tQXePMwtxX7pdfuvMP9dj7jCb8QkWnn1rZo929cg6nXyRAMYK2x7hvm7cKLqA",
  "key36": "2uAboBZosVP1AiHGTc9KULKtLa6LpZAVGXow7EiDU4gmGk5gbZHr2Kd77gJpEBQLsqYK4BGckJuyqc8UYYG1m1bm",
  "key37": "3XRRF35hLMeXSqECRSxbi3qRbKJzZedY4B1skSzB32e4j5GyfT7jL2vRQmsxzuVtdrMkMQ93Gstw5K7mYut37jdY",
  "key38": "U5u8DjvhNxSBb9wR2hsMrQmpX66qtbWahNPm2TMPicQWhEPQEEQ9vw26ewSmz7NiPt3FfhGwdjN3PJbYPCj8yoc",
  "key39": "4xRpEWfVwapXpnvdCW2R2fvQbNG3tK82AYoMy1YunV8BUsUVcS6rDLwCWe6LMJRj7KyZEJyfbrUrFH4ybzLnyTkj",
  "key40": "2UGaTnQhSaxamEru6UnRMhGuca5z3qPg7TWFf4FyXGNxtz6rACe6v4mh8bsmhhDwQQ5THkPWRtncRhKfaFQEQzbh",
  "key41": "2R46FBcBDSBYvUYVzn8GsHs5LhUDkCHapHRF3mL8w6ssoSeQmtMkk55kb4YoHzPtsjhYA1mpfwcNrdPHmssz3tkH",
  "key42": "49pqjmb3eQZDLSB4EbFNwKm6c6RdpzoHcBAsMFMiJE4Duh7Pi7kBjFxvkCnTMVg27iqW99pD7CavrcruPSDhfYW8"
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
