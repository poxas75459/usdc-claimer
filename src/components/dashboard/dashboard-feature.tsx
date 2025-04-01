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
    "4KFhv23BaytAhdz8Y4YS56pF5ATA9Zu8mJVUs5mBZQSTFK5dzDLgLNbzMWGCnxSbkUjbQvJB9ogCLy2NYvUqsu6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kKWgtdE9a2y2i1Y2tccANkfAsc6uTrD7s4vF37pCifgWJmunfu6T5V6zmbVGYtcTG48BCvYMp6rRSxVJvCoXG3E",
  "key1": "5xtkAZRyvo2ireUEdf7dTQ9eTzrYgEKs1XahRn15Kw4WMr1H6zKHrfk3vhSua8bWPhnNB4Fp2ZfVdnhLEAJcbGUP",
  "key2": "62E1E3tKfVEiGC1M96kgCh2nzpv1c5623EWaALAjYsgCJGNaS5EFccUA3Ngwg3EYSzpv7ASSu34uc1dcECqZ93nS",
  "key3": "9fd9VJXQVkcGsCtmFV7VhSBeQeXemu4duC3tpnTKHgMYyCT7midnrfvaLsWxNGy9RscfdENTp4s78AqGa8isry9",
  "key4": "K5qRBEPnzCRbcjwLeEGRTDv2z9Fxx9X7jUT3AZdJRfumoLHiEPgwNWckfGko9HwueeiqjR1F3Dq1ECcPn9VbMfy",
  "key5": "2i2bZutoGY2LhS2ecbi8rBtMF6e9QQZbaCg6inc5oSBpy2Bdh2rKFn9vR287G16b9jabSt8fYfG8NRFADTsYuMAE",
  "key6": "4kXiyVaY1ZKS2wS47pfUx238q3W7FQ5BUbb6fNCUSgvYAYFUsBoXfREtBk4jToxqDw9cP8oov3J3Vq46L6QXGbKD",
  "key7": "4pZmwXDgUwijtkH1D3beH73Eh8caxKQT2K7ZjMyzqgQwa6ctWhkZksx6Xcsnc1RjKvkJfqoauarPQqBCiUSz1bG7",
  "key8": "5CNLYf4ok5ywh5fi6xeYdgUeu77SK6HnJDEXEKhh69uJAXMXys27L8pt8S9ckPdwMrivy3GTAoekrFE4ke2HLmvM",
  "key9": "2aPpUMQgjes8vSfV1CJyn4HAxhHXt7UtcgEizxJ653eakVqqXs8TSs6SFbmuq4rJoGNzD6xK3Pf4ty8tUt64NzXP",
  "key10": "62XAPYnn1RKyax8xgo6C5J1xzUPPNoXiueSnUPZ129MMKAkHRyXfHoGrtaHTDn4XnyhmQjTrv9ZnpcavGTPHxAtg",
  "key11": "5FneqsYnPjaYoesNE4CL9D5RxfuuWTJRwWMBhrR6Zrtbei8DEZdd1DXSnmr9ZvACjx5gRKLAb357iJtVtCCSV37U",
  "key12": "2zHdnKWDMduCCgFo3FLzjmGwT5L5DzbzTZnvTjVbokWMF2ixxvYLzsQu8yiRE9esU689tP2tH59xXc5eZQuBDSmy",
  "key13": "4Gf8xnLbEwyNC8VhJSMVM67VG8Uc9znQbBtkkj7okB8bmkm3whj3UqxFRSr55Bd5x4kvwxn5cfvqzLr8bn7Ysqne",
  "key14": "2Dt8bsq1m6QeGLuqthRi71cHP79eBtgvtyYcQoTL2NMN7rf52376gmsNf9iwSVX5G1iVJQR2cXrGdPD7nffq1Xbm",
  "key15": "4QbwTejjPa49W8FytCV6pcyFwUPNpCwdGKqdq9eiSYLUBdBNjFRywKy4dbM4nEfSNqr181YRdURoWy9exmy3JACb",
  "key16": "3THQRxxJCUvSADNCtLRGnVyKG1r6d71DzW5GsJG26WGL5wUxFvjPVoh5of4bAexMiWf839qRL7ufK2tomUu3ALxG",
  "key17": "38ECXHPRMUsK26X9skHxxahWJut9Rsr4noDEmFWGP4XmZpNedMdMcWePArqV48aWcr1gKkc7zynMd1BdoozsaLwN",
  "key18": "39puyXiiXARzky1vPcbiotVoMmmXEBBFZLxx2rbNceyNY4Y74zT8bbrAhGtregFFqYbxeg39XHbQoVZEkb6zsYT5",
  "key19": "64Um49qLGDfFMFivJn7tzPm91ajpMBUEmJaSvHhkBp2jPyPyQD7vVkygwJ5h3Co5zXVxQMnn6QWzB3nRJ2eJrhmP",
  "key20": "iQYsDL1oma66cLuRGniuPpy9XtWT9Hz49TBUkckmx73dKiKoTCBBXh4mdfEGxd9DGdBASEeT3hXyLHDooxFtksx",
  "key21": "5F2Pf1s2mrHpfMJD2LN8vsu2iEjTvEpXLCL7qk6sfX8YJQf1zDTPkWzjYHWkSbdNDE1deMFRum8ntAxDv7a4Eumi",
  "key22": "4SdWnjVMqcsZTVSdmjZSPZ3DEvdgvJwb2zbcrTKaAe4w7Ax1pr6YtnwmgcQSroPX8TGatvCkPivwu4LgD9pHNLu9",
  "key23": "61jJb8Ka1kcLt41SbnXr62JrEDPPgzFKwRiekQqeYCUBqquGZ14egAQE5mVLvTE2scaNrQs1iuUfHpqM6Dmp7REL",
  "key24": "mLoGtpSRD8dsYCzQ5rAUDQpJuEu72kTa2TTkhEvoLeXDrdxJX62spqr8sj6c9MtmzwreKyYCumD4oT9p2VCJY1d",
  "key25": "53nzFCu6B8q8RUr9mGZdzVknhFn1i461yjRaar9fSFGPuvRm1UVjtuoZaTVmF2ivCfAQuuKLL9yfkjvmUec2mG3K",
  "key26": "4PuC3UD4rMD9PdxDZfkSmXstpnNRo86p1J1DoMhVehQ8HtgsySg5anMkN8bcyJDC4WgCq5tpfzY7sN5MeoJxEFf5",
  "key27": "2Fgux6zA3pNM2TJsU43S3tazpnm3UeJ5hch7LcQRVHLwqbk3aUYfJgSZiHu5M7LkPFgLwiS29z9xSkuk9fdyKPRZ",
  "key28": "4MhA1WRqvpjE1Ty4Qh48unQeR1punNVRqyjpMAHp2pic4zefse13xTvadFtrahk5cwBM4FyLLBfxZ7E7CcAyUEAa",
  "key29": "2PpG573SZRmUyNyRwu2mvKvXMKTTNxsJU1cjAYxhfYg6BwFFMYsyjLAXqNtonmD3AmvK1r2Q9Kjs24QNbhygyouP",
  "key30": "4jQdxgXbHygBE8da9NarQ85oBADr9FSsimGndQgLLBUKsLNt9giEcd3gsnwPxMhX6YniYwj9ah3qKUJPADpia2XK",
  "key31": "5nNMfo4KXkthjY5mQyrsFDy5RfBX9sRb2xv57hwgry2GE5cRjVLN5yX71HcbDWXVqjSJY7eT6YpFJ3hH7WMXM2v2",
  "key32": "2RAdYpqver3i8ZagYeQYvJr1qLxHDTKnswJsDj9JEssnqmiusUTk6A5LWiBGSaxFyH3i9E3pyd2wEbARBkLP3Yio"
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
