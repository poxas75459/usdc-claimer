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
    "3JAY7wHUcNKGeFqF1wE6HWAhsgu9HQzNj3nk4wJSUEMikogy8QBKcQ9psD2GYbgU8puP8npkywfP1pyNJ9gHHRbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w54so6tgcScRL1AJxjp8NPWePcbfVoYzvN5Etp1XrroDkqEbUM2X3Vb5jRLWSJ4NnvYf4CY7Q5GofcyGKKFNgpH",
  "key1": "2K5SpG7tdrkinA6sb8oR6gUiVT1qhtVgQXxEjim6CJePcptSqjyuQAhygfnLSmNYT7PvehBNVXXYjurTgBn3tmJp",
  "key2": "uhetkixw3R5EDPtradKmf5em8UjwKj3hNxMBEU1AHxouNnY8HoAFUgqBT7eTHXbaTYhiJjJ5siDrcyRsaee8Hjk",
  "key3": "65vA2G5o9z7MsEA7JxjfNoivryQcBTqN7U5YfpMP5tktQWnjGUrJETzE3Uk8rMBj7uWMcCtvhsxsbaWg9oXKg9YZ",
  "key4": "3ghLWwyQTodcjGkdni6nnRkyXd1Azx1N6e3e51ZDuS8mTg2FDSJ3e9bnHUWQNup2H992ndJrjrVtKsNNC1xSWm5w",
  "key5": "2MH4vDU4oWPRZVYEDiMfhL5sGYo96JNZ6ifzc5ZGMcHEwK5JqnM9LB5iPDtabP6Je4c9krWTG1T7KmihmGTvBJjT",
  "key6": "5akcPjNawHhVceFKmYyigWddXnXVLDRZuRiaiWAvmnPyxMU6h7fJKkL5x1xw9jizqyrRewNBjgjDA2wwgKoHcFMC",
  "key7": "4EXT4TpbNkZRFRVXKt4BqRFqFopWG3uvFLdQj6Xar9x5KbdSKgMusqzfeMaCUDH6dafRyuifvepuXU8ShNSnDz6T",
  "key8": "34qb63dGEtKSbm953ovP5orcxbagZgN4iGcKFEPSs9U7ydffdhMAC2NhNFsBjoznk9vvWp6zXx8nctEbtqM1S6Kz",
  "key9": "2QkLTGWJePJF3F3kFa5dLqmFjHVvMKFVcVdQ3tTTjzzADVaPrPKD8XMx4c2JghmA2jXLdXBbDmVBEuuxH9NQSoAd",
  "key10": "3Mta7usYJ72AkYZyNE3LUF49CLZTqXNWJgS8hUFizPPQ8Vs1kAygJLKbkyXd1a7nz6zkgRxRYJguA9dTGNjJMp3U",
  "key11": "2VE48VCuz9Xz4LkXkUUYthdzPvRtE9QMF7Ck5iQY4xAVzG4tD6jFRDrdnEyx2HJERYWyKzwRTp8LKQuqWEeh2w1V",
  "key12": "KbDWve8KvnPNmv4xPnj3jYWYsPjYJehkGYhjCVjc3VtP35vXGe7DUEv68pG6mPkBEHqEN8JU5zZGE2UShjRXivz",
  "key13": "71u2vtFEfCgN86a3xkBbLoEMK2QhtudeC7TH7vNoQ1shGybV8H82mSzsBjNuKgnD4onoDcXwE9YK5q9VLZA95Bf",
  "key14": "3caqHrKhcgSSUan5cjDqYxgtisK4nvWj6FuLtFR773sVkM9tvxymmcAhDoKnYT95axdebzgKRvKQo8XAjZNzmPRP",
  "key15": "3LaydQZVUHcjJokWTBh3CMzYiMnWFtTadbh4o5gWTfByAKhhVun3jM9fmkc5WiSWXrMtJjvVnDKeo8qJR8Z8mRSN",
  "key16": "5yyXB1oBkZLhBVq7gUy2iLgevzauVa2EfTBUTgkZoCkQpSUedgbSvNk1Tj93AtAKCc3e9hXQj2dx9EPnYjyfj9G9",
  "key17": "YFA4FKg6DaTxmdjC7hRRgdxe5SnBihD51yXYo61vGHDdiGSApYGSceytK8cZwwEsWScUbWR6d7nb2zCmmF5qbrJ",
  "key18": "4YjQGZAR6xtQt8hiozgQct8a4Fe4xFpoT1nhVbTQLiU6MYdSnCxbiM5CyJxaRaRjMh3ByV8zKoMkC1iLHNPL54Jv",
  "key19": "2Z4Pr1EmAR7ptZCbGHy5nwhpXFUGkQRDzUMKZqW1BZUgRxPLpdy6jDxuuTY3qjtHkQwr2QaFBLbfCVXtEEJVNghH",
  "key20": "UiBrXboFJXpvs3ob3yJH8y8z6pdugjY6fsReKvF5utaPvHfBrW6mMwWRuVwFH6dwCRUPeTwo4FjhuG3tj1UVq5y",
  "key21": "9d7ko1t5Tmfh6A5tMDkff6YVP2bCLTWvSwPiHredisS2vwsLVwxiGsMXMJZJ6Lrp8JZ6DxoJPH4XEmPs5fqLD6r",
  "key22": "4kzjeZrqvSmUi3y8S15AH98j6SYupCBxXMEguCuaQyM3hWpwzSQNg18UHq48tdEPN1Sg8XvznzPVHmD52eUSbH8o",
  "key23": "L3eoCdLYRNPtt16jydXD9LdpG9a5sL8SxYj87gGbEuBCTZ4X5qjprNxrruCqb27dcKgZjDewfa6nnUCjqGkG2iD",
  "key24": "52g943fBSZ9FEzhpYR2RocDzoJAViXaJTc5vrzuB9hRPTpkcpnCZ57v91RnH4kg1YLMuZW36nYPPC9FS9NRgTNJL",
  "key25": "38tkDQ4rtW7ZDev82fRaktocc8vvRZMLg6iZs6Nw9vu4pD1fhXkqQvrBSNVFzS19A7hiUXdBJqwdNKKnUUg5rw7q",
  "key26": "UXuGRssuCbYDCNPDMTDrGVPBMh2xBS9mkmdeN6Tq5Fh9iNhKuBFhfjpMSgpwUjxaHX4Sos47JEKXoc8DqpmWtpk",
  "key27": "2GjfmPk7SxrZLCC42GXJWzSMzkCshZu1JtjbE1BafhmAaGAiQt1bDEyCbCNGKi2NuSoyk1qXVpWwYKTYsQuqqizy",
  "key28": "2Ty6RLA3QhAcSUEjqxR7rTUbHNmiMX2LpZsZ3zxQrrDKZeu1YP7BzQsWrirBjyiQ4pTYWr7m9n9v6RBuwyCRoCiY",
  "key29": "4S3fsc3JM9EkoRvwZFH5GSBAg3s3DNwhQqeKd1iqTGf7eEURKTENdukAbbBe1qXj45Mm4JqvtiY5vfQQUGR2WqGJ",
  "key30": "4akCntxqFuaCogJZoL3LuLami1dnnkQ42rMu1vPFyA1yPtWvrCdEaGZdYuJFiD8t1t8qccWGebXqtnUkDeyzo3d8",
  "key31": "4udFR4vQKRyoJoeFQqr4vyM1Vim9EgpNHhpcRNDdcxcENJgw2hYHENtwqWkmjaQwSUcP42edV1RHBoqaVTkzqjuQ",
  "key32": "38N254bEv1fCLGamt69shnbDiVo6a9Zu5KKjHJLK4bucvXR6zrtK6bMNiUaRsZzyUsSXACGoX99uq7k7ZSpbMTrK",
  "key33": "53Z6ut5khqz5s6YSFTVGXVmUrKvevy3ZvbUjzAs3yF2js4qjMdsUxrNVP7eAYAYpsYh9LmZEEzXxaM4vBAmAVtAa",
  "key34": "5dSHx9P7JccYX8h7jLUCd766McncjU4vR7W3cVJWacbGxFiLCr6g6AHf5HqzzriKebnwf224YxbizYFuke2HANAD",
  "key35": "3vMKkasDuAfNqW6DiRoLbUs6debzrRpSv8We8hRCCF3PkYmjoBrXYbKU72MMmLhPDt95itQjLozGJZ7XoAPQaRBz",
  "key36": "5Jt5ATmLVyNHBJDyT2UiFhPKeSsvY1SMiDXgcDGHs8FpDUzmB7jfwakgW7tmu6F5JWFxT6KZqXHuZj1jJsAJoGKp",
  "key37": "5iwHkw3qz4hTjHmWNHpPmgosxqQyvCQ8ovn5nuhVMXQZya3YPb5jSZQrX43V2CYw4BPXxraqtPxVyQ2e4LSLaNFH",
  "key38": "3v3m8d1m1sB5DTx64XhzhA6NyEBNtL3wzxaSphTYsWEu9awogUi5p3FqGHYzMAFdjTK8riQ2n7KWa8yyVi6j4yBN",
  "key39": "3MLsnUB2Kbqbmsb1WR2qb45ezk34FijyXauuJeFfZV7YPsTmgja6N49ofS8ZbJ7hJzaQLhWz8pkMizxzmr8t3PqK",
  "key40": "5H4Cd2ZWDbTMXN4UAvkaf92K4ugLACqcpNA9GwUtEgVMkAeh6vM8viF9p88v78dPzpzqebghpAF8CCpxQxaYivyb",
  "key41": "5koa3XG3QcCjQgUBBe5dSUUwnjxCehriiF7zmqQPuEUjXecnjppZKvvHy3u6QFBgcA4BBHvKQ2k4YFCW7FUoLahj",
  "key42": "3tgLxAWBJHCFPaFQ1395EMaEvVjc3G2BQUpELWrT83BGM1kMXbXJdPtA21D2CA5E9Xb2AkX4Hv2bBbmnfsDYuzDR",
  "key43": "4TD1e7Li3P5Wq1npTYMrjaWa8mfn2y1oxBjrEae584DTGC5tKjBWf6q1jGzGKxXiNqV8TXGm9LALZNMwcaUk6K9e",
  "key44": "4g7xX2eN3FfiehuvBEf6wZ6Ur3RyNPq3Eh2QXRxS2iXTrkTqhmik46ssmqxWDQSeCXwBM66HSiSS9kjhJWFZLzWE",
  "key45": "3d27KjoGqXuY3f3Q5zLXm9MvSYSVhGcQCeTZ46U8i9byfPcnd6PD7C1o1DUQpek7V4pESPbPB2BzaEZJkCyymrax",
  "key46": "5hczkvRWoVvp2PudiHMtS8g7ytkELMYHb55WuLiyo958F9HVfWLRMFBM55D3McVs3un5sx3ge5CJmyLwkXkP6ngo"
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
