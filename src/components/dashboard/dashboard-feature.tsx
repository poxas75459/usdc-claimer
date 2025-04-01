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
    "4LTd2Zs3BK927LsHdSJicWDuPC3ivK1uBpnGxR67wFjX2cW2aXfG3xpJSewXAnRXLojF6ujP5S1VPdMsjBxmhfPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MYuF1S1EDDcdofafQQgsitnRAzwCXMRk4bhWbZnR2ZiTjXHk1Xr2e3fYZ7zVHzZGQX2LakKEgZRxy4wJCHgPYrW",
  "key1": "5ZkRi11Hh4mCnLXgS935jRH5Nn5CJCxjhWGfEUQZiXHp3ZSMUq8TGjs5zg4v6HaL32xuwzXcnaaw82sR4Kn7c9D4",
  "key2": "5cYyoxYKNihvVCYD8MWmVcwzCxo7AnXDYL1RT8XnqnYdPovCF932JqeqcCaDb7WrHpvBGxYLw5WcnWG6F5aNS1rY",
  "key3": "ez9DKD1p9wuzMiTqvzVyiSyHDo6C8MxBuiMVft5zcJh7bCae2PnSXgTViCWdGohosfvszEN3YQErwf1T9uVaTiv",
  "key4": "xhon5pF1vPrZatUJsUGZzkiugiSz1XxXK9ZXczbK1Sbns3mcdj3ojUswQGHoBwuQEKe5Tsy3NQsPaczRW622jGy",
  "key5": "3z7Lmv5LFupLsPHtwgEkd7VPWJHnCcbje6YH1cPvzi7jUyxDiQrx89sBDUKUTD6X4Wpcqz2tAyBNKuYTvLbRFYyy",
  "key6": "5YtNaRF3dpRwG5rHYBu5eZ8zE4hFtiB9H2nTDAg6ZSdYKtpQmDXaJysonp9MGvutnZd32mh5gTuyCtzF2KzmCKmD",
  "key7": "36zZhXvVdVPBDxhdodbosF8ZLgoUQLKijjpGRMGrstZ1tu26J8mQxLvMh1GiuewEQVjT9xBxdQSTcJJogVfDb3A4",
  "key8": "yBXLLjN8yCjiVxZQqPYy6icbPnko5sE9qc9VUW4VzhFXaSyWqVW7bvqNeLaNnxnBPZhLxtkFvAgzTw9bSd1MSqt",
  "key9": "5J9hWMSD8uYe1sTkLbNXWcAFrJbANVi7q7xBXk4g4Xmo3cRJLbTL2kxjsd3wcbTUHjpQHkkdQd1HzSCG8zmABS8",
  "key10": "5M947Xo2r2WNMabW1Vt2GSCuiSi777kqrJN1oLG1uXou4TVqVfKzqgR2iX5n8mwiNfXJHYE3SpmHnf25TEFNgN95",
  "key11": "4fbZZkFgsow1fVQ99U7oHTBwgsGot3Qdu3VqJ5dWRv1qErcJmnC9qbqnWKEeeGDnGSWaB2KBXtvExA7uyGWAYvsr",
  "key12": "4cPuPfdv6inc7yni7pqLRApkvEHZoSrv98x1TryefC5PYjfW1Ao3PBXwuLgJT5LwfKUkbWRh6eWLjaqL2CNo4FA5",
  "key13": "56GDWi3ziBDspTG6w3XM95nKJnAQzJfPq2w3rJLeNMFwvg1qKbBPJLi7YKc7nL3XeknVrzqYrZWFn25DceKoB2MX",
  "key14": "45bjqhC4sQJgf7hTYbEEEdDee32zRSuf2vbYKLkA2yBk8LW6WmnkHPV61Np85N7PDuq7NKFMedDH25UJjBYMGf5G",
  "key15": "52DcSXsJeK3sLfjfGZkwDT97tmvuqTJ4E5igWmNBC6ac6HybeNuCGTvCgmLajb2kjR8Mr5eqKGRavavCgP3Gr9XX",
  "key16": "Qfk7dpoR3R6ecpydiQ1cwqErpFqevfSxTJZ7ddHkef6aZntpnnPTPMKMAKvMkTtQJgzBeLLvfC6EULBLBNiov14",
  "key17": "2ZHm3AiX1ZS4Dm87SLWKmduYxDxPqtGwupb9wbAgeo9W8RB9Ume8akMCsVQxMDvc1W4ZTCEMyxaRYwLwtBwyRLMG",
  "key18": "2tDuMBRGiALih9rPd1QBj53icUi1n5LqUGxZULQ33M3uMfm8MLpg6azYzBxN5o2eXTHCF6PwpD8XVvSVg8L23dEE",
  "key19": "292v9f8YHJFuuadR9iRUu2jNiZiszKGUY1BZVWUgTDSuhUqdraWucMVZDVjXYvtkJQ6x2AE9bP6U48FNvR5xQznM",
  "key20": "52jyH4ZLt1JeLBmzCW8jhiVURMsPBLJknZ7cDeu5w7Z7FwZnWDTw1A2ZEU7GiMUYXWnb6MK57DuGJJCXygDMbp3h",
  "key21": "ipFSzAejFhFhADwvG4TfNYn1TC9V3SdaApx66rJLNTt34yLRwcCk6pHa7hLTXfPronsQQVYP8H6yNQeX7Q6e8AV",
  "key22": "5PVenPt9yBPsqTiiAWJNhMDNC8yxKj6mHgcYeaQUTm7Lf6g57JiTa21q7vjnhEQy58trCkPotkJ5QsE2uDh9TVaV",
  "key23": "4SmXbAQypAaGXA6ware9RgLmVSTFh2rGpkewETov9mxFrW7KaLZTYFdtQ27oHnBUMhxEvorp7axGRqYbCPSTc9wv",
  "key24": "3sjQKX9CxkKxrfnfSA16oYjcaaWyeKuyAJv5Bd8eMvH9AMJmRtweujKN6JstrKvy37S3YtXUipT2BXdhoxK41Zdk",
  "key25": "kCpGRadbneJNgKVEV9rqTpNZrebC8mwnbpEgQUaSvvciu3Q71JbMfRX4H6EDq9gT8y7ymkUDXGcm5PJMssRAc2u",
  "key26": "5ZvkaSAwLd29RSwDSD2bo1W5Z7Jf9mUUDsTV4KN6nwHMSi9MZTt14v7yRR9UNsaX6zPKK3G6H8QjvGvWgRU9eEMZ",
  "key27": "35sS1McwN5H5NqMFCv9ixHjc3UUJz1X5uViQc7AxwKDqLxAWe1fgPRBVkFB6u3vPckXjZmYRJvcQRebpas11GQQ7",
  "key28": "W3LA8QXsNRiibvho4TLc2rpep5WcKrSY8r33p19q3x7U7hNLoNr31ZrzwWdwRZeECXQju5nDPygrxGyC9KeL29c",
  "key29": "63q67cFEwdujnUe7zHPpGGYhbPnoxKidLNC7jRBqi7h2t4w5m9t9f1zmryCBU5HYwCPy96fHGhQiWjTtu8LSfC3K",
  "key30": "Go9q9u6cBwgNgkwC25RMg24N9EwWhgoNaw6nqNq4w8RGMzowmUBtaiPkpuCmWj1NDgqPEn2SpAXbwqyWywwNBFV",
  "key31": "3UKVFYY422wa3PvezqmeNMeVu6zCD1E9q4zvVjhuuMWsfcoR8UuW8cQ7tUxM1ivuBWyHFsZaU83KKCz7E3ZR8msx",
  "key32": "61TtF7m2dfQZuC61nh3uykeyJ4jRvqcCsfxMTBhZ1fVVBQLTsAo2SjzedoWpjyY7UfZKXAFUfv5GBaEsR8jEbLQH",
  "key33": "3Q6PmdiJnaT8m6LEgMi3Ch9EmmwzQnKaxEa9zqYRjMpAgvC6H8xD96DdL8VuVmW54BoPcTuqW3YWVhVcoxRz7dtd",
  "key34": "4tWdBvwJu1bEk97AzvFf3Fy5zeF7Lrg2M4Mmk4PcLnpDKoBPBW5hWpXeH8PkXy8HmozSoZrmiwf44KEyacVpRZnR",
  "key35": "4mfBhD1oS82AGRwcUA4KFQdFxZF5kUaQPjjhSbvJWew5LKmTB9CEok8XecjpwdWQJDmAHt5mnwJrcrR1B9bSp8mq",
  "key36": "f78hVPgB6VFJm2vCbJtGeJaxC1Jyc2kKcXG4W2y6c3VzwmVhAWrjPW4U87n5ptyqkVk7dGaWbZB54uBCiKdSFkL",
  "key37": "5ocUhNVLwRfCxvjLPiBpixDpYVkRx3usikLKT9KRuEcdhxhZuLUxGoZxeETymdFgEh6SXDYDY9R3DmbtDeJbCfnM",
  "key38": "5cyiUUjDxPJoEQoVpPtDVfiDbNtkhK3RrMjPKPXmi46Dud9TeM1HFEFwpcFjo7h2A73oh5khtJZqyD27utJijCB5",
  "key39": "24oWsgffY5sdZWAUcdLHHTUSALwyU5bGq8fBDZZnEkwV7ndAoiUiqvzanD9BfeJMwdoc4AfjQdNU2HaQRHTCbLQd",
  "key40": "5BVjGbRB14Wg4qFRXVYKcmqhUkLdxAqzaerhmiM359wjb1g6FB8nx4HPQV6qjJML3hS9TnPfmm7tdWdx13kHNaBJ",
  "key41": "27eBnRYVqyE1TtTsv9zCfdtzvgiyU5nWazXLZTfxQ8grveM3P7xFcKrSjXJTdu3eoCuqQAMyaf9S4GGE6bhCRhZn",
  "key42": "5vGcSeVnoMHCWdiEwpDBSWchtu8nXD7RFtvuCUqaWHk5Gh5ANfFnD7yaYJbqEFNwUhPuR7N4ZwMfXM3mrusbwvNV",
  "key43": "2q18KMJZyvUMdsYVkpVicBgSEskW3uqjA18Y3UBgho2mxJafbhzn87k6eUscdg3v3tUmJV7DUb4Sb4Y5ZrVebuNk"
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
