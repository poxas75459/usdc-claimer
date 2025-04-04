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
    "5PeLviWmZK6UibnWEbumNCgmMC5QFRRkYqGMUg5dg7mVTeG693b4qvpKNBaPzo3NkpP3U8JNsSEysyRRmMsJvGmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "637yrqfwetDxYgAtcnKSyREUqmU8Y6KrKkaWx57T7FiAHMqrPJUzpMwVBJ2hYQruymZxcEwDNFnDUvy9uiQhr4uY",
  "key1": "42fq5tB7TSPp8KUFcLVxe1gJqEmwU9WNFXFy5KYTPo95YaHAFntBS9gZxLZGLbnZFTBAkDyMc2UqFZH41XhixR8v",
  "key2": "AmpRepZNSLD39nfntDFBHrV3Fu7uNfVgiU5jsxqhNDsFhXp81CCpkpoxEpmPdpD9HfhLqWFhv7a9eKVmFANyiyc",
  "key3": "67dppQKRF13UN9r4BzWRwasfyVJboiT54kbcuGD41TiEZBEM1e3KiSKUfGXW7DcVCBpeeSqhazRoxfu6EdyoEQi8",
  "key4": "3HpD3CWjqY3NReZ6ULkNvcYi58cAAqEGwG4noue1DtCdFHedLVcV27XUXgUCTZE4mYg6jNCNJW6yNxZsnGgD1Fg8",
  "key5": "BUMzPmjZPcwsR5YFnvwCp9Vy42o5nvw258Wknn76AvkSvwSnjMN9oB4MULtkZSdYmf3B4y6pt2M9HqrAVhWFwz4",
  "key6": "2LPdXhJsZEMreAjGxVpmzsoRshPMvT7qFaifvuGjuxZXEgJctjWkoWVPCBSt52U2sYpqq3nqP3H3b6T9y1kHUdjH",
  "key7": "5zjXH99PoshdGEmMmbWn84sYPCJAZB9wSXzGWwsJcfXT64zSqtsyieqFnFQjjb86eVtCRjzzuM9TNU8sZnBC51fw",
  "key8": "JdJkZZbovPR43ydTpHBJPmmpqz2frd8mEbWExMQXPrmfmh1r2ohKfbwH43fCZkrYiubipfhxhB5Pc4zVBY8T4Gm",
  "key9": "7rkC9pR19T5qjZFhn6FRBPep2TtyesupVJzoycAr79NakdMSsfeGUEmCHDdcWXX4QgUnxFHvy6dAcBPaioagueB",
  "key10": "2KidAqnnmNFyL8zXghDSfTdkSEAHAJgFvmzAGB7Vh4oxtCPiakZ5FJedtLwKTmjLmwS2hjNK9mGDAHkT5ZodUkhi",
  "key11": "HYdbLtDfFeMkZ1Y7et7J5MgbhFTX1DpstRkDYMyqqDPvv8FG7mYqzFJExfxGWSUyFoc26mbExkQDmX3Yz4VhqdK",
  "key12": "4igVANhyznjLtuqMSwRA5YGazPmdLN2HTUb7xxDGf8G8Nrpk1ipfaBTMjbTxuLhyFj2TR48GLe75MRJExGtnsDDb",
  "key13": "2MA74Ym6QxriMwfYEUmT6bmhh1MbowDjhP8epqzQhH3TUNozkBxtXo4Fn1p9YxEvQphhRpfWPMi6hx2HLRQitDYN",
  "key14": "5DyJrh5Y81u6Kq1Fa6TUXU493Ces29Y6QwNZVxrC8nQwr4qxa8wqwaPidWxoNaZKfWDZDmFHC6YDhkeUPXw3q8Nw",
  "key15": "2DL3j4MBGLx8xWtRC4EffvBV3dpRfDn36aTnjBh2eFgVzaTk1BApFyMrcdBsjvPeG5PD7AVJuHEJfxATLQgZSoSo",
  "key16": "3kZxpQNXAwZNXKT2LFvGVGJSUePYwaxJ8njheFKS7DJRJr9xHzJibZbtTCTieYzz4UYJaeoc7MRMiUmywdFqx6xq",
  "key17": "BBnm2r8ssPVzickpLS6FufnajUozeXFHhhnmsGBuqdXugEZhECwicoYsEq8aL3pGw18uELQNwTYQfxpaJJLXnqk",
  "key18": "2Cgd3ckfsMa7fi1J42MUWGsSeeGWzFaQWwzdqDdKhFhVyHD6nB6g88dYUM4tufJL8jVCqyj5L56K6zf2H22MvsSo",
  "key19": "KKqYZMW9BtufwWquCqt5iCXCQTVaeUuCBrD3Ro5KBM5HcRpKJr9Dr9WFEye24XGmS75Zvd3nTH96mB1zVgFBD9k",
  "key20": "5rAJga6BEbUCt6qWND1hjyW9esW25RTwnUYica6KxW6ujR6Wktm3qVCczsKEkUWN25vqSm9q56UMJEBZdGgrv5Jd",
  "key21": "29GFLbDHiJ5fubQDfUmVdWH9rEha2Ep2cbxuWYDMZ7oa1cU3scoyLpeD2FKeBPcE3rhCgHpiY7ADgyjbABfCaqM6",
  "key22": "33iVe4DwzL1dkP34i1s8hmytp9QMdjYw9yqAgcduq9Hfy6ehFF58S8bBrAqGvZCxeGKE83kYUmAArnCxmwyCBrTc",
  "key23": "n1Pa6A5mpVksHckFpKPMbQCobLPaCuxduQKsyoCCzDuhB14G3zkYRsgvmLAVytv1G3MUQ4BALReTdMLdJoovzRH",
  "key24": "5oZGz36SWpPoaowY1trjEyv9SifYR8dRCtUm6X2TdqzVJPba7KRHtXZdKNp3oKT4Ax43hXy9No43YK4nBx48oJ8r",
  "key25": "32wX5Eau2q2uq8HciHJFgLadb3BGsV1WGUYjuiEq1KrMdg8BfiSEADcFz3Xsodq2MpV792uipMHKQQMvafLgNMRb",
  "key26": "2vKpTBHQcNX86Busbvnqa6LN95p9K965Rxixjb1j5zJZg8C5QPUGxts6mnjocA1ufBuHicf1rxwKQNWcSoN6QHH4",
  "key27": "4AhgKf2DDAu4twK1JVwmCHbejQTjx4uemhjygGcpoJpCbren6ofubMynipf5iVQRcRgC7px6tKpw7iQCuDHiTms4",
  "key28": "67P3hssoBJ2c8VqGqYofbuUDSDuK5miSg8xpbmaNHKneYyCu2SU8d7gwsj94j5KEZqiN2jW9MKsygK19CnLkNAx9",
  "key29": "2DM6f2vZUvgmtP71DEC1gYMw48QANAptcpqTA36qjktMs49RxHEeXDEt9UbiNZ13tu8UGu6nSggmdphktMDgo4YH",
  "key30": "4M4EUbJaazgQi7LkD5XfhaqCvYt2uDHvzyeFJnDFaMHavGkWvv59cqGhJnibgLtPbXsA2xs9Dd6gE1bPhqNMyNeK",
  "key31": "52Uxegj6JeysMQftQyThSDmsbP8gZ4gNCkEQufirLzur7qUFHKkxfc2VW4SfcZNF6D27AV1szVv8BzjjQ87xmzGC",
  "key32": "4adeCFTwTtcAFhGHE9sgDCQCD3JK6oESj6Fay2GVtKoKygPtW79bvBLHKCd4EjmHUC4P1NfCY6LFfzKCBKh8cmWd",
  "key33": "2eG1aHugWSLpzz1jDAgLBkwuy7rr49yHeipdSsqUsqLwebhruFCZ23gwK9oKgF4wBvJhyKPocLsRN6quh3MjFm9T",
  "key34": "39Viw3t3W8nqisDnh1W9oVF5ApF5hzofrt45KckT7yY3SijHoGYq5nEYBqVKzsd2fYVJmgHF6nbKddA5rNcvX7aV",
  "key35": "43G2ThbpKtsqkecZJUv41tqvDFoooZmKwqe2o7VR4id1QZr4w8CwnjTM2rhiQhwNex8Y7gCDdiEvEWwMQBiJqsyQ",
  "key36": "5D15Z53gzgmSpDgGv1Sq1kHnrVLAqbHfuefaPaiNPoBG71ote9JG6vjgvt77NYP16ksGdkuiBiUpiunt3tSej76Q",
  "key37": "9CscDQbEkwntY1VQtBzD18AC5kUYACK2S7bEYg7XkFx1umyv3PucgW4qwYJyx4Swzhsy3XxPfPpCD9w7wPRHSLa",
  "key38": "5em8hiNbRMRBmB4LRh1wNLB2v7AfHMCsKLsLmFwuTuJxdwxu2C2ohoUVFkibwCKFmYUZshFWoq7Y52AwvuRiCRAC",
  "key39": "5LaQWDrW4cKMjdCqgJqYAHpVabCDyZvudzNrg5QywKNPmQT8gYpmJtGfo8EqKnenNFHPYwjSxFzwheveUFiEPUWZ",
  "key40": "4mywj1SgNPCj5SXBnRX2iGFuXvHhiiF7nzUzvagAqtbNs6jaKds1ekYhf37FyqkSxcquvUPSofKTTnHiDJsyDUGc",
  "key41": "iyYwPpfV6wvAbqmwZTzte6jzkqGRoxcBm3kvjZNYjaAuNFkS822SXK6y2MBD5YtS2MPgfgHC8JtnMCaoBdGgAZi",
  "key42": "3ZLc8hoSJthptwPTs698k7o4uGVwBY5xSRbRto1SCGfqWk7n5dVoem6y73dyhnJGKjR4BdN5w49uxZ7ruGV54vJp",
  "key43": "3R7vADrH3RipXbSj9raUdosDYQcbBfp1V7WQeEK5UBxU7zebvE4HKhjdJrv7wbctEc8CajDsYX9oW5mcDL9zxZ91",
  "key44": "3E7vJ36GVBEyxEGKc2fQReuaTfVEDA1XS5qnZhNnBK25Hio9o6NChYaVn7tJHUEh9cFyLNpWfJNaHu5bijdTtbEg",
  "key45": "cdMsjRLZ6r2MoocgwcYzQXv85PAnWN1Cpwce6cuqVZyKy9z6fsj3Xfw3JgspXP9a9fNN7RMx7q7WLhiZ1LugDyg",
  "key46": "5y5zLMCEgS9texZgp1ZthACdc8CsHJcXekdFj1oCijLwVHF62Ch9Ndz3Gx3sZfTm9smofV7NR347L76GWu8bkGik",
  "key47": "4LQwXfgWU7PFBcrVMYXaSpwrHaUaH64dswTQdFmDYMucrtspcfWMG4pomrpKtx1rnD6JE98ZYG48hF7ZAnsnH8Es",
  "key48": "5wFxF37NDd2HmcRqeDZahLgW8cr5NUG4rCHsBEWmSyD1KTxBeADhKRB2QsfcKbT6edvS7yQrvRcLWV2793kfK5p9",
  "key49": "4N9ZXFp1F3aFm6A4U9AUZcsy3YEpnEgLyPGbzia9JjHg2saeH2sPSEQTNinhqy6CUq9bM4mWULEsmhgatNz2Wbtb"
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
