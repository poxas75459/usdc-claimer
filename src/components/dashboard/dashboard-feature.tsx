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
    "5u9qzzvLdfDC7B9XNoMqRKCaDWdcD8FzR7kyh2qj6MqFJqfE6N5eciXgVgVAKaRvED72KrxJNK1ZwuYihrEJLF5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K2c9a1UtxGiPono7U1FxJ5FvpRaWpuJ2aoFjZ9ckdKtTFfZkNrvV7FtvynYrJk8KiTTJQmSJfUaqHvPG5z2uzNq",
  "key1": "kx9RmzVR88R9ULBZw3RA2ayy8K25uqMHrqXzGfwA7c5rkpBHHBJYxk6rGyexa7TswPVk9WYp85pAVHRK7qQPz8V",
  "key2": "4g1zdFqVvaEGEUfRLpVwGekq3RR1SeSRCTnUdFTm6w8LrBCe7vhTf5zy7rA8P55MGNxFE6pATbq8izK67YREmnub",
  "key3": "3tUUVN6NKdJhM4i2V5DwQabp8tY4Lmpu4HLzcG6fbMJZL4wpNHZbK4TG2kum9ZLsXnaDtaEmHd4dHJeXpbDi4iDg",
  "key4": "4thMkPP81JvY6fLh13VpUbgNi7Rs4kXwVneKqNdejuPkGYja1dPLUFnZAUBTSLJFdGbYReKv6VkzYFJGPtFDWMFn",
  "key5": "XVFZbTRufFEezfBTYERe6kvpgEFsZ2JQFVKJub19bdW5NKwJFw75game67Sg22QGUMkLE2F6JXFeuwdf3BdNuri",
  "key6": "4Ej6JfAuDejBhj5sQdBT458K1BGEjuhbweHKWFqCxb9nUjbKwAPGiG4GgaETaqbmnfjtKY1P5YNnp34o9uALn2AK",
  "key7": "2Q2Wuz8cFpLfxJXffXqEQ73rdvrCyb5Bzc1kx8qfnQKoBnU2CRWeSuDaBQxFuEM3QEEECqRXS4kVLJe4e4qsND2s",
  "key8": "3c4hXngLBNbEKqcYhw7dE875GTRDwaWoXksMd8iq6gSuJ8nBixCdj4aWVjJXbYckeLbJa16Vc5Dnq8pz7HYqp6mz",
  "key9": "4zG2j6btjWSJjtvhBHMpqSmh58q9nzhXNsonVxSo41Gjed6q8fGq5MRbRfzqg7kXWs1NkxeWpDkk4QVio265J5ow",
  "key10": "2Nq9nexZdoHTqA74R9Pu79t1F8pdtHkG2MQGAc1fR6mmiq5rnD5vKQoxYUTvxcfoZgpxo1LKMCkkrTpLam27hN9i",
  "key11": "2CbPcZhSRC47ouMLMqFxih2t5s9hp6Rxdvygw2WM4BaD2uaYyLwYNeVePwDTTbBXJuSJFGZiPaj8vsZiFeVKw8cR",
  "key12": "47chtzDG4de6NeqKcgWP6NwMXMuRjP5ua15YEE7kXLwrvRbcPvNzPpNjcrsN9M15iif6FZhufQBbD6W1geKqGEwh",
  "key13": "2su7MKGkC726qQHdKSfDbBv3T6Bhoorx5D1gx1VGLKYdfgYCTppQu6B6tKBHQQVrsKxfXWqWSGDw3piecnY28HEH",
  "key14": "3kKmh5vxX1sn475A3q1Svbrm1Pk1cismWB3Byq17YPfLbvMS6DtBuyupETyxKRMGozJHm7UVhoiyjBKpx7vQfZFp",
  "key15": "WSoGAyWnbd8UWjw9HC3w9ssF87c7uLi9WqCsmDsCF6vxSJD3h79fepwpg4FdYpVSmhdZ77seGL5btWndAS9NHpn",
  "key16": "2ddDt4XF4LYzvr6NG78iDb8XTxV66avDM5QZeyjreQXFgzLa7YfwesjzWKjzR8LDkiowDy8i6PQCzzuHq3ZDL5XJ",
  "key17": "ikC277AzzaAS2w7TsmHL2Pm7qme6LDzkSHevKGLVit4WN8zMJ3favpv1eSANMFGCWNjpTaqzt7RtCB2rMfmLNC3",
  "key18": "5xBiWVrha44N8zCs8w9pMap8W1ASqBinKTqTmHQsY2BX2tUeZpcj1GC2hgmNaap9V2ciJhRvnhYyn13boWtPBvsG",
  "key19": "2xK7NNTDxPwm8UkD5mp2Bq2CH85ioZHt76cGKKo4VZ2mc3Jt8qPRHyMx26eok3WBPFCEtCv154CXDHAxgm3dq7VE",
  "key20": "29FXmVow1FnPmqhd2sgwRpBpGS1wVZrbMBfvXyXHgFxCFvQqXXo596zNuc2EzQCdhywphShpCekt6FyFrENMBagQ",
  "key21": "2QhZRBKmafnnbZF5rP5xAzhM6rK1DmgxGSJHHhcskGhEtbDH13o8tybpE5U8dBAPW8qbFejY6gn5e9e8xQY5UHae",
  "key22": "4BBz16pXsn99YyENAqFg4tkYZCAc3RboBrKA4tSBbbHgtWe5MFVRkaKVrDDMbWGVHjFXnLY6KQvH1pkqRFjj2pWx",
  "key23": "2a21R9P7QQACmn5v8uhZveHg9aHisEicctZkpUjKQDcs6Lb8ETLDAtEh3PXfYuRUhHtHcuRiWPqpYfEwNLftFAp5",
  "key24": "2Y9Jmz9VPKxXwtCW9pdqdHBFpXiQMonWUAsBexgCCanDBG7AAkB6BoLTNzwyYng49PMr2ujFFrsoKWgwxRxN8zff",
  "key25": "xFtWXmXiyJwo2S8UQWdisv3Ry9t8AKXayMFmxvAz9sksX6z4jtKRfPZfsbPXvSFwNm8keUg6F3qWKUzRSL4Z5BM",
  "key26": "5jgRSrDuTQQR4w5V63MPHGAHzTEKNwhk5fkNP7sxmL8HfrVPgA4kTEuY61AMxsNqMniUsCEMgVygZHxc18wKBHHQ",
  "key27": "5NtZsRcp47VPQiaqf9FuRi2Wn5voCgm2P2VSUtc5kZQZ8Jc1WrxEYYTTo1W6USzR3vpkvLBVjGhEXLrK8DakUS82",
  "key28": "5gXrZXsq1irqoQz4WRFjKU5T8GXbWbp7TEngsGrM91uppdSdVg5wF5MY8XY98heuVQ8XymUtxK2ZRGXdUkKSQo8W",
  "key29": "2m2P5zLF1yXpTKGEbL4LK1hfiWNBSfYdP9zmwGeBUrv9anAVL7HrFaLwvJ2JQ3KrrcF7dmRJzay4pCysEcfTGiX2",
  "key30": "3eTFGs9zPLX6v2VvCNbNaYce2bLkvZTKSvHtMBi4QrzCVZ6qScTJTX6x8wtkEXPZ97VnLzW3JJxDaL32gdbufBL2",
  "key31": "2Vkfhzf3oR8amdmKs6Tz9c4utLMeRifDnJwmnK8ifAMWZEjwFQK33f3uXGJLRHWcguvgXKWA9Z1qEX4yPq4M3aQ1",
  "key32": "8RmUTJiP9FCaKVioRmKHhqqbfbZ5YkMEWecWErdBGT2BKJ16Vc2Mj6DKErKspRBZwrr3j8WzMLFiRAyqmEzBLUi",
  "key33": "2dqVtWxiU8kURyNYmK2goCCJdG5x4yVkwezAG4DJaUEVE8GyBkQcpkediWwpBCUA6AiQobFBBVsXikQQBttZVY7b",
  "key34": "2JYAZYhVFEYL8MRbZnSGxBCruDendMVdem3QjL2wUcaCdHAq3CU7JtpVhNzRjxV7U9L5gJ6QSw5aBmzUvshfnZPg",
  "key35": "5yBjwW4LwbQBhC5hUT7U8AcKNX6YduBe1Vn45Zge5mNaA5H5wFwdY6UyebazikTUG3Tgr5tJL98YJgo3qddbdyyQ",
  "key36": "jPprteQNJwiv1XGGRayfR9pgKz7GYvFKhPq4UePUWSeEjYJm1Jy2etR4zd3L233jrMzQQByeJ6bYNNhVRJkWtf7",
  "key37": "5Zd2rNV6ejGvu2KUn7c19ug1d5iPoQk7Fs2h5bUzB22Yb4B2uK5n1KDvUCb6rqnPCGwkTFqFCfxxppw43jTCzYrs",
  "key38": "8bw1ut8ZuBUR6xiTwUXEqSLX1ZFeDd254ibofq77LPPzJS11cJV746XxZZy335iJs3rE5LwiATwSrh2ZdDvF8sB",
  "key39": "3G7iH3hBRaLWuyLg5yZ7oMg6gxdQAhe6jsRmvSxdz6hBZNCeVk59Gv6TXXAVe1zZRkZjTUzBvu9JsEREke7MrVjP",
  "key40": "5PqsCtdBXBzmcJ6MAzXBEq4aUMf6N5Zed1WhUuFek9Qcsx6AMMoYeYT7nDTcXnF24vrWbcPHNvd6cHhoZ7xT4LC1",
  "key41": "5tr55owBTaSx6cJqj65VKzEWtepL8xNmiHfDp6LMYr1S56TWx9EWVyVFeyxKoHKUYcFRsRFzYBAqudinKro2mwpF",
  "key42": "5kAB1tUdMdCdVFzfTqyCdyZV8G6LyWXNeUniXxfTCVvHcioDD2puBLWQsf2xM4i6k8LB641btC7FkNqB4VRgZuto",
  "key43": "4gttiQD4PxGzzxZHDRE8HpXko7pEW1apzadubYdx7s5TD3iQcVJJxPevzeVY4MN5h6LuY8zSG8hcVa62NoDM5fdS",
  "key44": "44bWjsn3gDuvYZQi9EVTEnqwqUcHPEABeT2xZVsEepQunMY7wXyNDCWNSFpQohhNbd92E47YBzfXkpEjd3yb9fQU",
  "key45": "3cDENHG1fpioBb7C6diV51XaEdEBiC2Q9Ef1ekPDTXsZEVGLBJPJLW2n9L5jxGQ58fgUvmur5nYfB1pmmFzTo5Ba",
  "key46": "2W6zkEWxzQoRLNiFKD964HZotvdzaxTK5mB9TWg9a12CfWhFFBd9KwTwPVHnET8gkAh2nZKeeP3x2XrFa7xgMZVU"
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
