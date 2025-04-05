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
    "2HnWeASe2XG3zUZznryBHcvqoUjzcnhe38fqaCB29wjPdyFD5Hbut3zRr6x54mqVZkWiNY2nWUdG5Mk8JTeUswDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nhj4oeP9fr4C8XWCdhguHrxXqWofycj6xoDUm4xQ9A3VHNGnRN7TemWBFibMyJRmbeVKraJfNWxqFT6Rq7f2YAq",
  "key1": "3C6f3HoaT5WxA84zQYtC6N995xgks9HCGszwG626A8369s5qSfyWoeiY8V9KBDbXxntahFV7uzPV1VVg8AfHv52r",
  "key2": "3yFGjsAR6pxLxZj2T9o71LNgJ1GMgq7rhdWC1xsRvidtXfFAPXH8NW2JUKhbBKTGR8GxJgZKjQFo52K29wESRu3J",
  "key3": "3WUqUpMABFJ5t4rYPfGSSY5izpX37Y8LMzZ341vzFKeMH9CrMwEaWzSFCg66uYkiz8YWBiRAiuyE4GD2ThkSGKeL",
  "key4": "5kJu9kg8fw5LZsGXWK6EA2k3QFVvVcBpuNtBTimdW9Xsajkzr3w1qMEEX2UHkYotKLMvQxhLqeSNpZJFmdT8RsHW",
  "key5": "4JjLbPinsB5iKe6rNXqTTQwQbEDmaS6nmaGLQvnHH1PotTRrbHXz38qzV2DnmPRSLL5qCKoKnw6E1XpBQm5jSAxC",
  "key6": "64p6gqKm9ZAmU6GwjDsUZr9AXqmgi9ij1xvXKaDPDuKiz16jHaVm2XaS5EcEgvuu6MnHv3qMpsGHuzRy6PAaCWLs",
  "key7": "3fg27mcPdA1cNBJwsJyW8aHtUpNu3efihX952aBtpAs9WohwJvTh4asFqKnizsPYSniMuo9RdxJs58dHGQCypkWh",
  "key8": "2rgbxB6c87pNfLatxdRRhAGqxXqjUDdDv7bH4BTsp9UTsmiL8JGDrgjBLZxpyNeQ5nkMfHrVacWAVDYUwQ6Hcetw",
  "key9": "3wJopvzadiYDvGeHWV9a335Aio6UHwbGss58J2uWnafpPeo8AhjoQw41jcruWHZKCgK7bL5PJg72YXuokfka9Wjv",
  "key10": "3E22wareqsiZ39vH5zCfoUvAwmz4tqeDszAZaqpeUC2QCctn1rJe7B65Jh3f1KNWj4Brcsd8sqvS68AUKH3qC6Ua",
  "key11": "prztGu7H5q48uoA8mKwZBqicwvyq7eawPqaeA8mZyEHTcCF2scGubiw5kEPJDeTho1oukrr27hLLBgc2RFbLQH9",
  "key12": "5Z1JXG5gyzcd1PKJqzD971AGxHgudGy4zCPj2y5FwuZtYESicB9GmUBMC3KpYCuUrHUEZUUTJrWtTZyCtYZA1EXW",
  "key13": "EJbnm32VFGm9LAU57tFPG8wqa6X124aoAXbh9C6HGzPpSMdVgUKtrrrypkUa7Gmvj7rRTq6Pqw5eaoRnXxoKv5Y",
  "key14": "4e1uZ1qgsEWhfgYSyQHwMNYuobUHG6EuR1skR2CKJuvx1BcrjgSvDLK1QrFrT2EbBdvgAoNmphSvmZ6Nmguz3w17",
  "key15": "ewJ6G1h9vqJa8oj4fS5bMiCbZzhPnfie7NihipZqFED2GEFLNkidj6RGEwnMfZPhgfriA8MaiLWg7CXMTbSkzo4",
  "key16": "4MPLyzJWsH7T78TL67WoHTCevj9VPYTTUDJewSxTgaygvmxz49GZkRRncSCYeZmu7wMMLPQKKqY1m9v42smZjMf7",
  "key17": "2vVD64jiQdM7QyLhi258ksDeNyVoruDTiKG9mimmukdKVT5zd3GcUky8pgjrdztY7Zrws5dt8AJWDF9m3DrbkK5d",
  "key18": "3kuc9S8Yk5TnoqVgyaqQkZQ8A9hMMdnJxtH1M8L6gYhb73RM7roz7gF26wgwteCLtFSC9A9VSsR9o7KBAnuBYPy9",
  "key19": "4wbtRXQN1sgTTNf4tQ4kS6T5bMhzVTN83y89KXW47FAX3t5t2Aq5AfBiNSthfLEDjX7rdzXT4eWGj2wxfC273Juw",
  "key20": "5X2GgU2QDBGWj66iJHJZJZoztp769bUHN77veNWtQsLmNy3dh8H23mJY5drSWLpqTcAAPZPoWc8XVawDoB1gPMh9",
  "key21": "33oFk5ExaxLMh4jY6kZiK8wewdJQg6BzZXzXiLQnQEHxV4QvM4zYHVw9Y5ncdbxKp95KHUU8sJnKH72wi2pZCcu2",
  "key22": "56PuMkRULCa7ZsrbMMxHVxubzeTN7wDrYaxDdAnyELo42unDkWY93MD1VwARqwUsTqvzrzpSsE38z2uSQYPF4GTj",
  "key23": "4aCTJzrB8CbMpwSNbUM7yeEoWtFs22t3qZ5jRJ7DJSEFpyzATm6H4Ld4ySipcqYG7ise6idSFKPsYiY8kyrGFsDy",
  "key24": "4gZTPB1asW2Und892Lb2oPRSCyqLMe5zD3jksdygyHmc188Fc4xGrTPGajzW7ai8p59g9YeMUMuHnmffQSpFfeuw",
  "key25": "5EgssrUXYsgLzpE4ykZhNLG8bo68cfZsxmCcYfUW8yqEHSbTKkPFnTQ8Phif2HUfdGXZf1eJjpjw6yeT6oNTatLm",
  "key26": "G6mtzhdbKVfuY6ao2mKr6RtuStGfJoqf9zd5hAhQfuLBJ7fZBL7hu7igYzsmqryHZZuxJjQFmDTU1GpvtZkDuzk",
  "key27": "Uf2XeMSnkieDHbWX9d6c7KJJrkuXjv7YDLwi8rFi1GiCjWoiCSku3cPWXA9Fe3Ks2q3KULGQnHxnMAf7iNHy6yW",
  "key28": "67nWRMApX5rJvWpPrSifhpzieSCXk1ehJbK6gNQ53HzpKdW11Lo1TTAd9NtffMJNeA33sFzbB1ceQJJCxvRCXutX",
  "key29": "3qXna5eSGnMyjusM7zMgFRh2edxbjSe3k3VspwYBEJcJqQsjTYkf3jwzhiB3icLgPoC5nYrbPuXraJqABxpyw4yg",
  "key30": "2XTgpqL3daPq94v1ewf45treKqZWWSQbfhvrDS3FTsbnj1N3Jyq7RgfuW2oBDFxL3EhqBHhoeYxowg3LNpdkvm28",
  "key31": "5euQ9H2qX36UFAFk1czk1KsPWnnY64BqeNMDtHHWrDX9orr2msCtJ1q9Qq8pw8Y1DGbM39FBp4QqhS9jnKP5tJi",
  "key32": "62KBi4yErmJhBd5dFyGxXa8U9Eiw92BhoRzaY6EckozKP34dRAqpFPczwJtrFkWn1igXd1mkFTwzGTXi6FUcoBp7",
  "key33": "4znc1iovyHWmRkoJVpcGvarG7Jwx3AtWajR247dewFUmMZS7NrH6QRXvRw9WnJwW78V8LFDv3cWfHoFfP2isit3",
  "key34": "kYiYzfWUnyC5jFQuMLcLUNsi8v7zpVZEqRTmaSXpJCXwXX4CCZHDisCsPSNbf6uxsYbcUVsjpcT7MHhBzWb3ByD",
  "key35": "3b8SX6NVG9ZW2LLtCL6qa994x7LzLnbSX8iLAYFHpP7ehUTJYPCRRz2YrLCZB6f76pgzg6ifk4MVKzqj3f3HUFWv",
  "key36": "3kyDGH7tuW5JoNEY2SVKg2hxgR6mxHS6QqzzT6hJKFWNMMiuDaxFZwr7nMFAXdGu6QccE4jDXScUdLmsZQWd63RA"
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
