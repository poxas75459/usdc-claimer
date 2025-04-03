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
    "2qPnG2JWJNRKZD18SZEm2GKP2fKje5oXAiUVGsYXRpxJQUx7wDKqBUSW2aW7pqq8RGoEhF6NYTEaMKWfoqnntMMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Sk6tfdR253WwFSE43RxWXBdNZt2piJv9EJrAJ8cfVDC5iCdG4Pad1gEYAUrbe63vMMWWfiM3W1KyA8uEEmyXmt",
  "key1": "UrrGWeCc4m38LvP69rzQZ819LzcP2TkpaMwW8nyji3VXWLzpqHchievSxjhUPpGNaHCg8n1syV84NsTYCvDPne9",
  "key2": "5nVx4FHrhY5uNSFdJYroL24bBQVAYGdkkBDq7CrizJSjYXXHT6XnRsJMrEjm9oP3thnvDCUu2QM6aRuMEdwQaPUa",
  "key3": "3gcqkBQFza989McZ38gnFu48sLPkjgtzfTyFx5v8PyhDAQTNcZu9M1Yi9HxeY9mkzxF7TQdVW3CyqARXkMipMGJr",
  "key4": "3wEYENAE4fKvrdcuJxbQKWfBuaBZvDjSZgQWyh2hNhHawRvTLtnjKLE3mHSYhjw5R7V7bmr4r9eRqvdAJQcELY7N",
  "key5": "31FrXqc1DSaQBkgCXjuGx6pbWCGrVp8Gs7H9AsEymXhuyEQayKEHEHXTcehSo4WnjvGcYP2SumbMCh2fSVUzkBAf",
  "key6": "5RuwaNBXqgcUAiuWZLCZxP1ZtcESGW9aJGPBF7HKnfUxVoLA6GNzAwou5A5jnxXW2q1VVJ4p5z72TovcxS872znD",
  "key7": "yq8TB1ZNqpG1qAKZ4vmSqeHztyPbcHhDNvo5qWX7NMFRn9euzEDaYrmEJcy7vabsCxX2voXQ2BERNT9nYcMq9dF",
  "key8": "4AJ6ZyTi42Eer9fj81h4Rqqam4DtaXMPyufbbGvf9ZebtgZAoNGma6cybsHN3miwixVjreheGTHyYqeXLncKtvC2",
  "key9": "54GPXRZK8E1yy7XEfHYBTmHicpok1L8i3J31jCYRmvNotijUy4iKmsPM4RAxnS8KYr4cjaYa95ikmskJRTyYNtu",
  "key10": "3PDUbfxxk19T7fA375pL2SwBBMvNqdPDyBgYb4tT8Eb3RDY3WQ9CGZb1Uf1SVEkXAuzdiG3jufQQz4GoXzxBFpB6",
  "key11": "7xpb7TSJi6jmkEuQSogKhs6MZXC9DmnBfdKBrGYRgbGYEKNyMSjJ6fZk4ATqZCZALS1SgrQFidwgj8BRxnE6JzH",
  "key12": "2oaJUkTmynf5vnJhX8VrhwfsaWSa7B74AiGSTU8knkgpgYJ2RVPWQd1CNX3a8epvfNw4hGkbJ1aXioG4VLUb7MjG",
  "key13": "3cbjrwDhMZwWmXUzzPiu12T6exn1iP36hUZHSz6513o9w7vwU8jKqmxB4XyCvAHVW6Lh1dhwAhStb1TDZJ984M9V",
  "key14": "3BX4JKWteqLtHBBwHSM2QAG9cJA5JH3Zdc8WhMqJebXkawS7sskFoSum2yyVuYY7Cb4DkMVVuYvXXYX7iCt6yFub",
  "key15": "66Hfdg9LbBm7tAAkTbNeNNWH5tcrsvRkdLk2gQbDcdZgXXYohW6BsnAXcxicNYRR66RjLrb3gW9SmiPnWi68Ficz",
  "key16": "34yVHymHzpVefb8PtfMGCnN1NQQhzEa1wkZrT1MwraoZWK94msdJ8YYL4WuydEDCZzze9LUq39JZEhDipNKAQ2Hh",
  "key17": "53Erm4C1rBtkH96rnpgV5agJhTi8YAdmDHAPrHzqqRY15dWywiYAaD3sxDhYmj3Bxn3SNSCQkT4kneTimjN3u5FY",
  "key18": "4rM6eFVhvp2Ffc6yfZydRGduYezQkKda8uxzjzgwg1Cc8YhwXA3hNwvWxXHe2zznTCCQyA2vGzx7TQvjaaL12MmT",
  "key19": "62Ffa6Tj67KoUoP5GeKDgtNoc1Ra37JnM9pbMv244wW9BHUPquoE4xZpy5uQjzAdbFYNygKD48ACY5hfg4WduB9e",
  "key20": "dtErGDwV7unJPNCmhUN9sLHGfZHEzeSPPpvFGYUimuQe9WCyqqnKZ41Qx2icN51PgH8bD3st3RSGd7ke6oBJ7k3",
  "key21": "61RCaAWsfHjuAB8JBTvgTCR2k4qgh4mCHkm127qqHp4Us7JHotHZUwCXtBKGQ7knGQdT5gWUrVfVasWoMomMXeUn",
  "key22": "4LpzJfQjkSkTUmrghwAhxy7cLX8A4VY56vbHxiGCRa8XyLinSHLkFeUJmgEHq3nVMkC4ZvDGAHvTSfb8wqFt9EcS",
  "key23": "5vtJnjvsXhKp2yhpYUznby4m2sJ8Xy2t7ZgRZpQWctrkq5mtxN5C8oVmkgwBjxFfi2oPgXf8YEnrrK3MeJsP5NBn",
  "key24": "2SnRqeg982sTNVAqmwJTwydtn4KQTuSpceqWGcSGp3r16fjRJvz8y4RrzYe5bD7rZNHCB89wHthw33F3YchTK37j",
  "key25": "5yX4xYFwueGLWd9Nws1xBaxDbvzVXg82EnSCsX5rAmLA8zY9nNcPPHtUhMdrRJmHq61fe6ZFgAXb9okDiUUYKPVP",
  "key26": "27UXCUhadowGkaAsYgZdY65YWppaj7ZUKPVD9wmmniTKX4wbdddwazoxEBLdPvf59aWyjj4EeyqeogG8m1ZQhaCP",
  "key27": "52en4YkBxpYSQApqcCGWw1iERxk8XDYjAUtrNA28JvLoTd7z1587EgLkKXzQDRHdBuJXPbnzbBnzSsnx92PorCet",
  "key28": "2cJocaCA2fhSUVUUbiq4ztgg4eoyUvmskwo7Ukt52zSdyBz3hR8d7qo5GYSxo8jKjmWrhpW5fSK5qfTEt8bJvUrT",
  "key29": "hshQCvqszDvP2TY6BPRnp6WkqHM9qqVvT4WpCYrySZk6qCGaqoMTyUagN42Gqn7hR9zpwLSkHJWEjVytL7js6FH",
  "key30": "2zGLKYM5USC4hPvuEFUuNLbdfKmNZEfR2vcFJSF1tVAvz9EDPjxmB6hBRxho96Ki3WksGH4Smmfk5vtXViQTBWYe",
  "key31": "2QWfycshqmd2CKGWc1NVg5tCBhSdMhZupjCvdFJqq8MSAXgh8zZ2LBKByG2hVM3iXDMFxaHFMQDHTd2eNsZzzc46",
  "key32": "3YeEa7SAwHib6ryJ3qV1GR5GfDWSP4cExvNMh8tr2Nzd9pJHcgY6f8KkbH8qr734yH1mKeukYuJkfCLF8z8hhBbW",
  "key33": "4MSufLWNTteVZAzYXXNpF9vX9QaUupPXv993JgxPb66kb3yaBx49VfYLDKBkm1zYFNvpVegAozctKzZk4no9MH91",
  "key34": "5T3gn2cnmVft3G3D1KcNRJNC1ZDzPGwxdn6XJNeW9Dwx4zJBaGPbBG8T9o8PodwipHbM64izp5Mucp7xnb64XPV9",
  "key35": "3JoAdAgZ7XRw6TKio4mhVJ1XmshMp1Lk8Zru9EFvRCGbWN35ncBAkbY9GDWcmTCALHAw2kT96LPGFw31ojpaWZ6M",
  "key36": "4hboGGkiArVZPQPdJuEYZ7nSvpoyN34NrFtf47bgh9rkTu5DABw1YLzVuvTWoYmzCswNEHMioJAR4jebaVcQZqJx",
  "key37": "2SdGjUtDpMsWWudobYNpmwvgQqWCj2FDnV9qgbgBjgmTnYZM4KmmkYfkjsErHn2yt9BPtzZjEDUXzDoHGrVVjpfR",
  "key38": "zfmAUPfV339iy4DLnhAxAbF3CXQPgVW9nRW3zT3Lq7P8QQHJWYFFtpANY9Fxf8RWAUDVj3UkZBFp4SbBHsv2h9a"
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
