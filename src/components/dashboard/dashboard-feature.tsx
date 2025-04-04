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
    "3LSvhsFSeQa8f9yqH22ZLe6wM3yx6SuDfkLSpGdpbcuQkpvxaQSCNfMzVowc6TNXDdBFvWv1RnsFRRStpaKL3EBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHUNKMTk6KkrqqBRf6fnmJesE9GmQyDsyeK92GkQpNJQcRyRjQkT9bNrCN8bz2dts9kAm6QGhbxAQYrW8Pok5jc",
  "key1": "XvZgpubhnXv5fJN3cgaXzR8zXn7GmGkDbGcdqp1S7fJrGxECqniZCGeXpfujP6P4SpGA9obp1Vs1bUrB4tnMz84",
  "key2": "HN9rGshAyzRpoiMvYzgpSaamPbQUSmt11WZHZJayFJJ72QZBJuGWYGREeytXDruac1yx7ok311jT6WFAB2JDjLb",
  "key3": "5cJhQEyXVKMNtzMHqueZg1qiFqTk7MACG1u56MZJF5aRcwCDz21C65zhtTvMy7YnSc8fdd9dGE23fEkGX5Gpm6et",
  "key4": "3aGh2dkpPCiH2971AZ7aAyBzyCeDvVWtx52RSnF9XHMGkJ5JEzMxUBAjKSCoGvobmN3jwd1uCvyv39zoxpcj5pgZ",
  "key5": "4uZmoKn9eF43QAc66FcAKAniNLTYd3RGcWJU9yxzqZxetcsLnzhpqJ7QKtNvsenRR5DTQjDm66E3jAnJXrWhZmV3",
  "key6": "4qWEJ12ExGB8FhctUwdLQfNY536VmAGPj4LQyRkLYZK6sjH9En1hXJtw7KyQrCazDBJQhje2XacefW5YsQdZhtb9",
  "key7": "ivZ1UzmnzCbtQssJbxAKxGrK5Y6zoWnHYzfeNLnhSLqxLQQWXD3CtiHf4LHckSNDVxpYoMDS5LGEWx5ihHGu3Nf",
  "key8": "2cMLyZ7iWYWD7fnHTrsJ7yAeKMgNztjz4oY3DdxyarJop96Tp5vY7hEwdiu629a6pfYaMrphGM18QnQxANu8ZMve",
  "key9": "2iftYgrwRe35i3oryE14maNGZE5HUkW1unDZbEzvUqf4vFqWph3Z2w2DYVkzHuPMtRZcGfZK88geXLRxFwchEkwB",
  "key10": "4o5ziq79HxKi1EnryxGmm139pXXLdQpCYkkoeh5zSeCeKsUUEeSH1wniyqYbS99U8qPqLNEjswiuMz8dYvo1iNjR",
  "key11": "5frALDjWjZNLKEVsyxtJmNF5gH22gfM5u9qZWEyu9DwmocwNCGRQ7AKj3Hggxq75EGbrzfPpDybm9aWgLq2MLwK2",
  "key12": "3j2zQAE9mGvqK4gr5BrXEgT2N3pXfCATnFKpdevL9dqJP5Z66Ekmiq1z3tiDgwAFVwo685vndCCMyxzSU3wa6hxW",
  "key13": "2S9gX6oB6pun6a9aHr26vdTTTZVoiVR11eDmUynUxzmmydhpk4pvSyc6QobXMaQyouGEqdgYT21pHYTGQ86UG6HM",
  "key14": "4hqotzNvrZ4ft4AL86sMKF4949yQX2fZ6zaEKzH7272GVtKW293ZGjBiGtJd6mJJMBH9Y6GedCnKw4GghXkHvjve",
  "key15": "4pPueCemPhUMmx8gEsff8G9y2xn6LcMpQrenp8QHR8mQYFvVz4zMe5o14AHGWbDiH6Kaj4Wta2KaRN4nwuqqHJ48",
  "key16": "63NpitkCgMJAP9P1HKDjrV1WDDzy72VXG1jnki9TfZcyj9zCvhrx3pRgKg6iWzL5Wq7Q2oeDH2hDSUQUci7kVJ1g",
  "key17": "4s4CpJTk4ySAo1RPTHb4pfwMSkPopR2e72rZmfrZKBs9vYevet4GTWWAV2UXnfpp3cgvwgKDE9z2ULKkgL2SHzsJ",
  "key18": "4xVrTJ22hfB8Kx7L4sxroC8qPLZZAGE4HQfj9qtgkhgDY5MpyiwLJFWmfHfZrJWmkgSSRxqnxc4PxzxwMmnRhzHY",
  "key19": "2YqQab5vxvieiUxNKEjEkXtZZK5tb12bY1MGcPw5xFqMoBdLreG47YWE4ZeJ8HQz9aWEuzs7gvTW8jy6s4xXFzqP",
  "key20": "4uDTSGCJvE1dmS5T2KNRku8GN46qPVSwPzQnxWVzmvHFGPL8VHb4kD6Yvhsx28xYW21ohnz2LiRjLxC2jKdBr3XZ",
  "key21": "Kwq6AMUMyCpum7ZQGRAZi9sN8MVKZmeC1qHKRXP5mqn1xN9PxCQPJAyE36BvFAAZwVwzwLzMKzVkytG2hejWDen",
  "key22": "32wM2QmshYtRnfc6jvkN57peVTXVtHVFn7vCCCxsQwEQtzyE2b2yghc5iEQvVHMueETHVqdxKqQpvtp3HbWLPgXY",
  "key23": "49vXL8PVKqoYpyBtWc68mdc8VdahS5bJGyLCcdiBoPEVN8RBxvPPvW9iZzBbe6ahYKyuxkAEpXnsv9cLXVBxWZ8K",
  "key24": "2D361wh29FMEpujkVyufERtfcz4V5SMMTxg2tPCFmQqXY4YEgogs4Hn7k8ap2KaiRbDgHb7Cxc4F6mnodMqFib9L",
  "key25": "4v8yWjJ8DJkME5DYLCez9mpW46jG5GaKeGYSmt3Y7qfxenxAhUEBdtXwpPWW7QEzxKp8vyiXg4qJ37cHPn6nCNNN",
  "key26": "M36esy42XoeC1msFhYXS8QTR8b5Dewn36cMwT6aH4gtNWy3JEDfyjNdfm7hS8Htp1rJfEY8YMZ4TfiJdA8HqQNP",
  "key27": "NpMdEhcrpDQvsaURhKnWtjwV8Jen4GQpGU2p3sBK2xm2Wa59jQNTfTiWTfieabmkq4xyPPZaRDxTdFjWtQmYoa8",
  "key28": "4Q9A2BRPcRg3Sitv8DmTdgf1zLbG4iRQ6QxQLsm6xqEC5gzMmvFxsDAUnjQjLPmyu5jdkdyVGqvobofUm7532Gmc",
  "key29": "5FMW6J13hGTsVHE4pQJkeuWX3GXTZTtmv6NxVkRGKRByExk4iHTYVdEFEARsJJ2Zf6USSCjtSqH8RVhJpGdhNvtM",
  "key30": "34KmctoAFnhF54qZKTft2X1niii6NY2W5JmUPX6ZVhoT3Cnwky1WnGR78YsBh6gpQkpj9YaUZubrkYjbnwkMAkeV",
  "key31": "29vMVaHsz2om7Gt9NL3Y5LfFk63tDYqZuyEwTaeUNSGhJV9osrFXaiMbyntQg7pugSGaELpu2fEdYCmPkLkYoMGm",
  "key32": "2qPerUf75bddkkHGCPVe4uWqKEUmKDRZk9d88mi2g4ata2dhGZsHKufsYtbuazWXaMFyabL36JRT38GuLHYSakVg",
  "key33": "2x4J9UdAhRfvngnGMMkjYio83BSnXfhMTbNJpjTCDgCenFXVbiWczEFXCE5pi3bSuqBRi7KJRk7jkymfavQt453B",
  "key34": "2N8H3oM7hELNeR4XNc3pqcoesxUuxbLMkuhiFWpqevCzQ849UDbQCEccLJEo9DiW8SGx21w8DJipqm72bjUcop1m",
  "key35": "2fs9BXPRi2G3pJoXDAkTwkcu172Cbv3LHtnKgHzkuJ9FApXPaD4HKrr8T1sH3W85vgVpvtxYxZPXxavNcLCAMtst",
  "key36": "49koFAgbLkN1QMMfzG1HrtwseEsRQH9XSRJGtPtchvoB1jLUPJdFP1d8bfshU9g5ths4YaQhanqp6QrSZqgMbVQD",
  "key37": "j43q8brJ2s7Yczq3Y5YHyBYnivfUYCQUsSh48DDnJTjW9CpP7sFAbLYhqMrW1yQwLQ9MikZ4yExo3mppfg6PPT3",
  "key38": "3YpodV8gbKePYbSkHJTpFBGUN2cP7RjNXJBCMpLvYJFMHsy4MgDn8ofCXxMFFEgpKCvNuoQ3WZCPsJ7RQ2iedN1p",
  "key39": "4dvUrS8im8MCYzHgtNgZJNK4rFDAn8vEuG27hhJvx5AcFWadTS6AZ6qdbBvTGeo4oTb1uyihjHeXn6aQCzpTfu7E",
  "key40": "3KaqUPcmPDUFtuovAbFGy1m54wYpdGrm3a8X2EJYhiapqydqc4fZYp2tri58wXzozTVpDgrTWZdZA28WGcyKbWBB",
  "key41": "3y5HUSoWPhtqMTxip2jkgsaXvqyG9B9G6TG7wx6BzKGtx5KENB4JFg1U6Z9Pa4tHnpsVqrCUntc88cCbjL2fsMET",
  "key42": "51D7F4ULFfrigyS41a87tiuHZbn9s9EQ2tcsr39r6QMzthQsfXZR5WKpBmz3mFmddyeuqQU3VkLrLUUCcKKiwGaa",
  "key43": "YjyqpmZAU5Nvpfm6iARhjbn6LmTGgNqeP3RAafhrEwXLY6MpMsz9c8o67Cmot3uCFSzgCNoJsD53KaoLrA8ScRJ",
  "key44": "3B31WSCUMeTUj1JviJ73NmS4dXzNfd5YukrV3QrFT3CvBLpcqNNyajqJcT4K6w4yh7GwC6AYHrkBAzXbrTqMp2bf",
  "key45": "3DebVsAdgfFD9Mm3Hpqpxr4cM2g53q5BPQVuZbr85DtdKHLEKH7BQpjGyoYzjyS4moyGnVW9mdh3HPS8TdtBmHvH",
  "key46": "4pvMJWGtWKDxzMPbc2R7MRjMfRMhnMYNyeNuVBGxWgCWbaEpcSsSQfpKJ4EuUGXHBtDve8VFKcJy8Tv84ksa2maq",
  "key47": "2CUpvuR4AiD1wFGYQc4YJpV5GcWNW46RPTQTgEEoJ1eD5pQzAQhb1KH7csHwFEDo7M1qYcEzmMZKT6X93Nnz9qDf",
  "key48": "375tCs9zo64A2xJqqqVR8dxHfVmRkCBiHR1HaKiFhCxyKkTRwjfLPxN5eQoVD5QJZcu8bLEwzNdPuHEqhLofvR6p",
  "key49": "3ZnsaBirpP1QqMkEEZymNLWdc22Uq4Wr2HxuV8QTF9BuFqXSCYRgowmbvzv6oPVUo9Q48ZTPKtbHLmYdBKSpEiSv"
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
