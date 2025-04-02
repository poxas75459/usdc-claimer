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
    "omkurFnSHMde3M8GMYUa1KKDokeEPauBF8xiS19gFWgDpWP4rf6Jrn1mqyCWTDqxDoR8UGT6w4vtcuBmheVBegb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gMiKDk1v1tSE8TwVkJcpwtpDM6gCFbAPHLvEzkCKkFWzVsXE38MdHZr7MDDiSw5LwzLopPoJCCG3A5pq9a1ZB6i",
  "key1": "4NdVudN5ev4eG21rmWwJArKFtEXJ7gEXLUniDQcLiPWCB7kuRVTdNvERqX9hvh8jNCXS1UxkyBdjRK8RHCyEYFCd",
  "key2": "4F3Le1qFnfdDpqWZGuS5XRaAVwAFF8L53f8vPHWVa3HQfVjaWZ9wpDmk1aZS6Lksa9hZxaEAuSkEfJ4oNBxU77UX",
  "key3": "MN9UGetqWmdpnkafZFBDcKmjX7KJK4XTJ6aTudt9tKdCQmJE889WuBUBjF67pfpruSJXkTxNfiLFriAChu6Zo5C",
  "key4": "dYZnCkqcfXnpJ6qCK3VbWsT6yHekTwEQUHyZBk6fu7aG5TR864ttCccPVupPFLkvsmbwUhS1weRwhCnBy77MDcR",
  "key5": "JbzMUkDUajvuwuZHif8UKn3RJLuNd3evLDRUXJpffTn6enZKjsfZPfKVzYfDvh4duYGi4abr3yhaBFoYkcy6XWS",
  "key6": "Exy4GEfwiNsCwjoMyxWXtQhPrQqEYqXeRjjhr2jgpzf7PpXM43ZirfQrNbrgKNtvCuMRc38gVGYTGBrfeypyFoG",
  "key7": "4afUmxf72UbD1Po6r1CNbpUwCwJESbomiVaoKrnRmHScnsDDwCk7RhiMA8Z7yhrGT3EZg1yHZB4jrVc3awi7KGG9",
  "key8": "5CXq356QM9oQ2FjTTkghcZ16Ec1kFvuCtPmRr2usdqRnJTgP6dF2sV6QLoVEWsLASNAwYBL3r3UQJZdx8PK1Wqjr",
  "key9": "66ng4yXww4ssWiu5DA7SVR1ip6RGDDKHQUvpLBiuvxUeZ3cvqF5KFRaa9ufHcKiJkENBqNFD5jUQtERv87XBgKoj",
  "key10": "4Jiy71NXV2WQe4Ch7KvgzJg5D3s3yFX6rZxx5xvVxMckMdouUMNZam26omL9RHf9nfQZd63iJiqfbpAQHL653HMx",
  "key11": "3btPEfPTukAsYrCA5m4T9AT3iXFkB9CwtyJrS9w9dm1JzaY3dmDAR35pqtLbNGUBFsiC1hkAFBi91CWo5Ne6DZCX",
  "key12": "5mXK4dcJaHuvQkDr33BsnDJRkJ4r37qBmV7jXpRRDGAJWbURETCyD3dwVTEyVBguRDb4EmLBSAMB9iDRgBjCs85e",
  "key13": "a2Z2DEiaqi4Bxjs77ahPBbSJLMQxRMgamLbjPfgzxHyXABCtfW6mY2fkd7eBvJR4nK2feNnqZETvm2NGUd7EdGC",
  "key14": "XXnai8S14GoMF7PntavUxNTTNQmMaQKGqpzh2zGzvdrZ9oXxzmy9NRYeCpYTa4qY4e8pTZvJ9RYZLRyrXFAK971",
  "key15": "4zwJpEPzQDk7e3k8jezek4XM7aKWx4xD6d8yRVzHTg2srj6iVjeDrygiaDm1hLmcMBhUfScQny2iGZ3kFw1LurwZ",
  "key16": "5H9S19rqf7ZrVQi4psNSHMvtoB4Hfqw8dcs2vb5yc1tcukuoni6uwHntcmj8WmpBBnG4kdnVYpBVz6ah1DDJK8k7",
  "key17": "8vjNk7kYysatgjP7soYrUzxtc7yqD7TCDjxFD5KwncpNvMCB6AJvsP45vrW89TLJYxhA4FRQ7kvjsJQiFmvy1W5",
  "key18": "3YXZHCa7Fz2LkXp4rd1zWey4bn2xgFRBMpngJpiiEobcLZ3uwPbWKBL4fQqsfSLCBB5EQSEikGVzMnAFga6VvWWX",
  "key19": "46Awarv2u7arcG8A2XoKZuvfRu8K2DGxcPj3ZVjD5fZSMq6bLCQoAXywfBPuB8815aKehcYYcsn5a5h4jwiyXdkB",
  "key20": "3qKiVTaUEtgiQi7LVzXzu3bXNyoMrTHppAequ3oCrcZyEp5CXaMGgbsu1r5qxueMMyUeoLKWcCydh8eNmgJvKCWD",
  "key21": "5rPJ7UGQor1UQFY8VHcHa9wXb9NC4zVH5bCMzTSEiHTNKN9ejw82oM7XHbE29j1De825Z2wjUWg62eZuE3xABQjv",
  "key22": "5tKtwbe9q1m3NRFVGJ261kVbrNkKneEE9o55tMBo9xTGxdQPe4VviEKQcyurytAN6hqr1xt6Lxg6m1854GKpxiEV",
  "key23": "4fR48S4JAKGVJkjXsTKLUbpPHd8AVJB2kgYHkWAvtTqec2yiWtDRYV6tA45jZ3uPFKQ26HivuvePu6uMearJWVq",
  "key24": "4nZgrokj3J729cwutTegVjG6obMTXPCbzsgYHex8AADm9nevao14q1wZFCdGtzzEo7HdhqF98wTMgg1qy87hj5vS",
  "key25": "659xfnZM69RVfVTyaitAQLzN1puyUxecXLSsxUdQJLfgTfoH77MGUJL4pqXHEQ7GR8oNnT5R6GsNVJvz8zTbPN3g",
  "key26": "3jadTjTByvjNTSDqMXQajW5DXHQGXT6rf9FEzWkJ29CJyQCx7WpgQoqyS3cXPnNdGnokonMTRiwsBEgNd6xukowm",
  "key27": "21PKu7c886EPM4qLEqEDer826p7FE4pLfoEFiJKcHweUq3v8Ph9uufWoQEwpu3R3WEMZfcLvYPz6zhKxV6Gn36hT",
  "key28": "4rwwcKrAghJnM5MhoutLEZZc4rNQpXPNeayrYXzfvJQ5mLppzsCY2TTvDkuXRCQ7TBx3waFawfFD1PXbzQGmB7D4",
  "key29": "4NDwHJX8nNbbirdwtCji6p36yCrJqkyPkdrPaFgkcBiigRrUTnm66gHxdytxJBZysBbZfAo8diBbjrB7vLbGR2gD",
  "key30": "4PYH4tAvi56ucdewMLfPwSdu7Wk8gBNwym5v7qAV7PjYrrfCZKDbzYK2ppJWD7F6UfH8mnZPQc3DwB3o18NEVVh5",
  "key31": "5gX9fzA3PtSSciXTtoSxKy3cQQH7pEjLnk7tyEKSC5L6iAA3gFZgNSeShc8tH6ZvYKG18UcyAK8RYujc3uGtVapX",
  "key32": "4eB6AMs84ba3iziMkVFaYs9enwBR8rBriQWMQQ99xiSTb5jMTTay2LoJq6yY97aSiC3BdeHzxHS14APHnAhP1mQq",
  "key33": "48MACewcVGTKmMvLuYDfYRvEZ9gZaRkUrKwmJJCzPGkjZJAxyJ6MLB7oDzQrFUgYFHchf5d16YazDSWpbouJ2aJC",
  "key34": "5QM1vEL1BVtt4u87ACtB7WDconbKSaRSg8ahYQYkdorrLrQSc8ReNCp3KgcfEQUuuWEmJ2jpjZu8RSuAfCAQgqg9",
  "key35": "PRiGyxTbJYbG1sZj3RWrfHGR2CvHf6UdkGTjt42b9u6XsYSSxMUBa5KsWYr72aM66Y4F4Uw87ZvJnbyhaRiMjKC",
  "key36": "3kq3AiTqaZRE391BJrnFmha87xUsH7S83sWmRmepqha7xsDsSBB6AL9ZDY7A3jhsNMQvRSWwNQaKvpFHnQhzeXCx",
  "key37": "5GA2M48LN38snh7YnDYsvtFzkjHE7wVPeLAsj5L6iFquPoynrMfsZUqncPBq3oNUNL1USm3N5zr8NDv7kaFLb2kr",
  "key38": "45u1TgFp3bGguuf13JZo9gFtdqVjb5RP5BcGkzJD7bi9a3rKTHjMDXNerzQftGhhjSJ4V27iyem7ppXQQescg58m",
  "key39": "5CaPXSP9VXauFuJo93tW5JG7nKE7A4djtXfGBjKktLLaJRpGrZFQLuJHQjXbCwwbBbtRLKui4nAE8WRVdz7xbLwQ",
  "key40": "5SMv3hiHLPmkSKDbm3GEfaGrTGiZ1RA6CTyfbHXpQ7MyYkqj1G8CQQSs7yVFTe1yNwgEaVZSMPxgWFgnPLEsDneG",
  "key41": "4JgcZLWRwR8zoVeB9BpTM8zkkAQmNLpVsPL4Q3EKDYpRrfcdwkKVyYT8ke9FfVNZ3uovvnANmpd7FhLCohLvTbM1",
  "key42": "pqJYDcfMVC9xpLCvkipFji9H79Y2CgtZucj5nKXsRv1a63sYM2wZj1xuNPsW8Lw1mhJwF2DXDDyXyqeYnbEBjwG",
  "key43": "3GWztp8ULoRTUK284S38u9TdMaEgfbXXSXuCuJkohzc3zTiFEEUN4sQ1ERzp5WuzisigF4dfQCy7RXPnBSpyHx5a",
  "key44": "6WiJ3NH4hvJkjAxXh9ikBXmtANbQwY51RuDQeASJdsGBmssVsyApYzkTQmXPHnB8AoooiLtoS8eCdkRiUve5cCL"
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
