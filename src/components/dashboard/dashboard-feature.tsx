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
    "3qeUKmp2UJkkreQGboN4VjDa38o4YJ3Y2ivb3wbsdjEyUbSFWqZC7JQ7nRJtv4tVFnfUePw6cBgnSz7YSRT7qMMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QgX7PypveKwqs8PxxFQSEv3yR4edu78KpojJrbxKqYEbn18w769r56KeQaR37Uxr8VDxN4Ft18Us5cmmSjUppQb",
  "key1": "2L6w9Fz3yz5HFM6qJiLFoq5oAxaJUxgjZuAT89BWtrgLKR643xzbgz6W678kVyVxiAJxmuvZq7ug73nhXdBfYXEK",
  "key2": "64rmKA2mWZP7AnocGur8oyBPYhyCGaz5apKQH8XdcubeGPbeLcdgXA5eJpSQ6KN5ESx4v4n1zWS8Lje7RH68eEhS",
  "key3": "3SpfJqZmedKMyqVMgT4wWuD7vPSZqR9fKh6ZNGM9i7KTS9wUQDTghdiKLFaamMEsrU6FDW3RgQhYqHUJJMxa68ZV",
  "key4": "2Zo8H8wqgxjK5oRC3jMS6KD23TEmKAwrrEXGEMbnj7mscBN2WwyC4VyT6RRnQ3iDFMHWXN9LBhseEBcZQ3UeMNvd",
  "key5": "2K9D69hvpepdMBJpymuBAKxvynLg4UQc5do6x4aUxC7A7nj2vPdus1RkiLsFJygo9cXD8ZeAAD2ncaVHJZuiiR99",
  "key6": "2d24if1xkjLn6a7qacPab56H4Zbu71wSnM6ekkRwkPJ1aTcvkpE9PLGZ6tSCxNXducD43HWJvuJc1ezUyy2Ko223",
  "key7": "3XQtEuztdoKfJVQ8jxZhyNfJTQtXui4JFPVccNJMZMvwjUZffH5ZV8Ym6RoweVqGA8YoEWpY48imvKAShMZxs1gS",
  "key8": "4PGnoxtFLeYGqNFZS8fh2BAy9PDbfdpdWNuLH3PgBXb5qHxhViVUeJX3CsKvN7TBDuyYPu4BGJvHWtNxzgHpML4b",
  "key9": "3fA6M8fCqPrWTAD3QaiDwqqUgZ8eptBJYcP6eVNV49Pio3mjtM6AYoSzh4gQaPVotUmRi5EiGJZbiBQXs3hV6yL3",
  "key10": "2cnJaVMzdsBWs8ZbMkykRmYfsH8RHWvsHeDmJH8cq8x4xiquk44c9n2adVkKZZY9TAmbmYE7mB7t8uLdn5dsw7WP",
  "key11": "2wLSam6xfNcxBZCiUMixjuyTJpNxzBnNi7Qf2PsCzxpmWvaZ5w9ySTAMWTFeZGE5UKqQVkpspbyJjxes1DtVrqHv",
  "key12": "3zBKga8BC6QB5kcJUTSfzYGh7ouZr4FDh7ZWghCLqYadJqWcweXDQR26k7o6Bb7spdoVn3rFGCfReSR8BQksMWAW",
  "key13": "3CUBbboB8oTEzrQ5v5CjkhY2U3YomoF3uPRYUzZT7qiCvdXAVDbKMt3a9MYoBpxQiqa95ZFckS8N4rTVFahUHEv6",
  "key14": "53226RWDh7L2S9a5q9H6nPcdC9FXYXsEWwVSzFZhrXHWAHMJuiNToUfS2ZUvyYvf5GXes5cw3toGzuwQSAutkuSk",
  "key15": "rtCvpKkWp4KnCS4ThHk5Gj11iX7ejAZqLmVwdbsEiBiwjzi2ZmZ7mw4n3CMPLRmeKAKZ4yEhky8pHtxdrnmR1u5",
  "key16": "5N5SYkBikYEwsmPQPEjv6skRSf9yUqTmtdK4SyPfuipHnzkQvWA2w727KwXWaHSK9rwiTThmByKHUKkSCuGzwMVC",
  "key17": "4u4LZhHQVRqiZCBUYoxHGDhrDa7LZh6JUbmyXt1s7EmFstgLJ9AqzaC22fQcH44PqHwREQ5BVuUBtQ4qkKFA1Wj7",
  "key18": "dweh2srnPdgYfzbP3yzoHxCvZJcJ8ty67dwuH2EtkzM8mdYd1FtABk4s6xpxB3h9qQi1sjQHVB6oKH7msiRBPcT",
  "key19": "2wo4YzA5rCSdM9qxFW71GbNY3spy7PDCQCL8cTR23hek8FRR3wSifNdLHgcmJeCNBHPq3FR5fMJ4mrBoFLo1kJb8",
  "key20": "4CWhSwBGRNYfZaVcB2QfGY8Pv32vQ1yCWTNzEZ6AXSpz4hha4yH7WB74BgHQ5SQk7gRpa2xsKeLZ1hnAzmz13VNQ",
  "key21": "4YMPiVSBrBup1XDvNFg5WJGcwJTL2Y99LcCzWbLQXcnfUAmba666ftDnBzUAizBTXYbMfArqMXunxZfCiBQFN7na",
  "key22": "4fqMELkgt1i3N5tLXbRkSvFqviYMtVRFmTVXgCjSyxNRiZexCZB6yUfAZHnJfP1jKdhA1bkAnjvqzoNLAhJuVHZx",
  "key23": "5PFtXwESpm54n9tZZGVEXcpQ9JCpcb3Sst42oi2f3XVgKf1RHdbSkaPgrnvyeCgaTFjpGwXca3z7mXExCmoRoS7m",
  "key24": "5X1Wh8NwQHd83g86d2SzQGnRf5jjC313wr1afu3m7gD613UEc64VZR7GwuoFYkDr7GcW7LUjG62yD2zD2odVTK3P",
  "key25": "4FeEgDgQA3ErA5EVVrZKRMqCEvg78NknEpxwfsqC3frVoYfWHkoDugs8owCkuANGJKj1fjZLtg7ChWF9QWRYUaDj",
  "key26": "63rMeRJx6x1d9aVVHXsUyqYvYNezHzkfsN5i3z5DkchYcJzvXz2kVZA1z1JXQLrkwvBuKtSPQTfa15P5v7wtQ8Tb",
  "key27": "4p8TMJ5qYFvtmucD9JrLrTCLwDm4rLc6cn1KdXveXH87PaVMbUgkgmehxCNq84DHEvF1GWiBvNtq9NUeAeWMrioT",
  "key28": "2XV4ove7pNBwP4WtM3Lq7wg9cjj3BPfntFcxVDMVia9dPQxefV596i1kw7sPWTnGY4BLrAkGBYHHtvHmWjFZU6Uu",
  "key29": "35sJ1QsRrseKfEP7qZpi7uXMY3ufmjpqTspjKWeLWPcXcfZ14hdVUhk8DTWXWu69YU3ZSFeK4TcVEvUGc5PDfY5x",
  "key30": "3t4G1yA8vgyzJ7E9ondPtSRveJNGXxAJvTcudhFELwQXmJBxYdE6FyD3ZPADMsov7oPcu7Ujej9Bqpe6H8h1UfRb",
  "key31": "3DenUJmBrpHUpUaVjTYf1w6m7grXCMAm9LRTbhGg8qwhBAd7oSDGx7zfxJHbfS4Z4MGZPyzFVgYExwJCszx8jeSK",
  "key32": "4U7q4ki4ShP752Senuwmk9NMNePMcj6HYCYTkBnATXzyJzmJTGE9YnBEJVhTtLHtkjTESmRgaCAwkR1v1Gd5GnQS",
  "key33": "2P9guiK9VUgL9hu8Vfr7mMeHb9c4SQ8koNvzG8jJBsK2m47TUUvANngsRPc8yxaznJvHGvPKMtPUgFph3NYvGbB7",
  "key34": "5JPtijHzyA65hLuX2oJjC5JbJxnAGpaiqkB3XUK9sWvkGiY41ZRhCSctpu6TiQCFCZ9wYdNifQccW2XzVELfLrKk",
  "key35": "4iePX4uzQTyfCauYQj87bWH3239tLpfkPqNP4xQJdEQeFUiD9SVqLoy28fCKgWMQAUwazXWkytPzX9YpjJNU7UZh",
  "key36": "2dGJKWyeFwJV6jRA5siEiRMkZhGrp7MtAtopz22bVXg62HzfvqKg9JPzSsLxynB5wCK3TPAPXA1bZRgjUef39R7v",
  "key37": "2hibqe1F3xTMprvZpuDhh7V9NhEmHuB9RMoaPJJHREixBkUdwXyiyfqv1awuVo6JjG4TL2iHvcPxFZKPYDFGs6jf",
  "key38": "5fn2piUAGx44G9B6cqKjWNz79CLXPMzj2m71AgfJ56LdxHMki33RNHvJy4W3FkgXbLrEP5zHXuTpMgapaNEiNVMH",
  "key39": "4YBseH4rqShkpKknsZUEw4MYh35sCGt2cK5MP1EztCrHCdydXpXV9J83d8Uq3cbtK8hM2uyhdcqvspb8w3NRd7S4",
  "key40": "3ePfiL4S9NyfGGFP7cPXTAnjxTmwBty1yxQYqCkXQzArbhhDXyGVErqmRLuQzx6o8riBWKgL28zWMG7njZibWcAw",
  "key41": "3ctggFubzzSaDRYcrrduiVJHfKKBKi2uV7GDuoVPBPea51SwgA6MhxMQXp2wAP4X7UukkkjhDPRdx6ZfPJHfJBQs",
  "key42": "62pckWTPyMAZtaQQSVcy3EkzZ4Wg6Fx6aC36ivo651iKjYkY39E3RVagpkfYbcWkc9A1kjJVtA4Uooz7NCuvXQBW"
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
