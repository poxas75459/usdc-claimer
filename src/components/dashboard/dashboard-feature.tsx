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
    "5Jba2t4mNuTrh8MSxUvfahGppV7aFgVJAu9Y6CsyZCpKFuGq4tZHzLJGq1fDcWg81vzhXNhcG95BrgXhhwgeX9pP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CYJ5GDpa97xrE8gWQY9iXDjhKYCSFyftByc1SnBySUGuRE8iHuYzPvTHgAVpuCNz8AHnyQS3quXofWKwFoFhWBN",
  "key1": "2iZdTbrL9bx8NGMcnBKLiciBMHXNpqY7whHNCy1RE73cScWDerNtZwXrfzSwL6ijCbmmkGzxHZrDTiEin6XEbkfW",
  "key2": "55nfUJR5GnzZzkqdhs5yczb7UU5uP9etZ5uDw3mzn3LnwSHwgnDEMAWYSh5bJHwtmnpLBVtdtYT8ZMpyQ6yHssrJ",
  "key3": "gdMjuSPw3fNBgjQVSVZy2wNagsoGrcan7qomatiDfaGmgzEwcimbCDW6L9LK8vjasGeTFgAPis8T19p5Ph4VBHo",
  "key4": "48xHX2woXMpV86sJSfTRsYkf2wngbZDoBwea2etE3fq8okW42uSVYMrmoEPhLyhWhmEYpmz8mMjpcRSxiyYVmkBW",
  "key5": "3LVacDoA7wZp8qca3huR63LbRz4h99MYMFhxhzRxKKZdtSBXDFuXyV7UJVU3gpZZp2jj7rLqbWARudY5cc4auNQ1",
  "key6": "3dDFchWFdFngx39m9x3MUwQVRG8KrB2QxszUH7pZf1nhSkhLD3d1PEFtLnrZpgQAvw7aN7R8RTAYmbZ3ujzVB4L7",
  "key7": "5i5MEBfUst7ecGxW7cQikRsQiJqncWwpoSyrwCQTwxgEm77hRfF5KLTaS4ztLhwgk2TSasqKiiyJq49iG4S7fd1v",
  "key8": "274XFnE6MBaGk9UHrXLTLJKzEzZhf4iMnTaq6iUqtpECebUTLVmyGpWXiFegPtn3aAL65vnFtMjQMKbubB2kS6oq",
  "key9": "4DZryynsm3qDezhem8YnkPBfFpFd6UeVSXRxYKiPweWcnvm84pZJVQbFg9jcZV3RHuUzZHV8gNu9YS4Crf5wW2z3",
  "key10": "jmcJPdvDNLT8nbEwPwcQhMePmB59Dy5K6Z8ioPZgeLuBuBaYbs95fcujQqAezY7y7TBcxQ5fccn7Pw8vvrDMDjK",
  "key11": "5P6M4nBKqD4e78Sz9DEECjMguz4mh45VUcKwKfZgWuBEVnV88p9wzAmQxKYpdTGEZ6iErQ4RcNvwNhpB8zuWo5Xc",
  "key12": "3cEtZP8c9PUN1fUZAH6UtmGwPikNLzhX2x9oL91TxhbTWjik3UF7KHUdgVnnuL7LtsaooFLr2ZqTqJiHMP3xLbRt",
  "key13": "3ccadrWsdPsgkorLV6pnUoiyNWmfjMTxFviYKZRgL1wBxhELxYEXHLiGNBggGBbK2vBzp5Sg6miezAtad1UVcwYD",
  "key14": "JGYkya3QRHgyNHEQVRGN1vcqajDDxhkxCUgaCcjd9iB7ao9CA91r2pQtAMpGLXHJ9uNYvG5LQCa5zfZmhXexVA6",
  "key15": "3Q7tKhMCCK8H9izwkWKKxXrfHbfRyb1CZwYsWcn3JsbQmCrVLFwocw7o2aGx92Jy667oknvNWBi7qefmVpBMD7ma",
  "key16": "3d4BuihQD2Rf5ucYN6RDeeHoxEeqzAkpAc7tCwcbZewQjjCc7EoJCWgFVmQu6NYB7FZrHwGdpkVgecXtBZz4Rum5",
  "key17": "2kKuvay1YDADjGLGUGEwjz8B4eYrA2UqnhudeCYNyL7tVAyeptsetDR2Mw4kyjT5m9caF4aoKDDCjf7iGaLBcAfE",
  "key18": "3pU4y2kVJgVVgmSSCxghjL6AGaq4f65TGSpVbcE11St5nqwNX2GcsJiMYM2U1DU82yNKbNe8bCxBNBTCbsTnxDAd",
  "key19": "5hmhDjdc6VU23GdLd2gURwNy42u5yvJy7h73VJiQWMfqEz8VJFeR2oRtvHmgddRZw2F8DACvHpLG9iZAfLwtkJiz",
  "key20": "3mMi9K1j8ma66hyfmMuVutdHoKJiD2w67zQLoaMQjVcsALrXih3bU8MaE2F1ZPcHXdmAjEa7urcpv3XBL1tZcfCW",
  "key21": "WdurrPD8TdNJ42PBwnDiPzYTjLuiizTpjx92wDzz3Q1qAHg9SXikHpmXLnXPGo9PUHSC4ebVKcA88oiRraxcYsk",
  "key22": "55HYYTsTYdxXWVDhCpVY3y6EZXv6vkioYD2n239BggaUrZr26m98GCDtHC5Wi1o27fKwtBdt4vXHUGQ97MuPg6XC",
  "key23": "2UjV87Ari6egWn1nT9VL95y2M8pzfuPoPxmxuQENYCHFJG6KG5f6QzR7znJ7uWmQYixhPSm6LzqK9fjbZc8XEpP5",
  "key24": "KjpZ8t3iMALJteA6WpTuEjhZ1VxLv6X2DoJixeDPr5s1RvMsZjqBSKDfuhPM71kVdAUWnrM2vUkkc4XpyoBKhZy",
  "key25": "2oHTvBdJjrw4CSTgEaLVmAvdpPK5WjrRnGWBFDUwHssmRKDN1RRSwcqummyrj4AoBa5CgPXBkNr69RbsNBYrvnLa",
  "key26": "5W2cZgm8vYcX2YAtafVacj1QwwxNZaJ7oskGoMdoEKchsDKYsiRX2fyv5xn5Q3jccNjWHB4HnpaeYQGqYBdWtEu5",
  "key27": "3vUKv4ZcUVTeB7475DQriugMPNQGePAgeMAQtjUxunLbnVTcdGxgo2GCwiwGWH6Ar6hf315JxuwCTKCKiikG15qo",
  "key28": "42ZpUGHLsQvVtH4qqh3zgguBXC4wdtHJsw8RWCQPE8c5t1zcK4XdSHTDpwvvJA9tWtcFP6XhkNc6V2zdfQpABeAE",
  "key29": "qbmhJBJH3Q9vmVvbJV7qwQGNK8XiYd3iLaxDhMoUYgo8oFcVjEijsz3b9k8sE3ZKU5E49eB5MEwx6afqVXMufSk",
  "key30": "2F4p8QevVNN1Xg2GcrE9f7SZ1naNVrqkNGK4CHBmTwa1LuM4ZjcesdULyvFuTm1X7LoSEcRfytBnwn3VkmTkopWP"
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
