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
    "33jrURMKYKdqpHgEZegmz52kpRFqVNjf13uB9Nu34b84CR9kgPwuurbtv5uo7pbcnhjcjJRrdjqTXbGDDfbRazLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wy4mUWAKL2fh1rZK6ihFV3k7Y28na5Dq7w4sonKyrY4yjomsaaJsEnZLbze2YG2LCguiATwUaJ1JYQjqjL9rGGv",
  "key1": "dQtA3eZj4tpmra7SdsQzPRFtGggLspFRozwVsgyDpti1hr8hzZgk2q3hbk6EPQwQj4P5vbaEWZU2DoXtHPxg7Ph",
  "key2": "5BxUGW6ZQhhUgq9iFAze5QesMSJ5Lh6R7k5nefarfei4u4ZLygkPw3ycPtAHiFdYyT8o3AcwQRBB4uG9ZHvpHKSv",
  "key3": "36RLHSyi1ckWApa4jZVqpLhrd6DugziwMSjxv6ruUrVEhevP1W8NanPWteCGqwxqSaWbGS9Cayk8wKEwCbLjdW9q",
  "key4": "3ZVvkL461AsTdHYA2DqFuUPFadM38P7p7MHFhQfxh4gxE17cuQs9eUDU7gNjVg3X3zUcxYqvjY1U9UVGMCv8ZEuP",
  "key5": "4Uwb6ucoe5SJyiZX9Pq8AH5QkQLhajCdhkpi5Zrwrmu4TiWYX5CBLrSzaTedFuPXeEbfAEUjoy2ffCRjp3bPCbWQ",
  "key6": "3hLQcXngkU4Eq4U4ridrhZdHbtuivWYJBNQQLaooaVCRKXckvtXKFBaz59bP2WwvmDMCfYsHLe1UbWnLMPbvZ6BY",
  "key7": "vYP7maYQnWy7G9mN6hTL92W6bpcN3VmtPwdUSsC1xbAttrBGe6XYS9ib77TRKYJcpcFXCFv99PwKT5DjHwozHvD",
  "key8": "4scLbLcfVR3GKUgxJvUQ7r8cMdmFgENsHE6FHrfS9326SBmPGT9LqPkaN3AB6jbX8t5nvzp91WEF3APYZkdTVjUT",
  "key9": "3UKd7rrdyr4jZYHmSiJfGN5Fbcb9cHczm6UDMZvvjfK675qvrnVsEP2hbs8fvhC7auyfxhRoPT2RwBSbhP495pHV",
  "key10": "45dQvwt8SoMYsbysvN52NWzHhurEuci3oHB9fwG5JJzs5wT35JJ4hyMj3Wr1v3FzAxEeurvFyLPCxMYXgCRtFcQP",
  "key11": "4h1rBMvQL51Y9mSkY9QvGbbUfFHUCPkCP8zdswKo3rnyyeZ7nrmXceoQonoPq61urTieSstmrTb58gF43eFkZSYY",
  "key12": "3qHspT6jffRHrebV7fQNLBHFfagEJsC3Q5qxQbf2hdhFrpzRJEtMnVFGoX6yjHvf5hoxjzaDkLXtsv99x2Az3qXD",
  "key13": "4LcikdqZfy8pZfmtw8WDf2YDnKgqmTqoDSwH9DyV8qUgUeL5zqZg6nAyhJD2VfG7Wp7ahAgCS55ck7XWs9dNYnnW",
  "key14": "269KDWTzJKfgYBSNSHDyTRSW9ewMdDJYfRa2WDBpLkr934zcMDbEm3GsTYSo8P1pZrgbrF5WXPAmrQEnXkUSByKu",
  "key15": "21LaTbnvLeEhXxuUWQKAYXeZ6VHL2SATxXL6CFYmMNeaNwPW73XN1MwVuJRyqPkkKxeXH3WCVMEDVBSBJWNC7Ufa",
  "key16": "2ZHi5rpgedj9Phqs9a1HYvgfUkZKDatiBMGhiDjGTAbPJW6sFw97KMLT3sfHHn5Qd1wqMqt6Cjyqu3aJki4Kz6kg",
  "key17": "yzj876VYhnZNDx69hMVHcRJP4mWz4QemF4GxaNqa2ZcKZScRLdkiBQLkoq4dMjgs73LA52QXfdwq23MHCMPwnkP",
  "key18": "oJucymdhtyXGMRE3vthFN6xQ52RiZSNN6xgT29EXQaid18pW8dcvn1MeZr7nXEmYRR66kAGVWm4PYsqdc5GS5Un",
  "key19": "3rM2dhSYPc2HAeP4zxaXfuQWGNz1XmEMUbNcAr4DLMcTbq5HeLW23kfamJXjXvg5mAfo7PmSmA7TecLHkmVFgDMx",
  "key20": "3fZNQxemPfTuBCJhGtmBy4cKXFxxCjQeeFVQRzwKC3RZkWew57XknmnLs4ovJp3jituoTZk8uDtNUdsQwr7xSqNN",
  "key21": "2DRM9MubmDWHcjNK1cTm1wGa3GoAjFs3ZTy5svMVGwxoxCcSCSpqSu7RNJQdZP6X6YGuj1M32JD7jAei8bR2r3Bo",
  "key22": "39NrbXMxAJ1MhXA9ex8du9wtzrseptED5duPF1fKDWMKiaoQzB8aWaZi16HFZFtPhjxy4PhoXmqmTj9XQWg4uhpS",
  "key23": "5a4UNqckNvuuLkYQpzXk45EMrkCezcdey9XjziyMzVLYePzdcab3ovGhm8jys1DbQytpkxz3G5jhxr8ghkzANHhf",
  "key24": "4svXRnhAGzNdbymgCWFFsDL4y3jbuqNTa3QA4USFw6pmyWSxKUa5fmzRzCne4L52iGe6g5sRgbwJJ8kYH2uGQuGE",
  "key25": "23sGsywMspggsehJSsVjnMi13uvy232p61o71DLGpKUCLnLZjgXb1nuQpEj4rCwwtMNQ5vXhL6hTTmbmqaAT9FQc",
  "key26": "4iBTYWV2rbGqW7kNVJA4aex7njFWgPbTmmFJJ3DvPsv9MxkwstaquJARmPUsCE18KCBcTMxZrVQqT3PehHGwBmsf",
  "key27": "aLosXHrAeAPu6V6REEdNZfbYo8Zar7A3UXhnNcyrWLjG5CusPxFZL625w2WdNWHgbKVT3wRgqUKtGNwbeVoiJNU",
  "key28": "4MtGTLPTKF4iXQZymrhCQsj4oMvvZ6GNAYeMXqHHX59xe1mCsjiVRsR6hJ9V4rNJDhChYZtcHMXY1keed3ZbZJMG",
  "key29": "5Dhwe8EMNReQfwVAwX396jHUTjoWEqNiRxa6hcX8iaMWUpUGFWUGu679baE8b7L8ePKz2fUYJwTAnkL24ZfPmgi1",
  "key30": "41D8QGSu1nW9Y9VZbfYPgEXQWQbQQGdiJGux4m8nt6CTLt6ByxYQoW5CFHtyPNgo81x5DfWEyQHnqshqM6UrBkFi",
  "key31": "C46tPJQuTnjWb6Ckps5V9miLZUcdJDpuWTJmPWc7p1fukfGGb4cS5atGrP4Eqqhd6tgrGanxQCcQd2sSmruxJ6r",
  "key32": "4k2wDdZgf3S1k9VojbWsDkrFapqVi9fhYyKDX8ys5GcvYDdxKJbNEuia6NJYnhKCnPDNsf3WmbqSf1hmGSjUGhd8",
  "key33": "3EkFoKQ8SGHns5MyqdKeTZcstncekyJweMKAY7cJBdSU1nRWTptZbmUFLRMBvq7cC3cF76FWp3PvhDdk5v7beB8c",
  "key34": "5opjf6yoj5jwZiKi7H2G5x7Mvyb1ZBe4xGG8B45V1sJYxqFPZSb5f9s4zDXNzQgvGUWmGPVuVeQD2sKxPtHFUaHU",
  "key35": "2Qqy3fD2dER1WTJtywFoAqv97rWvFntwcRkwhfmS6ZoQsp62AQAKwp8xmNJ4ahZv2VuQ2nPi2r2eo98CcYYgoPpS",
  "key36": "58CVemvFe8CvpTHVm9tKoUSHEsEY7FYHiMojHQA3em31Q215sh9thFU35h2LsCJSRk3uJZLRgtX6h6oBrwXhGyaD",
  "key37": "5tDAyXAwuYQuqszigWeRBG2PNK9KFE12X7mYoUD11EZLzfjHedP241jVCQdCMV2UXs6hPEwpQDSJzUFSns5fKssV",
  "key38": "5j23QKYudBiGwbmuzG91os4JhRt1Wfygw1TbdRaZSfgU3pDcFw4fAv99dVjSusYmJj4PHe3n78AJnUz4nqRoFbKn",
  "key39": "63b9zGbyZAjjpwXWuRy5CysuKgG8q5tSCETTXaLvZW2TF9wXdQypdB1nXiy21hri2gyDVyvChS152A2xUY5PDLs4",
  "key40": "4QFdE6WMRcybFrpHVTmv1JxTf5fxNxpDncrwBLFxMBs7L5GysZDXtgjyca8Gt1siNNApPvmZ2oppVGiAHeurpapg"
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
