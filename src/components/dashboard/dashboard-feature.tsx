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
    "3BqP8EBxqwYHCuVk2qBTpwV7XTrmjCgW9regohMYceCXKPtSceTwiPAaTTLffnqqBrUmCNsjkQCauq1xbZdFWh3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RFpL15Z9qeDCQrB3gwYeE9Tkjt3cxDSn31NiDqu45GDtYeQV8uwBYRdSbNjsTXW8fRY2bXHWu2DyfKoF5GscbL",
  "key1": "bNJ71jARKtn83iyTEcXceFWpzAXDKAdHsgM9bnoSdtRT549W1b4f2T3zv3tuF9LKELEjgZm715t5j2PBMFCju1h",
  "key2": "3CTPmWgCS3Uwk3wo2RqNc3TufP89p9uh2EwkXReuc5dQCF2W99JHMTrYqxjQNm24Hxhnhjz9h5CiaRbpoqwigdef",
  "key3": "5aTHskhecsNrp9CsYhqHAH8oPnKm7inigBkSeNktJfZCAesSsKWoAwVZJ3ExQNsaXzNDegJ5wbvo5PeWCjnCMJyF",
  "key4": "2E3GKZM6BHcCvoiU7FrB6q8ufDF6MaeS217C1jZmbipPtGrb75q2Xck1iyAh5H9pJ7e6LEr29JiR9tLKQUonuQd6",
  "key5": "LXpejG94eeDvoWxawxqRvzYAygpGDsB5AhPtNYzL6bkjE6s2zLaf9foBPn6iajC13PiJoVkG21ohVvwLfnQcWNf",
  "key6": "2LathxdyRNqRW9hshpHVaYK6DHfMwwsX6TAdCqYPa1MfMeoZ2J1DnRAALMhQs5FrDBjmxykrF6Z7bqhxfqo6yik1",
  "key7": "Vcz7j3LCiD2tdC1wvzci2XhLk6ZjJTCSF8ULVswrrwpGJmJbUZ115YepetSwEgFZkHAHPR4gUTng8FQmq48ZiqJ",
  "key8": "5rGghKw3kMA5Fz85myg22fZWrGjS174ZG2MWgeJG3AoBVb5ULztDXkLQfiGTttewHLM8fYuia7bMotfHvQeSVTcX",
  "key9": "t5QbwoGwHKXpNBk7Qrium43vsVeic3SffqRRJrNe5e2C9eZE6tLoTWNW2azbqKsxHjxDANLAvCYCssrHDDbMiXp",
  "key10": "22jPUqo2jWnrcAnUf7gfpFB9KQH1DNfWQtPZ2MqNpCYc6GL6C3Q9zHkDC71kK9BwFtj5e9e3JS9vztpvqhQwbtKN",
  "key11": "5cn34UXBUVTJ2QWfnkguEXn3xhTBtNSzFKUysoF91CG72v35UG5sgN5KQ2mi5JrAzfX32A3VW9wkaLJSde9KukLw",
  "key12": "5bNZDYmzgkwpWhPj6BLPLpWsHub9HV4Pjuc6VpDTeq54DVTBprfGvPsdN6YRN21ef8rHSSwbCbhxujpVkeSgxzA8",
  "key13": "ymUTXUzv8t2cDri7ZPh4edhfEfPNB1xk4XVa721vn1v9AJLqe4sQSx8jTyh3NYD4GrUVWLTai9bF5pSm5JXGRRN",
  "key14": "4cj96sdVEsiDgbLgQh4aYT9RkkjBU4VCzp1Q2pcf94Q3LX97RRtUBC8KRtkc7d1rYoMPWkYpbJvxBiRybjgFdpif",
  "key15": "3sFM1vzGdpWuq7VC1VjJu1edRKePWwbCJt2M6gzNFuSPSVkKv7hHngAaKvsTuk3VBYATeWfdndPAz2rUGTjeGiDa",
  "key16": "4kZmsbxAw4vCDteiciY2mTRXaJbgVLPbnF5mBTSP8rgnzxrd7H4sVkUgb8WALR1b8oDPPpPUsRqDimKTgYQ5DcGW",
  "key17": "LZsqXyM7jJMj7FBDcyYaGgos2DNw9AY7VfwWSGr3cfqGNVwL7iUra1oxs35nUXjnPs44baJ8TvQRJdAaHGjnCXY",
  "key18": "5wbvCA29Z1HKc3SPs4qHuwxXsdVwu7GzG36MqL1eR3Hqio73rS8q1j6Ab3jjDxD4CGsR7NkCgdDkYwCMWupc5cVQ",
  "key19": "3g8PbUcrFkdzu8N8hdbmR3Fnk4PeBtsHqAaqANM2VvaTnotFV49vMKmFmqZ6KS3m2ktfvr3dmWnFQ2z7TxZYJenZ",
  "key20": "4g1zcB9gSJKAjaLJXrAhPkEd5W5QHZvmVWq59J38exdEqZeQNmHZ8ohj4bb5yqVvSV1GnZLeF9CA8KvHtQVEKqrZ",
  "key21": "5thJ3WUNHegPEuBbG83Ha6iXQ5wnvY8chwcTjV53Y3a18BDZSN7kmExkJg3w5uAeiQVPWsJnxyLpZ2ojAfNszr55",
  "key22": "41fwLL6jyqQBYCDE2FeA5X1iYwsEkUZYkCtZCc9XmMKHaw5vVyo4DbpgPwB7USU44VGu7z1mBiWCbjd241RnNULY",
  "key23": "4618yJ5WDF2uwVF98P7urfu3jtu7Z4iY74kKTUBtyFZd2n83rpnxCzWk3yHR6zCiYmQ23akejzAiHVXYdThAWQte",
  "key24": "2V7HpyJfww9dEgaig4z4ExUEM7kdH4LTAMbR9PBUtjmU3ep1BgonfeUdZyAryPgEWYK3gPJk9mvVE16Qiw78Rxyg",
  "key25": "UFmZKh8CagXiCLtSkqWoRnx7AvKesdWu5vsqS8fsxkDik4GtL9XC9QK5nc6hSxz1wT74c2M7BffMyVWppJqCRiS",
  "key26": "2X3by1yafTot2whACjYX4vnnA5cXsC8r46HwRKiPRvfuh1dMZNGGfhbaMk8KfSfG5zB9g4F3wmbREYUk1R3tw3QN",
  "key27": "VodxWZMkvZiaBFfTc2Yye1kfm3m2Dc4Uu5ATEg4hYSWNKEjTTf4Xh8o1BdRXH1QppsnYsusPDurk3nZ1ukahKhr",
  "key28": "3ZiGaLQ53sPBx5CnBEHJ7jwALUkUX1KnjjdAGxmxj7NDhQfAWoEJ8NQbCFWhJPVtmHU2nraGegqwunfTJcMa4Sn",
  "key29": "3E9SJRzy5N8jxqLPiR6bX6x5XbvxmSA9qEj4qgr1HyEA6NKdRATDrKHqBiN2B59SGUkxA1kCXcqNuxqWy2tcUJ2A",
  "key30": "2AkJgDQLow6U8xCKU7guUvQisCC3q8bt71aHRbPWN4Jm8Q5JonnC8Nnvbkn8CNuqLynsHJyDwC4LVKMwyJvSRfDa",
  "key31": "4CUExWTuRZMhLKWLWTbWu6gqTXqDJ5Fee3f266CWbp6mYYKLXksE3fBEzkawpjVpGprdKcwgADVWBMuF7UAuDxBh",
  "key32": "2bYQxpnLLxELSeenxX15dLxH666mThXcLwopuD7ADqhLW6wQXX3BRMCAQsZUco7RieAmXRJKiA66gizveCyPxfKe",
  "key33": "27EQ7cvbmYZYGWeRba3AmAKxkD95nBg5swXekCAKYZz9cuidoc2uEnWAwtUXtZB5gyZheSKm14LcnhFVmSL5WRTr"
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
