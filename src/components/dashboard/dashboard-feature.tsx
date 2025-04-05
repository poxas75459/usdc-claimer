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
    "47ZCnnrQbmZTCh25auFSzJyf4bB8EzbjXdb49KbWny1TacjdzsshC7RmkUGAb6UQAkDdVi36wo2EjYr15WNyNuby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35sQDDNJYfh8N8vQH68XmQbwJ8J91AVL7MssNGYQtAFc31EkqcEknbsL5ji4c6B7YxGueyBuMPDZ2bP7jN2rjeWK",
  "key1": "4iGqvuG55hU59D48g2vWCwhabQ5J3CRm83YQUyQrDBcKPrfdrNwmBE7XCyDuhdMAKxkBzoRsgoUUjydCXd1rbWyG",
  "key2": "36c7MY26FM34t1rxAGmHLCrdZfNv9G1C47Myu5hkXczbKFBtVffBYtqkd3EBVegEUFw5GmNxpDhzucv1Z4VfQjvX",
  "key3": "3o7txb5je73bxWM65wfwzmyuG2B2e25jPddGiLt9jr24sk4xepG7ZPeUjjQBfmgPMssEje5p8CyNmrx3PDGpL8y7",
  "key4": "2CJaMY9pgMy1Ncxstb1wcRakDerA6FDtaBBdU47vwMszw17DTSsJDWiPNqiDXW97gqF6LkvXUSG7NbdFX2fVNA5D",
  "key5": "2VeAH1YhvincSLApFToCLBHFJySmjn4kbDeGv3zRjpLTWxtFYZD7UYp5FsUDiianKeYuraamT24QWPtAgAJ5uq83",
  "key6": "33PXr7hdTYHoyqbF9abiuQNe9fHHie3LCiM1zqCpACfx7JJpVv57VU7zs51Y45srdgDwv1232VyxUReb61J3AbKe",
  "key7": "5Mp7Fi7wPD7E9t5UqmDqqG4xiVXvxXmT53cbzn3FDLLjRC3dh3EpHi2yoXXK5GQGjBMZ4MBqBK6EFsRL3bpNkHjt",
  "key8": "4XBtPay7Fxoo19bjSxQjVe6G9dwVhkXLicZfZa8v2h4F36c6YQgznUBrLQgxKJoA7y74HrJ82ry2QPPZWSvH9mDJ",
  "key9": "2RBkwsnSM5u29g4MJ33Zq82Lw5YyJHMwb1FUDDUxtnGFSFLLCgeGdj3KCLt9gAb4YZ5E5LkddoqmfcFKQHfcQJL3",
  "key10": "4DVuNVzomQjnxc5M4SM2M2mnwYqDUStiNTvzZM6HwhsBdPo2UxTtmsvkbqfUz54KWLKwUbPdTmnGedJJEtvepBsE",
  "key11": "3rABwRXkFpzx4Y7prpEJGMJEGteiEmqiqD8BuEzMuZjF4EEabTyF4FGTCZJGRP7YbhmQEYCdvjBq29MhzfsnFMry",
  "key12": "5nGxoEazSk5mmiSrt7wDJBfikvXN4TfQkY7KfXemfPiRu828kx62gkHqUqZ2vHufvTTsn7hf7FHciLYCBJmE4qNm",
  "key13": "4KHMYVZi3K7xq9ovGanKiRE4orRRLLNGDuTz4zS3PhqDbEP188qFUp3hSaLPHLgpKoJvyoBorE4EhYCA1fRbxLt4",
  "key14": "4MyGQ6Kc21ZEBYBuaUkor4NQwNaNPhrdDEim89zYtE9fPCyXmop5u9DbwHhH6bRL4TkVWnduouNipnPzBzYqPXDB",
  "key15": "4esfvxjSJcqQHHjB556Dym52wrfEBoedjTXUD6UURAsUfRMUo2peiVwaonZDtNRnkRy75obeQaHxg23tKJqJCxj",
  "key16": "4XgQxh8GiLa2g9vL4dGc8TmLqYLAqPwab6zgz43s3hCnSkwx2mf4tqd57tpR7a9aHYpMUTfMy24zQKUMUGgBhcyK",
  "key17": "3hs5Un8xrFt3Fxte6oHiXG8bNJrTidKJ3vSLBQfYvHbxFDBuPbzyCNnUeGVbwSkMt3aYm1CECWyZs7jCQ7X6Gy7F",
  "key18": "3sQyqfsHHvrG89GC2jDAbmeozp97p9FNexXDUpmPCyAGkXXrZYKEoNQPYmepbcBLtxaCj52nxWgs4SjkyuBCLKSn",
  "key19": "3xjdr4SWPxVkcoocXxy91UwPXwxftXo7vxzFM7W8Vfj8gcR3EJZVZDoTmtGBmL3FkGL43eRQkNvnitDCf1b5qr6s",
  "key20": "2o75VxMD4UHmDLoTbBhkbJVE3zRYVndgiCr6r99jm5ZpLnTDX1nUH6PJemE2F9nPxZv88KKtBHZfr2ku1W8bRvYY",
  "key21": "v4aiicdQQ7Q4eTEAok8RqyfS4cPm97H4SsJdhcgSYLPGioHznNJvQPFDJjUBDDEqcKr3vHZULpU7MVk2QCRHmf8",
  "key22": "35M81JHQz9QjPPwxYa4Zs55shwmPxsJorrJUibdoyXJsFkVtVRRibhKvKUytJPips8DGNLfWdnnaroWkH4mtpY4z",
  "key23": "2mvTpp7fwsXiRbPG3f2vhe2cethFBqeVRXBgLYhqEGHcbAWXWrnSR5f3JYBPUzhY7vCWTXyAv1AF7KWNqzdqcqXE",
  "key24": "cDK4oA7YqnLZs5aR2NZ4ro9ZMmMGjSgVc5BqSZxu6rgpwk8Zd179R2UwW4yAVaVjjvXiuq6jdXwgeBAp3TVqeqk",
  "key25": "2ZjrgMVW1eKcGnCUEqcbjR69hKRaJ7MfKNxRXsxdrggVQHtNXLYgu8dz5TV7qYn8wL5dMmJcC3BvXoXfJt7w2G8e",
  "key26": "3hdy3J7zkaUf66eCFvtE5qb6eW8tPcppzJahWDQAkyUQ9JmsDxYKbxKKvGchdBCUuKPdrMWmDRHnksiHyHHuyuBm",
  "key27": "GFRXo46uyv4wMuP8ttrAzdRTNj2Cn7NdgZMqre2zJgee8nbk9HafG22ik6z5zUwCQz7WpRrmnHCkQQtfV1TKa5A",
  "key28": "3G9VXNHAUo8vyJYtDSs4rfoDeYWampjn2ttkwWeqny8i4WCec7WkriMKxRt1picoJyC6gTAGYATbBmWMjV8LGFs4",
  "key29": "29xNmriELyyRnrscbT62qGZjQRD5vMi3TS3iKtbvuXnzM4LpkaQx31rdH8q2bzM8UycsuZGapaDUYPd2jDYed3A1",
  "key30": "XriGrb5BSWrFy15otLu9WRnW1uouoncPDeRyRacTvpNty8VgUcxKHoLHyyks8UPwywtEYaqtRB8PeyphHseHzEp",
  "key31": "5Bmuh2sPaLxvUMTrsiLaDfwBei8urEEwt8VxdixEWd9cY3nBsYhgKCNzgEEXU7C7tNDPUw4QnQaBnDQTNgtrgaFU",
  "key32": "47E8v5XTaPt2uTPPvmSzreSoUJ2w4C4mzFmJhgNj95XSVsNxCbzSFQWLr6e4eW2RtXoXX3PWhUKhdLSmXonhuAU8",
  "key33": "469E6cu9NDFVGLRw1WUWauQqvBrmxc94y1eWQfkG7goSgHxkyCiP1KDKHTgTpftZrnsA7qD1SqKRX1wYhcvC6pcN",
  "key34": "4WwMMY6x8ajG3uEZXvWXaoHKYQ1kqzFJDNhL3sbn3wHVL3RNX5bBELvdD4QmQ4FR614HoimsfC13KBrCTL5FqYJt",
  "key35": "XnNGwAkTbw4PrqDZqipH5TaedMMiQkN5VK5ZbiPYoAs84p4HArd5MYCartf9jPwhshzq8Ds48NMhQe6jvaqFKJa",
  "key36": "5Vb1wSDGc2EHsYyXkwLK6pU35U9ypu6DaC8Va23hzzUnQwYkSMtui4cK6b8aJTgwYz8SPYSuL4acuNUzBQrEwuEi",
  "key37": "4ZK4A3ELtXy6jvm7fZFebiLagrPvLGmE9RjnYDAsQTS1PJkWBqjFEEKfFxaKavFEGtUqcQxTZsqZfMoJejMV4L7B",
  "key38": "2tpj3De7XBMihxw4aiFQZecwo836xrsW2c6MbVRfqNCbaSaHnLTarVXYyF6KKgTGpYp4j94dyDXtwAQdbyvWgb2m",
  "key39": "38MihEAZHW4wUfveEnv1KWQJDkXW5khK1FzxiTv26Y6GmiszgGawpBySVYKAFVYsMjQKD3FfZre7qzgH9v2oJKXR",
  "key40": "4s1rZqJ58QRYYDuXLFhwzEa46B5bvBqyre8wC8DwmJNCDXFXzSGs5YMfLvXEVvwyHiA5nrwh9tPS786QkXQvyZyt"
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
