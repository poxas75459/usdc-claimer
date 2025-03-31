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
    "5ct5tUDHwhmqvxZNb6P7dbbBmJLWHSNQTSvJ3oCWnF9UmmPHce7N3ewwpMgphaQAXDxZamjaxyXukMwfvWVm5Lv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j2XvsmntZGkBTxPRUQ3zGpHwu334r7XouR4FxodsKBPXgYCbtXRktw2vMf1XQCBg1JTcZh4b7yDWkBPe9ZwKQZE",
  "key1": "4RnCEt5bRvcQq51hegysGYNG4kytguL6urSTz5FFky2aPkTSZyL34aj6o6A9Ggw8kUDHQWGYUXxsnhksf1gBFmC2",
  "key2": "nxrWbYRiw1km51wePDEFaSKkCe5QjH8jo8GZaQKy83B2ZEY62oU2otbG89acrR6TmX7Ah12jyUQC43QnAQmX3w3",
  "key3": "2oyeCvVLDF1QffzqXp19Y1rr3PWRtxCstbmHmekuu2rPtrVK3bDT3Y7pNaaYb5vLoaARqZwUuucuyFzNmdqNtpYD",
  "key4": "D11g5XFEUkPEM7cyH8RrCzdhH4JHdCUbFaWi1rNk3Nsk6yDfRS7H8p5kMtR6B4KP3ZkJVaib2mcxsc7ehYVYNUU",
  "key5": "5vyiBjEUUBigXNMSs2YqJoub4j39PbW9KWd9popTWzRgo3UdsgJYLCkYhajFzXr5eVEvUQsMwoP7DdkZ8s4jT8aU",
  "key6": "pwVE8AmGi9AbXNZknt7TU7D6opPy1SyzQsSpx7CwE4NVV7XVHhxu2k8tVLJRGiekdZiPjmQ8j1yDzWFUMiNtQFq",
  "key7": "56UoG7mF3hF7Q2akAZxixusYfDWijmAbntyFgDUdukqJkUhUyX8bT87paBv5jVuCmsFC7sAJcK2e7n1qqzKHPLNg",
  "key8": "2iacAjKuVsFQmqMeUuizPehMuceYTLbgqxhgqCAucV14AmcsHfjXoqNyVuCjNxGsah4ASEEMVvzeW73QAhqpq4Un",
  "key9": "5SRmHyG6DAsW8m4ZbqFjnssWzc1niyDZmE1w9a5R3tnc374SGxyLaokkJG6GhW19aHPDkxvUrWohTnAS5z6nNrNm",
  "key10": "EVZfqTdGDU85R29UunZe3zrxAFWzaLrTk4uAvDrK64W21gHQZvb9RitRy3dPwva731zMVd248MkzxJ8PxMK6qHv",
  "key11": "c26Gaou2p3axUyDSVWyANby4424z1MiTazQ2BRvZJWCXheM9bhxznHUhi4Jgm9FRg6CP1TFbxqpbSSNd7kjMDuP",
  "key12": "2zHVD8QpAkyoKeNDx5ufbMC7tfpM1KopjMUrkCDo8SfACEgXXTf22r2mVsetLgLRwj3gf4MSXfDpSqz2KmCfD85U",
  "key13": "3NhT8QTE34kLgiVJkTSZCVTaDb5CHYg4xiZjkaP9hjfMzYMAjxMKfmBoYY3WdFG4jxwd9vxySr5Dx22qdJQJ5tu9",
  "key14": "2Yk2b5yRxLC1F18MJfkprLcwjtfUhtaqKN1SE9RZDdMDNcmXU5FSUa2zy3APa3NagQfMbc6g4a1whX8fmG9S4vxQ",
  "key15": "2SughNj1ZS6eSDsFwvqRgizbSyaYanCmDnE9mAqZ6LRskxgSi5PqWFwLUWWxyJkwGUij3mPs35E8mPe8K8eTBwUG",
  "key16": "3T6WQ9AUeuosaGzAXTpAvMD5c1y2o9AiKSPT9kx1CH8SZUbJJBUY593T8XTXsoXz2CsfJLCuZgKKCz1KCgA5iyxF",
  "key17": "2gfG9gAC4iBwY9AXJ1LtUiEsucgVV9JbMo9p4UJoaXZUN8dytMX2sTdG6ahYTfonGcw1vdni6Qc5RhZ42kefFYUf",
  "key18": "5JvSH1mx2QjnqiWTACXku1PvNFUZQQ11H15mytWrWYHPB7Fpp9u1niKWMacWbnGfKUqYmLPGsZFBybAQbEPhhUAE",
  "key19": "2BMCwH7Z1kHNcUryBACUskbtACUh2n6rbb5p4mQdQ48sZRNAHKqRnLgoazd1Ka19QxJVYP5nLoxnnb75VyWThK7W",
  "key20": "5jM1YtHmojjA5oXdGMernwoGDNXtWwFh6NfiwEiEMofn17qWkmwiQEt7HWKnKyv4AW4i3Pf3fAv4t9Nk14Vwt5um",
  "key21": "3hkpAW9WCTniHyT2HNfsdSiBkns6PaBtSDFr8MFLdMbvjL5Dj1E3qBoUDahTFQCUgyf3d6gj4PcpUNGydeyZrjh2",
  "key22": "37TupdH5w3jQB2rYkZnqwHZWzdCiRDsibCeH35NVkVmxL4A49kY2KBayFhTrW2gQ6gUD1wE2j8sxAaYwyf8BqcKz",
  "key23": "4ve9DR2vF4CjkkQ6ujqJzn9mGG8d3YfusMf9AMK7HiD7jdrrUuvWE5ti1qiuZ6aNJ3yahAhUZ52wE3GbfDYFghfE",
  "key24": "4vtf5VrvZhRVozNF8UceFojPaxGGEL51XGwH4rDBFwYbv56UEyLEV6ZQ2PCiuCUS6dmLMWF7nxZogQeNYof6AYwP",
  "key25": "4kf1ajBuX3eS6KWZTio613CxYH84gAbqo7Z9D6DqNNXrtMr8fA49kCjAkg3LDGzaaMUVVivdF6XWcK7a5yQmPbpZ",
  "key26": "397qHPX6t77tfrszw7cXKfkKZ6uPGGJMhR8VnFveHhf4Bf2CDgEs5gnmUH5w8By6zRhwht8p3qtPT7sTZkuRqWw7",
  "key27": "5c4XLYmtUA2ie2vdDvEumiGAon5jj8JU6HxwrDzaTNLgLMUqzD2wxT5sZYAEAyvnoJEKdjXVmdaS114zTegBiET2",
  "key28": "4GuKawk3RrwZ78ZTYfi1FRtaFjZqWFvGZD9uJvuo4wYs3SALZoEWuer9YGxeKHWNBRMsgDDJhb52764LejB2AxPd",
  "key29": "2xUY8Hn5F2Kv1SrTWDnXBu6nRQzhoEyNjsEhNsSVmznmqXJbNp99xPyoaEYzNi9sdA2Prz3YJd1dQaiCU1GWQY7w",
  "key30": "47tDjtzzKAc3inCnGbtCPiGmMCv3jjyoF1bRaHQvk6ywPbVBkWNwjTD6xPDJBfUcDwNU4GNF6DqUb4uMRsGCCaXb",
  "key31": "41MXvifn4RqNPtmE6ooW39gcCsuirDUJPSUToy8sTKpF5xSqdTZ4w3nTZyH98Q3qkQMKxF66BV7CUkZ5FSQWjtHv",
  "key32": "53WE7En957FKDRrg1hAq2ibeeFkzrvcEUiR6sSTZco1T8kADJwgxN4ySjQP2dE3FxnkozAFVUnPt8K581y2LNbMb",
  "key33": "3ni8h8qjTAnibj7mXMmWpBg1778wykQhmoZTJVGqVR41dv7GFzfKDHGaNsbh18xEzFRR1o5YBVXxfiEvkB71UAhA",
  "key34": "5MrZSwGFJy5AfFqtyYNyYVpSQx1PfS4YHTQ5wEqsvUsvGVgnHQbSgByKWNfgEk75RSNAK9V18YWGwAwkAf4hQP4Q",
  "key35": "3VC7GWHKWq2TSGiGeNcKBSKkFJbm9QguGqh3ce7PPFpjXWdQkndspFjQDE2gu9FtHZTijkKsvQUWUEURMH2Mng4r",
  "key36": "4MspqGn7cjNwwDbmv7LGQ6LeQh7M98BKdLVwJBGm6LEoEC5T7Fd6hJzdE8hDnomLG6X5AeA53BJQtYhnRPM15XeZ",
  "key37": "3RUjf1218UvkknHffnpG9gb1h8sTRK6CCUrA2GydT7oKS1oEdtpPQ2VAdrv5bqcJYDTAWKmXCviFo1CMxUaMFqLS",
  "key38": "4nCNQaXz1xR1xYWHU1Hdw5Hj5XGzHpN4qa9gMooVKwfUZrtnKo29JE6uH221QsoRJ42ppyqZFNBihEAwiBxuzJjZ",
  "key39": "3DSfdK2LMrFwaCUCJUz37W8peLEQNSfr8aHAGZfh7bwdgaZC7RNRymRE5DhQXRes1qVks8kw78W4bxWgLWnUKqGN",
  "key40": "2k7feaofsMTuCRHyc727dBXMhRCnY4QFyRUmmVsQrgwubPdqsJMwLGxSGUZtq5ts1Bnc7kjRb7wXBqgTp9Pbw52z"
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
