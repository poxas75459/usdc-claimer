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
    "66o6G5os9i8YJJqF1K8fXJrXcxHhwLqtgNAypynUgdzuHoAL91NFawUL4Zefwh3w1qLwcYygpSqMudPPrHqkrkyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CBKg49o1MSpAMg8mPrm1Kg7LcGX5NUKe8M7PshWUFZB8eaygYcqjpZvZ7N831zRyM9nPMYUdbEm1pALGRB77AaE",
  "key1": "3FTxtZjBcJ9C6axTkYSK4MBnWCunHYFVwG99PFtcLraisjgiCV5sCfs8kEMsMXTCPf61SrLAuWr8cJ8rP5kcTU9n",
  "key2": "3zreoihMGNumQ2Te641KLFFnQAo9qNxQH1ubC2u7mSW4k7gWgrdT3z2WuC35XvqMaue41QxdZZ2b2g2uscFBSPJr",
  "key3": "4mgV9eg86nh9D1gELA6h2HnqgnH7Z3deVYhSW5bM5PUoJezcJzzAoFzTfTGkfEV4oNJMA9zq2avyCZpC5y1PisuZ",
  "key4": "29p2MFCZ9H5bDSaR3DEYADrwhUWHC7EzunVn5QpK5j5VJEazWWe9e3J2yxX4kPQ18uDk5FSpX381QoW3QmzESfqL",
  "key5": "28Ads4zaXQ9csZwTdUDVdnHrCRhxvrqxgkNu9AQrSEzYhdSLegHJpuafsGvGdcEWAhY56ka98vTUjsYy59Pzv7pC",
  "key6": "BMpRqzfaBG4fC5M3kbfoqASW4RfqfsovEiNUeBzqkQAJY2DXwHE1VEzce9EygWTnhvMrNcKZJyTa4Gpw6456QHM",
  "key7": "5CSQv3mtCekxCupiy1ote5y4BghJ1a68UkGxhm2ufQHrRzrJj2fwM83Xidaka1F6dj6uQR6p9RzJzxTxUZxv5u4U",
  "key8": "4wUAhw2AEqhXq3BoEYFBWynDxKtouc7AgCJKDqLY7pDBkDTbX2rCWFsX2c6yBLvwMRogMAgqy9665N2Y7jRdiAqW",
  "key9": "4BujNi2ExR1iPeHqfhxPai3yAv2djDatLMULPGVUNpa8Pae9bpvQpqB7DQb2iyLb6LKkWN2JR9Y4oZ6RiZBr8jBq",
  "key10": "3c93xbFVFr5CyNzwQKKEr19bNPDK4ytqXLRCedXCWgmV8U878AvQ7xTM9eADKwaFz6jydiSfBXfih1AZZqjc3a7z",
  "key11": "5dmBv6kuFcs6RotbMuEtcsQdiHFXXJjuJnmzMxjyUE9dt5hj9VekMgudcfzsHV54PJZA9i8hbjsvHgHwTCt9DN1E",
  "key12": "5hfaSfTKWieJMR9dnX8jkYKAfQYkGderpXptrvXSZWkTBVFcqoVLdnDPLzz8dfMTMUSjW3J3zmy9GRHAcPkdiXD8",
  "key13": "4GFhsVxRGJt48AiBkCPozddb3Z9AYyJxRqHWW5QZXZuDbmNy4zV1XdMRR8P1k7CUeZyUtiYy6NDfWmXpWdZzVozf",
  "key14": "126WPNk1tmP1XCD11WD5CJ3eaeDqVDK9aREHcvBiKWPoPKxcT4ZX4nMhKGoTXmKXjd9BGwdsNzqxc4nnY7reCzHw",
  "key15": "5pQKiY2Cc3KTV6UGdFiFwf1yZE9ReWqA2kf6kgwkgKB1nmNFeSLmDaDnkogMp9o71Vn9ao7ZKTyBu1DApw45zmgn",
  "key16": "yJKTASbCmB6t65w1kr3Xb68xRrSbUt6pF8qK8aC1x8zrfZ7BG1FYXs5yzFV7DdGjYNLGWZRNB3CjniRixWceeuf",
  "key17": "mqEvHcZpN6Ko7yCvtXECgta7KKnwcMXLd3CfNea4Gb3By7KbKjXQkFgK48TCCZ476k8iAnK8H6fvfMLv9Lw89xn",
  "key18": "1uNuSokuMvYMDa7dfeFMfiiSciwL1e3XxAhtspeDBEtsKf4ydBZ9HP3vv3HgwoKdPUQifvqCYg2u1eRGnXpF8DC",
  "key19": "SGwrD6PUkn6TTK3PJtFuVvSv4W3dsuPWkd2M6zjRanu5KKpi91hK1pRq161vmsoTTck2wQdCmdf4fn9vAKSk2vv",
  "key20": "UcHRGgmNsBKRJLLp5a3RsLoPyshgcGPrdBEEx5Tep1t3AaZwdTZWJsn845fAsFP8e4xPbe4Jjw2JGNjhZ32wWN1",
  "key21": "4zSHtS3k1nUGdCL58RDKteGQHeL4D2TdQayp9eMAKQB61MK4TqYnvwkC7WS8MmxsGdp7Ru5J4PE4RsPZz43DG3S4",
  "key22": "3kWAmBQ5JCFLVrEjiyzb4ifBcau8VXXDrVvc4jgqsajhbbKSPVKbzG8Fs5MHdfrv87LdawAx4ZcaDmBUKRDDUg1X",
  "key23": "5YEBEi6v54KeJPYprevGGbs2Ys1LRkVKyvRgA3ifdWTK6ELS5MAiAbUMk65WefzCNTzhRcp9pgYBm1Q9ocb4fWak",
  "key24": "4EKfC6Rq37EiDncUN7FpLBmNmJKs5RGUbQmu525L8z4YTnwLBHYMSNTiemSnnY4ikubiHUZFXPrXjjqe4qso8Lpb",
  "key25": "3YBLpMefTom2HpR7zmkNuUUHJ9eP4vyRPQn6n6RpVBYCzNETaqF4569re3bmzRmibLRUwyuhY3762ocd3CvRYs4c",
  "key26": "3yXG3H9W8tG3B12mdX7D2pUK4mbjRBx5Sw7jfQ5drSiNt2hFmdbjMfdiL3eBQEkoWFsBNCNrkMwPi35q15PqhqBs",
  "key27": "3tYozKUMUviUmQgbjKDRCBe6fdS3nQSSBNWxAfFw6WNP8LdBsFtKgKbWUJbUfuDSMbqxvCKry7pPnQEmTH5uaQic",
  "key28": "2La61kX8vrsvPeeC5urL3d9AX1J8fT2vePWngJTgSj3Ay8jcncsrMQfCxcW9Cc2awjiULvpHDCyXX27THiJua5gT",
  "key29": "2Wd8R5yWA1Jk6K4E9FZ5XqdUhWecR1oYPpqSQquXQ7LwB93yV5yRAV6mszMHfNLYaes6iVSJqWC2WKvYzmX4dR8n",
  "key30": "3YMKXMYoMDcEjrH9G3uFvKqbkGgKMRwoP2pZhq2mAsc4jk3c5WLttwcvQ46Tikfr9pm5bxUBtMEpp52zRq8DtQ9n",
  "key31": "3TtTQR169LUEd8WsegnfYGFchoaSyvXYxSrxXGwSdxXka3bSYpL4Mnt3fei38UPGEkj9pHuuwc8ZPBFoATChJo99",
  "key32": "5bQoiD2oCkWCQFJ2HPhkCJ9vJaCnydqbeo8eWggzYhnSpc331uyc5y3Qp7SkKM7G8WKdLF5FKr4PWfHxFvxQL82q",
  "key33": "kwy9Wad22Z4EFxVPAuKfajkadmg2gADsT8DwcHJEYLFAGywvN6UxuxH8Qx9u27kJKgfpY6FKFtDhCuwZRrRAMEj",
  "key34": "4U7Vdmm1rxaxjCuMPudYkA8Nay8Eq8nQVarKtBXtXBWZJYikQnmwWnw4zfvDNWxngbtkuFsAjge1gEHW7Xn8cGGz",
  "key35": "sjEhhYCFy6F4o9zyaa6sd5jGLLok5FwTUee5ENyX22uCx4Fkyc9oc4WxXYWnUXVqRXrQ1MN1eu98Epy2EB7H5ru",
  "key36": "3PNeRNMd8wsya78NsY5sk8oYseTmf2AtJQznxmkqXoGQLJ4U5bq78qS9MoVKiXY2hVx9u3RHPMabSqWTfYouyZA",
  "key37": "3nC7mao7YPocMqpXaqb6A78fg6XQewYA2dmjcEXfUKomUmhPeLL73m8VyFFPWqr1Qxzck8nK5oKJNzHQpmYJEHqG",
  "key38": "2NkqnuZYGxVusX5U7hx7htaYZKE6ScDckWhSq6Emm6tZK6Ln4UoeJawWtKKf3AwsKy5oFnXwpUZWbgmSdLS6oT7a",
  "key39": "t5q9H5rczWcmuNeU1fje2wiYmMNT17hNPYzs6GeEN97PhqPwQivMUnnZqCWafPCMKuXf6JyLKthfU7sVft7k3wU",
  "key40": "3i93C5KWEPBFYz6SvquTiZAiKDt6x6GdVDgDVysSitGxJmRURGS1zZGBrLU3nSGctL4VAasMRxCQEya32j9XuR9N",
  "key41": "58QsaxrayzhziQL7HwNGc8SBWdjwrBmVGu5CZp2RoyYvMjGYiQ6MRXb34pZ984w8YtwAuKTPn6DTFzXKC3CASEtL",
  "key42": "2pPcXfPMMG12nhczax8oGrLYCmWhMVof3K7GtJERkrTWSdmMLywWKR5sDfo64eknJXz3ScEt1pKcCxzyaQFsKz4e",
  "key43": "455MXBdwVSHgDM4Vyw4gPMkTJtYrWwit5zcnNJcC4Hz3iq3EhnCvQip2KcmTipdRiUqftE5QoSE6mQWuiXjScmPp",
  "key44": "5Qy2xbyrvK4YsbTKEo3ozKNsgeaaQPZ4By2cmUFTFkwSonVCEDTa2H7aqvdPCNrXuskcBYyYd6Lo2dW8cBmhA8xD"
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
