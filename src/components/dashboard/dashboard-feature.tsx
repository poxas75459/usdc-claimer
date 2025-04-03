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
    "4fF2NziB3SRjtYdNGWYCapQ2BgcfZZpPEgv15s2YkBsYv9QUPvwpNjw3yK5frpqe4Ju5rRuzTeJUKzDFNmmtVmL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ATRJQaHhueojHJWStSxUvvJxfeRqG82JFrDTpWfLH6WscbKY8h9x24DPuDiuPVmXq8NdAcbFpsRXbeo1EC7rkDo",
  "key1": "gyhGujU1bsxnuLNpg6m6nC8rr6UMjCkqAfYcbTRC5X5qzgMTbpu6mg1kkLhJUXUmk9dQWn3Xy3WsmgmHiPYTqkY",
  "key2": "iSRTdY1f6WRQUuiCVoEwqEokWjzwoSFm4iXiuWfcZFFX3UD7V6fuZFJUafKYfSDTee9ZXxkdJHXQktm52i6gjc8",
  "key3": "4tQykbWjsgXw51quswFDvQimVE6npARmV5QruCPqkJRHdxZm395xKqz3jV8Cbw3Jyjns1rurUQkj8Sropemv8q4D",
  "key4": "N6KC79wxDQUUjXdzSspkLMpvSjLwMXiwoYfkL3sS4rpo3hKjX4SzrSazXJkeiKWWvrUWFnwem3HPSEh6gBWNHqu",
  "key5": "4RjMZJjvRpGYiYWApVU8HKfucPHNKjfgx6ev1YQHEGhAo8BpNndMhq2K5BBN2dzNih2CdZUW9Vg5nzciFS4Je2a2",
  "key6": "QNbMaaELP7Xhj4CYGahf4NsJghPHLd3dmxqYPUNGjYg8nAGeW9doL8XRBYstmN4PbQDDuUk7sZPiMHu9QsaoHPt",
  "key7": "3gt98aiMpUqRLqoTaqjyWFcAd8gkPEcsH1TSdiXhg9gphSz3vjPm1Q8ebvw1xr7BjydvnL4EZ9GMnhbsqRUY38jG",
  "key8": "3vqLfNKTDvEy2p5pAsMwPMqhvcBFLTVUhKwinA3SmZjoapGfg9NSFYw91wUPpEcSu2Var98feUAU3bfA1b5MScaQ",
  "key9": "4hM641j1rGUmtQNhxG479JdVU76gfpwnyyjex3B9TFAN5NJwanDEixXLRYJwyjJE9YtGm3XeMSLqemRS7Cfr4YjH",
  "key10": "5MXQxFvW44TEguxvdLpacTAEf2c4z2EqUr36CAsWZ7GxAsHpxi3ymcfS8YBMZwWXyHwuBJH9DpChg9VC4WHwq3u1",
  "key11": "fdmeVF9jDxWrEQUTfcoMEyoiwnvL6LqdpwaaEb847W3YrvCDvUh7GdhxnWyAFinFEsNBhimF2NHUxkKb5AmjWQD",
  "key12": "4tkakZdwu6h5mhonJ4RvdHVGEwPcQxNV9WYbZaTazXkHTrk21SgxB6XgYrw2yKdUE14YRQfFMNiWz6M1QXVkpngG",
  "key13": "5Zx45z8QMb8oxxK4Bav6a7bf1b3KL8aT1Df8KJNYzArJfW5QhFLk4bHgroqWUX8KEFNbGaGptS5ZoomGtB7BDbQR",
  "key14": "5uLzzsSpWwo7XHtuPWp2VpdU947tp9hRJRyYcFxsUaMaNdxUrf2H39FfzxqRhSkiuSHt7pyy7c7mV3z6VWtkZWAS",
  "key15": "2web9hgVizNQ5exziq2sYXKjj8dAcGfy62EUnuKH5fjZax5odQPEvkNTn77PRhTKyaQDN2DknbEzCeQZuBx8YkvF",
  "key16": "2pdHnXveATaUU4gkZgXRzTNbtMfJFtkeTJAku7QMhwgucC1EhHfkzU9vUGoTpbniYQ4gn6PJcHJuzmEnoRnt28P2",
  "key17": "2R7SgkToTtFB6Wgb4T6k4VDc7KdbnQwB2FssEJGHd7XH32yGsRW2mWKCUrc27mCrFdgqs5MiHfi7g2Ta6p9ZLnaE",
  "key18": "PPeMUVhssfntoWMWVonVrW3C82BW1vTWdjzS9SBNfVpYB9ADTLZN4tkpyzevPAT7M8fzxeuJY35fTa3vEDfYvkF",
  "key19": "2u2iD4fx3kW8CnUbNB27rKZ1jWJdaLwiSfLc1jKyXgfcohdffw2tqTZnU3bU5uuENfAdBtuu3LgvsUkn4uxkG8GP",
  "key20": "5Usm7dSztyVCmewo6w2oLMQas6vjfZGn1yrk423BBY26AefSJjHXoEgjbVbBF8qRNXQScv6UxknXzmn7Gvp4unVJ",
  "key21": "4D4CLHt9ngARhQujEAAr7uekCU3EuRgDXcfFiPRkARTek9ScAFWsG8X5NTfeJDhHmifc4r5VtfjT8FTnDi9PftuD",
  "key22": "chAoRRCHevKoqoi6J6qYY4PzkiKytJrjdLKvjChrRdaSTEMRRY4scjiEhgX9BTzK8chohuyBKWFB8tGbV2wwtzz",
  "key23": "fL1iWhjnzxi8AC7X8nJAQPGUUtXoBfYswr5jrs5CeAeXJNJLGf445HXt9yYUiagV5Lb3bQWp4ei2sHFdYXRvZa7",
  "key24": "37gWGyyP2VC8QH29P9Ek23QLEJfiuaH8Lqf4Cg3ma4oS2zd5DtV5MzdQ8njN2mALArKoXjQkMcS1ZjevnmqW5Fgt",
  "key25": "2wKriGwoYhqpMtjhmta9zzY3XLbJ9SixrdxQ5MHvZRrXYYPkPtAfgHsgZdSY5oCtT2stPXaUYw3d5giwowH2cy2b",
  "key26": "3Gf4Wr1HwMzMU72NXjzNgux2jFQsrZ4RbERsCzHmHdgzuJEgzQkCMQ6sUaRWcTAzs4x259GFGka2dsRvBjgjEeFe",
  "key27": "5bgjxkxBgGaXURNaHWrQDHPZpx6cN61aWGBKqFZhRk5dT1Uaqcy3Y7WyLSuGbwFhrxGr86eWKjrSbWNK8Yyym7UE",
  "key28": "dgd29v7ptHapyq8XFfgC5kBhEwx1NJQsv8P6Ycx7DuERMManQZbVweiuwpXphar9QXxwWoXgy5we5rpdL9zcNPz",
  "key29": "maLJbzyCRPoJuxsn4EdL4owSqKPtNLZ7EKJLtyj25S13B3xiqezJ2zHvkJmNTRz9cxDqz6ixUBPwKibLUbPx662",
  "key30": "RA7apnehY2jp9nB6M9XQpyjodFxZAZHK5WuFJBoxYBcyY1oT9BHsbuEJrtmdw7M63qu4SeZC35n73vBbMe1fXT2",
  "key31": "39HULhzpNFZyq1WwUb1ANfcGFy6Yrko7KdeQ552gjhnxBtT32Jv83oftVfmFSnjaKzrkamFMPUYWiD62Yj1vpvkG",
  "key32": "44t2rL6EXveu5JrKMAvhdaeikcyYVBnYWcnSXgqkKNcumLJpNMr6DYb63Px3R8erqnHsxib2RovSZ5Hy9m4XumCc",
  "key33": "64bWeUmNuXpsLyykHrnz74vpuPuPFLjvpTjt42gAW18cp9PakejP9dAsMhJVZcQPPc2RBo8a59y7akUATA3sKoZR",
  "key34": "2fT7M8azC2uvCPprSHgn9Z4U7tUS3eQgXPETxdHC1cu1uvJMqXhymS8bmLepyy4hNerqJYBcdcTeyY5wFCJackTU",
  "key35": "5p98er2dusBD7ECyEFQWbW1cmRFEot8oF6JPUMoa3js6fQ6wE7xqrFkjq7khFPDFNdVGYoygVXpsCuYB7KnZxH3K",
  "key36": "aV3jSULy5qg9QKYFPFmBfwLW4jkS9C4r5kD7jUsZhTocPDiHZ6gS53NxgZZ3ah6cwzHzbDbPr7s2L1S49i8cGa8",
  "key37": "3TtT7fyngJUKWfe9mcJxMzfGtwGrUUTZpov8iwMbiUf4trsngRvNzZkTRZLbEfapx9K86bbjtqpD6uCcoK8UnSiz",
  "key38": "55ibcwd3Su2G4UWonAuUPKDVopuXcxV4o5bE8cDB48CLyw3Nrzia1WHDv8iQMzDAEj4EtAi9UhXYgCcna8ubZP78",
  "key39": "4dgY3NDHjH8zfrMXRRE1oqTtcgGazjd8HyPzFwfVuh2Zh4yQ19DMreERbcJs1g2T9fchUwSLxHmpooEHyzpgNHjw",
  "key40": "2yDKUk4vYcBNeexocYbBk1WfuUroViFCYVPhQDzDWS25b9QdbTW76BnYQqDomPDGQqVywxSvck4CCnspVnbv4igb",
  "key41": "66CLPNmgsTpGoDC6DBq15xf9ojascNqk4HJF8d9teVgun1U14mrtHBKroZLQPNCwRaYtbkCM6jSpY8xGK46TvsJj",
  "key42": "5N4KH1jdQptyn3ihWzVwPPfEJJJroFMU4rZVBMb5661igH7bWs6x6NyadQ6GQ2erD7HpzZ2ma7v4wrUo8X33JZev",
  "key43": "21YhP45E1WAvfiZF48AL15n3369PqHizbVjwfuRuQnDcHvsD78eVz6hgxCRbn3XJTdRfFeT3Snew6dRkLeyqfRcq",
  "key44": "2jv5BQXAZVNvsW7K74REgn3yz8FehjnhDwKfxmoJ3TEi83hkEVUy5onD9XfBHHAwSXK4JbxKYpwFuRs7eAQoRsJs",
  "key45": "4zgTLvz15SCUtxmqrfcDuSh6nG32frSdjdC9A4srD3HKud8JRXH27kzCm4A3isGkrccwvFnq5viM5QYGYNHVbuRp",
  "key46": "3GoqMBsqMdd7LQjRKaeZ95Y7vGtxLqj7vToUAKrFr1vHEU3nU2Bp8jZuxHN9ZDXFv8J52wfYwQwcRtFdceJjU2NV",
  "key47": "4DGExNRNPExJt3MAuZDAHobaicR86ahhqrP5dSBJ1RorDHXdnPq2yM2rUiN9SnBsn1GvWTcjABwobFhC77rBasWb"
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
