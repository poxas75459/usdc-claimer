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
    "f2oFrqkksnWHj6fEixyE4PbnB48mtAjzVqgiyhc2266kPpmStYxjhjGEx1VQ6vCd9Sj6sWiHP5UzNUkqrab3tWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38GyrF8TkdnY7HhT6AZ9HkssBfxbzZUEhq2DSbmMqvGZeFhFXyWBtjDN9VxhpQDu1GiswBNrVQp7QJ5jpwJWDDh6",
  "key1": "55KKhWyx6XgZkn1d4jCNkYwiRVFrbrFT6K7nLNgreD1LxiqHjd9ZMqJ6QX1w4T8ytpHExQt2ctLPytSvWjfq6erJ",
  "key2": "4ii8bGdKTMJScpw2XcKJqcp99G4KJwY3ZX6Sd1ZtgH1AKQg41QrLZJvvXwR4Tt1g9E8hxMaQMqtLjHMauHy14XEP",
  "key3": "2hBK1MmPazn7zmYnioxXj5mL5R8iKPnCVf1oAmDecbNFPdxJUUnTV6miqkdLeFy2nkEN5u7a7qP2DbNc1nxfkzwt",
  "key4": "4R9dogXTkMJdZkFtDAUJZ76Hv7TKct2nTNurgnRTY4xdQ2qdhiLVzAh5Zo1gtcMyXBTF4id4GLUDPa4zhrYDfwf3",
  "key5": "4fGAPGPSV42NcNw8bLMYaoiARi29VrsUGuidpcxZtrjHbjQiF4E3YxV8UeGqmPL7eYW8xCasgtFUmmiTWqxYepAQ",
  "key6": "5TiPXUTLKF4VFUJEatf7wnQLchUhuhozArB2c4fvckA7Hs3EUBdR6SHQvEFohekXpyfo3pwgbCF8iiUsvAAof4jx",
  "key7": "WYtdx9HGGULhuKFpRP3v4YrGURKdPnoUCuEajgfL3rkUrYDJT3Tg7Hn93H4jG618XeTAFuw6hgPvgdJLyu5e1Y7",
  "key8": "5TzvcrD7ZRQcac9A7PS3V1pyjKxfr1fkhaVkP5SdqrJUhwFgY3psPJifwuBkkEkjTz6v4sabyyrEds99hEx9vjm9",
  "key9": "oh4kNe1bh6HQjK1yFuHZeVvU3hXEWTvug6hbiiWLftEQHp9iUN5RYQPv2m3ajL96dUiQRRadnkweo2Wm9xG6WTh",
  "key10": "3cux2snxJMWTpXL6xrxu7iJ4FhbQXf6nsD5FbJWPKZvkzUvheEJSy7S6C3Gyyeeezjutv4K9aef483v7DcbTMuZQ",
  "key11": "3ebRqFmhh24SyS7gj3wQW7QUyaWsn6simVmtEvPVUX8u2Vzyw3VoQcRvk1ULS3wpMGByYrnWy6WqKqT3snKfd74Q",
  "key12": "58PF3GQ8n25qnTR1tSY1WZhbc8i4vv7tF5pDAacSgPqr9dmkXWNvSRDyGXD6SRWLqvMHVDAxayd2RSzpWgdGUXwx",
  "key13": "jsuZuqSWLAmSFRHNbfm6EaWQSCcMEdCEAjCcbvj1HnxbkfKyhVjHtR5N2us8V4F5munJY9bdF7f4aqYkFisBsRY",
  "key14": "2SMqaqbNXwThrSeNwffkbBCfJcLXyeNfhqfXVeP5EaqNYn1PgTaky48UkBMgg2127U6DbvE6yPzLvrfFXqe5Nfwg",
  "key15": "4RqwRw9hySHf1CxxPjUViZww4PsVYpgcQT1jTGgwrSW2aue9fs3Ewh3ou5G2fQXLuJrKpmd7xmi5RBMi4Mf63utA",
  "key16": "4EDzKGqXZaapFn2rAzKpDqxCLQqJsWVqkZNtTr127rFomiKjf7oZXCUo9M6WeZSD3KzGA6RRbNfff9nrRdYYMPqk",
  "key17": "2GLrJdNPWwJ1DH7tjnEvcgHaXFWywMYfwxUud8BXNktbfmDVCkpdnu4AUesq9SvFeWjjzozJrfpYQCkJMY6gPbvR",
  "key18": "2dJ782HoiuHH51oE6ox5qxhqV5UVFgkkS4qYLRLkRFAJQhvb7sFMyCC5nnDWoYuaaVSu5FjNPkvkHdp9HSpdMGki",
  "key19": "3XQQg9UVKKSti6CBWyfMKmNcnGWDMMzBodHz26GfcmbiYLHBcmQhCzVRnXfUf47AU6HQfEfy4ranEByftgDdyRp8",
  "key20": "5EWMhz51esJd85RBovpiiDdpNYC3SWzpP19JGCWa9jNzYNTkz8RsVQM9oSAGac4YtPspBxyn2uHUQGFaGU6GmHhm",
  "key21": "4RhnQyBETm6KTPUwFV1mZt41oCHk8XDgg9BF2xr18C8NQJLhCoJrGxpCEnv581MAWZWT1hineLB8d7B1dASEPQ5X",
  "key22": "3tXoqbHE2d1MKenHvR1VnRvVvrmvpeNA2kTkduyc1mHL4xH8zD7ZkYNcmxcmx4K5PHurm9Vh2v4fasqSQ7LkzUDp",
  "key23": "31tojbgTpS4LsMHhWBuQr9Y9y3z2Lo9RCfquq7uPP4Zq3cmRXebiWnbAEoJeRYoKfooNG7Yji9NhnftzVjyicyks",
  "key24": "3SpjdPDPGj1bYRw54DMQ6Nofk6YZatVi6qrKW8VLuvRukxZ7iVgEgGkyNCqwyeagTS4qGoLMihTBA1pqV7HDJZpj",
  "key25": "AuJCtVZQn5HvN9PcYyPpWGHbpCTknkTv8tSXFL5PFzMFBMAYF7sPvAqkGu2zgmbrWfGsyLxLyeGimvPJ6KdkUte",
  "key26": "4AifoaFw4uVqHEJYR2cxLztZ47geGst9trLFAwSzSyRY8G3V7eDqT3epDSki6yjDfsbQM2Vh2UJva7sNrpFZRfbN",
  "key27": "5tAt2y3fBF6M9Lk6SUdJV2DZiAofKBMJoxAwD5axzwvHtFM2s4YUN73LHx5hSyTXWb6v2y4m4bzB514JVyHNFvgj",
  "key28": "2jLwEA743Qbbb1qxyy88wJJhx7ZbkqFR16tKXFJRDdMS4fUsTnQoC4LiTQYfTjm7Y6HsjovdCSJzCoQiFzLLS1u4",
  "key29": "26kGtu76YXz8zijYhx8GZJWD4K7xKzMm4Mow2YsJyQC4YDGjPNHQKGnKAJ6AZUUidXnaqghHJRcnhLvF8kumA7Xi",
  "key30": "2FiUjxzUsWs8EVm7enGcypYnT65r3JgCeCgnT6hDcGeX8fiPUprfgZgMcZvS4tGJMZjFbC2MbVPndvXgGr4iUowg",
  "key31": "4oyvSBTufxoCwDD4oKwiUtcAz8mYep8NQCkvFjJa2c8NjxTzSGd7jFZhWmok1JPdK6mgn9dqzr5Qh2jWMo6dr8HX",
  "key32": "5YpLHUX81F2X52x1YqHmuTjDAKgUVAf98jL7Zhnx5SNu7DEyRWGD2yB2h8dgQD1c4Yn672dSbayMBTgqFr2n44uY"
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
