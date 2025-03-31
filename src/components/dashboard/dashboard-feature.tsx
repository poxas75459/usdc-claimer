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
    "4PtC58HZGR1Py7sRG6EULjE31WzVbvLvDCpBH1DcJigrysTVv3AmgwzwoAKgZ8fdKGpJHaPqwsk9x7ehzv5bRyaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "437SPMMYJvgFY4Ze11Df8hFvWGpo6c6jd5LwsvbvchVYVcuTGrPvT6XKJkhMt6aMJRsdNpQfcXzHQBTJRKXkoVYc",
  "key1": "5gZd3i54dK9rwXSqRCpar49hhCVBD7ac1UTcPr8eiHURc5PYUk2ZBsLnUusqhysh8vu6tUiYsVKpChTS54VFVNgL",
  "key2": "2Y6XT3VLnhhxDUHpzUaL4CwNCydkiG12TUEQ7L8nqewDtgN6QnYkY2C3vyEdmeGMK3Euw1u5Rm33zNnBzxpzb2yh",
  "key3": "4an4KyKBFUfkyFEK3rSfV9JEvL2oZ8d9XEZmCs5DkMdy8gA6HMHc19P5R2JVeN7mCeMxxQcLTdxRJzy3vpCc29ky",
  "key4": "2Ppb2JPY918DGZizJCXPL58M2YSqjEZADQLFvGmb6VxwDB4sa447jefAhUGASKp2MgUay2gzxpLt9YvtUPQ7aSfp",
  "key5": "4D11g6QMC2MPQDGdDKvQYwsDkZju9ZKMib26i4Zg4d7Lk42obS2LKFsBgcAZJcEMiRjRk1rDNa3Ge1xpGFRLHTe9",
  "key6": "2AbYRGmex55y4vCbQUMwcBGvdJ2fp8aXzR39y6xRNJWFV18KFhXobvpTUnqCmF1AbQPK9uvrPaiidCGPYLJP633E",
  "key7": "yTHvNosdUvzrFt3ApPuMMdoECduY3cJedtYF9dsiUCBEEFNiyA3D9iXGcrPZEkLyVFFuMcwLN1Q5ENLxqg1johT",
  "key8": "2oq1hGh6Yh6BqN1qNd8jN2zYigvzznKS9rE5CkTbbjfYbN4HjCNPHdus1hVZQa293JkkUJNeNsLwub4GcbgEwLFZ",
  "key9": "436RUk8y1xdNeCeBFZd6yfGoEb7v5PLdJWeVmnBEnigMUSSBF7tLETW3bNUrW1epzJ23tvc1VrVVHsMairxcTQuC",
  "key10": "46ann5BiXLBKMzoNNb754NfBq53263oURJVpiMMWr9wkAwf85EKBF6LVooZHbu2Xg2Ks6zmFzx1Fa8cCZ7i1WALE",
  "key11": "4raEq3GhZXiXWEMGhpuhucHXpiEqTWrERaixVmSGNxWQbk4czL3Nk5K3mzj4nK9ZTFd4WMox8KZouYwWLEP6HAYG",
  "key12": "5Emcnq9jGKYHeGVcNDg2qsL9yePRmioc3dqeR2kPiAqZmaCjU5mWK9wyHmQxNr7QhoM47oT6vwqNrUCvTAoetw3Q",
  "key13": "2rY6YRCzUw7EpU25hs79ry72w2BWn3FH4UWqfB5zN5PZmM4N6BDcEVXVKfSpSkgQt91waBqRg9QSyztCZmeTg4FE",
  "key14": "67VghkVrHTYShS8SD6pBWNG3FKz2rMD9BACSiaMaqL9SKC3E7Mn1KhHfUVQdt7U3UNdJbqZ2beVbCGv65Avjgs4U",
  "key15": "4txpD1VjpGpLwMTrbexjWX3yxC9pESrwVDBtvjS9XXZGGjaRaiTetpSbisiLbsnteV76yChuKWwuqBpq8eXLYxKU",
  "key16": "2r97RxjqHEkE4ZFxydUW8N7AYEMZy8rDpBMUyQ1zHTgZac3pMVgkJJTtRD6TUfHm7yZicovQCbRmwf3GMgoHGQZG",
  "key17": "4aJMnVjoe2mwrUp64VNBHo2f48R43zX5FftLxCFuhNbTSxuFiJxwjJ7fRyQey1Gwoq1CvJ81hU5aCSvdgWpr7P6x",
  "key18": "3X448YcES2zYTXaQPjNgwQ1AmZow8REEJkA87UsyEMbcbwratLjWMud1GbSVBnbY9HzcKEry6vN1uon4yVL6g28R",
  "key19": "Nmq2MbzwvJABSawGRZ7drh3GYjq3ym9oSHq4UxMCxYTWfcQTqyax8T6o9EnHc4Wi3QeaRhG8gauj4np23Kp2NQ1",
  "key20": "22XfGFbvbALXyUvq2n7Hgw5mjPtcbuRTGR5mLyj6XxnadugfRSYng96MTfJu3HSozwFhPLYpvkZbkhpUsbLRBUmw",
  "key21": "mKxwsVDFPSLRpASfe83rd2eEGAckrksiWkBtQQsPAdtgKuknTkX3PjH3hiJHEpSgmJw8RV8MYAt7awtKQ9UEZ2g",
  "key22": "FRPZq82KCwQ5GivTqQ4h3v8pPRd7D1wvKmD1Z6y756EkGdFE17FU4Uwp32MxeMH2iudpiecozFXhtC5t1wZTKco",
  "key23": "4RVVtGaL2vsrfYnP4Hg8wZftYFy7HnrYCnM7KgjbkxhCHsZ6qRKzaJAuTTEhzmkgHzPJwPLRV5VZGsoQas3JQUxZ",
  "key24": "4YrLsdDtnr7rVzVx24kMCKKHZ5TyrJJ7Ajxu1iKS13QgjC7aifpyGMP8dj7PekXroLMXGbF2oEM7oEoSEhDGzu8y",
  "key25": "655V7dU9gxNLBLW172MYXM8GfpesPMgtU48DGEqQoBw5RGvHrYFcn4nVzrzHsmTFbLjW7B7mi8JogMXP9xsgUxDF",
  "key26": "3mTGeKvnJbp41eKpRbY36DE23WofmVxKwhdbmX5P23BVrpGQABNEq278uFuuSriFXqyMPY2dP6Kj32HCWnCG9CSL",
  "key27": "3bP5EGoQUGcPmhXhDsbzgTk2A7uACvV62DfpEYy9aDyxTuAeLYQeLQFtvQoEmbVawjihoVGvsHMPiqizx2MXrApK",
  "key28": "2ABmgYkS2hBwjG46w3R2eB5fTyNrzutxXV4vF6G24S6rEfJ1g3qabCxUpcEMV3mKxWZ49pYqZndt5fb9gyNQRnPP",
  "key29": "3iLSb7Hu1sNQ7BgvtsvgUntNL83ggahEi3RR5CTTqpKJnD79DwqaNZyVtMBYeUkfPMCuYDkqAKJD3HhjbH9BwQ6q",
  "key30": "4x8xEi1XWisZmykXu32hfEsvZhF9Qgv5JUp5TVCHugrH5US2ciPHrrSafJeocEatFLLqKqMUjoWkL2QYSZwrMRik",
  "key31": "2Q7kN4E9Yak1KwTR4E7eWmMLxVnByyVSV9Hy7W928PE49pnDk7xQTim2X5LeMLiHvGeJV4NbVEp5V9C8xE6QJRkQ",
  "key32": "2bJtWTTcC2TzfJjHTHHyMhURjtm7MVRRrga2Rc1YPxM3ycWht9EUX6qhKu5tqcRYy4dwFHoBYfDE2rjA5gEFdewm",
  "key33": "5KCgBFMjaCr7b4pMhoZHW39PEuZSRnpGmsJcP46fc24CUaMUr8hMpuJgSCNw3DHPRUf9354P4RD77sD9F9jrFNi5"
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
