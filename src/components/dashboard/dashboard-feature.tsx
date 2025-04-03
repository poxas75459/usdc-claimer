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
    "atCQC6m9ucpPZXSg3Y2NMBghQgFLvZULK4st1pnocbKSmGbxuVZUmSphp2ZpU4ednSLUCHBJseKXayUQJwx7aGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c4Wvkptp9GkA5i46pNkxjWW7BRZzy7QL16MKP6gBnyVRknDWWkay6VWYz3u9S6ysD6VETCEJFXhJDMHUZoSqtZb",
  "key1": "xrgrJuUjFFqj5QSsd2Xt7Ksw9jvdWHkAXVfaYtMFnMuKaTaWxrHHHJBkiqg23uwNDvKjm2bkm6wcW3XjfcAunkC",
  "key2": "4jJm9dX6pgK6EVLscAKcNQPcNc23ggucqexk6KvdaVSgXowHEDMdp7MYQKguJvHJctHkbXng7kPdwP1Kcz4tDiHv",
  "key3": "2pLAa3i2TFcpvFGTjfKGApfp48MrwL9iq7hxCwJ5MnzV1Z34gmi1zXJXR8FGU53yCJsBLGS9tPtFuzMUt4MzGmuc",
  "key4": "46kdfUXeQvgDDbNM4HcRZNHmy5Di7epQS1u7JtXApGv48Rw3hNQrvjzc7xoESegTTR5cnugkMrr3P6HtYQAU9YGf",
  "key5": "Jjc5XPozaFAjdeGroEA13ioaC31ZSimGgvZyRz5rf37g7byPr8dsVCKmsNdCuvJ3SXoyMmsWPZsokzb8Ki6aoVi",
  "key6": "9b4vnKjDxznci1AQ9qcsE2WZWSNNSsw7jiDQbVSuW5jm9wSXM6oVCpuVwamwt2LEw5pCEdFVC6aofLHCr93kUDV",
  "key7": "3qWbHiAxDYvL2qxcVg4LvGkWYBLPPPXuFWoTu2hLbLtJivWBMCj8L1R5bv5tXjPABRV5zah4u15dC8yWYWhBaQL5",
  "key8": "3WxRB5jA48QeywjHQeyeWH1mZfFSFzc7h5tTyc5Tp69HKj68QfF4rH8W1L5NSh8irAqLeYTrYNNwaefmmeQiF6zY",
  "key9": "47NqxJRxcCcEvg6N87vVkPhkNhrAZcKoHPFWrh7WYQ4mnHDVdRRxYsLHXJKXwv22hr6KYk4ZzDUtGyxgyAR7aD7t",
  "key10": "2Qxfa2BZ1LZzuYgyeBsRZHQnuSYnwxQo1ppTquAKMcP7ANFaQSfW5UEtRGQXNcrRcx735ELGfDoF38YMfPrmNcUf",
  "key11": "3VufrX1ADhM1sXyoCf6E8a42TXxbm4XrcxuyFwqXjjDVtyRkWy3PawFmze4YtuJfT13EymEum4EhnxGk9w5k1718",
  "key12": "FmbVcZBDtkNZPpovZq2qGMQBwo5PivTBvrTbpDSzJ3Loih2deJeD5GaZGo5iVxN7pkDRZA23oXUC5ABysUBz8ad",
  "key13": "vLCJWVFxZyNHg8H5hv3KDjC44gAGMFkmNe4Pf6D4ExN8k7SKQte6eYdnxK55CWpWxWmx2YDewbAVrXc99boTn2E",
  "key14": "3fKYikJKKmoNjzLhnNs9ZKusW3JFKqdG51X4mXPKpys77ykf6Rhpdoe3XvNVjBHcxTBStfCtzjpSRfZ73acP67qp",
  "key15": "53kTWPjHe2scjMQcyk8FiVagA9qbWz9Yawoy2xbWjNMxEu7tNYoXzJzkPE5Eym62MFQnq4byNbtmssrRv7UzsEEZ",
  "key16": "3sfkzjxNnmrjeB4hRKvSLvWvCn3vd7SxxZFN3SH7dQpyVSAtorAyP8u2da7gaRSS8J2nYUeDNnxJ6x4tscjrb8Lb",
  "key17": "2rdD6SW4t1YbNHLXNz64N9VdzGZbmTKPbguqamFzqqjKgUuV8sQhM1DHyQDtu2mjcjoNpS7ZWgeTgkQFJsTwifdj",
  "key18": "4KjAY6k3XfwcLJS8MgzHGWFaP72Uo6edDkCSGmx5GmemCXhVUGh1vaNJWRZmmTBbATZcE7XoZmb6oYCXv1VMYtPF",
  "key19": "56S9WDtVjrsyr1Hm9toaUZ2dyZh5oKwSe1iJraHWWpCX6FY5HT6KURm9RKbe8rAMBsHjvLRMGq8tWpZzcRmqyKxA",
  "key20": "3728YEc6kkzb2nwzw2xanW7M3ir7s1S7cXtT54zN5T5zVkK7x5mqWXYuQusr22PRd1iki5pEUZiqv9fErmTDkmav",
  "key21": "2rSreMA4F6ZTotFx8isGhbG26U34W9oP4PbUXv34tHvB1pG1DQxjpBoBCS8PFjXtANCJGSoWSo82xjKCQ8gtAkFZ",
  "key22": "5xVSR2iPPzvbwCR8mF7MbB3Nu8o8J52khUpnUAzg6D2EvEpPSM3wy5YzXs1jAGArGErYoS5k9CSxXokwThq27z47",
  "key23": "28vJnAwvATAC8tyHwGBAyF6K2HaezkoUTxAAZSDxpYFqxq333Gcj6bq9Hn8XgBnJrYw7yJeYhtcutPMZkaEzv2gX",
  "key24": "5RmBcdQuVRJa8DZeFEzEM9iwuHx5wz7hzKj81xiJ6vmM57RfhqCKx7BaPa3rWRD4p3UwqNy4fzA4SUyEViDSFryy",
  "key25": "368yMVxGKxJFNYXzLykrgyucbr98fzwHP2yn9NfQxShaY1LANwwuZJMmhN1Qap4RUFuE1m9vBsMgSjjSGBUofScA",
  "key26": "f1KuEigCSjUzJMWRefjqHQj7kqB9ei4hRLfpLL7V7KictMN8iMw3x7zJhWGhTAogh9gvpzMZ4XNV5LdEZLod77i",
  "key27": "gttQpZJPjuJxm6KMnw5GXkGiK9RBpxMUKbTPRWuduKk46nY1u1B1BELm9V81Yp4LhEiThQ6PVJFCD52gvMNGLkd",
  "key28": "48khB6hVfKYKm9jVKxX1Jzr3ZwmrkTe2QtSsqynrkorVe2hQYefcfK3QYoVRauUFyGbDoF4y6TYq6DL5USLpxGDL",
  "key29": "4wFzYpiaqEpxMXkfyQXoshsbKdL6pAe8WZzBWCC9DpkzPWyhM1Haz1z9fNUoLZyWrcnBJjiEfRyF2irWRZ4azLqg",
  "key30": "3fDb3NjqaYmRAu5tnuszpgSRWPkcexwtnJjNEbku3cnTCtxH37B67xLxkdafHBsR6Ketus47WKc6kmfxG5Qudsas",
  "key31": "3V6QD1vxXLFYNN3PYRLsshHCZCQ1EVWE3zDSPrDJRj7haF3cD5VToVzF3FjJarfGr454VLutHgU3j1YXgqwUEgSE",
  "key32": "4hkCwqEAKr9QqvV7Nt65V7PJkwhf5drG1ETNFkaGP48Rs3Qh4CXgJ42FZ8mLRNWWtvrwmujx5f8eenH4tRGTukKd",
  "key33": "P7uZf4KoxoPmNLQHG46Zbf9UCpbzTxYyAPuRMJEaEH5SPKhTnSefFn1r2B45mr7RTA4TNhSZCKjaLWZe218tShc",
  "key34": "52Cb43ukPi7EWdvp4jktEzPukAvL2bM6DzPTLMHmZa6zhmT7kKmNTTz19MSxXe9rRWsK2Vg11oF29j8HUEYiHKB5",
  "key35": "41t15PCWJZMHcRugoQoPnHrZaKwDcYmWFppThNNwSzPNvhoEDWRr8YsZXW3QsFYN3Ad5Xfg6NcKhJYVNKpfNdDhR",
  "key36": "5YMWVm8M2Ri6DX5ckXTyQE6RucLJU3Du8DD5j51P1awTw3TWbW1Ve8GyykDW4atfDh4NZPE6fctJUQjzsLuyrNDe",
  "key37": "vELMu88b34yq7se8YYLEMgvuEx7RPnHhBZtcAEuCLA6rCgf3GW6GHro21MFfifo8tXoY4piP2syVYUte1Pp6wSv"
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
