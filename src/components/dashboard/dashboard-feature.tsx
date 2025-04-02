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
    "57gLtus8RJxEyUr1nsy8bSsZupcfZPFKQFQU5np7kiYMeJG1r5KMvGJYNHk36vauEAFXDhk3AN8HJ3dPcVmddu2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CWu3rq5oXQyJEJD9C1FAeq3p36Gf1jWbWEJS5CzkZpmoqHhmau58QLMnfkVAVoMHp22a3E2ZD5oBoEWbQRZKU9i",
  "key1": "7w7YacdTcoJFRcNW8oXfWvxv43ffJfat2bvrHnAjGW2GWhenZ46qoAKUXkgKwaUkwQmNtJnfrNDbeRYMKG24n5Q",
  "key2": "2iHVSYuLgXFWYK9VkTmazxNcVSvm9hSDQsygUA358TdsSALtpbCDdkMfrsqqRyiPnbKqNASdH3TmAfjTZccKSxCJ",
  "key3": "46JrTfStyWTdg9CQzxtx8qk1Focm94k1SqQaBvvYXcHJRRwWDfZB4KiCF9meUsy17fvFYiHSwUo1pR9k85N9UosP",
  "key4": "2ovdoNPkcZeMNj44bRFZyvbAa9qhnv9ST9c8qPSLvw4xZCAYyMiX7mi4Gqno73rxmaKnEG6WyTpHfBi9fqJ49FmY",
  "key5": "5SK7a7Wz9jwG9jrEUAZ61AuX3jERgfeiYjRuBhCTp2SxCf73zkhFfykwpvNFV2Vj7NmCZT46FZBFbaakB6UjeKjh",
  "key6": "274oKzK8NmND6ZVR1FXPPM4sJeLXYTBNAYVUY6osoabsEKo1B9K3mqyiKBULt5HMC92AqRoRUAQZxEdxtm7ik87N",
  "key7": "41cdYxeAf3MnVLKV652NMwxH8HjKcGzYmFoGPiHAeGGXnhbxkhmPYGd44PP45umAZcnHfb1HePnWZB47wgdP8NEu",
  "key8": "NBSAw7yhqrvxpUbUBFfDyHicdLfotqcGGxeoTWA6JPZ8ADNFxAeaQzJPsyvErnXgagTXwDoA4QnE2uKMhWfnX2k",
  "key9": "3Wb6RycFvt3JGjQo2xmvFfFffGXyhm4yaupLv3hQuPAJhcv8zLpTZc2unPd4JTfcJNAxjxoLqDCNUk53xgrbXwpW",
  "key10": "bAx9jrj2jeEYBX9qzL2zmGmjKoMdvjmmbBwS8qf3Q4ZWA8u3poXEV4J4ASvXhPn5G8ybW7p8zajqbLZDuoMAKXp",
  "key11": "3SF13hmbgiMoq8tFPD4kwFuRGmxpArKscjZwwERHESpKomnsQmf6eTPEeHT4XWnUaRSnNNvttXihL8oy9kHorSbV",
  "key12": "BJMWgymT9zQ2yPRj5nHbmwGrEWFoM22UtUQuaGqiwREDHWBRZ9r6qJge1TotLts4z4zX2F66X55jzaK4582Zzgh",
  "key13": "5TUgPbQ6ZMema6cMjA9CJqWujRYBAHyzGsVUvgRqg6E6JL8imhTRRh1nrjqA8isiPHA2DLBhU4RaMgi9pqifX8X3",
  "key14": "inpCsbSeiV3iaYjnSapdgjiDFQHgJCuUZq3iLuUrPRGveb7Dgf1bGNBwKFJmb8fmPrSVVRs4LD15pagMGe5tj1w",
  "key15": "2L3RmL6XGzojZAEP4Y7jShiAnbMZKmMdHQrLNBJyzeQFChWb37jrf4uV7tiBQjii472kRe5XaYa11fehohXarHti",
  "key16": "3v3AyDsSLYY41gXcaYkSNTKYCnDdartF4iDNR4BgjUnPDHARwZP1movPhSu7XG3fAKmEK2YqNimNzmudeC5WAHdS",
  "key17": "3raJzCy8AsCmxfjT1yJ1hdZt8sjAMsms5vGdV2wb7bDAwCHvhbZjT4br4Qcc6P33X8fP3TZCfHwkngsAMcFKEFg1",
  "key18": "5NSABYNp1wz35p7NwoBszQu4ZCbv398CAyzcXSMMewJbAFXZksAhnQDZ3eAR89E558aZ9owqF1cCQ7iSgtKtRyUz",
  "key19": "3X3nGGnM9gZN2fVTxrvmmZBmZWtBz7jad33uSfm4MF5zzSzJCjt2g5NyrpKQ8QDeXvgrBajFFabzn2mTS1FBuApu",
  "key20": "4PVoFe5orCD5VYuS9YMn3JzCAbbYgiHGnFqatKx6mW7Tm1GGjL3TYpsPC9WJ9etAg23KGDGLucZaBtzhpMuc4Z2y",
  "key21": "hD1C2WyWkJQsftdrH2YSh6tYnDJAjHirhZrwt9c3Z7fatTJ79cf69Lhk2aRjGG6kYSu2wMm5agfXywBiJxEDr2r",
  "key22": "237oDHvE8kRuSL47qdbarnaSPeqsWW7cqZjd48ETAL2iXbvC9ZB8BRUcHULAhKhaurepiZJYsWj4hrVtxSvq8DgA",
  "key23": "65H1minfv1NpXkGZTXDmnzjVjGnMFL86iEbGXuSFHV7vuQxtB9mFExWiE2NBEJNSDvMSX5Z3VWAT4khAWcUUXnCM",
  "key24": "2hgRQHKUk4MHekthhb9Ni6GPHeBYcfr4L2VScQxnrEax84ZGqvu6s86SJvMH9KXSQfkPYQ4xeZkjdsyqTbnwtD3D",
  "key25": "4qvn5BCbVQf4S5EgAqRn98ypahpTh7SGcQoud7sW1oZBeYBU9waPR5QzPwpL96KK8EtvAiSmMabEYQ6AwMoHrboV",
  "key26": "5UGgwsFDxJUJR6W4bYwx4m1Pr4fFVi814KcaCQVgXR5yzSZx4g6GwTdzuZGdM8hhbTdQDHh121KQHtz7xHHSY7vR",
  "key27": "4VUDi6j5dEwKZyuGDrEHfDj2dV9mYwotS2URPCAaGsAcbtFRV4Gapo2DEACwLqHQGV5hf8cF9A9qJ1Y4MJkdUDjS",
  "key28": "41y7LPBppGeTF6hU2HUBCJEf3iXTrSoSmUidHJTiJRJuc3tJedYvqAjAqt4CZgrCD6ogdGQbJQo85vHHH5aR46FQ",
  "key29": "5vFcgdFGmzsG9LV3UEQTswaejXqM6Fh55G3fJStTnSCtsezhPjPzCXGn4CBZTVCPaAvFupFT72s5Hdxt57mxBLLg",
  "key30": "5XybwWnYUuxGZ1p8zb5pTRU5nq65KjCqNyrEnV1Dzc3Spj3F5ydraBFBZJofizWpS4tSZ9oBd5SUkRCx4nhQszsn",
  "key31": "5ccC5ADQXkvZs9etvrL6ZSiiToDSEqBtWaopmhmGy6ye7okgMYX5nBkRkc5mJjdSApKstX7NkiaehXnEhGRAWsrq",
  "key32": "5P2EZkHF3v5ddENNgaFGr24s3LMN2amRGhCV3Fp7c4LiCwFwSHSrFvgu4Qew6d9AHN7HiKvZm7khUkPP53fKRL66",
  "key33": "5FVkFYLGBUKTyD7fqwtL95hjFCCVPC69mitbHjHXPQYxMPJmav4CuP518Gh3odyzZBEixHbUEu7XgTgJg8PuW9Am",
  "key34": "8dPRm8uiNTVaUvVty3eDxuwhcL8HvDzSsKFuydu5QoP4aGR3MqDuqGG9ufgYUMFcmhgjfZzs4SxKcHx7KzBaPsm",
  "key35": "MNYtxyJiJLooMbSbh3YnKVBpgALH24jtDhRiWcjYe9S5jg4MSLDHDN94A5kKhLkaTgDkoiQQrYaQJkjNNCtgbsW",
  "key36": "vA5GuyVBhGMw5fR8iacPcU9oEuGsWyZ6mYAVgNqoHc1iFDkKcCLb3YuCEwWc5PnWYHr6UHJrQwhzeG9rbMMRNkv",
  "key37": "5xcRhNoPvqnKY4YQGtsujJkPqagFeHpm6BKcmmbzi88z9Q449vNofTHN2AGHPQvz7A7hCgCm3QogVor3ADnyTu3o",
  "key38": "3WKndDQsTpB2bn96ZYEScbyiLPtfeMs5oQmNWA4czFKvgpAdBRcJcRuLFWvDcDFoubrB5ZcFZmD1SQNCALAtnFC4",
  "key39": "JtooJXLXPZnwUoistaprqebKQtUM8b1TdYeUYbvQ3y42bpHD6F4xQYnPwXXpxaWK91nY7zmkoSVDsN7hQ85MQjk",
  "key40": "5mJSXL86VSUB34Hvc5TMkiPGLSnMKKuEeDSJyy6LQ2FhhGwHzkb8cCMGed2JkL5gifr8VPgYwaoY46UfiWLhyeNA",
  "key41": "4z3Z9UCBBf29syHoAdye6mfE1SvyCG7eq4LQvws5C8WmHoHECim6fkfiezcFLfTYW9xt9m6peC1UTxk2jgFuPd1z",
  "key42": "57crgX8mGX1A58SG4EzsK9tWKaSrs11WnzSUoa8Lq2H6k4Qk9dpemMc2fZC6aHGERnK5jHRtCx1by5MZaMd9BBEW",
  "key43": "NhLngrE8Lea97PMFU2F82qBN27GCULKkduEoPnyib6xgUkaw7XR6cBzS3wcapXX3rysDxjnDZRHH8CnTvXTFKH7",
  "key44": "2MEfYzJd26SmNMFDzx7iho51XZJt9XszbWssUFAymokUqxUPWG7jBgicVn8cfaPwVxthUYhp82r7Mw2CcLms2PuU"
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
