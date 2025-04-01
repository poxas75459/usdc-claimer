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
    "3g33FjHLUSW83c8J3xBXa8tybeYs1RG8aor25NZ1xEersUBTWUDM9PuWGzBcbuYYWbtFyRe58g4ik6Zpp1izkJ4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HZACMgUK1y5B6cxtV8zNQ4RvpP3WsPaEViCtgjFpGQVLk4r2w1wN6zBtP3cY1e5W5mXgfPs93heqLxwhrNYGbax",
  "key1": "3FAC58fWJhc3LkAaHsK2XkzmGQnTmeJ3dxUBrB6WP5rJaCCQn4p4T6a21sxSRoY6KUuHtpKEpP54oTa9RU7ExMDH",
  "key2": "3XN2T4a3V4oFAeDtH1ASuXnsrKt9KtmxYWdTjyQ8hbF7CR6cJsx6LGSSZMuywxF8iafeXc8rdvMyhcEYQd9zaq17",
  "key3": "S6S6u6gdA4jNskePPAD4UVVjRAAouFKSddwxUxHwDsoh2UXmzNNbMpvSdDKgRYkUEiayqc5FmzaanNt1ftC5ZWe",
  "key4": "3MckG2pLiedaBugmpb5YHHw3L9hdrcDgGKEpFebCw7vKMgtMg871FyrDAgqBCuQDaymfEPAxAhcVYSj9T1qNKaB5",
  "key5": "4oyqCDEh6FHiZJka51HVRr2EmcfLYkcLRXjUPPkyUrLekgELLwJTmQNRTzZRvQnHtZNjmbaFudS9LrJ2hEphxYPX",
  "key6": "3LtCj19GUkJE4HgJnJxcW5hTb2ugjPCe9MN3tVKi1DDJWdnUy8KUsALaLdaDWdh1cdYQvUaurBmAogX1VXc391C4",
  "key7": "3Dp8EFiktwMhfqqUkaA63twQ2hKE8Zun5MV2CUmkxaEJcT8iRGnuNGh3MSwRjTtQ3PYz7VPXiB93DFhjG5pYUnDZ",
  "key8": "3Uy23io3rcyKxebGvkd5CT2MDiMH77TfKx3uDj2dcngiBkmhBAMXg5DTvZiiysw3ZDTvi5G2xeVn8bJT7fqunjED",
  "key9": "4w9MGknspeNdXcrp4gZPo2XFxL94gBA8cYChrzQLuYxvS3UKoTnc9mPRpHAfmUYDBikR3Cxwyivnip5yhc8Qdn3f",
  "key10": "2YVjpDtBmecjSe9qH9QWdwPcwMVLxHjPkvsDxSgVcoKUG36oBNhaUvQYfv4b6LheWE49qzkkkuDKoJZVv5xZJxdZ",
  "key11": "2j1g5qd1F7m8aosmp7K86NvxwPjTAoXKNCC435c29ngPRSRXzZjjzaMgRCpMLkyAwfP2SCh8CV4hEJF412JpkL6s",
  "key12": "2stdpHXhXuhhAXVvVyuVpQzbk14GJQM7ZupbrcTnX3JoTg2LLnDnSGYZDgZjW9brqkN7YZKofTYjd9VBZ9SBincT",
  "key13": "3tpuHqN32dmRcZr31jnxKz7LPSUpyCBoME8pG9FTW7N8hSnJqPzxLiWrFwhHBYw2zFWTauWwVEuENdJKRpZRNbZN",
  "key14": "3Aec2RSCj2pEUc9fB52qQxXiVTftUGyPbcCqb5X7z6BWNbELpbWfTRVKHPzYDULYbnbbETUV8N9FSot5fL811Gao",
  "key15": "4pFv4HzhLak8WeXfMZidpj7GgBKP7gJkF9RraHP84RBk3SsGfV1ipXJQ7RxNhr4G6AqtDAAdaEog1NafcR5pRs5m",
  "key16": "4ZgMNyuxvVjW2vXmv77GoAuX5j6Jt9AwjWWfV6RAZZSNxqT1HM4q6vdZcF1orLUBgKVL7q6rGqFgjK66FMXF7yAP",
  "key17": "4qKH1ysrMv4DMPcXybQWkCGfrMABqnNy8PaQyEGoJBM4sLAZFQTMSgntjNT7RzHVDNDvAMzS5R5ixCj6dSLbD9hz",
  "key18": "4Pdt4ZExwwZeJHqhMbunahjqwk2cm64AsJjWtYZjUeE3NDidnvhRSZMvxojDnUpKtjuBdcKJsMGDDQ786ACAcfos",
  "key19": "5h69bX9AZocudbQyK9JpznQUq8FBkBkD2Mz2rdD4TrfUYMu9x9mYddRziKUicq1vGEQUETVofsx23hNpZdbAQN2P",
  "key20": "5gBot9ywZ239vEfmAaDSAdr2X1vRcHTQgi7sV2efE3bntPuX14mtbn5waDuYcDTL1jgojw1CmwpHs2gcoGCHtn63",
  "key21": "428vbo6WYFTNC37hZoJz1bY8KMVVM9ebtnxQF9saS28ihBKT3VeajLwFYFFNTaVWkZhRxdhdMv1uVsygNLiwdMkU",
  "key22": "9vCT2PHQz4hSgwXFcoVH5445dBUWEoCgGaDnk1U1a6h9MsKS4PeKpCcr1rVFAXJDWMkv6Wu3eARG2rET2YuW2gK",
  "key23": "3nzFouTcQMPqKVrodtyLDxK9FbukZrmQraJvKsNsDytrBZJs4mtZMA6kWRjeKQtJW5uiDdXH5xLwXkCf3a3hrtoo",
  "key24": "GfvLNV33u3QHMb7EeQGXNafHvTaSqEA5uMVsLVqi1J6stbWyQCqm1rMxxAYbxuixjck2S9FPYFQKEg7H8ruSpgv",
  "key25": "65RHPNzvfhFSKjCLxydDd6SfDwzvozSuEukow9u5knNrumKggPLcTMA2nniqyCcPwxZXQj1Y4tiCxot4NXczELmX",
  "key26": "3F7T8Z9Un1a9k9gqABugDCjwnoJ97k31RcEQyFCzwYYZPsYoZh2gjx9kcYGfGcvcxDxkxYPJiMfPuJR8wtvSowqH",
  "key27": "2jG8gZhPBx5r6diwLjggJK3EqGHmG5Yo9WXDk2WTm2kftkRM7VK4qRNgcghmzM1yEKrQ8sexThEYUx5Hy5oFrFdD",
  "key28": "5HUg5zXervsC9NG37Xe62vN3wbhcB9koUGMUxZEDvy4mXvBEcvo7kyJsV9qevnNc1SFZH95KH2DiKDZBJbNDy8S1",
  "key29": "4wSCBPfGXvaX4eTN2fFbFU7wFDBsrhfrxxtFt5pAhz9v8V7D7ivx8BKPFvGBqk45Q5QMTSsW7wtqVT3KAXKwemF1",
  "key30": "28btuv1JoMimooK9R19t9iHAt1fMzoyUdxqgutmmzVgY7tKgk9kHnQ9UtGJtFBHsLkYssz5ZxYQK1vb1wfyt6Gam",
  "key31": "3Y4ECNVutbSe8Vf1u33u9giXTYXDC3mkNdLTuMyhTuM3TiovKsf57BqJRtiqyrBMio6NADH37dDEA8RhVe6y9GHW",
  "key32": "Zf5K9yj1zTHRSXmVrNxBzzmhAVEFn8EDhg2SJfyWjmVUpn4ERDCkxCjCpno1qj1mKPgrejzuBFK5F85bxMwyKZJ",
  "key33": "4EAUs9iXMSCwxskWmhoZtNxqtjwUdYmAH8YiaZXk4Wm9Ex6e2k5YrMKd4Zaah223HtHqZHdjUR3WPyDP7LowKwcq",
  "key34": "xLLW6iyZ92kszAfsAA1v97ewxFh7SA7iXTDmbGu7po91gR4Ydq8essUhDA5nXjXBwyvmb2REKXjanMy1LxnMSMS",
  "key35": "3bqGCzjpZRMSq2cBQ6WLRZwZoMUSbg6Z1gQxTeQz8Ts1xaKASts5RdnyRFpkJ61gPnoRw7GmZWvEtF3JMDonA6Hb",
  "key36": "3g8uqtPaQjQLn6TkNzAkhtdKsP44yqJ1KFuZLHhov2SBaoqfEryGQvBzQ29taokKJsyNFeQHsBGinAZdKZBXzp8",
  "key37": "WqWPN9CFdrAZihwtWcpbGGiwQKnMPZRHwKRC8kZJXXV6qxKaSxAmKmmsrG4DbTjUfcR6M1GMhF5RMuMfbCjiVQq",
  "key38": "5ewCkbAVAbnu3hqjxXsvNVh8o4yL3Lm2Up7tWkUZoZeUVZLBZBHGgAjfnHbnrS6qyPZ3hkU8fDsScKDzSVJ9Yw5G",
  "key39": "24mo2mR3Qnf9povfggndYvQbdynEuq7c6P3wEHdNBTyi6wan3RVjXaNSJSfEMkmKEvWgiH7Cxsb79rPeBiWWXaKk",
  "key40": "5uCeqQNBFBowSDT326GDohhWP28TCt57bbAUaSomjBmdrDdTt5JdsxBw61Fsz7FSB6kDCitVEHzjGekc3RxGKqSo",
  "key41": "538wJvjaciW9Qi4wiEFJGKHHJAV64dLXmDFCS8avjgvUQmBJJtaXGT414Bt7aNm7bZvhU4jJWmTei1m7Z7wLuhqh"
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
