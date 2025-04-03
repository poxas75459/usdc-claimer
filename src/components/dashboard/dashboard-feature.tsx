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
    "4PBGgqofUxwY46uKro96TcV5CFfySJhM2PfEm811AFMzpPiBQ5XgfFxaMekAtoqxrEfM5q6HsScfutZBtG2CjdmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44QACExMQEdEeNv2cb3c9wMRNEDTYoUvN58CRVpKz17RJwTDsWDZAxJdh2xQDm914BhHxHpr2Hb2z9AVdxhqhqXi",
  "key1": "2f282BXR68SawMS9w9N9ziGpM313PH5M2AB5ZCkHJPmxyxTmembeQpv5c3aHU5q43nUf4fD1XwxdLyutGzspp87b",
  "key2": "59bn9Q7gyKi2ZDWweuh25eqzgFfUihYjDcvERgdKy2HVsVxzHCUwdGiNk1c94WJg627BpHrJgfTfoaavjub7Dxjw",
  "key3": "42XVDnnoRZunq3eR21fxzksjunJJVFbuavFGme4TdFktw4Q7FS2Yu7biTDnkQpsHkLYHZpxmPwNgiokNGcDVmy8h",
  "key4": "3AnpC15gqQ23iggfUNrhK4owp5HBdgXN1NjkY2zizKL8TxW6wfWNCj41ChjsfChmCB5urxyAmpV9pb6tRE5PWVFT",
  "key5": "2dwYyagquG8ERE1nqzGJWGvieBmQWP1sER3T4ZNhUcnKzwdbA14oNCCpryouCcRGoVuD3dPiGze6uQ7wo2MfC41A",
  "key6": "5WF8T8ZdqTim6nkzMnv2ecqi5ZUehAgrJYG3hvxS2MkcNwyeB7wZN4tBwcfcqgeZpe34T928BEsZuw3aQkziZxfT",
  "key7": "3SLN46BZP9yBZ6UKyfZw1m2BVqS4JJ8JNGLQAMpepiY7e8yddbafifP5q3fez54qEihx1T6W9Bm4NFkrQCAeHdt7",
  "key8": "4HAGAJjHoNu7AKpG35BBqMv48SUqizQ5pRb8V61x3krg8U1X9562X2PUAJCTUjhBG4YXmL56GXWTZzbAtEjByRp6",
  "key9": "2FjXxcrSynZUYpJEki4dwm6oJ67KQE9LzJrZtFLKALzLAhfWopHnfxTUAVXKZBU48FBLJEiTQUPbWgFSoC5dgVCm",
  "key10": "2rwvKeeT1XafqW3dWFYvSuExqvmRqx3GhEYpDVXdAKSRVptQ2fTYGtAkWST979kqA9qJpGvRrNHcdeTpQCsCYqDN",
  "key11": "5A1CtTHSXao1djoM6n5JhoARDoaMXCZo5LhhL8zhxPayTyUWJTGeMNgywmsRXYYT3X4LfnxaLXLWSMu3UuDGoxKE",
  "key12": "62EsEmQcm43gHbQ2sdsXaDYqjv7x9qeptW8vkFGFTabaGtcQ6iG2Ceru2MgCYUQ815RhEowEtBb4H4TUEmKERjeW",
  "key13": "3haGDhQ8yUwyJxwUysTPNoxPdAvKmT4p56xKShiUeN9ttXdUViXby1JfSuUERMQsd8zAnQXaj8Q7Xwmp9WsGWrKJ",
  "key14": "5acfix3nhZ74uKA5C89pfk1c7QX6ca3xZAhA8TstKD9VdheniaFzC8SLPDPoubsKwYdPzy6H2vTbcPTZ7k5WgqE6",
  "key15": "2DmRiVs17gmpJuQFy3nnXMfQcB6AuheMM6Q1uX4dw5zwBVu5ZDjUaPMVEAS3v2mfnQRNTGcQZWRX25zvbz8is1yp",
  "key16": "3tyAemJPpeyQ2w9eucjmZV7MSNAFz9u1UemuZArLJCV325hVZrnp5n4a7mKePKMeaMZ6Yxw6rMe724MHhPEcknzB",
  "key17": "w7Gatuwbtw5k9UwRVyTvnG2cKgedED4ZF8FaTRWt6xG9AWJoTYnSX5tqEFENCu2A3WRoL5Gwi9dAHrCSudFT6nq",
  "key18": "391mB6mdq1DjZ7PNkwk143etdXujzgg1Fxgs9G5tEFonpHJzxYtpYope6rFs3opV1TyErNTVC7Fs1cUPBQX4MvTw",
  "key19": "2GorqcHnskULxsmm7rHPes5tQZvguqEG711W5ZWgsA3hEY7fwnps7WEqGvPfPgo8eMoFDK8zEiwWnxzgW6ACssww",
  "key20": "3A7ev4JGdPSS8b8xi8nRGh1pT4ZvNe5erkCaLgUDQWciFM1LaA6JCpG51VcnUbMPfvsSQvbAXgaZawb8yfczMq7n",
  "key21": "afrmbKfhzzAGHFYr8iJaeUPkFPN594qpkDwt91pHwToD8fBnf1YgaoQaPUjSMTEUATadqxKwBLm8UCnsy6W9oaw",
  "key22": "5Tipt6YnxK9LNcG6TAUaWGx1TzazL3HLjhv6mQnM87XoVW5foWeuuPsHprEAQnfnD1JHAJgi9nEU6Y5BUMe4dt5p",
  "key23": "5WPaFMKzU2WyMdS9FxFreFXsuYeFoo37hGaPvnt88HQZEpWTv3E3DXvf6DUyKwzakdZuPJhcD4cBjSL9cA2ayP2N",
  "key24": "2Fzrp8M471rV3hbPi1TndbTVT5M5652bhubaDs18HVKsbLBaGVzJYn43JYpoKVGxuqXULC9ynchFFQqbSqZR95wK",
  "key25": "2xX7Tr45hEvpXntjfdM27sJv5xTE2qkdEahYpnEp9TadHFuarE6p1VaXwBQRXZ2Qc5GyYp4MJi6ASovYF1eJ9zyV",
  "key26": "rWmqcdN4h9Ffqv2SMtycuXnXzV1zEz5vtKViA2wJ7WK2BhgAqmr7v1u7RtAGjbKiY4Vp8uotehTpJCu9EUWt1WR",
  "key27": "4mNWZRmCJxNZYDeiSf64zzbgLFyG26p1LaPbdKiakyNr2mDdX1nGCud7yArD5vooVSyvSEy1BPBSabpewSN3jh6y",
  "key28": "4fwyi245UnSsYC3Bp4W1TVUGkxYv7MjDZqJ2FFqxrpALQnnQu3bqpmscyLxDQGHQcSstpFg364jmhybfwH4vpYmA",
  "key29": "3jJNfY1fcCjCkRda9mJZekazcH6tyo15QyTo2g6MoqPxvyWDDfMeURhWfpS2shfBe8gTmmwvFpkvoVTyZGUTVBQR",
  "key30": "28ML6A4ddYUj4AMyAdHj9Rv4Hy1NUYQsKiijC3t1tVm3HZ8rsig2FyDhRLoYJ7gzz2bwzUuRpc8cTqFAKDJwBbKm",
  "key31": "2tq79uvDzzDon5pNKaeezHy8od1KTf4FgNYr8XV7LrRs1UdDe245ncKiseTXq8m2V9YVNaEnnYxjs9nThhPfAurA",
  "key32": "4xaXTEkHjqRKraB1ZTqgifvgAYBowkd3c9HFaxg4yGamf9iBnWEqU4N63xPPZjaBpyuSqw2FUzqaK8qsXVokZy9g",
  "key33": "Dkb3xePW5wVZdwotV8t8zwrryPT1i42sEWJUDARvcT1Ka91ddiNQLaSa7fULtCv6b6jFvxXthBa3VLmv8pdvQbe",
  "key34": "53hXobiFcgNFgUV17Hpy9znpKJvu99d5JT1UocsoeUpG1kDRknu953zfeBPjbaQkCoVMW1ivKeTn2w978NLqmjSC",
  "key35": "49sZzxSZtEcKEgCzoYnmUDX5V3w7zHHozDpjapPrx2Yt8HkW4eAjciX1KoMw3db5d9CKLSN2RGZSHrtZ5poKCy8F",
  "key36": "2a96PsMsW6J48DkSfD6rEUTTLJGRpEECAffD8kvCdL4A2hLaQ23HD8iC2fJKUCDQ944JFSkcxzHtiJJ8VkyE72tL",
  "key37": "yvtbfM1hMWHZ85KNK8N5ULGQ1KUnmjnuJiVtV27FU5CdPMK9G63g1tE5AaPWx2rBVjrKE2swQ37p8EBM1KtPSaM",
  "key38": "3RrPVKvQvXmiN8yMMsJrGGf3Mm5qbX4fxc7jRuBuggrnMtgUxkyjQndZoGNxQK2iaG9c4ogya15yn7gxFV4J7fzP",
  "key39": "4AeciPaJCjeqt5P6CQ9KgkawxLvCB8FnxntKRWDMtjXoc82ePRqdkYm1xYUwbwi4qVn75XWvXALYPst9kvtdQsvJ"
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
