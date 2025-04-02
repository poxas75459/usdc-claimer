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
    "4KPdTU5xKpPmicY7WXa51wRp3ehxKZNEok47PVawC8fSoWKBxyoFZooqUeh23q4LuVA2DxCE1pKMdoNLbwpMGGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qSFdwQEP6ckqtwZvmUanCisDocPEiXuM45bjdTdXz2sYReb3aY1LGPoM6kCh5rzV9a3N7ThSHLjTXe2ugWrLkjV",
  "key1": "5KXGgwLTKuZZsSRiGjSHqmni6Ud5oRsy7CEhrnBZAJpE6GaS6QCXmLSJAexVf1vFeJZ8AK5M8pkM8LLkQt44wv9n",
  "key2": "3j3g3uo9FtvBnAQCMfLYEGzFMfVGExajo91i14YtKzCerCSoQA6BVEN8gSei4BQrqrMLqTXoNP8bXhqXVAJDcJ6U",
  "key3": "5LgDFryFwHvNqvd5mDbhsifj3axxHcKYq2xbhXaqz6RZLwniWcvpAgBB1Fuii4JN5sxbnyiechF7F5T2pA7LsDR2",
  "key4": "2nP2D9bgpx3aDnNr1uzFKecppnbaoCjTac5s3Syw9aCgcPsDnWHdZGRzBQhiw3EGJwNNb7WBrp9ocgKPbJbcxkRo",
  "key5": "24AmSKoHabF8CFinA2JjPSZcY9e5DisvcAzKU24aaAmxsv6ZwnjDUCjxpLdwobFcAY12Q3fMi6bbj7kygpYD8Mmm",
  "key6": "52ix7BpdroK16YgNjMYykCdsQ7vc8j4QPYRpicH1iBKFGoRveCUAyxbJ5ZEBaNb37nUbS2wAymC49GUiM1KzTwvP",
  "key7": "5UEVziDfhycxKAJe8u3TSP2D7tjWpBYwYozDd7uJ5GAct2Z44D51onG7Lq5b7AdsG8kFL4v3f6mPfSTZnHtp8AEj",
  "key8": "3snvDRfZg4xPfStL8e8UbcC6MqcJNeMQAoTVVAae8B7ZK5mEebyD5THDRbS1yy5gudPDMJYdnYGJ8L1wMEtzvzuR",
  "key9": "3bVc6ETu3ZDWQ9646TkcsaZc6xfHaRc4euvaaYMB2Jx5rxneb6rKATNbUjXVByWqH4QemqXVVESQTWcr1e6ApC1P",
  "key10": "4rt1cKKeoUQHCHFYbc7QrCcqWkmwcjeFPYJFJYs6sD4JLjKqqfUVU8oRfWRxHAQiCWG28wGeA5C45eMnQpN18uAY",
  "key11": "CgUNVfog6nqfFn6vsuVLbKCVRmuRvEkdFySi2riYWukaXKtAiSLtXognwbVcgVWX4dqup4p9nafrcYJ3TRqpSrW",
  "key12": "58cSV8hAN1ptFacu96jzYewGXVzaCTxCJmTgiJSbLgeQ24m6PyCTnPHjxpwCZ3yQuBHc7m4aFxmsoEFH4tLVPqVg",
  "key13": "2W7Nzor8eHtBP3q6L6b9LoSARysacWDy2AuustyUFgtdD8kApanteCSCWdFY4gtr6U1hF4MUdr9VXwvKvwmhX5jr",
  "key14": "4uHkxYf1aKyYJH163DUuN9LZBxMqVqNPi5wnjCWdupMi7mPo8CsVWHELxyL3rqg19o8bEpH3SYJmXd84iDD8g4XS",
  "key15": "3XhP9XDzeQQCM8mpdBuXRayH52sZvtagVGTQBCG9DBXoZRYzpJmtE2srQtBjRb98NdHKwf3MsFgRx9F3o3C1Ae3k",
  "key16": "66ihGHm4MGyKtD8uRwEuTR7tA876rrLF4XQcJBbZawNTCvvTu6PEFyjTU1WeEAPitQAmxyc4puyN7kW8pHLcdzz7",
  "key17": "w5h7WHgqAReGD4G5hAmminfqsMoxQ9gLQvcnhzahuwDzrquozMCeeuP8LcHL9WXdMz61FU5aP9JGdY3WcwbWjkW",
  "key18": "3nmbgV3fRwiu858MWDDbvvnng9KfmPrrDrA1DiQLVCxtdzjfCwSJE2cq96EUEC5UGgX1V1uN8U23tNAjHCgvzVW7",
  "key19": "2GKkxYS8AHmnkqeP4znVBrjP6NhLcXcHAEpm5AM4vNpH6CkKb8idRNkWKo2EnDTU2iYMaG7Jej2Eexp6kEkDD286",
  "key20": "5yc33miN2Tey4FEuwnjS7sVi6qWN7A2NihTX8rz1PmXUSAhy9MHMASdQ9MEzaNoPxSTS3L74P9sYyZJMUwWWAAiL",
  "key21": "3wCKc44fhQ8ocz9zv49xQXHWTwQzS7NgKzDPMDCwyd1cruM5yEPqP5wfwJ7kL1XYgSjWT6nrtG47wTdk5CSupbnj",
  "key22": "5PUq9WKcwK9kpFb8pR9W2LMuMc7Lb4K5FBtuv9sqdkZtaxTHVsYvcYB5sKg4MGevhnHSN19X7Th8d8YhxVwkjYvu",
  "key23": "3uK59r7uFMChiwoHduGHHjpwDzuRhPiUF3TkUg9TnMvHw8RyaZ5qZm7d9XcYi2WrdvWeWAVXfthE8C9S9PasWQMd",
  "key24": "5ZfHUKpxTumaA9ZEjwzY6eB7SiZicoVo4TTxbFbqqoWfKM9wZpGVyCGWW3HFEh5hb29DJ4yBbur1WzqHFWmYnzfx",
  "key25": "215TK8ekLASw7KdfSdAWxTf17ZRyv4b5Ukpueb3QAiCfAhHXBX1BHzYGbDRnN2UjTfzSoXqMu2QuSB633e71Yk7W",
  "key26": "SyBr4cBgNpneBBoojHfZ5XZaWkBLwEqyXmUzDBye6MGdeum7aqJFpb8Sbw4oFqkLF4gtvQMXVD6UASa98oyvsWD",
  "key27": "56jQv5F9HvM2oj3yWAsyENCVqCTBjMJuDBPVpgX92QAxBgxAJxVLCoCssm8cFD4sAfaGVU4DVU3V9cbCwsqPpj5r",
  "key28": "28hdppv4fGNmzcHtVXosBP3KFTeuAJAXKu9jys4TbJSJHZzZ4Cwrj2RycHddYxpSuKrQyUEyAyDdVvsuPEVf1inE",
  "key29": "5JtsxFFfvjcH2sKSX8G2U7bQmNvh8meTT26S7vXY7ZLuYXP9dbmWd7uEEJHEaAThNWjbj8ZyJ87mFYvc9Es89heh",
  "key30": "4Qy8TVQ6JWoQCi8M9WSfMT6ycZFTmtc55s5pz7pWpxyrsfXynRhHNqoXoj7TYDYkUHvxGFYRrsJx8dDkMcAbDMp",
  "key31": "51fX5VrKMCjra9xCP8BWLHxy45C3euEPYBokdHb6PhfnfmA7JhACdxnyz7kz3uLaXTZZtQeHFTjycgBQJwBQeC6a",
  "key32": "5uyymGBDRDASesyigVqmHd3VsRzdkg11uiixvrpVpKYwZEp33F9fcTsFYCjPEKSnJJuBLB1sExxaQssxpKNMPygw",
  "key33": "MfYbeG2KMbatbdN8Td6LkBQJDMqceT7ezeW7DVueGVCsroRsWfADdvwPEGCFmyB7czbgAeotmyokz45WDAEkNNH",
  "key34": "57MniA2e7TgnaXjoiA2Fb2CMeHrguaTx1Li9KhYf2pKFAjTnDWQmBnJrp6rZTSyYx87hZhUvZKDwGs8KwZUmeBqe",
  "key35": "4TG4WBXBfHANwsmNLmHRgu95roqMrXkZvFJ2fkbbYaQ9BMpzMa5A5uxZr3JXwjnrcnvU9byN2wwgB9UKqXLdzAgp",
  "key36": "3n5eo41dBEHuvunDvR2WNJLAeaWJ27A36KXYahbjfiXJi9Tnz9e1pmVNE6Vt1Ygkr64MS4g5gL4C7yZx8XiCMKvm",
  "key37": "uXStBizfzeLNdK3eboSYNQXSm8vX73UJNNrzyg5QMD9HFBsYPcb68qu2dnnUZr1ocdivxvU8ELiwzT2WUAFTEoF",
  "key38": "63mqKZkaEoMQ1j5rZk151pc5iVQcM1A8g4U1PFjEZqG4GLZ3W1V9ZGfRsFVL2rW5Scn9JU4K62YzT6RbQyHNpKs2",
  "key39": "4GLsx49NQnr6f2ry5ScKKvtFXXatJSYmsxxLMS4FuYCsg8N9CBVRwx5spB4NahnGEggB5XbLZe4xwV2Tn74an9Za",
  "key40": "AeFVnNso3RvuCBTDzu9GjprEm4dUnGaZUDyLpQRQZd453xk6X7zSNVCJWS5XKCiA896uuZth2HSDrWcpnf3omBy",
  "key41": "4ySJfQ1vnpVJbrLESdXrQajWSg2SvoUwyfxvKbYgcaQvc8hQZTbKygLXSg1EbijSNY6ghiU5iSqjBgfWx9QSed5y",
  "key42": "27zhn5W3wb8LPCqi2z3vB95AAgDb6RpuMD7WhgEihLK6UgPp539rwP6h5CksxwbWENXi11D9r81JSoFfmPeEjaWG",
  "key43": "5hQDGogx62EVbT9huMVNczRRbLEPhvxMFCbCn5JbcJj4q7SbjdJypm7dWVQgeHnYLAHoHSovyNZQTqNRoRxuTgHJ",
  "key44": "51du2Q98yHfKchkn238XMsouaWB7UYQDecHp6qDkpNYpv7oGGRDQkGLA8BWiS3uDr2u6PayiqorPSoyfNKJbbT3d"
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
