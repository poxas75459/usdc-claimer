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
    "2aDfYSPtG8gdhH4QsB6RPy5GAEKjiKShTZA5v7t87jWYc1kdf5ph9uNWzYouWY7ggdmAPwbSunC6hnZZWgUhKD4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46vLypopoHb8Jo297uZbfrvypNktbFF5vHMw7qQXbKrAC48nXs4c7PnfuMtYRrwfbkjh4LTJFs2ynphy74yw5L42",
  "key1": "4Xru7rfbqYFB6g7r5Lv8PFaDL2FHxJNxWh9ijRQvBkjAgTFvpU24kNBnqPzBPLEcaHLQD14N8EXVW5q7Q7mMwnq7",
  "key2": "3aF2eAc9JrUMoFYLsbvkoZyFfkmh5ab4uxZxE1PZXzhxbXj7ojc7Fdh5jpp2S7fCzj1EwknDpXafzU12ru2EtpFc",
  "key3": "3TDTpqCg53AcWYDFxaGGYjAa4uzmQkoaRsAmS8pZAZK5MraUDkRcaPLW9ayGe6LaTZhSFEyq6eKbnAULTDpuTpbf",
  "key4": "2YhCMNm9dChhhmMrAJzQ7YJox36VwwbNHjxLAd8CwmEd1duUM3vHAP4hxXQ9LKeguYxiBurfToGaxmDrvbKWxrat",
  "key5": "4NAXGhcQSH2HYRRxEpvSHra8FdFVHwd96v9frgqf627oJN77YTbnwV92qwHLNuSQ66tqx2joPW6HP24w3YUj56sX",
  "key6": "63aJTwiU7JZVtebS8DasJ6g22r7iXdth7XdC1V7ja4wWhYQvkE3DyTDZuzDTG5rbvPxYrFvsqC6DN1ajWaRcViVV",
  "key7": "3cubninQyBtUMd8iEbEMSC3doBhiTEeAsyo46fxWBe3NYxpeSSdMC9eLtdXGj1Xcfso34neWyoW5vKcj8NKWYwXm",
  "key8": "4rNH29jasqeCozTcf9K8tiCRP9BTGcp6iFYffJAKyV9YVKDyaNcC9j3xBufVccrZmVkQjF6vWTwgA7AgnhHFYy9m",
  "key9": "2J8wiKrbkByDKhThdDdc2oXFEPV5fiux781GS47CBx7Fiexk9jSY7pQtVzTf9cmQ6qaZPAeCjkNBEMkpywwDfJDw",
  "key10": "3TVLa4jcHxQxWKFaejaSzRcfp6AV3Wx9Wiic95GjD7eEWCgsS5s8EAX4ZbdGuwd3hrTVTRpMJLhP6ejGXVV1M6Jt",
  "key11": "3Uekd4PBrNBG3gRDGWXHAx5ChqVo53zy5AtYVior7jviyjnb8L1QzRhhkpZdXKc8zZK6LrM6MXtdLx52ipWhCfrx",
  "key12": "43SDeMZbt74fQduMWVjTb8nv7WLVAam2NAaqp9kJ5FoJ8dU4cSuhtY8tf5XqFZMuVBvTchBc122HocRL2Vv1aoeF",
  "key13": "ZXWM3Tc7XtPsRPRWXN848fpb1SBTvhRdCEZmPC3jFS97mKL36ark4gMKMjuzEMxx83zc8bwc3udW5chEX5Y2tZQ",
  "key14": "4dqsozaaoLc4ByvpSw68wupWeadtLQsqBRUY3PS8XV8uSa4pT4k6nNzkcxNuYdaFdXYhkAWqnfiaqdQE6FKaxZ4T",
  "key15": "3J7qmntNcnj58rAATA3SmjHFQhkaj3mYCTrZw1zPBr5myJzkAbpRn7RtD6g4xQuDK7ZseuMNMYauaUErUeKMzJz9",
  "key16": "3EUqUuRMZ2yBZ2zFhhAu5UkaSXdkxFPrGbrvNqezq9RYMxFcLksheEvu5hYTWRsnZv2SMxxMabBaGuDDZtcKApHE",
  "key17": "5ywJVNRZ9FCqF5hTC8UZUctMDKjy3AceKrZ9eZGjp3qQc5mGV4cVZudu2bRSFeMzFmFWh8bfA53SVHnahsuuiR7q",
  "key18": "5PSTFnTUExwB2w4skqxhdRPJ2V9qAYCGJJWHkU1jmYAYLhDjor5SwxoXbCzAEJhY4Cw3xiTyNuuYxSvn2vJHdhr3",
  "key19": "4Mpcm7PhFYJDjZxxYCc3Kg5sfNv16sbkBva6zcMGJgAcokTuWuoEocdNdJzYZVtFjgbJB3DtDk4A22yfmw8ACHLh",
  "key20": "5kWQaZpZsDuAjKZypQQt2vXHiBwMJRNWaHXAXaFaWchrSpc6fd8yGxgM9uqpbYRJwgP24RfJxUcWB63ea1cgD7kL",
  "key21": "3n9UmSadkJeswMe15W8NwSXgyDeANqLwBLoC1hFqGWMEE6KdGRTJ32D1f8Fu4N9d9v8H8aa8w2RWUiMDHfgrxLjA",
  "key22": "4j4xwtPaU4fbuFkQYsDhV7YCn7c911j5AHBK6syEvf5FcqbmXcXYyFH4ZDR6GBpVPNcnPAoza51f4cct69i6yvVc",
  "key23": "2ty1ssgFTg2xhX4ZAdKisbLEDhHN85QrvEVSiindM8p2yTxnEeLDWb4a2Xyujh6sgNhntZWiNaqWjf9AW7XeD458",
  "key24": "3MtN7aCGuaLuru4xE59ga4FYcXUY8tmhuKB6xdDxfqJU372agGpGgMGbggUWDDwrvLdWVhLBq9PmTWqho8M6XdVB",
  "key25": "49EntLoT6cHWAbiLTZA1hWWBMGhYcH9gDmvvb7tSHMBjWzKQYWn1yByaaiqqTzxXSUbu6SzqboM5u419nnC5drk4",
  "key26": "5JnpsrjK4xrLE8UohfbmTTDGdmgAVut8eLM6CXzWAmmBusVZzyrikvePb3yghZA7sj9pRmdtbdygvcTuGnPaGhD1",
  "key27": "5WKEMfVaEkw8neHtzuiapMrkktYHdDuWACouqwQFv4PSixQeQNvUruERtnkyJ2hAtygWSAwPLVuxR1ioDSqRSnp6",
  "key28": "fuG5jDryFLKeaDW3yLoobC2J6XnQfYff8HRvsDMieXroUJsmqhwXAFz5kq34Ljj6ThjFHtp81534GaXSvou3wJd",
  "key29": "4sanGGe9JPpA9xpQgpMQDUeAcQswHfWvzoctEWfJY7mxEYLyfCymtSt1z15yKzn2CSiqV54P63EMQFgsdUHdvMqe",
  "key30": "3irJUi4c386DuE4DyixYwMYPnJiWYCErgXtiQipLqMNsp1jdHCi7ZLJ7tCo4z5dxyygzKec7Rokgb3WqWLhVbbDA",
  "key31": "5Ym48ZYKtoCVEAKzGqzC8S4o2TKofJkQxFJKhLm5rV44VK1Q1JWYEgMqjVNoTQJQtzujnWYQJpWcpxPGCKjmVgxA",
  "key32": "2QW9BtDskDDcX6f2UevAfq8pxm5AJoHgeCrTBfkJFM9otQ7n9XQXQyXNEnvXcefvHNHXYgbDZ6GQAX5uGq78kkis",
  "key33": "phQeKmrTdWedw5MmuUTrAU55YeV939tEQ6Ngs7HveWJczjzvQidoi9VWhQPHyo6MDgjz3QnAAWvUqhX378zP1to",
  "key34": "4Egz8Xc8MBbukjRyvYnmtombjcqthU4Ys9ZdYXBDNDkPRpfrxmmk94NsBcTrkpQmPsW4CSjdFX3zAm2r4iMsYddR",
  "key35": "X9WMsdZeg1fQJGfV91S53gkrPiZNycE6kqYkWr3fSjTvxShZYjWkfFjAuHsqcUgFGi3Wa7oUBKVJdse2pcsSqXL",
  "key36": "2YBnNdY6tEqm2XaLiwWVN1VPEyRivL3Z3qrc4TRZA7eHhJuZsHAnxSGKbGDHT8NaAhcJGYU1hDEdwjrXU4yJBGsw",
  "key37": "4RZgw5zUmNymSPNSb3gJqo2r9ZyDSyUgUfVAMThbn7Z5qKhuafFNGxyd6z7veER7rTR9aMUAduL1gjVwJWMY2wzG",
  "key38": "w7PpE6FpjP8exQXr31fP5752zrG5sfcNr9Rysvoam1oXfUqyCiwy7isfkoEGdGiSAVFx747df5ThVnSQE2M5sTv",
  "key39": "3AkzCj6gd5Azq5fBnAse8zsfrvqoB1JHtmh9Tsuae9StBfgZSbFQejv9kMERjnYSp1MYoJCxry7HNNAAPubkGxng",
  "key40": "WCaq75aHbLYVHr2BR4Ghp9ZGZGtUaGtK2JgwFLQQdjrwjvPFjgqbLjRty9FJ61dqPndy2qV1yjPYmoA2eQR6hF9",
  "key41": "2bQX9s9WBd2NyQNPMNu1yuLghRw558f8mrXXTTrESbmX53TGJtDFyVc9bEPE1cPf7ikFSz4HcWkAAAuL6DWKrvjY",
  "key42": "2tJv7RBMnyqj7QYmonPpY9vNfF74cG7rvx8LMtP3gMszBdm2Jhz3AgsKTkPC6jnQTrTF8D66PBPgviyXUJuGC9Bo",
  "key43": "ZcMvvrS5k5jFB178zc5skuaPViS167cmRfYWrqt6XkKcUWjfVagYUmoaNZwp37352po2F4LLTk9Dwmh9L8NSNFK"
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
