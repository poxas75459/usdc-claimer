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
    "5PBSPyftRqQgoXUzPYndcYLNqkqnsWD1LZC57dtGoA4o7Fub9e84CX8PB5U1JyAYft3Mso1LQ4kXCcgn2s5SRSqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dmmDqb9VNUgB1zfhgJimuy8gxEyiv9WejprvpAwJXGEc2Z56J4Unqf4jTmNneFRQEDpz8v7J5rFsPzjDEPo9Ti1",
  "key1": "29C7ZnogZXByVgb1pvQvK3557pu3GR4GGhqqmdTt3xnwLpfEbaq34oMahiu5rRbE5UqWtsYc2jER45pWfmLN7w1c",
  "key2": "2P7UfPGuxLhfnkuwm7HGnmmsPLMcZt3zJ7RwdvSPJQrZo6V5aKiPw5hFxc6P9uW7QYgHReiEU5unC7uQjtYzbeAw",
  "key3": "62kGL6rPfWZVB3KB5XXG7fKVA2t3Wui1M2ypSJhL6nntY1rz5q4ew7UuTHJLAJo9YYkmxoEz7T8MR36EB87dofmx",
  "key4": "3UvDuiQunfWrBcHfBSiUhKQp5sqNZYkVSiyeSSZPyPqdXMRsGfNw2y3sPZUmUyc5SNkvC8wN8acQ4kwLhDdaBBNr",
  "key5": "4iU1aX1VWrFgfQACX6KBmpA4BCrhFKm98PC3mR7iekqai6Ru6dcmYnuoKUnV1wRBthiZNibjDPqSRSewHWibH3Wv",
  "key6": "n86wuVG4ad5Sqq7KYiUPRaVsPUh2qdmMq4H6E9Cgjpk37DKa4o6Zhg2t3bkJYQehc5rAB9YjGXKNTEpGMDUk68c",
  "key7": "2SkCqAc7ym6zGaiPr7Bmb2wcan9GaJhgP7Zheuj2Gx7DpAjU74NvRMybP6pv9xUHJ4AXG45JP2xN3EGKiTCi11RC",
  "key8": "47oBE8jn4V4Z8CEtNeFihsrzVa9Z7in5XQm5yRVXD7McbKSHAGXxwmDJkdxdLRdY1wtJ5RrQQvr4AWbuW1NGbBPj",
  "key9": "2UgNb8TfcwVVgxD1zbCJtZDmmV7iNr9srLCcftrxUScqZs96f4uAa4y2TYxpcFwvaagwU14PzgPU4GQmuuGRm7TX",
  "key10": "5rmozqx6X8knRuk6dN9ziRup4bEi7o2Gv3Vy1k2XVr6XKfMVqibVNJXGQe2TLNnB4hZRGC6DDgxBu8TF9sbNYoSE",
  "key11": "65cZedavUS33GiwBaQuLxdhZaYM48sAG8JcoeSVDJWEynTVgXuaSxNadn5QhACwGLBtVmJk5sEcteif3243hn2aG",
  "key12": "3f47kxAZ61vz25BBeG8DiEY6YFuL8Rpes4kAcSCgwGhdmSWYhvYhrSq6TpEerLuQ42QFc6MTgdscmPbZPScK9tWZ",
  "key13": "3D5t93SDd3rNrnFifwtwqmpKgFFpYgc6YdU7hKZbT77u382trSpYk39tWdBPdTjedw8SqHAXtiTpyzdoeLCUE6eL",
  "key14": "aN9Lu5s8o5pVmjahJMQGkGCQgjC2YWRmpCcw1epZaDeUsNKekoAGtFvyaXyQyPYmUj4ygvAW7njRJYXJsuCqZq9",
  "key15": "5HWeppn8ob27H6jjkBzGuLLrFFgYW1jtjuVKpwopJtWi5XU8qxvoL8gx2dCaKGa3WP3g1ckh65598pXd7BRqocw8",
  "key16": "7o6WbCy2RbgHaukdQKY4m8kdY42c2tFjCAmh8gxnCJ6wvZN9wciLZKhETwLGya7QknyGU6S6MpKpdV1JeGUZwjj",
  "key17": "5zzg5BvGtha7fe5XFGLvxx8S1HAQMdbexcjEkWbo4MEd57zx3SmHegNqzop3y1cms36hEhabuLsW746my2WRLPvb",
  "key18": "2tw8gurjvxqfQg8XujARffzHSvwxHcGn3bCX1DH754Jmk9jYgV195M3J1pMYaixS9mjqjkEmQMGBdXuYB23aAvSz",
  "key19": "28LdRLYnxPTvfDSkE7JpuurE1uZy4YKCx5DWppMYRXzbkSkphWBXBWdA99ogUqKrTmDnxGXUuDfyiiV8u6BNEEq2",
  "key20": "gQkCdk2jFLput2NFvFMediGTjA1ni6VyYVhXyNQruhqyWbd75zCGcKPGMHWFX6qMWcFKcj1dfvhAivgJ2THTGnr",
  "key21": "65mHfgFjaofd4QMwMbWpw7X7ifJ8QhJTNwox1KjvqrZ9m58LkgURyF15SQkKXdS7N5EczAXuf6VMJz8FYnkAHy54",
  "key22": "wCbgkWzmSFH15Kt4d42zTiE9VWB95BWLmJq99ikUQwNdmB7Hdg4JotqbLvAZDv7Zb91d4ksu4JbKFUvowkXK7U8",
  "key23": "5dgywqSuqnj5Fcgsi6bxZwXpDKzgUU7XSqEbRm1f4e87spNePa9aFhApGkumn3oXpVh4nHQgHBLxkLjjw9buayv7",
  "key24": "3LTQi9CSSyaNgHU1fwgGtRp4EqrKixwqsGDcRyhPaRrskVb2vhjqb8yxM6dv1JRKwLQ5xi5CEiPQWdZeRrQvXvic",
  "key25": "54YAQgSyiJcCYV8WEx3Ge5TaeutrFYu9VZJ329rr98RczaLHYtMRPdvrMdMemQDMLPQZg6mwtreX5RWci28VZXnX",
  "key26": "2x3toftSaPg4NqqMbFpe72ZNhud7kpCXTZp66VMzgiqiQdWAcv5BsidkuCUT9i2DqLBvgZRuH7dnjnTN2cYBo7s5",
  "key27": "3Q5eUB9Dh3vSHrQCXVttM3DA2YjUunAZdnP9VJd3KtBQHKxk2k4fchcifQoQd7uufneRJBSK2JAPKZFkrvxt6iRV",
  "key28": "4r5Qx4fTD6qVBJfByDRRwjPr3sKo2Ygbbrzb6nDVNQtEJtTnjdGw1dirNxhdn5XEJRHmgb3U4aqFKatKha2omX81",
  "key29": "5wCDKczivEbdkrmPvGHhvfy9Lchu1mYEoERamjVWaqhC5kcTdbSAKJKj28XWXb2ByxzUv1vnzBSCnty4jz4H69kg",
  "key30": "3URWHqbuTkr9jSKXp6EcYEutowAMU59qHmriMQKmCfT6vwvNys6siVAx2ceXnPLnmohbgDZA5uCu5HHPuKYGTKHx",
  "key31": "4hzHtwLFLmwhFy9DYExQpEh6cb4FuY5H4f29wZFsQ9xoheaHcFPHnQ82asfywdzxTxFDUuJwWuXsFR6StxY3PLRj"
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
