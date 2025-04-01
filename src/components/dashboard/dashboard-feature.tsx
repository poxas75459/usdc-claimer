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
    "2Y7Z8bomeCBzXRj7t2V2XbsXKnHyT7L6zhpep4TXdGtrk7sbvYLkRna8tALKM6vvszGKxYBNEx4jyRaVJqTezd12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Krq5bMAYWgSCWPTkYjsTGbytEKCdHe7GoGah2WWY8nH4VoZwAPMQ2iPDpicCvTvVrLTcnMjfmP7wosXVPaYBLMm",
  "key1": "3yHCs3MChuUMjuZHMyJ92ZjV8RdJViGfCGUjmXznQXBWE1x7hBQhr4ewaokLEFkBR59pJLv4NG2Cxtv44HmTt7K7",
  "key2": "3BZCqbbFbD5Wo5SG9wT1jvs4NBMzzM6FpFtFu2gH3b6Y8dJM4mgnn87cZT8L8DumxL7q1XgZLNrhAgRDnLaVt9ed",
  "key3": "43j4C2HjTsBLE6naW2ECJu7E2wXDuWcZCmYgBnAmHAQxfwKotQKwuywq7uz2GmLPTJKppPs6vCcDvvH45zaWBTpx",
  "key4": "3ZoRDwdjTcD5hzbL5c8jVYg24pJwYgkBT7ykdLbxMeqkNLwVnsxvzK7MR8V1u2gGVpop2oXUds6MQ9FQhvM7MEXU",
  "key5": "gNS9g1Q5Nv9NBh7sAw7B28rPvuNhw16RdL7MZVnX5XG1kXw7JvBQqKWMaCsaaktXj32QHwg7EZ2eyhbpYxz76XU",
  "key6": "61NTAqK9nwx2ApbbjDqTVLNTgW3iBjHTmRzN3mTSKp78DKdRarnrxF7fzivs88FHcjm21QZkQc39nxtDVjZL44BK",
  "key7": "5ZV1KqBpvyVeLoANrQNghQBEGUp7bSwk9vSWtM45pizakj4CwKgaJEEDQcYuamRhncY1xVnHQDtzVzSMqjRYhi5j",
  "key8": "5jJwSCooFwrz7aA7myn5waYqXPBqwrTqp58fEA8Rkf5LvBMWT5cjfPtLCcqrvXXjzkkQhA3p2xphm3ffwqG7JU2X",
  "key9": "8S3H7QmgR7uV8XgjQqdxrDC5Aa3RvhTisdtVMMkCstLh4KvDMkMFEa94BKidpinaidoWsrqAo4GVfCDJz4edYv1",
  "key10": "4qihi5PNPuiW9Q94UiGd8UXhTTkHvzUNp4vdVZdbg3Y6AxGSsSVJxjgPSv768Jes5uXikieMpSoH9PVHVhgqpvRX",
  "key11": "3ryua4TpefbNcUax6hnYYHmxrTxjtDaT7Hi4ftWpFFe74NzfyRdKr59VGnAzPs8EsWmzbExXNLRdrSZRoiBwwaDT",
  "key12": "5Yn5jmRBkyZ1B5RAEDf1ZFdRbhYYizLuHqQpMdPwgWfRZBCpqSb2WTeHsU2HMuf4ndDLW21Qkr9JSDEmSAJq78rb",
  "key13": "2pwynJumFrVPonMPvmMy8pUMv6WuXFhiqZ5sFh6TMZ7PzMm81VKdURm73Sx8zJDJkTHuUdubkGB3pwWjq4bweP87",
  "key14": "4WDUqnpMCpoe9iqVnkx5pPZTHf8MYWGpfjCi1gjH6JzcCDTL92TNidtTkQskDjaDJyreqjEihoySFxCS9YzEt7re",
  "key15": "2vSQvuAAvMNWiUjXeAgF1ZGWdbxVpgSaBjzV9VLWHJeuWBA64GLXdHYZLA5Vd1RctY9jmpG5UazHRWpATzqd4Uum",
  "key16": "58YUUdboyZ8BbZuxgVB9tQ4yVBhmnCrDnELZbNfUgJpxT6YoreL6EfHaRa8Uvc62ionxiR6FKGg8oPRZBEF3rFNK",
  "key17": "4W45bry3a9GY6XnUKJKjxEftWTmz9GnG9rH5oD4cDbht3e79TqYg7JZtZizh5La89QATYHc51GTfZ4sYL2DyzTu",
  "key18": "5mrUdo55mFsivbntq3QPuSfcPqsvmheSXvyFRKHpbZMDV6rBQvYUFiyGj1refjPf5bNcPDpwCYSpNynAcug4x2Gj",
  "key19": "5JdkQX8W14q4xBuQUfH8DYp676bAph2sA51ynXvJcFX7qSCQRAE4RnnDqNDZZznAAC4hvTUzeBja5sUYXBD4jpA7",
  "key20": "3obzWoXJXLesemxJ2AKA9nvLZZr7EycTYm5kmjJuFPEHArrkgbDjYPZMo4xfG3CJm34iHCWqe9eYkLXHPG1UqNWV",
  "key21": "2ZFMcb1Fd2VPunc3mKUiXcHZQJ6wk2iJ1Xw845UnggXtAiFNumxAU1b12iYY6kG9YzV7NGGts3v8EPBUFnAo8AtS",
  "key22": "36Yihe9vrP9WKqTwdiQT6jbKCkZTkero3phkVpngMZtUVfqTNNAsF4DPZNRkpvbgDfCgjajUy51gMYTXiYUPJJbB",
  "key23": "v6djYEE9LZFZQkXzj2AHCtNpeHa6NgMYQoK6JDZb2p185aCnq6Dv1RPVQv44YzeAvTpjBcHrnYJ5AFzgW7J61kC",
  "key24": "2um6BMmRUusCbvc3R4RUiTyaXSab9S1iLt39MFas8wNsr91SusoC3tfL4swo1QqJCcAF4kLpFLZmJppQokjpCURS",
  "key25": "39GCcfyTB7qrnUqdVzuyvkjicysjpfjQp7yqsLU5Ch9qHLLiWmzM8FFoFBtB3t244B8PN9wkYZi5o1KUdBx3bYfh",
  "key26": "4FctzwRS9q1379ZX15AcNm4NcisqvcmED6jiSzrrqKXTUnwpGVskeKzgqu84sfHNRZe5korX6McamLMovEuNjviP",
  "key27": "4akLHEp2fKoMave3WiCJfDjD8EdqJdBiBjcVQqRoA1ET8FgsHtD5UvhMeupmGxe18hGaDm9iyQS8ESZMkqPdEoB3",
  "key28": "25oUUm1q9qJagAsYSswcNQJB8BsUiHcnkiTWtAPEYyDKciULWc7Aypz5jGd7rucisuTPguY8B1eqBdYefabwUEtN",
  "key29": "5kXtFqQdvFfGvVFF5K1TS9DjmXwkFUa1L4PFgAAfMKFba9nmzmdjtngFoDkC87vLNUzYkZqkSjxcG5kfAtAxzFCM",
  "key30": "3a8fZP1ALUfQqNhemUWd1QYUAbd41nKfrY1W8fis6knEQtApaJruEkZLCrauTSsZVzS2pDCDScdpKLKQGVYBByoB",
  "key31": "59SLVL1ox7bQFgtxWeYUCeAWHeC4GfUtsxMnay6SUSTbDmjpewqau3AqAYXVf5puaBca7aedrgk6oTgcVxByEs8r",
  "key32": "YnHhVRMrh4EaworkonQubrXF2ofYVyeDH3EktViCCUW8bLiaL2Y1npjnxX7wwKxYUrb5VQNw3eBKP1cz3dzNM8N",
  "key33": "2fw58oSssCZzXQbZUgm4gpNiHzNG2YPjhmCqvfa9ruBRUcXjnsFSfeGexyZBiAeMyEq7Y1c2TuQ9CXw4HmEroGF4",
  "key34": "2SQEgT6Jq72cuk5DRU1SXa7dHJMc9JuSibQrS8smPT2ApfdVnuDjuAtuAd31hQqgsW5EKGJSobFTT3wP2ppEwMRt"
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
