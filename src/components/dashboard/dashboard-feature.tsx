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
    "35Hdio6KzWCAHDUoxEtz4SWZ1shtMp6itVMKKq65CoSVseeSt21euvWeZzeV8DzFKtCACVni4a3E1XKtruQywq5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AgZWrrptGTcasS1osZx2UosZjUa7GWxxFfEeds1WeVSvrZpjz6XEWMP2kJXYNF84nh9HoydpVfH7BwWvizc2zHa",
  "key1": "9Wo4MdpetS7xSVeZvvBxfWmbQAfTtD19FdnAB3ueps8aKnEnQgQMGXxfa1Q7AQGEEecKiWHwTVky2v67Wfgwojb",
  "key2": "4ANPKrBp7PiH5ktPjcJt8Gde1ZLeXGSqvTTSYx9RMRyJb3s3E2mf1HG4mf7tbvu1Co3fPQH7oAg7JWDNMuXeWP6j",
  "key3": "4tR8QaFNoBpEL8D7ugwJu38MVyjroa7jPbxHBiTbQUhsvKE7er6Q7ikdFoKKb8vKoXPh5XZmnGKJQDZsV3XD5AnZ",
  "key4": "4N1jFuC3iuEQzneGGHM3fB81Ud5iCZKmnZD18aj9boz8oNf2uZyiWVTvBGGnxrkNqjBATf8FfcZQo1y6y4kzsEbG",
  "key5": "xp5kJ5KcnjTLBNwPrLkQVPe6HA5UVjQSMvvLbhEt2PnmX84episxBz5rS4JgxeQKwEKYurKj7yPNXyFFKpaoPci",
  "key6": "4GbuDkvEJSquzDRGHXdMMedDgdjZB7qKT5DxgjZiesyYs5XGZ8j7sesjigyxDtjzGXxYrdiWDAmCMroT4TzE4QSN",
  "key7": "4EPPRVe7MYE25U8S2VWxXiRvuSdg1V3WDP4M6DQgrjA1TQVkzoyJKBrsKvyU1sLbQ5cpZbDMfFoPr9hLFajDADQX",
  "key8": "seF667emmmV9SWT5GkCxUB5ZCMvmpMNxxwuPeCeneppYY5KyK4WHN3zmaCmYFWK4gaHP2h7eWunMv3xhDuFMCsy",
  "key9": "2pJb6qL38DTatwB6Pwo3Knx7gs5SoaY3EBqqz5mcbHGZn4xZamJzFaqhtF5koWioVEjJP7imKLrZWSFMwGUgHgue",
  "key10": "53mxx7YSRtTDwZMUg1SDDuNNaB63TF9cU2i2pnpM8DUrpb132WeSvr8XtbMxXDDpYKeHSnNA5qbKwMyduSqi7STD",
  "key11": "VagQFjk3L893oJcbzGQNHpd9QzE6LmEYAxdVxmRHfVNFEzqkQ46SjtaFjWioD2jWrQB1633Kfc1PzKQ8nZ1vNQU",
  "key12": "3XhBu8Mi4cfzyV86Ui1gZJbammwYaDRPuLoT6Rs6rd2CcQ37xhMjXVKWkCGR4U4qzyvNnY1YpYGqFZBKBdX3gPiq",
  "key13": "2toscFR7Rkp4mCfmEB2ZAxXQkcUMUDgJ5W4cG24h8LrNYew777Rc2YmADZcribUxATaWH2upfcKY3gx92DU5o2Mh",
  "key14": "4aSeQCcVdTn6nh6zGJ96S32xxcCM2vnf4ffjrXARhAxWPH6jddQdADtDsqSPSpwbdgdGRDZo499gfUrSYVo3juc6",
  "key15": "5HsbWHRYLA6Qhe4iWx37hZXJD1JVyV1Sr8s43rFnVChhKoNXrQnx5ohL8auDCdT2EgNSiMfV7NkUvKGLj5uqSxXn",
  "key16": "gTH9jQf6hjrLDTf973Jjnt9vnx3gtEfsfcUudJZkxChk63BfTT7g55uN7re624URzLz8iP5CHpnn66JB5QsmN2o",
  "key17": "32Hm28KCoeJGJoMcojJXHMkiwvgXPdUZJsJ4bnL8etMV1vo6iPZ9KviU8pELWdDXssuPWQHiS5Zn8e7v3YkYm9tS",
  "key18": "2ivFEn5kKMsAQNwBsiVDeMkumvkVEyJLc4ctYvUnJpLVbqD1aEypDnS6N7CqYgBvH7R8Ujdck62XRvepb1gzHh1w",
  "key19": "4d7KqW9GzecvcYSMg95z8RmRDvS7c9PF2qmek6jWXnB6VX7yKK4Vu6Ti1PuE4W3frMmcMdT3Kg9b52vrRZAV1fTV",
  "key20": "4hei9MWQkV1KKMqhtjFPqCPBi9xSHyg8jJNN6nKAosoTkBhCEFTgnp7cHvmBAMBYwY1zV34GELf12TCK4SUuywQC",
  "key21": "2jxt6ce7GLYAUbjVgUfST4fWQspCRLRLjJAs3yrQamxQCB7oXFSFKtNaG3fyhysgKZ8rmcxBqZj7s9hJBGLVygSE",
  "key22": "4k6dZkBdVYZuuRWHWayGroibEZafYqSYsGBt5QhHWR8DETT9GsbUuMkY6hFxFabGL4ujSb6zmeb7Lkypb2KSkWGD",
  "key23": "2ts2qweFd1j3xxmUZrS5UxQ4geGrhwGVGz7BdDCmzEkShFeyDJV9KdbYxgVPab63kiEzXacwZ7DrXd2nz1NDU6pb",
  "key24": "2tNG4BexKFqAYzGDPSmJ6ioMQfx8gNbPqETXyGB7rtnWi2wewW7p2Nw89KdTtX9398pEhR9ii2mC49eskMfDj9Ka",
  "key25": "5oB85BTRS5GsuX1VTFJh1B4BZTH16id21ewrgQDMbyAtA5Dfj87V4ALRZUjyxCs18R5J3Q5s1DfkoUpxZfBvPhLB",
  "key26": "66JGMu1wWSHygAvtMKcHDNJYGqeDAEr7aQZqnpqeJRC2QCUZ3qA7kdYkwdw5AM4KyV23vJyou271reU3UCbiWdGD",
  "key27": "3hMYC8JsxUDcqkxaEmvyT4MhVjLnkmR7DPkin29knHCFhhH9V5NdVx4C3EXazmEUKVRzWwspijaZ8vzpBNvBqo48",
  "key28": "3H1WejYmH4d4Vea4hWXv8zWvVg54UnahTLnFbiVE2xqUMbJLeiuis5hmiB7acmDTs9qoUZiUHi2Z9ZZQefC7SZ6B",
  "key29": "5gcaW3xgEBrJkhy7YC5ttFKswnSS42weM4iPKKvJj9ehswnkz2C54FZmpXjVAhYDJFjmmMXrUeS8QYoFXo5jtJ5v",
  "key30": "5HpdXzcVBpxWM1KLpj722woroKncjFdERbipz92e9the2XJrnweKxHg7FMdFeWpnwc4HHEc4fbhgZuv3QRbjR37T",
  "key31": "2TVdYFABdUUQG4ZcdZDmaoQx5ohMES54u2nd6kbrHEyJj1Psmm2VKAQVVshB2yA1yQUA8358EV6GPf3kwDuPZDAK",
  "key32": "3qvM1r7zspsdjBBfGAAta1vq8RvaWB2BcLzPrHvmqMFeUj4GEPxDKqhmxMXyfG5CZYqzEN2bhj4eV7JuNheCQ626",
  "key33": "3sCVVMtduwGE4wbRKHtt9g9zNTKGohASb2w4na8dHvsALSCgVoSBztHV4abTVV4gdFJBcVdsBicyxouawYDtzrEv",
  "key34": "36rwfoTkPesgf1GaxnSbtKrgc8u3ym5aAcDqrfjkFxC8dMB88ANhS2ZMUcvJBxBTskT6udrxkURTadpHq4Uix8SA",
  "key35": "4k9DTPDmeuCdztvu34zG5RsG4ASJLch49VqHzKQigE3DWBC6z9JJAmQbs6LoeAZDdpaib5cY4UWxhduFKrke9kHd",
  "key36": "P84mWnMjXY1orDg7Nz7HeRtTXgr1VXCkCefVV8bLzTsgDYe4uoGKtP5ZC6PQEBPpzC6PfwGKrfQ3NoYjSMjdQp3",
  "key37": "28eYzTQ5YRMHogdkDJkgornfrUyHXmKNAokKdyqn5FG4eL3GBvAL3JqaMg3LVAPJ16R9zxz87i4oTxftTPCB2dib",
  "key38": "3giPqGJCR2Na6FdDtmQvQ5J1CinV2Txhuo7tbeSDJgyXUeKyFU4ptZ8Rx9j48tcEdLJFYtvTxnUutathnE1AP9ng",
  "key39": "4wWn6BJTbeFPwAYoREbLmVkdBu86me1sjjCP4k4CRY3Y6eh6SGikRQhyB1kqM2jBmbnGg86HR4MiZGubUp5MvYyf",
  "key40": "3u39E6TJGvwHSJ8fNjzYfczPpQ9Gp7JyLKn3WgyRcwxS8Co2pPf77WPL7QUeUFXgpcZNcspwMnwXBH4WxFzZ9tF1",
  "key41": "kYGQhzUj84gSyRvGGY3XWwUtsXCtwyx2Ag9ww4pHx1o7AVAsd6zBXJTaVWxhTyw37khGWCzhoiNmBJyo2tQBV2C",
  "key42": "4WJHCbYF6KYU4vYsuu8FXUbs9cf6Nw4msqdcWEAzqXca8K18XSsXNsVoLo666yA1KM2C2jaRVJYmLyUUZRD47AG2",
  "key43": "5hg5m1KzDBsaPmBZKrTcikG6HJctYfBnJRM8RUzAiWMEnPjEbW3KAEHudQFZxbBbMbTQTaP5c9PwkjSGp3RXxWtQ",
  "key44": "38efVBrbTdH4ZJYZgxp4wrXzNV8PNeFGWqfeXMnCZwcSSTLYKxrhpugQLMgqLLG6Kbgtg21mpZ3nDHzNncCL33D6",
  "key45": "23LXSTYFswXYKMG6APKBWuUywZzMzTLYhBEfr5ZVp6xYD2uWvXJsBKQZgKw816qyGRzmNm6k6hgdEM5kVE2V1ahL",
  "key46": "3yBp5xpuTGfqfSSX1JGC4jwt76ovydLncrhccMpJKrDNq2xzWJ2LumjDG7XBhXwVdgLCC1H4umxHMq4Ey9NxY89j",
  "key47": "3eTAR7RaqCnW8pXbou1ZDRQoKHyBeGfRNZ2y4RvsCURTmtuAeKauhkp8g9xHZB3ofbNYxkP1pcTJa9kyBhKqhWma",
  "key48": "Bh9EsmU7zNkVj2iijuEXdM7aw5VyNNi65RvfkVUmeVLaJBSTzDfXKwsxBTD3ucxD3u5rUKdSqxZR42TiJAwNkNF"
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
