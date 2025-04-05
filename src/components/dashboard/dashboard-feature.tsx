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
    "3acNG51T1iMt8vcZQjnFu87xeCTbqKCNAr4EPwoevqRsYetG9mU8wicDgspevc9SsJ9eRsKZos5DXZK917GpogET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WefAJUYMr9dL34bSvwMydC5JD8j45Us5XFbVzsv4sQmm9uKD8tqGzgK8KPUCufBBMjUnD9iPVo5YYHAyUm7PPkG",
  "key1": "2Jr3kpgS6GFSuFmVUXRA6PSjFm3gX99hqVAPJW4c3Y3fTDixcDFdQDKx9UpB1u9TrP47sB8xYBysgYZiiWDH1CsP",
  "key2": "2wHurvySCvMyXeXfRXXiE8TT4nrmdZhBCehKYtrE45acZZJyUSY2Ku5du6oV2PhvscRrnooJUhyUfUq5ZuQ8fXCR",
  "key3": "5DNWB9Zxjsx7XiWFHK8kuiUb68Eq7xpnsKZkFPLSJyEFy486igyEBwQaa1JTZ6bRZghHD2ybCNKcuo1CDMbY2epx",
  "key4": "22GYtdTnguAd2V1HmRamzCFQ97rGgoeiqSaMuS9oB5hvmsTTkhQe9rxKNuAXaK54DzDmrfxHwsEgxgbZCCnhkLw3",
  "key5": "5HmcHmcR1xZ6XHkTxednjyrQHeJuwL3MbvwRsQzRnnHu4rzx43Sx2DbxjRzibsfqGLc9HVLPoCLWHc3Vr6vHZcpK",
  "key6": "UZgQBTCxsRSiq7DeZ6tGsmhj2YaC9wXb12yMSETJnS3DymwPWHH1MHeaJ5VyaH3YRT7m2axNvdS3XwyH5HoVtbp",
  "key7": "4ewxx4rAQVx8bmCE9cj8Hv9vS4vxAn5LR21btn1ST9UT4X82MBvNZjMc8ZRqQtqNCYuvPhXsakfxwXiiW2ALa4ak",
  "key8": "2yAhsrSG8VbgCapQr4BR3nrcsVFFDoMbU4Q9BxH1Eg8qD7wxgbXa4Qsj4pD6sbcSvDSFim9gr1aY4HhpqTQd376A",
  "key9": "4DDyRsyJ76aRqmPjw8aF9mnLxbR1VZQeo4BQTbQSY8StTYvL3PXoefkU23zNmPUX5UTauTMw5yDf69qLAeetZubE",
  "key10": "2Cigfarcd6Vqw5PnxtXmru8jS1F8DrBHykMDBnavjBLK1xU1QvzuwDcEUYYyojbLpE6Rhg6vKqPP77pfomNWXuXx",
  "key11": "5bvGwgQySQCAQMuNJFb6GzdDnN25Gs3R4k9mLKxkqiBvNZxjaiMo16kkwVXzsAyuU83voUDoajSZVyhbAvhJ1Xe2",
  "key12": "4vdJ5c4bcHnjy4v3ueJzjQxH1VmZq89tbptyF5GtLPsc6PA188MqVeHfHFU7SZmaeqDA3tYxVmMiZQ1Ku4GjAwHc",
  "key13": "VphWLK21XHm1vcJBVBRZGR2QwLFWAVP9KUakRUVzeCsJAo4h3oFtTBVbtpTJaEeTrMmfSR7G8YT4UbirXCyNM8E",
  "key14": "53P9t1P8udANMzHargT9HTsDDFxwjMZ13PLH24FER4SZohFTQU1kPvm4VB4SdG7XgurEmBWxyZ2fMbrPrXjHgsiG",
  "key15": "29MakrJ9kDcGkE1X8g5spFdvt76CVcA96GPay7AZEyYL5cEnxg9EKUAE6HXLHZRzdaP8gGPpeCpZuBEcpRkwhiLu",
  "key16": "3nwjgtc3FYqbb1kUca1DMQPfcVSiXjDJzfBTcM43iVDvaLgrSBibXogtJVHxpSp6yCEMahdQQku8fa1nWWnQejxX",
  "key17": "2Jic8erdoxf9vMh6uYy4ePiaScnh4TJez3kymtFzAQmDUpZtN63mQiSLqRnw32cdnsE77r6onuuiR3ywSR3Szi3F",
  "key18": "4zYJHQXvDcxED2KzKzoCyWk9JUKnHw9fgjXji8kRBxgr5NKQMuq48w9eB4CZH3WMxbJRVk7StcXM3zGbp5J9mkmP",
  "key19": "4rcJLerQzjwgT3vHZ7JAqgpa4yUzFnRmeT8t69eMT5BqDz9ggVuDMnz42XFBdjhDK4kcjBydRFiQ5TcYPpKCZepG",
  "key20": "5Pz2ueVTb3J381g7iesjrPX2Vpg5PjnH3wG2rFZqATqb4MNv7C1esZtP4iYiTSobCd8zhXS3wtKia9sGQThKCP68",
  "key21": "5CMCzV9hwrVPAGXKiPcVvM1Gtpm3YHWsgVLsJEJ23fyytTocZqvmMAR2fA1zKwLTWKm7LSMMyAyU7nKNY2BKVciq",
  "key22": "5fs6D5CAdGz9K3eHEye5EhsmYWjhdppZXCP3KNZi8PUhJeTX8JZV8S3zgDchWCA5G6qsJpLQ9d4DE4tHVTqr2NpD",
  "key23": "2TLfA7ePUDGxDmEbEbhfT8LH2HCc4FRwBidvpkuaWEPTDif5wvcXjXFsvwoXwAtiNGjKc8pm3iNnRFdkrfYBy1VZ",
  "key24": "5VJ1GLBD5URmpKQsgG6mqdt8bJyMDnwKrKK5HhWZtsYDAJ3Ch72oovr4zupUisWX4xvBVM4ywvKPZ7wn3haW7MUP",
  "key25": "JxybWcBmnZkTeZzrozkzKTgurNapKa92WdU33xdCHCZpNCd4jScU3kg8oyf8uYZFRDtUY9q2QT5gNMYYa1rDvnt",
  "key26": "5cQnsJSyrXX7VSucs23puTBvqja9eJLArKptJhyC8kAVFmMfyh956SRzuEcyEpHV3D3inGn4rVf9Uwx47qhPHtgX",
  "key27": "4f7pD16K6FK9RPQ7mPtkDJVKMGEWDGH1XLWHo3kdtMhJTyyJbSkDcNHaHPBAP9v44VtCQKs4rjVVUEoqtyEueVW4",
  "key28": "5uRPGp6Sj4fbKSEiiPmvRvMUVs1m8qmoVvwLFLVkpv5BE3rrEo4E4eiaqE8EiPt9Pw7TwpcwZUW2oPJYTFFuPqTi",
  "key29": "3M3mem1Y4o8pfNqkzhuykpPu7xLgBiHLW9SbpnYyNJjF4MBdbWzv4NARcfia2VhF2DBFeYn96zm88imanvZ5WSyc"
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
