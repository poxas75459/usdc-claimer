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
    "3vivPY3SsipbfanNaGfKtA9MvGkwWtUFCRNUa3fQtEjinn894Y89LB4wLRMCNaVC5Pm6oTC4Vsdr96s8ZR1KeENW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uyFvx4wnWRvJdSZqp5j6QA3LSMJKyK9911BTNjkoSgR9bTJaZ2hJnbzvwwGYQmp5EjGW848TzifhwTJ7PGK2Wch",
  "key1": "2GGKm7B2jaVFGadNhNpajktZ2pShZgBZpxjjQ5Ns9FuGEZGHQZYN1d9qqBaEBYZF4oCJizCNPmz3NhEHtZmqqV78",
  "key2": "aVY6RaQ4fQUmuW8VpNiRmjq9HMZKE8bYyBJojsmsRBDyuHgdeXPJ86HsnbUHeNr1ia5QJmpWdddfM7f5jkbVvDg",
  "key3": "tdoTs8s7d6seBmgSdjHWVeHdF81foFDcngqnCMJWqmRNdJy3cC9YgtSEQpsMMn3FqFicnNqtTMQwUMSbwDKnVvS",
  "key4": "5fRfwKg5x574c4v4CTPNLFu2AzLpvURu8inoYDCN5xCdnKawxpT2DFHRo5imneEVFA7J1QNiHA4jecCGcU7mCAMx",
  "key5": "21eEN9dVGkUxxsRTN9wLkjHnkGufxj99m1aEG5Uf41fTt9cstdxEtKDv8yChRNJ88PMwHP6Xhru9U1bPA19Edxjv",
  "key6": "4u6FNQbFNc8s6Z6ToGk66kJwixARyQgunNzVhz6Pttx6UpGpGMHYmD4JnuJ8SDGgMTeT6JcxGD7ASng8AvaP9AbU",
  "key7": "35pZh84X8dRMduQ7amD4SVo5RSKoYNVKCwVw1Em9mX9aZxHHChKaC8ZZUDmy3i6emV5YCNU3ydF1SPSAFFGsUzWv",
  "key8": "3ke1EQ4d58xo6RczJtbAwwRKYutFuU5DxcUDqxUVcngfU2jgPpTpzv6ELmavGvHh3wqPjPJSkhQcyVSrnb6sVsLR",
  "key9": "6pKLt6cCcNaHLM6V55pP3H4GFvede1JJ6MuL3eho8KxQRdcjV3QqrXd8hF5KiJ5UxN9GRVqBBR9EuYkCJndAvth",
  "key10": "2yLcckN6X5GBw14tguZtYhWdjwKmUZaVsem7hkh3csQse1yJBR5xWPAie1q9PUB4F9Fmq133JHJSDeizQGuemZ29",
  "key11": "bMzHam3rENmJp6Y51cA7XKHAbsMxdtugdvraX4cgfsZatNs3VqG8Y194MAgAajZpoJW5gM8JbGapkyAXR2Mcyja",
  "key12": "XdGhv11ucfLeGabtqkfYHxxeWFADYtFxc2becVZhXwrufABGRZkcMTcyMynSDT5HPG9FRbKkzcVt1x7PFH5Hkz5",
  "key13": "54MoBdq455WbjsVwe14bktJSPayK81vHgYn15bx3HL8oRJvv2Ryy5kHd36akLTXQmB4k5NWtrfL8QtJt6RJpRG7M",
  "key14": "3jykUFCwfhcS1wBct7i3Zgj3wLnff3gppJN7gpvf1Lmd9tYZKZsR5F7rqbvcMyLpDJrq8cLhqq1UC8avAaHoqJNm",
  "key15": "cKFDgaw8Uv9gDRiggH88HAvDMNcQTnbERqdVBiF5rScPNCqsydd6tZmeqx88iPRvWEzckyFKcmbak3ZNft6H8G6",
  "key16": "3mgwmwM81DFnMsAscic2pWB6TtErbhxyVdmJod6ujUeqn6w9bQZ8bPY6GpnKSUZ2YJJzKvTCym1JjpncPxVGt8To",
  "key17": "2TS975bijznKPs2YEKdFH4n7wcK3ZLk4tVboSwm8ryA8i5HfSJnGeDuYBvBMZ7XKTFawUYkJ2EBDh7FFMsRYkLbP",
  "key18": "4kEJNhPDthPM2ST7gkm7w2ggoGHytggFFqWFggd3sPnN7pH2DtmP7pwQ5kTZekRT9w7uJZQXBVN8DihM1SmQZJu9",
  "key19": "ESci9iPejvpjMRFAdwWx2rAvvjrxa5XUnqQQdzfzWUwGbeDeZQou17RxsWaLJJipaiBJskZe1pyuNjzKfjWSy65",
  "key20": "3hQ2fRdqkxnXtL3oDk6Vg8rH3Tg75diMQ6fnK2hmoXcGZSa4CXd9xKuSbSpBETELqSLydyZVKwbGwCi6xoZQeg2N",
  "key21": "4EwQXE4jBBcJWBxP72UEd9PVhPFVnbxR4Ng4eA8gHm8iUpcnH6pecDkDjDEei2m83r6iErotCZtYKzrmQxB65Yrw",
  "key22": "32W5mYuuMGESpPS6wVj8Tg9pkPoRP8o43nmgCK4SEk1vsgpTS8VcmhgMLDk448azELzsTnzpv27FsE9w6b2sqWt5",
  "key23": "4dLukGX7N6VuDVyELuin81wd9aSm8h1SJQqDBED9Ab9ajEgxh7B9GRjU6JHi7R1SH7rpcAUmSBiHkBMEfgQANviD",
  "key24": "5xMRtp1hSXj5RFWxDHZcprgrdXbmRCTw4DkdMvNEcihefXtWgr8Lk5EXkDndDSha1ArdLjxuAkwcdZ1y3gVUxeUn",
  "key25": "3TxuoxCpdwJ7PARR9Cx4xmTgwUjYg2kFCCuMonM8EVR7Au3UJW7LKr4AHZdPeu68fsfPzx9F2jzHy5FxfYRSNVqq",
  "key26": "4e2ZiPmkPMUwHzUfduh4u9bQ8orFvTvj7rL3HkQT4yRKUxHTYxNFBtAjSgKoRXbuMEQg5ySHcPYP3oqK9weMeKv4",
  "key27": "3c1Zc87xouZEhjGqsgrMGjCkkkCqfR6PPntK77XFYinakEZZzmr9pYTMXZfpMQhWij21hKkJAs47PjLJj2rpT6ef",
  "key28": "4H2ZH2NtyvZwMbgcTet467D1QX2tN5z8FQ8EL4hLhJmgHQ7c7VQd2q8NZH7Z7NuX9nXbNCNpduVSQzwYw4aaEHkF",
  "key29": "2dbUzpqHwwuyUKnKWQNKrSn7d2N5nC3zH6oqe3xJumfBHgpVQGmbZjyTVKZoQb5iZvAaeQwLXQCXnetsbgifsugc",
  "key30": "tW2ag6Rebmyty9EBCw5pkFJP17G2v8uYDHyTQp962Jiwr7ykvXUjRzvCaP7AUJymaDMS9M9MKwXpzrj6dVUKuWd",
  "key31": "3bfkX88vMSDKqo3kA2NoGPBrogG116LXfEEYzUqSBDERmfY5h6sNESGPHgSrN3UPojLHa47ojEtvcNdPWpCaGQUm",
  "key32": "2D4x7W85ixGuBGpA3mXAys27T4YUVznReJWGbXcaX1r6jtRgGAVK9gr9yqSnrskWmARPqoXXhB4tVY7dr7Ks3PQ7",
  "key33": "5yfsyL9Y7wWzHox4qjRnBEWKXZyVog39mvjnKRat5DVMqd7fMA15gTH74Xfrc2Qbte5uRvhTv8XsCNvAW9QCFkPc",
  "key34": "3ZXMrxSKEeccLBo3vRFGLVWVuJuaL8LqTkAB1DAKduAPRkacBM9xGa84wWPBp6xn2QPoRqSrDvPJcJBLRHeZ2jCs",
  "key35": "3swSfnhHBKJ8q8zXQajVqLGfQsCcChq9uS1QpVkpQrAG3VoAddXfVDrfavfzTNDq9zVEsTYF9zaScKkUFhkpxUrv",
  "key36": "3L6PHYYE9ah5GeUrrsLdZCctx7puxy5chq8c8gfoUXZ7c7oHJWnE5iBu9cowca7EJxyCsu76JrZJP19wsyjvEtAE",
  "key37": "2hMCWWCAgXqUKo3cjgcATzayEi3euQu2x6gNaayZM17CjvZ4FDkpgVMqe5sKLJKXiQsqLWy6GfaNs5K1675tH7yd",
  "key38": "4uRy1tMQvK6zMjxci5VTYur9vPKM4oxe5afFynbfB5c8piqYsDzFR8HDSb6fJjrQECHFDypaJPf1Deg5ni3iVGXi",
  "key39": "3NNHDNBB6QzehUUfoobfJeHDg1ot2U9riW3nnktJyxCUGW9oQYGLA3oPW6L4ahcsR3E2Es5SFWwWxK4ksffc7nof",
  "key40": "5jFVXdntU7tNXvb4PHyjmmttTpJ4cnzVyJpdhXRgi3P5zEocZ37TohG8TWLKZCtBxUwrogZrhsCFJtmXk4EeGCWK",
  "key41": "11DU2UmrnVbnnCfviaTqmGmu9BLJ6G59YFMn49CqU7618Uvcu3ueeBd7FaEVaD17UsbJLY2LmtsDer9gVgMLVB6",
  "key42": "3eLvZSEgagbF43j8gT174HZESQhpg2n58aLYrwKSur9k16T442ttzGEq87HwGPGcVSKJn2hsdcfdSqBGa8ghHMRb"
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
