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
    "48HeeCeREMggcyyeJYXD8EkBQPzQctcKqK9DdnfRqZMi7R7Vb75ChCjZ9eFfrEDtb4sMYi5UY6C7iUugcczcWCY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LLyK7n55owqUy8GqfZ8rhjuGeXdBYJZ7p3vcA1na54fjTvkuGrx9Kq1Hw9RKh1sz9kDinkpiS1VBh9ApKgoLuVT",
  "key1": "5mH6gzQaXtiofAKStmNHavGgZbVf8UbnC7BcP2aMhVHQSYKx23h3KWNK88dF3LHGrQUNd6RCYHGbnVZVdefCctMY",
  "key2": "aYNctgvCWDGe2PeJXtXgsWPnk75YSzif1qEECQ9LyczQuKPjLK7F7aHdMjdUutG7v7rvDZB9WEyUdwEHGWEjUL5",
  "key3": "22mSfmanrdZdK3GxWxXKPPXe8fSfaPzpr7wgcsKzdSv1Hwoi453jHwpxGtqVV9sG7acuNmDvP7Pd4o7feKfu59di",
  "key4": "2wkxmbLEswxdv66CfxGfywtSiXJqk3DP4NF7EgiQACwLJVZJwJAf38zGPvLkaowXk4WyqqCN4pJi6uZGjcPPkaRJ",
  "key5": "4GZCUnmZujLAXWBC7pWwtkYERPPQkgWvgsrFhZa5kjoyjuH9ASF1up2j3ruv8Vw4G4WuGx8M5u9wwiuKRwMYYiAW",
  "key6": "5HwHcDUFz5DF5T93xBS1Gk4oukgFS5cShfbQo91sk6oeVoKkpPGkGTA3muzzT1XAYKS9nhK3w9yzdc8JWBKwANND",
  "key7": "2EwcqCCpGBZt38KWYf542abBiBipVNYXyFPdfrxWqdmuUNtKntMnp1XCTUfeRqKsnSFqMJYkrf5GVPDSoGvRxAVS",
  "key8": "4sE36PB3c3w65S4C2owBRNscrCtwnAnDEWJ2Vc98LBQuNrxVvt9bWLfHhydJgy2XTxXwGLjviPSyPp7RHQfSQkUf",
  "key9": "5sKTEjHo9U1jTc84rGbb3R6Dg2yzZ7RTPSAqiVqVETtGpKkgithmFqKE7CzXhGu9b746zctP2ih4sXca5Qjq7waf",
  "key10": "3wS5QRttr46VHoh5gHA5sW1h6F1CyNbY1orUYHFEAj4NXPYCbZGSVNkpE7oqfbktTjfRntC4VZTEBmqb3d7Extds",
  "key11": "2cJbgv5qDP8vDzWzZBNp6a1wJg4WPR5N9bHt1i5nDL1bfswMWNQVYz6NYeFKZCSAT28NLmk8Q2o5R239C4MWqUZ4",
  "key12": "9UaQaicqLzK8YAP5obtvbQpkKbR1sHWc4nD94mL7EaAJNpv19fcQBjWxq8vNdK93x7M9rFGmqWE62hr2yjXREeL",
  "key13": "5VvDEbdUiw11g1q6CSQBdAp7JE2ZdSJmFbdj8c85XdbmwoC3iTzN3jLfXPnrRW7yZCJnErb26gmz6CcAjLTwu4L",
  "key14": "3j9FpeNb2NnqxFTtAESfc9G7NBefK9K81nnA7Fnpn6LYsZu5CkTMfpcKzzX7hcPxHmNpcWidxe2f8ZqQPAQdyAd3",
  "key15": "2NJBGpZSWJWqYWcCSrbccgU5Tod3Bu3iN9bd2tpVYdBQSKsW4cxgNcu5gmnUSLQovtSCHDgvBNLJF828egprH8C5",
  "key16": "4WbCfkFEQMWrvr4hzojjTcAS6zn99726ERGPWP64ddiHdtZ82chFk47iUd1hRgEahSksDhfYS911BCnd8Bho7wTd",
  "key17": "33nX1mLAEW1t2RzaH8fGPSvSxxF1XTfP4sn8s9xBnzsQRUVNb8RjHboVbLTYNJMBc3PM5dBqCvUhPDCgcEnZK79c",
  "key18": "57YdzR7gyphtHMcri7ZYRR2dpnofLe9goFbScoZo2RgKMzps9nsQfDTQkUMgKdrAGQrp1A27TBdMZog42WUfUxYE",
  "key19": "5WuxzMs67bCrYpapzpRV7h1daMiDzYYyVzYqouiSxMrEcZL6NUhrjQoAd5HwWkypvFQJgJqCBRLtFsKrhpnz9jxF",
  "key20": "2BpDA1nh3FjGBLSGWJn8HXBL63MARzkymYT7f2wVpZpkt5Xs5wFn1vatXXxwr6nethtks5954TAdc92amMbdkR21",
  "key21": "5d2sFNtVytxLy7pzFSQsZZz8USscDFWRwdUj56kXkWcxhAGxgdzaSsHa8cWkP9o9XEhr2B9Gt9k4Bt1wLH85dXnT",
  "key22": "5tkJteQzdYt2MTQdaZhMykm4pvJSn99W5MF8EzSJL7gGuZpePSVDy121o4iXrgVJ9NhbRZb1N7c3kJVsPNFFza9",
  "key23": "2tsLh7yQJ5fFZ1RVJaxXZ7zxVHiopS718Rzin1Qt8G84QkBq2KDtaDoR22BaSXcXZRhvghRnxxCyjuNRJFWUSPPY",
  "key24": "3w89ucq1LRpNuwYN5vLuYzqTWybtFcnrZaHmeQiSGbrnpM7wC2dvS7RXpaMSTUBSjRXBaoHQmhHBFaMFteQtWJna",
  "key25": "2hFrv87McSaZKM2iAoFu4nifP7ErgcozK9uxdbQ2dV4SpdEHYQMg9PqkYAFaezcasRBUzWV6n9avosjg9VsTMzYT",
  "key26": "5QWKnEjz8croUcsh2uoknNMbkfRNaPM8dRnz4xqySi9xiLge7LMSfUu9VsGq75HccAufVn9UwWr1PLR9zwVyqjUC",
  "key27": "3Y4LyNzwZf7acSH6jq5P33kew9FSkG9XJUMicwUPhfUXu2fvMdHb5canZd6c9q28Beay1gPtCn9xmXcRG7sFX1fd",
  "key28": "3eH6m5hAFewq8bSQ6TiaExxHKz5ToNis8LU6dxquUbi1SGasAkAEsCDdtj8AoRUbAgE8E1mEyXa5hoG2taTY1Yf8",
  "key29": "b5btKJ1nzHuZFJXzD57kU3HSn1obyWLw5b1A4P28hZpX3nPKQkK9NLTy2ANHjq2TXHyR6vFDDSMushn745vYJ3F",
  "key30": "38VL7urxr9LvixRx8ULriXbay4jkdoSFJQUsMURkAG9aCZGUzDTsYc3dTe9t7pDnzKAE81wSjDrDPM99BoRLuC8K",
  "key31": "2ZTRLBJrdqyGsc7q1XMdATbABx3snG2x7qbng1XSjqZr4pfhEm43MsJMMbuZWvZBGr7RPKcMuy7cvtW7B1rsPejy",
  "key32": "45wee9C3HhACVFhujstUb3YmiyhrVb5fWn2TUQ5euGskYPMwMgmkrZXu5MuV8Z3XqtDgvuh2VWHJR3RdgujXmnvy",
  "key33": "59oJbyVWRuRc4nyeUqGe9jCdsNEaCfWSHk5ZSpHTLQcybn7nmciXDyoMSafs6rjGdmn9Memq1CDEVNsDEb95imGh",
  "key34": "1qtsmWuNezJ6Lak1yLFrUyJsfevTHJyh4j5hTjVjdLfM78sGk7XpLucmJirXqCQ2aCR4jpZvUpwp8BjSATecPqU",
  "key35": "2BCZxTREFqDNLiwidRiM55cHkwUZtATuvx31KWjYDmaoXywpMdRX2miKYHHUqnM3WX4fWmYmT9d3CB9UwLmyd3fT",
  "key36": "6346AFJ24aH7diRo7rn8dn4rfBgckiWZQhsNz3B2e9dUzgXq5UYVR5TaPwcJPs4gMKLYCSQdYNFFusDYyvJb9APw",
  "key37": "421LRxY9E5NMVHHdR761gyJMNa7NYgdETr2Huc99SDmqLJbNWtMEiP48FgJPp74AYPLUL3cPEKgqwComDoWvKrsn",
  "key38": "2XHsBAjvkJGxBvTZWMkt1FxuKK4jQXx2FN8j3PbGxfwgN4DUsGZkRgYChfGDV3AVGEzW48x5CgyyAaNba3jRkWDE",
  "key39": "qPV24EVqPGt3RxAqmMEB6o17AHH69batDDkqU2Mhp9LtGq3qpGocKKpg3jzjcEALxBhLs4XT2mt91ZhA7CBSpqw",
  "key40": "omgDQcryAtQ3NKWbHhe7JMV58ecmeFXpvtVyxiMrSgjVEJfAzrxx15Gtk7Wrjxb3fdEJ9wZ3JW4LDqtwZoMkPmp",
  "key41": "2DXm9KowgmNs8znxGnoNNZJLC39v6cQPVB13jvLmtXDRDmXYm2gAEXwm29MxFMJhJTFdcPMbm52CYNQtD3yYqQpQ",
  "key42": "9rr29HmTKBxcDy8AE2pWb4Uca4xofiGYp26ivK4dWe52QhKosMAWX5R4vWXD7u39eAJuP9UNwJESVYEeUPUjw1C",
  "key43": "6KFhNuZXbi7qjwLuJy6hrUNkvsmnNbmWfwYhnS2Duuifcpv7hmnSznKPZ5xKnPseCb5z6VC7QG7wCZx6mzGwQ6a",
  "key44": "34zq4ZT447qitCK4VS5Q3DdutCwx49rhgZFhSNtPN8xCKXb4eosLnhirDRi1M4dLehEFNzA9VxSHqWJMHHyZeHFg"
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
