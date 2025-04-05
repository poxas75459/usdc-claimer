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
    "5ZX36NH3kRPNWmyhKMz2eZ4tkAahRqieRLFJTqo13DL47dxXV2n7MnGpZKtB1hpwsXjWHy1Tcc94TeEQH9cvSpuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3thUvzwoB4iAVY9sudve38AL3KfV2EPes5HSoBVZvuvTfqFMmFi2ZuPngyAx2e9JcjewxkqptrVG2HyeL4iccLLQ",
  "key1": "3mYAcwddGAMh292A4ixqoMTDqdV5BNhjQBiziVne2Mga4VvfUrED3gQWTh9qAnhcvzJAfPvVQEsCFsYtvZ89th8M",
  "key2": "mNz23xpEXHjnMKM7UsQ7UyH46kRbJ1NrcBAhXaP7Mpfc2YCY7vrb9KCitZrvDz4bHf5RerPwnv4awA7Dr3QXuXq",
  "key3": "5YsfonxA11RkuYT19a2h3TEJP1XneStywe7ea8HtiAT69hihiGi9FcYD4uCZtDE8sNDCQeoQLr7R4CDmSzq6kGrR",
  "key4": "4gL6HDmbRsZ3C4RSuq1yCUAPQ8JxUdNDJngZfr2fgb6PoxZKYGy1qCjpB2KF3MVQNrmkWyYXntQ2zBfi4ob4Kc4Q",
  "key5": "248qUj4X4jD1gAhc1MmAuTCN2CYHiixWBcdSm3ERQNvUuUVU8nSuQdn5EZzXp76qwcsqPvGMvC9tAwhpau8Rqsoh",
  "key6": "5n2nyPqVaUN5bGKSrX6488iKH3B5nFLn9iLxyjS9zkuxNZVjudjfYe32bEhh32AVyGDUtr5cr1ErcQajrzfm88hW",
  "key7": "2vH4m2NB1UCn29cdjW6mQZNDhpLokgAKjXXjDZ5WZCQXnDoDDD3aeDbJm5b9oHgGNwx6QsS1eTk1h1zyEdbjAgKc",
  "key8": "5dyFxuzd4HYw1B96GeZsHxz4DWYoPct3pRTswuYDCAFFvVLcvW51J6c1STb9vQTwcxEKpdKzEzZTkdc7wYYzDRqr",
  "key9": "4SjkEPNRGMsnCLatZvsZu8M3dX5cD1CCkxPu8YNeFMUioVmXAN2gj6chmipAZqjb6Xjc3UuVHdCrjBezL8Ydys8n",
  "key10": "a5Q71aS4kSKDT1cvLZufSNBkvyFQAxEZfG92u9ads4pNDBHysEeFj4CSBjQ4MFx5qn42awzWgBTjU5fKcC4c4p3",
  "key11": "2tniMVLXtFY9r8fQ2SjbJiy6ekmmx7P6tKvFuSEVWoyhVr3kdoaehNuRqoBTxuYYmu6FtoxmCo6v3MpDqgQkndSJ",
  "key12": "4VTyqWU2Y7r2kkj5c7Lg3z2bEn1VLiNjq6SxRdUtAuTqMFfsBEC1vbjN5Re4jDQ4rf8tqU2GrhJoQgJGd1Z1Q3k2",
  "key13": "4ZWp3rVePRdbgJUx4dypy8oD2E8T736hmUNEekY1kvpZudRU5DgZyEF2VxBdGN4npbJ76HSkAjb3mPq84jAtRDHQ",
  "key14": "3ac4ZjjTMjfU2FbBSLokpTab3k52twhaYpyz6365dwsrWNYXJ99Tg8neBPGUzDuFcZtmBABpp9sQCMU6nCdtEvdF",
  "key15": "5Jhhj4X1bnQk9S1eYfPaPLsp6ExS1LXPDsHV72rsJJqb9vJi6QZTVMRvgXLfhcH8oAd55DkfNRqZwfRKDbyGSERH",
  "key16": "37Z4QD3PsTUFVGuRMc6FeYbj1Gam2U3JvrPQvKygcztRamH19HnxgfA7cNcVSomnuMtVZ9eq2J1gdEJuSEohqRUo",
  "key17": "2HSw5pSYDs8xUHGWpV8efqoXxPdv9JwQJvy8ngdQWFGJp7B437bEZuZVc6Tu4bQA36YR9zxgTMvxWr7reGD2UXbH",
  "key18": "2KWwEV2KKuzvhjGmUMep6T6tiw1WRprtjr6qXp33RJqtnVvji6LNezmC6YbNgeJuJ9zM9XedNRN1nodi33pnmfSM",
  "key19": "3KukFPcQJvjbgpxVvdmHyzYNGrksmqT5BxiDCqV84Vde4GouiK5y1urkP1vJJBb8wETW8uBs6S2bVzhRTsc9y95j",
  "key20": "3bnzBdKLRizrbbJVvtKhMZK5T8wXG7ZdZZr8qrgVA7FT78fhZYEA9Tnbcs2AUNWeC5zFKdH3m7rnYAbTdSLYtsgy",
  "key21": "3e73VVZDcebovsmFWSnJbKhifj7ANBWuncQuzyiw5qz6RjEwhsh8fKtwQuEU1kxfgP7sVHyV3opFZNiG3M1Gg8LQ",
  "key22": "42L67FDDnYkTdAnaxz8AtrPdEpjveGMMcvM8jbxWu5x3LyZkd22ExoCrbLmE3ioK6exeFrm9vvp9mx2a1Tz5iJBi",
  "key23": "6mcUk6Eu7cmVLVjNHM8yMqfDhGAEfptHX2CnNUSRPF7cKVNhauUX4Tkc5J3hcENQSkvy6jDAh3dHsas97b2wcGH",
  "key24": "jRBRHMKx3a26Hm5HRYDrGPU1jouEJmzADjCxRRwoEqq7pp2g5DZxSjDYHFn1jSRzFpTsj5R6Fsr1DyT1hzmU5KA",
  "key25": "4ckUwC7tdSTcABbXZgHMiCNjHmfTwtPFQtjop5A2o4YDGGwnRVm9qxoQMyocj9VpQt9ofY5nEBssb44uN85gwxAK",
  "key26": "44AxbRNzjTjqaoyAP1fzUm8ayKrd9qpV79DiNNv2aF1B7QiSaLk6p8moeLjc7QH2FoNR2yxDxVq5iKeazJbLyE3j",
  "key27": "m6xTqa45e1EBfVMVX9RLmf8TvJABTGpdSNskHHLpq6pMcWmdEuQ5jVrcP3SU2ah5hUkbu1oSP1C3KqrGcUqV8ag",
  "key28": "K5LxEFwMJBPwuarjx2N9kbqBi9cnK94uuKXKEr2C5qG76wce93nzHmbJU8vyCpp8WHbH3FPCG2ACV2ed9EE8wiu",
  "key29": "325zSpyBwa2a6CWfQA8LhisfHtVUrywUeYN5jbqvFxUSpdSgXXowqZtdMx6dpMVcHGerNRi4HorbWRPYQuubEY8n",
  "key30": "9W2mm7py55nyc7vbsY9qAZsLhDkhBEm4rookV9n4N7NSix47ujk5DYq4swBo188h8fLDv9jFprWyCbZpb1VTcc6",
  "key31": "2ZNxyrmd9AXZuN9BQbUMwji1T6kwRDTjEsUsPKzTsfKX4qdiLe5FJ2ZHCVyXeN7m53Xkn4v42dcLS2igLA2AVhjS",
  "key32": "5ybVT6Hy23DJNQkdEQQiN1gayP2vLbELtbwVSHXok3MUTAszA5Uj9BPk9r8Vovtv236p35dbjCATJw3FPYEvuxpu",
  "key33": "2pL2kj1ZGbntJeDqym5Rq1cj2N4RmLXVTskAg4sdWFDk2r3DQcBwHrKPeZfWa1B3Yf33HhdMLTw7RxeXjpnbHPnx",
  "key34": "4whccMs9oikFLnYWev6kcAkNCfvPG5PTEwKqgqUGLG1u2BCkH8egggnM2z5adUWCh1SzZsfhKq6sLXsDmCrW1NC",
  "key35": "5QqkvS9eFZQb23UtLj5kNb79MTTH6yp3G46dsfAXERr6tpqSV6FZe6WTaFsMmbpqiv2KNUdokbzEJSjBGZYuciHK",
  "key36": "2pHeCrPyYeRnUdWbNi9FYjgkVNxifzzD6Q8PkVd68eMPoiLSizNT8vZorwuAD9dQQNurEVrBojo9Ae6s3BqHLKC6",
  "key37": "3KjgfLmWaX4UXmSnP5kt1CPT6aFbHxRGTRPZWZZsQ5y74zHaxN6HuJJKroNC5tfEYaDmCs8F49rAAyeDrvgXKiXr"
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
