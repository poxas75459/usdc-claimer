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
    "2xwZ6y9hJBPSWx9AP63hijFJ3dtkmNwqsUJr6sqxM11J68m2btQh8mDxKB8rb5u5pNYRbGpJjboY4Pum8nVNKtUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42c998x9ybdWPrnayLzWv1ebauDRZdkVs8dNPMShwmLGBKqEHSwLMBHrEJVAoicXpZhoyD553NdWxkZYgwhR6eb6",
  "key1": "4iZpbZiGWDD3hCb1bZfTcNNnYwo3MPaP8JXWx4VTcLr4w487PwhsBCdsaMhP8JfbvibapsWmqwhQ82xxD6warcF",
  "key2": "2MfjsvSFnUK9vbCtDPM6zQGxN9ecHXbN2SdQEU7ZzB3JVZ64P4TTeRbepf8f5CsXMaY9ci6tikRbKHmcvyfZp7ST",
  "key3": "3wdu39MKFa382JDvcYVLmYmtaT9KcianDhZCBQ8s1JNLwmvkvS9Aeu3Au3fb3uBiYAYJCox8sSLvM6ggTXoqSbwU",
  "key4": "37J6vGkHM5UtS4myWXuX9Mjg5iRFbkmMkubJn9jrMg2B4ngBdpoE7uupzXYspBHVZLVVNXXiKGkPbCjJoQWkA11w",
  "key5": "59TN1j8823u9fUGdJjmTng2XJ6zoMQmKDmpdea6GeaGv3Y3QuKtnECcEmbUt8cHChEmrk1Vkqtv9Q6Z4TY7Fi3j8",
  "key6": "5RSwoZgXfoRBNyV51hSc9SL5WqVzjHZhXSFFJ7EvdRPo1LWdJrUFTbQc9Xk1DEjgFu5Q6q2jxHaE1WEsUtMePGnz",
  "key7": "5jCNrkczFHdrKForgBBB3EDLACjpA1P5HNbmoeMYz1iJGk2qhuZ6Va4tK2nqk1XaSUs18sUL6CmXXTjQG3buTfDf",
  "key8": "3FpgpcDPZyv1QKmGGSumQtJwdAJ6AAkTjb84oF85XGYEmJLBtXanhGM16uSLpqdtD87KiVCGSDZr1g1XuUwRch2e",
  "key9": "2gwDLfs5RMh4oe81DHU2JFhsvnWV3fifQtrNjgtF5fdHzWShzq6UfEatbVTntz3hp2nYo7zJQ8jozWVgyre8juDm",
  "key10": "4bMt5UdMBsKvi1RShahKMHFLRuqChRGAbK8xQHa2AgXj46eJ3Bb7CE5zjwSYCPXsKEn2PcF1opXiYv3WUmvJvvTX",
  "key11": "24XXQvSHhHthdHYfDqZw5Ux56U9kmniCyjHKq4R298SkcTdGyJXWiyBWvkDmgUqFmJbSwFWZ98qJ7rWB6uMvR2Gw",
  "key12": "4RqS66zdmHbbwayt2bSWVstBUkDPcmHUKNPEwqycd74p2trx9ZmKAzwucLMuFzYdSNeJ9q7KdcGWrtYoJMf4msJu",
  "key13": "5Wfied4ToVAEqTa2uevEA1ewWq6isev8rK3QxmcWHkEyonrUNv34eL5Yn3Q1pM3LNrhuqV2Uadt1p1ScnVgD1Xpo",
  "key14": "3RysKxCHNPuHocNSg5mM8xDgMrAx6Jnif4vEiNpfcG3G6Y9F2r8mDPnaUYM98gV6QzanT7tpwdG9XJwNAgoweCwK",
  "key15": "37RfFfYKTtA2XUhdafZaYv2WUmjUpvdsd4AWUXWNtGnU1veL15ovRiDW2unXprNfrhgP5WxhygegdZAV9AMGvaFz",
  "key16": "3tmzzNjtk8o4SW6NmhRL2weYS67BKMHh9WYNKbKynXnChVtNTSMDo168hC3YnJsw2FyWJ9Rm4i2EYteBXfJr8vaT",
  "key17": "3Bxh1NZcgDZ8nFfDBKnUT3VANaLo7CkXeA24f8g2eL6qvoVgxzx7Z5Df7XdHie97fd7PJmRFUFfruYuXSkxKDpKc",
  "key18": "3UZ3vdMy4LxTnMEAYWeQK7GR4cXY6owdz25XNY2oiRazWRn7WtkXukVG89TpgfHvyEysssfxBf5ZJXVHn7Jbi9kf",
  "key19": "5Gdf67RBGwmmyXR43idB9ubpuT97dG7iMeaqhE1yVtG8WaaVsPRaMpcyiWwfLhknywgrGoy8zzw5NrWSz7A8M1nz",
  "key20": "4spEp4jwM7qKdCz5XFK7BA9evpCLmWpAduPcyVuw5uW6jCCGU8e4hJDbwnoxsBtneA1ZqXesbGyYEVh8taqME8rq",
  "key21": "3AysSm4ffj3pgspz2aXoXMqFqKW5RfkZpi1fV1MPYz5HwiRJv2tVJmJZmDJNGU8FW5guZB9HVWRvgUuc5tfqSC2Z",
  "key22": "4wCfh9JxWWo6U5d7RSJDqRhdB6sTYsaSEDWHqaAHJwB8YXZbTNGxGvctKZvpqbXUr2BTZAHUggCfYaujpUXc4vB7",
  "key23": "3LibjHrPzs7HQU5aBcUQh8tR8pWCizB2shVDSwVu3QiYNKnz8yyPUoTVeiN1kNzUnHhYhBgyjHnMKBZdsSSDvuoW",
  "key24": "5iMAx9ckv4fRd5bmmejWVYcYTKu3e8ysZ1i5x3gabDPXnDXCGJxSWAZXXYSasVf3yC1PKoQmKrv3RDKpJuuK5wzq",
  "key25": "3fYaJXyTM6hAxndhGiY7QTGacVA9eVvJ8ZHcB5rLKzros4ddE7mrX5XRVYPFkBX88bGxJnuLW1YixGtDbSytg4D8",
  "key26": "2wMEq1i7Rgc16588uSWoXrq5qzxbiYF7iQFJnq4tasqnrqJpyTDYzKGMLgCJ4U6aFstqFaVNoyZNdzjqWfMxQscv",
  "key27": "3QYBgAPJvYYBBzFiJi8PgC7mxjUoMjcAkBqEvAqu7R29TssxwGzBkepxgpq5Bdjh6XPyGWPcswyd3qGLcMBnenqZ",
  "key28": "2URYxoy9wWjAsCYMb9mhWzcwmzmP1YcqjK7wH31q3ASwgJo2BcSfvinA91WwWCC4AorDKukNsvAYt46vvZGSxx5j",
  "key29": "3P5eQCU7vRn4o8wuE6pMsY6GB9BjPFcK6sp65Z5PX4ByHDDKcDqAuMcsN2zhKn5zfEcaYS1rVMinbYc3YakfvCAd",
  "key30": "4WwDjEgkpPej5n5Fta8V9WJo6v7pzTi1k7Uqq4YVG1k4ap97H32k5V8VSoBYr53GWN47nZrctS5uTEquUE81PwQN",
  "key31": "34FDnYfWTipRZC8d4haphCWkgKhm8CWPZBdWDypcchybTg9XKdiSkuYwo1PQJHa6jYQ4PvFAdfycuy4u18wsfWw2",
  "key32": "2TmCNKc5UP7Gwj4tX4M2crzgNgnTSqvY8cVFTJDQMr4kE4eVMXVTt8aCacSTXjAjGBBjrLd2GZxy1gLVME9BDFf7",
  "key33": "3Bs1fodRDEfz3sJhQA3eHM3nTjDJXWVCREHwx6UbgU98KpXm8Ju1ydtsnd7q7Y1Aqn6Bib6G54zkpLGLKrh5hZ9h",
  "key34": "5Ry7BicXcsj4TBsfQcWPX2fCgb4ZFWSCi32BgfE1hyAbvL9ygX38BvYrhnMCtLrHRTPcfgkhck7ffRntwBfup1BS",
  "key35": "4a3zBnZqhgcAHKNEUBCh4oQgMSY51LhAHBbiBwmwMTfFVsto4wtFU8BYyGrpSrsmXhf6cxYta6q8FUYjnLju1LRX",
  "key36": "2R3ds6bHZ29jUjVC75TkfAUmZhwQZwbkUe38D8XkhzNFMc8oeQfM9i32a43rooBfppP4AGKepenfWKPPmYuVaVVz",
  "key37": "5S48d269y3fbCFFGepn688PgKr6KVeHoZSu74BYRt38kT3kPfXBGet4TNvvHPssU9rtxwpCtJnQLENBygWwRFepg",
  "key38": "2GcR2uUfRiumhcpsJxVUvuaMhPCTSQ1m1qAu7YqBqPwATCi8rKjZ1xr6eTJV8aBZHNRresALgPZ6BxzqQ6QXJbTd",
  "key39": "3whXbcF7nph8KLn15ctfJqN2GFeMvi6JcidDLfaphcEfhH5fFwfrcG3c56LKSrVbTVh8EgA82bDuaBqsvPEZkExw",
  "key40": "CHSa3CTNQFxT7XUcDZoxrhJ2ELnsrwDUiSEu7KV4JgNWLFuq6pQE49ea53L8VCXyo6Dy4cCqCXAxRfQo2EDLiJH",
  "key41": "rUH42UuLVQoWzMk5xRk4ufTuUM9Zb6s3ULvHUtMGeSsDvgKkbE63Ky2wVJbEZZYJvSsLUdtaKk9f8MhFFQeE7P7"
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
