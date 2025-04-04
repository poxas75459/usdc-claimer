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
    "3yVerpeZjY13mT2YVV3fNPSJacrUYZRnkoT6CYEdXos7uJEnVDQVYdansBcvsTZRun1ZngqYk3RAP8x2SubVNGSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oLZ4urFXgfqCvSoWdRv1xeaTJmJKD3up8Syyrq8yrukrZZGDd953iRu7Vw9Lj4Hw2shzqffLQLAaMDbMz8gpqMH",
  "key1": "2UrbQTd5a4vAq4vnt77dwbh9ZjE9EJi1obLFgmYqKeM4qRd93EYfLverf3x3Ap5Dd173jhM13oVDBf9DZ6pgp81s",
  "key2": "4EaumEkbfApACuY4W95mEfQLhwmVEBUXYZkqFyvuQCmicqnUD8M4JHwgpfmqhV4ZTTMifcrBmW8r8QkyNWJU91pE",
  "key3": "mxK1BSBrWJZKqmQ8UkdC26rTvMB6yxi4devRmWbPhfQk6GvaRpWCZPk9PMzXH47UANLrXf4ySeeN3Qh3AujhkXB",
  "key4": "3g1ah7tDrRW63ZNcxDUrSDGVVHkFMA7mvG3vnWRUqVdYk2Y1pKFQo6HDLudjkSgfcqqip8DWbKdftAvmYRgfotr1",
  "key5": "2LS15NtoAH6UQVxbYM8wetGTsqY6sTSKd6FWx5DeCR3UzkD2BVidWhzcjiqsUoddUhR1gp2hZrC8FBPoHbi9DWxX",
  "key6": "kEZ5D3hqsxBpJBukCfeSStKq3wLoVWeJ98HJUTryfT6yBqoKVvKnrt2zoXnotnPmNwUqTxQC4u77U1CSsXmXMMm",
  "key7": "1MrWwXXWmmRAgk72p1aBHhYcj27ZW8b1PisnZrbmYDyNfLyVnV5zcuBCkrGb4yi5GSqVaXAXFEm3BDYq7gGDKSW",
  "key8": "2UFH85ob3eFrRd6qW638TnSB3LKZQJFzA1eCzsArnDH6oGmRzq2rionhvfHs3n7XumtwUWmrfEXTMpJuW7ENSBZz",
  "key9": "dJ8NxwuRyV6Xy8GbTGsC7WPtNNUfPBGZD5uTfDXRbpkSeo3gJcdvFZ6GM39AyXKJbt2ptPgS7FHUS5kgBwn9s6v",
  "key10": "ZgMjbn8jcMN7tvHbx6YF2AQiW46J3LY3zxaCpYFZEi4tGKAe4pvDL3X1TREzHfUMVEHbfDd7TkDzhx8rrqLp2k8",
  "key11": "3SEuwgcmRAZcSAwUpqDEcRPZEQKNBptQVRouzknH3Jc48Pfp5N4pgUZfBJSkZhCXrtdj5yV4TGX1pKePnxKTNNux",
  "key12": "51zdvZs1ZXFCom1AvW4DTj4zfda6fK8kmRwCWV81TpaNpBa1Rwck3hoFB7c12gXWJSd1LUXfj28Cmp7jwVf1hYTt",
  "key13": "4MCYTp6z9ouf6fgYFUf5vzmwSStNQeLKHSC2ddYfdK9CpS3QvJEjVn1NvxL73aU1CthVNdJ1x83TmovisZUiRENJ",
  "key14": "2vEqhExKfAM5WvupzR6niqfDqcSGMpCwy81VCoXwatcTZsszdNpUCfpEmd4Y3mWj8hN29kFQQGrccKssDY65SHL5",
  "key15": "2ASbpz4wL8ciBnHQ9vN8DJoBkCcDmLPrB3EzQSp7RcMKqMZQxBhQqaJF18L3vG3faMe3zcAx2hzZigxKd1oReAuy",
  "key16": "3dfRXmcADrHJBLGkQXif3N3vKuiWaecz5UEqrY9nbuLb9oJhCQ8j1QTxG8UYu36sonCzbxqLBsGR65oY2gucurUj",
  "key17": "2EMENhJZjGcpDpRTX738Q2tbEHCA3sJN6PZ6CqpNvPUf8Lkn7Gf9PrkQVh67hT3iv7g5qcV3dLtnunWnDjL92i7H",
  "key18": "oMnUvCPqNaiURJRnVHL3poWTyykHt3hYnEQ3bvwDGhaYxmuGTMrz9TCTRJqSf5GAHCayHhmv5LomgGi1Lz4SyAh",
  "key19": "K9cmCEMtZkoLGuoFkLGjxGsV2iGb6MVP1rJjTCjYLJ9WgsVpdbGH5hujmj9d3FYzdjbnoG6wqB1tK9dd1h5zLAh",
  "key20": "33KVXvAZn4bmoWv7WVcNGogujShABU5At6MFSBjk8xyER3z4iEoQT5tv4t13gws1tMUnAwzoeb7gFQF9U9wMzU4z",
  "key21": "4zACfTp8Ro3vED2eBFbbGJJZFwcC2rtDJsM1VjKhtBL3e72njjbvwoXjhepti5awaP1WuvuJ7iETXm3iN81DXcmY",
  "key22": "45K2CJonHmiGWBBGrkprrXGqyfF9qW8zKYGewdGSr7FrUWYo4fgzSQrcdd3dBHyYnfhDjTaBEVYRkjNbsDMcV4cA",
  "key23": "2Vp6benVy1KkPmqWRBBfLVKiaryhurBXT5dD2jYVS2exESarRTjaS9xJTzdAw5vzk8HTEy6NJuzQ5Tc9v2kE6VJM",
  "key24": "QjBn3ERbf8rpKfqubebwiK5VukmfDfcPxgzVNKtkZHZ8539cg2vY68uFLK13RRGLkVaaKETYa72cHxMC7qYe3DF",
  "key25": "61UmSgGPNuPzRrmCcxoAsXxwy38UBj3WX6ES9k9cGodbMfNHFqnC6dfUkT6fEEyLBWht8UNSX4YX65yq8N6QZfS",
  "key26": "Kye365EqNZWu6fXVT2fXnZYnzPaBH8sPWzAGJBGeBTe5kqF687xSzYGix94tPbkBQpyjtiy6Wbh82qUCvgppu9P",
  "key27": "4hZXzBVci6eChNdHegbH7tm7NeBcKN7PvvHHoLkJjmfAPMcHfQm9zDUZYu9e9CxMM9naxm9sGq4sJ6uJJbnu1uRV",
  "key28": "2aZ3NZuH7JsrfkUCf6fLn1XS2VgQMjenmZN5VEMhBs5nYdrZ2uYC2U4wWQLb5r22ABQCpR7XjjK9e3pUiemabmYE",
  "key29": "2mLcdtTiGJ4EkcszuHwRgWRuiV2JfxBhSBGVd8QBV9M4wnW48y7i5P5VYuaLv6io55fgvU4qc3W4pRKPnsm7m61x",
  "key30": "jDnuSwbmsMQzFTreM1WtWVABPfptM8x61BAQZxTTxRcYo5A8fGJU15CC6CAYMr8AcVShY4bsVMxcYM359DZtcf2",
  "key31": "be8ab6YMAm7R74Ag5WNW7vCdzBNVSt29tq7dTHY86wDWkaGD5KMjfKYv2JmKkSzTRheLG2LkvtkxurRcZuPyHMn",
  "key32": "ehVwkyyu58dKo9VsN9PVvjJMy1umgNp93bWMwJEwzkrDahbJ8tuW91vK1mfKW1C1pSf15iX5KBiSjUvQkEMSQzh",
  "key33": "BZ5MooFeuFF3idYsgRMXQySQLUeAio64doPPdCsgGnsmPobEZGEFXZLjucmcRvBSUMd4BoCC4QKW3vHZSVNKWGt",
  "key34": "59r2pwGZ9KirUnvgxGJPU3wuSr7LWP3T4gZ9d5EhfcShCqfNh2mhPYtSi5qWkFi2Hj8uaKoWriyeFbRmHPQeM2pX"
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
