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
    "2fsvxcsDzn2MoP9J9Ez9MrGHzsgYuEpaPp2zPzix8LooAQtgqJ5vQWyD9fpp4Weavw4UmU9YvArjm7XJSjMwfNt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sNEVx1GUqkQZr4Mq8ui1LcP271NFdvPdvdg6SNjxzJh4qBqcxq4QwQCxQsqcoaqyKM5HGtsrq5suacTygmZp5ZR",
  "key1": "3ZXS496ycHpMQ76bEhTGdLLu6e2tPA43cSB83ipk1MnFCUeRu5p9wZojxM9YYczgJoU5huAXNKGyeeqdFYUMB95X",
  "key2": "5i7nwvZ3o627kS4zf4WW5hbK7iabJyvitQVUdoJtmdqQQym6yAeiBXEFfENfLph1YYei7YM2i3rahY6saVpwPBbz",
  "key3": "2qz6R9mPkjxCy3XuPuxVET4BUVyHqYHnEfjFcLJXFYUYn24rMqr5dHBwiAPHyXh2Xb6vuYa8k6Xn8WR8zaz9UyML",
  "key4": "5nN8eHgiQw3P9gs9YhHtmVVfUfLdrKxBmbNiCZ1ywmRn5QCwvX7rXRASbz7Jc8YA4rnCM18dhZDxRGm5U4wDcuwF",
  "key5": "po4XfRyeFdnSWFh51SGpNbPVHtTP2GKbB5dLfcZMYWHSeSZ1T3v5TzwCYv35afp2x4gmsLKaNZGTaVwHNxBQRU6",
  "key6": "2QrWaYEeRKoCPQEcdy89W3pTNQJHXQVB7NWBJTcXmnAHWkzKym5xsBum9zJpmrbg2GSbdnUhBzcizVbPZfQ46mkw",
  "key7": "5vWEHgYHF92fAH6jTju53SHaB47csa5aeurwaf7eioQE9yvMKPmsdJsCUWmxb9Uhb6MUCmXU8W1sw6676vrk4pt6",
  "key8": "okZ8BEtSqqMu91mC3o4nNBSCM6E22Gm89TAbYkh6UXBhTnNJYqsyd5LiFBs7qTd3KNQrkfXHCfMgxDuWvkhpunh",
  "key9": "2Hmi13fKHpMPNxtjA6Fkv4Hhwt8RNaeWukWaQLoiThB3UrrH3ohgbuD676K369dHK2pEUwzcJh3fVRaXMkkCziC9",
  "key10": "84QyoRzTw8cGM5wj4UeuABWCBWu23GR23qa3Rpq83jjHKGrDUu9Hk1F4Hp7sFuoB8PyxHMfRjPVUDEnBe1Y5EjE",
  "key11": "3kuBf8URWSpxsmM1PmBcVTEEZqDMMDJtyWNwy85f4C4NFb9xsFhdEBmiJWQ8TpXqfGEK4Dt3LzHZA28xQyXdgbAu",
  "key12": "63KZNLjPFGE49Lioxg3AyGfXUfdrfn3J1btqjPrmAUGtpnPhsDGsw2g8QqhUbKR7DWGBX2etvKVA9A3EAssPSAsA",
  "key13": "2rGui8maSVJKeVHmeFkRBAGqfwtkUMnCrfXJGchsdAidEoDPmmuu8ASeGmLsKVa8HPdYtywM9L6s7MqvcwUYG73j",
  "key14": "5aLxNzHxToFcXx8CT1kJiKZP4MYMUoA4yHQ49MApmCYmcfbDNnHL36Ts7bTukTihmdPUFoG39aR7b1Eaef4ASR9m",
  "key15": "4XaMTTHG4NNm2KKUYVCR61U2VNBDvndkNWPKaVHa1uq4Q4p9LWHo69Dh2LS8iEVfiHYk3jfZrnDb2s3AdtfBgGSR",
  "key16": "4TFR3EgwFWAa4AHCQbqnyGh6wuPBJP2h1Pi1dhW2RxEmGERUJWuw1LrE8gwYdXCVQUW7bgWGQwRtKXL92L86aoA8",
  "key17": "AKhxyxna5FvD2diBRjysRMseDBzKxFtcJSSpbvb2Gwt4wQGD9zgRJPrZgKn6qfxkJPLX68aNf5FA7stqjGYDEc4",
  "key18": "3qpjBPLrxDPoxv4UURD7ZsAsLYriM1c4ThmwL8hefHM4rGEKvTVFc3HdJvg377PuvvBNkuEjmYDdkhGRghNWekE",
  "key19": "2G3jXFFsSQP7yTqVBgipDDNtUXM1DmoSRow6XLBxWCKctFgsgivDNtRPTkNyUecuLttzQHg4ETcDWUfHdkJxMmta",
  "key20": "24zpLq1VA7x1mFPZRveCqTCiGTfZK3PRQk5ze57yLhB3PWzLD3HfokSY9R6CbZiF41B6nqEhWpEtkxgTargauqYc",
  "key21": "2zWGgQPWTQLw8WuuG3PiDbnjPyhk4EPkAhWaQZ7TjNVx2VHC7SvBso1yKG6xpDnk5ghA4QvpGq9JRj7FcmFreQrj",
  "key22": "3MUBxS4AUJy6fzoMHVzZsVRqEX9EWbNsRLfkTtTfvaauTonvkzW6DSuYJbVrWYnwv114uyHyDJtGwVieAj3SVPim",
  "key23": "3QofQrwJRsxqw7b94n8y1ohoRJ9pDXUkypt1s2nqqn8YF3HJcDKMY21w64Rsviytkm1xJ5KG6ZYVCRYAcN5HFfdN",
  "key24": "2KK9fs2NSMsYpU6K5ZJeMcCwTipK946sWdQWSzt3ATtSAe4m62CY6N7ECumTxpgp2B2PNuGYJP5uNVSuh8UUsZkm",
  "key25": "3MKoZmjMyNZ2Vi198ojWNj8Gpt4cahGck9mjDiwZc28EQyh4Ga1fwbEWi5vUSKPz72wJYQf65CqaWx7TckGWXCGs",
  "key26": "2SALB4FbwBBfJfpFpE54QY9Ps9cqRWNBi4ZBu26EDyFBf9BTFST9zU2XEvHCFcXEyrr6RhKnsroGUxWVp1eMSe9g",
  "key27": "S85ncXCoH3KwpNEX74mZvKn3FVwbpPk6amvTNQ2uijuMVBwK3QfXjjNEovjM18uoebxBBvh8vedVmEpVX2VExwz",
  "key28": "3qVytrTJD1S8ZMGu5t9yXJ3eQiCu9rmLxTHi2djUvZMVa3KUT4y3oP9qBa9Pk2ErnFMxoUPM2hmoHLEZg1GQE37u",
  "key29": "46vTE9HaVF7nNPgLiVMpd1gnC1Mu1rLTNdyfRqY9UvFhCEvJy4Uq9ps5m8LfzGFeFgdEDok3uyXNoBhi6SHgMjWG",
  "key30": "AUJHsmJ7hHPRLfbXAFJ9NSh2C62XhFCkMmTtPGjLUs8RRXroxgMYLK4J1mxRpFa9t1qLYUSfdBEusrV4Eq3SSZA",
  "key31": "F8YzbECwesz4Ty4sWAygTCe23jZPnriETSchZVWGFvo255at2Uk9kjiXY26MNudNUrx6Y2s9d4MM82v88T9soFr",
  "key32": "5ZRUVDeLVBtDHF7MWy2EzEwhY3uzw1nME3XwCtZvLFZSi7XwnuG9BBkRx6ZPt5tWUqNcA6awEE9TbYWqzSphxgw7",
  "key33": "4HgoF3m9B9FCNPHAn9BTsdfgfnoBstip1ZLXok69yVx25VdxvD9KSmTRPs6NDnPiLzmGuMS4ACTCSyQ8A4497GQo",
  "key34": "4hzuxiFUrRBRwbeP3xSUNY9tUoJTDgEfLt7DPT2o6WMNLdmHvR5aKj4dxYNSNtGYPfyBXgr6QgLh56JSgQPXgi6K",
  "key35": "3aCVo6o3qoRJJ2Z3qAG99hM1SUdcKTDtxcSf4KSEbzmdWB4MpTTR4fAzVXAxCzssGPKAfJNn2MKcjpHLkB1BALg1",
  "key36": "4rgycNkqeRjJXC3jxTeSxa3J1nzWV1KNMzoqnVf9Kw1ke4MTHgAUHqXrBZF49syPEFJDqWi2G847FrDEpiQwQrn1",
  "key37": "3HtPJ3mLzTzgg47Sww4ngeBqrLDTzRJi2vALsQkGzDYuHyqhjZVuvZ4kDxF36Pj6cmKJVu67vboDEFkf4upv2Uqk",
  "key38": "4x6k3WE6tcuP51YCQexDCPCuBXuc8QA1vGXuqucfKkqrY7sVBAkJ767tZgCHxxh4SFsFQfVAXgSG9K9wg6Vef2do",
  "key39": "HfzB4BHmqvikggox2mdJsCMgPQSWXFmYTHkVmgpLQtYNJ52pQydZTz8eLWF3j59ZUYTc7zQaGyXVrQmGn1q9e2K",
  "key40": "5STM95ME5KiB4GPEvyyZpa1HdruWNJ8U4zKcVKL4DjYGufB9UnhyxhYrVrQJyBTwSBBh87rHNSJrpuvHzuKRtyaS",
  "key41": "C52ZxTp1D2Kah1UteKbDHn2WVRcGtGtNDuQwzVPqaWy4F9dpAf26EzzEsQgbpMxosHmuG8zFZg6JDnE2Wbxh9st",
  "key42": "2GSt7hpR5RnVFZRmrpoKjZFhau287v7sj74xErf4onXYf3vjnApEgmqF9a1qNHaCLjcdHLoJetvZk1endNoLuEeB",
  "key43": "5EUqSW4vPUsNjJy7xyUmP58vpxM3sCnpHMas213wiXhjz9RqnoFLM8SKRWTvFFcyrK3pVWGF3H3GRdL5pqTBVahx",
  "key44": "uXfP6deMamBr1QpcgReD84g5L3q89mJsSbmc6EG8rQ34DPvvP2TUYQQATzmWNRTsFE2eQ3bwJaYV1E46q4eGysE",
  "key45": "4jTtV1XxCDoErtxERrDJEzY3fP4fNfVCbUqsD265TEMQGTRTohfYVVMom85HmK9y6u1YsW7ciwocEfzHMJtCgyqY",
  "key46": "2c4FvumpUDAMnhJF1uEeLHMTUxMvwn6gg8QbPocdYWfKzFEjK7raZD51viyqG6D6mYfF3hByUEHr3vTX3cXp3TKX",
  "key47": "3dkQVihQJPDEQujKDabt8u8NowWbbetpw3YeysMoqABFAPRpPGYeBLxSzzLPVvpdQWCUXxDx9axeMgHF7qf3Vmy1"
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
