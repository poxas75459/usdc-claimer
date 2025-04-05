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
    "4CaiS8g3DUNWo1bTNtLa267JyMNUxCxeikAyWnEkj3ZmYZ3uJ76TPwMCVZzijmsmV5MVWpc5EdxLpjhKuw4G2uhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ri1TE3SS2Kh416FJGjbnDT1dVUJhLtxe6Z5LvTJikTY6kRey5cY9HVNqkNfWgk5TU3BpPFQ9GT6j8rbLPdHNRKa",
  "key1": "ym9bfczVTc9vVkLCb9n7tnnoDGxBByKhQEafULQuXNfNUEDEXQtvZnYw2mHwTgevfBDVC6PUCk7VSBSc4sDzLAt",
  "key2": "5N721p1evoFsbx68h7DDh7PZ6Ld9GBd64CbHgNeVmYCnWyCxoUDaQDzBZvmA6Le38pXNu3jvuBewV8pXFTnSRZTb",
  "key3": "49eC4kLSSMP5poGbrs7KBN672bm72sQhb8bmAf8p6JojS1XkxaGJmmxTnNVZmrn9zeVP7ELvAVNCDfuCaZk9meGc",
  "key4": "4LgWJ5cW2fP5yWwZDqGyXb22oFNNbe7ojxmmrZwAoygZMfkFJ7eaaghE7vqwvZSWNkY2Jr4pZtBkbktcvfGXJLLa",
  "key5": "pLTB68kTpJDPDqQuRsh8bGP4A91jxjcPsGAWkEQiawZUyHRdhCwr2CkyRT2qhcw7RKmBuPcvUoyvDSLB1XvWPSM",
  "key6": "5DxknNaz51VXDRw2xLR5hA72H8Xug7C2VYV9L5mrDXqGjFKZKrsaRrwd9PXUr4KGKt5mwwY4gho3epmYDXUr4uAd",
  "key7": "2UUtqDqFGw1zeypBWvqPmJryNe2kqWi2rxNCvZKDULMN8Kx2ocrLi7Zie6SefuguB5B3fWFsxMUJhjtW9v3V2bv9",
  "key8": "2xoMmCJ8kr4TVhx3eVqFgrXYv2KaXJvYzrpuaGrnfSKSR74sJCHmtERhoXXFfPKgw1yLCz8j4RYDK2xmKnqe3Th8",
  "key9": "4VbfVz2LecTBHUE7s7SdnshCzCAZE4ebvv2M8hQ9DcXndP1YSmbPEhhSYENmwQafKTS3uUUbBqe7MMCM3hhZKTc4",
  "key10": "9nJKaX5Cpv7LaE2pw25FQ6CrynctuVEMP6Bs54pyW1ZECKojMtYUHzY7Z5Z64iV7Yd9YXvjJR2r1jFAW58yhF3D",
  "key11": "2o7YXsUnHDCULLAe6FqK2voFsr6MgkP8ZLC9ziUzFBe5pyf153Gubqw3KCJcZqvtTwXoPRDpDZ8bUNvdsXD9F2iy",
  "key12": "5t7KGAG7QUkTLo9thUZFyy2FXmZrbWfNhoxfAvPiwLh1mWu4B5CavL3D7yuVsoDeLbvySJHiDdCtK7ySwBAdm7ct",
  "key13": "htwz4heT5V8aW3vQPRf3NQoHTJ1LbuyuvAB2pghWThuaFjVbZpaFma5itQoUHhgSjP4cpZ1PwhsNQm2tC8VNToU",
  "key14": "42sEgBbavtMeFptSQRBE1B4eF3ewBHPnUy5E7iz3tXyCT7D6EeY4hM1NYksQyZiYGKhdJAKbFU44r4DtGvgFtyYu",
  "key15": "3Yct3YsRZqqdXakzjM1xaLAF55TK7eLUcCVKkwmdhpR7HckQ2UarEtC6P2pvNh9wunjtUqNponmaVeqBzsJzGaYG",
  "key16": "2GnhozByYbc5zrXqGEGZDqwpL6x3U1CLZbAbN5NgLUvp7jjb6qbJKUE7SE7cbG9xxac4bZfAnBcEMmjor5XmJEWi",
  "key17": "2ufv6jc2tjNnasPJCLQ9BTWRPaEvX8daeKLm9CUfquXP8KpeLriWQnfd4w1BFJiWPp8BrM5U8yCh5mwJ23Ex5SjN",
  "key18": "kYzKCVKUNvRPaVrAnEz9m5ToHzzeiKT6vffi2o28yWemwMF3dGaW533FTXKS7BQtMqy5ZEViTEtMR9Pw2GYPBTX",
  "key19": "mXdg5yK1CHY7tHxGXDM5RHioojvJ6k9qpRT9YQUBrppFRnrgx17jSuMJu7svzjDniyesEdQPzc3ez9b4bDCKHKp",
  "key20": "4Liefgvne1epUakGKX2nLvH1xXid2krUytDDTXh5sT1bJhtu6uKP14HCRUJfHbe9EVi7UQeVTmNiVDjC9XNdpAXs",
  "key21": "581aGz2uFk47T5cvhm6ydj9bR4opmuiR6NnSgXwyYQ1Qrqqo8MTVjrkyGarWjZusoBkmDmDnjAP24e2PKtZJwUZq",
  "key22": "Wh6yj7iHUJQ4JyfEaJ2hj9wZCzwjkexJ4PjbSXUxEEXnareJ3NyEQdU4WFBpE9iB5u3TE1ac8JoUu8K6B5uYSxc",
  "key23": "3jyBBvqNR5w8rqZGf8AZ7VNrGF8aNy5mQqvK3B4SXePrDVSzXKfCDaVzNEBmp6u3s8CnYsPzFTuqExUniM6EoTVJ",
  "key24": "3kHyBnmweUGGiE3pUj3k2dypsoo6NDWcjrgatqiHXCQej2iNwABMGNpmTAm35n6TDf21kW55yZKQuEnutgxyqM2H",
  "key25": "nKZ98NeQM7yKnvmXqpeT2Pbe2bJ3Nz2J7H8wwPvHBfmc4Q2uwNmifPyB42Rvxtt1gxUsE5ijDairNhdwwRcK6R4",
  "key26": "4XcK6n9duuXfNYwt5boKTk3Y28eRUJyp4FffipJeiaTy1yvGv4siv9k3gNHYzCKkxHgPtdSEx7J47dTuiEaVxg9H",
  "key27": "2AFvg4E5DDFTj1f21PZhUdkcwjVyVkFNoJHtZrMJsYye3aV7N3NARhiWcUsJNeNv5Rkx87jFmUBVa6kXXgXmtPUS",
  "key28": "4BP9wLoCWiq5g9nKsBWQ38DSqxu8Bpw7V2pahqfCQGZpDSrEEwygVg4ED64Q21jrTT1Av4EZphFcrJmmVgzNvadN",
  "key29": "5f3JbSDfhrwJF2WoryhiX8LeRaKvc8JNU4LbMzffp5xwZHJCaqV2586WHkFonYAeUX8cxBvtfrMNuUVyXbQgDa5T",
  "key30": "YzmeUN1cKyDcPi4NwXCsmdyY8oZTS59baTLRxc9pC4S2gcruHZQVDwiX947DWEKNFGZv9XdnWG561UjaJMJc9iN",
  "key31": "hJRHLnqB82pyWpAPy2iJTPXr6bAw7J7NG6MT1AsSAh5J5wHwoLC1cz4PSZTXLFf4wyYGDWh6cJ5jGLdjrUpi7Kb",
  "key32": "5ZGa5rYLF6T3bFswFM2ULg77bM3F48ywpJQBwvhUprXUHZ3KSPcmzbTBh2F6a2JRg5WGREUwgcEvJtpV5yFQJeoL",
  "key33": "5AhqMCXC7dBpSFKDGhDYkT9D5Pe8T3HK1mXSWqUvQidZfbDzRsuHPW1H1X2U8iAQPn8KQHh5H3evP5zrxWYGJZEp",
  "key34": "49pUiLwVgJjs2mziie8Kt633bdJbX96ZPDNfgTHjwJSLyi12E9k4s1mGbRt4VsZKTtsxi992fmkmJ8eWUwKCmgea",
  "key35": "jXZ8ovUzhU53K6inRJrTwSfKWBLJ6Cn4BdXooY86zZaynf96Hf9GJzsvTX9rstnL7Xvc2jVVi8wntRaun8Y5qaQ",
  "key36": "2UU1M5i8ah5cdeqTitapyYJA76rLMs1VSPYXkyP22GGKkaJ1wGVfeGkfEeVKfn6Fbh5Q9iwqEuAqVBfuJ7u5iavb",
  "key37": "5t3fowCJz7RaYvXUb7GvNXodLvpP4T6YANAfCRb7ux6WEDhryN1QATYAYTjs5HVAjCvxsxBUUNjpAEu2kCwvq1Rz",
  "key38": "58sZ4j5hXBUoDRtJrLxisrsE6P9cdCX4UVqJ51ELVUo9Jh1PUcrDdiz6KLvi6ZAZTtGcLHvJ51axXpHf3w1vk2uc",
  "key39": "48FVfKeikomwasQe5znjnkJGAoS2ZXTiSY9XNkd2sjgpK7pWiJ31F1BY8GUAXRLhs4jnDvoxxdaBYvexnDGF71Ya",
  "key40": "C3QKtvyzXn6AieDj7wESdmy687Qr1KJH2GaVkAuMTLPK9nhHhaQ1XphT6sQvC7tZHrX16KjcTfJZqPLLj2xwpjD",
  "key41": "2pucjHKK5pd7jV7GNMpJREkMEtQfLAm7dinq5GSEhaKgDRjXDrWRfnsHhUzXe2zJzhv1W5voXMf3BNCXPs4EBQht",
  "key42": "KtfshaH6aogdCVSGLSZP3BExAcPEjFZGHYjj1tnqMPwFE1b3PcW6tg2b6qz1tS8y2bbXzpaXBPgFywWkiZBhWTW",
  "key43": "43PcXKuCWNVVa9mKp7T91HWWpusMuPH358X6YVfVE8NrPjfMR3nwqj94coSJaPJ49JHn6T7PzCRMRFm68UuAkydd",
  "key44": "2SpaFbQiLpB9F7oA4F8tBbhhizUU6b4JmsnzKEZU9khVTZ1hNX5mEsAeHZ1AL3FGGHUDVDg7PhbHTALuEqx7NcRM",
  "key45": "5b6GpgyG1tzGxFmUnpmXwdKoDh5AVrSW6DFyTFeq2G9Spgc5gchHVhDNGUwECP6pPx1i45jAhS2yQfrNGCgjP4ky",
  "key46": "2ZL6nXUVichzm18hYGCnLtPtGZAxrk5JriTEWMdKDGdSZciwqgrbzvz8fjyGkWQd12nbci1u4ff6rDgZxviZeJDc",
  "key47": "kE8YofzqgKFEQtASEXSE8kYu5FTSVHSJZP8qgxYUHA2HB67gbuC3BD6wdRxXCDqDGUyg9XLMxtxnLnbp6PKTyGC",
  "key48": "63NVAo9Fe2sbJbwRpW5RvBLwJ9PhbAKQ4ynFg1snTBoTbaVMx7V4AVSZ8oY6FQDAVxb27t5YQTcRxXDJsRLhk7hB"
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
