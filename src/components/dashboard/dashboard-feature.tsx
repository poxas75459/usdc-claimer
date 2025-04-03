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
    "oDe7hYZG93zu9x1CrAP2j3ywTMgYxLK5AARZLruwTaCyJbFBE8ERFfCsNkFw7efiLA6JjnD3pfvtpAgShndKqxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QqQkvJQD1XG3rFssP4W49BbQPfQhgav2ZX4AT9KCEGw3VR4CKZDaJfLV9vi6aMditbDuJ7QiMmXGbJYmQo3dECi",
  "key1": "67p9D7XUUQWiQbfHQUaeAfp5Xfachs6iZNBN5yh7582e4T8LD22UzoDcJ9k6CqjTjUCs3tEDhLZCMzbgb2akYyZ9",
  "key2": "4CmEqtGmiTC5VhZ7rmRSDK3pUBDxrNRm3J9fsXfaFVD7qKJ3CWiPzFL4YRTkXmCJM33xukF5DpEXkK8HQt52TCda",
  "key3": "5J6avtND9BV9nvMtxFtV9HZx4Apb25dZ8fhnMshsZ9REXokYAFUDGjiY9e1kpRjGTTrdxCaryyf4Pa4eZbAo2kwh",
  "key4": "3ZYrvwbKncbtLm4noM4ArAvR1s6u9ShXkwF54DxKKagTFMzzC4GQUct5hUoCKMKFaeif8Et5mwsUYWaLQwhEoFDS",
  "key5": "2xnsgQ9ELQVowrqcKfj8dQir7pUi3iTBd3NjMxM3vfPS35TvJ4ZCiG36uTJbYmpNNfd1ZE72fa6uoWMyFDgzoYRD",
  "key6": "4E8Joovbb2yFACi5ZEKjCy4PwqojDCP4p4mgTAn7gJMUDcHB7kwGKyVh6VJiEBmP8d7hqAj7zDVUUmUSMHh9uWHF",
  "key7": "3uy2hnKS4e2iLeRkQgCNiHYcGBwZSgQXAqB8bsAS21QbMfTDdpjqU8MP4Bg9FQbmyGs2qPgSvSMybJ7MZj4JQf43",
  "key8": "5CqPQfVm4JWHwF71KBq4pojqBmaGok7EcRfYodUiqHuipbaKnk71wqdKEmd1rCSSosWuKPoPcWKZKhFw8PXRa4s5",
  "key9": "4tYbFL3oWRhmVNQFzJWsXWBVm4WaHJuywxgV9RnzHBdvtmJt4AB7pAKBn2egJogQArpb2TF6scEtQ7NwbxU9dhLN",
  "key10": "3JS8fkD1K8PyxWvbXyEdywreRgAJd2itAkGGDEaxPnrd4qKJkJ2j6rnmrj1NMepQXXKwQZtTeQDcojNJSSQXnBzx",
  "key11": "s7NThC9QXSAMsXrpkJNnTkt891UjNZmVJTbVMsiki4uLKWdspSmhpJMWVWwdTuAnPX3RF5913U9hZUc4mce4Uco",
  "key12": "QW4iNfgAJBZw5XpAS9eeFC2AbXsPZ948hTHnFZ4RXKTfFoonGwXMTcojEArRf4z7fRiJKqjpy3QeixKymCUMxHh",
  "key13": "5QBx9etWUhkgAgkipRVeZ3ikeNG9XDwo7LBG3xCL91S78yvmiGn1C5JmweG8sG22uit9MxskU3YJRLidcCf3jYbo",
  "key14": "5FVni6mRNuByHSwHfLLwvCRCKZ99D2g8z6ujq4eXetTNhqhrGzEo3qf9dHeqBBosPubphgaSDF9ykFsp4KqENYjZ",
  "key15": "cETPS91cKuoVsr1y6w7pLXThC7NCDBWypJ66zwi6hUggHiBhWybySzyGo4XBCV76hzEVNiev1GwuYMMWnmckimF",
  "key16": "ca1KwvVH5bWouwf9dSnuBBqp2nLb3ezCkuNGZwkG4wo8y7nDaesKPY1GrEL3hSDsLSC7CVe4z9eds7BfoubmpLT",
  "key17": "2zRT9ThVgtSBgJ8nGXhNzhm4qW1StDfz6aJYEhdaLFereKSKHunGKQC6KRGUXiZ7jAQCCkpKQYQ64i89raJqg145",
  "key18": "5cdQwteNPtU4hkK3xgw5XpPiuMhYeCN8T1wJPxJyr4prRXxvKCLLKgPEBYubo877vy9HaU6WmNrC36CSXhNuyRFa",
  "key19": "39RDpuwm3GnJPyoq8LqQi4Qud3nrXjZQSBb1Fh3VxojDMd8zgpY3YWFm3MxV9uKG81ghRcDdg36XNm7PXAGZwMby",
  "key20": "4o3Nw8PmS8ad7PXPWftVsmhoU9GJ7ymE9k7oFoo7ornUBcniBWg6VUBmcd6xQRfnuKuTcQLS5BpTyKqvG2L8mQ9R",
  "key21": "5JcWJWDWzV8gvMPpUr33Xb3A3xDCGnDbPY1Jho3GbvXXECTzw5tZ9HJDJfNesKUY6Ec2M2yhLeRsGdeeguLNvxQ5",
  "key22": "4stcVhQRauP92EQSu7Ncfu1hQT2du3taoxCVvFfiqm6sWMQXXDUdGAYZyhipPy6dtFvRMiT2jfCs2LpaLCrzrbYT",
  "key23": "2aNdRLunGzRCqhj2VKKsn2K9zN7Byj5DCg3RhwzrrDRpRqXs59Qc3J9f8CvFVL27y8vDBog4qMCC8B9HCu858zp9",
  "key24": "2ZR9arzAm9bXq76PHcoKma2tJuEcxtqyuzMCvjVFDYv2L7zUvE72BjKw9k9Dbr6e56pNCsaScMwQZaoyMGf3VL8W",
  "key25": "2DMjT17fpaEyPfqxmHfVuDPD45pySFELpr58qDx6nvLrM6biZjrKwenm6i2yaPr2zAox79ra1pTHXC9dysNLXkSi",
  "key26": "4N62YHrCoYovEtUq6NLxkX3RK3xWSv4fdJT26NYU7QtbGm7FAyjHTDhEaxs1etbMYVfEDEFBMutMf9Mi5TwAzhUA",
  "key27": "NzanWCCxnZCTRAB72SDUTuJsNq5Wx7nSrR86sgTXbxCrNCiuMpdtdiGFeyZq2tvymoxbbvSgJ3Nj32oMu7GMwBz",
  "key28": "5S6VM3k24R1jaXgwUc1yhd9jx25tHWh189uLQV5Fw9ZYjpvSiHssK8392GmZqyHtVKTmjz9NP6eM3DhReJQGs9J8",
  "key29": "4GUBEocdaiiTfEZhNahBxWJq55vgVjp2yfPWem11RkvxoSdtugrKLf17bfccdM3CFn8EDT2bAh4xK5e1a6HFCJwP",
  "key30": "iKU7Jtt2D1gm1a1tSD69fwnHQVvDrXm5tjeXTdi2UfFJieHFvhKTFtY6ht3RzFDgV5NrcFCcvbwXK6kMjUfmg1D",
  "key31": "3MgG4isEX7bQ2xtHTVZwNwnhcAuRyQg7hpdGmyT79dRfJnJEerRA9JsncGDNoTwfKaqiN8iyfqpKxZmAVWvUthyc",
  "key32": "2EAHVNAJDc6NeLPQ8F3K4ZxndcSCij6DomKGXmKdbibzbzMxiwswUZo7WGrh3RRqBdiFgqC3rS1C2FV7T3Ba2g93",
  "key33": "4JG63Mk27EZf2xCNRfbfTEobaWiuPgBekE6HqVqkhrMLtkUMjWZu3JewA1poW8TZVAZy6E7uXkn4okaBUAC8i7UK",
  "key34": "4KkTgquhv4JzPtuXHbDQSCzddoFDXHXYamrV2eoKpcg7yn5weAYpLkJFG8a6mzQHt51FYxRNBF4qVjXBLRF6ZybT",
  "key35": "5kbCU1RuA53F2N5NTSHZo6bPGegdtiQX5f74gX5ZKZUEgkP4mPwvwS2o1nSHHXMhfdSsWSqoN9GTR7JL4pZ42HsK",
  "key36": "SpPVGEu3Dvkgd8R9LpGHJ9FtfyJe5xYkHoZ9TKpYNzfeEcuWnjnP4JpyCQwxMkCvUUut2dwT7EHPJooQCFbzjB7",
  "key37": "3LW3gaXeSwjCAqv4oaGrjqmsTHe4UfhFrsVcAZXkzKHiETtJ5vSfbLHnB5PBqfzN86294Xn7wi6S5pFcR1XbmnWc",
  "key38": "3AtK5Mh9v41B6GXL5CThS96vWucShnPGEXFC99BwunyiE8uvN3w2By1aGemKMPDYPWvF1us65Tkd45WSWBXNn3X8",
  "key39": "RJFSYF2B8xs9n7wxXNxoQ8Tv2qHjmTazKrTwXuJS38FYstPG7N6LyBnKJMwHEtSPKMJr3ExojwPYNBXn9CJzJTM",
  "key40": "5fg8xKjxS24wy4ZCtB6pT26hfxsXwzoXb57mQjP59DjaLa1jwt5EJJYWFxY4PDCj57c4KXfRazb6JNZKedLE5oVY",
  "key41": "Gks9FjVZr7LSwfDo3SXSvGWdg5kerNBANkJfmo2bm36rZiQRwisREoFHRGjM2WVrk5fL93W3GKSbRfqxMjsmmS7",
  "key42": "21wTm6D9g1qXgf16BXGjo2jx6nHipAyJbdVWULEebJXgayUdpsBUjyygLw9e2MvCtQ2KQiXzKBHbrTpv5MEhwHaT",
  "key43": "A1miXhBzMJ1mD8N9Tz9xXCeFo7QA6ZZbYf5C4JDhutxAx7ZbV6DF4ksCKTzsnFcHH5zi1trbgQ56HaDTYDHiLtx",
  "key44": "5RpcLrWcvbsNEKfCiNQsesNBufnRBsTeshHJLvtZh3jqyGRnBV2eNkxzZPDjqatrVFiGSBXR62T6qKwdziw47mTd",
  "key45": "64hAmty6zqBS4kjjLvALgCSd6qSqGVDqiD6aXbJ5UiJuvLqtU6MAtyUx5Y3EJXy46VDaUcn7C2y2g81fLP1yBCWW",
  "key46": "51TXpMc8mseQTnbnyLbiaJsB7rygvEQVELusLa1tANF7UyDyE4nyoq2Db33nRAXvwcJbdrmEKv3zdFemiHWbg7VM",
  "key47": "4d4YcCo5fYGnHjxVnq93FajStX1vJP73iLbuaJr8p8yGkbv3cFvP4QS2UXYaddn6km9anSSgGpKsRAUZK8rGXpYE",
  "key48": "PFTtXEecEJoPhBxEF5noPZNhb1QpPngMmm6WGLm3eAR2aKLfiRpmqg75NJAZsjnsSfzVV3aDahziXH5BHhrzcg2",
  "key49": "4Cpj3iUkuKW7g1Jr3moaMKR6YEpR93zM4H3KncvuSLbUqTDgAxNsyTjYDguRJx7ZsE8cCfVbBsce4FFpE6SE5CnH"
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
