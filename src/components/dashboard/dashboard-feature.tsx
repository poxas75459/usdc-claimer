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
    "5knqBNrzjQb5Y7Af8wwRajofRGob3sQTxe8rqP9cKCoKc6zGyT3eR16ET7tZZyNufbHkQzXyUdsVP4KCqMDTFJSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bdPM3nVqrEjmE9X96Zm7Dh5dwp87xYNXVfp9WrGVZLwR2GyXGjSPudRburefUQUXAvbP5dQKvhyskGRc7CDnwXJ",
  "key1": "35bTewCksaGLzQDL9gdUyDXaox4CRdubs1svJoH79onCbyfsVM1ToZifq5fog7sJ426ZQsxmsZ945tD3vh3xcCEb",
  "key2": "2JaoRfC4QRTU8aVKV7Nd4W1Gf5qeib5385P9HNZrb9aDhrRsJA6f5Ym2QnDgCjweMRcZArRuD4xYqD9zgkn6jBZA",
  "key3": "5je3EL8pWeReFYHDaSW8kUG9Bmt69KPKGheeHLH8g2QGmAxZecm9meeUY4byJV5FkFyVZwRYSZ8tZmkqvNMFX654",
  "key4": "5uH2uXMk5ee3nSEDEbeeZB4ErpQbf2YY2LX9dfYCLSXjtYRLQ8SWc6aHzELrhPLHUp1eaxpiNRJvBD8JJ5wa4ax6",
  "key5": "5VtmGgHUJyqzKA2aukNVucSBSC3sS1nd9pYhBjs3yvpfjnwjgxRFU2sKznPWRMY63uuF6t9Qy1ZkNtiPwaWgYQW5",
  "key6": "KCBaDc8oCJPPVdy6eWm9gXGSu9C89qCtVw39Wu2pNWAEidPY2hifC1dsJcVbqnyW2mEda3co5g1mAZSxPcsNE87",
  "key7": "3m5TkJFuMuFfctZFAuM5w5gJURhMhntDGPeMHpTZojGFJxJpsB7HYNMLBf4Bkrj675j8kA7QN82jqg1Zz1N4TKPN",
  "key8": "3SAJagCoZYRxn1bfmSEQzHRL8HRL8zC3mg6DY1VcQLqk8Ewys1NSMVPtMBtsZ4RVSHLLsYTGTaYjELqFp1Qo6LQT",
  "key9": "4rdELmEJMfyp5jRLqB4pAUpPwmRdTntQSoMLFVjnJmBhQCJDuzNmh9W6vrcGCUPdagHgYL5sqgsNUWpf7zMdvaoo",
  "key10": "3Tndo3rumy1pkExcVMJV98iCiFHqkFvouRaSnDQYzsT2mr5PnbiAGWTSe6ih76oUTMMencZUrdidsd7rJj148ySg",
  "key11": "2vVn4cYX5SRuLKvt88neBJAjCRqFvF4kd54axjKpH6Gp47jeS8pGDfkkdrYNhK4Bq5JWspVTdD8rkMBJYNwz2tmE",
  "key12": "2qQYEpoV9F9USV5Sn1GSSaUTCuQRHv4jfMSogy8YW6yAovEMVNLUk8L8tX4Z4XqCfaGPfz4S2h6ADhWeCjraV1ru",
  "key13": "2cWxouU399kmrWMyMJnTka3usyyAB3abe4FS3FfzqGJiGXVWqV2jAysTKfRQz2FaUWxMP1aMNiqrUHcEMbSZbha4",
  "key14": "5MBdnd1i896fZVMWYbkSSPBzYXeyTrBYkezGgMNR9CC9XBLyxP5iVh5B2K6fEt8aiBGyLkvVtx2g2WNMz7BepasL",
  "key15": "4ueqGGYCbe4AmTuRgaGTNcTBshTrqY2tYJMVSK7RLbJeCFZ8pgqVsNqjqBhwEv6g9Jx4E2JuFb277q33fHB68R6C",
  "key16": "3gJ8fXKvkUSrJSYq25r7pcpbo5X7oDMZQo12McZng9xo99ybFRoEtaCg3ggfPYSZ1DK9Yze6cb4hz5TePFYCs3qj",
  "key17": "RWrb7aifFiyW9oyhknvVmvPqy16yt7PMGbq2FEnLPMs5jPpx7sfpR3LGVV98hKyGQm8q75vUy1qCnAERfMrofQR",
  "key18": "5QeVAF5LoLTVvzWaES4oukdhurb3EA2wwfBgrsiaDTTwpUnQuE9uDMt943PjQdffhkRKZ5cp7TMswgXfjqXkyt73",
  "key19": "SqJKmcgjkdC1UHXdFu1iZeGJv69N1oCUugWUj2LiY4p1f79L45LcV8CsGEXJ7sEAYiyDZjCFL2XkCvsyDhgWqPk",
  "key20": "3ntpoqEjBQNskoHDhkH1Qu2oM1bLk6tq3a4d76DsQKD9bwGrkKszasZsrvzkZCBgRNdTGJmWUx5MRhwJvGpNbH3A",
  "key21": "2wf7R4HmJLw88dooSEE14XLx5nmZZkZVz7XFdgnzbkdWSdetWxxuwWUbrjbmyGhLJDkJFw21XMmxo6v4fthcLZNU",
  "key22": "2WFiC9agmSkrF5kAmYNgUbvb4Uwd6MfDXyDFBgh8UHMj3RmL5N1Z5YpZiTUAEzFNJRs3ADsjwob7QvaH42WAL3wq",
  "key23": "4pwExoQngv74n99VjApJdshyUPEcdQvKeuQ2jRL3RDza36btHnPebZibMmjGcGC31Ha5NxmkeDtGZMb6n6GZPSbC",
  "key24": "bU5DcjuiGC8jWjkdRpbcqSXvgGjdt4Me5vviHCx8ngPFq1akzaQwRbsfxDaRJkegnQFWBWEKgeRRFrcSUhQhCWr",
  "key25": "4joQ7AMiSRMFnybPLpTMzLyAb74pcEPCT2CLsdYiVgeqmNkwT3CRuq31J5hu2nLyq22568cuVxnCPNiuAqfSyUfp",
  "key26": "3bM8gXi3BNiusbsaBSdHA7axsWkNG9456pyBE7oP752bMbMuNJJ4k9SJhRYMKhxjHiKr9Y5Y3WaAPcMNfLUGeEHp",
  "key27": "2pbQsan42V7t2iHsiE3CJvkuKT3gA3GJ1wFFURabjSX323iFyKRmtsXpKdZCsxnJmynHBex7oLbYxzPtuzoMdQjC",
  "key28": "2Bo2pLDdBi4Rbmxix4y5GBp5kbbMxW6nSxPopSh6uycVhgh3fQfNrdP9QzS9j88Gf7gjeNrYhFSPE6fPGAUGcabT",
  "key29": "2pgfRjUvnqRkY9eWqhcj271mYYG9i3Pvp8F6skoe2ZkKkJQRRhKiqLyfPp1RSBK1jNwA6NAwf7wrt1HGChSx36vq",
  "key30": "2VmE1h2CoGqMKXAprXypcxT5cyseHDfdLg53ARiydrwPJvNeZyUg3iHUEikrCorMbuMKykFMUZsWbU1f9vGT8p8e",
  "key31": "3w8PsGrXbaSRvbqVc3U74yr8RTFzFqd5L4dXDQZPMUriToiDihzEDxvfQoJyH2aoiTrLFD2zLchCkGihxzG7Vd3a",
  "key32": "4YM3Yb2ydLwPPGhAdAw1vWoCaZeL9n9MijSK4ZKonBptcs63g8m2m45LFEmfn6zn3b22Nwh2pU6XUGztNMZnEEzd",
  "key33": "61smPR9zTR656kWT2bjQBs5QnFgzELkvbcPa9LqRLJRNqcLzinhgD9vtnRS1XrCEYWegpfVB9zuBcqPxoBhkxzJ5",
  "key34": "g4MMpyh516rNAahwFXf8ZU5QrouVLizKtxto5FcLssUkcaPeHaVW3qpwk8HMiT5jGQKKzEKQ2zwD6ggVXrBMtSk",
  "key35": "53Q1qrv3m6u7xbQyT63EMk7UJxML4JTrKP7HVUNjd1H8cZUS4DVVY3SbdDn4HvfQeJzRxbfxJfWgzdw9HEjuqLnj",
  "key36": "5cNEA3LTFhUfAFJWzjspCY7KYM6nxyC8ePUFb8toa6cCbWe2NcxNRR67uUaqftFo7XaxPqCw7DozCYYvW9p6YbPv",
  "key37": "4XUcurMWL52WYM4qifxqXbmPwWb6XNvs1UnnPhJBK9Qm5t6eP3jAdkMora3pv3Vxh4TMYPxFPznTPmRGiXAEfzKJ",
  "key38": "2j4djadRCVoB4hRBKchU7T7adJ5ei6KsUsAiHGTAsrM6R3LDAPRugZxo9uj59kPhXVZdcg4tQ7SHQqrtkRE1EwLM",
  "key39": "4xkqL5oDuNH7SuXt6AoWCVTdBa4ga2eRZXeWRXUA522Rkbsva5czmADZU3orLiaPKJ6JNhkj9KmbfJtiTbYj1V5v",
  "key40": "2E6ZK22yEHu4unum3AyoRuVqwpFXqzPTCb1WammtGqEMcMehkCYRYW1PSw6izDHEdhJhp6FXuP1iftXRTm9bXygg",
  "key41": "33AE41bvjrd3uy3XeFG5h9ebAjuWHSFoNjNupmCJEWA34sdXLR31YtX8W38tgarptUbscJPWtd3nPcMwHvEtd99S",
  "key42": "3HBJVyxSmvV7GrX8pSutRovY4r6BpsrpFeKmBNpAa98bBH47xPoujNAWji3W22zHBbjeasrdS4S49QrDHhxXJ2pM",
  "key43": "42GaryLjkdC3Sr4NDSzVkpT1W9BYjVuc8VrzgFHLANx5UNtuagqJeRa1ni4kVCNkNkqWMgJXgTziCVvmRh7gxhC4",
  "key44": "3WKxpXTdZtvyz59jMqvkzTozNwp7LDtC6WZyZzvtZ8UTRmipSP3RxX2FhtXMo9gA17PUfnXxYrjBPpsvEqVoqZSh",
  "key45": "yqAja5VeymrEJMawgLuGgZCPLVUFD9VCMkLqehkUNwpZbJMmXgNfRobtPVS9n5WhR6RWMkrz7uv735B1wkLAQkg",
  "key46": "3SRCvHnogwumapipcee42Wk6JjLV52XKgNYdUqHmgDy39oK7iemrMmnaTsXFPVHFAUPEDQiRUL1MKEznn916TLzX"
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
