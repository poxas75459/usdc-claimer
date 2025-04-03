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
    "2ugNnZWKNwkpEEjt991X24BpRNtJVdhihwrsAhYHuuzzbUgDAHLmzYQ2YS3Bw1HG8uYXvQRUCZQXpzkAF1jPC5vQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EAsCf4D3UF8McWHqFa9vK5jJyWmVEQZ5Qri1tAUjYyMjzoCct5Q4ssLnT2jDfC6DqpW7bhXXMAzgibdyfe9VC22",
  "key1": "4KDSMPSU6WRg9HFyhnXfoMrqqL85651yyDmL6F7ZtHvtqVuRmPuxtB9ERVf66Cj5WpWjo1jAGbnSFqpKCD7iJSaW",
  "key2": "3AvmMDTUi9hkXmuvbeLvFto5aELVus9J38GiwEM3BLwnQXd33z7pv3HHfmnaZ7AgZBeuE8VawpjkVHZQUCFoiP38",
  "key3": "5m3vwXoBNzp3t9ibTDehK5MsnUiPbvGMTUJcuoeahryYKBHRhZkZ7wcPHfghRk1o5bwMqX49XsA3Yhntekzr3iYV",
  "key4": "4gGkDKuR586e5mHqYsi7U9Pp5rTxn1VaBTX9VJTwtGWZbhwdRZg4DtH4PoZso9kQZVViXRtEUwWYYnxkMT1csyiA",
  "key5": "3SwTDvEEmjkaxJk6rY19pjUwwXuv9qF8qenB3ak8exHiK3ud26Bnfrf5MfGfbmXYmSe7cNwrfnz5Mtixt48j8EHz",
  "key6": "22SSi3Ro5y88tkPzmAUiBncfVPjrfWn22Rxma4NfH7RA7P3GuZpvshovahKGuMt8V2n4QhgCrLLhVckdhWh3hGEJ",
  "key7": "49W4P37oWxSvRBreApMRAf5egr5HBfBcCZfQm3AtBuRwMk6zKPUitWfzN7253x5cRMug6o8Npe1evfMayRgkHVVu",
  "key8": "4gEn86q9eS3iZXWbuWLT8rbVkqD7ZcpQ4Sj5aLGrPemJM3d8oqZrjHQBUTQz19f2kVeyVbgrMZoaYnyTeG2Uv6KA",
  "key9": "3eeWt71CwxyVTNvMXS52cr7aYDrPPZGgYHradcbJKhfU99msn9kmAYhLUMgSBScJxtc9FkvDRxrvVExuMT79ptCN",
  "key10": "3yzk7WezhT7zGo5ifLxMrsgmJvYY71bAiS4PpLcXzxTGwtXP7uh8T1tMf5GDTpTNgV3ugoUz5SXpn39yp5mHb2Fj",
  "key11": "4EYX2khcTmuPUU18jx1ZFZQYiuzdzu7dSTSyRmGHMgVtizYZKDsrUqnbi5XjaDZReDGdpB5mo5JZDtnegSCBnx7s",
  "key12": "2VKLb5KZ9ufoGreTBKwqDe3VY7tYHx5J8hwvaWuqXp2JBwAuxUw38ov6sP2v5P8U3943hwezpVg56EfHxGJjU9j7",
  "key13": "2HBZETVCKPV8aNkEdqqLQjFKzPJV2zxN2nZ8r2wtXUkuC7s8VLzSBbebioDVC5pLr9MamzRwe13xH5ajCs1sMEJD",
  "key14": "GeJNQwvKdxLjDwtR6viZAFoAbDv8EKMu2Y26NY8jvxxfKhLRZaJrMjMhZbQSdAwJsSrw3FtJAof5x2tqH5uG4Ep",
  "key15": "3ZqmK3SSC511J1tR5KYNne3HSLAEquJx5QHpLXd9hHtWLA51wg3H3weW3sV7fY67AvYmpLu8PqK44cWLwVs3FZ9Z",
  "key16": "2Urd6hSjtECNKTPNCpn52PYjx8JJMT2GBrRecu4b1p3MCUo9FkZjcwkxNcnp5Minuozmo1fSxwUTaHEntRgWgEkR",
  "key17": "4r9DymcQSnH2vHBmbxJzkHwCAUHeS34wRDvCJMKezsDqocRtx2gcQbp17tkr1fNt9rEfx7GFKnTa4Jb9rJuAmugE",
  "key18": "3acnCeNc5apAEZRcFz1Ba7Z4vco129kqhW7wKjehv5WhhQbjdD7yBs5puZa9iWrGqJQN7SFP7eLzB774W34cgJk",
  "key19": "jP9X6CUYAGsagL6ejhkaPtWuiaMDnAGMuaNtmu5R8Dt1L9LcntkfhbQm4WFCDp4ywJ9HqtzRrxsLhBH6W33ME68",
  "key20": "24tFaoXvUmXw3mAK6K9JDmfwPW12zB3faiArC7VJQnDYG4FWK1FhgSF8WxbVgDLgfEi2gxxmTynVqL8LSWgbEfLP",
  "key21": "2tMCGVvSouXWANVS6R7panUgEisgts3jk9EYQX6yiTBc3cuTPKbRG3SQNGhcXtMxwAZk3RaRPZtwatihUiDB5L8v",
  "key22": "2F9Ni6w3yZBYYBQ2Ey6TX4RNgaMJa9fGigXCPw7s5oppAME3PC2EZboeb6eRsZxV9MNMWQXmY8jorTFrtMCPZ4zK",
  "key23": "2XbipG2B2Yo5jweS56GGDCNyo52v4tEWhB2cN4rCuaCsrCSq6Hjau9jamP9hwHtDBLTsy6ojz2cWGRaZRitFjsjb",
  "key24": "4S2Eqgsx5uvvKruoqe6N54jYUaEW8sPF2u9tMxQ6rsPq1aku3EiyuUyHjSaZc9Bd7aJ512PAwyH2NansTMjMrj8r",
  "key25": "47YWnrgWks7nwgNfsWozbNZLsXAMTXBz6veZJ3HBHpmKU44jAoLiLjukiZA7JvuVorwecpGPj3KsSfUtqMPCZwJP",
  "key26": "2978E9ApVQpSVBHjR5r7xwbGn5VRNbBeTz8ZQBSnfaCGewTonejpXh7YDPQucowYwXSGdxgCA5NZyeCbCW5hBSwL",
  "key27": "4pT51vnDnjLjWxZGEwyj9GjLbAKmPyWmdPFP4rHpPatAa2K8LwuvgtMW3wWReUKfGqgo1jjKmRHtLpGrswHC7aNV",
  "key28": "2jNNMRfSHhWVn9QAQSfu7gYvhYNiCPXNmBeCbE8FJ5wPkk8HL8sBpGcJUPLKZeizAGJJakhsx96eT969zTWL5AiE",
  "key29": "2cFQBcanmyNVJaT1q66zFze6mdpgGLrktTHprz79zYPUsW3UhP57bYZ361xshXBVXgopDo76Pizu2tkJ37NqAgzR",
  "key30": "5KZcydsWBtqKgwoK1vE3Bx3xNWwSt2aWw7NqhKGoecZfF7KHUMXm73juVApQ8PNNDcEpEvCWouvB5mH7ZiXe26Hm",
  "key31": "248QkkNENAXrseX6mk5Hm8ExDZ4hj77dfc4fiqoTZ3nA6q58zCxWHsDbeHgRXw6oxXaTmKnrjWsoexszdWwfY8va",
  "key32": "3z7fevn3SMsSHdgpiD7rKuccF6tndEzQUgosnVzWvkWPwQ8pzVL3eXFLh6hn5pRQo7NTJCLKHnyLYi1j81MQWxKt",
  "key33": "2HmSBqn9ougQWxjnFpanDtF7uhn8Yx4U1U7zS8tUCJnW8SPNYoT26DmNQyenJvCKoEZp7dP7EJwXMkum1WFGKsNM",
  "key34": "522hikMZPkr1EraLiEpn9Zyg3CCUrjEcd5qki4R2TrxBH717wgsB4rwWNwffAJ9bzEFUp1UHRxe6Ttkxsc1Kq4iv",
  "key35": "vLZNRTkL3hfgT7a8tkBLjNyRY8U1AnnAfW4QSbWjgbyE7voyjvSK5T92UgZNNwzVgsHsFWjp2yyeJihzbPs44zg",
  "key36": "64EvLn6FV5EUS8brUzPuWJqsQXJsX4M1CsiDdqZgXKhuPMxmxTBfFQpZ8wjKxtnpXNp82ojSkx2RUpUDghj2Jtu9",
  "key37": "5KRsbA3NGVFKDiRi1E5D8C5dpRkTMSY2bTjMLjhn65oniUGDstABKCufXxaQ14ZzBorMsMRBqzWSRaM8yBnbjZ8a",
  "key38": "4qEQAcmWVsAmXUX8CZCfEXJDsdNPbJzDVYC6bwPzMVM3KnXwPgoNFusK7p5j8TcNcnJ9jrUt5ALf6mvWwGNLMHug",
  "key39": "65LaoH1pBbvoTh5dCYbr1VXRfwZ79xordaykq6TRrnc52oyVFawCmrQ8LhLjudYeES9hv9Pb4qV9wEwYFYpPvvnQ",
  "key40": "3NmPBkGGEmZo9erzs1TLFyBcwbZTtWqp7nTGRsV5CSyXnvxMbFgAWYYRLQ4ARy7rjpeT9uUWuzjJW2bTkzqdYa1x",
  "key41": "5bTBYKDxWAwNJJB2LCGcD2vqcT88Y3kVSKQijYjHPCbSujeuCSNNirVwJXcRsGsfuaELMNk99oJ4opP8Y62t4mJA",
  "key42": "58bpL16pPbbLmSN9s4CWg55c4kbnp4BvTL87sJjHTbCbefhHsnhe6YWjsSNALuQfjgoMPYMVnCDBWXmLzJG1nfCV",
  "key43": "28XqXCYZQnN1nSaqANMRLaGUQbwfxs6WnCeNKJH4NJk2TJMkXouxQc63hzQPA1SjujHCCYc273SWTmR81WfRFsmy",
  "key44": "5inV8m1m6KLftWi2jiV8hq9n4jmR44g1TP7iRNcRCmSCcgL5jxmex47sDFnxRt35ATL2xxNbxZgnxZNaVrhSWcoG",
  "key45": "2eD9B2cZeepJmZ3HLiPzVUx9XtPfTRTSMPeHGt6UcGCRv2ieQtw4jiBhM2ANeFwy6X5eJjSLNjynLfZXaHhYepik",
  "key46": "5dcKTTAAoyk3LB3dMmLa6Q13qGSDqCSUX6Dur5cFqQ3CQmYSPGrwQyHW9QtFiyEPwEzPX9GpDjX5SABASUSaN6qE"
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
