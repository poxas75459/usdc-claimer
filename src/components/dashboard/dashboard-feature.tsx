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
    "34dAh94jBiwT7LGphKQ88ddMJKYTJMzEkDFBmD3ZyhQg46a7BMsmMz3kWnC814aTDS4L89aNehdKQiHU49E8o8Dk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32uAyrZ1JrRzw2kbRFbcdS7AcvdMiuLQoY7KiH1AA54AfsZknWcn5AhFY2DKMgDB9XnT9S4sR89acJWuqDM9Uea8",
  "key1": "4e9sgJBry5dojAzMZ6Fd9x4g4Z3HWJbxVH6mSjvEA2Vv6ewsTrdjdr75EcnGwjKH3Kebn5rRYto56w5mxNu2HHiy",
  "key2": "4suqBzAFYYFm2BWjpCPbTdr5RceL49vpj5ffQRtcJC5rwbXML6w5vya5ezrkgHBGeMymRs64qhHaQeuEVsy8L4wj",
  "key3": "48XP2mqnd5Ri3cDYDqcdmmKg6omufKkZvZHLMF248Zvc95PZJ1zfNqWyL8eEewhH6GwKA3shM316WC867GDst8zf",
  "key4": "5i94BtPHAMKNykqib3maKfr4gLH1xf86aJtSU7YoPYE7jaigogNbNJHEYKeZZ3xQErSyKFjm1vNFFCxQMVTrxLwg",
  "key5": "aca5mJJJJLuCdycB8WEYX6Nwb7iHaCqkDDq2msfXRsCixBuPDU7zfRPgEsGPZ36JrWVcjHUMTC9RxpCMS5cMMBW",
  "key6": "2CwN7xVuowx3NgLqtCbAsXhmkQMBTZT1aKgydBdkf6wJJJn2ZWdisNQNFRPDaRatyqGnX8BPfya6YGTHCkWVHxM8",
  "key7": "3AtWE8NGzJLrkDYtQMFRQRrbqfTuHF13WNVBS9o7kEUiJa5bpEpp7ECZ7v8gWCn44PfzBrGVeumfezGy6V4szGq3",
  "key8": "4Z2P3BHwMEt4cwCxZfWgFuMvPoQyar12AtXeNudHuVj1D2kmytwxg2YYJ9SAK8PBnSux4mwRB5SyJNBFsT8ABabo",
  "key9": "2Q9vAcz3FzTxDEFtFWak754DbEqvUaNYJafX1ZTPuMQ4tBjTmdRTTf7cemX4HUzcLeEWrsqpXzd5PVdc3S7T5FZD",
  "key10": "4hRsyECmdC57fkMnHmMPFbFpLGWXPBpQJSuQNqBtivuvnAhCE6HVTNPJvCPiWzkUMRBZJDhKsP9QxsDqRy96Faoo",
  "key11": "5qnUuxtHjfDRyqXeEVkeUX4a5qS4RPz69gKBALkdepe7do6zWvmZhg3u97zZ5oVuk1x61Q7oD7i96hU91HmY9pwG",
  "key12": "3fmZBQHSTs9UsEPNNPd6Q2P29rueD57wDTVewMaNA5uwcLpuMFqNHsWMPRP9ExUiKjrWqp7gnA8u8ev4NTouS8FF",
  "key13": "2NCGZpxSsjB13393jiMke9tzYDfcmHumw3MJ8pbyjziYnuqTr85XtZFbenfGW3pX4uWJAqbZ1Bcn1XWoLsk6Fiyh",
  "key14": "s1X7mN944BQyjRgzEwmtRR5KcaCbeuQXZH8LHu8bMJjwSmo8ATWyXRUwjyeuDEPJRD528eyyZBxFTk2Wjq3x66w",
  "key15": "5tW8dVQUQkwHfYBF9VqMtJHvb3NHoU1fFjcUKzPgio6qsiaTX9umNMS2Yx3Sm8aSUhHVXuwf6VwzGzF6ma3YdCod",
  "key16": "5KfCFPEUCDZzXiPwkazvRZm1w7Wh2g2RFYctdJ1qJ3LbwLTNcucWnTuR2qghCMFqZxZQEqapNRihSbXUQ1FT7Z3p",
  "key17": "3pBUpFgwNHoFNBe3wMHrP9FS3nrjzkf9xeRBfthsc1sa2hsMPTkAM5pb9tdzHP48qTkYwJ9S15jGekC9x98eE8Zp",
  "key18": "5F8rCex5TWh3h9g6WFzg7S6Gy1nChF2PAgmXTuAakmJvX7C1Rb5sEkYFKYtu9ZffNL5TLLgZq67sFubQJA2Mvndi",
  "key19": "3RvySBwcHuzmaPAYuuwfmdK9u3khyNjSNnFhsBfazRB2ScnRZiKcofjfznnmW91euY9KKyPsjmQRpzTuybbS343D",
  "key20": "2M5ndUd7vs9Fj899BY8P36EzFfSPpvh36fiT9DVG6kFa2vCAQ8cSPnAc8uHmVQCj4KFdht7haXDNHxdnvhCuMk6g",
  "key21": "62uzJKANZ4CsPEHwvXt5Fkenggy5XkcsQ86UASXvPRKBx15Bd1nJjUq8kZYNoVLy4mqWjyx7wmLvm9t8QVJUcH5x",
  "key22": "3BC1zKfSRCfvqXzUkmFPJcdagAA32DdyNM45apUnf1Eo6xtNEswPkwo9qtE161tAJuiviBQqwSEF2nBRFUCedEij",
  "key23": "2qcVk8MBmVU6EGiYvUCcDNyjE8XGPTH64sNDHygqrGNHkMsC5XxZAtC6VftkWru4EGKpxbkAw7YhHQnrnfg751FT",
  "key24": "3CV6ctboFE6BZcM928wkCX1xDm8LhV6UGU9gtJdM9qTXkMfR2JBu5PD4dB4PqHRceXcfcdAyq8bhTFmySto6JnbL",
  "key25": "3aQDe4bKYLD8B4WZv8KZSjNYpvaydwGcfZAqunNWCJTZLuNMwZiFnx5XpowzkPU1FCp1QQNQcANWY58Wtjvs4CXZ",
  "key26": "rue11hNKj5x71T35zZe71Vay4hJq2zFtLxcvcoxvwxSj4xAJeo9NyHUvpz9iGZJpc7W1pV7aJi5kdFRVpE8scrS",
  "key27": "5HVFr3qTJiKQkGPXgyQdUM5kAiyt18JBZMrvDBQLggnQsCoijCiUqV9sLuDedtb4oNvMa3Eo1mxdci2TYwWKUYL2",
  "key28": "2hesDHCKA8VVMvXfQjqkQbMeqoiPCmYGK7prdZMwy85VjvthNhUvPrasKkHge6zTRB9p2Ab8To72PQMF4LCYQ7h3",
  "key29": "3wdqfmUNNBYivdDQW5zcwB2vXdATACVNjxvx3hyWC3anACViw3JXu83FiRoiGov5vBBaF4W8KF3ZduVtbMViyFNu",
  "key30": "2kvTt5sGirp4skRjgxfMbRsiSvzaRfYZTJd8f9DKgdFQUV1wF6MpSB9g5jkMSw9DBTtrMPmLbJvd6atihysGZwKN",
  "key31": "61ezFTuWoBTD5YrCJ7mDLwCSsssdT4zv2phvAQnq9vmPmDvFc1SYxrgjyNdZQAY4k1ACjQnu9FaFEAeMAyqpMEoV",
  "key32": "67cPfjsaiWpfDwoy8qP4Cak4AwvJUJs7a2Wr77EcAYh5wDC7g435AoALNy3fUW8VKyEh3MiDqSvSbyZHa28QgfCD",
  "key33": "2drmd4NL6T8FW6dEyn1GjBHbp74R1Xb2K37fZUjBLuyVPNmuC2i2ZzbSkvCqNCE6aoytdiwMeksnP9XxwrNmTZE",
  "key34": "5XN9Sw3Z6JzrdcXDAqrQu3WE8pHKPzXsAth5MXWS8euKSLTfUSFQ3rPE7kbEV8RoZTYCUnMCU3r6uxEuHT4YmY7x",
  "key35": "4CEbEyKqvJzjcmwyZxdVrJYiAieD8eipjw5Aj3Au7hcFRcN8EHZy53hEeWx1BH5Pfcr9Uhq4zPdtW6193ECWWZyi",
  "key36": "5eNGYtXAifDQTLrijn1WSFYRUBYjDxUgEJtv29UZbXrFF2q9iKBTB34XvU8kZPEu1xE3tKDr8CCiCaa84d8PTWg8",
  "key37": "5FaZ8hQ2h45Zdc5dX3mTgT4jZBpgJA5RTcjGHbcWNb3P3kyFSB3UGoHssqfPtF5F1JfbDuHvt6JVyCPZf9hB6aDD",
  "key38": "2zMbY6h2MPAZP6HQdtjxTaWUhBicGr7rjsLpN6JmcS26Cqh7sfn8doUwvLWsUsiorEkDmdTTPu9rSW2mVji4V6Rv",
  "key39": "4Ff4s2qMKxYbb7ZWAK4rYeutNTq22aQye9jq2VZxTyYYuWXViREAmNPq3gzFgTVLECExridk8dVhAWzNksPuBTpp",
  "key40": "4PeuwBKtez5mQXmKrasC5H9wshmgDbTwqLqpHfcXPd5v6Jzw5hcoftCqyptqYpqbVQiPFj7mSD4piEMpQ4UEqt2D"
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
