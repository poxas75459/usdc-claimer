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
    "2xTChhbS49PWJjY46Lyqi4DPzWspBucFGFLqEpPUMv8CHaMsynED6PK4muUoP9FM56iLPxEqe8T17JhSXwHbjMDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nnKPxqv7uQBE5Fp7bv2UY2mYNni2iYnBbiGjtkYYwtGNZRWFHbUmm8ZbS7SSbWyTXmPAatKvefCDkWnXSH4U8Z2",
  "key1": "3igJGqBxVyPJCPSaSwcCxbSkT3wGwJMSp5aY7Wrch8f5YfQry1yRgam3sxGcVk6zicY6auWJS6dg32QjJ3cDRYie",
  "key2": "2uBq4xbphAKXozrBjApXwU8xFU16LJ59PVVZNfyjCbeGmVGhs4b7xxKGuGCD1CkBhFNwLmqkSeSDrTZUKace2TDJ",
  "key3": "5TACPzc373JK2GsNTjupBqDDvsWCKCsxcKdH7Js15tTqJSVRvfz3DoNgqSu84p7U6ndxgiDK6bC7xQymkZjVR3YV",
  "key4": "3WQjPJEwTkWoztH7BWstyScMXyrwzA87KV1yaUzBGYK162NuRDzDG8Ros9NpBojeQ6ZxSNZ4vMghNUKWbY3LKyk",
  "key5": "5BcKwyXH9agQaCm6kSaJeYcZrum8wWiVMWneGjXPc6UdpUZu5sgkURMjqCwnjtEQSGfSBcEdfeDaStrv8K2ojwjz",
  "key6": "sErU8oF2HeWoYq1cLFAsgyjv6QfghdJREQg5AqpbxdLmgyqUsRBsNTdBLsLJPjmZBYBFdZfNSTFsaKX4Y3VFqeh",
  "key7": "wQ4qnuJpTzPpCPf9WaPf4sc4BcBvoYRpa1PuHDQY7PXekJnWsqgySCQWdG9P9nqiC3hUF1nibDfhxQPBS8UqP4D",
  "key8": "3tB3xWohktLW99sCvjaLjgGrX1jrgAu3cvdKjnPzAmBHFjPnU9Hi9nbTgWYXHdobLgxj3ZvGqP5zHibujPuJJgK3",
  "key9": "fZnsNTBfVqd535jZiD6hKM5ZMowecLjxRfj526JC1GA2zAdnXiRUijs9hForjiuUiisJ2L3aaDLQeiabPnN4b8h",
  "key10": "3M9YrGGdMUYsgALsnnXeM75J5UjmEb6mpQboTTJGSxhDVkHkz7TMrWuZYwHLRENshU8bYJ5wa7Z1yEwHUKGH3JQo",
  "key11": "66a9Pfkw3CGShuPuX8qNusQdyZbjftgjsUXzhVAy5VEJjE8gtv9gSxR7KkcJrxFyepCKMjiXAtLDMBKTJ1e4NWif",
  "key12": "2QMVQSu1R1DJuu4sSKB3iqqPLJph9Q1eVedT8AvRMALNgDdSBJqHcP7xiHaS6AeSV6QU148PcL83v51ukiqj6fys",
  "key13": "25dzxSxcpTBQKeELJVS7ipUrGiMidWTyCEDHAVzb2cpVmtJkuRXVq22BqesyPsbBVKFcN8GZ7Z5QvqaKzfvEXJwe",
  "key14": "pg8uFwhtGrURXxe8Ppgq2cEGjyFAWsYjEMqETD7pzHNjxb6JgtcJ17x4xvL7rrSb3Jupk331F2NvhZjYTvEBdSs",
  "key15": "67EaDHr2sf8g8KV4kc3yACy275rfii6MUn5TWjRzSFwLhEyx4UsPw3hBjKGT3vRHE22y4SCdC9PvUcks2B8yjpFm",
  "key16": "3nyPc1apCAtZ5BHWLUsw7LjaZqTXrgicbHpHCiKo8yGBf38EtKQb4XJgYQYo2iQpqRnKX1q9Aerijbxbs5mFcP6k",
  "key17": "5NdBxAGbaGdewmPEc9aj5Ksz5vL9dFESvi6SRu94keh5VRTo1khGwf9FDAaFmedmkVxh1d8XXoY2McBcy58bQCfX",
  "key18": "2adzhRfgUkZFRNJm5qCqvf4Ka73u3wnUVS71sJSz3W1UgcBw4zxnwwftGTXmhMpGDgSAQppiyK6M8dddbrQg6hGD",
  "key19": "3Ynyk3q8bJXqoMU1DKw5zB3ccsa34UCTHkgL8F8Uwyda2TRHQNjhjtbAatkDsGbue9uqrGPiQFt4UoXNmLzzHFDq",
  "key20": "45PDshd8CedgF5zQwbkxDqPXBAxmZHAxdqw4E9kNoE6aSTTLPTgsnEfTfVGgoRqd6J3q6dKgFWKVfkbTiWsAxAdJ",
  "key21": "2cv9LJhSAAEEN9nSCkANDU17JUSa9kAUvAoGENZQxm8uLxtbQfp9EenrcgFzrsCbY9PYQbhwZ5SSKbF888cwC6Nv",
  "key22": "21TQoAATVk6e5aVjikmLnAk5hjJwmuEqfVGNxUzJ5CaxU2EDuqFmfhJkLN39CbrUojnYvHb138T3qW7t6rudjRK5",
  "key23": "6771emEm8m1xf8sPBLPKESbBxHox85GenYhb5dybm1cH4Cx3a932EMa54tcUCfJiPsCSvHP7DyhgN7YUkpV4otzT",
  "key24": "4a7nmQdK7hsbmpeWN8HYtondRyWj2SnYqAkoF5wbF1XsmfbXxj7Dvd56A7n2DVgwA1UKswRGZUbPFru5UAL7MRQm",
  "key25": "4uhPmyhBZRmb3oajXKveMTfu1YeP1QSSd3QnzoZpe91fpHFUGsFeGxma8Mg1zNbhaT8UDfA7erzz6pXkh8ntv3QV",
  "key26": "ts8Z13bzr3u1qnjsU4btAZ48CBcESxPQ19B43azXMbsnvy9AgaQ1QEtPFDgk4xdg2tQnLv7Bm1gHvXgWE4ZwZ78",
  "key27": "275G5zuBWAXvYu6wu6azBbNWuXGE1KLXqE2XqsvJoVthJCx8tGxhfNfWqALsF6nS97mio7oz4RZnAdoMRzWa9qv1",
  "key28": "3ni6XSYLZSfTYJGZXX7xJMjHYZusZ8qxzy7LiZvxQdFSdcK7kefHpgkCyicQPSriU7s3M64gqiuK4YefL5safXaA",
  "key29": "4j8YB1sdSk6UtMJvujqVKK3xieNvxMGhyupdTjh4u4DCgfwiUHxteamyncfwDGXr39xwht1B6updfAKGC4zeYHaq",
  "key30": "28ygmKde8LPJUSYJNgreoVQ2aapsgDFvdzFXz4NsFKqAT6hDE92UyYBLnugkhNSohcex9PexpsD3o6G8o6aGupXD",
  "key31": "59S8jgdpEgQJTYZJVa1zYasrwkwVW9GK16xafBMRFEoo8L4FPWZVNz72Eo24zGuUwhyTVJU2ozhEhtZvZvzifZf5",
  "key32": "3EoHTBNwswU3HsbWn9tKFM8gyW5grQMCaNDTkhGwifbbZQgNapAXxU99w6Zif4UNbwSANq9FoDLiUioKbFHKQhiE",
  "key33": "3uAevzZ8AfRRLn9AeUnqUwdmF9yj9ntVw4VygGj4Q4HpKPXNZTFJp3BvkDWS5o9rPe7Mht9FiW6Y7D3hb62Wqouv",
  "key34": "3GQCkn89MnqAZexaMKy93qSZxV9KwU6Ej4HgXipYn7VqDamRBaXEudPAbb7xAWTNnSAiBtezYobFXJ7NLWff3xAq"
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
