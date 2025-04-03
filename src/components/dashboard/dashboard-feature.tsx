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
    "2z8nRuU8LzmE2Fm6STWWN9XHUrAwne5n7yAJdEGbEsS6EBRkxvNKEEJvbdndYVbJ8g7RwEZrqFxAenzs4wgRnMbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fGQXgm9cEPzsn9L9fs5xF8Vfq1sQJDhqsyLNw2PpNBj587Q7EwEkWmHSjuV3b8gbMhoqVkqnajqF5L4R8vb1nhj",
  "key1": "2VfMcwG67ucFnTvCGBd48BRSKSmJkDwe2paMGkt9U4NWeZaPUJZaq3e1nppRP7riAXfu6GutX7UGLERE4BGY8Srm",
  "key2": "3qozgZUgPmrVQ1BpgDo4jVNc2Jz56XLKYEZhR2mJeEsVV8QRrsmDKuos3QZoB8Q4yPTPfPJCFNnGbWftiR9EVCG7",
  "key3": "5mKr3HyZydHgQvSah1yKgdbPD7QfGAW7d59Gmu2o1R7x5HNKQ4iaQDkkBsUya3ge3MHiMchpBxJCGnEUs5D9w7s4",
  "key4": "4mTc5dgmKvMWcE82nrEKGY1XfC6TJtCMn6pAUpYNGmUow3SsxZZ9oJsBdQBCLnVAJxwSZMy8TUYTKy3UrTaN5yfy",
  "key5": "3n5b9HHMXDZtDbqqzSvudFUTbscnTfkXwFA3n5xTpURhVnBF4xYos8WbcGgw8LaWjaQ4KcqiMozDaCA5gKpvJ41f",
  "key6": "5Js3PXPv8PtuGtTk3UYEc5Yz7PHXef7cSVHFhuKCEAY4i34wD5PkTrtsw2V91eHAkaCYCouBNWa3PQXSEgzXPhBm",
  "key7": "51DsKYznT5wmcNLgKBhCjvLZz8UFoC8MoHcgroYhPpihtT8ypAwdo8YkF7fxwLv97ZqPSd3Qhu7nX8wXf4E6NJGL",
  "key8": "3FfpeEyiFkucMZMGkLjXcXkN8trFoxzqy68LfZ8bbXD1RrXnDERfCXe37XsLpwHvdoF7mgkh7WtggjxNnTNjqVtg",
  "key9": "4g7CpPdBpamngzPckiBVvzxFzh27Mf6mLS8EaADvN8UiU3subJ6MMrTTe7VeBWebuVY5FjCyEznsr7KoYhjktu8E",
  "key10": "25KCPNWtv22ivSCainGY1cwwrzge1vZQ6TGEuA3zzdnL5GYJX1AJdNZq9JC7YQQEfZQf9fgY3cBxd2HGg6Y4t3ij",
  "key11": "3kuSWY3gSk2jKNaj8iQUc83SMZ9tzxm8yyu1xAwU6yQrmyf7rGNxhWuAFuTFcrUAQGj4AvwNBn7URDwFthBkD7jr",
  "key12": "4QNBaK1hswPWTJvpcquCPh2y93XH9jytE1fppHhV8fMKELpsRnECjChhVqCsS7jFjTumiMvv1FPH4fzGDabUy5L3",
  "key13": "5LrihfaxJHSsgZoggAJiUuVTSQQ7wUmJNZKh9ysCteuHQuzPTUkDNx6SrPYm6wJbhzBTpXptzoqdyawm9opAC8nf",
  "key14": "4ssHDNZLJjdsiRBvZFC6yZnpZbzdyVg6EAteWgPtdyzaGkEjaPRYSPwNDy9HRHgTdPtZC2tch17rUkkgvEZY9f2F",
  "key15": "24KPL47rXEQ4WsXfx4QgmCqfzNrDj3kP69mQkrme3y14gz9cb83g7P1cT2Lp4MyLk2XQ7k3f7RLkV9JnCi9a5Rc3",
  "key16": "2vehWFdg8vaAJj6zF8w9M3H6gPCC8UAp3JoHxGC4NjAwWufkKPQP4Geq5Q8RVRajHzhz2e9eH5RkshbiXayPGpdr",
  "key17": "3Ea1NK7cULKbB1PrqDLJTveWMxBsHJW5rLu8noX9yrbecwVP4ocQkbGVMJMj3rVrNawozooB5HC3w3CJiM8HwGJT",
  "key18": "446Kv1EhHbtXfM1wdbnaZgJqwHqGiFHvT94zs3HBJbnQQBLe8vuq7BHgD3JhM3WNcRXcZzkB8ryt3Xesr5G3YVqY",
  "key19": "qDgoevx22XyMqjDCD3VAx6ZMrmU38grrxbwAzD8DgYbKHcuR8WshLx3MadPVh2ktAC85JTd6gvyDCRQ11AByKpS",
  "key20": "3FbBBanGWVAG1jGDSrPCtwnKJcUrPTQMv6BXp7AEkmC7hN6R3vRyMceh3Q8yFGuZTLn9To72zapkM2X9PNZNXzwX",
  "key21": "5FKPW3tCzKax6NhDUTEkMpFPHQMjFk2W3fhMp7xSL6KtQhHVA7GWrDCyv3LdH2oB4xgqt3GUL5i17FCNVtURhuPU",
  "key22": "26RUcBc5yC1rKJdPaD3HAeAsFPSXC2YhTsPWrS95AdVFbhGGRE2KvuUSv3xBrmhXj3cMTwZVYU1t5TGRnUFGuKLp",
  "key23": "4Wr3PaG5x85DjkrXBGJigWq7vY6vUthYqPKt4ZCtNsSmHmeGPGiDvYekc2rGXknY1pbSwLdskPpjtr3dgrpLeW4k",
  "key24": "4NL55sB5ZsyV8TbFhGPvpZGjoKr11LDvxnz5pS47yUza4b58QN29yB5QZNkWRqmP815XrvmHwpnLXbnwNTvSPtWU",
  "key25": "5RqvbQAnapv82wwj7dE9cQNPyj81fGmksbu7jVhhaSKxS62mKwmH4dr6uJMo9tw9F6KNgVBMsvidr1737G4tTCVF",
  "key26": "5FQyggaCmu3R2GdJH2G8mQvkpjBMkx112CgsgPTvX2z7zDfPH5WKBWV1Ab1S7vR6bZnd4VLeJZfyo6aM7Zbo6nJ6",
  "key27": "3G9ckMuTicLzRgEEZSmiQtaVTTCRWPXnQHeeJdcbp62d9rSGb4frymKue9HnuFYuo7jwArxc7nLgFiMS4A24tX7w",
  "key28": "5i47Sfe67P4XTYPUZU34YGCkFH6Awk2VBCv2Tvp2dtrQJcX1QykV4tcXGA6KyVyvqzmuYnzFMQAh9oTTvJkjYgSe",
  "key29": "5sJeA5bFk2BG5SjhHhw7fi9sZKjd7NLBhDJ4siWGX1HxNZUkXsLpXJLoYnV8uTjSXhR5FHp58QKNTfXHw4tHv4d5",
  "key30": "38ZkSNp2iqMJS9bEniAhQU5Gh8yfMt4BLdFGaXKRSnKewBVT2Y6TwqquB8VMDQGGM1reT7xoHnmmiNePo24Wxmah",
  "key31": "4RfiU4KVKzvePmgdi2VR51yhJmHeu6SJqns3dULAB6XVJBBafrxTD1XjKKNnTf7BCwewnfiRD6KkrDMyJ6oFCfEY",
  "key32": "3QBaEoDsoVfpmFDFwidvLPmFuxbRSaTPR39hDLfUsDG3eB2gwXTGrYrBLNLW6663A3kGRRytj2JrF8GrBiBYf7za",
  "key33": "4rXVwxREopNJhvKkRAz53tfiyRxZftiH2LsYkEdfMEVVxPkJYkwevU9EGvhJ3d5fEgUjjqQy6yNKfU85EYTGYj2c"
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
