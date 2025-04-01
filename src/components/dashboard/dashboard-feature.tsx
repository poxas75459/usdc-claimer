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
    "3fReXnD9qrgnQ3qDXMpRKKQAZxNVo5YqAoQe7Y28uEtSbZ6haabuYW6ff61y7GG7YfjjScU9UFC3ftMEa9Arujti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "neiEiBwcMnaDbHkxrRYSUHHzkCfhqP1HqB2hDisA2B2xxEYicCTjNycRCubWhQne9yw5j1sg9VLpbPGT8JeuGVg",
  "key1": "59X28BDXmw67TaX6jktKXmAqemteRdT1AaGGjWTQHcFEXiZX9qbnmVpg7izn5UmofshJ7G71uaysbknTjJ63bvRn",
  "key2": "2G6okpBTMVFJRGkNmfwm79uhVCx4Wtf5WwEoynvz1V4qc11UuevDpsDqyqhEopRHjyUAXB5whzXBufh6kBGeiH5a",
  "key3": "55YMdybcHpdFStFWLS6QNxWpyc6bGGR7mnRF9WsfpM8og6nU1LPxKtEpKrQfjNXuB36Lc7WSKaXWqWfSRyVwsvZy",
  "key4": "5UzjcdbPV8Y2W62a8MHvPdm4JhvMRqnBVMtTtBQepDN3qAVj9bzDxwGtTPwbdtq7akxNRcfWZh6M1QmJLwijSWWw",
  "key5": "45F4i5aNvT2ef7ndAAHPWCXw5eJSpeikduYpJoZPNxFUE3EZg1b7mGgUoUrpm63qz1vmiXqEvCNU8BhQvpicydhh",
  "key6": "49tMZEKhg93TNUBv2G6YG2GnouJR1otzrvPeFkZogA7MN89VHnvQJDhSAhX6nJUaGPcnxfuqYMTKbCG7fVduMQJg",
  "key7": "4aPaiw6PYnRhZyQVvgL73FMZyG6yK43yPnV1u1ezfu5S1JVsJir1eMVK1uNHwYkm9QMKkwrynDJbBAFua9uSJwZv",
  "key8": "2Y5C7okkRv7u6qPKmn3SjEMLjPtDCdVN4Lh4r547XaAni7d3E2wGkHcYnj5ydeoAmWZ51tgMeHFTqYiPxCkAEKr",
  "key9": "5T7wc55fj7gS7dMMxs7t5nFHDXhhDLtsLijJXeNVSJhGpkmr56SUN8XxyJTJuRDbVsJipiWsiJ2tShyhHzVMMnZr",
  "key10": "5A7DuzY64V7ZmeJctVaaTp2HUnHWUWED8vQ3rj79ZJzzsiDiz7mdXayDzAMkmmdhY4Ykyxw4GZy4x6nW2chEywFR",
  "key11": "22HJeNyH8EBS9pW4yhHTxNtAW7CsM19co39UxSWtZPcj6zUKmjFYpj7rmxeARZxdRbW3SgmeG6tbg1bLmTY3F8H4",
  "key12": "2f5JrNXWdcfEFckW2Rm46kk1HfcFwjm4hRfHdkyrzRAk1dNq9LyyB4hqayviY1tsAZceMdysfpK9NFKpf1ocgEhn",
  "key13": "5uH5RHydo6Yzk28eBVoQbHXBtvc3HedHB1BaK7jx2tMij5jE6C4rFUsWv3KmQVsLhZXdA1NSg8gTKUEJTh3zS2iV",
  "key14": "fzgY35zfVgELPawJTYMPjjmrfVGCamG5JbJfQSAeBJyBMK5YGZhcPwu52LSXS38DB5Ec6nKKnZcsaCg7imgqu3m",
  "key15": "3vPhCenNjzuwDZXBwhtcWXBWkTdNYnQ4maGwHcdLQPNyzC4dNsHujD4Zn7EgGqAWBZXyNThcKFqAZnpn7GiunhYw",
  "key16": "48DSPfAKQKVjYVktG9upxPCcCVbG9ywZxE91hd1A2k4htCtiX2oP8UANdx3T5oAWjQYiRUDwhrECuFr5khx6CDL",
  "key17": "2CBdYmukzPNZRArux8ytLvb8rdXHX1niaCQG1dwz9fbf94NDVPiY1hxEc1MSkAA4xAhBFLAqvzGLJcZQEF6vj9BG",
  "key18": "5DHcRy4aXzEa2UDXjDENPuYM5jNUfjUJVJSTmt1JxMMQVk5E3Gx37jZQFJPj6jwqUFbd8SNMb814FZrv2mU7dHd3",
  "key19": "2sgsL254PP4AZMoxu616rFbKUM7jvbSHCBfWSDgnCPzNR4AQre6f8m9ScRGAyDgLBtN751EiJDn2PrwArzbL2j6E",
  "key20": "5yj91pBGHKH5PbjDzhZueYwMYsuTjLZbnHVvUhLywzm18u2rVmpZxFRZMpy2SDsFujbtJjKuS5bEDqoW3bsvdmEs",
  "key21": "3qZGisdS79nhVgMRAPkkNM9hHnA8resfhrQmRfMQaVBjk229S7pcXgqkkdzbA3DT5evVyzEvbjPvMV1G1KitXU4r",
  "key22": "5vKe5oeCsUfyzcLgtbq6wb1Kj87Ho9HGSjA85SkpxTN38CVYb1Hzv4tAP9UzFdNwM5ra3F7JHatuaUgGoBMKG4u9",
  "key23": "3aK3dAvcgkJVGjFMZj9bqFpppmEMjVuNT7YdR2RWN8366e4TDVx3zpcBo1YL4LyFyRf4YNVgC4yYsCGDr4GeFTCr",
  "key24": "4GFBjM1kzTktw9FBbiav5DYf9msn7WP26c63WzpDYqW4HFkcZ9DhVj7EW4hQ6UBRAtRjSEFGzqvSvLDEwYjmsoYf",
  "key25": "4qdiErjiUJGe7SoUSpMYpgu2c3DKyE3LQShSVyGeNGFNsgzoYeekMhx4z95ZEPtM8QxNJcEQoP1hHTFP1Ad5xm2L",
  "key26": "2vfMtNe6nbVDitaFYEa8FVBDaxseZmVzbGvf5bNZnSx46VVotrgoo9xNyKLmFRyiMzsFUCP9u5mxDjNy4yZRghh1",
  "key27": "5MV38ZC62MUqqbu6XRA7jhjXzTgHzrRAcGG47WNS62UcnXfLaQwLcAiYLjSvVjS1wupeSAfP8xQjp1xVuyxBwUMd",
  "key28": "4UxsF1bNGG9FCzPeMNLv8V1zZoha4fQF8ksYkxNXBYypezqbGL81pZXN8Gvwa8VP5oFzMU6Xo2ZUP3PXxnJWrXU3",
  "key29": "2wr6tuT83dqGfvTXfHTWtnqANuineytPd72v8PFdkuD1wdJF182Z1B6xTUfsdpPm7SPXUa8n3JeHrQxgDYzapN5w",
  "key30": "4RADT87wntLnFayD5UCYN9ySGSHUjpoqDM5agUWw2oaaqEhkbEDrKnkJXcMuaYECWmKHdVM3Wy1nhFJC8zUxYuy3",
  "key31": "eJJ6PurQ2dHmWoq9WrVk6VVQtwKyKhaEEW1DRnKB6Xg57p1HMYcJ22jx2zYgHqJY4KEYDaicY7YEp7KzkCK1AMp",
  "key32": "4aeYe3B7aDxdgmYbzZikSpGkp3Gt6w7aEYGKMU99W7ggD43TdSiSfW9qMVBunPPZqe7Tn5HrW88Wsd9nQz7CDfEX",
  "key33": "p69T7ediLgYr7o7wgWtNcjjNLxmXUgVyeyXnofD3svWrBmxAJQWfEL7UZR7nWEwHJSMykgoyFoGmVenmmqGSq42",
  "key34": "5fE4gsMVmXWXfVCBNBBz9bxiohhhSUmPgjxeJjNnHb2SjnXownFuRVhp2zhqAUapRF2sfpFKDSECLW6avVdRciqF",
  "key35": "4EXnpisagNamoFKNTGVuG2d2q7pg5SREmjBGzHfwGdybNKkpRaRFZs9sFkUCFF5bKUpuh6gVp9q5crxobmrSvQ4b",
  "key36": "UCp3VwMhMRm3ywiUEA6GLDvvjCnWr5qMrE6Zyq4GDLPh21DktGyxp1nEVmad8tg3EFQMSuLrpYTc6yXKeYpskVp",
  "key37": "2fYs6GsWyfswB9dNawPRdQwSds2rHMHsNuG7voMvQ8ye1aSi2UyFewFkww5zpf9Frt6HkDxAKv2xTyEK5T9Msd4b",
  "key38": "zrAQy7uptXgzZXZu2bCZ4TF9MJ1FQ8g6RzdMdYMqvNzRqNjvkJKzjhBApjzCTyD6kHkc4YC9HPhh46839KvLzuR",
  "key39": "2bM6FDLvRsa9Gi7fVVAXdLeJ6WBcNZ2qnXENDSQS3UndzsuFizUpii9ep41BHa8AjAUMrumb9AKQpy855QPk8Ays",
  "key40": "5JRBo5E8HcdWqyfyh3sszFQxzFqDtMT4iVJVfyKmdwzLP9WcJ5aWiyP5UvT2aj6qFzJEU2Y3pbn21Nh38ycN7jzW",
  "key41": "aTBkhQdC6AicWfQZrLETRiW7C3SNk6Zf2iDcJY31adFDXsgJB8zmf8uS4aKtgUSJNKQ31agYVU7zU1PfmK37m1P",
  "key42": "Rggv8pT1VR9WJBLANokA2utrdxrY86MGYZBwiy98aWuFZNCf5kWgyayey86oDywDerQyDTiTqWfWFPMr8Rj477E",
  "key43": "5g4cBmREp1DqWCoyFSfvn3wjoFCxBxfbWfX32PHAupnD3PLh63HLKix21taed4kfaJ1RBD1BEWiudPa72shCBmwH"
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
