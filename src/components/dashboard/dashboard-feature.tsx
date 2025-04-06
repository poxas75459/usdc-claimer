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
    "2pxgFAtxdoBtFzmbKF6TvmN1TAn7jTqFWbtSfLzqn6SZjaj22JosGoKFQmJ67SBhQPZyuLHuGc14KH7h1NrPJSmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LXDfpwjhGYmSSTPNcDmvZJ1ZtC6296bWnn1y2DLbeJAQeDrkveS9XNyWRQLfDzVsQZrnGE9tTaiaqBYGWtUGyqo",
  "key1": "3xVVAv4AGVdcbPvjizcxGGUHq1MJUMvFxUv6z3NZ25BdL7J3xY9gouRt6mRKfAeUNMBwBKoZg6PRTzzVFjMf1EJW",
  "key2": "4pGHzcjvJV2b9C1noWKJRvHvvWCiXnao9hK3cFrwPgjUExf6HM6AmfmbfGyHixjqWsRHv9En6MEQrMzTAiKLEzyE",
  "key3": "5gMC9PYR97oX3crX5Fm2ZdUkj4RtpWvTGUoYfxyrGaMHjQ8pY8iwDkzWJs3f2rCGmLgr8B3FTVFsP8FbA5vpeNWy",
  "key4": "3SUhBhoREHCHB6dnK1QxbsVDnCQd2hhFehfPkLN5rYQH8GJDKQnXRykakcxKGjZgVyoXuCqai94gy2QPAecQGR4N",
  "key5": "4BE2dNdctMYmtbmx8SxHo85eZzgQWXPjeq9qfUNqLUJSBwLwSSD7kVQ65EBYVTff3nqc8JVEfEK8GjdriovfanWz",
  "key6": "2sjvErY7eZofRaqhb7khDs5G28AqDqdEjW4xfRCAp74gpJBUBR5dbLFLXm5EyExo17jWkhPDJuedZtVxTZAfkrLD",
  "key7": "4EkpTxAGV3VxVffqqZ9fCuqcxDqjAT69u8t7mpTfbT8FBGyhkah5t7cQdoKyeCMTWYzhj716hAkUxUVZUwuxqCL9",
  "key8": "5mq2rEGohWHQNkoj8HkuF9eKWVjpYYPpioQyeHZpXvkDHMKhd8WQ9wEUe594xNXUzSTJw4i3GmF8hzWaGqJwVMfd",
  "key9": "2VJGtoEi7Psy6Co2nrnyRAGdXm2XHKkN44PeRAaEJbxY1GmCifRr83iEBpfS4kUBy5LcwWRUmaLiPQD1ywiQuHWs",
  "key10": "4vgAXJ3q5MfzDf1dbfdK5CPiNNQZ82mFZ46KA1QhYyRmHKtxjpBpmL2cwcNghLzeiyPJUhxbgvDsm8L6edqMTNux",
  "key11": "46WaQFNiqr3BHzzUzFy3aUjXM6aNzEHyGD5VJszDJu3S2yCrJzD8UtwCkkaAdNb8Z4AidSLgEdyzrnBm2wNjTAGG",
  "key12": "5HQ7wyKWWNaR7keqS8uXCkdH2HHjivtqFPKni5WBgsBJfe4T7LgxPAxMHmZxACNWu6AS9RHSLKkGd3JF99q1d9c3",
  "key13": "2pXGy5vk1BNvXyjxF2HRvUvs3PzuJyD1SQUegJbTqid1wwp5rsERqzEzmcqdmdTpMGHF49JpTk2bVxBkYo2DzBEw",
  "key14": "5qG24cSMx1EgK6EukT5EXnPXQ1fwBUMA4achUiZuMYTWGM21ssM4eiiQuAUP5oBc1Zfiowrh5LaooBnhXv8Pr1Ng",
  "key15": "2CHEKishxyStiyo1tmYQFiezEutYTUv8MzT3weRcVxQ3BLtjGczKLQcPvGtooNezMfjTy64sm9NM11L5JTPGrMan",
  "key16": "3yPDjtePXJEpUMcYkbsmdbsNbEoEdAmsrdarEMVzauwr6AdS8G6i2CjHqhMvqGXZ1Gzch64F76Ygp1UTjfhUrD9h",
  "key17": "2om2WLSgBdsQJ5ceFX1R8jaWMtRCHfBKadEwxwuMzaLX67w3wzC5m5gcRbAqPJPCCd4pjQQWWPoUAEtMorpRocgt",
  "key18": "5Y6tUm4xLcvMzzkPFtgX9KwEkMewEzrW6kJL2eMEJ2nxL56Q1d5BJLu3nAZWb99g63QtPWnx16QFsZQKQxMre5oB",
  "key19": "U5R37HUVnWHUph337ANDbCNfpj5dwEvxG1SfXDD92oUbLs5GzKphncJcB8u6KJ9trC336k546eWwHS78DoY8kgS",
  "key20": "5H2SXVPPuJswLypRywfX1ejUczzN43M3S92BR7W1wtRpJHo2Q2TFanxEzZVWX8FKirLsUVFp5NNdJLDdfdTkJtpd",
  "key21": "4QA5fjWkVrjzv1ngaeJJ6ZsZKhDBqz6brLfoRZ1N4YupUuipg9ML9ppCCUxcSKA3kiqBzbZG2KJBMN9D2DJTNPgY",
  "key22": "3j1f6kZn7gM9VkUVSjveA9UQrer9B2pSGMudnV7zpacDQpS4xtsm4gQKBZnkAXBw21wiiABHAxeYDqpQwcrBRP19",
  "key23": "5nKhnEbq6PNdWHuAtqoFBheoyR3p1NSG8U5eWpsZMM1YbZBs179y39PQsoLzcLoLxeJCHfNvbpop3TJcbfGwdyjx",
  "key24": "2Q7JmwaXkxFPCN6As4CzsfccUZjXSM1HkXWczh5cirMpG9dmbTya49CzsRjijRXjikicbZa8QiGmgpaUwnzFJPbY",
  "key25": "5Yvw1uwvEohserLuga1FWXfxz8rD1Pc9gbX7aK1sxcEed2iByDkDCeaT8awUwyHA2WnyTBGgdLHQRn1LnV3cCGTV",
  "key26": "35xUNt7JPVPXHbnPgA18MC3rs8fvb7avkGGPQaHJXYWbJDHsMEfZzq6qD1W7cW85nkMckfQQdZZESJBVni1AJC9i",
  "key27": "3CcKvg8x5yCeaF9XbtCpi5APjHBANrzuq7iVd4jkrJ8tphXSTfVSHVZdfQ1JkGpm5RQQFB6gyyUJCg3JEvym8tFh",
  "key28": "5PepSJVBGtkaw6o5izLUDmEbbasPemUCbtWeLHHUgQTMPhaAiUa9Rvp6trwtLD3UtJe2KVsxa5VhnFNKYyd38GPD",
  "key29": "4VQVHypTSTMCBWUjZooPsBbBMrbb177RAfZy889oYWBFFP4ogxueZ2ayEDXJkU2KemXiJD5g2YDDavdGVeP5CYr7",
  "key30": "2bjLVce2NXpbqCi82sCBXoCTQjWKLNT5QtBgnA1iCTUDGe8vTGxSog6z2RzN3LZmbfFJLyTnXPLi5mRDESwvE4zd",
  "key31": "4DiGVAiPPe9rBVLjBxqMPN9AJszNcGpS5PdfHJ19bSyHb4sZEJ99VJVkvE7fWesHTqe4RKqTkMvjQFsU31fw1r6z",
  "key32": "29SfGhsEtSSuQKo7ddpCbn6rzwFDNduig9T7aZ9Lvdm68N7L5Y6g2M8GKqmUZ1rdSruSViyZV8R7KC6q2W1WEEja",
  "key33": "Lgc8GKENDvhQTXuQ5ojRPK3jSxzEUTcBFN6LQfP7NTExcbxBEjdf9C4DHdGfxP2VbxmEtXujYPgcNJVD25v6KyN",
  "key34": "61jGJ4vvR6XDySQSjKEegR8EH1G2uX6Ucq4Dvmk6Bmej19RQ1SREqxchvk4vQosVhHqVo4k2FgKYpDt8zN25H4Mo",
  "key35": "3kyiQbbHsiEYUWxGY8EnpGHfda25NEEj2QDxmUNLiG2ETu65yrzhfwPPTt8oiNfzc4Xny7YAopHbB4Tn4gp3mHnb",
  "key36": "2HNz9DNh5QN9x3wqxN6Jg9XYQTwxnNgQRPK5TWiffZUVarRUBvnQvbJdZz6MtgMsAuELAqmwzza6Kr1VxN4JTJpn",
  "key37": "3xxu2BRLdLiF4Zi2uoGLPDGSiPEZScXoQKiU5AkSzvLwrsV3sDzqPKWqTSH7XP8QrjMMjkp86CjW3Br3PayWma5t",
  "key38": "37xyXBpg4QzeR14WxqJEwQactYfrRKvibJbGuotSdAg148dNEvVU5TaWtWXJRo5XxhXwM96nGA9n2dEpwK2SV9FU",
  "key39": "28cjiBj6TQgHzknL9JoQtBTWD4AdnSVA3Z9R4kQ8LtdB3v9a8KVM1qeSScbeZHff9q4W6qgyDp4vndwGnQcmxYC4",
  "key40": "2Kpxoc5hUXFK8J3r2diae6nLYQ9ZbEX6syrAbL6wp5WquEGohUvz3EVhPpFqogPXR75vtfTJgMA7N9ifzLAcHafp",
  "key41": "8cJ75oF9JZ9cm7VTcp6cdi1aU1xNVZoCsAuf8Nayye2uGjh8HzQpEvSe3uk6eJC42eoeYQPVq22SYfwDSJ2KCBe",
  "key42": "TXA6MKdZfrdJSZWgra9JjxDFquVZhBStHEmjkZwKVs1h1xVj7rr9QkpGoFabCGhjskjLzKkAtTY9pPKtv9qcGgK",
  "key43": "32VhNqvAMbxLXRn4qD2WiHGfvpNZu8jYxiCaqTFmSHqYsv3sJL3jTT2zqzmdCTg7nrU2CoC1u49mznpDSEgzp5iH",
  "key44": "wqm3e9T6AdHsnsjpu8Lq9NSS83Yeq4oAtaTgWtUt74KQjQe4ir2CLXPgwDHbeQushPeiu9qNYdwCHEr9C4WMJpE"
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
