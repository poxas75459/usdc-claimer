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
    "5Xwki62CthZsaHrYyigZyxMzsqRbSwKH2b3tLgq4EAHETRAYiBbEV6NbLvSUTqNqetQDzHrVJvMtRQM1vXPY8w7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oZp8AuHCz6y9vYKTz538VQQ5XGGmNgcPiAC5EcHo5PAD5AuDSTQXrBPZwFwwAd8qDa4KevWxBjLsahvZ7Tw6LYS",
  "key1": "3hAzg14tBUb4PYQToTYGtzmpRJM2eDwADKM3wMyXG8YG1RgDMkeXzN1eYvHmuCnWrvGWm7CkFNozBQuM6UjFFHUV",
  "key2": "2wTD2jtzZV1AMLoZykXsUpuwuBUGxsyZ1xMvsAPpbe2wHAFErW5vZ7AmCWAAuP3zYvQbfP9cf2DxSnKitT3asp3D",
  "key3": "3tvL9ZmhELDiS36B33c72EYaAqVERKvbEeXyRvzHZBBJPnamwcKRbdE5K3Fq3d2n1qRaRtKBUt95xhSv9MPNmSC",
  "key4": "3S5mv1nYt59dhthVkwY6ueHb3Lkk6NLxvCUhSsLArwUTCNhC9yDeKt7U59Na4bYnkqKRTDBYWuJ4uySxtyuR7XUj",
  "key5": "4wvmiQTuCpBqs42SU6HJ6d5fRxoLapv9ey8gyy2tLntQ2Z1JuA251z6cTjWpSBCjiohsaSZ9t5K6zjxKpt5JX9s4",
  "key6": "3mR3p3SLVSZEJNPB9zsX3tsWyX8rb2yyf8GDqxzN6y4GU57oU7YhEYNmiFetkpqmRFUhDPTHFhJMruaVC2QhRGBQ",
  "key7": "2JdcUfeQCA5UJDxeNGiM6DZV5SF4GbqDfwa3uTiF4q7m3HrVzYvfRqB3eSygMfPcTuSNMaxEbyjN4BHUk6zPPnTV",
  "key8": "5T83fgP8QSyMeDVc74oubiEMR3pdc8bTFqWodJHRvtg2FfQjfGiZWjPEPQ3ZDDGxY369ZPfccWWfU637PHA39UsV",
  "key9": "5VuicFsN1FaFMQm7zdqhSaMYFMcPurrZFwpKB5BP4qe9NkfKA6nwnY1ag9AFn1PMVR2iuSprbHSmzeqW5b12YtdD",
  "key10": "3rYgSnWYuYo2vUdMkZJ6eJpoXtaU8tJhCrK2riEfE6hVddttG3QwvE7ZUzBn4d4VdwXPt8kUbAHPou2JxvJeKuJ8",
  "key11": "g1JWZnvVt6HoxEWpiEEZULDnVX8ADHjY7soZ7bMsHnUyu6JYFCtf7Sb9faKUBpJ13icJGwBLoq7XeXJM8gpC2ei",
  "key12": "3GLkYHdBHmVY9Je5jBDd4om3pFLWrvXSSMY7RbiFih2DVGq6zNs2H5qBoRm4rSD7e4pozBGe7nVPptxAsJvZD6Wd",
  "key13": "4deKiFU9iN4bGbfTnmQqYY2qbzmuPuByrzrXhbtk5VKeqZxsxPsPJXdNZWjyg6zA88uWk11EFGFvAvqZMMt98zgu",
  "key14": "5AfV9wAMyBixUGbChCWynGPYcYeBGFuTLwXGGdQ2hUXpfJpQgs4KfvGqy5Kvy5jn4WA6SZu3xd26NuUMvP38fRTf",
  "key15": "3tQHALAmqXVX26yA1xG1tUNcXGFspPmowLgCS9RkmZympCumYPE3YZsKFvBD1qkz9Zb5saBCnKbtdWWnqeavQ16A",
  "key16": "4uJvNgVKxGFkXXrCSmFjtGVwVL1mZx9oeetavLf5dF2nGQ6kkyNi39omxBZN6bLvYL6jQou4VXQzYmpxAnnrTtRB",
  "key17": "61M3vTVLhA9G68pDLTfJphZiUNoTmaXaoYU2y6aCehzYDLiNTvwpapu1BPii2bNHNRMfhySAjvSvtrScpLgoCykx",
  "key18": "3iGr3qm35o773qCsVRePDKWtXdRxAnW6J1wEqJSJgQPNctW8hpwQ52Dx4BL39zHVyrFANzw5UzzyLW92fkP8eLzr",
  "key19": "3Q86EwhpMiLbAgJe7UwuJ4Ydf2W13fqFY9xfXdKdq5nnCJkpbXALK5rsLUn3nYcg9Mn53KYR2MehX9rEnVef3SaZ",
  "key20": "2zq3QoCAKrj6QZLovJuY2BQQRetqQYdUyZXjBc3rLKD243aDKGwjHqXVxMRotVe6UWqrBPkPUeRwuuzF9F3yPVu7",
  "key21": "33kixWfuNks9dbU4ycrzteyTYbUoYbrshUym77dJUARB8PgxjAHRSCJS2GzkZ2SqHDw7AvkFdoAHXpidADBVF7Zz",
  "key22": "cJXk7AJAVPrk1NMgYAhXqUAX7APNkhow7DoydHBda5wpLb66s2HAVU2WSYSPrbKoncBXeZZe73948oS6gQw45KF",
  "key23": "4o24rnZ3YRcJHAMUk31tBN95nVYggoKYaBHtwfbmLEXReZNKu6rpDSfiHhw7CguRWkogyuiA4mEMEDjufmXazxze",
  "key24": "2CqJq4XQwb9icKdTDiaYtoTanCNNrsoaAUScN6sZd3fQpPvb1dputmumK5XByfcYp4g6WpdhwxUcqiACLQsVNXDw",
  "key25": "4CpUwi4UFJQVu7yrXxqjR2fPZG2BdHZaM9ux2u7PgfJqR1j1dMXiFxcZMgdhkaG2e7t6vvQo3o4ZCmFa8bea8moj",
  "key26": "5wy6HccBiYEkCQ9DQ4kZEHgoFUAPMRjGmS63spxcNC8R4eCc5j2VsMciaxK7PJ1c1txxmjynmf8QqBwQ51f34H2X",
  "key27": "66BYQDZcasMy9Nt4kC8E65fjPzWxRQBNz4Fu4osznjD3rVu3qSRxBtsMYMAF2qDZYeDAFCqYM8kNNh4Fv5qVnixY",
  "key28": "5eYQYRzDjT2scmxTiicyNrxDJD4PA6sRXXjR9SXS2c1yLstMJERyPzqFWGfbh7BztTRasBJghjKSpm3hgQiGPupB",
  "key29": "4gcURfaZifMmjesWuYWQMZ4fZZ9gEYxrPr1zviiUJektA95GX3x9yGKazeWRCsa2jcQeT8V6FSwM52EhubiBU5iP",
  "key30": "2m67dRGkCTBuxQg5eHfTxYs2YMZkHQcv837Zykg6tddDB4fL8RPqvuCSgZgkHxyBhERCNfkvScHoLt2Pipk9X4Gd",
  "key31": "53B5MBDqQfKW3ypQxmoF7k5BGqcsXJAsxm8m2Exrj8vSd4dJRY2gTYhPn2MyXgGK33SBBwrdeCpWYP4iTRTURCfX",
  "key32": "3cBePwNFoBtrKB4rUmNHnv18zSkndViqMMavR53VbyYFnA6QhTfuFdrRWTEuAMtppFwuAGba8UhkGomwKQ4woxtK"
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
