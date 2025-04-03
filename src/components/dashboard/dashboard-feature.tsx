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
    "3YrYtJ9UrBAF5ZwMmGULbUodb124TAqnBb4HMtgDmA1kqczvCeEHytSZyUM3SRe4oK8Zwm6n5hR3YarNBWMHZicD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eoENpsqUFbYPXCGd29NjB9H5jMPSmbjMnEY1yeee5PzpcPh6uGjsqBQ2jmPwzeTcDLQVSTodHSDiZt4wGg6aGNP",
  "key1": "2GuzA5bbSauR5xLN5QvshBPstW5j4mzbQmAMCKQGZYnofeFt75vUXsYF1Tq1zrGQD2Gc4pTY2XYBMXmdoMKFJRxm",
  "key2": "3ehuPEjEU1XLRLwTS7m6dgZJKoix4coNmumvWwBwvfFbm2LRU1ywzvtEGn1HBLiNTyFNMb8Mrb4yMYAh4gH78zmj",
  "key3": "3ZK1kTv7UAZZ9JvVjaYMufKVJEYq6AJ9H8wDVVFGWe3zH4HGPst9MihvhCN4SvwnUpyDYqRaUTvjeeqrWRCED239",
  "key4": "4oBwxosjwyGfMKFNZ5yrJxp754rJYEu8DJGcg2XbsdYCgDF7ccP4nWK11utLStvP3GPx7T1HTMy1pTMhWH9L7sXw",
  "key5": "3TXLtopyp49knfb7rx2xEPzfPfmqmfHCa32ko4TfxLFFFGFrREU8fr3jqGAtVveFFq5EGt8BE1TDKLHUiPx3KxLY",
  "key6": "5oWMJqRm7gSWZSRWkNnZ4ADTVqDx7fa4ZD86VSKqRLJUhZ1NUgW7K5hPYDfdGmCJknJnMrYQ9wYG8ijbDR98fo23",
  "key7": "4isqHCghpptzep8xNG1kNZDDESX2yYpf3yFaxnXBqYY1mff3o58etT1Lx5BcsTwxgVt8JpRJ6j4JLLeDJ8xPFchv",
  "key8": "3TaPe48YHQZ9L5LtYfBtgB6aGqfhvgZ8NmePypC6twFxTPoV6vMXytA17JdJde2s7BNZyfEZNggJcTdBJseADH2p",
  "key9": "4FnoHucB3BHnqqjbedUCRRXKTMWW7QAoT4gdFRxKavkSvJo2X7YRh3MHU4a8f6XbCtyDXh3yUpD8iJC42LLBw35U",
  "key10": "2RYYkKdc3Ze7vBV7ZonNjoMk7rmNXjLQKrhGv4rSAf7QW5eiQL6bh4PhNSVRotAKaczxjE5jfoKWTeifQs8aLCnd",
  "key11": "63jkeAuhoXKdktnJdEMMQhnFo4HJQVCPbLa8CjpykywtSDViePnkLR6U5rLUEMRiTTnsiGFLrSDx4Go5cLFdwXHy",
  "key12": "3ETYZahjoBRbKkjiejk9ag62u4ygpEhq5atZHWRpe5W1Nucv4YMwXFLW3eo5D3sJCgdyjp2Zo7FCjcuaiJ2dXLwn",
  "key13": "3hwBpcTEQjHsLJfGwhPqavWtHjSujAP14sabQmvJUx8F54xyxrozFF4ZyTSyjKvuGWBbXQ1UrW8UZFgxTtXyaSPi",
  "key14": "58atmJLJDzKFeVQn4ixzH65yN6VfFsetpiq3muJ6YPPWGAVBdfpNwcDM5haAcbqYSADBH37vk3fU7LQ7VayiDFMr",
  "key15": "FAYV7FuSiCwtugvzjoYzK5qA8b4ypviNg4Y67ydigA8ckB51UdwJe3i8KX2rKJWtaosL2Uytb98VpUj416RdLSy",
  "key16": "Zd1JKdYHm4sSgSgdNBLyztfccPYY9YT1VSfkyrPpLksaiVEzXorQy83ZE36mPachZgaNkuUxRJ3ryoYd5RAo9MZ",
  "key17": "4ypm9BbA3xBJPSrbnp8iQiobHMiQFPuiJPVumuoxFKgSp2oSwzchMcLbSHsMQQsjf5dW8Zm5BZm5XqFmjsV1NXXD",
  "key18": "5zHdRp21zwZbHFrb4zSyng7uDagNX5jhWc8Ta9seTKT8D3CSkJeW8RJd3yBRmhyN2Jd5w7TntqWjzDGrkpgJJBvT",
  "key19": "5NRPiQKW1Y1MySuqg89ru1TGn2CDZzYtVMZFBfsw74xpPYY13ByDSfFWowNpxwCuZHbe8JbgWtC7tEBc4pdKookB",
  "key20": "33eu6rk8oLqJTSe9RXmVFdVkRqTSpBAVr2hn1jsy4mkr63FtW7ETjZwmksbYZuaAL9UxBSm8tVoxMeHyzkxkygD8",
  "key21": "2YwNyAP9L5m41PsgC9atXcLpss1tNgbLCsDMWto4SGvQqcYiGqCLEpYBTugGchAYT3oPQbqAmeES5tJ1TPg3sRur",
  "key22": "5W6myHVCeYnTgxrredgkwBPsuZhBziXMifeoH5vHEdfh4rxb1gMK5AsHhbAJFRDjmjLLD87a2BZ3oW5kYDw1ugqR",
  "key23": "5zorFazBV15cMEc289WZzedsGvpucdFoRx32LZjwYvG4w1JRQNTznmE8HgYGBBdSe9brWYAApWey8wcTJZVyRCKL",
  "key24": "cCb2dpexAAXvC2gwbnSmcQVwSZbePsYQGpgkzukz4GXuucV1hrpZiQaeu9puubcJ2ZNN3MfnZDWE6EmUR7wQUaG",
  "key25": "3MbCXwMe1CpBQAf9ReyV8TBnSutxQFUMqToYK2dfyFcnWGBxr4PGKicNeYCjevUo3uVBXL1bRSi8G3GkRHjhQCNU",
  "key26": "3NzNitspbxRmKhb16ayxJiPZ1hmc46ys1YmFZQzc2o9GATsCp3c9QqXbkdaAKrUDSzHkrMHqVxPx9pyZ2mbDiqcW",
  "key27": "GWj1gJ2cVMM2G4hpjpYKjrfMT5mDvVyivVaeCorauD9mxzQvY4ZKwFtCxjvCZgBchC2zm2nsR621ikxGNEAfVt9",
  "key28": "22zroUbvUWCxgtVjWoE9E85FGKy2cWVA2xumTjinMBpimtZEsipwf5WnxT66mQ19rGWS6Jb6DEZUPwkrbShw44a8",
  "key29": "5Pnk4V9tkZcFCrwkvm8GG7RgSJu4mFvtaeJjEwfeadH4NHwRn7qLVfvgwvtHKZLBVRuLPNXXmJih6L8yQEGYyyKJ",
  "key30": "3aRydSdmHHbopAyAngpLmwma2C6R2E5ny4btA79i4RaYMxNAjHaMNoEQJ3vDU9UpRcxWKCcyYcNYoAscr39q312v",
  "key31": "378bx627881AfFhppAyz2sVbS4F81XHVbA5t7KFAosZ3GueyhEf9GZXM11jwqV8xaf2PWFs9ZRiyq1yS7f1JBNbF",
  "key32": "4WkFguAK21czep3X7s5v2e6cjp9EB91zaMsvxpAwVRMU6T8xq1az1mE5eR7ubiA2rZZZEAq1bQ1zAgTqwQPdMDFF",
  "key33": "39Up3PGxVh724bb61TnTELKgQYfqiPb5EwbVGMhwaNAzKpiyCRzqcXaCq9nvMcFDoZ2hU9DgwSMQxRWCuamkHWHS",
  "key34": "3ixYCFuHZ6gABQfFQiXHNdQVBBe15pF9yBq75maT412oy47bZjJnxPXnmBAqw5qitZHRf3dzGZeqcQp5EegzMDFd",
  "key35": "N2sAUNvRjTkRBHmX45FdFMrKCZL6bVarPwtppG9eF5vNVy93hRpBymx9c4sqwCqsx5c6ptJuXZQ6DrN7jAGs9zr",
  "key36": "4HTjstE2gUGtTXx2E9RGDyVeVvSuw2CogoMVCb7Lgktm2UhxNKVPY98oowKGHsDA4hTJ8o34XriHhm7Y5G12APM8",
  "key37": "2N5sUpbSPme3XkTo1ZVvJjgJ3BMWQ3gh9GQ6gFGqNwQenZZfZBhpgwXtecfs2imPQbdeuSJXpAwktw4fW18pwWq3",
  "key38": "3VibAtHACi4Utu1yMyAtNaChWPNhH8qnJV1YRvLAAECYjsYLWxghe6qSachkmuw8rWbGRkLyMMg1rDyXNkcnqXnU",
  "key39": "eX1eXfkXHicTFGFBKmhPirsT7cCr2XQHTVWsUR57i5wrU1UoVJX56QQ2A8YyuguHn64GbkcaDziGuos5Mgbh3bV",
  "key40": "2FQUAsgeP9gqFZR5eLviBv1tZDbgDWFmBxLD3HKj6JwqHNUqiC82fFS5Nz51siFGVpvtKw8nEYELdZzaVKRZJy7P",
  "key41": "66FFVgm55B9bzGL9X4pLC5b9j6fNzkgoYuUd9Xm4CY7iW8mm14Cse8NUMRfJ1tUFqoY3Q1PMEr5vaUp8wp6yimf6",
  "key42": "5v5Q7j8tegssEXK2UaSrLQfpHroaTCKbxCjugpQ5WukVHXyPPVew5FUtPx9mu9JH3snQLUQrFKbAS7JHJCkQvxYt",
  "key43": "2fxCeoiEQjRZ6bz3C3yWtq4xWMzxyQrQ2fSKa3CBVtQueDu1FRLJ4FgcxnCJP7a8bAUtEhmv5tWbtsXx3W2S6t42",
  "key44": "4A4ocqHk3wWcRKGV4hJtCu8HpV4wwRPoL6FV3cAXsqqANyd8fqvzx6JT1JYqD9nN6RdmSDbzWS6o4uaMBYhUpJdA",
  "key45": "n5v3u5tMw3hBBazhvuHkZBr3JVe4LZ3evJHnwWEZyXuZ7Yep53jChTFywHt93iHZyh8fnXaEksW9cnN3XsJycWP"
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
