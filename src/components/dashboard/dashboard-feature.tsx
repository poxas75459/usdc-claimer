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
    "4LNkVTs8dgdouCA7R16oYWVNZ8tJMcXBLLZnQLZ3TzprCC13R5Wwvx9mCgrJNHRS6EFJ2RvTT51cmmH2VsGTJ8YD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Po5nPtL2BzRQrX7huYS8EsY1yrJ1LnQCGW9adbQbkKnFwXLcqtwMjPJ4kZFXA7mrp5HndSiWLs87Gz7fhJVSWN2",
  "key1": "52Q5ViGLVu46Y3b6o4DxnMkgtyr8yvDjLroikgdtrztxVLYNW3b8gqPTJG5n28gx3WZTmQL1UYHCtqJdH4YMRs1c",
  "key2": "kEpRsRNdQH7s8vfqfyPGufQiMvSagfuDE53Li99Kc8HRaesHwCPdgAQnoQiKS8m8hdwwH8zVAZQwzDuUYRsVzpb",
  "key3": "3cEHiaU2rBGw2CjaTrpmDf4zkxBBJ37QpWGzdc5gpSXEsAf4QQPcZXvYc3CCMRfPhmMXmFSAefuRESMp3dawosXx",
  "key4": "2rSUNjEmCpmSnsCzPTCJDksASeitqMpn7RxzQiW7B5ek2Rg5CFsbAqMpyqZfMLTBGZHa3YwbLMVthye3WsgA9zbU",
  "key5": "v1mvmSCAKJJiVtRMvg8EmRsNpPuUmuA1dz7NeFR2yf5rdJ81TyFs2N8X4XdiBW1jg662YcRWKjHxg8eQtK5CKD1",
  "key6": "5Y8hPm6jdacMayvzH7jJ5iuXoUwpz7t18r4eYFrAebDQAQDaYej7y8zsx6u1Yz6HEHvL5VzK6NKcreNErjwTsa7r",
  "key7": "civupjRGo7WYY2bjKSSYYsudKq92JK7SKF4BiSuB8YdU88RQquWL2hPL3itP25vEin9wgHYYLbJCRGciWbYiXrf",
  "key8": "2r848Sphvzww17vnk7i3hppi1Q5G5WWaWChR3Sc6Dxt5Cc6ENdCr6rLVQ2VBhXmcvoiv3Tn4NGVioQH2ynEb2zPR",
  "key9": "i3LipsbLNzdXA2DUK9vkkhEsevW5DiTZer3xLfaVDmRXm8j98tU4PdWHV6H2diynyaZVGqpngorJHRuR3s275AB",
  "key10": "B1AYBPaLJsUbcm3dPAPB6ZNj58N8YHVrFDvPqY3AsNtn1qeeo2ENEHHZURP2nnVc94R5bGEhKAgQfdFgZrc6WYN",
  "key11": "3sR7UDrRZh5Pf6pQtSQbcvThgYnmnxHyEw8toaLLd3natwWUx86PqJNyD8xnERvWwrrLGV7PA7sFjbTMMntWgjz8",
  "key12": "2qrtiKmozM7dhBrLhVAa6Au94FngL8bypzZZpsHL2M2juvCkHpY4pTNFfPHjasE28fxZQGpoxrJoR4fs1dATcSc2",
  "key13": "5z6wYyqrHcBPY335DyY3Tqy3D6uV7Uss3J25cqsJEDYn4pc8qNGL82x4yqbT52JnigcgtDzNKXXwqJcJnRPcqDDx",
  "key14": "4KmMqMsZvcG2ZZTqQxckJ2N7gbeSA6s9hW2c6B1qUY8G6CN6hsMNkGVVgKdjBHG3HYimAUGEVCbEqJY1z7BHHr9f",
  "key15": "5BAyD56hMAFk7x65wB7N1B5EFpE3oZJGnTFnpUj1NvoaNkQe8onBxEPox5er9RjWn7FG9LEiAD3oH89T6fRLKT9L",
  "key16": "5J3tb6PEZHatX6LZJZ8YbaSTeR4AhNWSxNX7pLtYuQPAXF347kDC1BHY1rH7QJJvXLahwAHdmk4B8KueHarPQrpr",
  "key17": "4hPxAuEuPmetQi4uMzwe4fhZWnEYko1meyJuunKGchv3TZgD1FdxKEzNEb1u7Nu5ULZThqUovC2YFr7XQZFnfw7h",
  "key18": "56ax8fwkNoAgrztJVjtCZhStA6t8n11Fv4UorCTjpb7GiFPigmvdAPX4XPu5aRre9Dpesq4a1muL4Q4dHocMVrVr",
  "key19": "2QkoFZmqNkFapNMGbPK4GZVBUiWa8QJr1YP6tVfR8nJ6t8aetWdEvznwzm1Eyn8FZ8VGEGxjxHAGdCvJfPMkRn7y",
  "key20": "3bDfsJGtUUMLHrH3c1NtTRsXgySTZ3zKktQyMFcQ9xWKQSxCRbUtmALfpqRiDPGsn5Nrn2Si7RRxAyUcSGhCkzxb",
  "key21": "4quSt9UWtsrABiPApPJanx7Jo2AxxSKBAk2EzRUmjs7ufZc1SVnpAYzcGisAtqy4BcJws7Hcbv61YeT1Kgew5zvx",
  "key22": "52GY1zLhVjdJCyv6uBQuLA6UtEB5XavADaemWPKZvqJF9DtQhCM2M13tyPqEBZmdTiR5zvEULLUeeSeqBtEibr6X",
  "key23": "2va7RJRfhPPhT7WxZ4DaqczM6X9RDR7h4ZGZoh9mrSMQuJ58iRC4p59uTX1pPBkgPvjNr1dRY6mfXinVHiX8Df9g",
  "key24": "nTdX4G6GkhuSddo3PGgGBHcKpNnhFgQcZV9pFW7AcFm9jpgws3Mj8PzPM3624tS6Vgj1EW8RRFtVF6R4SX9UTDA",
  "key25": "48GcwxgpvuRxtJr2FMrtwnidXvmivfzetmLNmdgo33L5yJCV7MP838nCEgsa6EYu29KPdDPTwovS2HvktjgmHE4m",
  "key26": "4gZjQtktChf3BMNvsX4VgFaWRkcDnhppN8fHEe4CcSgSMWW4fWxS8xeVzWj4bVVAuzpA5B152et9DSrf1eUyks55",
  "key27": "24jpxUcoa9oh7W1xg6THEF5puZ8XrYo5xPWCSgvvVLoCuuoUqKmhdvmDGdJv7pAMgYZzDsHQAwLYEC1kRFQmcSBh",
  "key28": "2BrQq2MxH11sHTtfaYqARWeHPpWGQD9Knc5EQdJGHG8xqNMfp2poFKoZL7thnFU5Me2XHqAncXqM5yZDC5wEEkB4",
  "key29": "54TSejgsJmhj3yJpbFW6yhMJWXzbjjjrqodvyMiRF4ARpo6ZA12rEt1BidiCH7VnzxBMWZvQ1taBzeLYcw6foVSB",
  "key30": "55bSCaqvbrH1nUrY6kfJXsYc1SFJ8Ans3D32tWHfVAyVF4ZP5E5naHSjme7aC76C1Zv6dCNavNHAujwkLPYfuMji",
  "key31": "pTKEPrTYZJWS1AfgpGAKxheAEE2f9dB4hPX2P1ZWaDibPZpUHBzXrXSx3sHqUe7F9snGptWquNUFLtys9bPK8Bd",
  "key32": "4Sq4wnz2kTXgSfrHKVkQULuUbNG6NQUZMJjQuEhFKy2MkfqgyazvKLueVFMnWKYgWXaicp11SomPUDwSo3fgFf5j",
  "key33": "2vfGoYfiYEcHLuuTRS75uBXjWuBQEGq51SPoYuUnRQGvXn9aBEgC8kPWxarigtiPNhQNa7upDhPcCVwL9VUrrNzJ",
  "key34": "21DtwnH46MAwGaxCSoaKgFpXMFgswtpRiSXNJMCdBU8SAP4RnadjB6APpakpvZRoDcrcek7BJidVSvG97Qxernnh",
  "key35": "2Y8pfFWeS9fMpBcezr7yXEtZM89PQaw9JMQcrLeAd8bgrkzdcj4ihirDy52Kdx72FK76XnRFKrBTx6ZEQMZDyZHH",
  "key36": "6cfkYuVTZVs2TNhKFuzRna7GAht3uoBY83G6NbpV8fKJEGszL3tm5Siwfsc7r18LZ6bo9abScL927d6DFcMMnrq",
  "key37": "3WePf8i6Aa9U9sgaGhaGnVjpNLvKfo8pZV56ZBUzBYqiiwpDnVSs63wKJdHCtgMxHpR45pPEgs5AAB6rvGivoGXL",
  "key38": "cusJwHgU5jwZcYC5SUNdKq5G9oFfTSfq7ReHgayn4tutWPgpJsQ7M4XFrN1SUHT7rSZR3uRoeQhRVMrDFnHLrPB",
  "key39": "D4Pcna1g54r7DVJx5kZY6phLfnEoP5GU9TthFiYNwpj2sg7pMSti28gHV3CEeQuuRpgC1VKLBgfTL3pYz7asgBD",
  "key40": "44LVJjFTeRFbhxpBT2ZD4AKNMyfffNhharhi1Wxg1iRojuzKuUSCY4c7F1XHHwt3JsjS8NGTBe5cVUb6DgvuMsJy",
  "key41": "2DqKoqsqy8JT1SxbhMeaw2jHtuRp3UAhXwjy8Z4frxwXEzsrRF4d9C6XAnQuw1ZDK8bqURrRNDnjPB27tPgcnJQR",
  "key42": "6HsBFwaNAqkTXvammqjnPJzxbD6jewXFD72DRW7aS8Nxr6yAydcox4YgPSU9QB2n5Ek56XhPwpgBE5PPQkDzzCk",
  "key43": "5FMjuuQC5cC2XyuG4byxJtd7dL1nsYrmXerTYAsFRo9JyDMcnxhyBty7C9pR22xgKgVnt9hrozbdBWf91crBYUpK",
  "key44": "ShVcY12iLxUD6cbBgrmEf9AhPtrnFjwegq3TLF6EWAuBqSaGFDkh5bAzjKk23zk9GvMBb3oRXyAg5s6hpysp4Hr",
  "key45": "hG66Jrk7fh2igyyppm1dzEguTbtPNranCHvboS7LpS8dyXCHMdeAuyknb5RtkNbPyt2JxJkDTcpq6k6KXjzyMYm",
  "key46": "5T5sUJSLpVYEmkGNzYyPXjBwghKk76w5TEfG9W72mh7ycDvGSLsZojnBhygN3P5os8LTwCcvfMQB8o6JyhgPMgcQ",
  "key47": "9w6aZsV27UnBiY89wUZ23sw9kykeY2XMEXLBfSco6gJYMsGpbJRSeQUiGr4KkeLKys2ecrjPpAhumgi7fBSVG7g"
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
