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
    "5rkAXJpvM6VpqynazZpGDZwjEer7qLaQxyL5SNocz4DKF2PGf81iJzHr9suF5hnALyM3fH7k3NsgSx7jinLGJyCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UiFXBawfAE1iQeCRPLwEAJQ8gvDWEzRP7cKMKEnGE51y65BgNBp7pucVfu7eqvrhRWMSd45poj1MxM5JkeL8G91",
  "key1": "3PiLjvhF6hGvUHLPW5bP6ymxHvLFkcivxp1a8ppLt9T2Qk5Z43ZnwfmRAqKsXuZBnHdQinKrAKQ67uxQRBxpukEL",
  "key2": "4ucSvZyRSYJgqwhgbtnG4b18P8gujazVpGLAthyuMKA4B2Zdc77qZNSeqGPKAxRAbLuUWVatnXrDMezDrpJnreSp",
  "key3": "4ZVPomTYttfXvTnmuYtpgjNNvTxebfXB8nA3PyU3JASMp5nRDhHUiyxzzLCt2D7VPYhb1jpGWLmFu4KHrPHxKV2W",
  "key4": "5qTjV2Gv1YgEbpBkMyeASZSf9e7QTymkCbnnMH4EwFGNu3kMXFrhkpnq38oNeus25FUqLxvykRss3PqNWGhqFpx3",
  "key5": "4NM8v8wdWSZ5HY7LKj5nHUvH4QH4CePpZ49v886iviwazsVyxiCPHDFKdAJHmaBekBGqSv5kuZJbNErLRxYuzuzp",
  "key6": "5eJxogLo3sajvPWnDE3RZesMKWG4Y5Snqd57Ttd4yk4rYUx5i515iSuEaPkGqYn4NvePUTEkGvnGLF4FX83k85HM",
  "key7": "2K1uVgE6bSgh7w8FH57s5Nrj9mUZR6M6923BbKtnATuUDz5aGaHH9Qp9HoA9dXiAMNUJFqCRhGxkHkf4ycTzU7M3",
  "key8": "2LJ2bnSnSUD6AeHdijde7NEPnfUQG8pP4jfCuXTtZxxmJFAZaSs5xLt9jpy9vBq6QukuYhohFfwTAaRXWyffoW45",
  "key9": "3ZqmFdBpe8Fpb5kSwfYrysKQSx8JPcuGnjwsfQEqJTLBtBCanhooQ9T8W4fTKCTTs1hcnmQ61mHvyh4SZy6ZiWMf",
  "key10": "4JEmgVt7MaAqwYRWtA3UAwwox3YQkcHcNYRvDeuNZ9w4xj58sN4uJEy18615CZkFDxKLqLEeJyzudPCdUodGpzMp",
  "key11": "4DALgSo1aDRk4v9eSLqj6yvbrpVcd5h8xHab1U9PYgT16qsNwbyvJKGT1mTiViZbW7NR6ZpEpTiUsAxSqDt2bi3F",
  "key12": "4s2yAN8qWKgGsW37ZcPvgc6LiMgXSYXDFp83CsCHJjeZYHnR3Y5Qdi6viU8wfBYgvDsL9jVidL3FWdUbpScbkeTY",
  "key13": "Ca56H8JMdriFEWCka3pkULKiAJW1AktGTdQe2r8dgwsp86Qvki8xDCTqjz1YpSUX7XEDHMMCNDBZ8gjrmmsZbk7",
  "key14": "5Tp5ZzPzYAjLCXajuEP6rv1M3KxnCsPS3ziM3t37np52gepzSmRoxamj5ZPkjbt33KdFZzynWGJKtQeHcTw2Avr9",
  "key15": "37f5tMRSD7QB53WViR7Fre8842XGHVwTEBiEHoqmxXeHM2qiRDezfXVpuEsYgRULHkRo6Aj4oy7hicoQBjWTPkw2",
  "key16": "28kvgfsknNyT59SVJSgCzVGDejStfKojfA5cj1ixkyG3C9sQb25rNNZqj9BZBxZGqo5CBSemYDqzp9hg5gcjZ6zk",
  "key17": "3xLAphhoyiXFqHVnGgdyNHnRB8L38zRFDpx6s6VxzikhBCdeuAXM1buRXm3oTpcEJaHPxNt39T64SKCdT9bcK6Gp",
  "key18": "2nBfGf7B4WooVj546e79uHATrrmMZVTSBNSU3aA9aXfm2KVUyr2S8T4fbEXqHCCLJKVvsT7qiNi18Y46CnYwtLUX",
  "key19": "sRZU8ZMZaSMeeGxF3kg3zLJ5BfErFVz7SmrAz76zLYx1rsDCSqXGHbZ4rvPBR7YePLTqrtEahv1sS2FixVfneTK",
  "key20": "34G2ThDZpCw78AEATHCyNcWy7AnyZSverhBnmeqo61RMcUBvgogo2ARx41xqfnrM6o5kbGcciG1dZrqNfB2XqMgX",
  "key21": "52sQ5Je1UFKefdNzdm9WigKPikQvuRWJjUyZRWCSbK9a8w9o5ff9518FVPbTgoN2psBQE1quWgMviTdB3Nicyati",
  "key22": "4c3ZNTKvanjGjYvcs8uDLWTLFuutFoA5vSPVk3eoSTViWne32ndB3vyfAdinUQns6jBevgTpz3mMY8usJY1m89qA",
  "key23": "5r4rxXbA4eV3ooLPa7yyih5ons2kgtbzRYPmUVWXn6G7F6z8WyiR5PMe7qJNDotHEaJi6j6K9hcnNU4Y2baDgYYD",
  "key24": "22DQQAWeSoYKvYmfUp5NqNNuaYFosi4bou7FA9MAjokKpRemxshK1G2dmqMZSwe2BEN2dRimLww4pAWUBcypSEPU",
  "key25": "4LcuHdLDjKTdneedAbw9mS5fXqaPSjupMcjQxbVjjWPboSJkFk6BbGw1sxXoh3mK1iamoh9Db3kE8wvHvhMeF6iw",
  "key26": "2ZP3mCPmevfRcUkidLMyCzj3zzks1tddHH28u22iSGGdkpnBQQ7YcR1r23NkXbKQ5skDMNeRiKRds6RTXwCMwNYX",
  "key27": "2RaLm3Mbvhj4Bf4L6GBB3JgnMfbrGYVdXeQGgrB5ji3yVNtijjh9PkJd9E61E51E8tko9fKi1fqgJouxgxe9Mz9s",
  "key28": "2wext9FMjKpj3g6eCBGVFgRDHmnMpsN5REDkfTgTjx74eokWLdrnpwWJSoreJyntNGoZ7DU5qK1XG8RPdsz8WSUC",
  "key29": "2A5DtZfUDawRBM8xxCvmchiBs6aVsMySTnF4cd5ZUQv4LsZZ4xauo8JnESABzZFM8qeRDcCzbanpbVqQcxMQGnj6",
  "key30": "2vqoUFpwkQyESFzTUNkh95FD6eBfEGgMYjTNrg7RTWdrqcjH2pyCtur1TE65x1U51L9Dn7gLprhUgSzSdztoBcsG",
  "key31": "6onYdxh7QM6phiYSufcrwmFKDcTaiN7art8hDUad1UXixDUX5FEsfqX3XnKRrV2KDEsPGoQXjtgt76Ctvxas7xY",
  "key32": "2dgsCCBQCVt2C58sxJ9RabpSpT29oTEFx8GTZuQkdXWAaMXcpsZnF1u5X3bi3j5R237AFq9K6N4E1DyHnYhmDcqG",
  "key33": "5kxNV9yryGfqWAKmfqcNoxZcJpLkHiWsr3o4BwyzYoiKsiW9cRagpTLCoFG2s6jU5WuBUx9mvk3WxeKGGFn4wnh4",
  "key34": "51b18kJGxSQzUPy2KukynfUjhBBu2nJxBjq8qqV3PkWWmx2HhXfjSSzN6hCyog419v6poTJB1ggEtoxSbiUeKKRF",
  "key35": "5nfFAf3dPLc52AjdW6ePMHcFNP1rPSU7qA5rBx9RfwUA9zBtnnZ5uh1D1nvtMqTg983iRAckgJKXLWs4oGvfAeMs",
  "key36": "128aiiobXCkXxWV5UjT2EC7Ais6TEeC7JwPHKg9XDETNdXfNaXYk8FFaao7pR1uiaASaTqus7gsHfKZ5pPMf2HWM"
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
