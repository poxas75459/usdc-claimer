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
    "td2aBAhca7EysTAW1BxtqbLYL7ZH5foSqimZXZuK2AjCrmSPaux8a4tudc7qtAbJ6ELnZh6mvSbuAfVAwkRpdct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h5DxQXeE3HBvNVBGmCxXnBppgDL9tRvdbwQfGPfUJNasGqnbNgjPZwpzHctEqyo2BUGGx3ZhC8Yq5ZYsy5saUqS",
  "key1": "3aUDqv93XrAE37NVs2cXcnxJ2EHNy3FQ4dTzdA8iTYWUaWPXAxiwutcTNv7f1SC4y52j24xmP1aWyJhjpjQiPsVp",
  "key2": "3tgMfVfXZT5o2sitn5wRYPRiFJTpxHFrQDfihdjokV9ByKm32jkYkHsedZvS1Y6gs3u2XMcjvzHhienXTXTcj9Pe",
  "key3": "4o4vmcfgy6UwvVB17pZk3vmHuSKMJJUDCjZeZojfA7SkR3uAbsJRnvyRVG6YhomQFXSvjTdgxj7TWCRURCN9uqan",
  "key4": "4NjrcRiKtxTfvszqFMYpXZMG56GWaSyPxEV5NnRzk7NiDSrYGT28JDoj29q3BAWctfh7MCf71PRdMtdmgQta7E9r",
  "key5": "46YFNeLN2Tdw1RBtVaFaMt2HSK74cXb3CrbJTxPR84qEV84xDGx1GiiYBi98GWH2SHiyjvmNoe2qZ81TRtksyxUS",
  "key6": "5knKtJpct1QDyKk7sgPBHpZyHGydVBD2kbyjxWhbXysfuwA7iK6mb2ApqiyJZ7h9MsurD7mDzW7Sc1LsfoiSPEfh",
  "key7": "5YBDFkUgQv9WLLT7vuVFPjaBiQyVxSdBZJsE2w15He6mFBE7oMa4fVjebKkbnzSLuhmoXv6jsd1L3tDVBVDyrws7",
  "key8": "4NBA6eipxBV6fELBWMhNzimXB3B4ZALH7MEnCM9ubghAywztcVeh4Tn2EkvDJE82ju5m8v7AEYmt1QKVpJqgr1Ej",
  "key9": "2AwrkwLUvs4SieDzK8zpZ4cUHG6K2FZiWGttXwEqKyzoTaqAXbey3d4hAS2uv4JD9pt8h1Lq45HUeDLcR7ikbk6n",
  "key10": "5jV6taRxav1GosTbYa7rfqacxT2qYUBbzUv6FDEU92Cz79HixEAokVSwVmnoM7vFxc2jkFh1wVLZQXu96QPRWcry",
  "key11": "35Sux81npMbFGbFqKaKLuw5BdE6LvHUyNcnaLwjo81TeuctKsGQeUtTjjDXHEjEX8AfMfcRPbzgus9yTLRb9Cvez",
  "key12": "boaQtetGjNv7Rhe9ViVUHNtCmjQj12m5JSzr3Dt7ucfFbmhjZf7Ju5gd7yqpi3tQRU3ropYxvw4kA7ses7ZcMda",
  "key13": "2PGokBkbBoq9fdnN64c3NHJS1Ls2eCE5sGsr9qJbEGkUWNScNSh8zLbnMAj8RBbj1mGYsAcPwjCJGmuL1wNPqm5R",
  "key14": "2hpvgCj4N3XUPvFWBRRoDGeKah9PjTaDYHfs8FBjuskHBUu9dFomvY9j5nGM4n76Jkd7YcnjuAsG7P6wUJiQgQDy",
  "key15": "38UnPUqwunwH4gQKwWSfa2vjdS2GtcKLur9KvcWzMt2SaXj5VUpJrapKGHRsusj6pNcH8aguYgf7nPv8j76v1y6M",
  "key16": "LKndvmF2HRLec544KEwmcQk54GoEutQ3vSysFrbvC5FZ2PWQVHWeGdLB97rmwxrRvcQoaNZwjwjPxJW87do3Lzk",
  "key17": "4yL7ApNunDWESM4a6oYU3CB86LicKd9jnjB4rKjQ4bzRH6sYKGeTcXiBcVwW4s7z2SmyFDfSUsTpZ9F3deaehDhS",
  "key18": "4Fw4PWzdcSypqZL4aMmDF5h4aPPPafnuBaRfUitkBMQ4zbLe8dyGnhUnLpADjvjFTymqR87HuKwJDEGC55gZdxPS",
  "key19": "4hrTDd1oBoebZ3HmNxoQgEPNZrNrfWgEjobRBQFyWhr8po1MQnqpzCmQ7urXxw6Sf4SMUqAc4f8cLNBvwCtqdMNp",
  "key20": "2DGFo7fHtXbv39cDsHPcgdYfi2iSfYFHsz4R8WKZBJvwSEabHpv2ZTjDycDZCcZc7vqU63xxg6QaQH47etLD88ZE",
  "key21": "2XppExDbX3M7WSC8bomiMpouTCpZbDYKDCEKYown1wDNmz5mL1tm96Bojk3NcHVoqXNJNrXaokf3oohg4X9hEpDs",
  "key22": "4xTGHoNYHh1f7CcV8dHRSFSZAT6TdfqwALkmm7cQ2ThMjUv2fvvNMscAfnzSKmaAgaUVAFYvMQpC9xMwZ8Qpp4Er",
  "key23": "4eDyFPeVdNEhbthuKZfLiKvi3iDBiRBNWmDXbN6uq5DW5jG6TNME5yzT5nGvBX566p6KPzmgZaftE1UYNDGAvToo",
  "key24": "5MwzMQmUMvzxzydyuTsMjpaMEoDuv8cVwmEbfh14CLy9VQWxKu4pFcwYE2Uz5qdqe1Dtr6Xzc8r1V5LZcrGuhkdr",
  "key25": "4x8SFojbPyoaEWDnznc59NEsrHJMSbRF4gUBSvMw6hVfJF3CPmDRmG9xttnqCdnLrAKF3x2vN9Wg2KGQvvvGWLJf",
  "key26": "3zwDtE4gRfz5fAwaRoscS5Eor1WEPeoCaK43XGdk5fBNwo4FeZyXJsVRi9HJ9oRaVPYWt7WXhZ4GMN2YmsnPVU43",
  "key27": "4VVdBEj83xvDijqTwDRoZiFAJQye22HerMrCa4KR9fNvEuzZeV5Dv3RiJWReWN4AchtTJfZYEKbM9vGKVtLohQe",
  "key28": "pgNDU4Uedqd4zLTGcDDYMx9F8nwoqu2XS7sptRPbT92sBuTysbTqVEcEFFrDkcCDXVWzQ57vXo58e3Uo1hL2t9F",
  "key29": "5u2ZMtriPqwJdvTvCyTbCsabq1D29f8iUq2Zxcvvf2Zy2FW2hLMXUU2PQhQefH9UsBvVqJLTvbF8okruJq1ejjkN",
  "key30": "5Gw3EsHoy7rX1M9B4ezqNGSBvBZyZ1oHY7ySmvrWpGgakK89VST2abSHm7ZJZivHXsGBFBePG46exYgPkEp2KAkN",
  "key31": "3Lwd3KdtLTRrc6SAtp5HZuyEzzfWG6JK4iWA5geN5PqZgURrvLCUehgpw7dWx6xnQUVKhVdJ7Q3Loo2CmEf72qZa",
  "key32": "4J6LD74eHxuCjy6Bsa3mivhS7wJXF6WyMU9vQmPJc2njtpniWnJLn4JpA5oYX1AE3TW6Za98JLiKMAnxjBCEEBbD",
  "key33": "59of4aPajuEg5mL8ZgQHLN1pze7SKmyu57Zc9jYCLg26MCtj7EXsH7zYEwALu2ZQiXdhzD9hET7PkKcmNkGVR4jz",
  "key34": "c6c4VvJjPZKih7wRwftj2VnCuHvartBohcwttRx9yu7E7fQeuj91637LGn5DXQ5E7AHeAAifDoBVfkg5RfrW9PF",
  "key35": "4CVRJzDEyPQDb5yuzzZ38dNCsRU7dGpNs4cd1vz5Z3aMjMSQ19KwYCT8r9uWVPA2gjaqTMYoZjz4nsE6aM8tJFHJ",
  "key36": "W47fFg31zyRZ2ebzSEyi1jWGMFeWXpynNffmzsnotuhCzPgibNrLDXscReJt5v3DCTsCM22WviRZpQMLhfuisTv",
  "key37": "5YB7nRm8zuSHKDtVmtAiWWHWyXm3S3eP9WGYx8UVBPs6RpqwdBpH3rE4XxkjiRxTRkdQYj8DarJAk4r5WPoYUtVA",
  "key38": "jH16vgaFzAtNkWhqwRyHuTGVXrbxqvt1YqXaCVYi55nUZi7usBq7Xj7v2XuF4GPRictRBtAaTy8rNgzZMJv2CZN",
  "key39": "35rTmcu3Bep8U3xbf3pzDmsG7otbRTZFhihZeTArWG5Y2RoueNk3A1mr4BKYs7FgEevK6CJtbxsdRbzFfK5Uy4ig",
  "key40": "5W8ApTQuEZiq5815dbnzgWG3EjP9MLk1rBcNjhbwwE1GTeYzb4a9JdPBPuz3Qe6CQkkxHb7Nib96bBtShjdNBbGQ"
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
