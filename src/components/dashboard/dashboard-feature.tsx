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
    "3GsDodJsEeCpxJVzhZwdTuqVH2YhPbF3rtfPughEZ2RZkWtpDsGtSYDoChJXTJWMTTfb4pRqY9ixo5jFkoKuoZJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VecCSyTjXxcxP7N8EsYECYp4jf4Y2iMaYr9BYnXdfMuKEtwdFUcfAojC6aUt1iLmUNf3JH6hZmf1A3krtpu6vSa",
  "key1": "42gnEezKE2muyutNUUhWkdAZ4EYsTJSRRg1vbREjKL6HDQ3KhxUZ84WJrdpKPD3KFLZaG3YJkofifP3tneTpNKBz",
  "key2": "43NrYw3zsKeffGDCX1hkDPDS4FU4g4kascqRScryVRsL4gp15pMhptameANWNF9tM4kkViC7ccS3zEhUcd4yRrra",
  "key3": "5fc1zyVrAqMeqFs8tFByKjuKPL2UJkDFsxoohuHnUY6ygZSZ4QrkUqkULdZTpXy4tziRqRfYZpeNpPTU12NE3wwb",
  "key4": "3PHhtVf9TqmvL9XyZ2hfEiFXGZFcqqeamxaNZJvBhMDrBUyu5ACa1Y5AGC3CPoHhUhZA5P4tdpFiVoXy3RXBGBTH",
  "key5": "4G2zHEKNCtQAjfWVTDCPmSDmXSBy3N8PWRh9QqfRVVLfg6zko7Q7q77SJMVGShycyYroJ6ixQDg6y8DftAdA1k8c",
  "key6": "357MLnAZk69asdJRCcdim3e6Pw9WSkMfPSbkeuEhhokJXNaydKwXKPvxzxgpbSRWFLqHjvHgHb8KcrXhDZr4dcNa",
  "key7": "3MDc13a9LVWpJayj59tNVeJaCFiJHGbZsG647iKzPt3kmBuBwNN8MAiLdhvwp5s477cisJWKH2Xhf9BfMm18GLRw",
  "key8": "2hDXizuxu5CteJNN4EYK111vWHMC5D5mKBVFtx4F2tztEGn1VbHUpuYRCB1rX5dzXuJd2ePaVP8MH8UGSQAzFGq9",
  "key9": "4DovUFKx5kFNfmNxd8BJxiQUrkXpGZRvCcLDPv6WAeSv1xiDcbmLbt6YiB35Z39pAzPyVvks5PPc4aktXpzKAgXF",
  "key10": "3xRhyYdmhfg2adt9vTU6t5VVjPJmExcRJH4qVvn2N1XNV4mFW7q9pWFpbEMaDApdSeSU5eHvWpHBgoBjtw4UiFLB",
  "key11": "3hLCbB6qLsxUVVQxPCqQJApJXSQWyjqQV6FKRu2Uqbu67qmDE72KKKye35vYGRGK1bhRGjimhsMWRmJ76n9yupTb",
  "key12": "2kCgf97TwQNCk7Ky4LUqubcyS39JPspU6sLqMZ1GfLgqJprxb1PTUsmWM8xL2y1kDKDV2hLoRpFqAmWt82uqm4Af",
  "key13": "4ijJcccqmu4D2EMhhRutFQXQHfpk2YjUe1J6fH9jie1DpZBLLE423Ft2ia4AnhaGcNcvYQUkq5oPGpEuymRnP4SF",
  "key14": "5EUZhuMqeKLhN571Q1WYioCvZtGtDMSfrbkzaWTV95RtLkmMhZwSFakB1nRCNdq9hrd1g5AmzwtMYCFNeP2DvsK2",
  "key15": "4e5qrXom32LRzYYRrqLBV6AgpQNHHPciebB9To63kniJrQQKUR7kuMjxb4QZBo9M8mDaPi6nRi2kPfqrATts9s3V",
  "key16": "2CzqhEYtCxgPR8CXBcbThuon5wnZeSd55wcWFDq1UB3UHK36KntxcbZAH9zuyBRX4RVkXWzHjkjeq2aBoMvT5QiB",
  "key17": "4C3iBZfN4uzReSJJgMSCBkBzDSHsXq4bVtNFPyHrzQVZohqMKacxxWEVWmynrtusB1HDzpsPk3yLePFMYjo9zdtb",
  "key18": "3XbMx6wHZEg1n9et6xgbhC8mVX8MnoKr5iZbW5ARrL58Rk85tFh26qxybZ4C9TxMyMNyJPGHAfCdpc5KSuqHAkHb",
  "key19": "4KtWjvbUvYffHbiJCJnrVoKwbBipjC7cnUHMwKWbmLGAvKbWEd3JqqfWezipHzSHqfyZnWh1yGgMENfhxA5CxL3V",
  "key20": "4tq6yGZNjCbVBxkGbr9jXFHHMX5V9H8QEam7W8WeH7zEP3mW7CXzN7ngbGBiFGceGB1S4z3H8L5kq693HE8CZCoG",
  "key21": "41yyhDpRxhH31pLW5KmYQtz2A5RsKdcGdqhYT222XGKf3SyKrw9pcZYXjyN4kYcTZj5mGF2TPpnoereo5QGZahbj",
  "key22": "2zaTJvKiTPUEVT8MabVDzP5gSxSi4yUqcofHA9vhDjbZ5bTrwr2U72WT6bFYf6Hwvu9dyynaXHUcBphgZFeXBHg",
  "key23": "eg36vm9p2C25oj38mEiMVVnXFWjVMbJXEwDtAwhwxNXgJsiVRAkFwiXoLViNX1a8xEbP2gSePAMGErcsiiKbT6M",
  "key24": "5tdPBfGJXFzfqBjFyTpu84pVC4HWw2HoRUg9CLKjCRG9vH8FdtCAXSfB7vBbvkzaEN4vmmstiY1EN6bJsvRTMeGp",
  "key25": "4ntCdymTmWVpAhMFQNJoZYdgCcwaW1GEhCtFJLz2DF9UH4pXaXJDmPfnCaYBfLcQQXD3goAQbunApmgWoCEA76bB",
  "key26": "4qEoGrXfXdKkUjKojHjFKTEu2cRgGx9o1XbLwoepyr6TxYPZJdEubfTs5fvRUCGo4tEYUabPUhVvwcJXe2uvb4kn",
  "key27": "5CvpNeAxEdTMeKkt3WGUt9YJxWu94DFbpFiKmksKyGWvSFYYAMR74JqLf1K5TsKCmYRfBPTFapEguaMLeYQ2JifY",
  "key28": "4TEDSsFgaALnnAMjC7FZzo7ytRFT7stW5atEgm2BByyCJbQgVoL2gHSuvRfftkFexag1CDzRffXt4YW7Daj37Zr7",
  "key29": "31B8MVbzrg2S3t3Ui9wX1LeUJTKkDfcw9EepxvETTBTSpKoMhEpwHoVYYJmM7ZhDQUxbKgJGHejpueajQDNdS7oh",
  "key30": "4NMgAp6GJjqLEdxL3U7ACcpACbDwNYMAunaMHeoBBsc26TEMYKiPaVLafk6dNiZQtAs8LU6hAtuNXddk6u2ReyEo",
  "key31": "kA5bMXq7i88kuWG7mFsPxb4MFL41PjBADJbqWbfMvFZDb8Z72nryEy5rsTTF1mRRKHnUoDefjnY44ZWce37cErB",
  "key32": "8Yg8vwqKz6Yhw3SL69TVDiXDnFRva1aMewGTHALGX3meBvnizCRyps9EwdT1ZnrVYP8MSTZ9JBLib38wXR5FSSN",
  "key33": "5GW84bN6mE9Zz3umWVKBPkc22RkbiwvPzwZDNBaRU2Tuv5RtuSmx1bfJKTDHwwZXrEMriz9s8LMHo3ATun6KZL2B",
  "key34": "4UCAmfXPsA5CYBi2WyLfxWXdbrCuUosJRvLnhHQynYoavJefpArWVQ8KFSjamQNsUvVQU53Ch6jaVXWsstGtf9Mj",
  "key35": "BTL45swMeTbBfjNN8JwpyjgFc1dhoD56FJxVGvhrX84PA7sDxHkFg7n31NnQHkoUDQaaCoW5Xry3dHBVJhc735r",
  "key36": "21n4MrC2xKrgKWneYKZ5tkXVPmkDQSrXuSFVEBhnRes7R1bVa6bMf5gNPxZ1wmbaLKMYbWCobWB73TNQ3SUaFLWL",
  "key37": "5xhkf314TEinajh6JmBiA7vUG6UVLKmXytXZhC9w5Ti7kAT1RpMUTXzztXGyaUhiLiAc5FQfUJC9hRtvLXCev2v5",
  "key38": "2xpBp6AQUz6ML4hhkD2UEj67HN9UwSXj4iE45dXpxz2KPMKFeEmZRNU8j5a7o6rMKWXF8YKZz8mk5BHqkWdcnpXD",
  "key39": "5JAuxH9yKz2wpGHbRTEDdoJhHANtfoAhZXWoPtQx4LbqZ9Zg7Zf33RC7eRduQekG7pS76vioKdXiPf7zKhCStzDy",
  "key40": "3PQekWPEoyqfvkkzL3Hp8CdGikcprmhUxeEnHEVvtxw2uv5BbcWFgWgoZBQs5rs4QCuiZXyetNVt2YFutKN4HxaT",
  "key41": "5ef4PDxPqJcHyZgoFgYcooYRBSwdCHSgZY7XMfsmCpUVj3kzC86sR9asSoNTKUGAJaTfEKhdMwkn4Yf5RtPdYQvu",
  "key42": "53oyaQMf7XSGqQQjYKjDFfqjfeSHfTP9yZLN2BQJDLUYa2p1KEMzJF4GoAgntaptdSwN4J1SPH8LMyy6SLRfKajW",
  "key43": "3VkFhch6cBsAy2ZcyxSmpirrBVsEcaUz57WyaMSJtwXZHNzFNceqd1FPcmpyznNy8uc19qXWa4dnnsnM1rChzs9Q",
  "key44": "3trzfpchnPvmWrUHreYjD1PdFUyNTx27MFbaQ9AGAgo2kqVXuiBWt6E4zMFE4MzLGfng5JBiQjCDaXv9ah4u7h9C",
  "key45": "31edSiDq35KtMEj1ePu27qskpURXaSaYezNtMSC32bvUQ6js5cy7n3ieFTX4W28GbXgKnzVMYwGEuVP4Aq6MrwRv",
  "key46": "4Li29WGvRxPquLcoDKzVBgigWEeze41eSp96eU3RpF7nuSXutvHtCuo1pKSpipxECHWo32ym67GnZwUiewgYBPDV",
  "key47": "EtQX4yunCQsznwWZTRKNfbE7T1X5Z5EiHb4Y7yFRZWMyFemHekepwX34rENv9XPmvCG9Q7gNvXRW8yjwmtm3pLC"
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
