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
    "4xFUMdPZcUvxT3hebyCnad1boNdBuv3a8iBY8SUfRiDLUiZvF7mQW1DiCNuDjYS5wuzmuKmPR2UECoRqBNBUFXU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hv1YtqPJSqKJ3JRXABB7gSbz2GfWRAGrDk6jJ56jdbGfYc2QxNS5ESVK6pw3QyxJkQpGT2gz9Up9NhsG86am5JV",
  "key1": "d63ozoCFSRGMLvsgg3uB9fFZTR4QU9Yc2zLshXJF3NZJA4YHvpUcv2XBBVSa3vfKUK7mMdQU513eBCxr789APLc",
  "key2": "5aQKdeMkbLA99HrHfBNJLPNrihjvTFMXEhAtU2Vz3SKEU5muQAtUUvwLWfk7VEngGwiaSkyEFHcU8GBcBLFAn3zu",
  "key3": "5a7BLGZRbqhC7fpnYFrgBQp3Ubq3EioELrWKcwaR6QXVmQ1VH9HsawFWWXBiC3Lbje4CiuZbH4XneYy6go95REG1",
  "key4": "4HLkX42Rp7nSymTdR59DYFsh7qs8FEFkybc8pa2nJTQGe7tq6F8JiHgLw37MqHXQCxeXAVesqNVk2Rw72mtmEPDr",
  "key5": "KcLGAe24mBweFmkUxjue4WH1BL6k9NoDFczdKGKcVgsFCmtqwDJEYJHescJbKybkSKqxG4mEpvZenKiFk1LBZys",
  "key6": "4Ww1obKSoqUNDuuznFSVGoVJUEeZ6AwDGGDPscbdsD9ACUNYAcukdzPigZmQV5MKbiD3Epu3CmcDJJaEpMQRUXUv",
  "key7": "2T3wtRx6KF6crSUFJpoZZDqsJheoQ6LD42MeEYdi6irMUmWpEhAAccBrNzdQdKu3ENZ4PdhrK1YmqUbvSpgvpSkj",
  "key8": "5fMURD5Ymk6kgWbgnbhouMvAUXLESHkoq3hxv3qdtpiEi9vi1tTRcW1pZbYMLiHYjCQvSNNkWPJjkCCkbsQxf57u",
  "key9": "33RciksV28qwmszdQ3gZNbSXSYArxKTEdPWVP9LVkwDz5Xmxk3RhyBmkJbCXVf6i29kccuyb3aCuAgatDeos5Hp7",
  "key10": "3z9igaQke6z3kcDRd2SPD5G5sFch2hdu5unQoe8srfTbgLi6TB4Wk3yxTENhjh7acQ68QcxWGj6FxAreFMmJFS52",
  "key11": "5gexwAzo8gd94hFXLvZjbju2ES6SenAd4xFSmno1rNF11Y2EToqKwuvSrA5xJ78s2pCX8RctYLKg9uAGeHkKx47C",
  "key12": "4GZeYEmkgoh3VZYDEjZhuJrvkQy9RfNh6ZruxhoYz3joxmx65aVHMCwSPJ4dB4Nrbi4wx6UzAWjDPxRA9kB5PETE",
  "key13": "66MHabq5RFA3bfYjz3ffQQktwrJ5BpfBf4uprRQUzSPAgHtapKqK2Rhh9rb59b7Nkp29oA3B3eJLUqaGkWaNuyxt",
  "key14": "5BkSSUoeC41EUPZwfzj2eCyJcBtbkUFQmiCVsA2SV7ejtXjuhbGjGVUXUztcEvvvU8RL2wvUkE95GNVE1NR81uS7",
  "key15": "2CEzLKytXJ8P4yinRfHh8oFWTkfC87BmCN7zexJnLwFvCfxkU1MW5hPe7jPNf7y6U5iu4rdcDjqjxa29yxxHdMNh",
  "key16": "2AT2suog5voxBr14YqNtNT3uAGDpH7jTYCFAa8Uvir7ftnDnk7cjRYoyfD8vdFx1zuDhjmocbR9pj9jbsJify18X",
  "key17": "36BUruzJMC2dizBC8LdS7eGbBU7jjV7riFsiwCUHUu5PTXVqKovRAf9whLJQzuq6vMHzmGbvmV9ZmQxXXzSNRPuJ",
  "key18": "48m5YheHij6xUymuWFmagQjh7UTXeRwKGcCk2iKkt44vr1GTzWJVvYuoDSMPw3qKvZFytQML742sQJxMkymm3hUd",
  "key19": "5JcbeQau9wd4ZNFZSgqgLTw7p7FTaPAWFJeXCmAU6XUL1S43qGfuvCCC1z4mZcdFe1rzcCFqA6213KR3jZdandUU",
  "key20": "wSxa9SxLw56jCnmdfCQjUGwrALfYL3KiX8tpGMWCdxfrkwtKWbT52N5tvvbN3oPbgc8ZiD4MnfZ5CFiJjsyhkHd",
  "key21": "4oiYFHJe59edBbmkxaSDQ7MsfCjSmCh3jqWruL3jZ9mEr1VUhV2DQ3es6TWugCVaKb5XwXMJTuxcSDXMLcwYoJx8",
  "key22": "5eCfMZwGGJWF9pT7s7jgRWL1HFQ5vGpVMSU4Uy7p6F5Ux5bLbpHg2no93ubmqTbQphwJkme7QBpJn1q6U8EvjLE1",
  "key23": "3uAsQoC2LbsSF1rzWWTHfxN2nfjn7bYeewR1QzQh42SBTdmt4okcgXUcMRCbm5C6FtA95qXGyzTi3iAAf5pxNno5",
  "key24": "3Jp7ufr1cFCejyCeKg1MbKEPjusazCysetmM8VEbz6khLKuCAQytz4FGFoXQrmLEEptKyW2aUXFjrjoV28qXHQfw",
  "key25": "3mHo8Kon6pTsX3C3V2Ubmgmss5rH3tKv1jtxxMNn9JXrYFstZMUAxYkR1QJCb2yq9CujiCPWYokCUGmGR65xfr9X",
  "key26": "1z3Rfrw6KjUw4QJt4aMK1gy7mmUbGyRmSzPy2Nn2h9SpKk9X4trzLirvUasx7ArgKpgv7Quyzzp66t1mofokdXR",
  "key27": "wNKoXbTsvRBkqi3v5ihWys5BfgDmbQP9QN5B9StwSBrtWkj3kM1wSRbRUWCerq1w5yngtghb47AUnuW9V3ZEU6s",
  "key28": "2ntG695TimfzQ85Qwb26MwLEwV46YwXrNEfuWmmLmr9QCNjKrDGoBreedCdJVfV9s98JwDj2SP7pgjg2geA8f78P",
  "key29": "3Tk73DadYkxdMTq9hWaafNvUbeRk8s1q2a8mfJTsMkKjFLq4yRqAvcQghfPTmXhvzZewm1Q1qcqWKNFTHMDh2vJQ",
  "key30": "4wAkqhLeG8QLHV37LDqpc1rxMzNCHT2CPJc6yvejGbTPhQRGy4NjRKn6SCNEUwwuKQBxzC1yrsPyBaUqESwqBSL3",
  "key31": "2iuFJzeEQsFnp7hdTChrLqeBJCLgPUM1pUhZSrv7v2GoNzV7LFAQZLwLjGQUZXqfLxrVB1ycyj4g3DkajinjD8kF",
  "key32": "R2MS8hF5kwEQTj69d8ZS7YVor1uJV7DjF75E7hdx1vrb6tB3kPwRtxf9Yjdkk6AvCNGQagSDsKBbCQqAaVAyVLn",
  "key33": "5agESRSwpL469ELkaeZYUjnsWqkzG5THbedY7vDsDwtpzcicVqkxB5yf8goKJQcB6aUyJMMAFSvcJR2x3dhAgxj7",
  "key34": "262hY4hjAqF4C2mDbkWxbUdyUAuxf5XiA6BfCnE52tnG9nK31CUbDr3MooVkg9oiXCf88RepwUyBnNLKA5ujDiiQ",
  "key35": "5MSvJpCkkZk9nSi9dGdgnAUWmqmC1USzHRgtKL7fhV9To3oPXtu6nvaHdwHmKX5Xq5LKyJvf5G4ohNgHZDAfLcNh",
  "key36": "ATPKp774n29giS5jCQdGMRawRMLUXsCo88qpMETFMT7TSour4wSGJaTTBWg3juFcqXLzgDnTw1PfJm2T82Ua6N5",
  "key37": "5QENnP35enGBUk3kRDv27DhaWs6U9fUBb56THrLP2qn9DJh4U1Qbuh3AUiMqaokgvUjA9apQ6RoFAfXhhnS4sVXL",
  "key38": "3zyAPZqdGM245nhX2tDgNS3UzuVvKp4B3eYMVzHnJcBxwPsYjwszqXJBzvqxHwnccxpmd8XjpXbDw8GcXwTRpj3c",
  "key39": "2nxvRscwxPR5YbZV48PpUHKUozWjbCgqZne22yLaWi77Ep2N33o2HcRqGDJREWbe1KJf8brJmXqpgozp4aaYxgmU",
  "key40": "4SyRB9JCxntjR981hbHHkhDvmxR6YZtJaEHqV1suzmSb13Jq8hfiksWpUNYoejyoyAQFtX5QtHZLd4HgN7WG6Bty",
  "key41": "33eqayoYwm4PX6iMX9ZTDuWvA3naFvnmyzQLzufWG59TRKL8ArDTGCZj9Vw4VsUjrRHQpDdupfdk2sLdPQSZPGgh",
  "key42": "4ufSSn1SHHSQb4SKsdMUmKMi3FsFmWjPqcxFDnp4W7DzsDHQcVF8fmn5MyixVDk2u4QCKXZrFWqqvjVm1DaQ1xrr",
  "key43": "3izuEmuRMWtkEdpyty2G7RGEkZqo38XVxZXvL3K718pAW1TbUWHXTQJKykBa8PWuFbJoRR8VWP94zgRCnLf85Y3F",
  "key44": "4H7YpMxnW2c25wE31PZQPFSTacLqy9t9RhmEB9HL6wnbnqdQ2NFsnUGeCKqA5FrSbph61QJSJwFX6UDE1GMCozoM",
  "key45": "5vFJHV3PYqnKHi94iHn551LLLnbXacErQnRYz2dNzAv9ifSP27sbxL34h9wGQHyaU9WkpHM5VSL11y189vMw1xry",
  "key46": "5yqbndyUzinMfYTcffrJh85oZAqitampeffPTmFRGPH5rfgtotPNArrHtXtd353Wg8TfK75Bw8jD1ZCVKmALXK4A",
  "key47": "2auR6LHWUtAym44gLWPWV1A2FFcy6Prw7SDiHULEdScSVpADwdj7NUmDh4Tn6XGHShWoQRJfG1P6iFo9NSVFBaRL",
  "key48": "2ifNScjdqReYRTFtcNe4CYfvFpvDFXRchCPSmX9gisYTw2KjQj7MYgatMbLDmUiLL25yR4YFupd3qFmEyZFAve2h"
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
