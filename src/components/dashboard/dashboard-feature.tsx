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
    "127WRZrEw5uDRzrKEfP2zmTQjMATBaachXBB2GesSG8Ypq8rtdU3SgJktHEGVzKWt8N3rrBew9k8JAwk71FLQHGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YFGfZzhCppLPrGhLoAMF69KRbic5MK5ppsTBwoF61emHtqWybm35W7sXcKiPDjit88to8g4hehwGYsZTjuh6hUS",
  "key1": "4aQf2N1vx6kCoi9zoS1geX2TD3iz4EMqbFoSiD2H1JBLReXRC46PxsLxUzB6RgN6xGtYyq5w54yx8BvVfxtiGwUs",
  "key2": "32SuNtRVbFB1CfPzXj8mGLv4fUq1bYqHpmzv6LVyF1d9XAyKTevZTyHnFrdwKARJRbpf7onbHvhqo1nFwWYGSgkh",
  "key3": "4NNte7jKnQ8S9NK7ouh7A7Zn8qT2auDL3tAim2X1vpx72tfGuFTkkwKTmMjEnJS1E36ixXZXoSUVNx6N4ymUBmd8",
  "key4": "2asEYefFRzfj1KsS9MM2KA9fJNqDwTpLqVHkvjWBmjRreCZ8txHAK8oU2G5LmXSTdeT7FPJoVUW4wZiv8oXDX188",
  "key5": "5Q43CHPF24SsETyRdMWVDUZVqdMiGrEQ5NLaiuDgvbwW4fkUfEYXz1c4ifNEQYosDy4HQRvgttez8difqMGYqUcG",
  "key6": "3YKT4WNDCDo2RxkMjzvjQWkwikC1j6aFLXiUrpVMFCpcpu2L9AovVtuJXay2KX9afeZZs5VrRUFLuZ1FZnzbm5Hp",
  "key7": "4k3Aa1YHTLEoWBrQUSH6PHiF1NpjcJQMoqZVsh2dsUQ8dnpeHuseXqpurjigwpqzLhLJE2Cczpkt5g4VHCK4bY1V",
  "key8": "34xwA31UUvFhav2JPXD4jw4FXsSiS19RiuW7afLERcQbJCSpeW8zdPDAjqJc7E2oDpBfaw3oBLYeLAmhjgksuH9G",
  "key9": "4kxbTBMSpueeaebEDcK7V3rn5VE1a8CKYUDVSZpxFfrmAbBgAA22rF9kxuvEJfqyngtvYno7xHyhxaECDJBQ4SWH",
  "key10": "aBpj9YuDzVDL9ahVESvrcd1wx5LikB27iH6tpzZQ8d1hUtcpnR9C9EhzBNBQ7sEJZz9Jc6YRnH4FC3jheWAB9yz",
  "key11": "4u1E5Vvkqq3jXaL9xLSXpXY1L7aoU6GdAmAM17tXa7wmfw9XjLvPpUmu3yxENMrmzz81uaJfXyB31V2RgYFkdxkW",
  "key12": "4UTN5NjrJTVpCYyQbMmrsapjwqsBgNd8L28Je8BfYgL6DbD6orP7WSm8ttHrnQTgGDwR7wbYB99jERtcGVGpXPhj",
  "key13": "3r77kHTCnF7sXKPJLmp3L1MtXcmmXYsTYzvVR6Dq4vBrUMedy1mUkpSDBMbzRAUpNwRVBjE8Lc7w1p25LFYw4bPN",
  "key14": "uenNG2MpvF5fNAdCUwrtWnzbQU9Wdj9qgeTcqEevQDwPKPdnkufnHrdrbUoTg7KrR89BQ2pSi438rc8fN491F1p",
  "key15": "3LdDiSD7mbNYmhobezF2xtWjEw1R8dbocFjEqy7B9MaFL9sbW5qPvkjf2Go51fWMNywk74LroNyB8rakq5EmSg3U",
  "key16": "3D2pwjibfqM7JdDhmWhV3kTDe91hVLk86GjWna3mZ19FNoSK3v3swNE5NK1VFFA4EwRHJ43Ld2jpMZJ6LoAfQZjx",
  "key17": "2cAwveg4RvnfLfE5HtBowm3SZfNEBjFyo6R4ydpiCZxp3i9SvVJcuz3Ni1kxhiUTziS7EPFWf759bHiC27GcFYRC",
  "key18": "36M1nfcEfj67aRYCrc6Lvbd3b7EN8o5EWioN5PXDmVA5W8JJvKCuMit5AR2zuurDYAb44cBrKoFEYbatpFiDGD3Z",
  "key19": "X6sgZ68rqs5cXr4cHt4qm99xV3wVn6LtukKbKnYirsnuDGTvZTPmEwyUqjjXjo3VwnNnXiD7HY1pGTSzgcgZMnt",
  "key20": "26GLFf6RnAt25p9MsnviiaXyqJom3S7YXHBSk4w1ZoxU67Prb7pSNZ9cWVMTPyn88jo5wJpQRx43b5FXH2pC8pt8",
  "key21": "hdWjZG3s3pgMy694bnqET7ybEE8m3dP9x5MzpB5iao4WeW8Q8NQA4UsQQDsoX3rY2MSXgk5Qvcgbac2UkShWfeY",
  "key22": "34cFS57uYEVFvrTCWgYoqAbkM25EKYDE9iaJCZkPRWkuprDYMKkg4sNMF5jrVhb5cQPDYNXvcqiBuuwPfVC1vq7d",
  "key23": "5AVAjfpbRKTzepJki6iBe1uvphUUo3UNHdaRGxDzL98qFFCbW14shGzxfDx1puEUZbNqVoZEzAYQqWmmfGYinURX",
  "key24": "4ko92SYCXi3SocebyEVP4FY5eQmj5USzSESarjHN77sGr5k1h5ZYsTChZwkVaQvJokoUJPF34ZBAk7hvZtpsQf1",
  "key25": "5E6c8GLhHBBEUCLes45D4yiuR2Ks5fDUsHA98gHXo7jFSrF6Ek9PjWWDUhNCozLhcytqV4WxoRVYUG4DYcSqwmnZ",
  "key26": "2oGA3yAizrtvW9ZgAbpd6t1UPnAVok22dK9VkA2iKXZgQtc9SM37ZACqqSFZJDaZ4cD9fvhWDzedsHN5dR6wAD4Y",
  "key27": "629DaRWJKhyZYSfvR4n87Xutqb3Vc1vwM2bwdP8hnfmcXJujxtCCnTAp5LftGBZFNG4yrtu7qp81L94cZQNkb41Z",
  "key28": "5YeFauENcwiYrnZ2zNzra1Sj1i5RG92WzvxebD9k3fu3uaEEBpyvYkWV6pGnM5Tqg7PZ78L1NUUrVZtmY6pED9A4",
  "key29": "4Kr1s1ugfk8iHiSpeVtSwJUPWLG7adX5YdHTiGDRWJpK8bwXQp4LjbuGPohJRx3TemWrNefsDmnqsMp4z8Vrnhwe",
  "key30": "52kmqLTdm8PD84kN4rXtzKLnPgnvAuz7iK2grX9F5nx8h1PbjryXzsejHEwQk8qQby5nQ6BcBWR8JTQwfWnWN8ei",
  "key31": "4UB6QuBTZz4c1hAmeVFZLbY9fsazS8tKPmv8NcKv7ZQmmWTNcbYpx5fCtkkJXfdZEYHUibPtGNCogGUsm6jUGBkB",
  "key32": "5JRg2PTm1tKb5hdnaFF4wSLNSdnS9pRm2wJ7KDkEEdNBkueY91c6pQ6kWpNcFcn3cMZo9vTw5RbgqSQuA1memhvj",
  "key33": "4NhJ2pNC98sM2qxZTWdmNtuvvkvmBCEjqPFGQwhdo2Y2nCp2sEDGmaYGpUHd55L5sbyH2X8ea6sk7gFQRWFaTBU3",
  "key34": "2sCwe6yUAqX53GLNT1aGQRbDbrti3LZUhBux3p7DLu32DBH3KMUHX8HtCMzEpLNtH18dEbrWDz2Vp6RkpLdnBQqD",
  "key35": "2YCeBEPUT4k9MGKtdfXR5EDZGaa43V1wyJAyWaGFzccycRNuK2batvpo91JmudCX7PpiZpNX51L9BkWNv3YLMohp",
  "key36": "49i4tgRs2XXwQ2SC4DDj73YfvGmxiEbtjeQ4ATCU25WmKUiSAz5KTSHVR5Uqpe81Pr7jdkaJzkjdL9BwuAF1uy6t",
  "key37": "4AU8r57Bgx89H6CbB2hD8of5tcPJkwRyBeemrknYqunMKYSspbZeaWgH9aZoVETK5V59WTv3K6WjjMxh5i5VbWpm",
  "key38": "godoUUBD6CE1PfrvxixELKPELwUe1pFA1c1ECYF7srA8gQ525rVeb1TAicGt5PS83MZ5QRWRPKyQZEyW1F6FeuH",
  "key39": "u75bK2a9rkRpKzJKaDBxzrXMYcygcUQVJfPqkL9avsqmQKyp1sg8DnXXrqGUMRT4afUMbutodkbg4GueMaAdRkT",
  "key40": "2pQEdG9ygqYXoDs7ooWxLhmK1xfY57yX1S2tn6vUJP86Rpayoy4cfXaCRXEEtjfky3diMc3wD85yu6dVriA3H6bF",
  "key41": "2KANbkWmenRz9Hc3FeXdhqjT3JKPHKStSRnphThQsCdnWxskt6JYDYFcW8By2HbNxyVzymhL4cH6BDK71v82sRX9",
  "key42": "b2cJnZn2WhuBAjdRHnwvdwPfMDX6RwUqc43c3Cvb6hBJmbYi324z9qYzHxJXA5jSRRJhZCCANCrZsbkF7FFo8xC",
  "key43": "wsXaVFAkLW1qDuLqjNfXrChxnt7vvKLSmktTci6U7GwGzJBj7gmJ8g19ki4Sxn2HPMQR4M1zr5ZbBVM1hbNkBEb",
  "key44": "28PNKn853PKoAQeTwq6XkAYpfqZBQKXAJ55Dzag43R3iBZrFZzZxDSCucEzjAVnjbs5aZd67r3Dd792BS6UopYEP",
  "key45": "34HpZ4hatHweg39v1qE58thM98B2KxKYkftHxdcbeHFjN5CxHHAjVi5vboXMVikMnDJxLq94aP9h8aBu45nq7Weq",
  "key46": "Kefmx7MAfMswTRKGzia8urK2LnvtzDpwf44YCALEuNN5kvHj1xmYVMXS5n6ehuw7o3aKqYoRNRBuSxMHrWhQ2wX",
  "key47": "2WLDUR9dnhyYJXPKnv6dRKkH7UtBnG2YgL4di2fbo5HoyknMXeWjJqLGK4HBwovCBe8uvpxuB6imfRp8dA9TNqJi",
  "key48": "x3tw6wcGBLyxz2S9REtMBT2iuUDdfrMbe3d6j2V7ZvMzj6kJFCt9t4kCsTe3A1w2z2dAkUzVxL9LZRg5GFm8mUK",
  "key49": "4GN3WniDzDHV5XUqfB61QJxDwh4LQfJu6Rd4UFAecsWt9riENLByeieSGw57UMmXC2hbmux62Vc5tQsEx7oV1mZX"
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
