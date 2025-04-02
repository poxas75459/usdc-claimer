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
    "5JVxgb7ppgiCD3GJyWpZ1jNrmqyoBzZeAvGXHiLX6hSnRtL7VSHjYXigoCxfe1MrnGBtYHzgB6b5F6bDBiUeeikr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SYMLgvhy1fmA4rKBMMrfWBf8BzuBYZZheeVY41xnBy5rFQGSdUcYoXgp1bgQwycwJescYUmB3dKPEASQzUL8gKD",
  "key1": "4rDSvnViQ3FRXkvGTfsH7uXtT6t8kD7ik6shfzFVsH2y4iq9i1TEpYb8cDFCTPUNKUCBLSXkzJ4LtwkvDMPBmAGP",
  "key2": "35reDnrCz8UsQv7VLUCjjJNZj1sjaccGbW8LkBRs9pVWG9BM14BDJcxHCYUDSRDfnWFjA3xuV1CMPBsLBSCZmhHj",
  "key3": "3WhmnpWkrdnJDuqxjd2zc5zpxZGV8HSHgH6ysRu5JVA3JLbV887Qcc3nJwU6ddkBnTZDPqg6ucg26YqhzdXaa8dD",
  "key4": "4KtNv3NFRAjQ98Nyi2bU1ctF5UGttDs5342UPo2BvmNuApLVNwJZUysEiFVgtu5VBLDvw5dnNDawcS75WNZDTRvC",
  "key5": "3ogz1g4XV4sF7HjvMfkQhSwxJpGEBetzbAJePePn9drjBq87eHdC7zAKFcTJwGEG6ATCNz4MNftPEfi5Ub5vW2ao",
  "key6": "3GzRkEKRtZ6VougHiJjMcGrw8E3nHT2CHseycmLKCLFPsg1yQ4qPTUjT2CFy1HvVXgi2kmjQ6wCs9tzhERkGB48y",
  "key7": "4UnEiMsLAtsJ2SZK6Vx9GUKJsLs2uTHXdAStKgmxVr4nKi9vwPffA7sds2tGyp2my2q1dEiBL259MDgujZz5t4iF",
  "key8": "5qVxRWdikNpPx8jD74hPKzCxNFxubEscZkCuMvgbVq4rMgdcz7Ss81jyMY8xjXk8XoVsjsdK5t57CADKkw6JBYoh",
  "key9": "4qa5zVnQPmAH2aGcCXvxz4AG84fFw85FnWsvQzkEK9XrbtTnmP7n6Ei58Xm3qXPfDY2mQPGUaQTDEzV14FHLfPBe",
  "key10": "5Rgt6xai6CeT8naV2rhNFHjjbSvD4o9dJvAbpvQfYtpSMm1sYJCmg8ztvhFR4guLue7XbaBwCPJMcB6PTrz8PUHU",
  "key11": "2PsX4C9fScmr6bzSRZnnh4r7pdKfo8sz1gniAv2qwGrduysnM51YedW2qQPKUYEMvsG1FtHXgiXKrv2DpLojsxBM",
  "key12": "3mwv4XRk5XPj4U12BR8361KeAFeLTKKEmpBT6pM6h4MR3BSoT98aZoHUDkXcgryEasRgGEK33Bpig5SKqctf7FSr",
  "key13": "5jSiVVL2YCntNPBirHsQBNcMtwE3LutwWfYfed8i4D2mtCEJxKeAqRQiYHzixh2p25rvGYSB6vTZu4a1JUKMGp5u",
  "key14": "5pfgzBy1b2cUSQfyFsLU3q3VXkU5s8hey2NR2T7xSC9Q24E77VyuqVtStLYUFhWHowGo8PupyNii9X9g9uDWvphF",
  "key15": "57KyvJ3WN2d8WGKDYdVu4QJtZ6AjJuHmqpn3SxBbk6aU5ZHjxCcHQ5j7RjBbPeaQv4UanZrkuBx3zN1HuiLQfEcY",
  "key16": "4VQ8hynNfn6TQHEp9APq8Ednez7WDtts6e2WNb4Z9uxViKy99szpUiBiQ3kJGWiXrTiQec9XyR2NN3avDwGqEDkf",
  "key17": "5fTcFjTisxwQ7vV2YznyTcwZN1osLukHHmqEeDvTxGqVqFF9A6sf2meDq2VNKHoZDN67Tadzq7zjDBuDhNVbw4sP",
  "key18": "4rVku3wBUdfDr6sFLC9WoCnBfUnZQTBsHT5frtKC7sqBKz9fm2iHknHca9U7FJEAcKUaoxffRmTtafp4pqMsALFX",
  "key19": "2b9uBsJ2kwwWz7doXxwhWpWZknhEKSXQQWc7Mbcjjv273MZU4x5YKuA2z933BdukxqZ75xCrmkVCjsPhnreEUoiM",
  "key20": "2GfA3sBvdJvHEbjYGcD4zcwRr8M6Qcnn1jkP95fAsyCxri8DVUM3dS6k4mFcoi7YPkc16e1bXX9nyoQ4zBN9hxfs",
  "key21": "5stLqA7b6BhEAC7Vyf4nFnrvSrsue7JEUvrKLDoS342oYTSQ95Yaf1493GpiBkQaFgEkVVNTLGP5aiT6eEpNWnMz",
  "key22": "X7bTrV1xXbw1e2Eef2HEiBJWDCCDKudjWzxkiytdPYBXUfraHYPQQGZ9WcVu3UcwQuwxSGSXx9piLmhuKSR6yx7",
  "key23": "2WUk882LsM7Yjqotv5jYxn2EVcRQH8ZgSHSQmt165k6nWUFaDcn6DZLS5joFwGoghHYnceYJYNXqzyTBw9jT2XgP",
  "key24": "2534kUuHcj9eQ1zYF3LPQvToJsFTKPw2sdWM8o9cYG3JSRHcUYBRorJGpe7sit5kZbEQ2zPAH1VNFo31Dow7a84m",
  "key25": "38o67w2mifu9kzqUb86MSLkjJKLGM48fYpSrJyHfAsePDC2tKzUQPA75XkvEg9ewdGFxH5YYkFh9afrWMqiRbjte",
  "key26": "3roJXJG2mAZDXvUCSV6cFdzgfgJr38hkZ9S1UkzhpSCDSCvDVwZcwSgY4foeCcLkSEZuq1muqCGVXCP58fLtQSa1",
  "key27": "4Kh5LZq4s1ae72tGaYTB5YhNzycWt7LHygk2jyd8Ybm7WcqAESgJGqPvmiUP8x4xH3NvuaY3pHL7wC5KZi5uE69v",
  "key28": "62sViy5ndgBjjdYSTq9GyJTK7vzm97uChT6KthHtppXCs5s3p8hr3V7spcHiB8YSWpzgQQ1h4mXoFY9YC8EXGy89",
  "key29": "4u83PgAZ5E1b6pmUoqinB5ibpa1wta8ucdBBvcU2VRjUD2G7uEeYg75CPbT8HAucSTYKdgXehZobc3A7UXCUTu6M",
  "key30": "3y82msSagRMbs12jPVEzEHJ8n4KHi2cKiFwHzzHb6HLr36zXrGXddriBo446inECTdN1qrTDTyXmEdCwLcF9D1Yj",
  "key31": "4CorufrqLViR4HvvnPM5MzYGNTxr4UWBHZs3649LgD74M7VGhoiK84rp7EuffzgsGeVHXrQZz6P27cRPhkmwYJdy",
  "key32": "5KVMRhppx1DdX2aifBxHBeVm9cq7MUn6otWQAweauzcwmSXvrtWvP4T5d6g25uvifsZGoUu6Wb6sG14ffKFnD167",
  "key33": "55dzGBAvGbX3CZU4ofEXZPCHFPpAuWacaJVWKLPQDZUGKsnijB89hr2ApmmVpBsFWh5ozWjKCANpBj7VwFpWuxZ8",
  "key34": "ctJqeMgkJ6z6hZZNewZuHb1EWB4c2gdc8TboFVznEfTp4uHuJPWsuxkPdcfVLWgQ63Dcg9fbZ3r16uGLp7emYUm",
  "key35": "L1m7LUX4Sfn4iyzvkCUuZHxQEXc5dyAkwiQSQw8iBpHAWvo35a8LiH2W5KV8GCptvQwV6MAPAG8gd2N6EsYL6nS",
  "key36": "2iGaCh1hgkhCuGyKeoFGi7t4F4dRtmiR3GbqAKyzwpiu73ELSUBfDiWbkygrNXrGVnN9WLRbAPf1aph7VxqZHQLy",
  "key37": "4zp2ojq1YB9PTBfeTKTT3FqYmLq86wPCLLtEkXERKzUPPuhge1NtS8eEu9hVnk2eD2XMDPEq4vxrf4r15bCeYVbL",
  "key38": "4oJTkdB4SAyneNsiwyHUdNpLUHpKJ2cJXxYr6uFEpUNtfzARn1d5dVSaYXGE6vMY1YW7bYuD2xzrYEznGtUPkUPQ",
  "key39": "2M4Dy14iH3uxRXmy1oujGyUpjSoZyq33PPiqzEoPH6A6w86nqsxvb5bDRvbg4VtSTeRXjYbeNjGPA7Hy8YsZU94R",
  "key40": "58kZhvL8v8RmJLhWS9NtKTPHNiT5M9GpqGsFWjHYcbEeihf2HinFk5oCEzNnRG6GeKkbDY7ZWBKi2D88VdBUZKcq",
  "key41": "4b6SvXQZv13deUQZepSnTKuyRD12pKbzNjchXBnm6QTzivZEGDre3GtWrGJ8SMrp2SHBuY6PmkMMsXwgkjxKAbpY",
  "key42": "5raYiL9iTTKQuQ17MpQNzViKT1sBhPLYHUEseCNLytzizq7wcah2gir8iQuwXjkn1kZpRQqLgf1uUz4Aguf3XNjQ"
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
