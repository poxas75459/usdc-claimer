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
    "4ha3dTSvrTmeViuwjphA4a8t4EPn2f9o1pJ1CLsjW1dunxub5y6rvHbK3cFSVEjW6maWXmGS27kQCHSA2bLEgpda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zvKKmbX8Q1b3tn3b53jXBJiAYH2EcugkS5gD4DXC1GpFr6tx8Ha6YNrF8LHbtpWRyq6LHbPbs75EkBZZPLWnPAM",
  "key1": "2SWs5SybBQ4vtnC4VjesYfHpMR2DAo2k6rhK8cC6kVVw2cyu5Qu1YZiNZrFhUL5h39bFpF4YtZfN2x6rYKTFzaRZ",
  "key2": "2x7RDennY782dWHzZdMUbgevBszCw72Pt5i7txJ6XCg1qcytQrDtR5RbYhBB1VZSpEyXxUokff7DTCTPhJ9aXwYb",
  "key3": "2rUxtdX7YJTZBXw9agCKbmuG1dTNQYBFmLncErQLH7hg9yMjEqWsLwo9cMjSGeCCcB6eM4gZLDKp77a4Gf9mWTom",
  "key4": "45NhTGKuFCbcqz1JjN2SzkXb4rkRXStvTR9YEm479dvJyuuGAHcphiu5Gn6e7T9sXTHxATKkEgdrMA9KA3YQrpTW",
  "key5": "sa4VJAVtWeL9s1EA4Rz2QJfAziaLSonH1N4BH477fsfcpUH1Gv7MnXPw2c9eUJzdorRqbeFcFh2qHye9jyuXpEi",
  "key6": "4U98dV5p2NwV6NVNCgxPGzmi2o2tn65oQJynucP8oWVSCDnj8XCfviRJA8A55ux8im4D46ACcetjytiacnT5J4RF",
  "key7": "4wXqVHptF1GRH36PVwJydSmLHRr64i7Y3heXnk2kkJgmYk1ctL8obRokLXNNXfr7jGbvBLiJpFf4ySyuqV7Vkw9",
  "key8": "59VYnLKrBbhCN41xqMfApSqLbdC8WQKCTRAW4SE81mQJe3nX8GdHtjdcGVYZrXJbQsB36KF7TvoRqWjb9sRvr8u3",
  "key9": "5oNLdE4C5WVZofUYgGGGsPjDkWBjFUiQoGhwPL2nvZraSTXfvjpb7VkCzVm2fE9dDENWNyrHScSnRvpq8h1Qo6Be",
  "key10": "36BkVoSLt8pvYCN5aukvD5BAATpRi21tbxEeHd7S4YJ3ZAKYE7q1Z6ALrmb1vwrpyXcAbXQqzRfWuRvqSiHs1aCw",
  "key11": "4BYJJ2UFx4km8QxKJk6bY5o1Phi8HyZnx8ZdqKUxoa1iacyGooMmgz64UyV4mxQbeTy9J5Gmjyh1ArqJHMMtLDmp",
  "key12": "54iXzHqyw6i77AKucWtLFF2M1v9eLy1nPh1LrqwAy6mDyyLiTiu4XgDYBBuutzXFQyWWXd1wN4J5gmQKFbpobcV8",
  "key13": "2qie17TXmnbB4figkDz7gvtsGtdKPdgHp3wwgXfjrxd23v7nqiy4Jp1Ehs7aQYFANcvVZBUdf3ZLet8Q1FmkQUSv",
  "key14": "2dh9J1B1aGbWys28ECpN4aBW5SXYC1TBzaPGJ96wkDVVsR7WfQjvor2iJEsK2888PjQghjD8iWi75TV7wESQ29VT",
  "key15": "4GA4hTNZu1aTVvWyPCTJHKjuKZvNapWjghxSmzQS32RacD3VsDJ5nNy267fWVSsJDFX8ji6piKuHt8kqRYv1UqRC",
  "key16": "2cJ25QRyuA8YwNdVZLdqhbcRvBoKYu1jswkTqaP4GEFBQqSArY9mCsvgVSyJgWjuC6CuAJgwRSjtQJve1iWyAzmW",
  "key17": "2ow1RkWiw1vQ1kz49ncjE8f51YjzZ7CcZnwhP1stV2RKqfNGhXEpHtFygVN8cZqaZDjVoTm43USi1kbbLmju5BAM",
  "key18": "2EygTcqhktVWJcD6Eo7LsdfaTjQ5asAz71SNjL7LQ6rX1bu8Av99yXVKLKoKAomKPj2qYZLnS38gPc2KwWu6J4h5",
  "key19": "2aeSVmpUYXhrTxSt8cfazP3gHH1kZEWDWieSTe4mz3NzuTUpzU6K2oyyg47pyMVxL8tQxZX4qUrmrfd5xWbvppkB",
  "key20": "5s1ZYvXjYgpEkiJUkHTYnJfa6GGtJTyNQ5uGxHWn2jJwLqaKR3JiSnWppayFmr9pvaRMEEsw3oWA3K45FerSsuQJ",
  "key21": "5Dfeut7yb31oyQEeaZuFnHuH6PU6j3g1hYf66YCnq5ePUoQDCmHwNnbek5aGE6twa9YY26UpxWVL5k3rkrjZSuU",
  "key22": "2eDXdtpfvF6FrD2UoYq6g4FhuBDz6wqnUayE3dbWtGq7pdSFxjho1A232QjmFnLYCC5qEtbCdDvNEmTMSAKJp98J",
  "key23": "4nEZ7UUos1znD7UbnsrpxiyZzjV2K1K2v98fxrWbjCnsuh43Nwma1fbgWqUPAi6YB8LSNiCV9S4JVAa8mXcA4Ls",
  "key24": "5NsyWyJuQBxKJtqirbff4Q7CTywkdq8G3Cpw9nkb98EDM2Qzj3DnMZFizbV4gWiJFq3DNJqMMCv2CDs3QVbU7pdN",
  "key25": "2sUYPNXESHNNK6SVhScwcxH1gnKJ3cmHzMMoHPw6C9Vjd4MWCQf9G9vAmzb4ukoBmY3uS4ej6pxM5oeZ7WtCaX3p",
  "key26": "3vk2ga7GhRGg97RMWJWB9WMQ3oQXLmA5pRdjNBi5goBpHsYCQ8TZq8MQupL95aURNWjtBHizmhBgBEuoetkVAivq",
  "key27": "4JfTdN6m86TbQBRCiH5q3nRRAaaphxyttT77mbFUAW6UYZ72qm6zc4HrsaRcVWTPD6Kajkwe2aqKj3GiUvQF5wcF",
  "key28": "EK9tKCJNut3jmbdJuzPL74kBoMVxBc28b9YiZz6kRFMsWA6RSYF2uQGAtrBYRSZBA59wSs1AnQcLXsXP81WgB8J",
  "key29": "Sof9j1Bm4ZAeLM7xC84eNLwoiYHk2qNcUTRLTNMQnUgqp6xcWpSogFZMe1mZDJcms435Y1NSzUaXqhQ2mv5u8hp",
  "key30": "564t8uXsvdCoodAq5ySZrHAMwrAd2zFS8EcFRDtW3gCdapq4B5CdYMssQt5FhTPeK5W7LifvdaPpbxFynokrHmtH",
  "key31": "2X19chgYRzyQHLUQ4NnXLNHiaEjMgiYe9kyxJNdpbSXH1Ku5umVquPP2E2UPoDRzszjGCEPnr4rwC4o6eQ9vyFwM",
  "key32": "EdCHiGSHodHrNiAmUUvFmbiq3HKyrodEgtsnFzL7Y6UNLczd7y4vCVfckJ9R82CVDUzHh1zNkL2CshePhV5GRBH",
  "key33": "45yJ1ZUv4m6d9SnG8HTgQ9XND3J52jxBMmALYYZDhAdoBR77EAzTtA1ZCqhJYoA9dwK5v3qtkURoU34wRq2cXNEH",
  "key34": "3TddLgt8FyhNrg2nJhgWbbadVDDJqi7KgiQ1r4MBRZ8XFLVci1bCWwazYBR5LiR65Euj33GpbKB5nihWb4nvxeXf",
  "key35": "78oApmdfELTpUE2dFV5o2kji5jvew3u1kNPpfugWMxQjNjwZJjqGN1SoY9tMH4VX3gb97rE14qFgdEWC4SNzLHT",
  "key36": "DweLAkveH6xciWv7uej1S7P3Fti8EX26LspgDv3gspLzWhvwVTiHxntUpygCRf1XMkQvM99WYLWqzCrkuuRi8Ag",
  "key37": "5wAz2XP63SK7EDv7eBDzciJnstWH3nnV1zyPpiqRxxsYTspayvFyjqa5LN7wxseoz5nY3XtnA8iJcEvSLUJryUfq",
  "key38": "3NW9vsL6bYAXiJu5AedDNMkiBQyWqssaaMWaDAnuPJ6BFSrDXct24H9GTF5mFYzdA5N1B1YkFU4FjYNByspfizyZ",
  "key39": "3YoKdFnXnzUwDwWvJ1xuY33TKZkaTq3Avf9adkraQEBQBytFw9KuppQaHFLuNahgViZWBfnko61xSagnmfiEqT1G",
  "key40": "sX58rU9qmJMeARQ51YDa1S7WxPfomiH26XKnUPJ1DAAF8wvZ2DeiAWFyViSR1f7J6Tzz5rrzq82fPGPf5hzBjsu",
  "key41": "4XBvQCHyRT8s4xfeKuanNYqYwTQVL5XskD5oa4vpLjMcD3YpnMr5v5Tds6aVCdzTDnRCmTUdsmzw3DFy6ocDp7oF",
  "key42": "5pWUEwf3roHhub4SESYqZCPMhXRTAArSHUeYiUQ2dsuhYr52ShFqdmAB1h8c6ZzQhbK2Q8iCkHKbkgkC8XNJ4VH",
  "key43": "29gHaFEiRWvi8xZzLQ4LiuSnXMMutuYbLxnAyvxzAKFVP5BxrmNL25To5hP3ZG7bonuUsdDeosdjJ1NMe31VZ98i",
  "key44": "52qJKp1xheq6GhfMyqSj4BEVYbkfMYYTNc4jyfeydpakWR2d7P4haR5B44c2WmoQcHw1JpJx4dRpVWwD2Rq29dTQ",
  "key45": "4Ldcmkk3Bb8J932Wdn9hrqZpVqV1woFfAhsVuRin4p6mNQfUGTXNdHy85LdsqCYP3FAuLVjaVbY6vL1U5FdVZPy2",
  "key46": "51a8gVMc1PLmKnbnVzesap2TGd5u4FY2mmJ2hxpiZnSzssWZiCGdcvrkAcvZvkyz5QsCCCFApYnAzPpzwEpm23iu",
  "key47": "4pq4R6jGxxznbFbQ4a3PsrcZYS3ABcuEtMWB76pb6bVdcqaYXqgeXG8nhRGsabK3Qq6aKBuJ5bCTAMYWjhyW68nh",
  "key48": "3SNt87zHs3UYGTS5wRQaZJiMn6M7R7aVH7dBvRzbE2Gk1yyGtrshYDQZ9dp3RRRmQwEGNcjq8mpCYZfp1WChbaML",
  "key49": "28UpNcQ3gLkASw6c5TAnEhLWrQXfv4v3rSmASnBUc9QnHjU2Lk5bfmbeoyTLi5SxBrPFqL5TdC411NMmQR6tWcs5"
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
