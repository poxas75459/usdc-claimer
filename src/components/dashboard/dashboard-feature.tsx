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
    "4yc2sibyJrocpvMtidBjk2ZTRed1bcqhtsJsbzc5kJeNWTerBbqCov98voDiwejn7DuGXfu8HDNoykNjbXnVLbaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iHWRnssL3URGe27nJMwk69DNVtg8rmm7Bzk4C64QmqVN2bAcJPZeHt9s7R6T76DEqWGBuC4sFoYd6MqfjuyNdoy",
  "key1": "51z4eMy9VTqMeJKH53tqaXVCB9wEkQx7XEPdZRjq4kXbWzyDHqKnvYbigRBqkQ2Bi5vNfW66zqp8L3gkYv9siyKt",
  "key2": "JnWQgwYM5nG8jopNrCmDLdpT7KGr1AgFPSY4P715v6XgZzAJ3ZMn62pMjHPqzHfQTchnmm2nwDN9yVgzgeb51ht",
  "key3": "3WfJb7HHVAFtdBcaizbPSCG9JHLAWk2ZSwqyLcuMAJgMY2ZquDMrk692HNyAXjAftzAPit7UDZyBrM9q7X3BR83X",
  "key4": "3MuSbs79XkjtYWWBqsZMqhAeeCHYCUMHWVGpRSMuyj6K4VfWg1mojsDd8w42qQWvhFpaZbC4wpNfSEZ7fMG5NE34",
  "key5": "5JsNqw3p2fNBGrce3oemKWomRX4H1B7MPvzCaGE6Z6HwjG8n9NGo2nNVGg79jvfb4vM3qjsMWga1Rku5KkafM4B9",
  "key6": "FMmzoCTv3jc5XkEmwMirEPPntqTAnrEeRkEGCz7TiFCjDzaskrpb11YvrAMtWBYHt82vvEd67JNrc6KuQSFhgMD",
  "key7": "ZLfMWHriU1Y6BzLrinNNYErJDREsbKpffCdKdBJmtMCjQa47fbrQ8TDMn5b5ggc4ZZBr4DLALx11XoXAbAzUbfr",
  "key8": "2EH6oydkY8YBwX59F6K1gsJ8eXnLsGPjb95GD7DLDxWrqRLesggHJWf99Mh1LPzETq1TkryhZozDhfHMYXuveqrV",
  "key9": "5e6abmTP7vbvVboRTccYa7xzHtkBZrHp8Ej14uePSjGdhtrxCCUysHAyQkG9hbcPiQ4pL8KYEsJhEFPstFWjqLwz",
  "key10": "36J7YAQy7o5j2ZsaScxx5xLLH1o5pxaNcEpJiZe6vPAHuHcqfbTC1gbZvguCxsT4QJXnADXYL4n5TMy1EMWK3Y3g",
  "key11": "32HYEAV1k9g4QLkSJGaickSK8vV7fV4fhpgzbLZfHmtGKCwxn2DLrXos9vdEE3CUDVXbKrSmByLgHtX1tH2XnSU8",
  "key12": "2czCvq1cc1GfTkDLsaLqwoWv4watW4Rfvpp4KMSGiUGruY2hh4st5NgfNQywjEGCvwarGYD4jmoTsR2bberQ7Jyb",
  "key13": "2gHLtx8R8HXT1iPgFA21xAMKvcsVchLqfozGqeDJmjnPpVpHBuvax4eSuc1pAuWyVLEKRZsNYyZgYyTrYPS77P5n",
  "key14": "4hqjFSsfwzE3pAxyJdMn23RYaERBELYcAoZbDtFKbLtARnWwcSyu5iY7Msjtn4bxnMRzLxcv432qR7kMKAqhjWT8",
  "key15": "2VwK617HmmbqwD8Z2TJt53xucnYR3G8M3h16zuMbzYtCbyp44GUzENxdTz2pmDjBB25JNzK7gtXF1nLWUXQWNUQL",
  "key16": "5hxh8DHHfdxDSGeggtsQvwMDpxCS8NmbstHRzpTa1GRnLNRk8aByzYLoPwCW7cqcFEKbQmt4tBco1AgoCaoDziuF",
  "key17": "2qCt1uuCoCyy2ahbbQ3Vq1MMHWQb8PCu2HuE1FyumQgxoSj1iom1x3QxUbUD5MG5YCvg7rqyr9p8nYVLZS5yHYSw",
  "key18": "2M5SEeAvN1Rn3Qcj43LDgkGNRnbkHcZTrPz8SNJo8npo5J1vkgWBKQD991e5VYQQuSZ3q7uWXpvnWLAgL6JEa7Ei",
  "key19": "2xUdSNKwfqBcv3Ly4LDJwXsPuoYdGCmA4duRijdzDqkCGv4S5qQwLRsHWrnMQCEMLaQk8BEKJJEECofFi3T8YGT1",
  "key20": "5oArG83XEf9r8bxSzX2745W6aSSVJixJ4fc1sWUz63neGxKBNz6w6k1tqRCqfQokDtkJ1rpjz6eUiXNcU3ujx9Si",
  "key21": "3APVBjbbd5gtbBE1jwUnbVRU8vgqgPbeYGGE3VpmSL2EZrLUiaMw7qV1DSGUGB18oqLVzuVfpWj5bgA95e8hMGUV",
  "key22": "3KxNYkDJAbnoMcaq7pQmRnCNZGsL4VV8H5rzBHUSDgvuUBQYGkCfGYs8WD5xQu9jMZdrkkzGKv8wp3D7H5UkE3p5",
  "key23": "UrUZZEiwJKuvvWEgMhAwqt8TvDAXVdXeAKV7V9MVQ5QwKP5bKA4NCn3b77XZQ6RAfC5SQoVFxaDmtxQXE8c8pZN",
  "key24": "2PhUW3JdNScL7uEJX2RLWb4TReENUtQt4RdGVxpJT7mstMgBDA4hL3KNJ8mA6e8vASbj1xK3hX6xn5h696hU6AiJ",
  "key25": "4ddnn7KUe1b5yeS1xwMjWatLBtPKkL3p5axj7A4iA2Fyg7xbFAKP2FyF9xPxkHfU9pdiBQbGAgXrgkw64EyFstjb",
  "key26": "5mN8XSN7sw2Vj8E9BuW41sEq85A7yumgBZ1HWmK1LiWc2qEY9u6KUuoejL2wCyjmKu5rVYdiZAXWjYXpMiQccHmm",
  "key27": "29doS9sguFkdaPxRCaCpBXMq8MVUJSasvzsgAmPLGRsFQZrPEjPnjb9A3vQ2d1T4yT2Qy96fM4wpmjPwr9jVvHkR",
  "key28": "4N1cftS1rhvD8XBDpddBo98TuT7tXrNiU2CTjpEMsSo1DchK43iL9v9roednPHQfWZ32UceTmuyhgJjsbMU8SEQz",
  "key29": "2yzpzr3SoCyZ9Mmw7hFg76ZHQh7PLYM3dhC564TEgYFqWBeY8xkiBXT5eMMzeZpKnKABy11fsvydcCdZJL7FGvas",
  "key30": "22xvEg8shRa4fqCXmj3siaRHFNjrgkEwfaFHPdF7rcJTw9sfCMyHzBUDzDuQh1sgrjEXLstEKahaETKginaqptgm",
  "key31": "54ByGgMErS3VRkLbewoyU1oAN3nGV91eknJ3TJo8n13Qzmxfpm7tYFv31m9diDCcmArFBcM5ZVwEw7TqWiNcCea3",
  "key32": "4DRKztUg8AKKXcrhCNtEwSASR9EnGMLzNdw1svGG6ASdZ1ezqHeTMAbCDKFAKNwuDq3GycGeKyJ5GQomHfNjX43R",
  "key33": "61Wr9Zd5w5TegsLeumpifQzXRUZk1vkhfsJY7ApueCPxt32o1YwQLifwzQrnaVfHLsroj2MbYmqg8w1bsvsKiAg8",
  "key34": "3qpidfvT91cHKVQZ4DtTSQrSsnrwpnjMEbKyqvC7knW7fAef1UAa1CAvMRjH69cKwaBNdLHDyGfLHpGEkP4rpAie",
  "key35": "4fJV8qEBzfobNvLGAbzXniQReDdP5F9JjSrPsGgnU2YvUui8XNNKAPiVaJppJQm8bP2bhFhnZd3wZBxH7HZUZ6iK",
  "key36": "23tgQitWH14aVDuFH4LgQcPnKYbemN6X9gVuj2HQDrP1rC9BxHhuidYV1ARXanpNoLnWneagS1wor1wAuir1RRVN",
  "key37": "3Qcrg1aWbBmJU1JznWPEavkjy62rmqS2pPaLAbM34ZwwujtfcpASUBzZpDf1P4jXTRRRUcD567GyJngXwyWpp74z",
  "key38": "23gEdwwXMAH1ZiHDefVn544FfyepkTsAmYo8tzBaRUiYaCFhvwkXycFyMVgzyqoCGVkZGQ8e3UMpDFuz5kzrxves",
  "key39": "2aTQXUNoaWDPvqucxTrNYjseLVLvcJ4bJtFe6KryABDCR8zyzhzfxaNKjUF69UuiWtMQtkfm3EmQ42ae634UCrfN",
  "key40": "5pznRkn9Uw1xsPc48mLPneRCCYHVdnbq9drkLzGjPn187BKdGQ4xwWJZMG7dpKGf3aSrAPnnJ4hELMVdyj8dum4V",
  "key41": "5QGKy5LMryMjMDvksLvV6oZY6yCCQmuxH95ugALsdBoSNqT4knCkcp7hcbhVHvgjR7yGs6rPAhNtx5xrZxzgN3P5",
  "key42": "616zGpR5gtcd3WJjsu7mkVA2o8JuREfJZjvtnEMiroLzAMCtffk3d3QZtpP4Dpne93ATHrD3KBrkrBHF3eYsHWAP",
  "key43": "3Z564GvpzBuK35rqky3HuiYEXpGb8XiZdC2K2AFNSe4TqxKCCwnrPjBYTFBQtqhHY3mEMvAe1QKwDGPZDwEQd8WK"
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
