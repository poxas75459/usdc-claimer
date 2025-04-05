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
    "2nLZsz4HWGLkvP4Bxp3VqY7cT6JALd3w8QAygfFXJGRqUuptqYcoLNkZadCbQj2SbEBJHGhMzyCNV4koAerr9acD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8qyDSNt4PUJowrgADXqDxeLeUuYEcpuTQJu1oBopVJpRTU33yYZkqmyAnYjkxPVGci9GQHkgZ8cEdwFK1hFh3zd",
  "key1": "65imNnDHzfCkBwKmKhodhZNeRrPrmiuFpgZnivbf2b5cCRnvBkw6cdpEWGBfNU5p9yTpCkLLvitQqyg8fvh5szce",
  "key2": "5YYNKv5Yb4kwmpiTUm6osX8hzao8oZgwEQFXp6yTZ7zKJ4go3yVj6NmVGydsUmgoe6wyxDFxLkfvksLwLP4kPMvz",
  "key3": "2gCtkKNBtsrxhLWAWcYSipiY5mzFJyFdGsPNN3vknTvf2X76iE7vvRmom82RHjN5mMfXe9S6aV8xPDz9mFib6tBi",
  "key4": "5VvRfHdrvNenXEVA4ymwyakVf1CLdfXDwAdRYGm7pf2zeDBp4PR7L6874A2hH62Ss7jViJbeCzKXLyieEuD8yxCp",
  "key5": "3PUN17XpTux9BY12QBMQcdxcoiiMPHCwpGBj1R2CtosJxQLPYUYGaitgzb1JUpYJwERL2Tx4UzRrXtof9Pc3SsLM",
  "key6": "61cp3rZFU6GjbtjKPhjDPAvuW4A2DQAA14X2scHKXmCMpmgUGVNyu4PTXemmen5EKV28SgD8uAdSUHXQPSEKybA1",
  "key7": "5kYB9keuKUWP8xKef7rAdHN362HuGRDAsjVL2cGfbK2Z2Tu8im7BhvNyHzG7PcqyU3wjxAEj8Lm4AokT7pHTqDRo",
  "key8": "2F1GmjX84M7A5VjFChC14h92c466wFWPS4zHXawuRDSD2EhBi5T6hsmdkhvsprneuqZ9EEiib8nqCfgzzupPfp2D",
  "key9": "2NFWdYBuuFZgpXuSEuo22MWUqNynkqgzFATrpnpbxuS2JJuSqa9JkNhWMb5QnNDGgp5H9b3PodSkh3RKj6uyndaT",
  "key10": "2RMkSu2e8QoFthC4LmeEoCAjueiEz3shx7keTtUbsZUGH3WNnNx17zTPdC7VBBUfQNLoKrZNyHKCZeKSbYMpFWet",
  "key11": "4nEuHhvrxUQSVzUN2xFcQxWMwgFS2fBhzg7ViATBr6qBgreY7L8U8VvakR7TZKcJTBa9NuL48qeagQEJuGpH1Rc8",
  "key12": "5f6X6dJmoTbHh3fwtzDDuPHw1SjKxAXWiurRb2e6Yc41vvf9pmrN5QdYFMSVnQJpCJSKaKQbxzQ8Sn2zfit2mijz",
  "key13": "f7oc6aPLtwDmHPdvd8BVhBdANAkyDyBsRfhSSjNcAzz4mYM42C6VTaAFrPJPdoKNuvVjGUUwZPGRmznEDDNygQX",
  "key14": "4YULcUyspfUjZHShPXuR6Y6A2yparkwUCDgBbSiqREyuDzCBi45DwU2r6AaYZoHc7c9QwgUyo7XHK8oBAa1kRpKK",
  "key15": "4pVSmgpjnNppGpUiT2vC8YyRjj4g4dBenzytY7r4Qjx77BEUnbrV4Y7DtY85xr1vivVtW3aggvnn2bmTvQ4Z7ngA",
  "key16": "3q36RcwKguYtYSmTnjWMFxpGQ4VEFBTkDPzRy5jvmAmBYcgpu3pLwBU4tRxxLa8MGAat1CdhjWiKvbvqHNPsJaau",
  "key17": "64QdMxL627ZbGKXj2rVNfghdhpvCkhbdGuhKYuPMuDMpReoWfPHgNtZhKv7Lkz9BnmEuQgenRRAkLzvpCM9BVQNx",
  "key18": "2adB3AXtY26UwzSTpQ1bF4FPRMigBbXXdEhmJCgxHCMKS8q46W9yQqx1KizVoC3TqH9PzQP7Uts5TdGDaANcjPxD",
  "key19": "4fQqPJU1meAEkij1VpZrpxAFBjCxv6SDPk49xqgb4DkSxR32hDUZNyTbbiuqxnEv7NPHSz1g9XaNBopJKqyG7ZAi",
  "key20": "4uDFnntxyPD3kh3qa9gn7421jt8RrBAafLJhQTDXp77gWYo6V8TBzquyoFDNUgvfXWXd1YrKWNTwdX1WbV5DT9Cg",
  "key21": "38reNVtFzECatYU641sQZ6xpxJJzMDNjzHgQWANbUJUk5vRyKmK3ND5qbArYxMfe6zCVZ5ucAqQPSzG6BjTh4fmQ",
  "key22": "5eKi5zywPC4As8HD45UAJx7Uh1y7HacCjZwgW4wwpzwfyaafXSxE2ok9pzBJoMyqEBuKfVoXbwk6QQQeQmXHBShF",
  "key23": "63VqjkPR2EmSchvsB9832x4c2JvwMUoBbEAVna3pGdCRmoJvdL5bcsmb64Qga1yQfsEsuD95XqFtz6BGfmoabb9N",
  "key24": "3wHL6KRSmE4uWY1gmwb96WigxmahHxgpvxKHZstMTQvubbSfa9daWvS4Gos3Y4MwL3sD12WAsJEdX8sQpeT9Eo5a",
  "key25": "5a3B8onVC4m4ERWE9Hjsb9ckgzmWMH7Gg9rwm3B81uPLac3ZTx8uKDHu7kmVVUT55aZ7ZuBrVzXUCz2jqSpD45eA",
  "key26": "4Wtdw9p4GFw5xZCs2nSYR84ieBcoYpnf6h5CJjpogPPQa8vuZyMC4rTEvHcfjGqgGx4uSdB1g9MxHH5Ky4EXxyKL"
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
