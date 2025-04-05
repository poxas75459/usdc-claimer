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
    "3yL1r4TfJ94kZJY64HSBLMdnN9yFtCXr3rs3qW21f7HxcEE8REaHxbxdRF4GEA1Rr1dFJV6ViRcq6gk1rJ5PmtqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gtbn3ngfdKgYcgV6sT9sFcDnmSRzKAyqYk2yyuwgogEvKHmMN86XDeH4wV7crggtkP4iN85Ru6YZRQaPkwMRhL3",
  "key1": "2Gv2E7SEzUHvdL1NjPCbyM2oH1cBFXK4rYGFRd3rV6XWch2XNTx3gANrkthPzZiDFfHLeBRFW8T6Dc9Mn8fPuZ2A",
  "key2": "5GEoEyMEdKwVJsDLwCk8hWMPVpVCGdP3v11DbJBTCic9bYqbq8JVjPhbAEZGjGV7smSSR2d2qFHfp8VNB9SdYsVk",
  "key3": "5K9xM4cGdFBVuKj4kLUqPEYHe5CyjBhjxX28rydPUsMoBdUJGsjfUAJnEowdCQ7Rdp5Tg3FyFN4yaQupMMJ5jMS4",
  "key4": "5sh4URCUWzH8arvnDXBM6bC2kpU1x1ifDNrr4Tur7oo7fjYfHJ9VH9gq2aQ7TPeibStabH24wUogeCydS4H3Lhe8",
  "key5": "hzF1w3ekWcxcE1BnRBGba87Z86sXSeTa6D7f6SRue5Q3sqa2SPkEz42oLSZCWs1mQdk35wcfK3zaTqx9pvjF5Z1",
  "key6": "3rn83zbg1QJLo1XHRfE3jksqRrzkbhcthdBbZUEaS7hfsLWNoku3hfozRTjpHJtfvyE8YwTKyzLKUEeFUuPMbwuJ",
  "key7": "66C6Kp6AspggzNZuxpefiu86eqhbUS2f9gYRoUiFAPzaaaWXqJc5P8GVJxh4DpK9fEqsQCDX6PyMe4f8w9fijMrW",
  "key8": "8XFbUsT1G1qTyjTSvPuf1CxogEEZco5gHz2FkCnyMXNyp8jV2RjAGg9XqJnnR84k4hbxoDykYycaqEBSLWwnmkH",
  "key9": "a5qjphzKH6SYxzxAUAr7pzCw7hWeMDJYugz4YL8vvi1RZftz2qAr6t9Dkreh9hZbZRZQXNsq3S8U12qDGG8kcqk",
  "key10": "67iJkmPJLmc6s36GhXDk84q3Jq7tDqLrKMzuFUZBaagdxWECwRb54SXgtGccH4PECyyfTd5xSPaZbztMMwSd34K3",
  "key11": "2ajjTECrz7qfLvn25CreYkxrgjbnRDBoEgwuKAzo5fJNGC7gfmfHHaacsrcmrnXzi257Nk79J39SeuStWEAbWLqT",
  "key12": "2F3sT9sbaVotDpxmYjpnCGpLE6r3PuMLWBDCJoAZeCUiDLVKULaCv6xxYd3ssXJWGi3KvUMhhyyLEmQ7MXPPYBYP",
  "key13": "2yxCXHdxy573u4465dpXRHDfz3iUHKTeYmsPLia2VSgSF59Jxi9mmmR4JPGgFyTce4HyAuFsmHDHRr5eqxb6gJ27",
  "key14": "2XfXLZ1MukKX3A5jZaskdkJkbbn5vw5nQvtjrpKmkF8uryQcjTSjXWsVTAXRqvLiYKjZYP2Wac4FDhtze1KZKXA5",
  "key15": "26pj9ZadQ1vX8JgWXtqtQ3YuDJ4JxVQwZ4ysy7T3Z162y1g9XWJXYJHay2XJYDKiXamDJSbLoYa5fzKcUWmHHxAS",
  "key16": "A1vAzPeVpZ4sj6ENDdt2mkmcBCDCtid2vFgj969csaqnTNFFvmfioNFHxc3SF6ZfzHAX923bWNw51CBbKFK1uio",
  "key17": "5bCkzXnpizqdH3FXTf3P57kkjndqK2XoafdvQLHWg4yV7NRKcgY8YPM9zJWs7J6vmdhz3nXFLybBG6Cde8ybnsrU",
  "key18": "5wAGNM3SQVC9izF6ukbSFpvK3ftWJQUXk2tNWSJLpJbzwAJ65ybb4cMFc7MLNJyP3mnBxDHavQvjiRxMaTmS7umk",
  "key19": "51iijjyfUPa7awPcNm4fmPzbRx5PqfXQ6RcYfxUDTRUBp4F6eNkeDJwDN7CpEV9uyrpXJSppBrw1byrJPhKyUymW",
  "key20": "UkZAHfaDL87T8BAPnv6HG6Fz44fwhmnL7ohQhHGPucPM3ZdQ77jcmioB5rGAsDUoXzme6oZyNYeH3urNBg3gkf5",
  "key21": "SekdtuKeZs5BsHBggUAvrrbJbetQAbotqbUdk7pQn9nDiHQEwkbEY5jLtjBkJicn7YzeULNb1bM4GRC8LVTkVkQ",
  "key22": "FXHB9CW4AxWLD4wYJSsJaLh2cgbrvcFvgQLqigPLxd9Qj7CoAEQuyCJryeuKrtDCrAmAvssQ9rorAHP7jY7hLwh",
  "key23": "2aMgdVKHpXLQrKELB2n3gSdh85LSQEJDwzP5TqB1rhiRLp7PPJ9eLZFFhQiSYankZ8DyKcoGxFVTgjrG9SjPFK9y",
  "key24": "3JRzFTv8zRW1ufS2tT4wnb7puQoVWeUFFMmp9US6d9QMAwZopmoVTFseN5Ss7pgQz9d8yhPf362WVpRp3uGmmDiX",
  "key25": "1QGMmbDa5QKHS8ePAtj1WAuGvzAscaLMnvzLpStBE9zxxg9PdzHwtXNuSKQ2Nh3Cg951MzSChbCQqJhyKZgMCAK",
  "key26": "4FqsUCdSHFoXJYzyHyqLaykMSabztzLSbSxeZa6zxEAcLjYAtX1h6XLCjbG9LsPhEgGZkp6G5z8YdQiHGXGMoHQs",
  "key27": "hD9D2D4QmtpSTaJ7KSTMATac44G6YfpRjhCBnAsPBY9CCjsLvunNWFtHvRaonqMNZ8FYhAiYMMXr3tQpLhMrund",
  "key28": "4TLJ5hA4gEU27fH9so5kZw5iaMVGfpyWfUby7nPEx5CdQ8YbpVtkotYeNLLuvALW7yrSuauyeD7SQDBMd5DENKwN",
  "key29": "5e6TWgYM2k6GzdDsiQYQacovr6HMe8zY5TipDdt6qnCjAfFjWokgBfCz6BccVyYeTdNqqa56z3zqfHG1YSWH1bV8",
  "key30": "3GN693FGHmZbQMJdBGBtBHsg8KB81WYy6vZETSWPex98FVQvx9qYPZYwwo9g7CHvWxFW8tQqaVV8JDHBfMJFqgfn",
  "key31": "3pBJbnaHpshsgWik9vViip18erzcqgXhtwpEujVAofVBUQtB1bGiENcPwdBY8boffatE9C2LZT3uYYB5SE2C1ZH2",
  "key32": "4kXz2fRQuJmHdAjJ8QorJZC54vYsJVpXqgqdhpVisn8RewEcAfZLRq23MAoKaGhRUL5qUGqtSN7GwrqUcSMP1GjZ",
  "key33": "CaZSU7sxGsB4gtfb2oFv97yN49iyt6jCT7t7RTVArdf1oAkfNBdHQJfGgjQR8Gt6WV83ZbAUrCwYBYXASpL64jG",
  "key34": "5G63RArdAYD8mVqLevsQWTXm1tP4114R3sreWcmSn6TAJJXn493seGzkSBuTAh771CmY49zAM82osq451sPZprZm",
  "key35": "2htS4gZaHU2Tm4kjHyCGmGjFx1cfUz3UqEKA7f26ehaiUwTEFkjuZq2MWV2ATHTniSk6yLFEeHNkZmcmwvAt4AiA",
  "key36": "NRME1C5fvzaJQUEsjca33bhkfBWwKGQy5kJ8vHLie6j6c4LHK9sKqGyDrezRtPsV8ZeENqccKfxHBcpTcbVmtwy",
  "key37": "3z85Z83AdUeSSkx55PfPW7q9dvpQFjuYoiygGttTS2F5c9oPqkuCPQ4dFJjzJ3GZ2vDEN9jyRGeiz5hZpj3HwwTN",
  "key38": "4SkpM1Nh2ZgnGG9xFS72WpE5biWJ3j5npxUXoZcJYBgeN63xS6aysZ8tQiPQWk4W4J91K9ZSxEpdxQpSzyb2viP6",
  "key39": "TupCztpkkFLrTX4LuCBhwe9RNG2c9y1vwpJGqP92DSBCQA8vUGtisfHyk1rE35cApzkpKxxxyZ8CQnhZpuKcyAq",
  "key40": "yUgsfrvEdDGq8juoCWdnNcqX3rWKng4nToFKtobvoJP9FREim6PAAXwV6k5yqCfHkLfg4T62GyokP5XPdj6wkeU",
  "key41": "5DVTPH7ApYsg7tPoMk932uWQqug4Qtbnqc2M4NeCSXyCiCoHR1FnzQccDRgjgDG3KzY7hVfJwHLRbpLfo9TwEuSg",
  "key42": "58bq1eHQAQws96afciShKCQrN9BsAxqus5LhpJvENr5SRUBZCFBxjrVnpjQqHaBrvjQNNp56e328tf7wzkDksaVJ",
  "key43": "2Dnxu4GKEmdNaMvZDcVCosQPXXCdozf4nXyULShooTPipCKHHuPnUR7S4tKQmUqN2MvQj6Q7jtzf8b3kUpgjnv7W",
  "key44": "4o1zyaSW8RoWrQiiYEzj3RPDCacgUVYNsZQQVAg7cDFYSRXHZmW5YXiKN3BPHHTVTiMxZrmvQknU3Fp66f1Lb6Jc",
  "key45": "4Bp5yP5SYcBca2jWwz2L7xyR6LHWwuXU7bqgbr27vMka6D2nugGi1JJzxetRtXMYstzXQ7JEG7cETj41PnLZCfWa",
  "key46": "3jj4RwAdSYwbP1zHDVy8cyTnuvgXSq7ZNZSRU4SN8eUZcGeYoZT7NpZUXf3Z9xFoBSsAecRmfKnJxkeoGENyMXdz",
  "key47": "4b5gLhB6wRQGtMDM7nimyzTNBSDVSw4kT73HBcBTcmNcfMJqprD1YA8MFqVHiSfg9FtAZX4QiWRoMBLBbHgZqY1C",
  "key48": "wj9V2QqUHefCtiec3GYtJNYzFJcBZDhWSuTjpHoj9EFSk6vcHF8esPihNkqziCzzB9VnWi36SThZiqAVwf5Z8Sh"
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
