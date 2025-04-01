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
    "4DugmFkKobS1scrqz21HqBdnhRFw7pQPPHiRMc9FVj5E97qTVg2F9ShNiZHKPbm37m8DaG4FYB41a7dVeFn9ojcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3986G4Y6pncxkdfZfSuGR3wktwsaKLmsmXQd79vpR8q2HSXayZR3m7tqR8SEVCheu8j2AvSj7WbLD85n3YLuRtnL",
  "key1": "4d7qkm65KeT94yjVK2KxKeHMxk3R2RyFLLQ6a1DSbRHqfUHnJU3nqVdzbY98htoC1Ygd1kMctGkZFz8hQ4xpwsqK",
  "key2": "5cYZLxCjXAPD3Tfom7SDZyNsCbdicUM9xAxuRdGjcG3eP4ducsbcr56Jvd33eVT97tpFkx1WHZAat7GzGwvfUfQd",
  "key3": "2u95N1UfS2dpjyrRPS4RPhyXv4wiTFbmgfH2ACimYPcQmm49wLrnmXduNwaaLGqrbL67GuEebPU3f9U2G9n6LS1P",
  "key4": "5hNfVRANaFDdZkND5TzVLcS67v5f3B9ZUn3fwAonQaf8sj7xgDaV3nG2pPTgmMYoRfiwR7XdRGEw2DDBMKGHnLA9",
  "key5": "4tYTuzgu4RCrVSo4zGpEUb1gegdY2GktPa1PDP9nDLeXGzDVmd7FMfPsrrBGa1Hv21AMKNUfmzi5ugZjECwkqYkG",
  "key6": "5GYdRRF5RXaDQF6dsN7X7PHocPv8fae3DeKo4h8XBTchT7oJ1697Sey2thbz8kPsjq3F4uhxHzz8qZbNCahhgxVy",
  "key7": "63a2GyrwGyW4wE763KanaZsRrg4pxXNaKKrtJMLPxgZHgRg1Yy4zvNUucGz27XbanbgsEPJxKhv55AVkmgzuY6T3",
  "key8": "35vFCU8t23H4e4ofq1WH1LFQrnoPU6bSDThBJcBxWjA49WQtvDNoPEMbhTL7SVTX58FFVuDutvDebvTA2PGdZ6bv",
  "key9": "LhPbwhpYHkS7SdbchqGEQx643zT2o8xYi22uYXofeSW9hyvCRFT8io1UVsDf1T3wJzER6rtcarZkbtLBaq3kHSh",
  "key10": "4TJRxZmiwaNieYCG346i4GQXYPLe9Hf8mCkwdydgj3eWe8mretqzibYTNCdGkz1LA9yqiYJ5FLR7Y6miz11A7wkL",
  "key11": "5uRTY6Z96tqFqgBLUiBi7oyXqyWrLrPAqFNTDNwU27Tkz2HqoZQWy8ikmEqQZeesJY5Rfkfg46kiE53VQQMjUH3G",
  "key12": "3fqB4xM55VijVWb1FU4AS5HnMViw4UZpphngXk6HrwvxUWsRpv6WhTAcp2zSdXBaivRrJpUgZ1ZpS2U3CYVH7NPM",
  "key13": "JNMLUgJmw9PPScVsh5VZ5vqgNgBRFTeA67DN7VYo9ejEozJRSbSHuF6rH6BXgX7FaBMN8dThcXD1PUN7eDeqCu3",
  "key14": "4f5qddt4HX3ejvbYrzD45VE4SWZXGL5LTPWgUL2YGDUzXiUqcajBCe2chbBihUfFS2NqPLf9bbZFAoykA9GHRaFX",
  "key15": "P3A735sEUfHmAqTmb35rnSCeU91KGwP3oHTywWMhW58gzGBqFAwUGyi3gKnpz34BDEzUjULZAz4CmKP2Z8gzPwe",
  "key16": "5BPAciskps3dTDPyWT3M2SXC27aQ8RT4hYJFfC124aLv1WbLsG27zSEM3fKpXQMgNoYLBWsLJPDsMZ6zoXitXTEt",
  "key17": "2suqsUh4xfqwt1GYDQMYrTmi1v4mQC6NK5C27hYqsCC83ddv57GeaouSKcmCD9Pye21W3q34G4HL3v8F8ZPm7Hq7",
  "key18": "4HH9PDhRYSPK5YCeucxXSStAG5DbUuZTrpMSLBjX5Kbys7WcLDDn2yn2ndqMYaHMMLhnQEyKCkTuT1c7vFNwJcQx",
  "key19": "4EfoSBtbqJZVzdhcXxnaaPwoVypnfCQ3sMXcxtUT19cqXBZiuGodMgYBvN7yujQe5soKAQgqDLNxij7RaRnXdM69",
  "key20": "2wG5quSmr14QqWvdv8fs8SRaGBtb7YSHj8jE2uCypvQh7sZmMWQduNLgiCBpYxicnjuRKDXMmxx3JhvBi1i2EoEf",
  "key21": "Z6U2fftzdFqkromg7bdHovd1C97LrknQoaanN9kdD5RuyTj42fCyBwwCDk5DuhkCvLSzdoWA6ye438cxhrW1W6G",
  "key22": "2Tm4vU8t1AuurZ2TPrZz7vwRysaSXQMaFJFBd7jDJbDH2ZBB9nyPFN8fC37sW6HEMWkFMXGWgYgGT2oKC3qBKVn",
  "key23": "3qcpCPYzWS3uFEQJLeaj1CHjpz9N6s8mk4oPwFTs5axpBZcHtMwhCfJpPVouQHQS7U7G3X4BezKAxVJw3HY5v8wC",
  "key24": "4FGcmEMvzF6TuyDJSYoLxTWRN1mYrfDbSh8KgThGSXKqcvf7XhuErkqLajEKHTmxZtsPgrwqs1hmeKnhMdgKpYTe",
  "key25": "5zr8jNGAZvmRvHzzqHQJowCGes1wDW6czZhfcEhnsN1MwpwySKmy4WrFhhncRizY38wHZdxkRWTDdpEYQ6m5iGF",
  "key26": "UBRexcGCuNyNE6iswAxTSQ3CvMQDDYkS8kr5jMYybRqqpqj8igHjoKkk71csc2fUEgSBeGypHmLmJJdBvUcDAmk",
  "key27": "4oU8ksJPaYHgzgpAL5UnRhPRyfVT5WBRtcj5kad53HmVUm3xo7nbM4s3nfSDhc2ZnsdkY1sYFU2kf51TXhUUFfWx",
  "key28": "5FwfMoCHkT2AXmV6rVLxX9PLhgGnNDB1UCHaKK2jBkfegZ8FfYBzzZqTH6eR9e59VBkVeHUFdTyFP3YrNBxZVqLU",
  "key29": "3SACYgqjrPhTNudkoFb4ZHW9UWohabexccE2DDJzWus9pCt1nFgMqM9dkXyA1iQGrRzGiU5D4jitxhqiKQELid3w",
  "key30": "5o8TseDfM9fYe3kYzqptFSpgc6oQQBmnPGr7Jm1Wo1KKf4AYfFGepkbahoxUvo98pydaMfj1ju2MN4Tm5fNscP77",
  "key31": "4bkqC86UNBeEFSmHYmiDwpyQRpPBkUuXdt4FTXVxa66gtjniqNv4oAj5iAV1A4WouRRXBrgg6R1ceDAVPPQAud35",
  "key32": "Foz41GzWH8k5rt8fdy1C6Vhvj2mL5RxH5RoJdJWyrTMFxpTEHN57kCQLQj1KSUD8AxR8XVWcVHgfMzgDV3eRrRS",
  "key33": "4d7PM5NjmftajD2cWPrMEHDjgeywbfHT22LQYGSHQPFyPHVLBCfhzQRhNRcWByYCzk5sRToVeTW2ey1xGqycjASt",
  "key34": "4GjqWDWviCuiKDBGRmHffwwAbN7x1Egqj7JdYv4ESqPPNSa4cHZUS7N3RCM6iZU7aNzfxKg7PXNSCnSH88cCWr45",
  "key35": "4rJFJUyZjenQZd1qxWmZ6oYDRnNei9TJ9wYTEsakiu74pzZRKp8obXWmv4BkPGPUXbPwaz1TByFhbfrD9cmqWHEH",
  "key36": "2N55cXfHawTvAHMutRu8vd5dhyLeq7jrC1psxoLaWqSW8vJcpX9PbGNP9cwWXKLE7FMEFCtzHA1bo6AYj2tM3cs9",
  "key37": "253F5wqRqViRTucerqcjeaBsfa3Ud2UTmLrmoS9KyP7M5xLioz1Pg1F5XwL7VR7qpDWfWdd6TcAJNU8V5uLReLp6",
  "key38": "2U3DoLXVCP4Bs4uStRK87jYxSRgno2yrHiLqEqBsSNf6eBx9Hu7Qw7pX54ta7Hy1zxEgQxDfg655rF8bA3tRtQzA",
  "key39": "4dBruzbknVHqriJtmBCfdW6txRTUL6nCLnc7SDqYigMEM1Ngn4egSV5Ttku2x3JAzHb7DyerBRxjZ2wCbRt2mEYr",
  "key40": "63HmVRiGnuPHB9iQxXZKXncTop1wm48ZJHQiVocB4Cqkro93ro7MEfCjKNnL9AjwL3CgUmAyHYuVgWuWKdkv4WPK",
  "key41": "3HWJqx3uj4DJEgzvnRFDjCTVHq4yWsowP13C9fZvwRSxKEHmB776tV8GgQqiAYYcYDbeXdrc7DkuTK6gWSSEUKii",
  "key42": "5kUeGBoKMvzr7BsrYpUyrN4tCV9NtyZLSqPTXiapchdDF6xd46Vb2Vt4qyJD3qtTW26WL2xfvfoev34NmsrYjs5W",
  "key43": "2nDU3zmnMkjeVs4Q1DSuYB3JSDAvnUae8caRz9xDovVRwnXyBq6hUkyyEeccsrfZXWX4EhpxUiixJMz2A5jNoJMD"
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
