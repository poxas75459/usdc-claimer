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
    "5oYAWqCZrBNBZy1GDgF6jo7gNmyMq5Dapsj4dyEb2ZscrTbbk49rjvURK2m9seqrjNaHjGFA4zKzzmj74oB26Grm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bDb4LhwiyWfXqWRfCY5tJNqydTsjtHDVi5anoPxfZWKVUDwjVqXpR5Pe77ajP8kLJZAhuqE6kAJUxKeLG39pSCj",
  "key1": "5v6ieK4161fRSk68cwnopTed7TDNhB5u9RiuKcRdTqh8X5xmNJ1y7uySsBbLSwSFGzfU63X831ESyE4bun99Z2Jy",
  "key2": "33GiHYhhVkY5ERtMq8ju93Q3xbykduRZNVfo2Gs4peWsZRFBh69NmVyPyx5474xNwMmqnFasVxmA2sQwZzdsgAoC",
  "key3": "5ELCsw6QSt4QNUXq5PjKPTLpVP9thGGLmu2QWJf3EcdD2PZC3ajxjUq657WYusqAbU527G2VYEEGhR3megLGr7CX",
  "key4": "65pFBgePwAKP6n2cPmCzVbtmGHYeMgB7mnSuY1Dp9G3PfvEwtBnLqshtCM5BbeHNY2cwgHLG3fc44Y4eZuHh6s5U",
  "key5": "5tsn3BRFnqU8v3vLoHNTjf9v9cyGBXGM1ciMroGikNhWaPcmZKT1S5Wq7gwf9WS8s7LZV84UqNShNfwLVg7tNumm",
  "key6": "5S1DUpNREf7cLMyBBBLHHLajVwSp2gp42CFkKVsn2XR5UsnZbpZeZpaL2bLbQh5XTxYjY7yC2JmLRrT47gruz26Y",
  "key7": "4Cvto2HTxcLanPo8PD1MjyH2wPvosruwMHL3Z7dK2KbBq5vXNomXR6tjqkkySp2m81xmYM2ujhSD9nKe4oUmQbuP",
  "key8": "5jGdGbMHAxQDUwq7fymWrEd9pgi69mYoBGyaA9LBkftrTXFsqvn8CAZKHJ2aL7Fu82MRuAd4pXmW8Yd7Y96kCQdM",
  "key9": "4AkXYNhiH4fosvRbsE8qGMpFFj2Smbhqvh2VSBRa3kJ6UoPBFLziUbLtoNSgjyWeh8ywNzN8QSitA55ZcwcjL589",
  "key10": "3G4iXxJv32jtjbz5payQbEjxZQQgvVRQY9AkP8c1STKyhes5qEsA4gZWPoy8womYccayEA8iXnjR4rjg4TtBm5u7",
  "key11": "2vmMnxrvtKAgLuYWnK413uxbQyRnxQi7D3xonKePKR86piiDeBvB3TdBdvWVdeKEb17GfSF4KDugmkxFGgGxhrR5",
  "key12": "4Yd5WWdEWczPK8gcG1AnxzhhJSNV3Y5xezKkyuM4fXGxCEmgdSLixGriRGD82ciRSxJ6aiiJNneSNSzAvRNHDZz6",
  "key13": "sWD9ifDPsZhTpSEfAeFmvvVeNwXQTfBAgR1vbD2vVnnpcSN8MwuPiz64dnQSxY4rk18SvswVxEDSpccGtoLVwAy",
  "key14": "5H9G7CapVSee7uZoZVfQnCn55T9ZKNPxa8nzBebSkGA4pGbQ7oADW2mXKw9VhcEmouKju5zYHcPN2Jp14KJG2yau",
  "key15": "4cAxZo7CqjVKhrkzYNuMkY4gckp7m5vzvgvXwDGsxbLin8SWEeEYk9WgGPYT327zW6xabJhVKjYn828RgSWT6BzC",
  "key16": "4NMWSzJfPwn3Qbxx2dwR237AmHchZDRKUqDWPCkNobobJpS8TTAQfCigg9rq7MHAqHNknN6jutKRCkaiT5fZSPS2",
  "key17": "23bGfDR4azwoKGeJkxSC7ENHWAisqzUuK9yYLNzq4WaNjdsraN4f6V6kyyE6EGP7MaxyUHw7seFgj7Z3Fbb721Mt",
  "key18": "2z7q8iM9PfajFxwgaVu9ga13DfYN3yDF15v2NMZLRW8g1pHDKfdjusyP6VzRwmsN7vEWcRfXUkFhngkPCKAMX9Kz",
  "key19": "x7o5PicmmMz49zYpaygNmeKEUTcAdv5uJqZwKESt481Lc6iucJHShQQvZKcEotuAKZ1hTjAec5DngRDDir6GRGB",
  "key20": "ZAZpLQA2mAQsiodcnw9UCk3cDf1DbhtKzV6h694YTKgZffNfDDy9pVQUjpku38B2S1db9NjkTkWzQNKTRvf4C8L",
  "key21": "56E6ka57nSgVTnPFK8taUWvUoQn7KUj9Bc8rSgYSMHMJjsqANgDGHF8hXLQ7WcwbM6dEfWLCqgqbvC7c33hF4945",
  "key22": "5qL7PAsQD6ruAXmLc7XHwdCoBtHaC8GxDn4oYMsFkuswwz4Z3759CV5q4SoL1SoiFXMSp612Y78n6DUWJV7LKgou",
  "key23": "3uBnEDz7tg2q6uNkuFdFPrykDWXomJ2zZEfrg7821x64j21kWdKy8c3kNJLxXQ7vBHMMbsb5CY9ggAUG9HGsXjNS",
  "key24": "BhrFvC5xa2xtfmbx9jWrV9qfw4pZ4FjEpQXGMU4QSGFXq5sNpgbzSM48ixcYoZen1fNhkVjQ3nxjcpm71v7n9fW",
  "key25": "651H2GwAeDX8uZn4NC6cvKEA2WuRsSuLaxQUNDMnzhXaxfuALPMgD7DkTqDAKN22BrmfFShUXYWKqV22P3q3YZt4",
  "key26": "4CtuGwdiEr8HyzCVfPtrqnn1PBh2pdCnBu7EdovgcgZTK331P42P19EP73Yfqo8pbL4fBoKcdeqqcrEcRfYMs462",
  "key27": "4ptB1agtRDJAN7waNePbre1vmDKi9UmVVtDNaXDvmojBGtnegdEonbscwmrN74ZdKrnP2xEh4RY516VTdfdVVzd2",
  "key28": "63bB5qJ14DFPX97t7zLiGrqvMzSsQHDNknCVBrbJM1MoZ1HqnAHHyCMys8tnmToMvRikfbgvUkhJyHNEvFqxeAWF",
  "key29": "4HiZZPy7puo38JRLC92seW5AFjCp6ReuPxqAiEEPCyodCTbVg6qjC4cdeusbgBMnjmC69fyivzNzN562AGAoshcK",
  "key30": "6rMLQ64B4QDnTj5aBvCVFv7vT1CkSWkBR9s4V5d71vLHcEqUw1tMgDJ1Wd7TzV2x2ubgMfioc13jrpm4RL8QDXD",
  "key31": "4eXRkXAfWDuUNAGXUtf2ubVHnGMqpHuJsbLcD8DiL3QtSA5tSjGFxuu9YBz7P481safq9RmyN3RfwJtzJ2MWrxV1",
  "key32": "iw6E9WGWYNk598KNVbiRWTVLFiUoSDa6MdJsVuA4XNorpET6k8W9bZsAXzf24c3gz4QQ8Gh5HBvSMbH6GSc2Ufi",
  "key33": "iuuttoV5udHHTJcNNJKkcG1QXGnCNbdmmsshXxGKMoprYSxg2JdZJnFiBEvMfHVebyPHhgTceeVN6gCBw5RMw7R",
  "key34": "4f1pjDeWV9bx7brCDxCUjmjUQPrifgGQLnu1rB4eK6DZoBJEn1BHaiydRJKKg5UXy7YtHhxQm4BsD4VoJDur9Qad",
  "key35": "5WnbESbPAvkFnBfgZomxzS3WX7R9q3bETcHXZXvoYgbaoT7snMqNVTEZzgce7Ka4nwdhP9t7GnL1QusdxMMBKFpf",
  "key36": "4xNa1U5bZnHqQg6hMmva6bFD4yS1qSB7qSSyFAiDhXw59tqSasNyEHE2pSzunr2c9FqeWRbryMGJJ6UiSTuAE4Zb",
  "key37": "2QJzUcd5YnSnxBzJYxrzMt29CiDrFWv7vuKGif4jQwgaEigM5svrfibj4pSMLbZHeCMfrwHNaRpvjgqNXXn6tgmA",
  "key38": "3d2ZDhCTLsar4RSYzBPKqAuswxyiUqRWjx91nHZPyNqTeSqoyNfEctvaLG7zFsTqYDbnv7ye2yAdkbmNRQEU1pUT",
  "key39": "3yiPLF32CeAeo1jCT3GAUqAjoUrUJ9uSCzzP1SszjkbiRuYYx3zrFKQ1ztEj4oDeG5HnFyJF48eMSNBGvJ6V53rP",
  "key40": "21B9QJnYATKBPLjDcJB6e8nturHa1m1UetCvEtKrfbFUajAiLoHbCosDNb3SQLJaqnzMW1C1SPfBr92sL7JfpTe5",
  "key41": "3gedTRe46pMZ1uPuGrHhkyiWjWQt1CaQou6J9TZHB5tAnk3DzL8Jo6XyTj2UJ3Hn4DTtZUZdApcHmSDFQoW1EdK",
  "key42": "3y7d13SMySwozAPgVosN2hXPDvUQ5AP5GAs961ChyRJFJHo8f7Xib8auutGxjsoaauRiwZkpjhNWGYs3aSJXNeC2",
  "key43": "358cpg7TS6gm4zxbDyVAQpUmrz7Z5E1gVy95VDGkPqUTPLHUv64SwCfWwYEJ2XXHCbAd1rnUUh8W8tGPbJqVRK2z",
  "key44": "3grq4xgRzPmBeGiXuwATbWVz9tEJyU62Ejgd6v8p5AjvrA17SB4FxVq1jgTpkdM6VZrGM6oZWip7tXJrWzU7JLNM",
  "key45": "4y9VUDmxzgpqRq8iNpEiFzx9otkvF1aRPY1JtqnueMEjj1v9db7nfxe8F1ubWGXL3s6UTFvABsKg19ftWuzjPowv",
  "key46": "MDF4o2oQNKz53iNMQAu47P3oPzeT1ByDahn23yPrGn4Zq6hU5N3tRF1TT5Dk4josnwH6gtSPdx6wBfdkhXtafvw",
  "key47": "3oTp1JoRqrDH1DMh9XD9hhPQsZT8pKYKerJPRfRJs6DsJCqWqAHyaQrHj1Bf1e9aekf61mXn7PNjsePN9FdYr3L3",
  "key48": "3UYsmgfS97K21FQvwXWsFHNa2KacNTAqgcnjbMVt2aRKa8HD52iQDEWqB2PqBnhuZ5cfkbbruh6eUh8f4YUQmCRo",
  "key49": "3kn5k7YkZh7ysdiZdxdgzYVduW3stqCUUPGJuSfqHQrwRS9yFahfQ7Ye962A7aCGtf9ecHK3aTsEcZMPb8vSCZWs"
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
