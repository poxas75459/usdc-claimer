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
    "4a1gKyw6CtPuK6DSqh9ZCocuNxVTZ5XYPgzdSzkBVyCz7qasyoYh7Rg4MG3hQjZhQ2BHwqRWmhL7LvL3XyrsMGy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RXr9Stg3q8iuXBN7Z7cXQyysDHf1VtfKRAGkkFsSEfQuXWsE8v7jp52a4DVeWfJRQD52gni25Z5gQDL8o7GHfxP",
  "key1": "2M5H48UJABy1BFnBp56rgJa2AXiYc9dr96y2RzXVj5o6da4oTZKiKamSPSRok37bJwucXVyeihKorhusxKb6ckZg",
  "key2": "3az5PjiYG1aZrs2KEnd1SHMEdb58m2hBmTXjTKDDtXi6XXoLBPzaud3g53q2XmKMv3MAxcpsUcrju9m9SBcTAMd8",
  "key3": "2qTJ4vVgUKRD3vShHKQaT4cfXgoWSLRkrwSkxPXrkkxginLx1oihtzDbtrhfstKti5pNoT1tUkuVytTNjBYSnTmR",
  "key4": "4QWmkjPgMHZfDmytVQJKyRGxzC6hsijgL5k12vSAAV7hVY4z3DqKp5ruuPfXLVFpYc9LJjjXFE97jjBtYJYmizAu",
  "key5": "29ckSjAG7883pRB34ASkd17kMToHBchF9cgkp6hvoZxUDYH9AHASzA2r2Viy23EzdSw5o1foWUU5UwciB7doWJJM",
  "key6": "4AQFFvE4fNaJHgwravKvzgadKyTohaFvfmXje3QnAagmaCi5cnY96U2DHeaqaPASubtwXvD75GVmFS38SFZkuMv1",
  "key7": "3KgucRJj4ZDBb6A6Ytw5EWoBTB2ZwMeqfr9r1suzes5SyX3Yd8Jz6T2vAbVKhM8RMKj4fJCj9ZYVBpThjoUuJeYr",
  "key8": "4FBYeP48fuksJQP6NgjBhMFC43bnqf5vx1HDQNnBSiDZqMwX7B3XdWDjCrwBVHdNKxJpFjF4SyVNPYgWzgFvK79",
  "key9": "4KV1Nm8ZSbebcqxcsQrtDV5xzBqgdyvCQ74C4UG88bx7jAbribdLE9vXjfjidouhWiBUtDQzxoapFm7QKAw75XXK",
  "key10": "3DDCnq844wMZqiqePts3RSGGsWK1TS4txahtrcJ3iciy6TzqQNoZWDNfkH2V4gQ7M9yJhcaxduoEW5YYeyr35TQm",
  "key11": "4M6K3ovidPJka29jdMWDdSN6WmWkVd2poirK7brxMzEXoMY4JCg1i4MrgxSxsCKPhVkDU5qHxdNbE2LVNaWDm7n3",
  "key12": "4kRnUxsbqd1kTtLyj9MNWSfvbuAar7F2AtSEkhfy9SBLRR1uhW5F1VhnmTcMNMoBFcEYk5LxU7EsucUfJtwUd7ov",
  "key13": "2TVCymS3oV9nN3vQF4ahz4qdBMhoju69A3ZjA9wmv3UpBCYWQRicZpcRSLAscxZWMiPVPi6FKy7vPudz8Ec8jW33",
  "key14": "2U47Sxe7PAjESpkGifanL5251dyPoTcSciztGFR8YMNXjDwBmPWRceFSu9WAcBBV1YFSayf6C8QeK4jh9AtGGn5L",
  "key15": "4YNXB19XhYN3SsjkrpuC5v9cq5MvJJpJtKFAdESkKaFhxAdzxcPbcYJyxrGMhdsJgVbBAbapbgMq32GQsi3kXHQq",
  "key16": "2eXqw8HGn6txUMS2ijCAKmkCUJT8svS5JK7Sn2DasNfFzzqnytzKM2x3Ru7dw495sG4MsnQmh99A2bp26zbEzvGu",
  "key17": "E74PKjb7f6GFtmUCY6sUCAFf8ZxfeAx2THStmgbwQboXV948vHZiHDHZEsmvwQrZi3HbVu5PY814GjPwC2HLTtu",
  "key18": "3K6k2EwRjaZVNNLodQmEgG29TpqFTvo5orGNnoGHmicfa7oZno4Zc6mpnsZ7QLKv4DyjWHmpd3fGUrdY81FxHQ1J",
  "key19": "2EF2pRisg6G5ozdsDUTveuyy2GLsWC6XmmbiZktzvuEJrQxsCDi112eF8GqhPEGysYWUCgKZWpPcLk8Ptjo3dZCN",
  "key20": "3EdPa6uifxtJc7i9vd8oNiYWXm7ZDoedPDwhvV4sbK3J51iJzhrq9MaFoNrnfsTBd3emnptwLP4pW2JtGguMLUXn",
  "key21": "2ghmrs2JCvBcUcRDDCBBpmGw36D5ZA2Q4VmbM9Y5bYKTJLvnaTwjyHmdhJi7j8pa2avBYDTiLuLE4Wj1rEB8gLDk",
  "key22": "62rukBYVM7dS8mQxtiEc9TvsDysTK2yFw8kJrKStPz2nKCvzAKn3xmRiqhMS9GV5A5X5tgnpTVE8yuMg9s4CAfQH",
  "key23": "44qbN4V58Jw5C6NJWxJQdj18hMy5waCH6DMLgJVxMwUBF297Ujs6BTvQctzzeb2qxHm8SN2nmJJnhiqGSXAWhQA2",
  "key24": "4e6BPHhz2AD3AxMbkJLvpYDPX1XFBCWGsvrNJUuUX9Z4cjhnhADkALLtEpDk9LA5wPqQzkekur9pgiMinznWyucJ",
  "key25": "YJgCv2MdpBM3mwVaxRzRAzWyVhCrSTdLpFde8ZZgEnaem3XVB7RmoDFH4n8r65gmGMkb7LAmxcWKyR4ifuXggWu",
  "key26": "4LW2XxPmE9R6cugiJ8BrVahwFFFRbqUGMEpVCmiX5arVzNDt1Ec8NT5vSuxj2RbmwmcnK8y7X1H3p1LDePhuUyGt"
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
