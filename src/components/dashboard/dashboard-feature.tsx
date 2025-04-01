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
    "3xvEG2sG7sW2ebYaUfYctbpwmJfZCQkvxqmTs2aLPb4n1SYrRVeAQ4hNAUw4MCiN5C2mmBLFFw64VSGzmgL3Wqbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rcdyQFEM9w84JoqLwtk9cWXAy7JmjgBBpoexR5PvebWt6HcwZxdTubMvHyUB1Pe11TmqKHPwYoXAKS8JYyxDs23",
  "key1": "5wZWZfRHePnmFML7DDZ4dZP2anysqyJ2vHV6fTB7hKV43qfxqUvsGBgGNvzz42GjwqKoK7sF2meHvuXUGokDpAGF",
  "key2": "2RvTYKZ7Bu7nPTR1cVCZvKfJEP3VBCc1kN4DJ1hpmsx8V6KdqyxWFW1EfHqnRpbjsQrrsjqTmu82NRfL66R33PuT",
  "key3": "2QRE1DAfxh8BJUUqmxjqVhdb2M4ctcMaps4H3mRPmyUVkQWk2c2Bf4FJy9tsCFbzbdF3cYu52XsUyQkPC5vvaSTz",
  "key4": "3kNHtHM6s16d4oBmHa3X2HiuxGhJU6p7L79dmeHpeNNscvE8J54iLsrrkpWEUiZuB4U7rKBc6i1cDfDVkgLwvGjw",
  "key5": "558zGadpNxyxqSPXQJJzS7Y9oaBusaLWZR8xKLU6VSRugLessYPsbBDyhxnUapxdW5fj1g15renBU4WR7L6sUyjD",
  "key6": "5dj4hk9QohHshr54CE6vnB1gczUxKNR85GWcSzr5ty3LsVij9cFHpyFJXPMNyDtqjrpx79fbtd3Xwkawp9yRVi2R",
  "key7": "qjkAHbDuiwwVp9jwCzgCA3FpC1gbRRZybGM1dx6QKiy4Xefz9iwMe7C7i4gzmKxpDH672hx8egXpch3GcXXtyqj",
  "key8": "5Qe7byrbwyZ6QrbFD4GQKtDGBnLXHkBCgqhrcYnVEMrhJmPtUaXczmUkV2Y2BASmAYyJxBZg59NpWvJ1pHf3RgGN",
  "key9": "7kp3FkLRs1f6QjWXu4u7qLFf9K9sX4AvBq2pw1vJwPKCPCVX1cTe1EMohpG8XAFoBxoRqzwePqttzKReNhwarYq",
  "key10": "xeT4dL3nZTK3HfH8Cfhz2auaisAnX8C6fZ6EnArdUz5CoCwpkVDYonVdu5naoFjnw4ZV4EWjbad2orcvhkTqdRR",
  "key11": "26AGgJVcaEXUTqg3p3HwiBHpPtQvN7duzfkmbuGgDzL7C6prio6Zh1wnQpUs9iFH9grKgJPNLUBiMDtuMmBmVwGe",
  "key12": "2VVhfCCV1SCGkpRTc224dpCjJNp6cjPkrzonshcwAdhhJD3UG6NFBfK9cudzSACXA67qtku9GUeFiJ2KuPgGSRKy",
  "key13": "65sPb2UUsLiNjkDUxZu9L3MCc3DMRKMi5bo7kmFLXegtyugmY144TK12VC1GhyFYHBJ7FpvF39BNwFhkjbrJ6dgF",
  "key14": "4if7A5ymgMD5FvkD4WLPJtMSkY4moXXK4ZTvSa3zUnCdySANgNi1vJB1scf1DwYRBLrbskXvfkMQvtiKaHjBSPYJ",
  "key15": "63HfppF1pHGPdQY56MkU37fAZugsLrqqtiKKivgGshEkJk3HdUFpXdEkELjavg4VLEmJqpJMGQJChXP8RUgaCKVW",
  "key16": "3BXNjoPqCtxSRKs5ExB6Tda1Fpj43ucvtdraR7MoS5Frz8PHtXS6zUgcVq9gVWaZh685rxmbaPKCpA1MTLsXtmnY",
  "key17": "5TW3dC3qbNw9gVWLdawwwW8MWAKuYj7Nwn4jhJmwRUXskhcvUJycsr919h8x4qBtaoT9ziFxyVGc9KtzMPRHZpHL",
  "key18": "gqng9z4JGkzmYsEWEAfGAvCqZrYf6oLaPxNgkHtxVoYQhjx8UW2vcyGwVLixm4612ZmA2mogXhRSywEbV9VqkTd",
  "key19": "5MHx1FYA4wpCkbciNRvug9h3VqMkE3kamnr4WXDKTH6niGMqFmJGnLWni6nyPtebrcSJiVccZ7uFCwVhF1dA653A",
  "key20": "2bvvzmCg1rmcSqtFqVDDavKi2bgwwurhgqYiXtgTLeTFt4gBXbp8kjfmWTEycNj6L1AL3r6rc8mDT6VE94xxrokv",
  "key21": "yr2iS8TpepZtkTGxgfX6Vq3EZ7qVkvjnKLp1muZeybJy346WKggQvxJmNEKkQ48wqU92eJNgjcbkh5tiw5uxhpM",
  "key22": "ok1WHyqziGCMpupkixpKgrE7jR4kzqxrH5pKdT8LoChs33g8GWKekcv3L4UZ2nosFa95DVv6s8v8Rp3CBf9fYnD",
  "key23": "2vYHD9x9oJWDTBUb15UQ4hV9RsbZNXCVFsmNQNmqUkzMFc5pxXBvrdC3J2oDWRjZpobUnSUC346cgT27shu8afi2",
  "key24": "sdBJZCyfsKaXzss5ETRwXs88Vb3CffDKcNyPeEHGpkWWfK1K5HfwJUk3CWg3XopAQmyT1wegYiYtS9dDqygmfS9",
  "key25": "4CAfgFtNQ5T9tckv7rsTji5mfCCb7a5muU8QoCZ6YmuzzGs9esQkpwtLBKXQWQ9du5tfi6vBQL8KoiquZ74rq5vp",
  "key26": "V6Mzj7f77L95Li7BTaWVuaT9TJCxhHmXrtmF6d2B5fd9j1ySHSNBVButMe1BNM4WZ8sxNPZqzfS9bT9hHmdELJ3",
  "key27": "dq6Ke1Gau3vxmQCRoYis3CVJVKxjXZuuC1niLCbhAFPFs5T4EbfPcf5nXbeEYhvmPzXPsU4jCAJAuXAfAuKYRuY",
  "key28": "3LeNDtdbrXLp9YA5F3XwDH7ai7K4CKUpo6eDrYLkrG3o6JDw3SMghMHbYBn8zH549AopJfW6PhWjtrxHZfANoK6V",
  "key29": "BXFFjq5CLVDdpKHbNGfuAE6opXCnLE1WehzCePP8DHvJHTHTjmVnwmBonyEhtb1SFqnnfxSm8ZFb4zqNTq1npTZ",
  "key30": "Vn5XunSmQNsTusVXHHTmYPwYvKYuxbDZTYzEtDK5VuSWGco97dHXMtfQrLWR69XHJ91XWZ4uSa6hTTm5PxDnT4D",
  "key31": "5tEVeGRLpEqjtYAaXTFM1nkn7KZ7ugRas7Jo81rJHSVbiVcu79u4bKHCRYdej5DbvTjYrj4tRRUXUt8iHyx8hGkt",
  "key32": "2Ncgv2gK3BaaT8sUvdgzqxsb3VKJjrBtAmXZdajCNbBuGhFeQeMy3XBv2qXdPiicSuUrXEnW17QrNCBr6etnY2Q7",
  "key33": "Bn7jHxFn1XAfL9p817HDMkg9eoqMD4QXGTNwRGgYfmA4gAvfCm7nfsA937J6GGnHrYFSCe7A8mNUbh2FWqPSgmW",
  "key34": "2FJ9ekNL1ZdHFgR6T2VwZ4QGNvZ3Fik5t2SsvQs1gyQTzWTcr8jmFwpSfLMo6PXFRy18Agt8aBo6i9AdDXu8cGgW",
  "key35": "3fzwrCqRxrPrs3HbU1M8aavUnAmTMQVf4TACyrs2ZRmUMj83gzJQxbbwGohYXuPuhjSNBgSUP2M9wCmynkyDtEd6",
  "key36": "5cXAXdwXDYwxiMhCoRSb5rFL91H1YS5YpF58FYPaqagqTZJ9Rshu1opEhWpPQTYUqLPKVoBaSAxqQH8EiVcP1fKn",
  "key37": "5arQnjNnpVgkRSm4PHtXm64eV5y8F3XPvLWXt2QmdvHxWfRYdYmXq6WhbsRLDGBohaKKPivQiSS2VHPG1jHbdddr",
  "key38": "4uf3DCzq7vBGHqtkPLGKUTsVkZQvso5rETDrGGivpbt96Jnp8o56cBnmGEWLj3tU9yZejCno2K6gPeKvAkuAA41s",
  "key39": "5juwbrcN7o9PTgq5MSRarQ5fkM8bUbsJcB1J7FZaXEjrDxVKXghMKBYECCVYJmdJbMfke1uL2UdL2BFKM4ayn8eZ"
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
