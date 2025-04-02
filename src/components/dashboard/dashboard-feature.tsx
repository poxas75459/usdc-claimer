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
    "3tBoy2UKNwKnhy8Xt9TAyQwQwnCAHkBMNjq8DvmZywMF2DhT9odfohUPd1WZP5cfRviCPLrqsDy2pXJJFoV5ntnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28hx7QQHZfJJ8mwTiiCRVuhZqm7apfY9dgrVX2kvVxtqu1kL8wD5Hq3GGuhpzp5Urny2kzj6e9CvRoeDiw4A7RBo",
  "key1": "5BukHTn7NZwEC8Cs7dJYxVU6pL4JfstKgch7YTozUJaDiHgh7RXGL7WwKFTRr5Fe9s1igG7CmZeA7rXWMKPxJdUf",
  "key2": "2JQ9zKfPgM2i2x6yuaZwratujtC9DtazembQyfbSQLje1fzGxL9uriqroYWQRU7MeHe5bFuxWLnMipeLpPq6JxMq",
  "key3": "dVjhxZAEFSRtSdyb1udzTUYdEaq5nX4K89B9D7Bgw3DGkRUG2vRswASvGGwZrizHogUut54LLaVaVnbVRCqV9Ww",
  "key4": "W1s4JLsZfApwcJrGGNu6McgZRVpVF6EqRFE4zDJjybAVk2sDeQVvQJmaTxVLwYSwaJ8Xz7Lqb7USKnPwDTngzRF",
  "key5": "2wVUXpVZhs6u3Q8TJzTD2tsm3HNME31FXV6erd5HVtgVaatfqgZui5EoqU9uFMrptMDwmqb83R6ba6N1t3z7TvN3",
  "key6": "2DkcX38XU3bECppxPT7x2Voh2dp9e6YgibBaMznGhv4jRpj1i4NEtV5rGVjZZocjr8hzTQKxQ4ToDBqeCUAqF3aG",
  "key7": "4nxetp46tviNh8f2sTyeeAif8Bw1TjTY5uaNgEJq2cBBogdKxeDdabnvafHfDpjGivKGAejbxmMezzYkqe775Xof",
  "key8": "4jGJ8TPUC32CE8a6zGooQegMFKR9HSaKTcDE5hY3t8v7GufJVLt8KLa3m1uFscTBMAm6cXW3ArsKVPdqApcqGtTe",
  "key9": "5ucxFJW3nRpeSECCJcA1aa6J8zVSjWaeiDy5xinGYcWY7KBU5pgF26U1AJdvcBAxueYo7596iFedHzM9ntPvkCmh",
  "key10": "QKokQpqBiKccjgax8SVMC3XkwzJXh5K5y5AvieviuUjzDjiwYojR69hBXFBc2EcMduzpbwq84PV8qLsvRx3tiv5",
  "key11": "4JkQ8pf2huEdQkGEfNCHdQaJkTEk2ohSkvTHtxUrpZySsPbp5geTjpxDWJGkQ2h9boLGte7HF1YVTnRjcuU4QYFa",
  "key12": "UyLTpe6qYuH835aZi15VW2RdAgMk15fdt2rVb3TYqHMymTkGXGhduVXRGgjszQof32cm9xXnGE1eNer3SjxbW8J",
  "key13": "2UG33yx3WcZxMCoJQpb3tDZ8mJjsb3vyakwbJ33e5xJCeqWN5RWgqmyh54X3LtCapXCYAr2sEdYF7YQNESDiE1CG",
  "key14": "4xSpZgcnBktQaJuJt7TaeXoLQpnsHENsW9odzg8vusLjTHJJYuL112KUiHhos4GHw5ra1mKdigADJWTM7M9ULwZ8",
  "key15": "Lf38NeW4LMwcPSDWsKry495sPpsW4gL4hox7f8mYAdY2S68KF3BW5Udpz4G8JFFrRAuMnc1fG4EVFkyRZRQpLrr",
  "key16": "5RHtRhdPVd3RCsJgp3DWBxB3p6eL1t6vabw9oaT71KjRyXuVcqXRAZW8cR6adnowHYXoFVEdNQywQUCW2Etk5BFE",
  "key17": "2sTnjU86PMNYeoCprhVugATKJt28BJhgyP3JQ9ecs4CxyF7f3TKhUTThrkErjLbySkQPfhyDs1VFJoLaEkwizEHC",
  "key18": "2HVGhj8wyYvAJUFkKWEbgqsynfaH3adQQjqKtcXM2BpHiWRZBkFBS8j6DwHHTA6eyLiJyvYtWtfSjR8HbibaHWAk",
  "key19": "42ZaiS8sn2RY5ubZtiTrqRF73NTnL3a2QEh2pGQfBmeih2whKcfUCrWttTE5ZPF2zNPW7rhwq1TztN16Xm92Bhn9",
  "key20": "5JWYSrvxxFwoiPszeY5RVgWpDANmsDFR8VjfXwQbkoPPKwXuy2C6orKkD53XThifbPfNHtdoEVCiwgHPSJPifeyp",
  "key21": "2Fa7v4792y8CGvk622KQu61W5BFhMggmLg7gwETMUoEui7nXWD2hwaFmiTFDkxsz4JHaPpbDgMoEavLEkeisqJFu",
  "key22": "5XwV7cBSmAt1qsbhN7iB9KwoWBwnjvgmS9YLQ4vdz5enLJEZV6iuMra8trjbbgJMLd4dmqGEvUwjx4S1UfAattej",
  "key23": "MD2Jez7CxqYhpaPrLDquVUkxxYqQmdySBDYQNeEj8U9haf9BxNtzak7dJYynRecD2CDreXSzmdKrLTMvU5JpAJf",
  "key24": "2m2K33mhVa5mkoQFpWDbAGNopbyiMheehCYXdYCX47K1yW6PpGG3rxM8tK7EG6BB9CFSGR3wcPuarLYWqKr5Xboq",
  "key25": "4MPtKjSQLB3VpFDKddd58R1jahFVPEt54aQwrwNbyrZTWFbYP15rUpNd2NEooQu2kevAJhmRxsFUscd7i1YJ7uRW",
  "key26": "4yXeZ9pSasnC6yzNiZd823pdnZ9nRFotj1veB2q1FUdJb8Zx9cjawLigmjdCkiKVKiR1odVV8iPdU4iXzUdxXaFp",
  "key27": "3dbbgzhnNGuuqCEb2sqXbYkUS4Q4Ks8kpbZsAom98iALWuKtjv5FHYzEvu86fkFCwJNjRaYctNEMatcvouKVubTk",
  "key28": "C6GVeiqtJRrkmdxBfE97kKE3bJSHN28S2LxYZWjHTdXiaCnTDFtGiCWEgfeH3wnJz3tfK583J9pjHns8SBxp1ZU",
  "key29": "5fZ1sfu8fm7z61QeyvxKEJtSDVaXoFh6Pny2fivbVyQJqZEkeGeiyH3emJuj2h3sU3ktevJxBys6AN4PToEQi3Pe",
  "key30": "33c8v3mQsBDPx9bTXeksyvVWkudYWDxDN1AZbqY9yBFf6TLLgSTXeVzovh8XBx7BYZAzPTVcCG3m55Zi28k4fZGL",
  "key31": "61sd6ZyhJmSXCfCo9vTHHRau1u9TWR855pFHzgHNPP5rrUYFjBFZKm94zZpecNSN129H9CA7xUJAdzrJM7webspf",
  "key32": "4C42ZZnVkNKm6W8jt1FomrDrcz1o6aAgwVHJAxJYRkv83aY9pB2k3wikgbDcvYCZtEJmxSxeT7WorDedM5v5ncTy",
  "key33": "42TMuxKikDt9y7G69oG4W6ToQaMSwZm7Gn7dtsKqmne6YDRAtW3HwjHT9WAhvtNdQnQBY91sgJTDTS8irnEugMZL",
  "key34": "2LW2UUi9B6HvaT7dwXAW8NiAyZFSNGepMCEjLrYLMPEDPNponwbWSjqvYR9MghmuKJzXnntorQGmBsdjLyDkQQTN",
  "key35": "2yepyUdEZqth3FLCJHAVzQaUBaB7Eckb9HRzmmhkEwtwBoTrsgnRQAuaqZRs9M1AbMSXgNguQQodcNd8QKtfd6zK",
  "key36": "Xf8BGaxkQjPPxRYJT9aP7CqHPVNzgDduvm95kPQKQ4heH66Fy8D27pSdhFzzPHzibYjAQQZM7WW3z1vS5MXu1Vw"
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
