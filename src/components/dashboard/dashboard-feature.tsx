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
    "Do9z3u2jfYjpNTXnXfqVZY45a4fhxYHYcoNh2NhyDuiChz2pLGecsGMvCL47E2p6aM5ZdJjwiyNgfzdEWUjxLBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YBJpMDdHQ6py4nkHoY4qABzUgJCZsf4VxjEMTa1XDN1uq5fdGSRsZT46XCBD6VMeLdRzFDQndYp8TrA7aNkoxKa",
  "key1": "2cLeJSM4JnRhQ7yrRcP2ec46SMKokMH5NfKHEyHbYNvzLPfan23LRyHVAUQ1tfUsFdbWeixeFnXCNaE2WNLWSPJ6",
  "key2": "3KJ1TVFkZujhXeaFtwQBCLZUiBaGmj1RohecxNzjRiraBu1wG6yLLJfjnwW4YDK9oy6wSXGJwt3nbgZpgzSB4yTr",
  "key3": "eZWfSjC48cHf9RsUustsBfuLuEuTojDD7LYVVsq5pchXn8A57SaWdCQaQruQpnbdy4waDTARCrRzfwSiALuqhak",
  "key4": "4ZeLMhhGnnCVaZiLmJWPcvmSueYPtYyzDzDqK8ByxiP6Rs9egdw1MNQMDPs1MgVgj5quzVxFRmD79Aq2dwVsdoo1",
  "key5": "35rLv5HxkRssQGyQ2RbRYp5NYJZF1JEBDYvjXUDKVCDgKBs5u5mMcz77KjeuKq5cr7bTA3tEsx8CgycRnQ68DMUJ",
  "key6": "4yCzLnveUiTRFUTpkVuuZG2MHFKCzCpLAdq6QLEs3Vs8PRdiaDp2y4ZeqNGpDBMc6SMZjzwK8opZMWT5oPLa1vLf",
  "key7": "5niU9pDWnfdvTMQfVrDSWYesnXLau7jor6fVxQyXUTZaXpnNCFnMU7rJRpVKns4sfkqvKp5sHoUX277MXFwyvZ4C",
  "key8": "2Q1gUNytr9JvVfAb6VbMASJbZUZ5m7qCSr176iT4Y3ctndYrRQWWhQ2n32kgiU4kBvvG7qxGi1wbQGupvNY3arg3",
  "key9": "vJcv7x8F7izp8za6h6NF59BGn8w2vvAyNdkpvC1ZVc2cq1WS659cQQCkPU5tzj3cuMKJDAGu62akwoWASndYLBt",
  "key10": "23f84tUPK7CDYagZj5EuSmXJXQWzxzRUwjN59YyiSPqbkXbre6Zu9BYbKMdYULhUd5ta4wD728qkyvv7knFNwvEU",
  "key11": "4Ffo1L8exAt468WtdbrCd7jEjA7HihXqBfVzpn5nG2SJDbnZPYUhBrTiYg5YUxe9Vy6aeouUQ42SAaSRETUXshB",
  "key12": "265bgnajEnXXSTFZE3hxXSYrfdk7Hq9yth5rQAkRL9iBqn7U5mGyKNY1fEr9uGibMmUEySbM6BbHz1gAoVBFKMa8",
  "key13": "3yLWgttpXUXx3YwS2J4D3eWEZPzyw5pYFU6Ron3ndXvCAAb6AqWdzkyVUkUwU7M2twGHmGtWTgTZjFb2FmQ6c32z",
  "key14": "2fXaVs9UEh6fmf1L2uo2mw9pFtzwFukda1wMTaN76zqQMFq64krJvU4cCwPHxeWNTG6doDscvYh7fMW9sCbdQdEy",
  "key15": "FXWGHU9e1EWUkAbjdu8maSEi8HpNaovbxxCZSfHwTU33hYGB82nSjhM9yRjZ3RPs54u7zPv9mB7i6Sctviz33JC",
  "key16": "BEyeVn39ipzr7vpfSzx8mZevNiVrmP5cMkuv7H1aqcGQYDbRnz3WDJ1yUxHsiDRMjZtk2N5w2XkfHqWWZzEp5XJ",
  "key17": "64PnyctCUqvgbooXcDdts6beAn1bvBLdKKGHYUE3JSFsZcWEbQSHGF3QbGdhCnmpt1Z6HmsZ7YLMMZQqsiCZWjHG",
  "key18": "cR2rLZVvcje51sPjugbjak7DNUZfeKnevaupdkAjhucH6Mupvex6WiyCnygjgDWWVCkrxWWxQDyMqHvg8ocuX3b",
  "key19": "Vq7eRPjXdfVQvS9BofkameHuHSCTfQcnhE7Esp8ceUmcKi4axhwFW5R7q3ECq7i8MS92JfoyPAB4PmXyP3pyYts",
  "key20": "45HZBYoFG8mXtM2jzNRF72nHDsWh34kaosMdyRSR9miJDkTZ2LHP8WUcyhyjVBJbFieC3SHL41uyTykZacCoFv6k",
  "key21": "3q4ujbzcBYk472zYCxXTvwJFww3KJWaXAYWBXVfVGUYy233k7fJvLbJwJDYNajgvU7xx4wXGc5QhWSpFHFCewFzc",
  "key22": "2Rswbkj4inUY5G437oix76fUpcBQEnv9GWfC9gMRyCzGH92DLnuiemnjiB46CworHs6xQ56vA6r85MSDP1e2yz3b",
  "key23": "4NqmLenBLPEd4gNvKztDQz3DripN5mi9uMxMCYya23ieFCuKgdRAuVKiE2U8ENMmzQMpoHsXwPCdEN3JUZNqZAsj",
  "key24": "3agoEJGjcEwfz2QXhtWeYoG22WqMjhou1WLseTHz35oNHK6jUZdT61j5eQBMdWynXprtzU7MSy4gAEgSbe25qXnw",
  "key25": "5Pf5HJRDYqkusYpwGdfJEPCzFQkxFwt4b2G3kxfgNe2oeADAuPUPSfoQL5SHYqNLqg3QUfdQovshRXXSnRL6fuQV",
  "key26": "4V4xgtutPGtBJriNgyQuTzyDefEbudBovk2n5SpaPEdRrq4s1zVHzP1XzT6K2aTeYRyRq4dJVThXdx6TJkcarpKa",
  "key27": "2eyKpFNoP49qPJJ2BewqPBW6yUssHvWMiievdm414ZgtDeGLNrB8WGASWfRZMHTEG6qufxc6xiA5TiqzCRiqoQCf",
  "key28": "dq61Q9tPvmeseGxvrR4PwKZ42yDjWLDsuftnuGseHiyTbeEXdoNWaFD9C3AmCuaLNkSJ2d5cn3GpKtWEpWDv1ac",
  "key29": "4UzqQSFPQaSmHYQYUFnmCBf3L91jgsYkg9PwD2WnkM9e8F7k74Br8iXr3KdkW67s26SYLF3Jjv1MtUF1mU4Ncazb",
  "key30": "3zejV5z1Ms5Nv7xZe5Hg9zMkhHy8W45zpgaATgCuVKA4WFUWYqNvyws5ngM5vhHNfMMntDZbqfqy54DeUGeqeugL",
  "key31": "3zhsKao4B1PVYPXhtac4Q1kpDYSCiM8sGAbGpcCCwB9adtNTgLV8MeRhdTj9eoU6RchfHseWQ9f4SAC2TihHEMRH",
  "key32": "4nVaCjJm7pgdQSDsPPZ3ZrepNC7ogJ7xXMgoCJfG6E8NNPhvkzSKqa3sXHBZwCXqnXrSV34iQJbgShnxkmSDJibr",
  "key33": "23s7HjMTo9s8rRuwJMRgE17Qt7u6PaHPx6yoah38YffA7snvZKFvECGPr9aQ3RNyXMPuJNgfsudh7eGGR4tHKCTv",
  "key34": "X6k5BWFALWBDKCvNfSipW83xuBsvQ3i823NsEmm4oHxXoGKdXTv5bcArJ8d21wgj9b8XttLAzzKaqJPJWQitqDW",
  "key35": "2UkGanWt7WruVKzA8Q8XUZs3mHGMu2XT9gcyCeyrEyjfJvdoGSPJ5WybfWYuuzEERXCvndVfxndTsCGYcNuESLk6",
  "key36": "pcsyeS2Enn8xYzmj4Xpbx79DdfxDNhBUM9GbmF6cRuLFVpFbKXpWi5ZM1N6dkb4sv1gL6PGHDdT729vxmYtvagF",
  "key37": "4KmwtUPiqSiYVSWA6WuUnT55qyzMcv6yHYPJN8Vw1FoENN6wesTjyXLExc8uG6WcVBf3mXa1J9GJQ3113ncmVi4x",
  "key38": "5XEqZgnvAKMyuf4HMcihdScENxZfTNJJERuHUjucEfyMsQ4fnTr2jiRG57QsiBoPbfzu5K7xNBztvP7kxCQov5oa",
  "key39": "4seafyLw4TFoGEJAsTcnFrxu8TYznXmsc8UgFEjZgN1zvXHHm4s6FnKM9MQNidBRRV4K285UR112xiBC5PDm5UiP",
  "key40": "22Esqbi1n13Do5urTYchSCApYgk7Xv2wejQSYr5sFbuteEVb9GxMTdxpQKyEnHBAgTPPvmoFtjJkosXNVgkiaF72",
  "key41": "2q7aFXhx7Pz1Semceec9VXGkBEN3bjPyajZpunmU9y9jRfz1AYXAL9YgtLQ2KFuptB4EBjFvtSZMpkpFjodE99P7",
  "key42": "32WGSVQxdFfQxeZZChszYCKfNtQmFD1jdriSw8mXCVXA4XWD4hu8d7srhmgcGiy8H3TuYggpp1YNu6VLXsWTRH9f",
  "key43": "uj1ghHod4tq6ZsLPhjrr9AWGJMaAcBrw1Vw5of4HCmzhk7z59c78SsnCMzq1KLvYRrhb9VY8WQGMVmCwY8UMEpi",
  "key44": "5YkxP6DL6t8Ra1eRa7d1PykzaiiDXvWRZVxxQhGPwTWEfbeucGPz3nSqoUAaaj6VAGdXP14UUhJF7sFN7aNVr3kT",
  "key45": "2bYNgUcQeFrchfbBRR86XfXK1LwgsZpyN6qqjfdycKnS3s4XcMKrTwuQMzKx4Q8NPKe5B5SE2Raevqo9WPUfphPz",
  "key46": "4L6GMHRMsyDS7YsGiudxooDViZ9xWheT8fcRwsTYBGmgp2HPNfJRDzf9touv4hjtSoUV6s4AcDs8wBJduX5Ps5VQ",
  "key47": "3B7jEKjBxRyLnZWZFCngBBfXXt9dRUqGgCAhJJQj5gseFRWqL5ah7d1RGAUJho3vrefhLT8L7LvsepH3sZwGxiey",
  "key48": "32Dy6qrpcaK2JamyuR26j8azjpQRQFDqH7teDk7Q6KhNoM4f8xAjJQwKDWWrkuQcUHnHeiVXaSywLhyASqQKpncm",
  "key49": "4LcRYapiZRcMv6HRF9giKbj7LRM7beoi7hCGKz74uPPpvkpYkKbeFnXseZ6FkT3ewXB3dSfVceJd4CnZT3vcRjVP"
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
