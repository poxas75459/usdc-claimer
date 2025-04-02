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
    "3UjwA8DaF5TininNRJrseN2C71hRFRFU9oHyUC6taNdw7iYenB7oSdHQeQ6YNX9fvmjH32WdB45LqfvoLQDg1XBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36LybxriCNAAuDj4iGBYHa7Joeqwt93CneE8n32hMTSjnHnubX84zDuw8RG4eGYHSfVpQ7MfFdBa2u5Avxc9okur",
  "key1": "WdxZgaFTNzedj27XdH7FQqdnoBxNeRddcVYeAHD5b9Ff6PtCHrFZ9QJamuo4fxMDsMePqcMZuP8fYYUHpqf4yg7",
  "key2": "3Y76ZbLjfErEiJnVcXuFrQtAQr6BJMY4JZqHbnGJBt8BE6SqTvFkpQgSJZjXHaE3y8V9LGjJ43wCH6G3VxiYWsf1",
  "key3": "4mEk4o1XkCc3cY4YNZUGjpjJckVoyvMapRbnmdzYrWqSko2Bgf1p5JQ2Nc4EPVCgyUKDELstfaq61dxbYrsiPiiA",
  "key4": "2CaPz1UkpYxG31pS4Ebb6FuFZsyP8KG4QH4f4z3Wz8GF3fXMBfmZGmvAk94FU8oUoiUUiBXr2kZb3JVa1A1zJXnL",
  "key5": "YSUtFTgEdG3ak5tXpcp2jTs7XDrby3C3Qptvmwd5HnLQ46RCnnENUP5BaCNH8dZKapHBUi3qsKxj8oWduxM3gLk",
  "key6": "6NFx2XXL2Lv318MuWM5vGGdei4G3hHRsRC8BXAAxZ4LuppmRM7htGP3cydJnZ392JaBCPBmuRcd3ZtXpKazbt78",
  "key7": "5vPzCQTJZmgBD1mLWEDic4TMtc5NwXtaXbtEgW9udVuTLE7m2sbMPnnB3qgg6fV63oXEJPNj2UaFqZY57uiZ2J1x",
  "key8": "4tUjFyGrNyJ9L3aj8LL47HzYsBPYyCUFZdz55qeRkrmEXP2Z64RGpqn6U1Q4NN1tCMViBUF2QWYQPv7TEP7VpS8B",
  "key9": "55hR8buwbs8iEfirJzwBki1eXqiAoLugPCYLoa7jbiPBTFGUzqBSKrjdeHPd92Bpb9E5aFBuo2orfSrd8PCtACt3",
  "key10": "j2Qct7FU5T23tEA4UjvicFtMdC3DZWSQVuXmVVxmPcywGQGiAvBKBYwmvxNuHxvdHi2dNRZBjCrKLudi4s6AcoK",
  "key11": "29kwh6TwvVC1mjxXKiBn9YNdjW4az8ifHzUuNke5xxr6HXqvUWF1xGXtay5gQCn2trnjK2c77ZNQhK6XnpdZaod8",
  "key12": "589StGQU6u3SEvBKKUTFKwYSdFfDXH3MYmPLYpWYLnzf4vVsjT4R446vh8pgTZN9ujE7wEhe6ZpeRNiZqYNd7PRn",
  "key13": "5MYQMAvBeZL7xhLa29Q38cG7WTQBup73ibV848DEmexj2x7GmYkXL5ybStnGcswktNbRUCW3eAFn7LpbFEQZcb8B",
  "key14": "4y8zv3kAxwcFQZfL9jPsepAkw1pBWDL65NMHpnPRhy6rG5DB3wSKHQQVLMWXHft1kr6HRjMdCZCN1Gy3aF2ZRR2d",
  "key15": "2YKCUk7Ry9h9vq1AUGnGHTpva8bcqERCt5cjEu6WCrhnHdY3R6opaKyb9n8G5TSuXQ3W9HhmSkDf4ykTb7LxPFAy",
  "key16": "3xn8T86ZdMKYGaq4pMD3p7vFVvLouTGKGCTK29ALy9u7bYkSDckfSdtZXSaB2WVTR8ZUvk7TnwptV55TLHSJ9oN",
  "key17": "KM9w3V52dF51CHpYtXTYoY9tc9gzMhDJHpdnuoj7Hc4cpwj7t5bByuDrjzXYiupvfkrcYmtMo6SMiaddCMc6mQW",
  "key18": "2JV7SJy4EV8CE8zRJ7MXUNbAMjTrdKiB2qBptjYL2sWqwdQ8jHhohK4AWjZpxuyqj27L6uNM5ZB78P76ikmpeTHf",
  "key19": "5YCzwqJZQG4X7hw7SfiBL7AeFFN3e3amhE9XKz7h4gyqGSfsGrk7xyf7Y1f1hLwmHErJuE1toUEeUfz9KQkCRHPL",
  "key20": "6BaebtFPZSDSyp2FuNAg3dYyDpPDBu8JH4mcZSneNyQscqo9RbrUva5d9hSjQvin5MXLGwTCiHJzjP3oQnsmchb",
  "key21": "5UqFTDAMSiPi5KZDacHTi1AQfyCYC8CXz4uQQUZXPVbiB5V6rk5TtiNsNyyHKBLGVLn497MUhvxnJJ8ZHoe3k5F2",
  "key22": "2QURjkX6MuhfUwP9eAb5xZfEf7u2tQvFfgKznhrABHLj121o6FiMPDhwQ2yjofFzEzxyq8w7nGtcyrB7bRoxsnPe",
  "key23": "qPoWFcnHkmrxpJiFghp65CN9ndt6X65hJo2CT4p46sdL5B6zUKmSZoex5RgjXcAC5vGs2GWL5n4fhNskgqSWCj3",
  "key24": "22od8jLxAaoGezDxEH8jxZBrKt64ZRHLmWdEfGkJ2LzX1Fcvgq36DDcNbGYAAFS8aJSYpTRW4EpwdnpYZc6xFCHo",
  "key25": "5DKCN3kMiDy5U8YJ8YiepkbHTZ6W2puYTVW5MVL7cQJUAsDK6GGvEjV8MJbohoYGtJ3u649M4FT5G8HoXAgbSWRi",
  "key26": "54axPExUzDcbL95GFzDoSkVEX78PyQQJgcdtZqaoYTS4SsGszuzwStDHthsb8Dg4ZyxV1j3i1zpMbeNonQh2woXP",
  "key27": "MVXQZsZgPn73GevX2ijU5gA1xiK46XLvY7iMnBxSFjhDpYRr7gEyE2jBi8w5bZfvZfgsqMXoMevNEqh3QWd4gpQ",
  "key28": "28LxeZF5qYpkckTkvcaNgcfnhGvgpBGmwtA2eqThWDWvPRi4HChUGx9DoAz2tPSEDgo9mWfL5Fo8UiCsYerXTyeS",
  "key29": "2V12jDhWsdQjbaAkdsDzug5AETRQ2G7BfUm28sjvWEfYEEkrNH6qXXn3nTDj18dRtpN3DGoftSff8o2raCEyGz1C",
  "key30": "58ck9KWQsyduudopAjW949nPiHQ42EtgysrULRst7T8vBsX4ppRj9qpzjH9AZJuUsZZYFRjutPHgFSd3GFmLhXS3",
  "key31": "3Djw6DB95EipSosnMoercGZdMBSWe8kQDFcfycVcjtQazddhVFKD6J3JYpogzLMTi7bLSnp1gDzKGANM5pUqZy5n",
  "key32": "5A83PhGpD4WhthUTiSTrBWBq6k9BPDuyMwomEkn6JhkMDCng5RkDdopZHf8iezTRXDxtrwnBFpdhYz3thDJeCLku",
  "key33": "439crYzk5yqCdGaeRoUpM7V3QXGrF6fBxfDKx6sWRfYiPkJANw5R6W6v2pEbPYTBAnvX4nwKpbvEV8pVYJEgNeyq",
  "key34": "2ZEg6AmnozsobazcfYEAa5f3vci4UoigULQUnvu11ySowhPK3mwH3GG2HZir3rCSt3Pf55kGsZG6t73BNDmFS3rd",
  "key35": "3wCfjkLTrerJhYxvoq6RpLituiys9iDj63jv7PHofvjgCzgF2uqiyeo6Ewb3Cskqv35RwPtTtBwmmotDXaPFikkr",
  "key36": "4RfYzRX3jn87ATKkdjPdvGTvM7MFCzLnqJD9fvw4s6vW7Sg1YoLBng7ihqHUBMjYtQwbJY9p1VgawfeJDUjD7Pt3",
  "key37": "4rKMfURA11cpUzHpkg4hohvK1ix1dMon1RT8itUQYc8zAaGiBRX56dYH2SNX3AvxhW5BPH2ZF5Lwqommj4ia1vW1",
  "key38": "2gMw9SvHrWaJmD2tLSy7QqucQX2D2iSQ4zAmvKiXp7cg1y5fxXtwRtzhKvU6hexabQmKsF5MqTWjhin1zzwLph9i",
  "key39": "2S3YFDLM8pYEzZ5otG3PZ3c6BwH6iUm9wUMGggrGgLRSnKUjkyx8CLHP9XPHihQS7HZzFcApUGok6wYH8SRGMeof",
  "key40": "4scqN3LeJ9xoiR97xcFfgyUtph9U8p78iaJ78ai5NcC8pxzDcBXBN2bKBSrWG7ej92Y3Uz2njUtDRB3FCiiAwvCg",
  "key41": "5PMmaX1ZWnVsVKNSiSu2bScgqx5Qduy6fa6NNcYsCtResbreiV8f7urS87BbS8apsDUeW1bgDyu83yufDwtuzNoW",
  "key42": "3X5ocA9my2JT5v5KJVQav3vyt9MkLR8H97G7NckJBssep6WY3wsDo2GtxBcrBKL87Lo27UTeWqWaG4bqFqmCpNZT",
  "key43": "37gv28b3W7Sv7cBifXVfuNecNm8EFEc8TnQ2rnKP3kfRStCsjtppWpNMnH7cjekdWsMKn43dBXyZSj6AeXyJK5Eq",
  "key44": "2sjvNaajruyEMcEknNB2qDpJx429jVXJ8T7jLGemLjdXE5ezU1wWFatyeRB2kvcp4v8zJT3os6HStNtyFAgsHbnu",
  "key45": "2ePJsGbAmTaDZFczDA5Hxg32iThC8A15wJjLMbcBkm4SVYkgaUQSLRTrEGEpGJW4ukMcanCLspetv8KhgyuFctWx",
  "key46": "2upTUPniEXCZ5so1UPhtz5em2NHSWCVJgqRfqBC3k4YRqtRncbuxmdnXKsEdV8T3tV6g6yiTbDHqJPZqKPpi8hqG",
  "key47": "38dUJRqtCYseFanBRExMBk9Yz8ojAhEckqedRgZECT6htotTRck5udztNcheXmCMio7juGtFSwbvJcPPWKjD5tpP",
  "key48": "ozHhtfGx9kJc64iijuVZ9juUktioJdJFykLtqr6T7SBivh2Md7whkcpWbqMmxHHC69oP3HrKwgm3rcsn8isAHDs"
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
