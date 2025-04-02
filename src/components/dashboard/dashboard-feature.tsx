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
    "48MqUSSCrdKb2DnVdrBgf5ucMPxYp61ZgBGCJzAL6oN3TDxDY3vSZmTKmRKiyR5t4pwo6oT3Dpnyu9hriVFZqu9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r6QErfmoGXGBNaXvK7Tf77hKxMtHym2qvAHuX1ZtJsbT99rKoj59NdcoX7qJpqbafkBdKZtDHo1qgB3kQWJs42X",
  "key1": "4TN2LYDYdk8EG4P1aXGXmdFuRQRyGW7iXQmPxMGwkXbVKSAaHQ86Y3BJEPbcD1JfroDoBEKU9U6zfCt1P9tbfPte",
  "key2": "2B6XjmJfhsiYz6X3HNPd6es6vCbgRTRVkfiS4JknwJbBpR68dxQft3jEZidfyPCexaHpfLeaMK952LJoUh5ythAW",
  "key3": "38PFPpkR5MuvmSBH72hmoygcZYquUfmTEhmV2Veg6YRFLmaQMW8Dhnfi1PH13DHEreuzF8nLVioYyHK23MxoGve8",
  "key4": "4fajjzgZ2ufBQAW2NowsWHZXMb6iChMM4Us9DqG8z2sR58dY73ZafCTvknExogTBEjXvsVkniFhpAyUfak7VwygR",
  "key5": "47LDqHaEzbRp1xfYvcDprdGaNK42Kmmcm2w1QKGPBEuZuJ3AZRAF9fV1gnHtgwXyTat2uJqNtgeUSKeHJvccXQTt",
  "key6": "3vN82v85pzHZUzfy9Br8XUTba1BGJTHEE8VgBUaxYK86ozrvmVYH7qdgjfZww7ouvdS8uVZkQLVKL1dhgGvLqFpY",
  "key7": "657UvpCTdqVmmfQy15XBhiCWy4xKdDv1GMmHAvQuc2Ued8PnUyJJTZFimixH7q1CkU9VWVBGK6ZS2evrnJT5SQqE",
  "key8": "2goHWXDFfESDiiRijqseZGmqcWPep8RQ24gbt5qeUe4rvVP1rGcdHW2MLyRYJ9uQSN4GHPULKYbAkL6gjF6s4F9i",
  "key9": "4fuvui7xtd9cFyxA8mdFHLYUMs8g2RAmf7uLE9sspkeTbDqajPoYfUbuskov6j9n9YpcnX3yv4xqEXrB7fm5gN6Z",
  "key10": "YKpfkGc3yCab97HdBDVocsnd1vkdK7AdGGaqUWK4TGoBRmqnr8KVZ2aZMoGAaMEWb4scWK9GXYcS3DzLwJfAorf",
  "key11": "5sBHy7WVzSX4xTqwVRSyreHAA1QkiYVZ74WjD2CjXofBhzttkYFS9DVshcdNwUHZiPa7ZYPq1EKuQEnPG3fEHt7J",
  "key12": "49kSCv2fYWqg9Dh8pyTQkkDrYTw6ikaqqQ4unPDNkJJ7qziYVWSr4EY1UkAzjquzrHK17e52JB8YSQVK6RBeKBKR",
  "key13": "4PKPPmMcFy59m5s5yyuiAT59bW4zixNSzqG1gsAbkoPh1NfeW1La8qDcLHaEGV79W74Wc8usX6HvnMn7Q6NzsgrX",
  "key14": "X4Lr5FrBcY1yDFf24BoE1ZLqjWT62MT5tHVLiH8x5VfsXK9n7SeGNUQ1mzGWvoYuyuDiwFh8uRJqLwxcRX2gsTx",
  "key15": "2YLvqoszGN7ZQwg2UVKBkQoaFpvFUCA74aH6GhH6Qx7fPg86PfbB18QQXN9RUzz9xuC3JwE26V9y9uu8BdWEqB7z",
  "key16": "5H9FsK2ZotihSRaZ2G8Bm2D1yBh7tKJdHXGE5osef68WcqJELmtpM9hbKugoAds68Zv73fRfMBtdjW12PPWZi5Er",
  "key17": "2czGXMkYCUPdPzMA5r4kFxRPhwYzgokhngy3whGfcUazTFYvEbi2rmabQtD4etNVpJGesXNdRH72gLzq5skNY3ud",
  "key18": "56BXRqMsYN3U7Ae2DUhoCZh2W5gi3kYtb5MkyQXRz46i8w5aeFdgjNRVDhiqzVoTBPD7QAHnRLfn8zsy3PKeBKdp",
  "key19": "2TBms3fQJ3m9E9J2D6BiSF9ZEiWepMmswTVbc5hMiBNt87kMxyHAhn1bbcbfSN1cJ2vrWMD5ZdUxKvoSk43uiuKL",
  "key20": "2Vw7HJT3G8VgRMF1MFzMqCNDbeRTCqRUo2b7C93SfdYnTxbaELvCDjhb9hREC9ZpNnQFc66yUMEQxRZmoHU5W23V",
  "key21": "4WTachckRFw3QS7jSuYn6qZAbyALJMZPPs23A7ckuJSzna6cVZBvSWjvJhKSohYVuR5tsxK8BpywtXhwPsbwNPrM",
  "key22": "5f6r4LNuZnvW8VAodPPUxGuASQM4HH2Gqpuk1MEyDkX3X3HRHsC7sbDyQiZE6JNuWjsV2H3oZdcWCuPgERLDxgcg",
  "key23": "8R71zXcXizHC9sqCgbMyQJZScWZcbX98LBgYoFMTk16GEAs7VTh82WtXHD1RJ54sQQSPtwhytR7j1Q4stfzDrMP",
  "key24": "nRkQB6ffngWSn21PGJsnidWYeX3bt9MUZydEtcPfcfzAm1JE5ERmSTBXc1hXLiFxCr6mHSPejfMVkw8G1QPM8Qw",
  "key25": "cPWZ1k23MuhvRKKoNupafkNokN8h1xiV9cCCdrG36QUx96qUwYxwDDqJLaXMpivjidaT5SX58ytgcPoTFvQofgV",
  "key26": "64DWzSxLNaJ52KY9NxsQoxTFswGBMGphMEd4U94UiAXFcTWCJq84SY2w2i5uGhWigK6bEFkFBf1xUEcqF6waiAVU",
  "key27": "4E9UuAGrcTprtrgCftwDgxHcWqyDhdWSa78h3RXWUXTV8JK3o74fRwbQ5tJjo7joxBcQye3HsSzttt7qP4B8ZTov",
  "key28": "4nrP6CbYL1ymRv1DH5HUgaru6TJE7jWDSMZhkUdffu4BVDkLGz8K7xegbANWe2JvTe73EG5JzdFTKnniSUEGuacy",
  "key29": "4xetZejiAXUFhv2zR7rigsmSWuoSJZ36RGm1uEEbo97rdrG3EMdCQuq7uAg8HTfcpWpEqVHTUXph4tv4GJTsQsHa",
  "key30": "4QBx5j7JiG7de6JWdNMtMrfXZ4wew2YhK6obCNXJdxHHJaJHqB82BanA9AFmMKGcLmorqLwBK1HWkyCVoiNPfYtQ",
  "key31": "2wX7PMrewvm1w88ozzQPrV2T3N81HMZp2Hu7PNTpWJ9pUWRNWY1yVAZcu2ceurDETE9s5XuxyppT3DMif9zZWRvK",
  "key32": "4opfTxVWQrf3FC4uYfW8GVQCWkb6sHygVmwVsGGiJ6d9g1GY4rzxDYVYMmvGwkUCNd7vWUThyQKt9HRKVG9wjo96",
  "key33": "23BbSpNkrGoKRb4jffi22xtdqqirU1EQcW5hr3C3za73tJ8dwmwn6CJXA9qExAaec8NAXhUs8vjXDUxJYxUxDGTc"
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
