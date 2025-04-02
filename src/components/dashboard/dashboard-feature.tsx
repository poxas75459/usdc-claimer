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
    "4WVgyas5Lz4XQ1Fp3cyZCfqbnZjnhnqGRuUi6pnSkMA3gw1QuiasEUtp4hFYQxRWgMYSX8KHmLKkrvR8vZgYxwpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4of3N4JprGGMbq4KbnCFHU3pDsTNXMS1oxwH1jyGDsZ4PHF9AZL13LELy9edHA9i3F6vxvXaJ6MNKyxnhpVNX4vK",
  "key1": "55z5U949vqTV62hXdKtZoWVLuVsg45yV3thuzcwqoDEuK2Vfa5ypmWpuWzfgxWemRa7AQHUX4t5sUx5UVNR4ghG1",
  "key2": "2w9QqGL2R7X6c87M3AYqzvZVTLuu68kCsirUxxT5Ez3Rx87P2viXJQk2ecsu36rPJgGdjLyUw6G2j8ySfnQe9zfD",
  "key3": "2w1Hj8FNw8QX3zC7Ua3FT6Yq6nnyCHv6dzmAg1eo31Xp8QhpRJGHGh5n7qdf649EQJGKRyg8vT7vpRvrZyErHXpz",
  "key4": "CNCD6tA9NS6FBVUP3idU2mCtU2RfZNVu6jRYHQjGji54czMxAHv21yRXETT6VwxZeFpxPxGMWCXjJqkTFj1a1pR",
  "key5": "65u4ZZUaFHvSCmYL3WUQGagwRGwHnySuSQUztubjT3mvLfyEwehRC4WzWKrgpFg29gdvv19QN3rv9n5tcXx4e5Kb",
  "key6": "2kKRPfiCRMC4QdJSWPhXAhnpr7iUPuHeo1D8A6sxNLCkP1UDnTx6QwyfHSAKmdRq49585LvVYdSVfAdVnKJz6Nge",
  "key7": "3RBgtW81e4vk6TLxp4MD2FTJrub75dVeCMpgvz1SWvgjJMhdgkn3JBiEHxA5QHXUydTGWofVE7MeZ1ECgQAh8kK8",
  "key8": "2YMT7o1cpYpCzM1c3BsFDYnruu3KcYURB7xEoq1WSb4UYUJuSnUpufmM7AmA2Q2jGm4hPbU6v3eiih8R6koCV2um",
  "key9": "2Tth6arfq7GFZyPWJc5fancvHDiNEJbYURH9cCYmXaVPGySTs41UcEPbMQLK9K7aaJaCRSYRR9xktDKnvCCyVTHC",
  "key10": "652FSyjhFCMsCsHKftbFmF42RVHyNZwS93Y3L2TNqvzGfT8A1KTsRf8MoN4TMbGKYLUMcP6vwEni3UiNXgRMaLxT",
  "key11": "4Sc7YKuP7xs6UbqfAT96iS9Tn8ipSvJihfTJnpq4NUxk76aywtXokKtoUtsKkJWYwhwb4A1CThXC5k6RKHUYFBfS",
  "key12": "3Wqk43PzH8TX1UrsFB6wpEjwk2AHP9aC9CW1cJwEKkiKFh25RY4ME5bVy6LeUWpMtbTsCsV4mbdawBXc4sSJGt8z",
  "key13": "45D69wd3hJfFHqAzRsfxaU7re8bPBznuV2kKmTY2kzRZdj6wSg5WhJCqDaUSJ1TKqntJfoX6jMr5ri2Lzpii7mUT",
  "key14": "5Nd5vyoKyiC4mMJMvfT72nwFcktr9ErNntFuXWJFBj4NeEUv13WMU85nE7J8mb8G6YvQfbQDSimc8TwfAnaj492n",
  "key15": "25LRvyfaDRibD9sHsrba9sK1Wrw5i3SA6LNPhWzdtW8rnWmWM5aRj8qEKfGUsfUSDeHpF3VZD9Yb4Rp7vz1H25w3",
  "key16": "5rbYdePBXp2xCnkMw4aHHJ5ADbJg2viV9Y3GQKHskCMeogPb3vhW8mFH3ndMyCd9zngFhLm2vdJERoQScCmJwXDp",
  "key17": "4bvd637Y2ueriny9PFNbyxM6AXoZLZUy2dvMuMeZhZYAzHvwfpghvkdnz4NeKafrGDYSbFdhYUJnjm9kuVBZaTnC",
  "key18": "5rj9UaAAetXF9mGKXC4HQ33Y5QmqyF8WY1GSVGdizKopfc3jdrn5X3phVQPPfKtQQ7ACzDaZuVVhbVXMaHqw29Ts",
  "key19": "5rik3TTjSF6HnFywBZfT1Ch4bnwuLsNUNDEdPUFUsTeTW4NmwzgN3ZwBYwxnMtpeVSoPyFY5Ycwk6WiZ18TS9dt6",
  "key20": "4r8XwRDjgdKWHEWPD7bzGkbNEGNnQ2dsY6RBhhXxcgi7gsnMXRFRZP9Kq42HZHQaGZ8Xz4HRjUUka6VG8nawA3Er",
  "key21": "SNzVjkkWTvPtRL5Wq9JXPtqfYKYMyi3C4HkcubwcqtH5DB3dWb8TxGgqDzRfs8HDQiQ1DzNCd6XagD43prtSbLd",
  "key22": "5D5ex5AfvbmcGLerQHbehNH654n1ZBJyuaAyaEeQxcjgQspzh5Ed6zbkaDnxngvR511GvZeFBjVGPbG4F8dU99wk",
  "key23": "UTHk9GorMVcD6PgEcnRnUDm2xqktLRXx2DcShryBhzwqYfkfAx5mMPpNPATD3HLUb6CTs3P6dcXkM2bjYWKpi2v",
  "key24": "8cRvKu5xemtsM9X4G79FonDGf1TDrxQmDXo6GikwJ3biQvB6yZT1i8gT7Cth9eHvSGx7WMVYfxi6b4MEkarxVNn",
  "key25": "21KjQXmTWnjJRpQuUMXGjzFJp916LjTMSosoqaAi6yLTviuH98rcFGS4abZ5b2S4aPdn7wPiZWMsMaHXkusdHW4R",
  "key26": "2ijdnRDGWURVzrsBd5zQSVM2vBpKfVhQ7qT7am8BH9ic4krcvrxUjXtVD91dAj11cS3TyDZg8aCRh2xUxXBGY8sr",
  "key27": "3Z243zovTm2jjehB9MWVE4nk2fUu3rLPMsh4QykYmzim7vWBptNmQXWMXu6MiiYWfQYiRJiR6D6dhTXjAot6y7BQ",
  "key28": "3L5vZ7eEpQg6U1oAmb88ynQGStfqPkoLdGaAyTgn3WoV9dVLrpegrXEEQpM5d22dQv7cTzytRoLnwdo4dU1yF1Pq",
  "key29": "2YPwmzyT5LitM43sY4zHrVSDVzMjnqb6HaXL15MWgXhiESvuXHFefgAhQnuPuenhJtVYJVyTA3i9TA23h6BKakpZ",
  "key30": "4KskK1VQzif2o5XfrL4X4DdJNu6HtuEKMcXJ6RxMhoE5cQBXAmXpj1BbbksnUoyVzZkVs1uZ6MSso2d6P7pSpQvV",
  "key31": "44SSjdfNU5bfX1UKAQZBavddxg94Hgtaqdpfcb5xvYB3gzSbx1fA3yeKfpvGGYmDurViCu6cghQqrpAiaZZJ7sYE",
  "key32": "2a6WL5A1HhGbQDMtfrdCzEDqVYXLoziuEi1J1cUFLvZUbf6aqMveR1pHoeoTk3pf3n54ZaLb2PTS6HNkrZmXN42x",
  "key33": "4CGrX6zznDRBswfDnKUivEgJc4aUbstfRPMSPqy3MxLhTQDyA9DEdxgEErB5PjUs1zWhyRPEVyjLk4PWqwARirZN",
  "key34": "otKgc2cHXSdEQNMjJe4RwRCQp5PXoyMcb9mtmeJsjH8bNZiVZKriHThs4vpdJqUypL7HnRxePCUWAgfksH75CX9",
  "key35": "ySEAbwUeyn8ExZHV5ERyPEmdRM4Bi79wpT7z9vymqv7q4m7VXEu696xvpTS46fZdC1fFnXbKm2fbJtSLoZ7eRUE",
  "key36": "3vN53y3rUjivkGbGZPmPAGFinACwL1gu68tVsdtSFgDoBvS7tG8X9KMDaeni7QKMZGVj7tYrUVsMsvSReja3s35n",
  "key37": "2yCsi3JeeWrL3BzhGRQmG5uKdCS4TKuZdECAqFKFymVDbyYpHgYp6ojCdFb3jr3hVKrwGYBHy5Hdfd2EWVNuDip8",
  "key38": "58kW3vK5mrJ2bMoqKSJGr7pfikbibPLotqLssiMTKQ5hhTc3fiZ5kHkaJn8GqW3MwK9RXPeVxFMzGEyJKwBMZQPu",
  "key39": "34eCurfQhkbQRecYLkDxmB27tYqUfRqQHNR8ZQUpPMfmK4YdPx47unQrrFwHUWhkp72SrPzKqJ5Axkc3BPH8gUZu"
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
