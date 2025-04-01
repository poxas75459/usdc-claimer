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
    "nRrhK3ZUQERZZ6UA7ge2Y43EmwqQLW2nsFxtBK5Gtmv187nY26mhdKoVzQi39ngkq1e1Q8cvQ7KQ1eetVthfqGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BAHGnM5KLHy38PKNRmfCqkXKTf6joWtFLL7QAPNyVsrxg3xpGzvRX2ssfsKvf3HekxnazbA7rxgctHxuPi4WoYV",
  "key1": "4NEyaJmiJjuo25sh717si6S1Svh47dcHmz71SpRWQnobZSx9Kcz3hBmqF3VFbrBGJQswRy2nba51RwVmzQS17zra",
  "key2": "w4Fn1xkbVEfdc3UBRRPwLMogcBQ89CzvAAr6mFwcxgBuCWorJVmQ2c4YbvS66Ey6TwaTyUpQLTTXFo5CepnHcNC",
  "key3": "37isp5yPaAYXQQg6baBbJQKcmJYZ1n2tyfGP2xnHTG4R25fwS8grwmTPFqYCEzT58BWk4ME8rC9xUCPKiq8En5VJ",
  "key4": "3vmr2Hu9YZ7JLxrEjVYLBrWJcsAX2hJfrDTd75jH8DiZzn98mGCsdjoNUGQCCmhRcrBPbANPBqF7M2BAFRovVtxJ",
  "key5": "29czPmsrbKreAs3pH19sDdrjPHZns4frr1ARKQBs68DCGVHyGkXwXJ6HkH1mkuoBo5WGC7vU4f46mp1ZnBCqmBFo",
  "key6": "39GL48D5CVDdsvsAYL2CQktWCxNECADhtLtB2W85Yi8YsSyRzmY311geDGt1VxDrJTCnXqceVD62P5so6NwKeWMG",
  "key7": "5Ym2j3QP2AH5ubM7qPMH3FmGXo5BFwtH1ZpanGgXmccv4uFEnQsNSurMCDhSu9C4VLZJzjSgvgPFSYKhswhmP7g7",
  "key8": "pT91sbThCmGvzrtdw2Via8Y52i6qw4XbdfYop2PzJkKB4zb1LitmBsMuBFtt6HQLQSBBm7FJ8yyGjpw7Tjzxxf1",
  "key9": "zt6pF3Cez9BZkH3aRUAZ8Tnhey2SKvtYiRTmDdnTLBcrHycvQ2ChfFRALNhHNGgaSTAMRoY6USZMEXLUTAvmobc",
  "key10": "5KV1odWEdTfQRh2R6SYi8JsPjBn9zPhXAzbRK7QG49EQaZp4bn6UQinVwR1i3JuEy6CjtB7K4x1Q7MJ2W6vBWrMU",
  "key11": "4DB9s3QhytKkXzeXP1wcStNXwJM8z94Mfj3hzm9fg8Ry4TAgrLbo8ejBYvw3nShaThNHbmpoS7XSS1gozCeZuRmW",
  "key12": "5o5KLoALy7K4hF7BZUKyC6qURijn7EUowaMhYM6mmrBNh76cBZCpcahSe7mgRNnJW31FEkSoAWZexheAmJyBWuMr",
  "key13": "2GQyaTpPoaBRPsqAEiKTd3V4ZwcWQ3fDwyrZzexmqpWJtehs15esQK1273PNY3ANF9esoYLWHqYRgUWoFJfHRiRV",
  "key14": "2k6Rfy7X2EvPpBFp9JyvPb5xDo6dZtgYkRwv7DkPZeRMnjRvzV4uMBzdCUgdS8bWvx8JaLX5p3EsiTEhxq84FEuF",
  "key15": "3eHk7A2brWgLVGwDH4FagBKUZKr5pv1tCRNoTri82iojSLEgvWAf4VvBbhwKPpVAncyJQJdpUF5wKX4ppHVgRjqH",
  "key16": "4py2vVUYcqUAPKKCngk6UXEwG11xKKjjxyTL4hC1s4qdRSe6c63ZR9CRGceSbMRmocWPVN4VDuTuYxjYcfFZZwvM",
  "key17": "WyVUT2LtppNKcRwv2FFSRNpyghhcnKDMBTgRgCP14iZkLf5w2wDv1FEP3de5EdYE2yNvEBBhR8jEpGBZSTNahR8",
  "key18": "5vfKEzcnbF1QVnv79WHw7pZmUN53vPQo8XX8HKqoCX1s51BT99Bu7XV5PhejjqcFFefq85ofv4P3EL658QuMdCYY",
  "key19": "3EGAxTwAeRxx2MVyn5iod4xQEJdVfFRkgfXDB21yqwNW4Kd7RFMCtoQPk7UJMG47znXmCwzdF3KoTbkVWHA6oHa5",
  "key20": "59ZockrvU1dKLEJwPLh1TRLv3gDEs2CcxcEU4g2hgZycH8Lyc7r7YUdPEpZHmkdugq1bdtmvRJQKLkae7bAMrtc6",
  "key21": "3khpEN5g2ULJ2oDHQCxFnz7Ax8tZ6HPGtD5uEA5LvdQX7njVAAoXj4fwzvMeWNCJfkzgbZhZrjJkYekNkRsjTF8b",
  "key22": "32TfuczamQSy5nfRWUVPLNWhsqxDxxB2MWvL347ZsTHETnCEBXFZFmENeTyCfDEK2FL74DoMeDsAuw81PrqZ52kG",
  "key23": "37iJ5RZXhR2gvqqdgyiSJKpAAZhKrvHLmdf4Fu8UwjzxCJQ8nCxmy9Ve29DHack9UpLEKxXeri8f7Gxc2gkzQFn6",
  "key24": "3vFHFpX6UpRT8jdu1UsbMB8qBcnqHk6u438mZeHkpAStTtuzZzzkCzLyc36ieZgoB8ikkhyeZBCi3Xx2hsBKb7jS",
  "key25": "37aT2BttJpAejcpi3QvY8UWNbz7e3bPe6Vmf8XZFwaf9ZSJV1kb8J2kBcq2mzYbcZ5C36VDwbLEeaA8XuKR7Yh9V",
  "key26": "u6GW2qCTmmqp8g1h4RKzGtQXEHBEHornS5u77ULuHKXsWuEgWRpVwqqu6XYic1gBhf75HkmXDPZUHNvEEGEWfSE",
  "key27": "38tBv5X38H5r1ybfNrA4WfW3gmW1P2uPb2QPogcqbWJjF1aZeKEsQTvbSJ3auo4spo2vK8Jzhc8b7uBGUnRfrtAh",
  "key28": "4LLf4tZbsBw5gHACUZEhuFxT7tdZymmDcYp6DNtLZEwuUfrzDR2FLy4w3jQgsD1b6fgTUY5cyrj4Qt5K3ufA5SNM",
  "key29": "d5UXiCc84dL34ssfi9TDdbnXNELzjkn7Ma7EKVTqLPBpfLTH9VawT2hBc7X18r4qTMNfwtoVo1K5YzTjxJwBxx8",
  "key30": "2vZobBEAtox13H5vppueiJXjfU76dT8YzQwAbZKo4HX2YKwieN8RZdTUYonMGtYkFADGNnaTF5epG5WHGjMhUepH",
  "key31": "59dr8H7URDNy4rUKW9D9ZHF1CnacuVisqq3ctSrorFCv3G7E7pY3kdaiQnMbwYxMDxyXohWLhmoLbKZsiS8tQYMu",
  "key32": "eMZemqWsJmHYGG3nJZ7KUWqf1QQcCmk9dAJkpiDn7QYUFgXC3rFoXHE7dvFB15nmEe3vGdFhnpfEh45MEhhtsys",
  "key33": "3oHj7vXYcAf1ZNPY3ruKdto3hJCnHsWHmxH33mm4sGhFrmNN26tCm4apibbkjH1ZDYtTyuSqVM38Ub1VvVd9uDQS",
  "key34": "214DegxQHkBKLjKq4jm8kWNMFSueDV1PZfsojEKuLTwChe5yWvGxAUfiasCfsyids6MsrGyw1wbGYFPyQ89YhmJR",
  "key35": "4hfMSoxGFVJi2PvR31YFrgjvPzSDjRLJ9Yfe5fT9evGikCZdjQmkuvnbNV6XAV1K8bZEDmQ8PvL29t1arFxpaT9m",
  "key36": "2Fuaipjb4FSCz4qHk4x6wzHd28cxyhBg3Cz3e6LbKmkgJXiWFfg6V63P6sEBZGvN8s7GDRUhKSF6FCVyQM99fVyS",
  "key37": "5owLFDL9NghcD1NbjbEAxhEUCKDLkeewhjPrEn9Q7hj1Bjyd6yAtu5KHXNFRDrpgnLVydNDGD4qvabb7AWgZKPTv",
  "key38": "5HcYgTagb7xSGY87yZM5T1piv7kPQpiHXLbUvv9VkCaZY6zXWSdXfxuoC5NukuZHLVtFt4fj587CFB4HNkn8JoRk",
  "key39": "Laz7YAtjgSP36bQDo7ymsJFbpmY6HHQ1xcEUPrT3bqsnWz6M48hY2taRriv5Z1Y8jdTkA7ucQVicTJu12nUdbG5",
  "key40": "L1WiNESVF1MEnGqGck9NUmzGYf9FXgeNBAbr1GL6ojuJKYVb2N7zWQh1Mg31kqGZWdsEKLB4wiCnSrR4DiDweqY",
  "key41": "5DenR3ihto13egnHu1QMbmUiBbdXmzTUgr3G18jFCg6yDJEv8oht13ZpcmviQbXVrZn3Yf46e96jW8knqKZJRAN",
  "key42": "5WRmVc8GAURK3PRds1B4pVEQzbtrgw2JC8VddfMUtSVWX3yQgVFxQ2cfi7gKiB3w4nDpeCB2253NxCAQnhvh5SfB",
  "key43": "3mpxEcQK52atSwPWPY9YoTFtR31MMFw6cGhMux6n8ZFY2dXdccDf5vWp8LzRcewmDrvpwXTqJz83jviskTJKtGu8"
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
