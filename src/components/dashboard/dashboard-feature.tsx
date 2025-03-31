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
    "BxvF7VMPPvv3koLZfyYtPWCR1nkCf4BTYqUMRYgNMLUJErga2cXHBtT5wd5gKVN3yARVowyY9fnX8Smfob8KNUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cukGXT2n1j4ix9Se93eq5hFFaRrERGzBfo7LtbxfM4cULKRctyhQDHEGcPEFaBqktc1QZXUoj3X1UXnbXknP4Wi",
  "key1": "5Ak1uWgKpeuApdetTFsNCPyGKmXx7HytT2v53UZCpry1tGWcrGBKYNJxbm1juKfFouUmYUTcxdeYSjKZMXQfnZyB",
  "key2": "2mWGo6UGADdyoLLT2heZRwo5oXFGC83wrx49wZQn9eMj73MwC7NaRmjXk835c7oYqEZE5qzJZPTxHgCaKHp2ZkN5",
  "key3": "4SAuf5ayze77mUFdqMM4ZY3pAys5nEmfjM84v9dUQC8owaFxhMm8XpCjRkq4cfyK3B4TpjWCZQDjweTWthgLjTVF",
  "key4": "33QWeJ9ujAq6GMiTAShfFcLezsqU3PWgtvcJNCiZned1CABsXAoECbqwqbzpJ38LqW615f92h5NRngKGA9HExFth",
  "key5": "5bn7jgartD4fQzBEkxgfspPbadZHvkgDCjtinW2XeEjx2DWX2tHPc3mUR8MrguFnVTjSRBdivGJB1iU3MDaZbCyh",
  "key6": "2fPbpu967KzQonwYbhHNsnzwESXZxEDr3ZAv6nXQynDiw7Lgzc9jR2Ze17tXRaJAec2db33CiHDKx5ZP4sh2FUe3",
  "key7": "uu5PfBWZNRxEN9DHDXLceoYGrskwvpWtHoRRkwWgkfcWhMhPSscVP6Ek6vei7tJoeweow7Bh6xpgJDG37q1eEHY",
  "key8": "xadyTMCiDPp8PXiXmdUpnMfDUreNA1UNBQkxwrnP88iP4N5cqGNhSPfrTbUnNUd9NSoT7ZDq2jXQiYcnmJNjYt1",
  "key9": "5kDvhpT4KukuNA5kTT7XR47ZYcjmSAksDZaGKA3QFRUzt5KVX1M8qqG6s7Ug6E7Bw8VY8r2Qg776cvKTGbA5dhca",
  "key10": "3gD2d52ymEceeL7f6e5MfR6UTKiM1RB8afeLu8BkPEPwSdGzWTM8wEzsNmzicVNvKEr8PSR24jCU7xMDBQRMhpV9",
  "key11": "63ZTCJxB5c5YmbSYYbFhxjc5rDF5UzJqzXUbczm6hZz1ob26HdEhQtZQ6TTGh9LtN48hUwr6omgRp4rkbzsAKNN4",
  "key12": "2WMctgYvJoLu2NoDprTKpsATYXKAv8GrQRJaAZtCzDcEcZv75MDHfzKaem81E9nAjHHeU2PSiqAZqtWt5aYG9UYB",
  "key13": "5jFyS6eMvzn9zzTRwj7FSzFUWcVwgfKpsd72Vkeg82mZV2p4aM6uPqn8aAGBWDtcUVb9x3dH81JaAZ3C8DUbhEE4",
  "key14": "5b3BqJmgfLGZ69ERtkR4knSw9XEouapfPD3akHg5EDqoToEgH8WAzDeBHJCuSmHmWqZTRBP4ckzH96EPJ9zbVyfQ",
  "key15": "R9KNaj7TaDmpqegkKvu1us7fEYuzwSMu9kP67HaCh44PKnfEy9jDTp9Bt45Xyh4ZxoHsp81a5b6AmEwNaoWksNo",
  "key16": "2zSpcDEs9D8bobp19cEYxUjvmADzueoqafkxqZw4xEqEg4CqNvDbc1tcYZ9ScsaCyXMJ5mx7n8ctivwRM8Zxr6rY",
  "key17": "4iM3JaF8GeN1S3vn7CqoLV6mwrqbyYZ57i7DSvniTbhZ1SjYRaTVFTjMMnJxQht7BQK3bdfciYdiM8yyMw5LppNP",
  "key18": "5T5gC9CatvQYCNhDjXRGdBFRtcdF7Ljoe78VxJTBCZvCVKeXVPXHwChBFdrBCj7UAm83CtFiDsKCuLgqPNdKBP9",
  "key19": "3wUPNPaQU7auJ6jr7Doi9secr9Ar7skaoNynxy1EyvwPudGvp13X6zbwMsa3VvGN7xeM5gqs74SSsfwMtC3F3MkH",
  "key20": "5VXt49GpoUnwapW1cZ5AFFew3N696wWRAM1FXV7HYo5c3bh2TDRtQViDKEdBSfd2ZfFPshQSNtRaESJXz38By2fc",
  "key21": "4wtVZdUm77RHSTW89neuxj1m7enTKySCA7ho8o4HgyJaSgXJ5utNopitqXGyighHnJQGvfmUTeZPkf35LuzUS5Gx",
  "key22": "L3imF68CgL97xS2AWpxzjfYeVaCgxNNVsEqkHXXxJJEsDGjgY35dXQTqUG8yGrnoSQ8uRunye9iGLkY9BBoA9PV",
  "key23": "MaoPLejpAivdKSBVxU4aQGBYgyUqdTt8cyPYKXFBzcTKV1ZhMYgPHPQh1oRt4SBtDyRyPV1nZCyn8N39gPweRvW",
  "key24": "4vkdaJDNYAWEhGaPaAAHWzrJqXdeoNTAE1EYYzJaRA2m5sKx2hU6BgboRUdyar2UY6NmTQuMhy4aeZS9Lsuy6Pd4",
  "key25": "53NGdB7wN5FLL4fWgYiyL12SRAiNoruTeNEFJdyJtbfKGQ4KingM7oWhH7Rte4iNrJdJVK8HQd6X4S1aJjhd3rVb",
  "key26": "2nusz437NEecgd9EZEmzDjurcp9sMEzVJhYFCFyJHh4uCF7FT4bGWNfj3xptSn1TNRdoimrWXP9FB9yw79HMH5QK",
  "key27": "4rvMNbEW6znS5tvzUhq3M9gVCCx6ZtEZdG9wPajR2npz8itWUBmnYzfxqRAAvvyEydUYhYodCwopafm3mWuVeDXQ",
  "key28": "46WaMNeLevw3FFjhJQhpXKdjcop4TMhksQuUGPx2jhk7oYag3VJao3udF3JSNRRGX7qHfEcFemY4uG2wXsj4umFH",
  "key29": "674SqLK8zyzESp1BGKQn2wyrv4ZS14E5NaqWRqhBCP4ezkt4JXqHaRo2cXr6e7NoFP2LpLGD25KQxBcD7zCC3Zf",
  "key30": "2GCGJ1HBSeHQbEzAETEhNtmkqPpVCsVdPVcPPKbro5KmVHgJRC575k5vemwFn2F398EWk7VfQvsfMFwhmvuh397M",
  "key31": "4xnm2SzNHMitK9ZSQo95XEMsuWePMVQ1R8dbhEU53CEhHpWrbEJLUBvyYWBouD4KddC28HvLdXmbhxcvBWSdQJ8J",
  "key32": "2NdJKvwwfwaR7k4Y9Ck2YJHdAyrWmGJr6TfJMuVmksbqJ5uUUD4eLrWRZf7EBUwSkhKA3FLXkHcnW5zT63Xg9fdA",
  "key33": "rJG5HMHwAG6eE8SHAJRC1UmXeLjLy2RWhXt3dwmbegp4PTgxb6CctKLo4MTzWwifJvQr547hfVzgvcbzq6QRdxn"
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
