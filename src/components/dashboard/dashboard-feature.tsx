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
    "4Wfzr9SYSQnLjE9dTmb2uUy5bnnqkaJNiHmbg5onJSFh6mVRCg7y7NwRh5j8SbeymAdwdWPtqYCPeSEzk7t2h5pQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4px4tzezeagPUFPFVPsWo8S61uyBjBVX4NRyQZ8tofEXEy7zFfPgqYu9nWkLp5KwhiFxzPysuXVZQ4uGevsTLYV8",
  "key1": "4jkeqzyRBGpBChBDakofRh3k8VSeoPVxQhGVgxmXQnGP5t1uZ7hADQxST5knJW7eLgzwXZKe1fbyyYZm7LChYGfh",
  "key2": "64Jr6WhKTzp2oACQnAC64EhmG5DZDjptZ9jJXWqGUwrwHtSkZHAHnCJTzYRoj3xsTosCGEFmKGfGBCfqC12GfUKy",
  "key3": "WZEG5zVHkwdkmMukMDY2W5aqUJGFg8vE2G4dnbZUDZrp8ptXLaNgj3EwQeDtaXwnaS1T6YrfEyjxEpNi6qqDCcQ",
  "key4": "2kudUz4Z1q5NAwRrgx3PXo12MyqEmVJ8uMjwiKuefp784LgEaQM72VrGZcMXwvbRvNgZfDjJEYRhPQEQs82G8Uje",
  "key5": "hoR3V9NawSfYp6nyFva7kQAPsfRzbcgUc578gSvf4KRSVwaR1s7X2cNAgNq8FzWkZi4wRTM6QX2YaurufmjBRxr",
  "key6": "3ueDQA9NJThUktXHus2y4vPpmsfz2SBnZtDiKrDacxXs9PTYBmthVUDztwEHLU81Hj69BA7qoimZERTm1EnWnQ4N",
  "key7": "5voWivqbVfWQd3x5jHKqDF2oTUEWeMge4YZHPry1JzHNQ8b4fqutT7Sq46Hw85rdgC2A5yk8NHVoiTXbBeScejaA",
  "key8": "4RKL382Aok88ZG3f8bpdHGtBhutkBwnmktST5Avw5rUX3pFs67UbtGp2Ko9yKyPB7RMJqSdxyHgaPoA7weTkBvHT",
  "key9": "4HNgi4W2En7t3Zq95UCHAf3AFshqedZTPjJmMyY7HAy3AZVBwPUrt2MhqyEJHeMEqjygd9jxasWe6HQuQYoYZty8",
  "key10": "5mVbHBj8yogmhwtswmiWMt71qHhPg9GwJAhFVN2hQFNBw35aSoQHy8Y349qq2FKK1sCuXC75vzmJWYKXkPzLxqna",
  "key11": "3mXi8NENwdf7jm5KSpT7C6aCTTYfqKwJW1jwRL8neiHxbe42DqFEzWzR8MqmYD6RvbNMZUfywRLU8RKg59JMLwL7",
  "key12": "3zMVUGEfAiyiTRF4i3hNRHDHLC8BiWzSVYnZ3vNrctcWBNfoHqnRZUivkoU3S9inYdTr8b5hPg8SWLtsa4an41Tu",
  "key13": "3T3RtXWSSQtVVX55sxDeQ4FDBkDt9CFCKqDmrmAB2nvjRyYvwFuFc54Qg5E9EvwhAUuHvboBcxi1DXJkFrMFParB",
  "key14": "2T3V4jMqRtGwFPk1gQ97nsYLKRZmS5ESvX1CJz2c2krHqMku7Fp6fQaPCWYVcZeehLa9JoQ1rLqi3jtsQBRSqamK",
  "key15": "4efYD94xVT3YDWM86t7Bf769PYmr3cdRLHkPxuDT6nwEaGbUCjUkKDmebdDc5A7KiNEG7q4KdzWDiELv5992pBEt",
  "key16": "5sCrasrAwWnYpDqv1VFyhBeMNpEyc948f4fn55NnLqaanTvKRcanS3GbNw1xPPNFCV4dqKrnJYuwRNRc55aXnKKZ",
  "key17": "E8sM4Y64cQEQg5BKVFt34ZyrYg4gDyyJ39VvogXVZNkvnKwL1C55E4asrieRF2JHF1rhSt6XqYGZ2x688sJLXC7",
  "key18": "27Bq3Q28uq8SjXw9W1AqotNVkbf4FYRqjv9Fi86fgCdRxdSsqAsFksnx2JybbVzzejfsfqpSFerA9KrtTLcsF2V3",
  "key19": "5i3TeKXd6v4eJkb4AUjKQoDi597r5rnmmSaS786nL2esXXNFRw91rPWLPVCcgiWiUP4zohRxN6FgAguVh9MN7ttm",
  "key20": "5zhL6bapWnsUVkztasNu8up8Zrs8xt7rzgXAZJ4st7Z7yYwNew74ErjWyYWueK2yZGmPuhMu85ZLynzahvKMMu4A",
  "key21": "19baRCic5tUTv2GnJVYbhiMjjMxCLtDssg7Yr1SqJeFdAB2pp73Tx5fmgtnVRCrUNZk5vsvzPNU7zRYcB5ZhZR4",
  "key22": "2jAbhjzNwWWrk9FuJEurSQfUDqUnbZ1WETJ6uXrQzgjPpdm1QQL1phAN4d7FtPe21bQaY7jgaycCHBtVaqQtuasm",
  "key23": "28EYETqqPzrKjDYoWHVG4HbidgCXkuixNRjDqxmgv1JZhaYaUv3rvF6wvMeDdN8BeuQehTtrdq4tdSzZeasdDDZY",
  "key24": "5jSLDjHRK9VTaKHeitPYq9jzujzpbBG8NAoWVcBjNZcizDy84GYjPX2wsgzbJqRz6XU29iYMmUxLUtKByEBGtJwf",
  "key25": "x9TNMc3FNydFGQRLGjiGWYGXA3wdTHs2VotHoHWqFXYkuwnu2mNTWrqGhBt3SKBwYdBe2Eu7BVh4kFNMbs7MyJ3",
  "key26": "4dUNK3ZuWkR9mSKURLTVseGwG5NmtWQb1zvBbfHKHeXe7Xf3RzBHtf8dgQTX6Ei5JiPdzcPrjB6kmtZceueqag4p",
  "key27": "4EeqyApjzx6tvf2TK8jRc6ZUKx9aXX8P17Qxexz2prNhXcJHsYkHEg9h5AvGbrhVZhAg1M3ei1JX4neUM4douHaW",
  "key28": "5tPQNFH1wj1KHsPcQxX386Jpo1LToYofFRpSpTYwrnND8DdT6skiz1TcKP41PYhaCZQw25x3Zkk3yftVpVCgp64o",
  "key29": "38xsBZjLVTrzj2XPLhaFwp7ZbHcw8tJG28dn1ejAEQbmZbqzGqXMvWBoN5yVx3sdeZwVr7GNRGL5ZWA9NCYwBL3Q",
  "key30": "43djz9PqnzhF7qNMqBdsUfhNxyjv64Vc9rixoA6JYvHXigQaee53h4WXWRD7MdfcX1btcFbXvdTnzXd9S7y6FCJU",
  "key31": "2RcnyConxqrG6xfP5twCKz4ofRDLbkysdLcpiiPUTgJgqb2adPeQXrVVXq3YDqeRnXtxUiy1vKHVaHCyuKNkfZJW",
  "key32": "3mgYs5ayqrbrH6YTM1GTTtod6m5xLY1CWi2s3s5CfULKktQ4hpS99LqXkWquzWpt8qVMmsxgmSK8UZLjE3w3MWHP",
  "key33": "4rxoALnf7UPLGXcYAMjGTQYNW227AGJ5JshCUhvMUvWJoNsw4wrWdV9vdaYCDf5dCmZV5vtoYvX21xEGMyGi6Gez",
  "key34": "4x3Nt5HyANtREig8AhyaoCNkKQTj6VqqTZstZak6J7o3KZfrSijG5UiD5noiG2sKQmKRdmqhy336znhHxqThdt3b",
  "key35": "TJevtrjpTLLdR3GmjuYmhTZYcpcqPQTfShFpK7GArbApLenmG9ueiaR5R2HEiirkeSdMSTqhCoLtAkGERXd8UZp",
  "key36": "4KrKe6LWtdDD6aqN6wuEsA9LBQHuzABaddxCg5bWM9KRWwn9gGmK3gxB5TVWWHw2rZzgKyFqmtb8d6BKdCGZu7Ya",
  "key37": "46QRXVFXYZEiTKv5qvCRU8ho4jtxsChFarqYnyzyqhH9nCUxcVrXegyiXr3VDBm18TB9Maht6gCCcJeKKaFftvHp"
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
