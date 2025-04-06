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
    "66baoXSRH9Vf2go7mEHEtW6mvn9e8Jro6d1TJMZXsNc25F41FTmFyFKGcMM1tEZKm54zXgJWdrz2LqmF8H7MW3Uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EF6dxmvixjBgBqpRRAazEF2WW9b3Tx5DuZQcVykVQoZ845wkWHvxqQVub7238Adr7voRpgYVcgRL1xjeMouW9AH",
  "key1": "4L8Kx7CJrNtF7cbMvYCP9dauWmAcYG68GcfWcuUFH9rBk5F8MqLy9dYLK4kxcig9SjzhxbuKxoGDfLfjFcvSe8uy",
  "key2": "4ftJRCPgHboWELM42uBQRFL1aaBXqsBoW4CYoVAuyPWf1guVrtx8A9tcUQDaRH489vfKn88zxzHieBcz8NrEb41H",
  "key3": "5DDke3mfcJU67nTccqVLfgNXvErmMDmLbqyweMC7heqCxZ1qo4bGA2QaBtnNULJagMocniY3pyzLwCkZywtWbwGv",
  "key4": "5UG8rimnCpSKDWiMHvidimhj3FUjcJ2WbA7hH2kd4ZXFs2cb4pD46QkJhfqJXcsPsEFJSybf44AA1an1xshaT4zx",
  "key5": "3567beqDgEWEL2LKDXAhwXKCvuj4c8oempHiyHq4PARXqVTjptLppN4cXXYWBXiWnwgkqryccKF9kbsAy21fZNr7",
  "key6": "3B6JLzGo24N2ZoQgBexWtwRnCifLtpeKszCGQAXLCi8hyZ2W64U8kjar7qj3dwNSJH29RUbh9G2vqJa6z9EsJeu7",
  "key7": "4VmTRBPGUXZMe2St4eyAiCLsysbK8U6cjQXXbS7g476rU4oPf6PNXmkXiFuTyVgCCs685m2RG4eutmqFGFohZ1Dx",
  "key8": "2XrVnQHWcRSmgkiwVtvgsnh8Tiohy12BRLtYhsSo8unUe2MVVQmthQZoFML8CmLjzVYf9dQn6JYbKjxsCNzpbgAX",
  "key9": "4HXEt27EV62BhWFrEjnEMr31bSrFBQrkkPe8aQLk97PRqVKypaavyoVvPsmtZ7YTMAdCdUQHRKF3CQfdfTbxciss",
  "key10": "2PPNT9d2R2iZD3JqvY2PbuFBHcGipANdruwHbmcZpWWKmFFL28YCAafnGCfCraSZgYasDc8gXhtVJ3N2PCHTsdPJ",
  "key11": "uuq5wdGhyzTiw7WSKFF1wkpX2QvrVcLymS1VCTcK3NZcA2NFxosrKNEpiTVWLxKD1ZkZooZbyuN5QBGYeZrCXwH",
  "key12": "2VcAB5h7qDC7komTrQuPY8TtoYxyH6y8qnyad9ShJmSpk464Grhihv4WduATJgrjZyhEDNEhYQ8EDmXkacpDrTEk",
  "key13": "4g1qWbPpP5rxdGYMbSLf7igjUwKGsqqD9xmiY6bGdn9xXHDCaqFhSsa2FznBaE9YG7a5CZaLXJFevBqdurhrWtAV",
  "key14": "QY8wtT91y6JScoDeVaF7xMSVTwnES4Rz7box2wjdVUisTmwJreQujq2RaHC8esjnNqHoYydDjgfhzQNh4VbVadp",
  "key15": "cXGm9jqDdQKXSiREuT3AnCtUKqkhKektp6y2GixYLD3FQ5MKxJKUMpLijXHsxRKdixnUGkeTmTvtMPr19Fk1xfC",
  "key16": "3X9SJzhzqpBgohTUE1xpsJuYsivfTHkQCTr3imGDy3W5jZbJxSKtutfpXdjJKLhLnftQfFNFYH3WGh6UAg8r9u7q",
  "key17": "4KueHG34mcZj22pGjDNTtfx1QwtcjJGmQgtnK23jHNvGtC2FgkmMD1tRwMJCTwDj8x1PvJTMz5PM2DZYPpaFQn5f",
  "key18": "3y9Pnhdj8s49m8nnEhg7sru7mcL18GFvSbStQLx8DdrTzaWpzFityg2jija5eTSYqwPoogN1T7HPfpuiB76H2tjW",
  "key19": "2uKvPbisgVfFmbbyyjimVhE2Duo7Lb92tKMa4nFiAixoTXzpUtPxbjb5ZMgatPWu69pkVtHVQHvTxvix41yqJvgb",
  "key20": "31zwmkRYZzHY3YSrecTSArT5QwiQTN3ffLtVL6XcDbndXkzjDxKS8SH6ewetq381feQwiJBfbBbBVB4FsS6FzqhC",
  "key21": "vJFZrat4Y9fLB6A64Qvggh7p7CGT15u2MH3SdooEm2bxsyxVn8wNY3GozQJ2Lc3wMNgDiDG3ZxuLp2DpzvbXdb9",
  "key22": "2Q9D5iHaCNESaTcb1rAE9wjegcK2mjnVMVGc9kjii3NMEvYNEA73ovDtjHLu4Yy4ZTFGLmpGiBmUu6qgJDiqgpx6",
  "key23": "3qoSauXUAuyH7qgyR3MfnYjRJKQTxUNVwMBFEcyZeW2U1YGQunH11DT3stKunWocMDdMdRHd2KiWxgnVNNUukJcD",
  "key24": "3qgvvDC9NJrBU4adm7wN77j5jhfDGpdHt33X8kJznRp6WxrTbXXP8H7snVqacdfD3pXMinWGz1hmbuRQqNo1Y7PQ",
  "key25": "4MUru4n6hPYKgt2LFS8bB9tyzRgFZ8eCWNJZWaJNW7CpwKnkkpG4aowQ84WMm2YeGKQB5J2HueHmU9EsQKTgkNCD",
  "key26": "3aQXyftNLBkpZM1nVuiGCYPQVXMkGF4qGR9qffALR3rMSZH2HRzbcN9KRK7RxhXQXwUCAVZ7xZ5zLKDpd8NvNb9j",
  "key27": "SXfymi1n1ph3jU91QaCeTKWjmK8FnBFKa7BDjVHHBqcU3nhiGF4KDbLe9RuQZaXGDCGYqWfpjjjC2FbipvNksnX",
  "key28": "64DC6kcVMM2vG1sR1fyvohS4CrVqc1RpFJ2xoiohEsKHfUoR9rBRtCWmbEETsLkndb2RAvsCkCdhhLodYPpi2Muh",
  "key29": "2CudQkXqC5KuDFHhUfVucgNYxdaZDWPWRZPvaUmhJpY9rhbPKbDhvyuG247mvGm6yJw9yz7EMsmae2cucUTYhfQZ",
  "key30": "e3wd6sjMHKdyg7xPCzcPHZMAV3hcqqmYqpK5BfFsv32fRpaq5zh4DwuJVAAo6L3WRPmERKDpfBeKBtMU9C7Sv1n",
  "key31": "3mUcwMFxwpjtwNFfi77nWJQhAwq6QymwJVDXcLfGUCugTLKQ9SukDagGqmcqpWcTYeYz8dEKhUsK3YdR61agRZWr",
  "key32": "2q4WrCvVmtkVPWZ8Nvio4hHFb2BUvkxbxzmg24nYY27FnWfrBWEBEuY4WSiem4MvgSuRrCW2T9qN1tEEirYHumt9",
  "key33": "XsSkEcxzq5SCsrLpKz8jqtpnK5dQB72ErKG9yWBy4PCkP7Xd4rgri2d5sTShM9PkeiAR1tP8AUEhwwMvoyh4PFf",
  "key34": "5ZqapBow9ftboJWCv2NSzoV1Lk2GdN34YfzaPv4gwU2hZX5UShevdEgWJjA9C7dnDMrFYFrzew1ncmPAzAPNr7ws",
  "key35": "655svLbe4uPHgrbBiFdBEZuZW8kWcFMzZXZeqF54hbJLXKorWbGALz16rp42VQ1weWxbn81YwWbBkJVme9gxUaVU",
  "key36": "pp3Wjtv2uA7BzbzM7jD6uvH87yeG3WLBQPs5tvnc14DN5rQv73RNBQ6eypn21JyZReJ19Xk7dYYGw8xeHjWiK7L",
  "key37": "4mebZrN8yCTjem4QXGbT7utpb2xPnSXyK2JftPVTLYUAN4VL979MjB4UcRxYzKDDoVsbbFWWbBX8HtmXg5Pk5kS4",
  "key38": "3UoA3QPQap8YDbNcvZd9bimeXf77wGaZcifE2v9h7rGe1HHk1KszAweDJtzMuhBoK6Dc52b851tmfgxJR5vSyFjf",
  "key39": "43B1yJ4kdigY561mfJFsvWTTWCm9njLmc8jmuvnd2Rr1xAAKvbgMUe4zmEbTp9zip6DQ22U6NaWEKqaLzC2FUCZj",
  "key40": "GYE4khKNKARwRBJeaypUvM7BFAa6S4c8vBo4njufM1FvheYcTC8wzLU67GcHYUe3TuVPM27ndAdb1fZJdd7YCuy",
  "key41": "4dFXBQ23dX77xckrnS4PUErK2jCtWeqwBgy6CYFzxWU2Gu6zayfYtJz3775U8G44S5Gmmvgc6rjYzwoKWZtt1914"
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
