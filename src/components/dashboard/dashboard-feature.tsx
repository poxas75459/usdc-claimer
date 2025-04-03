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
    "5SHnsWVPmGY3BBfNiyvBSGydmk1Em5V7Bomkhz4xLneBdnFcdNCUAAMW1VAWz9XoeywwqZiBjCfmcKB8va8xrZfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AH6uY4uCAuypZ4KmCniNK7Q4TZRJHz7Zxo6hXF72hEMHVggTbZTwHThN7UZuFY13XygY463CVpiZraQiG8D2gRX",
  "key1": "3QTxCADD4grACE68oJ3Roh9cuWM63D5s86RHK8CpFY2eCZ6i8NMQ4rhyZ3J6Aj7BsRNdWgEXEWRe4JrExYfYp9nH",
  "key2": "4PgHADQKCFZADV1jR6dsEXB7WNgXKpTC3vJSKqVjGtcRo3VtqQUA2PjPwXYWJ2w83YqGFVxSNfNjewjBiQXZamaZ",
  "key3": "3j5BCgUfjVr8G4VnoTRJpkSXE4zymcPhKv383y7CnQS47UHqzqK1NRNesXYqNvKPS2yG6cUHwAcGKFsECFqNE6ve",
  "key4": "3KPBZGX24c1BBoX16GAu4w5Nu9aNwAhEFfJx2677geWKUmkhtrq3gEV4UwkEnDqjttFNDhPyzL7tvVPhYF8SWr5b",
  "key5": "duAijJv4cJ3qi2RoKcdVgH41YsiS5ykuEmNpvg6LLJvyBir2NbdSjPDyyuXMUaVTdxx43ZMdEoLRtg4vBN3ednx",
  "key6": "21ujt4EvWxX3w5kgUCi52AykjLpMerHM1vZcxHu81PvnJdQB5BXtCvXptHkhBmNsvw5VERL1HXVimgv4bydQY9PS",
  "key7": "282jWrwNRy9KueYygvDFLNaWpmaQumrUWtxEetsHMKK9d479GHd2qcVLydZwimgFcq1Ta5kwfjzgc8oBMgHANhsM",
  "key8": "XWx2HrDJtxLdkBtqp9Y2Tz2HmsXgBzwPXq3TJ8kufd92mBgb3opLCQu6j1QqYt2KPrjebZF2NjGqZzbEEhVVRRL",
  "key9": "4xZ1o9P3EEMXgZdfNcr4mg941C5XQJVcqzkbLRZVauEtHWePS4ny3g37dgYwjvTxDwTsZT4rmDhbZKL97sFWSuFN",
  "key10": "twAUo6ThMF75Sc76cPBa9RwUbG1eJsQAn5V1udyzXnagHAsBDiNrVFQFxAeR5ihqCYYEeJggGzxyiP1qfGLiSE6",
  "key11": "4XzvV4S5MNghFZgz77dAqPh52jQBPSijdKqBnL5UP48WTXS47CxwFWBJ3Mk45r2mm9szaBqfFsoEho4Cchb2TVP1",
  "key12": "5H9Xixa1yGcu528jdW2HRhaJyiPBCZH3DKjDdEk4b9V33pDNSLF3f5jZKDSYTsou76e1ctgKCMmEG3h3khkgdXbP",
  "key13": "3Cfy3AMahMuKHvRAxhcYw16RkcQFqR3o3ntrZrpZCbKHi8nzLKhasBbddC9fTCe85rdD9iTekE5bapV9PmBhiZpy",
  "key14": "5mESR1UpHzPuw3yRwWMvVPRSqeWYChWxdcrT93TSJoo6MScfew3zrWttAcnPcSZbjjMKnphr6Q7t28LyiV348y5m",
  "key15": "5enRx4M1WUBhASowRD8ckidAi6pHNpHcDc9x3ApuUwtMFQPeH6rkZo4pgi6z5Vy5wEKd5hBV6JygMYwUayGe9xJy",
  "key16": "3d6N1BDP7LjfEnnypUHMZcm5AWsZZyDUSXsSii5mWQ31v9S5PMrYkWqyUyvPHpCXFcX4nWo5UnK7LC4uzh6Sq3SC",
  "key17": "2aTcjXzPeNc8LnNbF2gc1aap6UwkMU2U2QU6ksj5EmE7ReuJqYfsXT8hkXgGuJ5cow1xqT5MBjmuM11sAYxkeKiE",
  "key18": "5hzNqMCkJSpeMWtycGXEDrpy1RJ4CSpYaEkNz5hZsyrG8JcnZ9fpxydJRDaKGiPRgU7DjZDBSdrwfVuvrKjfgbcZ",
  "key19": "5d1w7aiuoiN9KAJKmxaaCnrnFbBf2xVEZR2q61VY9621n1XNLHewwxVFcjFYPayDygk6eBTcjmY4Vnu6xNzs9wwn",
  "key20": "2M2ZuaXbT2vfXkXjmqajMY7zLjH5igYmZiwSK93MF8byoxXFBSkm8gfYdjpUpU8kStuhFovihV9pydLq1yxnixDu",
  "key21": "4aio1XqJc7NHdwQW82L4bQsuckzvCQewNBWBFrL1NqfxBT15aQxhBz4u1TdkLQxb2tHjhkqi4oMtr1wPCeRtpHAL",
  "key22": "5ZiTdEHZRnPYogFfVczSfcYE7yW1Rs3kwM1faUwSYzttixBK71pmyyjVcD52HPr3sdnWHiztximH2moQEvTTdJSc",
  "key23": "5mTAEhVQs4HEWiG7BzrGKi8DF5FkMGBFKWvC259j56Bce6SXg6p6XtqRereDnX7DSh5pBZ5NiWRPbNV59a2gixiU",
  "key24": "4adtJchVGYd74Stizm8q2RQGS5BZqQ1NQxH8e7iBcX7ruopLzsX2rykv5pxgZtv5fznsrHkUYS9n6uxV2o392jjn",
  "key25": "tUDyKuTMc4EmvDkeiERdrHe7J7qDga9pU45EXkn8zq7ExpzVuYxXKKC9aFnbxbuNNwoshNYvcm41KFEnSyxeRqg",
  "key26": "2PXPTih81tKWxoDDiKxQHDHU67YDw4HMAr4UTS3hzmkxwDPn8YEBriC7DkfGwCQUwwhS2uTssQrRBUffj8oumxcY",
  "key27": "wpai5Et8azL8XNhcnNY8Vf9B2r2UTaGQnMaq8rHQ3yxd7AaSpgW37QHyA2MzwQxUwUHpPv2mfByWnTKQ6krRy6Z",
  "key28": "4A7SkpPUN1fPvSu4SCZgSrNT3jo5bv341Uqy2GC8gJg6ufLkf3vn8ygRGj2iGVgALvqv54yAzEgrpZsKW9vVy6Tg",
  "key29": "hMGguBqMLpNkQYc3JXXKENoQTcCxQD5HJxzQr1tHgotZvtMiLXpiJm47Pi8dy4LRxoc9VpuPQzq3tCRyuiURjBu",
  "key30": "4zzVGeZM1sTwzHugKZvVVbe9ggrwxj8vUxThgFXGmGvPR2avTrzkEs3LSFgZ9ykPWpC9k3EV8HC2hvimNxcmeuCx",
  "key31": "5KYBxy4o9ugA7k5fGp7S49caZVtDcQ2No9YGnR3qiUPudcUYWdVkpKrHiEAzV7TEmKG7PYXGzUNamN7wW9vvRQKF",
  "key32": "4TiyXWNCmn5Ky4Nqz1DJzaKjexagw7HNoiJcTeim9vayNSFb7EZp5b56h9fs3BU4cvGZH87yWu92mHdirMxWQbur",
  "key33": "bHbskqZFNxR84tSHbtRMhzkZFuRFwZbXJ6YYMK7stFk9KAkZtFqnsV46kBa28WkJPw3QZhaVJenVenPwEdxZDED",
  "key34": "47NMSZaPdMxnhbb15HJPcYNAkowxLU2qVti7fcUSoSCyqubQeeAvcJFgXLFoKtLJYHgMUGmoiaVDpujyzRhQ1eTK",
  "key35": "34KKaQRpa2FUXCrWSJVKKCG61g3R729srP8X3eniGRrEY3maN25k1Y24vZHPhsABS2BiJCKYxQT3KQoCm3Sch1j6",
  "key36": "3XhKn3AeFwppAWz5DpF1EVjL9Q6tenCLgruF1z4Tzf7zQPtuZ14vPyMQdwPbbnYg5RLXn3qsJFtPSnXAEt5iDjVq",
  "key37": "4DDzuBD6MxDFjeUYLRGjBjdkMVDMGMS7EZ225jgQnSsLdekUXMgCF7krwi8a3cN1xKeocYjPx52iGEb9L5i1YPSP",
  "key38": "4kf8EZMgUSA4TJ76TR79MEV2EZMMb1DzXDWgdFMABULBpKrK9v6drJJBTNkbNGFdNph7CujFXv39LPBb8cSLWmRY",
  "key39": "3TVk3BhTxqJSV4GE35f7gmBS58S1nCrkfF9iHGBN7iPPDeJ4HV5oC936qsYX5k3E4Gej2NE7sU89iPJvYtgDRrKd",
  "key40": "35qKkg4qb6YMFEvR8vaCqmLUBwU8RxdTma7wB4ftQhVxxgyyCgshvHHbfxcGBkQFcLSdSdZCVnRSeNJ2PWVEnLbV",
  "key41": "mhQqo333A4PM33WRBU9SuPXCWytut8jroF2Efi9VNDfcHQwMrjme8EP8WKUnrMyZTNytkwpBQEHD3PGT9Ns86Zf",
  "key42": "2AsH9p1PgwKgYNAY1NuohTmYhUWqcuLLkeThqCmnMbvNH5AYGHLZS1Urg2tpQz7QQPdULTiidZqeWrh6pez8r7dU",
  "key43": "5bBJHeHnAUaaMDtoXa52Wo3PuFGYgisPg1mbrjk9PLyZmUGLnF5tgiYCRZwW4PCTdywToEPFipmhn5ppVHkYEpao"
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
