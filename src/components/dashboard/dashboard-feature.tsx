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
    "4oWD7uUx7EtTk7LwvdT24U2aJ4aovbEkZrnZWgrvtC8Zs7QwExyGKJhVZkYkBRmWN9eC1ySHboDt2tYd5gH9TK6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KaKMv7gcW3MjMKyS3tiw71M4rq7J9c8YDLZNw8UTX36xtpuvkW54LorRrhsw2h47W1UAEP9oBPj6YVCdBFWrBEF",
  "key1": "5TM3h1gwhq5rLNSbmqSRbSSvyKFJCmybaZqibRdaK42GB3E8G1tNCYekNKx3E9ZVxB7dvkjWmoSTy85c5VzngaRU",
  "key2": "43q1oqoCWAkqX9KEpNPbkwZc4VwzSSLdpQFoqUtaV6fxQ2nYiM4dTG1d6sP4gpUp7voxGtRzhjrYHq5mN7KWxdBg",
  "key3": "2df2jxV8s92HLkaEoLGkZSRbXwQssYXDQSKC2MyBLddR88thBFKZkxNGNTTYKwC42SJZ3gkWxgtUqYgbB66WZ4cn",
  "key4": "442w9nfCkPunyebRw5xWDf6ZijHbSRkosgFJ9ynVR8boA8TVApLcfFRyFnpLyLgqdGX8AR2kfdKusWcs5Rgo3SFw",
  "key5": "5wG1hSpPrWtZyctYBtE3n8PWrSJsPuc5KtLBScGDF85qpG5cki4M6JKCeTqjpy1HQ5QqYaiU97FEC76s2jGUbmPe",
  "key6": "5UQM2vspBPTXHYS74cix1cCi99WYvQ5HfsaLE5PNktx4S5tYuKteEXRPycGMTJn5KGtrbJfmVbdSpZvysnqNsaZk",
  "key7": "5YDveeduRhQzoepZjqNiLVsQSdX3h8T5SBFTND7XU2zJ5ooYdANuSLY4m9KaUHQcRtqjCJU7g1Ygka984HssJgsu",
  "key8": "5Z5nCtYfTrqiHnGJy7ZdVwWnVKQvf6hxUtrBZeyCMKCQm1hVwYFuaZWMBSbhDrDU3qRPHrkwLDjRhCoRxpuJ6KNy",
  "key9": "5pvGuSyFTTtJCqUJdagwLjY6iSHW2DNVVjanuJwgsRsfWW2BbAW7Jjxdck8yvSbD63vkCyefcVDioS2e36pCbkdH",
  "key10": "3H3Zh5zRXxi8a5f3j8PgLMMfvqUMrdujtB7XdFLeceDUBQrdPXnNZbdTeVunA2tB7FNunQtMtKTkZiJ16cBAPk3M",
  "key11": "4euRGCy91ugG6vGBqUf7SYS9RRbwBDXcmV6UdXSyGQ5ckEdRJRYou6ucbLciLLrJE62kqctYxWRpErkEaASyRDeM",
  "key12": "5dT8NMmdDMvv2e3s87E9y5detNHaPueNmk9N4wEMUJnYyS1fL3svQRy99y2BwDR5KhzT58tgLfgiYmUxmAcHEcMh",
  "key13": "4BuNgvwG1T9wAaSRKfsWccBPQ11svbmkzRwLzftMc39JUxmvWKbTDCoAPtcXT6htJYX5YNoiZ36PzfNh6vtfC2Ng",
  "key14": "5JRdYz8gPzvunCbjUoaskNhozDAX2Rk2aHo47EPBP6QNuHmsFLz8aR74QrPngU1uZ5rQjnMqaHh6imt8XB3iFyZZ",
  "key15": "2rGnaiqSHHQGBFcvKuNYqusWwLsp4HVZte1JB7Rdot5fY2dGt7mPSZpRgZD5spKB6jHjrHngfsYhE9jg5VbgTFNT",
  "key16": "26uKKoJFYzkuBqb46qNZCaJkYBU1QhxacbU6J5xeijDW7Vfg4yw4rASqKH1ok8Cz4HVioRhbqpD4PLcddSrCPEpC",
  "key17": "62YT5FBzwGi2o3yfYXu96kaFk65YPQvMeC5UqU6yd1EQWsT8TaZ9Hxn6csN6UdY2LEwe2yv6zFbXRTiXw8V9HYGa",
  "key18": "3ztsiCPAo9NKTgpepMya36NSyHpK3gHudmpQpjZuPtHwZQ566dTTbJHvT5XFXw51byuX5Qt6NsUjNopsWKBKu9jv",
  "key19": "2DyxPMajyEXqvc28J3sgmprUc1jBDUHXhayNsL1uniVbpjXeQ4tKgpmmKg7QDrSk2jExQdvEm1BGLEpKgevtzoh2",
  "key20": "2UqrjdDhRwDBZmsn6PSNCJVUrhvEwiM6ihWqAScdXTCGBbdwf6JxkyUSEhz8GZYFm4UBhsWXEDbQ5gbfKzrAQFWv",
  "key21": "4nBvCW3oZMhsKhwR3J9psy5XiknHgCMgVYxX1Jp9DyWbM6Ek8aK8V9rkBqRKK8uDBJGBMhQnYFahBSZ1vS5tE1uK",
  "key22": "fWcqTLtfbSVdgbjSEVUeXUS8G38LoPWry4Fmn81HC6h2a6D9yMtbCi1xtbFWn448YftcwyAEMP9a5heCszUn9zh",
  "key23": "2uoAhtWN1uJyobutEWfiatXhVVj96fssSYfSs8rFfqs7TzhYRq6kz722sB3tEfy6y1jhuXc9sbgJAEyNSyLWRkWJ",
  "key24": "oNxeednMCtn1jHkyLUQC9N5gJZbLVnaxpY6iwk2f1cm2Lv7BN3GhmK6BzRRy65k49UYjqngP3dDiPWdTHA4ue8e",
  "key25": "pZKgALcaV6Vs3WBVCKuvEpT4CkqqurzxF8kJdGTZhyAvV9BFYnRpB8hcrMGEMYJVFJQKaaEXYpHjaHwxdLiDKJH",
  "key26": "5kkdqgvSC9vjs26QqmbZicQAeXWtk2TpRVHzzrFV75Hs5LwU2FpZR2oLwhCS2LGxsQaBNzJyxMhveshDq7G47Pjs",
  "key27": "64x36zy12EwcwGe94W74VCTWgo6QXnjkw25cdym3fptjMHnp96KVEmAPPo3yKvGwBdsTJW472VY3iGq3iavVzKHq",
  "key28": "3Tao6gMBt1B6qw68HWZLPhVvmEkBbcL6iS18Hv9B9vDyCR1GwdfrQu2jDWzvM5xwp7PLbdrmzcdhXi4EFsbuC6dx",
  "key29": "3PRXosEmKBERNio3gCjQJvjUwBanG1FJzviZgBmJj9xMFcwTTk8u8FEjPZpuJgoUZNzYdYD7a9XNNYK8sohEsqcE",
  "key30": "2rhhjQENWmiD3EDMkU467G8mxphzANzKrmaRYvuvRXr2Y6FVj8VJrnMUPKQKHxjTRZsnJsRDwgbhSdGyPvKbCnY5",
  "key31": "3wESEQSLjQYDU4E26wg1PMkWcGXQ6K5pCKP8noPtnEZQFNpXoYQCxyQqMWLaKv5xPi52bVsghUSrBa9UCatTr5ep",
  "key32": "5SkBt2q4nb3WwpVCFL9TNdCcnvdn3Z7uhGgwPYWEeDX8KZkrmTwnAbG6fxR2U3oM9TJYP8JWKakVjMHKwcgra6iE",
  "key33": "5YsiSvCuyW44MiLutbrUkGdKxe56jYWaQopZ3rQPUy7hN51DMt9cpRayEZUEBYGKdbBCkc89Zo1nCm5vcv5XFLSU",
  "key34": "4LR96hF2guAHMhhbTb4QbaY1RDtB5wVyATuYYhKGdEy4adm7FUwDJ6u3HQnRxSgsqUKANkUXNjDSnSHwg3RD8BbG"
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
