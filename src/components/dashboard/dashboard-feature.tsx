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
    "LJqgm36YB491Tk3q5VoyBFxE6Hwqmj9rT9pHWp9rzqhDkhK8iHmjyaAJpjYUgn7xiF7pLFYmnzkVgEn7ty9YYUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bhk5R1eA18qkx9wzp8cRSd6iiKWhzaRRxzn9KRV3RwnZnV3x41wTnnX8KhR3zT1cY9Pk8ZDyCTnKwVQqb1xnto6",
  "key1": "2spymdA6Q6wpgsMvneWS6T7EGEFdvD9g5Yqrn19m9gKpjmMVZ5ZuDoHZ87diRUB2hqBonaGMNtWHEvCnUz2ZKNMK",
  "key2": "2RUEZ1G5KzFE217q7ScGDoRjRguVsweERVTuiL4TbCBCFoQcRQKiQTxHULErykxkfWkcPceYT41fsLSukNMi1VL8",
  "key3": "65JAYbpR2uon5XcsWhkMngPnF4gwwVFNPwcRG3tppaGN4iVhzYYbj1q4b2NtdzVenGE58czjju2sd3s4cqzKRACc",
  "key4": "64LLdvHipNezHAFnpUGbpJZGgQkcA7eya1EcR9npAi48bAJboNoLyhotDWtRVQRGr4SK8RRVkQ3vUWz2td1QQb8M",
  "key5": "3t9WFJ7GKHEqsm7ewnTRV7DRTXpTYThX3nmrG1Ua5S1yba23DR9orWebHpEWYwJhBmmmSGeR6w75pkgpxmbG5VA7",
  "key6": "2VhC9d5Q3c1aWwHxHBji2vc4X2tpToAbprb5q6dfkDEHyXsU7A6dKkJ3GhsZRQmix5ie72t7xSx231pHPUmGt6tW",
  "key7": "56aWFQZyMRBntDQNYDoCMWcJsJvXzcfjaTnEJDCiexAKresSstBUT3qQAktKq484PMxL3yfudHZoG1Rhhqu7dQiA",
  "key8": "4RZk7fQaQSehMXFKPwm9Af6nFtzLqhWZicbLPPZSUmsURE6NfrbRRLQupNKRtuDKH8FU1rpGhgkjNYu7rXtsbiDy",
  "key9": "4o9x7qGRV8g3M2DwPgQv3TaiT2v9hSXu1Z5rrzJa5QmL4joqZWxSdG87se9DxWQXe5MEDXAji4Cq3SATMooYTKaN",
  "key10": "LZtL4G2TtfHgUpwfGBeRHGAVcw65SmVuov3J3QvXPTNEx78FTeSj876voyxm1fWRCMUJ83GFGaWbUhUk1eoo5wR",
  "key11": "59ucoHh9evrZoWGPSbVTVvL1ha8SgqjW2b7njjMU4AApNBxLfbQ3Sn7yGNKoanpcCYNDq6HgUS7sCQEh5LdLmHvR",
  "key12": "VEWzEkXMzg1xPJnUqUbmW5fTh3EVPuVB9PQiH8Xk765RjiJGbNFawUGL18U5rmVRVJYELipS6axzffGYjTCJUFV",
  "key13": "5o3LyhG2zo9wGzgyGGdmeRaKr1oLW8rKZ7j4r72T3YEjT5XkV3h6GoRxWKLhBKKtfRvg9zqAjUF4AFjUPnJ9f9AV",
  "key14": "25Bs1wNq4nZADSDbVJ2kikxg28TAvc8hSyMs4ha52cdPdW1JHQd2GhHaduP4QUNarXRB2PdkEWUJfdTssvZ63P9i",
  "key15": "4Dzf8NNFLckCtpYikqBD3nahYpsZTMw8Cgu77vw5hakrSdwDeNTzrtR1xtTp2yUVuuwt3on6LcvLQNBD4eLXtUtn",
  "key16": "4ys2ozKrKmeHyrNpwPEAvZTrWycCWMadjBdXc3FWzyoW6D5pTaRA3ynsRrn4sDANcN14hTAjzHwfDea9Lsc4Awwk",
  "key17": "4S5EtcEvYVUgYhocbayPV5m9TZzNAMP4nc3znLx3FzL8ywGN38BvFFPnEUUK6U9pqopfRoGFnppXUWmjk5A3LeD8",
  "key18": "XPEtWuNX8Hp7Hma919Mu91jzwLmzND1vp2oEngz1WWLBaQG9dUUJa8bhv621pjgPz84HtP8TTMTLed3PxbWV9uv",
  "key19": "4XUD3nWToHV4YhAHzXqgZjyEVmS3qQoZW4FUCdo1vohiV8Li62dV84yLF4nbk9Js9aDGkKG6Lioapu1jKCfwoYYf",
  "key20": "44aqWsotXksaYtbFW9yxChKTUqc7Rfyi1cHAHT66Tp3N1X8LmdAXGEWuBrZEru751JZUVUYnsS9J9xXk5GrUzGxF",
  "key21": "3HbwHxmXNUBv8sUs7dbsEXqW5ojhcnwvCGdcPV8Z8wBJqb8SAMDFvaSA1MiNbuyLZw3iGTk1scf5ZAqNkLo5N4St",
  "key22": "43ycEv5YTNJpGCtw9wiMiS7YjKEMPnbuRcFz81UyChqH8uz7SsLNszFGsy8LamvyuUCD471BW2SuQoL2A7JvBZfD",
  "key23": "2iy7Mu2VguJSh7zRgexEcUTsqJpG39b54TMeTAB8xprRYdcAaS4GjgHkwgz5eF491ekF5DoVtbN7kzKEHiPx96Lt",
  "key24": "3TSTHHRw3imvtcjDzKJSC4qDmTQoBEw6d9ni2BG8FamrhF28XGL8RXypMQQ3TsSrkKjzineBMwx5T5Cy9eC3MXmw",
  "key25": "5b3pQWkb5GFXghoHAu3YiCxGZNkRumgA5vu9F3soj7C5E8XCWCQMy1VG8nfVRzeSQUSuQwe8piYm5GfgKf66WAjs",
  "key26": "3XiprmcaSXiiFWfhDLebvMmysvTP6v4LxnMRKpfHyvViJq8zK49wQ2ZishaFdSREndYbLyyHttFBSGFUwFpffrtJ",
  "key27": "29ATjkhE7iUtP9nFjhREtdNREtc5d5wQhkKUyhvVSXTjsACq8uVtc2EeLRmY2F45mydtWeN9QEnAadvqF4Nz1jU4",
  "key28": "2rk438idTmcTpgrkoXtTGUYdC3GBhqSGcuaaohYgvfCLtkZs3MfsohxcyFAbDLHmBdoQLfbmgSjNgs8n5vkuSW3g",
  "key29": "368CCuVf8KYYHEURt7kUnoMh8WXbHy4eM4G4sbrnTSPe7smEWUJ6CsQXEGiA1a784axWUBTGFqbf4aWMpV8qRFE3",
  "key30": "4FpDXF1hgoq23nGgFnvoGJCGvGQE6ygne6Y3N7zfcVHXRHVpQ3hrRHkkMB4YLCXMYa4pbRbBEBFBoSzUs2dvmfvs",
  "key31": "2VuRahFHtM9PPexeGgueZQoVUpRukXZbf6m4yEAwnCY9uppdJRYbt1512xXNmVtMCTCtByH7Mm8ieWzcgj9CytGp",
  "key32": "2EsVAKecXcG89Cqz3ANEox5xZT1GiwKzNGZjM8B8ocva9GsYL5F2MrYZaVQcud8B7KKeda7un5m3tD9ZXP4oHWNb",
  "key33": "4r15vCgdFBFzuVV2yVSRAPbMhvQJPMZVGmWAK6okFhGa6dTvCxwzrKhrkw3cEps75zUwgb99Rc57CswLQt8c1m9q",
  "key34": "2ZvKXg37URR4qp1yzMt5t6RNaBH9sYYX6d4mcn5JtRC16dvt7wV7XQok2RENnHEuqDUyN7wP7nQ1HSKMHDr8LCvw",
  "key35": "5Km7cxU4eUQZst9rLEYyTKodCitmX8viBQtGiYu3ChKNrpPje75fEGJgf7CMsz2PJBYaPMmD5udLpVyjaSWtasZm",
  "key36": "4aRiTvkEK2W9qQYnHf8k1skvcrR4ifr9ihbH7n2EG2YWYGh7f9EWVedhAm9aoTkxMhG8XwEif66Ti1Kkn8piRdPa",
  "key37": "5ToGR2kaP3LUqmjkByJPxrJgzNUssjPCA2j2S6mhtBSA7pwPu3HvwVEakHLLtpLBKBPZeUhqQ2kzyzmpFfeNAPJC",
  "key38": "5Mn75dKAdzsGMbvqXA57nqvR3vUoKEreBNvCgD6e2a5eco3uwpgMEC9oprWMZScmSXzK7rtmPHHtftJ42kpyhXi",
  "key39": "3TNQ8vqrCgYWhRP5rkRbTSHZdzJpyqJLrdyMCvN7WJ7hDoQEVZw6D4PE6HYkZXzM3r16HDF3mrBBuNp9xhUEDrBN"
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
