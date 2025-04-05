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
    "5Hq2LKZAaJE8hkdULKpqDN859hSPxdYdtT9Hvvc8Q6iNMp9F9Q9oLZwTj5GHHauZP41UWy1LUa27LiHQKpFpXi6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pCkYiKXhDEaqP2YRuKqqTD24k2erfXmmKPDsQNZ6ftKt4pWCrCUtgeZMBw8VtxxK4drL3JDmCh6S4jkKBjq7Uwg",
  "key1": "5jD5fPu5y5euZtzcfDbf9vREfJc8xDGPH3gBLGdJf4KPhXfp3ZSbVFYzqKsyAXwcQwgBvMwwkAad3bXHrnjMwq16",
  "key2": "42QVMarJHBGw3wYx9EGBkmVu3XVt14t37fFgNR7jwD99CEsBoihnBE8fBDUQkLu4wYj1qBNuHf7VmetiuBB8cqHZ",
  "key3": "4cakZ3VGR89ptTyHEDmvFp1N9NY2uccJtqCq3o98pJHiBuQDodHHBK1F3nfckXuaBqJ5ja1aarBzpZZsbjucq65Z",
  "key4": "27mzteKjsCSxxJmtPyyDu8e3je4ukp51MdtAajcuhUzXK5bC6xumD2pxxW4HXaF3sZDHt6FmW4vsWp5VCeMLhfqE",
  "key5": "S2tMyfkJbccAJR1PCRxo8EBiddHLv7Tvg9en9gUadbvNVpn26kgmVuRgxgWwvfqLw8TeXJpP67FivWgawsHXqoA",
  "key6": "4d4FNupZMmgjjkwPzTmHGg4f1XnzJ7EnzT31kdAdG3p5wJ8PfjjrbZHBW6C5wHx2JSL6Xv8sqFzUzUBXr3yt76Eq",
  "key7": "4PBUHGHHZxaKHcLvGGCoeuMbxKoUtH1sdgtHGCS5VX2cnreG8MPmCbzBQ9bAyDV6pHovz7Erc5MrvbkUmKEdmfWf",
  "key8": "xnsAR1duXoKF1Jw6LouSsWx5fh99bEoW5Yt5gRD1VtXXqjDw8uwFxbWNqNbUNuuN1RA4hmT2Dx2NSHz5NWLeJwk",
  "key9": "GoJP8brubxh7FKnUp1Tx5c5RFjDG5fDXE5uA75AEgKCp53UKMokD5VJLreSeemaHkRunBE8TiJMHXET2VZqHUvR",
  "key10": "5d98v5AiT7ggsdbA8rcuPCD1JwogvX4Fct56mLBG1W2W6DYP54uxKvRXMwSAqyTGeZVNMikNfxP1Rkw8E7Wb3Ljv",
  "key11": "63ZfekjfsXjjVX2kpe8tYbtuuU6A7d31FX42ZUL2eiWQdvFHkHsTZFznT8LD3FbYsLjNSyzZzxcohqiD1A1eeW88",
  "key12": "5FGVdw4h9PeXroXFuAqYoPgJzRvz5bg9dWnp2Houe85jFwV1C9VsPEBcAudshq1vg3Bd5K4tmZLQQyzsZTT3taha",
  "key13": "24VUiZHyLqqJPE2fC9ZJKri6rR2N9qheiAmMAL2ua2gGesQVNYqHQVqk29iEuDEFH4aEq4XadtA6QpwcgNGdRPyF",
  "key14": "hubdmbfqJG1jxcRekVTxXhpwaWc13E25q48wzQfyhGWv8uGJeyKU6yzZVrcgzxeAcbu8jLHtFcgYdRvQBnx7zDm",
  "key15": "3o594jHxjbc9Z66cVZEW6YhLZM6dHVVmM19WHazRZzNG9ieiFm2qPYFqscxK2NDjuSurV7aGhY6dbXUWh26Qpoqd",
  "key16": "w6YzLdghVXD4uFUCo3vKrvDqLpywmehDD7ogHqfNYk2kMZWEAbbWLriA8JgeEMidLz8sJocchH8Mk4qTCg5Ez4U",
  "key17": "41Pwm1tmapUiU9F61rtHPJ28yUP89atTnh63sHVFC3cUXBb9u5Vzaxm7CCTMB7fQmKDDawQeYiLaTzYECXBDpswd",
  "key18": "4d7aaU2YMAA1pq2LE42ZTcskVrJuLM88F2RtknjFRbXBsur61oLphmwjfhxRZFZAkDUhcjEurzFCeG7nVvhXHKz1",
  "key19": "5D9nrHeA6nbYHiqKgfDs27hvpDiFcnF6gRgobNJsn3LxxZJvFqBKXuRgYMe7dmcjaNrSREQL3pSXqVxd7WhjK41N",
  "key20": "S9VVznTghdm5QwYG2Tyk2xsK8frZdmY9jHp4JdwQ45GiLUmzdwPPLacn5p1UxHZ5eGd1nxMHr532nHBWZR4mEYT",
  "key21": "5AexREPRvXbmkjkrgJvDxx7XAhoMPpejbCiy8h9yZ5RE6Zv81xVyUjcW8o3tt4PCGca8fpDpKsp42d577Vwozuhp",
  "key22": "3ctDQvB14Kf3vJvBvJX1hWQ3GKKGzvjoPgZSUBmkwQoWBC63XGjcXpWq8GXErorV8Vxyqj8Vz8vBfjGRURAFT5ae",
  "key23": "5bZLsvWKJgYqRv6cQjBdVXubmByDAv35L7UDgRUj7JvrEwhXFCQNK4Btr7TyPYo2uwrXeri73nf6Pr6gZZB1pt1g",
  "key24": "4wKeWaEgGvMSz2xizCgkjdyt95rxDueqz5KVRdQaYERCQ3EcGPvhdobGz6JjaDootViMoUZfJUckcUUf5hJNxUVP",
  "key25": "4kZjS4VDTyVfjco1SU3NntpwCQihxx8ZP73kx6UzWWvFjvhBSxZm9RMQEHDE7cam9qVHWUEm7EoC3YcaurSBULx9",
  "key26": "5KfLPwDvQdiwktES8Pe3Y5Z8cfutbB5dkpxADTZdNBALJTcq1Ueb26npfhyceu1Mz9yfMTfRGMF5FiQX3Hr9x3x9",
  "key27": "NadKakvajGkdW6zThW4BdCq3tw1RmgjSJJsNdD23hkJb4sEjTnsLdX5KDvZyoAhDjEwHqdhnYMWK2HPEvTYdLYu",
  "key28": "3RtRU3hVFGtMtixBkZMMQ4WTKuhm16L5zuT9EU5B2xq2WvrSziUKtRHUMP5WfhwfHHXFhEPB4Vwe5K2DYDGQ8NFN",
  "key29": "6kyvpXhRjDtqJqbiYzkpJwwgXQ7ZC4xTAMm4Sxw3kQXjQiAXTpEqgWRDBi61YBnR3Eo4uCJi3j7qDaHFhUDqySR",
  "key30": "3uUEJjDdzQfJFahRDPZrbGUPa1RAvuhDpbh2113GWGMQJKBSu5G8ZdjZkoaeBk7QZVZMMvth4qpr97d7qbwUWmwV",
  "key31": "4HH4xtU8BEe1YaXaMUPkuVvYzGxGY2y9cqkHYkxWf2AWzchT7Dv7BYwMbxsgMV9GysADAxUY4NACBKdkAEY51dcQ",
  "key32": "3h7CTKwW3Xm7rVc2fb5DqFJU5VdFVCTQoxNo6N7og8vDdjFcGCFw1rF7zd6x9ymHfbQsbMccm1UKM8KuSRUshgSG",
  "key33": "2cgi2ggRKv8i82NpGgRBv26scwUu29kzmv3W1cHzhjMv639PS4ydiK9XFNmHAww6PLbqnpkozhtod9vQizBdgr6x",
  "key34": "4vdFjGGF1z8VvHmxNTkgvbCw5o9MY3UyZTXzd5rgrYyA4gPQA2F1PnJRj88xGDQXi6PbV2AGyuFSWEgvyqrSXFaF",
  "key35": "3BJDupWh4gEDjkHJpY6ttENabQUT7kxEDiTuP5JxVRzV72VixqPrdW1f9azVJmtSH2uKKebD8eZCUWiEwHjBumwn",
  "key36": "5JSiNkf72Y1bvCxiN6BkbV1dBZzsDJEVQkFC4fNUKy1gXnScyhLq27U37Qx7CCVZSpQ6SsVNKrgCUqmUJuuoG6pr",
  "key37": "ugi9d4KLuvaV9NZNLxGE4HzaqYmVaxDHT7xuMUmu56RWLueqQerB2vYYjE2mhSW4swLNyXmVoAvDHAZkPwVAbbG",
  "key38": "4n2cRyn6UajBN8P9CZf11rPR3H6fUKbVv8T4gnQ5mUopxuPxNvwuSNsGa5PAyUqf5JvwmH3m6N61rXzhi8canY7",
  "key39": "2VgNrHdP9QzphnwH54UArUjV43EtiDPwXq8pT3oSukvtUs6Ynz3kxrEYExm61ntaRGDgTY99WwHmJUmfZqo3dPyo",
  "key40": "4ZbU9vK2SSMxcdFi5W6jk6uWEqnqxoWEUaEC2QQzX11KytY97FtLBHJuwvqsKsrioUvBKa2czzZdKw8UVXnL1LMJ",
  "key41": "4oX1v4WGp27aJYQQo6vPgL4qgRmSfVFyRM4XGY1AeHg5bGoXTzvtCAWeRscQNxAQGtLM5ZQK4UufSfeazrP2hioa"
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
