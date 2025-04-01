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
    "2uTxvpYVS2P83jkmCPsSaW1aWgTp2na7vQoMQ4ZyzaZpNBD6GNLkRdzFvVPhuu4jBrzKH3uSZiR3652DjjUfbXLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ivL9n8XajBRHR8neNPosCf9cFTgG8fuWgRTkEETaP3qpUFXrcbtBDNvyGgAgxSvJN4un8SFD533oET8Rm6C8wCt",
  "key1": "4EUyyQy47CZADHEF9hS3U9amaPuEhZy3ietZVP9gAUvQYKFWoveHz2Duwc6L3RMFbdtsJGoiPoe5aDwrvG9bTUAV",
  "key2": "4hGzxaE5WNuP5Da4sBwiL4FiLPcNKspLicQh2hb5VRShzgKfJPcWAtzxvBZEdyTvfHCxE2Q7Djv9umkEDuhct19M",
  "key3": "2fx8Xe4ae4yJk8wjohA94hbXvqTA6E77qYbkrxdwdewoxKcgybvvbd7Y9e8v9ox26SDhLVMRuWTNdXnjUj4aqEs2",
  "key4": "5fL6As424jLkqsAWZ2zsM3kTnWZ3USiv8raVpqUmtZhqszyPM1gpMeZhNa6GsXMGvHVZCLq4Tuy8RBRurX6PNE4q",
  "key5": "34pSEkJtRBi32RYthUwV388UE6BBEZwkq19HhnjWHJVj2sX3pdxiTPxpURXc38Jm8MsMASf3vNeqjy8exciPsB6P",
  "key6": "2zmusSDYkREpFid55eWqEdQdEw6ZQBnjCTuK56JVPhFBsv449BuqGSe9mFk7rFtC7yZ9jwFz6c5DS5fAxBdKLsP",
  "key7": "3v6zfoJxDUcTzzYHdSA2KHhMdZTdEFNStH4mSTinRq3dMhuErVKxyz4ecTy5CmsE3h5tdrQLD7SBfogbHsSQ3xns",
  "key8": "2dyFqCfZ7JRwaY1d5XsKRHtGu5u8nj72DhjdtHTgBYYogiiwJWMuq4QaQ8PrfbDT4j1JEGvrvhvD6K3vMuwGqqmT",
  "key9": "3D9LrAmS8RKvSwyMeS1J1L1sHrhrSBzoWw51ezk3qZZPQXUawJLRE2GzEApoHsumqzhV8VZABYtMUJ2QT5aYfFyy",
  "key10": "23rNzL6twocDENbQKmv3GeSu3Pj4YgZb89T1V9xqGsMSSiGo8v1uRSdx4p8Qdck8kiRLmaVGxCrYW1y8sfShYeWp",
  "key11": "3JTQPavA9UnXr846PstGxJeBVDpSCj9kLtM3dQL9hV1aJbHUbeNNkCBkttBhBo51Lz2xFNNCqfzQ8f3aaiV7CEgq",
  "key12": "2V6uUd4TH3yuiVJPHY5wFuyzc9Jc9CDdVdgXFikv2tpkWTz42GPvHaLkQ4VkrPmcfNqR8HSp5fn7yrfYMjwkTiRu",
  "key13": "49hLSuZEGntT1SMtfqs2Q6rYw2QhHqpdEb2HzFafKH72wFe2abkRGU4KQqvwQ4dtCwJAawQ4vm4i4kGMUkjzudgR",
  "key14": "32sC167ASvYXfzJEGEWgBiRKp4B1bKzEANcA8oHvM2MV3kSoqxTX77UmUPSTmZnq6dvwtNVHAFTiTndzsiVfnvjw",
  "key15": "24LS9ZDvypvZaon7urpAALrZTUHNog7Doa8gS5NbQBjB4UD7tG2qyqf5meKjSnSu9uyagjJmxiXf3RngfzM7FPcy",
  "key16": "5eabYtxFsZupPvtp2J4QCV9HPztvV692DmioBPN6XPvR4gVGzvRTagMrVq6MwAPQJQbUXyL4ijKRmDWBtxCPb132",
  "key17": "4d8DHe25j2fusfpfNaMtsZ69oFkjQ3kZ6Ej4Vv2btohs2WLyBVqjcKVwAHumhQsggJNqGFmF9McdHyXCRuBdQEgf",
  "key18": "3HMJRjoVEBuZ91znTR6JBi7KCbFCmoLDfF3L4Kjp3p1VUq4Bq5SELZ1Uuin1RKi17NkW9iToLBmKdzbTjUcLuvf5",
  "key19": "sGtXwW1iiHDKN1wkYjFmGJRgKcmjkuZtUh3cY2iv9WgxNn7VyHoHi93mYwL2iobayw99d28MvdR7SuHt1cXvC8Q",
  "key20": "KH1iaph4MQkHWMStR1a1eKnZ3LjbbfArLUaVriXNNRVuyyMGTUkUE4PcYRZkUuwWikRCZrfpp2rkfeCZJh4iFZP",
  "key21": "5buNa7UHwjf5oCfc2aJR6SspQhpysNNjWNwhcu9rtNAG6ncu3QPNV3J3LKZbTVHsjeWxhtYcyWZ3uhYi3nHB2gUm",
  "key22": "3STR9yynYC3sGZC18YTFkuP8rCs7UsvyPXo1rkvDuCn45qLPRiRZkiDwMCRb2Y9zkbrziCbjjUU8Hq425eu7AKn3",
  "key23": "2sWNT6xyw3zS4EfJQXFV3oTgSvBKZGWxjgAJEyJdAHfAE1GSGmsPY6EPXohEgK8dW2ahaQq8AEf8uputAWZ9knqp",
  "key24": "5QfeG7EgzzU9mkLg2bv7gnERge4JPzmHvyJ1gtvr4FemteVPQuD7579GHz9tep8MwLeBXX4U6pPHNrLHeECyRVES",
  "key25": "3yuf6xfmu8SnNiTc2ynqbB7kj6YX8hzPWQqVrB6NaquDejZY5yrGsHghrWFgc4xa12H1Ds2HnZ5ZCeV8895QNFDS",
  "key26": "2AhWiqNvMLVgfgDAomwYCnDcDH6joKi3tWfREq3yXrs41nu5bhvN7fJRBefMEHUTv622pdk89axjeKNaB8WvSezC",
  "key27": "359tNo69zhVCsqAE2kUEZRZnmoyJESbKuTmQTcGD8bosD6jEw8cEcMwkRNGwAABpXhGwZ8kf7ba2X2FwePkYjGnD",
  "key28": "2kU3bsRxucEZfnWNxUozJ5q8dU6BZAr3k4an4LqqS8tUcU4zUF1S4gAYp7Z1WWEDg3mpzPMZv9maqG1kB12iDtYH",
  "key29": "398kHRsq7CHsfDatU7vFGM1cUoS5XszywWtT8LJHcBwCwm2uxifnDMRSzini7KQCH7H4W5tYbfe1jUqtqeom137z",
  "key30": "5aUwG24fQ5Fin88SZyXJEoYY4YaW53irW2T8QLknng1zTcfVXmabmUdRV8d7vUE6jXd52eynJhP638x9kn6TnJ57",
  "key31": "5zpQ5BYP8KnBy12PG7KpYFq1gE3sd5JTpy2LWpJ8ALo5xXqXz1JvMKf5FS7BUtqRaXz5WME1W3GghH1RhQFTJDB5",
  "key32": "y8CpK46spuZhzt4KpqkpWX1TUYMvJwVVAWD4w9Sz6TDmuqtpLVS8Y57oZUvgpKGnbtfPayE55Xpy9dDQwr35JyA",
  "key33": "365Heo87m7qRphiPWNiX2JszVaUchWXsgpSkNF627yDZMCzmP1yxTPj6ai6DmRCt3RyaGh1zdRSyUoNM1TFWdijh",
  "key34": "5agWExBqBwNfQeBxVgZ29pux1eRjp7GBQmRf5Cfd9D9zVzeeHMUT2AH53pRLVwQgJFxwkqpyQX3B8AJMTXNttG1c",
  "key35": "4uAB975ABPMyFo1KUggfnVS4yTCA3LocccsMnEDehubiVuikjFkoJshGGNQuQei24QuN9HFHaXFhvagivzFrERqo",
  "key36": "26Zr9V2PwrKjf3HZNgxY93SR7PDbQ6j5gCqkQoz5DMi7QCrntywFGsMQq1PbxUxaGYjDbKa3qz1njmfKWzze7J8E",
  "key37": "2gd8MyHcmJQfA9H5mLVhMw9TwkfcaMSXY5nVbHDjQeqGm2u9TPnkriJD15zgQkSmQfaSGamvtDSAAzhMVzj7tNo5",
  "key38": "ZE446iCwtPAwC73pUU6avfY24ZmkLrWrdSsbSeprdNbYrQPpGzmwfHbyw3qU3wiwk7tAhUFHTVox7U8D3yx7DXP",
  "key39": "3gWLyihtVbKwVv7QE4fRGboounUs7FSusQgjYGGmawaSwnKcRBrGHNoWeG36ZAN5w5yd139PrsxpPjhavEneDQkh",
  "key40": "9A1wxADfeeFpoXWb4KxtVUosog9LqReNjWmiYChaz8Uyb63WdH6nVtTvyfrZtRBjJRhh2SbGjKZqGMdaNmAWziU",
  "key41": "QvVwEos76V7cL9qLiovJukr7HbNn4LFQaxEAcUZeYPiWSKny5dVbAS7EWzLuG53xHsXJU14Lu3znGhPyHJWonHg",
  "key42": "m9LhLNMtVrWzsp2D694RQ8jGj6fkCpmjUvKeAZcXFdcuKyrwj7pGDQ93HU6fLPjdvRRun1UKK9Ybdo8cB7e91no",
  "key43": "25YN2vqHLyLS1qPYmQEQ2zUwx5xR3drJwf7awN3T7qqUuLbZUmzYhAV8weXckNsrQsTmKKd97Hodmk1b6YvAtTNd",
  "key44": "5yPsYzWjDpWR5e95iwXHoNRzkgJ6FSMx2vs9Ru9XV9txVd7PWyMF9E5773s2sY2Y25DJb6WEEbBwQXXcLq3yYpoJ"
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
