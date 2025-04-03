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
    "5WYYLiR9Nz5V8pjwxdh8Q2RYDA8jC9TXgQK43dPwk8LM5is4XqZeCXNcGsiRwaAqdw4ARHemrD83Mhojc5VbYWHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qBrHY6jbDVLwPZNfFauMRE6sMWkhgtQVBR9tSoTQeUdBX62C5E5ARn7MH7og5yC3tmGUBh32XCSeoM9CJ3nBbt2",
  "key1": "4xNVxeMcyxh8ULXKJDnJB6hHtytfA5tVvuaNLCGyy2EFMJNqGD5JUoytJMx1w8zGbWCZFPyjB6kfBWTxM11jNroc",
  "key2": "4nfqnQr9F7iQERCqXe1kKtkjkTABzBcNey4UKdRs8ZRZWZFJ3et8XYk8yFaNFHhFGZCZQnGahbzA5n4k4aiQ92rw",
  "key3": "5sKKo8gAYcR3LLxG88H3atEY6FGQfw4RUXBTmnaGbdYMepxt6zEb1QafCGYmYncBnaSCW5NAJU5148NqE8aEqrpy",
  "key4": "4Lj326427z5eZdxq6KCP3QgNjfFMRxzpcFv26jXR7UTERbcmVXmewuM8KFFnhPuZ5CjgQmg8qCRrgTbSM9MjN3w",
  "key5": "BJwbhxfZtFHbw7VWUFcjLpsLT86tQ1frn21NFXhprQqHedpJqDYKtUSJHj8pyt8QRd4ckWUj2fUhGhgiViFbMxD",
  "key6": "252tg5rSVLFbKVx6wA2zWjcngGf6t1whq5ZRGonxQc8N4ohuFkd9Qah9nbcAe4QREqEoSumwNavqK2aknrGBC5d3",
  "key7": "5a7H69wVhQQv16Duanw5ck4kQmHWemYuLSf78A3Ntn3cRwYwc6k7tA6SYAWRgJh7ey5ddY7rbuq1kWE9KaAHmUJr",
  "key8": "3EPWJjcUwHDASSqJTXYY5JgDpA1nQUBYSuLUekJuZbnCJGNfRu1qcEwq2i89VcHMfeZF1F8hXthp9PdDjyscZ32",
  "key9": "2qQYgM8o45PZCoXV3PQ3xxQ3u3HzCwMbwxAfDNt1Tt822a6MVqs8pnadkUV5FX3KYoBwuXVN12PPMSrHtq5S9Ms",
  "key10": "5Y1vEeXp7FYdZs7UPjBcepMX7i25h39wUnQLiuMdiJGzK2UF4hJKYyj8WZ1P1w7NLBcRVkPtMmVmqfxz5FPRcnP3",
  "key11": "5t4EqRGPn5V4kRRSzAvmDxgwpj2MPtKQj1c3qnT2K9y5fsyaTjn7qnyni9EWVTo2WJehST7z53GNJ2dHHBhFvpLU",
  "key12": "63YbyfwL6iLJJX11BsJMZDFJhxEQ4maGrtKuq5Ph9Xn3cLToAaTQGQxFMGcYi2aVRmDpELfsaPnXG7HNh3kRJ5PG",
  "key13": "4cNnFhe4ECC68XfybYm2rGgjUm3hzDBsj6MjajPdWgoa4Kv8Ydit7i1LjLqvfNTv55u35vi3Y19GWP5ZzCmG6c8",
  "key14": "3upy2ub76Gc5yxqJMW1noMsCz6eMxJLqVtMZhLye7Ff3Sbe3w1J72V7Sh3svhjADd492oe4HGTshLySjYNzJW2nE",
  "key15": "4uWtTXqFWkjseHPbTg3WAbYNFURUKUH58dMk6CaJtC8Jj8AQu1MfMgsVPvr6RpKcFJ9FqA4u6ckQw1raMam6oToM",
  "key16": "3c36eTMcL7igDPJ5V5d3yMhv9NttMZrhtvd3PXRQsZtRGht4dHHKnLz9s2ZxdBAGByfNCZPpqNPVpQoLvTXBQyuM",
  "key17": "54juHCyntou7oQkaPK2WPZTpoEoKztzLdjtNzqmpnrLNs6T3JDttATF7oEpnKWzuv1uh4aLSG1uvDXXABxpMAHBs",
  "key18": "3w9RXZ7nujGkQpF61ABsc6cKVxF5XL9LR9Q4bFzFFad6cJzMsbXU6u8VPyp6Rsdf6vV5uMoK6kMbqzcrUACCrdmc",
  "key19": "2QsSRFwX2QLyjjnRneACvCm97EueKpHErExCarT5n5sLE4cTWXuqoVsB4oLRzSyEB5z2X1hTyJSrFXa3u9bGUNub",
  "key20": "3zsEJTpCUVt6EmCJevqqx4cKfoMN8PVgG71EzWYwV4iwy3PTjt8RVkdCZQNyUFiHmfS5u6RHVL633YNxeZCvbNmh",
  "key21": "3nVvZkFxYZrcXGA7bmAfcdj885WP53jfM4onN31ByazYjH6N4J9qfBqWM9ZfMfFLZyCkxnvM6A99uafwBvwoSrjr",
  "key22": "5YEGY38ZRQSP6MikF7v6ZENZDv8BBP8ksum3ek2NL59NWtrq2gAGZBxsuKyZL3P7vTLbU91S98bsV5eiQYNGb7C",
  "key23": "4KTTcKG2sABjhLNfiBdPizk8yWWDKXqsuE3AiFyXvfEyBJqc6THTobJiMtTguMCEZHGSHLiLaWV95eTiDHyYM6uC",
  "key24": "4wjiVT4aQGdokf2enF2vM8DKV2UXAN8zaz223rBvyW1mV4368mV6BRgSu1XeZXNM3AxWShyiRgkXxS5rEyzgt2eN",
  "key25": "5Db6r7ERpkmfMVNN6h9XN68u1w8E51DsRJe3xV29AJtV5ycKUxtGDHmczjcecvTHqz5Dyq6Gc8J52gvBRiFq7Wof",
  "key26": "3QVxQ4g8H2m7xa5rZHjXqGGoACbd25eczd1YKfvn3oEmq8n5SytRFcMjuEhigHbUHYGTYW59PTNpX5ULsJrFKPHR",
  "key27": "48jqKBJQsac7vCSh9M9446RC6UgVTDXE8YjUTAr75YzFm8Ae7wzpL2QgjkPq7K1qAXqU4BfawWuAmMoi8hpbNeqp",
  "key28": "GqRiY16hXJaRT3ofZup6R1ALsiECsHtbwDjxUpTBb1ComGngicM6Myn4fnKSNSRN6t8jL39CP4XjDoLkpw3YnfR",
  "key29": "2kRWaghqXQqUTwrHPzaR3gPTwkiJXaiKyjjy4qD6bgh9FqBmkuCa7XP3yZVjhM2FiJGJV2cPtvuXuK2H97ZPmj9A",
  "key30": "4uxSasehZMAhnXNudhPYbVx6LPwirhUTVy8kwYKEnbze1gXnBUwaTk9HSdLQyF7qcX29RpRNMCBCc8EXpJ2csDLz",
  "key31": "4NsV5rkFHDDm9BDauPhyAX6Q2owziZXPpZXEFas1SUiufB1gJ4phcvVkaroFt4xn6rZi7aLUee95c9RJauVY6QXs",
  "key32": "5cRKg9zuuEVkTHK1CoQ1mLZdSStKL1VAxgGutt1sPxZkuUTfcEHWdkGP7YXBqYYAF5wFYzVxBZEV2PDZ6nQg9bGN",
  "key33": "3ZZtdZCyVkCuKzzwy6hPrRf9RtpYHi66NviAjNBCEZKWXcCKcPDJWk6WKNkT1ygVeXb7ZHMXhx2skahFZRvY3xVr",
  "key34": "67nrqLQovwyX3wrbjQvL8xNBQotkToyFaoXtpXb2tHkKy2Q6kNFNASVDaxxYVAr4CNSzmuHzKZ2aQztqVTXZEGQf",
  "key35": "3ecTzLmHyetfjhPhjRUoPGA1KTG4SJFG2rGih8Vh9s3snv43Ctz6WCvqfa7pjWP9oXCVpuz5zRw6rSRzQrMWoddb",
  "key36": "QM7VRHrhA3vtgSH1uw1FzmP2A9UkBcZqo2qgU4Zzj6bHG2YW8BvJLRJWSCCVJ8JfJBvfcGVbFpTi8sUKCAx6G2A",
  "key37": "cdVCF9rFHwPwFpDX9MU6pwzB3pR85hiPHyfQXH8Ur581U2Z2XyLkKFbvVLsaGCjBe9tCNYVYQPJDSsEp8yMs7sM",
  "key38": "2jGdJknzUSrg7CPziJ33wBzNu931hbMAwmFKi38HrdWa95VGem9npsz2bRrLbyMrEWHjDh1g8RQuVV5KPekr5S9c",
  "key39": "2t3hEYyMHoCckjDSbq3e9QSD6o3iatpFGz59cTCvNA1j6iP3sN5p4vnvmQHAFfbaktJthroyRajPrGArqMsN9AFp",
  "key40": "fnQc9TGV1d1ban6ea5R41WzmCeEddzAcvWAhJL3QBZ2EHuc9GLQUj83aXv8VHpA8otGD9kP4Dd56kZ5gf2XCF92",
  "key41": "4R7tLULmYmaczVNmMHwRA3N79FYEZT4LPxw4id4TWUyhRvRxT9BBD91peReX2ugYdjnwNPUpMGh7AyBBz7J48FzQ"
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
