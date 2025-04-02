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
    "38vb6YKaGADLjAyBQLfoT2c9cJbA6khVXSnE7LdPzaxU995iqShy5bEHUAS3oFYZpvKxbw8WVLv8rGVp4mr2BLo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5po4KRZ1RcC5cFKrpUd2MkQ3o6JA9eQWqYzXf2xtm7aJ8eD9BxYxedESEB1FPUySs2js229HWMtze1MN6gKZUf3s",
  "key1": "5NE8MRoWZshpeqGqGuKnH5uZpoq3NRxVawwTtfzyEMnaAfN92WJCTRptEy7J6TXVDuJW8LxrgRcTukL3yzsjYzoP",
  "key2": "3nsvBm3sQuhCpeZ6s6eYwhWVCMJzS3miMap2f1QiMBWKn8JMEw9JJ377BTJDdRb1DhCHuHxM1LuE83MwHqrRjEXL",
  "key3": "4ogZqX1JL2AF9QDmWNvbFEWjuVP2EuVwN9jE695TGzry1kYahZwXw2YWjC9KJTgLRdEmWrX12rCnqBiRFPQw1NE5",
  "key4": "hx6Ck4UMRk3FYSpM8PeRk6V9TuH5nJMzVk3VrMGU9jqgHKc7mgJBaXKwS3tx2iNTSdaQg4xNjxMnLZtLXsf9QLL",
  "key5": "38Emmg5QRhNjPxiinqdjeVRrFNSSBu12vD3MnUoJsCDJ7eJYbQU8S5DCEN4kJf3892vR4zv4sMz3XoxCoRyXTujC",
  "key6": "2RgkWwwQAG8KY1vYwwD9cyH2Xajb2QvYjrPgBKgR3cR7trADQSzEwtniFgzF8oWQTnjUicZ5mjmiy7kPdvdPSr1A",
  "key7": "231f5pxTri6vxPoP5B2udE1T5WsJuUnZCJA546LcVB5fTxXmfq9JMGbN4WmKDkGHdXd6qRx1d9pohjQkQgb8Qnmp",
  "key8": "4KaBGF7ZmCRJX1o1diW393UoZSJSdgAY5VFdNeGGaLzDd98PovSfhzPDVxiu6umySrKCAr6e2zqhpy18zRTsdY9z",
  "key9": "YP8KrqoH46SkJHcajueEwXJNhKt7nzVm7VourvZiXmdiV6C61tjQNgdAd2PKeEAdYeMJPvjUfqzszBsKy5MKv18",
  "key10": "3WD8KhMFS58XC6ojJzyr9v5EwcTXZ2uUhA8Bg1LDLKfBrC5AmxsW1b2v8kbjk4EFS7bTs33ka48UotFxLVsNbLxn",
  "key11": "47qEhccjvxfwoNShozwcJHaBTrTGPXEA7oCMxh3gdGipKppJ7Zr1kCe7S1UnBWQMsMEmLSmTXSULpLoGwBq4Fd5b",
  "key12": "3tN511u9xMT54Aamzx4qqCrP4BScfsnkkny2ntAHr3LaXFf3nfisJFgd371vGUETZsn2YjekfaoPzGXuRz7GiyY",
  "key13": "B7ySxLhTHToDhsAtnkjuUu17T7PeRmigNznRpR5Hq8bCi6A21mW6aV7aabDQqQdqu3bU4qpapyguqYXrYs2k7db",
  "key14": "64UdQZj9NRL9LRiYYoYACNxHBJy13d5WdNsBc65MBYWQL2EDhgZh2vD2GmSWsMVYQomSZdcUshQWkBRjopH4eMBM",
  "key15": "3AtY4PTua2X2GmXUCy8FZSZbn2UWFNL9rdJx7G9TgrBnGeuoycpELRtpTToNMo8PmgmKVLaAjZ3YKpgtdtGZ2NJ2",
  "key16": "2XDudMfkHyBxobyyrUjQF9gZ1YJ6JQ9ZCsPX52FW7fzcxt9rrGKmjP8bvzubBpmGn4CKQhDqDWydXvXYZwMAZpmQ",
  "key17": "3Ap6zi8Lkj1PYq79VsPYiEnFrtf5S4euSmhBxLb4HVN5iE6cfuFi8zJyo9KqzCdgwtemTySUiDPuGUH3kLzzook5",
  "key18": "4CxTWGcH5tgauHnBrCyWcEJUSJBnKbRFVmRLuGiWhTtvm73NJhGS4i5Nx2qhiDveH1Y3FuPsrRWn1woSVbaPcNjG",
  "key19": "mmKX3UVSpBUJv7J8HqwcsM2oBeNfxixozBakptto5LULvWV8GVEdQKFDuUFqRKb8en4FXci983rF7S7jBWHhcNG",
  "key20": "3zrTeSJDvzqVMjHQ4mUfjY6bY5fpJtvqoHjBt39SPnbfMEY2T8DRX6xL7UjSgiYxxTDp9RbVMxqnL3FJF1gsZvzL",
  "key21": "4PQyip47Cv7Vwd2t6tBBydXBRDQHqj7B4K7YGJSxUMPEqhyUYYda6o5J1P1hpGdBy2yfgprJLL8M72Mqz1Ht7DkK",
  "key22": "66hR5Dq8AqY6YvoHFY5jNvWiA7ZY97nYFS9UKhGKTzm2bYFDmw6phtAWdbjL5oCEfSuoJvv1aQ8vgiPB2gxdB6dG",
  "key23": "2nzxbug229DGNUXVFFkUUuDT5uPMHxuwr5qQcKLwg4sQZFLfSPusZb7c2ifbwS15wEPmcWCdRuwZWr7NYhCAF5T4",
  "key24": "54FcpE3qso4QdPM18k4xDtEcWCiyjkFEwCmFabY3N9nXQvTQVF8QN7kJu1QTw5ew7excL2D9b1hb2UgfAuK1BDBg",
  "key25": "RdTF24iwQ5TiAV7Cj97PxqfAJEukigwXnZDx192oSXU4TEEznTJ76nHmV9PDszD2s6F145URaC6sxCDEcde4Kzd",
  "key26": "2Vgzj7QJKJAPM2844ghEvHywpKQftugjeNYJHmjBLcRadfHjx3o8U374ebdBvw1r94UNM9jMtSVnvh1MJb6kDhVK",
  "key27": "4SGgJm7rGsJxySppdKhgm59Y4gjNSAFS4ALj9yaoTThfVchGP1JD5T9xSUPja7mEX1RajycNFs48LZLzdk5K4PzP",
  "key28": "3XZoM4tCWJNrDzYhU223SCgG7ydwPSuqHcGXc4tfhsELD52nXxpSrDp1oanq9mV7tq6yTezx2vuZ3xWUZkhV2FYo",
  "key29": "p9bZNNTmYZ6kkWaY7dHsz7vmggWMqyGH2pcsNKuM7m4CmuoUFGfa5ogGYcGGxVV9RhKiZWbDAj4rCLS7tUHh7Xw",
  "key30": "5mC8JwEfcjpk6GpDCJpBkE62sTPELTdKm3f1LUKC3ranM1f9RirgEGC6Qj4ihmCdAsSrsSx1XZG35d5yabiLv2Kt",
  "key31": "3bgVUCx5WiyqyqCWc3fFzsi68SaoE64hSUK1YVrhYHvfRL2UMQzLrn9DJh4oKa3hqYFNZQufcrPg4J4kJh8vkZB",
  "key32": "xyqRyYM4QGLpjLPuQgLiYvBkoMo7wBbXYz5ceV2bVswKYuwMnGRBVEBYaMEaiboGEAsgYXw28mwX9656YwE8tty",
  "key33": "2BcG3FbpcRDU9ia7r9m2NADwKSoKnw2FFhj6pGhDQfaCGT8bso9BFsKBRYScvd2Znkq3pPsLu9Ri8ZFizUhTv4VS",
  "key34": "4Sa12jgUCyAfQZeUyXi7GLEmq7cU1rzf2d4hb1TFH4LQh4dcjgdbXn13By34DqzH25ve9HvXJXBYitnques4Tgtz",
  "key35": "XTL96awKZYq3xz5XGif59DJdJEDZ6a7xNnWw3mZ4UxBwxpz6Csg7jkVaNGj2ULcyvDHEjeWdtrG9Hf1896KW8Vi",
  "key36": "G99TFZJAoZaxxMi2JVqC7UEunxQo6QKp9LomR874wskBxrvUTnnuEzr5C8aR8Suqr68PKFbc27rsBUcrtN1quod",
  "key37": "3n8DAvwAGPhfAVJuZZhxiKs8h6qMcDDsaKU7nZNjB1A3yX684EGcowQs5BzsQvp3KYmDRrx5NCXvKMTAUj7TtpLH",
  "key38": "4n782xk15WDg4c69VzDgjDWUQzwgwcBQEUKaMfQepsVmsT4xwmKT1UnRo3yvaRYoU6gzMKGoBB47wjJQRCS1f8iF",
  "key39": "2Cyzj4XmbgymHo8MxWjky8YJTbaXAmEeh8zskByqKkPamrvtj6Mu6gD3F6nvM9BbrPW7huYjTMcYF63WSCn8y8jb",
  "key40": "5gCdZGgsoFTKqfXn3fbLacBxkCQR3TiBA47m8vQA8XhW5WZeXLrJiGEYhgAXNZg5sCUe2p6rhBEfkeEFygXRYVBJ",
  "key41": "4M7VnNFSozmJ3XH3gvNhe6XVr7Gmw7W5kKRGCCbQypy9HFwS3BEcQ2MDGDqG6fexaZvVqtykkMJeKU7SptVb16kK",
  "key42": "R2cXcCkWPD5YthM9gnbV9d9kjd4w38Hie8w1RWpJ9JShA9vqKsUewosySvyNbyzSWtzf9EtJ23XprYwJadRrtH9",
  "key43": "3DXuyGa4aDBS1Jujo4NiDukALpHgaNBviiqoyPpxaFn42NqqdVP8bEpxdHLFjp2CYE71me4XYGqEC8zUmg5FAkUE",
  "key44": "atQML2AALGnoZdoZqKzsPFb8L7iteY1jP68kmJtkpea3ShJdjRFXvbTy4eR1CxaSCHFse7qphxUWifaPvP5EjB7",
  "key45": "61tDVnTM32xpPg2ff692tP9n2uQfqfV8DDzuBegXnwqejMnYo4U2D6EDTS5emq2TFgqemtuS7z6ur36ZEPJHTHae",
  "key46": "5R5U8FBTSQxvSjqCra7YvnWGbPmtFpDcsgkGH2QMe3dPqm7cYmu8Lesjb8Zf47AcgNSciLrZbZ1Ax64MqJYX8NUc",
  "key47": "34Vd3dTPthbvAq29NnK7Zzf4s5qbMh7rWLEQzvme9HcmCLfdAVaav8UiXhLfRWZEBoZm9PGNYoxJovSkVCJPAZo6"
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
