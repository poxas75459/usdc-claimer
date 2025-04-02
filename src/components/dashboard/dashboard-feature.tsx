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
    "2LBbaddePLAWM3xzByiwBuse1GJpNucZ5WVRb23joq1mdfSxKSyzdXZxnzuJrDNevZnjwnDwN46ukH7NbKbAGtLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Acw8w6avUrmMZuDdaFd9feVdzVvLcTGtwsDVh9wu6hFMqrkXCCt6erRm64gubsLVpkyM9DcawWeEBMyrnZeZchV",
  "key1": "2e1Y1wQYwpT186xcWcDaUJsQMjqHu48gMw1ujvJuDwFsXwBjVBcRHAW2BPLn5EJaSXejS1tajm7s38tjehmFKqvF",
  "key2": "3cSMw1DYWGMjtAeiQtxs6AuWTCvNyPutYV3PVRXxD8q3bRkLe7mYUoaUPuYte6e6VhqZBhEkWu32NeFpL1ykuCAK",
  "key3": "28nw4A1JvTtXAoyYT6yk5MVFi6qrbhabkT9ayNwHmG9S92A8yFkm5MchmwFkvqNuTNJX7eWGxpNMZc94byCaAwuc",
  "key4": "2WazyBx7G9YWVaVqv6HBfhpSrip3qmrMXWLo7vVbxQigeqUPMbtcEb4td9EZH7J8bQYR2Y4GGdEczd7cLzdz3pB9",
  "key5": "2hKgmedtCQ7xi8wRF72cPmGHX4EVxq45ZAnNLkfsqshWqu4UiQbrzA3ftvfptzfbMQpuiS5Wun3BrRNFvhBFPbUU",
  "key6": "3Hs3d8P7dLcEv4tZjM89bPSnvai9FmDqCbR7363QYhVmud59CBdCeB4yDichzMxSHgKCvFKv7C83sVPbsL3BeFgy",
  "key7": "Mr2Xu5KjSm9PmexCoQ1g9fxectgGbhiYg9rPvow2DjAjXT4U7EFKANH23dQgMS38aFTQXAx7VbzRwTfXrbiFVcv",
  "key8": "2JQkm27HSiZs5UFGoKLFWiQgQrZETNWzsAGTDd3BnoKkTzq8zEUQiF3HcZBB1NgExU1TwdFRSzyexwpNzzPEoTER",
  "key9": "5ri9hTRhpqNEN3JFiXXNSUofMGx8zDdjwN7xC8kqWVBUuxUEe7h8UBaNZSgmXA9hQ9DE35hqNTvZQM4t5ChfobHz",
  "key10": "3B2JnBnQiaLs3yswwWFYDRCURL72yKM375fvncqjgg5rx4nbWorDnv1Fiwq4xRFZHdpuz3gYXB7idrhxu7rdV6aS",
  "key11": "4d2HGX6FWtdmgwsHHrNzVN5WbgqGYuZYrqvJiqrAHp6tVNZRe88QV1dhwgUzfCHBxfujj3XhPCKCmD6u4KsWg8ea",
  "key12": "5NbD7PUE7uPYfLbdytTuB5GCX7CzkiC5ifm6pBDdC2K483NU54jqT1y6k6qr9uyWqMba7qUL9RrtQsRCphypv9FG",
  "key13": "4kD2EreSvWFQ7hiysQgbTsjvp5gC2cxge37iLNF84yy2qigoUxkFcvbJwgoAfxgHAjhv8zzefA1cwvggmrAmuCeR",
  "key14": "2vBTd6p8FN7NYsG8WfdavuFbwAQRxa1XjJBsWPPaQsVcrbfZ96zsXXXZwSdHwHq4oR2nnyks8mSmKEBnvt8Kj62p",
  "key15": "5z7uayi4sEYFHAateQBj3hNgg8VFuRqTe3zYjyDuHYnKzw91RGMVrCVqvxs1RaBiixtadMxbu4C7itncco7z3cxi",
  "key16": "8MmGRPcXA4PUsvcG9QFFeyN85wUjXmbastRkuh2pXrLX9Gd2xWoX9VnRqHX3VVi3mKn6bPLJZeV7ivJ4WqkozmU",
  "key17": "2mkBYhQ4uKCqLFEAPFbgRtbbCeD4yjypWNH4h8Tu6Ki4sZzFEWdy4pdNAeZSdtuhsn1CgRBafH4bx4M4btcHqVYx",
  "key18": "2EY4eBic4fLZCiEMvvhyBetPN844d61xos2r8WeHAFRKCriFAGYoZJXmVRhQVwrpNMod5iXzHqigXhTpzRxcvzA7",
  "key19": "KyFiFAUwFcCRJMQchyccHaVSQWCgyswgEXpf5dhuqYnFr7Fmdgyx56Davuqo5YXmXvHEpKLNh7ufDLx43YhKPMi",
  "key20": "5UhPaAjkiQqQB4DKvcYTWZRqjqvN3szQs5iYnEfawoUqquTD8e4aGLzUo6Gcnvo6x4chrZ5MXrbXBUtzGGm6zfwq",
  "key21": "r5wdQB61fc5JB7BQBubnpMhMUznS6an8Kao6P8YXu2WkgQtEVp8D9zHhYKucPZjfT5DBCVXxT9RuCPDP4nuvbFb",
  "key22": "5mRvCCBHXDkiXpMynbUah77niFzjBFTTrDZ4S167WSmNwftqbS5pug3oa6XYGVEf9dcrpWsGRwfHmvfufmgDssws",
  "key23": "jFjxE1gg4Gne57oezHEfSjuxRXxpT6sRRP6BRUbquqHBtzwNC7RbPwSMxenrNKS49HMSNAjLUKWXsToXR1bxwAe",
  "key24": "Nbu88A8xNPJH6KrrVbn3SuVsdnkkUKk1uFPoq8JHrbDFTNpc9hah3ZcJzv2Qz3zzApcwZJSWWNod1ecXwojUGK4",
  "key25": "4Ed194STR558frzpJPafkCge7Wz7YGM95Yw9mUwLrRhQU7Jc5ejbRfnMbt81UDMA5GoQrX9AK3VXXHtF98a8FfnT",
  "key26": "63gYCT4ynXYKWJSwW25tYbyA8iMkPaAoweXmot1tZAgQVA6mGq9HGHUVcZ8NLtpwfMDVhw1C6WgbaKNmmkK5RpnC",
  "key27": "43J53LUcSrkxDPoN9GZUiJYkBJtfMA8zXhRMEHRxVAEPjh52jejtZoPhM2Z44r2edNi5epTGYYrgex86qSfv1E6b",
  "key28": "4smx3KkgzAC3QGtTevdtGUXvMAho8grSCxTY84itu9t5nXVws48JpBGbuRSti9jTBfup6RWzUC69P7ig3WeZTNQ3",
  "key29": "2sfLfCe9VMaUzWSzSTQfEDr3J6R42Q6QruJmu6taAG1mosdYmQgGLXoWS8Wy4Dw9hohXnk4mQVLcADez9uX9DGFe",
  "key30": "2nMGJxegje5PSripLaP4FmfbEf9jHQgrUqFySigMAyYrcm2PYPuxmLHZ1XBXXZbNexGetAPopuDHjLBahHUqSaJo",
  "key31": "22yFS6ixu61rQK3KnVUAmD1Gwfx1Xp6kgwTggY8SgExmyJQQKuVZF6gXaM47XqVuZUfLUND4zueDN4RMaXu6Yvq9",
  "key32": "5zEdBd1kcYJWHDkDgzp5NaGCWyJAXYQoDzztp8DMYSU5veapjTnG78qAvn9dYceZr8CAXtFKzmDeT2Zrhn66oA62",
  "key33": "f1iYxkdaKNRSfj1LBMxCZEuykmcw6YBuE7Q3kTSLuAPW3AFzrnGMZ8ABYSf22RTjNU4tEBi6x7267VvUYgjaiqE",
  "key34": "57EPH1MSCMtAgGnKNyYXRKmjqSW3oESQrgYEsbJ81azKiQWcrfoXuc4xPLDCBRMc6wZUejzt5P7t3XtQXuQYSpuU",
  "key35": "3aXTx5nko2h2ZSF3BixdL9RAFSVCdhiMYEwHj3fYJPUCvCrvgvdS2J9DLqhAsbTzHXvZR1WY2Znu2ctEEWqgjDWB",
  "key36": "37TTzkrEpdRpNcbpwR9M1dm8knyjQ6Pmr7dAUUXQVChB2Kd57V3HZtKFjC5pfXu9yfcTQosJP37Ke38NyiNojzQC",
  "key37": "268sm4nY9jZKXYk2osvdeWNErPreMpqDN3G811XXiaQptTd5XLcDEv7y95daR7SdNz4r7yQpzNcKV4wEiTpVZDvV",
  "key38": "3PvnPGNgY8ybthkKpfZE1kdZXbx3Gc3u5822LQY1A3nmiE8HyDH2LbmS6f56sydCfrJRn5hNgYT9JhkjMRCifDuW",
  "key39": "3jVQ68xLH9D41eNW8BULAeZshrzf7nL5NHY44EenQrZMUxeZKc6zVNSYqBtVMdVfyPKqAQsAPZYQLYUM7XPveg7",
  "key40": "3K493XoT4UCyJw2hALL9Nht2ZEfe8LNRJmf6ewd7j8NRH2nhWRqGSe3cSeA9oH2kWcq1kkckFZW6PgDnJFnqPSwV",
  "key41": "5XN4YV1CKtsDq5v9zAkcZBeV15zzoYsteJ3U9tT5sW3TwXAmDcqso1pC58bDsV1Vmn3aX5sLSjXrLdV2zBXqua65",
  "key42": "5qMFrDM5FFCCKNPdmpVwhMZ5rrkJsam3mADmN62k5yMV7JX6Gd9jGTcFJQXRF8B4xcDTXNAutb4c4T8X8ti9Kq98",
  "key43": "uWbu6aKLbReNz1A15ydsjLHz1rr6DbXt4QbbaafEsV6nQqkXxPXmfcHPbZqKqLSuCgxvKDiFDKTRFqz6NJg9juW",
  "key44": "4W2JBEV7GmdWDHqrxg8naAoLn7qDfNR2rdN5VnLcpa5CAGss8iU7AFC7G7pbL11GNgRSfjX7vZ1XRPFycXnvCrhY",
  "key45": "oRYD7sRsSh2NyTeZCJS6U6wAFj868HApAzAjKZJqMgsawh9BjoRoWzZW85VA7THxsQTkVTtm1u1TLVFJV3r92Wf",
  "key46": "3TMzm14XxvwrBxpFVFWvznwAKMLEhmUjkix5wyGGjtp2zp3J23kFRYsYBZqysxEFPdXSGwFaWYB2zLpWo4Eo8aEa",
  "key47": "51744BnHVVD27na395Awpnow5Y2fWLwx7g7ZEGohJaKhosLAyipof8toicrpTerKXL5SmsDmGwzJrywDP2mUwZzv",
  "key48": "4GE4XfFS6ZjXkEKdtMfeXa9Q89vC4yT43REedcpdztxiaN4mdz8mjqPtc1M6EiQRhSyEznQo1NT8Sy3jGZpNqC3j"
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
