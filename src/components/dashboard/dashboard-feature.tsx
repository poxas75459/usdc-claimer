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
    "53uUf3QCVnXH8aGKQqkUpUGzsLzqN7hFbx4FZFinZ2LxzJS66kyxk468JqM3gmSpmr8FFLNKtWYJw7sXJqHegQQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SWfiffPqCBVnBTVqQQy4yG9haKGsKzYF5DG9KXK4wT63UYpBARqnRnBMKGbQfBTEkHev1irh9fmdSFtyHi9TvT1",
  "key1": "3ffsuXUdJGtjT13XkacT4Urwm7JGAkNLubu7AjSZFrnV8xFergWMm4P99BS95q2oCsye6n6bXjah8QLi1mEfFmWa",
  "key2": "5vt21mAL2WQX7m3Px1rpUbibZTPFBqnaCjYGqFVp7S7MdXC46uJffdrUedu4YyRpkBofmBd7R7zW1TGft4xcKCCj",
  "key3": "2xsteSLLWKbwdzSwT93sQt1J3VfWU4AHZsiFe2wQMYrqJMeYpJkzbYUbNagh6X53ABGgmiCbWTD2fNFXt4Chydzh",
  "key4": "4Z4Xq6pNmrfrXsHsrMFgPNLj7iskVzpnhBiTZzRFhPET1EopJjcsXxCAqN35X38AaX6kMX2va3LKvpBQc3fz2vA5",
  "key5": "4DD1TMK7ozR7wogoaMqQEV2mK5ZAZDLtg68V2Q4rNPnkBJHDXLTePX54Sbs5EJS2t4YemKHP5S2KWWLqMEspCvu5",
  "key6": "spgWWy9BbSftRBacEw9a7583eKZku6A9HLALGtxQ5W9dZAuPnSDaDUaPP8bFavrygUpVhVhomEZurgR9GXb3vv1",
  "key7": "va7TCvQFP5yUnPXSrgLkBZvF1JBWnRHWjJtq54vA32VciMQWZvBJwpNQe9bgRNtoMCB9QMKrNYj3ZnSG6jJ2Vpq",
  "key8": "4Z6mTFEU2kjmEw7o6KxLZcBCWekgQXr7cx3Wm7JspwB44mYhyvWVh5BTeKo4JqpH155gjALVRBB7JLnsHZ1F1kSD",
  "key9": "2zHhYPHjMWziJAxjG3tAGDyQXHCzz8tmRnzYEXuDXtv5jeTVLiJWyMgGcEFP6sQkwbjHAVeUq5n8PZGbo5MJgC9E",
  "key10": "TYAryhDx4H1md4FfCBwpHqE1hWmJX65YSRmyFXdGjJNVRZnF2xRwVt6qFZhYDrPNhestciYQtZmjVyDX18KpWjZ",
  "key11": "uaTAPse5ih5F1PGKNBXMG8D2V1whS7hCGjUCbKNW7UxAAdNci65aZzLzHJxykqdWTqvg8CmauwuoedRKcX6X4xQ",
  "key12": "5RTcB3aL8pmZEhxUSRiGx8QP7XxiXUjtP9k8fyzudMPixr846zSKD9kUHEKkpUiohRQYhMoRHkRjSmpHxu1miNkU",
  "key13": "2kZp82uA9Nduhc3HM7f24iCJxLHpGiro2JRL8fWSNr5Nzj2GSWUyREUKjVo5GxqtJKc1RrZA678agWKKTovoHP6c",
  "key14": "5oW39486zz4uSatt8rQHBBLmtU8HAVYHNgGmcFPMAn4WkDZkiX9x3BuQYUy7oRudmNvrMHsERLbiU56Mr56Esrnj",
  "key15": "4Ft6s2rBRPoRnrwQhaXMYW7irctCy3BPBYteVGQ5fNMHMmH8NPxHdVHJkp7FHvPYnXkoBcqChKxCKzPokqbPXBUy",
  "key16": "eWx5VsbwzaxwvL17nA3ARdwB2FqQoFkfmQTFxcTi13KrqV8YVn7aPFhmVJjHc7obUMPoz6WqxXKV2aqDW7DAHP4",
  "key17": "2Um7JzSbRzjtHU6t8ZQe1CrgD6yfgEAYHMRHowCc7MpsXGBs7AZd9UzLEbXyLHk1g8ih8BZgv4rec2tyxHSmuv1j",
  "key18": "3mnTivCj9fJA1K62sDvXLBUddSyvq1bya2hhZPksTiTrhiNWVfULPeg5gUvJJKLYwqWZXaNTveJe4Lw8jY6Zjbpa",
  "key19": "5izeKzAUxjvUrHpf97FGJtbNy4HAD98gbn6jeTv8BkZ3yYgrnWormVfU12kugeef7jNgE2YduCP45y2iWNFPqTFi",
  "key20": "3zMEpERCvrAfYyA3DWso5hS4cZBxH8GHYBrFN1w8oz57QZBn98ZxHAYjhTopjrLfqeyttxnEDAj2dbUDNTYxcBw4",
  "key21": "56cNnqJvJ18x8ti3t53r8UQhKpsqd99J3eXbqzvU7SYCVhGLFrJFV7nhuwrP3MUeqqp9HavVKB4gXnGaLZG4J6LU",
  "key22": "2a8GCAZBtXD6XCGpikJLG7RJ6zHSTK7mNYFWztiQk1fitLbQzKJv1wMymMmny62p2yzT7HU5EHSPiJs3oDZvwdrA",
  "key23": "4xTVi5nAyGaaARkBN1XtFAfZqDaQ4qvYpRzAnywhSLXjopvoE4W6jZ1LXaE2Tgmq8QMjjRTNzsGv4VX9wic4zKzL",
  "key24": "36L9XmYW7KpPT25prF1PNp3T9f9MkXrFui9MGwRpkjac57RL6fR7yBQRxz3fEUhSvywfCELzMgHFzaYeD8vq6B7T",
  "key25": "K7J9CTWrnyMHyppcZkiciZdo2DGCaAeMbkWT8ngQELKT5jrZNvh7RVUxPBpCJUs8TZqmWd7SfTiuzGpftBvKV5S",
  "key26": "2eC7seCrQ3Cc3dyZY2o9GFxwh7tVP4oWtLsR6vvUYp2agMMiP5vQSF9HV3QxQdUVy9Us5FyX9QMgR4EHivs49NGq",
  "key27": "2zDw8EtqeWdLjLvHHdG9sTb3pbS3mtRNL6FgiP4qhex2iQEsCnQexr29keGHpsKTRLJyB9GVknGDoVCEuKQKguLb"
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
