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
    "56uULZFCM1hARxonyTeitvAwCBMeMfXfozVhoAPiMYyj6eCHvCkcrtv666odYqVp5Jp9jk3ZvjsrxixEkm7dM59S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4soTuRXW3QgEowC8yyZRNHdi2PbgCMgKMf76jW2cK9v2A8dY62BxZqB5yj7k5Z4YsJRyLpuo8d7itRShuGsHKUGG",
  "key1": "3RGCsJdzpsnNBUQzcFJVM8tK97cGrsfv8UprW3XV2akSU9P3nPuS9T85fQH8TnmPRudLJiaLTpdZPsseYEhfeYkU",
  "key2": "32LFRixxM93PYWWDdytE6ZqbGbk8RWydU2tEz2naQxNSzysvjiqk9TgavrY66GToKSSWvHjDkQLTL6oZaTKdG8Pm",
  "key3": "2zTckcgC1muRxMz4mRQS4HgzqpX6Tw4V8s6ximNhBS2dEzTwtMm8GfFq5DaMqm21vrwdXhX311dfhsvZkZoRRrFv",
  "key4": "zrHnBy81sVwhpGmRdcbUUhXujR9S2kW99Ar4uZxWQJdnZ43C1oMB3rnLJ9qWmF7f3JvYKpJuDE5RpFMRAMD5jtH",
  "key5": "2syfECdFYPjzFGdvSpKP3AFyptUgUXgm37dGPKaNKpHEgWYXRFxhUREuM2ByN2HqKnmtpXb1WmvoBrLFNFVForj6",
  "key6": "2yw9zvnL4KUKq94MoWDxskvWD2WVtaLvk8MBRc7KemwYF7NuEwhD69VKJTNVcezkcMUdN6TwSCqF66GdkpbT3GYJ",
  "key7": "3SpaAB6CB7yw1MoGQpkZ8k4UHYZ46EFqbPeMeaZ885e6sgEsGiGNiPVnkd58jfUwABiPu2VZzNM5fg9h9BnaFfY4",
  "key8": "4eEFURhWekTfNN4KFCdiYdfgtG8ApJ6nYEpPARRRXKZQk44JH15hqGVXzXR9HhDQhKsQcTzTXg9d1TmVjNiyvynM",
  "key9": "5viKtGkYrEuAgnWuDiNNyqjd3oc84Hw6M8uBNWEuTsjVJv9W8Ti9RjGTMqB4JLy5ntA9qFLXVJLtgM4XYfbUeNCv",
  "key10": "3QonD9P1Q4mmwYs7EQ8ABfU57e8yFiGjWLkdGSQhNEMaaR6wuxZD7TNKGoDJDKyNM5XamhGDWonwFni6ECLKmkDH",
  "key11": "4pyb42jiDzpvnmmkhF7pWR2tpQRoB6f83hvD4QKcaqQZLyRDpACmoTK4fsSoFxcUJ71ayZd32nNHYFSVCtUeqAao",
  "key12": "3KbhDM6sNjw374F7b59t1C9gHiAL9fJzP6d8jLotLz5nU8iARMHyeEkQ4Nn7ym2WdHefSHZjT78NZfukhpCXQqAX",
  "key13": "4pXW4mqpYTCG7VCKH5fxogsLnvmjK37cKBkMemU2UjS1shPe6Edo1ZbnCbcHFSfVdYVekDiDVFfGPcKCKiVNtQ5h",
  "key14": "3oRAT3SKSsXRRNXDY7TtmTTb5zvuUqj1ZJjq2d4VUcqszh6m3GAwc8BgY6v13DZfJXig9F2ymPtyfv2hb8jsAJqB",
  "key15": "3PiWtcUgWJ5xkCQwdD6VPUNEfRESSJ8roV2vUw1mgFBAby88YyhRFtRsB2MWi9qKWB7jiVNkVW4EEFrnTineadzb",
  "key16": "3SdbNm2qPu5doLLjg8ve1RfxycgLb8MQARVeV9sLyNKEekLGTqGVPW2cGBwZ4a7HR1vcqa58w4yKH1CELGraPx8H",
  "key17": "3Y9puaqKtm24A3Fm96L9RAtL1MyUEZyRX7jRi5Dio5nGDzDSaMsb5LtpKwsRXuqomm8VKGk7YZCUhyURvwew8yFr",
  "key18": "t4n27HJBWmZVaTwP5HTSPvDrxuXDa9b2GtF54nm39K77GiPJ7NKwphS2URYgXWeYYp7XjxUynwTMwrX1oyt59e4",
  "key19": "65YMCxsHRPYAExtKVyG6yXhB9bjLf7PUxMqHFRvLT8shB8XhK6JJWkLBRNARhWrfRGe625ub54ffqUG87hE1fZNQ",
  "key20": "49CGTBrkcSfHkLJ4xBW6bbp4Ypxtrs87PC6F4UHTmcF9Y2KQH7Nbzd8DhVVCW1wPTYfmWDRUNsTr6zEW8Eu846ZS",
  "key21": "41ag3kgRH1kh9JXqEjnmYTBBvAmj2ZJiFchWP6WEBGQWNhJdRVXqKCAMnk7ybJhMPhaidYnc9ycCLodbZVfx9qVR",
  "key22": "16NRnZrqUq2TPERkUrvk3GXijvQLJVfkUy5k7KymmpLSHNUxDAC2PseZrEf8MRCzPEYebBuYRM6N3w4jSycTPfN",
  "key23": "2dReVEkimBnoBdCAV6SxFutnoENAcAkXbkx6UD8Mqo3WMqW3VUuM922fScShE7zH2QdWfNH3TKw9TnwaDP8Xwrr4",
  "key24": "5o5XtYQqJXWEXmMosvMRWadr7P6WR2jNFk7UDvut1GMSL9wGvkM633PDtDrzjwci4x4qkFgYAf3kiJsqs2L6Aros",
  "key25": "3qP3aobLPr9gyjTPAT17gc7nt8oSxHEbj2wDNfjp3N89hq9DEYn6UiEogDhDMwmsFfjmZrtTeZrP2C92n4u7PjBN",
  "key26": "TqiXiYpVQgNSQ1PJEjvx8gxtDZ9DT3deVsQXjLMCBrbYLRQ26TynMYib2hrj4rcP1aiJCNhB3WDr6Vn6ocp47wz",
  "key27": "5JtB9CRHx666EXaXxcvfn3tJ1C6SJibGvdBR4Sp19mUahLojHZNHo7TFLiHTU8k3EzS37yL3BLChe5bpihobiJEi",
  "key28": "5vJDxVtL4c5rTyUHXiFu7Xzec8WhmBiEa6SpGYur1TjxYNoN4FJqSzfYd6Aba5NAW9yCPT1iY7ETimwiGTMgiE3A",
  "key29": "5DNhyHAztNsQDedZxGwy7ecTFxKmKJyCaPH5tny7ckhkhbToM6JaXxKmtJJEhSemEYv9EnuKTwqimRwEcH39zpur",
  "key30": "RrH36vqbiUtY3PRw6fsV2vBa4J5rg2Y1NcQiUzrYaMYZhAtvbnzPStLCgfVPyhM34JZis6yU9QiXSQo9RWTMABB",
  "key31": "3Htf82maV6TDZTcYSPEWNjmN7WwkqibGLdeD5EFXENPYKNZhXgiGPdzmuwLgGd8MqKywn9Xvn48YYohXCTTX3vWd",
  "key32": "4MxrTDC3Yv35DtE4S3k8h2DaoYbBNhFa9t4oqqm74KfsKMbXL2HsQNG26jcXjbMq2yoaWeHLN8zPWmmHKNvZmAhE",
  "key33": "2GHtBgtGxftPbm3FmVDE2msUH262VN6o6btofyKXcUKeenWFnenLemEwgm61VGNc4K9MyoSw94fCgvmyfjQBhrf4",
  "key34": "4q174jLBHLqrYrA1xFMBcp2AUfnUCKyYjvpaR6no9J2mX4wMhLvdYVeCh49kfTd2DhCnvpincAU6BVBZcuBaSP6h",
  "key35": "2f75BKQPvBW2RrFmVrkxn1YSy5KJmFNboWo9gSob8r2zSHgHxnachimbqM4R1big7p1moUdBbyoqY1bgdTnmDv3P",
  "key36": "21wiorJpuXwm2u9ZptBYgBihGSnAU8AKc2XDuAeUqiPZBEQU8xTFcynY7y35AVLW63pGSyNB76i8g1U3UHfLPaL7",
  "key37": "62s3pfgLfcrPUZ5L44Nh7hRhD5Rwt1tcDfVuHuaQabBJX3TSuGazAKYpZU3CKSyeE4pkeWuouVbnW8Zw7Rh3jwe6",
  "key38": "3zze5HJkhSaWhtrta9YxqA3Lx5V6CaBrMhoQNCBFD1c7ZHeQLa4jHFanYxuAh9YPZahDR9meaJzTpFPEmorzYxvz",
  "key39": "32JmFQQQHmbddoZpvWsKhPgGZSiZ4ykJhoDAMPz5UKAqRbkdU6okt5KKWP83NKPD3y5v7JqdJe8nCbZpj6hUyHth",
  "key40": "2z3uafUvVRRfUo2wdDBrqaB51Vd5daZsGyhhMyCYRcMKXekjCb7mDav3q8kkcP7tAzTMKmxouRM8VfrnRDgyrDjf",
  "key41": "37Z3ieP3rKw1tHoB62x6R6upvpCk4BL8NjftKkvxU3g3f1gGGTQtwfkqeD86qpWiSQ1ecUvYmAAABh8VAfDqnuBU",
  "key42": "3RfgDJxehjf8xDcwxo8ZGHAsPjaR4jfmouJsowzd7eBtBt5nXoW2BvKSLXfN3BAam3auduyzMLAyD5Pd8XJvnY62",
  "key43": "3eFgzS1era4FE7rBVLtCjcCJWbbTpoE5Sw9s1wY7rb7wSje3AFyBT3MzSDy7js8pyg9xhH7D2tQAXXKikHF8CXEe",
  "key44": "49gLqmyocC5Wq2tzjsZsGWMY5BDhaa3RXB7rbjgZGVtoiCr6cTxQ38vFhnxAFLCs1JkooeppfaJkLwy6hsTMPCu7",
  "key45": "3M8BbSxGmGSbAPdW1vCYaL92y4dzKMCaRhyeqSqPTboACRYSE5p5X7Ftm2JTph2G1PmjXiy2Jv97acFZurw1tEAb",
  "key46": "2cXUnnUXiJKDpGFiDECnP5AtAW9hTU7ZZ64bYi6JM8KfYtuFdftF7qhgDQoyPoDRFtt1Y7M8qgEF6SniLSXv42Qs",
  "key47": "2EEnmnjPU3aSPQbKXSHbFaroZGJSw9n2V12RMT1fitzsqKDbfirH65BQpiBjirGEeBKePW67KD6ajPEik3yTf6bL",
  "key48": "4Tz1U1ywg1uwuZ6m5zVnTT6Djkm2no1AvpycvszZ41FPsCz7fo5ESg9A9aT1aD4sEB5ARghRiLFniyEcYxrUKi7N",
  "key49": "3AuCNtk7M6NsR5BefRhMdAjkCaWPiHwJ9bdrZZgoK1VgTtrYR1cLksqb231pE94b8wzGCxaiqvW1XQuwXdvEPV9S"
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
