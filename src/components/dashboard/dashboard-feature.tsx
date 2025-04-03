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
    "4RBxMPgdDzQmdSFcnpP62sZzQ8BQ638zPGxpRxwfLw1acfBM28RV13KE2v9jPx63ddbSysicxK8Piyhtf32vLMoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AR6G438YUbbLvLGFRUqc1woJFkF921sYnaA1GSYQ4QAcE1qcYLDa2hWc8gMqqfA8XgGS7a7PBVsCXwDjxzQTq8E",
  "key1": "3NNEwmNkmj5jjDMZywXpjWqz98c7dXXLPEZriY4n481KZrwBebyfG2nxFc3CQZ6VDcqDNEiU2kCyqBeW1cTTjPff",
  "key2": "59jv8xkYH1AWm6sYuPnDCEtQ9tCuFxfKeEj2naf4oJhVoof33WhQhFJLT4zA4uWVy7bQsWrRiyQzA6iJFPYyLEdu",
  "key3": "38XWqrFaNdFNYCxV1pxU3FgYvzhwF1C2GhL8uBvg9pAcahVnm93vaEKRz1A5wCSejdYrJiKNMi8pmt3V1Hyw53iC",
  "key4": "3fFLzYVzkybGw6Y8ZUR1VN3dD9hNYEPtHwDsU7nGxjrSAv5wQpfMEAjfMVuH4A4n5HUy4Cmwak8Agghfs23jF867",
  "key5": "5hek3fYL82iMkHyhV6yBPmFFuwWCDAosNDWkj3f6CFs79CPSREsnv6Pr457gWNcnUjgeaVjtwmvNS9cjpDLt3sCB",
  "key6": "2ebkZBfoc5WnRYo1wCd91iSkk8pjcKbMAc8Yr74frU6izqkqgDL5cupKJNr7UmeoeJHeiZtsVxhmZ5faAwjJMAA9",
  "key7": "4j7Wck5gTqqpF8UvCFg9MM3EoyTx5Uhj3w4SWQr2sQo9qPc79PrLoGoAuKtmrGbRYCQzHanTnr1TeUGTiYt7WP7c",
  "key8": "2nxwgTsXmCcT6dxxiWrjY7kiCy2Z9MoTv47FJeaNyP5QYSxa6q8BGiyVkFY1mVcsVpUTZkPSXbowpgRMAofi5yzZ",
  "key9": "2ycd3JTw7T6YxfLYXhRcETffHssDXosfwZe6up2bj5KaQ2ZE3kZB3bEHkiyTmrKRPZE2YBd522SSCf4ccPGjqRZ5",
  "key10": "2NsseZkbzkqYtsP87VM9fHtgDuCtLYwtyBdxLof7V7SGfg5DgQZgDXXQEtgzuxXcmYfU7jy79gQYwS2hCfktBYht",
  "key11": "24tXZDYDqtWNW95GUuZGRD8ux8LMagFHm38TZogsT5zCsxW3okmrUP1Sy7yuZrqeVu7AtipZZ32of3X8MCFMDKpB",
  "key12": "2NDvWTFLsens6EsaStvPWcD7TS9BJS6X4yLxS7zEBvFgHDB5A7Pw2CB11VQHVaZmXeGwx4JLnVTmRRtyjQKCFAjA",
  "key13": "5AYZTYUaSLgs34pjjyBuYsYQNx6VyNMvJqdjByA4xeoguKMH6PACYNBaoAN7KvefWaf5wfTLtmaH6iumW6ozTcnZ",
  "key14": "3FKFhL3HMMed6mMkVfA7hDPUCJcsCedJw9NevyxfW8F1E4cCF86y8HdgJ9VkMu2fboGKcJvAsjsSnpKCvh4bUbDm",
  "key15": "5t8EG8AT8UfwH5Gr1sDpLqkmgfvt4KfioNP2EGqZGGYW5VKqazXuBfhkhYBK9n1joLcGWt88Fsbi5pNeK9ZQaoRY",
  "key16": "3LCJz1HNMskUnuNjX5CdajebFgBYUKzZ41FBPafo5G4ELDL4y8rcAx7iwojYkc6xTnjhTzs3riwvqWmc1y68eY6X",
  "key17": "44QRwobtuavwecz4LFnWbmbNLugMc433xkopikbWkrVbySe1Ut3zpdpJJ62B6xQMCiKppiamfnxqqnHR9rJ7V8Uj",
  "key18": "2VH5eebwCeDAq5pE9cr6mKmYSzJQ5wNWLyRhzHiCigad3Bx6MSB4WUXFBsNnSAmDRJDRAKkRGF7F21bzrsmi2QEx",
  "key19": "3yQP9TfVvUT3ujP2dan1dEJH35zeyEHEcEcQC558TJap9nre7A4Nv5dX2uXGKd7Vv9hNXCCXGfjs7tByM1stXn4Z",
  "key20": "2sSRnovuTfPANYuu6iepqZtFsmDLzgxfuQQ2ikLei1vnm6ZevYWMFPmvrwjPmk5BYwjsDQsE5T2E674vS4MLQp9U",
  "key21": "TbWTJQHxVrqwj8NrCXgV6wGQexLuRW7JP5CE5CrLKSuZW8PRmvJsDjGjf4ZcnAyrCE1xzys2A2BpvUmXKtmfGCn",
  "key22": "3AfGtBpmpgRJfcC5jgR9UQ1d4YgSpVwrDRmRiq6FM7Zkj25XSsFadDB5f7PwZxVpyjqG9oqzCwpMpn2mXiADFVQG",
  "key23": "4bYKFoppf9FwrpsTsn2zhrzmP8bQ3mN588hgwo1XRRUwLM8aL7cW5kcwhAG4rUp8oSBm4oCwKWQnpPYcQNNsozvK",
  "key24": "5V7PJFQBU9Sfm1UQ5oc56QZ6YAfMARvECDPKZ2oRzwpKRMMXAn5f3jxpvSbcvFMGVciotGV73dF1wzhbQC4wdBpG",
  "key25": "33ARBXDTc2xxaueabcFmn6j1P22THVv7fkEe9XgXJzUmU5qNM8qVLVfAmMfvvhZTq6Ls1FecZkm2uq4zDru6k6V8",
  "key26": "4Yn34rbXbQMPxwpkaNytgzct8MQwUv24ZvPcXhWgmv1RboMBhqiVLfZxGZcKEWFYs4iDAaYfYh3ZmBnfJxrGipwK",
  "key27": "3gFoSiYAdJTCuU6LtBDn2urmL9X5XnMTYnXCqiwChwefye49Lyo9Y67gVxxjeQAdP1nNSfLNyXgBzoWNGxHKtPzZ",
  "key28": "2vNvqTZXjZyPC66xHJgCh5ga6LMxQiHjgwR9KHUyc4HSX2RMti83D1mDKGYppinCXS3yJikZ2uV1CVknvRpJ3ZC4",
  "key29": "4gzx17wLPRdheeFdcU4XqWHFn57NBxXgwgUxkTysijW4vmokn4eR7SveMUrXBdZHXCeCkSrChJH6Zk4MyFHQJ7BY",
  "key30": "5kWuPtKGm7H2BriVn76sf5cNtKzheQstnFAbf2YBRMRT28M86xNEKKzzFweS1ZEog7NSwJj2zStaLaDnLCJhhbZa",
  "key31": "3jrLXesADwt1jESojMyqmFeopn83ch7hcCL1e9AraJjCc5VMs9MBzZEyUbQC4DyfAbFn59cNS1bVKF9dbbrAUN3n",
  "key32": "36ZuYtMaddKJcrTvQKoy3LTyw1CktqFVyofbzGmNmksURqkyW2vJcswS3mt1ziQmijaJemjXs5DH6KNR6Sip5KtN",
  "key33": "4kEQEamfNjeb8MAeASBQFfzhWZHCnDWyacQ8ZvCQ4BBwH4XPGooFKM5soGpDuq4fe5QtD3WZKfHGWN2DFJzmvG2G",
  "key34": "AtZNCiRKfjeeHzsbTRKMQBRnhtKX3QHoDm8FLTwadidZC5SMTF9FAJPo6Gf3zoiyya1QqGS9gAY3w4akZUCd1Pc",
  "key35": "2cYpqBkxLs598MDTNobuS3ThFgiTiXwbp6uUJkMihNNZfudNLkfFnYTeBu4NxmyX9wWEpWZZF9aRrQWVKqhe7uot",
  "key36": "5m5LPvUBwuDPsofBBJs9ZeugoYtUpFrHXbwaGDPSg8D3yjj3Uex8rscrSN678fBbYhyL8zE358ofDzDydXMRwGZY",
  "key37": "2vHVdScRT6hBfgSQTjig5zGKGUvqhYnmFw9q5auTZrH3qJJ1ssd1YMrcjhNSfmX77Ydi6SxkVbv5UNhq6hL78sb",
  "key38": "4xV2QazXJoyw5TdJnZu8rGD61qv7m9gqEk5byn7itdau3H1aXUARJt8kWnzTBiSJWQ1XFUD1QDHLUekque514Zm",
  "key39": "3qh9xRBH1cBf7jbBKP7BxPno1rzC72GtAr7UqRpNQUR2T2SZnbCGgsLN7rzXKJsEtzgFrE99Et4KdAVmKs1sYMD9",
  "key40": "4YTdLuPfagWw5tUjvg79Ymkt1udD46wc9MKo9HnQ2ySX1wYaB5dJysyAqQBCwBzJkLnQtPb8adiA281MXm7CmUKq",
  "key41": "61oAUXNSMU82EVpsJmerKX8tso3qwaw4mygysVrWx6AhduizXX5uYUTXCUUFAHBXWgb8UQutJ98NPV5vudZK46c7",
  "key42": "3JqtSkJRXnZ2Pv3ZDW5xo6eCHUVYabe3PJacLPms9PsqZ2VKJESP39nMuUrbxbx3uEpE5wAfuWyYtMprJKRV6sF9",
  "key43": "WkSCeoPayywBXoEKJrKt8mc26TcVVdLDsdbzU2e8FeN9XnfDCDWm2JW4sPXeCmiakqWTEL7bXNJj3JT4vwXRzbj",
  "key44": "GsHjhAbPDxfuNkH7zS9WSyS1etqKZuaEZdtzfuxjenJiFvYr6JtNnrXbd8jUrygRSxxWRxLEtPBYCEvCJqiSWQW",
  "key45": "jWbFw2JsiTfdtyDqucB8jp9XVbfwR6HCuxNyDpF3V3BsCUzf6GL3q3RZ4mejek6q2orx6EfoNCPaKhNYQ6CJSjg",
  "key46": "4YmHMQWUZYeTuQEpgeiANhz4cbR3smQssNsi9R4oHV9m53PHr5Sw42mWUcThu6VZyK89oveoUeLmjWBwRfQjkVPT"
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
