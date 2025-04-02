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
    "5p8LQ8e4mjr4veDZFXCkapexEDMEdCTDt5ULJqmHbQtNzEmxzxfSoSmJdkMCJVKdYEG7pPqJiEVwwMXPZkp2QTLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H7mP3Fpukp4bQoP3bSTvSvz9bSB1o3XQV2TNsMjGHgQFPTBZuz7xffEBfvYgBKnLbGM1SX56di8gkSmKPVe2T46",
  "key1": "4QqnKFYqMx2B4ztBh8PsDAbfs7mp7rK3QGntTd3zyXGwbud7j7a87PsSKEz6gzWQxhwy2iT93m9dMXGtfHWPa7mx",
  "key2": "5pAkyedUHmvFKueKP4H6rdwVq3zcDYdfzG8UMgJ9y9qoWFUke1mvYa2kHYrjj5P926rFdEDRKhNmSEmXL6pEAh2V",
  "key3": "5VT5z3H9R1rSi13MSMyTq6EwtSg4Ww75bJ3AW7DgHEpvWNAKyQiaRaaXcDgbkuUdxYL3xVUHivkNX21n15aRbzZr",
  "key4": "5VqVYpAiMCYezs2uFqTYJrxKdbq44WCL2PLWabozmgUufAuGCQvWo5BfhiHHP9vctq24hQBBJnfMPBhw6xCHdbK6",
  "key5": "4UK67qAkD9MU8tvPMDn4rCEMLy69r2SVDJeoAwj3jPUR8V1DTdkHbdXbR3n48re3fW7gKd5R86LE2LyrxkjDThbr",
  "key6": "4HR3JfuWoS4syRh9rZQDaPUJZwdNZ9tLKMo62F64iGstMvSX4R5zFE1etfLzTT2xFM7xNtetF88i9HARGZxqyebG",
  "key7": "4dKnTeDc6ZMWdMFVhe7iSnt8y98QLeVycx6S4SYiaVqLVwDHER5onjKEnNYRdNaYLhzDpMwXau4YxNV16cnzcwd2",
  "key8": "3gbTgkZM2kNDbGha982BLtSRT1i9TB9wXzSXZiB9uF1hYiwhRhF3f7dhxB4zTMgQdcaiB5g3gBkV9sNNCV86bXZr",
  "key9": "35yRzaVHeK4o3FLgbmgb3aLkqDbGgQk3sKgWeKGQ39eMnhEoNTSrTbXNcSYm6uHQ98RsrzprgyLZALKVMSqw4iG5",
  "key10": "4jto1RzfiiQee6MCwigULsExEEPZRAgdEGrcSe6MzueZAQa1zw5JniMLRfFsxU5N1yx3z4UVAtjupBYfeBxbgpf2",
  "key11": "vnxQQbwbyYT6A92psTraTh2Dem6qrXH3NLn4y5dKhVcSYELYciGdqR9n2r3HxrAPeYUebihxkZTgESzJh7ujg17",
  "key12": "4Ha3Pwqf8ovUBrmZZrv63mb3jVkPoWfA2YzUf5k6s8d4Hf1swmyBwzvbTNqEBfX1rX7ukDp68PSSAkAxESoepMr8",
  "key13": "3gZskd9UK13df9ZtDz27aXZkRMyFjuGpaQdEES8Zh2sbKjtXvCsBKgeeLFC82vUgNvHb7wGtDsyAmp5NHqFmaKis",
  "key14": "2LZFceJLiA2SfLrhwXk6Pch8X8hjijTepYyoMLVUBUZYQRFWaVk1WLLrx8wskb6219nkTFPh9MASFF7DkS745Nds",
  "key15": "G7rcZ668xAguaBK4QJHhqCVu4DqSaxq4YMuaCaBdLRjoxUbbtnSug4X5ZWdYMvdeifeiDUs8YFUtATFrktqvDLu",
  "key16": "vyd5bHqhA5XiRKKCQbBFo2FBcHZVampPMcrcFUtVWGtSUeDMC1ea11EMyHob2GbrikzCrKHmCjAF7FDcGdASNca",
  "key17": "5WAKQx5nDaxx61n7aAcEnxCTGSuoWwCRcvYuYEnVbxKE9SwA7GaJcZgDhmSuHrTBQZdHQ5EF2aiotfj8eyDwuKZb",
  "key18": "3iSgZXsPMfKkAJwUZWT6LsYSe4CiCNHVpu2cB5mVDBa42tw71ivaaCo4t4u3F6wLAhQUuLSWa77XB94BQg6nKnuv",
  "key19": "31GvgamjdSnqhxUmhuTPxsXKkMPNiX1ZMMLRTMwzmoZ5j1fRQ6RNWjhFpovHGy4LhUD9QcL49AkPDCAkQ4MhFkdW",
  "key20": "cKLDunVjPYi4TLGLbZYV6pQBMCC1ViLxdarG3EY2Hr84orpGm5N2Nv7ksZguC8rG4jARKcGCwKpWnavM4xcJm9P",
  "key21": "2rUNiAQVwE5Mm53kypBCTJAywFJ8eFNFeAjMVwvhSpaX7s6ZFF1jDoEKR8wZoFMVRFbDk7n173yaMva7CNSjWt1H",
  "key22": "3ykh56agk7DfZGohxt1fFqcGeXAJAzmmy7H3bdksVNadabiiKicaPy3Pay3DgZUfYfHmPY8z2DHvkg9nXp3DqsGG",
  "key23": "3pzaya8eRdKn3ucH2wKtxo88tTUycPvzCDKwWDrLCRtRpNxs35XgBvRXJCWTgQk1KvV3AKMPnDKjz6MXsotsW321",
  "key24": "2Ajnq8T6WHdSB2bnZLX1m9ebYYKwrATEtYZ7vT78RJCZ54aeypV5LY83CnCSCY3s8VtV4tfTYEK3dyXw9DSWAUK7",
  "key25": "4VhLs7d7miGR4mppGbRK3sLTvnXYxYvq2KNRFj5T1owu7wLPPzV5PJVYqVXx5XhuYytTmUQ2g81aurDKZqK6a746",
  "key26": "4wk7YNaz4yh1HmUaPJZLWcA57rqgZpdQt7Lj6rq3oaixgLyiUcTUHuoyaVfERrvu4gQ1tNMYJLPvk1Maw8Hyi6Fz",
  "key27": "4S4r6Fv5uZm224r69B992NVYPG2QoG5qka7N4D7Hh2VZKRvkvj56FqpgMwrguDYo1hzjzAk6cL9RGcAHDunBJMSr",
  "key28": "4QoASAqDPmLWoQibymYJHbPmpjU311ekFru91BCB7wrNWTjGwGGaCC47HzNTK8fuNzoSzridvDCLCWy6fH3DaeJf",
  "key29": "2V6kCBaNJViFybJFLetQKV1SktquTeJkbTU2gyiNPaQMLKayhmkW5PyUoHBZK1Gv2zQ5DirjA74C6AxbwGDeDEpb",
  "key30": "4U2SBgCWxgqKu734fCnVpXPvx4GUFWH3mMiQsrgmKABc53Wt1wmdznMMfHWivomr81UUByfajQTTo7ZRBPYAjm1g",
  "key31": "47xAooGzt4yrZfq9dJjNYJX56TVrckosy2hWKiG6agbDMJwZVGzriEZ7wxxQbhsQrvohGusrMwQrt2Tcef8TsiDG",
  "key32": "3V4aKPvhReSHgC5WXiPyteLD6c9MowB9EnbQvduRTLu3CfuDcK67dduu6dUxNW34jXVGaMvMKGp59pGDx7HQ4MEn",
  "key33": "2HyvW3HWiZgCwcZZPka737XdrZJQaV5SqstkKkspJNvFVjxQk7LnD899Em7TAe1mCWao1DotN3uceZTu3wqPKW1G",
  "key34": "TB1bYsQdspvzTT11jPuwdY6LAdw6x2tUxYGxgGB2Y1kL6SR2dUZZx7cKFJs4HKnoHcDqMnv5kcEDfLvR74Zah4Z",
  "key35": "48xJiiGK2UAZskVmjBTj5L8wLcENxKjQJQ4Azi9NtiGzwhxYuQH9aFM6KoeNTRJ56CPAH9qfRzy21Z2yYXSLcaLi",
  "key36": "5Fxy3UHgurEQtAo63197Cr8AE7s3Zj5TKRkpXECniwbetc55F34z4N2Vhhau43WV3vW5fa6NuizjNnNzp7gy3MVH",
  "key37": "4tta4FfgB2mdSp8VLosvXWshqQ5osPMcRoPsX8GtFkbSghKfHfU1v8fFuhoaL5cdaueJ7HhvEJd6QfiQ4c8u9asS",
  "key38": "64yx4SjxJ4xEMVRwzGgAXcD4jLtDTdYbd3vtAwVzSY5kdNH4hxY2WCFzN3q3vodcjvY5kwbEdVBe8WtFgah9qovd",
  "key39": "a3E2NAas6ujuFPKdrfw789rxmSZ1YzhXaypsZTVDL3f7Gt2oZCLw5Vt5xzrWjro4bEhnLgVK9gzyRWfy2cSqfki",
  "key40": "4PK2wW2aKbyWtieyoqft9AiLdDGDMkw3ynyKkJPVo2p2thbU6brsrizhiqyMXWBs2BEa7ehPDNgcvd8W4C3P6UtF",
  "key41": "3sNiD9vaiJ4jtGLhFDfHuyfM7hkprpiTmwbPWqAGgC1ucWantrFsKHSsonvKW3t6T3QrQYsBWW64VQYCCDXVEo3c",
  "key42": "7TLQKWaiXm8zJUMsP3mvoZh8Db5zxXWPVG28PP3qaFmjH5KcgqBSZzJZw8QE2XkA3N2MGvyXoNkZAxpH25r79vz",
  "key43": "4Sysx5RuwcrANSF1CeLQsLCcbbmw2trwdx98BXeeesqvSWD9Zcq5uLZPMfbMWjGKMuyCzTicWGkjLUZrdZVKumHa",
  "key44": "5e5YxC28HG6EZA6NDxJy4bB9aMHppZWvpz1egDasT3eh2avJrPbKb3MMHE5xk2FoY99Xo9NzCNJotnNAh82z22dZ"
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
