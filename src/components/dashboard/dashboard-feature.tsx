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
    "5AqDzfhBX1DKFPFNdmfHRjFsvwTCEsAKbQcQAaise4Qcp8imvdUqq96XVKbz286E6d3sRQurqvr634ff8RmN89AV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mPdtv4p1BrKUXNx3XL7B1VCMjUDzi32AFXSGhpmSSJDg5QDwJ8ZXThYC6qVsV8LhVvrqboG81YRXD8dKcY3s9gh",
  "key1": "5A2ZvnabCuMRqZ5ZFq9kkdy8GJT4BtZqMQTv6xq8ubH6RR7y2vMR3NzSbsDEw4oL9Ps9EouFafpc5XGBswaGCwUc",
  "key2": "2cJgy5jpcyfABMpWA12jPfM425aBx3niFSa1Gzf6xBBdDCW1J4gYm4M1AkxmrBSxjfixquqc2HvooC9KsCgQUpTh",
  "key3": "4Dr7zaZDu2Bx4VzYV2yvGoyfg9QeTxuHozGLfHsxMUGsjYfX9jgwc6cPHv1b5aQyS6AHJHGT31pzJXYL54Jbs4nM",
  "key4": "3USHCJ8ve4i8YHb2FoyCfW5GestsSvxoMs9RqQ9rbJS3NmEvmearKAfqrNPFY74Dcp66tL1945NL52SMfGYC8Vm5",
  "key5": "3tz2mvZaUjVcaEUduyFVB7f1rWfWAk2CHdaRNQFh8WB2Q5ZJ3CZJsmcjmgH1xx5nxcedx6u4n12Tddxxm9N7hrh9",
  "key6": "3QgzJCJP2inmpZTmwRqNdffxpgfVQjxwTdWZw7GstU1MoqH48APwWZ6j1CeeLdCrxmXvuLttYteGaAQVPdNaNfZB",
  "key7": "2n8tiYaL6fJeGbs22MPWYQ9fmxBTKb4oL3cRBtXkeKFXQyH8wKKwK1Y2nMwvYs547v8DcnwdkrdfnLMV2rfKLWjv",
  "key8": "4rcnv9z2jSEZwSzQiPpKNuJXRGzmt96vS9Qyw5wyCf8c7hjp6z3ogzeNEZGy5X1q9tD79Yquo7LzFbNUAtaCamgF",
  "key9": "wgerzSCfXoo2qSmQCGchzqYQLR94UnQNheZDkGae3Bs7mHcSR1XDr4qoWm1ecFNSsvhQkBTTeDnXaWdQioAW6qy",
  "key10": "4Hy35XEq7Wi8wnajZ9UyJ5gjx2F5CwYpyJWDBp36KiG9he5r2LyM1KM5NBGmHhCtknzePkrMnsmK7PEAXQ8QoAKY",
  "key11": "29nZicQYVshuk9dL1htG7CWxTwUeCYB6wwHMuKq2NbNCu7LVntkD5AVFAzU3jJSQaFHuvgfyqZZtN8LzQFZQwFab",
  "key12": "4pGi9iqubUC8moop6TZ8XnS3oSXfYGWEruijsvCGbky44x8RUMwzUe2xNhZoqFYBLR5qtBCLtTVBowsSTKGoEZY3",
  "key13": "49tYXoZswUpnoSbQeM6tyRnP34FD4gTXCjxbG3vbwT4vZxRUq5qvCp7w9X5Ykr4hV2FJiorF5x8AeKfcTZP7Lnbh",
  "key14": "2KYz7TLiLNfS64JGUf8Cbky7cTkgMCpMuiLoRRLvpWkvrBSEu8cf4mZPVRv2Pzk4eaxfsy8LexZAp6p7eKaKo3j3",
  "key15": "2LsXmiV97111NFnwFQMTAQk5WmUJLA2NRP1idYUrz7zG4m6kHBcyoQJ8WiGYQPGzxZsCGuekjFGaKvGwvbuAu5E2",
  "key16": "HhhNHCyrrnQd6B1cUUBex9yHcnrKMy1K4AywdetewMaBGyruQ6F5Q1rk3bNb2EjjoQUouYMAs7d26hmenTg5SS5",
  "key17": "GibNDWVKCCzGL7JXkATwrbikpszZSA4aTMAYAi6721tVyx1uddbQzQ1kCoFuPRykecXGVA4WMatzv5KuRj2APiJ",
  "key18": "4pz6u4TCJFU2ruYbTVZaGeqbQWiD6oTb8zCKGA1Hdnc8sBNJiz666Y1FxK7yVzYryJ9cADn485AGWqJGJ1QwaTx3",
  "key19": "2hDpcpJFUMrHvF5N85HZvHrjuNPnJ7TNfKhDBWCqRLJ994ug7zJabVQbLxhihu5A9vWzbN2GjCs2sgcJWdkbxgxo",
  "key20": "3QPBacqzxHU3wSy2DVam5kkGDKJputgREm4vCzumZdoXuEBuuMFwJkRVsEWjA4zXFvs5mo5PgaUY5SMo4uoUR28z",
  "key21": "2r91UCdfS1sHzmRm47sLZg4taehHqZA41d5EDfV9LJLyQZxcSmkm4HMpEGvzrTbXxms5YtL8HttTsCviZuVdKpp",
  "key22": "63sMCAMEnhdqRRZtCXwaXFbkK193jhPQNYNXA7AVRPKez6TmG4JhkmTYVk4UbKCg47AGtLsKV9qjB7sMuQYKppm2",
  "key23": "5WE4bRCwo8sxEt18q91mEQxHLeuWNS33JzApQdXw9YoavajQTvfdjPub7cB2gvv4fz1p4vZ6MTTyVJm6C5e9aoh8",
  "key24": "2iHozEn6BuHHVnYmXeTMWxNwek3VN6HhEiXdy1eTRzoyJkCJMTCsbS2yysarHMFnJ7Yn3suQA8dy9WNXJqgiQgAj",
  "key25": "4mVoYFPaE5riCHi19sByjv9FsJhNj39QApDJVZshRXDXqKvpFfxVZfKFTkhHvgi3hnDRevESz34bJwWP3rcAawZ5",
  "key26": "4YKk6RkEFuXiP1AJLy6ZcnEJDs5LoVB9nY6rZzQXhELryAQogZWmK9VuJ9EKKaFZgUwYfeBAuDVQVaQk682LykCM",
  "key27": "2jvDZiAbVMT3XKUo9DaLv7aXJV9ehqyb29vLbJATS5pVrzXt21Da4d83ek2DepLKjn2Y6BKWPmCxcB3wjwZ4Q16t",
  "key28": "5boCjac9qz27LrDQuNZEW38P6LWQ4K334D7e9ECHufa39f1suPjCS5GXdj1f379jg9pubGckZkHXgho9GNkc39dj",
  "key29": "HLZaStUhu6hQgQ5ewQVZC6b9JR7hHDRV7L7hJFA78WjSiCLLSPfWKwxaFTap7au1TmrMq6WXxAhCKuZ5XCDLHCu",
  "key30": "wS529n3PcCHTawgrCRkK2gxR8yuNh22G5L9edS5Xt3zjbXNYbXKBheHMPPPfMefGd1USgEzcyjR2LYLucWsm9Vd",
  "key31": "47RGTnZrqgGpY951HLXPeN488c9j9LvTiAVTjT5N9GaNEWrDaG91J111u3tS253RY2JXsPQvwuGtCEiteDr17owg",
  "key32": "8GFj35Jq4Kh6PmVzrtqJ1xMUB67E4ebuTtBP9hhUYdJF8XNpL53JZ2iq2cTM7V6mEH1AFWXLoA3c1DgW88WDW3g",
  "key33": "GNkteDA3EWoTp6dZcqNZBq22EiRehVxWENRWKAWgu2wzkgd1s4u38rkd1tpWDk4xkMWoRsLLZsq6T3z7mxzUhSB",
  "key34": "5787f7tYBHGDY4vSD9KcEPRNwPTTbv5o6pcgsGn92dnADxDkUEWkpgUiA7Up1ourq7nd3bskTzdhGajGRzmUCLDn",
  "key35": "31oRgNzKNKWWxCo3pNPd76Dj26N19WJvVJs7onFtkK2BVcTRTRpyUxQjFEYbDRhFdhT7zQyFaiJJDSUUbzWVGiAB",
  "key36": "K3PAES6DR7zSPxNj79Wyr16KA9Fkhk83zvDnL4BsP7TD5c5fdZV2DbSqDHoU8MMDJThXotTunf2PnSFA16vSJmL"
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
