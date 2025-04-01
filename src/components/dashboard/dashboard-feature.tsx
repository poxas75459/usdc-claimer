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
    "2i2K8LayHehka6SPpZHvaSKMU9pBTMagxQwwLUuUynh5bUdcbes5WrcXGSAtjNMaHVTUwCfRUGESrsZTtbJEuf5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r7kDwJPoQSNNiqWLcKwoAwREHY5uskmkrgX1cS9PkraWSr7HZaEmCEFdvHLUaC9pFXqGMcCcEy7HHiu41VM9Wt1",
  "key1": "4efkGohYrbQkMBsXhBrSfAqQ7a8CiUer41C46sX1za4KB2vgJRVzWYPgzPwz4F3jQWD4PPEx5AAvFytfQ6KzgvWP",
  "key2": "2Dno5F9tSTbp9JsrPQvRSynWiY5EmJ53TxfHD3bVE65prw2hnvTemV6EhuJ2cvLhKcpai5oLZQr8ukmwAzgPCZfp",
  "key3": "64VToB7Z85HgX6zdBVqefAKMo9RL6t2aNHTNkFDpM1evfs7CeTqPEiFeZdCdtn5bLJYBiUk9Ttg5ScKgGN7ybDs6",
  "key4": "4dZiNE9WX5R8Nc1PmPDRQJ5nyyA3fPxwVxYQ7YZhW3p3kjfsjgdrG7R2VMJ4GpjiWsHARnWTnq7aUkL5j33XQ4Sb",
  "key5": "3HH38H4Jn9feRLxLKXPp41GcuoHbHY6VELmpLq7jQLpTZqfs2Nxk6ChQZ4XmsvaRHTzshbcKodNEJSFBcmA5muvh",
  "key6": "638gDNC1etMxv5hgbQxAChCK8UyuWamn4uuko1tvdXzZsia51bQBRZMgFDyWLgY6v1MHXWCu34EVJYDKPDEsi9xm",
  "key7": "4BmNM8doryJvXa4wsnEtJJ8gxYASyeeycviktAaYE25f2KdZajizQ3evbtoYiL9A32bB8mhe64PkVBeVzMQewBps",
  "key8": "465YpzMkT5XarTfyxtPDoGUko2zYFBsmuK2mBDwA1rL3Y9P3HPTAvbMjSaPrzdUtDLBm3tFFyLDfPeYB4z9dcUaT",
  "key9": "3Gm73ieRTikXHHZcCbQQzm9FVr7jFUJJvTd9acR5F6Y7fDno1byFtRQim7VyaqBZrvCZ8Q8fZXwNnzPBx6zVrx78",
  "key10": "vNXQTPiRkPj3KLwYzTbW8wgYH9NvdtM32CD5fKbxrsgYRCavYnqsShAj5Hx1Fu4mU1XqocMHNJiv6skuiE783hN",
  "key11": "5pNh7aW9KJMdH9KAH6QVqDJH7PCX3rsXDrMWKTNrVYA3912hQNK6N8eBaAWKcPBQD5KB4Dg2QCkmaHxmdkqcLQCS",
  "key12": "HzviKUnHeKZgxFkiNNDCKnqmf99PMkg6ucV8bX7EXvLLyrAkbrUYmxxRV7nhNVpqt3NK4o2zrA93AVpsrRwHoxR",
  "key13": "62soXfHQLiaz1sKv28Q6tjxsRfr9bxh8dSbALbMbzEepY2C5rrPBK5477Jzt4VXXEsZF4GScdGS5MGHwGffKnPrD",
  "key14": "jwy3TL2qA1FCwY4jd6VHPGxfmwZeNoHAwcbWLunfQVtPJVTgt3fXr8ckVni54mFKfJQZJDBx5ZgbNDgsX3yL36Z",
  "key15": "4xGfB2ypWKSL2ResHoex8XCTcNGKxP98woHVXYwKniEQjqpemLfCMgu8PWb2fScbbuvoG9z9B9aKh3U5FYoBnZBD",
  "key16": "4dir1Z6MxCTp2bzTs7iJApyQoH9Qzvc71QktqUiXXBWQdiMBiysSTYkJYtNEXsaaUqbbRBeQKPAbzpXWARPhHHnF",
  "key17": "3EvXnwon8vpRDdMrwtVSma1TJLRh1WTLxZwKv5NhWPBF8kGzRuvkwQYh1T94V9fkEQgRz6ouHVxdvgtYBeBrBYhS",
  "key18": "3nHZSJRh5fDbWPVHYMZ6wQGiZSBjGkLmn5Wtq2kWBLU9x6yfVhA1oKwNLCkBQYx1DpL3p7SVXn2B7yB8ZRZrxxVm",
  "key19": "3e3sJG9zqqroshhGEUXBjuTBK6P7CdyTkeV8PThbbsSN8Z7FQuHddz8q3LthmWdvue44f7qoi8GE3cRiXCASJP66",
  "key20": "3fZwkirenXxjUSyQs2GRQvYm5dhNudt8rCXaPnhxrsZXZ7HWLr4P93VyFwHzDA1JZbZSpPmSsrMFrXjnPn4vyNiJ",
  "key21": "27ZaMHRLTkRFqEg6UQmNMHoVS1Z44imd3kZ6yhQHW9p8axhRsv8E1jV2ZPLSYQt28iPr7h4T3ZSeuYECAw6uGxt6",
  "key22": "2mT3f78WBnA4sMQUF7aoEN6UH9NQVpnXXgqjbimErYopcdqKysZL2Bkbrkv3jWsWnsPRLj6sacFAnSNvRKiNZVD2",
  "key23": "fmTm5woJk1cUN3AXcSbTT7XTDEyBLgnzynqXWuJwfM8yecxjCG458mGrxKFokhn8x3LfavQQVk9Se985V1xRVTV",
  "key24": "nzHNw4XWwrgAGbVGVmf9gmo5GeUTJL4bmN98JgZHu9hY2wSRQYfRc8ZSvkiqpUWCarVkRNcJjoasaoiLADKya1Z",
  "key25": "BEW9UAAgj6UPFgh5vqmCntAX2GS33Q28kanXTCa3JRmTqtvRAfMvauoQHwg1tTN1LxgGFj5kDfjcnGYaBEdKzaT",
  "key26": "2ev2F3djX9TPh31RCwjeaM2zpS83kuNgk7Zoz6tGN5snZzc5exjCzww3M3NhcZ6S6dcmvpFjX96vKYrXBDpRCucq",
  "key27": "bvyipptfwj1krkKgAKv6thCBsfYJnRzsWAqZEc5z4VzdiRsrdENwxyMztoDXypHz5MV7YDnDqMCv7Rg1tBScxGo",
  "key28": "4ckDeeVQw7S3viFyWvjgxjWjBeG2wnLmrjunbdeApQ7ntnt4QbrtNmcjvoodFC79rJwTLEfPjZiMXUjUnfdwBEDz",
  "key29": "55qUMqrBATv6Asfho1YCD6Qh4RvjbrC4Q2uxkVGJeWPZC39TDj2WFDzQn9GY69eUxsegVssBjJ1JahDn8EaqHnAj",
  "key30": "294rF9G4HTq49hhyrfz1ddV3KWqUJEcHDU7dFLwFpVjxNjY8jYubrdawZAudqVrD94JM8WRBGvN37F9rY533NCtk",
  "key31": "3GR2u8qsRhyhXioWW1eEGD8nNm3y2Eof7T3JWjojXw7UqaYDqFktQfWcY8T4zio3TN1JyCaVDGBFaN6HoFETTVWU",
  "key32": "4UCJwuKFBQfwa8Jsmxm9JeNZG9WshyR6YVrJKeSpbcKV7wTuSiNy3KS88vgUMdfgWG8mFZd7ZsVcXPY33czWXK4X",
  "key33": "5ks6nk6Tx5ekwJjxApiA1yfafCVxA7sR61HYVngpSAFx8UNeg9DQXFvXPeFY7x3Dr1BssrCjiCUtEEwAkE8f15gy",
  "key34": "39tLKqLQTj8Wwo8k7PHPfrdmL4S1W4BDeukTu7uBMWW8sBtHRP4cCxZiYsQX3rFGz9ZS5h4kQeh9Ug7Jydwvjyr2",
  "key35": "24AY6bUJ6MBWamKQpN1eMwPbVgG8wBVxnZXNKN73d7CUiTk3mZPCkBJsf19LaKUMLme6ZsoFAvi6rL2aVrLPckEw",
  "key36": "5NoPruGngQP9FsQ6udzhPJNr3VpjaZJWmm4k4xPP4n3RN7DcFs3sKnMYZnHVij2ioJVupTX6ekR6HYJ1Hk57wM8m",
  "key37": "34cyWoxBJKgZhUL1avT96L3CFrVfHREExpq9GcCKMmrv5wFd1ZXrtWBdpcVbW4abe9Tw1iQkg6VNyxoaFp9etGMY",
  "key38": "5FJipr3dZMYXxASfVU8vHXra9vJpvEmswzqWxcPYa3D32DYrHzUghqVfdA6FVHtvMYkShhPVgWi1ZgsY8ivDgo45",
  "key39": "4g7apuE8bUgq9VbXD3nzAoSRG3xQHGtZkg2fYGptVVC7CLnupXUkPkBU8c3QKVMQtg71W7hKbSYFbr8FKs9eShwy",
  "key40": "3fstPWso6qkWKXW9aXUH9HtMETg3HnGfqywQcqd1M7oCfiYUYHgH1RoAQ9DnzcghrNNuNJAezf47NHnmmR8c413i",
  "key41": "2AAKr8zVmq6zTDnCJ6WbbUCtCqzPDeCgqJZcndYu9utLVQBanp5QdampcLcJnauvQdLHqNcEXBrAEwNaJbkR8WbP",
  "key42": "cbxLS2oqeNmY9dTpNVivBAqtTs2LYXNt5gVcK7LHxC8sjFaQpMqqXGEbLJ27YWzCeiuX2DhHKQApXu4AEhumY6n",
  "key43": "3vQwgeDWfRZUQfaH31euXtnWJkjvuC1RZV7xfjwsAZtgqUnsVzyiXsjaUsa15GLi3SUvuRVVTrajQVX7x33hGSei",
  "key44": "5Xfn5YMr7hV1zSjnnZ1Md7jdtbLdSXTgkTUEBXZTmVFrGC17ycZ1WZmZ86yzi1rxhPuARV6C4wfvfmR1WT8GkiNF",
  "key45": "4LbTiFV8F8cEPvonfWiaV9rizd45XXnNuvdnEZYnSD8vrDcRdjLgRhbFxJKgwAvSTfu3NwUEG53Qn21Pw5bwYXGS",
  "key46": "2g5px1mmVk3ssb7bGR6zp3k2YCRA3TD8qCW3CUrAVnFrHtWNGs8dyHfY4GDzGCS8PukbpTRxxa2s9TZCx9h4HcPE",
  "key47": "6LvPq4veizN1pJ2wacSDz7Qt8g5aRSHhdEBFJQ63QzknUQaAzL215iNmcwxNNfb6gezUaigTfAMzSd9XfoQwaNz",
  "key48": "2x23MiTYEUAeDiA5YV3wHb2G2irLd3TpYmwh6VtQ46CFqhkQwtxT5D4mFLs7xxgMRtox7XaWDzEyu9x7vhH71gyt"
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
