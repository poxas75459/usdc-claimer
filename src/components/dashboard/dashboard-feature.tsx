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
    "3Uc3FGyGvRF3CPTh38ALgVDB3KyZJeGafsr7oFAM3b6YrBojo2R4WpoQP4bjCeCkDVaCH13gaEsXXoMKmXH1LP6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zqTZrEsiCqcyjXZ1c73SBRVRgKjotHuhCXeNU4aj1fMqiVGF1toVyuDTmw3k6k2xRHTU9uGuak6eQU3QSqUdezX",
  "key1": "3JHzJKt11SzrQRvbqdfk4ML8soHnfWnthoLPh6bSCrK5HEaQMnbSciaPrELasYWsesEmWcPre1mVQFVpHmJijJt8",
  "key2": "QXGsrxkS6a9U58jDWnFRw3QJKkaiLKmsR8czJq2Tm6XqhkxKho1akz87e24gehHk46sxC2wU7GGGyg6DaCw34sK",
  "key3": "3NHzBnSrEHbCVtVuop1my5EADWCh1svi6u9SsBBLCtYVBuMF8qoA53izLmN8wZv14VFCN6QSq2CH6M3GYwp8vyyd",
  "key4": "27cPFCmtGvKEaoXJcRU6GMxnyB6eB3FbAoKftMdyXYeJSLNTCxaivUvLBW9sn82SxnRhVJRqp69gCaFeY7WTGkrN",
  "key5": "4Wpj5NSGhNLtmva5B9pTYXeJnCH3Ca87cVhYGK4x3J5FDUZYc4j7z7wsaapUB2Rfj4YLXCpaHvZuZGdsLHjjhKFV",
  "key6": "4FU3DHaPRMPtiK2sHqZkSMUZEgZFnyFkBu4LRFhy4b4rd8M5Md7BmdPDAdZBqnwmedfTCHYiqN2gF2enCbXQ7feq",
  "key7": "2kPQL2ZYKsr8JUVLdvNFCXDvM6dx5FQhe6nNQBEvBB7YPm5weJthadabfCmvpWBwKEGX28bRYCcyqw59dfj4Ld5s",
  "key8": "zmWNcwwDw1DtzKKnDNgt5jr4yfWeUycWR4dyh8rkj13DsmQ9YzfPy218JaonTxyVkjHXKR8iFqHAHwCVELaTc8P",
  "key9": "aURYbz9TvNZQF7XWNvYvUiCdQp3H9Ty6oyRZs5sJaEyfysEFMjyf6KjMsRcxPvTZEPnqHpEpWCTYEVdzuCwoLSs",
  "key10": "2baa5MqrCaRAYNgTtw7jBejNPx1Q7jraSJTyvHC8PSqNzN7C8B1RqaZ5uteuCrGmP7Au5HQ6RKnxC49EuJLVKRJM",
  "key11": "5cFVhcGXkZBf7dgZVWatCKchBw3Z9q2Ae5B4N3xNRTBqiptUxFbzJh3J8kqWGUcEXbjbUq5xUeeqNYH6wKKjKYps",
  "key12": "3ZTA76hTHj9P2o19vzU1fj4rH44qUGK8ZpgYFEWdrWB2Rh6LHYH3VN65gMvhbpL4PfCTFRUjP3opBknSDxhFcS3w",
  "key13": "8UiEUih2GzFDyjxYP32EcGhLJum7rVMPnS37z1uoNmSMsqFrWt1niPiunKtLkpaobwZrqacC46NYyEtsXMFoJgy",
  "key14": "42YDcRSzRq5aTYxLRvisTU1L24MuMfVWoGNsS7Fik8Y74J5wfRCkbPi11uE6qfoBPQqcBQoD1k3zLYdbMBBiCLqL",
  "key15": "4LeURHdHxY33a7aw5iPZ69226XMQHNrLXNyY4R6NLBsqnF4yteHf7dSPpdqcy4BGxNDSHN48cqpd3A3jupZi5fdZ",
  "key16": "X1jgrK4JxjwMR54t5NUyB5Azw1h4tuXv4VKAfTcVjskCHz1XyUmRT3Kj46oAJzCxGvHNbceKcZ2Xjk87mXsv7Hj",
  "key17": "5Z3puasuiqyz1bWZ1QJJPoSExekXTRUB8Hupi4bGyx3cEZZBCZ9GygHbSeXftQSJ8PfEy3c4DGEQvhj8wvHTxdR8",
  "key18": "4fs6teibWLqLZfhx2HXg7SMznpNEE7BagF3pqyb58Ue9y9HwzJ1TjZn1GPZnmc3Ug5bdrrcTXAragPcxwbrsFQiE",
  "key19": "3PV7tzHXyNyGjsjZN6Uc4ahFigBA7xGxS5QgMq32Fvbb1TJDLeLCtGBvq8A2QuJn5ejvd5uHv59ednCjDUyeGALV",
  "key20": "3WgaGEphiKQYrEboNBfDKNXmfVno6ZBD8gK4RhHYNP1DGKEi7vbrjF9DLSZfU6zem6wwAF9Yxf1cTgAx8CUqHnSf",
  "key21": "nj3tqMN5AnhWbeLtCVWTN71iHnVBh7cXm1AJvjK7ZKjTh7kZDx4F9o6okRq56LSVZDNzxJZd1McbycjymAdhktF",
  "key22": "58sNHe19nS4ggDBtpz5Nsm1RxsPdoqT1mGeZPejwsSWhrQshxndmszQPqek61ebMcQb2MTZVg4p1k4NQ2DdxU9Qu",
  "key23": "5SXPdFWUzXMTYdpqBJNhyfeD96tFYtvY89ipyhwa61S71HeeSJRUkMo6Ur3HeEyq9yV9F6rJx561CDWjghHEpG5T",
  "key24": "5cA8uqHziGSPDTwwVQikbgnwf8CDwRgUvTo3EwyM7NsjUjquNyZT9BrVyLCpioQQwH2h5DnH5aBsPyc8rb8j51jb",
  "key25": "5saNbuc2tyR7UdAfvpBL888N6GgbTEQMCmWvsXjMtSCBtm2N6Ha4cDpAmuHqRfmGnp6rp6LTFcodXX8FwkFLxf3w",
  "key26": "3TTVVjZcKUsJqUux3mdBHYuRi64wcX1rGp1c8NnTqAEqBGHMV4rpW3aMsG2opR9QuE3qVACxHCQvf4gEphrBofFN",
  "key27": "39gYeBusVd89DKnVafeWefuu7S1h2io11dE5D5mJdSPq6ypjAKrW8c7fxZDBsMKmeLbrerqPJf3cFsYirvk1kgsg",
  "key28": "2Lvxk62GbK9HY7zU3RyTr5CRVY9XaKhxGeWYnMepgFimsYpnQrw11raRN2oRA8KT47kvb4Df49ytZUaDo2euAVHw",
  "key29": "4ABipYWNiiURPimhweSsm5r2zfBgVNxYcYqsHPSjCWVKEAxHLDZ13i8Z1A6ZWKiyeSYeQ53g4r6Y2J3bZtWa7Mmj",
  "key30": "2BKM3TZMEnVJoCVyFwge3rFPqMVZqcXy9mpy6cnDkZL4ZH1zfChDAKvenfdYQY7pygF3xdUt7zAP7Sac8uhNtLY3",
  "key31": "5nqJKHPM9EDBji5X2hsqThwrWf86fWdn4du8ekPJHcUqxJ1SbC78fuFEJ2W9ZJoch6oBgnLoTDvFjdZYWX477N7T",
  "key32": "5GJbWLsamDBXYJECdJzTpu1TENgcSgfceHR9hKww5BQk3PYeGK67FTgt8GwmCyLmrLfJMr1Q3mFiRgSQLd3ouKY5",
  "key33": "2b5DYLnRz4xafM5QDUUzytv4WzrLLkXAmuAhQjcjtgmq3TNgszDGPSsZWiuLMQJjFszhTTXY8gGLXFqaGcRkWzkh",
  "key34": "3F8iRVi6L51dx791Pz1M9pPJB89fkkm1xg8uKxfNgwhUES6R2omQ16qST3d3xDNcCcK4j285gLXeddrnMF3ghmyH",
  "key35": "4GVQ8fJSqvyDycmSc6AQsorPXmcLGT9Aeo9DeYEjHRbAcRXwXZyRqFj36MP1Nqrs8CyjyAVrhnkqbZ9h74Tt7BZi",
  "key36": "2FjBQkZMaGEvs8SfjpF6wrnK41jSBkz5AMqaYPa1B495rrHwQPizzxF7KDe3z7csLzXv44AYVTjbX3izqefuSReJ",
  "key37": "4HdnyWGvrCZ8xrWV74tttQghbSWueH3N2uUudeMUL2q2e9mc3xrK1GhCtNYiMDdP8HAQF7TajK9QBdgTXUcAXVff",
  "key38": "59JiNNCNCdC235ERHpEEbMr4vabBHXMFx7Vizk4L3f4FRQRFzi75zuYsms4KWz9v23YKxF2pgSkbhMa5mWueQP39",
  "key39": "3LnRskZ58GJ75h2AvazenVuhknkePhYsxmg9ivrnvaDQpbfBxmSSfnQtFkskCbXUSazNitze7MgVgcPxpUwU16n5",
  "key40": "2nbYkcvSmciLNvxYsFZbcAAzLbcqfxEYcyKBboe2yzWZDyAywAteagWSwMCSGW3Mf1JE63m2CmxDAvd7KFycJCcz",
  "key41": "4uK8d9ZTxWFZj7rH18injPsiRkXsTsPBQRasTkCcNRT7VJXku519sJ9Rm8JA6aC976x4rm5WcBUAABv99fEhDvqF",
  "key42": "3rLauumtyVLGasYPeJ9SnfGHEE8CFsAHFaRoJKxyDBhcLJeJPC9DcVoaTdoxHjeTrYK2rGrsRtg9XT36qLFLbfmA",
  "key43": "4tAdXA9aXmZSCjea3EqibSY71MahYhpxveDBWicGWWqsJkxKWLmhe4YJ8a5vEoyBY8MWeWYJxwjEf2wmdc7WM92Q"
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
