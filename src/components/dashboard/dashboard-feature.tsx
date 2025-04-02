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
    "3CohtmsbiW8TecCjvxqjQBQadZSdQYzR7WrNGSCP87qWbGyLC3jyHaZjNPgSaMN6QjrfqwqRVaVZgbA4xWa6Akjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WBiu9kcp1vWHxjLBrjyQbt38icPEV4hSHV3wrj8qZXTNVdkDwdTqunqbdtrkeEYKG2XVxzVAXiv53fgZT7bcbzV",
  "key1": "2QNPBjzSz7pNGz2dwSsoy2AvXaGyVtxXLWR51Ev5HGSBET5Fk1Qp4SJRtG5jmpdMwjVCYTy8gsbdhsDqbTLUsK48",
  "key2": "4EDtjA6zkY159f9bB5cAUwiFsBC1K9UZ8K62m1mWjByCm2xvA7g4jY87pLbSEon18Z2Xo9qahCXh516p8QhmZQ7k",
  "key3": "5Nka6i1VGC2DuBRCHSAkwFdZmivzbXfhHN2mwwMrene4eJpFGNaNUeLNc48NgkLeLF7dvykL2d5udkMMBESY5ve6",
  "key4": "3dffHiGRn4brhtVJrnmGEUTrjd4utLcehtcWgs6Nrx2rMdTV7UPVxoG6sGfuPy1JkfoCnqjUdwhMry6Tqe9vFBK4",
  "key5": "4hCXzDEm2ZQb2sGwAbqQqeEtWEgM7Qd7aVPTNg1GaarNPvbUUooSjEpEBnTUu1VM6VhToHaN3wHXL6S8L6gueoPV",
  "key6": "2EEUFN3h3Z1bsf4GbHQJa8GwoMT99XNR9iaGueTzn1mbpdeyAGxXrYK777SKT8CHVmwYpsJztggZKLJdLC91upBQ",
  "key7": "3mLLNTLTRWhaBXx3PmXP1oE6rSyZUG6oFX9xPT6JqDwRbDd1wvSWkTWaTQwZwThcHZs5YfwUUqCupt3TYTkpk1W6",
  "key8": "2kp1mWXABNLvZZjanV6bRA8cQ5sMnWWkdgP7W4UpkHC8wmiNAHfquyRcd7YWn5bJsBL5i7VAxUNCJAQBZxAyQCdi",
  "key9": "2HEczEmLvW85KkRNsevisBRpSi55gibyAiNQALYn3wfX3Rq9R553vATUivDdVf9KiCQw9LGPqbrdDhaiWtmqu3bQ",
  "key10": "48U8xiSL1G1jdvnyVeNJxtodbz7JbtwMq4PE9y2Q6LSvVdszQDeUZKZugvQjt8faENsAuPnaFDMN7jXEKwsYa1NZ",
  "key11": "3MbGQVibXP42gFzDWmCxrG2oEWAJV7ZFtQYBkAqPLeoM1qxdKxsBSmwJutHH8f2sqTjpY68bGyyc1EdXuNNZxgDk",
  "key12": "8AipWeWAQrorvGjrcvTWU17nscDMybzZCWM5eZyxuaFKYBuHHXjE5e6Tv9RRjLxL6bvH7zSKu8QiKwd4cZ5Jpz9",
  "key13": "4Sz7f3owa5jnCWk8U1h39emvSjcKrZcbo4xd2NnaTSPsYx5KEG2kS9sNWqkMr5B47GzhVsT6zjh22tSg6MkbGyA3",
  "key14": "2KgABSDU7UMxpYP73QRbwg5Z4jmSzPfYDoaeDCXwo19zrAmCagQSQY3qrazYSov3evqUTkRNNsxD6pw5htPoGGTC",
  "key15": "2wLstcTPENVgQAmp6fwt2JDQGJuEfbtAHtzVAg6ptv5fFJJesbcToPKWJ1tXLvqGAXZB3a8sjSBcKH8mF3scWrQU",
  "key16": "a24xE3d9HcVN51UhgVmggSDKQ2Dk1vUyuMwtjGbKSPQhSLoKbhVZG3wL6f5QADamNnJFwAnEUXzYjZvZDFqx9hJ",
  "key17": "3S6MSrUfX4tgiP1WVRDwKVxNsQuj6jYqQdbojpg2MUbnyTz1r1F5zNnJX5iWQCH4fhcPeok4oVMZVkydvTiMNcpn",
  "key18": "23CUJ2kMqMfGxKFyq2tKjREECEtc1KmRqn5zUZVvQSHpVKbbMrrRKE1LP2SjZ6hGGES3MYUqevL6en4Diu8UKo8x",
  "key19": "FAPvQWFZmLwj5sFsWbSMe1oCYwJxBrVKHM7o2nL559hTiHMZCYwqh59zT5hiKmPD9Qj1dcvAzn1hwJsxhKiM47h",
  "key20": "3XLiUv8GyJhrDiFJQU13qSvRGVr6pZmkGFg6AegKDgLAeo2XSBXRWR4TeBx72D6PaevHb7TbWo3MCjzJSxrpnEeH",
  "key21": "5QqMFBUNsL4adUznfoM4iVU1cwmtkstQT4Sn1usYbdNDTvmx7Ze9svmGtQvLK4RQWge2Cy6UbKrE3aGnxNuTad4D",
  "key22": "2PQtxo3p4QKnYg8pnZfEjKwryxs4DiWVk8qFgUXdnPYmEdLZr3CFG1Xxxmcg8JYqx8VcG9QpFXC6NAsSibozFDJm",
  "key23": "4peRtxMK6VBmepnHf3L6QjFgZhNnZwJHHtuijWxMSxXdjhGWDhFsVRQz18mS2tSPKM4UW8ynQe87KbfRMxUGwpQC",
  "key24": "BkvDxY92DvFGkgSc8nEXgCruyZe4xDLhrWmUYdALg8jadoSi4YRHjtYyBsM3MntGZ4x2ch4D6z6iYhq2DQpXp7c",
  "key25": "8BiLRQeELJDKoSL6gH3W8JfbeGyBTRjvwKf1CRvg6qqV7t491fMPPZ8Z8tej6DifgJVkNac4ezBPhwynokNHD54",
  "key26": "4ACnXB9FzJ7rP8gDExRkvfZm5QCwwKSNKhCL7ngp9h7zCnuLLHYKqhomSnfGdHWS5rXrop53gc2bc4oJGSm4S5Fs",
  "key27": "3pYQgFCFiaFVb2APLs9SLzMhix8M8mkb6EdgQMoKH4o9a73CcbVy1fAYA2oC2nvEjNBBP5CzxEKiRsYgThkZkxyQ",
  "key28": "37pBFuqbbMNZq3rGJ8DiCPniw7LGt4XvPncQ2evfZY8f222PJZpDjVEoD4JrXdahPk2y3ed251fckgCfmPu1znQE",
  "key29": "3ggxHLruw2AK1fdsk5UvZRgnAMDm7iDzM4TTK4iWFRjmBRXPxwjayBVuNtR2cXg749NRi1UH5p5QQ8Cvcdjs2y8G",
  "key30": "5MFfmYNiUhXx9262JWej6Kd7GYrSsenQJsaVdnpKxnTa8oDWqRwpbSdGWyHWgVQapQ4eAyMb6enp5Akr7qFmnaCi",
  "key31": "4FGcdqHMmd7avMKSHmKXVcJQf28xCzh5JEZSzh43tLeaDQVDndc8pU9hdx5xPrYGqX2hTQRUjYg9KhPYCBDe6UGN",
  "key32": "3pPkNqFYWA6NbvQtZZBJGqQMHuy4PqodYf4DyRn7r52vxrTUeHmP5E1HxNtCkn1RyuDuNgHEioeGdPLuns7KjSi",
  "key33": "4WJcCzc39txcADy5eCUUhfYhcHQNfkbGiQKSC3hFouo9em6f8r67pmNvXWnckJpmf1wq311eatLP1cbEa6weekmo",
  "key34": "4GLQuidTXMDpzGpuzrzwVd4NqV7bsH5MRREjRywRk9h1vrRibvFNJgCg3SDVuLcoHnmmc4MeP5sZGZt7i8udkk3r",
  "key35": "2PXTY9VxifsgofWgf4B3zzSSRAZrhZczgPfDU5fScRnJSNvikctZH7vFxcrUziS5mpETxQSFudAzMiwjEc3JyHbe",
  "key36": "4g7wSCVuNukTYfDs4ReWL4sGixrqRQd3oZgC2mDM4fMinbbQQ2uiWBqwVSET7nCs6b2wze2c7CEqk2GbMEDHp3E7",
  "key37": "2W1jUdYPQToysh3TV1DBxoFWiQk4YSANYvomViJS1kPbpWpzrq7kfopYxAsdnrSNvRWHExvaBauZL6Bm8hcFvDrM",
  "key38": "PZAwSbk5qKfBdeH6s7tivokjHXZySDXVqRDRmAW6XiFiWkwNK1C8usm64eBmvoYyEGufvXYnN2yLQLCBDg3p4aY",
  "key39": "YoaZNyBELB9m7LY2wSeRD2yk5f4sbDPdPTRb6ofjguowDnNKEDatjcy1tApFF5e5R3ENRTG8ibDDxMNYqWtedf8"
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
