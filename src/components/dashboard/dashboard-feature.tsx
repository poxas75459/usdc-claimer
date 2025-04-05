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
    "5EoanCziZJsNboCesztYKRCGsWvN1dMnPyBHcZU9Jthrs9PY5LTedVwbevB6YMbHXC19x1R9LwvTTCpwXUz4hSVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJBMsuGRYvNPvMBM8PMHVmJkf3r35MU6JnTTBh8GT1g1CsqXYckz4c4JfYRDDWXKoicQLN83w1XqnFSeC3Mh6DS",
  "key1": "XypqgW5F58xLf5HEZRTVUwoUNSDd9Y1WNbmgyAHWkX8uy1iUUaEjRDVX4oiAqzSdgmJdDMgbJV2vUHga3R3FPmb",
  "key2": "5F89vmuq3ALNWYADfNxTMBSmz94JDjd2Nx1rqwVDiG5m6nKjM1fC5iyioXoDok7tT14stKVGYLHtYKeq2zP7CJTG",
  "key3": "2C8Yx9oNoJmRV8qTzKpjbndV2oFURhmyV9f1RvpAmyBH6zRyW4FYXEBLDomNu2PXFKRmK5oqn3mLC89asiv9CNtV",
  "key4": "5BaevTj64ey1MwrxtnGha2KU7w2LqxY5hpbuqYfMBL8m9UDHEFSqQGKwaiFMpig8M7b2kKYAhsLbkS7q8PgKNHm7",
  "key5": "44rwebU8NMJ1nhLxeJiwRuGm85FoH8VVm2YjmwYLJQdBtBe7aGtxNf1z9w1wZ2d6H4sd2azjxqqefYt8AZW6Njbk",
  "key6": "4vu4hDJAtdUBvNamVFngabg6h1pJhDkDZ76EZ87jaEq7x8f4Wm9hx6UbmeRBYJFMX9UZoNjKFrrVouUoG4CiFrVa",
  "key7": "5MnA2ea13eNa7JUuckMsxEiYqr1jbdXHnnD8snZRWcRZ2xpeBTvYxhofG6195kxVaKx2qCNxaRbhr61XrkD9KyVz",
  "key8": "2MVxfw5F92TSLhqe8spd6bgDmz9NTaAykdWBQxN8Qpf3mYFNsSTigduVBW7ZzNT33May1CwB7e5ECa7jtFpJnv7o",
  "key9": "65hgC25Tt4U5MgtDU8MnYzYXxXMB4JLVYQws4NPPUCTViLmxuPdinD81ERigLX3p86PbqXjM8aRDJfpB1HV3BjDz",
  "key10": "SdciPN9MSUjehquu9FcHofna4n7byTEJMm2mJKv7rx2RGnnf7Ndrc7CKCC3AZ3CixSvenfqcV93uYgQz4mvfeaV",
  "key11": "56FiVcxZnhgnmNaYe3HczArTbCB51kRCHH5KyvMCnEyevV6s75CcVLnahskteuyPVvFRzxqW6WS1q7DPo6gsHZuB",
  "key12": "j5SvzA9tpDsD5GL9eGq3jo4pjHMcvpXg1coKgw8Yem4T9KpDTcc7PJgeV7HgtLP4wvnTBzDwbJs3ff8xWyD3n7t",
  "key13": "FWWESUAvGWk1dpb9JoBzJyxnksmYdsZkYaH5Y53cfHVqG8iiRH8m1ucoydeRzvYw87nsJU5VMbuaXvYX4NEn7gg",
  "key14": "qCjYJhMsToCXLKzBhQhQ3i6WUQC4wLRYPyq6P13NQ3J5aYaVDfZpxJBA8RmDN7UP9fLnGet2EuUwVZnuRvEAhPJ",
  "key15": "5wtqovkfmkWxnuz4LaZGM3qSQx3GG1xJxMmUuEKb3BUANCf1cxJMNrs3SR4YSToagQGbJY1L1fzUVHX7M6Xbfpck",
  "key16": "4yab9bkatueSeVyA3P9aA7xQ9W3YjzPuNqi8zCLsKvERwWcwKALMtvdf4DE9MC6yTVC7pvVKjWyuJWiUenSsTF1U",
  "key17": "3rGcVvrNmWbWUH56eW8uGWpoCuqpJqSpix4KQZopXyhVLDwChKdWa2wrtBVbkkiyYfaeNDRqMzu5fAEaJpj1arhi",
  "key18": "3kTsXvwivGzjeKmryKQDJQzWGMe68F5zWduzzr7QhpSLMk3LjNtZJxEhrQCUv5xvccCWAAaDnVine7wyn8yDX9ZZ",
  "key19": "qmT26pupsQrHvERYKXxCVd8XtDE9osxRtCxF5uow1eZj79jm8c4TqD3AWojmxReNkcM46SJmbKfTxY8nJ9FvF5k",
  "key20": "2BosVMaLsnQb4cijkV21M8aLBNRKwnXeru4Wf7Ymt1QUKzXVFpKFR4tjmF7AuShYqrgbraQRrgCMCipsvQf99h6V",
  "key21": "5Fn98Pgx8fSm51WGvnVPD7xKT8tFQN7BWFGKRax13JioP45VZLteCa8UEwNC2P4CMisay28AUFHvcYVEgGb6B2dZ",
  "key22": "66qMnL2udbk2wAv4SGVM5gyYjCvw1Gr78Yf2FTuKitxHEMn4DhGAbQ3R6NpTg5kU6U9Hm39vzKG37egYDYFNGVDi",
  "key23": "dW99xZKvQTT7rig61LHcjcLkdzdNsNbrrLjGHaA4ei5b4dAfriCHcLh41guRagGfsAG7YFmyJM29ckDWqsAMCFv",
  "key24": "pDuSSVC8goqpkuS3y97CDZkgXzHym7ojPqkqhx3jxcXaL3hf8GcmuHHNZMrwYLyXRZWp18r2A1zn395Jc3pw4m3",
  "key25": "4jVU5XaHoSmbfB4TKXPAb6notM2XV14PCi7MYHx2TaBP2s2LH1SVPUDEaipogxYWYYXkcSGgbWjQ9zC57azCzTZQ",
  "key26": "vB4YrUJemncpAaWkuCL5YCPFb6ozFYAtN5Sn6dxasU6YvJciS5tFXKtTqSKLapux4tQ93Y91Jo6WGqpiK54VwE1",
  "key27": "5rwTLQZ2J1HJXB6ESGanWVyWaSadv4aQ4wdaafwarELJQZiCEUcjM8sNnzvVXic7vxJTzpfWfQgfJKpSAAswS35s",
  "key28": "2SLj5zXar84HreftWWHfp91AGJ5SenwX1PQHP7WeKjDX8B8Rjrc2iF3w3qfaQcasspjRAdVFfombrAS4PyGsvJLM",
  "key29": "L7svMYYZTHZyjyCmLnpLMhhh8n3BJedUzf3V3KDM7SxCmRhfbmmZ39QpiNmLYyBurxCNZREuqVmWhdbmXjf5aq2",
  "key30": "4PqfTMgtb7eHrmBAkaEHVmBGWxay4hshgonza44WcnYTHXZNBBxocBV6ZNvp5b6qAnbhGLLh93WBciGT9ZxMpm5P",
  "key31": "3qcfigweyxRJo88EyXy6rKfjRxZkmsmEG2bBqKgfdYebXqot1H5Ys3KGkEjPqBw1uZC9KUoKx1jZJZmhFR6KvP9C",
  "key32": "2obRCj6eEWPoTC6m6y2Y9KdgLhCZj1y3chjtS4xYEK5fHi8M9vYT2cgQXVpH5KbzUdZrLGdxzsELdoSAXXu1azTy",
  "key33": "2N2usKbrrpdxy8naRmX9XgRUt9fRLp6iuVaaZjshEQUku4QawvkH6QtvDq4AMSjqna2jzcQ5iubsxgGo3k2MwCiQ",
  "key34": "4gPSxQkYttffz9UssWhqqe835W9CsHJqb1oTfY33LW6gVAbc6XxadTdt6Y1Ga4QC1CvePh2zmmYkgPih1h94hiSu",
  "key35": "51YiYYsKKcEXXLb2nG7D1K1Amguk4EHZFtRzdx3crfWoHgCjAeXmUyg4GZVwVCCe1qBJihrjxMNV2FDvYoqBdVUW",
  "key36": "5NQS8j3N8va5BFatCunqyn6ikt7D711dCR7RJt95mX7CStHvwB7KCJs7D4k4bGoKybVbVQiGNEyNRArX3gLyJngF",
  "key37": "5VQa8ToY3T5NnTmn8CcaCRyVa3WG1t9YoDTsLWvHHT8bFi7ZqYnYC3JUQUpzi2PboDB54MqVZ1tgoBuZaS7mBV2b",
  "key38": "629gZV1ogYUN2YS3CqGHF8bYJw8y2o77C44PTFdmxPwcy4nzWWMv1tNtbqp1EF645ctm9q8efvqGvtVua6vZiUBp",
  "key39": "2R3qS91yeiwZveBRa2qmf18naxbjnF1JqUJhh4nGnJr6fKyxAXRhQ5MzTMBYt7qStoHVRr5VWrrU4XFYB1ftebPW",
  "key40": "21PgwyWa4oCGWHnpfcrqgFhRMcVepx6y9r9NPd1hM6q2PvibrxNo4oznVH9h3VJmoGwWpTTCF5UQ5itYH37PCtTk",
  "key41": "5MgYim7Adj3vvyyRaiPfcuqffubNrXrCTWMYdB5rxqo22Yya7aRQW4oiUo12LiVGTYpWyqKNzLQTct582MSAtC7s",
  "key42": "4LTwAdotmPtfV8g5E5RQVWPGngxEzEc6y2i4YDTBrs6i71oV9q6Jy3jNnk2Wmjv8VehEcnq3513ZgtXKZVzXDxyJ",
  "key43": "b7PaLmYXMQsLPGjx781TkZEn8Akbb5MrazdFmRmWaVtwvkdkjufpHRbfapSoYh5vjMJ3LxWz8G5wcTxAC7UXmui",
  "key44": "38rkCLkHodsYhet3Z8Y5WW7MZifUkkzTSDvCWjK39yp775Q3R4XpuMzyXYnakakDS7eDdaju8vwai7HyBieoNLWo",
  "key45": "he2TBqWoDbckC15xiu7QnN56PS875fdxhPwBMHwdvndKSMwLj5JvA8wcWi7T3R5VeFNaeCr8qMr2DmDuTti56Gv"
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
