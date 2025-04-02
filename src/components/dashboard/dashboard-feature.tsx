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
    "2qkwAYcXxsD6s5zuRZ3QVRZnYWRAWpDCj2xfHS2Umgh1UBikSLAnJPLagpvddhuaRyzjL4wKPVaVVQbTZohdnvqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MUHLZzFpK849oVtYJpZQCFbQzSdE2TdZdBeBc6XJPbxkrRceVRcy6PXiUebSJSdtoPHjuTf1drphaTZYkphmdsC",
  "key1": "2tJUgwAx1k4tKXjh8i9Fcy1zDcL2wfWYqWPoRSpwiRzHsjmzEmgdvzgRviBfwWNiibEJwMgGjUFmKbS7KpXbjKYP",
  "key2": "4zbRPQaXuHfSKwi9bskkNFGHJm5mDyrJJmcPqnehbDUWCoiSiBNw51cxju5Ep93FmxAnFLcEQyTCFQugeDAErZXi",
  "key3": "4k1Ticj8xHLphn2W2XTcjTwVuCGqenbtpc7EUtZ1d2wgX7ffeqdcLnh7RoJiQHaXidrCmyZPyFpHFdcvtEMA8Vfm",
  "key4": "4tRDMsSPvx1G3MVhaUVotnwWQuc1zcxSWrrtTMS4mkPs8jGrJF3zyUCTNbPgrP2PpTqPxBPsJoujZBUg76pPYU41",
  "key5": "2UyzWdZMC47hqQqmiWnxgUhNp93kHgUKWRPtqSGNx7BqR1vrHWkzQ8WCP5LGrEgdK68Cboy4y2SpVWnyz9cYuHtc",
  "key6": "PVi5cBvb8jdFEAqgSRTnp4xfDNLhwTeWCM8XHun2V2rc2NWwYVLrykhvPkJY4CsnFSkBurfYeLKC7MvmNtVPTEf",
  "key7": "2kTLRY5nysCzk7SubTSWjnMPZKL2SqJ8Q4YuEEKhNnxrGL16aW4NqKTfx49r4XbWmbBurn2QMpFVvstrb9VRwLrX",
  "key8": "3t54TdkmnpYLRztkvLMUCpdCdLqVetaVsZ8m9j9asTTaf1gfjyfpvsH39FfFbXC8dEmV7Rrp7nDHJpqDfGCTrZy3",
  "key9": "3uMVehoaENrZDNWPmQucy4159hX9WXRcAyzgyB1qCMB9rLzKsxQUsKFdtQZnZG2fiH9aToqWSeMf5p4gp2K5njQ4",
  "key10": "3JYqAcQNcoL9T6Avg6CyBR3wguguqYDwEBQGCh3uuwGdCMnt25qRTrobEV5zo3LQpJuHS2LnRsv6jEQJ9Z6ywVQA",
  "key11": "4Bs4QrnZPtAbkV9pc5qYiTjAd7riQi4vfKttvmqSS48RoXjdF7xFXE36JLeqcXr2mFEPQGCrukYSNytZ1qb2MchE",
  "key12": "2x83VHkU3QtWLiK8mydYEii7PibMQYNgLNkFg6EQDQWqqW7HWdFU6HupYNkeKgVd5i2mj7wSSakooudvPML1nLCd",
  "key13": "5NzUaVXPJ1emF9fZz78GZyFCXJP3bk6AGb7Ntev4HZ4KW7vkKrW8qVbXUPLcnvrQCWjK2icj1CKWBxhMKkZ1Be7i",
  "key14": "5XEiq1opsChydWQ2zqSKuoQFMcycSFVhVL9kcDhGczbWQHker3hDkcpnyf4HsyXspPwUTTAKvh6XoLC5zzAJr4ex",
  "key15": "2QZ8sqPbqrCtD72e4cU5ukNuNQTHBoomUFkWZ6advkR8Tn7azMseryVREVvPFpCj6a1fYXrR5n8WgUGRYVrU4hon",
  "key16": "5w8wMjMn9GHcSyHA1HnwQ49S74PChmEtcBDp6xqiAYrPU1utGFUketZgGkt9AxJj12nn7GgBHkRWap5teAg7JYKk",
  "key17": "4GTLN9jdAJ42PFadU7pWrL3FWXKrFyr8n7BLa6nqiaaNdgSFDoFL7p8bjEjoSf1qi2CeUoU9ZV88jWVg3H9mDVUa",
  "key18": "4Mf21RwXREVwmc18edpJiPabPfxqRkBEogSXGsjb9Uo6q47SqFnKyUYUbBpe19REo4W16iduXFBkFJ78s1Tyda5c",
  "key19": "4sm6JiZ6cQweaBKeys1rtFyKRUUrNqAEvCetA4ARJyvS4aQuhqRxum6anp4RMoJredWUcAfeHNS4HuzW9xkvh8SA",
  "key20": "353Bat8zmRNs13VVXuh8AvimkrFR53yDQ71gWxibuJ3VB5EHuLwJWH4nLpW3mxvXTJrryCj7Z9DWvSrhcxvcVJWn",
  "key21": "5MShJPPgFTKK8nKAzDvgqYEvLPciSazMFKbK6ghyaoXafTfLEGwufCpiyeTjQrxWAfFzS278kyYe9XhwqgdtRgp6",
  "key22": "xSToFXCyVTvERJWn9y9Reg1LSELMUQ1nJYm5JNtFQgXs3RxuRrH7ppg9y5Q8xdrPFauZGobiUoggxzNJPmCWCjo",
  "key23": "5HK577mpMFXgqbNjNA6jDEkEUpeK6D5gpj54ZTrwjGi68Ljtfz9n72TBakSzsi8eWhnZVhid4Mvm64fAKFpqt9zb",
  "key24": "4B8iL9rsE8uvXMN3grFcvZZpZGxhAnitnkRTiPLVyAkh4nMiDRv3XnS3da5vz4Q7x3QH1mDqnmbSURfYzQAVY7gR",
  "key25": "5EdPhGwJXpNwhXg7r2XUYXYQLJGZtmP2M9TkduUTnAp1p4vNda86yZ7MxzZLRUuAzwTsgNYynrTbV5h42qX1HfPW",
  "key26": "2z1LLwY9HZNJMsy6sZQvwuVbYMM78HSy49YgxVGjGtggvaxrCCgE6o59SY7i94pQauaZ3gHoRewzKKe8QthCLusY",
  "key27": "PwdRwqB8s7U1rrijFvguhJwv4fSo2qvT9D4xiL1SmNwkQv4qK4vSQv7APpw5rbqdnGbcAesjQQSdNnCxATLshZ2",
  "key28": "57wrxNkGNMcvjDSSctnbCDbYCEmo6nFBbkHDsPvmqEmzuPNeTWCBD4dL5q8NuEPDEtPPanryDRZEPEinoY4HH3tv",
  "key29": "Fyh2HMDh35ZYscKKEvYU6L3pso427mb3goQc5YwBBUN8Ecpb5rW4uWawrsfuvvdKe4Z3CCAqqRE6UWaLYah1buS",
  "key30": "57x5TsP2Z7jFWiC4LyLWkwxoCW6kz98cciAovF66AAwm5oLo7AZZ9LsgmBHvZ18dSP3BMZYRMXBrub7eTTmjEo7f",
  "key31": "8cR3VB6wmPd1Ah7ZpS4gdK4uFZG51onSX9XzhyDSzr1ZRUHYP1evQypWtcy86Gt2F9SSa77TdhuoWFdkjBTReTk",
  "key32": "4ZZdnwN7je78ErqbhC3Q1z1tUzwB5RX6f9dXhxoatKXeJDEXrLbVH18tYoBETFzd1SPz6giiNeYi78Wv47s95Ea7",
  "key33": "updZicX7NoyQ3sTyqg7eQU9yM2dH9wxoB5kH3TojoMVAkBkpJeWSBVz2BGx5QkKZK4xV7EpNNVjeA8kSynGCnRT",
  "key34": "orSU11VjuP4DSbsj4C3xeBjuHdtphrXZkU8do1MbNfBW7Adqk71iVGist71Ubq8gDX4zY7LXY9AsMiMsBjxEhWY",
  "key35": "2bw1t6am6jB1Bp2e7J7hfLMgjdUbK4HZdf2wRafckMF8MEfvGGJNLVvriN1c8Uo8pYpWdrcd7qQyw2D23eGtyi5B",
  "key36": "3mXrYNmMuwTQqGvNWpXB55uMz5bTLS2ukpeAdNcLvgFqF7vC75B8XcWA5dfW8msB23boQriV2R7LrEYFE3tNQ5FR"
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
