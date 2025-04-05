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
    "4ZEbf3vhJdsVbkiiFPNPLf8DkYn4pWrhrxuBnwcxLGJefiuZfq8fnFkPM5SZBsJsCMvPsnqGpm4ckyhzvbhWjH1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZBumAmkXpumqduYyqujbrkbVmAsK8wEW4ytnyyTLkeWc7QNURH41nz9YSyDcpyZGWC2fRkTLFPE6tmxaoa7TeWC",
  "key1": "4tte3swczxuAs8n628MZuKcsji7ayPCKov3BM1vKwa2Wk2BJS2yW51aReoa9qhGSetME7cjTgyvDWU77WQuAKbjB",
  "key2": "5YoGWYZczWbciRrLV6KuxqZY8WfaVW3ji7W7dB9ffjg1f9XrzGu1UdgA2oSoCHoMt3ihvqAGyt7iuLHT1kPDHqhU",
  "key3": "4K4Qa2J2RzsK9b4swn5xVadcGNyK2e57As4zjDThzmuvNr1P9dsaBiKZwoW1CtysHhUsjuPEzeZALiWcDiAhQ61E",
  "key4": "4SAeEvRw4RqG2i2aEfN375iLgo2jP22Lrb3QeDUUG56WPnV1p6ytLfN6KZzvWt7hFt7Y1TQ9n56pTGq96ZV7oHg3",
  "key5": "5Lh3Muhtu9CjBXSJihhfmqHPxSXyHv9LmmfYHFBV1aXHWDVqJ36L31soDnFMoT7mw862MMxnzBopvEpqFGc71Yoc",
  "key6": "BpQzykEsFXjbVoya3r8N1NQGVvN2ZhdUmLuB2gv9vXNWhpz5EpscGemFXjp6NN4Xn16D9x9s6p59BGYyHCrg8Vu",
  "key7": "5nZnGLEZbT6ih8CFUkzVmyihAKot5Vf1gYA5gJeKAt2bxrv6FWFBA61QPwvTRjroJRypTdXKnSZaxEcxA3zxKxiZ",
  "key8": "Po6MYUPUt1EkybNJwaf2jrXgZ8bMuwGJkupghsatY6LsZA6xddrGDPZFvRdEzY8HR7sE2Eyuugx3DcSoQS8TG4n",
  "key9": "3g9E8wvRKybXKv9EckYG3DuZLbp5eD55e6njdhnS88HGzBKwXurmSQ95GQdooaVWDRdsWPpbqhYsDNDPqioKnQDG",
  "key10": "44fyYCafk7tYnBpwxeahpzCMTye4ddCX2oNmEVzqMBRykRBfEmRKixkoGT2Tq3K3Adhp87rsEsoXDA8YKZTaHYvT",
  "key11": "2JXKDqxwc59gLNE65ysgVj9iUQA3A3NAphChuYhbucccFEQ1JcmrSYrT23x6B3tr1kbMMLu66419zH6uKAAdohjK",
  "key12": "59x2e4GtBD9Y8sCYGZSEVfzHD7EGXqqWZ4HPqRL5yUhR5NS2M6YZTgRghSoqxKeF5tQZMNw2BnAtqShrypXwjpsJ",
  "key13": "3tABPam6TjfWrhGvFCNaAMHG2cpPPuj5fNQSqMgbUuxG6nRYRkY36oyWBXvavJ15Vc1CCMoiRVxPX2tATiPo5EHG",
  "key14": "4wjL9U5DbB6pjjUvcoN8B2rBsrbn142tT4CcGESea7SMKMedPaHPdiHhAKQzzKofhmUWCLRvDFgP3DPHxJ2kkzZb",
  "key15": "4rGuSnHKsdQz8S7jbe9HDLZvbgEWaHVgb3x7ofKXk5Ykrmqp49BsvWBQjAQgwyqWGTCJSAje69CxaS1QURuc6nvC",
  "key16": "22LANNEWdjesHAtS24K6nUhCEcedP1Q3VN4UggqXvfSYH52Q2rFBzi7fbV4Hee1ApqSnzSX7puZT8fp6VKgve2T5",
  "key17": "4Q18WghNQKs9LppKMnrTDSBbesNnSuSk9euLsV5A7UTDqQsqGPAsS6oteBMbNwE5RLzM3MX9pAHLGJ4ba6ETU7jH",
  "key18": "46JFpXKyhZiCT9SABXr5YsDp3BQ38iSpofojTjR8SgMRT1C32pkgXG6NSefKKBBXShmJNPndTx7WHzkxoTBix4hG",
  "key19": "sozzymqVa56ozB2uwUKtB3k36YbutagqSmoQxnocDSdrkcMptjWGDrk9GcaMi8xWH9ruc7K8xGZoA49TrsEitZB",
  "key20": "4Z8uu4DsMDTdhrqW8SrEBcajeDqp3Ct28cnZunrgzCBZnwbzUzcNChQeHXSe9ayirSYtZuaFj4rma55g7ourWbBY",
  "key21": "47TDRX89593BJENcgYDJT29RA7nSsjjasmrgK2hBMPYwci2FBJvP48gwCKGztB1PVTnvXk7NrHu2bUGwDWoGFWgy",
  "key22": "3DFjiqEM5y5iDR2MgoWKa2yLLXvJzS662jVA6mUZ5cr4sXwxaCJYhyaLpxn3gUAJFGZkvSq8Bhe8YNHfGKXEdEgs",
  "key23": "4P7QCCxA5M5syhqvWkMA1iX1gyRZytKZEuPKAGvNtznf4Gp5wyZepLaABfQin6zgGU2grfdbxgczAVu46s6eRwzt",
  "key24": "UEPyhPjjyHDkHxWPUYFPVmJevb4GhEoaQmfKENi9uAVZgWxmMVcDwg1ijGsc818Riu4dyc84D9g7JKVsfQKG48D",
  "key25": "5Qo4W5u5E53A3t7WVAsonUF7MYvTMTMbmGWwTwjtzcAfGw99L3SxZmScUvDaU5Vvsk2LTTT7vHhfDGG4LNi2qR9L",
  "key26": "59X7XntTjtqBk9HexqDdRzTLmtQNxUqsDWwKqV3Rh1JyxBtaT4cLcc83hfRy8EfELeeNKkPhJBRnPZZXKis47hpv",
  "key27": "29jqu6fTQdBkQgufWgiQT7GYEj7ksrEyv4WdKpbxPe4wytzdmhouiDNmVDKGVwPdfL6Vvvcc9HwQo5Zrpm1jUpWB",
  "key28": "c4BfTGQyPLriCnNV4X7mqigrPZwGcd8k2db8gWpVYrdBnnB8kTKDdhP56DPhFeGxaf5kicrLaFhgPT4sM4KKf4B",
  "key29": "2vpYqAzs8dHfhk1ZrNdw8eqWEBsSiKfkGFBQhuBV2S2X5KPR8SabV5ZcxyzfVDDhD86dHxfztLV9PyGVCin8M6ue",
  "key30": "4QMQtSTuqCbRLzEo4LQjvs6CJiSe5Xn97gMtgo2VxnnmfUtBKxDTMiN4txtW8TcaetQ6GkMcCmge3bnDe66jGgQJ",
  "key31": "2MyUtL1MQ8USNDZWuK8XaFvVfowpAXVjpFcwXopK6GZjN7vngpTC3MvQoc6C6J5T2XnecvHAGubtwDiypzJVLdWt",
  "key32": "5owtgMx5jW1XpbHuceYne2anXK9QBfGEkuv19hC5xEox8sqxoou79NnvNVKeFJqHLKjKdDisfBrQTDLEjfzcSgmt",
  "key33": "mJQ49EGhvtF7Mbv5rH8PYkigRi5LFwnSGtMicEMy9EJDnwNe36Ev7cKRbouiezDWdj2ry6NpHR54QryiVDgeyxN",
  "key34": "2mh1y2DVd5e3c8pexoSw5XHbtPHnBmLHQWsi13LmpnhuGkZtftiTKqs9xUjUgUB3LvTHVkK6dEK5T2Nyr9aHrgVf",
  "key35": "5ZrZoMpQLZvccXabZGH2CnZAKATBN9ky8gTpMJ1fs5u6miLEVGEsdQsErVMYRjxr3CyrjgDf9ntpguzn96smWhXn",
  "key36": "5FWkvkBhaPXZ6nxAi2cactvHiJh4HJFsghQT6WcD3bE26H2aHZGrEhncHcbVS9HJLS83EzeFYtmm1Hv9AALetaUs",
  "key37": "5tTU1Ycjz3qysxGQpdotGaGgNAzjmLAG2kqDVidtZjJfgyjd4qvEYTzR8sPsVcfRADW98MFGyKCnhGHXXYNvQAta",
  "key38": "XXuj8irtcsJzNvChR7xwFunWZpyyz1Vzben4eyKtJvdUrABHKJBNyn3nZYrpKiBQrAUhSR5qx9reTMmNiHxDgKE",
  "key39": "3BpzuXH5EwowHZuCwwBAy6VvaJqB2kpCQ68XpnYNhQfdEkWdrSFsW9XBiZj6UaUi9yrJJkB6un3xhs6iXeuYgZE2",
  "key40": "4Fz8sCzE6NMCvwjwh7FfmTgPhXm3Yzzi5ySNEGsSt62ZxMiCvVXX2a89c3MvRvUKti9Qpytn5gMYEoA6K3JDkU3a",
  "key41": "5fdyn2AZjVqoxdY61Zmeh9FMLSnxr21EGM4UBW4LucLJZafeXckdQXJQvfQydThAgsbb5KWGz4jBydLwieaj6GEW",
  "key42": "5nUyUQZxgbQPzqNcRzviZTK5XLYSeXMQPz7yw6vtRdgGWBzvRUJJWWPNgNtzXcfCEYUjGnWX6JTHGdabRPkDTinm",
  "key43": "2HD5tTUJn7wUQDuPS7kCYPJJ2AYm9ZkPmrb6acGNw8fTEsv6JcX1sC4NPV5jvuGj4Nj1WyDTexsm71cpoKU4aw6m",
  "key44": "jAmTtBDMRYwcdkiPgvd1oPJYwaJjMkXMtdMtFSeMm1HicoPwEPTk2wsDsYZnfxJtSfvXZQ35JGqozCDGZu9ZbC3",
  "key45": "3JRx5hMfVGoD8VVya4z1QygikuiHrJvDzXTFU7GUiR58TqoBbdfG4okbZzSf6tfqKJbsi8H6v7MfHrWDYGppwCZc",
  "key46": "35M7758MMaU6QfFuZMPmnWgxuRnM5MdkrVabsL97vjC566wm5xKsPRTF9HfpGT6ff3Q7yqeJ6tJn9asKEEPCEtVe"
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
