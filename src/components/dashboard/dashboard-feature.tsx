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
    "5gLZnoCo22vbqBnnFZifKKRtmgjfgzmcSTBUeuNSGzy4k7yk1z9ULG2sG58PYvQ72VS9V1mMKxUdoj4Bdm4Zb5DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ufs1sLVcCFP6o5BwZ7GD3CpYq5x7uywRW7oUCpgdNcbgZcVohPZFWYiteDYdRFQSqgSrDyzwkRoQfrtSne4f7xu",
  "key1": "3qkAmvLJeuh29UfDhNYU2huRxWW8qJMuqYcSrvrWjbZMqGm2dudyi1yDHdWsKocZK9yrSdPQtHigkLgrzrkGFE4g",
  "key2": "4iMMgf68v3ggwqXSxd9StKtoyMK2Wz2HLF1iFgYxi8TybeTuKZKCWAcgWUZYdGvJ9tW3yRBJEaaKxydHfJfhfCFM",
  "key3": "2ht9R1JkvCBLyA1YXaDwHQdyAr1DgL4nUVqo4waVV7NMoZDjFZS1kkx1CH48H6x8eYkkjfbyBL2RqYZgB3odNHX7",
  "key4": "5UiTtBf947bXgqjhwG5WSXtTbNYxczP6z49a1Nxjnv8xhBrWSiEdwrAt67fGey49hc1bh9NDT9y6Vc244EfCqDzT",
  "key5": "4DmaVDt8U27ZXWDNUWAqF9TNucFAL1dye3DnHPWkLBSZnVZ6BDNGP6pvZC8A2Vo494gtG8TJw9bakYtUJKVGaGdN",
  "key6": "2DCAChUz8hnJE6iVHXUrVL6Nx5RGRpJjmc288W99eCVEcc8JSDrgqoTxe8wqtewH2tmovZiBEgsXuVVWJQHAzq9P",
  "key7": "2jvCiUKpjWUDaFfNCHwPp68zFk2hHxD1yKFqatU45NJVpa5otwrR2a36RFxDTzLJ6n1Hnn3FWtWYKv8PFZehqzMc",
  "key8": "2kSbg5Uh9pBtW2PG66tbsrPFiLTpjFzVBNgcw3pEkqT9snkYQaEWBxqaNnrLFCrSqAW63p3cLhbJBUEz5i2MUj4F",
  "key9": "2SDhvfQCRD7kuGLcackJyxiTp6t36PGF3JQHNwWYQ32zfXX8keeYPMPubWxHCEsFvSMPBkti4tD6QAYNWzDKfPxt",
  "key10": "32hUbg4TgxWjsj69odzLGUWHcha6MHKgxTmd2PS3oGegLRaoxLqSvFkAvz6keskmQK4Tf17Da2uDQ9wrFhEADqh1",
  "key11": "5wEbFnB7BsSgsBWLaZ9ksTg3fjbGeY7M5JLYWjeVrCU778SD9iMdPGyRnu5sPaXVga6GxXBZGdA4DPBWRULqwa81",
  "key12": "4qpqPdbgxwhPmgpGDbT3wMsxXz1s8HL2Tx4ri4H9EeQ5wwxjrCnHcXxg8iG6Ecmm6ChiwYPcGCRkr7ErL13F5DPq",
  "key13": "bjusqMKC4q9yTfKzD25er8RDFxmvwhnzKTdVeiB3zbuAj1G5Xh6ureWgQaM14YwWyambWYxoPfJiJUjacZqaPWg",
  "key14": "4nm5W8FTAwHwVaQFgZ9aTtsCFYB2VvnVHnDXYUDYvWAPTHYoDNnYqcxJR3Fxu4bpAF6oMyJzbFNakxXHch5kH4sy",
  "key15": "5Bt7AtuGV4tSM1CBeu8hqujf2cYAwSzuHmVyEYFh24J5vQo7nck7PKs5LJC2hWSfS5D1JGcKUgxRKLiyb3ooecFx",
  "key16": "5WxPsfuLSvhHJrdeoqVqNHn33ckALqv7htJq4fNgVCh1EmoUVqsGEWUE3jCYVZHfEUwD62ieWEtU8LcvLEmbEBZi",
  "key17": "LjtF1KXNZXtJJGbtYQhkVF4fCkm13PCuKCzyPBhHn1F6mzHoZPAvHrMYdqowEUA2gPm9By5PhfmQWe3wh4Kfowm",
  "key18": "5cEU2hHU6WCRbtrCPkCQTMS6rdJWAvgb3N2crp5RYYb6AnAyrSQ6kC4tkMih1Xf5dCbmPunejJZpgCZ9sjFjSDAE",
  "key19": "4xdoLxB2DgUHErD5tAhiWu5nxyrcjRsQVKGXNZjKjZfLu4bqbvPFPNJBpJnUdAJ3JvTnUfkqUUjaWMRWydvTMzaW",
  "key20": "5Fusb98X6nwwwvp8BCarie8FV8kXdFr27tFThYsBAZCZXeSp7rbKtdMJX9HHcSSaykKZ74foGXpXSqXvVXTxif7F",
  "key21": "35QyRkHJzhTcSf5AteCXmtXJ3Nd2GsGN7JBuLqYnjQmTH3UM1aPzGYFZJc2idqufKTx83XbKsmGk8F4tAoBJqjYv",
  "key22": "pxpXpAwJ4mX1swqh34YAX5NZGgFZR5YXJhSTFuqSLWfbEMTRUTypkVTSfJTaR5WbEz4WHcCPH5LybfDn61mbCDH",
  "key23": "zhbFpaydb8rCbepHzTpNMWKoFByMLgXjEi2RbkMij8zRLDpUcjrNmJ6VwRgtgJ8w5JLcp1YpmdSdkBL7mtM3MVw",
  "key24": "T4vtKEbpia7456ZcysdZFthziZHtpxCYxkS6yBAdBZ4R3Kbdwa6ecaGSxUoTiZDX35sV8Vh5yxKQXEcPd6CZ4kZ",
  "key25": "5nkULdCAJPZxkmQQppN6GbSGvnj7z1ovs7MoARK1Gou6cory18gbQazQ9YUnDK7e9NVS3QYiUz1BeJzrRRk94uvk",
  "key26": "5rjyZn9BJ72bH4aNKKiMcdaGqmFi4u3Vgqb2wEdd24Wqxxne6UVvZvNhC9x3zfBbPxonGb2b6SCGEE6MZawcn2XQ",
  "key27": "5sV7UeM9JgEqiUqUwehD1R1p7ag5jEo2tCHTyU7ZcSyis9mM54pLDih1sUevq96vPU5d44DqGiqfBMi4e44FbCSD",
  "key28": "4zPuSbc18nZSMNH4BRHyz8C3w9EqnYGjUtCGbktmN2qQn77eZjcCTpEcAvh8NLw1KFES1ATswSP13rxf8z2EmtYH",
  "key29": "4gZp9vSjuLzXK5hPF1cnYc4yzPJ3LtS7TPstHhXrmKAYbeQqVBQzz9xQu3D2NFx4tk46yHySxaMKHhVRPEdqZAba",
  "key30": "3cuR3gmt1QvgMEyMAJXoxJB6sNNTEAztr2KMib8wzSG1n98EkrJD12TBPmdHyxpVkRpvS3xFyRfHq8UAsHcryp2y",
  "key31": "2mw4g2YfEahpojb4AiPrYkWk82dSoXrp6QK55TXf4shVTvfJC1h8jhxYKqgdFbXTbRps2o2BjifazqDLmfD9Unek",
  "key32": "5C3wgmUdQvjZ4mFiZHP77PYWgEQADt8pNwJnY8PcNBdZWrqnU87SDkhX6ohbG4nvziBqJKMWUWBYhsnzbMh8798z",
  "key33": "4pJ6xZMzbJKeKn75W8wtPKWHnT94akANSkqLPbF1HEVejZQT35wLQPbcgMv6EifWSQwn2FQwDnbLrihtorBj2u3s",
  "key34": "37iao2gGqUjmAEQ88nDFFNLVM3M3moQa2iMqieSc6RdjRXik3j3ycCWJ2ro7DnmPjJayRpDhnLKPVaBRAdpkRWGj",
  "key35": "vdJwZbNuLLVuTFjPWs64b1q88VF4Jmvi4HtFDpk74n7JBNvQmk3HkswGriw6xi6mmSXwKuASG6zM989FS3rqsJ5",
  "key36": "5aUmjzFNKPx8V3J5RUnT9eviURuEhsUjJj8kTguWguSpEHyXg989S8Fkz8iBTH6w8PFwAgDHYhfEvBCW36BVeny9",
  "key37": "3oKGenvMQaBAPSMNxUwJEw9QqadoH3zDmWxWGK3ndbyAw8ozzqnDj1SB6mLAgGR9hXk8a7ywdGLKhvLJeamUUDFU",
  "key38": "63c5waemR8fGKhMP72Vu8YBS77zN16GUyMfdnKWWHE47mF6oi38pdQnNuy3MBrWCzPTnxUA4KJ9oQz2r4R5TJjys",
  "key39": "Q3sEmKdZjDTnejrEKn1DHWoz7q3MzXd5xzniEHcyQPdAKDtb76Gi5Dsp2umsSe7EW3NwMwheFjDhtpaUmwHjGi4",
  "key40": "2Wqej7Fb2yriMet5WAjyiRhpnWe2q1W7Z5sEB1y2UJeZ6fAvZ5oUpuWV4GQ1ma3DHAcgy8hnvEgz7WpZ4kaPBW6R",
  "key41": "4kXNb6Aukkw9FA851HxHg2v1sD7pLYpLrkeRcoHhsVdJZB8XymPJYhTmFuLm1hGZAZf6urDHhuP9kwMDzdsokwCo",
  "key42": "2CnQgqXvUEbYxWhfhaRFBX1WPMzX1HyRTLG6c6KGa6VB9wUvzbEthTdJ2BreJdnCWAsu5D5euDmjzidEDgbPYYvh",
  "key43": "5Y5ysdL7YvKy3fTh8WqCMn8nCvCksZVLQeJaeSEfNURnH4KSfgodbea6ZT4yw1nunRNEio4zSRYC2hmNmhJCzxMF",
  "key44": "2i6g4vsiXHd2LdH74qeztYiUjviHcZYVb1JScibRe93b4GykWaijWm5L92jpLX55MdeDkXWu6xwaDpN6AmpMnuJz",
  "key45": "4rtRkccfeuYmipBzpacK1Y1N9imNyt5UzokgHXdGtQXuv2JHkyvC1aevFxJCCXiRjrPzv5Zzn4ZJn2k1XfZzUWeC",
  "key46": "4w7D4myWMCYAuLEeJJv9yvLwEZG445zzXdsykTxRuvTFUmGcMuTMiixbS27TzCz39cWX8paz3Mz3hCsgoLPcejQ5",
  "key47": "nsMkBC9bbMu6vqsL54FGKWikL9MfaokMG9aNpmjahzY4VZRXpNQrwBtku7JQMGNDyAGaXtNrNMJvsT4eFG7Toay",
  "key48": "2KZfNTdVcKDYd6w8E79EiXR9bZgqZLHENDabjwUJJfz8WH7svkKESKtz3qaz8WvQFwejuD86o2X4xUP35PwPNs8Q"
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
