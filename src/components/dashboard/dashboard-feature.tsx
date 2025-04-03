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
    "5rSbctYcMTgYwzf52pJJSqbb4P6a3LUfJNqYcDTQ3DcMZiH2DqBNizajAj7j3rFwHAvKbQZDJtzimiuGCUevQExL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKcphoKt5sbvZDBk8pNbUnHXwquCeJp8cuH6QhTGZNVTFrLJkn7YBHzGc7Vc4XvjVjHgUwXoW66J3t9LdkVcmP4",
  "key1": "289HjSCjS8HrFRnQuZWYSY8LxoaeLzNLWgduNztoWZFbiNVZH1U379JEeMqHSfqKUPG78jXWWjzhtjpVJzFPcjPs",
  "key2": "4qEHGJk5btvf1smWuQS6GmT8DEoVRGs1TZL6RUMQcbB6ujihUV1YTaLaUAK3sVzMTZTy9PR3Fud3Z8DoQDQHUTRe",
  "key3": "2Sd9V4VZr4sSVmYrGF71omeGE2ofbCA4kfrakDydqK68MhG2ZEwS5bGnnzHVyKp8t4vhYeHw7BYocvxaDmcQ3Fge",
  "key4": "XhgqgXWeL9irw2bUbNMxgCdymPDJ9ESFVajYq5yww8BtVkQC1Hrh9buAJGcFdAzHhMw8jf3xFAEeA4V5RoB7pup",
  "key5": "4vzRkFUewMR6zVnb5SwbET4zpgA3sLBWBURqWsQfKpg3wQhb4GXRs1ZFQFx1zsHGf1fiuvLz2XnqMS1w9gZtVtus",
  "key6": "2eEkComVCJ8LbzxwtQrNbECLHpCK4zJ52aA5g2pGGLaTdsBX7ehy2sVpnNpa7t7G7vrgcUNZRJH9tYkJc3gUxyHJ",
  "key7": "6ec4ZCudrZ7EyuJ8sSypLe2kRzobK94Vq1yphg6EmkjECBeNqw93yyv6DAg9FSddixx6UfXMVJWaSDDq7LtTufb",
  "key8": "5ocUYAV2mbZLFJHPy467yy2jNt4n7wrE6wBSRsPzz9UgpPkVnckUta37jatX3a9orVeJap8dtfcovcaNu784zzin",
  "key9": "5TwDfDQ2Cs9WL3WKaLG5qKtnvfVLzTzmnRESoYbhn93T2qkscjFCHRkZd7ZKAUMiw5rAX2PFjTWBqnwPcZXJNWkt",
  "key10": "5CQtdNJoCgJoTtvv13EAJPVMpEmyu7xh8VjghxeK36HUYwPfq52MRmHuDtnVDJAK6SvNSCFR4LbBcLDrYJiYETtD",
  "key11": "3KkTK5CY7DD8gsX38xerte8Dp89cRhDXn3Q53P3oKCRdukZnnxMF71t73aGSnBFqNGwthaA1vDX9i1kRu38o4VSB",
  "key12": "5j8RBpzM5crutPuBSgfHDYSs6VpVhfAmXkcSQ9ZQaaseAKDeMLuzeW93qe6JfXzxykBbxqiVnSAyayAptCiq8xYy",
  "key13": "5UoodhEneSwv8x52gcfU1g1U8Qo5hHFww3Dnthj2tmhjuXYheiJJvBQVp4AVA3vjY7VpU3XZXU1muwYcZ1cb1HRY",
  "key14": "5qgryg5yX91757hxKjLTCZgSv9eMd4gaQEoYrFx1XJTzPZNQke3bSCQMuUia3EgPd2AczkXFuzhnugtYFZQRjtD1",
  "key15": "3p21rA4gcDuDJxwjgYFwBvAz6VbNtrBPSFpK8FkS3AJRk3rHR4kmGBH6ZxCQpjg13jkXu4ESwXcH9zu9ySDBrCtN",
  "key16": "5e2cqFovrRvkRbDEpBZHVztj8gmaRG9zwScHPPsNMwSKhAhuUp5Bm5MqLDTCVj4Xo4814v5MEjnCn1uFWQZ1ms9H",
  "key17": "2RW15UD6TKuHpp9cyc97botvFUP3q4tXBKkntGu71UfKvchK52EUTerfmNLGzn7eGuE5Qtu1U1Dz7iTn7ztJpkiu",
  "key18": "4yq77hgchLzs2hWNBo4yAayFMX5Q7oyMYhFVgaK8hQWszfgvJK2feF2YwYAWAWxpzsAE4UnQoY6799cjbaJUj2bi",
  "key19": "cz3tK7bTjZhLf9iPhF1VjnavSNDymB8LUszdr7ueVzdrWWuRa4B6jujUfpmPVGwX37tKSnwBXbFA4HxRcfRJGVU",
  "key20": "4WZhK2rH4R8MyNeVL9xoksdm5VennfdBSrmt2sXcPyWg7bbTcfLgTNtAtLb3w3TC7s3qnzT4asVCBaH1FztC84oc",
  "key21": "3Ur8YzRj1bowQ4PX66D3G4PwaQygMzFpbwUBtkkZqCC8LvivYxaeGWGRHie6T7P6giy9sVz1YLksDxqtQtMYYVi8",
  "key22": "yVU5G5cpFAkZ9dLLCWhjvDFSs37bB9mE8hTi2vXr2Xm6qLqfQ3Vfw646dK1eTQt3cWupTvEnQPrPLXZZzPTWwuJ",
  "key23": "4TUSBkNq5YT7E9Y2PFgMhdVs4X5qtgF9cRiHLEEgGNpktVwQHjjtdYvcytUZBPJpQNYc5JTmFjFzM5F9W8RqmSdw",
  "key24": "29GcrFGVY4fziJ6cC1bedwaaRJEfcaRgKpJ5ja3RUPNNtFSbyTfvXzo3JGAhmTPossgBxy9qbuBcLF46jFmMZVU5",
  "key25": "5DeCR1k2Lp6ixwP2MtR4Sxi47B6DHRnYEDv5zKoP7nEzLkjJCGG9PkDdASwx2rkyBfM6fKocCyQf4C8HQQ7hymN4",
  "key26": "1uyxmT6hotmgrfAKVfS5NLEJVtQF8H2oUA7wVDmSp4Jvb7AdtKFJekEgbS9DDHkWJvFwydvmriy773GNoProRJY",
  "key27": "2B2q5LE8zjsUvvj5a5JhRyw2WUBppNKpCLyWTiDhmLaEPkL8iFtUp6dEGbN4vCAU1WNDxZ87haLpC6dexYwhXuCm",
  "key28": "5io3atmv4VeiAq6fCt1DTNPSjC7AtwugBm3SNMc3vYiWHyQMHLU872TLdbodFoUsfN4bFci94Axfd98yNs4yF6r1",
  "key29": "5AqKuyA2tVrfTd9csaUcvby3uerxXTKfu48VPwdb5dSLNniDwMBYhkMh7hYnc64NtEYENksjNNAGUoc98rLX8GJZ",
  "key30": "5iCGHJrpZsc47qqsgWDmN1QmLWH3u77xoCCaTUQUJbqav5GX4VzTs8DMDRdx7svggzXbpqHmntbiUDTaikRNNb6X",
  "key31": "3miXfovLL1kb11fkccmwxvw7A44bLavzidwaUKxY1CXxXvsxoNCPBefXpA46Pj7sRrseHQzpkuBvra7oVTBHmLH4",
  "key32": "3gDFvZVHvqS1EwLuPKbFyDb3sXiitvLDYgkEsJirx42QHb5c2eKZDkwZuBaVCha59PncAG137TPqhGjhwgpTKpdv",
  "key33": "17ZVaZcuzeksy9XkPgF7oQEKfdXHp6v9bZHJoQ1sRgJAe5xGn9Vpu2VgPjSBCA2SkD6fdo5LoGDygC6kjDLToyc",
  "key34": "2oYm7bpaADZ75QAXiGPGh7cU7hQakW3AJ26X1Cpnb6cyRLgh953UC8rceW2J5EmMxw1EACUp55TkBnaeVHJLnmXj",
  "key35": "27d5jDcevkdiS8yVcW6DGbk7VFxUrNhWZBsxU67PjXP1693CHZzC46YpKC5MnCk5p8WDtR9Y7isU5FsKZJ8ACkAC",
  "key36": "3JBR1Z1YNdMP5At1UXbyreCMR3qa7xKvw4oi3r3V5k2bg6Ha8T4mWstW1taJnm4uh8Pin1fb378gi1QmKUgBVQSB",
  "key37": "4qMYvGcvd5qhS2SbWEx2jxhGju2AoDLEZmugf3o4GPhXnbfZo5iU89fZGRTeTHFEk97b3veb3bMeLrUuhKcts459"
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
