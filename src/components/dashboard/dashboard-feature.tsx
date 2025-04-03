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
    "R6CbB4PZgkwWhNUsL5iDEak1tS9nuwfwq4PoUSGiXMpTJcF5HiT348eDdeM1tFVs8VG2WeqQVuYL6PU9G57aMnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63grkWvPbrAqkAQ314FmXnDpzdThV7wD5a15GNiZ1kHXRdqjGrvPU9nW9YWcGi5tJvXpeY74wFzvat8xLXhbA1sH",
  "key1": "QF5GkH94GLm8UK7YA6pu49RGuqEbQQZhmHHAnkrEDpW667RkoQ3rckx51caTDyZ17exgJoZK7QFfPrq8yYWt96L",
  "key2": "5Zkqys8JaUB12aBxGsvuz4m7XXG72HjrrXCBaDkMM8UxMx6fwPE2npjXq8BCXEyZcs6TvrEWqQtsKH8RzpnQ9ehw",
  "key3": "3rEPKCh6T9NdSc3mGbzmxWUu3aRcoreFW267xL5FUurGiHycPB5wiR1ut95j9iXAhTgo97CuZhhRbkjqukWYyUXX",
  "key4": "5raBQLhrFkPNTL9jYiDLPhcytARTyMTtKB1gWQXbVSFR5EwejiS1tDeoY4RVERnUzySb9jqeKUn3mwEyS4vrCULP",
  "key5": "2JNuXiUXjdu4PvNL6NyrjRGZSiZLSqmccw8tUyhNUuGzrUeDDQnE7dXKjc7m37CfSjuCdA3DREh52RxovuRPWjBA",
  "key6": "4BoNjLnXRZqguZcqnNqhaFede5dmBmtC9uMCXBV2kYGqvvCG8FtUVe7HpazFxb2C5b7W9u5LaYhBBVmUhh3WreKH",
  "key7": "6LN2qaLFnyBRy2BXRLBMRfUKJPEiTaj4gGFFCW2ZhWMgYK8n9VE7nzm6EXuh686JJWFYFEz4CaXhDKKbEbg2gnm",
  "key8": "47cmgKtXASbCjK8qVMUqkxmNqrzRj7Un7w7n2ohSH5Ze7u7wKu3FfpDD3yJF5ij2yhd9nwWuPRCKJKE3Ue58fuNE",
  "key9": "4tSR9NdMmVqLFRrorg3xZwiEkd6saxEzpmnwTTRDDWd7nDBDdVRbJGoNosSxdXpasu1L3ytbujU87vgNNBrs1H78",
  "key10": "3JtnzZTzQR87bNquyUMYii1LhSTkVuL4HkEYUd9Mo4b4tp7A3xoeNGoKAxyWksnCEsHBKothgksnYYYh5YJZ5Umc",
  "key11": "4p74i3H8PvRZw21anL12VtUqDvc6gBSjsC9JVESQNgM2JoLHKSAUS6Vqthb6czN7WQMFuGhV4qTzibTxcAif18yK",
  "key12": "3dYzBia2vt1818XuJbDae1JaeEdT11ZMN1JNBSJMK7freHSEZ6YFtV1fVGwEcY2hAYTNhi38XSma7ffWEjZRzFRN",
  "key13": "ZJHNWQGaKYjfCuJsqcEsc9VLPHaogaa7XpUAVvSERuNz2xLDV793iwp6oYU1hyjsDnEYgL8FFeVuyZ5VGfWy4g7",
  "key14": "55yyoQXkWP56DMndrfSmQw1MzC8HEmmFGVWNbixvx3TXPG9pGiRhZg832QRsMWDMmfbnPiUk95dZmQoeVttAu6xe",
  "key15": "3QVL9kwND2wncb2B3QvCUthRFdqP8bi8E8gpvMj6fYcPyWBtSAge9xaA8TUgs8U4w6yLvd4zTb6DrG8JU4QCBcs8",
  "key16": "tKdUwPaAEuyDC8orb3pCz23stCS5WWBBTKn6GbQqTLg7oM6PteKEZjMkLH8hVWwHWMSgRbR3g9Sr3LhiHxfvgGT",
  "key17": "2DEqxThh1uqCqqmu3dSoLsdX9VJhYSjvv6kDKjXDrLsQzF19oKY4SguFU89Q3emH3E9dzBfKyKkXrnMTYHBwGfwp",
  "key18": "5jU1W6EhMUjwD3MxEQJwj6pKyXRQua1hj4kj6NhpwX5ESgSKfqGyuBuoMP2pGZ5CPg945JoJp7ksLB2xaBhGyKPA",
  "key19": "2ftHxin5PkngdBMYE46FQXeHUb4fiN4VKKzRwsizTLbe82t7GH3HNfNgUKwuhCbCJXpZxAxVGqeiwnhpjGCAaerD",
  "key20": "5xWNC6XuFYS8xTmK1jwp3YkcUMKwZ9saAYfM5qwKHKiJPA2MDyHbjf1QXgzCgJVh2gYkNxW3hKJ54EUzAtfxpfp5",
  "key21": "CErTy1p74om3KjqN8EzX6XJ5yUevyJvWnxkWU3owNcq9gtsdUAhp3TCmoR2GMWh15f1ETdSf3utHQ3cyM8q5NcL",
  "key22": "Xs23E59h9NDfKQgdPLfevqpz42s1RWhrg4yARNts2KTmWd2ULJ6X5YaAXnPf7tNu6J6RKAdpTgNUf5JX9SV4UMT",
  "key23": "3jirtrWaZCtMcbMgiFBzrbZnipBKZMRrb1avkRLTCe1rG5uLJGGkDJqLT92pcr24x3xf5pJVqK6YDYdLNdnYaAvG",
  "key24": "3vqEV8g2boMnkT8QtBgWHzsN3px4WhAQgzamV6a57jF3BDqvTC6xR8v7V65eBjcKLCjyhQtYJgKvH41kfPX3pVYr",
  "key25": "3w1mUjaWmSc3R7grP7kz8a6w8qPS43jKdwHwq2seGR9bA2cm2xrxVRMrZFzD6kVsbVY3UziVPKKkP3KoXnvnUe1a",
  "key26": "3zRpeRqVzcjkyekLk33ruBuDC79CtPgZkU8gTZ8WwBigzNc6pbQvPy1vjQt6CV23jdQRBnwyDqqWYzF12h4KobeF",
  "key27": "3wqS34TUEYMGdSWJoijy75aCtYwegXShCGUMzG4GRih76fAbmgPt3UYNd79DWNRmmKpZF6gwk3v3Gsz2eD6xGnEm"
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
